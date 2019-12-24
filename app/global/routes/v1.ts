import { Request, Response, Router } from "express"
import { readdir } from "fs";
import * as path from "path";
import FileNotFoundException from "../../global/exceptions/FileNotFoundException";

class BaseRoutes {

    public _route: any

    constructor() {
        this._route = Router()
        this.initializeBaseRoutes()
    }

    private initializeBaseRoutes() {
        this._route.get("/", (req: Request, res: Response) => {
            res.send("welcome to sandbox API")
        });

        // init all api routes without manuall including
        readdir(path.resolve(__dirname, "../modules"), (err, items) => {

            if (err) {
                throw new FileNotFoundException("Folder doesn't exist");
            }

            items.forEach(item => {
                
                /**
                 * Fetch all component routes from component folder within routes folder 
                 * 
                 */
                const pathDir: string = path.resolve(__dirname, `../components/${item}/routes/api.routes`);

                /**
                 * Dynamically import all routes
                 * https://v8.dev/features/dynamic-import
                 */
                import(pathDir).then(ComponentRoute => {
                    this._route.use(`/${item}`, new ComponentRoute.default().route)
                })
                .catch(err => {
                    console.error("Can't find route file %s", err.toString())
                });
            })
        });
    }

    get route() {
        return this._route;
    }
}

export default BaseRoutes

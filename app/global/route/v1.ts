import { Request, Response, Router } from "express"
import { readdir } from "fs";
import * as path from "path";
import FileNotFoundException from "../exception/FileNotFoundException";

class BaseRoutes {

    public _route: any
    public MODULE_PATH = '../../modules'

    constructor() {
        this._route = Router()
        this.initializeBaseRoutes()
    }

    private initializeBaseRoutes() {

        // init all api routes without manuall including
        readdir(path.resolve(__dirname, this.MODULE_PATH), (err, items) => {

            if (err) {
                throw new FileNotFoundException("Folder doesn't exist");
            }

            items.forEach(item => {
                
                /**
                 * Fetch all component routes from component folder within routes folder 
                 * 
                 */
                const pathDir: string = path.resolve(__dirname, `${this.MODULE_PATH}/${item}/route/api.routes`);

                /**
                 * Dynamically import all routes
                 * https://v8.dev/features/dynamic-import
                 */
                import(pathDir).then(ModuleRoute => {
                    this._route.use(`/${item}`, new ModuleRoute.default().route)
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

import { readdir } from "fs";
import * as path from "path";
import FileNotFoundException from "../exception/FileNotFoundException";

const MODULE_PATH = '../../modules'

export default function(fastify: any, opts: any, done: any) {
    // init all api routes without manuall including
    readdir(path.resolve(__dirname, MODULE_PATH), (err, items) => {

        if (err) {
            throw new FileNotFoundException("Folder doesn't exist");
        }

        items.forEach(item => {
            
            /**
             * Fetch all component routes from component folder within routes folder 
             * 
             */
            const pathDir: string = path.resolve(__dirname, `${MODULE_PATH}/${item}/route/api.routes`);

            /**
             * Dynamically import all routes
             * https://v8.dev/features/dynamic-import
             */
            import(pathDir).then(ModuleRoute => {
                fastify.register(ModuleRoute.default, { prefix: `/${item}` })
            })
            .catch(err => {
                console.error("Can't find route file %s", err.toString())
            })
            .finally(() => {
                done()
            }) 
        })
    });
}
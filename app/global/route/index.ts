import { readdir } from "fs";
import * as path from "path";
import FileNotFoundException from "../exception/FileNotFoundException";

const MODULE_PATH = path.resolve(__dirname, "../../components");

export default function(fastify: any, opts: any, done: any) {
    // init all api routes without manuall including
    readdir(path.resolve(__dirname, MODULE_PATH), (err, items) => {

        if (err) {
            throw new FileNotFoundException("Component Folder doesn't exist");
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
            import(pathDir).then(moduleRoutes => {
                const prefix = !!moduleRoutes.default.prefix ? `/${moduleRoutes.default.prefix}` : `/${item}`;
                fastify.register(moduleRoutes.default.routes, { prefix })
            })
            .catch(err => {
                console.warn("Can't find route file %s", err.toString())
            })
            .finally(() => {
                done()
            })
        })
    });
}
import HttpException from "../../../global/exception/HttpException"
import DatabaseController from "../controller/database.controller"

function userRoutes(fastify: any, opts: any, done: any) {
    
    fastify.get("/", DatabaseController.index)
    fastify.get("/all", DatabaseController.users)

    done();
}


export default {
    routes: userRoutes
}
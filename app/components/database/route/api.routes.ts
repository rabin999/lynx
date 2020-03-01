import HttpException from "../../../global/exception/HttpException"
import DatabaseController from "../controller/database.controller"

export default function(fastify: any, opts: any, done: any) {
    
    fastify.get("/", new DatabaseController().index)
    fastify.get("/users", new DatabaseController().users)

    done()
}
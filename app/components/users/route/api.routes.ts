import DatabaseController from "../controller/user.controller"

function userRoutes(fastify: any, opts: any, done: any) {

    fastify.get("/", DatabaseController.index)
    fastify.get("/all", DatabaseController.users)

    done();
}

export default {
    routes: userRoutes
}

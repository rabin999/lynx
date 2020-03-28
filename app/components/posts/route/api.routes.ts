import DashboardController from "../controller/dashboard.controller"
import HttpException from "../../../global/exception/HttpException"
import { LynxRequest, LynxResponse } from "../../../global/service/route/types"

function routes(fastify: any, opts: any, done: any) {
    // this._route.get("/", RoleMiddleware(["admin"]), new DashboardController().index)
    fastify.get("/", {
        onRequest: function (request: LynxRequest, reply: LynxResponse, done: any) {
            const authorized = true
            if (authorized) {
                request.log.info("This hook will always be executed after the shared `onRequest` hooks")
                done()
            } else {
                const errs = new HttpException({
                    title: "NOT_FOUND",
                    statusCode: 422,
                    description: "User is not authorized"
                })
                reply.code(422).send(errs.parse())
            }
        }
    }, new DashboardController().index)

    fastify.post("/create", new DashboardController().create)
    fastify.delete("/:id/delete", new DashboardController().delete)

    done()
}

export default routes

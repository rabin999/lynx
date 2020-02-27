import { LynxRequest, LynxResponse } from "../service/route/types";

export default function(fastify: any, opts: any, done: any) {
    fastify.get("/health", function (request: LynxRequest, response: LynxResponse) {
        response.code(200).send({
            status: "UP"
        })
    })

    done()
}
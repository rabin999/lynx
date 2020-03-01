import { LynxRequest, LynxResponse } from "../service/route/types"

export default function(fastify: any, opts: any, next: any) {
    fastify.get('*', async (request: LynxRequest, response: LynxResponse) => {
        response
            .code(200)
            .header('Content-Type', 'text/html; charset=utf-8')
            .send(`<h2>Application is under maintenance mode, try after ${(new Date()).toDateString()}</h2>`)
    })
    next()
}
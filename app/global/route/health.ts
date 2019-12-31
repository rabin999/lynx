import { FastifyRequest, FastifyReply } from "fastify"
import http2 from "http2"

export default function(fastify: any, opts: any, done: any) {
    fastify.get("/health", function (request: FastifyRequest<http2.Http2ServerRequest>, response: FastifyReply<http2.Http2ServerResponse>) {
        response.code(200).send({
            status: "UP"
        })
    })

    done()
}
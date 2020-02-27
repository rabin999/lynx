import fs from "fs"
import path from "path"
import * as http2 from "http2"
import fastify, { FastifyRequest, FastifyReply } from "fastify"

// Global Routes
import Routes from "./global/route/v1"
import healthRoute from "./global/route/health"

const app = fastify({
    http2: true,
    https: {
        allowHTTP1: true,   // fallback support for HTTP1
        key: fs.readFileSync(path.join(__dirname, "..", "ssl_certificate", "localhost-privkey.pem")),
        cert: fs.readFileSync(path.join(__dirname, "..", "ssl_certificate", "localhost-cert.pem"))
    }
})

// fastify.use(fastifyHelmet)
/**
 * Routes
 */
function initializeRoutes() {
    // app.get('/', (request: FastifyRequest<http2.Http2ServerRequest>, response: FastifyReply<http2.Http2ServerResponse>) => {
    //     response.code(200).send({ status: "UP" })
    // })
    // /api/health
    app.register(healthRoute)
    app.register(Routes, { prefix: "/v1" })
}

initializeRoutes()

export default app

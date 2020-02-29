import fs from "fs"
import path from "path"
import fastify from "fastify"
import fastify_rate_limit from "fastify-rate-limit"
import { LynxRequest, LynxResponse } from "./global/service/route/types";

// Global Routes
import Routes from "./global/route/v1"
import healthRoute from "./global/route/health"

const app = fastify({
    http2: true,
    https: {
        allowHTTP1: true,   // fallback support for HTTP1
        key: fs.readFileSync(path.join(__dirname, "..", "ssl_certificate", "localhost-privkey.pem")),
        cert: fs.readFileSync(path.join(__dirname, "..", "ssl_certificate", "localhost-cert.pem"))
    },
    logger: true
})

// Initalize Rate Limiting Middleware
app.register(fastify_rate_limit, {
    max: 100,
    timeWindow: '1 minute'
})

/**
 * Routes
 */
function initializeRoutes() {
    app.get('/', (request: LynxRequest, response: LynxResponse) => {
        response.code(200).send({ status: "UP" })
    })
    app.register(healthRoute)
    app.register(Routes, { prefix: "/v1" })
}

initializeRoutes()

export default app

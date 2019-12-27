import express from "express"
import * as http2 from 'http2'
import fastify, { FastifyRequest, FastifyReply } from "fastify"
import lusca from "lusca"
import cors from "cors"
import config from "./config"
import Routes from "./global/route/v1"
import errorMiddleware from "./global/middleware/error.middleware"
import fs from 'fs'
import path from 'path'

const app: express.Application = express()
let routes: any = new Routes().route;
const fastifyApp = fastify({
    logger: true,
    http2: true,
    https: {
        allowHTTP1: true,   // fallback support for HTTP1
        key: fs.readFileSync(path.join(__dirname, '..', 'ssl_certificate', 'localhost-privkey.pem')),
        cert: fs.readFileSync(path.join(__dirname, '..', 'ssl_certificate', 'localhost-cert.pem'))
    }
})

 /**
 * Security headers
 * 
 * Use fastify helmet
 */

// Declare a route
fastifyApp.get('/health', (request: FastifyRequest<http2.Http2ServerRequest>, response: FastifyReply<http2.Http2ServerResponse>) => {
    response.code(200).send(config)
})

// Run the server!
fastifyApp.listen(3030, function (err, address) {
    if (err) {
        fastifyApp.log.error(err)
        process.exit(1)
    }
    fastifyApp.log.info(`server listening on ${address}`)
})

/**
 * Express configuration
 */
function initializeMiddlewares() {
    /**
     * Security headers
     * 
     */
    app.use(lusca.xframe("SAMEORIGIN"))
    app.use(lusca.xssProtection(true))
    app.use(lusca.nosniff())
    app.use(lusca.csp({
        policy: {
            'default-src': config.csp_src ? `'self' ${config.csp_src}` : '*',
            'img-src': "*",
            'style-src': '*'
        }
    }))
    app.use(lusca.referrerPolicy('same-origin'))
    app.use(lusca.hsts({
        maxAge: 31536000,
        includeSubDomains: true
    }))
    app.disable('x-powered-by')
    app.use(cors({
        origin: config.cors_origin
    }))
}

function initializeErrorHandling() {
    app.use(errorMiddleware)
}

/**
 * Routes
 */
function initializeRoutes() {
    app.get('/health', (request: express.Request, response: express.Response) => response.status(200).json(config))
    app.use("/api/v1", routes)
}

initializeMiddlewares()
initializeErrorHandling()
initializeRoutes()

export default app

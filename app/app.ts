import fs from 'fs'
import path from 'path'
import * as http2 from 'http2'

import fastify, { FastifyRequest, FastifyReply } from 'fastify'
import Routes from './global/route/v1'

// Global Routes
import healthRoute from "./global/route/health"

const app = fastify({
    // logger: true,
    http2: true,
    https: {
        allowHTTP1: true,   // fallback support for HTTP1
        key: fs.readFileSync(path.join(__dirname, '..', 'ssl_certificate', 'localhost-privkey.pem')),
        cert: fs.readFileSync(path.join(__dirname, '..', 'ssl_certificate', 'localhost-cert.pem'))
    }
})

/**
 * Routes
 */
function initializeRoutes() {
    app.get('/', (request: FastifyRequest<http2.Http2ServerRequest>, response: FastifyReply<http2.Http2ServerResponse>) => {
        response.code(200).send({ status: "UP" })
    })

    // app.addHook('onSend', (request, reply, payload, done) => {
    //     reply.header('header', 'value')
    //     done()
    // })

    app.register(healthRoute)
    // maintainence end point for different version api

    app.register(Routes, { prefix: '/v1' })
}

initializeRoutes()

export default app

import express from "express"
import * as http2 from 'http2'
import fastify, { FastifyRequest, FastifyReply } from "fastify"
import config from "./config"
import Routes from "./global/route/v1"
import fs from 'fs'
import path from 'path'

const app: express.Application = express()
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
const isAuthorized = (): boolean => {
    return true
}

/* 
    Critical for application but it will take twice heap size than it defines at V8
*/
fastifyApp.get('/ops/heapdump', (request: FastifyRequest<http2.Http2ServerRequest>, response: FastifyReply<http2.Http2ServerResponse>) => {
    if (!isAuthorized()) {
        response.code(403).send('You are not authorized!');
    }
    const heapdump = require('heapdump')
    heapdump.writeSnapshot((err: any, filename: any) => {});
    response.send('completed')
});


fastifyApp.listen(4000, function (err, address) {
    if (err) {
        fastifyApp.log.error(err)
        process.exit(1)
    }
    fastifyApp.log.info(`server listening on ${address}`)
})

/**
 * Routes
 */
function initializeRoutes() {
    fastifyApp.get('/', (request: FastifyRequest<http2.Http2ServerRequest>, response: FastifyReply<http2.Http2ServerResponse>) => {
      response.code(200).send(config)
    })

    fastifyApp.register(Routes, { prefix: '/v1' })
}

initializeRoutes()

export default app

import express from "express"
import compression from "compression"
import bodyParser from "body-parser"
import lusca from "lusca"
import cors from "cors"
import config from "./config"
import Routes from "./global/route/v1"
import errorMiddleware from "./global/middleware/error.middleware"

const app: express.Application = express()
let routes:any = new Routes().route;

/**
 * Express configuration
 */
function initializeMiddlewares() {
    app.use(compression())
    // * express body parser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

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

function initializeErrorHandling()
{
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

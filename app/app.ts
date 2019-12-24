import express from "express"
import expressValidator from "express-validator"
import compression from "compression"
import bodyParser from "body-parser"
import lusca from "lusca"
import cors from "cors"
import config from "./config"
import Routes from "./global/routes/v1"
import errorMiddleware from "./global/middleware/error.middleware"

class App {

    public app: express.Application
    public routes: any

    constructor ()
    {
        this.app = express()
        this.routes = new Routes().route

        this.initializeMiddlewares()
        this.initializeErrorHandling()
        this.initializeRoutes()
    }

    /**
     * Express configuration
     */
    private initializeMiddlewares()
    {
        this.app.use(compression())
        // * express body parser
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(expressValidator())

       /**
         * Security headers
         * 
         */
        this.app.use(lusca.xframe("SAMEORIGIN"))
        this.app.use(lusca.xssProtection(true))
        this.app.use(lusca.nosniff())
        this.app.use(lusca.csp({
            policy: {
                'default-src': config.csp_src ? `'self' ${config.csp_src}` : '*',
                'img-src': "*",
                'style-src': '*'
            }
        }))
        this.app.use(lusca.referrerPolicy('same-origin'))
        this.app.use(lusca.hsts({
            maxAge: 31536000,
            includeSubDomains: true
        }))
        this.app.disable('x-powered-by')
        this.app.use(cors({
            origin: config.cors_origin
        }))
    }

    private initializeErrorHandling()
    {
        this.app.use(errorMiddleware)
    }

    /**
     * Routes
     */
    private initializeRoutes()
    {
        this.app.use("/api/v1", this.routes)
    }
}

export default App

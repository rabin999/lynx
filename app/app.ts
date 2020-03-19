import fs from "fs"
import path from "path"
import fastify from "fastify"
import fastify_rate_limit from "fastify-rate-limit"
import { LynxRequest, LynxResponse } from "./global/service/route/types";

// Bootstraping Global NameSpace for NodeJS
declare global {
    namespace NodeJS {
        interface Global {
            [key: string]: string
        }
    }
}
global.root_path = path.resolve(__dirname);

// App Configuration file
import config from "./config";

// Global Routes
import Routes from "./global/route/v1"
import healthRoute from "./global/route/health"

// Inialize App
const app = fastify({
    http2: true,
    https: {
        allowHTTP1: true,   // fallback support for HTTP1
        key: fs.readFileSync(path.join(__dirname, "..", "ssl_certificate", "localhost-privkey.pem")),
        cert: fs.readFileSync(path.join(__dirname, "..", "ssl_certificate", "localhost-cert.pem"))
    },
    logger: false
});

// Initalize Rate Limiting Middleware
app.register(fastify_rate_limit, {
    max: 100000,
    timeWindow: "1 minute"
});

/**
 * Routes
 */
function initializeRoutes() {
    app.get("/", async (request: LynxRequest, response: LynxResponse) => {
        response.code(200).send({ status: "UP" })
    });
    app.register(healthRoute);
    app.register(Routes, { prefix: "/v1" });
    app.register(Routes, { prefix: "/v2" })
}

// Global Maintenance Mode
if (!config.app.maintenance) {
    initializeRoutes()
} else {
    app.get("*", async (request: LynxRequest, response: LynxResponse) => {
        response
            .code(200)
            .header("Content-Type", "text/html; charset=utf-8")
            .send(`<h2>Application is under maintenance mode, try after ${(new Date()).toDateString()}</h2>`)
    })
}


export default app

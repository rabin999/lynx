import dotenv from "dotenv"
import path from "path"

/**
 * DOTENV configutation
 */
dotenv.config({ path: path.resolve(".env") })

export default {

    // APPLICATION HOST
    app_host : process.env.HOST || "<your domain>",

    // APPLICATION NAME
    app_name: process.env.APP_NAME || "App Name",

    // PORT
    port: process.env.PORT || 3000,

    // DATE AND TIME
    timezone: 'Asia/Kathmandu',
    tokenExipiresAt: '12',

    /**
     * ENVIRONMENT
     * -----------
     *
     * development -    help to debug and maintain
     * production -     for deployment
     */
    env : process.env.ENV || "development",
    
    cors_origin : process.env.CORS_ORIGIN || "https://yourdomain.com",
    csp_src: process.env.CSP_SRC || "https://*.yourdomain.com",
}

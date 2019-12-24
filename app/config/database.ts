import dotenv from "dotenv"
import path from "path"

/**
 * DOTENV configutation
 */
dotenv.config({ path: path.resolve(".env") })

export default {
    production: {
        name:  process.env.DATABASE_NAME || "database",
        host: process.env.DATABASE_HOST || "localhost",
        port: process.env.DATABASE_PORT || 27017,
        usename: process.env.DATABASE_USER || "",
        password: process.env.DATABASE_NAME || "",
    },
    staging: {
        name:  process.env.DATABASE_NAME || "database",
        host: process.env.DATABASE_HOST || "localhost",
        port: process.env.DATABASE_PORT || 27017,
        usename: process.env.DATABASE_USER || "",
        password: process.env.DATABASE_NAME || "",
    },
    development: {
        name:  process.env.DATABASE_NAME || "database",
        host: process.env.DATABASE_HOST || "localhost",
        port: process.env.DATABASE_PORT || 27017,
        usename: process.env.DATABASE_USER || "",
        password: process.env.DATABASE_NAME || "",
    }
}

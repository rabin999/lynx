import dotenv from "dotenv"
import path from "path"

/**
 * DOTENV configutation
 */
dotenv.config({ path: path.resolve(".env") })

export default {
    production: {
        gmail: {
            provider: "Gmail",
            username: "<username>",
            password: "<password>",
        }
    },
    staging: {
        gmail: {
            provider: "Gmail",
            username: "<username>",
            password: "<password>",
        }
    },
    development: {
        gmail: {
            provider: "Gmail",
            username: "<username>",
            password: "<password>",
        }
    }
}

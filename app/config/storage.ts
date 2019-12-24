import dotenv from "dotenv"
import path from "path"

/**
 * DOTENV configutation
 */
dotenv.config({ path: path.resolve(".env") })

export default {
    production: {
        upload: {
            dashboard: {
                dest: "uploads/dashboards",
                // MB
                uploadSize: 1
            }
        }
    },
    staging: {
        upload: {
            dashboard: {
                dest: "uploads/dashboards",
                // MB
                uploadSize: 1
            }
        }
    },
    development: {
        upload: {
            dashboard: {
                dest: "uploads/dashboards",
                // MB
                uploadSize: 1
            }
        }
    }
}

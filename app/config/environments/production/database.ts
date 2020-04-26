import { MongoDBConfigInterface } from "../../interface/database"

const database: MongoDBConfigInterface = {
    url: process.env.DB_URL,
    name: process.env.DB_NAME,
    debug: true
}

export default database

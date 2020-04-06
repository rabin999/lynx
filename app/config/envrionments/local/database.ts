import { MongoDBConfigInterface } from "../../interface/database"

const database: MongoDBConfigInterface = {
    url: process.env.DB_URL,
    debug: false,
    name: process.env.DB_NAME
}

export default database

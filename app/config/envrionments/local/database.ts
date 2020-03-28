import DatabaseConfigInterface from "../../interface/database"

const database: DatabaseConfigInterface = {
    host: "localhost",
    port: 3306,
    user: "employee",
    password: "password@1",
    database: "employees",
    debug: true
}

export default database
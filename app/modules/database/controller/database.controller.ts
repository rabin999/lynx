import DatabaseConnection from "../../../global/service/database/connection"

class DatabaseController {
    index(req: any, res: any) {
        res.send("Database part")
    }

    async users(req: any, res: any) {
        const [rows, _] = await DatabaseConnection.query("SELECT * FROM `employees` Limit 30")
        res.send(rows)
    }
}

export default DatabaseController

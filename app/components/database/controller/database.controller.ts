import DatabaseConnection from "../../../global/service/database/connection"
import { LynxRequest, LynxResponse } from "../../../global/service/route/types";

class DatabaseController {
    index(request: LynxRequest, response: LynxResponse) {
        response.send("Database part")
    }

    async users(request: LynxRequest, response: LynxResponse) {
        const [rows, _] = await DatabaseConnection.query("SELECT * FROM `employees` Limit 30")
        response.send(rows)
    }
}

export default DatabaseController

import DatabaseConnection from "../../../global/service/database/connection"

class DatabaseController {
    index(req: any, res: any) {
        res.send("Database part")
    }

    users(req: any, res: any) {
        DatabaseConnection.query(
            'SELECT * FROM `employees` limit 30',
            function (err: any, results: any, fields: any) {
                if(err) {
                    res.code(500).send(err)
                } else {
                    res.send(results)
                }
            }
        );
    }
}

export default DatabaseController

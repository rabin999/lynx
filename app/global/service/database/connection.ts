import config from "../../../config"
const mysql = require("mysql2/promise")

/*
    ----------
      MySQL
    ----------
    max connections limit = 151 (Default)
*/
const connectionPool = mysql.createPool({
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0,
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
});

if (config.database.debug) {
    connectionPool.on("acquire", function (connection: any) {
        console.log("Connection %d acquired", connection.threadId);
    });

    connectionPool.on("release", function (connection: any) {
        console.log("Connection %d released", connection.threadId);
    });
}


export default connectionPool
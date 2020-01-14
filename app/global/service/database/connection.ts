import config from "../../../config"
const mysql = require("mysql2")

/* 
    ----------
      MySQL
    ----------
    max connections limit = 151 (Default)
*/
const connectionPool = mysql.createPool({
    connectionLimit: 145,
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
});

if (config.database.debug) {
    connectionPool.on('acquire', function (connection:any) {
        console.log('Connection %d acquired', connection.threadId);
    });
}


export default connectionPool
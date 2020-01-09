import app from "../../app"
import config from "../../config"

function runServerOnCLuster(): void {
    const cluster = require('cluster');
    const os = require('os');
    const numCPUs = os.cpus().length

    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);
    
        // Fork workers.
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
    
        cluster.on('exit', (worker:any, code:any, signal:any) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {
        // Workers can share any TCP connection
        // In this case it is an HTTP server
        startServer()
    
        console.log(`Worker ${process.pid} started`);
    }
}


function startServer(): void {    
    app.listen(config.app.port, (err, address) => {
        console.log(
            "App is running on %s:%d in %s mode",
            'localhost',
            config.app.port,
            process.env.APP_ENVIRONMENT
        )

        if (err) {
            app.log.error(err)
            process.exit(1)
        }
        
        console.log("Press CTRL-C to stop\n")
    })
}

// runServerOnCLuster()
startServer()


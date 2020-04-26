import "module-alias/register";
import app from "../../app"
import config from "../../config"
import cluster from "cluster";
import os from "os";

function runServerOnCluster(): void {
    const numCPUs = os.cpus().length

    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);

        // Fork workers.
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        const line = "=".repeat(30)
        const consoleMessage = "Application is running under cluster mode"
        console.log(`%s\n %s\n%s\n`, line, consoleMessage, line)

        cluster.on("exit", (worker: any, code: any, signal: any) => {
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
            "App is running on %s:%d in %s environment",
            "localhost",
            config.app.port,
            process.env.NODE_ENV
        )

        if (err) {
            app.log.error(err)
            process.exit(1)
        }

        console.log("Press CTRL-C to stop\n")
    })
}

if (config.app.enableCluster) {
    runServerOnCluster()
} else {
    startServer()
}



import app from "../../app"
import config from "../../config"

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

startServer()


import App from "../../app/app"
import config from "../../app/config"

class Server {

    public app : any

    constructor ()
    {
        this.app = new App().app
        this.listen()
    }

    /**
     * Start Express server
     */
    private listen(): void
    {
        const server = this.app.listen(config.port, () => {
            console.log(
                "App is running at %s:%d in %s mode",
                config.app_host,
                config.port,
                config.env
            )
            console.log("Press CTRL-C to stop\n")
        })
    }
}

new Server()



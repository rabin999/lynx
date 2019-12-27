import app from "../../app"

function startServer(): void {
    app.listen(8080, () => {
        console.log(
            "App is running at %s:%d in %s mode",
            'localhost',
            8080,
            process.env.APP_ENVIRONMENT
        )
        console.log("Press CTRL-C to stop\n")
    })
}

startServer()


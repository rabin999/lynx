import AppConfigInterface from "../../interface/app"

const app: AppConfigInterface = {
    host: "localhost",
    protocol: "http2",
    port: 8000,
    debug: false,
    maintenance: false,
    enableCluster: true
}


export default app
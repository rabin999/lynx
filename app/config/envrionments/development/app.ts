import AppConfigInterface from '../../interface/app'

export default <AppConfigInterface> {
    protocol: 'http1',
    host: "localhost",
    port: 8080,
    debug: false,
    ssl: false,
    maintenance: false,
    enableCluster: false
}

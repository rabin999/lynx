import AppConfigInterface from '../../interface/app'

export default <AppConfigInterface> {
    host: "localhost",
    port: 8080,
    protocol: 'http2',
    debug: false,
    maintenance: false,
    enableCluster: true
}

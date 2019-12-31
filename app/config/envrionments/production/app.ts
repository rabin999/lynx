import AppConfigInterface from '../../interface/app'

export default <AppConfigInterface> {
    host: "",
    port: 443,
    debug: false,
    protocol: 'http2',
    ssl: true,
    maintenance: false,
    enableCluster: false
}

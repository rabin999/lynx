export default interface AppConfigInterface {
    host: string;
    port: number;
    debug: boolean;
    allowed_hosts?: string[] | number[]
    maintenance: boolean;
    enableCluster: boolean;
}
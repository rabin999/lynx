export default interface AppConfigInterface {
    url: string;
    port: number;
    debug: boolean;
    allowed_hosts?: string[] | number[]
    protocol: string;
    ssl: boolean;
}
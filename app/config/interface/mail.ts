export default interface MailConfigInterface {
    host: string;
    port: number;
    username: string;
    password: string;
    use_ssl?: boolean;
    ssl_certfile?: string;
    ssl_keyfile?: string;
    timeout: number
}
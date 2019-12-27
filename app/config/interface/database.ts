export default interface DatabaseConfigInterface {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
    engine: string;
    pool?: {
        min: number;
        max: number;
    };
}
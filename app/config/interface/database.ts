interface DatabaseConfigInterface {
    user?: string;
    password?: string;
    name?: string;
    debug: boolean;
    pool?: {
        min?: number;
        max?: number;
    };
}

export interface MySQLConfigInterface extends DatabaseConfigInterface {
    host: string;
    port: number;
    engine?: string;
}


export interface MongoDBConfigInterface extends DatabaseConfigInterface {
    url: string;
}
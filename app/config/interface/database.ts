interface DatabaseConfigInterface {
    readonly user?: string;
    readonly password?: string;
    readonly name?: string;
    readonly port?: number;
    debug: boolean;
    readonly pool?: {
        min?: number;
        max?: number;
    };
}

export interface MySQLConfigInterface extends DatabaseConfigInterface {
    readonly host: string;
    readonly port: number;
    readonly engine?: string;
}


export interface MongoDBConfigInterface extends DatabaseConfigInterface {
    readonly url: string;
}

import connection from "./connection"

interface AllOptions { 
    limit: { 
        offset: number, to: number 
    } 
}

class Model {
    protected table:string = null;
    private query: string = null;

    all(options: AllOptions) {
        this.query = `SELECT * FROM ${this.table} limit ${options.limit.offset}, ${options.limit.to}`;
        return connection.query(this.query);
    }
}

export default Model;
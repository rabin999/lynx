export interface HttpExceptionInterface {
    parse() : any
}

export interface ParamsInterface {
    status: number,
    title?: string,
    message: any
}
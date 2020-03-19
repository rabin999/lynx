export interface HttpExceptionInterface {
    parse(): any
}

export interface ParamsInterface {
    title: string,
    statusCode: number,
    description: string,
    isOperational?: boolean
}

export interface HttpExceptionInterface {
    parse(): any
}

export interface HTTPExceptionParamsInterface {
    title: string,
    statusCode: number,
    description: string,
    isOperational?: boolean
}

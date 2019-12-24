import ExceptionParser from "../services/parser/ExceptionParser"
import { HttpExceptionInterface, ParamsInterface } from "../interfaces/HttpException.interface"

class HttpException extends Error implements HttpExceptionInterface {

    public params: any
    public options: any

    /**
     * @param  {object} params
     * @param  {object={}} options
     */
    constructor(params: ParamsInterface, options: any = {}) {
        super(params.message)
        this.params = params
        this.options = options
    }

    // return type should be array
    public parse() {
        return new ExceptionParser(this.params).parse()
    }
}

// // centralized error object that derives from Node’s Error
// export class AppError extends Error {
//     public readonly name: string;
//     public readonly httpCode: HttpCode;
//     public readonly isOperational: boolean;

//     constructor(name: string, httpCode: HttpCode, description: string, isOperational: boolean) {
//         super(description);

//         Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

//         this.name = name;
//         this.httpCode = httpCode;
//         this.isOperational = isOperational;

//         Error.captureStackTrace(this);
//     }
// }

// // client throwing an exception
// if (user == null)
//     throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'further explanation', true)

export default HttpException


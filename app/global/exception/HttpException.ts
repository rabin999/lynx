import ExceptionParser from "../service/parser/ExceptionParser"
import { HttpExceptionInterface, ParamsInterface } from "../interface/HttpException.interface"

class HttpException extends Error implements HttpExceptionInterface {

    public readonly params: any
    public readonly options: any;

    /**
     * @param  {object} params
     * @param options
     */
    constructor(params: ParamsInterface, options: any = {}) {
        super(params.description);
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        console.log(params.isOperational)
        params.isOperational = params.isOperational ? params.isOperational : false
        this.params = params;
        this.options = options;

        Error.captureStackTrace(this);
    }

    // return type should be array
    public parse() {
        return ExceptionParser.parse(this.params)
    }
}

export default HttpException


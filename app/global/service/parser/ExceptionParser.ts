import ExceptionParserInterface from "../../interface/ExceptionParserInterface"

class ExceptionParser {

    /**
     * Parse instance of Error | array of error object
     *
     * @returns object
     */
    public static parse (errors: any): object {
        if (typeof errors.message !== "string" && ExceptionParser.isMessageIterable(errors)) {
            const errs = [];
            for (const error of errors.message) {
                errs.push({
                    status: 422,
                    title: typeof error.location !== undefined ? error.location : "",
                    description: typeof error.description !== undefined ? error.description : "",
                    isOperational: typeof error.isOperational !== undefined ? error.isOperational : false,
                })
            }

            return {
                errors: errs
            }
        }
        else {
            return {
                error: {
                    title: errors.title ? errors.title : errors.message,
                    statusCode: errors.statusCode ? errors.statusCode : "",
                    description: errors.description ? errors.description : errors.stack,
                    isOperational: typeof errors.isOperational !== undefined ? errors.isOperational : false,
                }
            }
        }
    }

    public static isMessageIterable(errors: any): boolean {
        return errors.message && typeof errors.message[Symbol.iterator] === "function"
    }
}

export default ExceptionParser

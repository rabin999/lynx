import HttpException from "./HttpException"

class FileNotFoundException extends HttpException {

    /**
     * @param  {string} message?
     */
    constructor(message?: string) {

        const msg: string = message ? message : 'File not found'

        super({
            status: 404,
            message: msg
        })
    }
}

export default FileNotFoundException

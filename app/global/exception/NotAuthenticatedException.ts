import HttpException from "./HttpException"

class NotAuthenticatedException extends HttpException {
    constructor ()
    {
        super({
            status: 401,
            message: "You are not authorized"
        })
    }
}

export default NotAuthenticatedException
import HttpException from "./HttpException"

class NotAuthorizedException extends HttpException {
    constructor () 
    {
        super({
            status: 403,
            title: "Unauthorized",
            message: "You are not authorized"
        })
    }
}

export default NotAuthorizedException
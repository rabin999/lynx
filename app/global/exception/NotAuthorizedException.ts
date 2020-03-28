import HttpException from "./HttpException"

class NotAuthorizedException extends HttpException {
    constructor () {
        super({
            statusCode: 403,
            title: "Unauthorized",
            description: "You are not authorized"
        })
    }
}

export default NotAuthorizedException

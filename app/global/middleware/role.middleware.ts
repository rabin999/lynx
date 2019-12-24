import { NextFunction, Request, Response } from "express"
import Unauthorized from "../exceptions/NotAuthorizedException"

const roleMiddleware = (roles: Array<String>, options: object = {}) => {
    return (request: Request, response: Response, next: NextFunction) => {
        /*
        * IF user is admin, pass
        * other-wise check user has excess to route or not
        */
        if (request.user && (request.user.role === "admin" || roles.includes(request.user.role)) ) {
            next()
        }
        else {
            return response.status(403).send(new Unauthorized().parse())
        }
    }
}

export default roleMiddleware

import Unauthorized from "../exception/NotAuthorizedException"
import { LynxRequest, LynxResponse } from "../service/route/types"

const roleMiddleware = (roles: Array<String>, options: object = {}) => {
    return (request: LynxRequest, response: LynxResponse, next: any) => {
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

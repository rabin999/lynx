import { Request, Response, NextFunction } from "express"
import HttpException from "../exceptions/HttpException"
import NotAuthorized from "../exceptions/NotAuthorizedException"
import passport from "passport"

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('bearer', {session: false}, function(err, user, info) {
        if (err) {
            const error = new HttpException({
                status: 401,
                message: err.toString()
            })
            return res.status(401).json(error.parse())
        }

        //authentication error
        if (!user) {
            const error = new NotAuthorized()
            return res.status(401).json(error.parse())
        }

        //success
        req.login(user, function(err) {
            if (err) {
                const error = new HttpException({
                    status: 500,
                    message: err.toString()
                })
                return res.status(500).json(error.parse())
            }

          return next();
        });

    })(req, res, next)
}

export default authenticate

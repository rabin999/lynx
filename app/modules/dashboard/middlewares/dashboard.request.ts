import { Request, Response, NextFunction } from "express"
import HttpException from "../../../exceptions/HttpException"


const validation = async (req: Request, res: Response, next: NextFunction) => {

    // Project title
    req.assert("title").notEmpty().withMessage("Dashboard title is required")
        .isLength({ min: 5 }).withMessage("Dashboard title must be 5 characters")

    // process errors
    const errors = req.validationErrors()

    if (errors) {
        const errs = new HttpException({
            status: 422,
            message: errors
        })
        res.status(422).send(errs.parse())
    } else {
        next()
    }
}

export default validation

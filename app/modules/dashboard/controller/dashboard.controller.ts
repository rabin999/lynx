import { Request, Response, NextFunction } from "express"
import HttpException from "../../../global/exception/HttpException"

class DashboardController {

    /**
     * GET /dashboards
     * Get all dashboard
     */
    index = (req: any, res: any) => {
        res.send("This is dashboard page")
    }

    /**
     * POST /dashboard/create
     * Create a new dashboard
     *
     * @param  {Request} req
     * @param  {Response} res
     */
    public create = (req: any, res: any) => {

        try {
            res.send('dashboard create page')
        }
        catch (error) {
            const err = new HttpException({
                status: 500,
                message: error.toString()
            })
            res.status(500).json(err.parse())
        }
    }

    /**
     * DELETE dashboard/:id/delete
     * Delete dashboard
     *
     * @param  {Request} req
     * @param  {Response} res
     * @param  {NextFunction} next
     */
    public delete = (req: any, res: any) => {

        try {
            res.send("Dashboard delete page")
        }
        catch (error) {
            const err = new HttpException({
                status: 500,
                message: error.toString()
            })
            res.status(500).json(err.parse())
        }
    }
}

export default DashboardController

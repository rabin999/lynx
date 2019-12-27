import { Request, Response, NextFunction } from "express"
import HttpException from "../../../exceptions/HttpException"
import Dashboard from "../model/dashboard.model"

class DashboardController {

    /**
     * GET /dashboards
     * Get all dashboard
     */
    index = async (req: Request, res: Response, next: NextFunction) => {
        try {

            res.send("This is dashboard page")

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
     * POST /dashboard/create
     * Create a new dashboard
     *
     * @param  {Request} req
     * @param  {Response} res
     * @param  {NextFunction} next
     */
    public create = async (req: Request, res: Response, next: NextFunction) => {

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
    public delete = async (req: Request, res: Response, next: NextFunction) => {

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

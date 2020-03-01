import HttpException from "../../../global/exception/HttpException";
import { LynxRequest, LynxResponse } from "../../../global/service/route/types";

class DashboardController {

    /**
     * GET /dashboards
     * Get all dashboard
     */
    index = (request: LynxRequest, response: LynxResponse) => {
        response.send("This is dashboard page")
    }

    /**
     * POST /dashboard/create
     * Create a new dashboard
     *
     * @param  {Request} req
     * @param  {Response} res
     */
    create = (request: LynxRequest, response: LynxResponse) => {

        try {
            response.send('dashboard create page')
        }
        catch (error) {
            const err = new HttpException({
                status: 500,
                message: error.toString()
            })
            response.code(500).send(err.parse())
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
    delete = (request: LynxRequest, response: LynxResponse) => {

        try {
            response.send("Dashboard delete page")
        }
        catch (error) {
            const err = new HttpException({
                status: 500,
                message: error.toString()
            })
            response.code(500).send(err.parse())
        }
    }
}

export default DashboardController

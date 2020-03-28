import HttpException from "../../../global/exception/HttpException";
import { LynxRequest, LynxResponse } from "../../../global/service/route/types";

class DashboardController {

    /**
     * GET /dashboards
     * Get all dashboard
     */
    index = (request: LynxRequest, response: LynxResponse) => {
        try {
            const err = new HttpException({
                title: "NOT FOUND",
                statusCode: 500,
                description: "Hello description",
                isOperational: true
            })
            // throw err

            response.send("This is dashboard page")
        }
        catch (error) {
            response.code(500).send(error)
        } finally {
            // console.log("Do watheever you want")
        }
    }

    /**
     * POST /dashboard/create
     * Create a new dashboard
     *
     * @param  {Request} req
     * @param  {Response} res
     */
    create = async (request: LynxRequest, response: LynxResponse) => {

        try {
            response.send(request.body)
        }
        catch (error) {
            const err = new HttpException({
                title: "test",
                statusCode: 500,
                description: error.toString()
            })
            response.code(500).send(err.parse())
        } finally {
            console.log("Do watheever you want")
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
                title: "test",
                statusCode: 500,
                description: error.toString()
            })
            response.code(500).send(err.parse())
        }
    }
}

export default DashboardController

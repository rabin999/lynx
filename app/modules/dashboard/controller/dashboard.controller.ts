import HttpException from "../../../global/exception/HttpException"
import * as http2 from 'http2'
import { FastifyRequest, FastifyReply } from 'fastify'

class DashboardController {

    /**
     * GET /dashboards
     * Get all dashboard
     */
    index = (request: FastifyRequest<http2.Http2ServerRequest>, response: FastifyReply<http2.Http2ServerResponse>) => {
        response.send("This is dashboard page")
    }

    /**
     * POST /dashboard/create
     * Create a new dashboard
     *
     * @param  {Request} req
     * @param  {Response} res
     */
    create = (request: FastifyRequest<http2.Http2ServerRequest>, response: FastifyReply<http2.Http2ServerResponse>) => {

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
    delete = (request: FastifyRequest<http2.Http2ServerRequest>, response: FastifyReply<http2.Http2ServerResponse>) => {

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

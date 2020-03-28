import HttpException from "../../../exceptions/HttpException"

class DashboardNotFoundException extends HttpException {

    /**
     * @param  {string} id
     */
    constructor(id: string) {
        super({
            status: 404,
            message: `Dashboard with id ${id} not found`
        })
    }
}

export default DashboardNotFoundException

import { Router, Request, Response, NextFunction } from "express"
import DashboardController from "../controllers/dashboard.controller"
import DashboardRequest from "../request/dashboard.request"
import RoleMiddleware from "../../../middleware/role.middleware"

class DesignationRoutes {

    public _route: any

    constructor ()
    {
        this._route = Router()

        // this._route.get("/", RoleMiddleware(["admin"]), new DashboardController().index)
        this._route.get("/", new DashboardController().index)
        this._route.post("/create", DashboardRequest, new DashboardController().create)
        this._route.delete("/:id/delete", new DashboardController().delete)
    }

    get route()
    {
        return this._route
    }
}

export default DesignationRoutes

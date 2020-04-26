import { LynxRequest, LynxResponse } from "../../../global/service/route/types";
import UserService from "../service/user.service";
import db from "../../../global/service/database/mongo/connection";

class UserController {
    async index(request: LynxRequest, response: LynxResponse) {
        try {
            const listings = await (await db).collection("listings").find().limit(15).toArray();
            response.send(listings);
        }
        catch (error) {
            console.warn(error);
            response.send(error)
        }
    }

    async users(request: LynxRequest, response: LynxResponse) {
        response.send({
            hello: "world"
        });
    }
}

export default new UserController;

import { LynxRequest, LynxResponse } from "../../../global/service/route/types";
import UserService from "../service/user.service";
import UserModel from "../model/user.model";

class DatabaseController {
    index(request: LynxRequest, response: LynxResponse) {
        response.send("Database part")
    }

    async users(request: LynxRequest, response: LynxResponse) {
        const [rows, _] = await UserModel.all({
            limit: {
                offset: 0,
                to: 40
            }
        });
        
        response.send(rows)
    }
}

export default new DatabaseController;

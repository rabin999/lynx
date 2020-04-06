import Model from "../../../global/service/database/model"

class UserModel extends Model {
    table: string = "employees";
}

export default new UserModel;

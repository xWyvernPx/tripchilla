import User, { UserInstance } from "../../models/user/user.model";
import { PaginationQuery, PaginationResponse } from "../../utils/pagination";

export interface IUserService {
    getUser(payload : Object): Promise<UserInstance> ;
    getAllTours(pagination:PaginationQuery) : Promise<PaginationResponse<UserInstance>>;
}
class UserService implements IUserService {
    async getUser(payload : Object): Promise<UserInstance> {
        try {
            const rs = await User.findOne({where: {...payload}});
            if(rs) return rs;
            else return null;
        } catch (error) {
            return null;
        }
    }
    public async getAllTours(pagination:PaginationQuery) : Promise<PaginationResponse<UserInstance>> {
        const rs  = await User.findAndCountAll({
           limit: pagination.limit,
           offset: (pagination.page-1) * pagination.limit,
           order: [
               [pagination.order ? pagination.order : "id", 'ASC'] // default by id
           ]
       });
       const response: PaginationResponse<UserInstance> = {
           pagination :{
               page: pagination.page,
               limit: pagination.limit,
               total: rs.count,
               order: pagination.order
           },
           data : rs ? rs.rows : []
       }
       return response;
   }
}
export default new UserService();
import UserInfo, {  UserInfoInstance } from "../../models/user/info.model";
import { IUserInfo } from "../../types/ModelingEntity";

export interface IInfoService {
    createUserInfo(userInfo: IUserInfo): Promise<UserInfoInstance>;
    getUserInfo(id: number): Promise<UserInfoInstance>;
    updateUserInfo(userInfo: IUserInfo): Promise<any>;
    }

class InfoService implements IInfoService {
    public async createUserInfo(info : IUserInfo) : Promise<UserInfoInstance> {
        try {
            const rs = await UserInfo.create(info);
            if(rs) return rs 
            else throw new Error();
        }
        catch(err : any) {
            return null;
        }
    }
    public async updateUserInfo(info : IUserInfo) : Promise<any> {
        try {
            const rs = await UserInfo.update(info, {
                where: {
                   $id$: info.id
                }
            });
            if(rs) return rs 
            else throw new Error();
        }
        catch(err : any) {
            return null;
        }
    }
    public async getUserInfo(id : number) : Promise<UserInfoInstance> {
        try {
            const rs = await UserInfo.findOne({
                where: {
                    $id$: id
                }
            });
            if(rs) return rs 
            else throw new Error();
        }
        catch(err : any) {
            return null;
        }
    }
}
export default new InfoService();
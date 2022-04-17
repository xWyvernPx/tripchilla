import axiosClient from "api/axiosClient";
import { PaginationQuery } from "components/common/types/common";

class UserAPI { 
    async getAllUsers (pagination : PaginationQuery) {
        const url = "/users";
        const data = await axiosClient.get(url,{
            params : pagination
        })
        if(data) return data;
    }
    async getById (userId: string) { 
        const url = `/user/${userId}`;
        const data =  await axiosClient.get(url);
        if(data) return data;
    }
}
export default new UserAPI();
import axiosClient from "api/axiosClient";
import { PaginationQuery } from "components/common/types/common";

class UserAPI {
  async getAllUsers(pagination: PaginationQuery) {
    const url = "/users";
    const data = await axiosClient.get(url, {
      params: pagination,
    });
    if (data) return data;
  }
  async getById(userId: string) {
    const url = `/user/${userId}`;
    const data = await axiosClient.get(url);
    if (data) return data;
  }
  async checkUserName(userName: string) {
    const url = `/user/check-username`;
    const data: any = await axiosClient.post(url, { payload: userName });
    if (data) return data.available;
  }
  async checkEmail(email: string) {
    const url = `/user/check-email`;
    const data: any = await axiosClient.post(url, { payload: email });
    if (data) return data.available;
  }
}
export default new UserAPI();

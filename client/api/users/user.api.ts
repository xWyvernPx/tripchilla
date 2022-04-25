import axiosClient from "api/axiosClient";
import axios from "axios";
import { PaginationQuery } from "types/common.type";

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
  async loginGoogle() {
    const url = `/auth/google/callback`;
    axiosClient.get(url);
  }
  async register(user: { username: string; email: string; password: string }) {
    const url = `/user/register`;
    const data = await axiosClient.post(url, user, { withCredentials: true });
    if (data) return data;
  }
  async login(user: { username: string; password: string }) {
    const url = `/user/login`;
    return await axiosClient
      .post(url, user)
      .then((res) => res)
      .catch((err) => err);
  }
  async getFullUser() {
    const url = `/user/full`;
    const data: any = await axiosClient.get(url);
    if (data.status === "success") return data.data;
    else return null;
  }
}

export default new UserAPI();

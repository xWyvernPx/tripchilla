import axiosClient from "api/axiosClient";

export interface LoginPayload {
  email: string;
  password: string;
}
class AuthAPI {
  async login(payload: LoginPayload) {
    const url = `${process.env.REACT_APP_API_URL}/users/login`;
    const response = await axiosClient.post(url, payload);
    return response;
  }
}
export default new AuthAPI();

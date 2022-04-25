import AuthApi, { LoginPayload } from "api/auth/Auth.api";
import userApi from "api/users/user.api";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { authAtom } from "../_states/";

const useAuth = () => {
  const setAuth = useSetRecoilState(authAtom);
  const getSaveUser = useCallback(async () => {
    const user = await userApi.getFullUser();
    if (user) {
      console.log(user);
      setAuth(user);
    }
  }, []);
  const login = useCallback(
    async (payload: LoginPayload) => {
      return await AuthApi.login(payload)
        .then((user: any) => {
          setAuth(user);
          return true;
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
    },
    [setAuth]
  );

  const logout = useCallback(() => {
    setAuth(null);
    localStorage.removeItem("auth");
  }, [setAuth]);
  return { login, logout, getSaveUser };
};
export default useAuth;

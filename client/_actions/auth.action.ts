import AuthApi, { LoginPayload } from "api/auth/Auth.api";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { authAtom } from "../_states/";

const useAuth = () => {
  const setAuth = useSetRecoilState(authAtom);

  const login = useCallback(
    async (payload: LoginPayload) => {
      return await AuthApi.login(payload)
        .then((user) => {
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
  return { login, logout };
};

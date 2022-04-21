import { atom } from "recoil";
import getToken from "_helpers/getToken";

export const authAtom = atom({
  key: "auth",
  default: getToken() || null,
});

import { atom } from "recoil";

const loaderState = atom<boolean>({
  key: "loaderState",
  default: false,
});

export default loaderState;

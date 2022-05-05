import React from "react";
import { atom } from "recoil";

export interface IFlashMessageState {
  isOpen: boolean;
  message: string;
  type: "success" | "error";
  buttonContent?: string;
  buttonHandle?: Function;
}

const flashMessageState = atom<IFlashMessageState>({
  key: "flashMessageState",
  default: {
    message: "",
    type: "success",
    isOpen: false,
    buttonContent: "",
    buttonHandle: () => {},
  },
});
export default flashMessageState;

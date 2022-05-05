import React from "react";
import { atom } from "recoil";

export interface IAlertState {
  onCancel: Function;
  onConfirm: Function;
  message: string;
  title: string;
  isOpen: boolean;
}

const alertState = atom<IAlertState>({
  key: "alertState",
  default: {
    message: "",
    onCancel: () => {},
    onConfirm: () => {},
    title: "",
    isOpen: false,
  },
});

export default alertState;

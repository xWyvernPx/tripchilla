import React from "react";
import { atom } from "recoil";

export interface IModalState {
  isOpen: boolean;
  component: string | null;
  payload: any | null;
}

const modalState = atom<IModalState>({
  key: "modalState",
  default: {
    isOpen: false,
    component: null,
    payload: null,
  },
});
export default modalState;

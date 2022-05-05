import { useCallback } from "react";
import { useRecoilState } from "recoil";
import modalState from "_states/popup/modal";

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const closeModal = useCallback(() => {
    setModal({ ...modal, isOpen: false });
  }, [modal, setModal]);
  return { closeModal };
};
export default useModal;

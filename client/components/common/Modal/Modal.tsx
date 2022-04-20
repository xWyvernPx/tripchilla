import React, { ComponentProps, MouseEventHandler, useEffect } from "react";
import styled from "styled-components";
import { IconX } from "@tabler/icons";
interface ModalProps {
  formComponent?: React.ReactNode;
  onCloseModal: MouseEventHandler;
}
const Modal: React.FC<ModalProps> = (props) => {
  const { formComponent, onCloseModal } = props;
  const exitPressHandler = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onCloseModal(e as any);
    }
    console.log(e.key);
  };
  useEffect(() => {
    window.addEventListener("keydown", exitPressHandler);

    return () => {
      window.removeEventListener("keydown", exitPressHandler);
    };
  }, []);

  return (
    <ModalWrapper>
      <CloseButton onClick={onCloseModal}>
        <IconX />
      </CloseButton>
      {formComponent}
    </ModalWrapper>
  );
};
const ModalWrapper = styled.div`
  //dimensions
  /* width: 70vw;
    height: 70vh; */
  //display
  display: grid;
  place-items: center;
  background-color: white;
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.2);
  //position
  position: absolute;
  isolation: isolate;
  z-index: 100;
  inset: 5%;
`;
const CloseButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  //position
  position: absolute;
  right: 0;
  top: 0;
  z-index: 200;
`;
export default Modal;

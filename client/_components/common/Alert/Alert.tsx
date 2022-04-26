import { useOutsideAlerter } from "hooks/useOutsideDetect";
import React, { useRef } from "react";
import styled from "styled-components";
import { PrimaryFormButton, SecondaryFormButton } from "../Form";

const AlertContainer = styled.div`
  /* dimension */
  width: 30rem;
  height: fit-content;
  padding: 2rem 1.5rem;
  /* display */

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    & {
      background: rgba(255, 255, 255, 0.7);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
  }

  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  /* position */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 60;
  overflow: hidden;

  /* typo */
  h1 {
    margin-bottom: 1rem;

    font-size: var(--fs-large);
    text-transform: uppercase;

    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  p {
    font-size: var(--fs-medium);
    line-height: 1.5;
    letter-spacing: 1px;
    text-align: center;
  }
  .buttons {
    margin-top: 2.5rem;
    display: flex;
  }
`;
const Alert: React.FC<ArlertProps> = ({
  message,
  onCancel,
  onConfirm,
  title,
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    onCancel();
  });

  return (
    <AlertContainer ref={wrapperRef}>
      <h1>{title}</h1>
      <div className="divider"></div>
      <p>{message}</p>
      <div className="buttons">
        <PrimaryFormButton onClick={() => onConfirm()}>OK</PrimaryFormButton>,
        <SecondaryFormButton onClick={() => onCancel()}>
          Cancel
        </SecondaryFormButton>
      </div>
    </AlertContainer>
  );
};

export default Alert;
export interface ArlertProps {
  onCancel: Function;
  onConfirm: Function;
  message: string;
  title: string;
  isShow?: boolean;
}

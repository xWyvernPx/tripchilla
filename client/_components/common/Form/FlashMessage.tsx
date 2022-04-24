import React, { StyleHTMLAttributes } from "react";
import styled from "styled-components";
import { IconCircleCheck, IconCircleX, IconX } from "@tabler/icons";
export interface FlashMessageProps {
  message?: string;
  type?: "success" | "error";
  buttonHandle?: Function;
  buttonContent?: string;
  handleClose: Function;
  style: Object;
}
interface FlashMessageWrapperProps {
  type: "success" | "error";
}
const FlashMessageWrapper = styled.div`
  /* dimension */
  width: fit-content;
  aspect-ratio: 1/1.1;

  /* display */
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  background: ${(props: FlashMessageWrapperProps) =>
    props.type !== "success"
      ? "linear-gradient(135deg, #ed797d 0%, #eea3a0 100%)"
      : "linear-gradient(45deg, #62F7C7 0%, #9CF2BB 100%)"};
  opacity: 0.97;
  /* position */
  position: absolute;
  z-index: 50;
  .close {
    position: absolute;
    right: 3px;
    top: 3px;
    margin: unset;
    &:hover {
      cursor: pointer;
    }
  }
  svg {
    margin: 1.5rem auto;
    position: relative;
    stroke: ${(props: FlashMessageWrapperProps) =>
      props.type !== "success" ? "var(--dangerous)" : "var(--active)"};
  }
  .state {
    display: block;
    margin: 0rem auto;
    /* typo */
    color: ${(props: FlashMessageWrapperProps) =>
      props.type !== "success" ? "var(--white)" : "#2B856A"};
    font-weight: 600;
    text-transform: capitalize;
    font-size: var(--fs-large);
  }
  p {
    max-width: 20rem;
    padding: 1.5rem;
    color: ${(props: FlashMessageWrapperProps) =>
      props.type !== "success" ? "var(--white)" : "#2B856A"};
    font-size: var(--fs-medium);
    font-weight: 500;
    text-align: center;
    overflow: hidden;
    line-height: 1.2;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  button {
    color: ${(props: FlashMessageWrapperProps) =>
      props.type !== "success" ? "var(--white)" : "#195241"};
    font-size: var(--fs-medium);
    font-weight: 500;
  }
`;
const FlashMessage: React.FC<FlashMessageProps> = ({
  message,
  type,
  buttonHandle,
  buttonContent,
  handleClose,
  style,
}) => {
  return (
    <FlashMessageWrapper style={style} type={type}>
      <IconX className="close" size={20} onClick={() => handleClose()} />
      {type === "success" ? (
        <IconCircleCheck size={100} strokeWidth={1} />
      ) : (
        <IconCircleX size={100} strokeWidth={1} />
      )}
      {type === "success" ? (
        <span className="state">success</span>
      ) : (
        <span className="state">oops</span>
      )}
      <p>
        {message ||
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. "}
      </p>
      <button onClick={() => buttonHandle()}>
        {buttonContent || type === "success" ? "done" : "try again"}
      </button>
    </FlashMessageWrapper>
  );
};

export default FlashMessage;

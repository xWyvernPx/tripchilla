import { IconCircleCheck, IconCircleX } from "@tabler/icons";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import flashMessageState from "_states/popup/flashMessage";
export interface FlashMessageProps {
  style: Object;
}
interface FlashMessageWrapperProps {
  type: "success" | "error";
}

const FlashMessage: React.FC<FlashMessageProps> = ({ style }) => {
  const [flMessageState, setFlashMessageState] =
    useRecoilState(flashMessageState);
  return (
    <FlashMessageLayout>
      <FlashMessageWrapper style={style} type={flMessageState.type}>
        {flMessageState.type === "success" ? (
          <IconCircleCheck size={100} strokeWidth={1} />
        ) : (
          <IconCircleX size={100} strokeWidth={1} />
        )}
        {flMessageState.type === "success" ? (
          <span className="state">success</span>
        ) : (
          <span className="state">oops</span>
        )}
        <p>
          {flMessageState.message ||
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. "}
        </p>
        <button onClick={() => flMessageState.buttonHandle()}>
          {flMessageState.buttonContent || flMessageState.type === "success"
            ? "done"
            : "try again"}
        </button>
      </FlashMessageWrapper>
    </FlashMessageLayout>
  );
};
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
const FlashMessageLayout = styled.div`
  position: absolute;
  z-index: 70;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
`;
export default FlashMessage;

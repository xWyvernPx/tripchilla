import React from "react";
import styled from "styled-components";
const LoaderWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 70;
  background-color: rgba(0, 0, 0, 0.5);

  display: grid;
  place-items: center;
  .loader {
    width: 6rem;
    aspect-ratio: 1;
    background-color: var(--primary-color);
    border-radius: 5rem;
    margin: 2rem auto;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      animation: fade 1s forwards infinite linear;
    }
    @keyframes fade {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  }
`;
const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="loader"></div>
    </LoaderWrapper>
  );
};

export default Loader;

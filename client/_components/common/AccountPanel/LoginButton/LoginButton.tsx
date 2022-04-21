import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const LoginButtonWrapper = styled.div`
  /* dimension */
  width: 100%;
  height: fit-content;
  padding: 1rem;
  button {
    /* dimension */
    width: fit-content;
    height: fit-content;
    padding: 0.5rem 2rem;
    margin: 0 auto;

    //display
    display: block;
    background-color: var(--primary-color);
    border-radius: var(--radius);
    /* typo */
    color: var(--white);
    font-weight: 600;
    font-size: var(--fs-medium);
  }
`;
interface Props {
  handleClick: Function;
}
const LoginButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <LoginButtonWrapper>
      <button onClick={() => handleClick()}>Login</button>
    </LoginButtonWrapper>
  );
};

export default LoginButton;

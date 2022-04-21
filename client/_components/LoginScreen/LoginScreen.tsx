import React from "react";
import styled from "styled-components";
import { TextField } from "_components/common/Field/TextField";
import { AiFillIdcard } from "react-icons/ai";

const LoginScreen = () => {
  return (
    <LoginScreenLayout>
      <SignUpForm />
      <LoginScreenBackground />
      <LoginScreenBackgroundFilter></LoginScreenBackgroundFilter>
    </LoginScreenLayout>
  );
};
const LoginScreenLayout = styled.div`
  /* dimension */
  width: 100%;
  height: 100%;
  position: relative;
  //display
`;
const LoginScreenBackground = styled.div`
  /* dimension */
  width: 100%;
  height: 100%;
  //display
  background: url("https://images.unsplash.com/photo-1564460549828-f0219a31bf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80");
  background-position: center;
  background-size: cover;
  /* position */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
`;
const LoginScreenBackgroundFilter = styled.div`
  /* dimension */
  width: 100%;
  height: 100%;
  //display
  background-image: linear-gradient(
    50deg,
    rgba(44, 47, 57, 1) 50%,
    rgba(44, 47, 57, 0.85) 60%,
    rgba(0, 0, 0, 0.4) 100%
  );
  /* position */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9;
`;

const FormLayout = styled.form`
  /* dimension */
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  margin-left: 4rem;
  /* position */
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  //display
  h3 {
    color: var(--lighter-gray);
    text-transform: uppercase;
    font-size: var(--fs-medium);
  }
  h1 {
    margin: 0.5rem 0;
    height: fit-content;
    color: var(--white);
    font-size: var(--fs-xxlarge);

    &:after {
      content: ".";
      color: var(--primary-color);
      font-size: 3.5rem;
    }
  }
  span {
    margin-bottom: 2rem;
    color: var(--lighter-gray);
    font-size: var(--fs-medium);
    display: inline-block;
    button {
      color: var(--primary-color);
    }
  }
`;

const SignUpForm: React.FC = () => {
  return (
    <FormLayout>
      <h3>start for free</h3>
      <h1>Create new account</h1>
      <span>
        Already a member? <button> Log in</button>
      </span>

      <TextField>
        <input type="text" id="" placeholder=" "></input>
        <label htmlFor=""> Name</label>
        <span className="form__error ">This field is required</span>
        {/* error__trig to trigger error */}
        <AiFillIdcard />
      </TextField>
    </FormLayout>
  );
};
export default LoginScreen;

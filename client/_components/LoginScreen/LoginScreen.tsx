import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "_components/common/Form/TextField";
import { AiFillIdcard } from "react-icons/ai";
import ErrorState from "_components/common/Form/ErrorState";
import SignUpForm from "_components/common/Form/SignUpForm";
import LoginForm from "_components/common/Form/LoginForm";
import FlashMessage from "_components/common/Form/FlashMessage";
import { FieldValues } from "react-hook-form";
const LoginScreen = () => {
  const [gotAccount, setGotAccount] = useState(true);
  const [flashMessage, setFlashMessage] = useState<{
    message: string;
    type: "success" | "error";
    show: boolean;
    buttonContent?: string;
    buttonHandle?: Function;
  }>({
    message: "",
    type: "success",
    show: true,
    buttonContent: "",
    buttonHandle: () => {},
  });
  const loginSubmitHandle = (data: FieldValues) => {
    console.log(data);
  };
  const registerSubmitHandle = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <LoginScreenLayout>
      {flashMessage.show ? (
        <FlashMessage
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          handleClose={() => setFlashMessage({ ...flashMessage, show: false })}
          type={flashMessage.type}
          message={flashMessage.message}
        />
      ) : null}
      {gotAccount ? (
        <LoginForm
          handleSubmitForm={loginSubmitHandle}
          onChangeToSignUp={() => setGotAccount(false)}
        />
      ) : (
        <SignUpForm
          onChangeToLogin={() => {
            setGotAccount(true);
          }}
        />
      )}
      {/* <SignUpForm /> */}
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

export default LoginScreen;

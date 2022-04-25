import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { TextField } from "_components/common/Form/TextField";
import { AiFillIdcard } from "react-icons/ai";
import ErrorState from "_components/common/Form/ErrorState";
import SignUpForm from "_components/common/Form/SignUpForm";
import LoginForm from "_components/common/Form/LoginForm";
import FlashMessage from "_components/common/Form/FlashMessage";
import { FieldValues } from "react-hook-form";
import userApi from "api/users/user.api";
import { Loader } from "_components/common";
import { route } from "next/dist/server/router";
import useAuth from "../../_actions/auth.action";
const LoginScreen: React.FC<{ closeModal?: Function }> = ({ closeModal }) => {
  ////PERFORMANCE CHECK
  useEffect(() => {
    console.log("login screen rendered");
  });

  //////
  const [gotAccount, setGotAccount] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [resetTriggerReg, setResetTriggerReg] = useState(false);
  const [loading, setLoading] = useState(false);
  const { getSaveUser } = useAuth();
  const [flashMessage, setFlashMessage] = useState<{
    message: string;
    type: "success" | "error";
    show: boolean;
    buttonContent?: string;
    buttonHandle?: Function;
  }>({
    message: "",
    type: "success",
    show: false,
    buttonContent: "",
    buttonHandle: () => {},
  });
  const loginSubmitHandle = async (data: FieldValues) => {
    setLoading(true);
    const { username, password } = data;
    const result: any = await userApi.login({ username, password });
    if (result.status === "success") {
      setLoading(false);
      getSaveUser();
      setFlashMessage({
        message: result.message,
        type: "success",
        show: true,
        buttonContent: "Let's go",
        buttonHandle: () => {
          closeModal();
        },
      });
    } else {
      setLoading(false);
      setFlashMessage({
        message: result.message,
        type: "error",
        show: true,
        buttonContent: "",
        buttonHandle: () => {
          setFlashMessage({ ...flashMessage, show: false });
          setTimeout(() => {
            setResetTrigger(false);
          }, 0);
          setResetTrigger(true);
        },
      });
    }
  };

  const registerSubmitHandle = async (data: FieldValues) => {
    setLoading(true);
    const { username, password, email } = data;
    const result: any = await userApi.register({ email, username, password });
    console.log(result);
    if (result.status === "success") {
      setLoading(false);
      getSaveUser();
      setFlashMessage({
        message: result.message,
        type: "success",
        show: true,
        buttonContent: "Let's go",
        buttonHandle: () => {
          closeModal();
        },
      });
    } else {
      setLoading(false);
      setFlashMessage({
        message: result.message,
        type: "error",
        show: true,
        buttonContent: "",
        buttonHandle: () => {
          setFlashMessage({ ...flashMessage, show: false });
          setTimeout(() => {
            setResetTriggerReg(false);
          }, 0);
          setResetTriggerReg(true);
        },
      });
    }
  };

  const oauthButtonsHandler = useMemo(
    () => ({
      google: async () => {
        const newWindow = window.open(
          "https://localhost:4000/api/auth/google",
          "_blank",
          "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
        );
        const timer = setInterval(() => {
          if (newWindow.closed) {
            clearInterval(timer);
            getSaveUser();
            setFlashMessage({
              message: "You have been logged in",
              type: "success",
              show: true,
              buttonContent: "Let's go",
              buttonHandle: () => {
                closeModal();
              },
            });
          }
        });
      },
    }),
    []
  );
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
          buttonContent={flashMessage.buttonContent}
          buttonHandle={flashMessage.buttonHandle}
        />
      ) : null}
      {gotAccount ? (
        <LoginForm
          handleSubmitForm={loginSubmitHandle}
          onChangeToSignUp={() => setGotAccount(false)}
          resetFieldTrigger={resetTrigger}
          oauthButtonsHandler={oauthButtonsHandler}
        />
      ) : (
        <SignUpForm
          onChangeToLogin={() => {
            setGotAccount(true);
          }}
          resetFieldTrigger={resetTriggerReg}
          handleSubmitForm={registerSubmitHandle}
        />
      )}
      {loading && <Loader />}
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

import userApi from "api/users/user.api";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Loader } from "_components/common";
import FlashMessage from "_components/common/Form/FlashMessage";
import LoginForm from "_components/common/Form/LoginForm";
import SignUpForm from "_components/common/Form/SignUpForm";
import loaderState from "_states/loader";
import flashMessageState from "_states/popup/flashMessage";
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
  const [flMessageState, setFlashMessageState] =
    useRecoilState(flashMessageState);
  const [loading, setLoading] = useRecoilState(loaderState);
  const { getSaveUser } = useAuth();

  const loginSubmitHandle = useCallback(async (data: FieldValues) => {
    setLoading(true);
    const { username, password } = data;
    const result: any = await userApi.login({ username, password });
    if (result.status === "success") {
      setLoading(false);
      getSaveUser();
      setFlashMessageState({
        message: result.message,
        type: "success",
        isOpen: true,
        buttonContent: "Let's go",
        buttonHandle: () => {
          closeModal();
        },
      });
    } else {
      setLoading(false);
      setFlashMessageState({
        message: result.message,
        type: "error",
        isOpen: true,
        buttonContent: "",
        buttonHandle: () => {
          setFlashMessageState({ ...flMessageState, isOpen: false });
          setTimeout(() => {
            setResetTrigger(false);
          }, 0);
          setResetTrigger(true);
        },
      });
    }
  }, []);
  const registerSubmitHandle = useCallback(async (data: FieldValues) => {
    setLoading(true);
    const { username, password, email } = data;
    const result: any = await userApi.register({ email, username, password });
    console.log(result);
    if (result.status === "success") {
      setLoading(false);
      getSaveUser();
      setFlashMessageState({
        message: result.message,
        type: "success",
        isOpen: true,
        buttonContent: "Let's go",
        buttonHandle: () => {
          closeModal();
        },
      });
    } else {
      setLoading(false);
      setFlashMessageState({
        message: result.message,
        type: "error",
        isOpen: true,
        buttonContent: "",
        buttonHandle: () => {
          setFlashMessageState({ ...flMessageState, isOpen: false });
          setTimeout(() => {
            setResetTriggerReg(false);
          }, 0);
          setResetTriggerReg(true);
        },
      });
    }
  }, []);

  const oauthButtonsHandler = useMemo(
    () => ({
      google: async () => {
        const newWindow = window.open(
          "https://localhost:4000/api/auth/google",
          "_parent",
          "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
        );
        // => This not working on firefox due to config dom.allow_scripts_to_close_windows = false
        // const timer = setInterval(() => {
        //   if (newWindow.closed) {
        //     getSaveUser();
        //     setFlashMessageState({
        //       message: "You have been logged in",
        //       type: "success",
        //       isOpen: true,
        //       buttonContent: "Let's go",
        //       buttonHandle: () => {
        //         closeModal();
        //       },
        //     });
        //     clearInterval(timer);
        //   }
        // });
      },
    }),
    []
  );
  return (
    <LoginScreenLayout>
      {flMessageState.isOpen ? (
        <FlashMessage
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
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

export default React.memo(LoginScreen);

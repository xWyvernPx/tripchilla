import React, { useCallback, useEffect, useState } from "react";
import ErrorState from "./ErrorState";
import { TextField } from "./TextField";
import { IoPerson, IoLockClosed } from "react-icons/io5";
import {
  IconBrandGoogle,
  IconBrandFacebook,
  IconBrandGithub,
} from "@tabler/icons";
import styled from "styled-components";
import { PrimaryFormButton, SecondaryFormButton } from "./FormButton";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import userApi from "api/users/user.api";
import { useRouter } from "next/router";
import axiosClient from "api/axiosClient";
interface Props {
  onChangeToSignUp: Function;
  handleSubmitForm: SubmitHandler<FieldValues>;
  resetFieldTrigger?: boolean;
}
const LoginSchema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();
const LoginForm: React.FC<Props> = ({
  onChangeToSignUp,
  handleSubmitForm,
  resetFieldTrigger,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(LoginSchema) });
  useEffect(() => {
    if (resetFieldTrigger) reset();
  }, [resetFieldTrigger]);

  const route = useRouter();
  return (
    <LoginFormLayout
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <h1>Welcome, log in to explore the world 🌏</h1>
      <span>
        {"Don't have an account? "}
        <button onClick={() => onChangeToSignUp()}> Join us</button>
      </span>
      <FieldsLayout width="90%">
        {/* username field */}
        <TextField error={errors.username ? true : false}>
          <Controller
            control={control}
            name="username"
            defaultValue={""}
            render={({ field }) => (
              <input
                type="text"
                autoComplete="off"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                }}
                // {...register("username")}
                placeholder=" "
                value={field.value}
              />
            )}
          />

          <label htmlFor="">Username</label>
          <ErrorState
            isShow={errors.username ? true : false}
            message={errors.username?.message}
          />
          <IoPerson />
        </TextField>
        {/* password field */}
        <TextField error={errors.password ? true : false}>
          <input
            type="password"
            autoComplete="new-password"
            {...register("password")}
            placeholder=" "
          ></input>
          <label htmlFor=""> Password</label>
          <ErrorState
            isShow={errors.password ? true : false}
            message={errors.password?.message}
          />
          <IoLockClosed />
        </TextField>
        <PrimaryFormButton type="submit">Login</PrimaryFormButton>
        <span
          style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            margin: "5px 0",
          }}
        >
          or
        </span>
        <MultiFieldsContainer>
          <SecondaryFormButton
            type="button"
            onClick={() => {
              window.open(
                "https://localhost:4000/api/auth/google",
                "_blank",
                `width=500,height=500,centerscreen=yes`
              );
            }}
          >
            <IconBrandGoogle />
          </SecondaryFormButton>

          <SecondaryFormButton
            onClick={() => route.push("https://localhost:4000/api/auth/google")}
          >
            <IconBrandFacebook />{" "}
          </SecondaryFormButton>
          <SecondaryFormButton
            onClick={() => route.push("https://localhost:4000/api/auth/google")}
          >
            <IconBrandGithub />{" "}
          </SecondaryFormButton>
        </MultiFieldsContainer>
      </FieldsLayout>
    </LoginFormLayout>
  );
};
const MultiFieldsContainer = styled.div`
  /* dimension */
  width: 100%;
  height: fit-content;
  /* display; */
  display: flex;
  column-gap: 1rem;
`;
const LoginFormLayout = styled.form`
  /* dimension */
  width: fit-content;
  max-width: 58%;
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
    color: var(--white);
    font-size: 3rem;
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

  @media screen and (max-width: 767.98px) {
    padding: 0;
    margin: 0;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: var(--fs-xlarge);
    }
    span {
      font-size: var(--fs-small);
      margin-bottom: 0.5rem;
    }
  }
`;
const FieldsLayout = styled.div`
  /* dimension */
  height: fit-content;
  width: 50%;
  @media screen and (max-width: 767.98px) {
    width: ${(props: { width?: string }) =>
      props.width ? props.width : "100%"};
  }
  @media screen and (max-width: 1279.98px) {
    width: 60%;
  }
  @media screen and (max-width: 767.98px) {
    width: 90%;
  }
  @media screen and (max-width: 374.98px) {
    width: 100%;
  }
`;

export default LoginForm;

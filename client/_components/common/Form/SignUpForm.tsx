import React, { useCallback, useState } from "react";
import ErrorState from "./ErrorState";
import { TextField } from "./TextField";
import { IoMail, IoPerson, IoLockClosed } from "react-icons/io5";
import styled from "styled-components";
import { PrimaryFormButton } from "./FormButton";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import userApi from "api/users/user.api";
import { debounce } from "lodash";

const SignupSchema = yup
  .object({
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Please enter the correct email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match above"),
    //   .required("Confirm password is required"),
  })
  .required();
interface Props {
  onChangeToLogin: Function;
}
const SignUpForm: React.FC<Props> = ({ onChangeToLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
    clearErrors,
  } = useForm({ resolver: yupResolver(SignupSchema) });

  const debounceCheckUsername = useCallback(
    debounce(
      (username: string) =>
        userApi.checkUserName(username).then((value) => {
          if (!value)
            setError("username", {
              type: "manual",
              message: "Username is already taken",
            });
          if (value && username != "") clearErrors("username");
        }),
      1000
    ),
    []
  );

  const handleUsernameChange = async (username: string) => {
    debounceCheckUsername(username);
  };
  const debounceCheckEmail = useCallback(
    debounce(
      (email: string) =>
        userApi.checkEmail(email).then((value) => {
          if (!value)
            setError("email", {
              type: "manual",
              message: "email is already taken",
            });
          if (value && email != "") clearErrors("email");
        }),
      1000
    ),
    []
  );

  const handleEmailChange = async (email: string) => {
    debounceCheckEmail(email);
  };

  const handleSubmitForm = async (data: any) => {
    const { username, email, password } = data;
    const user = {
      username,
      email,
      password,
    };
    const rs = await userApi.register(user);
    console.log(rs);
  };

  return (
    <FormLayout autoComplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
      <h3>start for free</h3>
      <h1>Create new account</h1>
      <span>
        Already a member?{" "}
        <button onClick={() => onChangeToLogin()}> Log in</button>
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
                  handleUsernameChange(e.target.value);
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
        {/* email field */}
        <TextField error={errors.email ? true : false}>
          <Controller
            name="email"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <input
                type="text"
                autoComplete="off"
                // {...register("email")}
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleEmailChange(e.target.value);
                }}
                value={field.value}
                placeholder=" "
              />
            )}
          />

          <label htmlFor="">Email</label>
          <ErrorState
            isShow={errors.email ? true : false}
            message={errors.email?.message}
          />
          <IoMail />
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
        {/* confirm password field */}
        <TextField error={errors.confirmPassword ? true : false}>
          <input
            type="password"
            autoComplete="new-password"
            {...register("confirmPassword")}
            placeholder=" "
          ></input>
          <label htmlFor="">Re-enter Password</label>
          <ErrorState
            isShow={errors.confirmPassword ? true : false}
            message={errors.confirmPassword?.message}
          />
          <IoLockClosed />
        </TextField>
        <PrimaryFormButton type="submit">Create account</PrimaryFormButton>
      </FieldsLayout>
    </FormLayout>
  );
};
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
    color: var(--white);
    font-size: 3rem;

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
  @media screen and (max-width: 767.98px) {
    margin-left: 2rem;
  }
`;

const FieldsLayout = styled.div`
  /* dimension */
  height: fit-content;
  width: ${(props: { width?: string }) => (props.width ? props.width : "100%")};
`;

export default SignUpForm;

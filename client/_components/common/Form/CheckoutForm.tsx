import { IconMail, IconCreditCard } from "@tabler/icons";
import React, { useCallback } from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { PrimaryFormButton } from "./FormButton";
import { Multifield, TextField, TextFieldNormal } from "./TextField";
import { Controller, useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorState from "./ErrorState";
const LoginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  card_number: yup.string().required("Card number is required"),
  card_expiry: yup
    .string()
    .required("Card expiry is required")
    .matches(
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      "Please enter a valid expiry date"
    ),
  card_cvc: yup.string().required("Card CVC is required"),
});
const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      card_number: "",
      card_expiry: "",
      card_cvc: "",
    },
  });

  const handleCheckoutSubmit = useCallback((value) => {
    console.log(value);
  }, []);
  return (
    <form action="" onSubmit={handleSubmit(handleCheckoutSubmit)}>
      <TextFieldNormal error={errors?.email ? true : false}>
        <input type="text" placeholder="   " {...register("email")} />
        <label htmlFor="">Email Address</label>
        <IconMail />
      </TextFieldNormal>
      <h3>Card Detail</h3>

      <TextFieldNormal>
        <Controller
          control={control}
          name="card_number"
          defaultValue={""}
          render={({ field }) => (
            <NumberFormat
              {...field}
              format={"#### #### #### ####"}
              placeholder="   "
            />
          )}
        />

        <label htmlFor="">Card Number</label>
        <IconCreditCard />
        <ErrorState
          isShow={errors?.card_number ? true : false}
          message={errors?.card_number?.message}
        />
      </TextFieldNormal>
      <TextFieldNormal error={errors?.email ? true : false}>
        <input type="text" placeholder="   " {...register("email")} />
        <label htmlFor="">Email Address</label>
        <IconMail />
      </TextFieldNormal>
      <Multifield>
        <TextFieldNormal error={errors?.card_expiry ? true : false}>
          <Controller
            control={control}
            name="card_expiry"
            render={({ field }) => (
              <NumberFormat
                {...field}
                mask={["M", "M", "Y", "Y"]}
                format={"##/##"}
                placeholder=" "
              />
            )}
          />

          <label htmlFor="">Expiry</label>
          <ErrorState
            isShow={errors?.card_expiry ? true : false}
            message={errors?.card_expiry?.message}
          />
        </TextFieldNormal>
        <TextFieldNormal error={errors?.card_cvc ? true : false}>
          <Controller
            control={control}
            name="card_cvc"
            defaultValue={""}
            render={({ field }) => (
              <NumberFormat
                {...field}
                type="password"
                minLength={3}
                maxLength={3}
                placeholder="   "
              />
            )}
          />
          <label htmlFor="">CVC</label>
        </TextFieldNormal>
      </Multifield>
      <TotalArea>
        <TotalField>
          <h3>Subtotal</h3>
          <span>100$</span>
        </TotalField>
        <TotalField>
          <h3>VAT(10%)</h3>
          <span>10$</span>
        </TotalField>
        <TotalField>
          <h3 className="total">Total</h3>
          <span className="total">110$</span>
        </TotalField>
      </TotalArea>
      <PrimaryFormButton type="submit" style={{ width: "100%" }}>
        Pay
      </PrimaryFormButton>
    </form>
  );
};
const TotalArea = styled.div`
  margin: 1rem 0;
`;
const TotalField = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  span {
    flex: 1 1 fit-content;
    text-align: right;
    font-size: var(--fs-small);
    font-weight: 500;
  }
  h3 {
    font-size: var(--fs-small);
  }
  .total {
    font-weight: 700;
  }
`;
export default CheckoutForm;

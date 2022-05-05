import { IconMail, IconCreditCard } from "@tabler/icons";
import React from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { PrimaryFormButton } from "./FormButton";
import { Multifield, TextField, TextFieldNormal } from "./TextField";

const CheckoutForm = () => {
  const exp = React.useRef(null);
  return (
    <form action="">
      <TextFieldNormal>
        <input type="text" placeholder="   " />
        <label htmlFor="">Email Address</label>
        <IconMail />
      </TextFieldNormal>
      <h3>Card Detail</h3>
      <TextFieldNormal>
        <NumberFormat format={"#### #### #### ####"} placeholder="   " />
        <label htmlFor="">Card Number</label>
        <IconCreditCard />
      </TextFieldNormal>
      <Multifield>
        <TextFieldNormal>
          <NumberFormat format={"##/##"} placeholder="  " value={exp.current} />
          <label htmlFor="">Exp</label>
          <IconMail />
        </TextFieldNormal>
        <TextFieldNormal>
          <NumberFormat
            type="password"
            minLength={3}
            maxLength={3}
            placeholder="   "
          />
          <label htmlFor="">CVC</label>
          <IconMail />
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

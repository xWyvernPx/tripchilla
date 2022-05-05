import { useOutsideAlerter } from "hooks/useOutsideDetect";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import CheckoutForm from "../Form/CheckoutForm";

const CheckoutModalLayout = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 50;
`;
const CheckoutPage = styled.div`
  width: 50vw;
  height: 80vh;
  padding: 2rem;
  background-color: white;

  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  overflow-x: hidden;
  //TITLE
  h1 {
    font-weight: 700;
    text-transform: capitalize;
    &::after {
      content: ".";
      color: var(--primary-color);
    }
  }
`;
const Devider = styled.div`
  width: 100%;
  height: 2px;
  margin: 1rem 0;
  background-color: var(--lighter-gray);
`;
const CheckoutContent = styled.div`
  margin: 2rem 1rem;
  display: flex;
  gap: 1rem;
`;
const CheckoutItem = styled.div`
  flex: 1 1 50%;
  height: 100%;
  h2 {
    font-weight: 700;
    text-shadow: 0.5px 0.5px 1px black;
  }
  p {
    margin: 0.75rem 0;
    line-height: 1.5;
    color: var(--gray);
  }
`;
const PaymentDetail = styled.div`
  flex: 1 1 50%;
  padding: 0 1rem;
  h2 {
    font-weight: 700;
    text-shadow: 0.5px 0.5px 1px black;
  }
  p {
    margin: 0.75rem 0;
    line-height: 1.5;
    color: var(--gray);
  }
`;
const CheckoutModal: React.FC<{}> = () => {
  const [show, setShow] = useState(true);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    console.log("outside");
    setShow(false);
  });
  if (show)
    return (
      <CheckoutModalLayout>
        <CheckoutPage ref={wrapperRef}>
          <h1>checkout</h1>
          <Devider />
          <CheckoutContent>
            <CheckoutItem>
              <h2>Order</h2>
              <p>Check carefully the trip selected.</p>
            </CheckoutItem>
            <PaymentDetail>
              <h2>Payment Detail</h2>
              <p>
                Complete your purchase item by providing your payment details.
              </p>
              <CheckoutForm />
            </PaymentDetail>
          </CheckoutContent>
        </CheckoutPage>
      </CheckoutModalLayout>
    );
  else return null;
};

export default CheckoutModal;

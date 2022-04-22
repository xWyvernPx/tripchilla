import React from "react";
interface Props {
  isShow?: boolean;
  message: string;
}
const ErrorState: React.FC<Props> = ({ isShow, message }) => {
  return (
    <span className={`form__error ${isShow ? "error__trig" : ""}`}>
      {message}
    </span>
  );
};

export default ErrorState;

import styled from "styled-components";
interface FieldProps {
  width?: string;
  error?: boolean;
}
export const TextField = styled.div`
  /* dimension */
  ${(props: FieldProps) =>
    props.width ? `width:${props.width};` : "width:100%;"}
  height: fit-content;
  padding: 0.75rem 1.5rem;

  /* display */
  display: flex;
  align-items: center;
  background-color: var(--darker-gray);
  border-radius: var(--radius);
  transition: all 0.25s linear;
  /* position; */
  position: relative;

  border: ${(props: FieldProps) => (props.error ? `var(--dangerous)` : `unset`)}
    solid 2px;
  box-shadow: ${(props: FieldProps) =>
      props.error ? `var(--dangerous)` : `unset`}
    0px 0px 12px -2px;
  input {
    /* dimension */
    width: 100%;
    height: fit-content;
    //display
    background-color: transparent;
    transition: all 0.25s linear;
    /* typo */
    color: var(--white);
    font-size: var(--fs-medium);
    font-weight: 500;
    &:focus {
      margin-top: 0.75rem;
      margin-bottom: -0.15rem;
      & + label {
        top: 1rem;
        font-size: var(--fs-xs);
      }
    }
    &:not(:placeholder-shown) {
      margin-top: 0.75rem;
      margin-bottom: -0.15rem;
      & + label {
        top: 1rem;
        font-size: var(--fs-xs);
      }
    }
  }
  label {
    position: absolute;
    color: var(--gray);
    font-weight: 500;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.25s linear;
  }
  svg {
    fill: var(--white);
    font-size: 1.75rem;
    border-radius: var(--radius);
  }
  &:focus-within {
    border: ${(props: FieldProps) =>
        props.error ? `var(--dangerous)` : `var(--primary-color)`}
      solid 2px;
    box-shadow: ${(props: FieldProps) =>
        props.error ? `var(--dangerous)` : `var(--primary-color)`}
      0px 0px 12px -2px;
    label {
      color: ${(props: FieldProps) =>
        props.error ? `var(--dangerous)` : `var(--primary-color)`};
    }
    .error__trig {
      transform: scale(1) translate(100%, 0);
    }
  }

  .form__error {
    /* dimension       */
    width: fit-content;
    height: fit-content;
    padding: 0.5rem 1rem;
    border-radius: var(--radius) var(--radius) var(--radius) 0;
    /* display */
    background-color: var(--dangerous);

    /* position */
    position: absolute;
    right: 0;
    top: -50%;
    transform: scale(0) translate(50%, 100%);
    /* transform: scale(1) translate(100%, 0); */

    transition: all 0.25s linear;
    /* typo */
    color: var(--white);
  }
`;

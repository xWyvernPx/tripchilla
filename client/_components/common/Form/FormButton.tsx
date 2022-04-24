import styled from "styled-components";

export const PrimaryFormButton = styled.button`
  /* dimension */
  width: fit-content;
  height: fit-content;
  padding: 0.85rem 3rem;
  margin: 0.5rem auto;
  /* display */
  display: block;
  background-color: var(--primary-color);
  font-weight: 500;
  border: none;
  border-radius: var(--radius);
  box-shadow: 2px 10px 15px -2px rgba(28, 194, 139, 0.25);
  //typo
  color: var(--white);
  font-size: var(--fs-medium);
`;

export const SecondaryFormButton = styled.button`
  /* dimension */
  width: fit-content;
  height: fit-content;
  padding: 0.85rem 1.5rem;
  margin: 0.5rem auto;
  /* display */
  display: grid;
  place-items: center;
  gap: 0.5rem;
  background-color: var(--gray);
  font-weight: 500;
  border: none;
  border-radius: var(--radius);
  box-shadow: 2px 10px 15px -2px rgba(114, 132, 140, 0.25);
  transition: all 0.2s ease-in-out;
  //typo
  color: var(--white);
  font-size: var(--fs-medium);
  svg {
    transform: scale(1.5);
    stroke: var(--lighter-gray);
  }
  &:hover {
    /* background-color: var(--primary-color); */
    svg {
      stroke: var(--white);
    }
  }
`;

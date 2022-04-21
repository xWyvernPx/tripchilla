import React from "react";
import styled from "styled-components";
interface Props {
  backgroundUrl: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}
const AdsLayout = styled.div`
  display: block;margin: auto 0;
  width: 17rem;
  /* min-width: 17rem; */
  height: 100%;
  min-height: 20rem;
  max-height: 24rem;
  background: url(${(props: Props) => props.backgroundUrl});
  border-radius: var(--radius);

  /* ${(props: Props) => props.top && `top: ${props.top};`}
  flex: 0;
  ${(props: Props) => props.left && `left: ${props.left};`}
    ${(props: Props) => props.right && `right: ${props.right};`}
    ${(props: Props) => props.bottom && `bottom: ${props.bottom};`} */
  background-size: cover;
  background-position: center;
  position: relative;
  button {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50%;
    border-radius: var(--radius);
    color: var(--white);
    font-weight: 500;
    padding: 1rem 0;
    background-color: var(--primary-color);
  }
  @media screen and (max-width: 1023.98px) {
    display: none;
  }
  
`;
function Ads2() {
  return (
    <AdsLayout backgroundUrl="https://picsum.photos/id/10/200/300">
      <button>Join Now</button>
    </AdsLayout>
  );
}
export default Ads2;

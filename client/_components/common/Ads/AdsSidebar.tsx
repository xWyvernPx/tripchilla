import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { IconArrowRight } from "@tabler/icons";
import gsap from "gsap";
interface AdsLayoutProps {
  backgroundUrl: string;
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
}
const AdsLayout = styled.div`
  width: 17rem;
  height: 14rem;
  border-radius: var(--radius);
  background-color: red;
  background: ${(props: AdsLayoutProps) => `url(${props.backgroundUrl})`};
  position: absolute;
  ${(props: AdsLayoutProps) => (props.left ? `left: ${props.left}` : "")};
  ${(props: AdsLayoutProps) => (props.top ? `top: ${props.top}` : "")};
  ${(props: AdsLayoutProps) => (props.bottom ? `bottom: ${props.bottom}` : "")};
  ${(props: AdsLayoutProps) => (props.right ? `right: ${props.right}` : "")};
  transform: translate(-50%, -50%);
  button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    bottom: 0;
    transform: translate(7rem, 10rem);
  }
`;
//props : {url , left , top}
function AdsSidebar() {
  const adsRef = useRef(null);
  useEffect(() => {
    gsap
      .fromTo(
        adsRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1 }
      )
      .duration(0.5);
  }, [adsRef]);

  return (
    <AdsLayout
      ref={adsRef}
      backgroundUrl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      top="50%"
      left="50%"
    >
      <button>
        <IconArrowRight />
      </button>
    </AdsLayout>
  );
}

export default AdsSidebar;

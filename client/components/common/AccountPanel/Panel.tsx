import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import gsap from "gsap";
const PanelLayout = styled.ul`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  position: absolute;

  top: 100%;
  border-radius: var(--radius);
  padding: 1rem;
  z-index: 100;
  &::before {
    content: "";
    background-color: var(--lighter-primary-color);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: var(--radius);
    z-index: -4;
    box-shadow: 0 0.3rem 0.5rem 0.1rem var(--lighter-primary-color);
    filter: blur(0.1rem);
  }
`;
const CustomLink = styled.a`
  display: block;
  width: 100%;
  padding: 1rem 0rem;
  margin-bottom: 1rem;
  color: var(--dark);
  text-decoration: none;
  /* backgrou-nd-color: white; */
  color: var(--dark);
  border-radius: var(--radius);
  font-size: var(--fs-medium);
  font-weight: 600;
  position: relative;
  transition: all 0.3s linear;

  &::after {
    content: "";
    border-radius: var(--radius);
    position: absolute;
    width: 100%;
    opacity: 0;
    background-color: var(--primary-color);
    transition: all 0.4s linear;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -2;
  }
  &:hover {
    color: var(--white);
  }
  &:hover::after {
    /* width: 100%; */
    opacity: 1;
  }
`;
function Panel() {
  const panelRef = React.useRef(null);
  useEffect(() => {
    gsap
      .from(panelRef.current!, {
        opacity: 0,
        scale: 0,
        y: -100,
      })
      .duration(0.2);
    gsap.to(panelRef.current!, { opacity: 1, scale: 1, y: 0 });
    return () => {};
  }, [panelRef]);

  return (
    <PanelLayout ref={panelRef}>
      <li>
        <Link href="/#" passHref>
          <CustomLink>Account</CustomLink>
        </Link>
      </li>
      <li>
        <Link href="/#" passHref>
          <CustomLink>Setting</CustomLink>
        </Link>
      </li>
      <li>
        <Link href="/#" passHref>
          <CustomLink>Logout</CustomLink>
        </Link>
      </li>
    </PanelLayout>
  );
}

export default Panel;

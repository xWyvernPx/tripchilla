import { IconLogout } from "@tabler/icons";
import Head from "next/head";
import Image from "next/image";
import React, { ComponentProps, ReactChildren, useEffect } from "react";
import Sidebar from "../common/sidebar/Sidebar";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import gsap from "gsap";
export const GlobalStyle = createGlobalStyle`

:root {
  --swiper-navigation-size: 34px;
    --primary-color: #1cc28b;
    --lighter-primary-color: #a5ffe1;
    --gray: #72848c;
    --lighter-gray: #b7c6cc;
    --white: #fff;
    --dark: #2b2945;
    --secondary-color: #ff8345;
    --secondary-background: #F5F9F8;
    --radius:.9rem;
    --layout-padding: 1.75rem;
    --fs-small: 1rem;
    --fs-medium: 1.25rem;
    --fs-large: 1.5rem;
    --fs-xlarge: 2rem;
    --line-height-small: 1.5;
    --line-height-medium: 1.75;
    --line-height-large: 2;
    --line-height-xlarge: 2.5;
    --side-bar-size : 15vw;
    --dangerous : #a32e2c;
    --active : #4f8a30;
    --warning : #eec762;
}
/* html {
    scroll-behavior: smooth;
} */
*{ 
    font-family:  'Poppins','Josefin Sans', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
   }
   html, body, div, span, applet, object, iframe,
   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
   a, abbr, acronym, address, big, cite, code,
   del, dfn, em, img, ins, kbd, q, s, samp,
   small, strike, strong, sub, sup, tt, var,
   b, u, i, center,
   dl, dt, dd, ol, ul, li,
   fieldset, form, label, legend,
   table, caption, tbody, tfoot, thead, tr, th, td,
   article, aside, canvas, details, embed, 
   figure, figcaption, footer, header, hgroup, 
   menu, nav, output, ruby, section, summary,
   time, mark, audio, video {
    font-family:  'Poppins','Josefin Sans', sans-serif;
       margin: 0;
       padding: 0;
       border: 0;
       font-size: 100%;
       font: inherit;
       vertical-align: baseline;
       text-decoration: none;

   }
   /* HTML5 display-role reset for older browsers */
   article, aside, details, figcaption, figure, 
   footer, header, hgroup, menu, nav, section {
       display: block;
   }
   body {
       line-height: 1;
       overflow-x: hidden;
   }
   ol, ul {
       list-style: none;
   }
   blockquote, q {
       quotes: none;
   }
   blockquote:before, blockquote:after,
   q:before, q:after {
       content: '';
       content: none;
   }
   table {
       border-collapse: collapse;
       border-spacing: 0;
   }
   h1 {
         font-size: 1.8rem;
         line-height: 1.5;
        font-weight: 600;
   }
   h2 { 

       font-size: 1.5rem;
       line-height: 1.5;
       font-weight: 600;
   }
   h3 {

         font-size: 1.25rem;
            line-height: 1.5;
         font-weight: 600;
   }
   h4 { 
       line-height: 1.5;
       font-size: 1rem;
    
   }
   h5{
         line-height: 1.5;
         font-size: .75rem;

   }
   button {
       outline: none;
       background: none;
       border: none;
       cursor: pointer;
   }
   @media screen and (max-width: 1279.98px) {
     :root {
      --layout-padding : 1.4rem;
      --side-bar-size : 13rem;

     }
        html {
          font-size: 90%;
        }
        h1 {
         font-size: 1.7rem;
         line-height: 1.5;
        font-weight: 600;
   }
   h2 { 

       font-size: 1.4rem;
       line-height: 1.5;
       font-weight: 600;
   }
   h3 {

         font-size: 1.15rem;
            line-height: 1.5;
         font-weight: 600;
   }
   h4 { 
       line-height: 1.5;
       font-size: .9rem;
    
   }
   h5{
         line-height: 1.5;
         font-size: .65rem;

   }
   }
  @media screen and (max-width: 1023.98px) {
    :root {
      --layout-padding : 1rem;
      --side-bar-size : 11rem;

     }
        html {
          font-size: 85%;
        }
        h1 {
         font-size: 1.6rem;
         line-height: 1.4;
        font-weight: 600;
   }
   h2 { 

       font-size: 1.3rem;
       line-height: 1.4;
       font-weight: 600;
   }
   h3 {

         font-size: 1.05rem;
            line-height: 1.4;
         font-weight: 600;
   }
   h4 { 
       line-height: 1.4;
       font-size: .8rem;
    
   }
   h5{
         line-height: 1.4;
         font-size: .55rem;

   }
  }
  
`;

const AppLayout = styled.div`
  padding: var(--layout-padding);
  width: 100%;
  height: calc(100vh - 2 * var(--layout-padding));
  display: grid;
  grid-template-columns: var(--side-bar-size) 1fr;

  @media screen and (max-width: 1279.98px) {
    height: calc(95vh - 2 * var(--layout-padding));
  }
  @media screen and (max-width: 767.98px) {
    grid-template-columns: 1fr;
    position: relative;
  }
`;
const SidebarWrapper = styled.div`
  //   background-color: var(--secondary-color);
  width: var(--side-bar-size);
  height: calc(100vh - 2 * var(--layout-padding));
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: space-between;
  flex: 0 0 var(--size-bar-size);
  @media screen and (max-width: 767.98px) {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: unset;
    height: 5rem;
    z-index: 10;
    justify-content: center;
  }
`;
const LogoWrapper = styled.div`
  height: 5rem;
  /* display: flex; */
  /* align-items: baseline;
  justify-content: center; */
  span {
    transform: scale(1.5);
  }
  @media screen and (max-width: 1279.98px) {
    span {
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 1023.98px) {
    span {
      transform: scale(1);
    }
  }
  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;
const PageLayout = styled.div`
  /* flex: 1; */
  width: 100%;
  height: calc(100vh - 2 * var(--layout-padding));
  min-width: 0;
  @media screen and (max-width: 767.98px) {
    grid-area: main;
  }
`;
function Layout(props: ComponentProps<any>) {
  const children: ReactChildren = props.children;
  const logoRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(logoRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(logoRef.current, { scale: 0.9 }, { scale: 1, duration: 1 });
  }, [logoRef]);

  return (
    <>
      <GlobalStyle />
      <main>
        <AppLayout>
          {/* <div className="sidebar"> */}
          <SidebarWrapper>
            <LogoWrapper ref={logoRef}>
              <Image src="/favicon.png" width={140} height={50} alt="" />
            </LogoWrapper>
            <Sidebar></Sidebar>
            {/* <div className="sidebar__item">
              <IconLogout />
              <span></span>
            </div> */}
          </SidebarWrapper>

          {/* </div> */}
          <PageLayout>{children}</PageLayout>
        </AppLayout>
      </main>
    </>
  );
}

export default Layout;

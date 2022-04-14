import Sidebar from 'components/sidebar/Sidebar';
import React, {ComponentProps} from 'react'
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components"
import {BrowserRouter as Router} from "react-router-dom";
function Layout({children } : ComponentProps<any>) {
    const DashboardLayout = styled.div`
        //dimensions 
        height: 100vh;
        width: 100vw;
        //display 
        display: grid;
        grid-template-columns: 18% 82%;
        /* column-gap: 1rem; */
    `;
    const SideBarLayout = styled.div`
        //dimensions
        height: 100%;
        width: 100%;

        //display
        background-color: var(--gray) ;
    `
    const MainLayout = styled.div`
        //dimensions
        height: 100%;
        width: 100%;
        //display

    `
  return (
    <>
      <GlobalStyle/>
    <DashboardLayout>
       <Sidebar/>
    
      <MainLayout>
        {children}
      </MainLayout>
    </DashboardLayout>
    </>
  )
}
export const GlobalStyle = createGlobalStyle`

:root {
  --swiper-navigation-size: 34px;
    --primary-color: #1cc28b;
    --lighter-primary-color: #a5ffe1;
    --gray: #F3F4F6;
    --lighter-gray: #b7c6cc;
    --dark-gray: #D1D2D3;
    --white: #fff;
    --dark: #2b2945;
    --secondary-color: #ff8345;
    --secondary-background: #F5F9F8;
    --radius:.4rem;
    --layout-padding: 1.75rem;
    --fs-small: 1rem;
    --fs-medium: 1.25rem;
    --fs-large: 1.5rem;
    --fs-xlarge: 2rem;
    --line-height-small: 1.5;
    --line-height-medium: 1.75;
    --line-height-large: 2;
    --line-height-xlarge: 2.5;
    --side-bar-size : 15rem;
    --header-height : 5rem;
    --dangerous : #a32e2c;
    --active : #4f8a30;
    --warning : #eec762;
}
/* html {
    scroll-behavior: smooth;
} */
*{ 
    font-family:  'Lato','Poppins','Josefin Sans', sans-serif;
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
      font-family:  'Lato','Poppins','Josefin Sans', sans-serif;

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
export default Layout
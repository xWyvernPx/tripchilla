import React, { MouseEventHandler, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import {IconSmartHome,IconSettings,IconUser,IconCar} from "@tabler/icons"
import Link from 'next/link'
import {BrowserRouter as Router} from 'react-router-dom'
interface Props {
    backgroundUrl : string
}

function Sidebar() {
   const router = useRouter();
   useEffect(() => {
        console.log(router.pathname)     
   }, [router.pathname])

  
  return (
    <SidebarLayout>
   
        <Logo backgroundUrl='https://source.unsplash.com/random'/>
        <SidebarArea>
            <SidebarItem>
                <IconSmartHome/>
                <span>
                    <Link prefetch href={`/`}>Home</Link>
                </span>
            </SidebarItem>
            <SidebarItem>
                <IconUser/>
                <span>
                    <Link prefetch href={`/users`}>User</Link>
                </span>
            </SidebarItem>
            <SidebarItem>
                <IconCar/>
                <span>
                    <Link prefetch href={`/trips`}>Trips</Link>
                </span>
            </SidebarItem>
            <SidebarItem>
                <IconSettings/>
                <span>
                    <Link prefetch href={`/settings`}>Settings</Link>
                </span>
            </SidebarItem>
        </SidebarArea>
    </SidebarLayout>
  )
}

const SidebarLayout = styled.div`
    //dimension 
    width: 100%;
    height: 100%;
    padding: var(--layout-padding) 0;
    //display
    display: flex;
    flex-direction: column;
    background-color: var(--gray) ;
`
const Logo = styled.div`
    //dimension
    width: 50%;
    height: auto;
    aspect-ratio: 1;
    flex : 0;
    //display
    display: block;
    margin: 0 auto;
    background : url(${(props : Props) => props.backgroundUrl});
    background-size: cover;
    background-position: center;
`

const SidebarArea = styled.ul`
    //dimensions
    width: 100%;
    flex: 1;
    padding : var(--layout-padding);
    //display
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    
    @media screen and (max-width: 767.98px) {
        row-gap: 1.5rem;
    }
    
`
const SidebarItem = styled.li`
    //dimensions
    width: 100%;
    height: fit-content;
    padding: 1rem .2rem ;
    padding-left: .8rem;
    border-radius: var(--radius);
    //display 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    //typo 
    font-weight: 600;
    svg {
        flex-shrink: 0;
    }
    &:hover {
        //display
        background-color: var(--primary-color);
        //typo
        color : var(--white);
        //icon 
        svg {
            transform: scale(1.15);
        }
    }
    &.nav-active {
        //display
        background-color: var(--primary-color);
        //typo
        color : var(--white)
    }
    //responsive
    @media screen and (max-width: 767.98px) {
        
        padding: .5rem 0.1rem;
        justify-content: center;
        
        span{
            display: none;
        }
       
    }
    
    `
export default Sidebar
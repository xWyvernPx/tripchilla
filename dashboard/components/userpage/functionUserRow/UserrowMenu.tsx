import React, { useState,ComponentProps } from 'react'
import styled from 'styled-components'
import { IconDotsVertical } from "@tabler/icons"

interface Props {
   
}


const UserrowMenu: React.FC<ComponentProps<any>> = ({children}) => {
    const [menuState, setMenuState] = useState(false);
  const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {});
    }
    return child;
  });

    return (
        <UserMenuWrapper onClick={()=>setMenuState(!menuState)} onBlur= {()=>  setMenuState(false)}>
            <IconDotsVertical />
            <UserMenu className={`${menuState? "active-menu" : ""}`}  >
                {childrenWithProps}
            </UserMenu>
        </UserMenuWrapper>
    )
}
const UserMenu = styled.div`
    //dimension 
    width: fit-content;
    height: fit-content;
    padding : 1rem .5rem;
    //display
    display: inline-flex;
    flex-direction: column;
    background-color: white;
    border-radius: var(--radius);
    box-shadow: 0px 4px 10px -2px rgba(0, 0,0,0.3);
    visibility: collapse;
    //position 
    position: absolute;

    top:100%;
    z-index: 10;
    transform: translateX(-105%);
    &.active-menu {
        visibility: visible;
    }
    
`
export const MenuButton = styled.span`
    //dimension 
    width: 100%;
    height: fit-content;
    padding : .5rem 1rem;
    //display 
    display: inline-block;
    //typo
    /* color :  */
    font-weight: bold;
    &:hover {
        background-color: var(--primary-color);
        border-radius:  var(--radius);
        color : white;
    }
`
const UserMenuWrapper = styled.button`
    //position
    position: relative;
`
export default UserrowMenu
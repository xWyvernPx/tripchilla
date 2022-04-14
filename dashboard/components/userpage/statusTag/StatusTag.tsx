

import React from 'react'
import styled from 'styled-components'
interface Props {
    state: string,
    color : "red" | "green" | "yellow"
}
const TagWrapper = styled.div`
    /* demesion */
    width:fit-content;
    height : fit-content;
    padding : .5rem;
    //display 
    display: block;
    border-radius: var(--radius);
    background-color: ${(props )=> { 
        console.log(props.color)
        if (props.color == "green") return `var(--active)` 
        else if (props.color == "yellow") return `var(--warning)` 
        else if(props.color == "red") return `var(--dangerous)`; }};
    
        /* typo */
        color : white;
        font-weight:600;
`
const StatusTag:React.FC<Props> = ({state ,color}) => {
  return (
        <TagWrapper color={color}>
            {state}
        </TagWrapper>
  )
}
export default StatusTag
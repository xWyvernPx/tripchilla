import React from 'react'
import styled from "styled-components"
interface Props {
    page: number,
    limit : number,
    total : number,
    onNextHandle : React.MouseEventHandler,
    onPrevHandle : React.MouseEventHandler,
}
interface ButtonProps {
    prev : boolean,
}
const PaginationBar: React.FC<Props> = ({page,limit,total,onNextHandle,onPrevHandle}) => {
  return (
    <Pagination>
        <span>Items per page {limit}</span>
        <NavButton disabled={page===1 ?true : false} onClick={onPrevHandle}>◀</NavButton>
        <NavButton disabled = {(page)*limit >= total ?true : false} onClick={onNextHandle}>▶</NavButton>
    </Pagination>
  )
}
const NavButton = styled.button`
/* dimension */
width: fit-content;
height: fit-content;
padding :.6rem 1.2rem ;
//display
background-color: var(--gray);
border-radius: var(--radius);
`
const Pagination = styled.div `
//dimension
margin-top: 1rem;
//display
    display : flex;
    justify-content : flex-end;
    column-gap : 1rem;
    align-items : center;
`
export default PaginationBar
import React from 'react'
import styled from 'styled-components'
interface Props {
    content? : React.ReactNode
}
const PageHeader :React.FC<Props> = ({content}) => {
  return (
    <HeaderLayout>
        {content}
    </HeaderLayout>
  )
}
const  HeaderLayout = styled.div`
    //dimensions
    width: 100%;
    height : var(--header-height);
    padding: 0 .5rem;
    flex-grow: 0;
    flex-shrink: 0;
    //display
    /* background: red; */
    
`

export default PageHeader
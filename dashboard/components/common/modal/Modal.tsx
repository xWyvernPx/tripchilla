import React, {ComponentProps, MouseEventHandler} from 'react'
import styled from 'styled-components';
import {IconX} from '@tabler/icons'
interface ModalProps {
    formComponent?: React.ReactNode;
    onCloseModal : MouseEventHandler;
}
const Modal :React.FC<ModalProps> = (props)=> {
    const {formComponent,onCloseModal} = props;
    
    return (
    <ModalWrapper>
        <CloseButton onClick={onCloseModal}><IconX/></CloseButton>
        {formComponent}
    </ModalWrapper>
  )
}
const ModalWrapper = styled.div`
    //dimensions
    /* width: 70vw;
    height: 70vh; */
    //display
    display: grid;
    place-items: center;
    /* background-color: rgba(0,0,0,0.7); */
    background-color : white;
    box-shadow: 2px 3px 10px 2px rgba(0,0,0,0.2);
    //position
    position: absolute;
    inset:10%;
`
const CloseButton = styled.button `
    width: fit-content;
    height: fit-content;
    padding : .5rem;
    //position
    position: absolute;
    right: 0;
    top:0;
`
export default Modal
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { IconCalendarMinus } from "@tabler/icons";
interface Props {
  backgroundImage: string;
}
const CardLayout = styled.div`
  //demension
  width: 20rem;
  height: 6.5rem;
  padding: 0.6rem;
  //display
  display: flex;
  align-items: center;
  gap: 0.6rem;
  //border
  border-radius: var(--radius);
  border: 1px solid var(--lighter-gray);
  overflow: hidden;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1279.98px) {
    width: 17rem;
    height: 5.5rem;
    /* padding: 0.3rem; */
  }
  
`;
const CardImage = styled.div`
  //demension
  width: auto;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: var(--radius);
  flex: 0;
  //display
  background-image: url(${(props: Props) => props.backgroundImage});
  @media screen and (max-width: 1279.98px) {
    height: 95%;
  }
  
`;
const CardContent = styled.div`
  //demension
  flex: 1;
  h3 {
    color: var(--dark);
  }
`;
const DateBlock = styled.div`
  //demension
  user-select: none;
  width: 100%;
  height: fit-content;
  padding-bottom: 0.3rem;
  //display
  display: flex;
  gap: 0.5rem;
  align-items: center;
  //typography
  color: var(--gray);
  font-size: var(--fs-small);
  svg {
    transform: scale(0.9);
  }
`;
const Participants = styled.div`
  //demension
  width: 100%;
  height: fit-content;
  //display
  display: flex;
  /* gap: 0.2rem; */
  div:nth-child(2) {
    transform: translateX(-0.3rem);
    z-index: -1;
  }
  div:nth-child(3) {
    transform: translateX(-0.6rem);
    z-index: -2;
  }
  h4 {
    font-size: var(--fs-small);
    color: var(--primary-color);
    font-weight: 600;
    transform: translateX(-0.4rem);
    &::before {
      content: "+";
    }
  }
`;
const ParticipantImage = styled.div`
  //demension
  width: 1.5rem;
  height: 1.5rem;
  aspect-ratio: 1/1;
  border-radius: var(--radius);
  box-shadow: 0 0 0 0.15rem var(--white);
  //display
  background: url(${(props: Props) => props.backgroundImage});
`;
function ScheduleCard() {
  return (
    <CardLayout>
      <CardImage backgroundImage="https://picsum.photos/1024/1024" />
      <CardContent>
        <h3>Crooked Forest</h3>
        <DateBlock>
          <IconCalendarMinus />
          <h4>16 June - 20 June</h4>
        </DateBlock>
        <Participants>
          <ParticipantImage backgroundImage="https://picsum.photos/256/256" />
          <ParticipantImage backgroundImage="https://picsum.photos/256/256" />
          <ParticipantImage backgroundImage="https://picsum.photos/256/256" />
          <h4>5</h4>
        </Participants>
      </CardContent>
    </CardLayout>
  );
}

export default ScheduleCard;

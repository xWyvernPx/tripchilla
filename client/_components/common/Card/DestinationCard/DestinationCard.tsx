import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { IconMapPin, IconStar } from "@tabler/icons";
import Image from "next/image";
import { spawn } from "child_process";

interface backgroundUrl {
  backgroundUrl?: string;
}

interface DestCardProps {
  data: any;
  onSelected: MouseEventHandler;
}

const DestinationCard: React.FC<DestCardProps> = (props) => {
  const { data, onSelected } = props;
  return (
    <CardWrapper onClick={() => onSelected(data)}>
      <CardBackground
        id="destcardbg"
        backgroundUrl="https://img.freepik.com/free-vector/outdoor-nature-adventure-camping-illustration-cartoon-flat-tourist-camp-with-picnic-spot-tent-among-forest-mountain-landscape_1150-37344.jpg?t=st=1649253110~exp=1649253710~hmac=8a9a79b71b0659ebdf97e4a712bd7f30a6899129749e780efe4205deb50227d8&w=2000"
      ></CardBackground>
      <h3>
        {data && data.name}
        <span>{data && data.name}</span>
      </h3>
      <div>
        <Properties>
          <IconMapPin />
          <h4>Greenland {/**/}</h4>
        </Properties>
        <Properties>
          <IconStar />
          <h4>{data && data.rating}</h4>
        </Properties>
      </div>
    </CardWrapper>
  );
};
const CardWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 1.5rem;
  /* width: 12rem; */
  width: fit-content;
  min-width: fit-content;
  /* height: 16rem; */
  aspect-ratio: 3/4;

  overflow: hidden;
  border-radius: var(--radius);
  flex-direction: column;

  //   align-items: center;
  gap: 0.5rem;
  justify-content: flex-end;
  cursor: pointer;
  box-shadow: 0px 10px 18px -5px rgba(0, 0, 0, 0.25);
  h3 {
    max-width: 12rem;
    color: var(--white);
    font-weight: semi-bold;
    z-index: 1;

    text-overflow: ellipsis;
    line-clamp: 3;
    /* white-space: nowrap; */
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
  div {
    display: flex;
  }

  &:hover {
    #destcardbg {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 1629.98px) {
    padding: 1rem;
  }
  @media screen and (max-width: 1099.98px) {
    h3 {
      max-width: 14rem;
    }
  }
  @media screen and (max-width: 767.98px) {
    h3 {
      max-width: 9rem;
      -webkit-line-clamp: 2;
    }
  }
  @media screen and (max-width: 640.98px) {
    padding: 0.5rem;
    h3 {
      max-width: 8.5rem;
      -webkit-line-clamp: 2;
    }
  }
`;
const Properties = styled.div`
  margin-right: 0.5rem;
  display: flex;
  gap: 0.05rem;
  justify-content: center;
  align-items: center;
  color: var(--white);
  svg {
    transform: scale(0.7);
    z-index: 1;
  }
  h4 {
    font-weight: normal;
    z-index: 1;
  }
  @media screen and (max-width: 1023.98px) {
    gap: unset;
  }
`;
const CardBackground = styled.div`
  background-image: ${(props: backgroundUrl) => `url(${props.backgroundUrl})`};
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  transition: transform 0.3s ease-in-out;
  border-radius: var(--radius);
`;
export default DestinationCard;

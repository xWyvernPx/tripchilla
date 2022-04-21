import { IconMapPin, IconStar } from "@tabler/icons";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
interface backgroundUrl {
  backgroundUrl?: string;
}
const HeadlineWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding : .3rem 1.5rem;
  padding-left: 0;
  /* overflow: hidden; */
  &:hover {
    cursor: pointer;
  }
`;

const HeadlineImage = styled.div`
  width: 4rem;
  height: auto;
  aspect-ratio: 1/1;
  background: ${(props: backgroundUrl) => `url(${props.backgroundUrl})`};
  background-position: center;
  background-size: cover;
  border-radius: var(--radius);
`;
const HeadlinePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0;

  font-size: var(--fs-large);
  font-weight: 600;
  &::after {
    content: "/day";
    font-size: 0.75rem;
    color: var(--gray);
    font-weight: normal;
  }
  &::before {
    content: "$";
    font-size: var(--fs-large);
    color: var(--dark);
  }
`;
const Properties = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  color: var(--gray);
  svg {
    transform: scale(0.7);
    z-index: 1;
  }
  h4 {
    font-weight: normal;
    z-index: 1;
  }
`;
const HeadlineContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  h3 {
    color: var(--dark);
  }
  div {
    display: flex;
    gap: 0.5rem;
  }
`;
function HeadlineContent(): JSX.Element {
  return (
    <HeadlineContentWrapper>
      <h3>Redwood Forest</h3>
      <div>
        <Properties>
          <IconMapPin />
          <h4>Greenland {/**/}</h4>
        </Properties>
        <Properties>
          <IconStar />
          <h4>4.8</h4>
        </Properties>
      </div>
    </HeadlineContentWrapper>
  );
}
function DestHeadline() {
  return (
    <HeadlineWrapper>
      <HeadlineImage backgroundUrl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <HeadlineContent />
      <HeadlinePrice>150</HeadlinePrice>
    </HeadlineWrapper>
  );
}

export default DestHeadline;

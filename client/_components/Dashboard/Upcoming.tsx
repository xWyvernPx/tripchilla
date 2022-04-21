import React from "react";
import styled from "styled-components";
import { IconBrandFlickr } from "@tabler/icons";
import { ScheduleCard } from "_components/common";
const Layout = styled.div`
  //dimesion
  width: 90%;
  margin-top: 1.5rem;
`;
const LayoutHeadline = styled.div`
  //dimension
  width: 90%;
  height: fit-content;
  //display
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  svg {
    color: var(--gray);
    fill: var(--gray);
    transform: scale(0.8);
    margin-bottom: 1.2rem;
  }
`;
const ScheduleList = styled.div`
  //dimension
  width: 90%;
  height: fit-content;
  //display
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
function Upcoming() {
  return (
    <Layout>
      <LayoutHeadline>
        <h2>Upcoming</h2>
        <IconBrandFlickr />
      </LayoutHeadline>
      <ScheduleList>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </ScheduleList>
    </Layout>
  );
}

export default Upcoming;

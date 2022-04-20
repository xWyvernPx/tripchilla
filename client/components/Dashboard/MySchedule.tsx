import { IconBrandFlickr } from "@tabler/icons";
import React from "react";
import styled from "styled-components";
import { ScheduleCard } from "components/common";
const Layout = styled.div`
  //dimesion
  width: 90%;
  margin-top: 1rem;
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
function MySchedule() {
  return (
    <Layout>
      <LayoutHeadline>
        <h2>My Schedule</h2>
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

export default MySchedule;

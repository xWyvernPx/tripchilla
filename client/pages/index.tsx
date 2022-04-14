import type { NextPage } from "next";
import styled from "styled-components";
import AccountPanel from "../components/common/AccountPanel/AccountPanel";
import Ads2 from "../components/common/Ads/Ads2";
import ScheduleCard from "../components/common/ScheduleCard/ScheduleCard";
import BestChoice from "../components/Dashboard/BestChoice";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import MySchedule from "../components/Dashboard/MySchedule";
import Recommend from "../components/Dashboard/Recommend";
import Upcoming from "../components/Dashboard/Upcoming";
const DashboardLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 0;

`;
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  row-gap: 2rem;
  /* max-width: 100%; */
  height: 100%;
  padding: var(--layout-padding);
  background-color: var(--secondary-background);
  border-radius: var(--radius);
  /* flex: 5; */
`;
const RightSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: var(--layout-padding);
  padding-right: 0;
`;
const ContentBottom = styled.div`
  flex: 1;
  display: flex;
  gap: 1.5rem;
`;
const Home: NextPage = () => {
  return (
    <DashboardLayout>
      <MainLayout>
        <DashboardHeader />
        <Recommend />
        <ContentBottom>
          <BestChoice />
          <Ads2 />
        </ContentBottom>
      </MainLayout>
      <RightSidebar>
        <AccountPanel/>
        <MySchedule />
        <Upcoming />
      </RightSidebar>
    </DashboardLayout>
  );
};

export default Home;

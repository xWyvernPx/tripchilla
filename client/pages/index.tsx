import type { NextPage } from "next";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { AccountPanel, Ads2, Modal } from "components/common";
import {
  BestChoice,
  DashboardHeader,
  MySchedule,
  Recommend,
  Upcoming,
} from "../components/Dashboard/index";
import useTrips from "hooks/useTrips";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState({
    show: true,
    component: null,
  });
  const { trips, getTourById } = useTrips();
  const handleCloseModal = useCallback(() => {
    setShowModal({
      show: false,
      component: null,
    });
  }, []);
  const handleDetailModal = useCallback(() => {
    setShowModal({
      show: false,
      component: null,
    });
  }, []);

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
        <AccountPanel />
        <MySchedule />
        <Upcoming />
      </RightSidebar>
      {showModal.show && (
        <Modal onCloseModal={handleCloseModal} formComponent={<h1>Check</h1>} />
      )}
    </DashboardLayout>
  );
};
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
export default Home;

import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { AccountPanel, Ads2, Modal } from "_components/common";
import { useNavigate } from "react-router-dom";
import {
  BestChoice,
  DashboardHeader,
  MySchedule,
  Recommend,
  Upcoming,
} from "../_components/Dashboard";
import useTrips from "hooks/useTrips";
import DetailTrip from "_components/MyTrip/Detail Trip/DetailTrip";
import LoginButton from "_components/common/AccountPanel/LoginButton/LoginButton";
import LoginScreen from "_components/LoginScreen/LoginScreen";
import { authAtom } from "_states";

const Home: NextPage = () => {
  const authState = useRecoilValue(authAtom);
  const [showModal, setShowModal] = useState({
    show: false,
    component: DetailTrip,
    payload: null,
  });
  const { trips, getTourById } = useTrips();
  const handleCloseModal = useCallback(() => {
    setShowModal({
      ...showModal,
      show: false,
    });
  }, []);

  const handleCardClick = useCallback((payload: any) => {
    setShowModal({
      show: true,
      component: DetailTrip,
      payload,
    });
  }, []);
  const handleLoginButtonClick = useCallback((payload?: any) => {
    setShowModal({
      show: true,
      component: LoginScreen,
      payload,
    });
  }, []);
  const navigate = useNavigate();
  // if (authState)
  return (
    <DashboardLayout>
      <MainLayout>
        <DashboardHeader />
        <Recommend listDestination={trips} handleCardClick={handleCardClick} />
        <ContentBottom>
          <BestChoice />
          <Ads2 />
        </ContentBottom>
      </MainLayout>
      <RightSidebar>
        {authState ? (
          <AccountPanel />
        ) : (
          <LoginButton handleClick={handleLoginButtonClick} />
        )}
        <MySchedule />
        <Upcoming />
      </RightSidebar>
      {showModal.show && (
        <Modal
          onCloseModal={handleCloseModal}
          formComponent={
            <showModal.component
              payload={showModal.payload}
            ></showModal.component>
          }
        />
      )}
    </DashboardLayout>
  );
};
const DashboardLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow-y: auto;
`;
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: 0;
  row-gap: 2rem;
  /* max-width: 100%; */
  height: fit-content;
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

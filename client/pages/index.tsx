import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
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
import useAuth from "_actions/auth.action";
import modalState from "_states/popup/modal";
import useModal from "_actions/modal.action";

const Home: NextPage = () => {
  const { trips, getTourById } = useTrips();
  const { getSaveUser } = useAuth();
  const { closeModal } = useModal();
  useEffect(() => {
    getSaveUser();
  }, []);

  const authState = useRecoilValue(authAtom);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleCardClick = useCallback((payload: any) => {
    setShowModal({
      isOpen: true,
      component: "DetailTrip",
      payload,
    });
  }, []);
  const handleLoginButtonClick = useCallback((payload?: any) => {
    setShowModal({
      isOpen: true,
      component: "LoginScreen",
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
      {showModal.isOpen && (
        <Modal
          onCloseModal={closeModal}
          formComponent={
            showModal.component === "DetailTrip" ? (
              <DetailTrip />
            ) : (
              <LoginScreen />
            )
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

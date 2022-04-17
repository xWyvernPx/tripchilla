import React from "react";
import styled from "styled-components";
import MyTrip from "../../components/MyTrip/MyTrip";
const TripsPage = () => {
  return (
    <StyledTripsPage>
      <PageHeader>
        <h1>My Trips</h1>
      </PageHeader>
      <MyTrip></MyTrip>
    </StyledTripsPage>
  );
};

const StyledTripsPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--secondary-background);
  border-radius: var(--radius);
  overflow-y: auto;
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const PageHeader = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
`;
export default TripsPage;

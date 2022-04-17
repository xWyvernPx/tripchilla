import { IconSearch } from "@tabler/icons";
import Modal from "components/common/modal/Modal";
import PageHeader from "components/common/pageheader/PageHeader";
import PaginationBar from "components/userpage/paginationBar/PaginationBar";
import {
  AddNewButton,
  ButtonProps,
  FuntionArea,
  PageLayout,
  Row,
  Searchbar,
  UserList as TripList,
  UserRow as TripRow,
  UserTable as TripTable,
} from "pages/users";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useTrips from "hooks/useTrips";
import CreateForm from "components/trip page/CreateTripForm/CreateTrip";
import UpdateForm from "components/trip page/UpdateTrip/UpdateTrip";
import DetailForm from "components/trip page/Detail Trip/DetailTrip";

const sample = ["dasdas", "asdas"];
const TripsPage: React.FC = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });
  const [modalShow, setModalShow] = useState({
    state: false,
    FormComp: UpdateForm,
  });
  const { trips } = useTrips();
  const buttons = useMemo(
    (): Array<ButtonProps> => [
      {
        content: "Active/Unactive",
        onClickHandle: (payload?: any) => {
          // TODO : handleActiveUnactive here
        },
      },
      {
        content: "Update Information",
        onClickHandle: (payload?: any) => {
          setModalShow({ ...modalShow, state: true, FormComp: UpdateForm });
        },
      },
      {
        content: "Go to see more detail",
        onClickHandle: (payload?: any) => {
          setModalShow({ ...modalShow, state: true, FormComp: DetailForm });
          console.log(payload);
        },
      },
    ],
    []
  );
  const closeModal = useCallback(
    () => setModalShow({ ...modalShow, state: false }),
    []
  );
  const handleAddNewUser = useCallback(
    () => setModalShow({ ...modalShow, state: true, FormComp: CreateForm }),
    [CreateForm]
  );
  useEffect(() => {}, [pagination]);
  return (
    <PageLayout>
      <PageHeader content={<h1>Trips</h1>} />
      <FuntionArea>
        <AddNewButton onClick={handleAddNewUser}>Add new trip</AddNewButton>
      </FuntionArea>
      <TripList>
        <Searchbar>
          {/* TODO: debounce */}
          <label htmlFor="user-table">
            <IconSearch />
          </label>
          <input type="text" id="user-table" placeholder="Search by name" />
        </Searchbar>
        <TripTable>
          <thead>
            <TripRow>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Max Mem.</th>
              <th>Cost(per day)</th>
              <th>Start</th>
              <th>End</th>
              <th>Status</th>
            </TripRow>
          </thead>
          <tbody>
            {trips.map((trip, i) => (
              <Row data={Object.values(trip)} key={i} buttons={buttons}></Row>
            ))}
          </tbody>
        </TripTable>
        <PaginationBar
          page={pagination.page}
          limit={10}
          total={20}
          onNextHandle={useCallback(() => {
            setPagination({ ...pagination, page: pagination.page + 1 });
          }, [])}
          onPrevHandle={useCallback(() => {
            setPagination({ ...pagination, page: pagination.page - 1 });
          }, [])}
        />
      </TripList>
      {modalShow.state && (
        <Modal
          formComponent={<modalShow.FormComp />}
          onCloseModal={closeModal}
        />
      )}
    </PageLayout>
  );
};

export default TripsPage;

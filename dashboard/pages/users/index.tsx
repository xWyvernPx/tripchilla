import PageHeader from "components/common/pageheader/PageHeader";
import StatusTag from "components/userpage/statusTag/StatusTag";
import React, { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import styled from "styled-components";
import { IconSearch } from "@tabler/icons";
import UserrowMenu, {
  MenuButton,
} from "components/userpage/functionUserRow/UserrowMenu";
import PaginationBar from "components/userpage/paginationBar/PaginationBar";
import Modal from "components/common/modal/Modal";

const sample = ["1","Thanh Phong","16-5-2002","wyvernp","nhochociu1@gmail.com","Beginner"]
function UserPage() {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });
  const [modalShow, setModalShow] = useState(false);
  const buttons = useMemo(():Array<ButtonProps>=>[
      {
        content: "Active/Unactive",
        onClickHandle : ()=> { 
            // TODO : handleActiveUnactive here
         }
      },
      {
          content: "Update Information",
          onClickHandle : ()=> {setModalShow(true);}
      },
  ],[]);
  const closeModal = useCallback(()=> setModalShow(false),[]);

  useEffect(() => {}, [pagination]);
  return (
    <PageLayout>
      <PageHeader content={<h1>Users</h1>} />
      <FuntionArea>
        <AddNewButton>Add new user</AddNewButton>
      </FuntionArea>
      <UserList>
        <Searchbar>
          {/* TODO: debounce */}
          <label htmlFor="user-table">
            <IconSearch />
          </label>
          <input type="text" id="user-table" placeholder="Search by name" />
        </Searchbar>
        <UserTable>
          <thead>
            <UserRow>
              <th>ID</th>
              <th>name</th>
              <th>bod</th>
              <th>phone</th>
              <th>username</th>
              <th>email</th>
              <th>level</th>
              <th>status</th>
            </UserRow>
          </thead>
          <tbody>
            <Row data={sample} buttons= {buttons} ></Row>
          </tbody>
        </UserTable>
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
      </UserList>
      {modalShow && <Modal onCloseModal = {closeModal} />}
    </PageLayout>
  );
}
// ROW WITH DATA AND CUSTOM BUTTON
interface ButtonProps {
  content: string;
  onClickHandle: React.MouseEventHandler;
}
interface RowProps {
  data: Array<string>;
  buttons: Array<ButtonProps>;
}

const Row: React.FC<RowProps> = ({ data, buttons }) => {
  return (
    <UserRow>
      {data.map((ele: any, i: any) => (
        <td key={i}>{ele}</td>
      ))}
      <td>
        <StatusTag state="unactive" color="red" />
      </td>
      <td>
        <UserrowMenu>
          {buttons.map((ele: ButtonProps, i: number) => (
            <MenuButton onClick={ele.onClickHandle} key={i}>
              {ele.content}
            </MenuButton>
          ))}
        </UserrowMenu>
      </td>
    </UserRow>
  );
};
//STYLED-COMPONENT
const PageLayout = styled.div`
  /* dimension */
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  /* display */
  display: flex;
  flex-direction: column;
`;
const FuntionArea = styled.div`
  //dimensions
  width: 100%;
  height: fit-content;
  padding: 1rem;
  //display
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const AddNewButton = styled.button`
  //dimensions
  width: fit-content;
  height: fit-content;
  padding: 1rem 2rem;
  //display
  display: inline-block;
  background-color: var(--primary-color);
  border-radius: var(--radius);
  /* typo */
  color: var(--white);
  font-size: var(--fs-medium);
  font-weight: 600;
`;
const UserList = styled.div`
  //dimension
  flex-grow: 1;
  padding: 1rem;
  margin-bottom: 1rem;
  //display
  display: flex;
  flex-direction: column;
  //style
  border: 2px solid var(--dark-gray);
  border-radius: var(--radius);
`;
const Searchbar = styled.div`
  /* dimension */
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  /* display */
  display: flex;
  column-gap: 0.3rem;
  align-items: center;
  border: 2px var(--dark-gray) solid;
  border-radius: var(--radius);
  input {
    padding-left: 0.5rem;
    &:focus {
      outline: none;
    }
  }
`;
const UserTable = styled.table`
  //dimension
  width: 100%;
  margin-top: 1rem;
  flex-shrink: 0;
  /* typo */
  font-size: var(--fs-medium);
  thead > tr {
    border-bottom: unset;
  }
`;
const UserRow = styled.tr`
  border-bottom: 1px var(--dark-gray) solid;
  th {
    //display
    background-color: var(--gray);
    //typo
    font-weight: 600;
    &:first-child {
      border-radius: var(--radius) 0 0 var(--radius);
    }
    &:last-child {
      border-radius: 0 var(--radius) var(--radius) 0;
    }
  }
  td {
  }
  td,
  th {
    padding: 1rem 0;
    text-align: left;
  }
  td:first-child,
  th:first-child {
    padding-left: 1rem;
  }
`;

export default UserPage;

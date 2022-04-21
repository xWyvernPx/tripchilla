import { IconCalendar, IconMapPin, IconStar, IconUsers } from "@tabler/icons";
import React from "react";
import styled from "styled-components";

const DetailLayout = styled.div`
  /* dimension */
  width: 100%;
  height: 100%;
  /* padding: 1rem; */
  //display
  overflow-x: hidden;
  overflow-y: auto;

  //position
  /* position: relative; */
  .heading {
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    transform: translateY(-50%);
    z-index: 5;
    .information {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
`;

const CoverImage = styled.div`
  //dimension
  width: 100%;
  height: 40%;

  //display
  background-color: red;
  /* postion */
  position: relative;
  top: 0;
  left: 0;
  z-index: 5;
`;
const PrimaryImage = styled.div`
  //dimension
  height: 20%;
  aspect-ratio: 1;
  flex: 0 0 20%;
  //display
  background-color: aqua;
  border-radius: 50%;
  //postition
  z-index: 5;
`;

const TripName = styled.span`
  //display
  display: block;
  //typo
  color: var(--dark);
  font-size: 3rem;
  font-weight: bold;
`;
const BriefInfo = styled.div`
  //dimensions
  margin-top: 1rem;
  //display
  display: flex;
  column-gap: 1rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  div > svg,
  div > span {
    font-weight: bold;
    font-size: 1.3rem;
  }
  .rating > svg {
    fill: var(--warning);
    stroke: var(--warning);
  }
  .participants > svg {
    fill: #00afc1;
    stroke: #00afc1;
  }
  .location > svg {
    fill: var(--active);
    stroke: white;
  }
`;
const Schedule = styled.div`
  /* dimension */
  margin-top: 1rem;
  //display
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const DescribeArea = styled.div`
  //dimension
  width: 100%;
  height: fit-content;
  padding: 0 2rem;
  float: inline-start;
  //display
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const DetailTrip = () => {
  return (
    <DetailLayout>
      <CoverImage></CoverImage>
      <div className="heading">
        <PrimaryImage />
        <div className="information">
          <TripName>Tour Around Xuan Huong Lake</TripName>
          <BriefInfo>
            <div className="participants">
              <IconUsers />
              <span>4/8</span>
            </div>
            <div className="rating">
              <IconStar />
              <span>4.5</span>
            </div>
            <div className="location">
              <IconMapPin />
              <span>Da Lat</span>
            </div>
          </BriefInfo>
          <Schedule>
            <DateBlock date={new Date()} /> -
            <DateBlock date={new Date()} />
          </Schedule>
        </div>
      </div>
      <DescribeArea>
        <h1>Description</h1>
      </DescribeArea>
    </DetailLayout>
  );
};

interface DataBlockProps {
  date: Date;
}
const DateBlock: React.FC<DataBlockProps> = ({ date }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
        alignItems: "center",
        fontSize: "var(--fs-medium)",
      }}
    >
      <IconCalendar />
      <span>{date.toDateString()}</span>
    </div>
  );
};
export default DetailTrip;

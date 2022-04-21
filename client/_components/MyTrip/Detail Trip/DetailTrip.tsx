import { IconCalendar, IconMapPin, IconStar, IconUsers } from "@tabler/icons";
import useTrips from "hooks/useTrips";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
interface Props {
  payload: any;
}
const DetailTrip: React.FC<Props> = (props) => {
  const { payload } = props;
  const [trip, setTrip] = useState({});
  const { getTourById } = useTrips();
  useEffect(() => {
    const data = getTourById(payload?.tourId);
    setTrip(data);
  }, [payload]);
  console.log(trip);
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
          <InteractiveButtons>
            <button>Join This Tour</button>
            <button>Add to Favorites</button>
          </InteractiveButtons>
        </div>
      </div>
      <DescribeArea>
        <h1>Description</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          recusandae laboriosam asperiores dolores sit dignissimos fuga possimus
          ex est? Dolore quasi repellat assumenda laborum eum quod, itaque odit
          sint temporibus vitae porro consequatur, tempore veritatis ipsam ex
          non ea quia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Maiores recusandae dicta veritatis tenetur voluptatibus, reiciendis
          dolore et earum illo officia modi ab odit incidunt aliquid eius, odio
          perferendis sapiente, doloremque consequuntur ullam in? Ratione
          voluptatibus aliquid, illo perferendis exercitationem distinctio
          mollitia, delectus animi doloremque, ad doloribus officiis consequatur
          eos suscipit.
        </p>
      </DescribeArea>
    </DetailLayout>
  );
};

const InteractiveButtons = styled.div`
  //dimensions
  width: 100%;
  height: fit-content;
  //display
  display: flex;
  column-gap: 2rem;
  button {
    /* dimension */
    width: fit-content;
    height: fit-content;
    padding: 0.75rem 2rem;
    margin-top: 1rem;
    /* display */
    background-color: var(--lighter-gray);
    border-radius: var(--radius);
    /* typo */
    color: var(--dark);
    font-size: var(--fs-medium);
    font-weight: 600;
    &:hover {
      /* display */
      background-color: var(--primary-color);
      border-radius: var(--radius);
      /* typo */
      color: var(--white);
      font-size: var(--fs-medium);
      font-weight: 600;
    }
  }
`;
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

    z-index: 5;
    .information {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
  position: relative;
  transform: translateY(-20%);
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
    font-weight: 600;
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
  margin-left: 2rem;
  //display
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  //typo
  h1 {
    font-size: var(--fs-xlarge);
  }
  p {
    font-size: var(--fs-medium);
    line-height: 1.5;
  }
`;
export default DetailTrip;

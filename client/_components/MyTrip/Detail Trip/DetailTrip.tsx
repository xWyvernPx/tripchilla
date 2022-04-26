import { IconCalendar, IconMapPin, IconStar, IconUsers } from "@tabler/icons";
import useTrips from "hooks/useTrips";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { PrimaryFormButton, SecondaryFormButton } from "_components/common";
import Alert, { ArlertProps } from "_components/common/Alert/Alert";
import { blobToBase64 } from "_helpers/bufferToString";
import { authAtom } from "_states";
interface Props {
  payload: any;
}
interface Test {
  isShowe: boolean;
}
const DetailTrip: React.FC<Props> = ({ payload }) => {
  const [trip, setTrip] = useState(null);
  const user = useRecoilValue(authAtom);
  const [isJoined, setIsJoined] = useState<boolean>(null);
  const [alert, setAlert] = useState<ArlertProps>({
    message: "",
    onCancel: () => {
      setAlert({ ...alert, isShow: false });
    },
    onConfirm: () => {
      setAlert({ ...alert, isShow: false });
    },
    title: "",
    isShow: false,
  });
  const { getTourById, addNewParticipant, memberChecking } = useTrips();
  const [tripImages, setTripImages] = useState({
    coverImage: null,
  });
  const fetchTrip = useCallback(async () => {
    const trip = await getTourById(payload.tourid);

    setTrip(trip);
  }, [payload]);
  useEffect(() => {
    // console.log(payload);
    fetchTrip();
  }, [payload]);
  useEffect(() => {
    if (trip && trip.tour_photo[0]) {
      blobToBase64(trip.tour_photo[0]?.photo).then((data) =>
        setTripImages({
          coverImage: data,
        })
      );
    }
  }, [trip]);
  const fetchIsJoined = useCallback(
    async (payload: { tourid: string; userid: string }) => {
      const isJoined = await memberChecking(payload);
      setIsJoined(isJoined);
    },
    []
  );
  useEffect(() => {
    if (trip?.tourid && user?.userid) {
      fetchIsJoined({ tourid: trip.tourid, userid: user.userid });
    }
  }, [trip]);
  return (
    <DetailLayout>
      <CoverImage src={tripImages?.coverImage}></CoverImage>
      <div className="heading">
        <PrimaryImage />
        <div className="information">
          <TripName>{trip?.name}</TripName>
          <BriefInfo>
            <div className="participants">
              <IconUsers />
              <span>{`${trip?.participants?.length || 0}/${
                trip?.limit_participants
              }`}</span>
            </div>
            <div className="rating">
              <IconStar />
              <span>{trip?.rating}</span>
            </div>
            <div className="location">
              <IconMapPin />
              <span>{trip?.location_detail?.name}</span>
            </div>
          </BriefInfo>
          <Schedule>
            <DateBlock date={new Date(trip?.start)} /> -
            <DateBlock date={new Date(trip?.end)} />
          </Schedule>
          <InteractiveButtons>
            <PrimaryFormButton
              onClick={() => {
                setAlert({
                  isShow: true,
                  message: "Are you sure to join this tour ?",
                  title: "Confirmation",
                  onCancel: () => {
                    setAlert({ ...alert, isShow: false });
                  },
                  onConfirm: async () => {
                    const rs = await addNewParticipant({
                      date_join: new Date(),
                      tourid: trip?.tourid,
                      userid: user?.userid,
                    });
                    if (rs) {
                      fetchTrip();
                    }
                    setAlert({ ...alert, isShow: false });
                  },
                });
              }}
              disabled={isJoined}
            >
              {`${isJoined ? "Joined" : "Join This Tour"}`}
            </PrimaryFormButton>
            <SecondaryFormButton>Add to Favorites</SecondaryFormButton>
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
      {alert.isShow && (
        <Alert
          message="Are you sure to join this tour?"
          title="Confirmation"
          onCancel={alert.onCancel}
          onConfirm={alert.onConfirm}
        />
      )}
    </DetailLayout>
  );
};

const InteractiveButtons = styled.div`
  //dimensions
  width: 100%;
  height: fit-content;
  margin-top: 1rem;
  //display
  display: flex;
  column-gap: 2rem;
  justify-content: flex-start;
  button {
    margin: unset;
    &:disabled {
      opacity: 0.5;
    }
  }
  /* button {
    dimension
    width: fit-content;
    height: fit-content;
    padding: 0.75rem 2rem;
    margin-top: 1rem;
    display
    background-color: var(--lighter-gray);
    border-radius: var(--radius);
    typo
    color: var(--dark);
    font-size: var(--fs-medium);
    font-weight: 600;
    &:hover {
      display
      background-color: var(--primary-color);
      border-radius: var(--radius);
      typo
      color: var(--white);
      font-size: var(--fs-medium);
      font-weight: 600;
    }
  }  */
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

  //position
  /* position: relative; */
  .heading {
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    gap: 2rem;

    z-index: 5;
    .information {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
interface CoverImageProps {
  src?: string;
}
const CoverImage = styled.div`
  //dimension
  width: 100%;
  height: 40%;

  //display
  background: ${(props: CoverImageProps) =>
    props.src
      ? `url(data:image/jpeg;base64,${props.src})`
      : `url(https://source.unsplash.com/random)`};
  background-size: cover;
  background-position: center;
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
  line-height: 1.5;
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

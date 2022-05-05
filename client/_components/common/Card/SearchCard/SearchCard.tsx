import { IconCalendar } from "@tabler/icons";
import React from "react";
import styled from "styled-components";

const SearchCardLayout = styled.div`
  /* dimesion */
  width: 100%;
  height: 7rem;
  margin: 0.75rem 0;

  padding: 0.5rem;
  display: flex;
  column-gap: 0.5rem;
  align-items: center;

  /* border: 2px solid var(--lighter-gray); */
  border-radius: var(--radius);
  box-shadow: 0px 0px 0px 2px var(--lighter-gray), 1px 2px 9px -6px var(--dark);

  transition: all 0.2s linear;

  &:hover {
    transition: all 0.3 linear;

    cursor: pointer;
    /* border: var(--primary-color); */
    box-shadow: 0px 0px 0px 2px var(--primary-color),
      1px 2px 9px -4px var(--dark);
    color: var(--primary-color);
  }
`;
interface TripImageProps {
  image: string;
}
const TripContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin-bottom: 0.6rem;
    font-size: var(--fs-medium);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: var(--dark-gray);

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
  }
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.15rem;
    color: var(--gray);
    svg {
    }
  }
`;
const TripImage = styled.div<TripImageProps>`
  /* dimension */
  width: 6rem;
  aspect-ratio: 1;
  flex: 0 0 6rem;
  background: url(${(props) => props.image}) center/cover;
  border-radius: var(--radius) 0 0 var(--radius);
`;
const SearchCard: React.FC<{ item: any }> = ({ item }) => {
  return (
    <SearchCardLayout>
      <TripImage image="https://source.unsplash.com/random" />
      <TripContent>
        <h3>{item?.name}</h3>
        <div className="more">
          <span>
            <IconCalendar />
            {"Wed, May 15"}
          </span>
        </div>
      </TripContent>
    </SearchCardLayout>
  );
};

export default SearchCard;

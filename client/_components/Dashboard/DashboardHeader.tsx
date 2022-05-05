import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IconSearch, IconBell } from "@tabler/icons";
import gsap from "gsap";
import { useRecoilValue } from "recoil";
import { authAtom } from "_states";
import InfiniteScroll from "react-infinite-scroller";
import { DestHeadline } from "_components/common";
import SearchCard from "_components/common/Card/SearchCard/SearchCard";
import { debounce } from "lodash";
import useTrips from "hooks/useTrips";
function DashboardHeader() {
  const user = useRecoilValue(authAtom);
  const bellRef = useRef(null);
  const [showResultList, setShowResultList] = useState<{
    show: boolean;
    list: any;
  }>({
    show: false,
    list: null,
  });
  const [pagination, setPagination] = useState<{
    page: number;
    limit: number;
    order?: string;
  }>({
    page: 1,
    limit: 3,
  });
  const [term, setTerm] = useState("");
  const { searchTrip } = useTrips();
  const debounceSearch = useCallback(
    debounce(async (term, page) => {
      const list = await searchTrip(term, page);
      setTerm(term);
      setPagination(list.pagination);
      setShowResultList({ list: list.data, show: true });
    }, 500),
    []
  );
  const fetchMore = useCallback(async (page) => {
    const list = await searchTrip(term, page);
    setPagination(list.pagination);
    setShowResultList({
      ...showResultList,
      list: showResultList.list.concat(list.data),
      show: true,
    });
  }, []);
  let timeOutRef: { current: NodeJS.Timeout | null } = useRef(null);
  useEffect(() => {
    timeOutRef.current = setInterval(() => {
      gsap.from(bellRef.current, {
        duration: 0.6,
        rotateZ: -20,
        yoyo: true,
        repeat: 6,
      });
      gsap
        .to(bellRef.current, {
          duration: 0.6,
          rotateZ: 20,
          yoyo: true,
          repeat: 6,
        })
        .eventCallback("onComplete", () => {
          gsap.to(bellRef.current, {
            duration: 0.1,
            rotateZ: 0,
          });
        });
    }, 15000);
    return () => {
      clearInterval(timeOutRef.current as NodeJS.Timeout);
    };
  }, []);
  console.log(showResultList.list);
  return (
    <Header>
      <Welcome>
        <h1>Hello,{/*TODO : select user and get user's name here*/} 👋</h1>
        <h4>Welcome back and explore the world</h4>
      </Welcome>

      <Utils>
        <SearchBar>
          <input
            type="text"
            id="searchbar"
            placeholder="Search Destination ..."
            onChange={(e) => {
              if (e.target.value.length > 0) {
                debounceSearch(e.target.value, 1);
              }
              if (e.target.value.length === 0) {
                setShowResultList({ ...showResultList, show: false });
              }
            }}
            onBlur={() => {
              setShowResultList({ ...showResultList, show: false });
            }}
          />
          <label htmlFor="searchbar">
            <IconSearch />
          </label>
          {showResultList.show && (
            <ResultList>
              <InfiniteScroll
                pageStart={+pagination.page}
                loadMore={fetchMore}
                hasMore
              >
                {showResultList.list?.map((item: any, i: number) => (
                  <SearchCard key={i} item={item} />
                ))}
              </InfiniteScroll>
            </ResultList>
          )}
        </SearchBar>

        <Notification ref={bellRef}>
          <IconBell />
          <span>4</span>
        </Notification>
      </Utils>
    </Header>
  );
}
const ResultList = styled.div`
  /* dismesion */
  width: 100%;
  min-height: 3rem;
  padding: 0.75rem 1.5rem;
  /* width: 2rem; */
  max-height: 20rem;
  margin-top: 0.5rem;

  //display
  border-radius: var(--radius);
  box-shadow: 1px 2px 9px -5px var(--dark);
  overflow-y: auto;

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    & {
      background: rgba(255, 255, 255, 0.8);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
  }

  background: rgba(255, 255, 255, 0.92);

  /* position */
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 30;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 4.2rem;
`;
const Welcome = styled.div`
  h4 {
    color: var(--gray);
  }
  h1 {
    color: var(--dark);
  }
`;
const Utils = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const SearchBar = styled.form`
  width: 24rem;
  height: 2.5rem;
  padding: 0.1rem 0.3rem 0.1rem 0.8rem;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--white);
  border-radius: calc(var(--radius) * 2);
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

  position: relative;
  color: var(--gray);
  /* overflow: hidden; */
  svg {
    margin-left: 0.2rem;
  }
  input {
    margin-left: 0.5rem;
    flex: 1;
    padding: 0.5rem;
    padding-left: 0.3rem;
    outline: none;
    font-size: var(--fs-sm);
    border-radius: var(--radius);

    &::placeholder {
      color: var(--gray);
    }
    &:focus ~ label {
      svg {
        color: var(--dark);
      }
    }
  }
  @media screen and (max-width: 1139.98px) {
    display: none;
  }
`;
const Notification = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--white);
  display: grid;
  place-items: center;
  position: relative;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  span {
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    position: absolute;
    transform: translate(50%, -50%);
    font-size: 0.55rem;
    font-weight: 500;
    color: var(--white);
    background-color: var(--secondary-color);
  }
`;
export default DashboardHeader;

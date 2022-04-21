import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { IconSearch, IconBell } from "@tabler/icons";
import gsap from "gsap";
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
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--white);
  width: 24rem;
  height: 2.5rem;
  padding: 0.1rem 0.3rem 0.1rem 0.8rem;
  color: var(--gray);
  border-radius: calc(var(--radius) * 2);
  overflow: hidden;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
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
function DashboardHeader() {
  const bellRef = useRef(null);
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

  return (
    <Header>
      <Welcome>
        <h1>
          Hello,{/*TODO : select user and get user's name here*/}WyvernP 👋
        </h1>
        <h4>Welcome back and explore the world</h4>
      </Welcome>

      <Utils>
        <SearchBar>
          <input
            type="text"
            id="searchbar"
            placeholder="Search Destination ..."
          />
          <label htmlFor="searchbar">
            <IconSearch />
          </label>
        </SearchBar>

        <Notification ref={bellRef}>
          <IconBell />
          <span>4</span>
        </Notification>
      </Utils>
    </Header>
  );
}

export default DashboardHeader;

import React from "react";
import Link from "next/link";
import {
  IconTicket,
  IconSmartHome,
  IconBookmark,
  IconInbox,
  IconSettings,
  IconWallet,
  IconLogout,
} from "@tabler/icons";
import styled from "styled-components";

const SidebarLayout = styled.ul`
 
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  li {
    width: 100%;
    border-radius: var(--radius);
    height: 3rem;
    margin-bottom: 0.2rem;
    display: flex;
    padding: 0.5rem;
    padding-left: 1rem;

    align-items: center;
    color: var(--gray);
    transition: all 0.2s ease-in-out;
    span {
      a {
        text-decoration: none;
        color: var(--gray);
      }
      font-size: var(--fs-sm);
      font-weight: 600;
    }
    svg {
      margin-right: 0.5rem;
    }
    &:hover {
      cursor: pointer;
      background-color: var(--primary-color);
      color: var(--white);
      svg {
        transform: scale(1.2);
      }
      span {
        a {
          color: var(--white);
        }
      }
      box-shadow: 0 0.5rem 1rem rgba(28, 194, 139, 0.4);
    }
    &.nav-active{
      background-color: var(--primary-color);
      color: var(--white);
      svg {
        transform: scale(1.2);
      }
      span {
        a {
          color: var(--white);
        }
      }
      box-shadow: 0 0.5rem 1rem rgba(28, 194, 139, 0.4);
    }
  }
  @media screen and (max-width: 767.98px) {
    width: 100%;
    height: 100%;
    flex-direction: row;
    position: relative;
    #des{
      --start-change: calc(100vw - 440px);
  --delta-px : 0.192px;
  --init-x:calc(var(--start-change)*var(--delta-px));
      position: absolute;
      height: 100%;
      background-color: var(--primary-color);
      aspect-ratio: 1;
      border-radius: 50%;
      z-index: -10;
      transform: translateX(var(--init-x)); 
    }
    li{
      height: 100%;
      flex-direction: column;
      justify-content: center;
      padding: unset;
      padding-left: unset;
      span{
        visibility: collapse;
        position: relative;
        bottom: -100px
      }
      svg {
        
      }
      &:hover {
        background-color: unset;
        box-shadow: unset;
        svg {
          transform: translateY(-15px);

        }
        span {
          visibility: visible;
          bottom:0;
      }
    }

  }
}
`;
function Sidebar() {
  return (
    <>
      <SidebarLayout>
        <div id="des" ></div>
        <li className="sidebar__item">
          <IconSmartHome />
          <span>
            <Link href={`/`}>Dashboard</Link>
          </span>
        </li>
        <li className="sidebar__item">
          <IconTicket />
          <span>
            <Link href={`/tickets`}>My Trips</Link>
          </span>
        </li>
        <li className="sidebar__item">
          <IconBookmark />
          <span>
            <Link href={`/favorite`}>Favorites</Link>
          </span>
        </li>
        <li className="sidebar__item">
          <IconInbox />
          <span>
            <Link href={`/inbox`}>Message</Link>
          </span>
        </li>
        {/* <li className="sidebar__item">
          <IconWallet />
          <span>
            <Link href={`/transaction`}>Transaction</Link>
          </span>
        </li> */}
        <li className="sidebar__item">
          <IconSettings />
          <span>
            <Link href={`/settings`}>Settings</Link>
          </span>
        </li>
      </SidebarLayout>
    </>
  );
}

export default Sidebar;

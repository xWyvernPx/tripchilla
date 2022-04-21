import React, { useState } from "react";
import styled from "styled-components";
import { IconChevronDown } from "@tabler/icons";
import Panel from "./Panel";
interface IProps {
  backgroundUrl: string;
}
const AccountPanelLayout = styled.button`
  width: fit-content;
  display: flex;
  height: 4.2rem;
  align-items: center;
  margin-right: 2rem;
  position: relative;
  transition: all 0.3 ease;
  svg {
    &.rotate {
      transition: transform 0.4 linear;
      transform: rotate(180deg);
    }
  }
`;
const AccountAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: url(${(props: IProps) => props.backgroundUrl});
  background-size: cover;
  background-position: center;
`;
const AccountName = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;
  h3 {
    color: var(--dark);
  }
  h4 {
    color: var(--gray);
  }
`;
function AccountPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const chevronRef = React.useRef(null);

  return (
    <AccountPanelLayout
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <AccountAvatar backgroundUrl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
      <AccountName>
        <h3>Jeremy Zuck</h3>
        <h4>Traveler Enthusiast</h4>
      </AccountName>
      <IconChevronDown className={isOpen ? "rotate" : ""} />
      {isOpen && <Panel />}
    </AccountPanelLayout>
  );
}

export default AccountPanel;

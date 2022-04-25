import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconChevronDown } from "@tabler/icons";
import Panel from "./Panel";
import { useRecoilValue } from "recoil";
import { authAtom } from "_states";
import { title } from "process";
import { blobToBase64 } from "_helpers/bufferToString";

interface IProps {
  backgroundBlob?: Buffer;
}

function AccountPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const chevronRef = React.useRef(null);
  const [ava, setAva] = useState(null);
  const user: any = useRecoilValue(authAtom);
  useEffect(() => {
    if (user.ava) {
      blobToBase64(user.ava).then((base64) => {
        setAva(base64);
      });
    }
  }, [user]);
  return (
    <AccountPanelLayout
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <AccountAvatar backgroundBlob={ava} />
      <AccountName>
        <h3>{`@${user && user.username}`}</h3>
        <h4>{user && user.Title.name}</h4>
      </AccountName>
      <IconChevronDown className={isOpen ? "rotate" : ""} />
      {isOpen && <Panel />}
    </AccountPanelLayout>
  );
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
  background: ${(props: IProps) =>
    props.backgroundBlob
      ? `url(data:image/jpeg;base64,${props.backgroundBlob})`
      : `url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)`};
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
export default AccountPanel;

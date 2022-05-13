import styled, { keyframes } from "styled-components";
import UserAgreement from "./UserAgreement";
import ThemeIcon from "./ThemeIcon";
import { useContext } from "react";
import { PopUpContext } from "../contexts/PopUpContext";
import Close from "./Close";
import Button from "./Button";
import AnnouncementsPopUP from "./AnnouncementsPopUp";
import PCBuild from "./PCBuild";
import Changelog from "./Changelog";
import Buttons from "./Buttons";

const PopUp = () => {
  const { popUp, setPopUp } = useContext(PopUpContext);
  const closePopup = () => {
    setPopUp("");
  };

  return (
    <>
      <Div>
        <Wrapper>
          <Panel>
            <ThemeIcon dark />
            <Close action={closePopup} />
          </Panel>
          <Content>
            {popUp === "UserAgreement" && <UserAgreement />}
            {popUp === "Announcements" && <AnnouncementsPopUP />}
            {popUp === "PCBuild" && <PCBuild />}
            {popUp === "Changelog" && <Changelog />}
          </Content>
          <Actions>
            {popUp === "PCBuild" ? (
              <a
                href="https://pcpartpicker.com/user/TechXero/saved/QCtmgs"
                target="_blank"
                rel="noreferrer"
              >
                <Button text="learn more" primary themed />
              </a>
            ) : popUp === "UserAgreement" ? (
              <>
                <Button
                  text="Disagree"
                  clr="rgb(var(--white))"
                  action={() => setPopUp("")}
                  m
                />
                <A
                  href="https://sourceforge.net/projects/xerolinux/files/Releases/Main/xerolinux-main-x86_64.iso/download"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button text="I agree" primary themed />
                </A>
              </>
            ) : (
              <Button action={closePopup} primary themed text="Close" />
            )}
          </Actions>
        </Wrapper>
      </Div>
      <Overlay onClick={closePopup} />
    </>
  );
};

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  padding: 0.5rem;
  & > * {
    float: right;
  }
  & > svg {
    width: 1.5rem;
  }
`;

const Actions = styled.div`
  padding: 0.5rem 1rem 1rem;
  align-self: end;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  background-color: rgb(var(--bg));
  overflow: hidden auto;
  flex-grow: 2;
  padding: 0 1rem 1rem;

  & center {
    text-align: center;
  }

  & p {
    margin-bottom: 2em;
  }

  & blockquote,
  & .bg {
    background-color: rgb(var(--fg));
    color: rgb(var(--bg));
    border-radius: var(--border);
    padding: 1em;

    & span {
      color: rgba(var(--bg2), 85%);
    }
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5 & h6 {
    font-weight: bold;
    color: rgb(var(--fg2));
  }

  & h1 {
    font-size: var(--fz-2);
  }
  & h2 {
    font-size: var(--fz-2);
    text-align: start;
  }
  & h3 {
    font-size: var(--fz-3);
  }
  & h4 {
    font-size: var(--fz-4);
  }
  & h5 {
    font-size: var(--fz-5);
  }
  & h6 {
    font-size: var(--fz-6);
  }

  & ul {
    list-style-type: disc;
  }

  & ol {
    list-style-type: numbers;
  }

  & ol,
  & ul {
    margin-inline-start: 1rem;
    margin-bottom: 2em;
    line-height: 1.7;
  }

  & span,
  & strong {
    font-weight: bold;
    color: rgba(var(--fg2), 85%);
  }

  & a {
    text-decoration: underline;
  }

  & summary {
    text-decoration: underline;
    margin-inline-start: 1rem;
    margin-block-end: 1rem;
    cursor: pointer;
    list-style: revert;
    font-weight: bold;
  }
`;

const overIn = keyframes`
  from {
  opacity: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(var(--black), 80%);
  z-index: 10090;
  backdrop-filter: blur(1rem);
  animation: ${overIn} var(--transition-duration)
    var(--transition-timing-function);
`;

const A = styled.a`
  margin-inline-start: 1rem;
  display: inline-block;
`

const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.5);
  }
`;

const Div = styled.div`
  position: fixed;
  background-color: rgb(var(--bg));
  width: 85%;
  max-width: 1000px;
  height: 90%;
  inset: 0;
  margin: auto;
  z-index: 10099;
  border-radius: var(--border-radius);
  border: var(--border) solid rgb(var(--fg));
  color: rgb(var(--fg));
  overflow: hidden;
  animation: ${popIn} var(--transition-duration)
    var(--transition-timing-function);
`;

export default PopUp;

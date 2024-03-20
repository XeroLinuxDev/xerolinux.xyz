/**
 * SpinsSelection Component.
 *
 * This is a React component for the 'Spins' section of a webpage.
 * The section displays two distros or "spins" of the XeroLinux operating system.
 * Each spin is represented with an ImageCard component that displays an icon,
 * a title, main text, two buttons with customizable actions and text,
 * and a 'details' link.
 *
 * The layout of the section adjusts automatically to the width
 * of the viewport, switching from a column layout to a row layout
 * for viewports wider than 1100px.
 *
 * @module SpinsSelection
 */
//My notes above
import styled from "styled-components";
import Box from "./Box";
import ImageCard from "./ImageCard";
import Title from "./Title";
import { CONTENT } from "../content/SpinsContent";
import xeroG from "../assets/images/XeroG.svg";
import xeroXFCE from "../assets/images/XeroXFCE.svg";

const SpinsSelection = () => {
    return (
        <SpinsSection>
            <div className="container">
                <Box>
                    <Title text="The XeroLinux Spins" />
                    <Cards>
                        <ImageCard
                            icon={xeroG}
                            title={CONTENT[0].title}
                            text={CONTENT[0].text}
                            btn1Action={CONTENT[0].buttonLeftAction}
                            btn1Text={CONTENT[0].buttonLeftText}
                            btn2Action={CONTENT[0].buttonRightAction}
                            btn2Text={CONTENT[0].buttonRightText}
                            detailsLink={CONTENT[0].detailsAction}
                        />
                        <ImageCard
                            icon={xeroXFCE}
                            title={CONTENT[1].title}
                            text={CONTENT[1].text}
                            btn1Action={CONTENT[1].buttonLeftAction}
                            btn1Text={CONTENT[1].buttonLeftText}
                            btn2Action={CONTENT[1].buttonRightAction}
                            btn2Text={CONTENT[1].buttonRightText}
                            detailsLink={CONTENT[1].detailsAction}
                        />
                    </Cards>
                </Box>
            </div>
        </SpinsSection>
    );
};

const SpinsSection = styled.div`
  padding-block: var(--padding-section);
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

export default SpinsSelection;

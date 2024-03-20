/**
 * @file
 * This file defines a Download component in React.
 * The Download component is a styled div section with padding defined by a CSS variable.
 * It is intended to be used as a section of a page where download related content can be placed.
 */
import styled from "styled-components";

const Download = () => {
  return (
    <DownloadSection id="Download" className="container">
    </DownloadSection>
  );
};

const DownloadSection = styled.div`
  padding-block: var(--padding-section);
`;

export default Download;

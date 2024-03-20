/**
 * @file
 * This file defines the Footer component of the application.
 * It imports several components such as Box and SocialLinks, and uses them to construct the Footer component.
 * The Footer component is a section of the application that displays the copyright information, creator's details, and social links.
 * It uses the styled-components library for CSS-in-JS styling.
 */
import styled from "styled-components";
import Box from "./Box";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <Div>
      <Box noBR>
        <Container className="container">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/MAHcodes"
              target="_blank"
              rel="noreferrer"
            >
              MAH.codes
            </a>
          </p>
          <p>XeroLinux all rights reserved &copy; {new Date().getFullYear()}</p>
          <SocialLinks />
        </Container>
      </Box>
    </Div>
  );
};

const Div = styled.div`
  color: rgb(var(--low));
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  & p {
    padding-block: 0.75rem;
  }

  & a {
    text-decoration: underline;
  }
`;

export default Footer;

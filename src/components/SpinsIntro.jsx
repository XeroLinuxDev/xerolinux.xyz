/**
 * This module defines and exports the `SpinsIntroduction` component.
 *
 * `SpinsIntroduction` is a React functional component that fetches and displays
 * the content from a Markdown file (`SpinsIntro.md`), parses it using the `marked` library,
 * and renders the parsed Markdown as HTML into a styled container.
 *
 * @module SpinsIntroduction
 *
 * @requires module:./Box
 * @requires module:../content/SpinsIntro.md
 * @requires module:marked
 * @requires external:react
 * @requires external:styled-components
 */
//My notes above
import styled from "styled-components";
import Box from "./Box";
import { useState, useEffect } from "react";
import SpinsIntro from "../content/SpinsIntro.md";
import { marked } from "marked";

const SpinsIntroduction = () => {

    const [introContent, setIntroContent] = useState("");

    useEffect(() => {
      fetch(SpinsIntro)
        .then((response) => response.text())
        .then((introContent) => {
            setIntroContent(introContent);
        });
    }, []);

    return (
        <SpinsSection>
            <div className="container">
                <Box>
                  <P className="container markdown" dangerouslySetInnerHTML={{ __html: marked.parse(introContent) }} />
                </Box>
            </div>
        </SpinsSection>
    );
};

const SpinsSection = styled.div`
  padding-block: var(--padding-section);
`;

const P = styled.p`
  color: rgb(var(--white));
  font-size: var(--fz-5);
  margin-block: 1em;
  & > a {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export default SpinsIntroduction;
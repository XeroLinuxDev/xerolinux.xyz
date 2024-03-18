/**
 * `SpinsReasons` is a React Component used to fetch and display the content of `SpinsOutro.md` file.
 * The content of `SpinsOutro.md` file is fetched when the component is first mounted.
 * The markdown content is parsed into HTML with marked module and displayed with a `dangerouslySetInnerHTML` method.
 *
 * The Component is styled with styled-components and is composed of the below styled components:
 * - `SpinsOutroSection`: styles the overall section of the component
 * - `P`: styles the paragraph text within the component.
 *
 * @module SpinsReasons
 * @requires styled-components
 * @requires react
 * @requires marked
 * @requires ./Box
 * @requires ../content/SpinsOutro.md
 */
//My notes above
import styled from "styled-components";
import Box from "./Box";
import { marked } from "marked";
import { useState, useEffect } from "react";
import SpinsOutro from "../content/SpinsOutro.md";

const SpinsReasons= () => {

    const [outroContent, setOutroContent] = useState("");

    useEffect(() => {
        fetch(SpinsOutro)
          .then((response) => response.text())
          .then((outroContent) => {
            setOutroContent(outroContent);
          });
      }, []);

    return (
        <SpinsOutroSection>
            <div className="container">
                <Box>
                    <P className="container markdown" dangerouslySetInnerHTML={{ __html: marked.parse(outroContent) }} />
                </Box>
            </div>
        </SpinsOutroSection>
    );

};

const SpinsOutroSection = styled.div`
  flex: 0.5;
  padding-block: var(--padding-section);
  width: 100%;
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

export default SpinsReasons;
/**
 * @file
 * This is a 'Disclaimer' component used in a React application.
 *
 * The component fetches User Agreement text from a markdown file using fetch API, parses it as
 * HTML and renders it.
 * Additionally, the component also includes an image embedded in it.
 *
 * The component makes use of:
 * - The useEffect hook to fetch the markdown content when the component is mounted.
 * - The useState hook to set and manage the Markdown content locally.
 * - The marked library to parse the Markdown content as HTML.
 * - An img element to display an image.
 * - Two styled components, Svg and ImgContainer, that are used for better representation of SVG and image container.
 *
 * @module Disclaimer
 * @requires react
 * @requires marked
 * @requires styled-components
 *
 * @author Your_Name
 * @version 1.0.0
 *
 */
//My notes above
import UserAgreementContent from "../content/UserAgreementContent.md";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { marked } from "marked";
import laptop from "../assets/images/laptop.avif";

const Disclaimer = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(UserAgreementContent)
      .then((response) => response.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return (
    <>

    <ImgContainer>
        <center><img src="https://i.imgur.com/m3CMdCP.png" alt="XeroLinux" /></center>
      </ImgContainer>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content)}}></div>
      </>
  );
};

const Svg = styled.svg`
  position: absolute;
  inset: auto auto 0 -3rem;
  width: 100%;
  transform: translateY(25%);

  & > path {
    fill: rgb(var(--fg));
    font-size: var(--fz-10);
  }
`;

const ImgContainer = styled.div`
  width: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-block-start: -1rem;
  margin-block-end: 1rem;
`;

export default Disclaimer;

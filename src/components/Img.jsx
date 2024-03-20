/**
 * Image Preview Component.
 *
 * This module exports a React component called 'Img' that renders an image
 * with the possibility to click on the image to open a larger preview. Additionally,
 * it provides a visual indication (eye icon) on hover to indicate the image is clickable.
 *
 * The component uses styled-components, which allows the use of ES6 and CSS to
 * style components. It also leverages React's useState hook for managing component
 * state to enable the image preview functionality.
 *
 * @module Img
 * @param {string} src - The source URL of the image
 * @param {string} alt - The alternative text for the image
 * @param {string} maxWidth - The maximum width for the image
 * @exports Img
 **/

// The rest of the code...
import styled from "styled-components";
import eye from "../assets/images/eye.svg";
import { useState } from "react";

const Img = ({ src, alt, maxWidth }) => {
  const [previewImg, setPreviewImg] = useState(false);

  const openPreview = () => {
    setPreviewImg(true);
  };

  const closePreview = () => {
    setPreviewImg(false);
  };

  return (
    <Div maxWidth={maxWidth}>
      <StyledImg
        className={previewImg ? "preview" : undefined}
        onClick={openPreview}
        src={src}
        alt={alt}
      />
      {previewImg && (
        <Overlay onClick={closePreview}>
          <Svg version="1.1" x="0px" y="0px" viewBox="0 0 1792 1792">
            <path
              fill="white"
              d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4
            c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1
            c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"
            />
          </Svg>
        </Overlay>
      )}
    </Div>
  );
};

const Svg = styled.svg`
  width: 2rem;
  cursor: pointer;
  margin: 2rem 2rem auto auto;
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 98998;
  background-color: rgb(var(--black));
  inset: 0;
  display: flex;
`;

const StyledImg = styled.img`
  border: var(--border) solid rgb(var(--fg));
  border-radius: var(--border-radius);
  width: 100%;
  object-fit: contain;
  display: block;

  &.preview {
    position: fixed;
    z-index: 98999;
    inset: 0;
    width: 80%;
    max-height: 100%;
    margin: auto;
  }
`;

const Div = styled.div`
  position: relative;
  border-radius: var(--border-radius);
  margin-block-end: 2rem;
  overflow: hidden;
  max-width: ${(props) => props.maxWidth};
  margin-inline: auto;

  &::before {
    content: url(${eye});
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    opacity: 0;
    z-index: 10000;
    pointer-events: none;
    transform: scale(1.5);
    transition: var(--transition-duration) var(--transition-timing-function);
  }
  &:hover::before {
    opacity: 0.85;
    background-color: rgba(var(--black), 70%);
  }
`;

export default Img;

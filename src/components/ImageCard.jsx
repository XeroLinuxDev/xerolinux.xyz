/**
 * @file ImageCard.js
 *
 * This file contains the definition for ImageCard component which is a React Component.
 * ImageCard component is the card that contains an image icon, a title, a description,
 * and three buttons that on click event open a new tab in the browser and redirect to
 * the link provided as an argument. This component makes use of the 'styled-components'
 * and 'marked' libraries. 'styled-components' is used for styling the component and
 * 'marked' library is used to parse markdown text and convert it into HTML.
 *
 * @component
 * @example
 * // Example usage of ImageCard component
 * <ImageCard
 *    title="Title for Image Card"
 *    icon="icon.png"
 *    alt="Alternative text for image"
 *    text="Some description"
 *    btn1Text="Button 1"
 *    btn2Text="Button 2"
 *    btn1Action="https://www.link-for-button1.com"
 *    btn2Action="https://www.link-for-button2.com"
 *    detailsLink="https://www.link-for-details-button.com"
 * />
 * @requires 'styled-components'
 * @requires 'marked'
 * @requires './Button'
 * @requires './Buttons'
 */
import styled from "styled-components";
import { marked } from "marked";
import Button from "./Button";
import Buttons from "./Buttons";

const ImageCard = ({ title, icon, alt, text, btn1Text, btn2Text, btn1Action, btn2Action, detailsLink }) => {

  return (
    <Div>
      <Img src={icon} alt={alt} />
      <H2>{title}</H2>
      <P className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(text) }} />
      <Buttons justify="center"> 
        <Button
          text={btn1Text}
          themed
          padding=".75em 1.75em"
          fz="var(--fz-5)"
          clr="rgb(var(--white))"
          action={() => window.open(btn1Action, '_blank')}
        />
        <Button
          text={btn2Text}
          themed
          padding=".75em 1.75em"
          fz="var(--fz-5)"
          clr="rgb(var(--white))"
          action={() => window.open(btn2Action, '_blank')}
        />
        <Button
          text="Details"
          themed
          padding=".75em 1.75em"
          fz="var(--fz-5)"
          clr="rgb(var(--white))"
          action={() => window.open(detailsLink, '_blank')}
        />  
      </Buttons>
    </Div>
  );
};

const Div = styled.div`
  text-align: center;

  & > svg {
    width: 5rem;
  }

  & > svg > path {
    fill: rgb(var(--fg));
  }
`;

const Img = styled.img`
  width: 60%;
  height: 60%;
`;

const H2 = styled.h2`
  color: rgb(var(--fg));
  font-size: var(--fz-2);
  font-weight: bold;
  margin-block: 1em;
`;

const P = styled.p`
  color: rgba(var(--fg), 90%);
`;

export default ImageCard;

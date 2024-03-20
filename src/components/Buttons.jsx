/**
 * This file defines a Buttons component in React.
 * The Buttons component is a styled div that takes in two props: 'justify' and 'mb'.
 * 'justify' is used to set the CSS 'justify-content' property of the div, and 'mb' is used to set the CSS 'margin-block' property.
 * If 'justify' is not provided, it defaults to 'start'. If 'mb' is not provided, it defaults to '2rem'.
 * The Buttons component displays its children (any elements nested inside it) and applies specific styles to them.
 * It uses the styled-components library for CSS in JS styling.
 * The div is displayed as a flex container, with items stretching to fill the container.
 * There is a gap of '1rem' between items, and they are centered.
 * If the div contains a link ('a') that contains a button, the button is set to take up 100% of the width.
 * If the viewport is 800px or less in width, the flex items are displayed in a column instead of a row.
 */

import styled from "styled-components";

const Buttons = (props) => {
  return (
    <Div justify={props.justify} mb={props.mb || "2rem"}>
      {props.children}
    </Div>
  );
};

const Div = styled.div`
  margin-block: ${(props) => props.mb};
  display: flex;
  align-items: stretch;
  justify-content: ${(props) => props.justify || "start"};
  gap: 1rem;
  text-align: center;
  flex-wrap: wrap;

  & > a > button {
    width: 100%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default Buttons;

/**
 * @file
 * This file defines a Box component for use in a React application.
 * The Box component is a styled div that can be used as a container for other components.
 * It uses the styled-components library for styling and the ThemeContext for theme-based styling.
 * The Box component accepts a 'noBR' prop to control the border-radius of the div.
 * It also uses a background image defined in the 'darkbg' variable.
 */

import styled from "styled-components";
import darkbg from "../assets/images/darkbg.avif";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Box = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Div noBR={props.noBR} theme={theme}>
      {props.children}
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--bg2));
  border-radius: ${(props) =>
    props.noBR === true ? "0" : "var(--border-radius)"};
  padding: 1rem;
  background-image: url(${darkbg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Box;

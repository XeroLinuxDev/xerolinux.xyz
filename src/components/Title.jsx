/**
 * Styles and exports a Title component.
 * It can render as either an H1 or an H2 HTML elements based on the `sec` property.
 *
 * @module Title
 * @exports Title
 *
 * @param {Object} props - The properties that define how the component renders and behaves
 * @param {String} props.text - The text to be displayed in the Title component.
 * @param {Boolean} [props.sec] - A flag indicating if the title should be displayed as a secondary title (H2). If false or not provided, a primary title (H1) is rendered.
 * @param {Boolean} [props.alignLeft] - A flag indicating if the title should be aligned to the left. If false or not provided, the title is centered.
 * @param {Boolean} [props.fz2] - A flag indicating if the font-size should be set to `var(--fz-2)`. If false or not provided, the font-size is set to `var(--fz-1)`.
 *
 */
//My comments above
import styled from "styled-components";

const Title = ({ text, sec, alignLeft, fz2 }) => {
  return sec ? (
    <H2>{text}</H2>
  ) : (
    <H1 fz2={fz2} al={alignLeft}>
      {text}
    </H1>
  );
};

const H1 = styled.h1`
  font-size: ${(props) => (props.fz2 ? "var(--fz-2)" : "var(--fz-1)")};
  font-weight: bold;
  color: rgb(var(--fg2));
  text-align: ${(props) => (props.al ? "left" : "center")};
  margin-block-end: ${(props) => (props.al ? ".25em" : "1em")};
`;

const H2 = styled.h2`
  font-size: var(--fz-2);
  color: rgb(var(--fg));
  margin-block-end: 1em;
`;

export default Title;

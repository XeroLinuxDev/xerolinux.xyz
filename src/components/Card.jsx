/**
 * Card.jsx
 * 
 * This file defines a React component named `Card` that displays a card with an icon, title, and text.
 * The `Card` component accepts three props: `title`, `icon`, and `text`.
 * The `icon` is expected to be an SVG element, and the `title` and `text` props are expected to be strings.
 * The `text` string is expected to be in Markdown format, which is parsed and inserted as HTML.
 * 
 * The `Card` component uses styled-components for styling.
 */
import styled from "styled-components";
import { marked } from "marked";

const Card = ({ title, icon, text }) => {
  return (
    <Div>
      {icon}
      <H2>{title}</H2>
      <P className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(text) }} />
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

const H2 = styled.h2`
  color: rgb(var(--fg));
  font-size: var(--fz-2);
  font-weight: bold;
  margin-block: 1em;
`;

const P = styled.p`
  color: rgba(var(--fg), 90%);
`;

export default Card;

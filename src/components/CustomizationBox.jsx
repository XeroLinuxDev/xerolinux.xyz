
/**
 * @file CustomizationBox.jsx
 * @desc This file contains the CustomizationBox component, which is responsible for rendering a box with customization options.
 * The component receives a `content` prop, which is an array of objects containing information about each customization option.
 * The component also receives an `ltr` prop, which determines the direction of the component's layout.
 * When a customization option is clicked, the component updates the `themeIndex` state to reflect the selected option.
 * The selected option's name, image, description, and installation guide URL are displayed in the component.
 * The component is styled using styled-components.
 */
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Box from "./Box";
import Img from "./Img";
import Button from "./Button";
import { marked } from "marked";

const CustomizationBox = ({ content, ltr }) => {
  const [themeIndex, setThemeIndex] = useState(0);
  return (
    <Container ltr={ltr}>
      <List ltr={ltr}>
        {content.map((item, i) => (
          <li
            key={`${i}${item}`}
            className={themeIndex === i ? "active" : undefined}
            onClick={() => setThemeIndex(i)}
          >
            {content[i].name}
          </li>
        ))}
      </List>

      <Box>
        <Content ltr={ltr}>
          <ImgWrapper>
            <Img
              src={content[themeIndex].img_url}
              alt={`${content[themeIndex].name} Preview`}
            />
          </ImgWrapper>
          <ContentWrapper className="markdown">
            <P dangerouslySetInnerHTML={{ __html: marked.parse(content[themeIndex].description )}}/>
            <a
              href={content[themeIndex].guide_url}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                text="Installation Guide"
                primary
                themed
                fz="var(--fz-6)"
                padding="1.12em 1.5em"
              />
            </a>
          </ContentWrapper>
        </Content>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  border: var(--border) solid rgb(var(--fg));
  margin-block-end: 2rem;

  flex-direction: ${(props) => !props.ltr && "row-reverse"};

  background-color: rgb(var(--fg));

  border-radius: var(--border-radius);
`;

const List = styled.ul`
  color: rgb(var(--bg));
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;

  & > li {
    cursor: pointer;
    padding: 0.75em 1.25em;
    transition: background-color var(--transition-duration)
      var(--transition-timing-function);
    border-radius: ${(props) =>
      props.ltr
        ? "var(--border-radius) 0 0 var(--border-radius)"
        : "0 var(--border-radius) var(--border-radius) 0"};
  }

  & > li:hover {
    background-color: rgb(var(--fg2));
  }

  & > li.active {
    background-color: rgb(var(--bg2));
    color: rgb(var(--fg));
    font-weight: bold;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;
  flex-direction: ${(props) => !props.ltr && "row-reverse"};

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  flex: 0.3;

  & > img {
    animation: ${fadeIn} 500ms var(--transition-timing-function);
  }
`;

const P = styled.p`
  color: rgb(var(--fg));
  font-size: var(--fz-5);
  margin-block-end: 1em;
  animation: ${fadeIn} 500ms var(--transition-timing-function);
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-direction: column;
  flex: 0.8;

  & > p > a {
    text-decoration: underline;
  }
`;
export default CustomizationBox;

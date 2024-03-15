/**
 * @fileoverview This file imports the styled-components library for styling React components.
 * It uses tagged template literals to style your components and removes the mapping between components and styles.
 * This means that when you're defining your styles, you're actually creating a normal React component, that has your styles bound to it.
 */
import styled from "styled-components";
import Title from "./Title";
import RicesJSON from "../content/Rices.json";
import CustomizationBox from "./CustomizationBox";

const Customization = () => {
  return (
    <Div id="Customization" className="container">
      <Title text="Customization" />

      <Title sec text="Rices/Themes" />
      <CustomizationBox ltr content={RicesJSON} />

    </Div>
  );
};

const Div = styled.div`
  padding-block: var(--padding-section);
`;

export default Customization;

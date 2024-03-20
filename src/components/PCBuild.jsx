/**
 * @module PCBuild
 *
 * @requires module:../assets/images/pcbuild.jpg
 * @requires module:styled-components
 * @requires module:./Title
 * @requires module:./Img
 *
 * This module defines a React component 'PCBuild' that displays information about a PC build.
 * This component uses an image from local assets and two components: 'Title' and 'Img'.
 * It returns a JSX that contains a title, image, and a description about a PC Build.
 * There's a styled paragraph 'p' component with some text and styles conditionally applied based on the 'center' and 'small' props which are passed to it.
 * Lastly, this component is exported as a default export to be used in other JavaScript modules.
 */
import PCimg from "../assets/images/pcbuild.jpg";
import styled from "styled-components";
import Title from "./Title";
import Img from "./Img";

const PCBuild = () => {
  return (
    <div>
      <Title noMT text="StationXero Build Box" />
      <Img maxWidth="85%" src={PCimg} alt="My PC Build" />
      <P>
        That PC is my main one acting as my everyday system. I do all my gaming
        on it. It is a "Beast". I use it to build <span>XeroLinux</span> and other projects. It's
        an AMD Ryzen build. Click button below to check out build parts on PC
        Part Picker 😉
        <br /> <br />
        At this point in time, this beast is running <span>Windows 11 Pro</span> / <span>XeroLinux </span>
        in Dual-Boot, until I decide otherwise.
      </P>
      </div>
  );
};

const P = styled.p`
  text-align: ${(props) => props.center && "center"};
  font-size: ${(props) => props.small && "var(--fz-6)"};
`;

export default PCBuild;

/**
 * @file
 * The `Home` React Component.
 *
 * This is the main landing/Home page of the application. It displays the `Hero`,
 * `Message`, `Features`, `Customization`, and `FAQ` components. It uses the
 * `useContext` hook from React to pull data from a context, specifically the
 * `ReleaseCountdownContext` which provides a countdown to an event.
 *
 * If there is a countdown, it shows the `ReleaseCountdown` component with the
 * countdown time. Otherwise, it shows the `Download` component.
 *
 * It also conditionally renders a visual `Snowfall` effect if the `snowfall`
 * on the settings object is `true`. The settings object is fetched from a JSON
 * file named `Settings.json`.
 */
import Hero from "./Hero";
//import Features from "./Features";
import Customization from "./Customization";
import FAQ from "./FAQ";
import faqsJSON from "../content/FAQs.json";
import { useContext } from "react";
import { ReleaseCountdownContext } from "../contexts/ReleaseCountdownContext";
import ReleaseCountdown from "./ReleaseCountdown";
import Download from "./Download";
import Message from "./Message";
import styled from "styled-components";
import Snowfall from "react-snowfall";
import Settings from "../content/Settings.json";
import Lights from "./Lights";

const Home = () => {
  const countdown = useContext(ReleaseCountdownContext);

  return (
    <div className="Home">
      <Lights />
      <Hero countdown={countdown} />
      <Message />
      {countdown ? <ReleaseCountdown countdown={countdown} /> : <Download />}
        {Settings.snowfall ? (
        <SnowfallContainer>
          <Snowfall snowflakeCount={70} speed={[0.5, 2.5]} wind={[-0.5, 3.0]} />
        </SnowfallContainer>
      ) : null}
    </div>
  );
};

const SnowfallContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 10100;
`;

export default Home;

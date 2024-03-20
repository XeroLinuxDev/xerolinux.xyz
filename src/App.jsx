/**
 * Main application component which defines the overall page structure and routing configuration.
 *
 * This component uses React Router v6 for handling the routing of the application.
 * The different routes defined are '/donate', '/', and '/spins'.
 * Each route renders a specific component. Additionally, global components like `Header`, `Footer`,
 * `Announcements`, and `PopUp` (when applicable) are rendered.
 *
 * {@link PopUpContext} is used to check if a pop up should be displayed in the application.
 *
 * @module App
 * @exports App
 */
//My notes above
import { Route, Routes } from "react-router-dom";
import Donate from "./components/Donate";
import Home from "./components/Home";
import SpinsHome from "./components/SpinsHome"
import Header from "./components/Header";
import { PopUpContext } from "./contexts/PopUpContext";
import PopUp from "./components/PopUp";
import Announcements from "./components/Announcements";
import { useContext } from "react";
import Footer from "./components/Footer";

const App = () => {
  const { popUp } = useContext(PopUpContext);

  return (
    <>
      {popUp && <PopUp popUp={popUp} />}
      <Announcements />
      <Header />
      <Routes>
        <Route path="/donate" element={<Donate img />} />
        <Route path="/" element={<Home />} />
        <Route path="/spins" element={<SpinsHome />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

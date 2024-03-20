/**
 * Changelog Component
 *
 * This file contains the `Changelog` component which fetches a markdown
 * file and uses the `marked` library to parse it into HTML.
 * It then uses React's `dangerouslySetInnerHTML` prop to inject the
 * parsed markdown as inner HTML into a div component.
 *
 * @component
 *
 * @remark
 * The `dangerouslySetInnerHTML` prop is React's replacement for using innerHTML
 * in the browser DOM. Using this prop is risky because setting HTML from code can
 * inadvertently expose users to a cross-site scripting (XSS) attack.
 */
//My Notes above
import { useState, useEffect } from "react";
import { marked } from "marked";
import TreasureContent from "../content/TreasureContent.md";
import Img from "./Img";

const Changelog = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(TreasureContent)
      .then((response) => response.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return <div >
    <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    <Img src="https://i.imgur.com/4B6IwBb.jpeg" alt="XeroG" maxWidth="70%" />
  </div>
};

export default Changelog;

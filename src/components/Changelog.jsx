/**
 * Changelog.jsx
 * 
 * This is a React component that fetches and displays the content of a markdown file.
 * The markdown file is parsed into HTML and inserted into the component's output.
 * 
 * Dependencies:
 * - react: Used to define the component and manage its state.
 * - marked: Used to parse the markdown content into HTML.
 * 
 * The component uses the `useState` and `useEffect` hooks from React to manage state and side effects.
 * The `useState` hook is used to initialize a state variable `content` with an initial value of an empty string.
 * The `useEffect` hook is used to fetch the content of the markdown file when the component mounts.
 * The fetched content of the markdown file is then set to the `content` state variable.
 * The component returns a `div` element that sets its inner HTML to the parsed markdown content.
 */
import { useState, useEffect } from "react";
import { marked } from "marked";
import ChangelogContent from "../content/ChangelogContent.md";

const Changelog = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(ChangelogContent)
      .then((response) => response.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: marked.parse(content)}}></div>
};

export default Changelog;

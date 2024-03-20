/**
 * @file
 * This file defines an AnnouncementsPopUp component for use in a React application.
 * The AnnouncementsPopUp component fetches and displays the content from an external Markdown file.
 * The content is parsed from Markdown to HTML using the marked library and then rendered in a div.
 * The component uses React's useState and useEffect hooks to handle the fetching and rendering of the content.
 */

import AnnouncementsContent from "../content/AnnouncementsContent.md";
import { useState, useEffect } from "react";
import { marked } from "marked";

const AnnouncementsPopUP = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(AnnouncementsContent)
      .then((response) => response.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: marked.parse(content)}}></div>
};

export default AnnouncementsPopUP;

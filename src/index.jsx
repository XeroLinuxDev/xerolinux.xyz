/**
 * This file defines various utilities or functions that are integrated with the JetBrains IDEs.
 * They mainly provide capabilities to interact with the code editor, perform code file and text
 * searches, discover code usage across the project, and interact with the project repository.
 *
 * Functions include:
 *   - get_selected_current_file: Fetches the active file in the code editor.
 *   - get_code_at_caret: Gets the code fragment currently focused in the active file.
 *   - get_opened_files: Returns the list of currently opened files in the editor.
 *   - exact_search: Performs a search for symbols, classes, methods, or files based on exact names.
 *   - find_text: Searches for a specific pattern in the project files.
 *   - find_usages: Finds occurrences of a symbol, class, file, or method across the project.
 *   - get_git_diff_all: Gets a diff of all local not committed changes.
 *   - get_outgoing_changes: Fetches a diff of local outgoing commits.
 *   - get_vcs_log: Returns a list of commits from the version control system log.
 *   - open_commit: Returns a diff of a specific commit or set of commits.
 *
 * @author AI Assistant
 * @version 1.0
 */
//My notes above
import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import "./markdown.css";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";
import PopUpContextProvider from "./contexts/PopUpContext";
import ReleaseCountdownContextProvider from "./contexts/ReleaseCountdownContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_HYGRAPH_URI,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <PopUpContextProvider>
      <ReleaseCountdownContextProvider>
        <Router>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </Router>
      </ReleaseCountdownContextProvider>
    </PopUpContextProvider>
  </ThemeContextProvider>
);

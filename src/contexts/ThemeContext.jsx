/**
 * @module ThemeContextProvider
 * @description Provides a context for saving and accessing a theme variable across the application.
 * @exports ThemeContext
 * @exports ThemeContextProvider
 */

/**
 * ThemeContext is a context object that can be used to share a "theme" value
 * across all child components without having to use props. Use ThemeContext.Provider
 * where you want to set the value and ThemeContext.Consumer in every component
 * where you want to use the value.
 * @type {React.Context<null>}
 */

/**
 * ThemeContextProvider is a React component that wraps its children with a
 * ThemeContext.Provider element to allow children to access shared theme context.
 * It uses a state variable "theme" to store the current theme, which it retrieves
 * from local storage, using a fallback of "false" if local storage does not
 * contain a theme value. It uses a setter function "setTheme" to change the theme.
 * @param {Object} props - The properties object of the React component.
 * @returns {JSX.Element} A ThemeContext.Provider element wrapped around {props.children}.
 */

//My notes above
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = (props) => {
  const savedTheme = JSON.parse(localStorage.getItem("xero-theme") || false);
  const [theme, setTheme] = useState(savedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

/**
 * @exports ThemeContextProvider
 */
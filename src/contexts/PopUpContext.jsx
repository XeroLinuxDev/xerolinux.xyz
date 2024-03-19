/**
 * The PopUpContext module provides a React Context for popup state management.
 *
 * @module PopUpContextProvider
 * @exports PopUpContextProvider
 * @exports PopUpContext
 *
 * @see {@link https://reactjs.org/docs/context.html|React Context}
 *
 * There's a state value `popUp`, initialized as `false`, and its setter function `setPopUp`
 * which can be accessed from any component wrapped in `PopUpContextProvider`.
 *
 * The children components have access and capacity to modify the `popUp` state
 * without needing it to be passed directly as a prop.
 */
//My Notes above
import { createContext, useState } from "react";

export const PopUpContext = createContext(null);

const PopUpContextProvider = (props) => {
  const [popUp, setPopUp] = useState(false);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {props.children}
    </PopUpContext.Provider>
  );
};

export default PopUpContextProvider;

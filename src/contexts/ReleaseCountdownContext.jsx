/**
 * This module provides a React context for a countdown timer.
 * It exports a `ReleaseCountdownContext` and a `ReleaseCountdownContextProvider` component.
 * The `ReleaseCountdownContext` can be used in other components to access the countdown state.
 * The `ReleaseCountdownContextProvider` is a wrapper component that provides the countdown
 * context to all child components in its tree.
 *
 * The countdown is to a hard-coded date "August 12, 2022, 20:00:00 GMT+3". The state of the
 * countdown includes the number of remaining days, hours, minutes, and seconds. The countdown
 * updates every second.
 *
 * @module ReleaseCountdownContextProvider
 *
 * @example
 * // In another component
 * import { ReleaseCountdownContext } from './releaseCountdownContextProvider';
 * const countdown = useContext(ReleaseCountdownContext);
 *
 * @example
 * // To provide context to a component tree
 * import ReleaseCountdownContextProvider from './releaseCountdownContextProvider';
 * <ReleaseCountdownContextProvider>
 *     <MyComponent />
 * </ReleaseCountdownContextProvider>
 */
//My Notes Above
import { createContext, useState, useEffect } from "react";

export const ReleaseCountdownContext = createContext(null);

const ReleaseCountdownContextProvider = ( props ) => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const releaseDate = new Date("August 12, 2022 20:00:00 GMT+3");

    const getCountdown = setInterval(() => {
      const now = new Date();
      const dateDiff = releaseDate - now;
      if (dateDiff <= 0) {
        setCountdown(0);
        clearInterval(getCountdown);
      } else {
        const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
        setCountdown({days, hours, minutes, seconds});
      }
    }, 1000);

    return () => {
      clearInterval(getCountdown);
    }
  }, []);

  return <ReleaseCountdownContext.Provider value={countdown}>
    {props.children}
  </ReleaseCountdownContext.Provider>
}

export default ReleaseCountdownContextProvider;

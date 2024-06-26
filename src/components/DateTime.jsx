/**
 * @file
 * This file defines a React component named DateTime.
 * The DateTime component displays the current date and time.
 * It uses the useState and useEffect hooks from React to manage and update the state.
 * The state is initialized with an empty string and is updated every second with the current date and time.
 * The date and time are formatted to display the name of the day and the name of the month.
 */
import { useState, useEffect } from "react";
import styled from "styled-components";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const updateDateId = setInterval(
      (function updateDate() {
        const dateInstance = new Date();
        const timeString = `${days[dateInstance.getDay()]}, ${
          months[dateInstance.getMonth()]
        } ${dateInstance.getDate()}, ${dateInstance.getFullYear()} | ${(
          "0" + dateInstance.getHours()
        ).substr(-2)}:${("0" + dateInstance.getMinutes()).substr(-2)}`;
        setCurrentTime(timeString);
        return updateDate;
      })(),
      30 * 1000
    );

    return () => {
      clearTimeout(updateDateId);
    };
  }, []);

  return (
    <Div>
      <P>{currentTime}</P>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  color: rgb(var(--white));
  padding: 0.25rem 6rem;
  border-radius: var(--border-radius);
  opacity: 0.9;
  height: fit-content;
  width: fit-content;
  background-color: rgba(var(--bar), 50%);
  backdrop-filter: blur(1rem);
  box-shadow: 0 0 12px -2px rgb(var(--black));

  position: absolute;
  inset: 0;
  margin: auto;
  margin-top: -250px;
  margin-left: -300px;
  transform: translateY(100%);

  & img {
    width: var(--icon-size);
    height: var(--icon-size);
  }
`;

const P = styled.p`
  font-size: 24px;
  white-space: nowrap;
  &.u {
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    font-size: 8px;
  }
`;

export default DateTime;

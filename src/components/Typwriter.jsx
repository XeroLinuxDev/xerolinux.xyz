import React, { useState, useEffect } from 'react';

const Typewriter = (props) => {
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + props.text.charAt(index));
      index++;
      if (index > props.text.length) {
        clearInterval(intervalId);
        setTyping(false);
        setTimeout(() => {
          setText('');
          setTyping(true);
        }, props.pause);
      }
    }, props.speed);
    return () => clearInterval(intervalId);
  }, [props.text, props.speed]);

  return (
    <span className={props.className}>
      {text}
      <span className={typing ? 'cursor' : ''}>|</span>
    </span>
  );
};

export default Typewriter;
import { useState, useEffect, useRef } from "react";

import React from "react";

const UseRef = () => {
  const [input, setInput] = useState("");
  const previousValue = useRef("");
  useEffect(() => {
    previousValue.current = input;
  }, [input]);
  return (
    <>
      <h1>UseRef</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h2>Current Value: {input}</h2>
      <h2>Previous Value: {previousValue.current}</h2>
    </>
    //This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.
  );
};

export default UseRef;

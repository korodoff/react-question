import React from "react";
import HOC from "./HOC";
const ClickIncrement = (props) => {
  const { counter, handleIncrement } = props;
  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
};
const EnhanceClickCounter = HOC(ClickIncrement, 2);
export default EnhanceClickCounter;

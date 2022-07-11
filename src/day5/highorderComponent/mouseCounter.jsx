import React from "react";
import HOC from "./HOC";
const MouseOverCounter = (props) => {
  const { counter, handleIncrement } = props;
  return (
    <>
      <h1 onMouseOver={handleIncrement}>MouseOverCounter Counter: {counter}</h1>
    </>
  );
};

const EnhanceOverCounter = HOC(MouseOverCounter, 3);
export default EnhanceOverCounter;

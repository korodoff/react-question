import { useState } from "react";

import React from "react";

const Usestate = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter  = ()=>{
    setCounter(counter+1);
  }
  return (
    <>
    <h1>counter: {counter}</h1>
    <button onClick={handleCounter}>increment</button>
    </>
  );
};

export default Usestate;

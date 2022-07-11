import React, { useState } from "react";

const HOC = (Component, value) => {
  const UpgradeComponent = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
      setCounter(counter + value);
    };
    return <Component counter={counter} handleIncrement={handleIncrement} />;
  };
  return UpgradeComponent;
};

export default HOC;

import React, { useContext } from "react";
import { data } from "./createcontext";

const Name = () => {
  const { name } = useContext(data);

  return (
    <>
      <h1>hello my name is {name}</h1>
    </>
  );
};

export default Name;

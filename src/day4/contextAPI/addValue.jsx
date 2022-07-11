import React, { useContext } from "react";
import { data } from "./createcontext";

const AddValue = () => {
  const { setName } = useContext(data);
  const changeval = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={changeval} />
    </>
  );
};

export default AddValue;

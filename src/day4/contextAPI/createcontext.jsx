import React, { createContext, useState } from "react";
export const data = createContext();

const Context = ({ children }) => {
  const [name, setName] = useState("Krut");
  return <data.Provider value={{ name, setName }}>{children}</data.Provider>;
};

export default Context;

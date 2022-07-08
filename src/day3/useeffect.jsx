import { useEffect } from "react";
import React from "react";
import { useState } from "react";

const Useeffect = () => {
  const [a, setA] = useState("my name is Krut");
  const [b] = useState("help ME!");
  const [m, setM] = useState(false);

  useEffect(() => {
    console.log("value Change");
  }, []);

  useEffect(() => {
    console.log("value Change");
  }, [a]);

  const ChangeA = () => {
    setA("my name is Ruthdoff");
  };

  return (
    <>
      {m ? (
        <div>
          {" "}
          <h1>hello {a}</h1>
          <h2>{b}</h2>
          <button onClick={ChangeA}></button>
        </div>
      ) : null}

      <button onClick={() => setM(!m)}>unmount</button>
    </>
  );
};

export default Useeffect;

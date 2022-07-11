import { useState, useEffect } from "react";

const ForExample = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("effect");
  }, [name]);

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  const handleName = (e) => {
    const { value } = e.target;

    setName(value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={handleName} />
      </div>
      <div>
        <div>
          <span>{name}</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default ForExample;

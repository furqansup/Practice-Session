import React, { useState, useEffect } from "react";

function Useeffect() {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interValid = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(interValid);
    };
  }, [time]);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>UseEffect Hook</h1>
      <p style={{ textAlign: "center" }}>Timer : {time}</p>
      <p style={{ textAlign: "center" }}>Count : {count}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Useeffect;

import React, { useState, useEffect } from "react";

function Useeffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interValid = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interValid);
    };
  }, [count]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>UseEffect Hook</h1>
      <p style={{ textAlign: "center" }}>Count : {count}</p>
    </>
  );
}

export default Useeffect;

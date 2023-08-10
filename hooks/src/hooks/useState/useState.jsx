import React, { useState } from "react";

const Usestate = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <>
      <div className="state-container">
        <input
          type="text"
          placeholder="type something..."
          onChange={handleChange}
        />
        <p>{inputText}</p>
      </div>
    </>
  );
};

export default Usestate;

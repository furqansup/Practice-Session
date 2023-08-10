import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {

    if (text === "") {
      alert("Write task first");
      return; // Return early if the text is empty
    }

    const newTodo = {
      title: text,
      status: false,
    };
    setTodo([...todo, newTodo]);
    setText("");
  };

  return (
    <>
      <div className="todo-container container">
        <h1>Todo App</h1>
        <input
          value={text}
          type="text"
          placeholder="write task"
          onChange={handleChange}
        />
        <button onClick={addTodo}>Add</button>
        <p>{text}</p>
        <div className="task">
          <ul>
            {todo.map((items) => (
              <li key={items.id}>{items.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;

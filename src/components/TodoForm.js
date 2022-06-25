import React, { useState, useRef } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
        <input
          value={input}
          onChange={handleChange}
          className={'todo-input edit'}
          placeholder='Edit todo'
          name="text"
          ref={inputRef}
        />
        <button onClick={handleSubmit} className='todo-button edit'>
          Update
        </button>
        </>
      ) : (
        <>
        <input
          value={input}
          onChange={handleChange}
          className="todo-input"
          placeholder="Add a todo"
          name="text"
          ref={inputRef}
        />
        <button onClick={handleSubmit} className="todo-button">
          Add Todo
        </button>
        </>
      )}
    </form>
  );
}

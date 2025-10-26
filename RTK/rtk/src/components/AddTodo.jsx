import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(input);
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Text here"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice";

export default function Todos() {
  const data = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {data.map((todo) => (
        <ul key={todo.id}>
          <li>
            {todo.text}
            <span> </span>{" "}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              remove
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

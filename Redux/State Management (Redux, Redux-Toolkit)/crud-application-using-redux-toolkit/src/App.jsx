import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./redux/todoSlice";
import "./App.css";


const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (editId) {
      dispatch(updateTodo({ id: editId, text }));
      setEditId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText("");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg">
      <h1 className="text-xl font-bold mb-4">CRUD App with Redux Toolkit</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white p-2 my-2 shadow"
          >
            <span>{todo.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditId(todo.id);
                  setText(todo.text);
                }}
                className="text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

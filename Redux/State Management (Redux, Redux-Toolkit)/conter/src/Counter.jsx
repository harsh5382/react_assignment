import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import "./App.css"; // Import the CSS file

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter: {count}</h1>
      <div className="button-container">
        <button
          className="counter-button increment"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="counter-button decrement"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

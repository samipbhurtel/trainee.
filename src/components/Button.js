import React from "react";
import "../styles/Solution2.css";
import { useDispatch } from "react-redux";
import { increment } from "../redux/counter/counterAction";
const Button = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>Add 5</button>
    </>
  );
};

export default Button;

import React from "react";
import Button from "../components/Button";
import "../styles/Solution2.css";
import { useSelector } from "react-redux";

const Solution2 = () => {
  const counter = useSelector((state) => state.counter.counter);
  return (
    <>
      <div className="container py-5">
        <div className="increment">
          <h1>The number is: {counter}</h1>
        </div>
      </div>
      <div className="btn">
        {" "}
        <Button />
      </div>
    </>
  );
};

export default Solution2;

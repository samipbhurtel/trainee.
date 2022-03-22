import React from "react";

const Solution6 = () => {
  //   function func1() {
  //     return {
  //       out: "hello",
  //     };
  //   }

  //   function func2() {
  //     return;
  //     {
  //       out: "hello";
  //     }
  //   }

  //   console.log(func1());
  //   console.log(func2());

  //   When we execute both the functions the output is different. It is different since Javascript executes the code line by line, Javascript automatically inserts a semicolon after the "return" statement if the return expression is not on the same line. In order to correct the faulty programs for every line we forgot to close, it with a semicolon JS will insert it automatically!

  return (
    <>
      <div className="container py-4">
        <h2>Answer:</h2>
        <p>
          When we execute both the functions the output is different. It is
          different since Javascript executes the code line by line, Javascript
          automatically inserts a semicolon after the "return" statement if the
          return expression is not on the same line. In order to correct the
          faulty programs for every line we forgot to close, it with a semicolon
          JS will insert it automatically!
        </p>
      </div>
    </>
  );
};

export default Solution6;

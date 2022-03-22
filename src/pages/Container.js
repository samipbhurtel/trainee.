import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Container = () => {
  return (
    <>
      <div class="container">
        <div className="wrapper">
          <div className="wid">
            <Link className="nav-link " to="/solution9">
              Solution9
            </Link>
          </div>
          <div className="wid">
            <Link className="nav-link" to="/solution10">
              Solution10
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;

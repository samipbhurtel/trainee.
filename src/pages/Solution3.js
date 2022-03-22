import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

// import { Card, Container } from "react-bootstrap";
const Solution3 = () => {
  return (
    <>
      <div class="container">
        <div className="wrapper">
          <div className="wid">
            <Link className="nav-link" to="/solution1">
              Solution 1
            </Link>
          </div>
          <div className="wid">
            <Link className="nav-link" to="/solution2">
              Solution 2
            </Link>
          </div>
          <div className="wid">
            <Link className="nav-link" to="/">
              Solution 3
            </Link>
          </div>
          <div className="wid">
            <Link className="nav-link" to="/solution4">
              Solution 4
            </Link>
          </div>
          <div className="wid">
            <Link className="nav-link" to="/solution7">
              Solution 7
            </Link>
          </div>
          <div className="wid">
            <Link className="nav-link" to="/solution6">
              Solution 6
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution3;

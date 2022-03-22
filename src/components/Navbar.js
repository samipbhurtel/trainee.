import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            trainee.
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navitems">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/solution1">
                  Solution 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/solution2">
                  Solution 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/solution3">
                  Solution 3
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/solution4">
                  Solution 4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/solution6">
                  Solution 6
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/solution7">
                  Solution 7
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/solution9">
                  Solution 9
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="/solution10">
                  Solution 10
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

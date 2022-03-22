import React from "react";
import "../styles/myBtn.css";
import "../styles/Details.css";

const Solution4 = () => {
  return (
    <>
      <div className="container p-5">
        <div className="detailsContainer">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Portfolio Website</h5>
              <p class="card-text">
                This website is generated using React and hosted with firebase
              </p>
              <a
                href="https://portfolio-79385.web.app/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-secondary myBtn"
              >
                Visit My Portfolio Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution4;

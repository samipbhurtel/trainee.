import React from "react";
import "../styles/Details.css";

const Details = ({ name, email, phone }) => {
  return (
    <>
      <div className="container py-5 ">
        <div className="detailsContainer">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-header ">Personal Details</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: {name} </li>
              <li class="list-group-item">Email: {email}</li>
              <li class="list-group-item">Phone: {phone}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

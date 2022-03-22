import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Details.css";
const Solution10 = () => {
  //   const getData = () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => console.log(response))
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {console.log(data)}
      {data.map((item, i) => {
        return (
          <div className="container py-2" key={i}>
            <div className="detailsContainer">
              <div class="card" style={{ width: "18rem" }}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item card-header">Person Details</li>
                  <li class="list-group-item">Name: {item.name}</li>
                  <li class="list-group-item">Email: {item.email}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Solution10;

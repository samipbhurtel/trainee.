import React from "react";
import Details from "../components/Details";

import myData from "../data";

const Solution1 = () => {
  return (
    <>
      {myData.map((item) => {
        return (
          <Details
            key={item.id}
            name={item.name}
            email={item.email}
            phone={item.phone}
          />
        );
      })}
    </>
  );
};

export default Solution1;

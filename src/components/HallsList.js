import React from "react";

import Hall from "./Hall";

const HallsList = ({ halls, toggleHall }) => (
  <div className="halls">
    {halls.map((hall, index) => (
      <Hall key={index} {...hall} onClick={() => toggleHall(hall.name)}/>
    ))}
  </div>
);

export default HallsList;

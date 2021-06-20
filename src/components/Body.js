import React from "react";

const Body = (props) => {
  return (
    <div>
      <h2 className="app-intro">{props.text} </h2>
      <p className="app-intro">{props.text2} </p>
    </div>
  );
};

export default Body;

import React from "react";

export const Header = (props) => {
  return (
    <div className="-header">
      <h2>Hello Header components {props.text2}</h2>
      <h3>Hello Header {props.text}</h3>
    </div>
  );
};

export const Header2 = () => {
  return (
    <div>
      <h2>Header 2</h2>
    </div>
  );
};

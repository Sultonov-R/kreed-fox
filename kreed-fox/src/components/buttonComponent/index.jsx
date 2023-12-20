import React from "react";
import "./index.css";

const Buttons = (props) => {
  const { title, id } = props;
  return (
    <>
      <button className={id}>{title}</button>
    </>
  );
};

export default Buttons

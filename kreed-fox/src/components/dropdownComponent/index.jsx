import React from "react";
import "./index.css";

const Nav = (props) => {
  const {title, id} = props;

  return (
    <>
      <a href="#" id={id}>{title}</a>
    </>
  );
};
export default Nav;

import React from "react";
import "./header.css";
import img1 from "../../img/images.jpg";
const Header = () => {
  return (
    <header>
      <img src={img1} alt="img1" />
      <h1>LANGUANGE</h1>
    </header>
  );
};

export default Header;

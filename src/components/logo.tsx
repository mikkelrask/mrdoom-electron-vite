import React from "react";
//function to show logo from assets folder

const logosrc = require("../assets/logo.svg");
function Logo() {
  return (
    <>
      <img src={logosrc} className="logo" alt="Vite logo" />
    </>
  );
}

export default Logo;

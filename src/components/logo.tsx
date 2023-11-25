import React from "react";
import logosrc from "../assets/logo.svg";
//function to show logo from assets folder

function Logo() {
  return (
    <>
      <img src={logosrc} className="logo" alt="Vite logo" />
    </>
  );
}

export default Logo;

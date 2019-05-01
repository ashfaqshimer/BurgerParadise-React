import React from "react";
import burgerLogo from "../../images/burger-logo.png";
import classes from "../Logo/Logo.module.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Burger Paradise" />
  </div>
);

export default logo;

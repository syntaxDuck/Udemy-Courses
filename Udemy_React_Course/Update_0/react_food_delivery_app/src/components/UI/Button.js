import React from "react";
import classes from "./Button.module.css";

const Button = ({ href, className, onClick, disabled, label, type}) => {
  const buttonClasses = `${className || classes["button-default"]}`;

  return (
    <button className={buttonClasses} type={type} onClick={onClick} disabled={disabled}>
      <a className={classes.anchor} href={href}>
        <p href={href}>{label || "button"}</p>
      </a>
    </button>
  );
};

export default Button;

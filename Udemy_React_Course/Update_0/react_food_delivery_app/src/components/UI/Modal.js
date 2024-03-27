import React from "react";
import Card from "./Card";

const Modal = ({ className, children }) => {
  return <Card className={className}>{children}</Card>;
};

export default Modal;

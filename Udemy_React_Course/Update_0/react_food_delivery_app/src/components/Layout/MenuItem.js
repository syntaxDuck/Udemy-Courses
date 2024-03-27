import React from "react";
import MenuItemAmount from "./MenuItemAmount";
import classes from "./MenuItem.module.css";

const MenuItem = ({ id, name, price, description, amount, onAddToPreCart }) => {
  const formatedPrice = `$${price.toFixed(2)}`;

  const addToPreCartHandler = (itemQuantity) => {
    onAddToPreCart({
      id: id,
      name: name,
      price: price,
      amount: itemQuantity,
    });
  };

  return (
    <li id={id} className={classes["menu-item"]}>
      <div className={classes["item-details"]}>
        <h3>{name}</h3>
        <div className={classes["item-price"]}>{formatedPrice}</div>
        <div className={classes["item-description"]}>{description}</div>
      </div>
      <MenuItemAmount amount={amount} onAddToPreCart={addToPreCartHandler} />
    </li>
  );
};

export default React.memo(MenuItem);

import React from "react";
import CartItemAmount from "./CartItemAmount";

import classes from "./CartItem.module.css";

const CartItem = ({ id, name, price, itemAmountInCart, onUpdateCartItem }) => {
  const calculateItemDifferential = (newAmount) => {
    onUpdateCartItem([
      {
        id: id,
        amount: newAmount - itemAmountInCart,
      },
    ]);
  };

  const formatedPrice = (price * itemAmountInCart).toFixed(2);

  return (
    <li key={id}>
      <div className={classes["item-name"]}>
        <h3>{name}</h3>
        <div>{`Subtotal: $${formatedPrice}`}</div>
      </div>
      <CartItemAmount
        onUpdateCart={calculateItemDifferential}
        amountInCart={itemAmountInCart}
      />
    </li>
  );
};

export default CartItem;

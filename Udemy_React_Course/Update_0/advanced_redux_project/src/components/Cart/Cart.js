import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  const cartContent = (
    <ul>
      {Object.keys(items).map((key) => {
        return (
          <CartItem
            key={key}
            item={{
              id: key,
              title: items[key].title,
              quantity: items[key].quantity,
              total: items[key].quantity * items[key].price,
              price: items[key].price,
            }}
          />
        );
      })}
    </ul>
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartContent}</ul>
    </Card>
  );
};

export default Cart;

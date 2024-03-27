import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../Redux/cart-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  let numberOfItems = 0;

  if (items) {
    numberOfItems = Object.keys(items).reduce(
      (itemQuantity, itemKey) =>
        (itemQuantity = itemQuantity + items[itemKey].quantity),
      0 
    );
  }
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;

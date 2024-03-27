import React, { Fragment } from "react";

//Component Imports
import Cart from "../components/Cart/Cart";
import Menu from "../components/Layout/Menu";
import AboutUs from "../components/Layout/AboutUs";
import Location from "../components/Layout/Location";

//Functional Imports
import { useCart } from "../components/Cart/CartContext/CartCtxProvider";

//Styles
import classes from "./MainPage.module.css";

const MainPage = () => {
  const cartActive = useCart().cartActive;

  // if (cartActive) document.body.style.overflow = "hidden";
  // else document.body.style.overflow = "auto";

  return (
    <Fragment>
      {cartActive && <Cart />}
      <div className={classes["main-content"]}>
        <AboutUs />
        <Menu />
        <Location />
      </div>
    </Fragment>
  );
};

export default MainPage;

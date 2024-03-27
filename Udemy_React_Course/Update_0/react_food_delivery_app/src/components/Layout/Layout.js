import React, { Fragment } from "react";

//Components
import NavigationBar from "./NavigationBar";

//Assets
import image from "../../assets/images/sushi.jpg";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <NavigationBar
        loginStatus={props.loginStatus}
      />
      <img className={classes["layout-img"]} src={image} alt="Sushi" />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

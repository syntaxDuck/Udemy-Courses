import React from "react";

import styles from "./UserItem.module.css";

const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
      <li id={"user-item-"+props.id} className={styles["user-item"]} onClick={deleteHandler}>
        {props.username} ({props.age} years old)
      </li>
  );
};

export default UserItem;

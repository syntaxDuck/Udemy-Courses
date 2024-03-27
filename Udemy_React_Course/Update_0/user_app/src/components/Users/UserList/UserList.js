import React from "react";

import Card from "../../UI/Card/Card";
import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.css";

const UserList = (props) => {
  let content = <p style={{ textAlign: "center" }}>No Users Found</p>;

  if (props.users.length > 0) {
    content = (
      <ul className={styles["user-list"]}>
        {props.users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            onDelete={props.onUserDelete}
            username={user.username}
            age={user.age}
          />
        ))}
      </ul>
    );
  }

  return <Card className={styles.users}>{content}</Card>;
};

export default UserList;

import React, { useState, Fragment } from "react";

//Currently not using any styles in the app.css
//import styles from "./App.module.css";

import NewUserForm from "./components/Users/NewUserForm/NewUserForm";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const [appUsers, setAppUsers] = useState([
    { username: "Max", age: 21, id: "u1" },
    { username: "Bob", age: 35, id: "u2" },
  ]);

  const addUserHandler = (newUser) => {
    setAppUsers((prevGoals) => {
      const updatedUsers = [...prevGoals];
      updatedUsers.unshift({ ...newUser, id: Math.random().toString() });
      return updatedUsers;
    });
  };

  const deleteUserHandler = (userId) => {
    setAppUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  return (
    <Fragment>
      <NewUserForm onUserAddition={addUserHandler} />
      <UserList users={appUsers} onUserDelete={deleteUserHandler} />
    </Fragment>
  );
}

export default App;

import React, { useState, Fragment, useRef } from "react";

import styles from "./NewUserForm.module.css";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const NewUserForm = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  const clearErrorHandler = () => {
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
    setError(null);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invlaid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invlaid Input",
        message: "Please enter a age greater than 0",
      });
      return;
    }

    const newUser = {
      username: enteredUsername,
      age: enteredUserAge,
    };

    props.onUserAddition(newUser);
    //Only directly ulter doms when they are input fields using refs
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorClear={clearErrorHandler}
        />
      )}
      <Card cardId="card user-form" className={styles["user-form"]}>
        <form onSubmit={formSubmitHandler}>
          <div className={styles["form-control"]}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={usernameInputRef} />
            <label htmlFor="userAge">Age (Years)</label>
            <input id="userAge" type="number" ref={ageInputRef} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default NewUserForm;

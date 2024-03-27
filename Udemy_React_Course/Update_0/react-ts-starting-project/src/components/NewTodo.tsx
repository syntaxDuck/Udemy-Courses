import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextRef = useRef<HTMLInputElement>(null);
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <label className={classes.label} htmlFor="text">
        Todo text
      </label>
      <input
        className={classes.input}
        type="text"
        id="text"
        ref={todoTextRef}
      />
      <button className={classes.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;

import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  itemText: string;
  onRemoveTodo: () => void;
}> = (props) => {

  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.itemText}
    </li>
  );
};

export default TodoItem;

import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [Editing, setExpenseFormState] = useState(false);

  const openFormEditorHandler = () => setExpenseFormState(true);
  const closeFormEditorHandler = () => setExpenseFormState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    closeFormEditorHandler();
  };

  return (
    <div className="new-expense">
      {!Editing && <button onClick={openFormEditorHandler}>Add New Expense</button>}
      {Editing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeFormEditorHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

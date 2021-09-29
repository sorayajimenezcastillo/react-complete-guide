import React, { useState } from "react";
import './NewExpence.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);
    const saveExpesesDataHandler =(enteredExpenseData) => {
        const expesesData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expesesData);
    };
    const startEditing = () => {
        setIsEditing(true);
      };

      const stopEditing = () => {
        setIsEditing(false);
      };


      
    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpeseData={saveExpesesDataHandler} onCancel={stopEditing}/>}
    </div>
};

export default NewExpense;
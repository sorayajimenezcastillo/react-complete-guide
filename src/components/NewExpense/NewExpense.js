import React from "react";
import './NewExpence.css';
import ExpenseForm from './ExpenseForm'
import ExpenseDate from "../Expenses/ExpenseDate";

const NewExpense = (props) =>{
    const saveExpesesDataHandler =(enteredExpenseData) => {
        const expesesData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expesesData);
    };
    return <div className='new-expense'>
        <ExpenseForm onSaveExpeseData={saveExpesesDataHandler}/>
    </div>
};

export default NewExpense;
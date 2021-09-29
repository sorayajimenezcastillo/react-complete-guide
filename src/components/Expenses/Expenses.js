import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
  const [choseYear, setChoseYear] = useState("2020");
  const filterYearHandler = (year) => {
    console.log("In Expenses.js");
    console.log(year);
    setChoseYear(year);
  };
  let filteredExpenses = props.items.filter((it) => {
    return it.date.getFullYear().toString() === choseYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          chosenYear={choseYear}
          onChangeYear={filterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
       <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;

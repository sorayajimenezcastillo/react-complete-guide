import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const[choseYear, setChoseYear] = useState('2020');
  const filterYearHandler = year =>{
    console.log('In Expenses.js');
    console.log(year);
    setChoseYear(year);
 };

  return (
    <div>
      
      <Card className="expenses">
      <ExpensesFilter chosenYear={choseYear} onChangeYear={filterYearHandler}/>
        {props.items.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

/*
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}
*/
export default Expenses;

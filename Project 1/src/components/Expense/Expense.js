import React, { useState } from "react";

import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
  // .forEach() for array
  const itemList = [];
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  props.data.forEach((item) => {
    itemList.push(
      <div key={item.id}>
        <ExpenseItem
          title={item.title}
          date={item.date}
          amount={item.amount}
        ></ExpenseItem>
      </div>
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {itemList}
        {/* {props.data.map((item) => (
        <div key={item.id}>
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
          ></ExpenseItem>
        </div>
      ))} */}
      </Card>
    </div>
  );
};

export default Expense;

// let expenseList = props.data.map((props.data, index)=>{
//     return <ExpenseItem key={index} title={props.data.title} date={props.data.date} amount={props.data.amount}></ExpenseItem>
// });
//   return (
//   <div className="expenses">
//   {expenseList}
//   </div>
// );

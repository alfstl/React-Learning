import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expense = (props) => {
  // .forEach() for array
  const itemList = [];

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
    <Card className="expenses">
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

import "./ExpenseItem.css";
import ExpesneDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insureance";
  //   const expenseAmount = 294.678;
  //   put the complicated logic up here made the return code clean
  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      <ExpesneDate date={props.date}></ExpesneDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

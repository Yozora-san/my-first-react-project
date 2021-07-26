import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="container">
      <ExpenseDate date={props.date} />
      <h2 className="equal title">{props.title}</h2>
      <div className="equal amount">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;

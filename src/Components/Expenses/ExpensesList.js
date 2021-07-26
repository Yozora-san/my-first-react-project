import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let content = <h2>Not found</h2>;
  if (props.filterYear.length > 0) {
    content = props.filterYear.map((ex) => (
      <ExpenseItem
        key={ex.id}
        date={ex.date}
        title={ex.title}
        amount={ex.amount}
      />
    ));
  }
  return <div>{content}</div>;
};

export default ExpenseList;

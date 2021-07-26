import "./Expenses.css";
import Card from "../UI/Card";
import FilterExpense from "./FilterExpense";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const saveYear = (year) => {
    setFilteredYear(year);
  };
  const filterYear = props.dummyData.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  //console.log(filterYear)
  return (
    <Card className="expense">
      <FilterExpense select={filteredYear} saveYear={saveYear} />
      <ExpenseChart filterYear={filterYear} />
      <ExpenseList filterYear={filterYear} />
    </Card>
  );
};

export default Expenses;

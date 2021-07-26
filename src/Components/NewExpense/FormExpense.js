import "./FormExpense.css";
import { useState } from "react";

const FormExpense = (props) => {
  const [oldTitle, setTitle] = useState("");
  const [oldAmount, setAmount] = useState("");
  const [oldDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    //console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    //console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    //console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expense = {
      date: new Date(oldDate),
      title: oldTitle,
      amount: oldAmount
    };
    props.onNewSave(expense);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form">
        <div className="newtitle">
          <label for="title">Title</label> <br />
          <input
            id="title"
            type="text"
            placeholder="Enter a new title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="newamount">
          <label for="amount">Amount</label> <br />
          <input
            id="amount"
            type="number"
            min="0"
            step="0.1"
            placeholder="Enter a new amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="newdate">
          <label for="date">Date</label> <br />
          <input id="date" type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="btn">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FormExpense;

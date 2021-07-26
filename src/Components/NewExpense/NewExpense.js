import FormExpense from "./FormExpense";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveNewData = (expense) => {
    const saveNewExpense = {
      ...expense,
      id: Math.random().toString()
    };
    props.onSave(saveNewExpense);
  };
  return (
    <div className="bg">
      <FormExpense onNewSave={saveNewData} />
    </div>
  );
};

export default NewExpense;

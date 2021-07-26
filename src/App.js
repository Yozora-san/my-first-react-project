import "./styles.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

const PENGELUARAN = [
  { date: new Date(2021, 8, 22), title: "Smartphone", amount: 120, id: "1" },
  { date: new Date(2020, 6, 6), title: "Book", amount: 63, id: "2" },
  { date: new Date(2021, 4, 5), title: "Lamp", amount: 7, id: "3" }
];
export default function App() {
  const [oldExpense, newExpense] = useState(PENGELUARAN);
  const saveData = (saveData) => {
    newExpense((prevOldExpense) => {
      return [saveData, ...prevOldExpense];
    });
    console.log(PENGELUARAN);
  };
  return (
    <div>
      <NewExpense onSave={saveData} />
      <Expenses dummyData={oldExpense} />
    </div>
  );
}

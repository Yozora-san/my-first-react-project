import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const month = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  //console.log(month)
  for (let getMonth of props.filterYear) {
    const getValue = getMonth.date.getMonth();
    month[getValue].value += getMonth.amount;
    //console.log(getValue)
  }
  return <Chart month={month} />;
};

export default ExpenseChart;

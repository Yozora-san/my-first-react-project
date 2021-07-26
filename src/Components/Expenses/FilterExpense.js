import "./FilterExpense.css";

const FilterExpense = (props) => {
  const yearHandler = (event) => {
    props.saveYear(event.target.value);
    //console.log(event.target.value)
  };
  return (
    <div>
      <h1>Filter by Year</h1>
      <select value={props.select} onChange={yearHandler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default FilterExpense;

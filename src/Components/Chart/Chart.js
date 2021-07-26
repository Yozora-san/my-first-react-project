import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const value = props.month.map((moon) => moon.value);
  const maxValue = Math.max(...value);

  return (
    <div className="chart">
      {props.month.map((moon) => (
        <ChartBar
          key={moon.label}
          label={moon.label}
          value={moon.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;

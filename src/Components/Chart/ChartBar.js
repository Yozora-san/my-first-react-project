import "./ChartBar.css";

const ChartBar = (props) => {
  let chartHeight = "0%";
  if (props.value > 0) {
    chartHeight = (props.value / props.maxValue) * 100 + "%";
  }
  console.log(chartHeight);
  return (
    <div className="outer">
      <div className="inner">
        <div className="barfill" style={{ height: chartHeight }}></div>
      </div>
      <div className="label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

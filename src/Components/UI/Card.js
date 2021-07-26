import "./Card.css";

const Card = (props) => {
  const clas = "child " + props.className;
  return <div className={clas}>{props.children}</div>;
};

export default Card;

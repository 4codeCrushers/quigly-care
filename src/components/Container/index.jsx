import "./style.css";

function Container(props) {
  return <div className="container content" style={props.style}>{props.children}</div>;
}

export default Container;
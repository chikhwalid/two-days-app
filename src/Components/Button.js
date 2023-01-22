import "./button.css";
export default function Button(props) {
  return (
    <button className={"btn " + props.className} onClick={props.onClickButton}>
      {props.children}
    </button>
  );
}

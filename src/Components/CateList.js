import "./CateList.css";
import Button from "./Button";
import ListItem from "./ListItem";
import "./button.css";
export default function CateList(props) {
  return (
    <aside>
      <ul className="categorie-list">
        <ListItem searchFilter={props.makeFilter}></ListItem>
      </ul>
    </aside>
  );
}

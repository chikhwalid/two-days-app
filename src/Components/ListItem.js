import "./ListItem.css";
import "./button.css";
export default function ListItem(props) {
  const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];
  console.log();
  const showAll = () => {
    props.searchFilter("show all");
  };
  //   const showFilt = () => {
  //     props.searchFilter(cat.name);
  //   };
  return (
    <>
      <li className="btn btn-all-categories" onClick={showAll}>
        All
      </li>
      {CATEGORIES.map((cat) => (
        <li
          key={cat.name}
          className="btn"
          style={{ backgroundColor: cat.color }}
          onClick={() => {
            props.searchFilter(cat.name);
          }}
        >
          {cat.name}
        </li>
      ))}
    </>
  );
}

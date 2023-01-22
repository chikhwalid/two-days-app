import { useState } from "react";
import "./FactsList.css";
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

export default function FactsList(props) {
  // TEMP
  const [mindB, setMinds] = useState(props.onShowFactsList);
  const facts = props.onShowFactsList.filter((fact) => {
    if (fact.category == props.onFilterItem) return props.onFilterItem;
    if (props.onFilterItem == "show all") return fact;
  });
  let i = 0;

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <li key={fact.id} className="fact-item">
            <p className="fact">
              {fact.text}
              <a
                className="source"
                href={fact.source}
                target="_blank"
                rel="noreferrer"
              >
                (source)
              </a>
            </p>
            <span
              className="tag"
              style={{
                backgroundColor: CATEGORIES.find(
                  (value) => value.name === fact.category
                ).color,
              }}
            >
              #{CATEGORIES.find((value) => value.name === fact.category).name}
            </span>
            <div className="vote-btns">
              <button>👍 {fact.votesInteresting}</button>
              <button>🤯 {fact.votesMindblowing}</button>
              <button>⛔ {fact.votesFalse}</button>
            </div>
          </li>
        ))}
        <p>There are {facts.length} in the dataBase</p>
      </ul>
    </section>
  );
}

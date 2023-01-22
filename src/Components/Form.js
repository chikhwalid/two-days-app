import React, { useState } from "react";
import Button from "./Button";

import "./Form.css";
import "./button.css";
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
export default function Form(props) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };
  function handleSubmit(e) {
    //1. Prevent browser realoding
    e.preventDefault();
    //2. Check if data is valid. If so, create a new fact
    if (
      text &&
      source &&
      category &&
      text.length <= 200 &&
      isValidUrl(source)
    ) {
      //3. Create a new fact object
      const newFact = {
        id: Math.round(Math.random() * 100000),
        text: text,
        source: source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };
      props.getFact(newFact);
      if (props.state === "") props.onChangeState("hidden");
    }
    //4. Add the new fact to the UI: add the fact to stat
    //5. Reset input fields
    //6. Close the form
  }
  return (
    <form className={"fact-form " + props.state} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <label>{200 - text.length}</label>
      <input
        type="text"
        placeholder="Trustworthy source..."
        onChange={(e) => {
          setSource(e.target.value);
        }}
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="">Choose Category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.color} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <Button className="btn btn-large btn-post">Post</Button>
    </form>
  );
}

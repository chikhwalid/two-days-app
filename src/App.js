import React, { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Main from "./Components/Main";
import "./App.css";
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
function App() {
  const [hidden, setHidden] = useState("hidden");
  const [formBtnStat, setformBtnStat] = useState("share a fact");
  const [factsList, setFactsList] = useState(initialFacts);
  // if (newFact)
  //   setFactsList((prev) => {
  //     console.log(prev);
  //     return [...prev, newFact];
  //   });
  const changeHiddenStat = (state) => {
    if (hidden === "hidden") {
      setHidden(state);
      setformBtnStat("close");
    } else {
      setHidden("hidden");
      setformBtnStat("share a fact");
    }
  };

  // console.log(newFact);
  return (
    <div className="container">
      <Header hiddenForm={changeHiddenStat} btnStat={formBtnStat} />
      <Form
        state={hidden}
        onChangeState={setHidden}
        getFact={(val) => {
          setFactsList((prev) => {
            console.log(prev);
            return [...prev, val];
          });
        }}
      />
      <Main factsList={factsList} setFactsList={setFactsList} />
    </div>
  );
}

export default App;

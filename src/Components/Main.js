import React, { useState } from "react";
import CateList from "./CateList";
import FactsList from "./FactsList";
import "./Main.css";
export default function Main(props) {
  const [filter, setFilter] = useState("show all");

  const filterItems = (filt) => {
    setFilter(filt);
  };

  return (
    <main className="main">
      <CateList makeFilter={filterItems}></CateList>
      <FactsList
        onFilterItem={filter}
        onShowFactsList={props.factsList}
        setFactsList={props.setFactsList}
      ></FactsList>
    </main>
  );
}

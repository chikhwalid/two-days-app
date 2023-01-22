import React, { useState } from "react";
import "./header.css";
import Button from "./Button";
import "./button.css";
export default function Header(props) {
  const passData = () => {
    props.hiddenForm("");
  };
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="My 2DaysApp" />
        <h1>My 2DaysApp</h1>
      </div>
      <div>
        <Button className=" btn-large btn-open" onClickButton={passData}>
          {props.btnStat}
        </Button>
      </div>
    </header>
  );
}

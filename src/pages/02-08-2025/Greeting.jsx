import React, { useState } from "react";

const Greeting = ({ name, isLoggedIn }) => {
  const [bgColor, setBgColor] = useState("lightblue");
  const changeColor = () => {
    setBgColor(bgColor === "lightblue" ? "lightgreen" : "lightblue");
  };

  const style = {
    cursor: "pointer",
    backgroundColor: bgColor,
  };

  if (isLoggedIn) {
    return (
      <h1 style={style} onClick={changeColor}>
        Hello {name}
      </h1>
    );
  } else {
    return (
      <h1 style={style} onClick={changeColor}>
        Please Login
      </h1>
    );
  }
};

export default Greeting;

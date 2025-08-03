import { useState } from "react";
import "./DynamicStyles.css";

const DynamicStyling = () => {
  const [toggle, setToggle] = useState(false);
  const buttonStyles = toggle ? "active-button" : "inactive-button";

  const handleClick = () => {
    // if (toggle) {
    //   setToggle(false);
    // } else {
    //   setToggle(true);
    // }

    setToggle(!toggle);
  };
  return (
    <div>
      <button className={buttonStyles} onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};


export default DynamicStyling;

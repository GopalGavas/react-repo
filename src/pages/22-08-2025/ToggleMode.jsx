import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./Toggle.css";

const ToggleMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-container">
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ToggleMode;

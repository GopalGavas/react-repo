import { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";
import "./Calculator.css";

const Calculator = () => {
  const { state, dispatch } = useContext(CalculatorContext);

  const handleDigit = (digit) => {
    dispatch({ type: "ADD_DIGIT", payload: digit });
  };

  const handleOperator = (operator) => {
    dispatch({ type: "CHOOSE_OPERATOR", payload: operator });
  };

  return (
    <div className="calculator">
      <h3>Calculator with Context</h3>
      <div className="display">
        <div className="previous">
          {state.previousInput} {state.operator}
        </div>
        <div className="current">{state.currentInput}</div>
      </div>

      <div className="buttons">
        <button onClick={() => dispatch({ type: "CLEAR" })}>AC</button>
        <button onClick={() => handleOperator("%")}>%</button>
        <button onClick={() => handleOperator("/")}>/</button>
        <button onClick={() => handleOperator("*")}>*</button>

        <button onClick={() => handleDigit("7")}>7</button>
        <button onClick={() => handleDigit("8")}>8</button>
        <button onClick={() => handleDigit("9")}>9</button>
        <button onClick={() => handleOperator("-")}>-</button>

        <button onClick={() => handleDigit("4")}>4</button>
        <button onClick={() => handleDigit("5")}>5</button>
        <button onClick={() => handleDigit("6")}>6</button>
        <button onClick={() => handleOperator("+")}>+</button>

        <button onClick={() => handleDigit("1")}>1</button>
        <button onClick={() => handleDigit("2")}>2</button>
        <button onClick={() => handleDigit("3")}>3</button>
        <button onClick={() => dispatch({ type: "BACKSPACE" })}>⌫</button>

        <button onClick={() => handleDigit(".")}>.</button>
        <button onClick={() => handleDigit("0")}>0</button>
        <button
          className="equals"
          onClick={() => dispatch({ type: "CALCULATE" })}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;

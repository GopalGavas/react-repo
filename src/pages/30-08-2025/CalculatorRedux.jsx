import { useDispatch, useSelector } from "react-redux";
import {
  addDigit,
  backspace,
  calculate,
  chooseOperator,
  clear,
} from "../../redux/calculatorSlice";
import "./Calculator.css";

const CalculatorRedux = () => {
  const dispatch = useDispatch();
  const { currentInput, previousInput, operator, lastExpression } = useSelector(
    (state) => state.calculator
  );

  return (
    <div className="calculator">
      <h3>Calculator with Redux</h3>
      <div className="display">
        <div className="previous">
          {previousInput && operator
            ? `${previousInput} ${operator}`
            : lastExpression}
        </div>
        <div className="current">{currentInput}</div>
      </div>

      <div className="buttons">
        <button onClick={() => dispatch(clear())}>AC</button>
        <button onClick={() => dispatch(chooseOperator("%"))}>%</button>
        <button onClick={() => dispatch(chooseOperator("/"))}>/</button>
        <button onClick={() => dispatch(chooseOperator("*"))}>*</button>

        <button onClick={() => dispatch(addDigit("7"))}>7</button>
        <button onClick={() => dispatch(addDigit("8"))}>8</button>
        <button onClick={() => dispatch(addDigit("9"))}>9</button>
        <button onClick={() => dispatch(chooseOperator("-"))}>-</button>

        <button onClick={() => dispatch(addDigit("4"))}>4</button>
        <button onClick={() => dispatch(addDigit("5"))}>5</button>
        <button onClick={() => dispatch(addDigit("6"))}>6</button>
        <button onClick={() => dispatch(chooseOperator("+"))}>+</button>

        <button onClick={() => dispatch(addDigit("1"))}>1</button>
        <button onClick={() => dispatch(addDigit("2"))}>2</button>
        <button onClick={() => dispatch(addDigit("3"))}>3</button>
        <button onClick={() => dispatch(backspace())}>⌫</button>

        <button onClick={() => dispatch(addDigit("."))}>.</button>
        <button onClick={() => dispatch(addDigit("0"))}>0</button>
        <button className="equals" onClick={() => dispatch(calculate())}>
          =
        </button>
      </div>
    </div>
  );
};

export default CalculatorRedux;

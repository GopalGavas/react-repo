import { createContext, useReducer } from "react";

const initialState = {
  currentInput: "0",
  previousInput: null,
  operator: null, // ✅ fixed
};

function calculatorReducer(state, action) {
  switch (action.type) {
    case "ADD_DIGIT":
      return {
        ...state,
        currentInput:
          state.currentInput === "0"
            ? action.payload
            : state.currentInput + action.payload,
      };

    case "CLEAR":
      return initialState;

    case "CHOOSE_OPERATOR":
      return {
        ...state,
        operator: action.payload,
        previousInput: state.currentInput,
        currentInput: "0",
      };

    case "BACKSPACE":
      return {
        ...state,
        currentInput:
          state.currentInput.length > 1 ? state.currentInput.slice(0, -1) : "0",
      };

    case "CALCULATE":
      if (state.operator && state.previousInput !== null) {
        const prev = parseFloat(state.previousInput);
        const curr = parseFloat(state.currentInput);
        let result;

        switch (state.operator) {
          case "+":
            result = prev + curr;
            break;
          case "-":
            result = prev - curr;
            break;
          case "*":
            result = prev * curr;
            break;
          case "/":
            result = curr !== 0 ? prev / curr : "Error";
            break;
          case "%":
            result = prev % curr;
            break;
          default:
            return state;
        }

        return {
          ...state,
          currentInput: String(result),
          previousInput: null,
          operator: null,
        };
      }

      return state;

    default:
      return state;
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const CalculatorContext = createContext();

export function CalculatorProvider({ children }) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
}

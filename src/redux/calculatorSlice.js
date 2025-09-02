import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentInput: "0",
  previousInput: null,
  operator: null,
  lastExpression: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addDigit: (state, action) => {
      state.currentInput =
        state.currentInput === "0"
          ? action.payload
          : state.currentInput + action.payload;
    },
    clear: () => initialState,
    chooseOperator: (state, action) => {
      state.operator = action.payload;
      state.previousInput = state.currentInput;
      state.currentInput = "0";
    },
    backspace: (state) => {
      state.currentInput =
        state.currentInput.length > 1 ? state.currentInput.slice(0, -1) : "0";
    },
    calculate: (state) => {
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
            break;
        }

        state.lastExpression = `${state.previousInput} ${state.operator} ${state.currentInput} =`;
        state.currentInput = String(result);
        state.previousInput = null;
        state.operator = null;
      }
    },
  },
});

export const { addDigit, backspace, calculate, chooseOperator, clear } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;

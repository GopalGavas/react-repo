import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count > 0 ? state.count - 1 : state.count };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>{state.count}</h2>
      <button
        style={{
          marginRight: "15px",
          backgroundColor: "#fff",
          color: "green",
          border: "2px solid green",
          fontWeight: "bold",
        }}
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        style={{
          marginRight: "15px",
          backgroundColor: "#fff",
          color: "red",
          border: "2px solid red",
          fontWeight: "bold",
        }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        style={{
          marginRight: "15px",
          backgroundColor: "#fff",
          color: "blue",
          border: "2px solid blue",
          fontWeight: "bold",
        }}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterUseReducer;

import { useState } from "react";

const UseState = () => {
  let [counter, setCounter] = useState(1);

  const incrementCount = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      alert("Maximum value of counter reached");
    }
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("Counter cannot be negative");
    }
  };

  const resetCounter = () => {
    setCounter(1);
  };

  return (
    <>
      <h1>Use State Hook</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
};

export default UseState;

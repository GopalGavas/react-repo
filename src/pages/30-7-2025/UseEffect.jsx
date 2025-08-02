import { useEffect, useState } from "react";

const UseEffect = () => {
  let [counter, setCounter] = useState(1);
  let [counter2, setCounter2] = useState(1);

  // "RUNS ON EVERY RENDER"
  //    useEffect(() => {
  //     console.log("Inside Useffect Hook");
  //   });

  // "RUNS ONLY WHEN PAGE IS RENDERED BY BROWSER"
  //   useEffect(() => {
  //     console.log("Inside Useffect Hook");
  //   }, []);

  // "RUNS INITIALLY ON RENDER AND WHEN THE COUNTER IS UPDATED"
  //   useEffect(() => {
  //     console.log("Inside Useffect Hook");
  //   }, [counter]);

  useEffect(() => {
    console.log("Inside Useffect Hook");
  }, [counter, counter2]);

  return (
    <>
      <h1>UseEffect Hook</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h2>{counter2}</h2>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </>
  );
};

export default UseEffect;

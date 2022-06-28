import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const [counter, counterActions] = useCounter();

  return (
    <div>
      <h2>Contador</h2>
      <button onClick={counterActions.subtractStep}>-2</button>
      <button onClick={counterActions.subtract}>-1</button>
      {" " + counter + " "} <button onClick={counterActions.add}>+1</button>{" "}
      <button onClick={counterActions.addStep}>+2</button>
      <br />
      <br />
      <button onClick={counterActions.reset}>Reset counter</button>
    </div>
  );
};

export default Counter;

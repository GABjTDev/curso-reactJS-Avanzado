import { useState, useRef } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const counterActions = useRef({
    add: () => setCounter((counter) => (counter < 10 ? counter + 1 : counter)),
    addStep: () =>
      setCounter((counter) => (counter < 10 ? counter + 2 : counter)),
    subtract: () =>
      setCounter((counter) => (counter > 0 ? counter - 1 : counter)),
    subtractStep: () =>
      setCounter((counter) => (counter > 0 ? counter - 2 : counter)),
    reset: () => setCounter(0),
  });

  return [counter, counterActions.current];
};

export default useCounter;

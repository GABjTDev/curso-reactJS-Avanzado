import { useRef, useState } from "react";

const initialState = [
  "javascript",
  "react",
  "html",
  "css",
  "jquery",
  "bootstrap",
];

const useList = () => {
  const [list, setList] = useState(initialState);

  const listActions = useRef({
    clear: () => setList([]),
    reset: () => setList([...initialState]),
    sortList: () => setList((list) => [...list.sort()]),
    reverList: () => setList((list) => [...list.reverse()]),
  });

  return [list, listActions.current];
};

export default useList;

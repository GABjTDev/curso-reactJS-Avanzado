import React from "react";
import useList from "../hooks/useList";

const List = () => {
  const [list, listActions] = useList();

  return (
    <div>
      <h2>Listado</h2>
      <ul>
        {list.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
      <button onClick={listActions.reset}>Reset List</button>
      <br />
      <button onClick={listActions.clear}>Clear List</button>
      <br />
      <button onClick={listActions.sortList}>Sort List</button>
      <br />
      <button onClick={listActions.reverList}>Reverse List</button>
    </div>
  );
};

export default List;

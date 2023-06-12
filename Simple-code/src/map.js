import { useState } from "react";

export default function CheckableList() {
  const [items, setItems] = useState(["task 1", "task 2", "task 3"]);

  function addTask() {
    const newTask = `task ${items.length + 1}`;
    const newItems = [...items, newTask];
    setItems(newItems);
  }
  return (
    <>
      <button onClick={addTask}>add task</button>
      <ul>
        {items.map((item, index) => {
          return (
            <li>
              <label key={index}>
                <input type="checkbox" />
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

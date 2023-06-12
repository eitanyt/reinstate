import React from "react";
import { useState } from "react";

export function MyCounter(params) {
  const { delta, Reset } = params;
  const [count, setcount] = useState(0);

  function inc() {
    setcount((x) => x + delta);
  }

  return (
    <div>
      <p>
        I was clicked {count} times
        <button onClick={inc}>Click Me</button>
        <button onClick={Reset}>Reset</button>
      </p>
    </div>
  );
}

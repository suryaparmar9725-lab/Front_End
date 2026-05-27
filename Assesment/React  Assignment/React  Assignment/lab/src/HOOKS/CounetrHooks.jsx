import React, { useState } from "react";

function CounterHooks() {
  const [count, setCount] = useState(0);

  return (
    <>
     Count:- {count} <br />
      <button onClick={() => setCount(count - 1)}>-</button> &nbsp;&nbsp;
      <button onClick={() => setCount(count + 1)}>+</button> 
    </>
  );
}

export default CounterHooks;

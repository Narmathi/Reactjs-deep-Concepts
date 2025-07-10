import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Count Rendering");
  return (
    <>
      <h1>Count :{count}</h1>
      <button
        onClick={() => {setCount(count - 1);}}
        style={{ marginRight: 20, background: "red", color: "white" }}
      >
        Decrement
      </button>
      <button style={{ marginRight: 20, background: "green", color: "white" }} onClick={()=>setCount(count+1)}>
        Increment
      </button>
    </>
  );
};

export default Counter;

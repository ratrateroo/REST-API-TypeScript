import React, { useEffect, useState } from "react";
import Sibling1 from "./Sibling1";
import Sibling2 from "./Sibling2";

export default function ParentLevel() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const setCountHandler = () => {
    setCount((previewsValue) => previewsValue + 1);
  };

  useEffect(() => {
    setCount2(count);
  }, [count]);

  return (
    <>
      <h1>ParentLevel</h1>
      <h2>Count: {count} </h2>
      <h2>Count2: {count2} </h2>

      <Sibling1 count={count} setCountHandler={setCountHandler} />
      <Sibling2 count={count} />
    </>
  );
}

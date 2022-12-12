import React, { useEffect, useState } from "react";
import Sibling1 from "./Sibling1";
import Sibling2 from "./Sibling2";

export default function ParentLevel() {
  const [count, setCount] = useState({ value: 0 });
  const [count2, setCount2] = useState();

  const setCountHandler = () => {
    // setCount((previewsValue) => previewsValue.value + 1);

    setCount((previewsValue) => {
      console.log("previewsValue");
      console.log(previewsValue);
      return { ...previewsValue, value: previewsValue.value + 1 };
    });
  };

  useEffect(() => {
    console.log("useEffect");
    console.log(count2);
    setCount2({ ...count });
    // console.log(count.value);
  }, [count]);
  console.log("Log");
  console.log(count2);
  return (
    <>
      <h1>ParentLevel</h1>
      <h2>Count: {count.value} </h2>
      {/* <h2>Count2: {count2} </h2> */}

      <Sibling1 count={count} setCountHandler={setCountHandler} />
      <Sibling2 count={count} />
    </>
  );
}

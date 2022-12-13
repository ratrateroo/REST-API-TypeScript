import React, { useEffect } from "react";
import GrandChild from "./GrandChild";

export default function Sibling1(props) {
  useEffect(() => {
    console.log("Sibling 1 Effect");
  });
  return (
    <>
      <h3>Sibling Level</h3>
      <h4>Count: {props.count.value}</h4>
      <GrandChild setCountHandler={props.setCountHandler} count={props.count} />
    </>
  );
}

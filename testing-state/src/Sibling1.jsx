import React from "react";
import GrandChild from "./GrandChild";

export default function Sibling1(props) {
  return (
    <>
      <h3>Sibling Level</h3>
      <h4>Count: {props.count}</h4>
      <GrandChild setCountHandler={props.setCountHandler} />
    </>
  );
}

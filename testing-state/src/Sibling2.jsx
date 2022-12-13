import React, { useEffect } from "react";

export default function Sibling2(props) {
  useEffect(() => {
    console.log("Sibling 1 Effect");
  });
  return (
    <>
      <h3>Sibling Level</h3>
      <h4>Count: {props.count.value}</h4>
    </>
  );
}

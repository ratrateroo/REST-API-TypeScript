import React from "react";

export default function GrandChild(props) {
  return (
    <>
      <h5>GrandChild</h5>
      <h6>Count: {props.count.value}</h6>
      <button
        onClick={() => {
          props.setCountHandler();
        }}
      >
        Click
      </button>
    </>
  );
}

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Page1 from "./components/Page1";

function App() {
  const [count, setCount] = useState(100);

  const countHandler = (value: number) => {
    setCount((previousValue) => previousValue + value);
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <Page1 count={count} countHandler={countHandler} />
      <button
        onClick={() => {
          countHandler(1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;

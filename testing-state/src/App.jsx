import { useEffect } from "react";
import "./App.css";
import ParentLevel from "./ParentLevel";

function App() {
  useEffect(() => {
    console.log("App Effect");
  });
  return (
    <div className="App">
      <ParentLevel />
    </div>
  );
}

export default App;

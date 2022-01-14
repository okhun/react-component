import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            let temp = count + 1;
            setCount(temp);
          }}
        >
          Increment
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            let temp = count - 1;
            setCount(temp);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

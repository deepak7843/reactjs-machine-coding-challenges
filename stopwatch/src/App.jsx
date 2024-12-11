import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useTimer from "./hooks/useTimer";

function App() {
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [completed, setCompleted] = useState(false)

  const {current} = useTimer(10, paused, completed)

  const handleMainButtonClick = () => {
    setActive((prev) => !prev);
  };
  
  const handleStopButtonClick = () => {
    setCompleted((prev) => !prev);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => handleMainButtonClick()}>
          {active ? "Pause" : "Start"}
        </button>
        <div>Current: {current}</div>
        <button onClick={() => handleStopButtonClick()}>
          {"Stop"}
        </button>
      </div>
    </>
  );
}

export default App;

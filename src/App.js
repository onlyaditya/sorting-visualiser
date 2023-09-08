import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Visualise } from "./Pages/Visualise";

function App() {
  const [algo, setAlgo] = useState("bubble");
  const [length, setLength] = useState(10);
  const [speed, setSpeed] = useState(1000);
  const [inputType, setInputType] = useState("length");
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState(10);
  const [mode, setMode] = useState("auto");

  const handleAlgoChange = (e) => {
    setAlgo(e.target.value);
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const handleInputType = (e) => {
    setInputType(e.target.value);
  };

  const handleMode = (newMode) => {
    setMode(newMode);
  };

  const handleLengthChange = (e) => {
    let { value } = e.target;
    setInputValue(value);
    if (inputType === "length") {
      setLength(value);
    } else if (inputType === "array") {
      value = value.trim().split(" ").map(Number);
      setArray(value);
    }
  };

  const handleReset = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <Navbar handleMode={handleMode} />
      <div className="main-div">
        <Sidebar
          selectedAlgorithm={algo}
          onAlgorithmChange={handleAlgoChange}
          speed={speed}
          onSpeedChange={handleSpeedChange}
          lengthChange={handleLengthChange}
          inputType={inputType}
          handleInputType={handleInputType}
          handleReset={handleReset}
          inputValue={inputValue}
        />
        <Visualise
          inputType={inputType}
          length={length}
          algo={algo}
          speed={speed}
          arrayInput={array}
          mode={mode}
        />
      </div>
    </div>
  );
}

export default App;

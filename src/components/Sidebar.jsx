import React from "react";
import styles from "../styles/Sidebar.module.css";
import { ArrayInput } from "./ArrayInput";
import { SpeedInput } from "./SpeedInput";
import { AlgoSelect } from "./AlgoSelect";

export const Sidebar = ({
  selectedAlgorithm,
  onAlgorithmChange,
  speed,
  onSpeedChange,
  lengthChange,
  inputType,
  handleInputType,
  handleReset,
  inputValue,
}) => {
  return (
    <div className={styles.sidebar}>
      <button onClick={handleReset}>Reset</button>
      <AlgoSelect
        selectedAlgorithm={selectedAlgorithm}
        onAlgorithmChange={onAlgorithmChange}
      />
      <SpeedInput speed={speed} onSpeedChange={onSpeedChange} />
      <ArrayInput
        inputType={inputType}
        handleInputType={handleInputType}
        inputValue={inputValue}
        lengthChange={lengthChange}
      />
    </div>
  );
};

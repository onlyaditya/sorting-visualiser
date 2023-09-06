import React from "react";
import styles from "../styles/Sidebar.module.css";

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
      <div className={styles.algo_select}>
        <label htmlFor="algorithm-select">Select Algorithm:</label>
        <select
          id="algorithm-select"
          value={selectedAlgorithm}
          onChange={onAlgorithmChange}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
        </select>
      </div>
      <div className={styles.speed_select}>
        <label htmlFor="speed-slider">
          &#8592; &#8592; Faster - - Slower &#8594;&#8594;
        </label>
        <input
          type="range"
          id="speed-slider"
          min="1"
          max="2000"
          value={speed}
          onChange={onSpeedChange}
        />
      </div>
      <div className={styles.input_value}>
        <label htmlFor="input-type">Select Input Type</label>
        <select name="input-type" value={inputType} onChange={handleInputType}>
          <option value="length">Add Array Length</option>
          <option value="array">Array Separated by space</option>
        </select>
        <label htmlFor="array-length">
          {inputType === "length"
            ? "Enter Array length"
            : "Enter Array separated by space"}
        </label>
        <input type="text" value={inputValue} onChange={lengthChange} />
      </div>
    </div>
  );
};

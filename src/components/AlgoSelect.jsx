import React from "react";
import styles from "../styles/AlgoSelect.module.css";

export const AlgoSelect = ({ selectedAlgorithm, onAlgorithmChange }) => {
  return (
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
  );
};

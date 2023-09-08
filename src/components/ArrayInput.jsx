import React from "react";
import styles from "../styles/ArrayInput.module.css";

export const ArrayInput = ({
  inputType,
  handleInputType,
  inputValue,
  lengthChange,
}) => {
  return (
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
  );
};

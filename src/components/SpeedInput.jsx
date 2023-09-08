import React from "react";
import styles from "../styles/SpeedInput.module.css";

export const SpeedInput = ({ speed, onSpeedChange }) => {
  return (
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
  );
};

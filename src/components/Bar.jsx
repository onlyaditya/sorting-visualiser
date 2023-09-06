import React from "react";
import styles from "../styles/Bar.module.css";

export const Bar = ({ height, maxHeight, bg, sorted, swapEl, minValue }) => {
  return (
    <div>
      <div
        className={styles.bar}
        style={{
          height: `${(height / maxHeight) * 450}px`,
          background: `${
            minValue
              ? "#dbdb8a"
              : swapEl
              ? "#57b7c4"
              : bg
              ? "#bb553c"
              : sorted
              ? "#3cbb53"
              : "#9aaa9d"
          }`,
        }}
      ></div>
      <p>{height}</p>
    </div>
  );
};

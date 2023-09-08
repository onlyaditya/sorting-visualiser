import React from "react";
import styles from "../styles/ColorDesc.module.css";

export const ColorDesc = () => {
  return (
    <div className={styles.color_desc}>
      <div>
        <div className={styles.red}></div>
        <p>Compare</p>
      </div>
      <div>
        <div className={styles.blue}></div>
        <p>Swap</p>
      </div>
      <div>
        <div className={styles.green}></div>
        <p>Sorted</p>
      </div>
      <div>
        <div className={styles.yellow}></div>
        <p>Minimum</p>
      </div>
    </div>
  );
};

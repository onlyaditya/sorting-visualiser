import React from "react";
import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ handleMode }) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_title}>Sorting Algorithm visualiser</div>
      <div className={styles.navbar_button}>
        <button onClick={() => handleMode("auto")}>Auto Visualise</button>
        <button onClick={() => handleMode("step")}>Step by Step</button>
      </div>
    </nav>
  );
};

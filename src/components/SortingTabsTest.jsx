import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/SortingTabs.module.css";
import { Bar } from "./Bar";
import { sortArray } from "../utils/sortArray";
import pause from "../utils/pause";

export const SortingTabsTest = ({
  length,
  algo,
  inputType,
  arrayInput,
  mode,
  speed,
}) => {
  const [array, setArray] = useState([]);
  const [compare, setCompare] = useState([]);
  const [sortedValues, setSortedValues] = useState([]);
  const [swapEl, setSwapEl] = useState([]);
  const [reel, setReel] = useState([[null, null, null, null]]);
  const [reelNo, setReelNo] = useState(0);
  const [sorted, setSorted] = useState(false);
  const [minValue, setMinValue] = useState(null);

  useEffect(() => {
    renderReel(reelNo);
  }, [reelNo]);

  useEffect(() => {
    if (inputType === "length") {
      let newArray = [];
      for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() * 40) + 1);
      }
      setArray(newArray);
    } else {
      setArray(arrayInput);
    }
    setSortedValues([]);
    setCompare([]);
    setSorted(false);
    setSwapEl([]);
    setReel([[null, null, [...array], null]]);
    setReelNo(0);
    setMinValue(null);
  }, [length, arrayInput]);

  const handleSortArray = () => {
    const arr = sortArray(algo, [...array]);
    if (arr) {
      setReel(arr);
      setSorted(true);
    }
  };

  const handlePlay = async () => {
    let i = 0;

    while (i < reel.length) {
      const [x, y, arr, index, min] = reel[i];

      setCompare([x, y]);
      setSwapEl([]);

      if (min) {
        setMinValue(min);
      } else if (i === reel.length - 1) {
        setMinValue(null);
      }

      if (sortedValues.includes(index)) {
        setSortedValues((prev) => prev.filter((el) => el !== index));
      } else if (index !== null) {
        setSortedValues((prev) => [...prev, index]);
      }

      if (arr) {
        setArray(arr);
        if (x !== null || y !== null) {
          setSwapEl([x, y]);
        }
      }
      await pause(speed);
      i++;
    }
  };

  const renderReel = (i) => {
    const [x, y, arr, index, min] = reel[i];

    setCompare([x, y]);
    setSwapEl([]);

    if (min) {
      setMinValue(min);
    } else if (i === reel.length - 1) {
      setMinValue(null);
    }

    if (sortedValues.includes(index)) {
      setSortedValues((prev) => prev.filter((el) => el !== index));
    } else if (index !== null) {
      setSortedValues((prev) => [...prev, index]);
    }

    if (arr) {
      setArray(arr);
      if (x !== null || y !== null) {
        setSwapEl([x, y]);
      }
    }
  };

  const handleNext = () => {
    if (reelNo >= reel.length - 1) return;
    setReelNo((prev) => prev + 1);
  };

  return (
    <div className="visual">
      <div className={styles.sortingTabs}>
        {array.map((el, index) => {
          return (
            <Bar
              height={el}
              maxHeight={Math.max(...array)}
              key={index}
              bg={compare.includes(index)}
              sorted={sortedValues.includes(index)}
              swapEl={swapEl.includes(index)}
              minValue={minValue === index}
            />
          );
        })}
      </div>
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
      <div className={styles.sorting_options}>
        <button disabled={sorted} onClick={handleSortArray}>
          Sort
        </button>
        <button disabled={!sorted || mode !== "step"} onClick={handleNext}>
          Steps
        </button>
        <button disabled={!sorted || mode !== "auto"} onClick={handlePlay}>
          Visualise
        </button>
      </div>
    </div>
  );
};

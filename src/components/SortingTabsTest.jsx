import React, { useEffect, useState } from "react";
import styles from "../styles/SortingTabs.module.css";
import { Bar } from "./Bar";
import { sortArray } from "../utils/sortArray";
import { ColorDesc } from "./ColorDesc";
import { stepReel } from "../utils/stepReel";
import { palyReel } from "../utils/palyReel";

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
      setReel([[null, null, [...newArray], null]]);
    } else {
      setArray(arrayInput);
      setReel([[null, null, [...arrayInput], null]]);
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

  const handlePlay = () => {
    console.log(reel);
    palyReel(
      [reel[0], reel[0], ...reel],
      setCompare,
      setSwapEl,
      setMinValue,
      setSortedValues,
      setArray,
      speed
    );
  };

  const renderReel = (i) => {
    stepReel(
      i,
      reel,
      setCompare,
      setSwapEl,
      setMinValue,
      setSortedValues,
      setArray
    );
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
      <ColorDesc />
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

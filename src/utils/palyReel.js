import pause from "./pause";

export const palyReel = async (
  reel,
  setCompare,
  setSwapEl,
  setMinValue,
  setSortedValues,
  setArray,
  speed
) => {
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

    if (index !== null) {
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

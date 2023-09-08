import bubbleSort from "../algorithms/bubbleSort";
import insertionSort from "../algorithms/insertionSort";
import selectionSort from "../algorithms/selectionSort";

export const sortArray = (algo, array) => {
  const sort =
    algo === "bubble"
      ? bubbleSort
      : algo === "selection"
      ? selectionSort
      : insertionSort;

  return sort([...array]);
};

import bubbleSort2 from "../algorithms/bubbleSort2";
import insertionSort from "../algorithms/insertionSort";
import insertionSort2 from "../algorithms/insertionSort2";
import selectionSort from "../algorithms/selectionSort2";

export const sortArray = (algo, array) => {
  const sort =
    algo === "bubble"
      ? bubbleSort2
      : algo === "selection"
      ? selectionSort
      : insertionSort2;

  return sort([...array]);
};

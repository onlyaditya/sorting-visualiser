import pause from "../utils/pause";

async function selectionSort(arr, switchColour, setSorted, delay, swapEl) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    await pause(delay);
    let min = i;

    swapEl(i, min);

    for (let j = i + 1; j < n; j++) {
      switchColour(i, j);
      await pause(delay);
      if (arr[j] < arr[min]) {
        min = j;
        swapEl(i, min);
      }
    }

    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;

    setSorted(i);
  }
  switchColour(null, null);
  setSorted(n - 1);
  swapEl(null, null);
  return arr;
}

export default selectionSort;

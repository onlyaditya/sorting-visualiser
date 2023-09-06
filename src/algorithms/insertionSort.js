async function insertionSort(arr) {
  const length = arr.length;
  const reel = [];

  for (let i = 1; i < length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
}

export default insertionSort;

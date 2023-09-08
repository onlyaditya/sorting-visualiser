function bubbleSort(arr) {
  const n = arr.length;
  const reel = [];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      reel.push([j, j + 1, null, null]);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        reel.push([j, j + 1, [...arr], null]);
      }
    }
    reel.push([null, null, null, n - i - 1]);
  }

  reel.push([null, null, null, 0]);

  return reel;
}

export default bubbleSort;

function selectionSort(arr) {
  let n = arr.length;
  const reel = [];

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    reel.push([i, min, null, null, min]);
    for (let j = i + 1; j < n; j++) {
      reel.push([i, j, null, null, null]);
      if (arr[j] < arr[min]) {
        min = j;
        reel.push([i, min, null, null, min]);
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
    reel.push([i, min, [...arr], i, null]);
  }

  reel.push([null, null, [...arr], n - 1, null]);

  return reel;
}

export default selectionSort;

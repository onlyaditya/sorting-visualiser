const insertionSort2 = (arr) => {
  const n = arr.length;
  const reel = [];

  reel.push([null, null, null, 0]);
  for (let i = 0; i < n; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j] > arr[j + 1]) {
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      reel.push([j, j + 1, null, null]);
      reel.push([j, j + 1, [...arr], null]);
      j--;
    }
    reel.push([null, null, null, i]);
  }

  return reel;
};

export default insertionSort2;

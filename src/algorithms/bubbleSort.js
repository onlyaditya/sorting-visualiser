import pause from "../utils/pause";

async function bubbleSort(arr, switchColour, setSorted, delay) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    /**
     * Pausing the next operation by delay amount of time
     */
    await pause(delay);
    /**
     * Last i elements are already in place, so we don't need to check them again
     */
    for (let j = 0; j < n - i - 1; j++) {
      switchColour(j, j + 1);
      /**
       * Pausing the next operation by delay amount of time
       */
      await pause(delay);
      /**
       * Compare adjacent elements
       */
      if (arr[j] > arr[j + 1]) {
        /**
         * Swap arr[j] and arr[j + 1]
         */
        const temp = arr[j];

        arr[j] = arr[j + 1];

        arr[j + 1] = temp;
      }
    }

    setSorted(n - i - 1);
  }

  switchColour(null, null);
  setSorted(0);

  return arr;
}

export default bubbleSort;

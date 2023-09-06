function pause(delay) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, delay);
  });
}

export default pause;

const getRow = (rowIndex: number): number[] => {
  let prev: number[] = [1];
  let curr: number[] = [1, 1];

  for (let j = 1; j <= rowIndex; j++) {
    for (let i = 1; i < curr.length - 1; i++) {
      curr[i] = prev[i] + prev[i - 1];
    }
    prev = curr;
    curr = Array(prev.length + 1).fill(1);
  }
  return prev;
};

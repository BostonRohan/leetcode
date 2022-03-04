const generate = (numRows: number): number[][] => {
  const ans: number[][] = Array(numRows)
    .fill(null)
    .map((_, i) => Array(i + 1));

  for (let i = 0; i < ans.length; i++) {
    ans[i][0] = 1;
    ans[i][ans[i].length - 1] = 1;
    for (let j = 1; j < i; j++) {
      ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
  }
  return ans;
};

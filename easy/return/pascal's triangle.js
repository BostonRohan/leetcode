var generate = function (numRows) {
  let ans = [];

  if (numRows === 0) return ans;

  ans.push([1]);

  for (let i = 1; i < numRows; i++) {
    let prevRow = ans[i - 1];
    let newRow = [];

    newRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }
    newRow.push(1);
    ans.push(newRow);
  }

  return ans;
};

//timed (10 min)
var generate = (numRows) => {
  let ans = [];
  let mid = 0;
  let i = numRows;

  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1, 1]];
  ans[0] = 1;
  ans[ans.length - 1] = 1;

  while (i > 0) {}
  return ans;
};

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

//Can we create a solution with a while loop????

//   while (ans.length < numRows || i < ans.length) {
//     let arr = [1];
//     if (ans.length === numRows) return ans;

//     elCount = ans[i - 1].length - 1;

//     while (elCount > 0) {
//       arr.push(ans[i - 1][i - 1] + ans[i - 1][i]);
//       elCount--;
//     }

//     if (i >= 1) arr.push(1);
//     i++;

//     ans.push(arr);
//   }

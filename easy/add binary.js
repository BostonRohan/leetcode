var addBinary = function (a, b) {
  let carry = 0;
  let ans = "";
  let tailA = a.length - 1;
  let tailB = b.length - 1;

  while (tailA >= 0 || tailB >= 0) {
    let total = (+a[tailA] || 0) + (+b[tailB] || 0) + carry;
    if (total > 1) {
      total = total % 2;
      carry = 1;
    } else carry = 0;
    tailA--;
    tailB--;
    ans = `${total}${ans}`;
  }
  return carry !== 0 ? carry + ans : ans;
};

//https://www.youtube.com/watch?v=6HkHnkifXlE&ab_channel=babybear4812

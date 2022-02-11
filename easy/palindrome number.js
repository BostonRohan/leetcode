var isPalindrome = function (x) {
  let backward = parseInt(x.toString().split("").reverse().join(""));
  if (x < 0) return false;
  if (x === backward) return true;
  else return false;
};

//Second Solution (10 min timer)

const isPalindrome = (x) => {
  let arr = x.toString().split("");
  let sum = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    sum += arr[i];
  }
  return +sum === x;
};

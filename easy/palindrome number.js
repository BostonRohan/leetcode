var isPalindrome = function (x) {
  let backward = parseInt(x.toString().split("").reverse().join(""));
  if (x < 0) return false;
  if (x === backward) return true;
  else return false;
};

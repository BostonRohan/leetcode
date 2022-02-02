var lengthOfLastWord = function (s) {
  let arr = s.split("");
  let last = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    last += arr[i];
    if (arr[i - 1] === " " && arr[i] !== " ") return last.trim().length;
    else if (arr[i] === "") i--;
  }
  return s.trim().length;
};

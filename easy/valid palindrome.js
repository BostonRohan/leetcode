//1. remove all non-alphanumeric characters
//2. convert uppercase to lowercase
//3. check if s.reverse() ==== s

var isPalindrome = function (s) {
  s = s
    .replace(/[\W_]/g, "")
    .split("")
    .map((char) => char.toLowerCase());

  return s.join("") === s.reverse().join("");
};

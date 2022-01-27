var isValid = function (s) {
  let brackets = { "(": ")", "{": "}", "[": "]" };
  let arr = [];
  for (let char of s) {
    //Finds the key (opening bracket), and checks for the corresponding closing bracket
    if (brackets[char]) {
      //Pushes the closing bracket
      arr.push(brackets[char]);
    } else {
      //Checks the last element of the closing bracket to see if it corresponds to the closing bracket
      if (arr.pop() !== char) return false;
    }
  }
  //Returns true since the array should be zero
  return !arr.length;
};
//https://www.youtube.com/watch?v=wtynhUwS5hI

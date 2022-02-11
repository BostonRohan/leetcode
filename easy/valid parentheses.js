// var isValid = function (s) {
//   let brackets = { "(": ")", "{": "}", "[": "]" };
//   let arr = [];
//   for (let char of s) {
//     //Finds the key (opening bracket), and checks for the corresponding closing bracket
//     if (brackets[char]) {
//       //Pushes the opening bracket
//       arr.push(brackets[char]);
//     } else {
//       //Checks the last element of the arr to see if it corresponds to the closing bracket
//       if (arr.pop() !== char) return false;
//     }
//   }
//   //Returns true since the array should be zero
//   return !arr.length;
// };
// //https://www.youtube.com/watch?v=wtynhUwS5hI

//Second Solution (10 min timer)
const isValid = (s) => {
  let brackets = { "(": ")", "{": "}", "[": "]" };
  const open = Object.keys(brackets);
  const closed = Object.values(brackets);

  for (let i = 0; i < s.length; i++) {
    if (
      open.indexOf(
        brackets[s[i]] > 0 && closed.indexOf(brackets[s[i - s.length]])
      ) > 0
    ) {
      return true;
    }
  }
  return false;
};

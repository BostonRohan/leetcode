// var longestCommonPrefix = (strs) => {
//   if (strs.length === 1) return strs[0];

//   let res = strs[0];
//   let i = 1;

//   //While res exists and i is less than the string length
//   while (res && i < strs.length) {
//     //If the string starts with res
//     if (strs[i].startsWith(res)) {
//       i++;
//     } else {
//       //Cuts off the end of the word, until the longest prefix remains
//       res = res.slice(0, res.length - 1);
//     }
//   }

//   return res;
// };

//Second Solution (10 min timer)

const longestCommonPrefix = (strs) => {
  let pre = "";
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] === strs[i + 1][j]) {
        pre += strs[i][j];
      }
    }
  }
  return pre;
};

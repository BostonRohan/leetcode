var longestCommonPrefix = (strs) => {
  if (strs.length === 1) return strs[0];

  let res = strs[0];
  let i = 1;

  //While res exists and i is less than the string length
  while (res && i < strs.length) {
    //If the string starts with res
    if (strs[i].startsWith(res)) {
      i++;
    } else {
      //Cuts off the end of the word, until the longest prefix remains
      res = res.slice(0, res.length - 1);
    }
  }

  return res;
};

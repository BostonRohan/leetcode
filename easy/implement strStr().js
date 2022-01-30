var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  let regex = new RegExp(needle, "g");
  const search = haystack.search(regex);
  if (search === null) return -1;
  else return search;
};

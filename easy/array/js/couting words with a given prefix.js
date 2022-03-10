var prefixCount = function (words, pref) {
  let wordCount = 0;
  let prefCount = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === pref[0]) {
      prefCount = 1;
      for (let j = 1; j < pref.length; j++) {
        if (words[i][j] === pref[j]) {
          prefCount++;
        }
      }
    }
    if (prefCount === pref.length) {
      wordCount++;
      prefCount = 0;
    }
  }
  return wordCount;
};

//establish two counters

//iterate over the words arr

//if the two first letters match, iterate over the prefix

//if the two letters match increment the pref count

//if pref count is the length of the prefix, then the word has the prefix

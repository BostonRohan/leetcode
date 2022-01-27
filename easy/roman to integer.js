var romanToInt = function (s) {
  const conversion = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  const arr = s.split("").map((letter) => conversion[letter]);

  let sum = 0;
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] * 10 === arr[i + 1] || arr[i] * 5 === arr[i + 1]) diff += arr[i];
    else sum += arr[i];
  }
  return sum - diff;
};

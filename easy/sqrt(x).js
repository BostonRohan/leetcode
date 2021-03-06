var mySqrt = function (x) {
  let l = 1;
  let r = x;

  if (x < 2) return x;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (mid * mid === x) return mid;
    else if (mid * mid > x) r = mid;
    else if (mid * mid < x) l = mid + 1;
  }
  return l - 1;
};
mySqrt(10);

var climbStairs = function (n) {
  let counting = (remaining, saved) => {
    if (remaining < 0) return 0;

    if (remaining === 0) return 1;

    if (saved[remaining]) return saved[remaining];

    saved[remaining] =
      counting(remaining - 1, saved) + counting(remaining - 2, saved);

    return saved[remaining];
  };
  return counting(n, {});
};
climbStairs(2);

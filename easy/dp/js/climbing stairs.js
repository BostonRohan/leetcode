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

var climbStairs = function (n) {
  if (n <= 2) return n;

  let withOneStep = 1;
  let withTwoSteps = 2;
  let sum = withOneStep + withTwoSteps;

  for (let i = 3; i < n; i++) {
    withOneStep = withTwoSteps;
    withTwoSteps = sum;
    sum = withOneStep + withTwoSteps;
  }

  return sum;
};
climbStairs(5);

//Solution doesn't work on leetcode ....
function climbStairsFirst(
  n: number,
  memoNum: number | undefined,
  memo: object | undefined
): number {
  if (n <= 3) return n;

  if (n === 0) {
    memo[n] = memoNum;
    memoNum = 0;
    return 1;
  }
  if (n < 0) return 0;

  if (memo[n]) {
    n = memo[n];
  }

  memoNum++;

  return climbStairsFirst(n - 1, 0, {}) + climbStairsFirst(n - 2, 0, {});
}

//Helper solution works on leetcode
//Do not pass in extra params to the main func ....
function climbStairs(n: number): number {
  const memo = {};
  if (n <= 3) return n;

  const helper = (n: number) => {
    if (n === 0) return 1;
    if (n < 0) return 0;

    if (memo[n]) {
      return memo[n];
    }
    return (memo[n] = helper(n - 1) + helper(n - 2));
  };

  return helper(n);
}

//recursive problem //ex: n = 2 1. 1 + 1, 2

//ex: n = 3 1 + 1 + 1, 1 + 2, 2 + 1

//ex: n = 4 1 + 1 + 1 + 1, 1 + 1 + 2, + 2 + 1 + 1, 1 + 2 + 1, 2 + 2

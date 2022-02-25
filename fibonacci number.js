//F(n) = F(n - 1) + F(n - 2), for n > 1.
//base cases
//n = 0 === 0
//n = 1 === 1

var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

//Time complexity??
//nested for loop
//o(n^2)

// var countBits = function (n) {
//   let ans = [];
//   for (let i = 0; i <= n; i++) {
//     let bit = i.toString(2);
//     let total = 0;
//     if (bit.includes(1)) {
//       for (let j = 0; j < bit.length; j++) {
//         if (+bit[j] === 1) total++;
//       }
//     }
//     ans.push(total);
//   }
//   return ans;
// };

//find the binary representation of every num 1, 2, 3 etc.

//then find the number of ones in that representation

//have a total for each iteration

//push the total at the end of each iteration

//o(n) solution
//How does this solution follow the bit pattern??
const countBits = (n) => {
  let dp = new Array(n + 1).fill(0),
    offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset = i;

    dp[i] = 1 + dp[i - offset];
  }
  return dp;
};
console.log(countBits(4));

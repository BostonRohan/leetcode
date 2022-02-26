//buy on the lowest day, sell on the highest day if it is after the buy

//establish three vars
//buy
//sell
//profit

var maxProfit = function (prices) {
  let buy = 0;
  let sell;
  let currProfit = 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[buy]) buy = i;

    if (prices[i] > prices[buy]) {
      sell = i;
      currProfit = prices[sell] - prices[buy];
    }
    profit = Math.max(currProfit, profit);
  }
  return profit;
};

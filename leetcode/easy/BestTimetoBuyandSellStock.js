/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0;
  let cur = prices[0];

  for(let i=1; i<prices.length; i++) {
      const price = prices[i];

      if(cur > price) {
          cur = price
      } else {
          result = Math.max(result, price - cur)
      }
  }

  return result
};
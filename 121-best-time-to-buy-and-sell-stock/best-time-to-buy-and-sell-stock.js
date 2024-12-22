/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length == 0) return 0

    var minPrice = prices[0]
    var maxProfit = 0

    for (var i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice)
        let profit =  prices[i] - minPrice
        maxProfit = Math.max(maxProfit, profit)
    }

    return maxProfit
};
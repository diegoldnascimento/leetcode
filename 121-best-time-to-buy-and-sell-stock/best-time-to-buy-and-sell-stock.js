/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity; // Track the minimum price seen so far
    let maxProfit = 0; // Track the maximum profit
    
    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price if a lower price is found
        minPrice = Math.min(minPrice, prices[i]);
        
        // Calculate profit if selling on the current day
        let profit = prices[i] - minPrice;
        
        // Update maxProfit if the current profit is greater
        maxProfit = Math.max(maxProfit, profit);
    }
    
    return maxProfit;
};

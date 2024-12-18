/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    var answer = []

    for (var i = 0; i < prices.length; i++) {
        var discount = 0
        for (var j = i + 1; j < prices.length; j++) {
            if (prices[i] >= prices[j]) {
                // New discount\
                discount = prices[j]
                break;
            }
        }
         answer.push(prices[i] - discount); // Apply discount and store final price
    }
           
    return answer
};
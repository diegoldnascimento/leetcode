/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    var basket = new Map();
    var ans = 0;
    var left = 0;

    for (var right = 0; right < fruits.length; right++) {
        var fruit = fruits[right];
        basket.set(fruit, (basket.get(fruit) || 0) + 1);

        // If the basket has more than 2 types of fruits, move the left pointer
        while (basket.size > 2) {
            var leftFruit = fruits[left];
            basket.set(leftFruit, basket.get(leftFruit) - 1);

            if (basket.get(leftFruit) === 0) {
                basket.delete(leftFruit);
            }

            left++;
        }

        // Update the answer with the maximum window size
        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};
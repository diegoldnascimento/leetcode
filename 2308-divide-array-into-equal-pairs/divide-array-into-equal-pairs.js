/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if (nums.length === 0) {
        return false;
    }

    var hashmap = new Map();
    var pairs = Math.floor(nums.length / 2)

    if (pairs == 0) {
        return false;
    }

    for (const num of nums) {
        var counter = (hashmap.get(num) || 0) + 1;

        if (counter == 2) {
            counter = 0;
            pairs--;
        }
        
        if (pairs == 0) {
            return true;
        }
 
        hashmap.set(num, counter)
    }

    return pairs == 0;
};
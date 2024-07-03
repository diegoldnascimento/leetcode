/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    var ans = null
    var key = null
    var hashmap = new Map()

    for (var i = 0; i < nums.length; i++) {
       // real , converted
        hashmap.set(nums[i], Math.abs(nums[i]))
    }

    for (const [real, converted] of hashmap.entries()) {
        if (ans == null) {
            ans = converted
            key = real
            continue;
        } 

        console.log(ans, key, real, converted)

        if (ans >= converted) {
            ans = converted
            key = real

            if (hashmap.get(real) && hashmap.get(real * -1)) {
                key = Math.abs(real)
            }
        }
    }

    return key
};
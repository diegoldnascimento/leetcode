/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map = new Map()
    var ans = nums[0]

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i]

        console.log({num})

        if (!map.has(num)) {
            map.set(num, 1)
        } else {
            map.set(num, (map.get(num) || 0) +1)

            if (map.get(num)+1 > Math.round(nums.length / 2)) {
                return num
            } 
        }

        var temp = null

        for (const [key, val] of map.entries()) {
            if (temp == null) {
                temp = val
            }

            if (val >= temp) {
                ans = key
                temp = val
            }
        }
    }

    return ans
};
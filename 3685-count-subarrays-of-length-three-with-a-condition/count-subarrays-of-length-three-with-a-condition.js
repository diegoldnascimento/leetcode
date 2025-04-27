/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    // given nums = [1, 2, 1, 4, 1]
    // expected = 1
    // [1, 4, 1] = n[0] + n[2] == n[1]/2


    // constraints 3 <= nums.length <= 100
    // [1, 2, 1], [1, 2, 4], [1, 2, 1]
    // 1, 2, 1, 4, 1
    // 1, 2, 1
    // 1, 2, 4
    // 1, 2, 1
    // 1, 1, 1

    if (nums.length < 3) {
        return 0;
    }

    var count = 0
    
    for (var i = 0; i <= nums.length - 3; i++) {
        var a = nums[i];
        var b = nums[i + 1];
        var c = nums[i + 2];

        if ((a + c) == (b / 2)) {
            count++;
        }
    }

    return count;
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var ans = []

    for (var i = 0; i < nums1.length; i++) {
        const foundIdx = nums2.findIndex(v => v == nums1[i])

        if (foundIdx == -1)
            continue;

        if (nums2.length == 0) {
            return ans
        }

        
        ans.push(nums1[i])
        nums2.splice(foundIdx, 1)
    }

    return ans
};
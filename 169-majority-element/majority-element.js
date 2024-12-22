/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null;  // Default candidate
    let count = 0;         // Count starts at 0

    // Phase 1: Find the Candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num; // Assign new candidate
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Verify the Candidate (Optional for Leetcode as it guarantees a majority element exists)
    let frequency = 0;
    for (const num of nums) {
        if (num === candidate) frequency++;
    }

    return frequency > Math.floor(nums.length / 2) ? candidate : null;
};

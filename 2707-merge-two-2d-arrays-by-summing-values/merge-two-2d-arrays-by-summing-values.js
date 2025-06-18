/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
 

    var hashmap = new Map()

    for (const num of nums1) {
        hashmap.set(num[0], (hashmap.get(num[0]) || 0) + num[1])
    }

    for (const num of nums2) {
        hashmap.set(num[0], (hashmap.get(num[0]) || 0) + num[1])
    }

    var arr = []

    for (const entries of hashmap.entries()) {
        arr.push(entries[0])
    }

    arr = arr.sort((a,b) => a-b)

    var result = []

    for (const id of arr) {
        result.push(
            [id, hashmap.get(id)]
        )
    }

    console.log(hashmap.entries())

    return result
};
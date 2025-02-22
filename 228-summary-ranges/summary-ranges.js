/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    var ranges = [];
    var counter = 0;

    for (var i = 0; i < nums.length; i++) {
        var j = i + 1;
        var num = nums[i]
        var num2 = nums[j]

        if (num == num2 - 1) {
            while (j > i) {
                var num3 = nums[j + 1]
                console.log({ num, num2, num3 })

                if (num2 !== num3 - 1) {
                    ranges.push(`${num}->${nums[j]}`)
                    i = j
                    break;
                }

                j++;
                num2 = nums[j];
            }
        } else if (num !== num2 - 1) {
            ranges.push(String(num))
        }

        

    }

    return ranges;
};
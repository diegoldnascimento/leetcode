/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charInfoMap = new Map();

    for (let index = 0; index < s.length; index++) {
        const char = s[index];
        const existingInfo = charInfoMap.get(char);

        const updatedInfo = {
            count: (existingInfo?.count || 0) + 1,
            firstIndex: index,
        };

        charInfoMap.set(char, updatedInfo);
    }

    for (const { count, firstIndex } of charInfoMap.values()) {
        if (count === 1) {
            return firstIndex;
        }
    }

    return -1;
};
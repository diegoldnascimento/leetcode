/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = {}) {
    if (n <= 1) {
        return n;
    }

    if (memo[n] !== undefined) {
        return memo[n]
    }

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n]
};
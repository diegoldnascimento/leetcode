/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        let current = cache;
        for (const arg of args) {
            if (!current.has(arg)) current.set(arg, new Map());
            current = current.get(arg);
        }
        if (current.has("result")) return current.get("result");

        const result = fn(...args);
        current.set("result", result);
        return result;
    };
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *   callCount += 1;
 *   return a + b;
 * });
 * 
 * console.log(memoizedFn(2, 3)); // 5
 * console.log(memoizedFn(2, 3)); // 5 (cached)
 * console.log(callCount); // 1
 */

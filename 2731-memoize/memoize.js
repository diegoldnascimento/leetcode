/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    var cache = new Map()
    
    return function(...args) {
        console.log({args})
        var key = JSON.stringify(args)

        if (cache.has(key)) {
            return cache.get(key)
        }
        var result = fn(...args);
        cache.set(key, result)
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
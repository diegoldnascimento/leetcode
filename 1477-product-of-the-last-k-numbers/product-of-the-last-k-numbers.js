
var ProductOfNumbers = function() {
    this.products = []
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (!this.products) {
        return null;
    }

    this.products.push(num)
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    var numbers = 1
    var n = this.products.length;
    var count = 0;

    for (var i = n - 1; i >= 0; i--) {
        if (count < k) {
            numbers = numbers * this.products[i]
            count++
        }

        if (count == k) {
            break;
        }
    }

    return numbers;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
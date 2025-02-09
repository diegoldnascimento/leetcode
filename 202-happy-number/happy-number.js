function isHappy(n) {
  // Good Luck
  
  var seen = new Set();
  
  while(n !== 1 && !seen.has(n)) {
    seen.add(n)
    
    var sum = 0;
    var digits = new String(n).split("")
    
    for (const digit of digits) {
      sum += digit ** 2
    }
    
    n = sum
  }
  
  return n === 1
}
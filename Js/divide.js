/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let count = 0; 

  if (divisor === 0) return count;

  const intDividend = parseInt(Math.abs(dividend));
  const intDivisor = parseInt(Math.abs(divisor));

  console.log(intDividend, intDivisor);
  
  for (let n = intDivisor; n <= intDividend; n += intDivisor) {
    count++;
  } 

  return (divisor < 0 || dividend < 0) ? count * -1 : count;
};


console.log(divide(7, -3))

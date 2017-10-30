function isDivisor(number, divisor) {
  return (number % divisor) == 0;
}

// Long-processing time block function
function greatestCommonDivisor(a, b) {
  let lowest = Math.min(a, b), greatest = Math.max(a, b), commonDivisor = -1;

  for(i = lowest; i > 0; i--) {
    if(isDivisor(lowest, i)) {
      if(isDivisor(greatest, i)) {
        commonDivisor = i;
        break;
      }
    }
  }

  return commonDivisor;
}

module.exports = {
  greatestCommonDivisor: greatestCommonDivisor,
}

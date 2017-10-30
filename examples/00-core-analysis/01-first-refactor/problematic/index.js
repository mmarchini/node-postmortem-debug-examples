const createDivisor = require("./helper.js").createDivisor;

// Long-processing time block function
function greatestCommonDivisor(a, b) {
  let lowest = Math.min(a, b), greatest = Math.max(a, b),
      aDivisor = null, bDivisor = null, commonDivisor = null;

  for(i = lowest; i > 0; i--) {
    aDivisor = createDivisor(lowest, i);
    if(aDivisor.isDivisor) {
      bDivisor = createDivisor(greatest, i);
      if(bDivisor.isDivisor) {
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

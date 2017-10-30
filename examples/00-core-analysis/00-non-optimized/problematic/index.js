const createDivisor = require("./helper.js").createDivisor;

// Long-processing time block function
function greatestCommonDivisor(a, b) {
  let aDivisors = [], bDivisors = [], commonDivisor = null;

  for(i = 0; i < a; i++)
    aDivisors.push(createDivisor(a, i));

  for(i = 0; i < b; i++)
    bDivisors.push(createDivisor(b, i));

  for(aDivisor of aDivisors.reverse()) {
    for(bDivisor of bDivisors.reverse()) {
      if(aDivisor.divisor == bDivisor.divisor) {
        if(aDivisor.isDivisor && bDivisor.isDivisor) {
          commonDivisor = aDivisor.divisor;
        }
        break;
      }
    }
    if(commonDivisor != null) {
      break;
    }
  }
   return commonDivisor;
}

module.exports = {
  greatestCommonDivisor: greatestCommonDivisor,
}

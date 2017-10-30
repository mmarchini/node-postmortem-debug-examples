// Look, I know how to implement Dynamic Programming!
let storedDivisors = {};

class Divisor {
  constructor(number, divisor) {
    this.isDivisor = number % divisor == 0;
    this.number = number;
    this.divisor = divisor;
  }
}

function createDivisor(number, divisor) {
  let divisorObject = storedDivisors[[number, divisor]];
  if(divisorObject === undefined) {
    divisorObject = new Divisor(number, divisor);
    storedDivisors[number, divisor] = divisorObject;
  }
  return divisorObject;
}

module.exports = {
  createDivisor: createDivisor,
}

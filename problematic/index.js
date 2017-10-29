// Memory leak
function CPPFunction() {
  console.log("I'm a C++ function!");
}

// Exponential memory growth
function sortingStuff(stuff) {
  return sortedStuff;
}

// External block function
function accessDatabase() {
  return {
    'id': 12,
    'username': "john.doe",
    'display_name': "John Doe",
  }
}

// Long-processing time block function
function someProcessing(a, b) {
  return (a * (((a * b) + a) % b)) + ( b * 10 );
}

module.exports = {
  CPPFunction: CPPFunction,
  sortingStuff: sortingStuff,
  accessDatabase: accessDatabase,
  someProcessing: someProcessing,
}

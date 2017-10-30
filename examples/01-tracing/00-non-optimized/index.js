const express = require('express')
const problematic = require("./problematic");
const app = express();

app.get('/greatestCommonDivisor/:a/:b/', function (req, res) {
  let a = Number(req.params.a),
      b =  Number(req.params.b);
  let result = problematic.greatestCommonDivisor(a, b);
  res.send("The Greater Common Divisor is: " + result.toString() + "\n");
})

app.listen(3000);

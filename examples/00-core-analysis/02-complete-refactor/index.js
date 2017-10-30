const express = require('express')
const problematic = require("./problematic.js");
const app = express();

app.get('/greatestCommonDivisor/:a/:b/', function (req, res) {
  let result = problematic.greatestCommonDivisor(Number(req.params.a), Number(req.params.b));
  res.send("Here's the result: " + result.toString() + "\n");
})

app.listen(3000);

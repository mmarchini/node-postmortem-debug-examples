const express = require('express')
const problematic = require("problematic");
const app = express();

app.get('/someProcessing/:a/:b/', function (req, res) {
  let result = problematic.someProcessing(Number(req.params.a), Number(req.params.b));
  res.send("Here's the result: " + result.toString() + "\n");
})

app.get('/accessDatabase/', function (req, res) {
  problematic.accessDatabase();
  res.send('Hello World!');
})

app.get('/cpp-function/', function (req, res) {
  res.send('Just ran a function from a C++ module!');
})

app.get('/sortingStuff/:count/', function (req, res) {
  problematic.sortingStuff(req.params.count).
  res.send('Hello World!');
})

app.listen(3000);

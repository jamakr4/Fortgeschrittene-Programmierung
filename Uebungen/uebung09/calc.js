var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});


app.get('/add/:op1/:op2', function(req, res) {
  let op1 = parseFloat(req.params.op1);
  let op2 = parseFloat(req.params.op2);
  let result = op1 + op2;
  res.contentType("text/html");
  res.status(200).send(result.toString());
});


app.get('/sub/:op1/:op2', function(req, res) {
  let op1 = parseFloat(req.params.op1);
  let op2 = parseFloat(req.params.op2);
  let result = op1 - op2;
  res.contentType("text/html");
  res.status(200).send(result.toString());
});


app.get('/mul/:op1/:op2', function(req, res) {
  let op1 = parseFloat(req.params.op1);
  let op2 = parseFloat(req.params.op2);
  let result = op1 * op2;
  res.contentType("text/html");
  res.status(200).send(result.toString());
});


app.get('/div/:op1/:op2', function(req, res) {
  let op1 = parseFloat(req.params.op1);
  let op2 = parseFloat(req.params.op2);
    let result = op1 / op2;
    res.contentType("text/html");
    res.status(200).send(result.toString());
  }
);


app.get('*', function(req, res) {
  res.contentType("text/html");
  res.status(404).send("Fehler: Route not found");
});

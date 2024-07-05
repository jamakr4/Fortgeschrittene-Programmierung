var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});


app.get('/:opr/:op1/:op2', function(req, res) {
  let op1 = parseFloat(req.params.op1);
  let op2 = parseFloat(req.params.op2);
  let opr = (req.params.opr);
  let re;
  
  switch(opr)
  {
    case 'add':  re = op1 + op2;
    res.contentType("text/html");
    res.status(200).send(re.toString());
    break;

    case 'min':  re = op1 - op2;
    res.contentType("text/html");
    res.status(200).send(re.toString());
    break;

    case 'mul':  re = op1 * op2;
    res.contentType("text/html");
    res.status(200).send(re.toString());
    break;

    case 'div':  re = op1 / op2;
    res.contentType("text/html");
    res.status(200).send(re.toString());
    break;

    default: 
    res.contentType("text/html");
    res.status(404).send("Fehler: Route not found");
  }
});

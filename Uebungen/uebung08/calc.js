//Aufgabe4
// HTTP Modul einbinden
var http = require('http');

// URL Modul einbinden
var url = require('url');

// HTTP Server erzeugen
var server = http.createServer(serve);

// Server an Port binden
server.listen(3000);

// Funktion des HTTP-Servers
// req: Anfrage vom Client (Request)
// res: Antwort des Servers (Response)
function serve(req, res) {
    
    var parts = req.url.split('/'); //urls zerlegen
    console.log(parts);
    var opr = parts[1];
	var op1 = parts[2];
	var op2 = parts[3];


    res.writeHead(200, {
        'content-type': 'text/plain',
        'Access-Control-Allow-Origin': 'null'
    });

    

    var s = '';

    switch(opr) {
        case 'add': 
            s = Number(op1) + Number(op2);
            break;

        case 'mul':
            s = Number(op1) * Number(op2);
            break;

        case 'sub':
            s = Number(op1) - Number(op2);
            break;

        case 'div':
            s = Number(op1) / Number(op2);
            break;

        default:
            s = req.url + ' Verstehe ich nicht';
            break;
    }

    res.write(s.toString());
    res.end();
}
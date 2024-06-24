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

    food = ["Milk", "Nutella", "Ice Cream", "Banana"];
    drink = ["RedBull", "Water", "Juice", "Shake"];



    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    //res.write("Hallo"); // Default Antwort
    console.log("====================");
    console.log(req.url); //
    

    var s = '';

    switch(req.url) {
        case '/food': 
            s = food[Math.floor(Math.random() * food.length)];
            break;

        case '/drink':
            s=s = drink[Math.floor(Math.random() * food.length)];
            break;

        default:
            s = req.url + ' Verstehe ich nicht';
            break;
    }

    res.write(s);
    res.end();
}

//curl localhost:3000/food
//curl localhost:3000/drink
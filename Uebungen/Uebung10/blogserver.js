var http = require("http");
var express = require("express");
const { stringify } = require("querystring");
const bodyParser = require("body-parser");
const fs = require('fs');
var app = express();
var server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.use(bodyParser.json());

app.use(function(req, res, next) //Cross Origin erlauben
{
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
});

let articles = []; // Artiekl aus JSON importieren
fs.readFile('articles.json', 'utf8', (err, data) => {
  if (err) 
    {
    console.error("Error reading articles.json:", err);
    return;
  }
  try 
  {
    articles = JSON.parse(data);
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});

    app.get('/:articles/:id?', function(req, res) {
        var requestType = req.params.articles;
        var id = req.params.id;
      
        if (requestType === "article") 
            {
          if (id) //Wenn ID vorhanden
            {
            let article = articles.find(article => article.id.toString() === id);

            if (article) //Wenn Artikel zur ID exisiert
                {
              res.contentType("application/json");
              res.status(200).send(JSON.stringify(article));
            } 
            else //Wenn es keinen Artikel zur ID gibt
            {
              res.contentType("text/html");
              res.status(404).send("Error: Article not found");
            }
          } 
          else // Keine Id --> Alles zurück geben
          {
            res.contentType("application/json");
            res.status(200).send(JSON.stringify(articles));
          }
        } 
        else // Falsche Route
        {
          res.contentType("text/html");
          res.status(404).send("Error: Route not found");
        }

});

app.delete('/:article/:id', function (req, res) {
    var requestType = req.params.article;  
    var id = req.params.id;

    const indexToDelete = articles.findIndex(article => article.id.toString() === id);

    if (indexToDelete === -1) 
        {
        return res.status(404).json({
            status: "error",
            message: "Article not found"
        });
    }

    articles.splice(indexToDelete, 1);

    fs.writeFile('articles.json', JSON.stringify(articles), (err) => {
        if (err) 
            {
            return res.status(500).json({
                status: "error",
                message: "Failed to delete article"
            });
        }

        res.status(204).json({
            status: "success",
            data: {
                article: null  //löschen
            }
        });
    });
});

function loadPage()
{
    const main = document.querySelector('main');
    main.innerHTML = topbar;
    createArticle(articles);
    initPage();
    console.log("Page geladen"); // Debugging Kommentar
}


function createArticle(article) {

	
	//Tags in einen String laden
	var tagString = '';
	for (var i = 0; i < article.tags.length; i++) 
		{
		tagString += article.tags[i];
		if (i !== article.tags.length - 1) 
			{ 
			tagString += ', ';
		}
	}

    // Die ID des Artikels abrufen
    var articleId = article.id; // Query String wird in artikel.html erzeugt
    
    // Den Hyperlink zur Artikelseite mit der ID erstellen
    var articleLink = 'artikel.html?id=' + articleId;
    
    // Artikelinhalt zusammenbauen
	var newArticle = '<button onclick="window.location.href=\'artikelneu.html?id=' + article.id + '\'">bearbeiten</button>' +
	'<h2><a href="' + articleLink + '">' + article.ueberschrift + '</a></h2>' +
	'<p>' + article.datum + ' ' + article.autor + '</p>' +
	'<p><b>' + article.teaser + '</b></p>' +
	'<p>' + article.text + '</p>' +
	'<p>Tags: ' + tagString + '</p>';
		
    newArticle += '</p>';
    
    // Artikelknoten erzeugen und zurückliefern
    var art = document.createElement('article');
    art.innerHTML = newArticle;
    
    console.log("Artikel geladen1"); // Debugging Kommentar
    return art;
}


function insertContent() //Laden von Top + Siedebar + footer
{
	var head = document.querySelector("header"); // Topbar einfügen
	head.innerHTML = topbar;

	var aside = document.querySelector("aside"); // Sidebar einfügen
	aside.innerHTML = sidebar;

	var foot = document.querySelector("footer");
	foot.innerHTML = footer;

	createTagCloud(articles) // TagCloud erstellen

	console.log("Topbar, Sidebar & Footer geladen"); // Debugging Kommentar
}

function loadArtikelById(id)
{
	// Find the article with the specified ID
	var article = articles.find(function(article) 
	{
		return article.id === id;
	});

	var main = document.getElementById('inhalt');

	if (article) 
	{        
		main.appendChild(createArticle(article)); // Article ins DOM einfügen 
		console.log("Artikel geladen");
	} 
	else 
	{
		var main = document.getElementById('inhalt');
		const errorMessage = "Artikel mit der ID '" + id + "' wurde nicht gefunden.";
		const newtext = document.createTextNode(errorMessage);
		main.appendChild(newtext);
		console.log(errorMessage);
	}
}

function getArticleByTag(tag) 
{
   
    var result = [];
    for (var i = 0; i < articles.length; i++) 
		{
        for (var k = 0; k < articles[i].tags.length; k++) 
			{
            if (articles[i].tags[k] === tag) 
				{
                result.push(articles[i]);
            }
        }
    }
    console.log("getArticleByTag ausgeführt");
    console.log(result.toString());
    return result;


//var t = getArticleByTag("c-klasse");
//console.log(t); 
}


function createTagCloud(articles) 
{
    var result = [];
	//Array mit alle Tags 1x erstellen
    for (var i = 0; i < articles.length; i++) 
		{
        for (var k = 0; k < articles[i].tags.length; k++) 
			{
            // Duplikate filtern
            if (!result.includes(articles[i].tags[k])) 
				{
                result.push(articles[i].tags[k]);
            }
        }
    }
    console.log("createTagCloud ausgeführt");
    console.log(result);
    
    // Tags ins DOM einfügen
    var tagCloud = document.getElementById("tagCloud");
    for (var a = 0; a < result.length; a++) 
		{
        var tagDiv = document.createElement("div");
        tagDiv.textContent = result[a] + "    ";
        tagDiv.className = "tag";

        //Neue Seite via Klick auf TagCloud aufrufen
        tagDiv.onclick = function() 
		{
            var url = "suchergebnis.html?";
			var newURL = url + "tag=" +   this.textContent;
			window.location.href = newURL;
			console.log(newURL);
            
        };
        tagCloud.appendChild(tagDiv);
    }
}

function loadArticleByTag() 
{
    var url = window.location.href;
    var queryString = url.split('?')[1];

    // Parse the query string using URLSearchParams
    var searchParams = new URLSearchParams(queryString);

    // Get the value of the "tag" parameter
    var tag = searchParams.get("tag");

    // Find articles with the specified tag
    var articlesWithTag = articles.filter(function(article) 
	{
        return article.tags.includes(tag);
    });

    // Insert articles into the DOM
    var container = document.getElementById("hier");

    articlesWithTag.forEach(function(article) 
	{
        var articleElement = createArticle(article);
        container.appendChild(articleElement);
    });
}
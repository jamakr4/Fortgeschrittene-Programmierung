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
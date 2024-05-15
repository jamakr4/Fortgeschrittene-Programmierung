function loadPage()
{
    const main = document.querySelector('main');
    main.innerHTML = topbar;
    createArticle(articles);
    initPage();
    console.log("Page geladen"); // Debugging Kommentar
}

function createArticle(article) {
	// Artikelinhalt zusammenbauen
	var newArticle = '<h2><a href="artikel.html">' + 
    article.ueberschrift + '</a></h2>' +
		'<p>' + article.datum + ' ' + 
        article.autor + '</p>' +
		'<p><b>' + article.teaser + 
        '</b></p>'
		'</article>';

    // Artikel Text einfügen
	newArticle += '<p>' + article.text + '</p>' + '<p><b>' + "Tags: " + article.tags + '</b></p>';
	
	// Tags einfügen
	for (var i = 0; i < article.tags.length; i++) {
		newArticle += '<a class="badge badge-pill badge-primary" href="tagliste.html">' + article.tags[i] + '</a> ';
	}
	
	// Artikelknoten erzeugen und zurückliefern
	var art = document.createElement('article');
	art.innerHTML = newArticle;
	
    console.log("Artikel geladen"); // Debugging Kommentar
	return art;
   
};


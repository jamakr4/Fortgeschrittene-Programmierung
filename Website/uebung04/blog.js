function createArticle(article) {
	// Artikelinhalt zusammenbauen
	var newArticle = '<h2><a href="artikel.html">' + article.ueberschrift + '</a></h2>' +
		'<p>' + article.datum + ' Uhr von ' + article.autor + '</p>' +
		'<p><b>' + article.teaser + '</b></p>' +
		'</article>';

	// Text
	newArticle += '<p>' + article.text + '</p>';
	
	// Tags einfügen
	for (var i = 0; i < article.tags.length; i++) {
		newArticle += '<a class="badge badge-pill badge-primary" href="tagliste.html">' + article.tags[i] + '</a> ';
	}
	
	// Artikelknoten erzeugen und zurückliefern
	var art = document.createElement('article');
	art.innerHTML = newArticle;
	
	return art;
};
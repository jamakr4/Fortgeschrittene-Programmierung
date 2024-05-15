function createArticle(article) {
	// Artikelinhalt zusammenbauen
	var newArticle = '<h2><a href="artikel.html">' + 
    article.ueberschrift + '</a></h2>' +
		'<p>' + article.datum + ' Uhr von ' + 
        article.autor + '</p>' +
		'<p><b>' + article.teaser + 
        '</b></p>' +
		'</article>';

	// Text
	newArticle += '<p>' + article.text + '</p>';
	
	// Artikelknoten erzeugen und zurückliefern
	var art = document.createElement('article');
	art.innerHTML = newArticle;
	
	return art;
};
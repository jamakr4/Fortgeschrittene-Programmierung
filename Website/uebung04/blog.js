let article = {
    ueberschrift: "",
    datum: "",
    autor: "",
    teaser: "",
    text: "",
    tags: []
};

let articleElement = document.getElementById("meinArtikel");
let ueberschrift = document.getElementById("ueberschrift").innerText;
let datum = document.getElementById("datum").innerText.replace("Datum: ", "");
let autor = document.getElementById("autor").innerText.replace("Autor: ", "");
let teaser = document.getElementById("teaser").innerText.replace("Einleitung: ", "");
let text = document.getElementById("text").innerText.replace("Text: ", "");
let tags = [];
document.querySelectorAll("#tags li").forEach(tagElement => {
    tags.push(tagElement.innerText);
});

let newArticle = {
    ueberschrift: ueberschrift,
    datum: datum,
    autor: autor,
    teaser: teaser,
    text: text,
    tags: tags
};

articles.push(newArticle);

let currentArticle = articles[0];

// Gib die Eigenschaften des Artikels in der Konsole aus
console.log("Überschrift:", currentArticle.ueberschrift);
console.log("Datum:", currentArticle.datum);
console.log("Autor:", currentArticle.autor);
console.log("Teaser:", currentArticle.teaser);
console.log("Text:", currentArticle.text);
console.log("Tags:", currentArticle.tags);
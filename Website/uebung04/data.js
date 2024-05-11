let articles = [
    {
       ueberschrift: "",
       datum: "",
       autor: "",
       teaser: "",
       text: "",
       tags: []
   },

   {
    ueberschrift: "Test",
    datum: "12.12.2023",
    autor: "Max M",
    teaser: "Das ist ein Test Artikel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: []
},

{
    ueberschrift: "Test2",
    datum: "12.1.2024",
    autor: "Herbert B",
    teaser: "Das ist ein weiterer Test Artikel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: []
},
   ];


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




// Gib die Eigenschaften des Artikels in der Konsole aus
console.log("Überschrift:", currentArticle.ueberschrift);
console.log("Datum:", currentArticle.datum);
console.log("Autor:", currentArticle.autor);
console.log("Teaser:", currentArticle.teaser);
console.log("Text:", currentArticle.text);
console.log("Tags:", currentArticle.tags);
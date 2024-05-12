window.onload = function() 
{
    te9();
};

function te() 
{
    const test = document.querySelector('div'); // erstes Div was gefunden wird wir ausgegeben --> String
    console.log(test);
}

function te2() 
{
    const test = document.querySelectorAll('div'); // alle divs die gefunden werden werden ausgegeben --> NodeList
    console.log(test);
}

function te3() 
{
    let x = document.getElementsByTagName('div'); // alle divs die gefunden werden werden ausgegeben --> NodeList
    console.log(x);
}

function te4() 
{
    let x = document.getElementById("a1"); // über ID auf ein bestimmtes Element zugreifen
    console.log(x);
    x.classList.add("rot"); // Css Klasse Rot auf Element dynamisch anwenden
}

function te5() {
    const childElement = document.getElementById('a1');
    const parentElement = childElement.parentElement; // mit childElement.parentElement; kann man sich immer das Parent Element holen 
    console.log("Elternelement:", parentElement);
}

function te6() {
    const parentElement = document.getElementById('parent');
    const children = parentElement.children; // MIt parentElement.children; kann sich immer alle Children Elemente holen
    console.log("Kindelemente:", children);
}

function te7() {
   const test = document.getElementById("a1");
   test.innerHTML = '<b>Neuer Inhalt</b>'; //Ändert Text in HTML, hier kombiniert mit b (bold)
}

function te8() {
 var textElement = document.createTextNode('abs'); // Hier nur Text möglich, kein Code wie <p> etc --> innerhtml nutzem
 var targetElement = document.getElementById('a1'); // Ein vorhandenes Element auswählen
 targetElement.appendChild(textElement); //Ans Zielelement anfügen
}

function te9() {
    var einElement = document.createElement("div");
    var neu =document.createElement('div'); // Neues DIV erstellen
    document.body.appendChild(neu);
 }


 //JSON - Objekt Notation
 
 var article = [{
    "ueberschrift": "",
    "autor": "",
    "datum": "",
    "text": ""
}];

var jsonArticle = JSON.stringify(article);// --> Umwandeln von Obbjekt zu Zeichenkette
var artcile2 = JSON.parse(jsonArticle); // Zeichenkette zu Objekt
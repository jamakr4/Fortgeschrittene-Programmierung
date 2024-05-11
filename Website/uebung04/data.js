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
    tags: ["Webdesign"]
},
   ];


//Code für Sidebar
   let sidebar =`
   <h3>Seitenleiste</h3>
   <form>
       <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">Email Adresse</label>
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
       </div>
       <div class="mb-3">
         <label for="exampleInputPassword1" class="form-label">Passwort</label>
         <input type="password" class="form-control" id="exampleInputPassword1">
       </div>
       <button type="submit" class="btn btn-primary">Einloggen</button>
     </form>

     <br>

<form class="d-flex" role="search">
   <input class="form-control me-2" type="search" placeholder="Suchen" aria-label="Search">
   <button class="btn btn-outline-success" type="submit">Suchen</button>
 </form>

 <br>

 <div class="dropdown">
   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
     Monatsliste
   </button>
   <ul class="dropdown-menu">
     <li><button class="dropdown-item" type="button">Januar</button></li>
     <li><button class="dropdown-item" type="button">Februar</button></li>
     <li><button class="dropdown-item" type="button">März</button></li>
     <li><button class="dropdown-item" type="button">April</button></li>
     <li><button class="dropdown-item" type="button">Mai</button></li>
     <li><button class="dropdown-item" type="button">Juni</button></li>
     <li><button class="dropdown-item" type="button">Juli</button></li>
     <li><button class="dropdown-item" type="button">August</button></li>
     <li><button class="dropdown-item" type="button">September</button></li>
     <li><button class="dropdown-item" type="button">Oktober</button></li>
     <li><button class="dropdown-item" type="button">November</button></li>
     <li><button class="dropdown-item" type="button">Dezember</button></li>
   </ul>
 </div>

<br>

 <div>
   <h5>Tag Cloud:
   <a href="tagliste.html"> #div</a> |
   <a href="tagliste.html">#tutorial</a> |
   <a href="tagliste.html">#coding</a></a></h5> 
</div>
   `;


   
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
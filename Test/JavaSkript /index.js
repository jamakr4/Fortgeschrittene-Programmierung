console.log("I like Pizza"); //Ausgabe Browser Console --> Debugging wichtig

//window.alert("I like Pizza");

document.getElementById("myh1").textContent = "Hello";  //Ins Element mit der ID myh1 den Text Hello einfügen
document.getElementById("myParagraph").textContent = "I love Pizza"

let name = "Steven";
let age = 19;
let status = true; // boolean

console.log(`You are ${age} years old`); //Variable in eine console log einfügen mit ${..}
console.log(typeof status); //logt Datentyp auf Konsole

document.getElementById("p1").textContent = `My name is ${name}`;
document.getElementById("p2").textContent = `I am  ${age} years old`;
document.getElementById("p3").textContent = `My status is ${status}`;


//let username = window.prompt("Whats your user name?"); //Entgegenname User Name über Windows Pormpt (Ähnlich zu Alert mit Einabe Aufforderug)
//console.log(username);

let username2;

document.getElementById("mysubmit").onclick = function(){ //Holt sich die Eingabe aus dem Eingabe Feld und gibt sie auf der Konsole wieder aus (mysubmit = id des Buttons, user = id Input)
    username2 = document.getElementById("user").value;
    document.getElementById("test").textContent = `Welcome ${username2}!`;  // SChreibt den Username ins Heading
    console.log(username2);

}

// Type Casting

//x = Number(x); // cast in Zahl
//y = String(y); // cast in String
//z = Boolean(z); // cast in Boolean --> leerer String = false

// counter Programm
 let val = 0;

 document.getElementById("counter").textContent = val;

document.getElementById("increase").onclick = function(){
    val++;
    document.getElementById("counter").textContent = val;
}
document.getElementById("decrease").onclick = function(){
    val--;
    document.getElementById("counter").textContent = val;
}
document.getElementById("reset").onclick = function(){
    val=0;
    document.getElementById("counter").textContent = val;
}

// Math Klasse
Math.PI; // gibt pi
Math.E;
Math.round; //runden
Math.floor; // abruden
Math.ceil; // aufrunden
Math.trunc; // Komma wegfallen lassen
Math.pow (2, 3); // 2^3
Math.sqrt; // Quadrat Wurel
Math.log(); //Logarhitmus
Math.sin(45); //Sinus
Math.cos(45); //cos
Math.tan(45); // Tagenz
Math.abs; // Betrag
Math.sign // Result = -1 wenn die Zahl negativ ist, 0 bei 0, und 1 wenn die Zahl positiv ist
Math.max (90, 7, 3); //Sucht maximum aus Zahlen oder Variablen
Math.min (90, 7, 3); //Sucht minimum aus Zahlen oder Variablen
Math.random(); // Zufalls Zahl ziwschen 1 und 0 --> für randsom Zahl zwischen z.B 1 und 6 --> Math.floorMath.random() *6)+1 da abgerunded
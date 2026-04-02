// hämtar och gömmer omstartningsknapparna
const datorRevanch = document.querySelector('.div4 button');
const spelareRevanch = document.querySelector('.div5 button');
const oavgjortRevanch = document.querySelector('.div6 button');
datorRevanch.style.display = "none";
spelareRevanch.style.display = "none";
oavgjortRevanch.style.display = "none";




// Hämtar Namn-knappen 
const namnKnapp = document.querySelector('body > div.div1 > button');
// Lägger till eventListener på namn-knappen
namnKnapp.addEventListener('click', namnFunktion);
// Skapar variabel för spelarens namn
let spelarensNamn = "";
// Hämtar h2 som ska ändra text vid namn uppdatering
const namnH2 = document.querySelector('body > div.div1 > h2');
// Hämtar raden som ska bort efter namn är ifyllt
const förstaP = document.querySelector(".div1 p");
// Skapar funktionen till knapptryckningen
function namnFunktion() {
    spelarensNamn = prompt("Vad heter söta lilla du??");
    // Stoppar in användarens namn i class=div1´s h2
    namnH2.innerText = `Tjena-nixen & Välkommen ${spelarensNamn}, Lycka till idag ❤️`
    förstaP.innerText = "";
    namnKnapp.style.display = "none";
}




// Skapar en slumpgenerator funktion till datorn.
function datornsVal() {
    // en array med de val som datorn kan välja på
    const val =  ["🪨", "✂️", "💰"];
    /* genererar ett slumpmässigt heltal mellan 0 och 2
    - Math.random() ger ett tal mellan 0 och 1
    - multipliceras med 3 -> blir mellan o och 3 (ej inklusive 3)
    - Math.floor() avrundar ner till 0, 1 eller 2 */
    const slumpTal = Math.floor(Math.random() * 3);
    // Returnerar ett av värderna i arrayen baserat på slumpTal (index)
    return val[slumpTal];
} 




// Hämtar sten, sax, påse - knapparna med en array av innehållet i div2-klassen
const spelKnappar = document.querySelectorAll(".div2 button");
// Lägger till enevtListener på knapparna samt vad som ska hända när knappen trycks
// använder wrappad arrow funktion 
spelKnappar[0].addEventListener('click', () => {
    spelrunda("🪨");
});
spelKnappar[1].addEventListener('click', () => {
    spelrunda("✂️");
});
spelKnappar[2].addEventListener('click', () => {
    spelrunda("💰");
});




// Hämtar raden "Ni har kört: 0 rundor"
let totSpelrundor = document.querySelector(".div2 p");
let antalRundor = 0;

// Hämtar raderna i div3
const valOchPoäng = document.querySelectorAll(".div3 p")
/*
valOchPoäng[0] - Ditt senaste val:
valOchPoäng[1] - Som gav dig såhär många poäng:
valOchPoäng[2] - Din totala poäng: 
valOchPoäng[3] - Datorns senaste val:
valOchPoäng[4] - Som gav den såhär många poäng:
valOchPoäng[5] - Datorns totala poäng:
*/

// variabler för att kunna öka poäng
let spelarPoäng = 0;
let spelareTotPoäng = 0;
let datorPoäng = 0;
let datorTotPoäng = 0;

// hämtar div2 H4
const samma = document.querySelector(".div2 h4");

// hämtar knapparna till omstarten
datorRevanch.addEventListener('click', omstart);
spelareRevanch.addEventListener('click', omstart);
oavgjortRevanch.addEventListener('click', omstart);




// Skapar spelrunda-funktionen
function spelrunda(spelarensVal) {
    // nollar spelarPoäng och datorPoäng
    spelarPoäng = 0;
    datorPoäng = 0;
    valOchPoäng[4].innerText = `Som gav den såhär många poäng: ${datorPoäng}`
    valOchPoäng[1].innerText = `Som gav dig såhär många poäng: ${spelarPoäng}`
    // nollar samma
    samma.innerText = "";

    // uppdaterar vad spelaren valde
    valOchPoäng[0].innerText = `Ditt senaste val: ${spelarensVal}` 

    // kör funktion datornsVal och sparar det i en variabel
    const datorVal = datornsVal()
    // uppdaterar vad datorn valde
    valOchPoäng[3].innerText = `Datorns senaste val: ${datorVal}`

    // jämför spelarens och datorns val
    if (spelarensVal === datorVal) {
        samma.innerText = "Ni valde samma, välj igen."
    }
    else if (
        (spelarensVal === "🪨" && datorVal === "✂️") ||
        (spelarensVal === "✂️" && datorVal === "💰") ||
        (spelarensVal === "💰" && datorVal === "🪨") 
    ) {
        spelarPoäng = spelarPoäng +1;
        spelareTotPoäng = spelareTotPoäng +1;
        valOchPoäng[1].innerText = `Som gav dig såhär många poäng: ${spelarPoäng}`
        valOchPoäng[2].innerText = `Din totala poäng: ${spelareTotPoäng}`
    }
    else {
        datorPoäng = datorPoäng +1;
        datorTotPoäng = datorTotPoäng +1;
        valOchPoäng[4].innerText = `Som gav den såhär många poäng: ${datorPoäng}`
        valOchPoäng[5].innerText = `Datorns totala poäng: ${datorTotPoäng}`
    }

    // Räkna upp till totalt 3 gissningar och sedan skriva ut att spelet är slut och vem som van
    antalRundor = antalRundor + 1;
    totSpelrundor.innerText = `Ni har kört: ${antalRundor} rundor.`

    if (antalRundor === 3) {
        if (spelareTotPoäng > datorTotPoäng) {
            samma.innerText = `Spelet är slut. ${spelarensNamn} vann, Grattis!! 🏆🎉`
            spelKnappar.forEach(knapp => {
                knapp.disabled = true;
        });
            datorRevanch.style.display = "";
          
        } 
        else if (datorTotPoäng > spelareTotPoäng) {
            samma.innerText = `Spelet är slut. Datorn vann, Grattis!! 🏆🎉`
            spelKnappar.forEach(knapp => {
                knapp.disabled = true;
        });
            spelareRevanch.style.display = "";
    
        }
        else {
            samma.innerText = 'Det blev oavgjort'
            spelKnappar.forEach(knapp => {
                knapp.disabled = true;
        });
            oavgjortRevanch.style.display = "";
   
        }
    }
    else {
    }
}




// funktion för att starta om spelet
function omstart() {

    namnH2.innerText = "Hej Arne, jag kallar dig det för du har inte fyllt i ditt namn än..."

    datorRevanch.style.display = "none";
    spelareRevanch.style.display = "none";
    oavgjortRevanch.style.display = "none";
  
    spelarensNamn = "";

    förstaP.innerText = "Klicka på knappen och skriv in ditt namn:";
    namnKnapp.style.display = "";

    antalRundor = 0;

    spelarPoäng = 0;
    spelareTotPoäng = 0;
    datorPoäng = 0;
    datorTotPoäng = 0;

    totSpelrundor.innerText = "Ni har kört: 0 rundor.";

    valOchPoäng[0].innerText = "Ditt senaste val: 🤷🏼‍♀️";
    valOchPoäng[1].innerText = "Som gav dig såhär många poäng: 0";
    valOchPoäng[2].innerText = "Din totala poäng: 0";
    valOchPoäng[3].innerText = "Datorns senaste val: 🤷🏼‍♀️";
    valOchPoäng[4].innerText = "Som gav den såhär många poäng: 0";
    valOchPoäng[5].innerText = "Datorns totala poäng: 0";

    samma.innerText = "";

    spelKnappar.forEach(knapp => {
        knapp.disabled = false;
});
}

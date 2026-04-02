// Hämtar Namn-knappen 
const namnKnapp = document.querySelector('body > div.div1 > button');
// Lägger till eventListener på namn-knappen
namnKnapp.addEventListener('click', namnFunktion);
// Skapar variabel för spelarens namn
let spelarensNamn ="";
// Hämtar h2 som ska ändra text vid namn uppdatering
const namnH2 = document.querySelector('body > div.div1 > h2');
// Skapar funktionen till knapptryckningen
function namnFunktion() {
    spelarensNamn = prompt("Vad heter söta lilla du??");
    // Stoppar in användarens namn i class=div1´s h2
    namnH2.innerText = `Tjena-nixen & Välkommen ${spelarensNamn}, Lycka till idag ❤️`
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
let totSpelrundor = document.querySelectorAll(".div2 p");

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
    datorVal = datornsVal()
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
}

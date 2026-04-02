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





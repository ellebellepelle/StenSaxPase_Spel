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
// JavaScript Test
console.log('JS OK')

/*
Scompongo il problema
- 1 Prendo l'elemento dal DOM
- 2 Inserisco 2 input e 1 select per chiedere il nome e cognome, i km da percorrere e se è un under 18 o un over 65, per eventuali sconti
- 3 Faccio una validazione dei caratteri inseriti
- 4 Calcolo il prezzo del biglietto (km * 0.21)
- 5 Se l'utente è under 18 o over 65 applico lo sconto:
  - Under 18 sconto del 20%
  - Over 65 sconto del 40%
- 6 Trasformo il prezzo con solo 2 decimali
- 7 Inserisco il prezzo nel biglietto
- 8 Inserisco il nome dell'utente nel biglietto
- 9 Inserisco il tipo di biglietto:
  - Biglietto Satndard
  - Biglietto Under 18
  - Biglietto Over 65
- 10 Inserisco la carrozza 
- 11 Inserisco il codice CP
*/

// - 1 Prendo l'elemento dal DOM
const paragrph = document.getElementById('content');
console.log('id: ', paragrph);

// - 2 Chiedo all'utente il km da percorrere
const userKm = parseInt(prompt('Quanti km devi percorrere?', '57'));
console.log('Km da percorrere:', userKm);

// - 3 Chiediamo all'utente l'età
const userAge = parseInt(prompt('Quanti anni hai?', '11'));
console.log('La tua età è:', userAge, 'anni');

// - 4 Calcolo il prezzo del biglietto
let price = userKm * 0.21;
console.log('Il prezzo del biglietto è di: ', price, '€');

// - 5 Controllo se l'utente ha scritto solo numeri
if (isNaN(userAge) || isNaN(userKm) || userAge <= 0 || userKm <= 0) {
    alert('Devi inserire un dato corretto')
} else {

    // - 6 Controllo se l'utente ha diritto a uno sconto
    if (userAge < 18 || userAge > 65) {

        // - 7 Se l'utente ne ha diritto applico lo scont
        if (userAge < 18) {
            price = price - (price * 0.2);
        } else if (userAge > 65) {
            price = price - (price * 0.4);
        }
    }

    console.log('Il prezzo del biglietto è di: ', price, '€');

    // - 8 Trasformo il prezzo con solo 2 decimi
    price = parseFloat(price.toFixed(2));
    console.log('Il prezzo del biglietto è di: ', price, '€');

    // - 9 Inserisco il prezzo nella pagina
    paragrph.innerHTML = `Il prezzo del biglietto è di: <strong>${price}</strong> €`;
}



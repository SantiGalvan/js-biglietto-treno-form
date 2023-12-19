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
//- 2 Inserisco 2 input e 1 select per chiedere il nome e cognome, i km da percorrere e se è un under 18 o un over 65, per eventuali sconti
const inputUser = document.getElementById('user');
const inputUserKm = document.getElementById('user-km');
const inputUserRange = document.getElementById('range');
const buttonGo = document.getElementById('button-go');
const buttonDelete = document.getElementById('button-delete');

console.log(inputUser, inputUserKm, inputUserRange, buttonGo, buttonDelete);

//
buttonGo.addEventListener('click', function () {
    // Recupero i valori dall'input
    const userName = inputUser.value.trim();
    const userKm = parseInt(inputUserKm.value);
    const userRange = inputUserRange.value;
    console.log(userName, userKm, userRange);

    // Calcolo il prezzo del biglietto
    let price = userKm * 0.21;
    console.log('Il prezzo del biglietto è di: ', price, '€');

    // - 6 Controllo se l'utente ha diritto a uno sconto
    if (userRange === 'under18' || userRange === 'over65') {

        // - 7 Se l'utente ne ha diritto applico lo sconto
        if (userRange === 'under18') {
            price = price - (price * 0.2);
        } else if (userRange === 'over65') {
            price = price - (price * 0.4);
        }
    }

    console.log('Il prezzo del biglietto è di: ', price, '€');

    // - 8 Trasformo il prezzo con solo 2 decimi
    price = parseFloat(price.toFixed(2));
    console.log('Il prezzo del biglietto è di: ', price, '€');

})



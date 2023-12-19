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

    // Validation
    let isValid = true;

    if (userName === '') {
        alert('Devi inserire il tuo nome e cognome');
        isValid = false;
        return
    }

    if (isNaN(userKm) || userKm < 1) {
        alert('Devi inserire i chilometri da percorrere');
        isValid = false;
        return
    }

    if (userKm > 1000) {
        alert('Ci dispiace, ma non abbiamo tratte sopra i 1000km');
        isValid = false;
        return
    }

    if (userRange === 'empty') {
        alert('Devi inserire un valore tra i tre elencati');
        isValid = false;
        return
    }

    // Controllo se l'utente ha diritto a uno sconto
    if (isValid) {
        if (userRange === 'under18' || userRange === 'over65') {

            // Se l'utente ne ha diritto applico lo sconto
            if (userRange === 'under18') {
                price -= (price * 0.2);
                console.log('Il prezzo del biglietto scontato del 20% è di: ', price, '€');
            } else if (userRange === 'over65') {
                price -= (price * 0.4);
                console.log('Il prezzo del biglietto scontato del 40% è di: ', price, '€');
            }
        }
    }

    if (isValid) {


        // Trasformo il prezzo con solo 2 decimi
        price = parseFloat(price.toFixed(2));
        console.log('Il prezzo del biglietto è di: ', price, '€');
    }

})

// Premendo il tasto annulla
buttonDelete.addEventListener('click', function () {
    location.reload();
})


# Biglietto del treno DOM
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che la milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Nota:
Se non vi sentite particolarmente creativi, vi forniamo uno screenshot da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

BONUS
- Aggiungere il tasto annulla per riportare i campi al valore originale
- Usare una select per inserire l'età
- Stampare sul biglietto un numero di carrozza e un numero di biglietto casuali
Buon divertimento!
<hr>

## Scompongo il problema
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
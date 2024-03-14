// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1 - Chiedo all'utente di scegliere pari o dispari
let userEvenOrOdd = prompt('Scegli pari o dispari');
console.log('user-even-or-odd' , userEvenOrOdd);
// 2 - Chiedo all'utente un numero da 1 a 5
let userNumber = parseFloat(prompt('Dimmi un numero da 1 a 5'));
console.log('user-number' , userNumber);
// 3 - Genero un numero random da 1 a 5 per il computer (usando una funzione).
let randomComputerNumber = getRndInteger(1, 5)
console.log('random-computer-number' , randomComputerNumber);
// 4 - Sommo i numeri di utente e computer
// 5 - Creo una funzione per stabilire se la somma dei due numeri è pari o dispari
// 6 - Dichiaro il vincitore
        // - Se il giocatore ha scelto pari e la somma è pari vince il giocatore
            // - altrimenti vince il computer
        // - Se la somma è dispari e il giocatore ha scelto dispari vince
            // - altrimenti vince il computer

//  FUNCTIONS

// Random cumputer number

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
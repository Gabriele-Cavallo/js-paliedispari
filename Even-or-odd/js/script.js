// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1 - Chiedo all'utente di scegliere pari o dispari
let userEvenOrOdd = prompt('Scegli pari o dispari');
// 2 - Chiedo all'utente un numero da 1 a 5
let userNumber = parseFloat(prompt('Dimmi un numero da 1 a 5'));
// 3 - Genero un numero random da 1 a 5 per il computer (usando una funzione).
let randomComputerNumber = getRndInteger(1, 5)
// 4 - Sommo i numeri di utente e computer
let sum = userNumber + randomComputerNumber;
// 5 - Creo una funzione per stabilire se la somma dei due numeri è pari o dispari
let returnEvenOrOdd = evenOrOdd(sum);
// 6 - Dichiaro il vincitore
let userMessage;
        // - Se il giocatore ha scelto pari e la somma è pari vince il giocatore
            // - altrimenti vince il computer
            if (userEvenOrOdd === 'pari' && returnEvenOrOdd === 'even'){
                userMessage ='Complimenti hai vinto!!!';
            }else if (userEvenOrOdd === 'pari' && returnEvenOrOdd === 'odd'){
                userMessage ='Hai perso!!!';
            }
        // - Se la somma è dispari e il giocatore ha scelto dispari vince
            // - altrimenti vince il computer
            if (userEvenOrOdd === 'dispari' && returnEvenOrOdd === 'odd'){
                userMessage ='Complimenti hai vinto!!!';
            }else if(userEvenOrOdd === 'dispari' && returnEvenOrOdd === 'even'){
                userMessage ='Hai perso!!!';
            }
alert(`${userMessage} 
Hai scelto ${userEvenOrOdd}, il tuo numero è ${userNumber}
Il numero del computer è ${randomComputerNumber}
La loro somma è ${sum} ed è ${returnEvenOrOdd}`);

//  FUNCTIONS

// Random cumputer number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// Even or Odd Function
function evenOrOdd (numberSum){
    let sumEvenOrOdd;
    if(numberSum % 2 === 0){
        sumEvenOrOdd = 'even';
    }else{
        sumEvenOrOdd = 'odd';
    }
    return sumEvenOrOdd;
}
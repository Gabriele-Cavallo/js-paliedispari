// Palindroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1 - Chiedo all'utente una parola
let userWord = prompt('Dimmi una parola');
console.log('user-word' , userWord);
reverseWord(userWord);
// 2 - Creo una funzione per "leggere" la parola dell'utente al contrario
function reverseWord(reverse){
    let reverseWord = '';
    for (let i = reverse.length -1; i >=0; i--) {
        let reverseUserWord = reverse[i];
        console.log('reverse-word' , reverseUserWord);
        reverseWord += reverseUserWord;
    }
    console.log('reverse' , reverseWord);
}
    // - se la parola inserita dall'utente e quella al contrario della funzione sono uguali allora la parola è palindroma
    // - altrimenti se sono diverse la parola non è palindroma
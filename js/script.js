// graph TD
//    A[ creo variabile per nome utente tramite prompt]--> B[creo variabile per cognome utente tramite prompt]
//    B --> C[creo variabile per colore preferito tramite prompt]
//    C --> D[creo una variabile che concatena le 3 variabili/credenziali indicate e il numero '21']
//    D --> E[tramite 'getElementById' importo la password generata nel html assegnandola con un operatore composto '+=']
//    E --> Fine
  

let yourName = prompt ('Il tuo Nome?');
console.log(yourName);

let yourSurname = prompt('Il tuo Cognome?');
console.log(yourSurname);

let yourColor = prompt('Il tuo colore preferito?');
console.log(yourColor);

let password = yourName + yourSurname + yourColor + '21';
console.log(password);

document.getElementById('passwordgen').innerHTML += ' ' + password; 

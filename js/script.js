// nome ,cognome, colorepreferito,21

let yourName = prompt ('Il tuo Nome?');
console.log(yourName);

let yourSurname = prompt('Il tuo Cognome?');
console.log(yourSurname);

let yourColor = prompt('Il tuo colore preferito?');
console.log(yourColor);

let password = yourName + yourSurname + yourColor + '21';
console.log(password);
document.getElementById('passwordgen').innerHTML += ' ' + password; 

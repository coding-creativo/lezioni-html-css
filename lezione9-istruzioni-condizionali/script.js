//***** scambio di variabili */
// let a = 5;
// let b = 3;

// voglio cha a contenga il valore 3 e b contenga il valore 5 - ovvero voglio scambiarle!

// non posso utilizzare questo metodo
// a = b; // a = 3
// b = a; // b = 3

// ho bisogno di una variabile temporanea dove memorizzare uno dei due valori
// let temp = a; // temp = 5
// a = b; // a = 3
// b = temp; // b = 5

// console.log(a, b);

// let temp = b; // temp = 3
// b = a; // b = 5
// a = temp; // a = 3

// console.log(a, b);

//***** istruzoioni condizionali - if */

// let trovato = true;
// console.log(trovato);

// if (trovato) {  //se la condizione è vera viene eseguito tutto quello che c'è tra parentesi graffe
//     console.log("è stato trovato");
//     console.log("JavaScript è bello!");
// }

// 0 è considerato false - tutti gli altri numeri sono true
// let trovato = 0;
// console.log(trovato);

// if (trovato) {  //se la condizione è vera viene eseguito tutto quello che c'è tra parentesi graffe
//     console.log("è stato trovato");
//     console.log("JavaScript è bello!");
// }

// // vedere se un numero è positivo
// let numero = 100;

// la condizione è numero > 100 - la condizione può essere o vera oppure falsa
// console.log(numero > 0);

// if (numero > 0) { //se la condizione è vera viene eseguito tutto quello che c'è tra parentesi graffe
//     console.log("il numero è maggiore di 100");
// }

// console.log('ciao');


//***** istruzoioni condizionali - if - else */

// determinare se un numero è positivo oppure no!

let num = -10;

if (num > 0) { //se la condizione è vera viene eseguito tutto quello che c'è tra parentesi graffe
    console.log("Il numero è positivo");
} else { //se la condizione è falsa viene eseguito tutto quello che c'è tra parentesi graffe
    console.log("Il numero non è positivo");
}

//determinare se un numero è uguale a 10

let numero = 100;

if (numero == 10) { // == operatore di uguaglianza
    console.log("Il numero è uguale 10");
} else {
    console.log("Il numero non è uguale a 10");
}

if (numero != 10) { // == operatore di disuguaglianza
    console.log("Il numero non è uguale 10");
} else {
    console.log("Il numero è uguale a 10");
}

//determinare se un numero è pari

let a = 4;

// un numero è pari quando il resto della divisione per 2 è uguale a 0, altrimenti è dispari
//i resti, quando divido per 2, possono essere: 0 oppure 1
// l'opertore modulo, si indica con % 
// ad esempio a % 2 calcola il resto della divisione di a per 2
// ad esempio a % 3 calcola il resto della divisione di a per 3

// Es: 
// a = 4
// 4 % 2 == 0 ??? ---> si allora il numero è pari

// Es:
// // a = 5
// 5 % 2 == 0 ???? ---> no allora il numero è dispari

// ricordiamo che 0 a tutti gli effetti è un numero pari

// console.log(a % 2);

if (a % 2 == 0) {
    console.log("numero pari");
} else {
    console.log("numero dispari");
}

// oppure

if (a % 2 != 0) {
    console.log("numero dispari");
} else {
    console.log("numero pari");
}

//***** istruzoioni condizionali - if - else if - else */

// determinare se un numero è positivo, negativo oppure nullo

let x = -10;

// verrà eseguita una sola istruzione - in base alla condizione
if (x > 0) {
    console.log("numero positivo");
} else if (x < 0) {
    console.log("numero negativo");
} else {
    console.log("numero nullo");
}

// oppure

if (x > 0) {
    console.log("numero positivo");
} else if (x == 0) {
    console.log("numero nullo");
} else {
    console.log("numero negativo");
}

// oppure

if (x < 0) {
    console.log("numero negativo");
} else if (x > 0) {
    console.log("numero positivo");
} else {
    console.log("numero nullo");
}

// numeri random

//formula con il massimo escluso
//numeri tra 0 e 9
// console.log(getRndInteger(0, 10));

// //numeri tra 10 e 1000
// console.log(getRndInteger(10, 1001));

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

//formula con il massimo incluso
//numeri tra 0 e 9
console.log(getRndInteger(0, 9));

const min = 100;
const max = 200;

console.log(getRndInteger(min, max));

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
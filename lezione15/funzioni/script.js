//******** Definizione di una funzione */ 
// Si utilizza una parola chiave function seguita dal nome della funzione e dalle parentesi tonde dove è possibile specificare uno o più parametri.

// function nomeFunzione(parametro1, parametro2,...) {
//     //blocco di codice 
//     return valore; //return non è obbligatorio
// }

//***** Chiamata di funzione */
// Per richiamare una funzione si utilizza il suo nome e se ci sono gli argomenti
// nomeFunzione(arg1, arg2);

// Esempio

// funzione somma di 2 numeri
// con il return

// function somma(a,b) { //a e b sono parametri
//     return a + b;
// }

// const risultato = somma(3,5);
// console.log(risultato);

// const x = 5;
// const y = 10;

// const sommaNumeri = somma(x,y);
// console.log(sommaNumeri);

// senza return
// function somma(a,b) { //a e b sono parametri
//     console.log(a + b);
// }

//funzione senza parametri
function saluta() {
    // alert('Ciao a tutti!');
    return "ciao a tutti";
}

const saluto = saluta();
console.log(saluto);
alert(saluto);

//funzioni anonime
const doppio = function(x) {
    return x * 2;
};


// function somma(a,b) { //a e b sono parametri
//     return a + b;
// }

// const somma = function(a,b) {
//     return a + b;
// }

const somma = (a,b) => a + b;
console.log(somma(10,3));


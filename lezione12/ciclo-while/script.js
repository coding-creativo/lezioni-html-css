

// stamprae i numeri da 0 a 9

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;

// while(i < 10) {
//     console.log(i);
//     i++;
// }

// Inserire dei numeri finché non si inserisce il valore 1000

// se il numero è uguale a 1000 allora non deve inserire altri numeri
// let numero = parseInt(prompt('Inserisci un numero: '));

// while (numero != 1000) { //finchè il numero è diverso da 1000 deve inserire dei numeri
//     numero = parseInt(prompt('Inserisci un numero: '));
//     console.log(numero);
// }

// inserire n positivo - se negativo richiederlo - controllo dell'input

let n = parseInt(prompt('Inserisci un numero positivo: '));

while (n <= 0) {
    n = parseInt(prompt('Attenzione!!!!! Inserisci un numero positivo!!!! '));
    console.log(n);
}


    


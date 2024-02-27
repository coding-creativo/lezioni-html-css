// 1. Creare un array con dei numeri random.
// 2. Sommare tutti gli elementi di un array.
// 3. Contare i numeri pari e dispari presenti in un array.
// 4. Stampare solo gli elementi dell’array di indice pari.
// 5. Ricercare un valore in un array.
// 6. Trovare il valore minimo o massimo in un array.
// 7. Invertire l'ordine degli elementi di un array.
// 8. Copiare gli elementi di un array in un altro array. //slice
// 9. Calcolare la media dei valori di un array.
// 10. Rimuovere elementi duplicati da un array.
// 11. Concatenare due array in uno solo.
// 12. Sommare gli elementi di due array di pari lunghezza elemento per elemento.

// 1. Creare un array con dei numeri random.
// let random = [];
// const n = 5;

// for(let i = 0; i < n; i++) {
//     const numero = Math.floor(Math.random() * 10);
//     random.push(numero);
// }

// console.log(random);


// 3. Contare i numeri pari e dispari presenti in un array.

// const numeri = [5,6,8,1,3,4];

// let contaPari = 0;
// let contaDispari = 0;

// for (let i = 0; i < numeri.length; i++) {
//     if (numeri[i] % 2 == 0) {
//         contaPari++;
//     } else {
//         contaDispari++;
//     }
// }

// console.log(`numeri pari: ${contaPari} - numeri dispari: ${contaDispari}`);

// for of
// const numeri = [5,6,8,1,3,4];

// let contaPari = 0;
// let contaDispari = 0;

// for (let numero of numeri) {
//     if (numero % 2 == 0) {
//         contaPari++;
//     } else {
//         contaDispari++;
//     } 
// }

// console.log(`numeri pari: ${contaPari} - numeri dispari: ${contaDispari}`);

// 4. Stampare solo gli elementi dell’array di indice pari.

// const numeri = [5,6,8,1,3,4];

// for (let i = 0; i < numeri.length; i++) {
//     if (i % 2 == 0) {
//         console.log(numeri[i]);
//     }
// }

// 5. Ricercare un valore in un array.

// const numbers = [5,6,8,1,3,4];

// const searchValue = 13;

// let trovato = false;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == searchValue) {
//         trovato = true;
//         break;
//     } 
// }

// if (trovato) {
//     console.log('Numero presente');
// } else {
//     console.log('numero non presente');
// }

// 6. Trovare il valore massimo in un array.

// const numbers = [15,6,8,1,3,24];

// let massimo = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > massimo) {
//         massimo = numbers[i];
//     }
// }

// console.log(massimo);

// 12. Sommare gli elementi di due array di pari lunghezza elemento per elemento.
const numbers = [15,6,8,1,3,24];
const array = [9,6,7,12,3,2];

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + array[i]);
}




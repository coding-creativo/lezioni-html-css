// 1) Tabellina del 3.
// 2) Somma dei numeri da 1 a 10 numeri.
// 3) Media di N numeri.
// 4) Prodotto di N numeri.
// 5) Massimo tra N numeri.
// 6) Scrivi i dieci numeri pari successivi al numero N.
// 7) Stampare i numeri pari minori di N.
// 8) Dati N numeri contare quanti sono i numeri pari e numeri dispari.
// 9) Dati N numeri contare quanti sono positivi, negativi e uguali a zero.
// 10) Stampare i primi N multipli di un numero.

// 1) Tabellina del 3.
// procedimento
// 3 * 0 = 0;
// 3 * 1 = 3;
// ...
// 3 * 10 = 30;
// for(let i = 0; i <= 10; i++) {
//     console.log(`3 x ${i} = ${3 * i}`);
// }

// 3) Media di N numeri.
// const n = 3;
// let somma = 0;

// for (let i = 0; i < n; i++) { 
//     let numero = parseFloat(prompt('inserisci un numero'));
//     somma += numero; //somma = somma + numero
// }

// const media = somma / n;
// console.log(media);

// 4) Prodotto di N numeri.
// const n = 3;
// let prodotto = 1; // elemento neutro del prodotto

// for(let i = 0; i < n; i++){
//     let numero = parseFloat(prompt('Inserisci un numero: '));
//     prodotto = prodotto * numero; // prodotto += numero;
// }

// console.log(prodotto);

// 5) Massimo tra N numeri.

// const n = 3;
// let massimo = parseFloat(prompt('inserisci un numero: '));

// for (let i = 0; i < n - 1; i++) {
//     let numero = parseFloat(prompt('inserisci un numero: '));

//     if (numero > massimo) {
//         massimo = numero;
//     }
// }

// console.log(massimo);

// 6) Scrivi i dieci numeri pari successivi al numero N.

// let n = 11;
// // 12, 14, 16, ...n.

// if (n % 2 != 0) {
//     n--;
// }

// for (let i = n + 2; i <= n + 20; i += 2){
//     console.log(i);
// }

// 7) Stampare i numeri pari minori di N.
// prima soluzione ordine crescente
// let n = 10;

// for (let i = 0; i < n; i += 2) {
//     console.log(i);
// }
// prima soluzione ordine decrescente
// let n = 90;

// if (n % 2 != 0) {
//     n++;
// }

// for (let i = n - 2; i >= 0; i -= 2) {
//     console.log(i);
// }

// 9) Dati N numeri contare quanti sono positivi, negativi e uguali a zero.

// const n = 4;
// let contaPositivi = 0;
// let contaNulli = 0;
// let contaNegativi = 0;

// for (let i = 0; i < n; i++) {
//     let numero = parseInt(prompt('Inserisci un numero: '));
 
//     if (numero > 0) {
//         contaPositivi++;
//     } else if (numero == 0) {
//         contaNulli++;
//     } else {
//         contaNegativi++;
//     }
// }

// console.log(`Positivi: ${contaPositivi}, Negativi: ${contaNegativi}, Nulli: ${contaNulli}`);

// 10) Stampare i primi n multipli di un numero.

const n = 45;
const numero = 3;

for (let i = 0; i < n; i++) {
    console.log(numero * i);
}


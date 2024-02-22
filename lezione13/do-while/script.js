// facciamo un controllo dell'input su n - controlliamo che sia maggiore di 0

// let n = parseInt(prompt('Inserisci un numero positivo! Quanti numeri?: '));

// while (n <= 0) { //finchè n è minore o uguale a 0
//     n = parseInt(prompt('Attenzione! Inserisci un numero positivo! Quanti numeri vuoi inserire?: '));
// }

// con il do while


// do {
//    let n = parseInt(prompt('Inserisci un numero positivo! Quanti numeri?: '));
// } while(n <= 0);

// console.log('n vale ', n); //da errore non è definita

// let n;

// do {
//     n = parseInt(prompt('Inserisci un numero positivo! Quanti numeri?: '));
//  } while(n <= 0);
 
//  console.log('n vale ', n); 


// for(let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;  //provoca l'uscita immediata dal ciclo for
//     }

//     console.log(i);
// }

for(let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;  //provoca l'interruzione in questo punto, tutte le istruzioni che verranno non saranno eseguite
    }

    console.log(i);
}
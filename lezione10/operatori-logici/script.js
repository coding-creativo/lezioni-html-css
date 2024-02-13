const a = -4;
const b = -5;

if (a > 0 || b > 0) {
    console.log('uno dei due numeri è positivo');
}

const x = -10;

// if (x > 0) {
//     console.log('numero positivo');
// } else {
//     console.log('numero non positivo');
// }

if (!(x > 0)) {
    console.log('numero non positivo');
}


//*** switch case */ 

// 3. Convertire una valutazione numerica in una lettera corrispondente (Es. se 10
// scrivi A, ecc.).

const valutazione = 9;
let risultato = "";

switch (valutazione) {
    case 10:
        risultato = "A";
        break;
    case 9:
        risultato = "B";
        break;
    case 8:
        risultato = "C";
        break;
    case 7:
        risultato = "D";
        break;
    case 6:
        risultato = "E";
        break;
    default:
        risultato = "F";
}

console.log('risultato: ', risultato);
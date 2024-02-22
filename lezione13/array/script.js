// let numeri = [];
// console.log(numeri);

// let numbers = [3,13,20,5];
// console.log(numbers);

// let stringhe = ['pippo', 'paperina', 'pluto'];
// console.log(stringhe);

// let booleani = [true, false, true];
// console.log(booleani);

// let misti = ['arancia', 13, true, [1,2], ['basket', 'tennis']];
// console.log(misti);


// let numbers = [3,13,20,5];
// // console.log(numbers[0]);
// console.log('lunghezza array', numbers.length);
// console.log(numbers);
// console.log(numbers[numbers.length - 1]);

// // for(let i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i]);
// // }

// let stringhe = ['pippo', 'paperina', 'pluto'];

// for(let i = 0; i < stringhe.length; i++) {
//     console.log(stringhe[i]);
// }

// let arrayNumbers = [];

// for(let i = 0; i < 5; i++){
//     let numero = parseInt(prompt('inserisci un numero: '));
//     arrayNumbers.push(numero);
// }

// console.log(arrayNumbers);

//sommare gli elementi di un array
// let numbers = [3,13,20,5];
// let somma = 0;

// for(let i = 0; i < numbers.length; i++) {
//     // somma = somma + numbers[i];
//     somma += numbers[i];
// }

// console.log(somma);

// metodo forEach

let stringhe = ['pippo', 'paperina', 'pluto', 'topolino'];

// stringhe.forEach(function(element){
//     console.log(element);
// });

// for(let i = 0; i < stringhe.length; i++) {
//     console.log(stringhe[i]);
// }

// stringhe.forEach(function(element, index, array){
//     console.log(array[index]);
// });

// let numbers = [3,13,20,5];

// numbers.forEach(function(element, index, array){
//     console.log(array[index]);
// });

const nomiMaggiori5 = stringhe.filter(function(el){
    return el.length > 5;
});

console.log(nomiMaggiori5);


let numbers = [3,13,20,5];

const numeriDispari = numbers.filter(function(item){
    return item % 2 !== 0;
});

console.log(numeriDispari);

// metodo map

const lunghezza = stringhe.map(function(nome){
    return nome.length;
});

console.log(lunghezza);

const quadrati = numbers.map(function(numero){
    return numero * numero;
});
console.log(quadrati);



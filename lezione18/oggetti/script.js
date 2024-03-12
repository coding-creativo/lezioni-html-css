const persona = {
    nome: 'Paperino',
    eta: 20,
    citta: "Roma",
    altezza: "175 cm",
    telefono: '333333333',
    saluta: function () {
        console.log(`Ciao da ${this.nome}`);
    }
};

// console.log(persona);
// console.log(persona.nome);
// console.log(persona.citta);

// persona.saluta();

//destructuring è una caratteristica di JavaScript che permette di scomporre array oppure oggetti

// const nome = persona.nome;
// console.log(nome);

// const eta = persona.eta;
// console.log(eta);

// const {nome, eta, citta} = persona;
// console.log(nome);
// console.log(eta);
// console.log(citta);

const {nome, eta, ...altri} = persona;

console.log(nome);
console.log(eta);
console.log(altri);

const numeri = [13,20,19,5,40,6,12];

const [primo, secondo, ...altro] = numeri;

console.log(primo);
console.log(secondo);
console.log(altro);

const elementi = [4,13];

const [a,b] = elementi;
console.log(a);
console.log(b);


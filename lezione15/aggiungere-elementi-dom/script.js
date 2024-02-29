let lista  = document.querySelector(".myList");

for (let i = 0; i < 5; i++) {
    //creiamo un nuovo elemento
    let nuovoElemento = document.createElement("li");
    console.log(nuovoElemento);
    nuovoElemento.textContent = `Elemento indice ${i + 1}`;

    lista.appendChild(nuovoElemento); //aggiunge l'elemento in lista
}
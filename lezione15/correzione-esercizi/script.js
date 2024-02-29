// Crea una pagina HTML contenente un div con l'id "myDiv". Utilizzando JavaScript, ottieni il
// riferimento a questo div tramite getElementById e cambia il suo contenuto utilizzando
// innerHTML inserendo il testo "Contenuto aggiunto con innerHTML!”

// let elemento = document.getElementById("myDiv");
// console.log(elemento);

// elemento.innerHTML = "Contenuto aggiunto con innerHTML!";

// document.getElementById("myDiv").innerHTML = "Contenuto aggiunto con innerHTML!";


// Esercizio 2: getElementsByClassName e textContent
// Nella stessa pagina HTML inserisci una lista non ordinata (ul) con tre elementi di lista (li).
// Assegna la classe "myList" alla lista (ul). Utilizzando JavaScript, ottieni i riferimenti agli elementi della lista tramite getElementsByClassName e cambia il testo di ciascun elemento di lista in "Nuovo testo dell'elemento X", dove X è la posizione dell'elemento nella lista (Ad esempio: Nuovo testo dell'elemento 1, Nuovo testo dell'elemento 2, …).

// let lista = document.getElementsByClassName("myList")[0];
// console.log(lista);

// for (let i = 0; i < lista.length; i++) {
//     let elemento = lista[i].getElementsByTagName("li");
//     console.log(elemento);
//     elemento.textContent = "Nuovo testo dell'elemento 1";
// }

let lista = document.getElementsByClassName("myList")[0].getElementsByTagName("li");

for (let i = 0; i < lista.length; i++) {
    lista[i].textContent = `Nuovo testo dell'elemento ${i + 1}`;
}

// Esercizio 3: getElementsByTagName e innerHTML
// Crea una pagina HTML contenente un paragrafo (p) e un div con tre paragrafi (p) al suo interno.
// Utilizzando JavaScript, ottieni i riferimenti agli elementi paragrafo (p) tramite
// getElementsByTagName e cambia il testo di ciascun paragrafo in "Nuovo testo del
//paragrafo X", dove X è la posizione del paragrafo nel documento

let paragrafo = document.getElementsByTagName("p");
console.log(paragrafo);

for (let i = 0; i < paragrafo.length; i++) {
    paragrafo[i].innerHTML = `Nuovo testo del paragrafo ${i + 1}`;
}



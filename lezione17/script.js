//recuperiamo i button
const openM = document.getElementById('openModal');
const closeM = document.getElementById('closeModal');

//recuperiamo l'id della finestra modale
const finestraModale = document.getElementById('modal');

//gestiamo gli eventi
openM.addEventListener('click', openModal);
closeM.addEventListener('click', closeModal);

function openModal() {
    finestraModale.style.display ='flex';
}

function closeModal(){
    finestraModale.style.display = 'none';
}

//funzione gestita dall'evento onclick inserito nell'html!
function azioneDaEseguire(number){
    alert(`azione ${number}`);
}
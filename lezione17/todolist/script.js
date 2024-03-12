const addButton = document.getElementById('addButton');
const modal = document.getElementById('modal');
const annulla = document.getElementById('closeModal');
const modalInput = document.getElementById('modalInput');
let editingTask;

addButton.addEventListener('click', add);

//realizziamo la funzione per l'inserimento di ciascuna voce
function add() {
    const taskInput = document.getElementById('taskInput').value;
    const taskList = document.getElementById('taskList');

    if (taskInput.trim() !== "") {
        //creo un nuovo elenco
        const newTask = document.createElement("li");
        //inserisco il contenuto
        newTask.innerHTML = `<span class="tastText">${taskInput}</span>
        <div class="buttonContainer">
           <button class="editBtn" onclick="openModal(this)">Modifica</button>
           <button class="deleteBtn" onclick="deleteTask(this)">Elimina</button>
        </div>`;

        //lo aggiungo all'ul
        taskList.appendChild(newTask);
    }
}

//this riesce a prendere il riferimento al button che è stato cliccato

// li > span + div > button
function deleteTask(button) {
    const taskItem = button.parentNode.parentNode;
    // console.log(taskItem.parentNode.nodeName);
    taskItem.parentNode.removeChild(taskItem);
}

function openModal(button){
    //dobbiamo far apparire il testo nella casella di input
    const taskItem = button.parentNode.parentNode;
    const taskText = taskItem.querySelector('.tastText').textContent;
    console.log(taskText);
    modalInput.value = taskText;
    modal.style.display = "flex"; 
    editingTask = taskItem; //memorizza l'li modificato

    document.getElementById('confirmEdit').addEventListener('click', confirmEdit);

    function confirmEdit() {
        const taskText = modalInput.value.trim();
    
        if(taskText !== "") {
            const element = editingTask.querySelector('.tastText');
            element.textContent = taskText;
        }
    
        closeModal();
    }
}

annulla.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = "none";
}




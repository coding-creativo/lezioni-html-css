const frasi = [
    'Mai arrendersi!',
    'Pensa positivo!',
    'Imparare è importante!'
];

const frase = document.getElementById("frase-random");
const generaButton = document.getElementById("genera-frase");

generaButton.addEventListener('click', function () {
    let randomIndex = Math.floor(Math.random() * frasi.length);
    frase.textContent = frasi[randomIndex];
});
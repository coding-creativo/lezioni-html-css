const nextButton = document.getElementById('nextSlide');
const prevButton = document.getElementById('prevSlide');
const dotsContainer = document.getElementById('dots-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let autoInterval;


showSlide(currentIndex); //chiamata di funzione
autoSlide();
//creiamo dinamicamente i dots
for (let i = 0; i < slides.length; i++){
    const dot = document.createElement('span');
    dot.classList.add('dot');

    dot.addEventListener('click', function() {
        showSlide(i);
        stopAutoSlide();
    });

    dotsContainer.appendChild(dot);
    // console.log(dot);
   
}

function showSlide(index) {
    // const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // console.log(slides);

    if (index < 0) {
        index = slides.length -1;
    } else if (index > slides.length - 1) {
        index = 0;
    }

    currentIndex = index;

    //serve ad aggiungere la classe active alle slides
    slides.forEach(function (slide,i){
        slide.classList.toggle('active', i === index);
    });

    //serve ad aggiungere la classe active ai dots
    dots.forEach(function (dot,i){
        dot.classList.toggle('active', i === index);
    });

}


nextButton.addEventListener('click', nextSlide);

function nextSlide() {
    showSlide(currentIndex + 1);
}

prevButton.addEventListener('click', function(){
    showSlide(currentIndex - 1);
});


function autoSlide() {
    autoInterval = setInterval(function() {
        nextSlide();
    }, 3000);
} 

function stopAutoSlide() {
    clearInterval(autoInterval);
}



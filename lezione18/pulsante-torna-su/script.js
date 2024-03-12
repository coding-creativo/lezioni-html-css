
function backToTop() {
    document.body.scrollTop = 0; // Per Safari
    document.documentElement.scrollTop = 0; // Per Chrome, Firefox, IE, and Opera
}

function handleScroll() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

window.onscroll = function () {
    handleScroll();
};
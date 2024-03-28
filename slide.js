let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); 
}
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
}

document.querySelector('.slide-btn.left-btn').addEventListener('click', () => {
    changeSlide(-1);
});

document.querySelector('.slide-btn.right-btn').addEventListener('click', () => {
    changeSlide(1);
});

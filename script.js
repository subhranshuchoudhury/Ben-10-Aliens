
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.catalogo-item');
    const totalSlides = slides.length;

    if (index >= totalSlides ) {
        currentSlide = 1;
        const carouselInner = document.querySelector('.catalogo-inner');
        carouselInner.style.transform = `translateX(0)`;
        carouselInner.style.transition = `none`;
        
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.6s ease-in-out';
            showSlide(currentSlide );
        }, 50);
    } 



    else if (index <= 0) {
        currentSlide = totalSlides -1;
        const carouselInner = document.querySelector('.catalogo-inner');
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        carouselInner.style.transition = `none`;
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease-in-out';
            showSlide(currentSlide);
        }, 50);
    } 


    else {
        currentSlide = index;
        const carouselInner = document.querySelector('.catalogo-inner');
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    console.log(currentSlide);
}

function nextSlide() {
    showSlide(currentSlide + 1);
    
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function openSelector() {
    if (currentSlide==1){
        window.location.href = "/selectors/selectorForce.html";
    }
    else if(currentSlide == 2){
        window.location.href = "/selectors/selectorUltimate.html";
    }
    else{
        window.location.href = "/selectors/selectorClassic.html";
    }
}
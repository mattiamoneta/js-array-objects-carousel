const objImages = [
    {
        image: 'img/1.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/2.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/3.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/4.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/5.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let activeItem = 0;
let carouselRunning = false;

// Elementi del DOM
const domBtnPrev = document.getElementById('btnPrev');
const domBtnNext = document.getElementById('btnNext');
const domCarouselStack = document.querySelector('.carousel-stack');
const domCarouselThumbnails = document.querySelector('.carousel-thumbnails');
const domCarouselItems = document.getElementsByClassName('slide');
const domThumbnailItems = document.getElementsByClassName('thumbnail-wrapper');
const domBtnAutoplayStart = document.getElementById("btnAutoplayStart");
const domBtnAutoplayStop = document.getElementById("btnAutoplayStop");
const domBtnAutoplayReverse = document.getElementById("btnAutoplayReverse");

// Caricamento delle immagini
let carouselStackInner = '';
let carouselThumbnailsInner = '';
objImages.forEach(e => {
    carouselStackInner += `
    <div class="slide">
        <div class="slide-caption">
            <h2>${e.title}</h2>
            <p>${e.text}</p>
        </div>
        <img class="carousel-img" src="${e.image}" alt="Image"/>
    </div>
    `;
    carouselThumbnailsInner += `<div class="thumbnail-wrapper"><div class="thumbnail-overlay"></div><img class="thumbnail" src="${e.image}" alt="Image"/></div>`;
});

domCarouselStack.innerHTML = carouselStackInner;
domCarouselThumbnails.innerHTML = carouselThumbnailsInner;

// Imposta la prima immagine del carosello
domCarouselItems[activeItem].classList.add('current');
domThumbnailItems[activeItem].classList.add('current');


// Attiva la thumbnail al click del mouse
for(let i = 0; i < domThumbnailItems.length; i++){
    domThumbnailItems[i].addEventListener("click", () =>{
        domCarouselItems[activeItem].classList.remove('current');
        domThumbnailItems[activeItem].classList.remove('current');
        activeItem = i;
        domCarouselItems[activeItem].classList.add('current');
        domThumbnailItems[activeItem].classList.add('current');
    });
}


// Bottone autoplay start
domBtnAutoplayStart.addEventListener("click", function(){
    autoplay(true, 1);
   
});

// Bottone autoplay stop
domBtnAutoplayStop.addEventListener("click", function(){
    autoplay(false);
});

// Reverse Carousel
domBtnAutoplayReverse.addEventListener("click", function(){
    autoplay(true, 0);
});


// Click bottone avanti
domBtnNext.addEventListener('click', () =>  carouselNext());

// Click bottone indietro
domBtnPrev.addEventListener('click', () =>  carouselBack());


//Autoplay
function autoplay(playback, direction){
    if(playback == true){
        clearInterval(carouselRunning);
        carouselRunning = setInterval(() => {
           if(direction == 1){
            carouselNext()
           }else{
            carouselBack()
           }
        }, 3000)
    } else {
        clearInterval(carouselRunning);
    }
}


// Avanti di una slide
function carouselNext(){

    domCarouselItems[activeItem].classList.remove('current');
    domThumbnailItems[activeItem].classList.remove('current');
    activeItem = activeItem < domCarouselItems.length - 1 ? activeItem += 1 : activeItem = 0;
    domCarouselItems[activeItem].classList.add('current');
    domThumbnailItems[activeItem].classList.add('current');
}

// Indietro di una slide
function carouselBack(){

    domCarouselItems[activeItem].classList.remove('current');
    domThumbnailItems[activeItem].classList.remove('current');
    activeItem = activeItem > 0 ? activeItem -= 1 : activeItem = domCarouselItems.length -1
    domCarouselItems[activeItem].classList.add('current');
    domThumbnailItems[activeItem].classList.add('current');

}
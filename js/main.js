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
const domBtnPrev = document.getElementById('btnPrev');
const domBtnNext = document.getElementById('btnNext');
const domCarouselStack = document.querySelector('.carousel-stack');
const domCarouselThumbnails = document.querySelector('.carousel-thumbnails');
const domCarouselItems = document.getElementsByClassName('slide');
const domThumbnailItems = document.getElementsByClassName('thumbnail-wrapper');


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
domCarouselItems[activeItem].classList.add('current');
domThumbnailItems[activeItem].classList.add('current');




// Click bottone avanti
domBtnNext.addEventListener('click',function(){
   
    if (activeItem < domCarouselItems.length - 1){
        domCarouselItems[activeItem].classList.remove('current');
        domThumbnailItems[activeItem].classList.remove('current');
        activeItem++;
        domCarouselItems[activeItem].classList.add('current');
        domThumbnailItems[activeItem].classList.add('current');

    } else if (activeItem == domCarouselItems.length - 1){
        domCarouselItems[activeItem].classList.remove('current');
        domThumbnailItems[activeItem].classList.remove('current');
        activeItem = 0;
        domCarouselItems[activeItem].classList.add('current');
        domThumbnailItems[activeItem].classList.add('current');
    }

});

// Click bottone indietro
domBtnPrev.addEventListener('click',function(){
   
    if (activeItem > 0){
        domCarouselItems[activeItem].classList.remove('current');
        domThumbnailItems[activeItem].classList.remove('current');
        activeItem--;
        domCarouselItems[activeItem].classList.add('current');
        domThumbnailItems[activeItem].classList.add('current');

    } else if (activeItem == 0){
        domCarouselItems[activeItem].classList.remove('current');
        domThumbnailItems[activeItem].classList.remove('current');
        activeItem = domCarouselItems.length - 1;
        domCarouselItems[activeItem].classList.add('current');
        domThumbnailItems[activeItem].classList.add('current');
    }

});


//Autoplay



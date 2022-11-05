// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import $ from 'jquery';
import 'slick-carousel';
$(".slider-wrapper").slick();

const btn = document.querySelector(".mobile-menu__btn");
const mobileMenu = document.querySelector(".header__bottom");
const mobileClose = document.querySelector(".nav__close");


btn.addEventListener("click", ()=>{
    mobileMenu.classList.add("active")
});

mobileClose.addEventListener("click", ()=>{
    mobileMenu.classList.remove("active")
});


const amount = document.querySelector(".form__amount")
const toddler = document.querySelector(".form__toddler")
const value = document.querySelector(".output__value")
const total = document.querySelector(".output__total")

amount.value = toddler.value;
value.innerHTML = amount.value * 45.50 + `₽`;
total.innerHTML = Math.round((amount.value * 49.59) - (amount.value * 45.50)) + `₽`;

toddler.addEventListener("input", (e) =>{
    amount.value = toddler.value;
    value.innerHTML = amount.value * 45.50 + `₽`;
    total.innerHTML = Math.round((amount.value * 49.59) - (amount.value * 45.50)) + `₽`;
})


let sertificate = document.querySelector(".sertificate__content")

jQuery('.sertificate__content').slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1.7,
            },
        },
        {
            breakpoint: 441,
            settings: {
                slidesToShow: 1.3,
            },
        },
        {
            breakpoint: 365,
            settings: {
                slidesToShow: 1.1,
            },
        },
    ],
});

jQuery('.partners__content').slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1.7,
            },
        },
        {
            breakpoint: 441,
            settings: {
                slidesToShow: 1.3,
            },
        },
        {
            breakpoint: 365,
            settings: {
                slidesToShow: 1.1,
            },
        },
    ],
});

jQuery('.reviews__content').slick({
    slidesToShow: 2,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 1.5,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },

    ],
});

import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import("./navbar.js");
import("./products.js");


document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Scrollbar],
        direction: 'horizontal',
        loop: false, // UWAGA: loop musi być OFF, bo inaczej zawsze możesz "iść dalej"
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        on: {
            init: function () {
                updateNavigation(this);
            },
            slideChange: function () {
                updateNavigation(this);
            },
            update: function () {
                updateNavigation(this)
            }
        }
    });

    function updateNavigation(swiper) {
        const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');

        if (swiper.isBeginning) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }

        if (swiper.isEnd) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
        }
    }
});

var swiper = new Swiper(".calculator-options", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

function anim(duration) {
    var temp;
    return function(sel) {
        cancelAnimationFrame(temp);
        var start = performance.now();
        var from = window.pageYOffset || document.documentElement.scrollTop,
        to = document.querySelector(sel).getBoundingClientRect().top;
        requestAnimationFrame(function step(timestamp) {
            var progress = (timestamp - start) / duration;
            1 <= progress && (progress = 1);
            window.scrollTo(0, from + to * progress | 0);
            1 > progress && (temp = requestAnimationFrame(step))
        })
    }
}

let scrollTo = anim(500)
let banner_button = document.querySelector('.banner__button')

let btn_open = document.querySelector('.open-modal')
let btn_close = document.querySelector('.modal__close')
let modal = document.querySelector('.modal')

btn_open.addEventListener('click', function () {
    modal.classList.add('open')
    modal.classList.remove('close')
})

btn_close.addEventListener('click', function () {
    modal.classList.add('close')
    modal.classList.remove('open')
})

banner_button.addEventListener('click', function () {
    scrollTo('.calculator__page')
})
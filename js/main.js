new Swiper('.reviews', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar:{
        el:'.swiper-scrollbar'
    }
});
const swiper = new Swiper('.header__text-slider', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className} noselect">0${index+1}</span>`
        }
    }
});
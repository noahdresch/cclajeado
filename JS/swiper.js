document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 8,
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 70,
            },

            1728: {
                slidesPerView: 3,
                spaceBetween: 50,
            }
        }
    });
});

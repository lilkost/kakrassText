export const createSlider = () => {
    const sliderNode = document.querySelector(".review__slider");

    if (!sliderNode) return;

    const swiper = new Swiper(sliderNode, {
        direction: 'horizontal',
        loop: true,

        slidesPerView: 1,
        autoHeight: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    new ItcSimpleSlider('.itcss', {
        loop: true,
        autoplay: true,
        interval: 5000,
        swipe: true,
    });
});
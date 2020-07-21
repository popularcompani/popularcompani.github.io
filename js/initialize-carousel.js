$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    center: true,
    startPosition: 1,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 3,
            nav: false,
            loop: false
        }
    }
});
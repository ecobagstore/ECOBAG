$(".carousel-v").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: false,

    autoplaytimeout: 3000,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});
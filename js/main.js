$(document).ready(function () {

    var menuNameText = $('.menu-button-block__menu-name').text();

    $('.menu-btn, .menu-button-block__menu-name').on('click', function (event) {
        
        event.preventDefault();

        $('.menu-btn').toggleClass('is-open');

        if ($('.menu-btn').hasClass('is-open')) {

            $(".menu-btn, .menu-button-block, .nav, .js-under-menu, .menu-button-block__menu-name")
                .addClass('is-active');

            $(".menu-button-block__menu-name")
                .text("закрыть")

        }

        else {

            $(".nav, .js-under-menu")
                .removeClass('is-active');

            setTimeout(function () {
                $(".menu-btn, .menu-button-block, .menu-button-block__menu-name, ")
                    .removeClass('is-active');
            }, 500);


            $(".menu-button-block__menu-name")
                .text(menuNameText)

        }

    });

    // Inits

    // Swiper
 
    var servicesSlider = new Swiper('.slider-services', {
        nextButton: '.slider-services__arrow-right',
        prevButton: '.slider-services__arrow-left',
        slideClass: 'slider-services__slide',
        autoplay: 4000,
        loop: true,
        spaceBetween: 30
    });

    var teamSwiper = new Swiper('.slider-team', {
        nextButton: '.slider-team__arrow-right',
        prevButton: '.slider-team__arrow-left',
        slideClass: 'slider-team__slide',
        autoplay: false,
        loop: true,
        spaceBetween: 30
    });

    // Yandex map
    ymaps.ready(init);
    function init(){
    var myMap;
    var myPlacemark;
    var adress;
    
        ymaps.geocode(adress).then(function (res) {
                adress = [56.243523, 37.936712];
                myMap = new ymaps.Map("map", {
                center: adress,
                zoom: 15,
                // controls: ['zoomControl']
                controls: []
            });

            myMap.behaviors.disable(['drag', 'scrollZoom',  'rightMouseButtonMagnifier']);

            myPlacemark = new ymaps.Placemark(adress, { 
                // hintContent: 'Можно написать хинт',
                balloonContent: 'КСК Абрамцево'
            });

            myMap.geoObjects.add(myPlacemark);
        }

        );
        

    }





});


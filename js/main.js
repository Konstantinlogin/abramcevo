var isIOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

$(document).ready(function () {



    var menuNameText = $('.menu-button-block__menu-name').text();
    // TODO: хуёвые селекторы, да и вообще можно лаконичнее все написать. Похуй. 
    var isMenuActive = false;

    $('.menu-btn, .menu-button-block__menu-name').on('click', function (event) {
        event.preventDefault();
        $('.menu-btn').toggleClass('is-open');
        if ($('.menu-btn').hasClass('is-open')) {
            openMenu();
        }
        else {
            closeMenu();
        }
    });

    closeMenuOnBodyClick();

    function openMenu() {
        isMenuActive = true;
        $(".menu-btn, .menu-button-block, .nav, .menu-button-block__menu-name")
            .addClass('is-active');
        $(".menu-button-block__menu-name")
            .text("закрыть");
    }

    function closeMenu() {

        $(".nav")
            .removeClass('is-active');
        setTimeout(function () {
            $(".menu-btn, .menu-button-block, .menu-button-block__menu-name")
                .removeClass('is-active');
        }, 500);
        $(".menu-button-block__menu-name")
            .text(menuNameText)
    }

    function closeMenuOnBodyClick() {
        $(document).click(function (event) {
            if (!$(event.target).closest('.nav').length && !$(event.target).closest('.menu-button-block').length) {
                closeMenu();
                $('.menu-btn').removeClass('is-open');
            }
        });
    }

    $(".scroll-to-bottom").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });

    $('.search').find('.search__input').bind('keyup paste change', function () {
        var isEmpty = true;
        if (isEmpty = true && $.trim(this.value) === "") {
            isEmpty = false;
        }
        else {
            isEmpty = true;
        }
        showHideSubmit(isEmpty, $(this).next('.search__submit'));
    });

    function showHideSubmit(variable, obj) {
        if (variable == true) {
            obj.addClass('is-active')
        }
        else {
            obj.removeClass('is-active')
        }
    }

    // INITS +++++++++++==

    var slider = {
        services: '.slider-services',
    };

    var yandexMap = {
        main: '#yandexMapMainPage',
        contacts: '#yandexMapContacts'
    }

    var video = '#bgVideo';
    // bvideo.js

    if ($(video).length > 0) {
        console.log(1)

        var bv = new Bideo();

        bv.init({
            // Video element
            videoEl: document.querySelector('#background_video'),

            // Container element
            container: document.querySelector('body'),

            // Resize
            resize: true,

            // autoplay: false,

            // isMobile: window.matchMedia('(max-width: 768px)').matches,
            // show/hide on mobile

            playButton: document.querySelector('#play'),
            pauseButton: document.querySelector('#pause'),

            // Array of objects containing the src and type
            // of different video formats to add
            src: [
                {
                    src: 'video/video6.mp4',
                    type: 'video/mp4'
                }
            ],

            // What to do once video loads (initial frame)
            onLoad: function () {
                $('#video_cover').hide()
                $('#background_video_preloader').hide();
            }
        });


        if (isIOS == true) {
            $('#background_video_preloader').hide();
        }

    }


    if ($(slider.services).length > 0) {
        var servicesSlider = new Swiper(slider.services, {
            nextButton: '.slider-services__arrow-right',
            prevButton: '.slider-services__arrow-left',
            slideClass: 'slider-services__slide',
            autoplay: 4000,
            loop: true,
            spaceBetween: 30
        });

    }

    if ($(yandexMap.main).length > 0) {
        // Yandex map
        ymaps.ready(init);
        function init() {
            var myMap;
            var myPlacemark;
            var adress;

            ymaps.geocode(adress).then(function (res) {
                adress = [56.243523, 37.936712];
                myMap = new ymaps.Map("yandexMapMainPage", {
                    center: adress,
                    zoom: 15,
                    // controls: ['zoomControl']
                    controls: []
                });

                myMap.behaviors.disable(['drag', 'scrollZoom', 'rightMouseButtonMagnifier']);

                myPlacemark = new ymaps.Placemark(adress, {
                    // hintContent: 'Можно написать хинт',
                    balloonContent: 'КСК Абрамцево'
                });

                myMap.geoObjects.add(myPlacemark);
            }

            );


        }
    }


    if ($(yandexMap.contacts.length > 0)) {
        ymaps.ready(initContacts);
        function initContacts() {
            var mapContacts;
            var placemarkContacts;
            var adressContacts;

            ymaps.geocode(adressContacts).then(function (res) {
                adressContacts = [56.243523, 37.936712];
                mapContacts = new ymaps.Map("yandexMapContacts", {
                    center: adressContacts,
                    zoom: 15,
                    controls: ['zoomControl']
                    // controls: []
                });

                // myMap.behaviors.disable(['drag', 'scrollZoom',  'rightMouseButtonMagnifier']);

                placemarkContacts = new ymaps.Placemark(adress, {
                    // hintContent: 'Можно написать хинт',
                    balloonContent: 'КСК Абрамцево'
                });

                mapContact.geoObjects.add(placemarkContacts);
            }

            );


        }
    }

});


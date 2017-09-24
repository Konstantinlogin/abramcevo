var isIOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

$(document).ready(function () {
    // Swiper

    var servicesSlider = new Swiper('.slider-services', {
        nextButton: '.slider-services__arrow-right',
        prevButton: '.slider-services__arrow-left',
        slideClass: 'slider-services__slide',
        wrapperClass: 'slider-services__wrapper',
        autoplay: 2000,
        loop: true,
    });


    // bvideo.js

    var bv = new Bideo();
    var videoPath = $('#background_video').attr('data-video');

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
                src: videoPath,
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



    // Yandex map
    
    ymaps.ready(init);
    function init() {
        var myMap;
        var myPlacemark;
        var adress;
        var myControls = [];

    $('#yandexMapControls').on('click', function(){
            $(this).toggleClass('is-active')
            
            if ($(this).hasClass('is-active')) {

                myMap.behaviors.enable(['drag', 'scrollZoom', 'rightMouseButtonMagnifier']);

                myMap.controls.add('zoomControl', {
                    size: "large"
                });

                $('#yandexMapContent').addClass('is-hidden');

            }
            else {
                myMap.behaviors.disable(['drag', 'scrollZoom', 'rightMouseButtonMagnifier']);
                myMap.controls.remove('zoomControl', {
                    size: "large"
                });
                $('#yandexMapContent').removeClass('is-hidden');
            }
        });

        ymaps.geocode(adress).then(function (res) {

            adress = [56.243523, 37.936712];
            myMap = new ymaps.Map("yandexMap", {
                center: adress,
                zoom: 15,
                controls: myControls
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

});
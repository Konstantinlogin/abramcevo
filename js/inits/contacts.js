   $(document).ready(function () {

   
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
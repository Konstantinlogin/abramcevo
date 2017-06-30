$(document).ready(function () {

    var menuNameText = $('.menu-button-block__menu-name').text();

    $('.menu-btn, .menu-button-block__menu-name').on('click', function (event) {
        
        event.preventDefault();

        $('.menu-btn').toggleClass('is-open');

        if ($('.menu-btn').hasClass('is-open')) {

            $(".menu-button-block")
                .addClass('is-active');
            $(".nav")
                .addClass('is-active');
            $(".js-under-menu")
                .addClass('is-active')
            $(".menu-button-block__menu-name")
                .text("закрыть")
                .addClass("is-active");

        }

        else {
            $(".menu-button-block")
                .removeClass('is-active');  // Todo: сделать удаление класса с .menu-button-block через setinterval, равным transition анимации закрытия блока .nav
            $(".nav")
                .removeClass('is-active')
            $(".js-under-menu")
                .removeClass('is-active')
            $(".menu-button-block__menu-name")
                .text(menuNameText)
                .removeClass("is-active");

        }

    });



});
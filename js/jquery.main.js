$(function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    });

    $(function() {
        $('.burger').on('click', function() {
            $('.menu').toggleClass('menu_active');
        })
    });

    $('.cart a').on('mouseenter', function() {
       $('.cart').toggleClass('cart_hover');
       $(this).on('mouseleave', function() {
           $('.cart').removeClass('cart_hover');
        });
    });


    $(function() {
        $('select').selectric();
    });

    $(".tabs_caption").on("click", "li", function() {
        $(this)
            .addClass("caption_active")
            .siblings()
            .removeClass("caption_active")
            .closest(".tabs")
            .find(".tabs_content")
            .removeClass("content_active")
            .eq($(this).index())
            .addClass("content_active");
    });
});


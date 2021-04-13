/*================
 Template Name: Hostlar Hosting Provider with WHMCS Template
 Description: All type of web hosting provider or company with WHMCS template.
 Version: 1.0
 Author: https://themeforest.net/user/themetags
=======================*/

// TABLE OF CONTENTS
// 1. preloader
// 2. mega menu js
// 3. headerroom
// 4. scroll bottom to top
// 5. custom vps hosting plan js
// 6. monthly and yearly pricing switch
// 7. tooltip
// 8. magnify popup video
// 9. hero slider one
// 10. hero slider two
// 11. client-testimonial carousel
// 12. client logo item carousel
// 13. team member carousel
// 14. video background
// 15. wow js
// 16. countdown or coming soon
// 17. sticky sidebar
// 18. chat api js


jQuery(function ($) {

    'use strict';

    // 1. preloader
    $(window).ready(function () {
        $('#preloader').delay(200).fadeOut('fade');
    });

    // 2. mega menu js
    $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
    });

    // 3. headerroom
    var Header = document.querySelector('#header');
    var headroom = new Headroom(Header, {
        "offset": 205,
        "tolerance": 5,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    });
    headroom.init();

    // 4. scroll bottom to top
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            $('.scroll-to-target').addClass('open');
        } else {
            $('.scroll-to-target').removeClass('open');
        }
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 500);
            });
        }
    });

    // 5. custom vps hosting plan js
    var cPlan = $('#c-plan');
    if (cPlan.length) {
        cPlan.slider({
            tooltip: 'always'
        });
        cPlan.on("slide", function (e) {
            $('.slider .tooltip-up', '#custom-plan').text(e.value * 20);
            $('.price', '#custom-plan').text($(this).data("currency") + e.value * 20);
            $('.feature1 span', '#custom-plan').text(e.value);
            $('.feature2 span', '#custom-plan').text(e.value * 2);
            $('.feature3 span', '#custom-plan').text(e.value * 10);
            $('.feature4 span', '#custom-plan').text(e.value * 1000);
        });
        initSlider();
    }

    function initSlider() {
        cPlan.value = cPlan.data("slider-value");
        $('.slider .tooltip', '#custom-plan').append('<div class="tooltip-up"></div>');
        $('.slider .tooltip-up', '#custom-plan').text(cPlan.value * 20);
        $('.slider .tooltip-inner', '#custom-plan').attr("data-unit", cPlan.data("unit"));
        $('.slider .tooltip-up', '#custom-plan').attr("data-currency", cPlan.data("currency"));

        $('.price', '#custom-plan').text(cPlan.data("currency") + cPlan.value * 20);
        $('.feature1 span', '#custom-plan').text(cPlan.value);
        $('.feature2 span', '#custom-plan').text(cPlan.value * 2);
        $('.feature3 span', '#custom-plan').text(cPlan.value * 10);
        $('.feature4 span', '#custom-plan').text(cPlan.value * 1000);
    }


    // 6. monthly and yearly pricing switch
    $("#js-contcheckbox").change(function () {
        if (this.checked) {
            $('.monthly-price').css('display', 'none');
            $('.yearly-price').css('display', 'block');
            $('.afterinput').addClass('text-success');
            $('.beforeinput').removeClass('text-success');
        } else {
            $('.monthly-price').css('display', 'block');
            $('.yearly-price').css('display', 'none');
            $('.afterinput').removeClass('text-success');
            $('.beforeinput').addClass('text-success');
        }
    });

    // 7. tooltip
    $('.custom-map-location li span').tooltip('show');

    // 8. magnify popup video
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    // 9. hero slider one
    $('.hero-slider-one').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        items: 1,
        smartSpeed: 1000,
        animateOut: "slideOutUp",
        animateIn: "slideInDown",
    });
    // 10. hero slider two
    $('.hero-content-slider').owlCarousel({
        loop: false,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        items: 1,
        smartSpeed: 1000,
        animateOut: "slideOutUp",
        animateIn: "slideInDown",
    });

    // 11. client-testimonial carousel
    $('.client-testimonial').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // 12. client logo item carousel
    $('.clients-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 15,
        dots: false,
        slideTransition: 'linear',
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        autoplaySpeed: 4500,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 4
            },
            800: {
                items: 5
            },
            1200: {
                items: 6
            }

        }
    });

    // 13. team member carousel
    $('.team-member-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1200: {
                items: 4
            }

        }
    });

    // 14. video background
    $(document).ready(function () {
        $(".player").YTPlayer();
    });

    // 15. wow js
    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init()
    }
    wowAnimation()

    // 16. countdown or coming soon
    $('.clock').countdown('2022/01/30', function (event) {
        $(this).html(event.strftime('' +
        '<div class="row">' +
        '<div class="col">' +
        '<h2 class="mb-1">%-D</h2>' +
        '<h6>Day%!d</h6>' +
        '</div>' +
        '<div class="col">' +
        '<h2 class="mb-1">%H</h2>' +
        '<h6>Hours</h6>' +
        '</div>' +
        '<div class="col">' +
        '<h2 class="mb-1">%M</h2>' +
        '<h6>Minutes</h6>' +
        '</div>' +
        '<div class="col">' +
        '<h2 class="mb-1">%S</h2>' +
        '<h6>Seconds</h6>' +
        '</div>' +
        '</div>'));
    });

    // 17. sticky sidebar
    $(function () { // document ready
        if ($('#sticky').length) { // make sure "#sticky" element exists
            var el = $('#sticky');
            var stickyTop = $('#sticky').offset().top; // returns number
            var stickyHeight = $('#sticky').height();

            $(window).scroll(function () { // scroll event
                var limit = $('#section-footer').offset().top - stickyHeight - 20;

                var windowTop = $(window).scrollTop(); // returns number

                if (stickyTop < windowTop) {
                    el.css({
                        position: 'fixed',
                        top: 20,
                        width: 350,
                    });
                } else {
                    el.css('position', 'static');
                }

                if (limit < windowTop) {
                    var diff = limit - windowTop;
                    el.css({
                        top: diff
                    });
                }
            });
        }
    });

  

}); // JQuery end
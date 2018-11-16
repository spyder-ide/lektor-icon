;(function () {

    'use strict';


    // iPad and iPod detection—not really necessary or wise
    var isiPad = function(){
        return (navigator.platform.indexOf("iPad") == -1);
    };

    var isiPhone = function(){
        return (
            (navigator.platform.indexOf("iPhone") == -1) ||
            (navigator.platform.indexOf("iPod") == -1)
        );
    };

    var heroHeight = function() {
        if ($(window).width() >= 752) {
            $('.js-fullheight-home').css('height', $(window).height() - $('.js-sticky').height());
        } else {
            $('.js-fullheight-home').css('height', $(window).height() / 2);
        }
    };

    var setHeroHeight = function() {
        heroHeight()
        $(window).on('resize', heroHeight)
    };


    // Loading animation
    var loaderPage = function() {
        $(".fh5co-loader").fadeOut("slow");
    };


    var fh5coTabs = function() {
        // $('.fh5co-tabs-container').
        $('.fh5co-tabs li a').on('click', function(event){
            event.preventDefault();
            var $this = $(this),
                tab = $this.data('tab');
                $('.fh5co-tabs li').removeClass('active');
                $this.closest('li').addClass('active');
                $this.closest('.fh5co-tabs-container').find('.fh5co-tab-content').removeClass('active');
                $this.closest('.fh5co-tabs-container').find('.fh5co-tab-content[data-tab-content="'+tab+'"]').addClass('active');
        });
    }


    var gridAutoHeight = function() {
        if (!isiPhone() || !isiPad()) {
            $('.fh5co-grid-item').css('height', $('.fh5co-2col-inner').outerHeight()/2);
        }
        $(window).on('resize', function(){
            if (!isiPhone() && !isiPad()) {
                $('.fh5co-grid-item').css('height', $('.fh5co-2col-inner').outerHeight()/2);
            }
        });
    }


    var sliderSayings = function() {
        $('#fh5co-sayings .flexslider').flexslider({
            animation: "slide",
            slideshowSpeed: 5000,
            directionNav: false,
            controlNav: true,
            smoothHeight: true,
            reverse: true
        });
    }


    // Parallax
    var parallax = function() {

        $(window).stellar({horizontalScrolling: false, verticalOffset: (51 + $('.fh5co-main-nav').height()), responsive: false});
    };


    // Hide the sidebar if user scrolls the page
    var scrolledWindow = function() {

        $(window).on('scroll', function(){

            var scrollPos = $(this).scrollTop();


           if ( $('body').hasClass('offcanvas-visible') ) {
            $('body').removeClass('offcanvas-visible');
            $('.js-fh5co-nav-toggle').removeClass('active');
           }
        });

        $(window).on('resize', function() {
            if ( $('body').hasClass('offcanvas-visible') ) {
            $('body').removeClass('offcanvas-visible');
            $('.js-fh5co-nav-toggle').removeClass('active');
           }
        });
    };


    // Just like it says on the tin
    var goToTop = function() {

        $('.js-gotop').on('click', function(event){

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).on('scroll', function(){

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }
        });
    };


    // Page Nav
    var clickMenu = function() {
        var topVal = ( $(window).width() < 769 ) ? 0 : 58;

        $(window).on('resize', function(){
            topVal = ( $(window).width() < 769 ) ? 0 : 58;
        });
        $('.fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"]), a.fh5co-content-nav:not([class="external"])').on('click', function(event){
            var section = $(this).data('nav-section');

                if ( $('div[data-section="' + section + '"]').length ) {

                    $('html, body').animate({
                        scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
                    }, 500, 'easeInOutExpo');

                    event.preventDefault();
               }
        });
    };


    // Reflect scrolling in navigation
    var navActive = function(section) {

        $('.fh5co-main-nav a[data-nav-section], #fh5co-offcanvas a[data-nav-section]').removeClass('active');
        $('.fh5co-main-nav, #fh5co-offcanvas').find('a[data-nav-section="'+section+'"]').addClass('active');
    };


    // A section to scroll to on the mainpage
    var navigationSection = function() {

        var $section = $('div[data-section]');

        $section.waypoint(function(direction) {
            if (direction === 'down') {
                navActive($(this.element).data('section'));
            }

        }, {
            offset: '150px'
        });

        $section.waypoint(function(direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function() { return -$(this.element).height() + 155; }
        });
    };



    // Document on load
    $(function(){
        setHeroHeight();
        loaderPage();
        fh5coTabs();
        // gridAutoHeight();

        // sliderSayings();
        parallax();
        // burgerMenu();
        scrolledWindow();
        clickMenu();
        navigationSection();
        goToTop();
    });

}());

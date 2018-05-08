// Global parameters
window.params = {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};


/**
     *
     * Check if element exist on page
     *
     * @param el {string} jQuery object (#popup)
     *
     * @return {bool}
     *
*/
function exist(el){
    if ( $(el).length > 0 ) {
        return true;
    } else {
        return false;
    }
}


jQuery(document).ready(function($) {

    $(".header:not(.footer)").headroom();

    if(window.params.isMobile) {
        $('body').addClass('mobile-view');
    } else {
        $('body').addClass('desktop-view');
    }


    $('.mobile-view .menu-item-has-children > a').click(function(e){
        e.preventDefault();
        $('.menu-item-has-children > a').not(this).siblings('ul').slideUp();
        $(this).siblings('ul').slideToggle();
    });
 
    /*---------------------------
                                  ADD CLASS ON SCROLL
    ---------------------------*/
    $(function() { 
        var $document = $(document),
            $element = $('.toggle-menu'),
            $element2 = $('header'),
            className = 'hasScrolled';

        $document.scroll(function() {
            $element.toggleClass(className, $document.scrollTop() >= 1);
            $element2.toggleClass(className, $document.scrollTop() >= 1);
        });
    });

    $('.search-form input').blur(function(){
        tmpval = $(this).val();
        if(tmpval == '') {
            $(this).addClass('empty');
            $(this).removeClass('not-empty');
        } else {
            $(this).addClass('not-empty');
            $(this).removeClass('empty');
        }
    });

    $('.header-search input').focus(function(){
        $(this).closest('form').addClass('focus');
    });

    $('.header-search input').blur(function(){
        var form = $(this).closest('form'),
            tmpval = $(this).val();

        form.removeClass('focus');
        if(tmpval == '') {
            form.addClass('empty');
            form.removeClass('not-empty');
        } else {
            form.addClass('not-empty');
            form.removeClass('empty');
        }
    });


    /*---------------------------
                                  File input logic
    ---------------------------*/
    $('input[type=file]').each(function(index, el) {
        $(this).on('change', function(event) {
            event.preventDefault();
            var placeholder = $(this).siblings('.placeholder');
        
            if ( this.files.length > 0 ) {
                if ( this.files[0].size < 5000000 ) {
                    var filename = $(this).val().split('/').pop().split('\\').pop();
                    if ( filename == '' ) {
                        filename = placeholder.attr('data-label');
                    }
                    placeholder.text(filename);
                } else {
                    alert('Maximum file size is 5Mb');
                }    
            } else {
                placeholder.text( placeholder.attr('data-label') );
            }
            
        });
    });
    
    /*---------------------------
                                PAGE ANCHORS
    ---------------------------*/
    $('.page-menu a, .anchor').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 800);
        return false;
    });

    /*---------------------------
                                  MENU TOGGLE
    ---------------------------*/
    $('.js-toggle-menu').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(".header:not(.footer)").toggleClass('open');
    });



    /*---------------------------
                                  Fancybox
    ---------------------------*/
    $('.fancybox').fancybox({
        
    });


    /**
     *
     * Open popup
     *
     * @param popup {String} jQuery object (#popup)
     *
     * @return n/a
     *
    */
    function openPopup(popup){
        $.fancybox.open([
            {
                src  : popup,
                type: 'inline',
                opts : {}
            }
        ], {
            loop : false
        });
    }



    $('.overflow-slider__carousel').each(function(index, el) {
        var slider = $(this);

        slider.slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ]
        })
    });


    $('.main-news-slider').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 440,
                arrows: false
              }
        ]
    })

    $('.last-news-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1
                }
              }
        ]
    })


    /* Index page */
    $('.testimonails-carousel').each(function(index, el) {
        var slider = $(this);

        slider.slick({
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ]
        })
    });

    function handle_bof_mobile_slider() {
        var wv = $(window).width();
        var options = {
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                ]
            };
        $('.best-of-internet-mobile-slider').not('.slick-initialized').slick(options);

        if ( wv < 768 ) {
            $('.best-of-internet-mobile-slider').not('.slick-initialized').slick(options);
        } else {
            $('.best-of-internet-mobile-slider.slick-slider').slick('unslick');
        }
    }
    handle_bof_mobile_slider();

    $(window).on('resize orientationchange', function(event) {
        event.preventDefault();
        handle_bof_mobile_slider();
    });
    



    /* Article page (bottom section) */
    $('.posts-mini-carousel').each(function(index, el) {
        var slider = $(this);

        slider.slick({
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            adaptiveHeight: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ]
        })
    });

    $('.gallery').each(function(index, el) {
        var slider = $(this);

        slider.slick({
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            adaptiveHeight: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ]
        })
    });





    /* Audience switcher */
    $('.audience-progress-bar .part').on('click', function(event) {
        event.preventDefault();

        $('.audience-progress-bar .part').removeClass('active');
        $(this).addClass('active');
        
        if ( $(this).hasClass('female') ) {
            $('.audience-values').find('.list').removeClass('active')
            $('.audience-values').find('.female-values').addClass('active');
        } else {
            $('.audience-values').find('.list').removeClass('active')
            $('.audience-values').find('.male-values').addClass('active');
        }

    });




    function article_suggestion_width() {
        var wv = $(window).width();
        var self_width = $('.article-page').width();

        if ( wv <= 767 ) {
            var value = (wv - self_width)/2;
            $('.article-suggestions').css({
                'width': wv,
                'margin-left': -value,
                'margin-right': -value,
                'padding-left': value,
                'padding-right': value,
            });    
        } else {
            $('.article-suggestions').css({
                'width': 'auto',
                'margin-left': 0,
                'margin-right': 0,
                'padding-left': 0,
                'padding-right': 0,
            }); 
        }    
    }

    article_suggestion_width();

    $(window).on('resize orientationchange', function(event) {
        event.preventDefault();
        article_suggestion_width();
    });


    /*---------------------------
                                  Form submit
    ---------------------------*/
    $('.ajax-form').on('submit', function(event) {
        event.preventDefault();
        var data = new FormData(this);
        $(this).find('button').prop('disabled', true);
        $.ajax({
            url: theme.url + '/forms.php',
            type: 'POST',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            success: function(result) {
                if (result.status == 'ok') {
                    openPopup('#modal-popup-ok')
                } else {
                    openPopup('#modal-popup-error')
                }
            },
            error: function(result) {
                openPopup('#modal-popup-error');
            }
        }).always(function() {
            $('form').each(function(index, el) {
                $(this)[0].reset();
                $(this).find('button').prop('disabled', false);
            });
        });
    });



    /*---------------------------
                                  Google map init
    ---------------------------*/
    var map;
    function googleMap_initialize() {
        var lat = $('#map_canvas').data('lat');
        var long = $('#map_canvas').data('lng');

        var mapCenterCoord = new google.maps.LatLng(lat, long);
        var mapMarkerCoord = new google.maps.LatLng(lat, long);

        var styles = [];

        var mapOptions = {
            center: mapCenterCoord,
            zoom: 16,
            //draggable: false,
            disableDefaultUI: true,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

        var styledMapType=new google.maps.StyledMapType(styles,{name:'Styled'});
        map.mapTypes.set('Styled',styledMapType);
        map.setMapTypeId('Styled');

        var markerImage = new google.maps.MarkerImage('images/location.png');
        var marker = new google.maps.Marker({
            icon: markerImage,
            position: mapMarkerCoord, 
            map: map,
            title:"Site Title"
        });
        
        $(window).resize(function (){
            map.setCenter(mapCenterCoord);
        });
    }

    if ( exist( '#map_canvas' ) ) {
        googleMap_initialize();
    }

}); // end file
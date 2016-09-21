var timeOut;


/* Shido Grid */
/* * * * * * * * * */

function fixSpace(){
    $('.line').contents().filter(function(){
        return this.nodeType === 3;
    }).remove();
}
/* * * * * * * * * */

/* General */
/* * * * * * * * * */

function content(){
    hSite = $('html').outerHeight();
    hFoo = $('footer').outerHeight();
    hSite = hSite - hFoo;
    $('.general-container').css('min-height', hSite+'px');

    return hSite;
}

function proportional(){
    $('.proportional').each(function(index){
        object = $(this);

        pWidth = object.outerWidth();
        object.css('min-height', pWidth+'px');
    });
}

/* * * * * * * * * */


/* Menu */
/* * * * * * * * * */

function menu(){


  function toggle(){
    $('html').on('click', function(evemt){
      $('.side-panel > ul').stop().removeClass('active');
    });

    $('.side-panel-btn').on('click', function(event){
      event.preventDefault();
      $('.side-panel > ul').stop().toggleClass('active');
      event.stopPropagation();
    });

    $('.side-panel > ul').on('click', function(event){
      event.stopPropagation();
    });
    window.addEventListener("resize", function(event){
        if( $(window).width() > 1023){
            $('.side-panel > ul').removeClass('active');
            $('nav li').children('ul').stop().hide();
            $('.submenu-btn').stop().removeClass('active');
        }
        if( $(window).width() <= 1023){
            $('.side-panel ul').removeAttr('style');
        }
    });
  }

  function submenu_desktop(){

    $('.side-panel li').hover(
      function(event){
        if( !$('.side-panel > ul').hasClass('active') ){
            $(this).children('ul').stop().slideDown('fast');
        }
      },
      function(event){
        if( !$('.side-panel > ul').hasClass('active') ){
            $(this).children('ul').stop().slideUp('fast');
        }
      }
    );

    // One click open Two cliks link

    $('.side-panel li').on('click', function(event){
        li = $(this);

        if( !$('.side-panel > ul').hasClass('active') ){

            if ( li.children('ul').length > 0 ) {

                if( !li.children('ul').is(':visible') ){
                    event.preventDefault();
                    li.parent('ul').find('ul').stop().slideUp();
                    li.children('ul').stop().slideDown();
                }
            }
        }
    });
  }

  function submenu_mobile(){
    $('.side-panel > ul').on('click', '.submenu-btn', function(event){
        event.preventDefault();
        //$('.submenu').children('ul').stop().slideUp();
        if( $('.side-panel > ul').hasClass('active') ){
            $(this).stop().toggleClass('active');
            $(this).parent('li').children('ul').stop().slideToggle();
        }
    });
  }

  //--
  submenu_desktop();
  submenu_mobile();
  toggle();

}
/* * * * * * * * * */


/* Sliders */
/* * * * * * * * * */

function slider_home(){
    $('.single-item').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
    });
}

function slider_product(){
    $('.slider-product').show();

    $('.autoplay').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    });

    $('.product-single .slick-slide').on('click', function(event){
        mainProduct = $(this).find('img').attr('src');
        $('.main-product').find('img').attr('src', mainProduct);
    });


}
/* * * * * * * * * */

/* Disabled */
/* * * * * * * * * */

function disabled(){
    $('html').on('click', '.disabled', function(event){
       event.preventDefault();
    });
}
/* * * * * * * * * */


//-- Initialize functions
//---------------------------------------------------
function docReady(){
    disabled();
    menu();
}

function winLoad(){

}

function always(){
    content();
    fixSpace();
    proportional();
}

//-- Do not change!!!
//---------------------------------------------------
//---------------------------------------------------
//---------------------------------------------------
$(document).ready(function() {
  //-- No MOD
  always();
  window.addEventListener("resize", always);
  //-- No MOD
  docReady();
});
$(window).load(function() {
  //-- No MOD
  always();
  window.addEventListener("resize", always);
  ///-- No MOD
  winLoad();
});
//---------------------------------------------------
//---------------------------------------------------

//# sourceMappingURL=app.js.map

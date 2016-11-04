var timeOut;

/* * * * * * * * * */
/* Shido Grid */
/* * * * * * * * * */
function fixSpace() {
  $('.line').contents().filter(function() {
      return this.nodeType === 3;
  }).remove();
}

/* * * * * * * * * */
/* General */
/* * * * * * * * * */
function content() {
  hSite = $('html').outerHeight();
  hFoo = $('footer').outerHeight();
  hSite = hSite - hFoo;
  $('.general-container').css('min-height', hSite + 'px');

  return hSite;
}

function proportional() {
  $('.proportional').each(function(index) {
      object = $(this);

      pWidth = object.outerWidth();
      object.css('min-height', pWidth + 'px');
  });
}

/* * * * * * * * * */
/* Menu */
/* * * * * * * * * */
function menu() {
  function toggle() {
    $('html').on('click', function(e) {
      $('.side-panel > ul').stop().removeClass('active');
    });

    $('a.side-panel-btn').on('click', function(e) {
      e.preventDefault();
      $('.side-panel > ul').stop().toggleClass('active');
      e.stopPropagation();
    });

    $('.side-panel > ul').on('click', function(e) {
      e.stopPropagation();
    });
    window.addEventListener("resize", function(e) {
        if($(window).width() > 1023) {
            $('.side-panel > ul').removeClass('active');
            $('nav li').children('ul').stop().hide();
            $('.submenu-btn').stop().removeClass('active');
        }
        if($(window).width() <= 1023) {
            $('.side-panel ul').removeAttr('style');
        }
    });
  }

  function submenuDesktop() {
    $('.side-panel li').hover(function(e) {
        if( !$('.side-panel > ul').hasClass('active') ) {
            $(this).children('ul').stop().slideDown('fast');
        }
      }, function(e) {
        if( !$('.side-panel > ul').hasClass('active') ) {
            $(this).children('ul').stop().slideUp('fast');
        }
      });

    // One click open Two cliks link
    $('.side-panel li').on('click', function(e) {
      li = $(this);

      if( !$('.side-panel > ul').hasClass('active') ) {
        if ( li.children('ul').length > 0 ) {
          if( !li.children('ul').is(':visible') ) {
            e.preventDefault();
            li.parent('ul').find('ul').stop().slideUp();
            li.children('ul').stop().slideDown();
          }
        }
      }
    });
  }

  function submenuMobile() {
    $('.side-panel > ul').on('click', '.submenu-btn', function(e) {
        e.preventDefault();
        //$('.submenu').children('ul').stop().slideUp();
        if( $('.side-panel > ul').hasClass('active') ) {
          $(this).stop().toggleClass('active');
          $(this).parent('li').children('ul').stop().slideToggle();
        }
    });
  }

  submenuDesktop();
  submenuMobile();
  toggle();
}

/* * * * * * * * * */
/* Sliders */
/* * * * * * * * * */
function slider_home() {
    $('.single-item').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true
    });
}

/* * * * * * * * * */
/* Disabled */
/* * * * * * * * * */
function disabled() {
  $('html').on('click', '.disabled', function(e) {
     e.preventDefault();
  });
}

/* * * * * * * * * */
//-- Initialize functions
/* * * * * * * * * */
function docReady() {
  disabled();
  menu();
}

function always() {
  content();
  fixSpace();
  proportional();
}

//-- Do not change!!!
//---------------------------------------------------
//---------------------------------------------------
//---------------------------------------------------
$(window).ready(function() {
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
});

$(document).ready(function() {
    $(".close").click(function() {
        $(".alert").remove();
    });
    $(".alert").fadeTo(2000, 500).slideUp(500, function() {
      $(".alert").slideUp(500);
    });
});

window.theme = window.theme || {};

// global var elements cashe
var nav = {
    shop: {id:'#shop', class: '.shop', jQid: $('#shop'), jQclass: $('.shop')},
    editorial: {id:'#editorial', class: '.editorial', jQid: $('#editorial'), jQclass: $('.editorial')},
    gossip: {id:'#gossip', class: '.gossip', jQid: $('#gossip'), jQclass: $('.gossip')},
    panel: {main: '[data-navigation-panel]', one: '[data-panel-1]', two: '[data-panel-2]'},
    is: {active:'isActive', selected: 'selected', navOpen: 'isNavwrapperOpen', notOpen: 'isNotOpen'},
    mobile: {toggle: '.mobileToggle', wrapper: '.mobileWrapper'}
}

var isMobile = window.matchMedia("(max-width: 767px)").matches;
var barHeight = $('.header__announcement-bar').outerHeight() || 0, 
    navHeight = $('header.custom').outerHeight();
var commonSlider = $('.commonSlider');
var slider_samples = $('.promoSlider').slick();
var slider_holiday_gwp = $('#miniCart #minicart-holiday-gwp').slick();
var slider_promo = $('#minicart-samples').slick();
if( /iPhone/i.test(navigator.userAgent) ) {
 document.querySelector('html').classList.add('iphone');
}


$(document).ready(function(){

    //---------------- GNav Sticky
  	stickyHeader();
    
    //---------------- Desktop menu Init constructor
    desktopMenuInit();

    //---------------- Mobile menu Init constructor
    mobileMenuInit();
  
  	//---------------- Mobile menu Init constructor
  	commonSlider.find('> div').length > 1 ? commonSlider.slick() : '';
  
  	accordianInit();

});


//---------------- designMode/customize Events

if (Shopify.designMode) {
    // This will only happen in the theme editor
    console.log('editor mode on');
    eventTrigger('shopify:section:select', sectionSelect);
    eventTrigger('shopify:section:load', sectionLoad);
    eventTrigger('shopify:section:deselect', sectionDeselect);
    eventTrigger('shopify:block:select', blockSelect);
    eventTrigger('shopify:block:deselect', blockDeselect);

    var exp = document.querySelectorAll('[aria-controls="Collapsible-all-article-modules"]');
    console.log(exp); 
    var getLI = document.querySelectorAll('#Collapsible-all-article-modules ol li div > button > span')
   console.log(getLI); 
}

function sectionSelect(e){
    console.log(e, 'Select Section'); 
}

// --- Section Load
function sectionLoad(e){
    //console.log('on Load');
  	console.log('event onLoad => ', $(e.target).data('shopify-editor-section'));
  
    desktopMenuInit();
    mobileMenuInit();

    setTimeout(function(){
        $(e.target).find('.mobileToggle').trigger('click');
    },200);
  
  	// key-ingredients.liquid slider
  	var container = $(e.target).hasClass('key-ingredients');
    container ? $('.commonSlider').slick() : '';
  
  	// all-ingredients.liquid slider
  	accordianInit();

    // article moddule slider
    let articleSliders = $(e.target).find('.commonSlider > div').length > 1
    articleSliders ? $(e.target).find('.commonSlider').slick() : '';
    

}

// --- Section deSelect
function sectionDeselect(e){
    //console.log('on de select');
    if($(e.target).find('.mobileToggle').hasClass('isActive')){
        $(e.target).find('.mobileToggle').trigger('click');
    }

    $('.closeMenu').trigger('click');
}

// --- Block Select
function blockSelect(e){

    if (isMobile) {

        var getParentId = $(e.target).parent().attr('id');
        $('header.custom .mainNav nav a.'+getParentId).trigger('click');
        $(e.target).find('li a').mouseover();

    } else {

        setTimeout(function(){
            $('.mobileToggle, .mobileWrapper ').addClass('isActive');
            $('.mobileWrapper ul').removeClass('hide');
        },200)

    }
  
  	// all-ingredients accordian event
  	$(e.target).find('header').trigger('click');
  	
}

// --- Block deSelect
function blockDeselect(e){
    isMobile ? $('.closeMenu').trigger('click') : $('.mobileToggle').trigger('click');
}



// ---------- Custom Navigation Menu - mobile & desktop

// ---------------------------------------- Desktop Menu Init Funcation


function desktopMenuInit() {
    /// close menu when click on main Nav ///
    $('.mainNav .shop , .mainNav .shade-finder , .mainNav .virtual-try-on , .mainNav .editorial , .mainNav .gossip').on('click', function(e){
        closeMenuLayers();
    });

    // -- main menu click [shop] link to open menu panel

    // click when menu close [SHOP]
    $(nav.shop.class).on('mouseover', function(e){
        e.preventDefault();
        /// close second panel ///
        $(nav.panel.two).removeClass(nav.is.active);

        shopOpen(this);
        $('.bottomLinks').show();

      	// Sticky FIX 
          if($('body').hasClass('template-product') && window.scrollY > $('.product__form').offset().top + $('.product__form').height() ) {
              /// add padding due to sticky nav hide on sets products ///
            var prodBarHeight = $('.hidden-xs.product-fixed-bar').outerHeight();
            if(prodBarHeight)
            {
                $('body').css("padding-top", prodBarHeight + "px");
            }else{
                $('body').css("padding-top", "60.8px");
            }

            $('header.custom').addClass('relative').css('top', Number(window.scrollY)-parseInt(21)  +'px');
        } else {
            $('body').css("padding-top", barHeight + "px");
            $('header.custom').addClass('relative').css('top', Number(window.scrollY) +'px');
        }
      	
    });

    // enabled hover when menu opened [SHOP]
//     $(document).on('mouseover', '.mainNav.menuOpened .shop', function(e){
//         e.preventDefault();
//         shopOpen(this);
//     })

    // -- main menu click [editorial] link to open menu panel

    // click when menu close [EDITORIAL]
    $(nav.editorial.class).on('mouseover', function(e){
        e.preventDefault();
        /// close second panel ///
        $(nav.panel.two).removeClass(nav.is.active);

        editorialOpen(this);
        $('.bottomLinks').show();

      	// Sticky FIX 
          if($('body').hasClass('template-product') && window.scrollY > $('.product__form').offset().top + $('.product__form').height() ) {
              /// add padding due to sticky nav hide on sets products ///
              var prodBarHeight = $('.hidden-xs.product-fixed-bar').outerHeight();
              if(prodBarHeight)
              {
                  $('body').css("padding-top", prodBarHeight + "px");
              }else{
                  $('body').css("padding-top", "60.8px");
              }
            $('header.custom').addClass('relative').css('top', Number(window.scrollY)-parseInt(21) +'px');
        } else {
            $('body').css("padding-top", barHeight + "px");
            $('header.custom').addClass('relative').css('top', Number(window.scrollY) +'px');
        }
    });

    // enabled hover when menu opened [EDITORIAL]
//     $(document).on('mouseover', '.mainNav.menuOpened .editorial', function(e){
//         e.preventDefault();
//         editorialOpen(this);
//     })

    // -- main menu click [gossip] link to open menu panel

    // click when menu close [GOSSIP]
    $(nav.gossip.class).on('mouseover', function(e){
        e.preventDefault();
        /// close second panel ///
        $(nav.panel.two).removeClass(nav.is.active);

        gossipOpen(this);
        $('.bottomLinks').show();

        // Sticky FIX
        if($('body').hasClass('template-product') && window.scrollY > $('.product__form').offset().top + $('.product__form').height() ) {
            /// add padding due to sticky nav hide on sets products ///
            var prodBarHeight = $('.hidden-xs.product-fixed-bar').outerHeight();
            if(prodBarHeight)
            {
                $('body').css("padding-top", prodBarHeight + "px");
            }else{
                $('body').css("padding-top", "60.8px");
            }
            $('header.custom').addClass('relative').css('top', Number(window.scrollY)-parseInt(21) +'px');
        } else {
            $('body').css("padding-top", barHeight + "px");
            $('header.custom').addClass('relative').css('top', Number(window.scrollY) +'px');
        }
    });

    // enabled hover when menu opened [EDITORIAL]
//     $(document).on('mouseover', '.mainNav.menuOpened .editorial', function(e){
//         e.preventDefault();
//         editorialOpen(this);
//     })



    // hover for second layer
    $(nav.panel.one + ' .innerMenu li a').on('mouseenter', function(){
        $('.innerMenu li a').removeClass(nav.is.selected);
        $(this).addClass(nav.is.selected);
        $(nav.panel.two).addClass(nav.is.active);

        $('.subMenuIcon').removeClass('hoverClass');
        if($(this).parent().find('span').hasClass( "subMenuIcon" ))
        {
            $(this).parent().find('span').removeClass('subMenuIcon').addClass('subMenuIcon hoverClass');
        }
        getData(this);
    });

    // hover plus icon for second layer
    $(nav.panel.one + ' .innerMenu li.subMenuClass span').on('mouseenter', function(){

        $('.innerMenu li a').removeClass(nav.is.selected);
        $($(this).parent('.subMenuClass').find('a')).addClass(nav.is.selected);
        $(nav.panel.two).addClass(nav.is.active);

        $('.subMenuIcon').removeClass('hoverClass');
        if($($(this)).hasClass( "subMenuIcon" ))
        {
            $($(this)).removeClass('subMenuIcon').addClass('subMenuIcon hoverClass');
        }

        getData($(this).parent('.subMenuClass').find('a'));
    });



    // hover main menu to hide second layer
    $('.mainNav, .bottomLinks').on('mouseover', function(){
        //$(nav.panel.two).removeClass(nav.is.active);
        $('.innerMenu li a').removeClass(nav.is.selected);
    })

    // close whole menu on X button and outside menu
    $('.closeMenu').on('click', function(e){
        e.preventDefault();
        closeMenuLayers();
        if($('body').hasClass('template-product') && window.scrollY > $('.product__form').offset().top + $('.product__form').height() ) {
            $('body').css("padding-top", Number(barHeight + navHeight + 21) + "px");
            $('header.custom').removeClass('relative').css('top', Number(barHeight + 21) +'px');
        } else {
            $('body').css("padding-top", Number(barHeight + navHeight) + "px");
            $('header.custom').removeClass('relative').css('top', barHeight+'px');
        }
    });

    // close whole menu when currsor move outside menu
    $('.overlayBg').on('mouseover', function(e){
        e.preventDefault();
        closeMenuLayers();
        if($('body').hasClass('template-product') && window.scrollY > $('.product__form').offset().top + $('.product__form').height() ) {
            $('body').css("padding-top", Number(barHeight + navHeight + 21) + "px");
            $('header.custom').removeClass('relative').css('top', Number(barHeight) +'px');
        } else {
            $('body').css("padding-top", Number(barHeight + navHeight) + "px");
            $('header.custom').removeClass('relative').css('top', barHeight+'px');
        }
    });

    // close whole menu when link is clicked
    $('.navPanel a').on('click', function(){
        closeMenuLayers();
        if($('body').hasClass('template-product') && window.scrollY > $('.product__form').offset().top + $('.product__form').height() ) {
            $('body').css("padding-top", Number(barHeight + navHeight + 21) + "px");
            $('header.custom').removeClass('relative').css('top', Number(barHeight + 21) +'px');
        } else {
            $('body').css("padding-top", Number(barHeight + navHeight) + "px");
            $('header.custom').removeClass('relative').css('top', barHeight+'px');
        }
    });


    // Definations Desktop menu events.

    // Main menu event details funcations
    let shopOpen = (elem) => {
        $(elem).addClass(nav.is.selected);
        nav.editorial.jQclass.removeClass(nav.is.selected);
        nav.editorial.jQid.hide();
        nav.gossip.jQclass.removeClass(nav.is.selected);
        nav.gossip.jQid.hide();

        firstLayer(elem,'shop');
        $('.mainNav').addClass('menuOpened');
        //// cookie icon////
        $('#ot-sdk-btn-floating').css('z-index','999');

    }
    let editorialOpen = (elem) => {
        $(elem).addClass(nav.is.selected);
        nav.shop.jQclass.removeClass(nav.is.selected);
        nav.shop.jQid.hide();
        nav.gossip.jQclass.removeClass(nav.is.selected);
        nav.gossip.jQid.hide();

        firstLayer(elem,'editorial');
        $('.mainNav').addClass('menuOpened');
        //// cookie icon////
        $('#ot-sdk-btn-floating').css('z-index','999');
    }
    let gossipOpen = (elem) => {
        //todo: could make these 3 a single function that takes the elem to open and a list of elems to close
        $(elem).addClass(nav.is.selected);
        nav.shop.jQclass.removeClass(nav.is.selected);
        nav.shop.jQid.hide();
        nav.editorial.jQclass.removeClass(nav.is.selected);
        nav.editorial.jQid.hide();

        firstLayer(elem,'gossip');
        $('.mainNav').addClass('menuOpened');
        //// cookie icon////
        $('#ot-sdk-btn-floating').css('z-index','999');
    }

    // First layer function (f)
    let firstLayer = (elem,state) => {
        var className = elem.className.split(' ')[0];
        $(nav.panel.one).addClass(nav.is.active);
        $(nav.panel.main).addClass(nav.is.navOpen);
        $('.overlayBg').addClass(nav.is.active);
        $('#'+className).show();

        //// open second layer when hover on main GNAV if enable from setting ////
        //if($(nav.panel.one + ' .innerMenu#'+state).data('enable-panel')){
            setTimeout(function() {
                $(nav.panel.one + ' .innerMenu#'+state+' li a[data-enable-panel=true]').trigger( "mouseover" );
                }, 5);
       // }

        $('html, body').addClass('overflow-hidden');
        $('.mainNav').removeClass(nav.is.notOpen);
    }

    // close menu defination (f)
    let closeMenuLayers = () =>{
        $(nav.panel.one + ',' + nav.panel.two).removeClass('isActive');
        $('.overlayBg').removeClass(nav.is.active);
        setTimeout(()=>{
            $(nav.panel.main).removeClass(nav.is.navOpen);
            $(nav.shop.id + ',' + nav.editorial.id).hide();
            $('.mainNav').removeClass('menuOpened');
            $('header.custom .mainNav nav a, .innerMenu li a').removeClass('selected');
            $('html, body').removeClass('overflow-hidden');
        }, 300)
    }

    // collecting data for second layer [img, alt, content, link] (f)
    let getData = (elem) => {
        $(nav.panel.two + ' .scroll-bar').html('');
        var picture = $(elem).data('img');
        var alt = $(elem).data('alt');
      	var imgLink = $(elem).data('img-link');
        var content = $(elem).data('content');
        var ctaLink = $(elem).data('link');
        var ctaText = $(elem).data('text');
        var dataType = $(elem).data('type');
        var loopCount = $(elem).data('loop-count');
        $(nav.panel.two + ' .scroll-bar').removeClass('img-menu').removeClass('one-img');

        if(dataType == 'image-desc'){
            $(nav.panel.two + ' .scroll-bar').addClass('one-img');

            if(picture == undefined && content == undefined && ctaText == undefined && imgLink == undefined){
                $(nav.panel.two).removeClass(nav.is.active);
            }

            var html = '';
            html += '<div class="contentContainer">';

            if(imgLink !== undefined){
                html += '<div class="img"><a href="'+ imgLink +'"><img src="'+ picture +'" alt="'+ alt +'"></a></div>';
            }else if(picture !== undefined){
                html += '<div class="img"><img src="'+ picture +'" alt="'+ alt +'"></div>';
            }else{
                html += '';
            }

            html += content !== undefined ? '<div class="content">'+ content +'</div>' : '';
            html += ctaText !== undefined ? '<div class="link"><a href="'+ctaLink+'">'+ ctaText +'</a></div>' : '';
            html += '</div>';
        }
        else if(dataType == 'sublink'){
            var html = '';
            html += '<div class="contentContainer">';
            html += '<h3 class="list-heading">'+$(elem).data('main-type') +'</h3>';
            html += '<ul class="list-menu-wrap">';
            for(i=1; i <= loopCount; i++){
                html += '<li class="list-menu-item"><a href="'+$(elem).data('sublink-url-'+i)+'">'+$(elem).data('sublink-title-'+i) +'</a></li>';
            }
            html += '</ul></div>';
        }else if(dataType == 'sublink-img'){
            $(nav.panel.two + ' .scroll-bar').addClass('img-menu');
            var html = '';
            html += '<div class="contentContainer"><ul>';
            for(i=1; i <= loopCount; i++){
                html += '<li class="list-styling"><a href="'+$(elem).data('sublink-url-'+i)+'"><div class="list-box"><div class="img-box"><img src="'+$(elem).data('subimage-'+i)+'"></div> <div class="txt-box">'+$(elem).data('sublink-title-'+i) +'</div></div></a></li>';
            }
            html += '</ul></div>';
        }

        $(nav.panel.two + ' .scroll-bar').append(html);
    }

}

// ---------------------------------------- Mobile Menu Init Funcation

// const bodyTopNow = function getBodyTop() {
//   return $('body').offset().top;
// }

var bodyTopNow;
function mobileMenuInit(){
    /// add trigger on mobile shop tab for equal padding
    $( ".m-gnav #shop" ).trigger( "click" );

    $(nav.mobile.toggle).on('click', function(){

        $('#shop-ul').removeClass('selectTab');
        $('#explore-ul').removeClass('selectTab');

        $('.Rise__widget').toggleClass('hide_rise__widget')
        $(this).toggleClass(nav.is.active);
        $(nav.mobile.wrapper).toggleClass(nav.is.active);
        $(nav.mobile.wrapper+' ul').toggleClass('hide');
        $('body, html').toggleClass('overflow-hidden');
        if($('.no_scroll_quickshop').length && $('body').offset().top != 0 && $(nav.mobile.wrapper).hasClass(nav.is.active)) {
          bodyTopNow = $('body').offset().top;
          setTimeout(() => {
            $('body').offset({ top: 0 });
          }, 200);
        } else if ($('.no_scroll_quickshop').length && $('body').offset().top == 0 && !$(nav.mobile.wrapper).hasClass(nav.is.active)) {
          $('body').offset({ top: bodyTopNow });
        }

        ////open makeup panel when open Gnav ////
        $('.openState').addClass('hoverClass');
        $('.openState ul').removeClass('hide');
    });

    $('.subMenuClassMobile > a').on('click', function(){
        if($(this).parent().find('ul').hasClass('hide')) {
            $(this).parent().removeClass('subMenuClassMobile').addClass('subMenuClassMobile hoverClass');
            $(this).parent().find('ul').removeClass('hide');
            /// scroll top when click on dropdown parent ////
            $(this)[0].scrollIntoView({ behavior: 'smooth' });
        }else{
            $(this).parent().removeClass('subMenuClassMobile hoverClass').addClass('subMenuClassMobile');
            $(this).parent().find('ul').addClass('hide');
        }
    });

    $('.m-gnav-toggle').on('click', function(){
        if($(this).attr('id') == 'shop')
        {
            $('#shop-ul').addClass('selectTab').show();
            $('#explore-ul').removeClass('selectTab').hide();
        }else{
            $('#shop-ul').removeClass('selectTab').hide();
            $('#explore-ul').addClass('selectTab').show();
        }
    });
}

function toggleSubMenu(subMenu){
    if (typeof subMenu === 'string'){
        $(nav.mobile.wrapper+' ul').toggleClass('hide');
        const subMenuElem = nav.mobile.wrapper + ' ' + subMenu
        menuAnimation(subMenuElem + ' li', 90, 1);
        $(subMenuElem).toggleClass('hide');
        $(subMenuElem + ' ul').toggleClass('hide');
    }
    return false
}

// ---------------------- Global Definations

// add delay animation for each item (f)
function menuAnimation(elem, animDelay, offset=0){
    $(elem).each(function(i) {
        $(this).css('animation-delay', (i+offset) * animDelay + 'ms')
    })
}

function eventTrigger(eventName, funcationName){
    document.addEventListener(eventName, funcationName);
}

// On TransitionEnd event
function transitionEvents(transitionEventName, elem){
    const el = document.querySelector(elem);
    el.addEventListener('transitionend', function() {
        // some code here
    });
}

// ---------------------- Sticky Promo and GNAV

$(window).resize(function(){
  setTimeout(function(){
    stickyHeader()
  }, 200);
});

function stickyHeader(){
  let barHeight = $('.header__announcement-bar').outerHeight();
  headerPosition(barHeight);

  if($('body').hasClass('template-product')) {
        $(window).scroll(function (e) {
            const scroll = $(window).scrollTop();
            const productBottom = $('.product__form').offset().top + $('.product__form').height();

            if (scroll > productBottom && window.innerWidth > 767) {
                barHeight = $('.hidden-xs.product-fixed-bar').outerHeight();
                /// use for top add to cart button///
                //headerPosition(barHeight);
                if(barHeight) {
                    $('.beauty-advisor-wrapper').css('bottom', barHeight + parseInt(40));
                    $('#ot-sdk-btn-floating').css('bottom', barHeight + parseInt(40));
                }

            } else {
                barHeight = $('.header__announcement-bar').outerHeight();
                headerPosition(barHeight);
                $('.beauty-advisor-wrapper').css('bottom', '10px');
                $('#ot-sdk-btn-floating').css('bottom', '10px');

            }
        });
  }
}

function headerPosition(barHeight) {
    const headerHeight = $('header.custom').outerHeight();
    const stickyMenuHeight = $('.sticky-menu').length ? $('.sticky-menu').outerHeight() : 0;
    var sumHeights = Number(barHeight + headerHeight);


    if($('.sticky-nav-top').length || (!$('.sticky-nav-top').length && $('header.custom.opt-transparent').length)) {
        $('body').css('padding-top', sumHeights + stickyMenuHeight);
        if(!$('.holiday-plp').length && !$('.template-page--eye-collection').length) {
            $('.mobileWrapper').css({'margin-top': '-40px'});
        }
    }

    if($('.below-the-fold').length && !$('header.custom.opt-transparent').length) {
        $('body').css('padding-top', sumHeights + stickyMenuHeight);
    }

    $('header.custom').css('top', barHeight);

    if($('.sticky-menu').length) {
        if ($('.sticky-nav-bottom').length) {
            window.onload = function() {
                $('.sticky-menu').css('bottom', 0);

                if ($('.ada-button-frame').length) {
                    $('.ada-button-frame').css('bottom', 40);
                }

                if ($('.ot-floating-button').length) {
                    $('.ot-floating-button').css('bottom', 70);
                    $('.ot-floating-button').css('left', 24);
                }

             $(window).scroll(function(e) {

                let getFooterHeight = $("#shopify-section-footer").height();
                // Get footer offset from current viewport
                var Getoffsets = document.getElementById('footer-wrapper').getBoundingClientRect();
                var topFooterCurrent = Getoffsets.top;

                var getFooterDocTopPosition = $('#footer-wrapper').offset().top;

                let footerInviewPort = getFooterDocTopPosition - getFooterHeight  ;


                if(isOnScreen($('footer'))) {
                  $('.sticky-menu').css('position', 'relative');
                  $('.sticky-menu').css('top', '');
                  $('.sticky-menu').css('bottom', '');
                } else if(isOnScreen($('footer')) == false && $(window).scrollTop() > (topFooterCurrent + 100)) {
                   $('.sticky-menu').css('position', 'fixed');
                  $('.sticky-menu').css('top', 'auto');
                  $('.sticky-menu').css('bottom', '0');
                }
                if(topFooterCurrent  < 140) {
                    $('.sticky-menu').css('position', 'fixed');
                    $('.sticky-menu').css('top', '100px');
                    $('.sticky-menu').css('bottom', '');
                }
               });
            };

            function getElementDistanceFromTop(elementId) {
                //get the element
                let elem = document.getElementById(elementId);
                //get the distance scrolled on body (by default can be changed)
                let distanceScrolled = document.body.scrollTop;
                //create viewport offset object
                let elemRect = elem.getBoundingClientRect();
                //get the offset from the element to the viewport
                let elemViewportOffset = elemRect.top;
                //add them together
                return distanceScrolled + elemViewportOffset;
            }
            function isOnScreen(elem) {
                // if the element doesn't exist, abort
                if( elem.length == 0 ) {
                    return;
                }
                let $window = jQuery(window)
                let viewport_top = $window.scrollTop()
                let viewport_height = $window.height()
                let viewport_bottom = viewport_top + viewport_height
                let $elem = jQuery(elem)
                let top = $elem.offset().top
                let height = $elem.height()
                let bottom = top + height

                return (top >= viewport_top && top < viewport_bottom) ||
                (bottom > viewport_top && bottom <= viewport_bottom) ||
                (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
            }
        } else {
            $('.sticky-menu').css('top', sumHeights);
        }
    }
}

// ---------------------- Accordians funcation defination
function accordianInit(){
  
  var inner = [];
  $('.filterTabs ul label').each( function(index, Element){
      if (jQuery.inArray(this.innerHTML, inner) == -1){
        inner.push(this.innerHTML);
      }
      else {
        $(this).remove();
      }
  });
  
  
  $('.accordions header').click(function(e) {
      e.preventDefault();
    
      let $this = $(this);
    
      if ($this.next().hasClass('visiable')) {
          $this.next().removeClass('visiable');
          $this.next().slideUp(350);
          $this.removeClass('active');
        
      } else {
          $this.parent().parent().find('.item section').removeClass('visiable');
          $this.parent().parent().find('.item header').removeClass('active');
          $this.parent().parent().find('.item section').slideUp(350);
          $this.next().toggleClass('visiable');
          $this.next().slideToggle(350);
          $this.toggleClass('active');
        
      }
  });
}

// ---------------------- Select 

$('select.selectStyled').each(function(){
  
    var $this = $(this), numberOfOptions = $(this).children('option').length;
    $this.addClass('select-hidden'); 
    if(numberOfOptions == 1) {
        $this.wrap('<div class="select single-size"></div>');
    } else {
        $this.wrap('<div class="select"></div>');
    }
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option:selected').text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
       
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $this.trigger('click');
        $list.hide();
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


(function ($) {
    $('.s_btn').on('click', function(){
        $('.shareWidget').fadeIn();
    });
    $('.shareWidget h4 span').on('click', function(){
        $('.shareWidget').fadeOut();
    });

    if(isMobile){
        $('.product__item-image .lazyload').each(function(){
            $(this).attr('src', $(this).data('src'))
        });
    }

})(jQuery);

// ---------------------- Window Load
$(window).on('load', function(){
    $('.loading-pdp-sets').remove();
    $('.price_btn--wrapper').removeClass('loading-bundles');
    $('.price_btn--wrapper .price_btn').addClass('animated');
  
  $( ".color_info.fixWidth .slick-track" ).each(function() {
    let len = $(this).find('.slick-slide').length;
    len < 7 ? $(this).parents('.fixWidth').addClass('lessthen7') : ''
  });

  $('.buy_now').on('click', function(){
    $('body .swap-x').addClass('ofn');
  });
  
  $('.close_link.see-more').on('click', function(){
  	$('body .swap-x').removeClass('ofn');
  })
  
}); 


// Featured Collection Section Scripts
$(`.featured-collection-wrap:not([data-index="1"])`).addClass("hide-featured-collection");

$('.featured-navigation_item').click(function (e) {
    let dataIndex = $(this).attr("data-index");
    $(".featured-collection-wrap").addClass("hide-featured-collection");
    $(".featured-collection-wrap").removeClass("show-featured-collection");
    $(`.featured-collection-wrap[data-index=${dataIndex}]`).removeClass("hide-featured-collection")
    $(`.featured-collection-wrap[data-index=${dataIndex}]`).addClass("show-featured-collection")
});

$.fn.getIndex = function () {
    var index = $(this).parent().children().index( $(this) );
    return index;
}

$('.featured-collection-container .buy__btn').click(function (e) {
    $('.product_set').fadeOut(500);
})
$('.featured-collection-container .product__item.set .buy_now').click(function (e) {
    $('.featured-collection-container .shutter').fadeOut(500);
    $(this).parents('.product__item').siblings().find("a.outer_content").fadeTo(0, 0);
})
$('.featured-collection-container .product__item.set button.close_link').click(function (e) {
    // $(this).parents('.product__item').siblings().find("a.outer_content").fadeTo(0, 1);
    $('.outer_content').fadeTo(0, 1);
})
$('.featured-collection-container .product__item.set .buy_now').on('click', function (e) {
    if (window.sliderFeateredCollection) {
        sliderFeateredCollection.slick("slickSetOption", "swipe", false);
        sliderFeateredCollection.slick("slickPause");
    }
    if ($(this).parents(".product__item").getIndex() == 0) {
        $(this).parents(".product__item").find(".outer_content").addClass("desc-btm")
    }
    if ($(this).parents(".product__item").getIndex() == 1) {
        $(this).parents(".product__item").find(".outer_content").addClass("desc-btm-left")
    }
    if ($(this).parents(".product__item").getIndex() == 3) {
        $(this).parents(".product__item").find(".outer_content").addClass("desc-left")
    }
})
$('.featured-collection-container .product__item.set .close_link').on('click', function (e) {
    if (window.sliderFeateredCollection) {
        sliderFeateredCollection.slick("slickSetOption", "swipe", true);
        // sliderFeateredCollection.slick("slickPlay");
    }
    $(".product__item.set .outer_content").removeClass("desc-btm");
    $(".product__item.set .outer_content").removeClass("desc-left");
    $(".product__item.set .outer_content").removeClass("desc-btm-left");
})
function getPosition(element) {
    let rect = element.getBoundingClientRect();
    return {
        x: rect.left,
        y: rect.top
    };
}
function getWidth(element) {
    return width = element.innerWidth()
}

firstNavItem = document.querySelector(".featured-navigation_item:first-child");
let parentSelect = document.querySelector(".featured-navigation_items");
if (firstNavItem && parentSelect) {
    let parX = getPosition(parentSelect).x;
    let childX = getPosition(firstNavItem).x;
    let childCenter = $(firstNavItem).width() / 2;
    let sliderWidth = $(".header__line").width() / 2;
    let posX = ((childX + childCenter) - parX) - sliderWidth;
    document.querySelector(".header__line").style.transform = `translate(${posX}px, 0px)`;
}

document.querySelectorAll('.featured-navigation_item').forEach((item) => {
  item.addEventListener('click', (event) => {
    let parX = getPosition(parentSelect).x;
    let childX = getPosition(item).x
    let childCenter = $(item).width() / 2;
    let sliderWidth = $(".header__line").width() / 2
    let posX = ((childX + childCenter) - parX) - sliderWidth
    document.querySelector(".header__line").style.transform = `translate(${posX}px, 0px)`;
  });
});


function mediaControls(vId, cId){
  var video = document.getElementById(vId);
  var controlsID = cId;

  $('#' + controlsID +' .play').on('click', function(){
    video.play();
    $(this).hide();
    $('#' + controlsID +' .pause').show();
  });

  $('#' + controlsID +' .pause').on('click', function(){
    video.pause();
    $(this).hide();
    $('#' + controlsID +' .play').show();
  });

  $('#' + controlsID +' .volume').on('click', function(){
    if(video.muted){
      video.muted = false;
      $(this).addClass('unmuted');
    } else {
      video.muted = true;
      $(this).removeClass('unmuted');
    }
  });
}


$(document).ready(function(){
  $(document).on("click", ".m-gnav-toggle", function(){
    $(".m-gnav-toggle").removeClass('active');
    $(this).addClass('active');
  });
});
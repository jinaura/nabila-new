var giftbox_title = $('.gift_card_product').data('title');
var Shopify = Shopify || {};
// ---------------------------------------------------------------------------
// Money format handler
// ---------------------------------------------------------------------------
Shopify.money_format = "${{amount}}";
const countryIsoCode = document.querySelector('body')?.dataset.countryIso;
if (countryIsoCode === 'GB') {
    Shopify.money_format = "£{{amount}}";
}
Shopify.formatMoney = function(cents, format) {
  if (typeof cents == 'string') { cents = cents.replace('.',''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = (format || this.money_format);

  function defaultOption(opt, def) {
     return (typeof opt == 'undefined' ? def : opt);
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal   = defaultOption(decimal, '.');

    if (isNaN(number) || number == null) { return 0; }

    number = (number/100.0).toFixed(precision);

    var parts   = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        pounds = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '£1' + thousands),
        cents   = parts[1] ? (decimal + parts[1]) : '';
        if (countryIso === 'GB') {
            return pounds + cents;
        } else {
            return dollars + cents;
        }
  }

  switch(formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
};

$(function() {
    $(document).ready(function() {
        if (enable_special_sku) {
            var special_sku = parseInt(document.querySelector("#special_sku").value);
        } else {
            var special_sku = 0;
        }

        // redirect to new returns portal
        if (window.location.href == 'https://www.roseinc.com/a/returns') {
            window.location.replace('https://www.roseinc.com/pages/return-center');
        }

        const countryIso = document.querySelector('body')?.dataset.countryIso;
        if (countryIso === 'GB') {
          const adaChatbotEl = document.getElementById('ada-entry');
          adaChatbotEl && adaChatbotEl.remove();
        }

        // geolocation app popup customization
        function updateContentOfPopup() {
            const targetNode = document.querySelectorAll('.recommendation-modal__selector-wrapper--flag')[0];
            if (!targetNode) {
                window.setTimeout(updateContentOfPopup, 100);
                return;
            }
            const modalBtn = document.querySelectorAll('.recommendation-modal__button')[0];
            modalBtn.innerText = 'Continue';
            let parEl = document.createElement('p');
            parEl.className = 'recommendation-modal__description';
            parEl.innerText = 'Use the dropdown menu to select United Kingdom or Global for all other destinations.';
            const localeForm = document.querySelectorAll('.recommendation-modal__form')[0];
            let parentDiv = localeForm.parentNode;
            parentDiv.insertBefore(parEl, localeForm);
            const closeBtn = document.querySelectorAll('.recommendation-modal__close-button')[0];
            closeBtn.innerHTML = "<span class='recommendation-modal__close-button-text'>Close</span>"
        }

        const geopopupObserver = new MutationObserver(function (mutations, me) {
            const geopopupEl = document.querySelectorAll('.recommendation-modal__container .recommendation-modal__content .recommendation-modal__button--minimal');
            if (geopopupEl && geopopupEl.length) {
              if (geopopupEl[0].innerText.toLowerCase().includes('change')) {
                geopopupEl[0].click();
                updateContentOfPopup();
              }
              me.disconnect(); // stop observing
              return;
            }
        });
        
        // start observing
        geopopupObserver.observe(document, {
          childList: true,
          subtree: true
        });

        const geoselectorObserver = new MutationObserver(function (mutations, me) {
            const geoselectorEl = document.querySelectorAll('.locale-selectors__container');
            if (geoselectorEl && geoselectorEl.length) {
                let footerEl = document.querySelectorAll('.footer__copyright')[0];
                let countryEl = document.createElement('div');
                countryEl.className = 'country__selector';
                countryEl.innerHTML = "<span>Country</span><span class='semicolon'>:</span>";
                footerEl.appendChild(countryEl);
                countryEl.appendChild(geoselectorEl[0]);

                me.disconnect(); // stop observing
                return;
            }
        });
        
        // start observing
        geoselectorObserver.observe(document, {
          childList: true,
          subtree: true
        });

        /*============================================================================
        HOLIDAY PLP NAV & GRID Functionality
        ==============================================================================*/
        if ($('.holiday-plp.holiday-gift-guide').length) {
            handleNotificationFormSubmit();
            navMaxWidth();

            $(window).resize(function(){
            navMaxWidth();
            });

            //nav width(add X scroll)
            function navMaxWidth() {
              $('.holiday-plp-nav_list').css('maxWidth', $( window ).width());
            }

            //get elements and nav underline position
            const navItems = document.querySelectorAll('.holiday-plp-nav_list li a');
            const line = document.querySelector(".js-holiday-underline");
            let currentWidth = $('.holiday-plp-nav_list li.active a').width();
            const holidayNav = document.querySelector('.holiday-plp-nav');
            let lengthPreItems = $('.holiday-plp-nav_list li.active').prevAll().length;
            let widthAdd = 35;
            for (i=0; i<lengthPreItems; i++) {
              widthAdd = widthAdd+$('.holiday-plp-nav_list li.active').siblings().eq(i).outerWidth();
            }
            let activeLink = document.querySelector('.holiday-plp-nav_list li.active a');
            setTimeout(() => {
              activeLink.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }, 200);

            line.style.width = `${currentWidth}px`;
            line.style.transform = `translateX(${widthAdd}px)`;
            setTimeout(() => {
              line.style.opacity = '1';
            }, 500);

            //Make nav sticky
            let navPosition = $('.holiday-plp-nav').offset().top;
            let headerHeight = $('.header__announcement-bar').height() + $('header').height();
            $(window).scroll(function() {
              if($(window).scrollTop() + headerHeight  >= navPosition) {
                  $('.holiday-plp-nav').css({ 'position': 'fixed', 'top': headerHeight+'px' });
                  $('.holiday-plp-nav').addClass('nav_is_fixed');
              } else {
                  $('.holiday-plp-nav').css({ 'position': 'relative', 'top': 'auto' });
                  $('.holiday-plp-nav').removeClass('nav_is_fixed');
              }
            });

            //OOS Notification modal - Klaviyo
            const postNotificationToKlaviyo = (emailValue, variantShortId) => {
              $.ajax({
                type: "POST",
                url: "https://a.klaviyo.com/onsite/components/back-in-stock/subscribe",
                data: {
                    a: "KDZ4Dd", // Klaviyo account public token
                    email: emailValue, // Email address entered in form
                    variant: variantShortId, // OOS product variant to be notified
                    platform: "shopify",
                },
                success: function(response){
                  let this_modal = document.querySelector('.back-in-stock.is-open');
                  this_modal.querySelector('.modal__content').classList.add('hide-elements');
                  this_modal.querySelector('.modal__container p.success-msg').classList.remove('hide-elements');
                  setTimeout(() => {
                    MicroModal.close('modal-back-in-stock');
                    this_modal.querySelector('.modal__container p.success-msg').classList.add('hide-elements');
                    this_modal.querySelector('.modal__content').classList.remove('hide-elements')
                    handleNotificationFormSubmit();
                  }, 2000);
                },
                error: function(response) {
                  handleNotificationFormSubmit();
                }
              })
            }
            //Handle OOS Notification Modal
            function handleNotificationFormSubmit() {
              document.querySelectorAll('.holiday-gift-guide_coll .back-in-stock .btn.subscribe').forEach((element) => {
                element.addEventListener('click', (e) => {
                  e.preventDefault();
                  const emailInputNotification = e.target.parentNode.querySelector('input#back_in_stock_email').value.trim();
                  const variantIdNotification = e.target.parentNode.querySelector('input#back_in_stock_variant_id_input').value.trim();
                  postNotificationToKlaviyo(emailInputNotification, variantIdNotification);
                });
              });
            }

            function renderProducts(filterTag) {
              event.preventDefault();

              //hide grid and get height
              document.querySelector('#holiday-plp-main-wrapper').classList.add('hide-block');
              document.querySelector('#holiday-plp-main-wrapper').style.height = document.querySelector('#holiday-plp-main-wrapper').offsetHeight +'px';
              window.scrollTo(0, navPosition - headerHeight);

              //change url
              history.replaceState(null, null, '/collections/holiday-gift-guide/' + filterTag);

              //nav animation
              for (let navItem of navItems) {
                if(filterTag == navItem.dataset.id) {
                    navItem.parentNode.classList.add('active');
                    currentWidth = navItem.offsetWidth;
                } else {
                    navItem.parentNode.classList.remove('active')
                }
              }
              widthAdd = 35;
              lengthPreItems = $('.holiday-plp-nav_list li.active').prevAll().length;
              for (i=0; i<lengthPreItems; i++) {
                widthAdd = widthAdd+$('.holiday-plp-nav_list li.active').siblings().eq(i).outerWidth();
              }
              let activeLink = document.querySelector('.holiday-plp-nav_list li.active a');
              activeLink.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
              line.style.transform = `translateX(${widthAdd}px)`;
              line.style.width = `${currentWidth}px`;

              //fetch
              this_url = window.location.origin + '/collections/holiday-gift-guide/' + filterTag;
              fetch(this_url)
              .then(res => res.text())
              .then(data => {
                  //create new grid
                  let htmlDiv = document.createElement('div');
                  htmlDiv.innerHTML = data;
                  let htmlDom = htmlDiv.querySelector('#holiday-plp-main-wrapper').innerHTML;
                  document.querySelector('#holiday-plp-main-wrapper').innerHTML = htmlDom;
                  history.replaceState(null, null, '/collections/holiday-gift-guide/' + filterTag);

                  //show new grid
                  setTimeout(() => {
                    holidayGWP();
                    calculateCartSubtotal();
                    MicroModal.init();
                    handleNotificationFormSubmit();
                    document.querySelector('#holiday-plp-main-wrapper').style.height = 'auto';
                    document.querySelector('#holiday-plp-main-wrapper').classList.remove('hide-block');
                  }, 200);
              })
              .catch(error => console.error('Error:', error));
            }

            //Filtering using nav
            const filters = document.querySelectorAll('.holiday-filter');
            filters.forEach((filter) => {
              let filterTag = filter.dataset.id;
              filter.addEventListener('click', renderProducts.bind(event, filterTag), false);
            });

            //Filtering using bottom menu grid
            const menuGrid = document.querySelectorAll('.holiday-menu_link');
            menuGrid.forEach((filter) => {
              let filterTag = filter.dataset.tag;
              filter.addEventListener('click', renderProducts.bind(event, filterTag), false);
            });
        }

        /*============================================================================
        MINI CART functionality
        ==============================================================================*/

        //--Mini Cart Show/Hide
        $('body').on('click','.overlay:not(.open), .mini-close, .mini-continue, .cart_button', function(e) {
            e.preventDefault();
            let state = $('#pageWrapper').hasClass('open') ? 'open' : 'closed';
            cartToggle(state);
        });

        if (window.location.hash === '#openCart') {
            let state = $('#pageWrapper').hasClass('open') ? 'open' : 'closed';
            cartToggle(state);
        }

        //--Mini Cart sample from product Trash
        $('body').on('click', '.mini-cart__sample-remove', function(e) {
            $(".mini-cart__wrapper").animate({ scrollTop: 0 }, "slow");
            e.preventDefault();
            var sampleTitle = ($(this).attr('data-sample-title'));

            $('.mini-cart__item').each(function(i, obj) {
                if ($(this).attr('data-title') == sampleTitle) {
                    $qtyInput = $(this).find('input');
                    $qtyInput.val(0);
                    removeCart($qtyInput);
                }
            });
        });

        // Mini Cart Qty Buttons
        // Increase Quantity
        document.addEventListener('click',function(e) {
            if (e.target && e.target.classList[0] == 'more') {
                const inputField = e.target.previousElementSibling;
                const currentValue = Number(inputField.value);
                const purchaseVariantId = inputField.getAttribute('data-id');
                const purchaseVariantKey = inputField.getAttribute('data-key');

                // limit minicart quantity per line item to 6
                if (Number(inputField.value) > 5) {
                    const minicartQtyEl = e.target.parentNode.parentNode;
                    if (minicartQtyEl.getElementsByClassName('limit_order').length == 0) {
                        const limitEl = document.createElement('div');
                        limitEl.className = 'limit_order';
                        limitEl.innerHTML = "Limit 6 per order";
                        minicartQtyEl.appendChild(limitEl);
                    }
                } else {
                    inputField.value = currentValue + 1;
                    inputField.setAttribute('value', (inputField.value).toString());
                    let updateId = purchaseVariantId;
                    if (purchaseVariantKey) {
                        updateId = purchaseVariantKey
                    }
                    var update = {[updateId]: inputField.value};
                    postUpdate(update);
    
                    var numberOfItemsInCart = document.getElementsByClassName('productQuantity');
                    var numberOfItemInCartTotals = 0;
                    for (i=0; i < numberOfItemsInCart.length; i++){
                        numberOfItemInCartTotals += parseInt(numberOfItemsInCart[i].value)
                    }
                    document.getElementsByClassName('cartCount')[0].childNodes[3].innerHTML = numberOfItemInCartTotals;
                    document.getElementsByClassName('cartCount')[1].childNodes[3].innerHTML = numberOfItemInCartTotals;
                    sampleCheck();
                    holidayGWP();
                }
            }
        });

        // Decrease Quantity        
        document.addEventListener('click',function(e) {
            if (e.target && e.target.classList[0] == 'less') {
                const inputField = e.target.nextElementSibling;
                const currentValue = Number(inputField.value);
                const purchaseVariantId = inputField.getAttribute('data-id');
                const purchaseVariantKey = inputField.getAttribute('data-key');
                let updateId = purchaseVariantId;
                if (purchaseVariantKey) {
                    updateId = purchaseVariantKey
                }
                inputField.value = currentValue - 1;
                if (inputField.value > 0) {

                  inputField.setAttribute('value', (inputField.value).toString());
                  var update = {[updateId]: inputField.value};
                  postUpdate(update);

                  var numberOfItemsInCart = document.getElementsByClassName('productQuantity');
                  var numberOfItemInCartTotals = 0;
                  for (i=0; i < numberOfItemsInCart.length; i++){
                      numberOfItemInCartTotals += parseInt(numberOfItemsInCart[i].value)
                  }
                  document.getElementsByClassName('cartCount')[0].childNodes[3].innerHTML = numberOfItemInCartTotals;
                  document.getElementsByClassName('cartCount')[1].childNodes[3].innerHTML = numberOfItemInCartTotals;
                  sampleCheck();
                  holidayGWP();
                  checkGiftBox();
                } else {
                  inputField.value = 0
                  inputField.setAttribute('value', (inputField.value).toString());
                  document.getElementsByClassName('product_' + purchaseVariantId)[0].style.display = 'none';
                  var update = {[updateId]: inputField.value};
                  postUpdate(update);

                  var numberOfItemsInCart = document.getElementsByClassName('productQuantity');
                  var numberOfItemInCartTotals = 0;
                  for (i=0; i < numberOfItemsInCart.length; i++){
                      numberOfItemInCartTotals += parseInt(numberOfItemsInCart[i].value)
                  }
                  document.getElementsByClassName('cartCount')[0].childNodes[3].innerHTML = numberOfItemInCartTotals;
                  document.getElementsByClassName('cartCount')[1].childNodes[3].innerHTML = numberOfItemInCartTotals;

                  sampleCheck();
                  holidayGWP();
                  checkGiftBox();
                }
             }
         });

        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('color_variant_selector')){
                var getId = (e.target.dataset.productId).toString();
                var dropDown = document.querySelectorAll(".variant_id_" + getId)[0].value;
                document.getElementsByClassName('add-to-cart-button_' + getId)[0].setAttribute("data-purchase-id", dropDown); 
            }
        });

        // PDP Variant Selector
        document.addEventListener('click',function(e){
            if (e.target && e.target.classList[0] == 'variant_list_item_selected'){
                variantSelected = e.target;

                const form = document.querySelector('.form.product__form .form__foot');
                const addToCartButton = form.querySelector('.add-to-cart-button');
                variantSelected.dataset.variantId && addToCartButton.setAttribute('data-purchase-id', variantSelected.dataset.variantId.toString());

                //variantSelected.dataset.variantId && document.getElementsByClassName('add-to-cart-button')[0].setAttribute('data-purchase-id', (variantSelected.dataset.variantId).toString());
                atc = document.getElementsByClassName('add-to-cart-button fixed_form_submit');
                for (i=0; i < atc.length; i++){
                    atc[i].setAttribute('data-purchase-id', (variantSelected.dataset.variantId).toString());
                }
            } else if (e.target && e.target.classList[0] == 'variant_shade_chooser_item_selected'){
                variantSelected = e.target;

                const form = document.querySelector('.form.product__form .form__foot');
                const addToCartButton = form.querySelector('.add-to-cart-button');
                variantSelected.dataset.variantId && addToCartButton.setAttribute('data-purchase-id', variantSelected.dataset.variantId.toString());

                //variantSelected.dataset.variantId && document.getElementsByClassName('add-to-cart-button')[0].setAttribute('data-purchase-id', (variantSelected.dataset.variantId).toString());
                atc = document.getElementsByClassName('add-to-cart-button fixed_form_submit');
                for (i=0; i < atc.length; i++){
                    atc[i].setAttribute('data-purchase-id', (variantSelected.dataset.variantId).toString());
                }

            } else if (e.target && (e.target.classList[0] == 'variant_shade_chooser_subtitle' || e.target.classList[0] == 'variant_shade_chooser_title') && e.target.parentElement.parentElement.children[0].classList[0] == 'variant_shade_chooser_item_selected') {
                variantSelected = e.target.parentElement.parentElement.children[0];

                const form = document.querySelector('.form.product__form .form__foot');
                const addToCartButton = form.querySelector('.add-to-cart-button');
                variantSelected.dataset.variantId && addToCartButton.setAttribute('data-purchase-id', variantSelected.dataset.variantId.toString());

                //variantSelected.dataset.variantId && document.getElementsByClassName('add-to-cart-button')[0].setAttribute('data-purchase-id', (variantSelected.dataset.variantId).toString());
                atc = document.getElementsByClassName('add-to-cart-button fixed_form_submit');
                for (i=0; i < atc.length; i++){
                    atc[i].setAttribute('data-purchase-id', (variantSelected.dataset.variantId).toString());
                }
            } else if (e.target && e.target.classList[0] == 'variant_shade_chooser_item_wrapper' && e.target.children[0].classList[0] == 'variant_shade_chooser_item_selected') {
                variantSelected = e.target.children[0];

                const form = document.querySelector('.form.product__form .form__foot');
                const addToCartButton = form.querySelector('.add-to-cart-button');
                variantSelected.dataset.variantId && addToCartButton.setAttribute('data-purchase-id', variantSelected.dataset.variantId.toString());

                //variantSelected.dataset.variantId && document.getElementsByClassName('add-to-cart-button')[0].setAttribute('data-purchase-id', (variantSelected.dataset.variantId).toString());
                atc = document.getElementsByClassName('add-to-cart-button fixed_form_submit');
                for (i=0; i < atc.length; i++){
                    atc[i].setAttribute('data-purchase-id', (variantSelected.dataset.variantId).toString());
                }
            }
        });

        // Gift Card PDP Variant Selector
        document.addEventListener('click',function(e){
            if (e.target && e.target.classList[0] == 'size_select_option' && e.target.dataset.selected == 'true'){
                variantSelected = e.target;
                variantSelected.dataset.variantId && document.getElementsByClassName('add-to-cart-button')[0].setAttribute('data-purchase-id', (variantSelected.dataset.variantId).toString());
            }
        });
        
        // VTO page
        document.addEventListener('click',function(e){
            if (e.target && e.target.classList[0] == 'active' && e.target.tagName == 'IMG'){
                variantSelected = e.target;
                variantSelected.dataset.variantId && document.getElementsByClassName('add-to-cart-button')[0].setAttribute('data-purchase-id', (variantSelected.dataset.variantId).toString());
            }
        });

        // Mini Cart Variant Selectors
        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('mini-cart-color_variant_selector')){
                var getId = (e.target.dataset.productId).toString();        
                var dropDown = document.querySelectorAll(".mini-cart-variant_id_" + getId)[0].value;
                document.getElementsByClassName('mini-cart-add-to-cart-button_' + getId)[0].setAttribute("data-purchase-id", dropDown); 
            }
        });

        function isShadeFinder() {
            return !!document.querySelector('.template-page--shade-finder, .template-page--shade-finder-results');
        }
        
        // Add To Cart Functions
        function addToCartRegular(e) {
            e.preventDefault();
            if (isShadeFinder() && e.target.parentNode.classList.contains(AddToCartClass)) {
              var purchaseVariantId = (e.target.parentNode.dataset.purchaseId).toString();
            } else if (isShadeFinder() && e.target.parentNode.parentNode.classList.contains(AddToCartClass)) {
              var purchaseVariantId = (e.target.parentNode.parentNode.dataset.purchaseId).toString();
            } else {
              var purchaseVariantId = (e.target.dataset.purchaseId).toString();
              var sellingPlanId = e.target.dataset.sellingPlanId;
            }

            comparePriceCheck(purchaseVariantId);

            (promo_item == null || promo_item == 0)? promo_item = 0 : promo_item = parseInt(document.querySelector("#promo_item").value);

            $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: { quantity: 1, id: purchaseVariantId, selling_plan: sellingPlanId },
                success: success()
            })    
        }

        function addToCartMultiple(e) {
            e.preventDefault();
            if (isShadeFinder() && e.target.parentNode.classList.contains(AddToCartMultipleClass)) {
              var purchaseVariantIds = e.target.parentNode.dataset.purchaseId.split(',');
            } else {
              var purchaseVariantIds = e.target.dataset.purchaseId.split(',');
            }

            let itemsToAdd = [];
            purchaseVariantIds.forEach((varId) => {
                comparePriceCheck(varId);
                itemsToAdd.push({ id: varId, quantity: 1 });
            });

            let formData = {
                'items': itemsToAdd
            };

            (promo_item == null || promo_item == 0)? promo_item = 0 : promo_item = parseInt(document.querySelector("#promo_item").value);

            $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: JSON.stringify(formData),
                success: success()
            })    
        }

        function addToCartBundle(e) {
            e.preventDefault();

            var purchaseVariantId = (e.target.dataset.purchaseId).toString();
            let bundle_product=[];
            var shutter = document.querySelectorAll(".p-c-p___item__wrap .shutter"); 
            var content = document.querySelectorAll(".p-c-p___item__wrap .content > h3");
            var img = document.querySelectorAll(".p-c-p___item__wrap figure .bundle-img"); 

            comparePriceCheck(purchaseVariantId);

            bundleBuilder(bundle_product, shutter, content, img)

            var custom_message;
            var custom_message_check = document.querySelectorAll('.product-page-detail-bundle input[name="properties[custom_message]"]')
            if (custom_message_check != undefined && custom_message_check[0]) {
                custom_message = custom_message_check[0].value
            } else {
                custom_message = ' '
            }

            (promo_item == null || promo_item == 0)? promo_item = 0 : promo_item = parseInt(document.querySelector("#promo_item").value);

            $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: { quantity: 1, id: purchaseVariantId, properties: {"bundle_product": "["+ bundle_product +"]", "custom_message": custom_message}},
                success: success()
            })
        }

        function addToCartSets(e) {
            e.preventDefault();

            var purchaseVariantId = (e.target.dataset.purchaseId).toString();
            var parentRandomNo = (e.target.dataset.parentRandom).toString();
            var sellingPlanId = e.target.dataset.sellingPlanId;
            var bundle_product=[];
            var shutter = document.querySelectorAll(".product_item_" + purchaseVariantId + "_"+parentRandomNo+" .shutter");
            var content = document.querySelectorAll(".bundle_header_" + purchaseVariantId);
            var img = document.querySelectorAll(".bundle_image_" + purchaseVariantId);

            comparePriceCheck(purchaseVariantId);

            bundleBuilder(bundle_product, shutter, content, img)

            var custom_message;
            var custom_message_check = document.querySelectorAll('.price_btn--wrapper_' + purchaseVariantId + ' input[name="properties[custom_message]"')
            if (custom_message_check != undefined && custom_message_check[0]) {
                custom_message = custom_message_check[0].value
            } else {
                custom_message = ' '
            }

            (promo_item == null || promo_item == 0)? promo_item = 0 : promo_item = parseInt(document.querySelector("#promo_item").value);

            $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: { quantity: 1, id: purchaseVariantId, selling_plan: sellingPlanId, properties: {"bundle_product": "["+ bundle_product +"]", "custom_message": custom_message}},
                success: success()
            })
        }

        function addToCartGiftBox(e) {
            e.preventDefault();
            var purchaseVariantId = (e.target.dataset.purchaseId).toString();
            var custom_message = e.target.dataset.message;
            (promo_item == null || promo_item == 0)? promo_item = 0 : promo_item = parseInt(document.querySelector("#promo_item").value);

            $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: { quantity: 1, id: purchaseVariantId, properties: {"custom_message": custom_message}},
                success: success()
            })       
        }

        // Add to Cart Trigger Variables
        var AddToCartClass = 'add-to-cart-button';
        var AddToCartMultipleClass = 'add-to-cart-multiple';
        var MiniCartAddToCartClass = 'mini-cart-add-to-cart-button';
        var SampleAddToCartClass = 'add-to-cart-sample-button';
        var BundleAddToCartClass = 'add-to-cart-bundle-button';
        var SetsAddToCartClass = 'add-to-cart-sets-button';
        var GiftBoxAddToCartClass = 'add-gift-box';
        var GWPAddToCartClass = 'add-to-cart-gwp-button';

        // Add to Cart Triggers
        document.addEventListener('click', e => {
            if (!e.target) return;
            const classList = e.target.classList;
            const parent = e.target.parentNode;
            if (classList.contains(AddToCartClass) ||
                classList.contains(MiniCartAddToCartClass) ||
                classList.contains(SampleAddToCartClass) ||
                isShadeFinder() && parent && (
                    parent.classList.contains(AddToCartClass) ||
                    parent.parentNode && parent.parentNode.classList.contains(AddToCartClass)
            )) {
                addToCartRegular(e);
            } else if (classList.contains(GWPAddToCartClass)) {
                classList.remove('add-to-cart-gwp-button');
                addToCartRegular(e);
            } else if (
                classList.contains(AddToCartMultipleClass) ||
                isShadeFinder() && parent && parent.classList.contains(AddToCartMultipleClass)
            ) {
                addToCartMultiple(e);
            } else if (classList.contains(BundleAddToCartClass)) {
                addToCartBundle(e);
            } else if (classList.contains(SetsAddToCartClass)) {
                addToCartSets(e);
            } else if (classList.contains(GiftBoxAddToCartClass)) {
                addToCartGiftBox(e);
            }
        });

        document.addEventListener('click', function(e) {
            if ((e.target.classList.length == 0 && e.target.parentElement.classList.contains('mini-cart__remove')) || (e.target.tagName == 'svg' && e.target.parentNode.classList.contains('mini-cart__remove')))  {
                e.preventDefault()
                let dataId = e.target.parentElement.dataset.removeId
                let dataKey = e.target.parentElement.dataset.removeKey
                removeItem(dataId, dataKey)
                sampleCheck();
                holidayGWP();
                checkGiftBox();
            } else if (e.target.tagName == 'path' && e.target.parentElement.tagName == 'svg' && e.target.parentElement.parentElement.classList.contains('mini-cart__remove')) {
                e.preventDefault()
                let dataId = e.target.parentElement.parentElement.dataset.removeId
                let dataKey = e.target.parentElement.dataset.removeKey
                removeItem(dataId, dataKey)
                sampleCheck();
                holidayGWP();
                checkGiftBox();                
            } else if (e.target.classList.contains('mini-cart__remove')) {
                e.preventDefault()
                let dataId = e.target.dataset.removeId
                let dataKey = e.target.parentElement.dataset.removeKey
                removeItem(dataId, dataKey)
                sampleCheck();
                holidayGWP();
                checkGiftBox();
            } else if (e.target.classList.contains('mini-cart__remove_sample')) {
                let dataId = e.target.dataset.removeId
                var update = {[dataId]: 0};
                postUpdate(update);
                document.getElementsByClassName('mini-cart__wrapper')[0].scrollTop = 0;
                removeItem(dataId)
                sampleCheck();
                holidayGWP();
            } else if (e.target.classList.contains('mini-cart__remove_gwp')) {
                let dataId = e.target.dataset.removeId
                var update = {[dataId]: 0};
                postUpdate(update);
                document.getElementsByClassName('mini-cart__wrapper')[0].scrollTop = 0;
                removeItem(dataId)
                sampleCheck();
                holidayGWP();
            }
        });

        function removeItem(dataId, dataKey = null) {
            let isGWP = false;
            if (document.getElementsByClassName('product_' + dataId)[0].classList.contains('miniCart-Free-GWP')) {
                isGWP = true;
            }
            update = {}
            if (dataKey) {
                update[dataKey] = 0
            } else {
                update[dataId] = 0
            } 

            if (!isEmptyObject(update)){
                postUpdate(update);
                if (isGWP) {
                    let removedGwpIds = sessionStorage.getItem('removed_gwps');
                    if (!removedGwpIds) {
                        sessionStorage.setItem('removed_gwps', dataId);
                        console.log('gwp removed by user');
                    } else if (removedGwpIds && !removedGwpIds.includes(dataId)) {
                        sessionStorage.setItem('removed_gwps', `${removedGwpIds}${dataId}`);
                        console.log('gwp removed by user');
                    }
                }  
            }
        }

        function comparePriceCheck(purchaseVariantId) {
            var delComparePrice = document.getElementsByTagName('del');
            var spanComparePrice = document.getElementsByTagName('span');

            if (delComparePrice.length != 0) {
                for (i=0; i < delComparePrice.length; i++) {
                    if (delComparePrice[i].classList.contains('compare___' + purchaseVariantId)) {
                        Shopify[purchaseVariantId] = Number(delComparePrice[i].innerHTML.replace(/[$£]/g,'')) * 100
                    }
                }
            }
            if (spanComparePrice.length != 0) {
                for (i=0; i < spanComparePrice.length; i++) {
                    if (spanComparePrice[i].classList.contains('compare___' + purchaseVariantId)) {
                        Shopify[purchaseVariantId] = Number(spanComparePrice[i].innerHTML.replace(/[$£]/g,'')) * 100
                    }
                }
            }
        }

        function bundleBuilder(bundle_product, shutter, content, img) {
            for (i = 0; i < shutter.length; i++) {
                var dropDown = shutter[i].lastElementChild.children[0]
                dropDown.options[dropDown.selectedIndex];
                bundle_product.push(`{"name": "${shutter[i].nextElementSibling.value}", "value":"${dropDown.options[dropDown.selectedIndex].dataset.sku}", "variant": "${dropDown.options[dropDown.selectedIndex].value}", "quantity": "1", "calculated_bundle_price": "${(dropDown.options[dropDown.selectedIndex].dataset.price).replace(/\D/g,'')}", "product_title": "${content[i].innerText}", "product_image": "${img[i].src}", "product_option": "${(dropDown.options[dropDown.selectedIndex].innerText).replace(/\n/g, '')}"}`)
            }
            return [bundle_product]
        }
        
        function changeTag(node, tag) {
            const clone = createElement(tag)
            for (const attr of node.attributes) {
            clone.setAttributeNS(null, attr.name, attr.value)
            }
            while (node.firstChild) {
            clone.appendChild(node.firstChild)
            }
            node.replaceWith(clone)
            return clone
        }
        
        function createElement(tag) {
            if (tag === 'svg') {
            return document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            } else {
            return document.createElementNS('http://www.w3.org/1999/xhtml', tag)
            }
        }
        
        function sampleCheck() {
            var sampleIds = [];
            var removeClass = [];
            var cartProdIds = [];
            var miniCartSampleIds = [];
            var miniCartSamples = document.getElementsByClassName('mini-cart-sample-id');
            var prodQuantities = document.getElementsByClassName('productQuantity');
            let samplesLimit = document.querySelector('body')?.dataset.samplesLimitUs;
            if (countryIsoCode === 'GB') {
                samplesLimit = document.querySelector('body')?.dataset.samplesLimitUk;
            }
            for (i=0; i < prodQuantities.length; i++) {
                if (prodQuantities[i].getAttribute('value')  > 0) {
                    cartProdIds.push(prodQuantities[i].dataset.id)
                }
            }
            
            for (ii=0; ii < miniCartSamples.length; ii++) {
                miniCartSampleIds.push(miniCartSamples[ii].dataset.purchaseId)
            }
            
            sampleIds = cartProdIds.filter((element) => {
              return miniCartSampleIds.includes(element);
            });

            removeClass = miniCartSampleIds.filter(x => !sampleIds.includes(x));

            let total = document.getElementsByClassName('actp')[0].innerHTML,
                strippedTotal = parseFloat(total.substring(1, total.length).replace(/,/g, ''))

            if (strippedTotal == 0 && sampleIds > 0){
                var update={};
                for (i=0; i < sampleIds.length; i++) {
                    update[sampleIds[i]] = 0
                }
                if (!isEmptyObject(update)){
                    $.post('/cart/clear.js', null, null, 'json').then(function(){
                    });
                }
                document.getElementsByClassName('cartCount')[0].childNodes[3].innerHTML = 0;
                document.getElementsByClassName('cartCount')[1].childNodes[3].innerHTML = 0;
            }
            
            if (sampleIds.length == 0 && cartProdIds.length == 0) {           
                for (c=0; c < miniCartSamples.length; c++) {
                    miniCartSamples[c].innerHTML = "Add Sample"
                    miniCartSamples[c].disabled = true
                    miniCartSamples[c].classList.add('add-to-cart-sample-disable')
                    miniCartSamples[c].classList.remove('mini-cart__remove_sample','add-to-cart-sample-button')
                } 
            } else if (sampleIds.length == 0 && cartProdIds.length > 0) {            
                for (c=0; c < miniCartSamples.length; c++) {
                    miniCartSamples[c].innerHTML = "Add Sample"
                    miniCartSamples[c].disabled = false
                    miniCartSamples[c].classList.add('add-to-cart-sample-button')
                    miniCartSamples[c].classList.remove('mini-cart__remove_sample','add-to-cart-sample-disable')
                } 
            } else if (samplesLimit && sampleIds.length >= Number(samplesLimit)) {
                for (b=0; b < miniCartSamples.length; b++) {
                    for (e=0; e < sampleIds.length; e++){
                        if (miniCartSamples[b].dataset.purchaseId.includes(sampleIds[e])) {
                            miniCartSamples[b].innerHTML = "REMOVE"
                            miniCartSamples[b].disabled = false
                            miniCartSamples[b].classList.add('mini-cart__remove_sample')
                            miniCartSamples[b].classList.remove('add-to-cart-sample-button','add-to-cart-sample-disable');
                            break;
                        } else {
                            miniCartSamples[b].innerHTML = "Add Sample"
                            miniCartSamples[b].disabled = true
                            miniCartSamples[b].classList.add('add-to-cart-sample-disable')
                            miniCartSamples[b].classList.remove('mini-cart__remove_sample','add-to-cart-sample-button')
                        }
                    }
                }  
            } else if (samplesLimit && sampleIds.length < Number(samplesLimit)) {
                for (c=0; c < miniCartSamples.length; c++) {
                    for (e=0; e < sampleIds.length; e++) {
                        if (miniCartSamples[c].dataset.purchaseId.includes(sampleIds[e])) {
                            miniCartSamples[c].innerHTML = "REMOVE"
                            miniCartSamples[c].disabled = false
                            miniCartSamples[c].classList.add('mini-cart__remove_sample')
                            miniCartSamples[c].classList.remove('add-to-cart-sample-button','add-to-cart-sample-disable')
                            break;
                        } else {
                            miniCartSamples[c].innerHTML = "Add Sample"
                            miniCartSamples[c].disabled = false
                            miniCartSamples[c].classList.add('add-to-cart-sample-button')
                            miniCartSamples[c].classList.remove('mini-cart__remove_sample', 'add-to-cart-sample-disable')
                        }
                    }
                }
            }

            for (a=0; a < sampleIds.length; a++){
                if (document.getElementsByClassName('minicart-sample-variant-label_' + sampleIds[a])[0] != undefined) {
                    document.getElementsByClassName('minicart-sample-variant-label_' + sampleIds[a])[0].classList.add('minicart-select-product')
                }
            }

            for (b=0; b < removeClass.length; b++){
                if (document.getElementsByClassName('minicart-sample-variant-label_' + removeClass[b])[0] != undefined) {
                    document.getElementsByClassName('minicart-sample-variant-label_' + removeClass[b])[0].classList.remove('minicart-select-product')
                }
            }
        }

        function holidayGWP() {
            var update={};
            var gwpIds = [];
            let removeClass = [];
            var cartProdIds = [];
            var miniCartGWPIds = [];
            var miniCartGWPs = document.getElementsByClassName('mini-cart-gwp-id');
            var prodQuantities = document.getElementsByClassName('productQuantity');
            var GWPThreshold = document.getElementsByClassName('mini-cart__free-gwp')[0] && parseInt(document.getElementsByClassName('mini-cart__free-gwp')[0].dataset.gbth) || 0;
            var GWPPerOrder = document.getElementsByClassName('mini-cart__free-gwp')[0] && parseInt(document.getElementsByClassName('mini-cart__free-gwp')[0].dataset.gpo) || 0;
            for (i=0; i < prodQuantities.length; i++) {
                if (prodQuantities[i].getAttribute('value')  > 0) {
                    cartProdIds.push(prodQuantities[i].dataset.id)
                }
            }

            for (ii=0; ii < miniCartGWPs.length; ii++) {
                miniCartGWPIds.push(miniCartGWPs[ii].dataset.purchaseId)
            }

            gwpIds = cartProdIds.filter((element) => {
                return miniCartGWPIds.includes(element);
            });
            removeClass = miniCartGWPIds.filter(x => !gwpIds.includes(x));

            let total = document.getElementsByClassName('actp')[0].innerHTML,
                strippedTotal = parseFloat(total.substring(1, total.length).replace(/,/g, ''))
            /// Remove GWP when no paid product in cart ////
            if (strippedTotal == 0 && gwpIds > 0){

                for (i=0; i < gwpIds.length; i++) {
                    update[gwpIds[i]] = 0
                    // document.getElementsByClassName('product_' + sampleIds[i])[0].remove();
                }
                if (!isEmptyObject(update)){
                    $.post('/cart/clear.js', null, null, 'json').then(function(){
                        // console.log('cart cleared')
                    });
                }
                document.getElementsByClassName('cartCount')[0].childNodes[3].innerHTML = 0;
                document.getElementsByClassName('cartCount')[1].childNodes[3].innerHTML = 0;
            }
            /// remove GWP when cart amout is less than threshold ///
            if (strippedTotal < GWPThreshold  && gwpIds.length > 0){
                for (i=0; i < gwpIds.length; i++) {
                    update[gwpIds[i]] = 0
                    //document.getElementsByClassName('product_' + gwpIds[i])[0].remove();
                }
                if (!isEmptyObject(update)){
                    postUpdate(update)
                }
            }

            //// remove GWp when greater than gwb threashold /////
            if (GWPPerOrder < gwpIds.length) {
                update[gwpIds[0]] = 0
                if (!isEmptyObject(update)) {
                    postUpdate(update)
                }
            }

            /// allow only 1 GWP quantity ///
            for (i=0; i < gwpIds.length; i++) {
                var checkQuantity = document.getElementById('quantity_' + gwpIds[i]);

                if(checkQuantity) {
                    var update={};
                    if (checkQuantity.value > 1) {
                        update[gwpIds[i]] = 1
                    }
                    if (!isEmptyObject(update)) {
                        postUpdate(update)
                    }
                }
            }


            if (gwpIds.length == 0 && cartProdIds.length == 0) {
                for (c=0; c < miniCartGWPs.length; c++) {
                    (changeTag(miniCartGWPs[c], 'u').outerHTML)
                    var f = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".disableOverlay")
                    f[0].style.display = "block";
                    miniCartGWPs[c].innerHTML = "Add Gift"
                    miniCartGWPs[c].classList.add('add-to-cart-gwp-button')
                    miniCartGWPs[c].classList.remove('mini-cart__remove_gwp')

                    var GwpImage = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".gwp-img")
                    GwpImage[0].classList.remove('add-to-cart-gwp-button')
                    GwpImage[0].classList.remove('mini-cart__remove_gwp')

                    var GwpTitle = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftHeading")
                    GwpTitle[0].classList.add('add-to-cart-gwp-button')
                    GwpTitle[0].classList.remove('mini-cart__remove_gwp')

                    var GwpDesc = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftTxt")
                    GwpDesc[0].classList.add('add-to-cart-gwp-button')
                    GwpDesc[0].classList.remove('mini-cart__remove_gwp')
                }
            } else if (gwpIds.length == 0 && cartProdIds.length > 0 && strippedTotal >= GWPThreshold) {
                for (c=0; c < miniCartGWPs.length; c++) {
                    (changeTag(miniCartGWPs[c], 'button').outerHTML)
                    var f = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".disableOverlay")
                    f[0].style.display = "none";
                    miniCartGWPs[c].innerHTML = "Add Gift"
                    miniCartGWPs[c].classList.add('add-to-cart-gwp-button')
                    miniCartGWPs[c].classList.remove('mini-cart__remove_gwp')

                    var GwpImage = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".gwp-img")
                    GwpImage[0].classList.add('add-to-cart-gwp-button')
                    GwpImage[0].classList.remove('mini-cart__remove_gwp')

                    var GwpTitle = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftHeading")
                    GwpTitle[0].classList.add('add-to-cart-gwp-button')
                    GwpTitle[0].classList.remove('mini-cart__remove_gwp')

                    var GwpDesc = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftTxt")
                    GwpDesc[0].classList.add('add-to-cart-gwp-button')
                    GwpDesc[0].classList.remove('mini-cart__remove_gwp')
                }
            } else if (gwpIds.length == 0 && strippedTotal <= GWPThreshold) {
                for (c=0; c < miniCartGWPs.length; c++) {
                    (changeTag(miniCartGWPs[c], 'u').outerHTML)
                    var f = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".disableOverlay")
                    f[0].style.display = "block";
                    miniCartGWPs[c].innerHTML = "Add Gift"
                    miniCartGWPs[c].classList.add('add-to-cart-gwp-button')
                    miniCartGWPs[c].classList.remove('mini-cart__remove_gwp')

                    var GwpImage = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".gwp-img")
                    GwpImage[0].classList.remove('add-to-cart-gwp-button')
                    GwpImage[0].classList.remove('mini-cart__remove_gwp')

                    var GwpTitle = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftHeading")
                    GwpTitle[0].classList.add('add-to-cart-gwp-button')
                    GwpTitle[0].classList.remove('mini-cart__remove_gwp')

                    var GwpDesc = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftTxt")
                    GwpDesc[0].classList.add('add-to-cart-gwp-button')
                    GwpDesc[0].classList.remove('mini-cart__remove_gwp')
                }

            } else if (gwpIds.length > GWPPerOrder - 1  && strippedTotal >= GWPThreshold) {
                for (b=0; b < miniCartGWPs.length; b++) {
                    (changeTag(miniCartGWPs[b], 'u').outerHTML)
                    var f = miniCartGWPs[b].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".disableOverlay")
                    f[0].style.display = "block";

                    var GwpImage = miniCartGWPs[b].parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".gwp-img")
                    GwpImage[0].classList.remove('mini-cart__remove_gwp')
                    GwpImage[0].classList.remove('add-to-cart-gwp-button')

                    for(e=0; e < gwpIds.length; e++){
                        if(miniCartGWPs[b].dataset.purchaseId.includes(gwpIds[e])) {
                            (changeTag(miniCartGWPs[b], 'button').outerHTML)
                            var f = miniCartGWPs[b].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".disableOverlay")
                            f[0].style.display = "none";
                            miniCartGWPs[b].innerHTML = "Remove"
                            miniCartGWPs[b].classList.add('mini-cart__remove_gwp')
                            miniCartGWPs[b].classList.remove('add-to-cart-gwp-button')

                            var GwpImage = miniCartGWPs[b].parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".gwp-img")
                            GwpImage[0].classList.add('mini-cart__remove_gwp')
                            GwpImage[0].classList.remove('add-to-cart-gwp-button')

                            var GwpTitle = miniCartGWPs[b].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftHeading")
                            GwpTitle[0].classList.add('mini-cart__remove_gwp')
                            GwpTitle[0].classList.remove('add-to-cart-gwp-button')

                            var GwpDesc = miniCartGWPs[b].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftTxt")
                            GwpDesc[0].classList.add('mini-cart__remove_gwp')
                            GwpDesc[0].classList.remove('add-to-cart-gwp-button')
                        }
                    }
                }
            } else if (gwpIds.length <= GWPPerOrder - 1 && strippedTotal >= GWPThreshold) {
                for (c=0; c < miniCartGWPs.length; c++) {
                    (changeTag(miniCartGWPs[c], 'button').outerHTML)
                    for(e=0; e < gwpIds.length; e++){
                        if (!miniCartGWPs[c].dataset.purchaseId.includes(gwpIds[e])) {
                            (changeTag(miniCartGWPs[c], 'button').outerHTML)
                            var f = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".disableOverlay")
                            f[0].style.display = "none";
                            miniCartGWPs[c].innerHTML = "Add Gift"
                            miniCartGWPs[c].classList.add('add-to-cart-gwp-button')
                            miniCartGWPs[c].classList.remove('mini-cart__remove_gwp')

                            var GwpImage = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".gwp-img")
                            GwpImage[0].classList.add('add-to-cart-gwp-button')
                            GwpImage[0].classList.remove('mini-cart__remove_gwp')

                            var GwpTitle = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftHeading")
                            GwpTitle[0].classList.add('add-to-cart-gwp-button')
                            GwpTitle[0].classList.remove('mini-cart__remove_gwp')

                            var GwpDesc = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftTxt")
                            GwpDesc[0].classList.add('add-to-cart-gwp-button')
                            GwpDesc[0].classList.remove('mini-cart__remove_gwp')
                        }

                        if (miniCartGWPs[c].dataset.purchaseId.includes(gwpIds[e])) {
                            (changeTag(miniCartGWPs[c], 'button').outerHTML)
                            var f = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".disableOverlay")
                            f[0].style.display = "none";
                            miniCartGWPs[c].innerHTML = "Remove"
                            miniCartGWPs[c].classList.add('mini-cart__remove_gwp')
                            miniCartGWPs[c].classList.remove('add-to-cart-gwp-button')

                            var GwpImage = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".gwp-img")
                            GwpImage[0].classList.add('mini-cart__remove_gwp')
                            GwpImage[0].classList.remove('add-to-cart-gwp-button')

                            var GwpTitle = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftHeading")
                            GwpTitle[0].classList.add('mini-cart__remove_gwp')
                            GwpTitle[0].classList.remove('add-to-cart-gwp-button')

                            var GwpDesc = miniCartGWPs[c].parentElement.parentElement.parentElement.parentElement.querySelectorAll(".freeGiftTxt")
                            GwpDesc[0].classList.add('mini-cart__remove_gwp')
                            GwpDesc[0].classList.remove('add-to-cart-gwp-button')
                        }
                    }
                }
            }
        }
        
        function isEmptyObject(obj) {
            if (typeof obj === 'object' && obj != null && Object.keys(obj).length !== 0) {
                return false;
            } else {
                return true;
            }
        }

        function success(limitId = false) {
            setTimeout(() => {
                    let updatedCart;
                    let cartItems;
                    fetch('/cart.js')
                .then((response) => response.json())
                .then((data) => {return updatedCart = data})
                .then(function() {
                    const nullImage = '//cdn.shopify.com/shopifycloud/shopify/assets/no-image-100-c91dd4bdb56513f2cbf4fc15436ca35e9d4ecd014546c8d421b1aece861dfecf_85x@2x.gif'
                    let cart_list = [];
                    let productHandles = [];
                    let productIds = [];
                    for (i=0; i < updatedCart.items.length; i++) {
                    updatedCart.items[i].image = updatedCart.items[i].image.replace(/(\.[\w\d?=_-]+)$/i, '_small$1');

                    // limit minicart quantity per line item to 6
                    if (updatedCart.items[i].quantity > 6 && !updatedCart.items[i].selling_plan_allocation) {
                        var update = {[updatedCart.items[i].key]: 6};
                        postUpdate(update, updatedCart.items[i].variant_id);
                        return null;
                    }
                    if (updatedCart.items[i].selling_plan_allocation != null && updatedCart.items[i].quantity > 1) {
                        var update = {[updatedCart.items[i].key]: 1};
                        postUpdate(update);
                        return null;
                    }
                    if (!(isEmptyObject(updatedCart.items[i].properties))){
                        if(updatedCart.items[i].properties.bundle_product != undefined || updatedCart.items[i].properties.bundle_product != null){
                            updatedCart.items[i].properties.bundle_product = updatedCart.items[i].properties.bundle_product.replace(/\s+/g, ' ').trim()
                            updatedCart.items[i].properties.bundle_product = JSON.parse(updatedCart.items[i].properties.bundle_product)
                        }
                    }
                    productHandles.push(updatedCart.items[i].handle)
                    productIds.push(String(updatedCart.items[i].product_id))
                    var GWP = (updatedCart.items[i].variant_id == promo_item)
                    var buyXgetY_GWP = (updatedCart.items[i].variant_id == buyXgetY_promo_item)
                    var sample = updatedCart.items[i].product_type.includes("Sample Product")
                    var holidayGwp = updatedCart.items[i].product_type.includes("Holiday GWP")
                    var giftboxDiv = document.getElementsByClassName('add-gift-box')[0];

                    if (giftboxDiv) {
                        var giftBoxPurchaseId = parseInt(giftboxDiv.dataset.purchaseId);
                    } else {
                        var giftBoxPurchaseId = 0;
                    }
                        cart_list.push(`
                                <div class="mini-cart__item product_${updatedCart.items[i].id} ${GWP || buyXgetY_GWP || sample || holidayGwp ? `miniCart-Free-GWP` : ``}" data-title="${updatedCart.items[i].variant_title}" data-product-type="${updatedCart.items[i].product_type}" data-id="${updatedCart.items[i].id}">
                                    <a href="#" title="Remove" class="mini-cart__remove mini-cart__remove__${updatedCart.items[i].id}" data-remove-id="${updatedCart.items[i].id}" data-remove-key="${updatedCart.items[i].key}" aria-label="remove from cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
                                    <path d="M19.85 19.77c-.112.138-.277.222-.454.23-.178.007-.35-.062-.472-.19L9.99 10.877 1.058 19.81c-.155.16-.383.223-.598.166-.215-.056-.383-.224-.44-.439-.056-.215.007-.444.167-.598l8.932-8.933L.187 1.073C.027.918-.036.69.02.475.077.26.245.092.46.035c.215-.056.443.007.598.167l8.933 8.932L18.924.202c.148-.163.372-.235.587-.188.216.047.39.206.457.416s-4.559 5.015-4.707 5.178l4.534-4.535-8.933 8.933 8.933 8.933c.23.22.254.581.055.83z" transform="translate(-20 -160) translate(0 140) translate(20.002 20.01)"></path>
                                    </svg>
                                    </a>
                                    <div class="mincart-product-thumb ${GWP || buyXgetY_GWP ? `giftthumb` : ``}">
                                    ${GWP || buyXgetY_GWP || sample || holidayGwp
                                    ? `<img src="${updatedCart.items[i].image}" alt="${updatedCart.items[i].product_title}" fetchpriority="low" loading="lazy">`
                                    : `
                                    ${updatedCart.items[i].id == giftBoxPurchaseId && giftboxDiv != undefined
                                        ? `<img src="${updatedCart.items[i].image}" alt="${updatedCart.items[i].product_title}" fetchpriority="low" loading="lazy">`
                                        : `
                                            <a href="${updatedCart.items[i].url}" class="block-link-no-deco urls-of-products-in-cart ids-of-products-in-cart" data-product-id="${updatedCart.items[i].product_id}">
                                                <img src="${updatedCart.items[i].image}" alt="${updatedCart.items[i].product_title}" fetchpriority="low" loading="lazy">
                                            </a>
                                        `
                                    }
                                    `
                                    }
                                    </div>
                                    <div class="mini-cart__info">
                                    <div class="mini-cart_content">
                                    ${GWP || buyXgetY_GWP || sample || holidayGwp ? `<span class="block-link-no-deco"><h4>${updatedCart.items[i].product_title}</h4>${updatedCart.items[i].variant_title ? `<p>${updatedCart.items[i].variant_title}</p>` : ``}</span>
                                    <span class="price price_${updatedCart.items[i].id}"><span class="free-gifts__free">Free</span></span>` : `${updatedCart.items[i].id == giftBoxPurchaseId && giftboxDiv != undefined ? `<span class="block-link-no-deco"><h4>${updatedCart.items[i].product_title}</h4></span><span class="fs">${updatedCart.items[i].properties.custom_message}</span><span class="price price_${updatedCart.items[i].id}">${(Shopify.formatMoney(updatedCart.items[i].line_price))}</span>` : `${updatedCart.items[i].variant_title == null ? `<a href="${updatedCart.items[i].url}" class="block-link-no-deco urls-of-products-in-cart ids-of-products-in-cart" data-product-id="${updatedCart.items[i].product_id}"><h4>${updatedCart.items[i].title}</h4></a>
                                    ${updatedCart.items[i].selling_plan_allocation != null && countryIsoCode !== 'GB' ? `<span class="rc-selling-plan">${updatedCart.items[i].selling_plan_allocation.selling_plan.name}</span>` : ``}
                                    <span class="price price_${updatedCart.items[i].id}"> ${updatedCart.items[i].original_line_price != updatedCart.items[i].final_line_price ? `<span class="sr-only">Original price: </span><span class="sale sale_${updatedCart.items[i].id}">${Shopify.formatMoney(updatedCart.items[i].original_line_price)}</span>` : 
                                    `${Object.keys(Shopify).includes((updatedCart.items[i].id).toString()) ? `<span class="sr-only">Original price: </span><span class="sale sale_${updatedCart.items[i].id}">${Shopify.formatMoney((Shopify[(updatedCart.items[i].id)]) * updatedCart.items[i].quantity)}</span>` : 
                                    `${updatedCart.items[i].original_price > updatedCart.items[i].final_price ? `<span class="sr-only">Original price: </span><span class="sale sale_${updatedCart.items[i].id}">${Shopify.formatMoney(updatedCart.items[i].original_line_price)}</span>` : 
                                    `` }` }`} 
                                    <span class="sr-only">Current price: </span>${(Shopify.formatMoney(updatedCart.items[i].line_price))} 
                                    ${updatedCart.items[i].selling_plan_allocation != null && countryIsoCode !== 'GB' ? `(${updatedCart.items[i].selling_plan_allocation.selling_plan.price_adjustments[0].value}% OFF)` : 
                                    ''}</span>` : 
                                    `<a href="${updatedCart.items[i].url}" class="block-link-no-deco urls-of-products-in-cart ids-of-products-in-cart" data-product-id="${updatedCart.items[i].product_id}"><h4>${updatedCart.items[i].product_title}</h4></a><p>${updatedCart.items[i].variant_title}</p>${updatedCart.items[i].selling_plan_allocation != null && countryIsoCode !== 'GB' ? `<span class="rc-selling-plan">${updatedCart.items[i].selling_plan_allocation.selling_plan.name}</span>` : 
                                    ``}
                                    <span class="price price_${updatedCart.items[i].id}"> ${updatedCart.items[i].original_line_price != updatedCart.items[i].final_line_price ? `<span class="sr-only">Original price: </span><span class="sale sale_${updatedCart.items[i].id}">${Shopify.formatMoney(updatedCart.items[i].original_line_price)}</span>` : 
                                    `${Object.keys(Shopify).includes((updatedCart.items[i].id).toString()) ? `<span class="sr-only">Original price: </span><span class="sale sale_${updatedCart.items[i].id}">${Shopify.formatMoney((Shopify[(updatedCart.items[i].id)]) * updatedCart.items[i].quantity)}</span>` : 
                                    `${updatedCart.items[i].original_price > updatedCart.items[i].final_price ? `<span class="sr-only">Original price: </span><span class="sale sale_${updatedCart.items[i].id}">${Shopify.formatMoney(updatedCart.items[i].original_line_price)}</span>` : 
                                    `` }` }`} 
                                    <span class="sr-only">Current price: </span>${(Shopify.formatMoney(updatedCart.items[i].line_price))} 
                                    ${updatedCart.items[i].selling_plan_allocation != null && countryIsoCode !== 'GB' ? `(${updatedCart.items[i].selling_plan_allocation.selling_plan.price_adjustments[0].value}% OFF)` : 
                                    ''}</span>`}`}`}
                                    </div>
                                    <div class="mini-cart__qty-wrapper" ${GWP || buyXgetY_GWP || holidayGwp || (updatedCart.items[i].id == giftBoxPurchaseId && giftboxDiv != undefined) || (updatedCart.items[i].selling_plan_allocation != null) || !(isEmptyObject(updatedCart.items[i].properties)) && updatedCart.items[i].properties.bundle_product != undefined ? `style="visibility: hidden;` : ``}">
                                    <div class="mini-cart__qty">
                                    <button type="button" class="less less_${updatedCart.items[i].id}" aria-label="Quantity minus" ${updatedCart.items[i].product_type.includes("Sample Product") || updatedCart.items[i].product_type.includes("Holiday GWP") || updatedCart.items[i].variant_id == special_sku ? `style="display:none" disabled` : ``}>-</button>
                                    <input readonly="" id="quantity_${updatedCart.items[i].id}" name="updates[${updatedCart.items[i].key}]" data-id="${updatedCart.items[i].id}" data-key="${updatedCart.items[i].key}" class="quantity quantity_${updatedCart.items[i].id} productQuantity"  ${updatedCart.items[i].product_type.includes("Sample Product") || updatedCart.items[i].variant_id == special_sku ? `value="1"` : `value="${updatedCart.items[i].quantity}"`} data-loop="1" ${updatedCart.items[i].original_price > updatedCart.items[i].final_price ? `data-sale-price='${updatedCart.items[i].original_price/100}' data-price="${updatedCart.items[i].final_line_price/100}"`: `${Object.keys(Shopify).includes((updatedCart.items[i].id).toString()) && (Shopify[(updatedCart.items[i].id)]) > updatedCart.items[i].final_price ? `data-sale-price='${Shopify[(updatedCart.items[i].id)]}' data-price="${updatedCart.items[i].final_line_price/100}"` : `data-price="${updatedCart.items[i].final_line_price/100}"` }` } aria-label="quantity">
                                    <button type="button" class="more more_${updatedCart.items[i].id} ${updatedCart.items[i].quantity > 5 && 'disabled'}" aria-label="Quantity plus" ${updatedCart.items[i].product_type.includes("Sample Product")|| updatedCart.items[i].product_type.includes("Holiday GWP")|| updatedCart.items[i].variant_id == special_sku ? `style="display:none" disabled` : ``}>+</button>
                                    </div>
                                    ${limitId && limitId == updatedCart.items[i].variant_id ? `<div class="limit_order">Limit 6 per order</div>` : ``}
                                    </div>
                                    </div>
                                    ${(!(isEmptyObject(updatedCart.items[i].properties)) && updatedCart.items[i].properties.bundle_product != undefined) ? `<div class="bundleItemList">${updatedCart.items[i].properties.bundle_product.map(({calculated_bundle_price, name, product_image, product_option, product_title, quantity, variant}) => `
                                    <div class="bundle-cart__item" data-title="${product_title}"><div class="bundleItemImage"><img src="${product_image == ''? nullImage : product_image}" alt="${product_title}" fetchpriority="low" loading="lazy"></div><h4>${product_title}</h4>${product_option.includes("Default Title")? `` : `<p class="bundle-variant-info">${product_option}</p>`}</div>
                                    `.trim()).join('')}</div>`: ''}
                                    ${(!(isEmptyObject(updatedCart.items[i].properties)) && updatedCart.items[i].properties.bundle_product != undefined && updatedCart.items[i].properties.custom_message != undefined) ? `<div class="bundleItemCustomMessage">${updatedCart.items[i].properties.custom_message}</div>`: ''}
                                </div>`);
                    };
                    document.getElementsByClassName('cartCount')[0].childNodes[3].innerHTML = (updatedCart.item_count).toString();
                    document.getElementsByClassName('cartCount')[1].childNodes[3].innerHTML = (updatedCart.item_count).toString();
                    cartItems = cart_list
                    productHandlesInCart = productHandles
                    productIdsInCart = productIds
                    return [cartItems, productHandlesInCart, productIdsInCart];
                })
                .then(function() {
                    if (cartItems && cartItems !== undefined) {
                        var prices = document.getElementsByClassName('productQuantity');

                        document.getElementById("mini_cart_form").innerHTML = cartItems.join('');
    
                        document.getElementsByClassName('actp')[0].innerHTML = Shopify.formatMoney(updatedCart.total_price)
                        document.getElementById('miniCart').classList.add("open");
                        document.getElementById('pageWrapper').classList.add("open");
                        document.getElementsByClassName('mini-cart__wrapper')[0].scrollTop = 0;
    
                        if (buyXgetY_gwp_enabled){
                            buyXgetY_GWPCheck(productIdsInCart, buyXgetY_eligibleproductIdsArrays);
                            strippedInCartIdsArrays = productIdsInCart
                        }
                        if (gwp_single_tier_enabled) {
                            GWPCheck(updatedCart.total_price/100);
                            promoTotal = updatedCart.total_price/100;
                        }
                    }
                })
                .then(function(){
                    const discoverySetVarId = special_sku;
                    activeVarId = parseInt(document.getElementsByClassName('add-to-cart-button')[0].dataset.purchaseId);
                    
                    if (activeVarId == discoverySetVarId) {
                    var productId = document.getElementsByClassName('mini-cart__item')
                        for (i=0; i < productId.length; i++) {
                            if(productId[i].dataset.id == discoverySetVarId) {
                                const discoveryAddToCart = document.querySelectorAll(`input.add_btn.discovery.add-to-cart-button`);
                                for (ii=0; ii < discoveryAddToCart.length; ii++) {
                                    discoveryAddToCart[ii].setAttribute("disabled", "");
                                }
                            }
                        }
                    }
                })
                .then(function(){sampleCheck()})
                .then(function(){holidayGWP()})
                .then(function(){checkGiftBox()});
            }, 700)
        }

        const open = window.XMLHttpRequest.prototype.open;


        function openReplacement() {
          this.addEventListener("load", function () {
            if (
              [
                "/cart/add.js",
                "/cart/update.js",
                "/cart/change.js",
                "/cart/clear.js",
              ].includes(this._url)
            ) {
                    sampleCheck();
                    holidayGWP();
                    setTimeout(() => {
                        calculateCartSubtotal();
                    }, 1500);
            }
          });
          return open.apply(this, arguments);
        }

        window.XMLHttpRequest.prototype.open = openReplacement;

        function checkGiftBox() {
            let total = document.getElementsByClassName('actp')[0].innerHTML,
                strippedTotal = parseFloat(total.substring(1, total.length).replace(/,/g, ''));
            var gift_cart_product =  document.getElementsByClassName('gift_card_product')[0];

                if (gift_cart_product) {
                    var gb_th = gift_cart_product.dataset.gbth;
                    var gbPurchaseId = document.getElementsByClassName('add-gift-box')[0].dataset.purchaseId;

                    if (strippedTotal >= Number(gb_th)) {
                        if (document.getElementsByClassName('product_' + gbPurchaseId)[0] == undefined) {
                            gift_cart_product.classList.remove('hide');
                            gift_cart_product.style.display = 'flex';
                        } else if (document.getElementsByClassName('product_' + gbPurchaseId).length == 0) {
                            gift_cart_product.classList.remove('hide');
                            gift_cart_product.style.display = 'flex';
                        } else if (document.getElementsByClassName('product_' + gbPurchaseId).length > 0) {
                            gift_cart_product.classList.add('hide');
                            gift_cart_product.style.display = 'none';
                        } else {
                            gift_cart_product.classList.add('hide');
                            gift_cart_product.style.display = 'none';
                        }
                    } else {
                        gift_cart_product.classList.add('hide');
                        gift_cart_product.style.display = 'none';
                        if (document.getElementsByClassName('product_' + gbPurchaseId).length > 0) {
                            removeItem(gbPurchaseId);
                        }
                    }
                }
            }

        function calculateCartSubtotal() {

          
          // console.log(Shopify.formatMoney(productTotals * 100),'helloehllo')
            var prices = document.getElementsByClassName('productQuantity');
            var productTotals = 0;
            var cartTotal = document.getElementsByClassName('actp')[0].innerHTML;
            for (i=0; i < prices.length; i++) {
                productTotals += (parseFloat(document.getElementsByClassName('quantity')[i].dataset.price) );
            }
            cartTotal = Shopify.formatMoney(productTotals * 100);

          //away text code 
          let awayText = document.querySelector(".away_text");
          let subTotalText = parseInt(cartTotal.split('$')[1]) || 0;
          let awayTextContainer = document.querySelector(".away_text_container");
          let myamount =  75 - subTotalText;

          if(myamount >0){
            awayTextContainer.innerHTML = `
              You're $<span class='away_text'>
                     ${ myamount}
                   </span>  away from choosing your free gift.`
      
          }
          else{
            awayTextContainer.innerHTML =`
           Eligible for gift <span class='away_text'>
                    
                   </span>
            `
          }
          
          console.log(awayText,'awayText')
          console.log(parseInt(cartTotal.split('$')[1]),'cartTotal')
            document.getElementsByClassName('actp')[0].innerHTML = cartTotal;
            document.getElementById('minicart-afterpay-price').innerHTML = Shopify.formatMoney((productTotals * 100)/4);

            let total = document.getElementsByClassName('actp')[0].innerHTML,
                strippedTotal = parseFloat(total.substring(1, total.length).replace(/,/g, '')),
                threshold = parseInt(document.getElementsByClassName('mini-cart__shipping')[0].dataset.shipping)/100 || 0,
                percent = ((strippedTotal/threshold) * 100),
                amountLeft = (threshold - strippedTotal).toFixed(2),
                currSymbol = '$',
                emptyCartMsg = '<span class="free emptyPadding" >'+document.getElementById('minicart_free_msg').innerHTML+'</span>';
                moduleText = document.querySelector('.holiday-gwp-module .mini-cart__gwp');

                amountLeft = amountLeft.toString().replace(/\.00$/,'');
                threshold = threshold.toString().replace(/\.00$/,'');

            if (countryIsoCode === 'GB') {
                currSymbol = '£';
            }

            $(document).on('click', '#minicart-holiday-gwp .flexObject', function(el){
              let total = document.getElementsByClassName('actp')[0].innerHTML,
                strippedTotal = parseFloat(total.substring(1, total.length).replace(/,/g, '')),
                threshold = parseInt(document.getElementsByClassName('mini-cart__shipping')[0].dataset.shipping)/100 || 0;

                threshold = threshold.toString().replace(/\.00$/,'');

              if(strippedTotal < threshold) {
                $(this).find('.error_state_module').addClass('show_temp');
                $(this).find('.disableOverlay').addClass('show_temp');
                setTimeout(() => {
                  $(this).find('.error_state_module').removeClass('show_temp');
                  $(this).find('.disableOverlay').removeClass('show_temp');
                }, "2000")
              }
            });

            if (strippedTotal >= threshold) {
                document.getElementsByClassName('mini-cart__shipping')[0].innerHTML = `<span class="free">`+document.getElementById('minicart_reached_msg').innerHTML.replace('[threshold_amount]', currSymbol + threshold) +` </span><div class="mini-cart__shipping-progress"><div style="width: 100%;"></div></div>`;
                if (moduleText) {
                    moduleText.innerHTML = `<span class="free">`+document.getElementById('module_reached_msg').innerHTML.replace('[threshold_amount]', currSymbol + threshold) +`</span>`;
                }
            } else {
                document.getElementsByClassName('mini-cart__shipping')[0].innerHTML = `<span class="free">`+document.getElementById('minicart_away_msg').innerHTML.replace('[threshold_amount]', currSymbol + amountLeft) +` </span><div class="mini-cart__shipping-progress"><div style="width: ${percent}%;"></div></div>`;
                if (moduleText) {
                    moduleText.innerHTML = `<span class="free">`+document.getElementById('module_away_msg').innerHTML.replace('[away_amount]', currSymbol + amountLeft).replace('[threshold_amount]', currSymbol + threshold) +`</span>`;
                }
            }

            if (strippedTotal == 0) {
                if (moduleText) {
                    moduleText.innerHTML = `<span class="free">`+document.getElementById('module_away_msg').innerHTML.replace('[away_amount]', currSymbol + threshold).replace('[threshold_amount]', currSymbol + threshold) +`</span>`;
                }
                document.getElementsByClassName('mini-cart__shipping')[0].innerHTML = emptyCartMsg + '<div class="mini-cart__shipping-progress"><div style="width: 0;"></div>';
                if (document.getElementsByClassName('gift_card_product')[0] != undefined) {
                    document.getElementsByClassName('gift_card_product')[0].style.display = 'none';
                }
                var update={};
                var prodIdsInCart = [];
                for (i=0; i < prices.length; i++) {
                    if (prices[i].getAttribute('value') != 0){
                        update[prices[i].dataset.id] = 0;
                        prodIdsInCart.push(prices[i].dataset.id);
                        prices[i].setAttribute('value', 0);
                    }
                }
                for (i=0; i < prodIdsInCart.length; i++){
                    document.getElementsByClassName('product_' + prodIdsInCart[i])[0].style.display = 'none';
                }
                if (!isEmptyObject(update)){
                        $.post('/cart/clear.js', null, null, 'json').then(function(){
                            for (i=0; i < prodIdsInCart.length; i++) {
                                document.getElementsByClassName('product_' + prodIdsInCart[i])[0].remove();
                            }                        
                        });

                }
                document.getElementsByClassName('cartCount')[0].childNodes[3].innerHTML = 0;
                document.getElementsByClassName('cartCount')[1].childNodes[3].innerHTML = 0;
            }
            setTimeout(() => {
                if (buyXgetY_gwp_enabled) {
                    var productIdsOfProductsInCart = document.getElementsByClassName('ids-of-products-in-cart');
                    productIdsOfProductsInCartArray = [];
                    if (productIdsOfProductsInCart != undefined ) {
                        for (i=0; i <= productIdsOfProductsInCart.length; i++) {
                            if (i == productIdsOfProductsInCart.length) {
                                buyXgetY_GWPCheck(productIdsOfProductsInCartArray, buyXgetY_eligibleproductIdsArrays);
                                strippedInCartIdsArrays = productIdsOfProductsInCartArray;
                            } else {
                                productIdsOfProductsInCartArray.push(String(productIdsOfProductsInCart[i].dataset.productId));
                            }
                        }
                    }
                }

                if (gwp_single_tier_enabled) {
                    GWPCheck(productTotals);
                    promoTotal = productTotals;
                }
            }, 1000);

            var numberOfItemsInCart = document.getElementsByClassName('productQuantity');
            var numberOfItemInCartTotals = 0;
            for (i=0; i < numberOfItemsInCart.length; i++){
                numberOfItemInCartTotals += parseInt(numberOfItemsInCart[i].value);
            }
            document.getElementsByClassName('cartCount')[0].childNodes[3].innerHTML = numberOfItemInCartTotals;
            document.getElementsByClassName('cartCount')[1].childNodes[3].innerHTML = numberOfItemInCartTotals;
            if (buyXgetY_gwp_enabled && gwp_single_tier_enabled) {
                return [strippedInCartIdsArrays, promoTotal];
            } else if (buyXgetY_gwp_enabled) {
                return [strippedInCartIdsArrays];
            } else if (gwp_single_tier_enabled) {
                return [promoTotal];
            }
        }

        function postUpdate(data, limitId = false) {
            $.ajax({
                type: 'POST',
                url: '/cart/update.js',
                dataType: 'json',
                data: {updates:data},
                success: success(limitId)
            })
        }

        sampleCheck();
        holidayGWP();
        calculateCartSubtotal();
        checkGiftBox();

        /*============================================================================
                SHOP COLLECTION functionality
         ==============================================================================*/

        $(document).on('click','.product-form__variants', function(e){
            var variant_price =  $(this).find(':selected').attr('data-price') ;
            var product_id =  $(this).find(':selected').attr('data-product-id') ;
            var variant_id =  $(this).val() ;
            $('#variant_id_'+product_id).val(variant_id);
            $('#variant_price_'+product_id).html(variant_price);

        });

        $(document).on('click','.productOption', function(e){
            var variant_value   =  ($(this).find(':checked').val()) ?  $(this).find(':checked').val() : $(this).val();
            var product_id      =  ($(this).find(':checked').attr('data-pid')) ? $(this).find(':checked').attr('data-pid') : $(this).attr('data-pid');
            var variant_type    =  ($(this).find(':checked').attr('data-type')) ? $(this).find(':checked').attr('data-type') : $(this).attr('name');
            var variant_id      =  ($(this).find(':checked').attr('id')) ? $(this).find(':checked').attr('id') : $(this).attr('id');
            var variant_cno     =  ($(this).find(':checked').attr('data-cno')) ? $(this).find(':checked').attr('data-cno') : $(this).attr('data-cno');
            var image_vId       =  ($(this).find(':checked').attr('data-vid')) ? $(this).find(':checked').attr('data-vid') : $(this).attr('data-vid');

            /// Change image when click on variant ///
            if(product_id){
                var splitArray = product_id.split('-');
                $('.variant_imge_'+splitArray[0]).hide();
                $('.'+image_vId).show();
            }
            /// End change image when click on variant ///

            var v1 = '';
            var v2 = '';
            var combineStr = '';
            if(variant_cno){
                $('#scroll-range_'+product_id).val(variant_cno);
            }

            $('#variant_info_'+product_id).html($('#color-'+variant_id).html());
            if( $('#p_t_v_'+product_id).val() == 1)
            {
                combineStr = variant_value;
            }else{
                $('#variant_info_'+product_id).html($('#color-'+variant_id).html());

                if(variant_type === 'Color')
                {
                    v2 = ($('input[class="Size-'+product_id+'"]:checked').val()) ? $('input[class="Size-'+product_id+'"]:checked').val() : $('#Size'+'-'+product_id).val();
                    v1 = variant_value;
                }else if(variant_type === 'Size')
                {
                    v2 = variant_value ;
                    v1 = $('input[class="Color-'+product_id+'"]:checked').val();
                }
                combineStr = v1+' / '+v2;
            }

            var isProductAvailable = false;
            var isProductComingSoon = false;
            var isProductSoldOut = false;
            var isProductUnavailable = false;
            var productPrice = '';
            var productVariantId = '';

            $(this).parent().closest('.shutter').find('.cart_actions').find('option').each(function(){
                if ($(this).attr('data-variant-title') === combineStr+' - Coming Soon') {
                    isProductComingSoon = true;
                } else if ($(this).attr('data-variant-title') === combineStr) {
                    isProductAvailable = true;
                    productPrice = $(this).attr('data-price');
                    productVariantId = $(this).val();
                } else if ($(this).attr('data-variant-title') === combineStr+' - Sold Out') {
                    isProductSoldOut = true;
                } else if ($(this).attr('data-variant-title') !== combineStr) {
                    isProductUnavailable = true;
                }
            });
            if (isProductComingSoon) {
                $('#sub_'+product_id).prop('disabled', true);
                $('#sub_'+product_id).val('Coming Soon').addClass('variant-notavailable-button');
                $('#sub_'+product_id).parent().addClass('coming-soon').removeClass('unavailable');
                $('#variant_id_'+product_id).val('');
                $('#variant_price_'+product_id).html('').addClass('variant-notavailable-span p1');
            } else if (isProductAvailable) {
                $('#sub_'+product_id).val('Add To Bag').removeClass('variant-notavailable-button');
                $('#sub_'+product_id).prop('disabled', false);
                $('#sub_'+product_id).parent().removeClass('unavailable').removeClass('coming-soon');
                $('#variant_id_'+product_id).val(productVariantId);
                $('#sub_'+product_id).attr('data-purchase-id',productVariantId);
                $('#variant_price_'+product_id).html(productPrice).removeClass('variant-notavailable-span');
            } else if (isProductSoldOut) {
                $('#sub_'+product_id).prop('disabled', true);
                $('#sub_'+product_id).val('Sold Out').addClass('variant-notavailable-button');
                $('#sub_'+product_id).parent().addClass('unavailable').removeClass('coming-soon');
                $('#variant_id_'+product_id).val('');
                $('#variant_price_'+product_id).html('').addClass('variant-notavailable-span p0').removeClass('p1');
            } else if (isProductUnavailable) {
                $('#sub_'+product_id).prop('disabled', true);
                $('#sub_'+product_id).val('Out of Stock').addClass('variant-notavailable-button');
                $('#sub_'+product_id).parent().addClass('unavailable').removeClass('coming-soon');
                $('#variant_id_'+product_id).val('');
                $('#variant_price_'+product_id).html('').addClass('variant-notavailable-span p0').removeClass('p1');
            }
            $('.shutter .warning').remove(); 
        });

        $(document).on('click','.vto-label .tag_label', function(e){
            e.preventDefault();
            $('body, html').addClass('overflow-hidden');
            isMobile && $('#ada-button-frame, #ot-sdk-btn-floating.ot-floating-button').hide();
        });

        $(document).on('click', '.product_options_modal_plp .ctas .close',  function(e){
            e.preventDefault();
            $('body, html').removeClass('overflow-hidden');
            $( '.plp_fullscreen_vto_menu_close' ).remove();
        });

        $(document).on('click','.buy_btn, .buy_btn_anchor', function(e){
            e.preventDefault();

            if ((document.body.classList.contains('template-collection') || (document.body.classList.contains('template-page--hunza-lp') && !e.currentTarget.classList.contains('hotspot-prod-btn'))) && window.screen.width < 768) {
                if($('.holiday-plp-nav').hasClass('nav_is_fixed')) {
                    $('.holiday-plp-nav').fadeOut(300);
                }
                setTimeout(() => {
                    document.body.style.top = `-${window.scrollY}px`;
                    document.body.style.position = 'fixed';
                }, 400);
            }

            const $parent = $(this).parents('.product__item,.product_card');
	        const $shutter = $parent.find('.shutter');

            $('.ctas .close').parents('.shutter').fadeOut(500);
            $('.s_overlay').remove();
	        // add new elements
            $shutter.fadeIn(500);
            isMobile && $('#ada-button-frame, #shopify-section-beauty-advisor-widget, #ot-sdk-btn-floating.ot-floating-button').hide();

            $('.multiple-items .slick-next, .multiple-items .slick-prev').addClass('hidden-xs hidden-sm');
            $('.commonSlider .slick-next, .commonSlider .slick-prev').addClass('hidden-xs hidden-sm');
          	$('.textImageModule.carousel .slick-next, .textImageModule.carousel .slick-prev, .textImageModule.carousel .slick-dots').addClass('hidden');

            if (window.slider) {
                slider.slick("slickSetOption", "swipe", false);
                slider.slick("slickPause");
            }
            if (window.slider_mini) {
                slider_mini.slick("slickSetOption", "swipe", false);
                slider_mini.slick("slickPause");
            }
            if (window.commonSlider) {
                commonSlider.slick("slickSetOption", "swipe", false);
                commonSlider.slick("slickPause");
            }
            if (window.sliderFeateredCollection) {
                sliderFeateredCollection.slick("slickSetOption", "swipe", false);
                sliderFeateredCollection.slick("slickPause");
            }
            if (e.currentTarget.classList.contains('hotspot-prod-btn')) {
              let hot_slider = e.currentTarget.closest('.slick-slider');
              let dots = $(hot_slider).find('.slick-dots');
              let arrows = $(hot_slider).find('.slick-arrow');
              $('section*[class^="hotspots-"]').find('.slick-slider').slick("slickSetOption", "swipe", true);
              $('section*[class^="hotspots-"]').find('.slick-dots').css('opacity', '1');
              $('section*[class^="hotspots-"]').find('.slick-arrow').css('opacity', '1');
              $(hot_slider).slick("slickSetOption", "swipe", false);
              $(dots).css('opacity', '0');
              $(arrows).css('opacity', '0');
            }
        });

        $(document).on('click', '.ctas .close',  function(e) {
            e.preventDefault();
            $(this).parent().parent().fadeOut(500); // .shutter
            $('.s_overlay').remove();

            if ((document.body.classList.contains('template-collection') || (document.body.classList.contains('template-page--hunza-lp') && !e.currentTarget.parentNode.parentNode.parentNode.parentNode.classList.contains('hotspot-product'))) && $(window).width() < 768) {
                $('.holiday-plp-nav').fadeIn(300);
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo({top: parseInt(scrollY || '0') * -1, left: 0, behavior: 'instant'});
            }

            isMobile && $('#ada-button-frame, #shopify-section-beauty-advisor-widget, #ot-sdk-btn-floating.ot-floating-button').show();
            $('.multiple-items .slick-next, .multiple-items .slick-prev').removeClass('hidden-xs hidden-sm');
            $('.commonSlider .slick-next, .commonSlider .slick-prev').removeClass('hidden-xs hidden-sm');
            $('.textImageModule.carousel .slick-next, .textImageModule.carousel .slick-prev, .textImageModule.carousel .slick-dots').removeClass('hidden');

            if (window.slider) {
                slider.slick("slickSetOption", "swipe", true);
                slider.slick("slickPlay");
            }
            if (window.slider_mini) {
                ///  minicart recommendation shutter for mobile and desktop////
                $("#minicard-recom .slick-arrow").show();
                slider_mini.slick("slickSetOption", "accessibility", true);
                slider_mini.slick("slickSetOption", "draggable", true);
                slider_mini.slick("slickSetOption", "swipe", true);
                slider_mini.slick("slickSetOption", "touchMove", true);
                $("#mobileScrollRemover").addClass("swap-x");
            }
            if (window.commonSlider) {
                commonSlider.slick("slickSetOption", "swipe", true);
                commonSlider.slick("slickPlay");
            }
            if (window.sliderFeateredCollection) {
                sliderFeateredCollection.slick("slickSetOption", "swipe", true);
                sliderFeateredCollection.slick("slickPlay");
            }
            if (e.currentTarget.parentNode.parentNode.parentNode.parentNode.classList.contains('hotspot-product')) {
              let hot_slider = e.currentTarget.closest('.slick-slider');
              let dots = $(hot_slider).find('.slick-dots');
              let arrows = $(hot_slider).find('.slick-arrow');
              $(hot_slider).slick("slickSetOption", "swipe", true);
              $(dots).css('opacity', '1');
              $(arrows).css('opacity', '1');
            }
        });

        $('.ctas-sb .close').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent().fadeOut('slow');
            var cbtn = $(this).parents(".product_item").find(".c_btn");
            if ($(cbtn).text()=="Hide Shades") {
                $(cbtn).text("Choose Shades");
            }

            $('.c_btn').removeAttr('id','closeShutter');
            $('.c_btn').removeClass('closeShutter');
            $('.c_btn').text('Choose Shades');
        });

        // overlay click close
        $(document).on('click', '.s_overlay',  function(e){
            e.preventDefault();

            if ((document.body.classList.contains('template-collection') || document.body.classList.contains('template-page--hunza-lp')) && $(window).width() < 768) {
                $('.holiday-plp-nav').fadeIn(300);
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo({top:parseInt(scrollY || '0') * -1, left:0 , behavior:'instant'});
            }

            $(this).parent().find('.shutter').fadeOut('slow');
            $(this).remove();
            isMobile && $('#ada-button-frame, #shopify-section-beauty-advisor-widget, #ot-sdk-btn-floating.ot-floating-button').show();
            $('.multiple-items .slick-next, .multiple-items .slick-prev').removeClass('hidden-xs hidden-sm');
            $('.commonSlider .slick-next, .commonSlider .slick-prev').removeClass('hidden-xs hidden-sm');

            if (window.slider) {
                slider.slick("slickSetOption", "swipe", true);
                slider.slick("slickPlay");

            }
            if (window.slider_mini) {
                slider_mini.slick("slickSetOption", "swipe", true);
                slider_mini.slick("slickPlay");
            }
            if (window.commonSlider) {
                commonSlider.slick("slickSetOption", "swipe", true);
                commonSlider.slick("slickPlay");
            }
            if (window.sliderFeateredCollection) {
                sliderFeateredCollection.slick("slickSetOption", "swipe", true);
                sliderFeateredCollection.slick("slickPlay");

            }
        });


        $(window).on('orientationchange', function(event) {
            $('.shutter').each(function(){
                if($(this).css('display') === 'block'){
                    $(this).find('.ctas .close').trigger('click');
                }
            });

            if (Number(window.orientation) === 90) {
                $('#mini_cart_form').nextAll().addClass('hide')
            } else {
                $('#mini_cart_form').nextAll().removeClass('hide')
            }

        });

        $(document).on("click", '.miniProductOption', function(e) {

            var variant_value   =  ($(this).find(':checked').val()) ?  $(this).find(':checked').val() : $(this).val();
            var product_id      =  ($(this).find(':checked').attr('data-pid')) ? $(this).find(':checked').attr('data-pid') : $(this).attr('data-pid');
            var variant_type    =  ($(this).find(':checked').attr('data-type')) ? $(this).find(':checked').attr('data-type') : $(this).attr('name');
            var variant_id      =  ($(this).find(':checked').attr('id')) ? $(this).find(':checked').attr('id') : $(this).attr('id');
            var variant_cno     =  ($(this).find(':checked').attr('data-cno')) ? $(this).find(':checked').attr('data-cno') : $(this).attr('data-cno');

            var v1 = '';
            var v2 = '';
            var combineStr = '';
            if(variant_cno){
                $('#scroll-range_'+product_id).val(variant_cno);
            }

            $('#variant-info-minicart-'+product_id).html($('#color-'+variant_id).html());
            if ( $('#mini_p_t_v_'+product_id).val() == 1) {
                combineStr = variant_value;
            } else {
                $('#variant-info-minicart-'+product_id).html($('#color-'+variant_id).html());

                if (variant_type === 'Color')
                {
                    v2 = ($('input[class="Size-'+product_id+'"]:checked').val()) ? $('input[class="Size-'+product_id+'"]:checked').val() : $('#mini-Size'+'-'+product_id).val();
                    v1 = variant_value;
                } else if (variant_type === 'Size') {
                    v2 = variant_value ;
                    v1 = $('input[class="Color-'+product_id+'"]:checked').val();
                }
                combineStr = v1+' / '+v2;
            }

            var isProductAvailable = false;
            var isProductComingSoon = false;
            var isProductSoldOut = false;
            var isProductUnavailable = false;
            var productPrice = '';
            var productVariantId = '';

            $('#miniVariantSelectMain_'+product_id+'  option').each(function(){
                if ($(this).attr('data-variant-title') === combineStr+' - Coming Soon') {
                    isProductComingSoon = true;
                } else if ($(this).attr('data-variant-title') === combineStr) {
                    isProductAvailable = true;
                    productPrice = $(this).attr('data-price');
                    productVariantId = $(this).val();
                } else if ($(this).attr('data-variant-title') === combineStr+' - Sold Out') {
                    isProductSoldOut = true;
                } else if ($(this).attr('data-variant-title') !== combineStr) {
                    isProductUnavailable = true;
                }
            });

            $('.miniSample-'+product_id).hide();
            $('.miniSample-'+product_id).removeAttr('data-active');
            if (isProductComingSoon) {
                $('#mini_sub_'+product_id).prop('disabled', true);
                $('#mini_sub_'+product_id).val('Coming Soon').addClass('variant-notavailable-button');
                $('#mini_sub_'+product_id).parent().addClass('coming-soon').removeClass('unavailable');
                $('#mini_variant_id_'+product_id).val('');
                $('#mini_variant_price_'+product_id).html('').addClass('variant-notavailable-span p1');
                $('.miniSample-'+productVariantId+'-'+product_id).show();
                $('.miniSample-'+productVariantId+'-'+product_id).attr('data-active','is_active');
            } else if (isProductAvailable) {
                $('#mini_sub_'+product_id).val('Add To Cart').removeClass('variant-notavailable-button');
                $('#mini_sub_'+product_id).prop('disabled', false);
                $('#mini_sub_'+product_id).parent().removeClass('unavailable').removeClass('coming-soon');
                $('#mini_variant_id_'+product_id).val(productVariantId);
                $('#mini_variant_price_'+product_id).html(productPrice).removeClass('variant-notavailable-span');
                $('.miniSample-'+productVariantId+'-'+product_id).show();
                $('.miniSample-'+productVariantId+'-'+product_id).attr('data-active','is_active');
            } else if (isProductSoldOut) {
                $('#mini_sub_'+product_id).prop('disabled', true);
                $('#mini_sub_'+product_id).val('Sold Out').addClass('variant-notavailable-button');
                $('#mini_sub_'+product_id).parent().addClass('unavailable').removeClass('coming-soon');
                $('#mini_variant_id_'+product_id).val('');
                $('#mini_variant_price_'+product_id).html('').addClass('variant-notavailable-span p0').removeClass('p1');
                $('.miniSample-'+productVariantId+'-'+product_id).show();
                $('.miniSample-'+productVariantId+'-'+product_id).attr('data-active','is_active');
            } else if (isProductUnavailable) {
                $('#mini_sub_'+product_id).prop('disabled', true);
                $('#mini_sub_'+product_id).val('Out of Stock').addClass('variant-notavailable-button');
                $('#mini_sub_'+product_id).parent().addClass('unavailable').removeClass('coming-soon');
                $('#mini_variant_id_'+product_id).val('');
                $('#mini_variant_price_'+product_id).html('').addClass('variant-notavailable-span p0').removeClass('p1');
                $('.miniSample-'+productVariantId+'-'+product_id).show();
                $('.miniSample-'+productVariantId+'-'+product_id).attr('data-active','is_active');
            }
        });

        var isPdp = window.location.pathname.includes('/products/');
        var isHome = window.location.pathname == '/';
        var moduleCarousal = $('.slick-slider .slick-list, .slick-slider .slick-track')

        $(document).on('click','.buy_now', function(e){
            e.preventDefault();
            //$('.section__flex-item.product_set').hide();
            if($(this).attr("aria-expanded") == 'false') {$(this).attr('aria-expanded', 'true');}
            let closeQuickShopBtn = $(this).parent().parent().find('article .popupHeader .close_link');
            if($(closeQuickShopBtn).attr('aria-expanded') == 'false') {$(closeQuickShopBtn).attr('aria-expanded', 'true');}

            var bundleId = ($(this).attr('data-id'));
            $(this).parents(".product__item").find(`#product_${bundleId}`).fadeIn(500);
            $('.s_overlay').remove();
            //$(this).parent().parent().prepend( "<div class='s_overlay'></div>" );

            $('.multiple-items .slick-next, .multiple-items .slick-prev').addClass('hidden-xs hidden-sm');
            $('.commonSlider .slick-next, .commonSlider .slick-prev').addClass('hidden-xs hidden-sm');

            if (typeof(slider) != "undefined") {
                slider.slick("slickSetOption", "swipe", false);
            }
            if (window.commonSlider) {
                commonSlider.slick("slickSetOption", "swipe", false);
                commonSlider.slick("slickPause");
            }
            isMobile ? $('html, body').addClass('overflow-hidden') : '';
            if(isMobile){
                isHome || isPdp ? $('.slick-slider .slick-list, .slick-slider .slick-track').addClass('noTransform') : '';
                moduleCarousal.addClass('noTransform');
            }
        });

        $(document).on('click','.close_link', function(e){

            if($(this).attr('aria-expanded') == 'true') {$(this).attr('aria-expanded','false');}
            let quickShopBtn = $(this).parent().parent().parent().find('.inner_content .buy_now');
            if($(quickShopBtn).attr('aria-expanded') == 'true') {$(quickShopBtn).attr('aria-expanded', 'false');}

            var bundleId = ($(this).attr('id'));
            $(this).parents(`#product_bundle_${bundleId}`).fadeOut(500, function(){
                isHome || isPdp ? $('.slick-slider .slick-list, .slick-slider .slick-track').removeClass('noTransform') : '';
                moduleCarousal.removeClass('noTransform');
            });

            $('.s_overlay').hide();
            isMobile ? $('html, body').removeClass('overflow-hidden') : '';
            isMobile ? $('html').css('overflow', 'unset'):'';
            
            $('.multiple-items .slick-next, .multiple-items .slick-prev').removeClass('hidden-xs hidden-sm');
            $('.commonSlider .slick-next, .commonSlider .slick-prev').removeClass('hidden-xs hidden-sm');

            if(typeof(slider) != "undefined"){
                slider.slick("slickSetOption", "swipe", true);
            }
            if (window.commonSlider) {
                commonSlider.slick("slickSetOption", "swipe", true);
                commonSlider.slick("slickPlay");
            }

            $('.c_btn').removeAttr('id','closeShutter');
            $('.c_btn').removeClass('closeShutter');
            $('.c_btn').text('Choose Shades');

        });

        $(document).on('click','.sbProductOption input', function(e){

            var $this = $(this);
            var variant_value =  $this.val();
            var product_id =  $this.attr('data-pid');
            var variant_id = $this.attr('id');
            var variant_cno = $this.attr('data-cno');
            var variant_orig_name = $this.attr('data-org-name');

            var combineStr = '';
            if(variant_cno){
                var splitvalue = variant_cno.split(/\s*\-\s*/g);
                $('#scroll-range_'+product_id).val(splitvalue[1]);
            }

            combineStr = variant_value;
            $('#variant_info_'+product_id).html($('#color-'+variant_id).html());
            var sbProductOptionDiv = $this.parent()
            var label = sbProductOptionDiv.find('label')
            var getFirstVarImg = label.attr('style');
            var shutter = $this.closest('.shutter')
            var content = shutter.prev()
            content.find('.choose_shades .main_color').attr('style', getFirstVarImg);

            //show images above shades
            let images_above_shades = $(this).parent().parent().parent().find('.images_above_shades figure');
            $(images_above_shades).each(function(ind, ele) {
              if(!$(ele).hasClass('hide-model-image')) {
                $(ele).addClass('hide-model-image');
              }
              if($(ele).attr('data-shadeimg') == variant_id) {
                $(ele).removeClass('hide-model-image');
              }
            });

            shutter.find('.cart_actions').find('option').each(function(){
                const option = $(this)
                if (option.attr('data-variant-title') === combineStr) {
                    option.prop('selected', true);
                    content.find('.choose_shades .var_txt').html(variant_orig_name);
                } else if (option.attr('data-variant-title') === combineStr+' - Out Of Stock' ) {
                    option.prop('selected', true);
                    content.find('.choose_shades .var_txt').html(variant_orig_name + '<span>Out Of Stock</span>');
                } else if (option.attr('data-variant-title') === combineStr+' - Coming Soon' ) {
                    option.prop('selected', true);
                    content.find('.choose_shades .var_txt').html(variant_orig_name + '<span>Coming Soon</span>');
                }
            });

            /* Check all selected variant value in bundle*/
            const optionsParent = $this.parent().parent().parent().parent().parent()
            const selectedOptions = optionsParent.find(":selected")
            var dropDownValue = selectedOptions.text();
            if (dropDownValue.includes("Out Of Stock") || dropDownValue.includes("Coming Soon")) {
                if (isMobile) {
                    //const priceButton = $this.parents(".product_set").find('.price_btn')
                    //priceButton.find("input[type=submit]").val('Choose shades').prop('disabled', true).addClass('variant-notavailable-button');
                    //priceButton.find(".var_price").addClass('variant-notavailable-span');

                } else {
                    //const priceButton1 = $this.parent().parent().parent().nextAll().children('.price_btn')
                    //priceButton1.find(".var_price");//.addClass('variant-notavailable-span');
                    //const submitButton1 = priceButton1.find("input[type=submit]")
                    //submitButton1.prop('disabled', true);
                    //submitButton1.val('Choose shades').addClass('variant-notavailable-button');

                    ///// button change status of PDP bundle detail ///////
                    //const priceButton2 = $this.parent().parent().parent().parent().nextAll().children('.price_btn')
                    //priceButton2.find(".var_price");//.addClass('variant-notavailable-span');
                    //const submitButton2 = priceButton2.find("input[type=submit]")
                    //submitButton2.prop('disabled', true);
                    //submitButton2.val('Choose shades').addClass('variant-notavailable-button');
                    ///// End button change status of PDP bundle detail ///////
                }
            } else {

                let allSelected = true;
                if($('.template-product').length && $this.parent().parent().parent().parent().parent().hasClass('p-c-p___item__wrap')) {
                  var selectedShades = $('.p-c-p___item__wrap .content .var_txt');
                } else {
                  var selectedShades = $this.parent().parent().parent().parent().parent().find('.content').find('.var_txt');
                }

                $(selectedShades).each(function(ind, ele) {
                  if(ele.innerText == "") {
                    allSelected = false;
                    $(ele).parent().parent().children('.c_btn').css('color', '#996458');
                  } else {
                    $(ele).parent().parent().children('.c_btn').css('color', '#545353');
                  }
                });

                if(allSelected == true) {

                  if($('.template-product').length && $this.parent().parent().parent().parent().parent().hasClass('p-c-p___item__wrap')) {
                    $('.collection__items.product-page-detail-bundle .price_btn.choose_all_shades').removeClass('choose_all_shades');
                  } else {
                      $this.parent().parent().parent().parent().nextAll().children('.price_btn.choose_all_shades').removeClass('choose_all_shades');
                  }

                  if (isMobile) {
                    const priceButton = $this.parents(".product_set").find('.price_btn')
                    priceButton.find("input[type=submit]").val('Add Set To Bag').prop('disabled', false).removeClass('variant-notavailable-button');
                    priceButton.find(".var_price").removeClass('variant-notavailable-span');

                  } else {
                    const priceButton1 = $this.parent().parent().parent().parent().nextAll().children('.price_btn')
                    priceButton1.find(".var_price").removeClass('variant-notavailable-span');
                    const submitButton1 = priceButton1.find("input[type=submit]")
                    submitButton1.prop('disabled', false);
                    submitButton1.val('Add Set To Bag').removeClass('variant-notavailable-button');

                    ///// button change status of PDP bundle detail ///////
                    const priceButton2 = $this.parent().parent().parent().parent().parent().nextAll().children('.price_btn')
                    priceButton2.find(".var_price").removeClass('variant-notavailable-span');
                    const submitButton2 = priceButton2.find("input[type=submit]")
                    submitButton2.prop('disabled', false);
                    submitButton2.val('Add Set To Bag').removeClass('variant-notavailable-button');
                    ///// End button change status of PDP bundle detail ///////
                  }
                }
            }

            const delayedValues = optionsParent.find(':selected[data-variant-delayed="true"]')
            const hasDelayedItem = delayedValues.length > 0
            for (let delayElement of document.getElementsByClassName("delay_shipping")) {
                delayElement.classList.toggle('delayed', hasDelayedItem)
            }

            /*var getVarLen = $this.parents(".product_item").find('.rangeSlider:not(.hide)').length;
            if (getVarLen < 1) {
                $this.parent().parent().prev().find('.close').trigger('click');
                var cbtn = $this.parents(".product_item").find(".c_btn");
                if ($(cbtn).text()=="Hide Shades"){
                    $(cbtn).text("Choose Shades");
                }
                setTimeout(() => {           
                    $(cbtn).removeAttr('id','closeShutter');
                    $(cbtn).removeClass('closeShutter');
                    $(cbtn).text('Choose Shades');
                }, 100)  
            }*/

        });

        $(document).on('click','.c_btn', function(e){
            e.preventDefault();
            $('.shutter').slideUp()

            let getHeight = $(this).parent().closest('.product_item').outerHeight() - 1;
            let shutter = $(this).parent().parent().next();

            shutter.stop(3).slideDown()
            shutter.css('top', getHeight+'px');

            $('.c_btn').text('Choose Shades');
            $(this).text('Hide Shades');

            $(this).parent().closest('.product_item').nextAll().find('.c_btn').removeAttr('id','closeShutter').removeClass('closeShutter');
            $(this).parent().closest('.product_item').prevAll().find('.c_btn').removeAttr('id','closeShutter').removeClass('closeShutter');
            setTimeout(() => {
                $(this).attr('id','closeShutter');
            $(this).addClass('closeShutter');
        }, 300);
            /*  $('.shutter').slideUp();
          
            // TODO LV verify conflict
            let shutter = $(this).parent().parent().parent().next();

            ///shutter.stop(3).slideDown();
            shutter.stop(4).slideDown(100);
            shutter.css('position', 'relative');
            shutter.css('min-height', 'auto');
            shutter.css('display', 'block');
            console.log("slide Down");

            $(this).parent().closest('.product_item').toggleClass('expanded');
            $(this).parent().closest('.product_item').next().next().next().toggleClass('next');

            $('.c_btn').text('Choose Shades');
            $(this).text('Hide Shades');

            $(this).parent().closest('.product_item').nextAll().find('.c_btn').removeAttr('id', 'closeShutter').removeClass('closeShutter');
            $(this).parent().closest('.product_item').prevAll().find('.c_btn').removeAttr('id', 'closeShutter').removeClass('closeShutter');
            setTimeout(() => {
                $(this).attr('id', 'closeShutter');
            $(this).addClass('closeShutter');
        }, 300);*/

          //$(this).removeClass("c_btn");
        });

        // Close Shutter
        $(document).on('click', '#closeShutter', function () {
            let $this = $(this);
            // TODO LV verify conflict
            //let hideShutter = $(this).parent().parent().parent().next();
            let hideShutter = $(this).parent().parent().next();

            hideShutter.slideUp();
           console.log("slide Up");
            setTimeout(() => {
                $this.removeAttr('id','closeShutter');
            $this.removeClass('closeShutter');
            $this.text('Choose Shades');
            $('.price_btn--wrapper').removeClass('price_btn--relative');
        }, 300);
          //$(this).addClass("c_btn");
        });

        $(document).on('click','.buy_btn_direct', function(e){
            if(document.querySelector('.holiday-plp') || (document.body.classList.contains('template-page--hunza-lp') && e.currentTarget.classList.contains('holiday-coll-btn'))) {
                $(this).parent().find('.shutter').find('.price_btn').find("input[type=submit]")[0] && $(this).parent().find('.shutter').find('.price_btn').find("input[type=submit]")[0].click();
            } else {
                $(this).parent().parent().find('.shutter').find('.price_btn').find("input[type=submit]")[0] && $(this).parent().parent().find('.shutter').find('.price_btn').find("input[type=submit]")[0].click();
            }
            //$(this).parent().parent().find('.shutter').find('.price_btn').find("input[type=submit]").trigger('click');
        });

        $('.icon-plus').on('click', function (e){
            $("#variant_shade_chooser_items_wrapper").animate({ scrollTop: 0 }, "fast");
        });

    });
});

//--MiniCart
function cartToggle(state) {
    if (state === "closed") {
        $('#pageWrapper, #miniCart').addClass('open');
        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];
        var html = $('html');
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
       // window.scrollTo(scrollPosition[0], scrollPosition[1]);
    } else {
        parent.location.hash = '';
        $('#pageWrapper, #miniCart').removeClass('open');
        var html = $('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
     //   window.scrollTo(scrollPosition[0], scrollPosition[1])
    }
}


window.beautyLabsCart = window.beautyLabsCart || {}
window.beautyLabsCart.showMinicart = (withLoading) => {
  if(!$('#pageWrapper').hasClass('open')) {
    cartToggle('closed');

    if (withLoading) {
        const cartWrapper = $('.mini-cart__wrapper')
        if (cartWrapper && cartWrapper.animate) {
            cartWrapper.animate({ scrollTop: 0 })
        }
    }
  }
}


//--SHOP COLLEXTION range slider
document.addEventListener('shopify:section:load', function(e){
    var container = $(e.target).find('.multiple-items');
    container.slick();
});


// Safari Vh issue fixed
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  var x;
  document.addEventListener('click', function(e) {
    return x = e.target;
})

//Bundles & Sets - DESKTOP - Add to cart/choose shades button hover
if($(window).width() > 1024) {
  $(document).on({
    mouseenter: function () {
      if($('.template-product').length && $(this).parent().parent().find('.p-c-p___item__wrap').length) {
        $(this).find('.add-to-cart-bundle-button').prop('defaultValue', 'Choose Shades');
      } else {
        $(this).find('.add-to-cart-sets-button').prop('defaultValue', 'Choose Shades');
      }
      $(this).addClass('change_choose_shades');
    },
    mouseleave: function () {
      if($('.template-product').length && $(this).parent().parent().find('.p-c-p___item__wrap').length) {
        $(this).find('.add-to-cart-bundle-button').prop('defaultValue', 'Add set to bag');
      } else {
        $(this).find('.add-to-cart-sets-button').prop('defaultValue', 'Add set to bag');
      }
      $(this).removeClass('change_choose_shades');
    }
  }, '.choose_all_shades');
}

//Bundles & Sets
$(document).on('click','.choose_all_shades', function(e){
  e.preventDefault();

  //DESKTOP/MOBILE (add red to 'Choose shades')
  if($('.template-product').length && $(this).parent().parent().find('.p-c-p___item__wrap').length) {
    var selectedShades = $(this).parent().parent().find('.p-c-p___item__wrap').find('.var_txt');
    $(selectedShades).each(function(ind, ele) {
      if(ele.innerText == "") {
        $(ele).parent().children('.c_btn').css('color', '#996458');
      } else {
        $(ele).parent().children('.c_btn').css('color', '#545353');
      }
    });
  } else {
    var selectedShades = $(this).parent().parent().parent().find('.shades_content').find('.var_txt');
    $(selectedShades).each(function(ind, ele) {
      if(ele.innerText == "") {
        $(ele).parent().parent().children('.c_btn').css('color', '#996458');
      } else {
        $(ele).parent().parent().children('.c_btn').css('color', '#545353');
      }
    });
  }

  //MOBILE - Add to cart/choose shades button click
  if($(window).width() < 1025) {
    if($('.template-product').length && $(this).parent().parent().find('.p-c-p___item__wrap').length) {
      $(this).find('.add-to-cart-bundle-button').prop('defaultValue', 'Choose Shades');
    } else {
      $(this).find('.add-to-cart-sets-button').prop('defaultValue', 'Choose Shades');
    }
    $(this).addClass('change_choose_shades');
    var that = $(this);

    setTimeout(function(){
      if($('.template-product').length && that.parent().parent().find('.p-c-p___item__wrap').length) {
        that.find('.add-to-cart-bundle-button').prop('defaultValue', 'Add set to bag');
      } else {
        that.find('.add-to-cart-sets-button').prop('defaultValue', 'Add set to bag');
      }
      that.removeClass('change_choose_shades');
    }, 1000);
  }
})

// Mobile - show fixed 'add to bag' cta at the bottom when user scrolls after page cta
if($(window).width() < 768 && $('.template-product').length) {
  let fixed_cta = $('.template-product .fixed-form.product-fixed-bar.mobile-cta-bar')[0];
  $(window).scroll(function(){
    if($('.template-product .product__entry .product-page-detail-bundle').length){
      let cta = $('.template-product .product-page-detail-bundle .product_form .price_btn--wrapper');
      let detailsPosition = $('.template-product .product__container #details').offset().top;
      $(document).scrollTop() > detailsPosition ? $(cta).removeClass('set-mobile-cta-bar-unfix') : $(cta).addClass('set-mobile-cta-bar-unfix');
    } else {
      let ctaPosition = $('.product__container .product__entry .product__head .product__title').offset().top;
      $(document).scrollTop() > (ctaPosition - 120) ? $(fixed_cta).css('display', 'block') : $(fixed_cta).css('display', 'none');
    }
  });
}

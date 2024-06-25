// cookie functions
function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/// Get theme setting values ////
const breakUrl = window.location.href.slice(window.location.href.indexOf('/') + 1).split('/');
let countryIso = $('body').data('country-iso');

if (breakUrl[3] === 'checkouts') {
    const [html] = document.getElementsByTagName("html")
    const checkoutLang = html.getAttribute("lang");
    if (checkoutLang == 'en-GB') {
        countryIso = 'GB'
    } else {
        countryIso = 'US'
    }
}

const activeCodlessGWP = (countryIso == 'GB') ? "false" : "false";
const codlessGWP = (countryIso == 'GB') ? "40549029675196" : "";
const codlessThresh = (countryIso == 'GB') ? "25" : "";
const codlessChildProduct = (countryIso == 'GB') ? "false": "false";
const codlessChildProduct1 = (countryIso == 'GB') ? "" : "";
const codlessChildProductVariant1 = (countryIso == 'GB') ? "" : "";
const codlessChildProduct2 = (countryIso == 'GB') ? "" : "";
const codlessChildProductVariant2 = (countryIso == 'GB') ? "" : "";
const codlessChildProduct3 = (countryIso == 'GB') ? "" : "";
const codlessChildProductVariant3 = (countryIso == 'GB') ? "" : "";
const codlessChildProduct4 = (countryIso == 'GB') ? "" : "";
const codlessChildProductVariant4 = (countryIso == 'GB') ? "" : "";
const codlessChildProduct5 = (countryIso == 'GB') ? "" : "";
const codlessChildProductVariant5 = (countryIso == 'GB') ? "" : "";

const enableGWPAutoBuyXGetYGwp = (countryIso == 'GB') ? "true" : "false";
const autoBuyXGetYGwp = (countryIso == 'GB') ? "" : "";
const autoBuyXGetYGwpHandle = (countryIso == 'GB') ? "" : "";
const autoBuyXGetYGwpPurchaseProduct = (countryIso == 'GB') ? "" : "";

const freeGiftIds = getCookie('setting_updates');
const makeCookiesString = `${activeCodlessGWP}${codlessGWP}${codlessThresh}${codlessChildProduct}${codlessChildProduct1}${codlessChildProductVariant1}${codlessChildProduct2}${codlessChildProductVariant2}${codlessChildProduct3}${codlessChildProductVariant3}${codlessChildProduct4}${codlessChildProductVariant4}${codlessChildProduct5}${codlessChildProductVariant5}${enableGWPAutoBuyXGetYGwp}${autoBuyXGetYGwp}${autoBuyXGetYGwpHandle}${autoBuyXGetYGwpPurchaseProduct}`;
// if free sample / GWP settings change, empty the cart

if (freeGiftIds !== makeCookiesString) {
    setCookie('setting_updates', makeCookiesString, 14);

    var updates_obj = {};
    /// get and remove free product from cart ///
    $.ajax({
        url: '/cart.js',
        dataType: 'json',
        async: false,
        type: 'get',
        success: function(new_cart) {
            $.each( new_cart.items, function( key, value ) {
                if (value.price == 0 && value.product_type != "Sample Product") {
                    updates_obj[value.id] = 0;
                }
            });
        }
    });

    $.ajax({
        url: '/cart/update.js',
        dataType: 'json',
        async: false,
        type: 'post',
        data: {updates: updates_obj},
        success: function(updatedCartObject) {
            // updateGWP(updatedCartObject, true, true, undefined , true);

            /// if any chnages in cookies redirection on checkout page ///
            if (breakUrl[3] == 'checkouts') {
                setTimeout(function() {
                    window.location.reload();
                }, 800)
            }
        }
    });
}

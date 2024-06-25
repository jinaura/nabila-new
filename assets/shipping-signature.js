
$(document).ready(function(e){
	if ($('.section--shipping-method').length) {

		
		var isMobile = window.matchMedia("(max-width: 767px)").matches;
		if(isMobile){
			element = $('.sidebar__content h3');
			element.attr("style", "text-transform: none;")
			element.html('<p class="section_custom_text">Expect longer fulfillment times during heavy volume promotional periods. Orders are immediately transmitted to our warehouse. We are unable to modify, cancel or change the address.</p>');
		}else {
			element = $('.step__sections .section:first');
			element.prepend('<p class="section_custom_text">Expect longer fulfillment times during heavy volume promotional periods. Orders are immediately transmitted to our warehouse. We are unable to modify, cancel or change the address.</p>');
		}
		
	
		element = $('.section--shipping-method .section__title');
		element.after('<p class="section__text"> To protect your delivery, US orders $200+ will require a signature at delivery.</p>');
		
		//on page load 
		displaySignature();

		//when shipping method is changed
		$(document).on('change', '.section--shipping-method .input-radio', function(e){
			displaySignature();
		});
	}
	
});

function displaySignature(){

	var getLocation = $('.address--tight').text();
	var getLocationArray = (getLocation.split(','));
	var getCountry = getLocationArray[getLocationArray.length - 1];

	var total_price = parseInt($('.total-line__price .payment-due__price').attr('data-checkout-payment-due-target'));
	element = $('.section--shipping-method .section__text');
	if(total_price >= 20000 && $.trim(getCountry) == 'United States'){
	  element.show();
	}else{
		element.hide();
	}
}

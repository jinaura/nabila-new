
(function($) {
    $(document).on("page:load page:change", function() {

        try {
            //If we have the order summary table then perform manipulation for sorting descending by price
            if( $('div.order-summary__section__content').length &&
                $('[data-order-summary-section="line-items"]').length
            ){
                 $('[data-order-summary-section="line-items"]').addClass('checkout-tbody');
                var existingCart = $('[data-order-summary-section="line-items"]').find("tr");

                existingCart.each(function(index, element){
                    var title = $(this).find('th.product__description span.product__description__name').text();
                    var price = $(this).find('td.product__price span.order-summary__emphasis').text();

                    if( price.toLowerCase() == 'free' && (title.search("FREE") > -1 || title.search("Free") > -1) ){
                        $(this).addClass('checkout-gwp-product');
                    }else{
                        $(this).addClass('checkout-paid-product');
                    }
                });
            }
        } catch (error) {
            console.log('Error trying to sort cart according to price: ' + error)
        }

    });
})(Checkout.$);

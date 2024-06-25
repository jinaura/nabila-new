document.addEventListener("DOMContentLoaded", function(e) {

    // express checkout btns start
    var checkoutObserver = new MutationObserver(function (mutations, me) {
        var shopPayEl = document.querySelectorAll('.dynamic-checkout__buttons [data-shopify-buttoncontainer] li [data-testid="ShopifyPay-button"] span svg')
        if (shopPayEl && shopPayEl.length) {
          $(shopPayEl).parent().html('<svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_101_2)"><mask id="mask0_101_2" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="14"><path d="M0 0H18.2857V13.7143H0V0Z" fill="white"/></mask><g mask="url(#mask0_101_2)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8126 5.39314C17.2548 4.19086 16.1966 3.416 14.6011 3.416C14.1107 3.42459 13.6292 3.5483 13.1954 3.77714C12.7584 4.00893 12.3807 4.3382 12.0914 4.73943L12.0331 4.81257V0.102857C12.0332 0.0893092 12.0307 0.0758734 12.0256 0.0633213C12.0205 0.0507692 12.0129 0.0393482 12.0034 0.0297143C11.9942 0.0203087 11.9831 0.0128375 11.971 0.00773609C11.9588 0.00263465 11.9458 4.89073e-06 11.9326 0L9.67999 0C9.6669 0.00024109 9.65399 0.00309486 9.64202 0.00839377C9.63005 0.0136927 9.61926 0.0213299 9.61028 0.0308571C9.59173 0.0502169 9.58148 0.0760509 9.5817 0.102857V13.6137C9.5817 13.64 9.59199 13.6651 9.61028 13.6846C9.61918 13.6938 9.62982 13.7012 9.64159 13.7063C9.65336 13.7114 9.66602 13.7141 9.67885 13.7143H12.0937C12.1202 13.7137 12.1454 13.7029 12.1642 13.6842C12.1829 13.6654 12.1937 13.6402 12.1943 13.6137V7.85371C12.1943 6.73371 12.9211 5.93943 14.0846 5.93943C15.3577 5.93943 15.68 7.01371 15.68 8.11086V13.6137C15.68 13.64 15.6903 13.6651 15.7086 13.6846C15.7174 13.6939 15.7281 13.7013 15.7398 13.7064C15.7516 13.7115 15.7643 13.7142 15.7771 13.7143H18.1863C18.2137 13.7143 18.2388 13.7029 18.2571 13.6846C18.2758 13.6657 18.2865 13.6403 18.2868 13.6137V7.78171C18.2868 7.58171 18.2868 7.38629 18.2617 7.19543C18.2203 6.57287 18.0686 5.96262 17.8137 5.39314M5.75656 7.39543C5.75656 7.39543 4.52685 7.09829 4.07427 6.97943C3.6217 6.85943 2.83085 6.60571 2.83085 5.992C2.83085 5.37829 3.46856 5.18171 4.11656 5.18171C4.76342 5.18171 5.48342 5.34286 5.53942 6.08C5.54202 6.1063 5.55423 6.13071 5.5737 6.14857C5.59249 6.16657 5.6174 6.17678 5.64342 6.17714L8.02399 6.168C8.04523 6.16772 8.06586 6.16086 8.08305 6.14838C8.10024 6.1359 8.11315 6.1184 8.11999 6.09829C8.12464 6.0847 8.12658 6.07033 8.1257 6.056C7.97713 3.69714 5.96227 2.85371 4.1017 2.85371C1.89599 2.85371 0.28456 4.34629 0.28456 5.992C0.28456 7.19429 0.614846 8.32114 3.21599 9.10514C3.67313 9.24229 4.29256 9.41828 4.83427 9.57371C5.4857 9.76 5.83656 10.0423 5.83656 10.4857C5.83656 11 5.1097 11.3589 4.39427 11.3589C3.35999 11.3589 2.62513 10.9646 2.5657 10.2583C2.56283 10.2324 2.55064 10.2084 2.53142 10.1909C2.51257 10.174 2.48816 10.1646 2.46285 10.1646L0.0868458 10.176C0.0729437 10.176 0.0591933 10.1789 0.0464254 10.1844C0.0336575 10.1899 0.022137 10.1979 0.01256 10.208C0.00268911 10.2186 -0.00506803 10.231 -0.0102971 10.2446C-0.0142633 10.2579 -0.0158115 10.2718 -0.0148685 10.2857C0.0937029 12.512 2.18856 13.712 4.1417 13.712C7.05027 13.712 8.36456 12.032 8.36456 10.4594C8.36799 9.72114 8.20342 8.03657 5.7577 7.39657" fill="white"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1578 10.711C36.6435 10.7224 36.1372 10.5899 35.7029 10.327C35.2737 10.0705 34.9313 9.69108 34.7201 9.23786C34.5149 8.79337 34.4542 8.29579 34.5463 7.815C34.6378 7.335 34.8789 6.88929 35.2378 6.54071C35.6029 6.18726 36.0625 5.94711 36.5612 5.84929C37.0641 5.74871 37.5875 5.79214 38.0652 5.975C38.5418 6.159 38.9498 6.47329 39.2389 6.87786C39.5258 7.28243 39.6812 7.76014 39.6823 8.24929C39.6869 8.56814 39.6263 8.88472 39.5018 9.18186C39.3783 9.479 39.1932 9.74871 38.9589 9.97729C38.7246 10.2059 38.4446 10.3887 38.1361 10.5144C37.8263 10.6401 37.4938 10.7076 37.1578 10.711V10.711ZM37.3841 3.43214C36.1612 3.43214 35.1383 4.07443 34.4789 4.84929V3.52357C34.4789 3.51116 34.4764 3.49889 34.4715 3.48749C34.4665 3.47609 34.4594 3.46582 34.4503 3.45729C34.4319 3.43946 34.4074 3.42925 34.3818 3.42872H32.0995C32.0732 3.42848 32.0479 3.43829 32.0286 3.45614C32.0195 3.46481 32.0122 3.47527 32.0073 3.48687C32.0024 3.49848 31.9999 3.51097 32.0001 3.52357V15.9076C32.0001 15.9316 32.0115 15.9556 32.0298 15.9727C32.0486 15.9905 32.0736 16.0003 32.0995 16.0001H34.5418C34.5673 16.0003 34.5919 15.9904 34.6103 15.9727C34.6193 15.9644 34.6264 15.9543 34.6313 15.9431C34.6362 15.9319 34.6388 15.9198 34.6389 15.9076V11.8367H34.6755C35.0629 12.3979 36.1235 13.071 37.5086 13.071C40.1143 13.071 42.2858 11.0196 42.2858 8.24814C42.2881 5.58872 40.1269 3.43214 37.3829 3.43214H37.3841ZM23.8343 3.42872C21.5795 3.42872 20.4561 4.12472 19.5532 4.68129L19.5258 4.69843C19.4807 4.72586 19.4479 4.76968 19.4343 4.82071C19.428 4.84562 19.4269 4.87156 19.431 4.89692C19.4352 4.92229 19.4445 4.94653 19.4583 4.96814L20.3498 6.36243C20.367 6.38926 20.3901 6.4119 20.4172 6.42871C20.4449 6.44644 20.4761 6.45812 20.5086 6.463C20.5406 6.46798 20.5733 6.46651 20.6047 6.45865C20.6361 6.4508 20.6656 6.43674 20.6915 6.41729L20.7612 6.36471C21.2252 6.01043 21.9692 5.53843 23.7703 5.40929C24.7726 5.33614 25.6389 5.57386 26.2778 6.11672C26.9795 6.70529 27.4001 7.65614 27.4001 8.65957C27.4001 10.5053 26.2035 11.6653 24.2801 11.6893C22.6949 11.6813 21.6309 10.9304 21.6309 9.82072C21.6309 9.23329 21.9235 8.84929 22.4949 8.46529C22.5373 8.43853 22.5683 8.39699 22.5818 8.34871C22.5879 8.32516 22.5894 8.30062 22.5861 8.27649C22.5827 8.25237 22.5747 8.22915 22.5623 8.20814L21.7623 6.83214C21.7377 6.79389 21.7027 6.7634 21.6615 6.74418C21.6202 6.72497 21.5743 6.71782 21.5292 6.72357C21.4979 6.727 21.4675 6.73672 21.4401 6.75214C20.5406 7.23557 19.4389 8.12243 19.4983 9.82529C19.5715 11.9921 21.5555 13.6459 24.1326 13.7144H24.4389C27.5018 13.623 29.7143 11.5567 29.7143 8.75443C29.7143 6.183 27.6515 3.42872 23.8343 3.42872ZM50.8812 3.42872H49.2846C49.2477 3.42921 49.2122 3.44348 49.1852 3.46872C49.1722 3.48065 49.1617 3.49511 49.1544 3.51122C49.1472 3.52734 49.1432 3.54476 49.1429 3.56243V6.72471C49.1429 6.76014 49.1578 6.79329 49.1852 6.81843C49.2123 6.84335 49.2478 6.85721 49.2846 6.85729H50.8812C51.8549 6.85729 52.5715 6.13386 52.5715 5.143C52.5715 4.15214 51.8549 3.42872 50.8812 3.42872Z" fill="white"/><mask id="mask1_101_2" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="43" y="0" width="27" height="16"><path d="M43.4286 0H69.7143V16H43.4286V0Z" fill="white"/></mask><g mask="url(#mask1_101_2)"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.4915 9.62276C55.4915 10.0788 55.8937 10.3313 56.5943 10.3313C57.5475 10.3313 58.1109 9.8399 58.1109 8.96676V8.71533L56.6835 8.78619C55.9303 8.82048 55.4915 9.1199 55.4915 9.6239" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M66.3268 5.82631L63.88 12.0629C63.3234 13.512 62.3497 13.8835 61.2834 13.8835C61.0831 13.8883 60.8831 13.8652 60.6891 13.8149C60.659 13.8071 60.6321 13.7899 60.6125 13.7657C60.5937 13.7424 60.5832 13.7134 60.5828 13.6835V12.7349C60.5828 12.715 60.5874 12.6955 60.5961 12.6776C60.6048 12.6598 60.6175 12.6442 60.6331 12.632C60.6493 12.619 60.6681 12.6096 60.6882 12.6045C60.7083 12.5994 60.7293 12.5986 60.7497 12.6023C60.9177 12.6332 61.088 12.648 61.2594 12.648C61.5543 12.6629 61.8457 12.5817 62.0868 12.4195C62.3268 12.2572 62.504 12.0206 62.5897 11.7509L62.6617 11.5337C62.6732 11.5043 62.6732 11.4717 62.6617 11.4423L60.3737 5.8286C60.3667 5.80881 60.3647 5.78761 60.368 5.76688C60.3714 5.74568 60.3798 5.7256 60.3925 5.70831C60.4052 5.69102 60.4219 5.67701 60.4411 5.66745C60.4609 5.65728 60.4828 5.6518 60.5051 5.65145H61.6171C61.6457 5.65145 61.6743 5.6606 61.6971 5.67545C61.7202 5.69073 61.7381 5.71265 61.7485 5.73831L63.3028 9.69945C63.3137 9.7252 63.332 9.7471 63.3554 9.76231C63.3731 9.77391 63.3932 9.78152 63.4141 9.78462C63.4351 9.78771 63.4565 9.78622 63.4768 9.78024C63.4971 9.77427 63.5159 9.76395 63.5318 9.75C63.5478 9.73605 63.5605 9.7188 63.5691 9.69945L64.9177 5.7486C64.9269 5.72168 64.9445 5.69844 64.968 5.68231C64.9925 5.66545 65.0217 5.65666 65.0514 5.65717H66.192C66.2137 5.65709 66.2351 5.66178 66.2548 5.67088C66.2741 5.68009 66.2909 5.69366 66.304 5.71053C66.3171 5.72739 66.3261 5.74708 66.3303 5.76803C66.3344 5.78893 66.3332 5.81055 66.3268 5.83088V5.82745V5.82631ZM59.4777 11.0903C59.4779 11.108 59.4744 11.1255 59.4674 11.1417C59.4566 11.1668 59.4385 11.1881 59.4155 11.2028C59.3925 11.2175 59.3656 11.2249 59.3383 11.224H58.2388C58.2023 11.2242 58.1671 11.2103 58.1405 11.1852C58.1278 11.1729 58.1177 11.1581 58.1109 11.1418C58.104 11.1255 58.1005 11.108 58.1005 11.0903V10.8457C58.1021 10.8243 58.0965 10.803 58.0845 10.7852C58.0725 10.7668 58.0549 10.7528 58.0343 10.7452C58.0134 10.7376 57.9907 10.7366 57.9692 10.7423C57.9478 10.748 57.9286 10.7602 57.9143 10.7772C57.5863 11.12 57.0525 11.3669 56.2011 11.3669C54.9485 11.3669 54.1188 10.744 54.1188 9.66631C54.1074 9.40345 54.1645 9.14288 54.2845 8.90631C54.4045 8.66974 54.5851 8.46631 54.8091 8.31317C55.2617 7.98974 55.9623 7.82174 57.0034 7.78174L58.1051 7.74745V7.43888C58.1051 6.81717 57.6674 6.55317 56.9657 6.55317C56.2628 6.55317 55.8194 6.78974 55.7154 7.17831C55.706 7.20598 55.6879 7.22985 55.6638 7.24634C55.6397 7.26283 55.6109 7.27104 55.5817 7.26974H54.4937C54.4738 7.27047 54.454 7.26686 54.4356 7.25916C54.4173 7.25146 54.4008 7.23987 54.3874 7.22517C54.3742 7.21109 54.3644 7.19422 54.3587 7.17582C54.3529 7.15741 54.3514 7.13795 54.3543 7.11888C54.5177 6.19888 55.3143 5.49831 57.016 5.49831C58.8217 5.49831 59.4731 6.30174 59.4731 7.83317L59.4777 11.0892V11.0903ZM50.7634 8.7086H49.1085C49.072 8.70839 49.0368 8.72231 49.0103 8.74745C48.9974 8.75949 48.9872 8.774 48.9801 8.7901C48.973 8.80621 48.9693 8.82358 48.9691 8.84117V11.0903C48.9691 11.1257 48.9543 11.1589 48.9291 11.1852C48.9024 11.2099 48.8672 11.2234 48.8308 11.2229H47.6651C47.629 11.2228 47.5942 11.2089 47.568 11.184C47.5552 11.1719 47.5451 11.1574 47.538 11.1413C47.5309 11.1252 47.5271 11.1079 47.5268 11.0903V2.97603C47.5268 2.94174 47.5417 2.90745 47.568 2.88231C47.5945 2.85717 47.6297 2.84325 47.6663 2.84345H50.7623C52.5165 2.84345 53.7714 4.06403 53.7714 5.77717C53.7714 7.49031 52.5257 8.71317 50.7725 8.71317L50.7634 8.70974V8.7086ZM67.08 2.54553e-05H46.0537C45.7085 2.54553e-05 45.368 0.0651683 45.048 0.190883C44.7314 0.316597 44.4423 0.502883 44.1977 0.734883C43.9554 0.965742 43.7619 1.24282 43.6285 1.54974C43.4972 1.85275 43.4295 2.1795 43.4297 2.50974V13.5063C43.4297 14.1715 43.7063 14.8092 44.1988 15.28C44.6903 15.7509 45.3588 16.016 46.0548 16.016H67.0811C67.4263 16.016 67.768 15.9532 68.0868 15.8275C68.4068 15.7017 68.6971 15.5177 68.9417 15.2846C69.1863 15.0515 69.3805 14.7749 69.5131 14.4709C69.6468 14.1657 69.7154 13.84 69.7154 13.5097V2.51317C69.7154 2.18288 69.648 1.85488 69.5165 1.54974C69.3827 1.2422 69.1883 0.964702 68.9451 0.73374C68.6978 0.498285 68.4071 0.313138 68.0891 0.188597C67.7677 0.062522 67.4252 -0.00146515 67.08 2.54553e-05V2.54553e-05Z" fill="white"/></g></g><defs><clipPath id="clip0_101_2"><rect width="69.7143" height="16" fill="white"/></clipPath></defs></svg>');
          me.disconnect(); // stop observing
          return;
        }
    });

    // start observing
    checkoutObserver.observe(document, {
        childList: true,
        subtree: true
    });
    // express checkout btns end

    const smsSignupCheckbox = document.getElementById('checkout_buyer_accepts_sms');
    const smsSignupPhone = document.getElementById('checkout_sms_marketing_phone');
    const shippingAddressPhone = document.getElementById('checkout_shipping_address_phone');
    const continueButton = document.querySelector('.step__footer #continue_button');

    const displayPhoneError = (phoneError, errorMsg) => {
        const smsSignupWrapper = document.querySelector('[data-sms-marketing-phone-wrapper] div.field');
        
        if (!phoneError) {
            phoneError = document.createElement('p');
            phoneError.id = 'error-for-sms_marketing_phone';
            phoneError.className = 'field__message field__message--error';
        }
        phoneError.innerText = errorMsg;
        phoneError.style.display = 'block';
        smsSignupWrapper.appendChild(phoneError);
        smsSignupWrapper.classList.add('field--error');
        continueButton && continueButton.setAttribute('disabled', true);
    }

    if (smsSignupCheckbox && smsSignupCheckbox.checked) {
        let phoneErrorEl = document.getElementById('error-for-sms_marketing_phone');
        const phonePattern = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;

        if (smsSignupPhone && smsSignupPhone.value === '') {
            displayPhoneError(phoneErrorEl, 'Enter a phone number');
        } else if (!phonePattern.test(smsSignupPhone.value)) {
            displayPhoneError(phoneErrorEl, 'Phone number is invalid');
        } else {
            phoneErrorEl && (phoneErrorEl.innerText = 'Phone number is invalid');
            continueButton && continueButton.removeAttribute('disabled');
        }
    } else {
        continueButton && continueButton.removeAttribute('disabled');
    }
    
    smsSignupCheckbox && smsSignupPhone.addEventListener('keyup', () => {
      if (smsSignupCheckbox && smsSignupCheckbox.checked) {
        let phoneErrorEl = document.getElementById('error-for-sms_marketing_phone');
        const phonePattern = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;

        if (smsSignupPhone && smsSignupPhone.value === '') {
            displayPhoneError(phoneErrorEl, 'Enter a phone number');
        } else if (!phonePattern.test(smsSignupPhone.value)) {
            displayPhoneError(phoneErrorEl, 'Phone number is invalid');
        } else {
            phoneErrorEl && (phoneErrorEl.style.display = 'none');
            continueButton && continueButton.removeAttribute('disabled');
        }
      } 
    });

    smsSignupCheckbox && smsSignupCheckbox.addEventListener('change', () => {
        if (smsSignupCheckbox.checked) {
            let phoneErrorEl = document.getElementById('error-for-sms_marketing_phone');
            const phonePattern = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
    
            if (smsSignupPhone && smsSignupPhone.value === '') {
                displayPhoneError(phoneErrorEl, 'Enter a phone number');
            } else if (!phonePattern.test(smsSignupPhone.value)) {
                displayPhoneError(phoneErrorEl, 'Phone number is invalid');
            } else {
                phoneErrorEl && (phoneErrorEl.style.display = 'none');
                continueButton && continueButton.removeAttribute('disabled');
            }
        } else {
            continueButton && continueButton.removeAttribute('disabled');
        }
    });

    shippingAddressPhone && shippingAddressPhone.addEventListener('keyup', () => {
        const phonePattern = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
        const phoneInputWrapper = document.querySelector('[data-address-field="phone"].field');
        let phoneErrorEl = document.getElementById('error-for-shipping_address_phone');

        if (!phoneErrorEl) {
            phoneErrorEl = document.createElement('p');
            phoneErrorEl.id = 'error-for-shipping_address_phone';
            phoneErrorEl.className = 'field__message field__message--error';
        }
  
        if (shippingAddressPhone.value === '' || phonePattern.test(shippingAddressPhone.value)) {
            phoneErrorEl.style.display = 'none';
            phoneInputWrapper.classList.remove('field--error');
        } else {
            phoneErrorEl.innerText = 'Phone number is invalid';
            phoneErrorEl.style.display = 'block';
            phoneInputWrapper.appendChild(phoneErrorEl);
            phoneInputWrapper.classList.add('field--error');
        }
    });

    // hide Afterpay, gift message and remaining shipping countries for UK launch
    if (window.location.hostname.includes('roseinc.co.uk')) {
        const giftMsgEl = document.querySelector('.checkbox-container[data-gift-note-html]')
        const afterpayPaymentEl = document.querySelector('.section--payment-method .section__content [data-select-gateway="71436370108"]');
        giftMsgEl && giftMsgEl.remove();
        afterpayPaymentEl && afterpayPaymentEl.remove();
        const countrySelectorEl = document.querySelectorAll('.field[data-address-field="country"] select#checkout_shipping_address_country option');
        let gbCount = 0;
        countrySelectorEl && countrySelectorEl.forEach(item => {
            if (item.getAttribute('data-code') == 'GB' && gbCount == 0) {
                item.setAttribute('selected', 'selected');
                gbCount = 1;
            } else {
                item.remove();
            }
        });
        const addressShipTo = document.querySelector('address.address');
        if (addressShipTo && !addressShipTo.innerText.includes('United Kingdom')) {
            const shippingMethodEl = document.querySelector('.section--shipping-method .section__content');
            const continueBtn = document.querySelector('button.step__footer__continue-btn');
            continueBtn.setAttribute('disabled', true);
            shippingMethodEl & (shippingMethodEl.innerHTML = "<div class='content-box blank-slate'><svg focusable='false' aria-hidden='true' class='icon-svg icon-svg--size-64 blank-slate__icon' role='img' xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 76.97523 59.755739'><g transform='translate(-0.835631,-8)' style='fill:none;stroke:none'><g transform='translate(1.835631,28.112292)' style='stroke:#b3b3b3;stroke-width:2'><path d='m 0,0 61.789269,0 m -55.9600927,30.622004 15.1558587,0 m -15.1558587,-3.513041 15.1558587,0 m -15.1558587,-3.51304 9.9095997,0'></path></g><path d='m 8.0728499,18.158677 49.3731231,0 6.178927,9.953615 0,36.008666 c 0,1.463767 -1.165835,2.634781 -2.623129,2.634781 l -56.5430104,0 c -1.4572941,0 -2.6231294,-1.171014 -2.6231294,-2.634781 l 0,-36.008666 6.2372187,-9.953615 z m 24.6574161,0 0,9.719412 0,-9.719412 z' style='stroke:#b3b3b3;stroke-width:2'></path><g transform='translate(50.623336,9)'><g style='fill:#ffffff;stroke:#b3b3b3;stroke-width:2'><ellipse cx='13.093762' cy='13.093762' rx='13.093762' ry='13.093762'></ellipse></g><path d='m 13.093763,4.6763438 0,11.3595992' style='stroke:#b3b3b3;stroke-width:2'></path><ellipse cx='13.027511' cy='20.108278' rx='1.4029032' ry='1.4029032' style='fill:#b3b3b3'></ellipse></g></g></svg><p>No shipping rates found for this address.</p></div>");
        }
    } else if (window.location.hostname.includes('roseinc.com')) {
        const countrySelectorEl = document.querySelectorAll('.field[data-address-field="country"] select#checkout_shipping_address_country option');
        countrySelectorEl && countrySelectorEl.forEach(item => {
            if (item.getAttribute('data-code') == 'GB') {
                item.remove();
            }
        });

        const addressShipTo = document.querySelector('address.address');
        if (addressShipTo && addressShipTo.innerText.includes('United Kingdom')) {
            const shippingMethodEl = document.querySelector('.section--shipping-method .section__content');
            const continueBtn = document.querySelector('button.step__footer__continue-btn');
            continueBtn.setAttribute('disabled', true);
            shippingMethodEl & (shippingMethodEl.innerHTML = "<div class='content-box blank-slate'><svg focusable='false' aria-hidden='true' class='icon-svg icon-svg--size-64 blank-slate__icon' role='img' xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 76.97523 59.755739'><g transform='translate(-0.835631,-8)' style='fill:none;stroke:none'><g transform='translate(1.835631,28.112292)' style='stroke:#b3b3b3;stroke-width:2'><path d='m 0,0 61.789269,0 m -55.9600927,30.622004 15.1558587,0 m -15.1558587,-3.513041 15.1558587,0 m -15.1558587,-3.51304 9.9095997,0'></path></g><path d='m 8.0728499,18.158677 49.3731231,0 6.178927,9.953615 0,36.008666 c 0,1.463767 -1.165835,2.634781 -2.623129,2.634781 l -56.5430104,0 c -1.4572941,0 -2.6231294,-1.171014 -2.6231294,-2.634781 l 0,-36.008666 6.2372187,-9.953615 z m 24.6574161,0 0,9.719412 0,-9.719412 z' style='stroke:#b3b3b3;stroke-width:2'></path><g transform='translate(50.623336,9)'><g style='fill:#ffffff;stroke:#b3b3b3;stroke-width:2'><ellipse cx='13.093762' cy='13.093762' rx='13.093762' ry='13.093762'></ellipse></g><path d='m 13.093763,4.6763438 0,11.3595992' style='stroke:#b3b3b3;stroke-width:2'></path><ellipse cx='13.027511' cy='20.108278' rx='1.4029032' ry='1.4029032' style='fill:#b3b3b3'></ellipse></g></g></svg><p>No shipping rates found for this address.</p></div>");
        }
    }

    const addressShipTo = document.querySelector('address.address');

    if (addressShipTo && !addressShipTo.innerText.includes('United States')) {
        let shippingRestrictionVarIds = [41516862701756, 41516862832828, 42337377484988, 42417907630268, 42217040380092, 42295056990396, 42768183034005, 42768183492757, 43190356869269, 43188085620885, 43190358147221, 43190358802581];
        let restrictedProdTitleList = [];
        const checkoutLineItems = document.querySelectorAll('[data-order-summary-section="line-items"] tr');
        checkoutLineItems && checkoutLineItems.forEach((item) => {
            if (shippingRestrictionVarIds.includes(Number(item.dataset.variantId))) {
                let encodedEl = encodeURI(item.querySelector('th.product__description span.product__description__name').innerHTML);
                let decodedString = decodeURI(encodedEl);
                restrictedProdTitleList.push(decodedString);
            }
        });
        const shippingWarningEl = document.querySelector('[data-shipping-warning].notice--error .notice__content');
        if (shippingWarningEl && typeof restrictedProdTitleList !== 'undefined' && restrictedProdTitleList.length > 0) {
            let prodList = document.createElement('ul');
            prodList.className = 'restricted_products';
            restrictedProdTitleList.forEach((listItem) => {
                prodList.innerHTML += "<li>"+listItem+"</li>";
            });
            shippingWarningEl.appendChild(prodList);
        }
    }

    const checkoutSubscriptionAgreement = document.getElementById('checkout_subscription_agreement');

    if (checkoutSubscriptionAgreement) {
        const continueBtn = document.getElementById('continue_button');
        if (!checkoutSubscriptionAgreement.checked) {
            checkoutSubscriptionAgreement.checked = true;
        }
        checkoutSubscriptionAgreement.addEventListener('change', () => {
            if (!checkoutSubscriptionAgreement.checked && continueBtn) {
                continueBtn.setAttribute('disabled', true);
            } else if (checkoutSubscriptionAgreement.checked && continueBtn) {
                continueBtn.removeAttribute('disabled');
            }
        });
    }

    const continueBtn = document.getElementById('continue_button');

    if (continueBtn && continueBtn.classList.contains('btn--disabled') && (continueBtn.getAttribute('disabled') != true)) {
        continueBtn.setAttribute('disabled', true);
    } else if (continueBtn && !continueBtn.classList.contains('btn--disabled') && (continueBtn.getAttribute('disabled') == true)) {
        continueBtn.removeAttribute('disabled');
    }

    const enableCodeDrivenGWPUs = false;
    const enableCodeDrivenGWPUk = false;
    const enableManualGWPUs = false;
    const enableManualGWPUk = false;

    let gwp_manual_code = "";
    let gwp_manual_code_product = "";
    let gwp_manual_code_free_product = "";
    let gwp_codedriven_code = "";
    let gwp_codedriven_free_product = "";

    let countryIso = 'US';

    const [html] = document.getElementsByTagName("html");
    const checkoutLang = html.getAttribute("lang");

    if (checkoutLang == 'en-GB') {
        countryIso = 'GB'
    }

    if (countryIso == 'GB' && enableManualGWPUk) {
        gwp_manual_code = "";
        gwp_manual_code_product = "";
        gwp_manual_code_free_product = "";
    } else if (countryIso == 'US' && enableManualGWPUs) {
        gwp_manual_code = "CELEBRATE";
        gwp_manual_code_product = "skin-enhance-luminous-tinted-serum";
        gwp_manual_code_free_product = "rose-inc-petite-pouch-free";
    }

    if (countryIso == 'GB' && enableCodeDrivenGWPUk) {
        gwp_codedriven_code = "";
        gwp_codedriven_free_product = ""; 
    } else if (countryIso == 'US' && enableCodeDrivenGWPUs) {
        gwp_codedriven_code = "";
        gwp_codedriven_free_product = "";
    }

    $('body').on('click', '.edit_checkout .field__input-btn', function(e) {

        var currentImplementedCode = jQuery('.tag').find('.reduction-code__text').text();
        if (currentImplementedCode) {
            alert('Please remove previous code');
            return false;
        }

        $(this).addClass('btn--loading');
        e.preventDefault();
        let code = $(this).parent().children('.field__input-wrapper').find('input').val().toUpperCase();

        //// Code Driven GWP ////
        if (code == gwp_codedriven_code) {
            if ((countryIso == 'GB' && enableCodeDrivenGWPUk) || (countryIso == 'US' && enableCodeDrivenGWPUs)) {
                getProductUpdateCartOject(gwp_codedriven_free_product, 1, code);
            }
        }

        //// BuyXGetY manual code ////
        if (code == gwp_manual_code) {
            if ((countryIso == 'GB' && enableManualGWPUk) || (countryIso == 'US' && enableManualGWPUs)) {

                $.getJSON("/cart.js", function(new_cart) {
                    var BuyXgetYfreeItem = false;
                    var BuyXgetYpurchaseItem = false;
                    $.each( new_cart.items, function( key, value ) {

                        if (value.handle == gwp_manual_code_product) {
                            BuyXgetYpurchaseItem = true;
                        }

                        if (value.handle == gwp_manual_code_free_product) {
                            BuyXgetYfreeItem = true;
                        }

                    });

                    if (BuyXgetYfreeItem == false && BuyXgetYpurchaseItem == true) {
                        getProductUpdateCartOject(gwp_manual_code_free_product, 1, code);
                    } else {
                        redirectUrl(code);
                    }
                });
            }

        } else {
            redirectUrl(code);
        }

    });

    var checkDiscount = getUrlVars()["discount"];
    if (checkDiscount) {
        let code = checkDiscount
        var cart_price = parseFloat(jQuery('[data-checkout-subtotal-price-target]').attr('data-checkout-subtotal-price-target')) / 100;

        const cart_discount_box = jQuery('[data-checkout-discount-amount-target]');
        let cart_discount_amount = 0;

        if (cart_discount_box.length) {
            cart_discount_amount = parseFloat(jQuery('[data-checkout-discount-amount-target]').attr('data-checkout-discount-amount-target')) / 100;
        }

        if (cart_discount_amount) {
            cart_price -= cart_discount_amount;
        }

        
        var giftBoxThreshold = 5.0;

        //// MANUAL CODE TO CHECK GIFTBOX ////
        

    }

    // REMOVE DISCOUNT CODE BY CLICKING 'X'
    $('body').on('click', '.tag__button', function (e) {

        let checkGiftBoxEnable = false;

        
        var thresholdPrice = 5.0;
        var cartPrice = parseFloat(jQuery('[data-checkout-subtotal-price-target]').attr('data-checkout-subtotal-price-target')) / 100;
        var getAppliedCode = jQuery('.tag__wrapper .reduction-code__text').text();

        if (checkGiftBoxEnable == true && parseFloat(thresholdPrice) <= cartPrice) {
            getProductUpdateCartOject('minicart-giftbox',1,'');
        }

        /// check BuyxGetY Code ////
        if (((countryIso == 'GB' && enableManualGWPUk) || (countryIso == 'US' && enableManualGWPUs)) && gwp_manual_code == getAppliedCode) {

            $.getJSON("/cart.js", function(new_cart) {
                var BuyXgetYfreeItemQuantity = 0;
                $.each( new_cart.items, function( key, value ) {

                    if (value.handle == gwp_manual_code_free_product) {
                        BuyXgetYfreeItemQuantity = value.quantity;
                    }
                });

                if (BuyXgetYfreeItemQuantity == 1) {
                    getProductUpdateCartOject(gwp_manual_code_free_product , 0, '');
                } else {
                    redirectUrl();
                }

            });
        }

        /// check Codedriven GWP ///
        if (((countryIso == 'GB' && enableCodeDrivenGWPUk) || (countryIso == 'US' && enableCodeDrivenGWPUs)) && gwp_codedriven_code == getAppliedCode) {
            $.getJSON("/cart.js", function(new_cart) {
                var GetFreeItemQuantity = 0;
                $.each( new_cart.items, function( key, value ) {

                    if (value.handle == gwp_codedriven_free_product) {
                        GetFreeItemQuantity = value.quantity;
                    }
                });

                if (GetFreeItemQuantity == 1) {
                    getProductUpdateCartOject(gwp_codedriven_free_product, 0, '');
                } else {
                    redirectUrl();
                }

            });
        }

    });

});

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function getProductUpdateCartOject (pHandle, quantity, code = '', paramType = 'discount') {
    $.ajax({
        url: '/products/'+pHandle+'.js',
        dataType: 'json',
        async: false,
        success: function(product) {

            let updates_obj = {};
            updates_obj[product.variants[0].id] = quantity;

            $.ajax({
                url: '/cart/update.js',
                dataType: 'json',
                type: 'post',
                data: {updates: updates_obj},
                success: function(newObj) {
                    setTimeout(function() { 
                        redirectUrl(code, paramType);
                    }, 2000);
                }
            });
        }
    });
}

function redirectUrl (code = '', paramType = 'discount') {
    let new_url = $(location).attr("href").split('?')[0],
        variable = new_url.indexOf('?');

    var url = window.location.href;
    const breakUrl = window.location.href.slice(url.indexOf('/') + 1).split('/');
    if (breakUrl[5] == 'stock_problems') {   
        var to = url.lastIndexOf('/');
        to = to == -1 ? url.length : to + 1;
        url = url.substring(0, to);
        setTimeout(function() { 
            window.location = url; 
        }, 1000);
    } else if (code != "") {
        let type = variable > -1 ? '&' : "?";
        setTimeout(function() {
            window.location = new_url + type + paramType+'=' + code;
        }, 1000);
    } else {
        setTimeout(function() { 
            window.location = new_url; 
        }, 1000);
    }
}

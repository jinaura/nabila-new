(self.webpackChunkrose_inc_web=self.webpackChunkrose_inc_web||[]).push([[508],{56931:(e,t,r)=>{"use strict";r.d(t,{BA:()=>u});r(47941),r(82526),r(57327),r(38880),r(54747),r(49337),r(41817),r(41539),r(32165),r(66992),r(78783),r(33948),r(47042),r(68309),r(91038),r(19601);var n=r(67294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(i)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e){var t=o((0,n.useState)(),2),r=t[0],c=t[1],u=e.canClick,s=e.vertical,l=a(e,["canClick","vertical"]),d=function(e){e.currentTarget.classList.remove("bl-core-dragging"),c(void 0)};return n.createElement("div",i({},l,{onMouseDown:function(e){c({scrolling:!0,scrollPos:s?e.currentTarget.scrollTop:e.currentTarget.scrollLeft,mousePos:s?e.clientY:e.clientX}),u.current=!0,e.currentTarget.classList.add("bl-core-dragging")},onMouseUp:d,onMouseLeave:d,onPointerCancel:d,onTouchEnd:d,onMouseMove:function(e){var t;r&&(s?(e.currentTarget.scrollTop=r.scrollPos+(r.mousePos-e.clientY),t=Math.abs(e.currentTarget.scrollTop-r.scrollPos)):(e.currentTarget.scrollLeft=r.scrollPos+(r.mousePos-e.clientX),t=Math.abs(e.currentTarget.scrollLeft-r.scrollPos)),u.current=t<10)}}))}},508:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z});r(32165),r(47042),r(91038),r(43371),r(38880),r(49337),r(35666),r(68309),r(21249),r(69826),r(82526),r(41817),r(74916),r(23123),r(54747),r(41539),r(88674),r(17727),r(73210),r(26699),r(32023),r(39714),r(47941),r(34553),r(66992),r(78783),r(33948),r(57327),r(92222);var n=r(67294),i=r(48764),a=r(20185),o=r(54703),c=r(34994),u=r(93970),s=r(58905);const l=r.p+"251cf9ce4f199026dd847aa257a280b3.svg";var d,p,m=r(56931),v=r(18441),h=r(97748),f=r(96120),g=r.n(f),b=r(57154),y=r(60856),_=r(90057),E=r(99490),w=r(46829),I=r(71439),S=r(51120),N=r(60282),C=r(96974),P=r(81316),O=r(9980),A=r.n(O),k=r(98980);r(20765);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V(e,t,r,n,i,a,o){try{var c=e[a](o),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,i)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){V(a,n,i,o,c,"next",e)}function c(e){V(a,n,i,o,c,"throw",e)}o(void 0)}))}}function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(i)throw a}}return r}(e,t)||W(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){if(e){if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(e,t):void 0}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var U=A()(),F=function(e){var t,r;return n.createElement("div",{className:"liveshopping-product-card",onClick:e.onClick},n.createElement("div",{className:"liveshopping-product-card__img-wrapper"},null!==(t=e.product)&&void 0!==t&&null!==(r=t.img)&&void 0!==r&&r.src?n.createElement(v.M,{className:"liveshopping-product-card__img",src:e.product.img.src,alt:e.product.img.alt}):null,n.createElement("div",{className:"liveshopping-product-card__detail"})),e.showName?n.createElement(H,{product:e.product}):null)},H=function(e){var t,r;return n.createElement("p",{className:"liveshopping-product-card__name"},null!==(t=null===(r=e.product)||void 0===r?void 0:r.name)&&void 0!==t?t:(0,s.Iu)("livestream.schedule.errors.missing_product"))},B=function(e){var t,r=(0,n.useRef)(!0);return n.createElement(m.BA,{className:"liveshopping-product-cards__wrapper",canClick:r},n.createElement("div",{className:"liveshopping-product-cards__center"},e.onClickAdd&&(null!==(t=e.productAndVariantIds.length)&&void 0!==t?t:0)<a.sO.MAX_SHOW_PRODUCT_COUNT&&n.createElement("div",{className:"liveshopping-product-card"},n.createElement("div",{className:"liveshopping-product-card__outline",onClick:function(){var t;return r.current&&(null===(t=e.onClickAdd)||void 0===t?void 0:t.call(e))}},n.createElement("p",{className:"liveshopping-product-card__add"},"+"))),e.productAndVariantIds.map((function(t,i){var a=t.productId,o=t.variantId,c=e.showProducts.find((function(e){return e.id===a}));return n.createElement(F,{product:c,key:i,onClick:function(){var t;r.current&&(null===(t=e.onClickRemove)||void 0===t||t.call(e,o))},showName:!0})}))))},X=function(e){var t,r,o,c,d,p,m,v=(0,N.FT)(""),h=v.currentValue,b=v.setCurrentValue,E=(0,N.FT)(""),w=E.currentValue,I=E.setCurrentValue,S=M((0,n.useState)(""),2),C=S[0],P=S[1],O=M((0,n.useState)(!1),2),A=O[0],T=O[1],L=M((0,n.useState)(""),2),D=L[0],V=L[1],j=M((0,n.useState)(!1),2),x=j[0],q=j[1],B=M((0,_.x)({productDiscounts:{}}),2),X=B[0],G=B[1],$=M((0,n.useState)(!1),2),z=$[0],Y=$[1],J=M((0,n.useState)(!1),2),Z=J[0],Q=J[1],ee=M((0,n.useState)([]),2),te=ee[0],re=ee[1],ne=M((0,n.useState)(),2),ie=ne[0],ae=ne[1],oe=M((0,n.useState)(),2),ce=oe[0],ue=oe[1],se=M((0,n.useState)(""),2),le=se[0],de=se[1],pe=M((0,n.useState)(!1),2),me=pe[0],ve=pe[1],he=(0,n.useRef)(null),fe=(0,n.useRef)(null),ge=(0,u.XM)();(0,n.useEffect)((function(){var t,r,n,i,a,o;Z||(null!==(t=e.streamSettings)&&void 0!==t&&t.title&&b(e.streamSettings.title),null!==(r=e.streamSettings)&&void 0!==r&&r.description&&I(e.streamSettings.description),null!==(n=e.streamSettings)&&void 0!==n&&n.time&&P(e.streamSettings.time),null!==(i=e.streamSettings)&&void 0!==i&&i.image&&V(e.streamSettings.image),void 0!==(null===(a=e.streamSettings)||void 0===a?void 0:a.publiclyListed)&&q(e.streamSettings.publiclyListed),void 0!==(null===(o=e.streamSettings)||void 0===o?void 0:o.discountConfig)&&G(e.streamSettings.discountConfig),Q(!0))}),[null===(t=e.streamSettings)||void 0===t?void 0:t.image,null===(r=e.streamSettings)||void 0===r?void 0:r.time,null===(o=e.streamSettings)||void 0===o?void 0:o.title,null===(c=e.streamSettings)||void 0===c?void 0:c.description,null===(d=e.streamSettings)||void 0===d?void 0:d.publiclyListed,null===(p=e.streamSettings)||void 0===p?void 0:p.discountConfig,b,I,Z,G]);(0,n.useEffect)((function(){if(null!=ce&&ce.width&&null!=ce&&ce.height&&fe.current&&he.current){var e=he.current,t=fe.current,r=e.getContext("2d");if(!r)throw new Error("No 2d context");e.width=1024,e.height=1024,r.imageSmoothingQuality="high";var n=t.naturalWidth/t.width,i=t.naturalHeight/t.height;r.drawImage(t,n*ce.x,i*ce.y,n*ce.width,i*ce.height,0,0,e.width,e.height)}}),[ce]);var be=(0,n.useCallback)((function(e,t,r){G((function(n){void 0===n.productDiscounts[e]&&(n.productDiscounts[e]={method:"PERCENTAGE",amount:{}}),isNaN(r)?(delete n.productDiscounts[e].amount[t],0===Object.keys(n.productDiscounts[e].amount).length&&delete n.productDiscounts[e]):n.productDiscounts[e].amount[t]=r}))}),[G]),ye=(0,n.useCallback)((function(e,t){G((function(r){isNaN(t)?void 0!==r.giftsWithPurchase&&(delete r.giftsWithPurchase[e],0===Object.keys(r.giftsWithPurchase).length&&delete r.giftsWithPurchase):(void 0===r.giftsWithPurchase&&(r.giftsWithPurchase={}),void 0===r.giftsWithPurchase[e]?r.giftsWithPurchase[e]={quantity:t,allowAfterLive:!1}:r.giftsWithPurchase[e].quantity=t)}))}),[G]),_e=(0,n.useCallback)((function(e,t){G((function(r){void 0===r.giftsWithPurchase&&(r.giftsWithPurchase={}),void 0===r.giftsWithPurchase[e]?r.giftsWithPurchase[e]={quantity:1,allowAfterLive:t}:r.giftsWithPurchase[e].allowAfterLive=t}))}),[G]);return n.createElement("div",{className:"liveshopping-broadcast-setup__wrapper"},n.createElement("h2",null,(0,s.Iu)("livestream.schedule.title")),n.createElement("h2",null,(0,s.Iu)("livestream.schedule.schedule.title")),n.createElement(N.H4,{id:"title",state:v,label:"livestream.schedule.title_placeholder",labelStyle:"placeholder",type:"text",showCharacterCount:!0,inputProps:{maxLength:a.sO.MAX_SHOW_TITLE_LENGTH}}),n.createElement("h2",null,(0,s.Iu)("livestream.schedule.schedule.description")),n.createElement(k.ZP,{renderHTML:function(e){return U.render(e)},placeholder:(0,s.Iu)("livestream.schedule.description_placeholder"),value:E.currentValue,onChange:function(e){return E.setCurrentValue(e.text)}}),n.createElement(N.S6,{count:E.currentValue.length,max:a.sO.MAX_SHOW_DESCRIPTION_LENGTH}),n.createElement("h2",null,(0,s.Iu)("livestream.schedule.schedule.date_time")),n.createElement("div",{className:"liveshopping-broadcast-setup__input-wrapper liveshopping-broadcast-setup__input-wrapper--datetime"},n.createElement("input",{name:"time",value:C,type:"datetime-local",disabled:e.editing&&e.show&&"PENDING"!==e.show.state,onChange:function(e){P(e.target.value)}}),C&&n.createElement("p",{className:"liveshopping-broadcast-setup__readable-date"},(0,y.dq)(new Date(C).toISOString()))),n.createElement("div",{className:"liveshopping-broadcast-setup__input-wrapper"},n.createElement("input",{id:"publiclyListed",name:"publiclyListed",checked:x,type:"checkbox",className:"bl-core-checkbox",onChange:function(e){return q(e.target.checked)}}),n.createElement("label",{htmlFor:"publiclyListed"},(0,s.Iu)("livestream.schedule.schedule.publicly_listed"))),n.createElement("h2",null,(0,s.Iu)("livestream.schedule.schedule.products")),n.createElement("div",null,e.productAndVariantIds.map((function(t,r){var i,a,o,c,u,l=t.productId,d=t.variantId,p=e.showProducts.find((function(e){return e.id===l}));return n.createElement(n.Fragment,{key:r},n.createElement(H,{product:p}),n.createElement("div",{className:"liveshopping-product-card__schedule-wrapper"},n.createElement(F,{product:p,onClick:function(){},key:r,showName:!1}),void 0!==p?!0!==p.gwp?n.createElement("div",{className:"liveshopping-product-card__discounts-wrapper"},n.createElement("span",{className:"liveshopping-product-card__discounts-title"},(0,s.Iu)("livestream.schedule.discounts.title")),n.createElement(K,{translationKey:"livestream.schedule.discounts.live_attendance_label",amountKey:"LIVE_ATTENDANCE",discountConfig:X,product:p,onDiscountPercentageChanged:be}),n.createElement(K,{translationKey:"livestream.schedule.discounts.friend_referral_label",amountKey:"FRIEND_REFERRAL",discountConfig:X,product:p,onDiscountPercentageChanged:be}),n.createElement("div",{className:"liveshopping-product-card__discounts-caveats"},n.createElement("ul",null,n.createElement("li",null,(0,s.Iu)("livestream.schedule.discounts.caveat_shopify_script")),n.createElement("li",null,(0,s.Iu)("livestream.schedule.discounts.caveat_user_logged_in"))))):n.createElement("div",{className:"liveshopping-product-card__discounts-wrapper"},n.createElement("span",{className:"liveshopping-product-card__discounts-title"},(0,s.Iu)("livestream.schedule.discounts.gwp_title")),n.createElement("div",{className:"liveshopping-product-card__discount"},n.createElement("div",{className:"liveshopping-product-card__discount-label"},(0,s.Iu)("livestream.schedule.discounts.gwp_quantity")),n.createElement("div",{className:"liveshopping-product-card__discount-entry"},n.createElement("input",{type:"number",value:null!==(i=null===(a=X.giftsWithPurchase)||void 0===a||null===(o=a[d])||void 0===o?void 0:o.quantity)&&void 0!==i?i:"",onChange:function(e){e.target.validity.valid&&ye(d,e.target.valueAsNumber)},min:1}))),n.createElement("div",{className:"liveshopping-product-card__discount"},n.createElement("div",{className:"liveshopping-product-card__discount-label"},n.createElement("label",{htmlFor:"gwp-after-live-".concat(r)},(0,s.Iu)("livestream.schedule.discounts.gwp_allow_after_live"))),n.createElement("div",{className:"liveshopping-product-card__discount-entry"},n.createElement("input",{type:"checkbox",id:"gwp-after-live-".concat(r),checked:!0===(null===(c=X.giftsWithPurchase)||void 0===c||null===(u=c[d])||void 0===u?void 0:u.allowAfterLive),onChange:function(e){_e(d,e.target.checked)}})))):null,n.createElement("div",{className:"liveshopping-product-card__buttons-wrapper"},n.createElement("button",{type:"button",className:"bl-core-button",onClick:function(){var t;if(p)t=p.id;else if(e.show){var r=e.show.variants.findIndex((function(e){return e===d}));-1!==r&&(t=e.show.products[r])}void 0!==t&&G((function(e){delete e.productDiscounts[t]})),e.removeVariant(d)}},(0,s.Iu)("livestream.schedule.remove_product")))),n.createElement("hr",{className:"liveshopping-product-card__hr"}))})),(null!==(m=e.productAndVariantIds.length)&&void 0!==m?m:0)<a.sO.MAX_SHOW_PRODUCT_COUNT&&n.createElement("div",{className:"liveshopping-product-card"},n.createElement("div",{className:"liveshopping-product-card__outline",onClick:function(){e.saveStreamSettings({title:h,description:w,time:C,image:D,publiclyListed:x,discountConfig:X}),e.proceed()}},n.createElement("p",{className:"liveshopping-product-card__add"},"+")))),n.createElement("h2",null,(0,s.Iu)("livestream.schedule.schedule.thumbnail")),n.createElement("p",null,(0,s.Iu)("livestream.schedule.schedule.thumbnail_detail")),z?n.createElement("div",{className:"liveshopping-broadcast-setup__image-uploader"},n.createElement("div",null,n.createElement("input",{type:"file",accept:"image/*",onChange:function(e){if(e.target.files&&e.target.files.length>0){ae(void 0);var t=new FileReader;t.addEventListener("load",(function(){var e;de((null===(e=t.result)||void 0===e?void 0:e.toString())||"")})),t.readAsDataURL(e.target.files[0])}}}),n.createElement("br",null),n.createElement(g(),{crop:ie,onChange:function(e,t){return ae(t)},onComplete:function(e){return ue(e)},aspect:1},le&&n.createElement("img",{alt:(0,s.Iu)("livestream.schedule.schedule.thumbnail"),src:le,onLoad:function(e){var t=e.currentTarget,r=t.width,n=t.height;ae((0,f.centerCrop)((0,f.makeAspectCrop)({unit:"%",width:100},1,r,n),r,n))},ref:fe})),n.createElement("canvas",{ref:he,style:{display:"none"}})),n.createElement("button",{type:"button",className:"bl-core-button bl-core-button--cta",onClick:function(){he.current&&(V(he.current.toDataURL("image/png")),ve(!0)),Y(!1)},disabled:!le||!ce},(0,s.Iu)("livestream.schedule.schedule.thumbnail_ok"))):n.createElement("div",{className:"liveshopping-broadcast-setup__thumbnail",id:"liveshopping-broadcast-setup__thumbnail",style:{backgroundImage:"url(".concat(D,")")},onClick:function(){return Y(!z)}},!D&&n.createElement("img",{src:l,alt:(0,s.Iu)("livestream.schedule.schedule.thumbnail_change")})),te.length>0?n.createElement("ul",{className:"liveshopping-broadcast-setup__error"},te.map((function(e,t){return n.createElement("li",{key:"error-".concat(t)},e)}))):null,n.createElement("button",{type:"button",className:"bl-core-button bl-core-button--cta",onClick:function(){if(re([]),D){var t=i.Buffer.from(D.split(",")[1],"base64"),r=e.user;if(t)if(r)if(h)if(C)if(e.productAndVariantIds)if(A)re([(0,s.Iu)("livestream.schedule.errors.scheduling")]);else{var n,o=new Date(C),c=!0,u=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=W(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){throw e})),f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){c=!0,a=e})),f:function(){try{o||null==r.return||r.return()}finally{if(c)throw a}}}}(e.productAndVariantIds);try{var l=function(){var t=n.value,r=t.productId,i=t.variantId,a=e.showProducts.find((function(e){return e.id===r}));if(void 0===a)return re([(0,s.Iu)("livestream.schedule.errors.variants.missing")]),{v:void 0};if(a.gwp){var o,u=!1,l=null==X||null===(o=X.giftsWithPurchase)||void 0===o?void 0:o[i];if(l&&l.quantity>0&&(u=!0),!u)return re([(0,s.Iu)("livestream.schedule.errors.gwp_config_missing",{productName:a.name})]),{v:void 0};if(c)return re([(0,s.Iu)("livestream.schedule.errors.gwp_first_variant")]),{v:void 0}}c=!1};for(u.s();!(n=u.n()).done;){var d=l();if("object"===R(d))return d.v}}catch(e){u.e(e)}finally{u.f()}var p=function(t){var r=a.sO.getValidationErrorResponse(t);if(r){var n=[];r.startTime&&r.startTime.forEach((function(e){return n.push((0,s.Iu)("livestream.schedule.errors.start_time.".concat(e.errorCode.toLowerCase())))})),r.title&&r.title.forEach((function(e){return n.push((0,s.Iu)("livestream.schedule.errors.title.".concat(e.errorCode.toLowerCase())))})),r.description&&r.description.forEach((function(e){return n.push((0,s.Iu)("livestream.schedule.errors.description.".concat(e.errorCode.toLowerCase())))})),r.variants&&r.variants.forEach((function(t){var r,i;return n.push((0,s.Iu)("livestream.schedule.errors.variants.".concat(t.errorCode.toLowerCase()),{productName:null!==(r=t.item?null===(i=e.showProducts.find((function(e){return e.variants.find((function(e){return e.id===t.item}))})))||void 0===i?void 0:i.name:void 0)&&void 0!==r?r:"Unknown Variant (".concat(t.item,")")}))})),r.thumbnail&&r.thumbnail.forEach((function(e){return n.push((0,s.Iu)("livestream.schedule.errors.thumbnail.".concat(e.errorCode.toLowerCase())))})),r.discounts&&r.discounts.forEach((function(t){var r,i;return n.push((0,s.Iu)("livestream.schedule.errors.discounts.".concat(t.errorCode.toLowerCase()),{productName:null!==(r=t.item?null===(i=e.showProducts.find((function(e){return e.id===t.item})))||void 0===i?void 0:i.name:void 0)&&void 0!==r?r:"Unknown Product (".concat(t.item,")")}))})),re(n)}};if(e.show&&e.editing){var m,v,f=e.show;a.sO.updateShow(r,f.id,o.getTime()!==new Date(f.startTime).getTime()?o:void 0,h.trim()!==f.title?h.trim():void 0,w.trim()!==(null!==(m=f.description)&&void 0!==m?m:"")?w.trim():void 0,null===(v=e.productAndVariantIds.every((function(e){var t=e.variantId;return f.variants.includes(t)}))&&f.variants.every((function(t){return e.productAndVariantIds.find((function(e){return e.variantId===t}))}))?void 0:e.productAndVariantIds)||void 0===v?void 0:v.map((function(e){return e.variantId})),me?t:void 0,x!==f.publiclyListed?x:void 0,JSON.stringify(X)!==JSON.stringify(f.discounts)?X:void 0,void 0).then((function(){e.setShow(void 0),e.scheduled(e.show.id)}),p).finally((function(){ge.current&&T(!1)}))}else a.sO.createShow(r,o,h.trim(),""===w.trim()?void 0:w.trim(),e.productAndVariantIds.map((function(e){return e.variantId})),t,x,X,"NOTHING_FEATURED_BY_DEFAULT").then((function(t){return e.scheduled(t.showId)}),p).finally((function(){ge.current&&T(!1)}));T(!0)}else re([(0,s.Iu)("livestream.schedule.errors.variants.missing")]);else re([(0,s.Iu)("livestream.schedule.errors.start_time.missing")]);else re([(0,s.Iu)("livestream.schedule.errors.title.missing")]);else re([(0,s.Iu)("livestream.schedule.errors.no_user")]);else re([(0,s.Iu)("livestream.schedule.errors.thumbnail.missing")])}else re([(0,s.Iu)("livestream.schedule.errors.thumbnail.missing")])},disabled:!h||!h.trim()||!C||z||!D||A},e.show&&e.editing?A?(0,s.Iu)("livestream.schedule.confirmation.editing"):(0,s.Iu)("livestream.schedule.confirmation.edit"):A?(0,s.Iu)("livestream.schedule.confirmation.scheduling"):(0,s.Iu)("livestream.schedule.confirmation.schedule")))},K=function(e){var t,r;return n.createElement("div",{className:"liveshopping-product-card__discount"},n.createElement("div",{className:"liveshopping-product-card__discount-label"},(0,s.Iu)(e.translationKey)),n.createElement("div",{className:"liveshopping-product-card__discount-entry"},n.createElement("input",{type:"number",value:null!==(t=null===(r=e.discountConfig.productDiscounts[e.product.id])||void 0===r?void 0:r.amount[e.amountKey])&&void 0!==t?t:"",onChange:function(t){t.target.validity.valid&&e.onDiscountPercentageChanged(e.product.id,e.amountKey,t.target.valueAsNumber)},min:1,max:100}),"%"))},G=function(e){return e.searchProducts?n.createElement("div",{className:"liveshopping-broadcast-setup__wrapper"},n.createElement("p",{className:"liveshopping-broadcast-setup__button-back",onClick:e.goBack},"<"),n.createElement(N.H4,{id:"search-string",state:e.searchStringState,label:"livestream.schedule.search_products_by_title",labelStyle:"placeholder",type:"text"}),e.searchProducts.map((function(t,r){var i,a;return n.createElement("div",{key:r},n.createElement("div",{className:"liveshopping-broadcast-setup__pair liveshopping-broadcast-setup__pair--".concat(t.variants.every((function(t){return!e.productAndVariantIds.find((function(e){return e.variantId===t.id}))}))?"available":"unavailable"),onClick:function(){t.variants.every((function(t){return!e.productAndVariantIds.find((function(e){return e.variantId===t.id}))}))&&e.onChooseProduct(t)}},n.createElement("div",{className:"liveshopping-broadcast-setup__product-img-wrapper"},n.createElement("img",{className:"liveshopping-broadcast-setup__product-img",src:null===(i=t.img)||void 0===i?void 0:i.src,alt:null===(a=t.img)||void 0===a?void 0:a.alt}),n.createElement("p",{className:"liveshopping-broadcast-setup__product-name"},t.name)),n.createElement("p",null,">")),r+1<e.searchProducts.length&&n.createElement("hr",{className:"liveshopping-broadcast-setup__hr"}))}))):null},$=function(e){var t=(0,u.XM)();return(0,n.useEffect)((function(){e.showId&&a.sO.getShow(null,e.showId).then((function(r){t.current&&fetch(a.sO.getShowThumbnailUrl(r.id,{width:1024,height:1024}),{mode:"cors"}).then((function(e){return e.blob()})).then((function(e){return new Promise((function(t,r){var n=new FileReader;n.onloadend=function(){t(n.result)},n.onerror=function(e){r(e)},n.readAsDataURL(e)}))})).then((function(t){if(t){e.setShow(r),e.setProductAndVariantIds(r.variants.map((function(e,t){return{productId:r.products[t],variantId:e}})));var n=new Date(r.startTime).toISOString(),i=E.ou.fromISO(n).toLocal().toFormat("yyyy-MM-dd'T'HH:mm");e.setStreamSettings({title:r.title,description:r.description||"",time:i,image:t,publiclyListed:r.publiclyListed,discountConfig:r.discounts})}}))}))}),[e.showId,t]),e.show?n.createElement("div",{className:"liveshopping-broadcast-schedule__wrapper"},n.createElement(o._,{show:e.show,size:"medium"}),n.createElement("div",{className:"liveshopping-broadcast-setup__wrapper"},n.createElement("p",{className:"liveshopping-broadcast-setup__product-confirmation"},(0,s.Iu)("livestream.schedule.confirmation.product_list_description")),n.createElement(B,{productAndVariantIds:e.productAndVariantIds,showProducts:e.showProducts}),n.createElement("div",{className:"liveshopping-broadcast-setup__confirmation-footer"},n.createElement("p",null,e.show.publiclyListed?(0,s.Iu)("livestream.schedule.confirmation.publicly_listed"):(0,s.Iu)("livestream.schedule.confirmation.not_publicly_listed")),n.createElement(o.x,{showId:e.showId}),n.createElement("button",{type:"button",className:"bl-core-button bl-core-button--cta",onClick:function(){e.goToEditScreen()}},(0,s.Iu)("livestream.schedule.confirmation.edit")),n.createElement("button",{type:"button",className:"bl-core-button bl-core-button--cta",onClick:function(){e.goToDuplicateScreen()}},(0,s.Iu)("livestream.schedule.duplicate_event"))))):n.createElement(b.g,{alt:"accessibility.loading"})};const z=function(){var e=(0,C.UO)().showString,t=M((0,n.useState)([]),2),r=t[0],i=t[1],o=M((0,n.useState)(void 0),2),s=o[0],l=o[1],m=M((0,n.useState)(!1),2),v=m[0],f=m[1],g=(0,w.useApolloClient)(),b=M((0,n.useState)([]),2),y=b[0],_=b[1],E=M((0,n.useState)([]),2),O=E[0],A=E[1],k=(0,u.XM)(),T=(0,S.L)(),D=(0,N.FT)(""),V=(0,n.useRef)({entered:"",fetched:""});V.current.entered=D.currentValue;var R=(0,n.useMemo)((function(){return(0,P.tN)(T,["id","name","img","gwp"],["id","name"])}),[T]),W=R.productGql,q=R.productFns,U=R.variantFns;(0,n.useEffect)((function(){!O.length&&null!=s&&s.products.length&&r.length&&g.query({query:(0,I.Ps)(d||(d=x(["\n                query getProducts($ids: [ID!]!) {\n                    nodes(ids: $ids) {\n                        ...on Product {\n                            ","\n                        }\n                    }\n                }\n            "])),W),variables:{ids:s.products.map((function(e){return"gid://shopify/Product/".concat(e)}))}}).then((function(e){return Promise.all(e.data.nodes.map(function(){var e=j(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.m0)(t,q,U,T,g);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))})).then((function(e){k.current&&A(e.filter(Boolean))}))}),[T,g,k,r.length,q,W,null==s?void 0:s.products,O,U]),(0,n.useEffect)((function(){var e=D.currentValue;g.query({query:(0,I.Ps)(p||(p=x(["\n                query getProducts($query: String!) {\n                    products(first: 50, query: $query) {\n                        nodes {\n                            ","\n                        }\n                    }\n                }\n            "])),W),variables:{query:"title:*".concat(e.trim().replaceAll(":","*"),"*")}}).then((function(e){return Promise.all(e.data.products.nodes.map(function(){var e=j(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.m0)(t,q,U,T,g);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))})).then((function(t){var r=V.current,n=r.entered,i=r.fetched;k.current&&(n===e||n!==i&&Math.abs(n.length-i.length)>=Math.abs(n.length-e.length))&&(_(t.filter(Boolean)),V.current.fetched=e)}))}),[T,g,k,q,W,D.currentValue,U]);var F,H=null;e&&(H=null!==(F=a.sO.shortStringToUuid(e))&&void 0!==F?F:null);var B=M((0,n.useState)(H),2),K=B[0],z=B[1],Y=(0,c.kq)(),J=M((0,n.useState)(),2),Z=J[0],Q=J[1],ee=function(e){ie(ae.findIndex((function(t){return t.type===e})))};(0,n.useEffect)((function(){Y&&a.sO.isInfluencer(Y)&&ee(H?$:X)}),[Y,H]);var te=M((0,n.useState)(0),2),re=te[0],ne=te[1],ie=function(e){ne(e),window.scrollTo({top:0})};if(!Y||!a.sO.isInfluencer(Y))return n.createElement(c.Bj,{to:"/",mode:"replace"});var ae=[n.createElement(X,{showProducts:O,proceed:function(){return ie(re+1)},removeVariant:function(e){var t,n=null===(t=r.find((function(t){return t.variantId===e})))||void 0===t?void 0:t.productId,a=r.filter((function(t){return t.variantId!==e}));i(a),n&&!a.find((function(e){return e.productId===n}))&&A((function(e){return e.filter((function(e){return e.id!==n}))}))},productAndVariantIds:r,scheduled:function(e){z(e),ee($)},user:Y,saveStreamSettings:Q,streamSettings:Z,show:s,setShow:l,editing:v}),n.createElement(G,{productAndVariantIds:r,onChooseProduct:function(e){var t=e.variants[0];i((function(r){return r.filter((function(e){return e.variantId!==t.id})).concat({productId:e.id,variantId:t.id})})),ie(ae.findIndex((function(e){return e.type===X}))),O.find((function(t){return t.id===e.id}))||A((function(t){return t.concat([e])})),D.setCurrentValue("")},searchProducts:y,goBack:function(){return ie(re-1)},searchStringState:D}),n.createElement($,{showProducts:O,showId:K,productAndVariantIds:r,setStreamSettings:Q,setProductAndVariantIds:i,goToEditScreen:function(){f(!0),ee(X)},goToDuplicateScreen:function(){f(!1),Q(L(L({},Z),{},{time:"",publiclyListed:!1})),ee(X)},setShow:l,show:s})];return n.createElement(n.Fragment,null,n.createElement(h.Z,{title:"livestream.livestreams.title"}),ae[re])}}}]);
(self.webpackChunkrose_inc_web=self.webpackChunkrose_inc_web||[]).push([[427],{98427:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});r(34553),r(26699),r(32023),r(54747),r(9653),r(82526),r(41817),r(41539),r(32165),r(66992),r(78783),r(33948),r(47042),r(68309),r(91038),r(47941),r(57327),r(38880),r(49337);var n=r(67294),a=r(64853);const o=r.p+"3bcc315797e896c2201a4178c35f6e15.svg",c=r.p+"dea314938c5cd620d3f8cf73eca2f90e.svg",l=r.p+"e620f5db3e2585779cc4da370b83de32.svg",i=r.p+"269ca012000c25a6a0a950f34995f22a.svg";var s=r(96974);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const p=function(){var e=(0,s.s0)(),t=(0,n.useMemo)((function(){return window.shopData}),[]),r=function(e){return t.productDetails.findIndex((function(t){return t.handle===e}))},m=f((0,n.useState)((function(){var e=document.querySelector(".collection-images > .scroll-area > img.active");return Math.max(r(null==e?void 0:e.dataset.handle),0)})),2),p=m[0],v=m[1],h=document.querySelector(".collection-images.mobile > .scroll-area"),g=h.querySelectorAll("img"),y=document.querySelector(".collection-images:not(.mobile) > .scroll-area"),_=y.querySelectorAll("img"),b=document.querySelector(".up.arrow"),E=document.querySelector(".down.arrow"),w=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},a.defaultScrollState),S=(0,n.useRef)(!0);(0,n.useEffect)((function(){navigator.userAgent.toLowerCase().includes("firefox")&&document.querySelectorAll("img[draggable=false]").forEach((function(e){e.addEventListener("mousedown",(function(e){return e.preventDefault()}))}))}),[]);var C=function(){var e=y.scrollTop>0;b.classList.toggle("clickable",e);var t=y.scrollTop+y.clientHeight<y.scrollHeight;E.classList.toggle("clickable",t);var r=b.querySelector("img");r&&(r.src=e?o:l);var n=E.querySelector("img");n&&(n.src=t?c:i)};(0,n.useEffect)(C,[b,E]);var O=function(e){if(y){var t=130;if(_&&_.length>0){var r=_[0],n=window.getComputedStyle(r),a=Number(n.paddingTop)+Number(n.paddingBottom);isNaN(a)||(t=r.height+a)}y.scrollTop+=t*(e?-1:1)}};(0,n.useEffect)((function(){b.onclick=function(){return O(!0)},E.onclick=function(){return O(!1)}}),[E,b]),(0,n.useEffect)((function(){(0,a.initMouseDragScroll)(h,w,S,!1,10)}),[h]),(0,n.useEffect)((function(){y.onscroll=C,(0,a.initMouseDragScroll)(y,w,S,!0,10)}),[y]);return(0,n.useEffect)((function(){[g,_].forEach((function(n){null==n||n.forEach((function(a){a.onclick=function(){return function(n,a){if(S.current&&!n.classList.contains("active")){var o=n.dataset.handle;a.forEach((function(e){e.classList.toggle("active",e.dataset.handle===o)})),e("/pages/virtual-try-on/".concat(o));var c=r(o),l=t.productDetails[c];if(l){for(var i=document.getElementById("variant_scroll_wrapper");i.firstChild;)i.firstChild.remove();for(var s=document.getElementById("variant_shade_chooser_items_wrapper");s.firstChild;)s.firstChild.remove();var u=l.productVariants[0];l.productVariants.forEach((function(e){var r,n,a=l.selectedVariantId===e.id,o=document.createElement("div");o.id="variant_list_item_wrapper";var c=document.createElement("div");c.className="variant_list_item",a&&(c.className+="_selected",c.dataset.selected="true",u=e),c.dataset.colorname=e.colorName,c.dataset.variantId="".concat(e.id),c.dataset.bestmatch="false",c.onclick=function(){return t.handleColorOnClick(c,!1)},c.style.backgroundColor=null!==(r=e.colorHex)&&void 0!==r?r:"none";var d=e.colorTexture?"url(".concat(e.colorTexture,")"):"none";if(c.style.backgroundImage=d,e.available||e.comingSoon||(c.innerHTML+="<svg viewBox='0 0 100 100'><line x1='0' y1='100' x2='100' y2='0'/></svg>"),o.appendChild(c),e.flagTitle){var f=document.createElement("div");f.className="variant_list_item_flag ri-x-small",f.innerHTML=e.flagTitle,o.appendChild(f)}var m=document.createElement("div");m.className="variant_list_item_flag variant_list_item_flag_best_match ri-x-small weight-medium",m.innerHTML="&nbsp;",o.appendChild(m),i.appendChild(o);var p=document.createElement("div");p.className="variant_shade_chooser_item_wrapper",p.dataset.selected="".concat(a),p.dataset.colorname=e.colorName,p.onclick=function(){return t.handleColorOnClick(p,!1)};var v=document.createElement("div");v.className="variant_shade_chooser_left_wrapper";var h=document.createElement("div");h.className="variant_shade_chooser_title",h.innerText=e.title,v.appendChild(h);var g=document.createElement("div");g.className="variant_shade_chooser_subtitle",g.innerHTML=e.description,v.appendChild(g),p.appendChild(v);var y=document.createElement("div");y.className="variant_shade_chooser_item",a&&(y.className+="_selected"),y.style.backgroundColor=null!==(n=e.colorHex)&&void 0!==n?n:"none",y.style.backgroundImage=d,p.appendChild(y),s.appendChild(p)})),document.querySelectorAll(".product__title").forEach((function(e){e.textContent=l.title})),document.querySelectorAll(".product__body").forEach((function(e){e.innerHTML=l.description})),document.querySelectorAll(".product__form>a.see-more").forEach((function(e){e.setAttribute("href","/products/".concat(o,"#details"))}));var d=l.sizes;document.querySelectorAll(".size_select").forEach((function(e){e.classList.toggle("d-none",0===d.length);var r=e.querySelector("span:first-child"),n=u.size||d[0];r&&n&&(r.textContent=n);for(var a=e.querySelector(".size_select_options_wrapper");null!=a&&a.lastChild;)a.removeChild(a.lastChild);d.forEach((function(e){var r=document.createElement("div");r.classList.add("size_select_option"),r.onclick=function(){return t.handleSizeOptionOnClick(r)},r.dataset.size=e,r.dataset.selected="".concat(n===e),r.innerText=e,null==a||a.appendChild(r)}))})),v(c)}else console.error("'".concat(o,"' missing from collection"))}}(a,n)}}))}))}),[g,_]),n.createElement(a.default,{activeProductIndex:p,onVTOPage:!0})}}}]);
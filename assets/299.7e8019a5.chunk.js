(self.webpackChunkrose_inc_web=self.webpackChunkrose_inc_web||[]).push([[299],{56931:(e,t,r)=>{"use strict";r.d(t,{BA:()=>c});r(47941),r(82526),r(57327),r(38880),r(54747),r(49337),r(41817),r(41539),r(32165),r(66992),r(78783),r(33948),r(47042),r(68309),r(91038),r(19601);var n=r(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e){var t=l((0,n.useState)(),2),r=t[0],i=t[1],c=e.canClick,s=e.vertical,u=a(e,["canClick","vertical"]),f=function(e){e.currentTarget.classList.remove("bl-core-dragging"),i(void 0)};return n.createElement("div",o({},u,{onMouseDown:function(e){i({scrolling:!0,scrollPos:s?e.currentTarget.scrollTop:e.currentTarget.scrollLeft,mousePos:s?e.clientY:e.clientX}),c.current=!0,e.currentTarget.classList.add("bl-core-dragging")},onMouseUp:f,onMouseLeave:f,onPointerCancel:f,onTouchEnd:f,onMouseMove:function(e){var t;r&&(s?(e.currentTarget.scrollTop=r.scrollPos+(r.mousePos-e.clientY),t=Math.abs(e.currentTarget.scrollTop-r.scrollPos)):(e.currentTarget.scrollLeft=r.scrollPos+(r.mousePos-e.clientX),t=Math.abs(e.currentTarget.scrollLeft-r.scrollPos)),c.current=t<10)}}))}},53299:(e,t,r)=>{"use strict";r.r(t),r.d(t,{LiveShopping:()=>m,default:()=>v});r(82526),r(41817),r(41539),r(32165),r(66992),r(78783),r(33948),r(47042),r(68309),r(91038);var n=r(67294),o=r(73935),a=r(20185),l=r(93970),i=r(57154),c=r(90487),s=r(54703),u=r(38094),f=r(58905);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(){var e=document.getElementById("react-liveshopping-featured-show"),t=null==e?void 0:e.dataset.shortShowId,r=document.getElementById("react-liveshopping-upcoming-shows"),a=document.getElementById("react-liveshopping-previous-shows");return n.createElement(n.Fragment,null,t&&o.createPortal(n.createElement(n.Fragment,null,n.createElement("h1",null,(0,f.Iu)("livestream.profile_page.livestreams_title")),n.createElement(p,{shortShowId:t})),e),n.createElement(g,{upcomingPortal:r,previousPortal:a,featuredShortShowId:t}))},p=function(e){var t=a.sO.shortStringToUuid(e.shortShowId),r=(0,u.HY)(null!=t?t:"",{poll:!0}).show;return"loading"===r||"temporary error"===r?function(e){return n.createElement("div",{className:"liveshopping-watch__wrapper"},n.createElement("div",{className:"liveshopping-watch__status"},e))}(n.createElement(i.g,{alt:"accessibility.loading"})):"no such show"===r?null:n.createElement(s._,{show:r,size:"large",setWatchOnDemand:function(){window.location.href="".concat((0,u.bp)(r.id,!1),"?watch=true")}})},g=function(e){var t=(0,l.XM)(),r=h((0,n.useState)("loading"),2),o=r[0],s=r[1],u=h((0,l.KS)(0),2),f=u[0],d=u[1];return(0,n.useEffect)((function(){"loading"!==o||f||(d(5e3),a.sO.getPublicShows().then((function(e){t.current&&s(e)})).catch((function(e){console.error("getPublicShows error",e)})))}),[o,t,f,d,e.featuredShortShowId]),"loading"===o?n.createElement(i.g,{alt:"accessibility.loading"}):n.createElement(c.Z,{shows:o,displayCancelled:!1,featuredShortShowId:e.featuredShortShowId,upcomingPortal:e.upcomingPortal,previousPortal:e.previousPortal})};const v=m},90487:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});r(69826),r(57327),r(65069),r(84944),r(21249);var n=r(67294),o=r(56931),a=r(20185),l=r(54703),i=r(58905),c=r(38242);const s=function(e){var t=e.shows,r=e.displayCancelled,s=e.featuredShortShowId,u=e.edit,f=e.upcomingPortal,h=e.previousPortal,d=(0,n.useRef)(!0),m=s?a.sO.shortStringToUuid(s):void 0,p=t.find((function(e){return e.id===m&&("PENDING"===e.state||"RUNNING"===e.state)})),g=t.filter((function(e){return e.id!==m})),v=g.filter((function(e){return"RUNNING"===e.state})),y=g.filter((function(e){return"PENDING"===e.state})),w=g.filter((function(e){return"ENDED"===e.state||r&&"CANCELLED"===e.state})).reverse(),b=function(e){return e.showLists.some((function(e){return e.length>0}))?n.createElement(n.Fragment,null,n.createElement("h2",{className:"liveshopping-livestream-list__heading"},(0,i.Iu)(e.headerKey)),n.createElement(o.BA,{className:"liveshopping-livestream-list",canClick:d},e.showLists.map((function(e){return e.map((function(e,t){return n.createElement(l._,{show:e,key:t,canClick:d,edit:u})}))})).flat())):null};return n.createElement(n.Fragment,null,n.createElement(c.q,{portal:f,renderInline:!0},n.createElement(b,{showLists:[v,y],headerKey:p?"livestream.list.additional_upcoming_lives":"livestream.list.upcoming_lives"})),n.createElement(c.q,{portal:h,renderInline:!0},n.createElement(b,{showLists:[w],headerKey:"livestream.list.previous_lives"})))}},84944:(e,t,r)=>{"use strict";var n=r(82109),o=r(6790),a=r(47908),l=r(17466),i=r(99958),c=r(65417);n({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=a(this),r=l(t.length),n=c(t,0);return n.length=o(n,t,t,r,0,void 0===e?1:i(e)),n}})}}]);
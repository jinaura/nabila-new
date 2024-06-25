! function(t) {
    function e(e) {
        for (var r, s, l = e[0], u = e[1], c = e[2], d = 0, f = []; d < l.length; d++) s = l[d], Object.prototype.hasOwnProperty.call(o, s) && o[s] && f.push(o[s][0]), o[s] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
        for (a && a(e); f.length;) f.shift()();
        return i.push.apply(i, c || []), n()
    }

    function n() {
        for (var t, e = 0; e < i.length; e++) {
            for (var n = i[e], r = !0, l = 1; l < n.length; l++) {
                var u = n[l];
                0 !== o[u] && (r = !1)
            }
            r && (i.splice(e--, 1), t = s(s.s = n[0]))
        }
        return t
    }
    var r = {},
        o = {
            7: 0
        },
        i = [];

    function s(e) {
        if (r[e]) return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = t, s.c = r, s.d = function(t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function(t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) s.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "";
    var l = window.shopifySlateJsonp = window.shopifySlateJsonp || [],
        u = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var c = 0; c < l.length; c++) e(l[c]);
    var a = u;
    i.push([54, 0, 1]), n()
}({
    54: function(t, e, n) {
        "use strict";
        n.r(e),
            function(t) {
                n(16), n(17), n(18), n(5), n(6), n(7), n(8), n(3), n(9), n(55), window.jquery = t, window.$ = t, window.initProductsCarousel = function() {
                    t(".product-item__image").each((function() {
                        let e = t(this),
                            n = e.attr("src");
                        e.attr("src", function(t, e) {
                            let n = String(t);
                            return n.substring(0, n.lastIndexOf(".")) + "_250x250_crop_center" + n.substring(n.lastIndexOf("."))
                        }(n))
                    })), t(".product-carousel").slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: !0,
                        dots: !0,
                        infinite: !0,
                        prevArrow: '<button class="slick-prev slick-arrow--custom"><div class="shg-sld-nav-button shg-sld-left"></div></button>',
                        nextArrow: '<button class="slick-next slick-arrow--custom"><div class="shg-sld-nav-button shg-sld-right"></div></button>',
                        responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                infinite: !0,
                                dots: !0
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }]
                    })
                }, document.addEventListener("DOMContentLoaded", (function() {
                    setTimeout(() => {
                        window.initProductsCarousel(), document.querySelectorAll(".blog-article__main a").forEach(t => {
                            t.setAttribute("target", "_blank")
                        })
                    }, 250)
                }))
            }.call(this, n(0))
    },
    55: function(t, e, n) {}
});
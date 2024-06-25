(self.webpackChunkrose_inc_web = self.webpackChunkrose_inc_web || []).push([
    [179], {
        6848: (e, t, n) => {
            "use strict";
            n.d(t, {
                HK: () => r,
                l9: () => a,
                ZP: () => u
            });
            var r, a, o = n(3161);

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }! function(e) {
                e[e.ShadeFinder = 0] = "ShadeFinder", e[e.VTO = 1] = "VTO"
            }(r || (r = {})),
            function(e) {
                e[e.VideoFeed = 0] = "VideoFeed", e[e.UploadedPhoto = 1] = "UploadedPhoto"
            }(a || (a = {}));
            var u = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, r;
                return t = e, r = [{
                    key: "logSkinImageChoice",
                    value: function(e) {
                        o.Z.instance.log("skin_image_choice", !1, e)
                    }
                }, {
                    key: "logSkinUndertoneChoice",
                    value: function(e) {
                        o.Z.instance.log("skin_undertone_choice", !1, e)
                    }
                }, {
                    key: "logSkinConcernChoice",
                    value: function(e) {
                        o.Z.instance.log("skin_concern_choice", !1, e)
                    }
                }, {
                    key: "logSkinDesiredCoverage",
                    value: function(e) {
                        o.Z.instance.log("skin_desired_coverage", !1, e)
                    }
                }, {
                    key: "logSkinToneAnalysis",
                    value: function(e) {
                        o.Z.instance.log("skin_tone_analysis", !1, e)
                    }
                }, {
                    key: "logVtoStarted",
                    value: function(e) {
                        o.Z.instance.log("vto_started", !1, e)
                    }
                }, {
                    key: "logVtoEnded",
                    value: function(e) {
                        o.Z.instance.log("vto_ended", !1, e)
                    }
                }, {
                    key: "logVtoItemChanged",
                    value: function(e) {
                        o.Z.instance.log("vto_item_changed", !1, e)
                    }
                }, {
                    key: "logVtoBeforeAfterSliderShown",
                    value: function(e) {
                        o.Z.instance.log("vto_before_after_slider_shown", !0, e)
                    }
                }, {
                    key: "logVtoPhotoTaken",
                    value: function(e) {
                        o.Z.instance.log("vto_photo_taken", !0, e)
                    }
                }, {
                    key: "logVtoSaveImageToDevice",
                    value: function(e) {
                        o.Z.instance.log("vto_save_image_to_device", !0, e)
                    }
                }, {
                    key: "logVtoShareImage",
                    value: function(e) {
                        o.Z.instance.log("vto_share_image", !0, e)
                    }
                }, {
                    key: "logVtoFindShade",
                    value: function(e) {
                        o.Z.instance.log("vto_find_shade", !0, e)
                    }
                }, {
                    key: "logAddToBag",
                    value: function(e) {
                        o.Z.instance.log("add_to_bag", !1, e)
                    }
                }, {
                    key: "logShadeFinderStarted",
                    value: function(e) {
                        o.Z.instance.log("shade_finder_started", !0, e)
                    }
                }, {
                    key: "logShadeFinderSkipCamera",
                    value: function(e) {
                        o.Z.instance.log("shade_finder_skip_camera", !0, e)
                    }
                }, {
                    key: "logShadeFinderCameraTurnedOn",
                    value: function(e) {
                        o.Z.instance.log("shade_finder_camera_turned_on", !0, e)
                    }
                }, {
                    key: "logShadeFinderRecommendation",
                    value: function(e) {
                        o.Z.instance.log("shade_finder_recommendation", !1, e)
                    }
                }, {
                    key: "logShadeFinderHowToUse",
                    value: function(e) {
                        o.Z.instance.log("shade_finder_click_how_to_use", !1, e)
                    }
                }, {
                    key: "logVtoLoaded",
                    value: function(e) {
                        o.Z.instance.log("vto_loaded", !1, e)
                    }
                }, {
                    key: "logVtoLiveVideoStats",
                    value: function(e) {
                        o.Z.instance.log("vto_live_video_stats", !1, e)
                    }
                }, {
                    key: "logVtoLiveVideoSample",
                    value: function(e) {
                        o.Z.instance.log("vto_live_video_sample", !1, e)
                    }
                }], (n = null) && i(t.prototype, n), r && i(t, r), e
            }()
        },
        45410: (e, t, n) => {
            "use strict";
            var r, a;
            n.d(t, {
                    PD: () => i,
                    gw: () => u
                }),
                function(e) {
                    e[e.FullFace = 0] = "FullFace", e[e.Brows = 1] = "Brows"
                }(r || (r = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.MultiClass = 1] = "MultiClass", e[e.Eyebrows = 2] = "Eyebrows"
                }(a || (a = {}));
            var o = {
                    "VTO-5-1": {
                        type: r.FullFace,
                        aspectRatio: 4 / 7,
                        modelList: n(63856)
                    },
                    "VTO-5-2": {
                        type: r.FullFace,
                        aspectRatio: 4 / 7,
                        modelList: n(36227)
                    },
                    "FUTest-Brows-6": {
                        type: r.Brows,
                        aspectRatio: 4 / 7,
                        modelList: n(5380)
                    }
                },
                i = function(e) {
                    return o[function(e) {
                        var t, n;
                        return "brow-renew" === (null === (t = e.data.currentProduct) || void 0 === t ? void 0 : t.handle) ? "FUTest-Brows-6" : "satin-shimmer-duet-eyeshadow" === (null === (n = e.data.currentProduct) || void 0 === n ? void 0 : n.handle) ? "VTO-5-2" : "VTO-5-1"
                    }(e)]
                },
                u = function(e) {
                    if (void 0 !== e) return e.type === r.Brows ? a.Eyebrows : a.MultiClass
                }
        },
        75423: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(67294),
                a = n(55557);
            const o = function(e) {
                return r.createElement("div", {
                    className: "loading" + (e.vtoText ? " with-vto-text" : "")
                }, r.createElement("img", {
                    src: a.Z,
                    alt: "loading..."
                }), e.vtoText ? r.createElement("p", null, "Loading Virtual Try On...") : null)
            }
        },
        56311: (e, t, n) => {
            "use strict";
            n.d(t, {
                ij: () => r,
                Qc: () => u,
                Zn: () => c
            });
            var r, a = n(67294),
                o = n(12464),
                i = n(61167);
            ! function(e) {
                e[e.NotAborted = 0] = "NotAborted", e[e.GeneralAbort = 1] = "GeneralAbort", e[e.ManifestDownloadFailed = 2] = "ManifestDownloadFailed", e[e.OutOfExecutableMemory = 3] = "OutOfExecutableMemory", e[e.WebGLNotSupported = 4] = "WebGLNotSupported", e[e.WasmNotSupported = 5] = "WasmNotSupported"
            }(r || (r = {}));
            var u = function() {
                    return {
                        productsForDisplay: null,
                        unityInstance: null,
                        printDebug: !1,
                        pluginAborted: r.NotAborted,
                        currentProduct: null,
                        currentProductVariant: null,
                        showVtoButtons: !1,
                        isPluginReady: !1,
                        outbound: {
                            isLoading: !0,
                            cameraIsAsking: !1,
                            cameraIsAllowed: !1,
                            cameraIsBlocked: !1,
                            cameraIsSuccessfullyActive: !1,
                            cameraInitialisationResult: i.Z.None,
                            hadStartupError: !1,
                            hadModelError: !1,
                            hadSwitchStateError: !1
                        },
                        pluginPortal: (0, o.oD)(),
                        showAugmentationMaskSlider: !1,
                        augmentationMaskSlider: 0,
                        vtoLookType: null,
                        vtoVariant: "",
                        sourceImage: null,
                        imageTaken: null,
                        sourcePromptOpen: !0
                    }
                },
                c = (0, a.createContext)({
                    data: u(),
                    setCurrentProductVariant: function(e) {},
                    syncInboundState: function(e, t) {},
                    setShowAugmentationMaskSlider: function(e) {},
                    setAugmentationMaskSlider: function(e) {},
                    setImageTaken: function(e) {},
                    setVtoLookType: function(e) {},
                    setVtoVariant: function(e) {},
                    setSourceImage: function(e) {},
                    setSourcePromptOpen: function(e) {},
                    setColorSelected: function(e) {},
                    setBestMatch: function(e) {}
                })
        },
        43109: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => G,
                k: () => q
            });
            n(35666), n(21249), n(19601), n(47941), n(92222), n(41539), n(88674), n(82526), n(41817), n(69826), n(9653), n(74916), n(64765), n(54747), n(23123), n(15306), n(32165), n(66992), n(78783), n(33948), n(47042), n(68309), n(91038), n(57327), n(38880), n(49337);
            var r = n(67294),
                a = n(61167),
                o = n(56311),
                i = n(12464),
                u = n(73293),
                c = n(73902);

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        d(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var m = {
                    aspect: .9,
                    screenWidthUseVw: 100
                },
                p = {
                    aspect: 1.15,
                    screenWidthUseVw: 63
                },
                f = l(l({}, p), {}, {
                    screenHeightUseVw: p.screenWidthUseVw / p.aspect,
                    getWidthFromHeight: !0,
                    maxWidth: 920,
                    maxHeight: 800
                }),
                g = l(l({}, f), {}, {
                    screenWidthUseVw: 100,
                    getWidthFromHeight: !1,
                    minWidth: 506,
                    subtractFixedWidth: 640
                });
            const v = function(e) {
                var t = e.hidden,
                    n = e.useVTOPageSize,
                    a = (0, r.useContext)(o.Zn).data,
                    s = (0, u.nD)(n),
                    l = (0, c.df)();
                return (0, r.useEffect)((function() {
                    ! function() {
                        var e = a.unityInstance ? a.unityInstance.Module : void 0;
                        if (void 0 !== e && void 0 !== e.canvas) {
                            var t, r, o, i = s ? m : n ? g : f,
                                u = i.aspect;
                            i.getWidthFromHeight && void 0 !== i.screenHeightUseVw ? (r = Math.round(l * i.screenHeightUseVw / 100), void 0 !== i.minHeight && (r = Math.max(r, i.minHeight)), i.maxHeight && (r = Math.min(r, i.maxHeight)), t = Math.round(u * r)) : (t = Math.round(l * i.screenWidthUseVw / 100), t -= null !== (o = i.subtractFixedWidth) && void 0 !== o ? o : 0, void 0 !== i.minWidth && (t = Math.max(t, i.minWidth)), void 0 !== i.maxWidth && (t = Math.min(t, i.maxWidth)), r = Math.round(t / u)), t === e.canvas.width && r === e.canvas.height || (e.canvas.width = t, e.canvas.height = r, void 0 !== e.vto.pausePlayer && e.vto.pausePlayer(!1)), e.canvas.parentElement.style.width = t + "px", e.canvas.parentElement.style.height = r + "px"
                        }
                    }()
                }), [s, l]), null === a.currentProductVariant || null === a.productsForDisplay ? null : r.createElement("div", {
                    className: "portal-container",
                    style: {
                        opacity: t ? 0 : 1
                    }
                }, r.createElement(i.t0, {
                    node: a.pluginPortal
                }))
            };
            var _ = n(75423),
                h = n(85518);
            const b = n.p + "09c4754241d1d41ed5d8a6b3c3e10c2f.svg";
            var E = n(4022);

            function y(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function A(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            y(o, r, a, i, u, "next", e)
                        }

                        function u(e) {
                            y(o, r, a, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function P(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = A(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e) {
                                    return setTimeout(e, t)
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            n(98145), n(39575), n(82472), n(92990), n(18927), n(33105), n(35035), n(74345), n(7174), n(32846), n(44731), n(77209), n(96319), n(58867), n(37789), n(33739), n(29368), n(14483), n(12056), n(3462), n(30678), n(27462), n(33824), n(55021), n(12974), n(15016);
            var S, I = (S = Uint8Array.from(atob("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="), (function(e) {
                    return e.charCodeAt(0)
                })).buffer, new File([S], "test.png", {
                    type: "image/png"
                })),
                R = n(45410),
                k = n(36334),
                O = n(6848),
                T = n(67719),
                C = n(65116),
                N = n(79198),
                x = n(3161);

            function M(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function U(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            M(o, r, a, i, u, "next", e)
                        }

                        function u(e) {
                            M(o, r, a, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function L(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(n), !0).forEach((function(t) {
                        F(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function F(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function j(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return V(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return V(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var q = function(e, t, n, r) {
                    var a;
                    if (null !== (a = e.target.files) && void 0 !== a && a.length) {
                        var o = e.target.files[0];
                        if (o) {
                            var i = new FileReader;
                            i.addEventListener("load", (function() {
                                var e = this.result;
                                if (e) {
                                    var r = document.createElement("img"),
                                        a = e;
                                    r.onload = function() {
                                        var e = 2048;
                                        if (r.naturalWidth > e || r.naturalHeight > e) {
                                            var o, i, u = document.createElement("canvas"),
                                                c = u.getContext("2d");
                                            if (c) r.naturalWidth > r.naturalHeight ? i = (o = e) * r.naturalHeight / r.naturalWidth : o = (i = e) * r.naturalWidth / r.naturalHeight, u.width = o, u.height = i, c.drawImage(r, 0, 0, r.naturalWidth, r.naturalHeight, 0, 0, o, i), a = u.toDataURL("image/jpeg", null != n ? n : .92);
                                            else console.error("Failed to get context2d")
                                        }
                                        t(a)
                                    }, r.onerror = function(e) {
                                        console.error("Failed to load image", e)
                                    }, r.src = e
                                }
                            }), !1), i.addEventListener("error", (function(e) {
                                console.error("Failed to create data URI", e)
                            })), i.readAsDataURL(o), null == r || r.setSourcePromptOpen(!1)
                        }
                    }
                },
                B = function() {
                    return !h.nI && (navigator.canShare && navigator.canShare({
                        files: [I]
                    }) || h.G6)
                },
                H = function() {
                    return void 0 !== document.createElement("a").download && !(h.gn && !h.G6)
                };
            const G = function(e) {
                var t, n, i, c, s, l = (0, r.useContext)(o.Zn),
                    d = l.data,
                    m = (0, u.nD)(),
                    p = (0, u.nD)(e.onVTOPage),
                    f = (0, r.useMemo)((function() {
                        var e, t;
                        return null !== (e = null === (t = d.currentProductVariant) || void 0 === t ? void 0 : t.vto) && void 0 !== e ? e : {
                            products: [],
                            variants: {}
                        }
                    }), [d.currentProductVariant]),
                    g = void 0 === f.products,
                    y = j((0, r.useState)(!1), 2),
                    A = y[0],
                    w = y[1];
                (0, r.useEffect)((function() {
                    if (null !== d.unityInstance && void 0 !== d.unityInstance.Module.vto && void 0 !== d.unityInstance.Module.vto.inbound && w) {
                        var t, n = d.unityInstance.Module.vto.inbound;
                        if (d.outbound.hadModelError || d.outbound.hadSwitchStateError && d.outbound.cameraInitialisationResult === a.Z.Success) return void(n.state.ShowCamera && (n.state.ShowCamera = !1, l.syncInboundState(d.unityInstance, "state.ShowCamera")));
                        var r = (t = g ? null !== d.vtoLookType && d.vtoLookType in f ? f[d.vtoLookType] : {
                                products: [],
                                variants: {}
                            } : f).variants[d.vtoVariant],
                            o = t.products.map((function(e, t) {
                                var n = D({}, e);
                                return r && r[t] && Object.assign(n, r[t]), n
                            }));
                        w(Object.keys(t.variants).length > 0 && !g), e.showPlugin && d.outbound.cameraIsAllowed && JSON.stringify(n.activeProducts) !== JSON.stringify(o) ? (n.activeProducts = o, l.syncInboundState(d.unityInstance, "activeProducts")) : !e.showPlugin && n.state.ShowCamera && (n.state.ShowCamera = !1, l.syncInboundState(d.unityInstance, "state.ShowCamera")), e.showPlugin && !n.state.ShowCamera && (n.state.ShowCamera = !0, l.syncInboundState(d.unityInstance, "state.ShowCamera")), d.sourceImage !== n.state.StillImageUrl && (n.state.StillImageUrl = d.sourceImage, l.syncInboundState(d.unityInstance, "state.StillImageUrl")), d.augmentationMaskSlider !== n.augmentationMaskSlider && (n.augmentationMaskSlider = d.augmentationMaskSlider, l.syncInboundState(d.unityInstance, "augmentationMaskSlider"));
                        var i = (0, R.PD)(l);
                        e.showPlugin && JSON.stringify(n.faceModels) !== JSON.stringify(null == i ? void 0 : i.modelList) && (n.faceModels = null == i ? void 0 : i.modelList, l.syncInboundState(d.unityInstance, "faceModels"));
                        var u = (0, R.gw)(i);
                        e.showPlugin && n.segmentationRenderMode !== u && (n.segmentationRenderMode = u, l.syncInboundState(d.unityInstance, "segmentationRenderMode")), e.showPlugin || se(!0)
                    }
                }), [d.currentProductVariant, d.unityInstance, d.outbound, d.augmentationMaskSlider, d.vtoLookType, d.vtoVariant, w, e.showPlugin, d.sourceImage, d.sourcePromptOpen, l, g, f]);
                var S = j((0, r.useState)(!1), 2),
                    I = S[0],
                    M = S[1];
                (0, r.useEffect)((function() {
                    d.outbound.cameraIsAsking ? setTimeout((function() {
                        var e = d.unityInstance.Module.vto.outbound.cameraIsAsking;
                        M(e)
                    }), 300) : M(d.outbound.cameraIsAsking)
                }), [d.unityInstance, d.outbound]), (0, r.useEffect)((function() {
                    re(!1), ie(!1), l.setShowAugmentationMaskSlider(!1), e.showPlugin || d.pluginAborted !== o.ij.NotAborted || d.outbound.hadModelError || d.outbound.hadSwitchStateError || d.outbound.cameraInitialisationResult !== a.Z.None && d.outbound.cameraInitialisationResult !== a.Z.Success || (l.setSourcePromptOpen(!1), l.setSourceImage(null))
                }), [e.showPlugin]);
                var L, F = j((0, r.useState)(!1), 2),
                    V = F[0],
                    G = F[1],
                    Z = j((0, r.useState)(!1), 2),
                    W = Z[0],
                    Y = Z[1],
                    K = j((0, r.useState)(null), 2),
                    X = K[0],
                    z = K[1],
                    J = j((0, r.useState)(!1), 2),
                    Q = J[0],
                    $ = J[1],
                    ee = j((0, r.useState)(!1), 2),
                    te = ee[0],
                    ne = ee[1],
                    re = function(e) {
                        $(e), e && ne(!0)
                    },
                    ae = j((0, r.useState)(!1), 2),
                    oe = ae[0],
                    ie = ae[1],
                    ue = j((0, r.useState)(!0), 2),
                    ce = ue[0],
                    se = ue[1],
                    le = j((0, r.useState)(!1), 2),
                    de = le[0],
                    me = le[1],
                    pe = function(e) {
                        me(e), e || tt(Math.round(et)), e && ce && se(!1)
                    },
                    fe = j((0, r.useState)(!0), 2),
                    ge = fe[0],
                    ve = fe[1],
                    _e = j((0, r.useState)(!1), 2),
                    he = _e[0],
                    be = _e[1],
                    Ee = function(e) {
                        be(e), e || Ye(Math.round(We)), e && ge && ve(!1)
                    },
                    ye = j((0, r.useState)(!1), 2),
                    Ae = ye[0],
                    Pe = ye[1],
                    we = j((0, r.useState)(!1), 2),
                    Se = we[0],
                    Ie = we[1],
                    Re = j((0, r.useState)(!1), 2),
                    ke = Re[0],
                    Oe = Re[1],
                    Te = j((0, r.useState)(!1), 2),
                    Ce = Te[0],
                    Ne = Te[1],
                    xe = j((0, r.useState)(null), 2),
                    Me = xe[0],
                    Ue = xe[1],
                    Le = function() {
                        var e, t, n, r = (null === (e = d.currentProductVariant) || void 0 === e ? void 0 : e.colorName) || (null === (t = d.currentProductVariant) || void 0 === t ? void 0 : t.title);
                        return "Rose Inc Virtual Try-on - ".concat(null === (n = d.currentProduct) || void 0 === n ? void 0 : n.title, " - ").concat(r, ".png")
                    },
                    De = function() {
                        var e = U(regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (G(!0), null !== d.sourceImage) {
                                            e.next = 14;
                                            break
                                        }
                                        return z(3), e.next = 5, P(1e3);
                                    case 5:
                                        return z(null), z(2), e.next = 9, P(1e3);
                                    case 9:
                                        return z(null), z(1), e.next = 13, P(1e3);
                                    case 13:
                                        z(null);
                                    case 14:
                                        t = Fe(), l.setImageTaken(t), Y(!0);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Fe = function() {
                        var e = d.unityInstance.Module.canvas,
                            t = document.createElement("canvas");
                        t.width = e.width, t.height = e.height;
                        var n = t.getContext("2d");
                        if (!n) return null;
                        n.drawImage(e, 0, 0);
                        var r = t.toDataURL();
                        return "data:," === r ? null : r
                    },
                    je = function() {
                        var e = U(regeneratorRuntime.mark((function e(t) {
                            var n, r, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, fetch(t);
                                    case 2:
                                        return e.next = 4, e.sent.blob();
                                    case 4:
                                        if (n = e.sent, r = new File([n], Le(), {
                                                type: n.type
                                            }), a = {
                                                files: [r]
                                            }, !navigator.canShare || !navigator.canShare(a)) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 10, navigator.share(a);
                                    case 10:
                                        e.next = 14;
                                        break;
                                    case 12:
                                        h.G6 && h.gn ? Ie(!0) : h.G6 && h.Q5 && Oe(!0), Pe(!Ae);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ve = function(e) {
                        var t = document.createElement("a");
                        document.body.appendChild(t), t.download = Le(), t.href = e, t.click(), document.body.removeChild(t)
                    },
                    qe = function() {
                        var e = U(regeneratorRuntime.mark((function e() {
                            var t, n, r, a, o, i, u, c, s, p, f, g, v, _;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, m && re(!1), Ne(!0), i = null, u = 5e5, null === d.sourceImage) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 8, (0, C.IA)(d.sourceImage, 1, u);
                                    case 8:
                                        if (e.t1 = c = e.sent, e.t0 = null !== e.t1, !e.t0) {
                                            e.next = 12;
                                            break
                                        }
                                        e.t0 = void 0 !== c;
                                    case 12:
                                        if (!e.t0) {
                                            e.next = 16;
                                            break
                                        }
                                        e.t2 = c, e.next = 17;
                                        break;
                                    case 16:
                                        e.t2 = null;
                                    case 17:
                                        i = e.t2, e.next = 23;
                                        break;
                                    case 20:
                                        s = d.unityInstance.Module.vto.getCameraVideoElement(), void 0 !== (p = (0, C.Tx)(s, 2, !1)) && (i = null !== (f = (0, C.Eu)(p, u)) && void 0 !== f ? f : null);
                                    case 23:
                                        if (null != i) {
                                            e.next = 27;
                                            break
                                        }
                                        return console.error("Failed to take image for shade match"), Ue("Sorry, something went wrong finding a shade match for you.  Please try again later."), e.abrupt("return");
                                    case 27:
                                        return e.next = 29, (0, E.Z)(i, O.HK.VTO);
                                    case 29:
                                        if (null == (g = e.sent) || null === (t = g.warning) || void 0 === t || !t.description) {
                                            e.next = 33;
                                            break
                                        }
                                        return Ue(g.warning.description), e.abrupt("return");
                                    case 33:
                                        if (g && g.skinTone) {
                                            e.next = 36;
                                            break
                                        }
                                        return Ue("Sorry, we didn't manage to find a shade match for you.  Please try again later."), e.abrupt("return");
                                    case 36:
                                        if (d.currentProduct) {
                                            e.next = 40;
                                            break
                                        }
                                        return console.error("Missing product in shade match"), Ue("Sorry, we encountered a problem finding a shade match.  Please try again later."), e.abrupt("return");
                                    case 40:
                                        if (v = null === (n = d.currentProduct) || void 0 === n ? void 0 : n.variants.reduce((function(e, t) {
                                                if (!e && !t.skintone) return null;
                                                if (!e) return t;
                                                if (!t.skintone) return e;
                                                var n = Math.round(g.skinTone);
                                                return Math.abs(t.skintone - n) < Math.abs(e.skintone - n) ? t : e
                                            }), null)) {
                                            e.next = 45;
                                            break
                                        }
                                        return console.error("No recommended variant for ".concat(g.skinTone, " found")), Ue("Sorry, we encountered a problem finding a shade match.  Please try again later."), e.abrupt("return");
                                    case 45:
                                        O.ZP.logVtoFindShade({
                                            product_handle: null !== (r = null === (a = d.currentProduct) || void 0 === a ? void 0 : a.handle) && void 0 !== r ? r : null,
                                            shade_name: null !== (o = v.colorName) && void 0 !== o ? o : null,
                                            variant_id: v.shortID,
                                            event_id: g.eventId
                                        }), l.setBestMatch(v.colorName), l.setColorSelected(v.colorName), e.next = 55;
                                        break;
                                    case 50:
                                        e.prev = 50, e.t3 = e.catch(0), console.error(e.t3), null === k.Z || void 0 === k.Z || null === (_ = k.Z.instance) || void 0 === _ || _.reportError(null === e.t3 || void 0 === e.t3 ? void 0 : e.t3.message, null === e.t3 || void 0 === e.t3 ? void 0 : e.t3.stack), Ue("Sorry, something went wrong finding your shade.  Please try again later.");
                                    case 55:
                                        return e.prev = 55, Ne(!1), e.finish(55);
                                    case 58:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 50, 55, 58]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Be = void 0 !== (null == (L = d.currentProduct) ? void 0 : L.variants.find((function(e) {
                        return e.skintone
                    }))),
                    He = {
                        lighter: 0,
                        default: 1,
                        darker: 2
                    },
                    Ge = d.vtoVariant in He ? He[d.vtoVariant] : He.default,
                    Ze = j((0, r.useState)(0), 2),
                    We = Ze[0],
                    Ye = Ze[1],
                    Ke = {
                        default: 1,
                        lighter: 0
                    },
                    Xe = j((0, r.useState)("duet"), 2),
                    ze = Xe[0],
                    Je = Xe[1],
                    Qe = function(e) {
                        Je(e), l.setVtoLookType(e)
                    };
                (0, r.useEffect)((function() {
                    tt(He.default), Ye(0);
                    var e = "duet";
                    Je(e), g ? l.setVtoLookType(e) : l.setVtoLookType(null), l.setVtoVariant("")
                }), [d.currentProduct]);
                var $e = j((0, r.useState)(Ge), 2),
                    et = $e[0],
                    tt = $e[1],
                    nt = j((0, r.useState)(!1), 2),
                    rt = nt[0],
                    at = nt[1],
                    ot = (0, r.useCallback)((function() {
                        var e, t, n, r, a, o;
                        return {
                            product_handle: null !== (e = null === (t = d.currentProduct) || void 0 === t ? void 0 : t.handle) && void 0 !== e ? e : null,
                            shade_name: null !== (n = null === (r = d.currentProductVariant) || void 0 === r ? void 0 : r.colorName) && void 0 !== n ? n : null,
                            variant_id: null !== (a = null === (o = d.currentProductVariant) || void 0 === o ? void 0 : o.shortID) && void 0 !== a ? a : null
                        }
                    }), [null === (t = d.currentProduct) || void 0 === t ? void 0 : t.handle, null === (n = d.currentProductVariant) || void 0 === n ? void 0 : n.colorName, null === (i = d.currentProductVariant) || void 0 === i ? void 0 : i.shortID]),
                    it = (0, r.useRef)(ot());
                (0, r.useEffect)((function() {
                    it.current = ot(), e.showPlugin && JSON.stringify(it.current) !== JSON.stringify(Ot.current) && (O.ZP.logVtoItemChanged(it.current), Ot.current = it.current)
                }), [ot, e.showPlugin]);
                var ut = (0, r.useRef)(null),
                    ct = (0, r.useRef)(null),
                    st = (0, r.useRef)(0),
                    lt = (0, r.useRef)(null),
                    dt = (0, r.useRef)(null),
                    mt = (0, r.useRef)(!1);
                mt.current = !1;
                var pt = (0, r.useRef)(0),
                    ft = (0, r.useRef)(null),
                    gt = (0, r.useRef)(null),
                    vt = (0, r.useCallback)((function() {
                        if (null !== ut.current) {
                            var e = (new Date).getTime(),
                                t = (e - ut.current) / 1e3,
                                n = null === ct.current ? null : (e - ct.current) / 1e3;
                            ut.current = null, O.ZP.logVtoEnded(D(D({}, it.current), {}, {
                                session_length: t,
                                time_since_loaded: n
                            })), Ot.current = null
                        }
                    }), []),
                    _t = (0, r.useCallback)((function(e, t) {
                        ut.current = (new Date).getTime(), O.ZP.logVtoStarted(D(D({}, it.current), {}, {
                            source: e,
                            resume: t
                        })), Ot.current = it.current
                    }), []),
                    ht = (0, r.useCallback)((function(t) {
                        _t(t, !1), e.setShowPlugin(!0)
                    }), [_t, e]),
                    bt = function() {
                        e.showPlugin && (vt(), ct.current = null, null !== lt.current && (window.clearTimeout(lt.current), lt.current = null), null !== dt.current && (window.clearInterval(dt.current), dt.current = null), null !== ft.current && (window.clearTimeout(ft.current), ft.current = null), null !== gt.current && (window.clearInterval(gt.current), gt.current = null)), Rt(!1), e.setShowPlugin(!1)
                    },
                    Et = (0, r.useCallback)((function(e) {
                        q(e, (function(e) {
                            l.setSourceImage(e), ht(O.l9.UploadedPhoto), l.setSourcePromptOpen(!1)
                        }), 1, l)
                    }), [ht, l]),
                    yt = (0, r.useCallback)((function() {
                        90 === Math.abs(Number(window.orientation)) ? at(!0) : (l.setSourceImage(null), ht(O.l9.VideoFeed), l.setSourcePromptOpen(!1))
                    }), [ht, l]),
                    At = j((0, r.useState)(!1), 2),
                    Pt = At[0],
                    wt = At[1],
                    St = j((0, r.useState)(!1), 2),
                    It = St[0],
                    Rt = St[1];
                (0, r.useEffect)((function() {
                    var e, t = null === (e = (0, N.m)(window.location.search)) || void 0 === e ? void 0 : e.vto;
                    "camera" !== t && "upload" !== t || Rt(!0)
                }), []), (0, r.useEffect)((function() {
                    document.querySelectorAll(".try_on_cta").forEach((function(e) {
                        var t, n = e,
                            r = null === (t = n.parentElement) || void 0 === t ? void 0 : t.querySelector(".product_options_modal");
                        if (r) {
                            n.onclick = function() {
                                !1 === (null == r ? void 0 : r.classList.contains("d-flex")) && r.classList.add("d-flex")
                            }, r.onclick = function(e) {
                                return "INPUT" === e.target.tagName
                            }, r.querySelector("button").onclick = function() {
                                l.setSourcePromptOpen(!0), yt(), r.classList.remove("d-flex")
                            };
                            var a = r.querySelector('input[type="file"]');
                            a.onchange = function(e) {
                                var t;
                                0 !== (null === (t = a.files) || void 0 === t ? void 0 : t.length) && (l.setSourcePromptOpen(!0), r.classList.remove("d-flex"), Et(e))
                            }, r.querySelector("label").onclick = function() {
                                return a.click()
                            }
                        }
                    }))
                }), [Et, yt, l]), (0, r.useEffect)((function() {
                    var t, n, r = e.showPlugin;
                    (null === (t = document.querySelector(".try_on_cta")) || void 0 === t || t.classList.toggle("dont-show", r), r || d.sourcePromptOpen) && (null === (n = document.querySelector(".try_on_cta + .product_options_modal")) || void 0 === n || n.classList.remove("d-flex"))
                }), [d, e.showPlugin]), (0, r.useEffect)((function() {
                    var e, t = null === (e = (0, N.m)(window.location.search)) || void 0 === e ? void 0 : e.vto;
                    if (!d.outbound.isLoading && !Pt && t) {
                        if (wt(!0), "camera" === t) l.setSourceImage(null), ht(O.l9.VideoFeed);
                        else {
                            if ("upload" !== t) return;
                            var n = sessionStorage.getItem("imageDataUri");
                            if (!n) return;
                            l.setSourceImage(n), ht(O.l9.UploadedPhoto)
                        }
                        l.setSourcePromptOpen(!1)
                    }
                }), [d.outbound.isLoading, Pt, ht, l]), (0, r.useEffect)((function() {
                    if (e.showPlugin) {
                        var t = function(e) {
                                "hidden" === document.visibilityState ? null !== ut.current && vt() : "visible" === document.visibilityState && null === ut.current && _t(null === d.sourceImage ? O.l9.VideoFeed : O.l9.UploadedPhoto, !0)
                            },
                            n = function(e) {
                                null !== ut.current && vt()
                            },
                            r = function(e) {
                                null === ut.current && _t(null === d.sourceImage ? O.l9.VideoFeed : O.l9.UploadedPhoto, !0)
                            };
                        return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", n), window.addEventListener("pageshow", r),
                            function() {
                                document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", n), window.removeEventListener("pageshow", r)
                            }
                    }
                }), [vt, _t, d.sourceImage, e.showPlugin]);
                var kt, Ot = (0, r.useRef)(null);
                if (e.showPlugin || d.sourcePromptOpen) {
                    var Tt = void 0;
                    if (d.pluginAborted !== o.ij.NotAborted) switch (d.pluginAborted) {
                            case o.ij.WebGLNotSupported:
                                Tt = r.createElement(r.Fragment, null, "Virtual make-up try-on is not supported on your browser. Please update to an OS / browser version that supports WebGL.");
                                break;
                            case o.ij.WasmNotSupported:
                                Tt = r.createElement(r.Fragment, null, "Virtual make-up try-on is not supported on your browser. Please update to an OS / browser version that supports WebAssembly.");
                                break;
                            case o.ij.ManifestDownloadFailed:
                                Tt = r.createElement(r.Fragment, null, "Something went wrong downloading the virtual make-up try-on plugin. Please refresh the page and try again...");
                                break;
                            case o.ij.OutOfExecutableMemory:
                                if (h.gn) {
                                    if (h.MM) {
                                        var Ct = h.MM.split(".");
                                        if (Ct.length >= 2) {
                                            var Nt = parseInt(Ct[0], 10),
                                                xt = parseInt(Ct[1], 10);
                                            if (!isNaN(Nt) && !isNaN(xt) && (Nt > 13 || 13 === Nt && xt >= 4)) {
                                                Tt = r.createElement(r.Fragment, null, "Something went wrong loading the virtual make-up try-on plugin. Please try rebooting your device to free up memory and then try again.");
                                                break
                                            }
                                        }
                                    }
                                    Tt = r.createElement(r.Fragment, null, "Something went wrong loading the virtual make-up try-on plugin. Please make sure you are on the latest version of iOS and then try again.");
                                    break
                                }
                                Tt = r.createElement(r.Fragment, null, "Something went wrong loading the virtual make-up try-on plugin. Please refresh the page and try again...");
                                break;
                            default:
                                Tt = r.createElement(r.Fragment, null, "Something went wrong with the virtual make-up try-on plugin. Please refresh the page and try again...")
                        } else if (d.outbound.hadStartupError) Tt = r.createElement(r.Fragment, null, "Something went wrong starting the virtual make-up try-on plugin. Please refresh the page and try again...");
                        else if (d.outbound.cameraInitialisationResult !== a.Z.None && d.outbound.cameraInitialisationResult !== a.Z.Success) switch (d.outbound.cameraInitialisationResult) {
                        case a.Z.FailureNoDefaultCamera:
                            Tt = r.createElement(r.Fragment, null, 'We failed to find a camera we could use on your device. Please check that you have a camera connected, or try "Choose a Photo" instead.');
                            break;
                        case a.Z.FailurePermissionDenied:
                            Tt = r.createElement(r.Fragment, null, 'We failed to use your camera to enable the Virtual Try-on experience. Please make sure you have allowed permission to access your camera and refresh the page to try again, or try "Choose a Photo" instead.');
                            break;
                        case a.Z.FailureModuleNotStarted:
                            Tt = "http:" === document.location.protocol ? r.createElement(r.Fragment, null, "Please try loading the page", " ", r.createElement("a", {
                                href: document.location.href.replace(/^http:/, "https:")
                            }, "securely"), " ", 'to use the camera, or try "Choose a Photo" instead.') : r.createElement(r.Fragment, null, 'Something went wrong initialising your camera. Please refresh the page and try again, or try "Choose a Photo" instead.');
                            break;
                        default:
                            Tt = r.createElement(r.Fragment, null, 'Something went wrong initialising your camera. Please refresh the page and try again, or try "Choose a Photo" instead.')
                    } else(d.outbound.hadModelError || d.outbound.hadSwitchStateError) && (Tt = r.createElement(r.Fragment, null, "Something went wrong with the virtual make-up try-on plugin. Please refresh the page and try again..."));
                    if (void 0 !== Tt) return r.createElement(r.Fragment, null, e.showPlugin && r.createElement(v, {
                        hidden: !0,
                        useVTOPageSize: e.onVTOPage
                    }), r.createElement("div", {
                        className: "plugin-status-wrapper",
                        onClick: function() {
                            bt(), l.setSourcePromptOpen(!1)
                        }
                    }, r.createElement("div", {
                        className: "plugin-status"
                    }, Tt)))
                }
                if (e.onVTOPage && !e.showPlugin) return r.createElement(r.Fragment, null, r.createElement("div", {
                    id: "vto-intro"
                }, r.createElement("h3", null, "Try it on"), r.createElement("div", null, r.createElement("h4", {
                    onClick: yt
                }, "Activate camera"), r.createElement("h4", null, r.createElement("label", {
                    className: "hide-input"
                }, r.createElement("input", {
                    type: "file",
                    accept: "image/png, image/jpeg",
                    onChange: Et
                }), "Choose photo"))), r.createElement("p", {
                    className: "ri-x-small"
                }, "By selecting camera or image you are providing this website camera ", r.createElement("br", null), " and photo access pursuant and opt-in to the Rose Inc", " ", r.createElement("a", {
                    href: "/pages/privacy-policy",
                    target: "_blank"
                }, "Privacy Policy"))));
                if (d.sourcePromptOpen) return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "product_options_all_screen_close",
                    onClick: function() {
                        l.setSourcePromptOpen(!1), at(!1)
                    }
                }), rt ? r.createElement("div", {
                    className: "product_options_modal product_options_modal_right"
                }, r.createElement("button", {
                    className: "product_options_modal_button"
                }, r.createElement("small", {
                    className: "ri-small"
                }, "This virtual try-on experience works best", r.createElement("br", null), "on mobile devices in portrait orientation.")), r.createElement("button", {
                    className: "product_options_modal_button",
                    onClick: function() {
                        at(!1), l.setSourceImage(null), ht(O.l9.VideoFeed), l.setSourcePromptOpen(!1)
                    }
                }, "Continue", r.createElement("br", null), "Anyway")) : r.createElement("div", {
                    className: "product_options_modal product_options_modal_source_prompt"
                }, r.createElement("button", {
                    className: "product_options_modal_button",
                    onClick: function() {
                        !p || -90 !== window.orientation && 90 !== window.orientation ? (l.setSourceImage(null), ht(O.l9.VideoFeed), l.setSourcePromptOpen(!1)) : at(!0)
                    }
                }, "Camera"), r.createElement("label", {
                    className: "product_options_modal_button hide-input text-center"
                }, r.createElement("input", {
                    type: "file",
                    accept: "image/png, image/jpeg",
                    onChange: Et
                }), "Photo"), r.createElement("button", {
                    className: "product_options_modal_button text-left"
                }, r.createElement("small", {
                    className: "ri-x-small"
                }, "By selecting camera or image you are providing this website camera and photo access pursuant and opt-in to the Rose, Inc.", r.createElement("a", {
                    href: "/pages/privacy-policy",
                    target: "_blank"
                }, "Privacy Policy")))));
                if (!e.showPlugin) return It ? r.createElement(_.Z, {
                    vtoText: It
                }) : null;
                if (null === d.currentProductVariant || null === d.productsForDisplay || !d.outbound.cameraIsSuccessfullyActive) return d.outbound.cameraIsSuccessfullyActive || (kt = null === d.unityInstance || !d.unityInstance.Module.vto.inbound.state.ShowCamera || d.outbound.isLoading ? r.createElement(_.Z, {
                    vtoText: It
                }) : I ? r.createElement("div", {
                    className: "plugin-status"
                }, "Please let us use your camera!") : d.outbound.cameraIsBlocked ? r.createElement("div", {
                    className: "plugin-status"
                }, "You didn't give us access to your camera. Please check your browser settings.") : r.createElement(_.Z, {
                    vtoText: It
                })), r.createElement("div", {
                    className: "vto-container-wrapper"
                }, r.createElement("div", {
                    className: "vto-container",
                    onClick: function(e) {
                        e.stopPropagation()
                    }
                }, r.createElement(v, {
                    hidden: !0,
                    useVTOPageSize: e.onVTOPage
                }), kt));
                var Mt = function(e) {
                        return B() && r.createElement("button", {
                            className: "product_options_modal_button\n                            ".concat(d.showAugmentationMaskSlider ? " selected" : ""),
                            onClick: function() {
                                O.ZP.logVtoShareImage(it.current), e()
                            }
                        }, h.G6 && h.gn ? r.createElement(r.Fragment, null, "Share or", r.createElement("br", null), "Add to", r.createElement("br", null), "Photos") : r.createElement(r.Fragment, null, r.createElement(r.Fragment, null, "Share", r.createElement("br", null), "photo")))
                    },
                    Ut = function(e) {
                        return H() && r.createElement("button", {
                            className: "product_options_modal_button",
                            onClick: function() {
                                O.ZP.logVtoSaveImageToDevice(it.current), e()
                            }
                        }, h.G6 && h.gn ? r.createElement(r.Fragment, null, "Save to", r.createElement("br", null), "Files") : r.createElement(r.Fragment, null, "Save", r.createElement("br", null), "photo"))
                    };
                if (!d.outbound.isLoading && null === ct.current && null !== ut.current) {
                    var Lt = (new Date).getTime();
                    if (ct.current = Lt, ++st.current, O.ZP.logVtoLoaded(D(D({}, it.current), {}, {
                            source: null !== d.sourceImage ? O.l9.UploadedPhoto : O.l9.VideoFeed,
                            load_time: (Lt - ut.current) / 1e3,
                            load_count: st.current
                        })), null === d.sourceImage) {
                        var Dt = function(e) {
                            return null !== ut.current && e - ut.current > 5e3 && mt.current && null !== d.unityInstance && void 0 !== d.unityInstance.Module.vto.getCameraFrameRate && !d.outbound.isLoading
                        };
                        lt.current = window.setTimeout((function() {
                            lt.current = null;
                            var e = function() {
                                var e = (new Date).getTime();
                                Dt(e) && O.ZP.logVtoLiveVideoStats(D(D({}, it.current), {}, {
                                    session_time: (e - ut.current) / 1e3,
                                    camera_frame_rate: d.unityInstance.Module.vto.getCameraFrameRate()
                                }))
                            };
                            dt.current = window.setInterval(e, 15e3), e()
                        }), 5e3);
                        var Ft = (0, T.Z)(x.Z.instance.deviceId)[0];
                        ("true" === {
                            NODE_ENV: "production",
                            REACT_APP_MODEL_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/models/",
                            REACT_APP_SKIN_TONE_API: "https://skintone.roseinc.beautylabs.com",
                            REACT_APP_NAME: "rose-inc-web",
                            REACT_APP_ERROR_REPORT_URL: "https://errors.amyris.beautylabs.com/errorReport",
                            REACT_APP_DEFAULT_MODEL_NAME_EYEBROWS: "FUTest-Brows-6",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_NUMBERS: "true",
                            REACT_APP_BI_ACCOUNT_APP_NAME: "account",
                            REACT_APP_PLUGIN_BASE: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/",
                            REACT_APP_BI_APP_NAME: "roseinc_web",
                            REACT_APP_ACCOUNT_NAMESPACE: "roseinc",
                            REACT_APP_BI_LIVESHOPPING_APP_NAME: "liveshopping",
                            REACT_APP_COMMIT_HASH: "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb",
                            REACT_APP_STOREFRONT_API_KEY: "f1c1eba5583bb760c097cba85a0b1a51",
                            REACT_APP_ACCOUNT_BACKEND_BASE_URI: "https://account.amyris.beautylabs.com/api/consumer/roseinc",
                            REACT_APP_LIVESHOPPING_NAMESPACE: "roseinc",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_SYMBOLS: "true",
                            REACT_APP_FUSIONFS_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/data/",
                            REACT_APP_BI_REPORT_URI: "https://logs.amyris.beautylabs.com/bi",
                            REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_EYES: "VTO-5-2",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_LOWERCASE: "true",
                            REACT_APP_STOREFRONT_DOMAIN: "www.roseinc.com",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_UPPERCASE: "true",
                            REACT_APP_ACCOUNT_PAGE_NAME: "myaccount",
                            REACT_APP_VERSION: "0.0.1",
                            REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_MOUTH: "VTO-5-1",
                            REACT_APP_CDN_ROOT: "https://cdn.roseinc.beautylabs.com/production/132459692220",
                            REACT_APP_TEXTURE_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/vto/textures/",
                            REACT_APP_LIVE_SHOPPING_BACKEND_BASE_URI: "https://liveshopping.amyris.beautylabs.com/api/roseinc",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_MIN_LEN: "8"
                        }.REACT_APP_VTO_SAMPLE_ALL_USERS || Ft <= 26) && (ft.current = window.setTimeout((function() {
                            ft.current = null;
                            var e = function() {
                                var e = (new Date).getTime();
                                if (Dt(e))
                                    if (pt.current < 5) {
                                        ++pt.current;
                                        var t = d.unityInstance.Module.vto.getCameraVideoElement(),
                                            n = (0, C.Tx)(t, 4, !0);
                                        if (void 0 !== n) {
                                            var r = (0, C.Eu)(n, x.Z.MAX_IMAGE_SIZE_BYTES);
                                            void 0 !== r && O.ZP.logVtoLiveVideoSample(D(D({}, it.current), {}, {
                                                session_time: (e - ut.current) / 1e3,
                                                camera_frame_rate: d.unityInstance.Module.vto.getCameraFrameRate(),
                                                image: r
                                            }))
                                        }
                                    } else null !== gt.current && (window.clearInterval(gt.current), gt.current = null)
                            };
                            gt.current = window.setInterval(e, 3e4), e()
                        }), 5e3))
                    }
                }
                return mt.current = null === d.imageTaken, It && Rt(!1), r.createElement("div", {
                    className: "vto-container-wrapper"
                }, r.createElement("div", {
                    className: "vto-container",
                    onClick: function(e) {
                        e.stopPropagation()
                    }
                }, d.imageTaken ? null : r.createElement(v, {
                    hidden: !1,
                    useVTOPageSize: e.onVTOPage
                }), r.createElement("div", {
                    style: {
                        display: !d.showAugmentationMaskSlider || V ? "none" : void 0,
                        left: 0,
                        position: "absolute",
                        height: "100%",
                        width: 1,
                        backgroundColor: "#919191",
                        marginLeft: "".concat(100 * d.augmentationMaskSlider, "%"),
                        zIndex: 1
                    }
                }), r.createElement("input", {
                    className: !d.showAugmentationMaskSlider || V ? "product_VTO_slider d-none" : "product_VTO_slider",
                    type: "range",
                    min: 0,
                    max: 1,
                    value: d.augmentationMaskSlider,
                    step: .01,
                    onChange: function(e) {
                        l.setAugmentationMaskSlider(Number(e.target.value))
                    }
                }), r.createElement(r.Fragment, null, r.createElement("ul", {
                    className: "product_VTO_slider_labels\n                                    ".concat(V || !A || !m && !oe || d.showAugmentationMaskSlider || ce && m ? "d-none" : "", "\n                                    ").concat(de ? "" : "fade_out", "\n                                    ")
                }, r.createElement("li", null, "Light"), r.createElement("li", null, "Medium"), r.createElement("li", null, "Full")), r.createElement("input", {
                    id: "product_VTO_skin_tone_slider",
                    className: "\n                    ".concat(V || !A || !m && !oe || d.showAugmentationMaskSlider ? "d-none" : ""),
                    type: "range",
                    min: 0,
                    max: 2,
                    value: et,
                    step: "any",
                    onPointerDown: function() {
                        return pe(!0)
                    },
                    onPointerUp: function() {
                        return pe(!1)
                    },
                    onPointerOut: function() {
                        return pe(!1)
                    },
                    onPointerCancel: function() {
                        return pe(!1)
                    },
                    onChange: function(e) {
                        de && function(e) {
                            tt(e);
                            var t = Object.keys(He).find((function(t) {
                                return He[t] === Math.round(e)
                            }));
                            l.setVtoVariant(null != t ? t : "default")
                        }(Number(e.target.value))
                    }
                })), r.createElement(r.Fragment, null, r.createElement("ul", {
                    className: "product_VTO_slider_labels product_VTO_slider_labels--dayNight\n                                    ".concat(V || !g || d.showAugmentationMaskSlider ? "d-none" : "", "\n                                    ").concat(he ? "" : "fade_out", "\n                                    ")
                }, r.createElement("li", null, "Night"), r.createElement("li", null, "Day")), r.createElement("input", {
                    id: "product_VTO_day_night_slider",
                    className: "\n                    ".concat(V || !g || d.showAugmentationMaskSlider ? "d-none" : ""),
                    type: "range",
                    min: 0,
                    max: 1,
                    value: We,
                    step: "any",
                    onPointerDown: function() {
                        return Ee(!0)
                    },
                    onPointerUp: function() {
                        return Ee(!1)
                    },
                    onPointerOut: function() {
                        return Ee(!1)
                    },
                    onPointerCancel: function() {
                        return Ee(!1)
                    },
                    onChange: function(e) {
                        he && function(e) {
                            Ye(e);
                            var t = Object.keys(Ke).find((function(t) {
                                return Ke[t] === Math.round(e)
                            }));
                            l.setVtoVariant(null != t ? t : "")
                        }(Number(e.target.value))
                    }
                })), g && r.createElement("div", {
                    className: "product_options_modal product_options_modal--duet"
                }, r.createElement("button", {
                    className: "product_options_modal_button product_options_modal_button--duet\n                            ".concat("duet" === ze ? " product_options_modal_button--duet-selected" : "", "\n                        "),
                    onClick: function() {
                        Qe("duet")
                    }
                }, "Duet"), r.createElement("button", {
                    className: "product_options_modal_button product_options_modal_button--duet\n                            ".concat("satin" === ze ? " product_options_modal_button--duet-selected" : "", "\n                        "),
                    onClick: function() {
                        Qe("satin")
                    }
                }, "Satin"), r.createElement("button", {
                    className: "product_options_modal_button product_options_modal_button--duet\n                            ".concat("shimmer" === ze ? " product_options_modal_button--duet-selected" : "", "\n                        "),
                    onClick: function() {
                        Qe("shimmer")
                    }
                }, "Shimmer")), r.createElement("div", {
                    className: !Q && !d.imageTaken || Se || ke ? "product_options_all_screen_close d-none" : "product_options_all_screen_close",
                    onClick: function() {
                        Pe(!1), re(!1), Y(!1)
                    }
                }), r.createElement("div", {
                    className: "product_VTO_close",
                    onClick: function() {
                        l.setImageTaken(null), G(!1), bt()
                    }
                }, "Close"), r.createElement("div", {
                    className: Q || V ? "product_options_button d-none" : "product_options_button",
                    onClick: function() {
                        re(!0)
                    }
                }, "Options"), r.createElement("div", {
                    className: W || !V ? "product_options_button d-none" : "product_options_button",
                    onClick: function() {
                        Y(!0)
                    }
                }, "Options"), r.createElement("div", {
                    className: Q || !m && !W && !V ? "product_options_modal fade_in" : "product_options_modal ".concat(te ? "fade_out" : "d-none")
                }, r.createElement("button", {
                    className: "product_options_modal_button close_icon_container ".concat(m ? "" : " d-none", "\n                        "),
                    onClick: function() {
                        re(!1)
                    }
                }, r.createElement("img", {
                    src: b,
                    alt: "Close icon",
                    className: "m-auto"
                })), r.createElement("button", {
                    className: "product_options_modal_button\n                        ".concat(d.showAugmentationMaskSlider ? " selected" : ""),
                    onClick: function() {
                        ie(!1), d.showAugmentationMaskSlider || O.ZP.logVtoBeforeAfterSliderShown(it.current), l.setShowAugmentationMaskSlider(!d.showAugmentationMaskSlider), setTimeout((function() {
                            re(!1)
                        }))
                    }
                }, "Before/", r.createElement("br", null), "after"), (null === d.sourceImage || B() && H()) && r.createElement("button", {
                    className: "product_options_modal_button",
                    onClick: function() {
                        re(!1), De(), null === d.sourceImage && O.ZP.logVtoPhotoTaken(D(D({}, it.current), {}, {
                            retake: !1
                        })), l.setShowAugmentationMaskSlider(!1)
                    }
                }, null === d.sourceImage ? r.createElement(r.Fragment, null, "Take", r.createElement("br", null), "photo") : r.createElement(r.Fragment, null, "Share", r.createElement("br", null), "or save", r.createElement("br", null), "image")), null !== d.sourceImage && B() && !H() && Mt(U(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (null === (t = Fe())) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 4, je(t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))), null !== d.sourceImage && !B() && H() && Ut(U(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                null !== (t = Fe()) && Ve(t);
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))), Be && r.createElement("button", {
                    className: "product_options_modal_button",
                    onClick: function() {
                        qe()
                    }
                }, Ce && !m && r.createElement("div", {
                    className: "scanning_info_overlay"
                }, "Scanning"), "Suggest", r.createElement("br", null), "shade"), !m && A && r.createElement("button", {
                    className: "product_options_modal_button\n                                    ".concat(oe ? " selected" : ""),
                    onClick: function() {
                        ie(!oe), l.setShowAugmentationMaskSlider(!1)
                    }
                }, "Adjust", r.createElement("br", null), "coverage"), d.sourceImage ? r.createElement("button", {
                    className: "product_options_modal_button",
                    onClick: function() {
                        !p || -90 !== window.orientation && 90 !== window.orientation ? (l.setSourceImage(null), ht(O.l9.VideoFeed), l.setSourcePromptOpen(!1)) : at(!0)
                    }
                }, "Live", r.createElement("br", null), "view") : null, r.createElement("label", {
                    className: "product_options_modal_button hide-input"
                }, r.createElement("input", {
                    type: "file",
                    accept: "image/png, image/jpeg",
                    onChange: Et
                }), "Choose", r.createElement("br", null), "photo")), r.createElement("div", {
                    className: d.imageTaken && W ? "product_options_modal" : "product_options_modal d-none",
                    onClick: function() {
                        Pe(!1)
                    }
                }, r.createElement("button", {
                    className: "product_options_modal_button close_icon_container",
                    onClick: function() {
                        Y(!1)
                    }
                }, r.createElement("img", {
                    src: b,
                    alt: "Close icon",
                    className: "m-auto"
                })), r.createElement("button", {
                    className: "product_options_modal_button",
                    onClick: function() {
                        l.setImageTaken(null), G(!1), Y(!1)
                    }
                }, null === d.sourceImage ? r.createElement(r.Fragment, null, "Live", r.createElement("br", null), "view") : r.createElement(r.Fragment, null, "Back")), Mt((function() {
                    d.imageTaken && je(d.imageTaken)
                })), Ut((function() {
                    d.imageTaken && Ve(d.imageTaken)
                })), null === d.sourceImage && r.createElement("button", {
                    className: "product_options_modal_button",
                    onClick: function() {
                        l.setImageTaken(null), G(!1), O.ZP.logVtoPhotoTaken(D(D({}, it.current), {}, {
                            retake: !0
                        })), De()
                    }
                }, "Retake")), r.createElement("div", {
                    className: "product_countdown"
                }, X), Ce && m && r.createElement("div", {
                    className: "scanning_info_overlay"
                }, "Scanning"), r.createElement("div", {
                    className: Ae ? "info_overlay_bottom_screen" : "info_overlay_bottom_screen d-none",
                    onClick: function() {
                        Pe(!1)
                    }
                }, Se || ke ? r.createElement(r.Fragment, null, "Tap + hold image to share") : null), d.imageTaken ? r.createElement("img", {
                    className: !d.showAugmentationMaskSlider && V && d.imageTaken ? "captured-image w-100" : "captured-image w-100 d-none",
                    src: d.imageTaken,
                    alt: "Selfie"
                }) : null, e.onVTOPage ? null : r.createElement("div", {
                    className: "product_image_switch",
                    onClick: function() {
                        l.setImageTaken(null), G(!1), bt()
                    }
                }, null !== (c = d.currentProductVariant) && void 0 !== c && null !== (s = c.image) && void 0 !== s && s.originalSrc ? r.createElement("img", {
                    className: "product_image_switch_image",
                    src: d.currentProductVariant.image.originalSrc,
                    alt: "Product"
                }) : null), Me ? r.createElement("div", {
                    onClick: function() {
                        Ue(null)
                    },
                    className: "product_error_wrapper"
                }, r.createElement("div", {
                    className: "product_error_prompt"
                }, " ", Me)) : null, Boolean(d.imageTaken && null === d.sourceImage) && r.createElement("div", {
                    className: "selfie-white-flash"
                }), d.outbound.isLoading ? r.createElement(_.Z, null) : null))
            }
        },
        4022: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            n(35666), n(41539), n(88674), n(39714);
            var r = n(36334),
                a = n(65116),
                o = n(6848),
                i = n(43528),
                u = n(3161);

            function c(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            c(o, r, a, i, u, "next", e)
                        }

                        function u(e) {
                            c(o, r, a, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function l() {
                return (l = s(regeneratorRuntime.mark((function e(t, n) {
                    var c, l;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return c = void 0, l = (0, i.Z)(), e.next = 4, fetch(t).then((function(e) {
                                    var t = new Image;
                                    return t.src = e.url, c = t.height, e.arrayBuffer()
                                })).then((function(e) {
                                    return new File([e], "image", {})
                                })).then((function(e) {
                                    var t = new FormData;
                                    return t.append("face_image", e), t.append("event_id", l), t.append("event_source", n.toString(10)), t.append("device_id", u.Z.instance.deviceId), t.append("session_id", u.Z.instance.sessionId), fetch("".concat("https://skintone.roseinc.beautylabs.com", "/api/get_skin_tone"), {
                                        method: "POST",
                                        body: t
                                    })
                                })).then(function() {
                                    var e = s(regeneratorRuntime.mark((function e(r) {
                                        var i, s, d, m, p, f, g;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!r.ok) {
                                                        e.next = 18;
                                                        break
                                                    }
                                                    return e.next = 3, r.json();
                                                case 3:
                                                    return i = e.sent, "true" === {
                                                        NODE_ENV: "production",
                                                        REACT_APP_MODEL_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/models/",
                                                        REACT_APP_SKIN_TONE_API: "https://skintone.roseinc.beautylabs.com",
                                                        REACT_APP_NAME: "rose-inc-web",
                                                        REACT_APP_ERROR_REPORT_URL: "https://errors.amyris.beautylabs.com/errorReport",
                                                        REACT_APP_DEFAULT_MODEL_NAME_EYEBROWS: "FUTest-Brows-6",
                                                        REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_NUMBERS: "true",
                                                        REACT_APP_BI_ACCOUNT_APP_NAME: "account",
                                                        REACT_APP_PLUGIN_BASE: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/",
                                                        REACT_APP_BI_APP_NAME: "roseinc_web",
                                                        REACT_APP_ACCOUNT_NAMESPACE: "roseinc",
                                                        REACT_APP_BI_LIVESHOPPING_APP_NAME: "liveshopping",
                                                        REACT_APP_COMMIT_HASH: "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb",
                                                        REACT_APP_STOREFRONT_API_KEY: "f1c1eba5583bb760c097cba85a0b1a51",
                                                        REACT_APP_ACCOUNT_BACKEND_BASE_URI: "https://account.amyris.beautylabs.com/api/consumer/roseinc",
                                                        REACT_APP_LIVESHOPPING_NAMESPACE: "roseinc",
                                                        REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_SYMBOLS: "true",
                                                        REACT_APP_FUSIONFS_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/data/",
                                                        REACT_APP_BI_REPORT_URI: "https://logs.amyris.beautylabs.com/bi",
                                                        REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_EYES: "VTO-5-2",
                                                        REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_LOWERCASE: "true",
                                                        REACT_APP_STOREFRONT_DOMAIN: "www.roseinc.com",
                                                        REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_UPPERCASE: "true",
                                                        REACT_APP_ACCOUNT_PAGE_NAME: "myaccount",
                                                        REACT_APP_VERSION: "0.0.1",
                                                        REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_MOUTH: "VTO-5-1",
                                                        REACT_APP_CDN_ROOT: "https://cdn.roseinc.beautylabs.com/production/132459692220",
                                                        REACT_APP_TEXTURE_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/vto/textures/",
                                                        REACT_APP_LIVE_SHOPPING_BACKEND_BASE_URI: "https://liveshopping.amyris.beautylabs.com/api/roseinc",
                                                        REACT_APP_ACCOUNT_SYSTEM_PASSWORD_MIN_LEN: "8"
                                                    }.REACT_APP_PRINT_DEBUG && (console.log("RETURNED FROM API:"), console.log("num_faces:", i.num_faces), void 0 !== i.metrics && console.log("metrics:", i.metrics), void 0 !== i.skin_tone && console.log("skin_tone:", i.skin_tone), void 0 !== i.lighting && console.log("lighting:", i.lighting), void 0 !== i.debug && console.log("debug:", i.debug)), .09, .33, d = "", m = !1, i.num_faces < 1 && (d += "We encountered a problem finding your face. "), void 0 !== i.metrics && void 0 !== c && c > 0 && (p = i.metrics.scale_as_eye_separation / c, "true" === {
                                                        NODE_ENV: "production",
                                                        REACT_APP_MODEL_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/models/",
                                                        REACT_APP_SKIN_TONE_API: "https://skintone.roseinc.beautylabs.com",
                                                        REACT_APP_NAME: "rose-inc-web",
                                                        REACT_APP_ERROR_REPORT_URL: "https://errors.amyris.beautylabs.com/errorReport",
                                                        REACT_APP_DEFAULT_MODEL_NAME_EYEBROWS: "FUTest-Brows-6",
                                                        REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_NUMBERS: "true",
                                                        REACT_APP_BI_ACCOUNT_APP_NAME: "account",
                                                        REACT_APP_PLUGIN_BASE: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/",
                                                        REACT_APP_BI_APP_NAME: "roseinc_web",
                                                        REACT_APP_ACCOUNT_NAMESPACE: "roseinc",
                                                        REACT_APP_BI_LIVESHOPPING_APP_NAME: "liveshopping",
                                                        REACT_APP_COMMIT_HASH: "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb",
                                                        REACT_APP_STOREFRONT_API_KEY: "f1c1eba5583bb760c097cba85a0b1a51",
                                                        REACT_APP_ACCOUNT_BACKEND_BASE_URI: "https://account.amyris.beautylabs.com/api/consumer/roseinc",
                                                        REACT_APP_LIVESHOPPING_NAMESPACE: "roseinc",
                                                        REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_SYMBOLS: "true",
                                                        REACT_APP_FUSIONFS_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/data/",
                                                        REACT_APP_BI_REPORT_URI: "https://logs.amyris.beautylabs.com/bi",
                                                        REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_EYES: "VTO-5-2",
                                                        REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_LOWERCASE: "true",
                                                        REACT_APP_STOREFRONT_DOMAIN: "www.roseinc.com",
                                                        REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_UPPERCASE: "true",
                                                        REACT_APP_ACCOUNT_PAGE_NAME: "myaccount",
                                                        REACT_APP_VERSION: "0.0.1",
                                                        REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_MOUTH: "VTO-5-1",
                                                        REACT_APP_CDN_ROOT: "https://cdn.roseinc.beautylabs.com/production/132459692220",
                                                        REACT_APP_TEXTURE_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/vto/textures/",
                                                        REACT_APP_LIVE_SHOPPING_BACKEND_BASE_URI: "https://liveshopping.amyris.beautylabs.com/api/roseinc",
                                                        REACT_APP_ACCOUNT_SYSTEM_PASSWORD_MIN_LEN: "8"
                                                    }.REACT_APP_PRINT_DEBUG && console.log("interocular ratio:", p), void 0 !== p && p < .09 && (d += "You're too far from the camera. ")), void 0 !== i.lighting && i.lighting.non_darkness < .33 && ("" === d ? (s = "Adjust lighting for best results", d = "Aim for bright, natural and even lighting.", m = !0) : d += "Your room is too dark. "), f = "" === d ? void 0 : {
                                                        title: s,
                                                        description: d,
                                                        allowIgnore: m
                                                    }, e.next = 15, (0, a.IA)(t, 2, u.Z.MAX_IMAGE_SIZE_BYTES);
                                                case 15:
                                                    return void 0 !== (g = e.sent) && o.ZP.logSkinToneAnalysis({
                                                        event_source: n,
                                                        event_id: l,
                                                        image: g,
                                                        detected_tone: i.skin_tone || null
                                                    }), e.abrupt("return", {
                                                        skinTone: i.skin_tone,
                                                        warning: f,
                                                        eventId: l
                                                    });
                                                case 18:
                                                    return e.abrupt("return", {
                                                        skinTone: void 0,
                                                        warning: {
                                                            description: "We encountered a problem analysing your skin tone. ",
                                                            allowIgnore: !1
                                                        },
                                                        eventId: l
                                                    });
                                                case 19:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()).catch((function(e) {
                                    var t;
                                    console.error("Error fetching skin tone", e), null === r.Z || void 0 === r.Z || null === (t = r.Z.instance) || void 0 === t || t.reportError(null == e ? void 0 : e.message, null == e ? void 0 : e.stack)
                                }));
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            const d = function(e, t) {
                return l.apply(this, arguments)
            }
        },
        38358: (e, t, n) => {
            "use strict";
            var r = n(67294),
                a = n(73935),
                o = n(18172),
                i = n(36334),
                u = n(3161);
            n(66992), n(41539), n(88674), n(78783), n(33948), n(74916), n(23123), n(15306), n(4723), n(64765), n(82526), n(41817), n(32165), n(47042), n(68309), n(91038);
            var c, s, l = n(39711),
                d = n(96974),
                m = (n(20185), n(34994)),
                p = n(51120),
                f = (n(43371), n(35666), n(26699), n(32023), n(21249), n(57327), n(9653), n(71439)),
                g = n(81316);

            function v(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || b(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function b(e, t) {
                if (e) {
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0
                }
            }

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var y, A, P = {
                    _: {
                        fn: function(e) {
                            var t, n = function(e, t) {
                                var n;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (Array.isArray(e) || (n = b(e)) || t && e && "number" == typeof e.length) {
                                        n && (e = n);
                                        var r = 0,
                                            a = function() {};
                                        return {
                                            s: a,
                                            n: function() {
                                                return r >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[r++]
                                                }
                                            },
                                            e: function(e) {
                                                throw e
                                            },
                                            f: a
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var o, i = !0,
                                    u = !1;
                                return {
                                    s: function() {
                                        n = e[Symbol.iterator]()
                                    },
                                    n: function() {
                                        var e = n.next();
                                        return i = e.done, e
                                    },
                                    e: function(e) {
                                        u = !0, o = e
                                    },
                                    f: function() {
                                        try {
                                            i || null == n.return || n.return()
                                        } finally {
                                            if (u) throw o
                                        }
                                    }
                                }
                            }(e.tags);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r, a, o = t.value;
                                    if (null !== (r = document.data) && void 0 !== r && null !== (a = r.excludeProductTags) && void 0 !== a && a.includes(o)) return "discard"
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                        },
                        gql: "tags"
                    },
                    details: {
                        fn: function(e) {
                            e.details ? e.details = JSON.parse(e.details.value) : delete e.details
                        },
                        gql: '\n            details: metafield(\n                namespace: "product", \n                key: "liveshopping-details"\n            ) {\n                value\n            }\n        '
                    },
                    gwp: {
                        fn: function(e) {
                            var t = "Sets Product" === e.productType;
                            e.gwp = e.handle.includes("-free");
                            var n = e.variants.nodes,
                                r = (0, g.jW)(n[0].price.amount);
                            if (e.gwp ? t || n.length > 1 : 0 === r) return "discard"
                        },
                        gql: "productType",
                        productDeps: ["handle"],
                        variantDeps: ["priceCents"]
                    },
                    bundleItems: {
                        fn: (y = regeneratorRuntime.mark((function e(t, n, r) {
                            var a, o, i, u, l, d;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = (0, g.tN)(n, g.YN, g.sQ), o = a.productGql, i = a.productFns, u = a.variantFns, "Sets Product" !== t.productType ? (delete t.bundleProducts, delete t.bundleVariant) : t.bundleItems = [], !t.bundleProducts) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.t0 = (l = t.bundleItems).push, e.t1 = l, e.t2 = _, e.next = 8, Promise.all(JSON.parse(t.bundleProducts.value).map((function(e) {
                                            return r.query({
                                                query: (0, f.Ps)(c || (c = v(["\n                                query getProductByHandle($handle: String!) {\n                                    product(handle: $handle) {\n                                        ", "\n                                    }\n                                }\n                            "])), o),
                                                variables: {
                                                    handle: e
                                                }
                                            }).then((function(e) {
                                                return (0, g.m0)(e.data.product, i, u, n, r)
                                            }))
                                        })));
                                    case 8:
                                        e.t3 = e.sent, e.t4 = (0, e.t2)(e.t3), e.t0.apply.call(e.t0, e.t1, e.t4);
                                    case 11:
                                        if (delete t.bundleProducts, !t.bundleVariants) {
                                            e.next = 21;
                                            break
                                        }
                                        return e.t5 = (d = t.bundleItems).push, e.t6 = d, e.t7 = _, e.next = 18, Promise.all(JSON.parse(t.bundleVariants.value).map((function(e) {
                                            return e.split(":")
                                        })).filter((function(e) {
                                            return e.length
                                        })).map((function(e) {
                                            return r.query({
                                                query: (0, f.Ps)(s || (s = v(["\n                                query getProductById($id: ID!) {\n                                    product(id: $id) {\n                                        ", "\n                                    }\n                                }\n                            "])), o),
                                                variables: {
                                                    id: "gid://shopify/Product/".concat(e[0])
                                                }
                                            }).then((function(e) {
                                                return (0, g.m0)(e.data.product, i, u, n, r)
                                            })).then((function(t) {
                                                null != t && t.variants && e.length > 1 && (t.variants = t.variants.filter((function(t) {
                                                    return t.id === Number(e[1])
                                                })))
                                            }))
                                        })));
                                    case 18:
                                        e.t8 = e.sent, e.t9 = (0, e.t7)(e.t8), e.t5.apply.call(e.t5, e.t6, e.t9);
                                    case 21:
                                        delete t.bundleVariants;
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), A = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(n, r) {
                                var a = y.apply(e, t);

                                function o(e) {
                                    h(a, n, r, o, i, "next", e)
                                }

                                function i(e) {
                                    h(a, n, r, o, i, "throw", e)
                                }
                                o(void 0)
                            }))
                        }, function(e, t, n) {
                            return A.apply(this, arguments)
                        }),
                        gql: '\n            productType\n            bundleProducts: metafield(\n                namespace: "bundle", \n                key: "product_items"\n            ) {\n                value\n            }\n            bundleVariants: metafield(\n                namespace: "product_variant", \n                key: "product_variant"\n            ) {\n                value\n            }\n        '
                    },
                    bundleThreshold: {
                        fn: function(e) {
                            "Sets Product" === e.productType && void 0 !== e.bundleThreshold ? e.bundleThreshold = Number(e.bundleThreshold.value) : delete e.bundleThreshold
                        },
                        gql: '\n            productType\n            bundleThreshold: metafield(\n                namespace: "bundle", \n                key: "bundle_threshold"\n            ) {\n                value\n            }\n        '
                    }
                },
                w = {
                    name: {
                        fn: function(e, t) {
                            var n;
                            e.options.includes("Color") && (t.name = null === (n = t.colorName) || void 0 === n ? void 0 : n.value);
                            delete t.colorName
                        },
                        gql: '\n            name: title\n            colorName: metafield(\n                namespace: "color", \n                key: "name"\n            ) {\n                value\n            }\n        ',
                        productDeps: ["options"]
                    },
                    secondaryName: {
                        fn: function(e, t) {
                            var n;
                            e.options.includes("Color") && (t.secondaryName = null === (n = t.colorSecondaryName) || void 0 === n ? void 0 : n.value);
                            delete t.colorSecondaryName
                        },
                        gql: '\n            colorSecondaryName: metafield(\n                namespace: "description", \n                key: "value"\n            ) {\n                value\n            }\n        ',
                        productDeps: ["options"]
                    },
                    color: {
                        fn: function(e, t) {
                            var n;
                            e.options.includes("Color") && (t.color = null === (n = t.colorHex) || void 0 === n ? void 0 : n.value);
                            delete t.colorHex
                        },
                        gql: '\n            colorHex: metafield(\n                namespace: "color", \n                key: "hex"\n            ) {\n                value\n            }\n        ',
                        productDeps: ["options"]
                    },
                    swatch: {
                        fn: function(e, t) {
                            var n;
                            e.options.includes("Color") && (null !== (n = t.colorTexture) && void 0 !== n && n.length && (t.swatch = t.colorTexture[0].src));
                            delete t.colorTexture
                        },
                        gql: '\n            colorTexture: metafield(\n                namespace: "color", \n                key: "texture"\n            ) {\n                value\n            }\n        ',
                        productDeps: ["options"]
                    }
                },
                S = n(56709),
                I = (n(54747), n(60285), n(43109));
            document.querySelectorAll("a > .tag_label").forEach((function(e) {
                var t, n = e,
                    r = n.parentElement;
                if (null != r && r.classList.contains("vto-label")) {
                    var a = null == r || null === (t = r.parentElement) || void 0 === t ? void 0 : t.parentElement,
                        o = null == a ? void 0 : a.querySelector(".product_options_modal_plp");
                    n.onclick = function() {
                        o && (o.style.display = "flex");
                        var e = document.createElement("div");
                        e.classList.add("plp_fullscreen_vto_menu_close"), e.onclick = function() {
                            var t;
                            o && (o.style.display = "none"), null === (t = e.parentElement) || void 0 === t || t.removeChild(e), document.body.classList.contains("overflow-hidden") && document.documentElement.classList.contains("overflow-hidden") && (document.body.classList.remove("overflow-hidden"), document.documentElement.classList.remove("overflow-hidden"))
                        }, null == a || a.appendChild(e)
                    };
                    var i = null == o ? void 0 : o.querySelector("button");
                    i && (i.onclick = function() {
                        var e = new URL(window.location.protocol + "//" + window.location.host + (null == o ? void 0 : o.dataset.url));
                        e.searchParams.append("vto", "camera"), window.location.href = e.href
                    });
                    var u = null == o ? void 0 : o.querySelector('input[type="file"]');
                    u && (u.onchange = function(e) {
                        (0, I.k)(e, (function(e) {
                            sessionStorage.setItem("imageDataUri", e);
                            var t = new URL(window.location.protocol + "//" + window.location.host + (null == o ? void 0 : o.dataset.url));
                            t.searchParams.append("vto", "upload"), window.location.href = t.href
                        }))
                    })
                }
            }));
            var R = n(8185),
                k = (n(92222), n(34650)),
                O = n(12428),
                T = (0, f.createHttpLink)({
                    uri: "/api/2022-10/graphql.json"
                }),
                C = (0, k.v)((function() {
                    return {
                        headers: {
                            "X-Shopify-Storefront-Access-Token": "f1c1eba5583bb760c097cba85a0b1a51"
                        }
                    }
                })),
                N = new f.fe({
                    link: C.concat(T),
                    cache: new f.h4
                });

            function x(e) {
                var t = e.children;
                return r.createElement(O.eT, {
                    client: N
                }, t)
            }
            var M = n(46121),
                U = n(34074),
                L = n(57154),
                D = n(55557),
                F = (n(39714), n(25251)),
                j = n(93970),
                V = function() {
                    var e, t;
                    return null === (e = window.Shopify) || void 0 === e || null === (t = e.Checkout) || void 0 === t ? void 0 : t.step
                };
            n(23157);
            var q = n(58905),
                B = n(38094);

            function H() {
                return (0, r.useEffect)((function() {
                    var e, t, n = null === (e = document.data) || void 0 === e ? void 0 : e.showId;
                    if (n) {
                        var r = (0, B.bp)(n),
                            a = document.createElement("button");
                        a.innerText = (0, q.Iu)("shop.order.back_to_stream"), a.className = "bl-core-button bl-core-button--cta liveshopping-checkout-order--cta", a.onclick = function() {
                            window.opener && !window.opener.closed && window.opener.location.href.startsWith(r) ? window.close() : window.open(r)
                        };
                        var o = document.querySelector(".step__sections > :nth-child(2)");
                        return null == o || null === (t = o.parentElement) || void 0 === t || t.insertBefore(a, o),
                            function() {
                                return a.remove()
                            }
                    }
                }), []), null
            }

            function G() {
                var e, t;
                return (0, r.useEffect)((function() {
                    if ("contact_information" === V()) {
                        var e, t, n = null === (e = window.Shopify) || void 0 === e || null === (t = e.Checkout) || void 0 === t ? void 0 : t.id;
                        if (void 0 !== n) {
                            var r = n.toString(10);
                            F.KK.getItem("analytics.checkoutId") !== r && (u.Z.instance.logCheckoutCreated({
                                checkout_id: n
                            }), F.KK.setItem("analytics.checkoutId", r))
                        }
                    }
                }), []), e = (0, M.jD)(!1).setIsCartDirty, t = (0, r.useCallback)((function() {
                    "thank_you" === V() && e(!0)
                }), [e]), (0, j.my)(t), "thank_you" === V() ? r.createElement(H, null) : null
            }
            const Z = {
                aws_project_region: "us-west-2",
                aws_cognito_region: "us-west-2",
                aws_user_pools_id: "us-west-2_cYyrphD1s",
                aws_user_pools_web_client_id: "2ndmfsktub2uqoq54tcnpscqvk",
                oauth: {
                    domain: "auth.roseinc.com",
                    scope: ["phone", "email", "openid", "profile", "aws.cognito.signin.user.admin"],
                    redirectSignIn: "https://www.roseinc.com/account/login",
                    // redirectSignOut: "https://www.roseinc.com/account/logout",
                    responseType: "code",
                    redirectSignInList: [],
                    redirectSignOutList: []
                },
                federationTarget: "COGNITO_USER_POOLS"
            };
            var W, Y = n(5284),
                K = n(97748),
                X = n(58119),
                z = function(e) {
                    var t, n = (0, r.useContext)(d.pW),
                        a = n.matches[n.matches.length - 1].route.path,
                        o = null !== (t = e.nonReloadingGroup) && void 0 !== t ? t : a;
                    return void 0 === W && (W = o), o === W ? r.createElement(r.Fragment, null, e.children) : r.createElement(Q, null)
                },
                J = function(e, t, n) {
                    return r.createElement(d.AW, {
                        path: e,
                        element: r.createElement(z, {
                            nonReloadingGroup: n
                        }, t)
                    })
                };

            function Q() {
                return (0, r.useEffect)((function() {
                    return window.location.reload()
                }), []), r.createElement(L.g, {
                    alt: "accessibility.loading"
                })
            }

            function $(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ee(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ee(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ee(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            R.Z.initialiseAmplifyConfig(Z);
            var te = (0, r.lazy)((function() {
                    return Promise.all([n.e(969), n.e(382), n.e(557), n.e(508)]).then(n.bind(n, 508))
                })),
                ne = (0, r.lazy)((function() {
                    return Promise.all([n.e(969), n.e(519), n.e(204), n.e(828), n.e(634), n.e(895), n.e(553), n.e(8), n.e(85), n.e(557), n.e(937), n.e(476)]).then(n.bind(n, 47476))
                })),
                re = (0, r.lazy)((function() {
                    return Promise.all([n.e(969), n.e(519), n.e(647), n.e(557), n.e(937), n.e(666)]).then(n.bind(n, 23666))
                })),
                ae = (0, r.lazy)((function() {
                    return Promise.all([n.e(969), n.e(557), n.e(299)]).then(n.bind(n, 53299))
                })),
                oe = (0, r.lazy)((function() {
                    return n.e(144).then(n.bind(n, 42144))
                })),
                ie = (0, r.lazy)((function() {
                    return n.e(947).then(n.bind(n, 55947))
                })),
                ue = (0, r.lazy)((function() {
                    return n.e(823).then(n.bind(n, 14823))
                })),
                ce = (0, r.lazy)((function() {
                    return Promise.all([n.e(853), n.e(427)]).then(n.bind(n, 98427))
                })),
                se = (0, r.lazy)((function() {
                    return n.e(853).then(n.bind(n, 64853))
                })),
                le = (0, r.lazy)((function() {
                    return Promise.all([n.e(730), n.e(242)]).then(n.bind(n, 70407))
                })),
                de = (0, r.lazy)((function() {
                    return Promise.all([n.e(730), n.e(242), n.e(510)]).then(n.bind(n, 39510))
                })),
                me = (0, r.lazy)((function() {
                    return Promise.all([n.e(969), n.e(557), n.e(522)]).then(n.bind(n, 32522))
                })),
                pe = (0, r.lazy)((function() {
                    return Promise.all([n.e(969), n.e(557), n.e(959)]).then(n.bind(n, 94959))
                }));

            function fe(e) {
                var t = e.children,
                    n = e.reactRootExplicit;
                return r.createElement(L.Z, {
                    loadingAnimation: D.Z
                }, r.createElement(Y.u, {
                    onboarding: {
                        useChecker: X.dn,
                        component: X.B_,
                        duringSignIn: !1,
                        duringSignInExcludePaths: []
                    },
                    authHeader: me,
                    profileHeader: K.Z,
                    sendAcceptsMarketingOnSignUp: !0,
                    defaultSignUpPrompt: {
                        title: "account.sign_up.title",
                        subtitle: null,
                        asterisk: null
                    },
                    acceptsMarketingForSocialByDefault: !0,
                    signInPrompt: {
                        title: "account.sign_in.title",
                        subtitle: null
                    },
                    signUpConfirmEmail: !1,
                    textEditorLabelStyle: "placeholder",
                    forgotPasswordUnderField: !1,
                    pathSupportsNewAccountParam: "/pages/watch/:showStringAndReferralCode"
                }, r.createElement(m.gd, {
                    reactRootExplicit: n,
                    logInShopifyIfCognitoLoggedIn: !1
                }, r.createElement(M.GN, null, r.createElement(x, null, r.createElement(p.R, {
                    streamInProgressExtraHideElementIds: ["launcher", "ada-entry", "ot-sdk-btn-floating"],
                    streamInProgressHideAndReturnUnhideExtra: function() {
                        var e = document.createElement("style");
                        return e.textContent += ".Rise__widget { display: none !important; }\n", document.head.append(e),
                            function() {
                                document.head.removeChild(e)
                            }
                    },
                    authModalSingleButton: !0,
                    profilePictureDefaultSizeMobile: 24,
                    profilePictureDefaultSizeDesktopLarge: 40,
                    profilePictureEnabled: !1,
                    requirePreShowSignIn: !1,
                    displayShowOwner: !1,
                    signInDefaultTitle: {
                        title: "account.sign_up.title_without_discount",
                        subtitle: null,
                        asterisk: null
                    },
                    renderCustomVariantDropdown: !0,
                    displayLiveViewers: {
                        minCount: 20,
                        showAgainMinCount: 40,
                        timeout: 1e4
                    },
                    productFnsAndGql: P,
                    variantFnsAndGql: w
                }, r.createElement(U.l, null, t)))))))
            }
            var ge = function() {
                    return r.createElement(r.Fragment, null, r.createElement(ae, null), r.createElement(ue, null))
                },
                ve = function() {
                    var e = $((0, d.UO)().showStringAndReferralCode.split("!"), 1)[0],
                        t = document.getElementById("react-liveshopping-featured-products");
                    return r.createElement(r.Fragment, null, r.createElement(ne, {
                        extraShowCardChildren: r.createElement(r.Fragment, null, t && a.createPortal(r.createElement(oe, {
                            showShortId: e,
                            hideWhenEnded: !0
                        }), t), r.createElement(ie, {
                            showShortId: e
                        }))
                    }))
                },
                _e = function() {
                    return void 0 !== window.shopData ? r.createElement(se, null) : null
                };

            function he() {
                return (0, S.y8)("", {
                    active: !1
                }), null
            }
            const be = function(e) {
                var t, n = e.reactRootExplicit;
                return r.createElement(l.VK, null, r.createElement(fe, {
                    reactRootExplicit: n
                }, r.createElement(he, null), null, r.createElement(r.Suspense, {
                    fallback: r.createElement(L.g, {
                        alt: "accessibility.loading"
                    })
                }, r.createElement(d.Z5, null, J("*//*", r.createElement(r.Fragment, null, (function(e) {
                    var t = e.match.url.replace(/\/\/+/g, "/");
                    return r.createElement(d.Fg, {
                        to: t + e.location.search
                    })
                }))), J("/account/register", r.createElement(S.Mo, {
                    titleAndAsterisk: "default",
                    embeddedInAnotherPage: !1
                }), "auth"), J("/account/login/multipass/:multipassToken", r.createElement(r.Fragment, null, null === (t = i.Z.instance) || void 0 === t ? void 0 : t.report("Shopify seems to have served a page at the multipass URL"))), J("/account/login", r.createElement(S.cL, {
                    embeddedInAnotherPage: !1
                }), "auth"), J("/account/invalid_token", r.createElement(S.cL, {
                    embeddedInAnotherPage: !1
                }), "auth"), J("/account/activate/:customerId/:token", r.createElement(S.Mo, {
                    titleAndAsterisk: "default",
                    embeddedInAnotherPage: !1
                }), "auth"), J("/pages/".concat("myaccount"), r.createElement(S.Uk, null), "auth"), J("/pages/profile/:profilePage", r.createElement(re, null)), J("/pages/broadcast/:showString", r.createElement(te, null)), J("/pages/broadcast", r.createElement(te, null)), J("/pages/watch/:showStringAndReferralCode", r.createElement(ve, null)), J("/pages/live-shopping", r.createElement(ge, null)), J("/pages/channels/:handle", r.createElement(pe, null)), J("/:firstId/checkouts/:secondId", r.createElement(G, null)), J("/:firstId/checkouts/:secondId/:page", r.createElement(G, null)), J("/:firstId/orders/:secondId", r.createElement(H, null)), J("/products/:productHandle", r.createElement(_e, null)), J("/products_preview", r.createElement(_e, null)), J("/collections/:collection/products/:productHandle", r.createElement(_e, null)), J("/pages/satin-lip-color-lipstick", r.createElement(_e, null)), J("/pages/shade-finder", r.createElement(le, {
                    modeName: "questionnaire",
                    url: "/",
                    params: !1
                })), J("/pages/shade-finder-results/:params", r.createElement(de, null)), J("/pages/virtual-try-on", r.createElement(ce, null), "vto"), J("/pages/virtual-try-on/:productHandle", r.createElement(ce, null), "vto"), J("*", r.createElement(r.Fragment, null))))))
            };
            var Ee;
            (0, o.MD)(), i.Z.initialise("https://errors.amyris.beautylabs.com/errorReport"), null === (Ee = i.Z.instance) || void 0 === Ee || Ee.registerExtraDetailsHandler((function(e) {
                e._app_name = "rose-inc-web", e._app_version = "0.0.1", e._git_commit_id = "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb"
            })), u.Z.initialise();
            var ye = function() {
                    var e = document.getElementById("react-root"),
                        t = !0;
                    return e || (t = !1, e = document.createElement("div"), document.body.appendChild(e)), {
                        root: e,
                        rootExplicit: t
                    }
                }(),
                Ae = ye.root,
                Pe = ye.rootExplicit;
            a.render(r.createElement(be, {
                reactRootExplicit: Pe
            }), Ae)
        },
        61167: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    Z: () => r
                }),
                function(e) {
                    e[e.None = -1] = "None", e[e.Success = 0] = "Success", e[e.FailureUnknown = 1] = "FailureUnknown", e[e.FailureModuleNotStarted = 2] = "FailureModuleNotStarted", e[e.FailureActivationFailed = 3] = "FailureActivationFailed", e[e.FailureNoDefaultCamera = 4] = "FailureNoDefaultCamera", e[e.FailureNoValidCaptureFormat = 5] = "FailureNoValidCaptureFormat", e[e.FailureCaptureFailed = 6] = "FailureCaptureFailed", e[e.FailurePermissionDenied = 7] = "FailurePermissionDenied"
                }(r || (r = {}))
        },
        8185: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => r,
                Z: () => f
            });
            n(35666), n(74916), n(23123), n(73210), n(23157), n(27852), n(47042), n(9653), n(92222), n(69600), n(15306), n(24603), n(39714), n(41539), n(68309), n(91038), n(78783), n(82526), n(41817), n(32165), n(66992), n(33948), n(88674);
            var r, a = n(3550),
                o = n(58905),
                i = n(65503);

            function u(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            u(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            u(o, r, a, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function s(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    u = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        u = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }! function(e) {
                e[e.DUPLICATE_EMAIL = 1] = "DUPLICATE_EMAIL", e[e.DISABLED_ACCOUNT = 2] = "DISABLED_ACCOUNT"
            }(r || (r = {}));
            var p = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, r, u, l, m, p;
                return t = e, n = null, r = [{
                    key: "initialiseAmplifyConfig",
                    value: function(e) {
                        this.awsconfig = e, void 0 === e.oauth.redirectSignOutList && (e.oauth.redirectSignOutList = e.oauth.redirectSignOut.split(","), e.oauth.redirectSignOut = e.oauth.redirectSignOutList[0]);
                        var t, n = s(e.oauth.redirectSignOutList);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                // if (r === "https://".concat(window.location.host, "/account/logout")) {
                                //     e.oauth.redirectSignOut = r;
                                //     break
                                // }
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        void 0 === e.oauth.redirectSignInList && (e.oauth.redirectSignInList = e.oauth.redirectSignIn.split(","), e.oauth.redirectSignIn = e.oauth.redirectSignInList[0]);
                        var o, i = s(e.oauth.redirectSignInList);
                        try {
                            for (i.s(); !(o = i.n()).done;) {
                                var u = o.value;
                                if (u === "https://".concat(window.location.host, "/account/login")) {
                                    // e.oauth.redirectSignIn = u;
                                    break
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        "true" !== {
                            NODE_ENV: "production",
                            REACT_APP_MODEL_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/models/",
                            REACT_APP_SKIN_TONE_API: "https://skintone.roseinc.beautylabs.com",
                            REACT_APP_NAME: "rose-inc-web",
                            REACT_APP_ERROR_REPORT_URL: "https://errors.amyris.beautylabs.com/errorReport",
                            REACT_APP_DEFAULT_MODEL_NAME_EYEBROWS: "FUTest-Brows-6",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_NUMBERS: "true",
                            REACT_APP_BI_ACCOUNT_APP_NAME: "account",
                            REACT_APP_PLUGIN_BASE: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/",
                            REACT_APP_BI_APP_NAME: "roseinc_web",
                            REACT_APP_ACCOUNT_NAMESPACE: "roseinc",
                            REACT_APP_BI_LIVESHOPPING_APP_NAME: "liveshopping",
                            REACT_APP_COMMIT_HASH: "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb",
                            REACT_APP_STOREFRONT_API_KEY: "f1c1eba5583bb760c097cba85a0b1a51",
                            REACT_APP_ACCOUNT_BACKEND_BASE_URI: "https://account.amyris.beautylabs.com/api/consumer/roseinc",
                            REACT_APP_LIVESHOPPING_NAMESPACE: "roseinc",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_SYMBOLS: "true",
                            REACT_APP_FUSIONFS_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/data/",
                            REACT_APP_BI_REPORT_URI: "https://logs.amyris.beautylabs.com/bi",
                            REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_EYES: "VTO-5-2",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_LOWERCASE: "true",
                            REACT_APP_STOREFRONT_DOMAIN: "www.roseinc.com",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_UPPERCASE: "true",
                            REACT_APP_ACCOUNT_PAGE_NAME: "myaccount",
                            REACT_APP_VERSION: "0.0.1",
                            REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_MOUTH: "VTO-5-1",
                            REACT_APP_CDN_ROOT: "https://cdn.roseinc.beautylabs.com/production/132459692220",
                            REACT_APP_TEXTURE_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/vto/textures/",
                            REACT_APP_LIVE_SHOPPING_BACKEND_BASE_URI: "https://liveshopping.amyris.beautylabs.com/api/roseinc",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_MIN_LEN: "8"
                        }.REACT_APP_DISABLE_AMPLIFY ? a.ZP.configure(this.awsconfig) : console.warn("Amplify is disabled.  Some features will not work correctly.")
                    }
                }, {
                    key: "reinitialiseAmplify",
                    value: function(e) {
                        "true" !== {
                            NODE_ENV: "production",
                            REACT_APP_MODEL_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/models/",
                            REACT_APP_SKIN_TONE_API: "https://skintone.roseinc.beautylabs.com",
                            REACT_APP_NAME: "rose-inc-web",
                            REACT_APP_ERROR_REPORT_URL: "https://errors.amyris.beautylabs.com/errorReport",
                            REACT_APP_DEFAULT_MODEL_NAME_EYEBROWS: "FUTest-Brows-6",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_NUMBERS: "true",
                            REACT_APP_BI_ACCOUNT_APP_NAME: "account",
                            REACT_APP_PLUGIN_BASE: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/",
                            REACT_APP_BI_APP_NAME: "roseinc_web",
                            REACT_APP_ACCOUNT_NAMESPACE: "roseinc",
                            REACT_APP_BI_LIVESHOPPING_APP_NAME: "liveshopping",
                            REACT_APP_COMMIT_HASH: "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb",
                            REACT_APP_STOREFRONT_API_KEY: "f1c1eba5583bb760c097cba85a0b1a51",
                            REACT_APP_ACCOUNT_BACKEND_BASE_URI: "https://account.amyris.beautylabs.com/api/consumer/roseinc",
                            REACT_APP_LIVESHOPPING_NAMESPACE: "roseinc",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_SYMBOLS: "true",
                            REACT_APP_FUSIONFS_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/data/",
                            REACT_APP_BI_REPORT_URI: "https://logs.amyris.beautylabs.com/bi",
                            REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_EYES: "VTO-5-2",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_LOWERCASE: "true",
                            REACT_APP_STOREFRONT_DOMAIN: "www.roseinc.com",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_UPPERCASE: "true",
                            REACT_APP_ACCOUNT_PAGE_NAME: "myaccount",
                            REACT_APP_VERSION: "0.0.1",
                            REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_MOUTH: "VTO-5-1",
                            REACT_APP_CDN_ROOT: "https://cdn.roseinc.beautylabs.com/production/132459692220",
                            REACT_APP_TEXTURE_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/vto/textures/",
                            REACT_APP_LIVE_SHOPPING_BACKEND_BASE_URI: "https://liveshopping.amyris.beautylabs.com/api/roseinc",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_MIN_LEN: "8"
                        }.REACT_APP_DISABLE_AMPLIFY && (e(this.awsconfig), a.ZP.configure(this.awsconfig))
                    }
                }, {
                    key: "getPasswordPattern",
                    value: function() {
                        return e.passwordPattern || (e.passwordPattern = e.generatePasswordPattern()), e.passwordPattern
                    }
                }, {
                    key: "getPasswordTitle",
                    value: function() {
                        return e.passwordTitle || (e.passwordTitle = e.generatePasswordTitle()), e.passwordTitle
                    }
                }, {
                    key: "getPasswordCue",
                    value: function() {
                        return e.passwordCue || (e.passwordCue = e.generatePasswordCue()), e.passwordCue
                    }
                }, {
                    key: "getPasswordRules",
                    value: function() {
                        return e.passwordRules || (e.passwordRules = e.generatePasswordRules()), e.passwordRules
                    }
                }, {
                    key: "getPasswordMinLength",
                    value: function() {
                        return e.passwordMinLength || (e.passwordMinLength = e.generatePasswordMinLength()), e.passwordMinLength
                    }
                }, {
                    key: "hasGroup",
                    value: function(t, n) {
                        return -1 !== e.getGroups(t).indexOf(n)
                    }
                }, {
                    key: "getGroups",
                    value: function(e) {
                        var t = e.getSignInUserSession();
                        return t && t.getIdToken().payload["cognito:groups"] || []
                    }
                }, {
                    key: "getShopifyMultipassToken",
                    value: (p = c(regeneratorRuntime.mark((function e(t, n) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.makeAuthenticatedApiRequest(t, "/multipass/v1", "POST", JSON.stringify(n));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t) {
                        return p.apply(this, arguments)
                    })
                }, {
                    key: "getAccountState",
                    value: (m = c(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.makeUnauthenticatedApiRequest("/state/".concat(encodeURIComponent(t), "/v1"), "GET", void 0);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return m.apply(this, arguments)
                    })
                }, {
                    key: "getShopifyLoginURL",
                    value: function(e) {
                        return "/account/login/multipass/".concat(e)
                    }
                }, {
                    key: "getShopifyLogoutURL",
                    value: function(e) {
                        var t = encodeURIComponent(e);
                        return "/account"
                    }
                }, {
                    key: "getShopifyAccountURL",
                    value: function() {
                        return "/account"
                    }
                }, {
                    key: "makeUnauthenticatedApiRequest",
                    value: (l = c(regeneratorRuntime.mark((function e(t, n, r) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.D.makeUnauthenticatedJsonApiRequest("https://account.amyris.beautylabs.com/api/consumer/roseinc", t, n, r, !1);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function(e, t, n) {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "makeAuthenticatedApiRequest",
                    value: (u = c(regeneratorRuntime.mark((function e(t, n, r, a) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.D.makeAuthenticatedJsonApiRequest("https://account.amyris.beautylabs.com/api/consumer/roseinc", t, n, r, a);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function(e, t, n, r) {
                        return u.apply(this, arguments)
                    })
                }, {
                    key: "isCustomPreSignUpError",
                    value: function(t) {
                        return !!((t = t.trim()).startsWith(e.PRE_SIGNUP_PREFIX) && t.endsWith(e.PRE_SIGNUP_SUFFIX) && t.slice(e.PRE_SIGNUP_PREFIX.length, -e.PRE_SIGNUP_SUFFIX.length).trim().startsWith("{"))
                    }
                }, {
                    key: "parsePreSignupError",
                    value: function(t) {
                        var n = (t = t.trim()).slice(e.PRE_SIGNUP_PREFIX.length, -e.PRE_SIGNUP_SUFFIX.length);
                        return JSON.parse(n)
                    }
                }, {
                    key: "isNativeAccount",
                    value: function(e) {
                        return !e.attributes.identities
                    }
                }, {
                    key: "isSocialAccount",
                    value: function(t) {
                        var n, r = s(e.getGroups(t));
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var a = n.value;
                                if (a.endsWith("Google") || a.endsWith("Facebook")) return !0
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        return !1
                    }
                }, {
                    key: "getEmail",
                    value: function(e) {
                        return e.attributes.email
                    }
                }, {
                    key: "generatePasswordPattern",
                    value: function() {
                        var t = "(?=.*?[".concat(e.COGNITO_SYMBOLS_FOR_REGEX, "])"),
                            n = Number("8"),
                            r = "{".concat(n, ",}");
                        return "^".concat("(?=.*?[A-Z])").concat("(?=.*?[a-z])").concat("(?=.*?\\d)").concat(t, ".").concat(r, "$")
                    }
                }, {
                    key: "generatePasswordTitle",
                    value: function() {
                        var e, t = Number("8"),
                            n = [];
                        if (n.push("uppercase"), n.push("lowercase"), n.push("number"), n.push("symbol"), 0 === n.length) e = (0, o.Iu)("account.common.password_requirement_length_only", {
                            min_length: t
                        });
                        else {
                            var r = n.join(", ");
                            e = (0, o.Iu)("account.common.password_requirement_length_and_types", {
                                min_length: t,
                                char_types: r
                            })
                        }
                        return e
                    }
                }, {
                    key: "generatePasswordCue",
                    value: function() {
                        return (0, o.Iu)("account.common.password_cue_with_symbols", {
                            password_title: e.getPasswordTitle(),
                            symbols: e.COGNITO_SYMBOLS
                        })
                    }
                }, {
                    key: "generatePasswordRules",
                    value: function() {
                        var e = [];
                        return Number("8") > 0 && e.push("minLength"), e.push("capital"), e.push("lowercase"), e.push("number"), e.push("specialChar"), e
                    }
                }, {
                    key: "generatePasswordMinLength",
                    value: function() {
                        return Number("8")
                    }
                }, {
                    key: "escapeForRegex",
                    value: function(e) {
                        return e.replace(/[-[\]\\/]/g, "\\$&")
                    }
                }], n && d(t.prototype, n), r && d(t, r), e
            }();
            m(p, "COGNITO_SYMBOLS", "=+-^$*.[]{}()?\"!@#%&/\\,><':;|_~`"), m(p, "COGNITO_SYMBOLS_FOR_REGEX", p.escapeForRegex(p.COGNITO_SYMBOLS)), m(p, "COGNITO_SYMBOLS_RULE_REGEX", new RegExp("[".concat(p.COGNITO_SYMBOLS_FOR_REGEX, "]"))), m(p, "passwordPattern", void 0), m(p, "passwordTitle", void 0), m(p, "passwordCue", void 0), m(p, "passwordRules", void 0), m(p, "passwordMinLength", void 0), m(p, "awsconfig", void 0), m(p, "EMAIL_PATTERN", "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"), m(p, "PRE_SIGNUP_PREFIX", "PreSignUp failed with error "), m(p, "PRE_SIGNUP_SUFFIX", ".");
            const f = p
        },
        65503: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => m,
                D: () => p
            });
            n(35666), n(41539), n(88674), n(47941), n(82526), n(57327), n(38880), n(54747), n(49337);
            var r = n(3161),
                a = n(43528);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        d(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            u(o, r, a, i, c, "next", e)
                        }

                        function c(e) {
                            u(o, r, a, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var m = function e(t, n) {
                    l(this, e), d(this, "response", void 0), d(this, "json", void 0), this.response = t, this.json = n
                },
                p = function() {
                    function e() {
                        l(this, e)
                    }
                    var t, n, o, u, d, p, f, g;
                    return t = e, n = null, o = [{
                        key: "makeJsonApiRequest",
                        value: (g = c(regeneratorRuntime.mark((function e(t, n, a, o, u, c) {
                            var s, l, d, p;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = i(i({}, u), {}, {
                                            Accept: "application/json"
                                        }), c && (s["X-Device-ID"] = r.Z.instance.deviceId, s["X-Session-ID"] = r.Z.instance.sessionId), l = {
                                            method: a,
                                            mode: "cors",
                                            headers: s,
                                            referrerPolicy: "no-referrer-when-downgrade"
                                        }, void 0 !== o && "GET" !== a && "HEAD" !== a && (l.body = o, l.headers["Content-Type"] = "application/json"), e.next = 6, fetch(t + n, l);
                                    case 6:
                                        if (!(d = e.sent).ok) {
                                            e.next = 15;
                                            break
                                        }
                                        if (204 !== d.status) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("return", void 0);
                                    case 10:
                                        return e.next = 12, d.json();
                                    case 12:
                                        return e.abrupt("return", e.sent);
                                    case 15:
                                        return p = void 0, e.prev = 16, e.next = 19, d.json();
                                    case 19:
                                        p = e.sent, e.next = 24;
                                        break;
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(16);
                                    case 24:
                                        throw new m(d, p);
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [16, 22]
                            ])
                        }))), function(e, t, n, r, a, o) {
                            return g.apply(this, arguments)
                        })
                    }, {
                        key: "makeUnauthenticatedJsonApiRequest",
                        value: (f = c(regeneratorRuntime.mark((function e(t, n, r, a, o) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this.makeJsonApiRequest(t, n, r, a, {}, o));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r, a) {
                            return f.apply(this, arguments)
                        })
                    }, {
                        key: "makeOptionallyAuthenticatedJsonApiRequest",
                        value: (p = c(regeneratorRuntime.mark((function e(t, n, r, a, o) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this.makePossiblyAuthenticatedJsonApiRequest(t, n, !0, r, a, o));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r, a) {
                            return p.apply(this, arguments)
                        })
                    }, {
                        key: "makeAuthenticatedJsonApiRequest",
                        value: (d = c(regeneratorRuntime.mark((function e(t, n, r, a, o) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this.makePossiblyAuthenticatedJsonApiRequest(t, n, !1, r, a, o));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r, a) {
                            return d.apply(this, arguments)
                        })
                    }, {
                        key: "makePossiblyAuthenticatedJsonApiRequest",
                        value: (u = c(regeneratorRuntime.mark((function e(t, n, r, o, i, u) {
                            var c, s, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r || n) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("Missing user in API request");
                                    case 2:
                                        if (!n) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 5, new Promise((function(e, t) {
                                            n.getSession((function(n, a) {
                                                n ? r ? e(void 0) : t(n) : e(a)
                                            }))
                                        }));
                                    case 5:
                                        c = e.sent;
                                    case 6:
                                        if (s = {}, !c) {
                                            e.next = 12;
                                            break
                                        }
                                        if (void 0 !== (l = c.getIdToken().getJwtToken()) || r) {
                                            e.next = 11;
                                            break
                                        }
                                        throw new Error("Missing JWT");
                                    case 11:
                                        l && (s["X-ID-Token"] = l);
                                    case 12:
                                        return "POST" !== i && "PATCH" !== i || (s["X-Idempotency-Token"] = (0, a.Z)()), e.next = 15, this.makeJsonApiRequest(t, o, i, u, s, !0);
                                    case 15:
                                        return e.abrupt("return", e.sent);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r, a, o) {
                            return u.apply(this, arguments)
                        })
                    }], n && s(t.prototype, n), o && s(t, o), e
                }()
        },
        56709: (e, t, n) => {
            "use strict";
            n.d(t, {
                Uk: () => ue,
                cL: () => de,
                Mo: () => se,
                Pt: () => Ee,
                y8: () => re,
                nh: () => ae,
                oo: () => ne
            });
            n(35666), n(74916), n(64765), n(66992), n(41539), n(78783), n(33948), n(60285), n(92222), n(24603), n(39714), n(26699), n(32023), n(15306), n(23157), n(4723), n(23123), n(82526), n(41817), n(32165), n(47042), n(68309), n(91038), n(88674);
            var r = n(67294),
                a = n(39711),
                o = n(96974),
                i = n(92976),
                u = n(71672),
                c = n(46829),
                s = n(51163),
                l = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "CustomerQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "customerAccessToken"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "customer"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "customerAccessToken"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "customerAccessToken"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "acceptsMarketing"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 165,
                        source: {
                            body: "\n    query CustomerQuery($customerAccessToken: String!) {\n        customer(customerAccessToken: $customerAccessToken) {\n            acceptsMarketing\n        }\n    }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                d = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "CustomerUpdate"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "customerAccessToken"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "acceptsMarketing"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Boolean"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "customerUpdate"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "customerAccessToken"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "customerAccessToken"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "customer"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "acceptsMarketing"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "acceptsMarketing"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "customer"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "acceptsMarketing"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "customerUserErrors"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "code"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "field"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "message"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 482,
                        source: {
                            body: "\n    mutation CustomerUpdate($customerAccessToken: String!, $acceptsMarketing:Boolean!) {\n        customerUpdate(\n            customerAccessToken: $customerAccessToken\n            customer:\n            {\n                acceptsMarketing: $acceptsMarketing\n            }\n        ) {\n            customer {\n                acceptsMarketing\n            }\n            customerUserErrors {\n                code\n                field\n                message\n            }\n        }\n    }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                m = n(8185),
                p = "Incorrect username or password.",
                f = "Username should be an email.",
                g = "Value at 'password'",
                v = "Value at 'previousPassword'",
                _ = "Value at 'proposedPassword'",
                h = "Username cannot be empty",
                b = "Password cannot be empty",
                E = "Password did not conform with policy: ",
                y = "User is disabled.",
                A = "User is already confirmed.",
                P = "User cannot be confirmed. Current status is CONFIRMED",
                w = "Cannot reset password for the user as there is no registered/verified email or phone_number",
                S = n(34994),
                I = (n(47941), n(57327), n(38880), n(54747), n(49337), n(3161));

            function R(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function k(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function O(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var T = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    var t, n, r;
                    return t = e, r = [{
                        key: "log",
                        value: function(e, t, n) {
                            I.Z.instance.log(e, t, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? R(Object(n), !0).forEach((function(t) {
                                        k(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                namespace: "roseinc"
                            }, n), "account")
                        }
                    }, {
                        key: "logResendSignUp",
                        value: function(e) {
                            this.log("resend_sign_up", !1, e)
                        }
                    }, {
                        key: "logForgotPassword",
                        value: function(e) {
                            this.log("forgot_password", !1, e)
                        }
                    }], (n = null) && O(t.prototype, n), r && O(t, r), e
                }(),
                C = n(36334),
                N = n(58905);

            function x(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function M(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            x(o, r, a, i, u, "next", e)
                        }

                        function u(e) {
                            x(o, r, a, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function U(e, t, n, r) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = M(regeneratorRuntime.mark((function e(t, n, r, a) {
                    var o, u;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a(""), o = (0, N.Iu)("global.locale.language"), u = {
                                    language: o,
                                    domain: window.location.host,
                                    destinationPath: n
                                }, e.prev = 3, T.logResendSignUp({}), e.next = 7, i.g.resendSignUp(t, u);
                            case 7:
                                (0, S.Gb)(t), r(!0), e.next = 28;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(3), e.t1 = null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code, e.next = "UserNotFoundException" === e.t1 ? 16 : "NotAuthorizedException" === e.t1 ? 18 : "InvalidParameterException" === e.t1 ? 20 : "LimitExceededException" === e.t1 ? 22 : 25;
                                break;
                            case 16:
                                return e.t0.message = (0, N.Iu)("account.errors.non_existent_account"), e.abrupt("break", 27);
                            case 18:
                                return (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) === y && (e.t0.message = (0, N.Iu)("account.errors.disabled_account")), e.abrupt("break", 27);
                            case 20:
                                return (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) === A && (e.t0.message = (0, N.Iu)("account.errors.confirmed_account")), e.abrupt("break", 27);
                            case 22:
                                return C.Z.instance.reportError("Error requesting confirmation code: " + (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message), null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack), e.t0.message = (0, N.Iu)("account.errors.too_many_resend_signup"), e.abrupt("break", 27);
                            case 25:
                                C.Z.instance.reportError("Error requesting confirmation code: " + (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message), null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack), (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) === h && (e.t0.message = (0, N.Iu)("account.errors.missing_email"));
                            case 27:
                                a(e.t0.message);
                            case 28:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [3, 11]
                    ])
                })))).apply(this, arguments)
            }

            function D(e, t, n, r, a) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = M(regeneratorRuntime.mark((function e(t, n, r, a, o) {
                    var u, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return u = (0, N.Iu)("global.locale.language"), c = {
                                    language: u,
                                    domain: window.location.host,
                                    destinationPath: n
                                }, e.prev = 2, T.logForgotPassword({}), e.next = 6, i.g.forgotPassword(t, c);
                            case 6:
                                (0, S.Gb)(t), r(!0), e.next = 24;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(2), e.t1 = null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code, e.next = "UserNotFoundException" === e.t1 ? 15 : "NotAuthorizedException" === e.t1 ? 17 : "InvalidParameterException" === e.t1 ? 19 : 21;
                                break;
                            case 15:
                                return e.t0.message = (0, N.Iu)("account.errors.non_existent_account"), e.abrupt("break", 23);
                            case 17:
                                return (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) === y && (e.t0.message = (0, N.Iu)("account.errors.disabled_account")), e.abrupt("break", 23);
                            case 19:
                                return (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) === w && (a(!0), e.t0.message = ""), e.abrupt("break", 23);
                            case 21:
                                C.Z.instance.reportError("Error sending forgotten password email: " + (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message), null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack), (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) === h && (e.t0.message = (0, N.Iu)("account.errors.missing_email"));
                            case 23:
                                o(e.t0.message);
                            case 24:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 10]
                    ])
                })))).apply(this, arguments)
            }
            var j = n(93970),
                V = n(25251),
                q = n(77825),
                B = n(34074),
                H = n(57154),
                G = n(5284);

            function Z(e) {
                var t = (0, G.O)();
                return t.onboarding ? r.createElement("div", {
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, r.createElement(W, {
                    targetPath: e.targetPath,
                    onboarding: t.onboarding
                }))) : r.createElement(S.Bj, {
                    to: e.targetPath,
                    mode: "replace"
                }, r.createElement(H.g, {
                    alt: "accessibility.loading"
                }))
            }

            function W(e) {
                var t = (0, S.kq)(),
                    n = e.onboarding,
                    a = (0, n.useChecker)(),
                    o = r.createElement(S.Bj, {
                        to: "/account",
                        mode: "push"
                    });
                return t ? "not logged in" === a ? o : "loading" === a ? r.createElement(H.g, {
                    alt: "accessibility.loading"
                }) : a ? r.createElement(n.component, null) : r.createElement(S.Bj, {
                    to: e.targetPath,
                    mode: "replace"
                }, r.createElement(H.g, {
                    alt: "accessibility.loading"
                })) : o
            }
            const Y = n.p + "a4c5144a3d00f819fdf6cd9a4ca1d41f.svg",
                K = n.p + "23fa33e7b70e833a6d858f7e875fe6f6.svg";
            var X = n(60282);

            function z(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = ee(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    u = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        u = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function J(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function Q(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            J(o, r, a, i, u, "next", e)
                        }

                        function u(e) {
                            J(o, r, a, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function $(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || ee(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ee(e, t) {
                if (e) {
                    if ("string" == typeof e) return te(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? te(e, t) : void 0
                }
            }

            function te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ne(e) {
                var t = "/pages/".concat("myaccount", "?operation=onboard");
                return e && (t += "&targetPath=".concat(encodeURIComponent(e))), t
            }
            var re = (0, B.I)(void 0, (function(e, t) {
                (0, r.useEffect)((function() {
                    if (!t.some((function(e) {
                            return e.active
                        }))) {
                        var e = V.KK.getItem("signInDestinationPath");
                        if (null !== e) {
                            var n = setTimeout((function() {
                                "Out of login flow - deleting stored signInDestinationPath - was: ".concat(e || "blank"), V.KK.removeItem("signInDestinationPath")
                            }), 1e3);
                            return function() {
                                return clearTimeout(n)
                            }
                        }
                    }
                }), [t])
            }), "no cleanup");

            function ae(e) {
                if (void 0 === e) throw new Error;
                re("", {
                    active: !e
                });
                var t = (0, o.TH)(),
                    n = (0, s.Pr)((function() {
                        if (e) return t.pathname + t.search;
                        var n = new URLSearchParams(t.search),
                            r = n.get("checkout_url");
                        if (r) try {
                            return new URL(r).pathname
                        } catch (e) {
                            console.warn("Invalid checkout_url supplied, ignoring it:", r)
                        }
                        var a = n.get("order");
                        if (a) return "/account/orders/".concat(a);
                        var i = n.get("return_url");
                        if (i) return i;
                        var u = n.get("destinationPath");
                        if (u) return u;
                        var c = V.KK.getItem("signInDestinationPath");
                        if (c) return "In login flow with no destinationPath param - relying on stored path: ".concat(c), c;
                        if (document.referrer) try {
                            var s = new URL(document.referrer);
                            if (s.host === window.location.host && (0, o.LX)(s.pathname, "/pages/watch/:showStringAndReferralCode")) return "Entered login flow with no destinationPath param - using referrer: ".concat(document.referrer), s.pathname + s.search
                        } catch (e) {
                            "Failed to process referrer: ".concat(e)
                        }
                        return "" === c || "Entered login flow with no destinationPath param and not using referrer: ".concat(document.referrer), ""
                    }), [e, t.pathname, t.search]),
                    r = (0, S.kq)();
                return (0, s.Pr)((function() {
                    e || ie(r, n)
                }), [e, n, r]), n
            }

            function oe(e, t) {
                return t && "".concat(e, "destinationPath=").concat(encodeURIComponent(t))
            }

            function ie(e, t) {
                e && (0, q.i)() || V.KK.setItem("signInDestinationPath", t)
            }

            function ue(e) {
                var t, n = new URLSearchParams((0, o.TH)().search),
                    a = n.get("operation"),
                    i = (0, G.O)();
                switch (a) {
                    case "signUp":
                        t = r.createElement(i.authHeader, null, r.createElement(se, {
                            titleAndAsterisk: "default",
                            embeddedInAnotherPage: !1
                        }));
                        break;
                    case "signIn":
                        t = r.createElement(i.authHeader, null, r.createElement(de, {
                            embeddedInAnotherPage: !1,
                            onComplete: e.onSignInComplete,
                            onCanConfirm: e.onCanConfirm
                        }));
                        break;
                    case "requestConfirmationCode":
                        t = r.createElement(i.authHeader, null, r.createElement(fe, {
                            embeddedInAnotherPage: !1
                        }));
                        break;
                    case "confirm":
                        t = r.createElement(i.authHeader, null, r.createElement(me, {
                            embeddedInAnotherPage: !1
                        }));
                        break;
                    case "confirmLink":
                        var u = n.get("code") || "",
                            c = n.get("userName") || "";
                        t = r.createElement(i.authHeader, null, r.createElement(pe, {
                            embeddedInAnotherPage: !1,
                            code: u,
                            userName: c,
                            onComplete: e.onSignUpComplete
                        }));
                        break;
                    case "changePassword":
                        t = r.createElement(i.authHeader, null, r.createElement(_e, {
                            onComplete: e.onChangePasswordComplete
                        }));
                        break;
                    case "forgotPassword":
                        t = r.createElement(i.authHeader, null, r.createElement(he, {
                            embeddedInAnotherPage: !1,
                            onComplete: e.onResetPasswordSent
                        }));
                        break;
                    case "forgotPasswordSubmit":
                        var s = n.get("code") || "",
                            l = n.get("userName") || "";
                        t = r.createElement(i.authHeader, null, r.createElement(be, {
                            embeddedInAnotherPage: !1,
                            code: s,
                            userName: l,
                            onComplete: e.onResetPasswordComplete
                        }));
                        break;
                    case "onboard":
                        var d = n.get("targetPath") || "/";
                        t = r.createElement(i.authHeader, null, r.createElement(Z, {
                            targetPath: d
                        }));
                        break;
                    case "signOut":
                        t = r.createElement(ve, {
                            query: n
                        });
                        break;
                    default:
                        window.location.href = m.Z.getShopifyAccountURL(), t = null
                }
                return t
            }

            function ce(e) {
                var t = e.user,
                    n = e.signInDestinationPath,
                    a = e.inProgress;

                function o(e) {
                    return function() {
                        ie(t, n), i.g.federatedSignIn({
                            provider: e
                        })
                    }
                }
                return r.createElement(r.Fragment, null, r.createElement("button", {
                    type: "button",
                    className: "bl-core-button account-button--social-login",
                    onClick: o(u.JG.Google),
                    disabled: a
                }, r.createElement("img", {
                    src: Y,
                    alt: (0, N.Iu)("account.common.google_logo_alt")
                }), r.createElement("span", null, (0, N.Iu)("account.common.continue_with_google"))), r.createElement("button", {
                    type: "button",
                    className: "bl-core-button account-button--social-login",
                    onClick: o(u.JG.Facebook),
                    disabled: a
                }, r.createElement("img", {
                    src: K,
                    alt: (0, N.Iu)("account.common.facebook_logo_alt")
                }), r.createElement("span", null, (0, N.Iu)("account.common.continue_with_facebook"))))
            }

            function se(e) {
                var t = (0, G.O)(),
                    n = "default" === e.titleAndAsterisk ? t.defaultSignUpPrompt : e.titleAndAsterisk,
                    o = n.title,
                    u = n.subtitle,
                    c = n.asterisk,
                    s = n.extra,
                    l = e.onComplete,
                    d = e.onCanConfirm,
                    p = (0, S.kq)(),
                    v = (0, j.XM)(),
                    _ = ae(e.embeddedInAnotherPage),
                    y = $((0, r.useState)(null), 2),
                    A = y[0],
                    P = y[1],
                    w = (0, X.FT)(),
                    I = (0, X.FT)(),
                    R = (0, X.FT)(e.existingAccountMigration),
                    k = (0, X.FT)(e.existingAccountMigration),
                    O = (0, X.FT)(),
                    T = $((0, r.useState)(!1), 2),
                    x = T[0],
                    M = T[1],
                    U = $((0, r.useState)(void 0 !== e.existingAccountMigration), 2),
                    L = U[0],
                    D = U[1],
                    F = $((0, r.useState)(!0), 2),
                    V = F[0],
                    q = F[1],
                    B = $((0, r.useState)(), 2),
                    H = B[0],
                    Z = B[1],
                    W = $((0, r.useState)(), 2),
                    Y = W[0],
                    K = W[1],
                    z = $((0, r.useState)(!1), 2),
                    J = z[0],
                    ee = z[1],
                    te = $((0, r.useState)(!1), 2),
                    ne = te[0],
                    re = te[1],
                    ie = $((0, r.useState)(!1), 2),
                    ue = ie[0],
                    se = ie[1];

                function le() {
                    return (le = Q(regeneratorRuntime.mark((function n(r) {
                        var a, o, u, c, s, l, d, p, y;
                        return regeneratorRuntime.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (r.preventDefault(), !J) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 3:
                                    return window.scrollTo(0, 0), Z(""), re(!0), a = (0, N.Iu)("global.locale.language"), o = {
                                        language: a,
                                        domain: window.location.host,
                                        destinationPath: _
                                    }, n.prev = 8, u = {
                                        "custom:language": a
                                    }, void 0 === e.existingAccountMigration && (u.given_name = w.currentValue, u.family_name = I.currentValue), t.sendAcceptsMarketingOnSignUp && void 0 === e.existingAccountMigration && (u["custom:accepts_marketing"] = V ? "true" : "false"), n.next = 14, i.g.signUp({
                                        username: R.currentValue,
                                        password: O.currentValue,
                                        attributes: u,
                                        clientMetadata: o
                                    });
                                case 14:
                                    c = n.sent, v.current && (c.userConfirmed ? se(!0) : M(!0), (0, S.Gb)(R.currentValue), re(!1)), n.next = 57;
                                    break;
                                case 18:
                                    n.prev = 18, n.t0 = n.catch(8), (null === n.t0 || void 0 === n.t0 ? void 0 : n.t0.message) === h && (n.t0.message = (0, N.Iu)("account.errors.missing_email")), (null === n.t0 || void 0 === n.t0 ? void 0 : n.t0.message) === b && (n.t0.message = (0, N.Iu)("account.errors.missing_password")), n.t1 = null === n.t0 || void 0 === n.t0 ? void 0 : n.t0.code, n.next = "InvalidParameterException" === n.t1 ? 25 : "InvalidPasswordException" === n.t1 ? 27 : "UsernameExistsException" === n.t1 ? 29 : "UserLambdaValidationException" === n.t1 ? 31 : 56;
                                    break;
                                case 25:
                                    return n.t0.message.includes(g) ? n.t0.message = (0, N.Iu)("account.errors.invalid_password") : n.t0.message.includes(f) ? n.t0.message = (0, N.Iu)("account.errors.invalid_email") : n.t0.message = (0, N.Iu)("account.errors.incorrect_login"), n.abrupt("break", 56);
                                case 27:
                                    return n.t0.message.includes(E) && (n.t0.message = n.t0.message.replace(E, "") + "."), n.abrupt("break", 56);
                                case 29:
                                    return n.t0.message = (0, N.Iu)("account.errors.email_already_in_use"), n.abrupt("break", 56);
                                case 31:
                                    if (!m.Z.isCustomPreSignUpError(n.t0.message)) {
                                        n.next = 54;
                                        break
                                    }
                                    n.prev = 32, s = m.Z.parsePreSignupError(n.t0.message), l = s.providers, d = l && l.length > 0 ? l[0] : null, n.t2 = d, n.next = "Cognito" === n.t2 ? 39 : "Google" === n.t2 ? 41 : "Facebook" === n.t2 ? 43 : 45;
                                    break;
                                case 39:
                                    return n.t0.message = (0, N.Iu)("account.errors.account_exists_native"), n.abrupt("break", 46);
                                case 41:
                                    return n.t0.message = (0, N.Iu)("account.errors.account_exists_google"), n.abrupt("break", 46);
                                case 43:
                                    return n.t0.message = (0, N.Iu)("account.errors.account_exists_facebook"), n.abrupt("break", 46);
                                case 45:
                                    n.t0.message = (0, N.Iu)("account.errors.account_exists_other");
                                case 46:
                                    n.next = 52;
                                    break;
                                case 48:
                                    n.prev = 48, n.t3 = n.catch(32), C.Z.instance.report(n.t3), n.t0.message = (0, N.Iu)("account.errors.signup_unexpected");
                                case 52:
                                    n.next = 56;
                                    break;
                                case 54:
                                    C.Z.instance.reportError("Sign-up error: ".concat(n.t0.message), null !== (p = null === (y = new Error) || void 0 === y ? void 0 : y.stack) && void 0 !== p ? p : ""), n.t0.message = (0, N.Iu)("account.errors.signup_unexpected");
                                case 56:
                                    v.current && (Z(n.t0.message), re(!1));
                                case 57:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [8, 18],
                            [32, 48]
                        ])
                    })))).apply(this, arguments)
                }(0, r.useEffect)((function() {
                    ue && (l ? P(l()) : window.location.href = "/pages/".concat("myaccount", "?operation=signIn&sourceOperation=signUp"))
                }), [ue, l]), (0, r.useEffect)((function() {
                    x && P(d ? d() : r.createElement(me, {
                        embeddedInAnotherPage: e.embeddedInAnotherPage
                    }))
                }), [x, d, e.embeddedInAnotherPage]);
                var de = t.textEditorLabelStyle,
                    pe = t.tabbedAuth;
                return (0, r.useEffect)((function() {
                    if (t.signUpConfirmEmail) {
                        var e = "";
                        k.currentValue !== R.currentValue ? (e = (0, N.Iu)("account.errors.email_mismatch"), k.setValidity("INVALID"), ee(!0)) : ee(!1), K(e)
                    }
                }), [t.signUpConfirmEmail, R, k]), r.createElement(r.Fragment, null, null != A ? A : r.createElement("div", {
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, pe ? r.createElement("div", {
                    className: "account-form__tab-container"
                }, r.createElement("div", {
                    className: "account-form__tab account-form__tab--active"
                }, (0, N.Iu)("account.sign_up.tab_title")), r.createElement("div", {
                    className: "account-form__tab account-form__tab--inactive"
                }, r.createElement(a.rU, {
                    to: "/pages/".concat("myaccount", "?operation=signIn").concat(oe("&", _))
                }, (0, N.Iu)("account.sign_in.tab_title")))) : r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)(o)), u && r.createElement("p", {
                    className: "account-form__subtitle"
                }, (0, N.Iu)(u)), s, void 0 === e.existingAccountMigration ? r.createElement(ce, {
                    user: p,
                    signInDestinationPath: _,
                    inProgress: ne
                }) : null, L ? r.createElement(r.Fragment, null, void 0 === e.existingAccountMigration ? r.createElement("div", {
                    className: "account-form-separator"
                }, r.createElement("div", {
                    className: "account-form-separator__line"
                }), r.createElement("span", {
                    className: "account-form-separator__text"
                }, (0, N.Iu)("account.common.social_separator")), r.createElement("div", {
                    className: "account-form-separator__line"
                })) : null, r.createElement("form", {
                    onSubmit: function(e) {
                        return le.apply(this, arguments)
                    },
                    autoComplete: "on"
                }, void 0 === e.existingAccountMigration ? r.createElement(r.Fragment, null, r.createElement(X.H4, {
                    id: "given-name",
                    state: w,
                    autoComplete: "given-name",
                    key: "firstNameInput",
                    label: "account.sign_up.first_name",
                    labelStyle: de,
                    required: !0
                }), r.createElement(X.H4, {
                    id: "family-name",
                    state: I,
                    autoComplete: "family-name",
                    key: "lastNameInput",
                    label: "account.sign_up.last_name",
                    labelStyle: de,
                    required: !0
                }), r.createElement(X.H4, {
                    id: "email",
                    type: "email",
                    state: R,
                    autoComplete: "username",
                    pattern: m.Z.EMAIL_PATTERN,
                    key: "emailInput",
                    label: "account.common.email",
                    labelStyle: de,
                    required: !0
                }), t.signUpConfirmEmail && r.createElement(r.Fragment, null, r.createElement(X.H4, {
                    id: "emailConfirm",
                    type: "email",
                    state: k,
                    autoComplete: "username",
                    pattern: m.Z.EMAIL_PATTERN,
                    key: "emailConfirm",
                    label: "account.common.email_confirm",
                    labelStyle: de,
                    required: !0
                }), r.createElement("div", {
                    className: "account-error__body email".concat(Y ? "" : " hidden")
                }, Y))) : null, r.createElement(X.H4, {
                    id: "password",
                    state: O,
                    type: "password",
                    labelStyle: de,
                    autoComplete: "new-password",
                    pattern: m.Z.getPasswordPattern(),
                    title: m.Z.getPasswordTitle(),
                    key: "passwordInput",
                    label: "account.common.password",
                    passwordRules: m.Z.getPasswordRules(),
                    passwordMinLength: m.Z.getPasswordMinLength(),
                    passwordSpecialCharRegExp: new RegExp(m.Z.COGNITO_SYMBOLS_RULE_REGEX),
                    required: !0
                }), t.sendAcceptsMarketingOnSignUp && void 0 === e.existingAccountMigration ? r.createElement("div", {
                    className: "account-form__email-updates-wrapper"
                }, r.createElement("input", {
                    id: "email-opt-in",
                    className: "bl-core-checkbox",
                    type: "checkbox",
                    checked: V,
                    onChange: function(e) {
                        return q(e.target.checked)
                    }
                }), r.createElement("label", {
                    htmlFor: "email-opt-in"
                }, (0, N.Iu)("account.sign_up.email_updates"))) : null, r.createElement("div", {
                    className: "account-error__body sign-up".concat(H ? "" : " hidden")
                }, H), r.createElement("button", {
                    type: "submit",
                    className: "bl-core-button bl-core-button--cta",
                    disabled: ne
                }, (0, N.Iu)(void 0 !== e.existingAccountMigration ? "account.sign_up.submit_migration" : "account.sign_up.submit")))) : r.createElement("p", {
                    className: "account-form__text account-fake-link",
                    role: "button",
                    tabIndex: 0,
                    onClick: function(e) {
                        e.preventDefault(), D(!0)
                    }
                }, (0, N.Iu)("account.sign_up.or_with_email")), void 0 === e.existingAccountMigration ? r.createElement(r.Fragment, null, !pe && r.createElement("p", {
                    className: "account-form__text account-form-sign-in-reminder"
                }, (0, N.ju)("account.sign_up.sign_in_jsx.body", {
                    sign_in: r.createElement(a.rU, {
                        to: "/pages/".concat("myaccount", "?operation=signIn").concat(oe("&", _))
                    }, (0, N.Iu)("account.sign_up.sign_in_jsx.sign_in"))
                })), r.createElement("p", {
                    className: "account-form__text account-form__small-print",
                    dangerouslySetInnerHTML: (0, N.yH)(t.acceptsMarketingForSocialByDefault ? "account.sign_up.tos_reminder_accepts_marketing_html" : "account.sign_up.tos_reminder_html")
                }), c && r.createElement("p", {
                    className: "account-form__text account-form__small-print"
                }, (0, N.Iu)(c))) : null)))
            }
            var le = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = new URLSearchParams(t).get("return_url");
                return r.createElement("div", {
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)("account.common.already_signed_in_title")), r.createElement("span", {
                    className: "already-signed-in"
                }, e ? (0, N.Iu)("account.common.already_signed_in_no_conf_message") : (0, N.Iu)("account.common.already_signed_in_message")), null != n && n.startsWith("/account") ? r.createElement("a", {
                    href: n
                }, (0, N.Iu)("account.common.proceed_to_account")) : r.createElement("a", {
                    href: "/"
                }, (0, N.Iu)("account.common.return_to_homepage"))))
            };

            function de(e) {
                var t, n = e.onComplete,
                    u = e.onCanConfirm,
                    c = $((0, r.useState)(null), 2),
                    s = c[0],
                    l = c[1],
                    d = (0, j.XM)(),
                    f = $((0, r.useState)(!1), 2),
                    g = f[0],
                    v = f[1],
                    _ = (0, X.FT)((0, S.Vx)()),
                    h = (0, X.FT)(),
                    b = $((0, r.useState)(), 2),
                    E = b[0],
                    A = b[1],
                    P = $((0, r.useState)(null), 2),
                    w = P[0],
                    I = P[1],
                    R = $((0, r.useState)(!1), 2),
                    k = R[0],
                    O = R[1],
                    T = ae(e.embeddedInAnotherPage),
                    x = new URLSearchParams((0, o.TH)().search),
                    M = (0, G.O)(),
                    U = M.forgotPasswordUnderField,
                    L = r.createElement("p", {
                        className: "account-form__text account-forgot-password__link"
                    }, (0, N.ju)("account.sign_in.forgot_password_jsx.body", {
                        reset: r.createElement(a.rU, {
                            to: "/pages/".concat("myaccount", "?operation=forgotPassword").concat(oe("&", T))
                        }, (0, N.Iu)("account.sign_in.forgot_password_jsx.reset"))
                    })),
                    D = x.get("error_description");
                (0, r.useEffect)((function() {
                    if (D) {
                        var e = D.match(/^attributes required: \[(.*)]$/);
                        if (/^Permissions error/.test(D)) A((0, N.Iu)("account.sign_in.announcement_social_cancelled"));
                        else if (e) {
                            e[1].split(",").includes("email") ? I((0, N.Iu)("account.errors.social_provider_email_denied")) : (C.Z.instance.reportError("Error from social sign in: " + D, Error().stack), console.error("Error from social sign in: " + D), I((0, N.Iu)("account.errors.signup_unexpected")))
                        } else {
                            var t;
                            if (m.Z.isCustomPreSignUpError(D)) try {
                                var n = m.Z.parsePreSignupError(D).providers;
                                switch (n && n.length > 0 ? n[0] : null) {
                                    case "Cognito":
                                        I((0, N.Iu)("account.errors.account_exists_native"));
                                        break;
                                    case "Google":
                                        I((0, N.Iu)("account.errors.account_exists_google"));
                                        break;
                                    case "Facebook":
                                        I((0, N.Iu)("account.errors.account_exists_facebook"));
                                        break;
                                    default:
                                        I((0, N.Iu)("account.errors.account_exists_other"))
                                }
                            } catch (e) {
                                C.Z.instance.report(e), I((0, N.Iu)("account.errors.signup_unexpected"))
                            } else C.Z.instance.reportError("Sign-up error: ".concat(D), null !== (t = (new Error).stack) && void 0 !== t ? t : ""), I((0, N.Iu)("account.errors.signup_unexpected"))
                        }
                    }
                }), [D]);
                var F, V = !0;
                switch (x.get("sourceOperation")) {
                    case "signUp":
                        V = !1, F = "account.sign_in.announcement_account_created";
                        break;
                    case "confirmSignUpLink":
                        V = !1, F = "account.sign_in.announcement_email_confirmed";
                        break;
                    case "forgotPassword":
                        V = !1, F = "account.sign_in.announcement_password_changed"
                }(0, r.useEffect)((function() {
                    F && A((0, N.Iu)(F))
                }), [F]);
                var B = (0, S.kq)();

                function Z() {
                    return (Z = Q(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.preventDefault(), window.scrollTo(0, 0), I(""), O(!0);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }(0, r.useEffect)((function() {
                    k && i.g.signIn(_.currentValue, h.currentValue).then((function() {
                        d.current && ((0, S.Gb)(_.currentValue), O(!1))
                    })).catch((function(t) {
                        if ("UserNotConfirmedException" === (null == t ? void 0 : t.code))(0, S.Gb)(_.currentValue), v(!0);
                        else {
                            var n = !0;
                            switch (null == t ? void 0 : t.code) {
                                case "PasswordResetRequiredException":
                                    t.message = (0, N.Iu)("account.errors.reset_password");
                                    break;
                                case "NotAuthorizedException":
                                    t.message === p ? (t.message = (0, N.Iu)("account.errors.incorrect_login"), n = !1) : t.message === y && (t.message = (0, N.Iu)("account.errors.disabled_account"), n = !1);
                                    break;
                                case "UserNotFoundException":
                                    return void m.Z.getAccountState(_.currentValue).then((function(n) {
                                        switch (n.state) {
                                            case "DOES_NOT_EXIST":
                                            case "GUEST_NO_COGNITO":
                                                t.message = (0, N.ju)("account.errors.incorrect_user_jsx.body", {
                                                    link_to_register: r.createElement(a.rU, {
                                                        to: "/pages/".concat("myaccount", "?operation=signUp").concat(oe("&", T))
                                                    }, (0, N.Iu)("account.errors.incorrect_user_jsx.link_to_register"))
                                                });
                                                break;
                                            case "UNCONFIRMED":
                                                t.message = (0, N.Iu)("account.errors.unconfirmed_account");
                                                break;
                                            case "DISABLED":
                                                t.message = (0, N.Iu)("account.errors.disabled_account");
                                                break;
                                            case "RESET_REQUIRED":
                                                t.message = (0, N.Iu)("account.errors.reset_password");
                                                break;
                                            case "EXTERNAL_PROVIDER":
                                                switch (n.thirdPartyProvider) {
                                                    case "Google":
                                                        t.message = (0, N.Iu)("account.errors.account_exists_google");
                                                        break;
                                                    case "Facebook":
                                                        t.message = (0, N.Iu)("account.errors.account_exists_facebook");
                                                        break;
                                                    default:
                                                        t.message = (0, N.Iu)("account.errors.account_exists_other")
                                                }
                                                break;
                                            case "EXISTS_NO_COGNITO":
                                                return l(r.createElement(se, {
                                                    titleAndAsterisk: {
                                                        title: "account.sign_up.title_migration",
                                                        subtitle: "account.sign_up.subtitle_migration",
                                                        asterisk: null
                                                    },
                                                    embeddedInAnotherPage: e.embeddedInAnotherPage,
                                                    existingAccountMigration: _.currentValue
                                                })), void O(!1);
                                            case "CONFIRMED":
                                            case "ERROR":
                                            default:
                                                t.message = (0, N.Iu)("account.errors.signin_unexpected")
                                        }
                                        I(t.message), O(!1)
                                    })).catch((function(e) {
                                        C.Z.instance.reportError("Error handling account state when signing in: " + (null == e ? void 0 : e.message), null == e ? void 0 : e.stack), I((0, N.Iu)("account.errors.signin_unexpected")), O(!1)
                                    }))
                            }
                            n && C.Z.instance.reportError("Error signing in: " + (null == t ? void 0 : t.message), null == t ? void 0 : t.stack), I(t.message)
                        }
                        O(!1)
                    }))
                }), [k, d, _, h, T, e.embeddedInAnotherPage]), (0, r.useEffect)((function() {
                    B && l(n ? n() : r.createElement(ge, {
                        embeddedInAnotherPage: e.embeddedInAnotherPage
                    }))
                }), [B, n, e.embeddedInAnotherPage]), (0, r.useEffect)((function() {
                    g && l(u ? u() : r.createElement(me, {
                        embeddedInAnotherPage: e.embeddedInAnotherPage
                    }))
                }), [g, u, e.embeddedInAnotherPage]);
                var W = $((0, r.useState)(!1), 2),
                    Y = W[0],
                    K = W[1];
                if (B && (0, q.i)()) {
                    if (Y) {
                        var z = T;
                        return z || (z = "/"), r.createElement(S.Bj, {
                            to: z,
                            mode: "push"
                        }, r.createElement(H.g, {
                            alt: "accessibility.loading"
                        }))
                    }
                    return r.createElement("div", {
                        className: "account-form"
                    }, r.createElement("div", {
                        className: "account-form__wrapper"
                    }, r.createElement("h1", {
                        className: "account-form__title"
                    }, (0, N.Iu)("account.sign_in.title")), r.createElement("div", null, (0, N.ju)("account.sign_in.already_signed_in_as", {
                        who: r.createElement("strong", null, m.Z.getEmail(B))
                    })), r.createElement("button", {
                        type: "button",
                        className: "bl-core-button",
                        onClick: function() {
                            return K(!0)
                        }
                    }, (0, N.Iu)("account.sign_in.button_stay_signed_in")), r.createElement("button", {
                        type: "button",
                        className: "bl-core-button",
                        onClick: function() {
                            window.location.href = "/pages/myaccount?operation=signOut&return_url=".concat(encodeURIComponent(window.location.pathname + window.location.search))
                        }
                    }, (0, N.Iu)("account.sign_in.button_switch_account"))))
                }
                var J = M.textEditorLabelStyle,
                    ee = M.tabbedAuth,
                    te = null === (t = document.querySelector("body")) || void 0 === t ? void 0 : t.dataset.countryIso;
                return r.createElement(r.Fragment, null, null != s ? s : r.createElement("div", {
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, k ? r.createElement(r.Fragment, null, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)("account.sign_in.signing_in")), r.createElement("br", null), r.createElement(H.g, {
                    alt: "account.sign_in.signing_in_loading_alt"
                })) : r.createElement(r.Fragment, null, E && r.createElement("span", {
                    className: "account-form__announcement"
                }, E), ee ? r.createElement("div", {
                    className: "account-form__tab-container"
                }, r.createElement("div", {
                    className: "account-form__tab account-form__tab--inactive"
                }, r.createElement(a.rU, {
                    to: "/pages/".concat("myaccount", "?operation=signUp").concat(oe("&", T))
                }, (0, N.Iu)("account.sign_up.tab_title"))), r.createElement("div", {
                    className: "account-form__tab account-form__tab--active"
                }, (0, N.Iu)("account.sign_in.tab_title"))) : r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)(M.signInPrompt.title)), null !== M.signInPrompt.subtitle ? r.createElement("p", {
                    className: "account-form__subtitle"
                }, (0, N.Iu)(M.signInPrompt.subtitle)) : null, V && r.createElement(r.Fragment, null, r.createElement(ce, {
                    user: B,
                    signInDestinationPath: T,
                    inProgress: k
                }), r.createElement("div", {
                    className: "account-form-separator"
                }, r.createElement("div", {
                    className: "account-form-separator__line"
                }), r.createElement("span", {
                    className: "account-form-separator__text"
                }, (0, N.Iu)("account.common.social_separator")), r.createElement("div", {
                    className: "account-form-separator__line"
                }))), r.createElement("form", {
                    onSubmit: function(e) {
                        return Z.apply(this, arguments)
                    }
                }, r.createElement(X.H4, {
                    id: "email",
                    type: "email",
                    state: _,
                    label: "account.common.email",
                    labelStyle: J,
                    autoComplete: "username",
                    required: !0
                }), r.createElement(X.H4, {
                    id: "current-password",
                    type: "password",
                    state: h,
                    label: "account.common.password",
                    labelStyle: J,
                    autoComplete: "current-password",
                    title: m.Z.getPasswordTitle(),
                    required: !0
                }), r.createElement("div", {
                    className: "account-error__body sign-in".concat(w ? "" : " hidden")
                }, w), U && L, r.createElement("button", {
                    type: "submit",
                    className: "bl-core-button bl-core-button--cta",
                    disabled: k
                }, (0, N.Iu)("account.sign_in.submit")), !ee && r.createElement("p", {
                    className: "account-form__text"
                }, (0, N.ju)("account.sign_in.sign_up_jsx.body", {
                    sign_up: r.createElement(a.rU, {
                        to: "/pages/".concat("myaccount", "?operation=signUp").concat(oe("&", T))
                    }, (0, N.Iu)("account.sign_in.sign_up_jsx.sign_up"))
                })), !U && L, "US" == te && r.createElement("p", {
                    id: "rc_login"
                }, "Need help accessing your subscriptions? ", r.createElement("a", {
                    href: "/tools/recurring/get-subscription-access"
                }, "Click here")), r.createElement("p", {
                    className: "account-form__text account-form__small-print",
                    dangerouslySetInnerHTML: (0, N.yH)(M.acceptsMarketingForSocialByDefault ? "account.sign_up.tos_reminder_accepts_marketing_html" : "account.sign_up.tos_reminder_html")
                }))))))
            }

            function me(e) {
                var t, n = $((0, r.useState)(!1), 2),
                    a = n[0],
                    i = n[1],
                    u = $((0, r.useState)(!1), 2),
                    c = u[0],
                    s = u[1],
                    l = $((0, r.useState)(), 2),
                    d = l[0],
                    m = l[1],
                    p = ae(e.embeddedInAnotherPage);
                (0, r.useEffect)((function() {
                    var e = setTimeout((function() {
                        return i(!0)
                    }), 15e3);
                    return function() {
                        return clearTimeout(e)
                    }
                }), []);
                var f = (0, S.kq)(),
                    g = (0, o.TH)().search;
                if (f) return le(!0, g);

                function v() {
                    return (v = Q(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    i(!1), U((0, S.Vx)(), p, s, m);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return r.createElement("div", {
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, r.createElement("h2", {
                    className: "account-form__confirmation-text account-form__confirmation-text--prefix"
                }, c ? (0, N.Iu)("account.confirm.click_link_prefix_resent") : (0, N.Iu)("account.confirm.click_link_prefix")), r.createElement("p", {
                    className: "account-form__confirmation-text"
                }, null !== (t = (0, S.Vx)()) && void 0 !== t ? t : (0, N.Iu)("account.confirm.click_link_default_destination")), r.createElement("h2", {
                    className: "account-form__confirmation-text account-form__confirmation-text--suffix"
                }, (0, N.Iu)("account.confirm.click_link_suffix")), a && r.createElement("div", {
                    className: "account-button--resend-email-wrapper"
                }, r.createElement("p", null, (0, N.Iu)("account.confirm.resend_email_message")), r.createElement("button", {
                    type: "button",
                    className: "bl-core-button",
                    onClick: function() {
                        return v.apply(this, arguments)
                    }
                }, (0, N.Iu)("account.confirm.resend_email"))), r.createElement("div", {
                    className: "account-error__body"
                }, d)))
            }

            function pe(e) {
                var t = e.onComplete,
                    n = $((0, r.useState)(null), 2),
                    a = n[0],
                    u = n[1],
                    c = (0, j.XM)(),
                    s = $((0, r.useState)(e.userName), 1)[0],
                    l = $((0, r.useState)(e.code), 1)[0],
                    d = $((0, r.useState)(), 2),
                    m = d[0],
                    p = d[1],
                    f = $((0, r.useState)(!1), 2),
                    g = f[0],
                    v = f[1];
                ae(e.embeddedInAnotherPage);
                var _ = (0, S.kq)();
                (0, r.useEffect)((function() {
                    function e() {
                        return (e = Q(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, i.g.confirmSignUp(s, l);
                                    case 3:
                                        c.current && v(!0), e.next = 20;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), e.t1 = null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code, e.next = "UserNotFoundException" === e.t1 ? 11 : "NotAuthorizedException" === e.t1 ? 14 : "CodeMismatchException" === e.t1 ? 16 : 18;
                                        break;
                                    case 11:
                                        return e.t0.message = (0, N.Iu)("account.errors.non_existent_account"), C.Z.instance.reportError("Error confirming sign-up: " + (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message), null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack), e.abrupt("break", 19);
                                    case 14:
                                        return (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) === P ? (c.current && v(!0), e.t0.message = "") : (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) === y ? e.t0.message = (0, N.Iu)("account.errors.disabled_account") : C.Z.instance.reportError("Error confirming sign-up: " + (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message), null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack), e.abrupt("break", 19);
                                    case 16:
                                        return e.t0.message = (0, N.Iu)("account.errors.incorrect_confirmation"), e.abrupt("break", 19);
                                    case 18:
                                        C.Z.instance.reportError("Error confirming sign-up: " + (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message), null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack);
                                    case 19:
                                        c.current && p(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6]
                            ])
                        })))).apply(this, arguments)
                    }
                    c.current && ("" === s || "" === l ? p((0, N.Iu)("account.errors.missing_url_parameter")) : function() {
                        e.apply(this, arguments)
                    }())
                }), [s, l, c]), (0, r.useEffect)((function() {
                    g && (t ? u(t()) : window.location.href = "/pages/".concat("myaccount", "?operation=signIn&sourceOperation=confirmSignUpLink"))
                }), [g, t]);
                var h = (0, o.TH)().search;
                return _ ? le(!0, h) : null != a ? a : r.createElement("div", {
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)("account.confirm.activate_account")), m ? r.createElement(r.Fragment, null, r.createElement("p", {
                    className: "account-error__title"
                }, (0, N.Iu)("account.confirm.error")), r.createElement("div", {
                    className: "account-error__body"
                }, m), r.createElement("a", {
                    href: "/pages/".concat("myaccount", "?operation=requestConfirmationCode"),
                    className: "account-error__get-another"
                }, (0, N.Iu)("account.confirm.get_another"))) : r.createElement(H.g, {
                    alt: "account.confirm.confirming_loading_alt"
                })))
            }

            function fe(e) {
                var t = $((0, r.useState)(), 2),
                    n = t[0],
                    a = t[1],
                    i = $((0, r.useState)(!1), 2),
                    u = i[0],
                    c = i[1],
                    s = (0, X.FT)((0, S.Vx)()),
                    l = ae(e.embeddedInAnotherPage),
                    d = (0, S.kq)(),
                    m = (0, G.O)();

                function p() {
                    return (p = Q(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.preventDefault(), e.next = 3, U(s.currentValue, l, c, a);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var f = (0, o.TH)().search;
                if (d) return le(!0, f);
                var g = m.textEditorLabelStyle;
                return r.createElement(r.Fragment, null, u && r.createElement(o.Fg, {
                    to: "/pages/".concat("myaccount", "?operation=confirm")
                }), r.createElement("form", {
                    onSubmit: function(e) {
                        return p.apply(this, arguments)
                    },
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)("account.confirm.resend_confirmation")), r.createElement(X.H4, {
                    id: "email",
                    type: "email",
                    state: s,
                    autoComplete: "username",
                    key: "emailInput",
                    label: "account.common.email",
                    labelStyle: g,
                    required: !0
                }), r.createElement("div", {
                    className: "account-error__body sign-in".concat(n ? "" : " hidden")
                }, n), r.createElement("button", {
                    type: "submit",
                    className: "bl-core-button bl-core-button--cta"
                }, (0, N.Iu)("account.confirm.submit")))))
            }

            function ge(e) {
                var t = $((0, r.useState)(), 2),
                    n = t[0],
                    a = t[1],
                    u = (0, S.kq)(),
                    c = (0, j.XM)(),
                    s = ae(e.embeddedInAnotherPage),
                    l = (0, r.useRef)(!1),
                    d = $((0, r.useState)(!1), 2),
                    p = d[0],
                    f = d[1],
                    g = (0, G.O)();
                (0, r.useEffect)((function() {
                    if (u) {
                        if (l.current) return;
                        var e;
                        if (l.current = !0, e = void 0 === g.onboarding || !g.onboarding.duringSignIn || s && g.onboarding.duringSignInExcludePaths.some((function(e) {
                                return (0, o.LX)(s, e)
                            })) ? s : ne(s), (0, q.i)()) return void(window.location.href = e);
                        var t = m.Z.isSocialAccount(u) && g.acceptsMarketingForSocialByDefault,
                            n = {
                                storeDomain: window.location.host,
                                storePath: e
                            };
                        t && (n.acceptsMarketingForNewAccount = !0), g.pathSupportsNewAccountParam && null !== (0, o.LX)(s, g.pathSupportsNewAccountParam) && (n.appendNewAccountParam = !0), m.Z.getShopifyMultipassToken(u, n).then((function(e) {
                            if (void 0 !== e.errorCode) switch (e.errorCode) {
                                case m.j.DUPLICATE_EMAIL:
                                    c.current && (a((0, N.Iu)("account.errors.account_exists_other")), "true" === window.localStorage.getItem("amplify-signin-with-hostedUI") && f(!0));
                                    break;
                                case m.j.DISABLED_ACCOUNT:
                                    c.current && (a((0, N.Iu)("account.errors.disabled_account")), "true" === window.localStorage.getItem("amplify-signin-with-hostedUI") && f(!0));
                                    break;
                                default:
                                    C.Z.instance.reportError("Error getting multipass token: ".concat(e.errorCode, " : ").concat(e.errorMessage), Error().stack), c.current && a((0, N.Iu)("account.errors.signin_unexpected"))
                            } else c.current && h(e.multipassToken)
                        })).catch((function(e) {
                            C.Z.instance.reportError("Error getting multipass token: " + (null == e ? void 0 : e.message), null == e ? void 0 : e.stack), a((0, N.Iu)("account.errors.signin_unexpected"))
                        }))
                    }
                }), [u, s, c, g.onboarding, g.acceptsMarketingForSocialByDefault, g.pathSupportsNewAccountParam]);
                var v = $((0, r.useState)(), 2),
                    _ = v[0],
                    h = v[1];
                return (0, r.useEffect)((function() {
                    _ && (V.KK.removeItem("signInDestinationPath"), window.location.href = m.Z.getShopifyLoginURL(_))
                }), [_]), r.createElement("div", {
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)("account.sign_in.signing_in")), r.createElement("br", null), n ? p ? r.createElement(r.Fragment, null, r.createElement("div", null, (0, N.Iu)("account.sign_in.error")), r.createElement("div", {
                    className: "account-error__body"
                }, n), r.createElement("a", {
                    className: "sign-in-link",
                    href: "/account/login",
                    onClick: function(e) {
                        return e.preventDefault(), m.Z.reinitialiseAmplify((function(e) {
                            var t, n = z(e.oauth.redirectSignOutList);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value;
                                    if (r === "https://".concat(window.location.host, "/account/login")) return void(e.oauth.redirectSignOut = r)
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                            e.oauth.redirectSignOut = "https://".concat("www.roseinc.com", "/account/login")
                        })), i.g.signOut(), !1
                    }
                }, (0, N.Iu)("account.sign_in.sign_in_link"))) : r.createElement(r.Fragment, null, r.createElement("div", null, (0, N.Iu)("account.sign_in.error")), r.createElement("div", {
                    className: "account-error__body"
                }, n), r.createElement("a", {
                    className: "sign-in-link",
                    href: "/pages/".concat("myaccount", "?operation=signIn")
                }, (0, N.Iu)("account.sign_in.sign_in_link"))) : r.createElement(H.g, {
                    alt: "account.sign_in.signing_in_loading_alt"
                })))
            }

            function ve(e) {
                var t = e.query,
                    n = (0, S.kq)(),
                    a = t.get("return_url"),
                    o = (0, j.XM)(),
                    u = $((0, r.useState)(), 2),
                    c = u[0],
                    s = u[1];
                return (0, r.useEffect)((function() {
                    if (n) Q(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, a && "true" === localStorage.getItem("amplify-signin-with-hostedUI") && (sessionStorage.setItem("signOutDestinationUrl", a), m.Z.reinitialiseAmplify((function(e) {
                                        var t, n = z(e.oauth.redirectSignOutList);
                                        try {
                                            for (n.s(); !(t = n.n()).done;) {
                                                var r = t.value;
                                                if (r === "https://".concat(window.location.host, "/pages/myaccount?operation=signOut")) return void(e.oauth.redirectSignOut = r)
                                            }
                                        } catch (e) {
                                            n.e(e)
                                        } finally {
                                            n.f()
                                        }
                                        e.oauth.redirectSignOut = "https://".concat("www.roseinc.com", "/pages/myaccount?operation=signOut")
                                    }))), e.next = 4, i.g.signOut();
                                case 4:
                                    e.next = 11;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(0), C.Z.instance.reportError("Error signing out: " + (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message), null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack), console.error("Error signing out: ", e.t0), o.current && s(e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 6]
                        ])
                    })))();
                    else {
                        var e = sessionStorage.getItem("signOutDestinationUrl"),
                            t = a || e;
                        sessionStorage.removeItem("signOutDestinationUrl");
                        var r = "/account/logout";
                        t && (r += "?return_url=".concat(encodeURIComponent(t))), window.location.href = r
                    }
                }), [o, a, n]), r.createElement("div", {
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)("account.sign_out.signing_out")), r.createElement("br", null), c ? r.createElement(r.Fragment, null, r.createElement("div", null, (0, N.Iu)("account.sign_out.error")), r.createElement("div", {
                    className: "account-error__body"
                }, (0, N.Iu)("account.sign_out.error_please_reload")), r.createElement("button", {
                    type: "button",
                    className: "bl-core-button",
                    onClick: function() {
                        return window.location.reload()
                    }
                }, (0, N.Iu)("account.sign_out.button_reload"))) : r.createElement(H.g, {
                    alt: "account.sign_out.signing_out_loading_alt"
                })))
            }

            function _e(e) {
                var t = e.onComplete,
                    n = $((0, r.useState)(null), 2),
                    u = n[0],
                    c = n[1],
                    s = (0, S.kq)(),
                    l = (0, j.XM)(),
                    d = $((0, r.useState)(), 2),
                    p = d[0],
                    f = d[1],
                    g = $((0, r.useState)(!1), 2),
                    h = g[0],
                    b = g[1],
                    y = (0, X.FT)(),
                    A = (0, X.FT)();

                function P() {
                    return (P = Q(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.preventDefault(), s && m.Z.isNativeAccount(s) ? (f(""), i.g.changePassword(s, y.currentValue, A.currentValue).then((function(e) {
                                        l.current && b(!0)
                                    })).catch((function(e) {
                                        switch (C.Z.instance.reportError("Error changing password: " + (null == e ? void 0 : e.message), null == e ? void 0 : e.stack), null == e ? void 0 : e.code) {
                                            case "InvalidParameterException":
                                            case "InvalidPasswordException":
                                                e.message.includes(v) ? e.message = (0, N.Iu)("account.errors.invalid_old_password") : e.message.includes(_) ? e.message = (0, N.Iu)("account.errors.invalid_new_password") : e.message.includes(E) ? e.message = e.message.replace(E, "") + "." : e.message = (0, N.Iu)("account.errors.invalid_old_or_new_password");
                                                break;
                                            case "NotAuthorizedException":
                                                e.message = (0, N.Iu)("account.errors.incorrect_old_password")
                                        }
                                        f(e.message)
                                    }))) : f((0, N.Iu)("account.errors.no_change_password"));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }(0, r.useEffect)((function() {
                    h && c(t ? t() : r.createElement(o.Fg, {
                        to: "/pages/".concat("myaccount")
                    }))
                }), [h, t]);
                var w = (0, G.O)(),
                    I = w.textEditorLabelStyle;
                return null != u ? u : r.createElement(r.Fragment, null, r.createElement("form", {
                    onSubmit: function(e) {
                        return P.apply(this, arguments)
                    },
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, r.createElement(w.profileHeader, {
                    title: "account.change_password.title"
                }), s ? r.createElement(r.Fragment, null, m.Z.isNativeAccount(s) ? r.createElement(r.Fragment, null, r.createElement(X.H4, {
                    id: "current-password",
                    type: "password",
                    state: y,
                    autoComplete: "current-password",
                    key: "oldPasswordInput",
                    label: "account.change_password.old_password",
                    labelStyle: I,
                    required: !0
                }), r.createElement(X.H4, {
                    id: "new-password",
                    type: "password",
                    state: A,
                    autoComplete: "new-password",
                    pattern: m.Z.getPasswordPattern(),
                    title: m.Z.getPasswordTitle(),
                    key: "newPasswordInput",
                    label: "account.change_password.new_password",
                    labelStyle: I,
                    passwordRules: m.Z.getPasswordRules(),
                    passwordMinLength: m.Z.getPasswordMinLength(),
                    passwordSpecialCharRegExp: new RegExp(m.Z.COGNITO_SYMBOLS_RULE_REGEX),
                    required: !0
                }), r.createElement("div", {
                    className: "account-error__body sign-in".concat(p ? "" : " hidden")
                }, p), r.createElement(a.rU, {
                    className: "account-form__link--forgot-password",
                    to: "/pages/".concat("myaccount", "?operation=forgotPassword")
                }, (0, N.Iu)("account.change_password.forgot_password")), r.createElement("button", {
                    type: "submit",
                    className: "bl-core-button bl-core-button--cta"
                }, (0, N.Iu)("account.change_password.submit"))) : r.createElement("div", null, r.createElement("p", null, (0, N.Iu)("account.change_password.social_cannot_change")), r.createElement("p", null, (0, N.Iu)("account.change_password.social_enquire_provider")), r.createElement("p", null, r.createElement("a", {
                    href: "/account"
                }, (0, N.Iu)("account.change_password.go_to_account"))))) : r.createElement("div", null, (0, N.Iu)("account.change_password.must_sign_in"), r.createElement("br", null), r.createElement("a", {
                    className: "sign-in-link change-password",
                    href: "/pages/".concat("myaccount", "?operation=signIn")
                }, (0, N.Iu)("account.change_password.sign_in"))))))
            }

            function he(e) {
                var t = e.onComplete,
                    n = $((0, r.useState)(null), 2),
                    o = n[0],
                    i = n[1],
                    u = $((0, r.useState)(), 2),
                    c = u[0],
                    s = u[1],
                    l = $((0, r.useState)(!1), 2),
                    d = l[0],
                    m = l[1],
                    p = $((0, r.useState)(!1), 2),
                    f = p[0],
                    g = p[1],
                    v = $((0, r.useState)(!1), 2),
                    _ = v[0],
                    h = v[1],
                    b = (0, X.FT)((0, S.Vx)()),
                    E = ae(e.embeddedInAnotherPage),
                    y = void 0 !== (0, q.i)(),
                    A = (0, S.kq)();

                function P() {
                    return (P = Q(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.preventDefault(), D(b.currentValue, E, m, h, s);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function w() {
                    return (w = Q(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    U(b.currentValue, E, g, s);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }(0, r.useEffect)((function() {
                    _ && !f && U(b.currentValue, E, g, s)
                }), [_, f, b.currentValue, E]), (0, r.useEffect)((function() {
                    d && i(t ? t() : r.createElement(be, {
                        embeddedInAnotherPage: e.embeddedInAnotherPage
                    }))
                }), [d, t, e.embeddedInAnotherPage]);
                var I = (0, G.O)().textEditorLabelStyle;
                return r.createElement(r.Fragment, null, null != o ? o : r.createElement("div", {
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, _ ? r.createElement(r.Fragment, null, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)("account.forgot_password.unconfirmed_title")), r.createElement("div", null, r.createElement("div", null, (0, N.Iu)("account.forgot_password.must_activate")), r.createElement("div", null, (0, N.Iu)("account.forgot_password.click_link_then_reset")), r.createElement("br", null), r.createElement("button", {
                    type: "button",
                    className: "bl-core-button button--resend-email",
                    onClick: function() {
                        return w.apply(this, arguments)
                    }
                }, (0, N.Iu)("account.forgot_password.resend_email")), r.createElement("div", {
                    className: "account-error__body"
                }, c))) : r.createElement(r.Fragment, null, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)("account.forgot_password.title")), r.createElement("form", {
                    onSubmit: function(e) {
                        return P.apply(this, arguments)
                    }
                }, r.createElement(X.H4, {
                    id: "email",
                    type: "email",
                    state: b,
                    autoComplete: "username",
                    key: "emailInput",
                    label: "account.forgot_password.email",
                    labelStyle: I,
                    required: !0
                }), r.createElement("p", {
                    className: "account-forgot-password__info-text"
                }, (0, N.Iu)("account.forgot_password.reset_link_message")), r.createElement("div", {
                    className: "account-error__body sign-in".concat(c ? "" : " hidden")
                }, c), r.createElement("button", {
                    type: "submit",
                    className: "bl-core-button bl-core-button--cta"
                }, (0, N.Iu)("account.forgot_password.submit"))), A ? r.createElement("p", {
                    className: "account-forgot-password__info-text"
                }, (0, N.ju)(y ? "account.forgot_password.change_password_jsx.body.signed_in" : "account.forgot_password.change_password_jsx.body.not_signed_in", {
                    change_password: r.createElement(a.rU, {
                        to: "/pages/".concat("myaccount", "?operation=changePassword")
                    }, (0, N.Iu)("account.forgot_password.change_password_jsx.change_password"))
                })) : r.createElement("p", {
                    className: "account-forgot-password__info-text"
                }, (0, N.ju)("account.forgot_password.resend_confirmation_jsx.body", {
                    get_another_confirmation_email: r.createElement(a.rU, {
                        to: "/pages/".concat("myaccount", "?operation=requestConfirmationCode").concat(oe("&", E))
                    }, (0, N.Iu)("account.forgot_password.resend_confirmation_jsx.get_another_confirmation_email"))
                }))))))
            }

            function be(e) {
                var t = e.onComplete,
                    n = $((0, r.useState)(null), 2),
                    a = n[0],
                    o = n[1],
                    u = (0, j.XM)(),
                    c = e.code || "",
                    s = e.userName || "",
                    l = ae(e.embeddedInAnotherPage),
                    d = {
                        userName: s,
                        code: c,
                        newPassword: ""
                    },
                    p = $((0, r.useState)(d), 1)[0],
                    f = $((0, r.useState)(), 2),
                    v = f[0],
                    _ = f[1],
                    h = $((0, r.useState)(!1), 2),
                    b = h[0],
                    E = h[1],
                    A = $((0, r.useState)(!1), 2),
                    P = A[0],
                    w = A[1],
                    I = $((0, r.useState)(!1), 2),
                    R = I[0],
                    k = I[1],
                    O = (0, X.FT)();

                function T() {
                    return (T = Q(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.preventDefault(), _(""), e.prev = 2, e.next = 5, i.g.forgotPasswordSubmit(p.userName, p.code, O.currentValue);
                                case 5:
                                    u.current && E(!0), e.next = 25;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), e.t1 = null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code, e.next = "UserNotFoundException" === e.t1 ? 13 : "NotAuthorizedException" === e.t1 ? 15 : "InvalidParameterException" === e.t1 ? 17 : "CodeMismatchException" === e.t1 ? 19 : "ExpiredCodeException" === e.t1 ? 21 : 23;
                                    break;
                                case 13:
                                    return e.t0.message = (0, N.Iu)("account.errors.non_existent_account"), e.abrupt("break", 24);
                                case 15:
                                    return (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) === y && (e.t0.message = (0, N.Iu)("account.errors.disabled_account")), e.abrupt("break", 24);
                                case 17:
                                    return e.t0.message.includes(g) && (e.t0.message = (0, N.Iu)("account.errors.invalid_password")), e.abrupt("break", 24);
                                case 19:
                                    return e.t0.message = (0, N.Iu)("account.errors.reset_invalid"), e.abrupt("break", 24);
                                case 21:
                                    return e.t0.message = (0, N.Iu)("account.errors.incorrect_reset"), e.abrupt("break", 24);
                                case 23:
                                    C.Z.instance.reportError("Error submitting new password for forgotten password: " + (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message), null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.stack);
                                case 24:
                                    u.current && _(e.t0.message);
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))).apply(this, arguments)
                }

                function x() {
                    return (x = Q(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    D((0, S.Vx)(), l, w, k, _);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }(0, r.useEffect)((function() {
                    R && _((0, N.Iu)("account.errors.unconfirmed_account"))
                }), [R]), (0, r.useEffect)((function() {
                    b && (t ? o(t()) : window.location.href = "/pages/".concat("myaccount", "?operation=signIn&sourceOperation=forgotPassword"))
                }), [b, t]);
                var M = (0, G.O)().textEditorLabelStyle;
                return null != a ? a : r.createElement(r.Fragment, null, "" !== c && "" !== s ? r.createElement("form", {
                    onSubmit: function(e) {
                        return T.apply(this, arguments)
                    },
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)("account.forgot_password_submit.title")), r.createElement(X.H4, {
                    id: "new-password",
                    type: "password",
                    state: O,
                    required: !0,
                    autoComplete: "new-password",
                    pattern: m.Z.getPasswordPattern(),
                    title: m.Z.getPasswordTitle(),
                    label: "account.forgot_password_submit.new_password",
                    labelStyle: M,
                    passwordRules: m.Z.getPasswordRules(),
                    passwordMinLength: m.Z.getPasswordMinLength(),
                    passwordSpecialCharRegExp: new RegExp(m.Z.COGNITO_SYMBOLS_RULE_REGEX)
                }), r.createElement("div", {
                    className: "account-error__body sign-in".concat(v ? "" : " hidden")
                }, v), r.createElement("button", {
                    type: "submit",
                    className: "bl-core-button bl-core-button--cta"
                }, (0, N.Iu)("account.forgot_password_submit.submit")))) : r.createElement("div", {
                    className: "account-form"
                }, r.createElement("div", {
                    className: "account-form__wrapper"
                }, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, N.Iu)("account.forgot_password_submit.title")), r.createElement("br", null), P ? r.createElement("div", null, (0, N.Iu)("account.forgot_password_submit.reset_link_new_message"), r.createElement("br", null), (0, N.Iu)("account.forgot_password_submit.click_link")) : r.createElement("div", null, (0, N.Iu)("account.forgot_password_submit.reset_link_message"), r.createElement("br", null), (0, N.Iu)("account.forgot_password_submit.click_link"), r.createElement("br", null), r.createElement("br", null), (0, N.Iu)("account.forgot_password_submit.lost_email"), " ", r.createElement("button", {
                    type: "button",
                    className: "bl-core-button button--resend-email",
                    onClick: function() {
                        return x.apply(this, arguments)
                    }
                }, (0, N.Iu)("account.forgot_password_submit.resend_email"))), r.createElement("div", {
                    className: "account-error__body"
                }, v))))
            }

            function Ee() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = (0, r.useState)(),
                    n = $(t, 2),
                    a = n[0],
                    o = n[1],
                    i = (0, j.XM)(),
                    u = (0, S.tn)(),
                    s = $(u, 1),
                    m = s[0].accessToken,
                    p = (0, c.useLazyQuery)(l),
                    f = $(p, 2),
                    g = f[0],
                    v = f[1],
                    _ = v.called,
                    h = v.loading,
                    b = v.error,
                    E = v.data;
                (0, r.useEffect)((function() {
                    m && e && g({
                        variables: {
                            customerAccessToken: m
                        }
                    })
                }), [m, e, g]), (0, r.useEffect)((function() {
                    _ && (b ? (console.error("Failed to retrieve acceptsMarketing flag", b), C.Z.instance.report(b)) : h || (E ? o(E.customer.acceptsMarketing) : (console.error("data is null - cannot get acceptsMarketing flag"), C.Z.instance.report("data is null - cannot get acceptsMarketing flag"))))
                }), [_, h, b, E]);
                var y = (0, c.useMutation)(d),
                    A = $(y, 1),
                    P = A[0],
                    w = function() {
                        var e = Q(regeneratorRuntime.mark((function e(t) {
                            var n, r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, P({
                                            variables: {
                                                customerAccessToken: m,
                                                acceptsMarketing: t
                                            }
                                        });
                                    case 2:
                                        if (n = e.sent, !i.current) {
                                            e.next = 7;
                                            break
                                        }
                                        return r = n.data.customerUpdate.customer.acceptsMarketing, o(r), e.abrupt("return", r);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return [a, w]
            }
        },
        34994: (e, t, n) => {
            "use strict";
            n.d(t, {
                gd: () => v,
                Bj: () => _,
                kq: () => h,
                tn: () => b,
                Vx: () => E,
                Gb: () => y
            });
            n(66992), n(41539), n(78783), n(33948), n(60285), n(74916), n(64765), n(88674), n(17727), n(15306), n(82526), n(41817), n(32165), n(47042), n(68309), n(91038);
            var r = n(67294),
                a = n(96974),
                o = n(20490),
                i = n(92976),
                u = n(8185),
                c = n(25251),
                s = n(36334),
                l = n(93970),
                d = n(77825),
                m = n(57154);

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var g = r.createContext("no context");

            function v(e) {
                var t = e.children,
                    n = e.reactRootExplicit,
                    f = e.logInShopifyIfCognitoLoggedIn,
                    v = void 0 === f || f,
                    h = function() {
                        var e = p((0, r.useState)("loading"), 2),
                            t = e[0],
                            n = e[1],
                            a = (0, l.XM)(),
                            u = (0, r.useCallback)((function(e) {
                                var t = e.payload,
                                    r = t.event,
                                    o = t.data;
                                switch (r) {
                                    case "signIn":
                                    case "cognitoHostedUI":
                                        c().then((function(e) {
                                            a.current && n(e)
                                        }));
                                        break;
                                    case "signOut":
                                        n(null);
                                        break;
                                    case "signIn_failure":
                                    case "cognitoHostedUI_failure":
                                        console.log("Sign in failure", o)
                                }
                            }), [a]);

                        function c() {
                            return "true" !== {
                                NODE_ENV: "production",
                                REACT_APP_MODEL_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/models/",
                                REACT_APP_SKIN_TONE_API: "https://skintone.roseinc.beautylabs.com",
                                REACT_APP_NAME: "rose-inc-web",
                                REACT_APP_ERROR_REPORT_URL: "https://errors.amyris.beautylabs.com/errorReport",
                                REACT_APP_DEFAULT_MODEL_NAME_EYEBROWS: "FUTest-Brows-6",
                                REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_NUMBERS: "true",
                                REACT_APP_BI_ACCOUNT_APP_NAME: "account",
                                REACT_APP_PLUGIN_BASE: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/",
                                REACT_APP_BI_APP_NAME: "roseinc_web",
                                REACT_APP_ACCOUNT_NAMESPACE: "roseinc",
                                REACT_APP_BI_LIVESHOPPING_APP_NAME: "liveshopping",
                                REACT_APP_COMMIT_HASH: "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb",
                                REACT_APP_STOREFRONT_API_KEY: "f1c1eba5583bb760c097cba85a0b1a51",
                                REACT_APP_ACCOUNT_BACKEND_BASE_URI: "https://account.amyris.beautylabs.com/api/consumer/roseinc",
                                REACT_APP_LIVESHOPPING_NAMESPACE: "roseinc",
                                REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_SYMBOLS: "true",
                                REACT_APP_FUSIONFS_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/data/",
                                REACT_APP_BI_REPORT_URI: "https://logs.amyris.beautylabs.com/bi",
                                REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_EYES: "VTO-5-2",
                                REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_LOWERCASE: "true",
                                REACT_APP_STOREFRONT_DOMAIN: "www.roseinc.com",
                                REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_UPPERCASE: "true",
                                REACT_APP_ACCOUNT_PAGE_NAME: "myaccount",
                                REACT_APP_VERSION: "0.0.1",
                                REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_MOUTH: "VTO-5-1",
                                REACT_APP_CDN_ROOT: "https://cdn.roseinc.beautylabs.com/production/132459692220",
                                REACT_APP_TEXTURE_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/vto/textures/",
                                REACT_APP_LIVE_SHOPPING_BACKEND_BASE_URI: "https://liveshopping.amyris.beautylabs.com/api/roseinc",
                                REACT_APP_ACCOUNT_SYSTEM_PASSWORD_MIN_LEN: "8"
                            }.REACT_APP_DISABLE_AMPLIFY ? i.g.currentAuthenticatedUser().then((function(e) {
                                return e
                            })).catch((function() {
                                return console.log("Not signed in"), null
                            })) : Promise.resolve(null)
                        }
                        return (0, r.useEffect)((function() {
                            return o.Xb.listen("auth", u), c().then((function(e) {
                                    a.current && n(e)
                                })),
                                function() {
                                    return o.Xb.remove("auth", u)
                                }
                        }), [u, a]), t
                    }(),
                    b = (0, r.useRef)(!1),
                    E = (0, a.TH)(),
                    y = (0, a.bS)("/account/login"),
                    A = (0, a.bS)("/account/activate/:customerId/:token"),
                    P = (0, a.bS)("/pages/myaccount") && "signOut" === new URLSearchParams(E.search).get("operation"),
                    w = p((0, r.useState)(!1), 2),
                    S = w[0],
                    I = w[1];

                function R() {
                    return n && r.createElement(m.g, {
                        alt: "accessibility.loading"
                    })
                }
                if ((0, r.useEffect)((function() {
                        S && (c.EN.setItem("amplify-signin-with-hostedUI", "false"), i.g.signOut().catch((function(e) {
                            s.Z.instance.reportError("Error signing out: " + (null == e ? void 0 : e.message), null == e ? void 0 : e.stack), console.error("Error signing out: ", e)
                        })).finally((function() {
                            b.current = !0, I(!1)
                        })))
                    }), [S, I]), "loading" === h) return r.createElement(r.Fragment, null, R());
                // if (!b.current) {
                //     if (h && !(0, d.i)() && !y) return v ? r.createElement(_, {
                //         to: "/account/login?return_url=".concat(encodeURIComponent(E.pathname + E.search)),
                //         mode: "replace",
                //         children: R()
                //     }) : (S || I(!0), r.createElement(r.Fragment, null, R()));
                //     if ((0, d.i)() && !h && !P && !A) return r.createElement(_, {
                //         to: u.Z.getShopifyLogoutURL(E.pathname + E.search),
                //         mode: "replace",
                //         children: R()
                //     });
                //     b.current = !0
                // }
                return r.createElement(g.Provider, {
                    value: h,
                    children: t
                })
            }

            function _(e) {
                var t = e.to,
                    n = e.mode,
                    a = e.children;
                return (0, r.useEffect)((function() {
                    "push" === n ? window.location.href = t : window.location.replace(t)
                }), [n, t]), r.createElement(r.Fragment, null, a)
            }

            function h() {
                var e = (0, r.useContext)(g);
                if ("no context" === e) throw new Error("No CognitoUserContextProvider");
                return e
            }

            function b() {
                var e = p((0, r.useState)(JSON.parse(c.EN.getItem("shopify_accessTokenWithExpiry") || "{}")), 2),
                    t = e[0],
                    n = e[1];
                return (0, r.useEffect)((function() {
                    null === t ? c.EN.removeItem("shopify_accessTokenWithExpiry") : (c.EN.setItem("shopify_accessTokenWithExpiry", JSON.stringify(t)), t.expiresAt && new Date(t.expiresAt) < new Date && (console.error("customer access token has expired:", t.expiresAt), s.Z.instance.report("customer access token has expired: ".concat(t.expiresAt))))
                }), [t]), [t, n]
            }

            function E() {
                return c.EN.getItem("signInEmail") || ""
            }

            function y(e) {
                c.EN.setItem("signInEmail", e)
            }
        },
        5284: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => o,
                O: () => i
            });
            var r = n(67294),
                a = r.createContext(void 0);

            function o(e) {
                return r.createElement(a.Provider, {
                    value: e,
                    children: e.children
                })
            }

            function i() {
                return (0, r.useContext)(a)
            }
        },
        3161: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            n(78285), n(9653), n(41539), n(39714), n(60086), n(74916), n(64765), n(92222), n(88674), n(47941), n(82526), n(57327), n(38880), n(54747), n(49337);
            var r = n(34164),
                a = n(85518),
                o = n(43528),
                i = n(25251),
                u = n(92976),
                c = n(77825);

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        m(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var p = function() {
                function e() {
                    var t, n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), m(this, "deduplication", {}), m(this, "deduplicationInterval", 20), m(this, "perTypeLastSendTime", {}), m(this, "deviceId", void 0), m(this, "sessionId", void 0), m(this, "customerId", void 0);
                    var r = !1,
                        a = i.EN.getItem(e.DeviceIdKey);
                    a || (a = (0, o.Z)(), i.EN.setItem(e.DeviceIdKey, a), r = !0), this.deviceId = a;
                    var s = i.KK.getItem(e.SessionIdKey);
                    s || (s = (0, o.Z)(), i.KK.setItem(e.SessionIdKey, s), r = !0), this.sessionId = s;
                    var l = i.KK.getItem(e.LastCustomerIdKey),
                        d = null;
                    null !== l && (d = parseInt(l, 10), Number.isSafeInteger(d) || (d = null)), this.customerId = null !== (t = (0, c.i)()) && void 0 !== t ? t : null, d !== this.customerId && (null !== this.customerId ? i.KK.setItem(e.LastCustomerIdKey, this.customerId.toString(10)) : i.KK.removeItem(e.LastCustomerIdKey), r = !0), r && u.g.currentAuthenticatedUser().then((function(e) {
                        n.logNewSession(e.attributes.sub)
                    })).catch((function(e) {
                        n.logNewSession(null)
                    }))
                }
                var t, n, s;
                return t = e, s = [{
                    key: "initialise",
                    value: function() {
                        void 0 !== this.instance && (this.instance.destroy(), this.instance = void 0), this.instance = new e
                    }
                }, {
                    key: "postJson",
                    value: function(e, t, n) {
                        var r = "".concat("https://logs.amyris.beautylabs.com/bi", "?appName=").concat(e, "&tableName=").concat(t);
                        "true" === {
                            NODE_ENV: "production",
                            REACT_APP_MODEL_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/models/",
                            REACT_APP_SKIN_TONE_API: "https://skintone.roseinc.beautylabs.com",
                            REACT_APP_NAME: "rose-inc-web",
                            REACT_APP_ERROR_REPORT_URL: "https://errors.amyris.beautylabs.com/errorReport",
                            REACT_APP_DEFAULT_MODEL_NAME_EYEBROWS: "FUTest-Brows-6",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_NUMBERS: "true",
                            REACT_APP_BI_ACCOUNT_APP_NAME: "account",
                            REACT_APP_PLUGIN_BASE: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/",
                            REACT_APP_BI_APP_NAME: "roseinc_web",
                            REACT_APP_ACCOUNT_NAMESPACE: "roseinc",
                            REACT_APP_BI_LIVESHOPPING_APP_NAME: "liveshopping",
                            REACT_APP_COMMIT_HASH: "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb",
                            REACT_APP_STOREFRONT_API_KEY: "f1c1eba5583bb760c097cba85a0b1a51",
                            REACT_APP_ACCOUNT_BACKEND_BASE_URI: "https://account.amyris.beautylabs.com/api/consumer/roseinc",
                            REACT_APP_LIVESHOPPING_NAMESPACE: "roseinc",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_SYMBOLS: "true",
                            REACT_APP_FUSIONFS_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/data/",
                            REACT_APP_BI_REPORT_URI: "https://logs.amyris.beautylabs.com/bi",
                            REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_EYES: "VTO-5-2",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_LOWERCASE: "true",
                            REACT_APP_STOREFRONT_DOMAIN: "www.roseinc.com",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_UPPERCASE: "true",
                            REACT_APP_ACCOUNT_PAGE_NAME: "myaccount",
                            REACT_APP_VERSION: "0.0.1",
                            REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_MOUTH: "VTO-5-1",
                            REACT_APP_CDN_ROOT: "https://cdn.roseinc.beautylabs.com/production/132459692220",
                            REACT_APP_TEXTURE_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/vto/textures/",
                            REACT_APP_LIVE_SHOPPING_BACKEND_BASE_URI: "https://liveshopping.amyris.beautylabs.com/api/roseinc",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_MIN_LEN: "8"
                        }.REACT_APP_ANALYTICS_PRINT_DEBUG && console.log("AnalyticsLogger: Event type: ".concat(t), n), "true" !== {
                            NODE_ENV: "production",
                            REACT_APP_MODEL_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/models/",
                            REACT_APP_SKIN_TONE_API: "https://skintone.roseinc.beautylabs.com",
                            REACT_APP_NAME: "rose-inc-web",
                            REACT_APP_ERROR_REPORT_URL: "https://errors.amyris.beautylabs.com/errorReport",
                            REACT_APP_DEFAULT_MODEL_NAME_EYEBROWS: "FUTest-Brows-6",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_NUMBERS: "true",
                            REACT_APP_BI_ACCOUNT_APP_NAME: "account",
                            REACT_APP_PLUGIN_BASE: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/",
                            REACT_APP_BI_APP_NAME: "roseinc_web",
                            REACT_APP_ACCOUNT_NAMESPACE: "roseinc",
                            REACT_APP_BI_LIVESHOPPING_APP_NAME: "liveshopping",
                            REACT_APP_COMMIT_HASH: "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb",
                            REACT_APP_STOREFRONT_API_KEY: "f1c1eba5583bb760c097cba85a0b1a51",
                            REACT_APP_ACCOUNT_BACKEND_BASE_URI: "https://account.amyris.beautylabs.com/api/consumer/roseinc",
                            REACT_APP_LIVESHOPPING_NAMESPACE: "roseinc",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_SYMBOLS: "true",
                            REACT_APP_FUSIONFS_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/data/",
                            REACT_APP_BI_REPORT_URI: "https://logs.amyris.beautylabs.com/bi",
                            REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_EYES: "VTO-5-2",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_LOWERCASE: "true",
                            REACT_APP_STOREFRONT_DOMAIN: "www.roseinc.com",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_UPPERCASE: "true",
                            REACT_APP_ACCOUNT_PAGE_NAME: "myaccount",
                            REACT_APP_VERSION: "0.0.1",
                            REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_MOUTH: "VTO-5-1",
                            REACT_APP_CDN_ROOT: "https://cdn.roseinc.beautylabs.com/production/132459692220",
                            REACT_APP_TEXTURE_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/vto/textures/",
                            REACT_APP_LIVE_SHOPPING_BACKEND_BASE_URI: "https://liveshopping.amyris.beautylabs.com/api/roseinc",
                            REACT_APP_ACCOUNT_SYSTEM_PASSWORD_MIN_LEN: "8"
                        }.REACT_APP_DISABLE_ANALYTICS && fetch(r, {
                            mode: "no-cors",
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(n),
                            keepalive: !0
                        })
                    }
                }], (n = [{
                    key: "destroy",
                    value: function() {
                        e.instance === this && (e.instance = void 0)
                    }
                }, {
                    key: "log",
                    value: function(t, n, a) {
                        var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "roseinc_web",
                            u = Date.now(),
                            c = l(l({}, a), {}, {
                                session_id: this.sessionId,
                                device_id: this.deviceId,
                                git_commit_id: null !== (o = "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb") && void 0 !== o ? o : null,
                                path: window.location.pathname + window.location.hash,
                                query: window.location.search
                            }),
                            s = u / 1e3;
                        if (this.perTypeLastSendTime[t] = u, n) {
                            var d = (0, r.hashObject)(l(l({}, c), {}, {
                                    type: t
                                })),
                                m = this.deduplication[d];
                            if (void 0 !== m && m + this.deduplicationInterval > s) return;
                            this.deduplication[d] = s
                        }
                        c.sent = u, e.postJson(i, t, c)
                    }
                }, {
                    key: "logNewSession",
                    value: function(e) {
                        var t = {
                            shopify_customer_id: this.customerId,
                            cognito_user_id: e,
                            os_name: a.BF,
                            os_version: a.MM,
                            browser_name: a.KC,
                            browser_version: a.o3,
                            device_type: a.vO,
                            mobile_vendor: a.B3,
                            mobile_model: a.N7
                        };
                        this.log("new_session", !1, t)
                    }
                }, {
                    key: "markUserAsEngaged",
                    value: function() {
                        null === i.KK.getItem(e.HasEngagedKey) && (i.KK.setItem(e.HasEngagedKey, "1"), this.logUserEngaged({}))
                    }
                }, {
                    key: "logUserEngaged",
                    value: function(e) {
                        this.log("user_engaged", !1, e)
                    }
                }, {
                    key: "logCheckoutCreated",
                    value: function(e) {
                        this.log("checkout_created", !1, e)
                    }
                }, {
                    key: "logAddToBag",
                    value: function(e) {
                        this.log("add_to_bag", !1, e)
                    }
                }]) && d(t.prototype, n), s && d(t, s), e
            }();
            m(p, "SessionIdKey", "analytics.sessionId"), m(p, "DeviceIdKey", "analytics.deviceId"), m(p, "LastCustomerIdKey", "analytics.lastCustomerId"), m(p, "HasEngagedKey", "analytics.hasEngaged"), m(p, "MAX_IMAGE_SIZE_BYTES", 35e3), m(p, "instance", void 0)
        },
        55468: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => u
            });
            n(35666), n(41539), n(88674), n(82526), n(41817);
            var r = n(36334);

            function a(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            a(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            a(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var u = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, a, u, c, s, l, d;
                return t = e, n = null, a = [{
                    key: "addToCart",
                    value: (d = o(regeneratorRuntime.mark((function e(t) {
                        var n, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("/cart/add.js", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            items: t
                                        })
                                    });
                                case 2:
                                    if ((n = e.sent).ok) {
                                        e.next = 11;
                                        break
                                    }
                                    if (422 !== n.status) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 7, n.json();
                                case 7:
                                    return a = e.sent, r.Z.instance.reportError("Failed to add to cart: " + JSON.stringify(a), (new Error).stack), e.abrupt("return", a.description);
                                case 10:
                                    throw new Error("/cart/add.js failed with status code " + n.status);
                                case 11:
                                    return e.next = 13, n.json();
                                case 13:
                                    return e.abrupt("return", e.sent);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function(e) {
                        return d.apply(this, arguments)
                    })
                }, {
                    key: "changeCart",
                    value: (l = o(regeneratorRuntime.mark((function e(t) {
                        var n, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("/cart/change.js", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(t)
                                    });
                                case 2:
                                    if ((n = e.sent).ok) {
                                        e.next = 11;
                                        break
                                    }
                                    if (422 !== n.status) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 7, n.json();
                                case 7:
                                    return a = e.sent, r.Z.instance.reportError("Failed to change cart: " + JSON.stringify(a), (new Error).stack), e.abrupt("return", a.description);
                                case 10:
                                    throw new Error("/cart/change.js failed with status code " + n.status);
                                case 11:
                                    return e.next = 13, n.json();
                                case 13:
                                    return e.abrupt("return", e.sent);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function(e) {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "updateCart",
                    value: (s = o(regeneratorRuntime.mark((function e(t) {
                        var n, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("/cart/update.js", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            updates: t
                                        })
                                    });
                                case 2:
                                    if ((n = e.sent).ok) {
                                        e.next = 11;
                                        break
                                    }
                                    if (422 !== n.status) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 7, n.json();
                                case 7:
                                    return a = e.sent, r.Z.instance.reportError("Failed to update cart: " + JSON.stringify(a), (new Error).stack), e.abrupt("return", a.description);
                                case 10:
                                    throw new Error("/cart/update.js failed with status code " + n.status);
                                case 11:
                                    return e.next = 13, n.json();
                                case 13:
                                    return e.abrupt("return", e.sent);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function(e) {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "retrieveCart",
                    value: (c = o(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("/cart.js");
                                case 2:
                                    if ((t = e.sent).ok) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("/cart.js failed with status code " + t.status);
                                case 5:
                                    return e.next = 7, t.json();
                                case 7:
                                    return e.abrupt("return", e.sent);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() {
                        return c.apply(this, arguments)
                    })
                }, {
                    key: "clearCart",
                    value: (u = o(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("/cart/clear.js");
                                case 2:
                                    if ((t = e.sent).ok) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("/cart.js failed with status code " + t.status);
                                case 5:
                                    return e.next = 7, t.json();
                                case 7:
                                    return e.abrupt("return", e.sent);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() {
                        return u.apply(this, arguments)
                    })
                }], n && i(t.prototype, n), a && i(t, a), e
            }()
        },
        60282: (e, t, n) => {
            "use strict";
            n.d(t, {
                H4: () => b,
                S6: () => h,
                FT: () => _
            });
            n(73210), n(41539), n(88674), n(82526), n(41817), n(32165), n(66992), n(78783), n(33948), n(47042), n(68309), n(91038), n(19601);
            var r = n(67294),
                a = n(58905),
                o = n(93970),
                i = n(18441);
            const u = n.p + "c55b2593c935fba5553548100b862bfe.svg",
                c = n.p + "78539ca961bab64deec8852d7ebc9b6b.svg",
                s = n.p + "4d58b81b890b2b086e47f48c3e263b0c.svg",
                l = n.p + "0942b746aa660900f39414a420210a2f.svg",
                d = n.p + "3d24c037f82f2aceb01172277cb7f503.svg";
            var m = n(31451),
                p = n(85518);

            function f() {
                return (f = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = (0, r.useState)(e),
                    n = g(t, 2),
                    a = n[0],
                    o = n[1],
                    i = (0, r.useState)("UNCHANGED"),
                    u = g(i, 2),
                    c = u[0],
                    s = u[1];
                return {
                    currentValue: a,
                    setCurrentValue: o,
                    validity: c,
                    setValidity: s
                }
            }
            var h = function(e) {
                    return r.createElement("div", {
                        className: "text-editor__character-count text-editor__character-count--textarea".concat(e.count > e.max ? " text-editor__character-count--too-long" : "")
                    }, e.count, " / ", e.max)
                },
                b = (0, r.forwardRef)((function(e, t) {
                    var n, v, _, b, E, y = e.state,
                        A = y.currentValue,
                        P = y.setCurrentValue,
                        w = g((0, r.useState)(""), 2),
                        S = w[0],
                        I = w[1],
                        R = g((0, r.useState)(!1), 2),
                        k = R[0],
                        O = R[1],
                        T = e.state,
                        C = T.validity,
                        N = T.setValidity,
                        x = g((0, r.useState)(void 0), 2),
                        M = x[0],
                        U = x[1],
                        L = (0, o.XM)(),
                        D = g((0, o.KS)(0), 2),
                        F = D[0],
                        j = D[1],
                        V = (0, o.KJ)({
                            currentValue: A
                        }),
                        q = g((0, r.useState)(null !== (n = e.type) && void 0 !== n ? n : "text"), 2),
                        B = q[0],
                        H = q[1],
                        G = p.un,
                        Z = "password" === e.type && !G;
                    (0, r.useImperativeHandle)(t, (function() {
                        return {
                            externalHandleSaveValue: function() {
                                if ("VALID" === C) return K(A)
                            }
                        }
                    }));
                    var W = function(t, n) {
                            P(t), N("VALID"), t !== S && (!e.pattern || void 0 !== e.onCheckValid && n) ? void 0 !== e.onCheckValid && (N("PENDING"), j(1e3)) : N(n ? "VALID" : "INVALID")
                        },
                        Y = (0, r.useCallback)((function(t) {
                            t = t.trim(), e.onCheckValid ? e.onCheckValid(t).then((function(e) {
                                var n;
                                (null === (n = V.current) || void 0 === n ? void 0 : n.currentValue.trim()) === t && L.current && (N(e.result ? "VALID" : "INVALID"), e.message && U((0, a.Iu)(e.message)), j(0))
                            })) : console.warn("tried to call undefined props.checkValid")
                        }), [e, V, N, j, L]),
                        K = function(t) {
                            return t = t.trim(), A === S ? new Promise((function(e) {
                                e({
                                    result: !0
                                })
                            })) : void 0 !== e.onSaveValue ? null === (n = e.onSaveValue(t)) || void 0 === n ? void 0 : n.then((function(e) {
                                return L.current && (e.message ? U((0, a.Iu)(e.message)) : e.statusText && U(e.statusText), O(e.result), N(e.result ? "VALID" : "INVALID"), e.result && (I(t), U(e.message))), e
                            })) : (console.warn("tried to call undefined props.saveValue"), new Promise((function(e) {
                                e({
                                    result: !1
                                })
                            })));
                            var n
                        };
                    (0, r.useEffect)((function() {
                        void 0 !== e.defaultValue && (I(e.defaultValue), P(e.defaultValue), N("VALID"))
                    }), [e.defaultValue, P, N]), (0, r.useEffect)((function() {
                        e.pattern && "textarea" === e.type && console.warn("props.pattern and props.textArea are set. textarea elements cannot use patterns. Pattern will be ignored.")
                    }), [e.pattern, e.type]), (0, r.useEffect)((function() {
                        if (k) {
                            var e = setTimeout((function() {
                                O(!1)
                            }), 2e3);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [k]), (0, r.useEffect)((function() {
                        "INVALID" !== C && U(void 0)
                    }), [C]), (0, r.useEffect)((function() {
                        "PENDING" !== C || F || (j(5e3), Y(A))
                    }), [A, Y, j, C, F]);
                    var X = "text-editor-input",
                        z = "text-editor-input__wrapper",
                        J = r.createElement(i.M, {
                            src: s,
                            alt: (0, a.Iu)("global.texteditor.pending_icon")
                        });
                    if (k) X += " text-editor-input--success", z += " text-editor-input__wrapper--success";
                    else if (e.pattern || e.onCheckValid) switch (X += " text-editor-input--".concat(C.toLowerCase()), z += " text-editor-input__wrapper--".concat(C.toLowerCase()), C) {
                        case "VALID":
                            J = r.createElement(i.M, {
                                src: u,
                                alt: (0, a.Iu)("global.texteditor.valid_icon")
                            });
                            break;
                        case "INVALID":
                            J = r.createElement(i.M, {
                                src: c,
                                alt: (0, a.Iu)("global.texteditor.invalid_icon")
                            });
                            break;
                        case "PENDING":
                            J = r.createElement(i.M, {
                                src: s,
                                alt: (0, a.Iu)("global.texteditor.pending_icon")
                            })
                    } else J = r.createElement(r.Fragment, null);
                    Z && (X += " text-editor-input--with-password-icon");
                    var Q = {
                            ValidIcon: r.createElement("span", {
                                role: "status",
                                "aria-label": (0, a.Iu)("global.texteditor.satisfied")
                            }),
                            InvalidIcon: r.createElement("span", {
                                role: "status",
                                "aria-label": (0, a.Iu)("global.texteditor.required")
                            })
                        },
                        $ = null !== (v = e.title) && void 0 !== v ? v : (0, a.Iu)(e.label);
                    return r.createElement("div", {
                        className: "text-editor"
                    }, r.createElement("label", {
                        htmlFor: e.id,
                        className: "text-editor__label".concat(e.labelStyle ? " text-editor__label--hidden" : "")
                    }, (0, a.Iu)(e.label)), "textarea" === e.type ? r.createElement("div", null, r.createElement("textarea", f({
                        id: e.id,
                        className: X,
                        name: e.id,
                        required: !0,
                        placeholder: "placeholder" === e.labelStyle ? (0, a.Iu)(e.label) : void 0,
                        onChange: function(e) {
                            return W(e.target.value, e.target.validity.valid)
                        },
                        value: A,
                        title: $,
                        autoCapitalize: e.autoCapitalize ? "on" : "none",
                        autoComplete: null !== (_ = e.autoComplete) && void 0 !== _ ? _ : "none",
                        autoCorrect: e.autoCorrect ? "on" : "none",
                        spellCheck: e.spellCheck,
                        isp_ignore: ""
                    }, e.inputProps)), e.showCharacterCount && (null === (b = e.inputProps) || void 0 === b ? void 0 : b.maxLength) && r.createElement(h, {
                        count: A.length,
                        max: e.inputProps.maxLength
                    })) : r.createElement("div", {
                        className: z
                    }, J, r.createElement("input", f({
                        id: e.id,
                        className: X,
                        name: e.id,
                        required: !0,
                        placeholder: "placeholder" === e.labelStyle ? (0, a.Iu)(e.label) : void 0,
                        onChange: function(e) {
                            return W(e.target.value, e.target.validity.valid)
                        },
                        value: A,
                        pattern: e.pattern,
                        title: $,
                        type: B,
                        autoCapitalize: e.autoCapitalize ? "on" : "none",
                        autoComplete: e.autoComplete ? "on" : "none",
                        autoCorrect: e.autoCorrect ? "on" : "none",
                        spellCheck: e.spellCheck,
                        isp_ignore: ""
                    }, e.inputProps)), Z && r.createElement(i.M, {
                        className: "text-editor__password-icon",
                        role: "button",
                        tabIndex: 0,
                        src: "text" === B ? l : d,
                        alt: "text" === B ? (0, a.Iu)("global.texteditor.password_hide_alt") : (0, a.Iu)("global.texteditor.password_show_alt"),
                        onClick: function() {
                            return H("password" === B ? "text" : "password")
                        }
                    }), e.showCharacterCount && (null === (E = e.inputProps) || void 0 === E ? void 0 : E.maxLength) && r.createElement("div", {
                        className: "text-editor__character-count"
                    }, A.length, " / ", e.inputProps.maxLength)), r.createElement("div", {
                        className: "text-editor__error-message"
                    }, M), void 0 !== e.passwordRules && r.createElement("div", {
                        role: "status",
                        "aria-label": (0, a.Iu)("global.texteditor.password_requirements")
                    }, r.createElement(m.Z, {
                        className: "text-editor__password-rule",
                        rules: e.passwordRules,
                        minLength: e.passwordMinLength,
                        value: A,
                        iconComponents: Q,
                        messages: {
                            minLength: (0, a.Iu)("global.texteditor.password_rule_min_length", {
                                min_length: e.passwordMinLength
                            }),
                            specialChar: (0, a.Iu)("global.texteditor.password_rule_symbol"),
                            number: (0, a.Iu)("global.texteditor.password_rule_number"),
                            capital: (0, a.Iu)("global.texteditor.password_rule_uppercase"),
                            lowercase: (0, a.Iu)("global.texteditor.password_rule_lowercase")
                        },
                        specialCharsRegExp: e.passwordSpecialCharRegExp
                    })), e.onSaveValue && e.showSaveButton && r.createElement("button", {
                        type: "button",
                        className: "bl-core-button bl-core-button--cta",
                        disabled: "VALID" !== C || A.trim() === S,
                        onClick: function() {
                            K(A)
                        }
                    }, (0, a.Iu)("global.save")))
                }))
        },
        46121: (e, t, n) => {
            "use strict";
            n.d(t, {
                jD: () => l,
                pH: () => d,
                GN: () => p
            });
            n(41539), n(39714), n(82526), n(41817), n(32165), n(66992), n(78783), n(33948), n(47042), n(68309), n(91038);
            var r = n(67294),
                a = n(55468),
                o = n(93970),
                i = n(25251),
                u = n(36334);

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = (0, r.useContext)(m),
                    n = t.cartResult,
                    a = t.setCartResult,
                    o = t.isCartLoading,
                    i = t.setIsCartDirty,
                    u = t.setNeedCart;
                return (0, r.useEffect)((function() {
                    e && u(!0)
                }), [e, u]), {
                    cartResult: n,
                    setCartResult: a,
                    isCartLoading: o,
                    setIsCartDirty: i
                }
            }

            function d() {
                var e = l().cartResult;
                return e.error ? "!" : e.cart ? e.cart.item_count : 0
            }
            var m = r.createContext(void 0);

            function p(e) {
                var t = e.children;
                return r.createElement(m.Provider, {
                    value: f(),
                    children: t
                })
            }

            function f() {
                var e = c((0, r.useState)(!1), 2),
                    t = e[0],
                    n = e[1],
                    s = c((0, r.useState)({}), 2),
                    l = s[0],
                    d = s[1],
                    m = c((0, r.useState)(!1), 2),
                    p = m[0],
                    f = m[1],
                    g = c((0, r.useState)(!0), 2),
                    v = g[0],
                    _ = g[1],
                    h = (0, o.XM)(),
                    b = (0, r.useRef)(),
                    E = function() {
                        var e = (new Date).getTime();
                        b.current = e, i.EN.setItem("cartUpdated", e.toString())
                    },
                    y = function(e) {
                        var t, n;
                        null === (t = window.beautyLabsCart) || void 0 === t || null === (n = t.onOutgoing) || void 0 === n || n.call(t, e.cart), d(e)
                    };
                return (0, r.useEffect)((function() {
                    p && (f(!1), E(), _(!0))
                }), [p, t]), (0, r.useEffect)((function() {
                    var e = function(e) {
                        var t;
                        "cartUpdated" === e.key && (e.newValue !== (null === (t = b.current) || void 0 === t ? void 0 : t.toString()) && _(!0))
                    };
                    if (t) return window.addEventListener("storage", e),
                        function() {
                            window.removeEventListener("storage", e)
                        }
                }), [t]), (0, r.useEffect)((function() {
                    v && t && a.W.retrieveCart().then((function(e) {
                        h.current && (y({
                            cart: e
                        }), _(!1))
                    })).catch((function(e) {
                        u.Z.instance.report(e), h.current && (y({
                            error: e
                        }), _(!1), setTimeout((function() {
                            _(!0)
                        }), 5e3))
                    }))
                }), [h, v, t]), (0, r.useEffect)((function() {
                    return window.beautyLabsCart = window.beautyLabsCart || {}, window.beautyLabsCart.onIncoming = function(e) {
                            d({
                                cart: e
                            })
                        },
                        function() {
                            var e;
                            null !== (e = window.beautyLabsCart) && void 0 !== e && e.onIncoming && (window.beautyLabsCart.onIncoming = function(e) {})
                        }
                }), []), {
                    cartResult: l,
                    setCartResult: function(e) {
                        E(), y(e)
                    },
                    isCartLoading: p || v,
                    setIsCartDirty: f,
                    setNeedCart: n
                }
            }
        },
        57154: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i,
                g: () => u
            });
            var r = n(67294),
                a = n(58905),
                o = r.createContext(void 0);

            function i(e) {
                return r.createElement(o.Provider, {
                    value: e,
                    children: e.children
                })
            }
            var u = function(e) {
                var t = (0, r.useContext)(o);
                if (!t) return null;
                var n = (0, a.Iu)(e.alt);
                return r.createElement("div", {
                    className: "bl-core-loading-animation" + (e.text ? " bl-core-loading-animation--with-text" : "")
                }, r.createElement("img", {
                    src: t.loadingAnimation,
                    alt: n,
                    className: "bl-core-loading-animation__img"
                }), e.text ? r.createElement("p", {
                    className: "bl-core-loading-animation__text"
                }, (0, a.Iu)(e.text)) : null)
            }
        },
        34074: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => i,
                l: () => c
            });
            n(66992), n(51532), n(41539), n(78783), n(33948), n(70189), n(21249), n(91038), n(54747);
            var r = n(67294),
                a = n(51163),
                o = n(93970);

            function i(e, t, n) {
                var i;
                return function(c, l) {
                    var d = (0, r.useContext)(u),
                        m = d.instanceMapsRef,
                        p = d.setInstanceMapsDirty;
                    void 0 === i && (i = m.current.length, m.current.push(new Map));
                    var f = (0, o.qY)(),
                        g = (0, a.Pr)((function() {
                            return {
                                config: l,
                                setResultDirty: f
                            }
                        }), [c]);
                    if ((0, r.useEffect)((function() {
                            if (void 0 !== c) {
                                var a = function(a) {
                                    var o = m.current[i].get(c),
                                        u = new Set(null == o ? void 0 : o.props.usages);
                                    if (a(u), "unmount when unused" !== n || u.size) {
                                        var l = null == o ? void 0 : o.props.resultRef;
                                        l || ((l = r.createRef()).current = "function" == typeof e ? e(c) : e);
                                        var d = r.createElement(s, {
                                            key: c,
                                            keyInProps: c,
                                            useHook: t,
                                            usages: u,
                                            resultRef: l
                                        });
                                        m.current[i].set(c, d)
                                    } else m.current[i].delete(c);
                                    p()
                                };
                                return a((function(e) {
                                        return e.add(g)
                                    })),
                                    function() {
                                        return a((function(e) {
                                            return e.delete(g)
                                        }))
                                    }
                            }
                        }), [m, c, p, g]), void 0 === c) return "function" == typeof e ? e(c) : e;
                    var v = m.current[i].get(c);
                    return v ? v.props.resultRef.current : "function" == typeof e ? e(c) : e
                }
            }
            var u = r.createContext(void 0);

            function c(e) {
                var t, n, i = e.children,
                    c = (t = (0, r.useRef)([]), n = (0, o.qY)(), (0, a.Pr)((function() {
                        return {
                            instanceMapsRef: t,
                            setInstanceMapsDirty: n
                        }
                    }), [n]));
                return r.createElement(u.Provider, {
                    value: c
                }, c.instanceMapsRef.current.map((function(e, t) {
                    return r.createElement(r.Fragment, {
                        key: t
                    }, Array.from(e.values()))
                })), i)
            }

            function s(e) {
                var t = e.keyInProps,
                    n = e.useHook,
                    o = e.usages,
                    i = e.resultRef,
                    u = n(t, (0, a.Pr)((function() {
                        return Array.from(o, (function(e) {
                            return e.config
                        }))
                    }), [o]));
                return (0, r.useEffect)((function() {
                    u !== i.current && (i.current = u, o.forEach((function(e) {
                        return e.setResultDirty()
                    })))
                }), [u, i, o]), null
            }
        },
        81718: (e, t, n) => {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            n.d(t, {
                Z: () => a
            });
            const a = function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n = document.createDocumentFragment();
                    ["addEventListener", "dispatchEvent", "removeEventListener"].forEach((function(e) {
                        return t[e] = function() {
                            return n[e].apply(n, arguments)
                        }
                    }))
                }
                var t, n, a;
                return t = e, (n = [{
                    key: "addEventListener",
                    value: function(e, t, n) {}
                }, {
                    key: "dispatchEvent",
                    value: function(e) {
                        return !0
                    }
                }, {
                    key: "removeEventListener",
                    value: function(e, t, n) {}
                }, {
                    key: "addEventListenerAndReturnRemover",
                    value: function(e, t) {
                        var n = this;
                        return this.addEventListener(e, t),
                            function() {
                                return n.removeEventListener(e, t)
                            }
                    }
                }]) && r(t.prototype, n), a && r(t, a), e
            }()
        },
        36334: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            n(41539), n(88674), n(47042), n(68309), n(91038), n(78783), n(82526), n(41817), n(32165), n(66992), n(33948);
            var r, a = n(85518),
                o = n(34164);

            function i(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    c = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }! function(e) {
                e[e.Emergency = 0] = "Emergency", e[e.Alert = 1] = "Alert", e[e.Critical = 2] = "Critical", e[e.Error = 3] = "Error", e[e.Warning = 4] = "Warning", e[e.Notice = 5] = "Notice", e[e.Informational = 6] = "Informational", e[e.Debug = 7] = "Debug"
            }(r || (r = {}));
            var l = function() {
                function e(t) {
                    var n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), s(this, "_reportUrl", void 0), s(this, "_boundOnError", void 0), s(this, "_extraDetailsHandlers", []), this._reportUrl = t, this._boundOnError = function(e) {
                        return n._onError(e)
                    }, window.addEventListener("error", this._boundOnError)
                }
                var t, n, u;
                return t = e, u = [{
                    key: "initialise",
                    value: function(t) {
                        void 0 !== this.instance && (this.instance.destroy(), this.instance = void 0), this.instance = new e(t)
                    }
                }], (n = [{
                    key: "destroy",
                    value: function() {
                        window.removeEventListener("error", this._boundOnError), this._extraDetailsHandlers = [], e.instance === this && (e.instance = void 0)
                    }
                }, {
                    key: "_onError",
                    value: function(e) {
                        var t, n, r = e.message;
                        if ("Script error." !== r && -1 === r.indexOf("UnknownError") && -1 === r.indexOf("Program terminated with exit(0)") && -1 === r.indexOf("ResizeObserver loop limit exceeded") && -1 === r.indexOf("_AutofillCallbackHandler")) {
                            var a = null !== (t = null === (n = e.error) || void 0 === n ? void 0 : n.stack) && void 0 !== t ? t : e.message + "\n    at " + e.filename + ":" + e.lineno;
                            this.reportError(r, a)
                        }
                    }
                }, {
                    key: "registerExtraDetailsHandler",
                    value: function(e) {
                        this._extraDetailsHandlers.push(e)
                    }
                }, {
                    key: "reportError",
                    value: function(t, n) {
                        var u, c = {
                                level: r.Error,
                                short_message: t,
                                full_message: n,
                                _host: document.location.host,
                                _page: document.location.href,
                                _os_name: a.BF,
                                _os_version: a.MM,
                                _browser_name: a.KC,
                                _browser_version: a.x_,
                                _full_browser_version: a.o3,
                                _device_type: a.vO,
                                _mobile_vendor: a.B3,
                                _mobile_model: a.N7,
                                _engine_name: a.AA,
                                _engine_version: a.TI,
                                _user_agent: a.z$
                            },
                            s = i(this._extraDetailsHandlers);
                        try {
                            for (s.s(); !(u = s.n()).done;) {
                                var l = u.value;
                                try {
                                    l(c)
                                } catch (e) {}
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        var d = (new Date).getTime() / 1e3,
                            m = (0, o.hashObject)(c),
                            p = e._errorDeduplication[m];
                        void 0 !== p && p < d + e.SEND_INTERVAL || (e._errorDeduplication[m] = d, c._client_timestamp = d, fetch(this._reportUrl, {
                            mode: "cors",
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(c),
                            keepalive: !0
                        }))
                    }
                }, {
                    key: "report",
                    value: function(e) {
                        this.reportError(e.message || "" + e, e.stack || "")
                    }
                }]) && c(t.prototype, n), u && c(t, u), e
            }();
            s(l, "SEND_INTERVAL", 60), s(l, "_errorDeduplication", {}), s(l, "instance", void 0);
            const d = l
        },
        93970: (e, t, n) => {
            "use strict";
            n.d(t, {
                XM: () => c,
                KJ: () => s,
                qY: () => l,
                k1: () => d,
                V7: () => m,
                KS: () => p,
                YV: () => f,
                Yd: () => g,
                D9: () => v,
                d9: () => _,
                my: () => h,
                ZU: () => b,
                zo: () => a.Pr
            });
            n(82526), n(41817), n(41539), n(32165), n(66992), n(78783), n(33948), n(47042), n(68309), n(91038);
            var r = n(67294),
                a = n(51163),
                o = n(34074);

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c() {
                var e = (0, r.useRef)(!1);
                return (0, r.useEffect)((function() {
                    return e.current = !0,
                        function() {
                            e.current = !1
                        }
                }), []), e
            }

            function s(e) {
                var t = (0, r.useRef)(null);
                return (0, r.useEffect)((function() {
                    return t.current = e,
                        function() {
                            t.current = null
                        }
                }), [e]), t
            }

            function l() {
                var e = i((0, r.useState)(0), 2)[1];
                return (0, a.vl)((function() {
                    return e((function(e) {
                        return e + 1
                    }))
                }), [])
            }

            function d() {
                var e = (0, o.I)((function() {
                    return [void 0, function() {}]
                }), (function() {
                    var e = i((0, r.useState)(0), 2),
                        t = e[0],
                        n = e[1];
                    return (0, r.useMemo)((function() {
                        return [t, n]
                    }), [t])
                }), "unmount when unused");
                return function(t) {
                    var n = i(e(t, void 0), 2)[1];
                    return (0, a.vl)((function() {
                        return n((function(e) {
                            return e + 1
                        }))
                    }), [n])
                }
            }

            function m(e) {
                var t = l();
                (0, r.useEffect)((function() {
                    if (e > 0) {
                        var n = Math.min(e, 36e5),
                            r = setTimeout(t, n);
                        return function() {
                            return clearTimeout(r)
                        }
                    }
                }))
            }

            function p(e) {
                var t = (0, r.useRef)(void 0),
                    n = i((0, r.useState)(0), 2),
                    o = n[0],
                    u = n[1];
                (0, r.useEffect)((function() {
                    if (o) {
                        var e;
                        return function n() {
                            var r = t.current - Date.now();
                            if (r > 0) {
                                var a = Math.min(r, 36e5);
                                e = setTimeout(n, a)
                            } else t.current = 0, u(0)
                        }(), e && function() {
                            return clearTimeout(e)
                        }
                    }
                }), [o]);
                var c = (0, a.vl)((function(e) {
                    var n = t.current;
                    t.current = e > 0 ? Date.now() + e : 0, (t.current || 1 / 0) < (n || 1 / 0) && u((function(e) {
                        return e + 1
                    }))
                }), []);
                void 0 === t.current && c("function" == typeof e ? e() : e);
                return [!!o, c]
            }

            function f(e, t, n) {
                var a = l(),
                    o = Date.now() + n - e,
                    i = Math.floor(o / t);
                return (0, r.useEffect)((function() {
                    var e = t - (o - i * t),
                        n = Math.min(e, 36e5),
                        r = setTimeout(a, n);
                    return function() {
                        return clearTimeout(r)
                    }
                }), [o, t, a, i]), i
            }

            function g(e, t) {
                var n = l(),
                    a = Date.now() + t - e,
                    o = a >= 0;
                return (0, r.useEffect)((function() {
                    if (!o) {
                        var e = Math.min(-a, 36e5),
                            t = setTimeout(n, e);
                        return function() {
                            return clearTimeout(t)
                        }
                    }
                }), [a, n, o]), o
            }

            function v(e, t) {
                var n = (0, r.useRef)(t);
                return (0, r.useEffect)((function() {
                    n.current = e
                }), [e]), n.current
            }

            function _(e) {
                var t = (0, r.useRef)(!1);
                (0, r.useEffect)((function() {
                    var n = function() {
                            t.current || e(!0), t.current = !0
                        },
                        r = function() {
                            t.current && e(!1), t.current = !1
                        },
                        a = function(e) {
                            "hidden" === document.visibilityState ? n() : "visible" === document.visibilityState && r()
                        },
                        o = function(e) {
                            n()
                        },
                        i = function(e) {
                            r()
                        };
                    return document.addEventListener("visibilitychange", a), window.addEventListener("pagehide", o), window.addEventListener("pageshow", i),
                        function() {
                            document.removeEventListener("visibilitychange", a), window.removeEventListener("pagehide", o), window.removeEventListener("pageshow", i)
                        }
                }), [e])
            }

            function h(e) {
                (0, r.useEffect)((function() {
                    var t = function() {
                        e()
                    };
                    return window.addEventListener("load", t), document.addEventListener("page:load", t), document.addEventListener("page:change", t),
                        function() {
                            window.removeEventListener("load", t), document.removeEventListener("page:load", t), document.removeEventListener("page:change", t)
                        }
                }), [e])
            }

            function b() {
                var e = i((0, r.useState)(0), 2),
                    t = e[0],
                    n = e[1];
                return (0, r.useEffect)((function() {
                    var e = function(e) {
                        e.persisted && n((function(e) {
                            return e + 1
                        }))
                    };
                    return window.addEventListener("pageshow", e),
                        function() {
                            window.removeEventListener("pageshow", e)
                        }
                })), t
            }
        },
        18441: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => l
            });
            n(47941), n(82526), n(57327), n(38880), n(54747), n(49337), n(19601);
            var r = n(67294),
                a = n(85518);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        c(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = function(e) {
                    return e.preventDefault()
                },
                l = function(e) {
                    var t = "bl-core-non-draggable-image";
                    e.className && (t += " " + e.className);
                    var n = u(u({}, e), {}, {
                        classes: t
                    });
                    return a.vU ? r.createElement("img", o({
                        draggable: !1,
                        onMouseDown: s
                    }, n)) : r.createElement("img", o({
                        draggable: !1
                    }, n))
                }
        },
        73902: (e, t, n) => {
            "use strict";
            n.d(t, {
                ac: () => u,
                gl: () => c,
                df: () => l
            });
            n(82526), n(41817), n(41539), n(32165), n(66992), n(78783), n(33948), n(47042), n(68309), n(91038);
            var r = n(67294);

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            getComputedStyle(document.documentElement).getPropertyValue("--bl-core-breakpoint-screen-and-less-than-tablet"), getComputedStyle(document.documentElement).getPropertyValue("--bl-core-breakpoint-screen-and-greater-than-equal-desktop");
            var i = getComputedStyle(document.documentElement).getPropertyValue("--bl-core-breakpoint-screen-and-greater-than-equal-desktop-large");

            function u(e) {
                var t = a((0, r.useState)(window.matchMedia(e).matches), 2),
                    n = t[0],
                    o = t[1];
                return (0, r.useEffect)((function() {
                    var t = window.matchMedia(e);
                    t.matches !== n && o(t.matches);
                    var r = function() {
                        o(t.matches)
                    };
                    return t.addListener(r),
                        function() {
                            return t.removeListener(r)
                        }
                }), [n, e]), n
            }

            function c() {
                return u(i)
            }
            var s = function() {
                return document.documentElement.clientWidth || document.body.clientWidth
            };

            function l() {
                var e = a((0, r.useState)(s()), 2),
                    t = e[0],
                    n = e[1];
                return (0, r.useEffect)((function() {
                    var e = function() {
                        n(s())
                    };
                    return window.addEventListener("resize", e),
                        function() {
                            window.removeEventListener("resize", e)
                        }
                }), []), t
            }
        },
        77825: (e, t, n) => {
            "use strict";

            function r() {
                var e;
                return null === (e = window.__st) || void 0 === e ? void 0 : e.cid
            }
            n.d(t, {
                i: () => r
            })
        },
        25251: (e, t, n) => {
            "use strict";
            n.d(t, {
                KK: () => u,
                EN: () => c,
                Rr: () => l
            });
            n(47941);
            var r = n(51163),
                a = n(67294),
                o = n(93970);

            function i(e) {
                var t = {};
                return {
                    rawStorage: e,
                    setItem: function(n, r) {
                        if (t[n] = r, e) try {
                            e.setItem(n, r)
                        } catch (e) {
                            console.warn("Got error while setting", n, r, e)
                        }
                    },
                    getItem: function(n) {
                        if (e) {
                            var r = e.getItem(n);
                            if (null !== r) return r
                        }
                        return n in t ? t[n] : null
                    },
                    key: function(t) {
                        return e ? e.key(t) : null
                    },
                    clear: function() {
                        e && e.clear(), t = {}
                    },
                    length: e ? e.length : Object.keys(t).length,
                    removeItem: function(n) {
                        e && e.removeItem(n), delete t[n]
                    }
                }
            }
            var u = i(function() {
                    if (function() {
                            try {
                                return Boolean(window.sessionStorage)
                            } catch (e) {
                                return !1
                            }
                        }()) return window.sessionStorage
                }()),
                c = i(function() {
                    if (function() {
                            try {
                                return Boolean(window.localStorage)
                            } catch (e) {
                                return !1
                            }
                        }()) return window.localStorage
                }());

            function s(e) {
                var t = (0, o.k1)();
                return function(n) {
                    var o = t(n),
                        i = void 0 === n ? null : e.getItem(n),
                        u = (0, r.vl)((function(t) {
                            void 0 !== n ? (null !== t ? e.setItem(n, t) : e.removeItem(n), o()) : console.error("Attempt to set storage value with undefined key")
                        }), [n, o]);
                    return (0, a.useEffect)((function() {
                        if (void 0 !== n) return e.getItem(n) !== i && o(), window.addEventListener("storage", t),
                            function() {
                                return window.removeEventListener("storage", t)
                            };

                        function t(t) {
                            t.storageArea !== e.rawStorage || null !== t.key && t.key !== n || o()
                        }
                    }), [n, o, i]), [i, u]
                }
            }
            s(u);
            var l = s(c)
        },
        58905: (e, t, n) => {
            "use strict";
            n.d(t, {
                Iu: () => m,
                ju: () => p,
                yH: () => f,
                cy: () => b
            });
            n(92222), n(21249), n(57327), n(74916), n(23123), n(4723), n(69720), n(24603), n(39714), n(54747), n(69600), n(65069), n(82526), n(41817), n(41539), n(32165), n(66992), n(78783), n(33948), n(91038), n(47042), n(68309);
            var r, a = n(67294);

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || c(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || c(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                }
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }(function(e) {
                e[e.NONE = 0] = "NONE", e[e.XXX = 1] = "XXX", e[e.REVERSE = 2] = "REVERSE"
            })(r || (r = {}));
            var l, d = (l = ({
                NODE_ENV: "production",
                REACT_APP_MODEL_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/models/",
                REACT_APP_SKIN_TONE_API: "https://skintone.roseinc.beautylabs.com",
                REACT_APP_NAME: "rose-inc-web",
                REACT_APP_ERROR_REPORT_URL: "https://errors.amyris.beautylabs.com/errorReport",
                REACT_APP_DEFAULT_MODEL_NAME_EYEBROWS: "FUTest-Brows-6",
                REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_NUMBERS: "true",
                REACT_APP_BI_ACCOUNT_APP_NAME: "account",
                REACT_APP_PLUGIN_BASE: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/",
                REACT_APP_BI_APP_NAME: "roseinc_web",
                REACT_APP_ACCOUNT_NAMESPACE: "roseinc",
                REACT_APP_BI_LIVESHOPPING_APP_NAME: "liveshopping",
                REACT_APP_COMMIT_HASH: "cd7b583f591f3aa5f0b8067f9bb0c2bb2fe804eb",
                REACT_APP_STOREFRONT_API_KEY: "f1c1eba5583bb760c097cba85a0b1a51",
                REACT_APP_ACCOUNT_BACKEND_BASE_URI: "https://account.amyris.beautylabs.com/api/consumer/roseinc",
                REACT_APP_LIVESHOPPING_NAMESPACE: "roseinc",
                REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_SYMBOLS: "true",
                REACT_APP_FUSIONFS_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/132459692220/vto/plugin/data/",
                REACT_APP_BI_REPORT_URI: "https://logs.amyris.beautylabs.com/bi",
                REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_EYES: "VTO-5-2",
                REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_LOWERCASE: "true",
                REACT_APP_STOREFRONT_DOMAIN: "www.roseinc.com",
                REACT_APP_ACCOUNT_SYSTEM_PASSWORD_REQUIRE_UPPERCASE: "true",
                REACT_APP_ACCOUNT_PAGE_NAME: "myaccount",
                REACT_APP_VERSION: "0.0.1",
                REACT_APP_DEFAULT_MODEL_NAME_FULL_FACE_AND_MOUTH: "VTO-5-1",
                REACT_APP_CDN_ROOT: "https://cdn.roseinc.beautylabs.com/production/132459692220",
                REACT_APP_TEXTURE_URI_PREFIX: "https://cdn.roseinc.beautylabs.com/production/vto/textures/",
                REACT_APP_LIVE_SHOPPING_BACKEND_BASE_URI: "https://liveshopping.amyris.beautylabs.com/api/roseinc",
                REACT_APP_ACCOUNT_SYSTEM_PASSWORD_MIN_LEN: "8"
            }.REACT_APP_I18N_MANGLE_MODE || "").toUpperCase(), r[l] || r.NONE);

            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = v(e, t);
                return h(n)
            }

            function p(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = g(e, t);
                return a.createElement.apply(a, [a.Fragment, null].concat(u(n.split(/({{\s*\w+\s*}})/).filter((function(e) {
                    return !!e
                })).map((function(n) {
                    var r = n.match(/^{{\s*(\w+)\s*}}$/);
                    if (r) {
                        var a = r[1];
                        if (a in t) return t[a];
                        console.error("".concat(e, " translated, but parameter ").concat(a, " not supplied"))
                    }
                    return h(n)
                })))))
            }

            function f(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return {
                    __html: m(e, t)
                }
            }

            function g(e, t) {
                var n = _(window.i18n, e);
                if (!n) return console.error("no translation possible for ".concat(e, ": no target provided")), "";
                if ("object" === i(n)) {
                    var r, a = t.count;
                    if (void 0 === a) return console.error("no translation possible for ".concat(e, "; pluralisation expects 'count' parameter, but none provided")), "";
                    if (0 === a ? r = n.zero : 1 === a ? r = n.one : 2 === a && (r = n.two), !(n = r || n.other)) return console.error("no match found for ".concat(e, " with count=").concat(a)), ""
                }
                return "string" != typeof n ? (console.error("no translation possible for ".concat(e, ": target is not a string")), "") : n
            }

            function v(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = g(e, t), r = 0, a = Object.entries(t); r < a.length; r++) {
                    var i = o(a[r], 2),
                        u = i[0],
                        c = i[1],
                        s = "{{\\s*".concat(u, "\\s*}}"),
                        l = new RegExp(s, "g");
                    n = n.replaceAll(l, c)
                }
                return n
            }

            function _(e, t) {
                var n = e;
                return t.split(".").forEach((function(e) {
                    n && (n = n[e])
                })), n
            }

            function h(e) {
                return e ? (d === r.XXX ? e = (e = e.replaceAll(/[A-Z]/g, "X")).replaceAll(/[a-z]/g, "x") : d === r.REVERSE && (e = e.split("").reverse().join("")), e) : e
            }

            function b(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "generic",
                    r = e + "." + t,
                    a = e + "." + n;
                return _(window.i18n, r) ? r : a
            }
        },
        79198: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => r
            });
            n(74916), n(23123);

            function r(e) {
                if (e) {
                    for (var t = {}, n = ("?" === e[0] ? e.substr(1) : e).split("&"), r = 0; r < n.length; r++) {
                        var a = n[r].split("=");
                        t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || "")
                    }
                    return t
                }
                return !1
            }
        },
        20185: (e, t, n) => {
            "use strict";
            n.d(t, {
                XA: () => O,
                $q: () => T,
                U6: () => C,
                sO: () => N,
                av: () => x
            });
            n(35666), n(69826), n(69720), n(92222), n(74916), n(15306), n(47042), n(41539), n(39714), n(98145), n(66992), n(39575), n(82472), n(92990), n(18927), n(33105), n(35035), n(74345), n(7174), n(32846), n(44731), n(77209), n(96319), n(58867), n(37789), n(33739), n(29368), n(14483), n(12056), n(3462), n(30678), n(27462), n(33824), n(55021), n(12974), n(15016), n(82526), n(41817), n(68304), n(30489), n(12419), n(51532), n(78783), n(33948), n(32165), n(68309), n(91038), n(88674);
            var r = n(67719),
                a = n(3958),
                o = n(48764),
                i = n(81718),
                u = n(25251),
                c = n(58905),
                s = n(65503),
                l = n(8185);

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function m(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            m(o, r, a, i, u, "next", e)
                        }

                        function u(e) {
                            m(o, r, a, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && S(e, t)
            }

            function b(e) {
                var t = w();
                return function() {
                    var n, r = I(e);
                    if (t) {
                        var a = I(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }

            function E(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? y(e) : t
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function A(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (A = function(e) {
                    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return P(e, arguments, I(this).constructor)
                    }
                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), S(r, e)
                })(e)
            }

            function P(e, t, n) {
                return (P = w() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var a = new(Function.bind.apply(e, r));
                    return n && S(a, n.prototype), a
                }).apply(null, arguments)
            }

            function w() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function S(e, t) {
                return (S = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function I(e) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function R(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var k = function(e) {
                    h(n, e);
                    var t = b(n);

                    function n(e, r, a, o) {
                        var i;
                        return _(this, n), R(y(i = t.call(this, e)), "startTime", void 0), R(y(i), "endTime", void 0), R(y(i), "data", void 0), i.startTime = r, i.endTime = a, i.data = o, i
                    }
                    return n
                }(A(Event)),
                O = function(e) {
                    h(n, e);
                    var t = b(n);

                    function n(e, r, a, o, i) {
                        var u;
                        return _(this, n), R(y(u = t.call(this, e)), "channelType", void 0), R(y(u), "eventType", void 0), R(y(u), "message", void 0), R(y(u), "metadata", void 0), u.channelType = r, u.eventType = a, u.message = o, u.metadata = i, console.log("Message event: ", a, o, r, i), u
                    }
                    return n
                }(A(Event)),
                T = function(e) {
                    h(n, e);
                    var t = b(n);

                    function n(e) {
                        var r;
                        return _(this, n), R(y(r = t.call(this, "didStartConnecting")), "reconnecting", void 0), r.reconnecting = e, r
                    }
                    return n
                }(A(Event)),
                C = function(e, t) {
                    return void 0 !== Object.entries(e.discounts.productDiscounts).find((function(e) {
                        var n = g(e, 2);
                        n[0];
                        return void 0 !== n[1].amount[t]
                    }))
                },
                N = function(e) {
                    h(Pe, e);
                    var t, n, i, u, d, m, g, v, E, y, A, P, w, S, I, R, O, T, C, N, x, M, U, L, D, F, j, V, q, B, H, G, Z, W, Y, K, X, z, J, Q, $, ee, te, ne, re, ae, oe, ie, ue, ce, se, le, de, me, pe, fe, ge, ve, _e, he, be, Ee, ye, Ae = b(Pe);

                    function Pe() {
                        return _(this, Pe), Ae.apply(this, arguments)
                    }
                    return t = Pe, n = null, i = [{
                        key: "instance",
                        get: function() {
                            return Pe._instance
                        }
                    }, {
                        key: "isInfluencer",
                        value: function(e) {
                            return l.Z.hasGroup(e, "influencer")
                        }
                    }, {
                        key: "isAdmin",
                        value: function(e) {
                            return l.Z.hasGroup(e, "admin")
                        }
                    }, {
                        key: "isModerator",
                        value: function(e) {
                            return l.Z.hasGroup(e, "moderator")
                        }
                    }, {
                        key: "getShowThumbnailUrl",
                        value: function(e, t) {
                            return "".concat("https://liveshopping.amyris.beautylabs.com/api/roseinc", "/show/").concat(e, "/thumbnail/v1?width=").concat(t.width, "&height=").concat(t.height)
                        }
                    }, {
                        key: "broadcastStreamMetadata",
                        value: function(e) {
                            var t = JSON.parse(e.text);
                            void 0 !== t.type && Pe.instance.dispatchEvent(new k(t.type.toLowerCase().replace(/[-_][a-z0-9]/g, (function(e) {
                                return e.slice(-1).toUpperCase()
                            })), e.startTime, e.endTime, t))
                        }
                    }, {
                        key: "uuidToShortString",
                        value: function(e) {
                            try {
                                var t = (0, r.Z)(e);
                                return o.Buffer.from(Uint8Array.from(t)).toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "")
                            } catch (e) {
                                return
                            }
                        }
                    }, {
                        key: "shortStringToUuid",
                        value: function(e) {
                            try {
                                var t = o.Buffer.from(e + "==", "base64");
                                return (0, a.Z)(t)
                            } catch (e) {
                                return
                            }
                        }
                    }, {
                        key: "getValidationErrorResponse",
                        value: function(e) {
                            if (e instanceof s.z && void 0 !== e.response && 422 === e.response.status && void 0 !== e.json && void 0 !== e.json.errors) return e.json.errors
                        }
                    }, {
                        key: "validateDisplayName",
                        value: (ye = p(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeUnauthenticatedApiRequest("/profile/me/displayname/validate/v1", "POST", JSON.stringify(t), !0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return ye.apply(this, arguments)
                        })
                    }, {
                        key: "setDisplayName",
                        value: (Ee = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/profile/me/displayname/v1", "POST", JSON.stringify(n));
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return Ee.apply(this, arguments)
                        })
                    }, {
                        key: "getMyProfile",
                        value: (be = p(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/profile/me/v1", "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return be.apply(this, arguments)
                        })
                    }, {
                        key: "getInfluencerProfile",
                        value: (he = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/profile/byHandle/".concat(n, "/v1"), "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return he.apply(this, arguments)
                        })
                    }, {
                        key: "getFollowedInfluencers",
                        value: (_e = p(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAuthenticatedApiRequest(t, "/profile/me/followed/v1", "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return _e.apply(this, arguments)
                        })
                    }, {
                        key: "validateHandle",
                        value: (ve = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAuthenticatedApiRequest(t, "/profile/me/handle/validate/v1", "POST", JSON.stringify(n));
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return ve.apply(this, arguments)
                        })
                    }, {
                        key: "setHandle",
                        value: (ge = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/profile/me/handle/v1", "POST", JSON.stringify(n));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return ge.apply(this, arguments)
                        })
                    }, {
                        key: "deleteUserHandle",
                        value: (fe = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAdminApiRequest(t, "/profile/byUserId/".concat(n, "/handle/").concat(r, "/v1"), "DELETE", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return fe.apply(this, arguments)
                        })
                    }, {
                        key: "setBioText",
                        value: (pe = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/profile/me/bio/v1", "POST", JSON.stringify({
                                            bio: n
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return pe.apply(this, arguments)
                        })
                    }, {
                        key: "resetStreamKey",
                        value: (me = p(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/profile/me/streamKey/v1", "DELETE", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return me.apply(this, arguments)
                        })
                    }, {
                        key: "getStreamKey",
                        value: (de = p(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/profile/me/streamKey/v1", "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return de.apply(this, arguments)
                        })
                    }, {
                        key: "getActiveStreamStatus",
                        value: (le = p(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/profile/me/activeStreamStatus/v1", "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return le.apply(this, arguments)
                        })
                    }, {
                        key: "setProfilePicture",
                        value: (se = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAuthenticatedApiRequest(t, "/profile/me/picture/v1", "POST", n);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return se.apply(this, arguments)
                        })
                    }, {
                        key: "followInfluencer",
                        value: (ce = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAuthenticatedApiRequest(t, "/profile/byHandle/".concat(n, "/follow/v1"), "POST", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return ce.apply(this, arguments)
                        })
                    }, {
                        key: "unfollowInfluencer",
                        value: (ue = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAuthenticatedApiRequest(t, "/profile/byHandle/".concat(n, "/follow/v1"), "DELETE", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return ue.apply(this, arguments)
                        })
                    }, {
                        key: "saveShow",
                        value: (ie = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAuthenticatedApiRequest(t, "/show/".concat(n, "/save/v1"), "POST", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return ie.apply(this, arguments)
                        })
                    }, {
                        key: "unsaveShow",
                        value: (oe = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAuthenticatedApiRequest(t, "/show/".concat(n, "/save/v1"), "DELETE", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return oe.apply(this, arguments)
                        })
                    }, {
                        key: "getShareCode",
                        value: (ae = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/show/".concat(n, "/share/v1"), "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return ae.apply(this, arguments)
                        })
                    }, {
                        key: "recordShare",
                        value: (re = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/show/".concat(n, "/share/v1"), "POST", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return re.apply(this, arguments)
                        })
                    }, {
                        key: "logShowReferral",
                        value: (ne = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/show/".concat(n, "/referral/v1"), "POST", JSON.stringify(r));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return ne.apply(this, arguments)
                        })
                    }, {
                        key: "logShowViewRecording",
                        value: (te = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/show/".concat(n, "/watchRecording/v1"), "POST", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return te.apply(this, arguments)
                        })
                    }, {
                        key: "logShowViewPending",
                        value: (ee = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/show/".concat(n, "/viewPending/v1"), "POST", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return ee.apply(this, arguments)
                        })
                    }, {
                        key: "createShow",
                        value: ($ = p(regeneratorRuntime.mark((function e(t, n, r, a, o, i, u, c, s) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/show/v1", "POST", JSON.stringify({
                                            startTime: n.toISOString(),
                                            title: r,
                                            description: null != a ? a : null,
                                            variants: o,
                                            thumbnail: i.toString("base64"),
                                            publiclyListed: u,
                                            discounts: c,
                                            featureMode: s
                                        }));
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r, a, o, i, u, c) {
                            return $.apply(this, arguments)
                        })
                    }, {
                        key: "updateShow",
                        value: (Q = p(regeneratorRuntime.mark((function e(t, n, r, a, o, i, u, c, s, l) {
                            var d;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return d = {}, r && (d.startTime = r.toISOString()), a && (d.title = a), o && (d.description = o), i && (d.variants = i), u && (d.thumbnail = u.toString("base64")), void 0 !== c && (d.publiclyListed = c), s && (d.discounts = s), l && (d.featureMode = l), e.next = 11, this.makeInfluencerApiRequest(t, "/show/".concat(n, "/v1"), "PATCH", JSON.stringify(d));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r, a, o, i, u, c, s) {
                            return Q.apply(this, arguments)
                        })
                    }, {
                        key: "cancelShow",
                        value: (J = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/show/".concat(n, "/cancel/v1"), "POST", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return J.apply(this, arguments)
                        })
                    }, {
                        key: "endShow",
                        value: (z = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/show/".concat(n, "/end/v1"), "POST", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return z.apply(this, arguments)
                        })
                    }, {
                        key: "getShow",
                        value: (X = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/show/".concat(n, "/v1"), "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return X.apply(this, arguments)
                        })
                    }, {
                        key: "getShowStatistics",
                        value: (K = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/show/".concat(n, "/stats/v1"), "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return K.apply(this, arguments)
                        })
                    }, {
                        key: "getPublicShows",
                        value: (Y = p(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeUnauthenticatedApiRequest("/show/public/v1", "GET", void 0, !1);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return Y.apply(this, arguments)
                        })
                    }, {
                        key: "getShowsByInfluencerHandle",
                        value: (W = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            var o;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = "/show/byHandle/".concat(n, "/v1"), r && (o += "?startTimeStart=".concat(r.toISOString())), a && (o += "".concat(r ? "&" : "?", "startTimeEnd=").concat(a.toISOString())), e.next = 5, this.makeOptionallyAuthenticatedApiRequest(t, o, "GET", void 0);
                                    case 5:
                                        return e.abrupt("return", e.sent);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r) {
                            return W.apply(this, arguments)
                        })
                    }, {
                        key: "getSavedShows",
                        value: (Z = p(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAuthenticatedApiRequest(t, "/show/saved/v1", "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return Z.apply(this, arguments)
                        })
                    }, {
                        key: "reactToShow",
                        value: (G = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/show/".concat(n, "/react/").concat(r, "/v1"), "POST", JSON.stringify(a));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r) {
                            return G.apply(this, arguments)
                        })
                    }, {
                        key: "getLocalizedDateRequest",
                        value: function() {
                            var e = Intl.DateTimeFormat().resolvedOptions(),
                                t = (0, c.Iu)("global.locale.locale");
                            return {
                                timeZone: e.timeZone,
                                languageTag: t
                            }
                        }
                    }, {
                        key: "subscribeUserToShow",
                        value: (H = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAuthenticatedApiRequest(t, "/show/".concat(n, "/subscribe/v1"), "POST", JSON.stringify(this.getLocalizedDateRequest()));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return H.apply(this, arguments)
                        })
                    }, {
                        key: "subscribeToShow",
                        value: (B = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/show/".concat(n, "/subscribe/v2?email=").concat(encodeURIComponent(r)), "POST", JSON.stringify(this.getLocalizedDateRequest()));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return B.apply(this, arguments)
                        })
                    }, {
                        key: "sendTestEmailWithoutShow",
                        value: (q = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            var o;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = "?title=".concat(r), void 0 !== a && (o += "&email=".concat(encodeURIComponent(a))), e.next = 4, this.makeAdminApiRequest(t, "/show/testEmail/".concat(n, "/v1").concat(o), "POST", JSON.stringify(this.getLocalizedDateRequest()));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r) {
                            return q.apply(this, arguments)
                        })
                    }, {
                        key: "sendTestEmailForShow",
                        value: (V = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            var o;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = "", void 0 !== a && (o = "?email=".concat(encodeURIComponent(a))), e.next = 4, this.makeAdminApiRequest(t, "/show/".concat(n, "/testEmail/").concat(r, "/v1").concat(o), "POST", JSON.stringify(this.getLocalizedDateRequest()));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r) {
                            return V.apply(this, arguments)
                        })
                    }, {
                        key: "getDiscountCode",
                        value: (j = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            var o;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = "?customerId=".concat(a), e.next = 3, this.makeAuthenticatedApiRequest(t, "/show/".concat(n, "/discount/").concat(r, "/v1").concat(o), "GET", void 0);
                                    case 3:
                                        return e.abrupt("return", e.sent);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r) {
                            return j.apply(this, arguments)
                        })
                    }, {
                        key: "hasDiscount",
                        value: (F = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeAuthenticatedApiRequest(t, "/show/".concat(n, "/discount/v1"), "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return F.apply(this, arguments)
                        })
                    }, {
                        key: "getCurrentTime",
                        value: (D = p(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeUnauthenticatedApiRequest("/system/currentTime/v1", "GET", void 0, !0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return D.apply(this, arguments)
                        })
                    }, {
                        key: "getCurrentTimeFormatted",
                        value: (L = p(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeUnauthenticatedApiRequest("/system/currentTime/formatted/v1", "POST", JSON.stringify(this.getLocalizedDateRequest()), !1);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return L.apply(this, arguments)
                        })
                    }, {
                        key: "getChatCredentials",
                        value: (U = p(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/chat/credentials/v1", "GET", void 0);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return U.apply(this, arguments)
                        })
                    }, {
                        key: "joinChat",
                        value: (M = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/chat/".concat(n, "/join/v1"), "POST", JSON.stringify(r));
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return M.apply(this, arguments)
                        })
                    }, {
                        key: "sendChatMessage",
                        value: (x = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/chat/".concat(n, "/message/v1"), "POST", JSON.stringify(r));
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return x.apply(this, arguments)
                        })
                    }, {
                        key: "updateChatMessage",
                        value: (N = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeOptionallyAuthenticatedApiRequest(t, "/chat/".concat(n, "/message/").concat(r, "/v1"), "PUT", JSON.stringify(a));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r) {
                            return N.apply(this, arguments)
                        })
                    }, {
                        key: "muteUserByDisplayName",
                        value: (C = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeModeratorApiRequest(t, "/chat/".concat(n, "/mute/byDisplayName/").concat(encodeURIComponent(r.baseName), "/").concat(r.sequenceId, "/v1"), "POST", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return C.apply(this, arguments)
                        })
                    }, {
                        key: "muteUserByHandle",
                        value: (T = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeModeratorApiRequest(t, "/chat/".concat(n, "/mute/byHandle/").concat(r, "/v1"), "POST", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return T.apply(this, arguments)
                        })
                    }, {
                        key: "unmuteUserByDisplayName",
                        value: (O = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeModeratorApiRequest(t, "/chat/".concat(n, "/mute/byDisplayName/").concat(encodeURIComponent(r.baseName), "/").concat(r.sequenceId, "/v1"), "DELETE", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return O.apply(this, arguments)
                        })
                    }, {
                        key: "unmuteUserByHandle",
                        value: (R = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeModeratorApiRequest(t, "/chat/".concat(n, "/mute/byHandle/").concat(r, "/v1"), "DELETE", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return R.apply(this, arguments)
                        })
                    }, {
                        key: "debugPurchaseByDisplayName",
                        value: (I = p(regeneratorRuntime.mark((function e(t, n, r, a, o) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/show/".concat(n, "/purchase/byDisplayName/").concat(encodeURIComponent(r.baseName), "/").concat(r.sequenceId, "/v1"), "POST", JSON.stringify({
                                            variantId: a,
                                            quantity: o
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r, a) {
                            return I.apply(this, arguments)
                        })
                    }, {
                        key: "setPinnedMessage",
                        value: (S = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeModeratorApiRequest(t, "/chat/".concat(n, "/pinned"), "POST", JSON.stringify(r));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return S.apply(this, arguments)
                        })
                    }, {
                        key: "clearPinnedMessage",
                        value: (w = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeModeratorApiRequest(t, "/chat/".concat(n, "/pinned"), "DELETE", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return w.apply(this, arguments)
                        })
                    }, {
                        key: "setActiveVariant",
                        value: (P = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/show/".concat(n, "/activeVariant/v1"), "POST", JSON.stringify(r));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return P.apply(this, arguments)
                        })
                    }, {
                        key: "setFeaturedLink",
                        value: (A = p(regeneratorRuntime.mark((function e(t, n, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/show/".concat(n, "/featuredLink/v1"), "POST", JSON.stringify(r));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return A.apply(this, arguments)
                        })
                    }, {
                        key: "clearFeaturedItem",
                        value: (y = p(regeneratorRuntime.mark((function e(t, n) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.makeInfluencerApiRequest(t, "/show/".concat(n, "/featuredItem/v1"), "DELETE", void 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return y.apply(this, arguments)
                        })
                    }, {
                        key: "makeInfluencerApiRequest",
                        value: (E = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Pe.isInfluencer(t)) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("User is not an influencer");
                                    case 2:
                                        return e.next = 4, Pe.makeAuthenticatedApiRequest(t, n, r, a);
                                    case 4:
                                        return e.abrupt("return", e.sent);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t, n, r) {
                            return E.apply(this, arguments)
                        })
                    }, {
                        key: "makeAdminApiRequest",
                        value: (v = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Pe.isAdmin(t)) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("User is not an admin");
                                    case 2:
                                        return e.next = 4, Pe.makeAuthenticatedApiRequest(t, n, r, a);
                                    case 4:
                                        return e.abrupt("return", e.sent);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t, n, r) {
                            return v.apply(this, arguments)
                        })
                    }, {
                        key: "makeModeratorApiRequest",
                        value: (g = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Pe.isModerator(t)) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("User is not a moderator");
                                    case 2:
                                        return e.next = 4, Pe.makeAuthenticatedApiRequest(t, n, r, a);
                                    case 4:
                                        return e.abrupt("return", e.sent);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t, n, r) {
                            return g.apply(this, arguments)
                        })
                    }, {
                        key: "makeUnauthenticatedApiRequest",
                        value: (m = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s.D.makeUnauthenticatedJsonApiRequest("https://liveshopping.amyris.beautylabs.com/api/roseinc", t, n, r, a);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t, n, r) {
                            return m.apply(this, arguments)
                        })
                    }, {
                        key: "makeOptionallyAuthenticatedApiRequest",
                        value: (d = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s.D.makeOptionallyAuthenticatedJsonApiRequest("https://liveshopping.amyris.beautylabs.com/api/roseinc", t, n, r, a);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t, n, r) {
                            return d.apply(this, arguments)
                        })
                    }, {
                        key: "makeAuthenticatedApiRequest",
                        value: (u = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s.D.makeAuthenticatedJsonApiRequest("https://liveshopping.amyris.beautylabs.com/api/roseinc", t, n, r, a);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t, n, r) {
                            return u.apply(this, arguments)
                        })
                    }], n && f(t.prototype, n), i && f(t, i), Pe
                }(i.Z);

            function x(e, t, n) {
                var r, a;
                if (t) {
                    var o = "byHandle/".concat(t);
                    r = "".concat("https://liveshopping.amyris.beautylabs.com/api/roseinc", "/profile/").concat(o, "/picture/v1?size=").concat(n), a = "profilePictureCacheBuster/".concat(o)
                } else if (e) {
                    var i = "byDisplayName/".concat(encodeURIComponent(e.baseName), "/").concat(e.sequenceId);
                    r = "".concat("https://liveshopping.amyris.beautylabs.com/api/roseinc", "/profile/").concat(i, "/picture/v1?size=").concat(n), a = "profilePictureCacheBuster/".concat(i)
                }
                var c = g((0, u.Rr)(a), 2),
                    s = c[0],
                    l = c[1];
                return r && s && (r += "&cacheBuster=".concat(s)), [r, l]
            }
            R(N, "_instance", new N), R(N, "MAX_SHOW_TITLE_LENGTH", 65), R(N, "MAX_SHOW_DESCRIPTION_LENGTH", 1e3), R(N, "MAX_SHOW_PRODUCT_COUNT", 15), R(N, "MAX_BIO_LENGTH", 150), R(N, "MAX_HANDLE_LENGTH", 30), R(N, "MAX_DISPLAYNAME_LENGTH", 30), R(N, "MAX_SHOW_PREROLL_MS", 6e5), R(N, "MAX_CHAT_MESSAGE_LENGTH_NORMAL", 140), R(N, "MAX_CHAT_MESSAGE_LENGTH_MODERATOR", 280), R(N, "MAX_CHAT_MESSAGE_LENGTH_OWNER", 280)
        },
        58119: (e, t, n) => {
            "use strict";
            n.d(t, {
                kb: () => R,
                B_: () => S,
                MT: () => A,
                o0: () => I,
                dn: () => w,
                NQ: () => P
            });
            n(41539), n(88674), n(17727), n(82526), n(41817), n(32165), n(66992), n(78783), n(33948), n(47042), n(68309), n(91038);
            var r = n(67294),
                a = n(23985),
                o = n(18803),
                i = n(34994),
                u = n(56709),
                c = n(36334),
                s = n(58905);

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var m = (0, r.forwardRef)((function(e, t) {
                    var n = e.onError,
                        a = e.defaultValue,
                        o = l((0, u.Pt)(void 0 === a), 2),
                        i = o[0],
                        d = o[1],
                        m = l((0, r.useState)(), 2),
                        p = m[0],
                        f = m[1];
                    (0, r.useEffect)((function() {
                        f(void 0 === a ? i : a)
                    }), [i, a]), (0, r.useImperativeHandle)(t, (function() {
                        return {
                            externalHandleSaveValue: function() {
                                if (void 0 !== p) return g(p)
                            }
                        }
                    }));
                    var g = function(e) {
                        return e === i ? new Promise((function(e) {
                            e({
                                result: !0
                            })
                        })) : d(e).then((function() {
                            return {
                                result: !0
                            }
                        })).catch((function(e) {
                            return c.Z.instance.report(e), n((0, s.Iu)("account.errors.email_opt_save_error")), {
                                result: !1
                            }
                        }))
                    };
                    return r.createElement("input", {
                        name: "email-opt-in",
                        className: "bl-core-checkbox",
                        type: "checkbox",
                        id: e.id,
                        checked: null != p && p,
                        onChange: function() {
                            f(!p)
                        }
                    })
                })),
                p = n(60282),
                f = n(57154),
                g = n(5284),
                v = n(20185),
                _ = n(25251);

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var E = "liveshopping.displayName.skip",
                y = r.createContext(void 0);

            function A(e) {
                var t, n, a, o, i = e.children;
                return r.createElement(y.Provider, {
                    value: (t = (0, r.useState)("true" === _.KK.getItem(E)), n = h(t, 2), a = n[0], o = n[1], function(e) {
                        _.KK.setItem(E, "".concat(e)), o(e)
                    }, {
                        skipDisplayName: a,
                        setSkipDisplayName: function(e) {
                            _.KK.setItem(E, "".concat(e)), o(e)
                        }
                    }),
                    children: i
                })
            }

            function P() {
                return (0, r.useContext)(y)
            }

            function w() {
                var e = (0, i.kq)(),
                    t = (0, a.C)(),
                    n = P().skipDisplayName;
                if (!e) return "not logged in";
                if ("loading" === t) return "loading";
                if (t.influencer) {
                    if (!t.influencer.handle) return !0
                } else if (!t.displayName && !n) return !0;
                return !1
            }

            function S() {
                var e = (0, i.kq)(),
                    t = (0, a.C)(),
                    n = (0, g.O)(),
                    o = P(),
                    u = o.skipDisplayName,
                    c = o.setSkipDisplayName;
                if (!e) return r.createElement(i.Bj, {
                    to: "/account",
                    mode: "push"
                });
                if ("loading" === t) return r.createElement(f.g, {
                    alt: "accessibility.loading"
                });
                if (t.influencer) {
                    if (!t.influencer.handle) return r.createElement(R, {
                        user: e,
                        myProfile: t,
                        autofocus: !0
                    })
                } else if (!t.displayName && !u) return r.createElement(I, {
                    user: e,
                    myProfile: t,
                    altHeader: !0,
                    autofocus: !0,
                    withEmailOptin: !n.sendAcceptsMarketingOnSignUp,
                    setSkip: c
                });
                return null
            }

            function I(e) {
                var t, n = e.user,
                    a = e.myProfile,
                    i = (0, p.FT)(),
                    u = (0, r.useRef)(null),
                    c = h((0, r.useState)(!1), 2),
                    l = c[0],
                    d = c[1],
                    f = (0, r.useRef)(null),
                    g = h((0, r.useState)(), 2),
                    _ = g[0],
                    b = g[1];
                return r.createElement(r.Fragment, null, !e.hideHeader && r.createElement("h1", {
                    className: "account-form__title account-form__title--choose-display-name"
                }, (0, s.Iu)("onboard.viewer.choose_display_name")), r.createElement(p.H4, {
                    id: "display-name",
                    ref: u,
                    state: i,
                    label: "onboard.viewer.display_name",
                    labelStyle: "placeholder",
                    onCheckValid: function(e) {
                        return (0, o.tZ)(e)
                    },
                    onSaveValue: function(e) {
                        return (0, o.mq)(n, a, e)
                    },
                    defaultValue: null === (t = a.displayName) || void 0 === t ? void 0 : t.baseName,
                    inputProps: {
                        maxLength: v.sO.MAX_DISPLAYNAME_LENGTH
                    }
                }), r.createElement("p", {
                    className: "account-form__note"
                }, (0, s.Iu)("onboard.viewer.display_name_visibility")), e.withEmailOptin && r.createElement("div", {
                    className: "account-form__email-opt"
                }, r.createElement(m, {
                    id: "email-opt",
                    ref: f,
                    defaultValue: !0,
                    onError: function(e) {
                        b(e)
                    }
                }), r.createElement("label", {
                    htmlFor: "email-opt",
                    className: "p"
                }, (0, s.Iu)("onboard.viewer.email_opt_message"))), r.createElement("button", {
                    type: "button",
                    className: "bl-core-button bl-core-button--cta",
                    onClick: function() {
                        var e, t, n, r;
                        b("");
                        var a = null !== (e = null === (t = u.current) || void 0 === t ? void 0 : t.externalHandleSaveValue()) && void 0 !== e ? e : Promise.resolve(),
                            o = null !== (n = null === (r = f.current) || void 0 === r ? void 0 : r.externalHandleSaveValue()) && void 0 !== n ? n : Promise.resolve();
                        d(!0), a.finally((function() {
                            return o.finally((function() {
                                return d(!1)
                            }))
                        }))
                    },
                    disabled: "VALID" !== i.validity || !i.currentValue || l
                }, l ? (0, s.Iu)("global.saving") : (0, s.Iu)("onboard.viewer.done")), void 0 !== e.setSkip ? r.createElement("p", {
                    className: "account-fake-link",
                    onClick: function() {
                        return e.setSkip(!0)
                    }
                }, (0, s.Iu)("onboard.viewer.make_one_later")) : null, _ && r.createElement("div", {
                    className: "account-error__body"
                }, _))
            }

            function R(e) {
                var t = e.user,
                    n = e.myProfile,
                    a = n.influencer,
                    i = (0, p.FT)(),
                    u = (0, r.useRef)(null),
                    c = h((0, r.useState)(!1), 2),
                    l = c[0],
                    d = c[1];
                return r.createElement(r.Fragment, null, r.createElement("h1", {
                    className: "account-form__title"
                }, (0, s.Iu)("onboard.influencer.choose_handle")), r.createElement(p.H4, {
                    id: "handle",
                    ref: u,
                    state: i,
                    label: "onboard.influencer.handle",
                    labelStyle: "placeholder",
                    onCheckValid: function(e) {
                        return (0, o.jB)(t, e)
                    },
                    onSaveValue: function(e) {
                        return (0, o.TJ)(t, n, e)
                    },
                    defaultValue: null == a ? void 0 : a.handle,
                    inputProps: {
                        maxLength: v.sO.MAX_HANDLE_LENGTH
                    }
                }), r.createElement("button", {
                    type: "button",
                    className: "bl-core-button bl-core-button--cta",
                    onClick: function() {
                        var e, t = null === (e = u.current) || void 0 === e ? void 0 : e.externalHandleSaveValue();
                        t && (d(!0), t.finally((function() {
                            return d(!1)
                        })))
                    },
                    disabled: "VALID" !== i.validity || !i.currentValue || l
                }, l ? (0, s.Iu)("global.saving") : (0, s.Iu)("onboard.influencer.done")))
            }
        },
        97748: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(67294),
                a = n(58905),
                o = n(88017);

            function i(e) {
                return r.createElement("div", {
                    className: "account__header"
                }, r.createElement("h1", null, (0, a.Iu)(e.title)), r.createElement("a", {
                    className: "account__cancel",
                    href: "/account"
                }, r.createElement("img", {
                    src: o.Z,
                    alt: (0, a.Iu)("global.back")
                })))
            }
        },
        38094: (e, t, n) => {
            "use strict";
            n.d(t, {
                bp: () => f,
                H1: () => g,
                HY: () => _
            });
            n(35666), n(66992), n(41539), n(78783), n(33948), n(60285), n(88674), n(82526), n(41817), n(32165), n(47042), n(68309), n(91038);
            var r = n(20185),
                a = n(34074),
                o = n(34994),
                i = n(93970),
                u = n(30788),
                c = n(67294),
                s = n(65503);

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            m(o, r, a, i, u, "next", e)
                        }

                        function u(e) {
                            m(o, r, a, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function f(e, t) {
                var n = r.sO.uuidToShortString(e);
                return t ? new URL("/pages/broadcast/".concat(n), document.baseURI).href : new URL("/pages/watch/".concat(n), document.baseURI).href
            }

            function g(e, t, n) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = p(regeneratorRuntime.mark((function e(t, n, a) {
                    var o, i, u, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = r.sO.uuidToShortString(t.id), u = new URL("/pages/watch/".concat(i), document.baseURI), (null === (o = a.influencer) || void 0 === o ? void 0 : o.handle) === t.handle) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 5, r.sO.getShareCode(n, t.id);
                            case 5:
                                c = e.sent, u.pathname += "!" + c.shareCode;
                            case 7:
                                return e.abrupt("return", u.href);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var _ = (0, a.I)({
                show: "loading",
                setShowMayHaveEnded: function() {}
            }, (function(e, t) {
                var n = (0, o.kq)(),
                    a = (0, i.XM)(),
                    d = (0, u.Z)("loading"),
                    m = l((0, c.useState)(e ? "loading" : "no such show"), 2),
                    p = m[0],
                    f = m[1],
                    g = l((0, i.KS)(0), 2),
                    v = g[0],
                    _ = g[1],
                    h = l((0, c.useState)(!1), 2),
                    b = h[0],
                    E = h[1],
                    y = 2e4;
                return (0, c.useEffect)((function() {
                    b && _(0)
                }), [_, b]), (0, c.useEffect)((function() {
                    if (e && !v && "no such show" !== p) {
                        if ("loading" !== p) {
                            if (!t.some((function(e) {
                                    return e.poll
                                }))) return;
                            if ("temporary error" !== p) {
                                if ("CANCELLED" === p.state) return;
                                if ("ENDED" === p.state && void 0 !== p.recordings && void 0 !== p.chatBaseUrl) return;
                                0
                            }
                        }
                        _(5e3), console.log("Requesting show at ".concat((new Date).toISOString())), r.sO.getShow(n, e).then((function(e) {
                            if (a.current) {
                                if (f(e), "PENDING" === e.state && "loading" !== d) {
                                    var t = Date.parse(e.startTime) - (Date.now() + d) - 6e5;
                                    if (t > 0) {
                                        var n = Math.min(5e3 + t / 2, 6e5);
                                        _(n)
                                    }
                                }
                                if ("RUNNING" !== e.state || b || _(y), "ENDED" === e.state && e.endTime && "loading" !== d) {
                                    var r = Date.parse(e.endTime),
                                        o = Date.now() + d - r;
                                    if (o > 0) {
                                        var i = Math.max(o / 2, 5e3);
                                        _(i)
                                    }
                                }
                            }
                        })).catch((function(e) {
                            console.error(e), a.current && e instanceof s.z && 404 === e.response.status ? f("no such show") : f((function(e) {
                                return "loading" === e ? "temporary error" : e
                            }))
                        }))
                    }
                }), [t, a, _, y, p, e, b, v, d, n]), (0, c.useMemo)((function() {
                    return {
                        show: p,
                        setShowMayHaveEnded: E
                    }
                }), [p])
            }), "no cleanup")
        },
        89776: (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => E,
                F: () => w
            });
            n(47941), n(82526), n(57327), n(38880), n(49337), n(47042), n(43371), n(41817), n(32165), n(68309), n(91038), n(41539), n(88674), n(17727), n(66992), n(51532), n(78783), n(33948), n(54747), n(70189), n(35666);
            var r, a = n(71439),
                o = n(46829),
                i = n(67294),
                u = n(90057),
                c = n(93970),
                s = n(51120),
                l = n(81316);

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            p(o, r, a, i, u, "next", e)
                        }

                        function u(e) {
                            p(o, r, a, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        _(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function _(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = (new Date).getTime(),
                b = i.createContext(void 0);

            function E(e) {
                var t = e.children;
                return i.createElement(b.Provider, {
                    value: P(),
                    children: t
                })
            }
            var y = function(e, t) {
                    var n = e.get(t.id);
                    return void 0 === n && (n = {
                        variants: t.variants.reduce((function(e, t) {
                            return v(v({}, e), {}, _({}, t.id, t.quantityAvailable))
                        }), {}),
                        time: h
                    }), n
                },
                A = function() {
                    var e = f(regeneratorRuntime.mark((function e(t, n, o) {
                        var i, u, c, s;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = (0, l.tN)(o, ["id"], ["id", "quantityAvailable"]), u = i.productGql, c = i.productFns, s = i.variantFns, e.abrupt("return", t.query({
                                        query: (0, a.Ps)(r || (d = ["\n            query getProducts($id: ID!) {\n                product(id: $id) {\n                    ", "\n                }\n            }\n        "], m = void 0, m || (m = d.slice(0)), r = Object.freeze(Object.defineProperties(d, {
                                            raw: {
                                                value: Object.freeze(m)
                                            }
                                        }))), u),
                                        variables: {
                                            id: "gid://shopify/Product/".concat(n)
                                        }
                                    }).then(function() {
                                        var e = f(regeneratorRuntime.mark((function e(n) {
                                            var r;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, (0, l.m0)(n.data.product, c, s, o, t);
                                                    case 2:
                                                        return r = e.sent, e.abrupt("return", r.variants.reduce((function(e, t) {
                                                            return v(v({}, e), {}, _({}, t.id, t.quantityAvailable))
                                                        }), {}));
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                            var d, m
                        }), e)
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                P = function() {
                    var e = d((0, u.x)(new Map), 2),
                        t = e[0],
                        n = e[1],
                        r = d((0, u.x)(new Map), 2),
                        a = r[0],
                        l = r[1],
                        m = (0, c.XM)(),
                        p = d((0, u.x)(new Map), 2),
                        f = p[0],
                        g = p[1],
                        v = (0, o.useApolloClient)(),
                        _ = (0, s.L)();
                    return (0, i.useEffect)((function() {
                        var e = (new Date).getTime();
                        t.forEach((function(t) {
                            if (t.refCount > 0) {
                                var n = [t.product];
                                void 0 !== t.product.bundleItems && (n = t.product.bundleItems), n.forEach((function(t) {
                                    return function(e, t, n, r, a, o, i, u) {
                                        a((function(c) {
                                            if (!c.has(i.id)) {
                                                var s = y(n, i);
                                                if (s.time < o - 3e4) {
                                                    var l = A(e, i.id, u).then((function(e) {
                                                        return t.current && r((function(t) {
                                                            t.set(i.id, {
                                                                time: o,
                                                                variants: e
                                                            })
                                                        })), e
                                                    })).catch((function(e) {
                                                        console.warn("Failed to fetch inventory for product ".concat(i.id), e), t.current && r((function(e) {
                                                            e.set(i.id, {
                                                                time: o,
                                                                variants: s.variants
                                                            })
                                                        }))
                                                    })).finally((function() {
                                                        a((function(e) {
                                                            e.delete(i.id)
                                                        }))
                                                    }));
                                                    c.set(i.id, l)
                                                }
                                            }
                                        }))
                                    }(v, m, a, l, g, e, t, _)
                                }))
                            }
                        }))
                    }), [v, t, l, m, g]), {
                        productInventoryValues: a,
                        setNeededProducts: n,
                        pendingRequests: f
                    }
                },
                w = function(e, t) {
                    var n = P(),
                        r = n.productInventoryValues,
                        a = n.setNeededProducts,
                        o = n.pendingRequests,
                        u = e.product;
                    return (0, i.useEffect)((function() {
                        return a((function(e) {
                                var t, n = e.get(u.id),
                                    r = null !== (t = null == n ? void 0 : n.refCount) && void 0 !== t ? t : 0;
                                e.set(u.id, {
                                    refCount: r + 1,
                                    product: u
                                })
                            })),
                            function() {
                                a((function(e) {
                                    var t, n = e.get(u.id),
                                        r = null !== (t = null == n ? void 0 : n.refCount) && void 0 !== t ? t : 0;
                                    r > 1 ? e.set(u.id, {
                                        refCount: r - 1,
                                        product: u
                                    }) : e.delete(u.id)
                                }))
                            }
                    }), [a, u]), (0, i.useMemo)((function() {
                        var n = new Set;
                        if (void 0 !== u.bundleItems) {
                            var a, i = null !== (a = u.bundleThreshold) && void 0 !== a ? a : 0;
                            if (void 0 === t) return {
                                loading: !1,
                                selectionInStock: !1,
                                outOfStockVariantIds: n
                            };
                            var c = !0,
                                s = !1;
                            return u.bundleItems.forEach((function(e, a) {
                                o.has(e.id) && (s = !0);
                                var u = y(r, e);
                                e.variants.forEach((function(e) {
                                    var t = u.variants[e.id];
                                    (!e.availableForSale || void 0 !== t && t <= i) && n.add(e.id)
                                }));
                                var l = t[a];
                                n.has(l.id) && (c = !1)
                            })), {
                                loading: s,
                                selectionInStock: c,
                                outOfStockVariantIds: n
                            }
                        }
                        var l = y(r, u);
                        return u.variants.forEach((function(e) {
                            var t = l.variants[e.id];
                            (!e.availableForSale || void 0 !== t && t <= 0) && n.add(e.id)
                        })), {
                            loading: o.has(u.id),
                            selectionInStock: !n.has(e.variant.id),
                            outOfStockVariantIds: n
                        }
                    }), [u, e.variant, t, r, o])
                }
        },
        51120: (e, t, n) => {
            "use strict";
            n.d(t, {
                R: () => l,
                L: () => d
            });
            var r = n(67294),
                a = n(23985),
                o = n(30788),
                i = n(58119),
                u = n(89776),
                c = n(81316),
                s = r.createContext(void 0);

            function l(e) {
                return r.createElement(s.Provider, {
                    value: e
                }, r.createElement(a.u, null, r.createElement(o.K, null, r.createElement(i.MT, null, r.createElement(u.X, null, r.createElement(c.dp, null, e.children))))))
            }

            function d() {
                return (0, r.useContext)(s)
            }
        },
        23985: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => p,
                u: () => g
            });
            n(82526), n(41817), n(41539), n(32165), n(66992), n(78783), n(33948), n(47042), n(68309), n(91038), n(47941), n(57327), n(38880), n(54747), n(49337);
            var r = n(67294),
                a = n(90057),
                o = n(20185),
                i = n(34994),
                u = n(93970);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        l(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = (0, r.useContext)(f),
                    n = d(t, 2),
                    a = n[0],
                    o = n[1];
                return (0, r.useEffect)((function() {
                    e && o(!0)
                }), [e, o]), a
            }
            var f = r.createContext(void 0);

            function g(e) {
                var t = e.children;
                return r.createElement(f.Provider, {
                    value: v(),
                    children: t
                })
            }

            function v() {
                var e = d((0, r.useState)(!1), 2),
                    t = e[0],
                    n = e[1],
                    c = d((0, a.x)("loading"), 2),
                    l = c[0],
                    m = c[1],
                    p = d((0, u.KS)(0), 2),
                    f = p[0],
                    g = p[1],
                    v = (0, i.kq)(),
                    _ = (0, u.XM)();
                return (0, r.useEffect)((function() {
                    t && ("loading" !== l || f || (g(5e3), o.sO.getMyProfile(v).then((function(e) {
                        _.current && m(s(s({}, e), {}, {
                            setMyProfile: m
                        }))
                    }))))
                }), [_, l, f, t, m, g, v]), [l, n]
            }
        },
        81316: (e, t, n) => {
            "use strict";
            n.d(t, {
                dp: () => y,
                jW: () => P,
                YN: () => w,
                sQ: () => S,
                Zb: () => k,
                r6: () => O,
                m0: () => T,
                tN: () => C
            });
            n(47042), n(43371), n(82526), n(41817), n(32165), n(38880), n(49337), n(35666), n(74916), n(23123), n(26699), n(32023), n(41539), n(88674), n(17727), n(66992), n(51532), n(78783), n(33948), n(54747), n(69826), n(21249), n(47941), n(57327), n(68309), n(69720), n(92222), n(91038), n(70189), n(86535), n(99244), n(69600);
            var r, a = n(71439),
                o = n(46829),
                i = n(67294),
                u = n(90057),
                c = n(93970),
                s = n(51120);

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = v(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    u = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        u = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        f(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || v(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
                }
            }

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            h(o, r, a, i, u, "next", e)
                        }

                        function u(e) {
                            h(o, r, a, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var E = i.createContext(void 0);

            function y(e) {
                var t = e.children;
                return i.createElement(E.Provider, {
                    value: R(),
                    children: t
                })
            }
            var A = function(e) {
                    return parseInt(e.split("/").pop())
                },
                P = function(e) {
                    var t = 2;
                    return e.includes(".") && (t -= e.length - 1 - e.lastIndexOf(".")), parseInt(e.replaceAll(".", ""), 10) * Math.pow(10, t)
                },
                w = ["id", "name", "handle", "options", "img", "details", "gwp", "bundleItems", "bundleThreshold"],
                S = ["id", "name", "priceCents", "compareAtPriceCents", "options", "img", "sku", "availableForSale", "quantityAvailable", "currentlyNotInStock", "img"],
                I = function() {
                    var e = b(regeneratorRuntime.mark((function e(t, n, o) {
                        var i, u, c, s;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = C(o, w, S), u = i.productGql, c = i.productFns, s = i.variantFns, e.abrupt("return", t.query({
                                        query: (0, a.Ps)(r || (l = ["\n            query getProducts($id: ID!) {\n                product(id: $id) {\n                    ", "\n                }\n            }\n        "], d = void 0, d || (d = l.slice(0)), r = Object.freeze(Object.defineProperties(l, {
                                            raw: {
                                                value: Object.freeze(d)
                                            }
                                        }))), u),
                                        fetchPolicy: "network-only",
                                        variables: {
                                            id: "gid://shopify/Product/".concat(n)
                                        }
                                    }).then(function() {
                                        var e = b(regeneratorRuntime.mark((function e(n) {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, T(n.data.product, c, s, o, t);
                                                    case 2:
                                                        return e.abrupt("return", e.sent);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                            var l, d
                        }), e)
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                R = function() {
                    var e = g((0, u.x)(new Map), 2),
                        t = e[0],
                        n = e[1],
                        r = g((0, u.x)(new Map), 2),
                        a = r[0],
                        l = r[1],
                        d = (0, c.XM)(),
                        m = g((0, u.x)(new Map), 2),
                        p = m[0],
                        f = m[1],
                        v = (0, o.useApolloClient)(),
                        _ = (0, s.L)();
                    return (0, i.useEffect)((function() {
                        t.forEach((function(e, t) {
                            e.refCount > 0 && function(e, t, n, r, a, o, i) {
                                a((function(u) {
                                    if (!u.has(o) && void 0 === n.get(o)) {
                                        var c = I(e, o, i).then((function(e) {
                                            return t.current && e && r((function(t) {
                                                t.set(o, e)
                                            })), e
                                        })).catch((function(e) {
                                            console.warn("Failed to fetch product ID ".concat(o), e)
                                        })).finally((function() {
                                            a((function(e) {
                                                e.delete(o)
                                            }))
                                        }));
                                        u.set(o, c)
                                    }
                                }))
                            }(v, d, a, l, f, t, _)
                        }))
                    }), [v, t, l, d, f]), {
                        productInfoValues: a,
                        setNeededProducts: n,
                        pendingRequests: p
                    }
                },
                k = function(e, t) {
                    var n = function(e) {
                            var t = R(),
                                n = t.productInfoValues,
                                r = t.setNeededProducts,
                                a = t.pendingRequests;
                            return (0, i.useEffect)((function() {
                                if (void 0 !== e) return r((function(t) {
                                        var n, r = t.get(e),
                                            a = null !== (n = null == r ? void 0 : r.refCount) && void 0 !== n ? n : 0;
                                        t.set(e, {
                                            refCount: a + 1
                                        })
                                    })),
                                    function() {
                                        r((function(t) {
                                            var n, r = t.get(e),
                                                a = null !== (n = null == r ? void 0 : r.refCount) && void 0 !== n ? n : 0;
                                            a > 1 ? t.set(e, {
                                                refCount: a - 1
                                            }) : t.delete(e)
                                        }))
                                    }
                            }), [r, e]), (0, i.useMemo)((function() {
                                return void 0 === e ? {
                                    loading: !1,
                                    product: void 0
                                } : {
                                    loading: a.has(e),
                                    product: n.get(e)
                                }
                            }), [e, n, a])
                        }(e),
                        r = n.loading,
                        a = n.product;
                    return (0, i.useMemo)((function() {
                        return {
                            loading: r,
                            product: a,
                            variant: null == a ? void 0 : a.variants.find((function(e) {
                                return e.id === t
                            }))
                        }
                    }), [t, r, a])
                },
                O = function(e, t) {
                    var n = function(e) {
                        var t = R(),
                            n = t.productInfoValues,
                            r = t.setNeededProducts,
                            a = t.pendingRequests;
                        return (0, i.useEffect)((function() {
                            if (void 0 !== e) return r((function(t) {
                                    e.forEach((function(e) {
                                        var n, r = t.get(e),
                                            a = null !== (n = null == r ? void 0 : r.refCount) && void 0 !== n ? n : 0;
                                        t.set(e, {
                                            refCount: a + 1
                                        })
                                    }))
                                })),
                                function() {
                                    r((function(t) {
                                        e.forEach((function(e) {
                                            var n, r = t.get(e),
                                                a = null !== (n = null == r ? void 0 : r.refCount) && void 0 !== n ? n : 0;
                                            a > 1 ? t.set(e, {
                                                refCount: a - 1
                                            }) : t.delete(e)
                                        }))
                                    }))
                                }
                        }), [r, e]), (0, i.useMemo)((function() {
                            return void 0 === e ? [] : e.map((function(e) {
                                return {
                                    loading: a.has(e),
                                    product: n.get(e)
                                }
                            }))
                        }), [e, n, a])
                    }(e);
                    return (0, i.useMemo)((function() {
                        return void 0 === t ? [] : n.map((function(e, n) {
                            var r = e.loading,
                                a = e.product;
                            return {
                                loading: r,
                                product: a,
                                variant: null == a ? void 0 : a.variants.find((function(e) {
                                    return e.id === t[n]
                                }))
                            }
                        }))
                    }), [n, t])
                },
                T = function() {
                    var e = b(regeneratorRuntime.mark((function e(t, n, r, a, o) {
                        var i, u, c;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = p({}, t), 0 !== Object.keys(t).length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", void 0);
                                case 3:
                                    i = d(n), e.prev = 4, i.s();
                                case 6:
                                    if ((u = i.n()).done) {
                                        e.next = 15;
                                        break
                                    }
                                    return c = u.value, e.next = 10, c(t, a, o);
                                case 10:
                                    if ("discard" !== e.sent) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.abrupt("return", void 0);
                                case 13:
                                    e.next = 6;
                                    break;
                                case 15:
                                    e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(4), i.e(e.t0);
                                case 20:
                                    return e.prev = 20, i.f(), e.finish(20);
                                case 23:
                                    return e.next = 25, Promise.all(t.variants.nodes.map(function() {
                                        var e = b(regeneratorRuntime.mark((function e(n) {
                                            var i, u, c, s;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        i = p({}, n), u = d(r), e.prev = 2, u.s();
                                                    case 4:
                                                        if ((c = u.n()).done) {
                                                            e.next = 13;
                                                            break
                                                        }
                                                        return s = c.value, e.next = 8, s(t, i, a, o);
                                                    case 8:
                                                        if ("discard" !== e.sent) {
                                                            e.next = 11;
                                                            break
                                                        }
                                                        return e.abrupt("return", void 0);
                                                    case 11:
                                                        e.next = 4;
                                                        break;
                                                    case 13:
                                                        e.next = 18;
                                                        break;
                                                    case 15:
                                                        e.prev = 15, e.t0 = e.catch(2), u.e(e.t0);
                                                    case 18:
                                                        return e.prev = 18, u.f(), e.finish(18);
                                                    case 21:
                                                        return e.abrupt("return", i);
                                                    case 22:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [2, 15, 18, 21]
                                            ])
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()).filter(Boolean));
                                case 25:
                                    return t.variants = e.sent, e.abrupt("return", t);
                                case 27:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 17, 20, 23]
                        ])
                    })));
                    return function(t, n, r, a, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function e(t, n, r) {
                    var a = Object.entries(function(e) {
                            return p({
                                id: {
                                    fn: function(e) {
                                        e.id = A(e.id)
                                    }
                                },
                                name: {
                                    gql: "name: title"
                                },
                                handle: {},
                                options: {
                                    fn: function(e) {
                                        e.options = e.options.map((function(e) {
                                            return e.name
                                        }))
                                    },
                                    gql: "\n            options(first: 100) {\n                name\n            }\n        "
                                },
                                img: {
                                    gql: "\n            img: featuredImage {\n                src: url(transform: {maxWidth: 320, maxHeight: 320})\n                alt: altText\n            }\n        "
                                }
                            }, e)
                        }(t.productFnsAndGql)),
                        o = Object.entries(function(e) {
                            return p({
                                id: {
                                    fn: function(e, t) {
                                        t.id = A(t.id)
                                    }
                                },
                                name: {
                                    gql: "name: title"
                                },
                                priceCents: {
                                    fn: function(e, t) {
                                        t.priceCents = P(t.price.amount), delete t.price
                                    },
                                    gql: "\n            price {\n                amount\n            }\n        "
                                },
                                compareAtPriceCents: {
                                    fn: function(e, t) {
                                        null !== t.compareAtPrice ? t.compareAtPriceCents = P(t.compareAtPrice.amount) : void 0 !== t.price ? t.compareAtPriceCents = P(t.price.amount) : t.compareAtPriceCents = t.priceCents, delete t.compareAtPrice
                                    },
                                    gql: "\n            compareAtPrice {\n                amount\n            }\n        "
                                },
                                options: {
                                    fn: function(e, t) {
                                        t.options = e.options.map((function(e) {
                                            var n;
                                            return null !== (n = t.options.find((function(t) {
                                                return t.name === e
                                            })).value) && void 0 !== n ? n : ""
                                        }))
                                    },
                                    gql: "\n            options: selectedOptions {\n                name\n                value\n            }\n        ",
                                    productDeps: ["options"]
                                },
                                sku: {},
                                availableForSale: {},
                                quantityAvailable: {},
                                currentlyNotInStock: {},
                                img: {
                                    fn: function(e, t) {
                                        var n;
                                        null !== (n = t.img) && void 0 !== n && n.src || (t.img = e.img)
                                    },
                                    gql: "\n            img: image {\n                src: url(transform: {maxWidth: 320, maxHeight: 320})\n                alt: altText\n            }\n        "
                                }
                            }, e)
                        }(t.variantFnsAndGql)),
                        i = [].concat(l(a.filter((function(e) {
                            var t = g(e, 1)[0];
                            return "_" === t || n.includes(t)
                        }))), l(o.filter((function(e) {
                            var t = g(e, 1)[0];
                            return "_" === t || r.includes(t)
                        })))).map((function(e) {
                            var t = g(e, 2)[1];
                            return {
                                productDeps: null == t ? void 0 : t.productDeps,
                                variantDeps: null == t ? void 0 : t.variantDeps
                            }
                        })),
                        u = Array.from(new Set(i.flatMap((function(e) {
                            return e.productDeps
                        })).filter((function(e) {
                            return e && !n.includes(e)
                        })))),
                        c = Array.from(new Set(i.flatMap((function(e) {
                            return e.variantDeps
                        })).filter((function(e) {
                            return e && !r.includes(e)
                        }))));
                    if (u.length || c.length) {
                        var s = e(t, n.concat(u), r.concat(c)),
                            d = s.productFns,
                            m = s.variantFns,
                            f = s.productGql;
                        return m.push((function(e, t) {
                            Object.entries(t).forEach((function(e) {
                                    var n = g(e, 1)[0];
                                    r.includes(n) || delete t[n]
                                })),
                                function(e, t) {
                                    return A(e.variants.nodes[0].id) === t
                                }(e, t.id) && Object.entries(e).forEach((function(t) {
                                    var a = g(t, 1)[0];
                                    n.concat(r.length ? "variants" : []).includes(a) || delete e[a]
                                }))
                        })), {
                            productFns: d,
                            variantFns: m,
                            productGql: f
                        }
                    }
                    a = a.filter((function(e) {
                        var t = g(e, 1)[0];
                        return "_" === t || n.includes(t)
                    })), o = o.filter((function(e) {
                        var t = g(e, 1)[0];
                        return "_" === t || r.includes(t)
                    }));
                    var v = a.map((function(e) {
                            return g(e, 2)[1].fn
                        })).filter(Boolean),
                        _ = a.map((function(e) {
                            var t, n = g(e, 2),
                                r = n[0];
                            return null !== (t = n[1].gql) && void 0 !== t ? t : "_" === r ? "" : r
                        })).join("\n"),
                        h = o.map((function(e) {
                            return g(e, 2)[1].fn
                        })).filter(Boolean),
                        b = o.map((function(e) {
                            var t, n = g(e, 2),
                                r = n[0];
                            return null !== (t = n[1].gql) && void 0 !== t ? t : "_" === r ? "" : r
                        })).join("\n");
                    return {
                        productFns: v,
                        variantFns: h,
                        productGql: "".concat(_).concat(b ? "\n                    variants(first: 100) {\n                        nodes {\n                            ".concat(b, "\n                        }\n                    }\n                ") : "")
                    }
                }
        },
        30788: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c,
                K: () => l
            });
            n(82526), n(41817), n(41539), n(32165), n(66992), n(78783), n(33948), n(47042), n(68309), n(91038);
            var r = n(67294),
                a = n(20185),
                o = n(93970);

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = (0, r.useContext)(s),
                    a = i(n, 2),
                    o = a[0],
                    u = a[1];
                return (0, r.useEffect)((function() {
                    t && u(!0)
                }), [t, u]), "loading" === o ? e : o
            }
            var s = r.createContext(void 0);

            function l(e) {
                var t = e.children;
                return r.createElement(s.Provider, {
                    value: d(),
                    children: t
                })
            }

            function d() {
                var e = i((0, r.useState)(!1), 2),
                    t = e[0],
                    n = e[1],
                    u = i((0, r.useState)("loading"), 2),
                    c = u[0],
                    s = u[1],
                    l = i((0, o.KS)(0), 2),
                    d = l[0],
                    m = l[1],
                    p = (0, o.XM)();
                return (0, r.useEffect)((function() {
                    t && ("loading" !== c || d || (m(5e3), a.sO.getCurrentTime().then((function(e) {
                        p.current && s(Date.parse(e.currentTime) - Date.now())
                    }))))
                }), [p, t, m, c, d]), [c, n]
            }
        },
        18803: (e, t, n) => {
            "use strict";
            n.d(t, {
                tZ: () => o,
                mq: () => i,
                jB: () => u,
                TJ: () => c
            });
            var r = n(20185),
                a = n(58905);

            function o(e) {
                return r.sO.validateDisplayName({
                    baseName: e
                }).then((function(e) {
                    return "VALID" === e.result ? {
                        result: !0
                    } : {
                        result: !1,
                        message: (0, a.cy)("livestream.errors.display_name", e.result.toLowerCase())
                    }
                }))
            }

            function i(e, t, n) {
                return r.sO.setDisplayName(e, {
                    baseName: n
                }).then((function(e) {
                    return t.setMyProfile((function(t) {
                        t.displayName = e
                    })), e.baseName === n ? {
                        result: !0,
                        newValue: e
                    } : {
                        result: !1
                    }
                }))
            }

            function u(e, t) {
                return r.sO.validateHandle(e, {
                    handle: t
                }).then((function(e) {
                    return "VALID" === e.result ? e.available ? {
                        result: !0
                    } : {
                        result: !1,
                        message: "livestream.errors.handle.not_available"
                    } : {
                        result: !1,
                        message: (0, a.cy)("livestream.errors.handle", e.result.toLowerCase())
                    }
                }))
            }

            function c(e, t, n) {
                return r.sO.setHandle(e, {
                    handle: n
                }).catch((function(e) {
                    return console.error("error setting handle:", e), e.response.statusText ? {
                        result: !1,
                        statusText: e.response.statusText
                    } : {
                        result: !1
                    }
                })).then((function(e) {
                    return e || (e = {
                        result: !0,
                        newValue: n
                    }, t.setMyProfile((function(e) {
                        e.influencer && (e.influencer.handle = n)
                    }))), e
                }))
            }
        },
        65116: (e, t, n) => {
            "use strict";
            n.d(t, {
                IA: () => o,
                Eu: () => u,
                Tx: () => c
            });
            n(35666), n(41539), n(88674);

            function r(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            r(i, a, o, u, c, "next", e)
                        }

                        function c(e) {
                            r(i, a, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function o(e, t, n) {
                return i.apply(this, arguments)
            }

            function i() {
                return (i = a(regeneratorRuntime.mark((function e(t, n, r) {
                    var a, o, i, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(1 === n && t.length < r)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 2:
                                if (a = document.createElement("canvas"), !(o = a.getContext("2d"))) {
                                    e.next = 9;
                                    break
                                }
                                return i = new Image, c = new Promise((function(e) {
                                    return i.onload = e
                                })).then((function() {
                                    var e = i.width / n,
                                        t = i.height / n;
                                    return a.width = e, a.height = t, o.drawImage(i, 0, 0, e, t), u(a, r)
                                })), i.src = t, e.abrupt("return", c);
                            case 9:
                                return e.abrupt("return", void 0);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function u(e, t) {
                for (var n = .9; n > 0;) {
                    var r = e.toDataURL("image/jpeg", n);
                    if (!(r.length > t)) return r;
                    n -= .1
                }
            }

            function c(e, t, n) {
                var r = document.createElement("canvas"),
                    a = r.getContext("2d"),
                    o = e.videoWidth / t,
                    i = e.videoHeight / t;
                if (r.width = o, r.height = i, a) return n && (a.translate(o, 0), a.scale(-1, 1)), a.drawImage(e, 0, 0, o, i), r
            }
        },
        73293: (e, t, n) => {
            "use strict";
            n.d(t, {
                xX: () => a,
                nD: () => i
            });
            var r = n(73902),
                a = "(max-width: 767px)",
                o = "(max-width: 1023px)";

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (0, r.ac)(e ? o : a)
            }
        },
        55557: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n.p + "304f7dc74c1ae5f32f7bfe14d39e8d3a.svg"
        },
        88017: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n.p + "dbfbb21a578de543833bea459f011e7f.svg"
        },
        5380: e => {
            "use strict";
            e.exports = JSON.parse('[{"modelUri":"tfjs/brows/2021_brows_coarse_2_erode3_ep462_compact/model.json","config":{"structure":{"imageInputIndex":0,"imageInputNames":[],"requiredInput":1,"requiredInputFormat":1,"mirrorInput":false,"outputAreas":[{"inputLocation":1,"positionIndex":-1,"zoomIndex":-1,"segmentationOutput":{"outputIndex":0,"outputNames":["Identity"],"barycenterOutputs":[{"xOutputNames":["Identity_1"],"xOutputIndex":1,"xArrayIndex":1,"yOutputNames":["Identity_1"],"yOutputIndex":1,"yArrayIndex":0,"segmentationClass":15,"SegmentationClass":15},{"xOutputNames":["Identity_1"],"xOutputIndex":1,"xArrayIndex":3,"yOutputNames":["Identity_1"],"yOutputIndex":1,"yArrayIndex":2,"segmentationClass":16,"SegmentationClass":16}],"inputMode":9,"needToSoftmaxOutput":false,"HasOutput":true,"BarycenterOutputs":[{"xOutputNames":["Identity_1"],"xOutputIndex":1,"xArrayIndex":1,"yOutputNames":["Identity_1"],"yOutputIndex":1,"yArrayIndex":0,"segmentationClass":15,"SegmentationClass":15},{"xOutputNames":["Identity_1"],"xOutputIndex":1,"xArrayIndex":3,"yOutputNames":["Identity_1"],"yOutputIndex":1,"yArrayIndex":2,"segmentationClass":16,"SegmentationClass":16}]},"keyPointOutput":{"outputIndex":-1,"outputNames":[],"outputType":0,"keyPointMap":null,"HasOutput":false}}]},"processing":{"outputAreas":[{"segmentationOutput":{"outputProcessingMode":3,"outputMostProbableClass":false,"probabilityMaps":[15,16]},"keyPointOutput":null}],"inputLocationMethods":[],"segmentationInputLocation":null,"keyPointInputLocation":null,"faceShapeFitterInputLocation":null}},"loadOnMainThread":false,"delegateType":273}]')
        },
        63856: e => {
            "use strict";
            e.exports = JSON.parse('[{"modelUri":"tfjs/coarse_21kp_byaxis/2021_refined_coarse_mb1_v3_ep4436_noheat_21kp/model.json","config":{"structure":{"imageInputIndex":0,"imageInputNames":[],"requiredInput":1,"requiredInputFormat":1,"mirrorInput":false,"outputAreas":[{"inputLocation":1,"positionIndex":-1,"zoomIndex":-1,"segmentationOutput":{"outputIndex":0,"outputNames":[],"barycenterOutputs":[],"inputMode":3,"needToSoftmaxOutput":false,"HasOutput":true,"BarycenterOutputs":[]},"keyPointOutput":{"outputIndex":1,"outputNames":[],"outputType":5,"keyPointMap":"WebCoarseModelMap_ReorderingForByAxisModels","HasOutput":true}}]},"processing":{"outputAreas":[{"segmentationOutput":{"outputProcessingMode":3,"outputMostProbableClass":true,"probabilityMaps":[3,1,5,8,9,7]},"keyPointOutput":{"outputProcessingMode":3,"blobProcessingMode":64,"blobFindingMode":1,"heatMapThreshold":0.1,"heatMapUpperThresholdDelta":0}}],"inputLocationMethods":[],"segmentationInputLocation":null,"keyPointInputLocation":null,"faceShapeFitterInputLocation":null,"lastOutputInfluence":1.6}},"loadOnMainThread":false,"delegateType":447},{"modelUri":"tfjs/mouth/david28_bilinear_kp-with-last-output.tfjs/model.json","config":{"structure":{"imageInputIndex":0,"imageInputNames":["input"],"requiredInput":4,"requiredInputFormat":0,"mirrorInput":false,"outputAreas":[{"inputLocation":4,"positionIndex":-1,"zoomIndex":-1,"segmentationOutput":{"outputIndex":0,"outputNames":["Identity","0","output"],"barycenterOutputs":[],"inputMode":5,"needToSoftmaxOutput":false,"HasOutput":true,"BarycenterOutputs":[]},"keyPointOutput":{"outputIndex":-1,"outputNames":[],"outputType":0,"keyPointMap":null,"HasOutput":false}}]},"processing":{"outputAreas":[{"segmentationOutput":{"outputProcessingMode":3,"outputMostProbableClass":false,"probabilityMaps":[13,14,5]},"keyPointOutput":null}],"inputLocationMethods":[3,2,1],"segmentationInputLocation":{"segmentationClass":5,"safetyScale":1},"keyPointInputLocation":{"sizeDeltaProportion":0.75,"positionDeltaProportion":0.4,"positionDeltaPerpendicularOffset":0,"horizontalPoints":false,"keyPoint1":11,"keyPoint2":3},"faceShapeFitterInputLocation":{"keyPointGroupName":"Mouth","locationSizeMultiplier":1.5,"linkedGroups":[{"subModelGroup":"UpperLipOuter","fullScreenGroup":"NoseBridge"},{"subModelGroup":"UpperLipInner","fullScreenGroup":"NoseBridge"},{"subModelGroup":"LowerLipOuter","fullScreenGroup":"Chin"},{"subModelGroup":"LowerLipInner","fullScreenGroup":"Chin"}],"allowNonAxisAlignedInput":true,"horizontalKeyPoint1":4,"horizontalKeyPoint2":5},"lastOutputInfluence":1.6}},"loadOnMainThread":false,"delegateType":447}]')
        },
        36227: e => {
            "use strict";
            e.exports = JSON.parse('[{"modelUri":"tfjs/coarse_21kp_byaxis/2021_refined_coarse_mb1_v3_ep4436_noheat_21kp/model.json","config":{"structure":{"imageInputIndex":0,"imageInputNames":[],"requiredInput":1,"requiredInputFormat":1,"mirrorInput":false,"outputAreas":[{"inputLocation":1,"positionIndex":-1,"zoomIndex":-1,"segmentationOutput":{"outputIndex":0,"outputNames":[],"barycenterOutputs":[],"inputMode":3,"needToSoftmaxOutput":false,"HasOutput":true,"BarycenterOutputs":[]},"keyPointOutput":{"outputIndex":1,"outputNames":[],"outputType":5,"keyPointMap":"WebCoarseModelMap_ReorderingForByAxisModels","HasOutput":true}}]},"processing":{"outputAreas":[{"segmentationOutput":{"outputProcessingMode":3,"outputMostProbableClass":true,"probabilityMaps":[3,1,5,8,9,7]},"keyPointOutput":{"outputProcessingMode":3,"blobProcessingMode":64,"blobFindingMode":1,"heatMapThreshold":0.1,"heatMapUpperThresholdDelta":0}}],"inputLocationMethods":[],"segmentationInputLocation":null,"keyPointInputLocation":null,"faceShapeFitterInputLocation":null,"lastOutputInfluence":1.6}},"loadOnMainThread":false,"delegateType":447},{"modelUri":"tfjs/eye/eye_swish2a_synth1_l/model.json","config":{"structure":{"imageInputIndex":0,"imageInputNames":[],"requiredInput":3,"requiredInputFormat":1,"mirrorInput":true,"outputAreas":[{"inputLocation":3,"positionIndex":-1,"zoomIndex":-1,"segmentationOutput":{"outputIndex":-1,"outputNames":[],"barycenterOutputs":[],"inputMode":4,"needToSoftmaxOutput":true,"HasOutput":false,"BarycenterOutputs":[]},"keyPointOutput":{"outputIndex":1,"outputNames":[],"outputType":0,"keyPointMap":"RightEyeMapMirrored","HasOutput":true}}]},"processing":{"outputAreas":[{"segmentationOutput":null,"keyPointOutput":{"outputProcessingMode":1,"blobProcessingMode":64,"blobFindingMode":0,"heatMapThreshold":0.15,"heatMapUpperThresholdDelta":0.2}}],"inputLocationMethods":[3,2,1],"segmentationInputLocation":{"segmentationClass":9,"safetyScale":1.5},"keyPointInputLocation":{"sizeDeltaProportion":0.9,"positionDeltaProportion":0.5,"positionDeltaPerpendicularOffset":0.25,"horizontalPoints":true,"keyPoint1":2,"keyPoint2":4},"faceShapeFitterInputLocation":{"keyPointGroupName":"RightEye","locationSizeMultiplier":2.5,"linkedGroups":[{"subModelGroup":"RightEyeUpper","fullScreenGroup":"Nose"},{"subModelGroup":"RightEyeLower","fullScreenGroup":"Nose"}],"allowNonAxisAlignedInput":true,"horizontalKeyPoint1":4,"horizontalKeyPoint2":5},"lastOutputInfluence":1.6}},"loadOnMainThread":false,"delegateType":447},{"modelUri":"tfjs/eye/eye_swish2a_synth1_l/model.json","config":{"structure":{"imageInputIndex":0,"imageInputNames":[],"requiredInput":2,"requiredInputFormat":1,"mirrorInput":false,"outputAreas":[{"inputLocation":2,"positionIndex":-1,"zoomIndex":-1,"segmentationOutput":{"outputIndex":-1,"outputNames":[],"barycenterOutputs":[],"inputMode":4,"needToSoftmaxOutput":true,"HasOutput":false,"BarycenterOutputs":[]},"keyPointOutput":{"outputIndex":1,"outputNames":[],"outputType":0,"keyPointMap":"LeftEyeMap","HasOutput":true}}]},"processing":{"outputAreas":[{"segmentationOutput":null,"keyPointOutput":{"outputProcessingMode":1,"blobProcessingMode":64,"blobFindingMode":0,"heatMapThreshold":0.15,"heatMapUpperThresholdDelta":0.2}}],"inputLocationMethods":[3,2,1],"segmentationInputLocation":{"segmentationClass":8,"safetyScale":1.5},"keyPointInputLocation":{"sizeDeltaProportion":0.9,"positionDeltaProportion":0.5,"positionDeltaPerpendicularOffset":0.25,"horizontalPoints":true,"keyPoint1":5,"keyPoint2":2},"faceShapeFitterInputLocation":{"keyPointGroupName":"LeftEye","locationSizeMultiplier":2.5,"linkedGroups":[{"subModelGroup":"LeftEyeUpper","fullScreenGroup":"Nose"},{"subModelGroup":"LeftEyeLower","fullScreenGroup":"Nose"}],"allowNonAxisAlignedInput":true,"horizontalKeyPoint1":4,"horizontalKeyPoint2":5},"lastOutputInfluence":1.6}},"loadOnMainThread":false,"delegateType":447}]')
        },
        56249: () => {}
    },
    e => {
        "use strict";
        e.O(0, [457, 550, 761, 284, 50], (() => {
            return t = 38358, e(e.s = t);
            var t
        }));
        e.O()
    }
]);
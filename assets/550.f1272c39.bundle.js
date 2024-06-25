(self.webpackChunkrose_inc_web = self.webpackChunkrose_inc_web || []).push([
    [550], {
        92976: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => He
            });
            var r = n(71672),
                o = n(35069),
                i = {},
                s = function() {
                    function e() {}
                    return e.setItem = function(e, t) {
                        return i[e] = t, i[e]
                    }, e.getItem = function(e) {
                        return Object.prototype.hasOwnProperty.call(i, e) ? i[e] : void 0
                    }, e.removeItem = function(e) {
                        return delete i[e]
                    }, e.clear = function() {
                        return i = {}
                    }, e
                }(),
                a = function() {
                    function e() {
                        try {
                            this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.amplify.test-ls", 1), this.storageWindow.removeItem("aws.amplify.test-ls")
                        } catch (e) {
                            this.storageWindow = s
                        }
                    }
                    return e.prototype.getStorage = function() {
                        return this.storageWindow
                    }, e
                }();
            var u = [{
                    type: "text/plain",
                    ext: "txt"
                }, {
                    type: "text/html",
                    ext: "html"
                }, {
                    type: "text/javascript",
                    ext: "js"
                }, {
                    type: "text/css",
                    ext: "css"
                }, {
                    type: "text/csv",
                    ext: "csv"
                }, {
                    type: "text/yaml",
                    ext: "yml"
                }, {
                    type: "text/yaml",
                    ext: "yaml"
                }, {
                    type: "text/calendar",
                    ext: "ics"
                }, {
                    type: "text/calendar",
                    ext: "ical"
                }, {
                    type: "image/apng",
                    ext: "apng"
                }, {
                    type: "image/bmp",
                    ext: "bmp"
                }, {
                    type: "image/gif",
                    ext: "gif"
                }, {
                    type: "image/x-icon",
                    ext: "ico"
                }, {
                    type: "image/x-icon",
                    ext: "cur"
                }, {
                    type: "image/jpeg",
                    ext: "jpg"
                }, {
                    type: "image/jpeg",
                    ext: "jpeg"
                }, {
                    type: "image/jpeg",
                    ext: "jfif"
                }, {
                    type: "image/jpeg",
                    ext: "pjp"
                }, {
                    type: "image/jpeg",
                    ext: "pjpeg"
                }, {
                    type: "image/png",
                    ext: "png"
                }, {
                    type: "image/svg+xml",
                    ext: "svg"
                }, {
                    type: "image/tiff",
                    ext: "tif"
                }, {
                    type: "image/tiff",
                    ext: "tiff"
                }, {
                    type: "image/webp",
                    ext: "webp"
                }, {
                    type: "application/json",
                    ext: "json"
                }, {
                    type: "application/xml",
                    ext: "xml"
                }, {
                    type: "application/x-sh",
                    ext: "sh"
                }, {
                    type: "application/zip",
                    ext: "zip"
                }, {
                    type: "application/x-rar-compressed",
                    ext: "rar"
                }, {
                    type: "application/x-tar",
                    ext: "tar"
                }, {
                    type: "application/x-bzip",
                    ext: "bz"
                }, {
                    type: "application/x-bzip2",
                    ext: "bz2"
                }, {
                    type: "application/pdf",
                    ext: "pdf"
                }, {
                    type: "application/java-archive",
                    ext: "jar"
                }, {
                    type: "application/msword",
                    ext: "doc"
                }, {
                    type: "application/vnd.ms-excel",
                    ext: "xls"
                }, {
                    type: "application/vnd.ms-excel",
                    ext: "xlsx"
                }, {
                    type: "message/rfc822",
                    ext: "eml"
                }],
                c = function(e) {
                    return void 0 === e && (e = {}), 0 === Object.keys(e).length
                },
                l = function(e, t, n) {
                    if (!e || !e.sort) return !1;
                    var r = n && "desc" === n ? -1 : 1;
                    return e.sort((function(e, n) {
                        var o = e[t],
                            i = n[t];
                        return void 0 === i ? void 0 === o ? 0 : 1 * r : void 0 === o || o < i ? -1 * r : o > i ? 1 * r : 0
                    })), !0
                },
                d = function(e, t) {
                    var n = Object.assign({}, e);
                    return t && ("string" == typeof t ? delete n[t] : t.forEach((function(e) {
                        delete n[e]
                    }))), n
                },
                f = function(e, t) {
                    void 0 === t && (t = "application/octet-stream");
                    var n = e.toLowerCase(),
                        r = u.filter((function(e) {
                            return n.endsWith("." + e.ext)
                        }));
                    return r.length > 0 ? r[0].type : t
                },
                h = function(e) {
                    var t = e.toLowerCase();
                    return !!t.startsWith("text/") || ("application/json" === t || "application/xml" === t || "application/sh" === t)
                },
                g = function() {
                    for (var e = "", t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = 32; n > 0; n -= 1) e += t[Math.floor(Math.random() * t.length)];
                    return e
                },
                p = function(e) {
                    if (e.isResolved) return e;
                    var t = !0,
                        n = !1,
                        r = !1,
                        o = e.then((function(e) {
                            return r = !0, t = !1, e
                        }), (function(e) {
                            throw n = !0, t = !1, e
                        }));
                    return o.isFullfilled = function() {
                        return r
                    }, o.isPending = function() {
                        return t
                    }, o.isRejected = function() {
                        return n
                    }, o
                },
                y = function() {
                    if ("undefined" == typeof self) return !1;
                    var e = self;
                    return void 0 !== e.WorkerGlobalScope && self instanceof e.WorkerGlobalScope
                },
                m = function() {
                    return {
                        isBrowser: "undefined" != typeof window && void 0 !== window.document,
                        isNode: "undefined" != typeof process && null != process.versions && null != process.versions.node
                    }
                },
                b = function(e, t, n) {
                    if (void 0 === t && (t = []), void 0 === n && (n = []), !w(e)) return e;
                    var r = {};
                    for (var o in e) {
                        if (e.hasOwnProperty(o)) r[t.includes(o) ? o : o[0].toLowerCase() + o.slice(1)] = n.includes(o) ? e[o] : b(e[o], t, n)
                    }
                    return r
                },
                v = function(e, t, n) {
                    if (void 0 === t && (t = []), void 0 === n && (n = []), !w(e)) return e;
                    var r = {};
                    for (var o in e) {
                        if (e.hasOwnProperty(o)) r[t.includes(o) ? o : o[0].toUpperCase() + o.slice(1)] = n.includes(o) ? e[o] : v(e[o], t, n)
                    }
                    return r
                },
                w = function(e) {
                    return !(!(e instanceof Object) || e instanceof Array || e instanceof Function || e instanceof Number || e instanceof String || e instanceof Boolean)
                },
                _ = function() {
                    function e() {}
                    return e.isEmpty = c, e.sortByField = l, e.objectLessAttributes = d, e.filenameToContentType = f, e.isTextFile = h, e.generateRandomString = g, e.makeQuerablePromise = p, e.isWebWorker = y, e.browserOrNode = m, e.transferKeyToLowerCase = b, e.transferKeyToUpperCase = v, e.isStrictObject = w, e
                }();
            var I, P = (I = function(e, t) {
                    return (I = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    I(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                S = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                A = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                k = function(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, o, i = n.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                },
                C = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(k(arguments[t]));
                    return e
                },
                U = new o.k("Util"),
                O = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.nonRetryable = !0, n
                    }
                    return P(t, e), t
                }(Error);

            function E(e, t, n, r) {
                return void 0 === r && (r = 1), S(this, void 0, void 0, (function() {
                    var o, i;
                    return A(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                if ("function" != typeof e) throw Error("functionToRetry must be a function");
                                U.debug(e.name + " attempt #" + r + " with this vars: " + JSON.stringify(t)), s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, , 8]), [4, e.apply(void 0, C(t))];
                            case 2:
                                return [2, s.sent()];
                            case 3:
                                if (o = s.sent(), U.debug("error on " + e.name, o), (a = o) && a.nonRetryable) throw U.debug(e.name + " non retryable error", o), o;
                                return i = n(r, t, o), U.debug(e.name + " retrying in " + i + " ms"), !1 === i ? [3, 6] : [4, new Promise((function(e) {
                                    return setTimeout(e, i)
                                }))];
                            case 4:
                                return s.sent(), [4, E(e, t, n, r + 1)];
                            case 5:
                                return [2, s.sent()];
                            case 6:
                                throw o;
                            case 7:
                                return [3, 8];
                            case 8:
                                return [2]
                        }
                        var a
                    }))
                }))
            }
            var T = function(e, t, n) {
                    return void 0 === n && (n = 3e5), E(e, t, function(e) {
                        return function(t) {
                            var n = 100 * Math.pow(2, t) + 100 * Math.random();
                            return !(n > e) && n
                        }
                    }(n))
                },
                j = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                x = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                F = new o.k("CognitoCredentials"),
                M = new Promise((function(e, t) {
                    return m().isBrowser ? (window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null) ? (F.debug("google api already loaded"), e()) : void setTimeout((function() {
                        return e()
                    }), 2e3) : (F.debug("not in the browser, directly resolved"), e())
                })),
                N = function() {
                    function e() {
                        this.initialized = !1, this.refreshGoogleToken = this.refreshGoogleToken.bind(this), this._refreshGoogleTokenImpl = this._refreshGoogleTokenImpl.bind(this)
                    }
                    return e.prototype.refreshGoogleToken = function() {
                        return j(this, void 0, void 0, (function() {
                            return x(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.initialized ? [3, 2] : (F.debug("need to wait for the Google SDK loaded"), [4, M]);
                                    case 1:
                                        e.sent(), this.initialized = !0, F.debug("finish waiting"), e.label = 2;
                                    case 2:
                                        return [2, this._refreshGoogleTokenImpl()]
                                }
                            }))
                        }))
                    }, e.prototype._refreshGoogleTokenImpl = function() {
                        var e = null;
                        return m().isBrowser && (e = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null), e ? new Promise((function(t, n) {
                            e.getAuthInstance().then((function(e) {
                                e || (F.debug("google Auth undefined"), n(new O("google Auth undefined")));
                                var r = e.currentUser.get();
                                r.isSignedIn() ? (F.debug("refreshing the google access token"), r.reloadAuthResponse().then((function(e) {
                                    var n = e.id_token,
                                        r = e.expires_at;
                                    t({
                                        token: n,
                                        expires_at: r
                                    })
                                })).catch((function(e) {
                                    e && "network_error" === e.error ? n("Network error reloading google auth response") : n(new O("Failed to reload google auth response"))
                                }))) : n(new O("User is not signed in with Google"))
                            })).catch((function(e) {
                                F.debug("Failed to refresh google token", e), n(new O("Failed to refresh google token"))
                            }))
                        })) : (F.debug("no gapi auth2 available"), Promise.reject("no gapi auth2 available"))
                    }, e
                }();
            var R = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                L = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                G = new o.k("CognitoCredentials"),
                D = new Promise((function(e, t) {
                    return m().isBrowser ? window.FB ? (G.debug("FB SDK already loaded"), e()) : void setTimeout((function() {
                        return e()
                    }), 2e3) : (G.debug("not in the browser, directly resolved"), e())
                })),
                H = function() {
                    function e() {
                        this.initialized = !1, this.refreshFacebookToken = this.refreshFacebookToken.bind(this), this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this)
                    }
                    return e.prototype.refreshFacebookToken = function() {
                        return R(this, void 0, void 0, (function() {
                            return L(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.initialized ? [3, 2] : (G.debug("need to wait for the Facebook SDK loaded"), [4, D]);
                                    case 1:
                                        e.sent(), this.initialized = !0, G.debug("finish waiting"), e.label = 2;
                                    case 2:
                                        return [2, this._refreshFacebookTokenImpl()]
                                }
                            }))
                        }))
                    }, e.prototype._refreshFacebookTokenImpl = function() {
                        var e = null;
                        if (m().isBrowser && (e = window.FB), !e) {
                            var t = "no fb sdk available";
                            return G.debug(t), Promise.reject(new O(t))
                        }
                        // return new Promise((function(t, n) {
                        //     e.getLoginStatus((function(e) {
                        //         if (e && e.authResponse) {
                        //             var r = e.authResponse,
                        //                 o = r.accessToken,
                        //                 i = 1e3 * r.expiresIn + (new Date).getTime();
                        //             if (!o) {
                        //                 s = "the jwtToken is undefined";
                        //                 G.debug(s), n(new O(s))
                        //             }
                        //             t({
                        //                 token: o,
                        //                 expires_at: i
                        //             })
                        //         } else {
                        //             var s = "no response from facebook when refreshing the jwt token";
                        //             G.debug(s), n(new O(s))
                        //         }
                        //     }), {
                        //         scope: "public_profile,email"
                        //     })
                        // }))
                    }, e
                }();
            var W = new N,
                Q = new H,
                V = "aws-amplify/3.8.21",
                q = {
                    userAgent: V + " js",
                    product: "",
                    navigator: null,
                    isReactNative: !1
                };
            if ("undefined" != typeof navigator && navigator.product) switch (q.product = navigator.product || "", q.navigator = navigator || null, navigator.product) {
                case "ReactNative":
                    q.userAgent = V + " react-native", q.isReactNative = !0;
                    break;
                default:
                    q.userAgent = V + " js", q.isReactNative = !1
            }
            var z = function() {
                return q.userAgent
            };
            var B = function(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, o, i = n.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                },
                K = new o.k("Amplify"),
                Y = new(function() {
                    function e() {
                        this._components = [], this._config = {}, this._modules = {}, this.Auth = null, this.Analytics = null, this.API = null, this.Credentials = null, this.Storage = null, this.I18n = null, this.Cache = null, this.PubSub = null, this.Interactions = null, this.Pushnotification = null, this.UI = null, this.XR = null, this.Predictions = null, this.DataStore = null, this.Logger = o.k, this.ServiceWorker = null
                    }
                    return e.prototype.register = function(e) {
                        K.debug("component registered in amplify", e), this._components.push(e), "function" == typeof e.getModuleName ? (this._modules[e.getModuleName()] = e, this[e.getModuleName()] = e) : K.debug("no getModuleName method for component", e), e.configure(this._config)
                    }, e.prototype.configure = function(e) {
                        var t = this;
                        return e ? (this._config = Object.assign(this._config, e), K.debug("amplify config", this._config), Object.entries(this._modules).forEach((function(e) {
                            var n = B(e, 2),
                                r = (n[0], n[1]);
                            Object.keys(r).forEach((function(e) {
                                t._modules[e] && (r[e] = t._modules[e])
                            }))
                        })), this._components.map((function(e) {
                            e.configure(t._config)
                        })), this._config) : this._config
                    }, e.prototype.addPluggable = function(e) {
                        e && e.getCategory && "function" == typeof e.getCategory && this._components.map((function(t) {
                            t.addPluggable && "function" == typeof t.addPluggable && t.addPluggable(e)
                        }))
                    }, e
                }());
            var J = n(98134),
                X = n(76388),
                Z = n(87362),
                $ = n(98706),
                ee = function() {
                    return (ee = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                te = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                ne = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                re = new o.k("Credentials"),
                oe = new(function() {
                    function e(e) {
                        this._gettingCredPromise = null, this._refreshHandlers = {}, this.Auth = void 0, this.configure(e), this._refreshHandlers.google = W.refreshGoogleToken, this._refreshHandlers.facebook = Q.refreshFacebookToken
                    }
                    return e.prototype.getModuleName = function() {
                        return "Credentials"
                    }, e.prototype.getCredSource = function() {
                        return this._credentials_source
                    }, e.prototype.configure = function(e) {
                        if (!e) return this._config || {};
                        this._config = Object.assign({}, this._config, e);
                        var t = this._config.refreshHandlers;
                        return t && (this._refreshHandlers = ee(ee({}, this._refreshHandlers), t)), this._storage = this._config.storage, this._storage || (this._storage = (new a).getStorage()), this._storageSync = Promise.resolve(), "function" == typeof this._storage.sync && (this._storageSync = this._storage.sync()), this._config
                    }, e.prototype.get = function() {
                        return re.debug("getting credentials"), this._pickupCredentials()
                    }, e.prototype._pickupCredentials = function() {
                        return re.debug("picking up credentials"), this._gettingCredPromise && this._gettingCredPromise.isPending() ? re.debug("getting old cred promise") : (re.debug("getting new cred promise"), this._gettingCredPromise = p(this._keepAlive())), this._gettingCredPromise
                    }, e.prototype._keepAlive = function() {
                        return te(this, void 0, void 0, (function() {
                            var e, t, n, r, o, i, s;
                            return ne(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (re.debug("checking if credentials exists and not expired"), (e = this._credentials) && !this._isExpired(e) && !this._isPastTTL()) return re.debug("credentials not changed and not expired, directly return"), [2, Promise.resolve(e)];
                                        if (re.debug("need to get a new credential or refresh the existing one"), t = this.Auth, !(n = void 0 === t ? Y.Auth : t) || "function" != typeof n.currentUserCredentials) return [2, Promise.reject("No Auth module registered in Amplify")];
                                        if (this._isExpired(e) || !this._isPastTTL()) return [3, 6];
                                        re.debug("ttl has passed but token is not yet expired"), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 5, , 6]), [4, n.currentUserPoolUser()];
                                    case 2:
                                        return r = a.sent(), [4, n.currentSession()];
                                    case 3:
                                        return o = a.sent(), i = o.refreshToken, [4, new Promise((function(e, t) {
                                            r.refreshSession(i, (function(n, r) {
                                                return n ? t(n) : e(r)
                                            }))
                                        }))];
                                    case 4:
                                        return a.sent(), [3, 6];
                                    case 5:
                                        return s = a.sent(), re.debug("Error attempting to refreshing the session", s), [3, 6];
                                    case 6:
                                        return [2, n.currentUserCredentials()]
                                }
                            }))
                        }))
                    }, e.prototype.refreshFederatedToken = function(e) {
                        re.debug("Getting federated credentials");
                        var t = e.provider,
                            n = e.user,
                            r = e.token,
                            o = e.identity_id,
                            i = e.expires_at;
                        i = 1970 === new Date(i).getFullYear() ? 1e3 * i : i;
                        var s = this;
                        return re.debug("checking if federated jwt token expired"), i > (new Date).getTime() ? (re.debug("token not expired"), this._setCredentialsFromFederation({
                            provider: t,
                            token: r,
                            user: n,
                            identity_id: o,
                            expires_at: i
                        })) : s._refreshHandlers[t] && "function" == typeof s._refreshHandlers[t] ? (re.debug("getting refreshed jwt token from federation provider"), this._providerRefreshWithRetry({
                            refreshHandler: s._refreshHandlers[t],
                            provider: t,
                            user: n
                        })) : (re.debug("no refresh handler for provider:", t), this.clear(), Promise.reject("no refresh handler for provider"))
                    }, e.prototype._providerRefreshWithRetry = function(e) {
                        var t = this,
                            n = e.refreshHandler,
                            r = e.provider,
                            o = e.user;
                        return T(n, [], 1e4).then((function(e) {
                            return re.debug("refresh federated token sucessfully", e), t._setCredentialsFromFederation({
                                provider: r,
                                token: e.token,
                                user: o,
                                identity_id: e.identity_id,
                                expires_at: e.expires_at
                            })
                        })).catch((function(e) {
                            return "string" == typeof e && 0 === e.toLowerCase().lastIndexOf("network error", e.length) || t.clear(), re.debug("refresh federated token failed", e), Promise.reject("refreshing federation token failed: " + e)
                        }))
                    }, e.prototype._isExpired = function(e) {
                        if (!e) return re.debug("no credentials for expiration check"), !0;
                        re.debug("are these credentials expired?", e);
                        var t = Date.now();
                        return e.expiration.getTime() <= t
                    }, e.prototype._isPastTTL = function() {
                        return this._nextCredentialsRefresh <= Date.now()
                    }, e.prototype._setCredentialsForGuest = function() {
                        return te(this, void 0, void 0, (function() {
                            var e, t, n, r, o, i, s, a, u = this;
                            return ne(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (re.debug("setting credentials for guest"), e = this._config, t = e.identityPoolId, n = e.region, e.mandatorySignIn) return [2, Promise.reject("cannot get guest credentials when mandatory signin enabled")];
                                        if (!t) return re.debug("No Cognito Identity pool provided for unauthenticated access"), [2, Promise.reject("No Cognito Identity pool provided for unauthenticated access")];
                                        if (!n) return re.debug("region is not configured for getting the credentials"), [2, Promise.reject("region is not configured for getting the credentials")];
                                        r = void 0, c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, this._storageSync];
                                    case 2:
                                        return c.sent(), r = this._storage.getItem("CognitoIdentityId-" + t), this._identityId = r, [3, 4];
                                    case 3:
                                        return o = c.sent(), re.debug("Failed to get the cached identityId", o), [3, 4];
                                    case 4:
                                        return i = new Z.Q({
                                            region: n,
                                            customUserAgent: z()
                                        }), s = void 0, r ? (a = {
                                            identityId: r,
                                            client: i
                                        }, s = (0, J.o)(a)()) : s = function() {
                                            return te(u, void 0, void 0, (function() {
                                                var e, n;
                                                return ne(this, (function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return [4, i.send(new $.n({
                                                                IdentityPoolId: t
                                                            }))];
                                                        case 1:
                                                            return e = r.sent().IdentityId, this._identityId = e, n = {
                                                                client: i,
                                                                identityId: e
                                                            }, [2, (0, J.o)(n)()]
                                                    }
                                                }))
                                            }))
                                        }().catch((function(e) {
                                            return te(u, void 0, void 0, (function() {
                                                return ne(this, (function(t) {
                                                    throw e
                                                }))
                                            }))
                                        })), [2, this._loadCredentials(s, "guest", !1, null).then((function(e) {
                                            return e
                                        })).catch((function(e) {
                                            return te(u, void 0, void 0, (function() {
                                                var n = this;
                                                return ne(this, (function(o) {
                                                    return "ResourceNotFoundException" === e.name && e.message === "Identity '" + r + "' not found." ? (re.debug("Failed to load guest credentials"), this._storage.removeItem("CognitoIdentityId-" + t), s = function() {
                                                        return te(n, void 0, void 0, (function() {
                                                            var e, n;
                                                            return ne(this, (function(r) {
                                                                switch (r.label) {
                                                                    case 0:
                                                                        return [4, i.send(new $.n({
                                                                            IdentityPoolId: t
                                                                        }))];
                                                                    case 1:
                                                                        return e = r.sent().IdentityId, this._identityId = e, n = {
                                                                            client: i,
                                                                            identityId: e
                                                                        }, [2, (0, J.o)(n)()]
                                                                }
                                                            }))
                                                        }))
                                                    }().catch((function(e) {
                                                        return te(n, void 0, void 0, (function() {
                                                            return ne(this, (function(t) {
                                                                throw e
                                                            }))
                                                        }))
                                                    })), [2, this._loadCredentials(s, "guest", !1, null)]) : [2, e]
                                                }))
                                            }))
                                        }))]
                                }
                            }))
                        }))
                    }, e.prototype._setCredentialsFromFederation = function(e) {
                        var t = e.provider,
                            n = e.token,
                            r = e.identity_id,
                            o = {
                                google: "accounts.google.com",
                                facebook: "graph.facebook.com",
                                amazon: "www.amazon.com",
                                developer: "cognito-identity.amazonaws.com"
                            }[t] || t;
                        if (!o) return Promise.reject("You must specify a federated provider");
                        var i = {};
                        i[o] = n;
                        var s = this._config,
                            a = s.identityPoolId,
                            u = s.region;
                        if (!a) return re.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
                        if (!u) return re.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
                        var c = new Z.Q({
                                region: u,
                                customUserAgent: z()
                            }),
                            l = void 0;
                        if (r) {
                            var d = {
                                identityId: r,
                                logins: i,
                                client: c
                            };
                            l = (0, J.o)(d)()
                        } else {
                            d = {
                                logins: i,
                                identityPoolId: a,
                                client: c
                            };
                            l = (0, X.s)(d)()
                        }
                        return this._loadCredentials(l, "federated", !0, e)
                    }, e.prototype._setCredentialsFromSession = function(e) {
                        var t = this;
                        re.debug("set credentials from session");
                        var n = e.getIdToken().getJwtToken(),
                            r = this._config,
                            o = r.region,
                            i = r.userPoolId,
                            s = r.identityPoolId;
                        if (!s) return re.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
                        if (!o) return re.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
                        var a = {};
                        a["cognito-idp." + o + ".amazonaws.com/" + i] = n;
                        var u = new Z.Q({
                                region: o,
                                customUserAgent: z()
                            }),
                            c = te(t, void 0, void 0, (function() {
                                var e, t;
                                return ne(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, u.send(new $.n({
                                                IdentityPoolId: s,
                                                Logins: a
                                            }))];
                                        case 1:
                                            return e = n.sent().IdentityId, this._identityId = e, t = {
                                                client: u,
                                                logins: a,
                                                identityId: e
                                            }, [2, (0, J.o)(t)()]
                                    }
                                }))
                            })).catch((function(e) {
                                return te(t, void 0, void 0, (function() {
                                    return ne(this, (function(t) {
                                        throw e
                                    }))
                                }))
                            }));
                        return this._loadCredentials(c, "userPool", !0, null)
                    }, e.prototype._loadCredentials = function(e, t, n, r) {
                        var o = this,
                            i = this,
                            s = this._config.identityPoolId;
                        return new Promise((function(a, u) {
                            e.then((function(e) {
                                return te(o, void 0, void 0, (function() {
                                    var o, u, c, l, d, f;
                                    return ne(this, (function(h) {
                                        switch (h.label) {
                                            case 0:
                                                if (re.debug("Load credentials successfully", e), this._identityId && !e.identityId && (e.identityId = this._identityId), i._credentials = e, i._credentials.authenticated = n, i._credentials_source = t, i._nextCredentialsRefresh = (new Date).getTime() + 3e6, "federated" === t) {
                                                    o = Object.assign({
                                                        id: this._credentials.identityId
                                                    }, r.user), u = r.provider, c = r.token, l = r.expires_at, d = r.identity_id;
                                                    try {
                                                        this._storage.setItem("aws-amplify-federatedInfo", JSON.stringify({
                                                            provider: u,
                                                            token: c,
                                                            user: o,
                                                            expires_at: l,
                                                            identity_id: d
                                                        }))
                                                    } catch (e) {
                                                        re.debug("Failed to put federated info into auth storage", e)
                                                    }
                                                }
                                                if ("guest" !== t) return [3, 4];
                                                h.label = 1;
                                            case 1:
                                                return h.trys.push([1, 3, , 4]), [4, this._storageSync];
                                            case 2:
                                                return h.sent(), this._storage.setItem("CognitoIdentityId-" + s, e.identityId), [3, 4];
                                            case 3:
                                                return f = h.sent(), re.debug("Failed to cache identityId", f), [3, 4];
                                            case 4:
                                                return a(i._credentials), [2]
                                        }
                                    }))
                                }))
                            })).catch((function(t) {
                                if (t) return re.debug("Failed to load credentials", e), re.debug("Error loading credentials", t), void u(t)
                            }))
                        }))
                    }, e.prototype.set = function(e, t) {
                        return "session" === t ? this._setCredentialsFromSession(e) : "federation" === t ? this._setCredentialsFromFederation(e) : "guest" === t ? this._setCredentialsForGuest() : (re.debug("no source specified for setting credentials"), Promise.reject("invalid source"))
                    }, e.prototype.clear = function() {
                        return te(this, void 0, void 0, (function() {
                            return ne(this, (function(e) {
                                return this._credentials = null, this._credentials_source = null, re.debug("removing aws-amplify-federatedInfo from storage"), this._storage.removeItem("aws-amplify-federatedInfo"), [2]
                            }))
                        }))
                    }, e.prototype.shear = function(e) {
                        return {
                            accessKeyId: e.accessKeyId,
                            sessionToken: e.sessionToken,
                            secretAccessKey: e.secretAccessKey,
                            identityId: e.identityId,
                            authenticated: e.authenticated
                        }
                    }, e
                }())(null);
            Y.register(oe);
            var ie = new o.k("Parser"),
                se = function(e) {
                    var t, n = {};
                    if (e.aws_mobile_analytics_app_id) {
                        var r = {
                            AWSPinpoint: {
                                appId: e.aws_mobile_analytics_app_id,
                                region: e.aws_mobile_analytics_app_region
                            }
                        };
                        n.Analytics = r
                    }
                    return (e.aws_cognito_identity_pool_id || e.aws_user_pools_id) && (n.Auth = {
                        userPoolId: e.aws_user_pools_id,
                        userPoolWebClientId: e.aws_user_pools_web_client_id,
                        region: e.aws_cognito_region,
                        identityPoolId: e.aws_cognito_identity_pool_id,
                        identityPoolRegion: e.aws_cognito_region,
                        mandatorySignIn: "enable" === e.aws_mandatory_sign_in
                    }), t = e.aws_user_files_s3_bucket ? {
                        AWSS3: {
                            bucket: e.aws_user_files_s3_bucket,
                            region: e.aws_user_files_s3_bucket_region,
                            dangerouslyConnectToHttpEndpointForTesting: e.aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing
                        }
                    } : e ? e.Storage || e : {}, n.Analytics = Object.assign({}, n.Analytics, e.Analytics), n.Auth = Object.assign({}, n.Auth, e.Auth), n.Storage = Object.assign({}, t), ie.debug("parse config", e, "to amplifyconfig", n), n
                },
                ae = function() {
                    function e() {}
                    return e.parseMobilehubConfig = se, e
                }();
            var ue = n(69585),
                ce = m().isBrowser,
                le = function() {
                    function e(e) {
                        void 0 === e && (e = {}), this.cookies = new ue.Z, this.store = ce ? window.localStorage : Object.create(null), this.cookies = e.req ? new ue.Z(e.req.headers.cookie) : new ue.Z, Object.assign(this.store, this.cookies.getAll())
                    }
                    return Object.defineProperty(e.prototype, "length", {
                        get: function() {
                            return Object.entries(this.store).length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.clear = function() {
                        var e = this;
                        Array.from(new Array(this.length)).map((function(t, n) {
                            return e.key(n)
                        })).forEach((function(t) {
                            return e.removeItem(t)
                        }))
                    }, e.prototype.getItem = function(e) {
                        return this.getLocalItem(e)
                    }, e.prototype.getLocalItem = function(e) {
                        return Object.prototype.hasOwnProperty.call(this.store, e) ? this.store[e] : null
                    }, e.prototype.getUniversalItem = function(e) {
                        return this.cookies.get(e)
                    }, e.prototype.key = function(e) {
                        return Object.keys(this.store)[e]
                    }, e.prototype.removeItem = function(e) {
                        this.removeLocalItem(e), this.removeUniversalItem(e)
                    }, e.prototype.removeLocalItem = function(e) {
                        delete this.store[e]
                    }, e.prototype.removeUniversalItem = function(e) {
                        this.cookies.remove(e, {
                            path: "/"
                        })
                    }, e.prototype.setItem = function(e, t) {
                        switch (this.setLocalItem(e, t), e.split(".").pop()) {
                            case "LastAuthUser":
                            case "accessToken":
                            case "idToken":
                                this.setUniversalItem(e, t)
                        }
                    }, e.prototype.setLocalItem = function(e, t) {
                        this.store[e] = t
                    }, e.prototype.setUniversalItem = function(e, t) {
                        this.cookies.set(e, t, {
                            path: "/",
                            sameSite: !0,
                            secure: "localhost" !== window.location.hostname
                        })
                    }, e
                }();
            var de = n(20490),
                fe = n(2043),
                he = n(8575),
                ge = function(e) {
                    var t = window.open(e, "_self");
                    return t ? Promise.resolve(t) : Promise.reject()
                },
                pe = n(52153),
                ye = n.n(pe),
                me = n(98269),
                be = n.n(me),
                ve = function() {
                    return (ve = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                we = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                _e = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                Ie = function(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, o, i = n.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                },
                Pe = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default",
                Se = function(e, t, n) {
                    de.Xb.dispatch("auth", {
                        event: e,
                        data: t,
                        message: n
                    }, "Auth", Pe)
                },
                Ae = new o.k("OAuth");
            const ke = function() {
                function e(e) {
                    var t = e.config,
                        n = e.cognitoClientId,
                        r = e.scopes,
                        o = void 0 === r ? [] : r;
                    if (this._urlOpener = t.urlOpener || ge, this._config = t, this._cognitoClientId = n, !this.isValidScopes(o)) throw Error("scopes must be a String Array");
                    this._scopes = o
                }
                return e.prototype.isValidScopes = function(e) {
                    return Array.isArray(e) && e.every((function(e) {
                        return "string" == typeof e
                    }))
                }, e.prototype.oauthSignIn = function(e, t, n, o, i, s) {
                    void 0 === e && (e = "code"), void 0 === i && (i = r.JG.Cognito);
                    var a = this._generateState(32),
                        u = s ? a + "-" + s.split("").map((function(e) {
                            return e.charCodeAt(0).toString(16).padStart(2, "0")
                        })).join("") : a;
                    ! function(e) {
                        window.sessionStorage.setItem("oauth_state", e)
                    }(u);
                    var c, l = this._generateRandom(128);
                    c = l, window.sessionStorage.setItem("ouath_pkce_key", c);
                    var d = this._generateChallenge(l),
                        f = this._scopes.join(" "),
                        h = "https://" + t + "/oauth2/authorize?" + Object.entries(ve(ve({
                            redirect_uri: n,
                            response_type: e,
                            client_id: o,
                            identity_provider: i,
                            scope: f,
                            state: u
                        }, "code" === e ? {
                            code_challenge: d
                        } : {}), "code" === e ? {
                            code_challenge_method: "S256"
                        } : {})).map((function(e) {
                            var t = Ie(e, 2),
                                n = t[0],
                                r = t[1];
                            return encodeURIComponent(n) + "=" + encodeURIComponent(r)
                        })).join("&");
                    Ae.debug("Redirecting to " + h), this._urlOpener(h, n)
                }, e.prototype._handleCodeFlow = function(e) {
                    return we(this, void 0, void 0, (function() {
                        var t, n, o, i, s, a, u, c, l, d, f, h;
                        return _e(this, (function(g) {
                            switch (g.label) {
                                case 0:
                                    return (t = ((0, he.Qc)(e).query || "").split("&").map((function(e) {
                                        return e.split("=")
                                    })).reduce((function(e, t) {
                                        var n, r = Ie(t, 2),
                                            o = r[0],
                                            i = r[1];
                                        return ve(ve({}, e), ((n = {})[o] = i, n))
                                    }), {
                                        code: void 0
                                    }).code) && (0, he.Qc)(e).pathname === (0, he.Qc)(this._config.redirectSignIn).pathname ? (n = "https://" + this._config.domain + "/oauth2/token", Se("codeFlow", {}, "Retrieving tokens from " + n), o = (0, r.ic)(this._config) ? this._cognitoClientId : this._config.clientID, i = (0, r.ic)(this._config) ? this._config.redirectSignIn : this._config.redirectUri, p = window.sessionStorage.getItem("ouath_pkce_key"), window.sessionStorage.removeItem("ouath_pkce_key"), a = ve({
                                        grant_type: "authorization_code",
                                        code: t,
                                        client_id: o,
                                        redirect_uri: i
                                    }, (s = p) ? {
                                        code_verifier: s
                                    } : {}), Ae.debug("Calling token endpoint: " + n + " with", a), u = Object.entries(a).map((function(e) {
                                        var t = Ie(e, 2),
                                            n = t[0],
                                            r = t[1];
                                        return encodeURIComponent(n) + "=" + encodeURIComponent(r)
                                    })).join("&"), [4, fetch(n, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        },
                                        body: u
                                    })]) : [2];
                                case 1:
                                    return [4, g.sent().json()];
                                case 2:
                                    if (c = g.sent(), l = c.access_token, d = c.refresh_token, f = c.id_token, h = c.error) throw new Error(h);
                                    return [2, {
                                        accessToken: l,
                                        refreshToken: d,
                                        idToken: f
                                    }]
                            }
                            var p
                        }))
                    }))
                }, e.prototype._handleImplicitFlow = function(e) {
                    return we(this, void 0, void 0, (function() {
                        var t, n, r;
                        return _e(this, (function(o) {
                            return t = ((0, he.Qc)(e).hash || "#").substr(1).split("&").map((function(e) {
                                return e.split("=")
                            })).reduce((function(e, t) {
                                var n, r = Ie(t, 2),
                                    o = r[0],
                                    i = r[1];
                                return ve(ve({}, e), ((n = {})[o] = i, n))
                            }), {
                                id_token: void 0,
                                access_token: void 0
                            }), n = t.id_token, r = t.access_token, Se("implicitFlow", {}, "Got tokens from " + e), Ae.debug("Retrieving implicit tokens from " + e + " with"), [2, {
                                accessToken: r,
                                idToken: n,
                                refreshToken: null
                            }]
                        }))
                    }))
                }, e.prototype.handleAuthResponse = function(e) {
                    return we(this, void 0, void 0, (function() {
                        var t, n, r, o, i, s, a;
                        return _e(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    if (u.trys.push([0, 5, , 6]), t = e ? ve(ve({}, ((0, he.Qc)(e).hash || "#").substr(1).split("&").map((function(e) {
                                            return e.split("=")
                                        })).reduce((function(e, t) {
                                            var n = Ie(t, 2),
                                                r = n[0],
                                                o = n[1];
                                            return e[r] = o, e
                                        }), {})), ((0, he.Qc)(e).query || "").split("&").map((function(e) {
                                            return e.split("=")
                                        })).reduce((function(e, t) {
                                            var n = Ie(t, 2),
                                                r = n[0],
                                                o = n[1];
                                            return e[r] = o, e
                                        }), {})) : {}, n = t.error, r = t.error_description, n) throw new Error(r);
                                    return o = this._validateState(t), Ae.debug("Starting " + this._config.responseType + " flow with " + e), "code" !== this._config.responseType ? [3, 2] : (i = [{}], [4, this._handleCodeFlow(e)]);
                                case 1:
                                    return [2, ve.apply(void 0, [ve.apply(void 0, i.concat([u.sent()])), {
                                        state: o
                                    }])];
                                case 2:
                                    return s = [{}], [4, this._handleImplicitFlow(e)];
                                case 3:
                                    return [2, ve.apply(void 0, [ve.apply(void 0, s.concat([u.sent()])), {
                                        state: o
                                    }])];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    throw a = u.sent(), Ae.error("Error handling auth response.", a), a;
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype._validateState = function(e) {
                    if (e) {
                        var t, n = (t = window.sessionStorage.getItem("oauth_state"), window.sessionStorage.removeItem("oauth_state"), t),
                            r = e.state;
                        if (n && n !== r) throw new Error("Invalid state in OAuth flow");
                        return r
                    }
                }, e.prototype.signOut = function() {
                    return we(this, void 0, void 0, (function() {
                        var e, t, n;
                        return _e(this, (function(o) {
                            return e = "https://" + this._config.domain + "/logout?", t = (0, r.ic)(this._config) ? this._cognitoClientId : this._config.oauth.clientID, n = (0, r.ic)(this._config) ? this._config.redirectSignOut : this._config.returnTo, e += Object.entries({
                                client_id: t,
                                logout_uri: encodeURIComponent(n)
                            }).map((function(e) {
                                var t = Ie(e, 2);
                                return t[0] + "=" + t[1]
                            })).join("&"), Se("oAuthSignOut", {
                                oAuth: "signOut"
                            }, "Signing out from " + e), Ae.debug("Signing out from " + e), [2, this._urlOpener(e)]
                        }))
                    }))
                }, e.prototype._generateState = function(e) {
                    for (var t = "", n = e, r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; n > 0; --n) t += r[Math.round(Math.random() * (r.length - 1))];
                    return t
                }, e.prototype._generateChallenge = function(e) {
                    return this._base64URL(ye()(e))
                }, e.prototype._base64URL = function(e) {
                    return e.toString(be()).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
                }, e.prototype._generateRandom = function(e) {
                    var t = new Uint8Array(e);
                    if ("undefined" != typeof window && window.crypto) window.crypto.getRandomValues(t);
                    else
                        for (var n = 0; n < e; n += 1) t[n] = Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~".length | 0;
                    return this._bufferToString(t)
                }, e.prototype._bufferToString = function(e) {
                    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = [], r = 0; r < e.byteLength; r += 1) {
                        var o = e[r] % t.length;
                        n.push(t[o])
                    }
                    return n.join("")
                }, e
            }();
            var Ce;
            ! function(e) {
                e.DEFAULT_MSG = "Authentication Error", e.EMPTY_USERNAME = "Username cannot be empty", e.INVALID_USERNAME = "The username should either be a string or one of the sign in types", e.EMPTY_PASSWORD = "Password cannot be empty", e.EMPTY_CODE = "Confirmation code cannot be empty", e.SIGN_UP_ERROR = "Error creating account", e.NO_MFA = "No valid MFA method provided", e.INVALID_MFA = "Invalid MFA type", e.EMPTY_CHALLENGE = "Challenge response cannot be empty", e.NO_USER_SESSION = "Failed to get the session because the user is empty"
            }(Ce || (Ce = {}));
            var Ue = function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(t, n)
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Oe = new o.k("AuthError"),
                Ee = function(e) {
                    function t(n) {
                        var r = this,
                            o = je[n],
                            i = o.message,
                            s = o.log;
                        return (r = e.call(this, i) || this).constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "AuthError", r.log = s || i, Oe.error(r.log), r
                    }
                    return Ue(t, e), t
                }(Error),
                Te = function(e) {
                    function t(n) {
                        var r = e.call(this, n) || this;
                        return r.constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "NoUserPoolError", r
                    }
                    return Ue(t, e), t
                }(Ee),
                je = {
                    noConfig: {
                        message: Ce.DEFAULT_MSG,
                        log: "\n            Error: Amplify has not been configured correctly.\n            This error is typically caused by one of the following scenarios:\n\n            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point\n                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information\n            \n            2. There might be multiple conflicting versions of amplify packages in your node_modules.\n\t\t\t\tRefer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)\n        "
                    },
                    missingAuthConfig: {
                        message: Ce.DEFAULT_MSG,
                        log: "\n            Error: Amplify has not been configured correctly. \n            The configuration object is missing required auth properties.\n            This error is typically caused by one of the following scenarios:\n\n            1. Did you run `amplify push` after adding auth via `amplify add auth`?\n                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information\n\n            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.\n        "
                    },
                    emptyUsername: {
                        message: Ce.EMPTY_USERNAME
                    },
                    invalidUsername: {
                        message: Ce.INVALID_USERNAME
                    },
                    emptyPassword: {
                        message: Ce.EMPTY_PASSWORD
                    },
                    emptyCode: {
                        message: Ce.EMPTY_CODE
                    },
                    signUpError: {
                        message: Ce.SIGN_UP_ERROR,
                        log: "The first parameter should either be non-null string or object"
                    },
                    noMFA: {
                        message: Ce.NO_MFA
                    },
                    invalidMFA: {
                        message: Ce.INVALID_MFA
                    },
                    emptyChallengeResponse: {
                        message: Ce.EMPTY_CHALLENGE
                    },
                    noUserSession: {
                        message: Ce.NO_USER_SESSION
                    },
                    default: {
                        message: Ce.DEFAULT_MSG
                    }
                },
                xe = function() {
                    return (xe = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                Fe = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                Me = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                Ne = function(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, o, i = n.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                },
                Re = new o.k("AuthClass"),
                Le = "aws.cognito.signin.user.admin",
                Ge = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default",
                De = function(e, t, n) {
                    de.Xb.dispatch("auth", {
                        event: e,
                        data: t,
                        message: n
                    }, "Auth", Ge)
                },
                He = new(function() {
                    function e(e) {
                        var t = this;
                        this.userPool = null, this.user = null, this.oAuthFlowInProgress = !1, this.Credentials = oe, this.wrapRefreshSessionCallback = function(e) {
                            return function(t, n) {
                                return n ? De("tokenRefresh", void 0, "New token retrieved") : De("tokenRefresh_failure", t, "Failed to retrieve new token"), e(t, n)
                            }
                        }, this.configure(e), this.currentCredentials = this.currentCredentials.bind(this), this.currentUserCredentials = this.currentUserCredentials.bind(this), de.Xb.listen("auth", (function(e) {
                            switch (e.payload.event) {
                                case "signIn":
                                    t._storage.setItem("amplify-signin-with-hostedUI", "false");
                                    break;
                                case "signOut":
                                    t._storage.removeItem("amplify-signin-with-hostedUI");
                                    break;
                                case "cognitoHostedUI":
                                    t._storage.setItem("amplify-signin-with-hostedUI", "true")
                            }
                        }))
                    }
                    return e.prototype.getModuleName = function() {
                        return "Auth"
                    }, e.prototype.configure = function(e) {
                        var t = this;
                        if (!e) return this._config || {};
                        Re.debug("configure Auth");
                        var n = Object.assign({}, this._config, ae.parseMobilehubConfig(e).Auth, e);
                        this._config = n;
                        var o = this._config,
                            i = o.userPoolId,
                            s = o.userPoolWebClientId,
                            u = o.cookieStorage,
                            c = o.oauth,
                            l = o.region,
                            d = o.identityPoolId,
                            f = o.mandatorySignIn,
                            h = o.refreshHandlers,
                            g = o.identityPoolRegion,
                            p = o.clientMetadata,
                            y = o.endpoint;
                        if (this._config.storage) {
                            if (!this._isValidAuthStorage(this._config.storage)) throw Re.error("The storage in the Auth config is not valid!"), new Error("Empty storage object");
                            this._storage = this._config.storage
                        } else this._storage = u ? new fe.eR(u) : e.ssr ? new le : (new a).getStorage();
                        if (this._storageSync = Promise.resolve(), "function" == typeof this._storage.sync && (this._storageSync = this._storage.sync()), i) {
                            var m = {
                                UserPoolId: i,
                                ClientId: s,
                                endpoint: y
                            };
                            m.Storage = this._storage, this.userPool = new fe.AM(m, this.wrapRefreshSessionCallback)
                        }
                        this.Credentials.configure({
                            mandatorySignIn: f,
                            region: g || l,
                            userPoolId: i,
                            identityPoolId: d,
                            refreshHandlers: h,
                            storage: this._storage
                        });
                        var b = c ? (0, r.ic)(this._config.oauth) ? c : c.awsCognito : void 0;
                        if (b) {
                            var v = Object.assign({
                                cognitoClientId: s,
                                UserPoolId: i,
                                domain: b.domain,
                                scopes: b.scope,
                                redirectSignIn: b.redirectSignIn,
                                redirectSignOut: b.redirectSignOut,
                                responseType: b.responseType,
                                Storage: this._storage,
                                urlOpener: b.urlOpener,
                                clientMetadata: p
                            }, b.options);
                            this._oAuthHandler = new ke({
                                scopes: v.scopes,
                                config: v,
                                cognitoClientId: v.cognitoClientId
                            });
                            var w = {};
                            ! function(e) {
                                if (_.browserOrNode().isBrowser && window.location) e({
                                    url: window.location.href
                                });
                                else if (!_.browserOrNode().isNode) throw new Error("Not supported")
                            }((function(e) {
                                var n = e.url;
                                w[n] || (w[n] = !0, t._handleAuthResponse(n))
                            }))
                        }
                        return De("configured", null, "The Auth category has been configured successfully"), this._config
                    }, e.prototype.signUp = function(e) {
                        for (var t = this, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                        if (!this.userPool) return this.rejectNoUserPool();
                        var i, s = null,
                            a = null,
                            u = [],
                            c = null;
                        if (e && "string" == typeof e) {
                            s = e, a = n ? n[0] : null;
                            var l = n ? n[1] : null,
                                d = n ? n[2] : null;
                            l && u.push(new fe.KC({
                                Name: "email",
                                Value: l
                            })), d && u.push(new fe.KC({
                                Name: "phone_number",
                                Value: d
                            }))
                        } else {
                            if (!e || "object" != typeof e) return this.rejectAuthError(r.Qg.SignUpError);
                            s = e.username, a = e.password, e && e.clientMetadata ? i = e.clientMetadata : this._config.clientMetadata && (i = this._config.clientMetadata);
                            var f = e.attributes;
                            f && Object.keys(f).map((function(e) {
                                u.push(new fe.KC({
                                    Name: e,
                                    Value: f[e]
                                }))
                            }));
                            var h = e.validationData;
                            h && (c = [], Object.keys(h).map((function(e) {
                                c.push(new fe.KC({
                                    Name: e,
                                    Value: h[e]
                                }))
                            })))
                        }
                        return s ? a ? (Re.debug("signUp attrs:", u), Re.debug("signUp validation data:", c), new Promise((function(e, n) {
                            t.userPool.signUp(s, a, u, c, (function(t, r) {
                                t ? (De("signUp_failure", t, s + " failed to signup"), n(t)) : (De("signUp", r, s + " has signed up successfully"), e(r))
                            }), i)
                        }))) : this.rejectAuthError(r.Qg.EmptyPassword) : this.rejectAuthError(r.Qg.EmptyUsername)
                    }, e.prototype.confirmSignUp = function(e, t, n) {
                        if (!this.userPool) return this.rejectNoUserPool();
                        if (!e) return this.rejectAuthError(r.Qg.EmptyUsername);
                        if (!t) return this.rejectAuthError(r.Qg.EmptyCode);
                        var o, i = this.createCognitoUser(e),
                            s = !n || "boolean" != typeof n.forceAliasCreation || n.forceAliasCreation;
                        return n && n.clientMetadata ? o = n.clientMetadata : this._config.clientMetadata && (o = this._config.clientMetadata), new Promise((function(e, n) {
                            i.confirmRegistration(t, s, (function(t, r) {
                                t ? n(t) : e(r)
                            }), o)
                        }))
                    }, e.prototype.resendSignUp = function(e, t) {
                        if (void 0 === t && (t = this._config.clientMetadata), !this.userPool) return this.rejectNoUserPool();
                        if (!e) return this.rejectAuthError(r.Qg.EmptyUsername);
                        var n = this.createCognitoUser(e);
                        return new Promise((function(e, r) {
                            n.resendConfirmationCode((function(t, n) {
                                t ? r(t) : e(n)
                            }), t)
                        }))
                    }, e.prototype.signIn = function(e, t, n) {
                        if (void 0 === n && (n = this._config.clientMetadata), !this.userPool) return this.rejectNoUserPool();
                        var o = null,
                            i = null,
                            s = {};
                        if ("string" == typeof e) o = e, i = t;
                        else {
                            if (!(0, r.lg)(e)) return this.rejectAuthError(r.Qg.InvalidUsername);
                            void 0 !== t && Re.warn("The password should be defined under the first parameter object!"), o = e.username, i = e.password, s = e.validationData
                        }
                        if (!o) return this.rejectAuthError(r.Qg.EmptyUsername);
                        var a = new fe.sD({
                            Username: o,
                            Password: i,
                            ValidationData: s,
                            ClientMetadata: n
                        });
                        return i ? this.signInWithPassword(a) : this.signInWithoutPassword(a)
                    }, e.prototype.authCallbacks = function(e, t, n) {
                        var r = this,
                            o = this;
                        return {
                            onSuccess: function(i) {
                                return Fe(r, void 0, void 0, (function() {
                                    var r, s, a, u;
                                    return Me(this, (function(c) {
                                        switch (c.label) {
                                            case 0:
                                                Re.debug(i), delete e.challengeName, delete e.challengeParam, c.label = 1;
                                            case 1:
                                                return c.trys.push([1, 4, 5, 9]), [4, this.Credentials.clear()];
                                            case 2:
                                                return c.sent(), [4, this.Credentials.set(i, "session")];
                                            case 3:
                                                return r = c.sent(), Re.debug("succeed to get cognito credentials", r), [3, 9];
                                            case 4:
                                                return s = c.sent(), Re.debug("cannot get cognito credentials", s), [3, 9];
                                            case 5:
                                                return c.trys.push([5, 7, , 8]), [4, this.currentUserPoolUser()];
                                            case 6:
                                                return a = c.sent(), o.user = a, De("signIn", a, "A user " + e.getUsername() + " has been signed in"), t(a), [3, 8];
                                            case 7:
                                                return u = c.sent(), Re.error("Failed to get the signed in user", u), n(u), [3, 8];
                                            case 8:
                                                return [7];
                                            case 9:
                                                return [2]
                                        }
                                    }))
                                }))
                            },
                            onFailure: function(t) {
                                Re.debug("signIn failure", t), De("signIn_failure", t, e.getUsername() + " failed to signin"), n(t)
                            },
                            customChallenge: function(n) {
                                Re.debug("signIn custom challenge answer required"), e.challengeName = "CUSTOM_CHALLENGE", e.challengeParam = n, t(e)
                            },
                            mfaRequired: function(n, r) {
                                Re.debug("signIn MFA required"), e.challengeName = n, e.challengeParam = r, t(e)
                            },
                            mfaSetup: function(n, r) {
                                Re.debug("signIn mfa setup", n), e.challengeName = n, e.challengeParam = r, t(e)
                            },
                            newPasswordRequired: function(n, r) {
                                Re.debug("signIn new password"), e.challengeName = "NEW_PASSWORD_REQUIRED", e.challengeParam = {
                                    userAttributes: n,
                                    requiredAttributes: r
                                }, t(e)
                            },
                            totpRequired: function(n, r) {
                                Re.debug("signIn totpRequired"), e.challengeName = n, e.challengeParam = r, t(e)
                            },
                            selectMFAType: function(n, r) {
                                Re.debug("signIn selectMFAType", n), e.challengeName = n, e.challengeParam = r, t(e)
                            }
                        }
                    }, e.prototype.signInWithPassword = function(e) {
                        var t = this;
                        if (this.pendingSignIn) throw new Error("Pending sign-in attempt already in progress");
                        var n = this.createCognitoUser(e.getUsername());
                        return this.pendingSignIn = new Promise((function(r, o) {
                            n.authenticateUser(e, t.authCallbacks(n, (function(e) {
                                t.pendingSignIn = null, r(e)
                            }), (function(e) {
                                t.pendingSignIn = null, o(e)
                            })))
                        })), this.pendingSignIn
                    }, e.prototype.signInWithoutPassword = function(e) {
                        var t = this,
                            n = this.createCognitoUser(e.getUsername());
                        return n.setAuthenticationFlowType("CUSTOM_AUTH"), new Promise((function(r, o) {
                            n.initiateAuth(e, t.authCallbacks(n, r, o))
                        }))
                    }, e.prototype.getMFAOptions = function(e) {
                        return new Promise((function(t, n) {
                            e.getMFAOptions((function(e, r) {
                                if (e) return Re.debug("get MFA Options failed", e), void n(e);
                                Re.debug("get MFA options success", r), t(r)
                            }))
                        }))
                    }, e.prototype.getPreferredMFA = function(e, t) {
                        var n = this,
                            r = this;
                        return new Promise((function(o, i) {
                            var s = n._config.clientMetadata,
                                a = !!t && t.bypassCache;
                            e.getUserData((function(e, t) {
                                if (e) return Re.debug("getting preferred mfa failed", e), void i(e);
                                var n = r._getMfaTypeFromUserData(t);
                                return n ? void o(n) : void i("invalid MFA Type")
                            }), {
                                bypassCache: a,
                                clientMetadata: s
                            })
                        }))
                    }, e.prototype._getMfaTypeFromUserData = function(e) {
                        var t = null,
                            n = e.PreferredMfaSetting;
                        if (n) t = n;
                        else {
                            var r = e.UserMFASettingList;
                            if (r) 0 === r.length ? t = "NOMFA" : Re.debug("invalid case for getPreferredMFA", e);
                            else t = e.MFAOptions ? "SMS_MFA" : "NOMFA"
                        }
                        return t
                    }, e.prototype._getUserData = function(e, t) {
                        return new Promise((function(n, r) {
                            e.getUserData((function(e, t) {
                                return e ? (Re.debug("getting user data failed", e), void r(e)) : void n(t)
                            }), t)
                        }))
                    }, e.prototype.setPreferredMFA = function(e, t) {
                        return Fe(this, void 0, void 0, (function() {
                            var n, o, i, s, a, u;
                            return Me(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return n = this._config.clientMetadata, [4, this._getUserData(e, {
                                            bypassCache: !0,
                                            clientMetadata: n
                                        })];
                                    case 1:
                                        switch (o = c.sent(), i = null, s = null, t) {
                                            case "TOTP":
                                                return [3, 2];
                                            case "SMS":
                                                return [3, 3];
                                            case "NOMFA":
                                                return [3, 4]
                                        }
                                        return [3, 6];
                                    case 2:
                                        return s = {
                                            PreferredMfa: !0,
                                            Enabled: !0
                                        }, [3, 7];
                                    case 3:
                                        return i = {
                                            PreferredMfa: !0,
                                            Enabled: !0
                                        }, [3, 7];
                                    case 4:
                                        return a = o.UserMFASettingList, [4, this._getMfaTypeFromUserData(o)];
                                    case 5:
                                        if ("NOMFA" === (u = c.sent())) return [2, Promise.resolve("No change for mfa type")];
                                        if ("SMS_MFA" === u) i = {
                                            PreferredMfa: !1,
                                            Enabled: !1
                                        };
                                        else {
                                            if ("SOFTWARE_TOKEN_MFA" !== u) return [2, this.rejectAuthError(r.Qg.InvalidMFA)];
                                            s = {
                                                PreferredMfa: !1,
                                                Enabled: !1
                                            }
                                        }
                                        return a && 0 !== a.length && a.forEach((function(e) {
                                            "SMS_MFA" === e ? i = {
                                                PreferredMfa: !1,
                                                Enabled: !1
                                            } : "SOFTWARE_TOKEN_MFA" === e && (s = {
                                                PreferredMfa: !1,
                                                Enabled: !1
                                            })
                                        })), [3, 7];
                                    case 6:
                                        return Re.debug("no validmfa method provided"), [2, this.rejectAuthError(r.Qg.NoMFA)];
                                    case 7:
                                        return this, [2, new Promise((function(t, r) {
                                            e.setUserMfaPreference(i, s, (function(o, i) {
                                                if (o) return Re.debug("Set user mfa preference error", o), r(o);
                                                Re.debug("Set user mfa success", i), Re.debug("Caching the latest user data into local"), e.getUserData((function(e, n) {
                                                    return e ? (Re.debug("getting user data failed", e), r(e)) : t(i)
                                                }), {
                                                    bypassCache: !0,
                                                    clientMetadata: n
                                                })
                                            }))
                                        }))]
                                }
                            }))
                        }))
                    }, e.prototype.disableSMS = function(e) {
                        return new Promise((function(t, n) {
                            e.disableMFA((function(e, r) {
                                if (e) return Re.debug("disable mfa failed", e), void n(e);
                                Re.debug("disable mfa succeed", r), t(r)
                            }))
                        }))
                    }, e.prototype.enableSMS = function(e) {
                        return new Promise((function(t, n) {
                            e.enableMFA((function(e, r) {
                                if (e) return Re.debug("enable mfa failed", e), void n(e);
                                Re.debug("enable mfa succeed", r), t(r)
                            }))
                        }))
                    }, e.prototype.setupTOTP = function(e) {
                        return new Promise((function(t, n) {
                            e.associateSoftwareToken({
                                onFailure: function(e) {
                                    Re.debug("associateSoftwareToken failed", e), n(e)
                                },
                                associateSecretCode: function(e) {
                                    Re.debug("associateSoftwareToken sucess", e), t(e)
                                }
                            })
                        }))
                    }, e.prototype.verifyTotpToken = function(e, t) {
                        return Re.debug("verification totp token", e, t), new Promise((function(n, r) {
                            e.verifySoftwareToken(t, "My TOTP device", {
                                onFailure: function(e) {
                                    Re.debug("verifyTotpToken failed", e), r(e)
                                },
                                onSuccess: function(t) {
                                    De("signIn", e, "A user " + e.getUsername() + " has been signed in"), Re.debug("verifyTotpToken success", t), n(t)
                                }
                            })
                        }))
                    }, e.prototype.confirmSignIn = function(e, t, n, o) {
                        var i = this;
                        if (void 0 === o && (o = this._config.clientMetadata), !t) return this.rejectAuthError(r.Qg.EmptyCode);
                        var s = this;
                        return new Promise((function(r, a) {
                            e.sendMFACode(t, {
                                onSuccess: function(t) {
                                    return Fe(i, void 0, void 0, (function() {
                                        var n, o;
                                        return Me(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    Re.debug(t), i.label = 1;
                                                case 1:
                                                    return i.trys.push([1, 4, 5, 6]), [4, this.Credentials.clear()];
                                                case 2:
                                                    return i.sent(), [4, this.Credentials.set(t, "session")];
                                                case 3:
                                                    return n = i.sent(), Re.debug("succeed to get cognito credentials", n), [3, 6];
                                                case 4:
                                                    return o = i.sent(), Re.debug("cannot get cognito credentials", o), [3, 6];
                                                case 5:
                                                    return s.user = e, De("signIn", e, "A user " + e.getUsername() + " has been signed in"), r(e), [7];
                                                case 6:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                },
                                onFailure: function(e) {
                                    Re.debug("confirm signIn failure", e), a(e)
                                }
                            }, n, o)
                        }))
                    }, e.prototype.completeNewPassword = function(e, t, n, o) {
                        var i = this;
                        if (void 0 === n && (n = {}), void 0 === o && (o = this._config.clientMetadata), !t) return this.rejectAuthError(r.Qg.EmptyPassword);
                        var s = this;
                        return new Promise((function(r, a) {
                            e.completeNewPasswordChallenge(t, n, {
                                onSuccess: function(t) {
                                    return Fe(i, void 0, void 0, (function() {
                                        var n, o;
                                        return Me(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    Re.debug(t), i.label = 1;
                                                case 1:
                                                    return i.trys.push([1, 4, 5, 6]), [4, this.Credentials.clear()];
                                                case 2:
                                                    return i.sent(), [4, this.Credentials.set(t, "session")];
                                                case 3:
                                                    return n = i.sent(), Re.debug("succeed to get cognito credentials", n), [3, 6];
                                                case 4:
                                                    return o = i.sent(), Re.debug("cannot get cognito credentials", o), [3, 6];
                                                case 5:
                                                    return s.user = e, De("signIn", e, "A user " + e.getUsername() + " has been signed in"), r(e), [7];
                                                case 6:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                },
                                onFailure: function(e) {
                                    Re.debug("completeNewPassword failure", e), De("completeNewPassword_failure", e, i.user + " failed to complete the new password flow"), a(e)
                                },
                                mfaRequired: function(t, n) {
                                    Re.debug("signIn MFA required"), e.challengeName = t, e.challengeParam = n, r(e)
                                },
                                mfaSetup: function(t, n) {
                                    Re.debug("signIn mfa setup", t), e.challengeName = t, e.challengeParam = n, r(e)
                                },
                                totpRequired: function(t, n) {
                                    Re.debug("signIn mfa setup", t), e.challengeName = t, e.challengeParam = n, r(e)
                                }
                            }, o)
                        }))
                    }, e.prototype.sendCustomChallengeAnswer = function(e, t, n) {
                        var o = this;
                        if (void 0 === n && (n = this._config.clientMetadata), !this.userPool) return this.rejectNoUserPool();
                        if (!t) return this.rejectAuthError(r.Qg.EmptyChallengeResponse);
                        return new Promise((function(r, i) {
                            e.sendCustomChallengeAnswer(t, o.authCallbacks(e, r, i), n)
                        }))
                    }, e.prototype.updateUserAttributes = function(e, t, n) {
                        void 0 === n && (n = this._config.clientMetadata);
                        var r = [],
                            o = this;
                        return new Promise((function(i, s) {
                            o.userSession(e).then((function(o) {
                                for (var a in t)
                                    if ("sub" !== a && a.indexOf("_verified") < 0) {
                                        var u = {
                                            Name: a,
                                            Value: t[a]
                                        };
                                        r.push(u)
                                    }
                                e.updateAttributes(r, (function(e, t) {
                                    return e ? s(e) : i(t)
                                }), n)
                            }))
                        }))
                    }, e.prototype.userAttributes = function(e) {
                        var t = this;
                        return new Promise((function(n, r) {
                            t.userSession(e).then((function(t) {
                                e.getUserAttributes((function(e, t) {
                                    e ? r(e) : n(t)
                                }))
                            }))
                        }))
                    }, e.prototype.verifiedContact = function(e) {
                        var t = this;
                        return this.userAttributes(e).then((function(e) {
                            var n = t.attributesToObject(e),
                                r = {},
                                o = {};
                            return n.email && (n.email_verified ? o.email = n.email : r.email = n.email), n.phone_number && (n.phone_number_verified ? o.phone_number = n.phone_number : r.phone_number = n.phone_number), {
                                verified: o,
                                unverified: r
                            }
                        }))
                    }, e.prototype.currentUserPoolUser = function(e) {
                        var t = this;
                        return this.userPool ? new Promise((function(n, r) {
                            t._storageSync.then((function() {
                                return Fe(t, void 0, void 0, (function() {
                                    var t, o, i = this;
                                    return Me(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                return this.isOAuthInProgress() ? (Re.debug("OAuth signIn in progress, waiting for resolution..."), [4, new Promise((function(e) {
                                                    var t = setTimeout((function() {
                                                        Re.debug("OAuth signIn in progress timeout"), de.Xb.remove("auth", n), e()
                                                    }), 1e4);

                                                    function n(r) {
                                                        var o = r.payload.event;
                                                        "cognitoHostedUI" !== o && "cognitoHostedUI_failure" !== o || (Re.debug("OAuth signIn resolved: " + o), clearTimeout(t), de.Xb.remove("auth", n), e())
                                                    }
                                                    de.Xb.listen("auth", n)
                                                }))]) : [3, 2];
                                            case 1:
                                                s.sent(), s.label = 2;
                                            case 2:
                                                return (t = this.userPool.getCurrentUser()) ? (o = this._config.clientMetadata, t.getSession((function(o, s) {
                                                    return Fe(i, void 0, void 0, (function() {
                                                        var i, a, u, c = this;
                                                        return Me(this, (function(l) {
                                                            switch (l.label) {
                                                                case 0:
                                                                    return o ? (Re.debug("Failed to get the user session", o), r(o), [2]) : (i = !!e && e.bypassCache) ? [4, this.Credentials.clear()] : [3, 2];
                                                                case 1:
                                                                    l.sent(), l.label = 2;
                                                                case 2:
                                                                    return a = this._config.clientMetadata, u = s.getAccessToken().decodePayload().scope, (void 0 === u ? "" : u).split(" ").includes(Le) ? (t.getUserData((function(e, o) {
                                                                        if (e) return Re.debug("getting user data failed", e), void("User is disabled." === e.message || "User does not exist." === e.message || "Access Token has been revoked" === e.message ? r(e) : n(t));
                                                                        for (var i = o.PreferredMfaSetting || "NOMFA", s = [], a = 0; a < o.UserAttributes.length; a++) {
                                                                            var u = {
                                                                                    Name: o.UserAttributes[a].Name,
                                                                                    Value: o.UserAttributes[a].Value
                                                                                },
                                                                                l = new fe.KC(u);
                                                                            s.push(l)
                                                                        }
                                                                        var d = c.attributesToObject(s);
                                                                        return Object.assign(t, {
                                                                            attributes: d,
                                                                            preferredMFA: i
                                                                        }), n(t)
                                                                    }), {
                                                                        bypassCache: i,
                                                                        clientMetadata: a
                                                                    }), [2]) : (Re.debug("Unable to get the user data because the " + Le + " is not in the scopes of the access token"), [2, n(t)])
                                                            }
                                                        }))
                                                    }))
                                                }), {
                                                    clientMetadata: o
                                                }), [2]) : (Re.debug("Failed to get user from user pool"), r("No current user"), [2])
                                        }
                                    }))
                                }))
                            })).catch((function(e) {
                                return Re.debug("Failed to sync cache info into memory", e), r(e)
                            }))
                        })) : this.rejectNoUserPool()
                    }, e.prototype.isOAuthInProgress = function() {
                        return this.oAuthFlowInProgress
                    }, e.prototype.currentAuthenticatedUser = function(e) {
                        return Fe(this, void 0, void 0, (function() {
                            var t, n, r, o, i;
                            return Me(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        Re.debug("getting current authenticated user"), t = null, s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, this._storageSync];
                                    case 2:
                                        return s.sent(), [3, 4];
                                    case 3:
                                        throw n = s.sent(), Re.debug("Failed to sync cache info into memory", n), n;
                                    case 4:
                                        try {
                                            (r = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"))) && (t = xe(xe({}, r.user), {
                                                token: r.token
                                            }))
                                        } catch (e) {
                                            Re.debug("cannot load federated user from auth storage")
                                        }
                                        return t ? (this.user = t, Re.debug("get current authenticated federated user", this.user), [2, this.user]) : [3, 5];
                                    case 5:
                                        Re.debug("get current authenticated userpool user"), o = null, s.label = 6;
                                    case 6:
                                        return s.trys.push([6, 8, , 9]), [4, this.currentUserPoolUser(e)];
                                    case 7:
                                        return o = s.sent(), [3, 9];
                                    case 8:
                                        return "No userPool" === (i = s.sent()) && Re.error("Cannot get the current user because the user pool is missing. Please make sure the Auth module is configured with a valid Cognito User Pool ID"), Re.debug("The user is not authenticated by the error", i), [2, Promise.reject("The user is not authenticated")];
                                    case 9:
                                        return this.user = o, [2, this.user]
                                }
                            }))
                        }))
                    }, e.prototype.currentSession = function() {
                        var e = this;
                        return Re.debug("Getting current session"), this.userPool ? new Promise((function(t, n) {
                            e.currentUserPoolUser().then((function(r) {
                                e.userSession(r).then((function(e) {
                                    t(e)
                                })).catch((function(e) {
                                    Re.debug("Failed to get the current session", e), n(e)
                                }))
                            })).catch((function(e) {
                                Re.debug("Failed to get the current user", e), n(e)
                            }))
                        })) : Promise.reject()
                    }, e.prototype.userSession = function(e) {
                        if (!e) return Re.debug("the user is null"), this.rejectAuthError(r.Qg.NoUserSession);
                        var t = this._config.clientMetadata;
                        return new Promise((function(n, r) {
                            Re.debug("Getting the session from this user:", e), e.getSession((function(t, o) {
                                return t ? (Re.debug("Failed to get the session from user", e), void r(t)) : (Re.debug("Succeed to get the user session", o), void n(o))
                            }), {
                                clientMetadata: t
                            })
                        }))
                    }, e.prototype.currentUserCredentials = function() {
                        return Fe(this, void 0, void 0, (function() {
                            var e, t, n = this;
                            return Me(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        Re.debug("Getting current user credentials"), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this._storageSync];
                                    case 2:
                                        return r.sent(), [3, 4];
                                    case 3:
                                        throw e = r.sent(), Re.debug("Failed to sync cache info into memory", e), e;
                                    case 4:
                                        t = null;
                                        try {
                                            t = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"))
                                        } catch (e) {
                                            Re.debug("failed to get or parse item aws-amplify-federatedInfo", e)
                                        }
                                        return t ? [2, this.Credentials.refreshFederatedToken(t)] : [2, this.currentSession().then((function(e) {
                                            return Re.debug("getting session success", e), n.Credentials.set(e, "session")
                                        })).catch((function(e) {
                                            return Re.debug("getting session failed", e), n.Credentials.set(null, "guest")
                                        }))]
                                }
                            }))
                        }))
                    }, e.prototype.currentCredentials = function() {
                        return Re.debug("getting current credentials"), this.Credentials.get()
                    }, e.prototype.verifyUserAttribute = function(e, t, n) {
                        return void 0 === n && (n = this._config.clientMetadata), new Promise((function(r, o) {
                            e.getAttributeVerificationCode(t, {
                                onSuccess: function() {
                                    return r()
                                },
                                onFailure: function(e) {
                                    return o(e)
                                }
                            }, n)
                        }))
                    }, e.prototype.verifyUserAttributeSubmit = function(e, t, n) {
                        return n ? new Promise((function(r, o) {
                            e.verifyAttribute(t, n, {
                                onSuccess: function(e) {
                                    r(e)
                                },
                                onFailure: function(e) {
                                    o(e)
                                }
                            })
                        })) : this.rejectAuthError(r.Qg.EmptyCode)
                    }, e.prototype.verifyCurrentUserAttribute = function(e) {
                        var t = this;
                        return t.currentUserPoolUser().then((function(n) {
                            return t.verifyUserAttribute(n, e)
                        }))
                    }, e.prototype.verifyCurrentUserAttributeSubmit = function(e, t) {
                        var n = this;
                        return n.currentUserPoolUser().then((function(r) {
                            return n.verifyUserAttributeSubmit(r, e, t)
                        }))
                    }, e.prototype.cognitoIdentitySignOut = function(e, t) {
                        return Fe(this, void 0, void 0, (function() {
                            var n, r, o = this;
                            return Me(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this._storageSync];
                                    case 1:
                                        return i.sent(), [3, 3];
                                    case 2:
                                        throw n = i.sent(), Re.debug("Failed to sync cache info into memory", n), n;
                                    case 3:
                                        return r = this._oAuthHandler && "true" === this._storage.getItem("amplify-signin-with-hostedUI"), [2, new Promise((function(n, i) {
                                            if (e && e.global) {
                                                Re.debug("user global sign out", t);
                                                var s = o._config.clientMetadata;
                                                t.getSession((function(e, s) {
                                                    if (e) return Re.debug("failed to get the user session", e), i(e);
                                                    t.globalSignOut({
                                                        onSuccess: function(e) {
                                                            if (Re.debug("global sign out success"), !r) return n();
                                                            o.oAuthSignOutRedirect(n, i)
                                                        },
                                                        onFailure: function(e) {
                                                            return Re.debug("global sign out failed", e), i(e)
                                                        }
                                                    })
                                                }), {
                                                    clientMetadata: s
                                                })
                                            } else {
                                                if (Re.debug("user sign out", t), t.signOut(), !r) return n();
                                                o.oAuthSignOutRedirect(n, i)
                                            }
                                        }))]
                                }
                            }))
                        }))
                    }, e.prototype.oAuthSignOutRedirect = function(e, t) {
                        _.browserOrNode().isBrowser ? this.oAuthSignOutRedirectOrReject(t) : this.oAuthSignOutAndResolve(e)
                    }, e.prototype.oAuthSignOutAndResolve = function(e) {
                        this._oAuthHandler.signOut(), e()
                    }, e.prototype.oAuthSignOutRedirectOrReject = function(e) {
                        this._oAuthHandler.signOut(), setTimeout((function() {
                            return e("Signout timeout fail")
                        }), 3e3)
                    }, e.prototype.signOut = function(e) {
                        return Fe(this, void 0, void 0, (function() {
                            var t;
                            return Me(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.cleanCachedItems()];
                                    case 1:
                                        return n.sent(), [3, 3];
                                    case 2:
                                        return n.sent(), Re.debug("failed to clear cached items"), [3, 3];
                                    case 3:
                                        return this.userPool ? (t = this.userPool.getCurrentUser()) ? [4, this.cognitoIdentitySignOut(e, t)] : [3, 5] : [3, 7];
                                    case 4:
                                        return n.sent(), [3, 6];
                                    case 5:
                                        Re.debug("no current Cognito user"), n.label = 6;
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        Re.debug("no Congito User pool"), n.label = 8;
                                    case 8:
                                        return De("signOut", this.user, "A user has been signed out"), this.user = null, [2]
                                }
                            }))
                        }))
                    }, e.prototype.cleanCachedItems = function() {
                        return Fe(this, void 0, void 0, (function() {
                            return Me(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.Credentials.clear()];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.changePassword = function(e, t, n, r) {
                        var o = this;
                        return void 0 === r && (r = this._config.clientMetadata), new Promise((function(i, s) {
                            o.userSession(e).then((function(o) {
                                e.changePassword(t, n, (function(e, t) {
                                    return e ? (Re.debug("change password failure", e), s(e)) : i(t)
                                }), r)
                            }))
                        }))
                    }, e.prototype.forgotPassword = function(e, t) {
                        if (void 0 === t && (t = this._config.clientMetadata), !this.userPool) return this.rejectNoUserPool();
                        if (!e) return this.rejectAuthError(r.Qg.EmptyUsername);
                        var n = this.createCognitoUser(e);
                        return new Promise((function(r, o) {
                            n.forgotPassword({
                                onSuccess: function() {
                                    r()
                                },
                                onFailure: function(t) {
                                    Re.debug("forgot password failure", t), De("forgotPassword_failure", t, e + " forgotPassword failed"), o(t)
                                },
                                inputVerificationCode: function(t) {
                                    De("forgotPassword", n, e + " has initiated forgot password flow"), r(t)
                                }
                            }, t)
                        }))
                    }, e.prototype.forgotPasswordSubmit = function(e, t, n, o) {
                        if (void 0 === o && (o = this._config.clientMetadata), !this.userPool) return this.rejectNoUserPool();
                        if (!e) return this.rejectAuthError(r.Qg.EmptyUsername);
                        if (!t) return this.rejectAuthError(r.Qg.EmptyCode);
                        if (!n) return this.rejectAuthError(r.Qg.EmptyPassword);
                        var i = this.createCognitoUser(e);
                        return new Promise((function(r, s) {
                            i.confirmPassword(t, n, {
                                onSuccess: function() {
                                    De("forgotPasswordSubmit", i, e + " forgotPasswordSubmit successful"), r()
                                },
                                onFailure: function(t) {
                                    De("forgotPasswordSubmit_failure", t, e + " forgotPasswordSubmit failed"), s(t)
                                }
                            }, o)
                        }))
                    }, e.prototype.currentUserInfo = function() {
                        return Fe(this, void 0, void 0, (function() {
                            var e, t, n, r, o, i, s;
                            return Me(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return (e = this.Credentials.getCredSource()) && "aws" !== e && "userPool" !== e ? [3, 9] : [4, this.currentUserPoolUser().catch((function(e) {
                                            return Re.debug(e)
                                        }))];
                                    case 1:
                                        if (!(s = a.sent())) return [2, null];
                                        a.label = 2;
                                    case 2:
                                        return a.trys.push([2, 8, , 9]), [4, this.userAttributes(s)];
                                    case 3:
                                        t = a.sent(), n = this.attributesToObject(t), r = null, a.label = 4;
                                    case 4:
                                        return a.trys.push([4, 6, , 7]), [4, this.currentCredentials()];
                                    case 5:
                                        return r = a.sent(), [3, 7];
                                    case 6:
                                        return o = a.sent(), Re.debug("Failed to retrieve credentials while getting current user info", o), [3, 7];
                                    case 7:
                                        return [2, {
                                            id: r ? r.identityId : void 0,
                                            username: s.getUsername(),
                                            attributes: n
                                        }];
                                    case 8:
                                        return i = a.sent(), Re.debug("currentUserInfo error", i), [2, {}];
                                    case 9:
                                        return "federated" === e ? [2, (s = this.user) || {}] : [2]
                                }
                            }))
                        }))
                    }, e.prototype.federatedSignIn = function(e, t, n) {
                        return Fe(this, void 0, void 0, (function() {
                            var o, i, s, a, u, c, l, d, f, h, g;
                            return Me(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        if (!this._config.identityPoolId && !this._config.userPoolId) throw new Error("Federation requires either a User Pool or Identity Pool in config");
                                        if (void 0 === e && this._config.identityPoolId && !this._config.userPoolId) throw new Error("Federation with Identity Pools requires tokens passed as arguments");
                                        return (0, r.SU)(e) || (0, r.zB)(e) || (0, r.Ay)(e) || void 0 === e ? (o = e || {
                                            provider: r.JG.Cognito
                                        }, u = (0, r.SU)(o) ? o.provider : o.customProvider, (0, r.SU)(o), i = o.customState, this._config.userPoolId && (s = (0, r.ic)(this._config.oauth) ? this._config.userPoolWebClientId : this._config.oauth.clientID, a = (0, r.ic)(this._config.oauth) ? this._config.oauth.redirectSignIn : this._config.oauth.redirectUri, this._oAuthHandler.oauthSignIn(this._config.oauth.responseType, this._config.oauth.domain, a, s, u, i)), [3, 4]) : [3, 1];
                                    case 1:
                                        u = e;
                                        try {
                                            (c = JSON.stringify(JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")).user)) && Re.warn("There is already a signed in user: " + c + " in your app.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou should not call Auth.federatedSignIn method again as it may cause unexpected behavior.")
                                        } catch (e) {}
                                        return l = t.token, d = t.identity_id, f = t.expires_at, [4, this.Credentials.set({
                                            provider: u,
                                            token: l,
                                            identity_id: d,
                                            user: n,
                                            expires_at: f
                                        }, "federation")];
                                    case 2:
                                        return h = p.sent(), [4, this.currentAuthenticatedUser()];
                                    case 3:
                                        return g = p.sent(), De("signIn", g, "A user " + g.username + " has been signed in"), Re.debug("federated sign in credentials", h), [2, h];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype._handleAuthResponse = function(e) {
                        return Fe(this, void 0, void 0, (function() {
                            var t, n, r, o, i, s, a, u, c, l, d, f, h, g;
                            return Me(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        if (this.oAuthFlowInProgress) return Re.debug("Skipping URL " + e + " current flow in progress"), [2];
                                        p.label = 1;
                                    case 1:
                                        if (p.trys.push([1, , 8, 9]), this.oAuthFlowInProgress = !0, !this._config.userPoolId) throw new Error("OAuth responses require a User Pool defined in config");
                                        if (De("parsingCallbackUrl", {
                                                url: e
                                            }, "The callback url is being parsed"), t = e || (_.browserOrNode().isBrowser ? window.location.href : ""), n = !!((0, he.Qc)(t).query || "").split("&").map((function(e) {
                                                return e.split("=")
                                            })).find((function(e) {
                                                var t = Ne(e, 1)[0];
                                                return "code" === t || "error" === t
                                            })), r = !!((0, he.Qc)(t).hash || "#").substr(1).split("&").map((function(e) {
                                                return e.split("=")
                                            })).find((function(e) {
                                                var t = Ne(e, 1)[0];
                                                return "access_token" === t || "error" === t
                                            })), !n && !r) return [3, 7];
                                        this._storage.setItem("amplify-redirected-from-hosted-ui", "true"), p.label = 2;
                                    case 2:
                                        return p.trys.push([2, 6, , 7]), [4, this._oAuthHandler.handleAuthResponse(t)];
                                    case 3:
                                        return o = p.sent(), i = o.accessToken, s = o.idToken, a = o.refreshToken, u = o.state, c = new fe.MZ({
                                            IdToken: new fe.xk({
                                                IdToken: s
                                            }),
                                            RefreshToken: new fe.bR({
                                                RefreshToken: a
                                            }),
                                            AccessToken: new fe.ZA({
                                                AccessToken: i
                                            })
                                        }), l = void 0, this._config.identityPoolId ? [4, this.Credentials.set(c, "session")] : [3, 5];
                                    case 4:
                                        l = p.sent(), Re.debug("AWS credentials", l), p.label = 5;
                                    case 5:
                                        return d = /-/.test(u), (f = this.createCognitoUser(c.getIdToken().decodePayload()["cognito:username"])).setSignInUserSession(c), window && void 0 !== window.history && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), De("signIn", f, "A user " + f.getUsername() + " has been signed in"), De("cognitoHostedUI", f, "A user " + f.getUsername() + " has been signed in via Cognito Hosted UI"), d && (h = u.split("-").splice(1).join("-"), De("customOAuthState", h.match(/.{2}/g).map((function(e) {
                                            return String.fromCharCode(parseInt(e, 16))
                                        })).join(""), "State for user " + f.getUsername())), [2, l];
                                    case 6:
                                        return g = p.sent(), Re.debug("Error in cognito hosted auth response", g), De("signIn_failure", g, "The OAuth response flow failed"), De("cognitoHostedUI_failure", g, "A failure occurred when returning to the Cognito Hosted UI"), De("customState_failure", g, "A failure occurred when returning state"), [3, 7];
                                    case 7:
                                        return [3, 9];
                                    case 8:
                                        return this.oAuthFlowInProgress = !1, [7];
                                    case 9:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.essentialCredentials = function(e) {
                        return {
                            accessKeyId: e.accessKeyId,
                            sessionToken: e.sessionToken,
                            secretAccessKey: e.secretAccessKey,
                            identityId: e.identityId,
                            authenticated: e.authenticated
                        }
                    }, e.prototype.attributesToObject = function(e) {
                        var t = {};
                        return e && e.map((function(e) {
                            "email_verified" === e.Name || "phone_number_verified" === e.Name ? t[e.Name] = "true" === e.Value || !0 === e.Value : t[e.Name] = e.Value
                        })), t
                    }, e.prototype.createCognitoUser = function(e) {
                        var t = {
                            Username: e,
                            Pool: this.userPool
                        };
                        t.Storage = this._storage;
                        var n = this._config.authenticationFlowType,
                            r = new fe.ws(t);
                        return n && r.setAuthenticationFlowType(n), r
                    }, e.prototype._isValidAuthStorage = function(e) {
                        return !!e && "function" == typeof e.getItem && "function" == typeof e.setItem && "function" == typeof e.removeItem && "function" == typeof e.clear
                    }, e.prototype.noUserPoolErrorHandler = function(e) {
                        return !e || e.userPoolId && e.identityPoolId ? r.Qg.NoConfig : r.Qg.MissingAuthConfig
                    }, e.prototype.rejectAuthError = function(e) {
                        return Promise.reject(new Ee(e))
                    }, e.prototype.rejectNoUserPool = function() {
                        var e = this.noUserPoolErrorHandler(this._config);
                        return Promise.reject(new Te(e))
                    }, e
                }())(null);
            Y.register(He)
        },
        3550: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => o
            });
            var r = n(92976);
            n(2043);
            const o = r.g
        },
        71672: (e, t, n) => {
            "use strict";
            var r, o;

            function i(e) {
                return e && !!["provider"].find((function(t) {
                    return e.hasOwnProperty(t)
                }))
            }

            function s(e) {
                return e && !!["customProvider"].find((function(t) {
                    return e.hasOwnProperty(t)
                }))
            }

            function a(e) {
                return e && !!["customState"].find((function(t) {
                    return e.hasOwnProperty(t)
                }))
            }

            function u(e) {
                return void 0 !== e.redirectSignIn
            }

            function c(e) {
                return !!e.username
            }
            n.d(t, {
                    JG: () => r,
                    SU: () => i,
                    zB: () => s,
                    Ay: () => a,
                    ic: () => u,
                    Qg: () => o,
                    lg: () => c
                }),
                function(e) {
                    e.Cognito = "COGNITO", e.Google = "Google", e.Facebook = "Facebook", e.Amazon = "LoginWithAmazon", e.Apple = "SignInWithApple"
                }(r || (r = {})),
                function(e) {
                    e.NoConfig = "noConfig", e.MissingAuthConfig = "missingAuthConfig", e.EmptyUsername = "emptyUsername", e.InvalidUsername = "invalidUsername", e.EmptyPassword = "emptyPassword", e.EmptyCode = "emptyCode", e.SignUpError = "signUpError", e.NoMFA = "noMFA", e.InvalidMFA = "invalidMFA", e.EmptyChallengeResponse = "emptyChallengeResponse", e.NoUserSession = "noUserSession", e.Default = "default"
                }(o || (o = {}))
        },
        20490: (e, t, n) => {
            "use strict";
            n.d(t, {
                Xb: () => c
            });
            var r = n(35069),
                o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                i = function(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, o, i = n.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                },
                s = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(i(arguments[t]));
                    return e
                },
                a = new r.k("Hub"),
                u = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default";
            var c = new(function() {
                function e(e) {
                    this.listeners = [], this.patterns = [], this.protectedChannels = ["core", "auth", "api", "analytics", "interactions", "pubsub", "storage", "xr"], this.name = e
                }
                return e.prototype.remove = function(e, t) {
                    if (e instanceof RegExp) {
                        var n = this.patterns.find((function(t) {
                            return t.pattern.source === e.source
                        }));
                        if (!n) return void a.warn("No listeners for " + e);
                        this.patterns = s(this.patterns.filter((function(e) {
                            return e !== n
                        })))
                    } else {
                        var r = this.listeners[e];
                        if (!r) return void a.warn("No listeners for " + e);
                        this.listeners[e] = s(r.filter((function(e) {
                            return e.callback !== t
                        })))
                    }
                }, e.prototype.dispatch = function(e, t, n, r) {
                    (void 0 === n && (n = ""), this.protectedChannels.indexOf(e) > -1) && (r === u || a.warn("WARNING: " + e + " is protected and dispatching on it can have unintended consequences"));
                    var i = {
                        channel: e,
                        payload: o({}, t),
                        source: n,
                        patternInfo: []
                    };
                    try {
                        this._toListeners(i)
                    } catch (e) {
                        a.error(e)
                    }
                }, e.prototype.listen = function(e, t, n) {
                    var r, o = this;
                    if (void 0 === n && (n = "noname"), function(e) {
                            return void 0 !== e.onHubCapsule
                        }(t)) a.warn("WARNING onHubCapsule is Deprecated. Please pass in a callback."), r = t.onHubCapsule.bind(t);
                    else {
                        if ("function" != typeof t) throw new Error("No callback supplied to Hub");
                        r = t
                    }
                    if (e instanceof RegExp) this.patterns.push({
                        pattern: e,
                        callback: r
                    });
                    else {
                        var i = this.listeners[e];
                        i || (i = [], this.listeners[e] = i), i.push({
                            name: n,
                            callback: r
                        })
                    }
                    return function() {
                        o.remove(e, r)
                    }
                }, e.prototype._toListeners = function(e) {
                    var t = e.channel,
                        n = e.payload,
                        r = this.listeners[t];
                    if (r && r.forEach((function(r) {
                            a.debug("Dispatching to " + t + " with ", n);
                            try {
                                r.callback(e)
                            } catch (e) {
                                a.error(e)
                            }
                        })), this.patterns.length > 0) {
                        if (!n.message) return void a.warn("Cannot perform pattern matching without a message key");
                        var s = n.message;
                        this.patterns.forEach((function(t) {
                            var n = s.match(t.pattern);
                            if (n) {
                                var r = i(n).slice(1),
                                    u = o(o({}, e), {
                                        patternInfo: r
                                    });
                                try {
                                    t.callback(u)
                                } catch (e) {
                                    a.error(e)
                                }
                            }
                        }))
                    }
                }, e
            }())("__default__")
        },
        35069: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => s
            });
            var r = function(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, o, i = n.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                },
                o = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(r(arguments[t]));
                    return e
                },
                i = {
                    VERBOSE: 1,
                    DEBUG: 2,
                    INFO: 3,
                    WARN: 4,
                    ERROR: 5
                },
                s = function() {
                    function e(e, t) {
                        void 0 === t && (t = "WARN"), this.name = e, this.level = t
                    }
                    return e.prototype._padding = function(e) {
                        return e < 10 ? "0" + e : "" + e
                    }, e.prototype._ts = function() {
                        var e = new Date;
                        return [this._padding(e.getMinutes()), this._padding(e.getSeconds())].join(":") + "." + e.getMilliseconds()
                    }, e.prototype._log = function(t) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        var o = this.level;
                        e.LOG_LEVEL && (o = e.LOG_LEVEL), "undefined" != typeof window && window.LOG_LEVEL && (o = window.LOG_LEVEL);
                        var s = i[o],
                            a = i[t];
                        if (a >= s) {
                            var u = console.log.bind(console);
                            "ERROR" === t && console.error && (u = console.error.bind(console)), "WARN" === t && console.warn && (u = console.warn.bind(console));
                            var c = "[" + t + "] " + this._ts() + " " + this.name;
                            if (1 === n.length && "string" == typeof n[0]) u(c + " - " + n[0]);
                            else if (1 === n.length) u(c, n[0]);
                            else if ("string" == typeof n[0]) {
                                var l = n.slice(1);
                                1 === l.length && (l = l[0]), u(c + " - " + n[0], l)
                            } else u(c, n)
                        }
                    }, e.prototype.log = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._log.apply(this, o(["INFO"], e))
                    }, e.prototype.info = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._log.apply(this, o(["INFO"], e))
                    }, e.prototype.warn = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._log.apply(this, o(["WARN"], e))
                    }, e.prototype.error = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._log.apply(this, o(["ERROR"], e))
                    }, e.prototype.debug = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._log.apply(this, o(["DEBUG"], e))
                    }, e.prototype.verbose = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._log.apply(this, o(["VERBOSE"], e))
                    }, e.LOG_LEVEL = null, e
                }()
        }
    }
]);
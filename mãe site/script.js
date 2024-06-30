(function () {
    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function p(a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p.apply(null, arguments)
    }

    var q = Date.now || function () {
        return +new Date
    };

    function ca(a, b) {
        this.a = a;
        this.m = b || a;
        this.c = this.m.document
    }

    var da = !!window.FontFace;

    function t(a, b, c, d) {
        b = a.c.createElement(b);
        if (c) for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        d && b.appendChild(a.c.createTextNode(d));
        return b
    }

    function u(a, b, c) {
        a = a.c.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild)
    }

    function v(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }

    function w(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
            for (var f = !1, g = 0; g < d.length; g += 1) if (b[e] === d[g]) {
                f = !0;
                break
            }
            f || d.push(b[e])
        }
        b = [];
        for (e = 0; e < d.length; e += 1) {
            f = !1;
            for (g = 0; g < c.length; g += 1) if (d[e] === c[g]) {
                f = !0;
                break
            }
            f || b.push(d[e])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function y(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) if (c[d] == b) return !0;
        return !1
    }

    function z(a) {
        if ("string" === typeof a.f) return a.f;
        var b = a.m.location.protocol;
        "about:" == b && (b = a.a.location.protocol);
        return "https:" == b ? "https:" : "http:"
    }

    function ea(a) {
        return a.m.location.hostname || a.a.location.hostname
    }

    function A(a, b, c) {
        function d() {
            k && e && f && (k(g), k = null)
        }

        b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });
        var e = !1, f = !0, g = null, k = c || null;
        da ? (b.onload = function () {
            e = !0;
            d()
        }, b.onerror = function () {
            e = !0;
            g = Error("Stylesheet failed to load");
            d()
        }) : setTimeout(function () {
            e = !0;
            d()
        }, 0);
        u(a, "head", b)
    }

    function B(a, b, c, d) {
        var e = a.c.getElementsByTagName("head")[0];
        if (e) {
            var f = t(a, "script", { src: b }), g = !1;
            f.onload = f.onreadystatechange = function () {
                g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f))
            };
            e.appendChild(f);
            setTimeout(function () {
                g || (g = !0, c && c(Error("Script load timeout")))
            }, d || 5E3);
            return f
        }
        return null
    };

    function C() {
        this.a = 0;
        this.c = null
    }

    function D(a) {
        a.a++;
        return function () {
            a.a--;
            E(a)
        }
    }

    function F(a, b) {
        a.c = b;
        E(a)
    }

    function E(a) {
        0 == a.a && a.c && (a.c(), a.c = null)
    };

    function G(a) {
        this.a = a || "-"
    }

    G.prototype.c = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.a)
    };

    function H(a, b) {
        this.c = a;
        this.f = 4;
        this.a = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.a = c[1], this.f = parseInt(c[2], 10))
    }

    function fa(a) {
        return I(a) + " " + (a.f + "00") + " 300px " + J(a.c)
    }

    function J(a) {
        var b = [];
        a = a.split(/,\s*/);
        for (var c = 0; c < a.length; c++) {
            var d = a[c].replace(/['"]/g, "");
            -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d)
        }
        return b.join(",")
    }

    function K(a) {
        return a.a + a.f
    }

    function I(a) {
        var b = "normal";
        "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
        return b
    }

    function ga(a) {
        var b = 4, c = "n", d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b
    };

    function ha(a, b) {
        this.c = a;
        this.f = a.m.document.documentElement;
        this.h = b;
        this.a = new G("-");
        this.j = !1 !== b.events;
        this.g = !1 !== b.classes
    }

    function ia(a) {
        a.g && w(a.f, [a.a.c("wf", "loading")]);
        L(a, "loading")
    }

    function M(a) {
        if (a.g) {
            var b = y(a.f, a.a.c("wf", "active")), c = [], d = [a.a.c("wf", "loading")];
            b || c.push(a.a.c("wf", "inactive"));
            w(a.f, c, d)
        }
        L(a, "inactive")
    }

    function L(a, b, c) {
        if (a.j && a.h[b]) if (c) a.h[b](c.c, K(c)); else a.h[b]()
    };

    function ja() {
        this.c = {}
    }

    function ka(a, b, c) {
        var d = [], e;
        for (e in b) if (b.hasOwnProperty(e)) {
            var f = a.c[e];
            f && d.push(f(b[e], c))
        }
        return d
    };

    function N(a, b) {
        this.c = a;
        this.f = 4;
        this.a = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.a = c[1], this.f = parseInt(c[2], 10))
    }

    function fa(a) {
        return I(a) + " " + (a.f + "00") + " 300px "

// 🔴 Disable Base44 (manual deploy)
 window.base44 = null;

var og = t => {
    throw TypeError(t)
}
;
var Vc = (t, e, r) => e.has(t) || og("Cannot " + r);
var P = (t, e, r) => (Vc(t, e, "read from private field"),
r ? r.call(t) : e.get(t))
  , ye = (t, e, r) => e.has(t) ? og("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r)
  , ee = (t, e, r, i) => (Vc(t, e, "write to private field"),
i ? i.call(t, r) : e.set(t, r),
r)
  , Pe = (t, e, r) => (Vc(t, e, "access private method"),
r);
var Ha = (t, e, r, i) => ({
    set _(a) {
        ee(t, e, a, r)
    },
    get _() {
        return P(t, e, i)
    }
});
function Xb(t, e) {
    for (var r = 0; r < e.length; r++) {
        const i = e[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in t)) {
                    const l = Object.getOwnPropertyDescriptor(i, a);
                    l && Object.defineProperty(t, a, l.get ? l : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        i(a);
    new MutationObserver(a => {
        for (const l of a)
            if (l.type === "childList")
                for (const c of l.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(a) {
        const l = {};
        return a.integrity && (l.integrity = a.integrity),
        a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function i(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const l = r(a);
        fetch(a.href, l)
    }
}
)();
function q0(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Bc = {
    exports: {}
}
  , Yi = {}
  , Uc = {
    exports: {}
}
  , Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ag;
function Jb() {
    if (ag)
        return Ee;
    ag = 1;
    var t = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , l = Symbol.for("react.provider")
      , c = Symbol.for("react.context")
      , f = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function x(A) {
        return A === null || typeof A != "object" ? null : (A = y && A[y] || A["@@iterator"],
        typeof A == "function" ? A : null)
    }
    var E = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , b = Object.assign
      , k = {};
    function S(A, z, ce) {
        this.props = A,
        this.context = z,
        this.refs = k,
        this.updater = ce || E
    }
    S.prototype.isReactComponent = {},
    S.prototype.setState = function(A, z) {
        if (typeof A != "object" && typeof A != "function" && A != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, z, "setState")
    }
    ,
    S.prototype.forceUpdate = function(A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    }
    ;
    function _() {}
    _.prototype = S.prototype;
    function F(A, z, ce) {
        this.props = A,
        this.context = z,
        this.refs = k,
        this.updater = ce || E
    }
    var M = F.prototype = new _;
    M.constructor = F,
    b(M, S.prototype),
    M.isPureReactComponent = !0;
    var V = Array.isArray
      , U = Object.prototype.hasOwnProperty
      , Y = {
        current: null
    }
      , ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function j(A, z, ce) {
        var fe, Se = {}, Ce = null, xe = null;
        if (z != null)
            for (fe in z.ref !== void 0 && (xe = z.ref),
            z.key !== void 0 && (Ce = "" + z.key),
            z)
                U.call(z, fe) && !ne.hasOwnProperty(fe) && (Se[fe] = z[fe]);
        var Ne = arguments.length - 2;
        if (Ne === 1)
            Se.children = ce;
        else if (1 < Ne) {
            for (var Le = Array(Ne), st = 0; st < Ne; st++)
                Le[st] = arguments[st + 2];
            Se.children = Le
        }
        if (A && A.defaultProps)
            for (fe in Ne = A.defaultProps,
            Ne)
                Se[fe] === void 0 && (Se[fe] = Ne[fe]);
        return {
            $$typeof: t,
            type: A,
            key: Ce,
            ref: xe,
            props: Se,
            _owner: Y.current
        }
    }
    function W(A, z) {
        return {
            $$typeof: t,
            type: A.type,
            key: z,
            ref: A.ref,
            props: A.props,
            _owner: A._owner
        }
    }
    function Q(A) {
        return typeof A == "object" && A !== null && A.$$typeof === t
    }
    function J(A) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function(ce) {
            return z[ce]
        })
    }
    var $ = /\/+/g;
    function re(A, z) {
        return typeof A == "object" && A !== null && A.key != null ? J("" + A.key) : z.toString(36)
    }
    function Te(A, z, ce, fe, Se) {
        var Ce = typeof A;
        (Ce === "undefined" || Ce === "boolean") && (A = null);
        var xe = !1;
        if (A === null)
            xe = !0;
        else
            switch (Ce) {
            case "string":
            case "number":
                xe = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                case t:
                case e:
                    xe = !0
                }
            }
        if (xe)
            return xe = A,
            Se = Se(xe),
            A = fe === "" ? "." + re(xe, 0) : fe,
            V(Se) ? (ce = "",
            A != null && (ce = A.replace($, "$&/") + "/"),
            Te(Se, z, ce, "", function(st) {
                return st
            })) : Se != null && (Q(Se) && (Se = W(Se, ce + (!Se.key || xe && xe.key === Se.key ? "" : ("" + Se.key).replace($, "$&/") + "/") + A)),
            z.push(Se)),
            1;
        if (xe = 0,
        fe = fe === "" ? "." : fe + ":",
        V(A))
            for (var Ne = 0; Ne < A.length; Ne++) {
                Ce = A[Ne];
                var Le = fe + re(Ce, Ne);
                xe += Te(Ce, z, ce, Le, Se)
            }
        else if (Le = x(A),
        typeof Le == "function")
            for (A = Le.call(A),
            Ne = 0; !(Ce = A.next()).done; )
                Ce = Ce.value,
                Le = fe + re(Ce, Ne++),
                xe += Te(Ce, z, ce, Le, Se);
        else if (Ce === "object")
            throw z = String(A),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return xe
    }
    function pe(A, z, ce) {
        if (A == null)
            return A;
        var fe = []
          , Se = 0;
        return Te(A, fe, "", "", function(Ce) {
            return z.call(ce, Ce, Se++)
        }),
        fe
    }
    function he(A) {
        if (A._status === -1) {
            var z = A._result;
            z = z(),
            z.then(function(ce) {
                (A._status === 0 || A._status === -1) && (A._status = 1,
                A._result = ce)
            }, function(ce) {
                (A._status === 0 || A._status === -1) && (A._status = 2,
                A._result = ce)
            }),
            A._status === -1 && (A._status = 0,
            A._result = z)
        }
        if (A._status === 1)
            return A._result.default;
        throw A._result
    }
    var de = {
        current: null
    }
      , B = {
        transition: null
    }
      , le = {
        ReactCurrentDispatcher: de,
        ReactCurrentBatchConfig: B,
        ReactCurrentOwner: Y
    };
    function X() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Ee.Children = {
        map: pe,
        forEach: function(A, z, ce) {
            pe(A, function() {
                z.apply(this, arguments)
            }, ce)
        },
        count: function(A) {
            var z = 0;
            return pe(A, function() {
                z++
            }),
            z
        },
        toArray: function(A) {
            return pe(A, function(z) {
                return z
            }) || []
        },
        only: function(A) {
            if (!Q(A))
                throw Error("React.Children.only expected to receive a single React element child.");
            return A
        }
    },
    Ee.Component = S,
    Ee.Fragment = r,
    Ee.Profiler = a,
    Ee.PureComponent = F,
    Ee.StrictMode = i,
    Ee.Suspense = h,
    Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le,
    Ee.act = X,
    Ee.cloneElement = function(A, z, ce) {
        if (A == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
        var fe = b({}, A.props)
          , Se = A.key
          , Ce = A.ref
          , xe = A._owner;
        if (z != null) {
            if (z.ref !== void 0 && (Ce = z.ref,
            xe = Y.current),
            z.key !== void 0 && (Se = "" + z.key),
            A.type && A.type.defaultProps)
                var Ne = A.type.defaultProps;
            for (Le in z)
                U.call(z, Le) && !ne.hasOwnProperty(Le) && (fe[Le] = z[Le] === void 0 && Ne !== void 0 ? Ne[Le] : z[Le])
        }
        var Le = arguments.length - 2;
        if (Le === 1)
            fe.children = ce;
        else if (1 < Le) {
            Ne = Array(Le);
            for (var st = 0; st < Le; st++)
                Ne[st] = arguments[st + 2];
            fe.children = Ne
        }
        return {
            $$typeof: t,
            type: A.type,
            key: Se,
            ref: Ce,
            props: fe,
            _owner: xe
        }
    }
    ,
    Ee.createContext = function(A) {
        return A = {
            $$typeof: c,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        A.Provider = {
            $$typeof: l,
            _context: A
        },
        A.Consumer = A
    }
    ,
    Ee.createElement = j,
    Ee.createFactory = function(A) {
        var z = j.bind(null, A);
        return z.type = A,
        z
    }
    ,
    Ee.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Ee.forwardRef = function(A) {
        return {
            $$typeof: f,
            render: A
        }
    }
    ,
    Ee.isValidElement = Q,
    Ee.lazy = function(A) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: he
        }
    }
    ,
    Ee.memo = function(A, z) {
        return {
            $$typeof: m,
            type: A,
            compare: z === void 0 ? null : z
        }
    }
    ,
    Ee.startTransition = function(A) {
        var z = B.transition;
        B.transition = {};
        try {
            A()
        } finally {
            B.transition = z
        }
    }
    ,
    Ee.unstable_act = X,
    Ee.useCallback = function(A, z) {
        return de.current.useCallback(A, z)
    }
    ,
    Ee.useContext = function(A) {
        return de.current.useContext(A)
    }
    ,
    Ee.useDebugValue = function() {}
    ,
    Ee.useDeferredValue = function(A) {
        return de.current.useDeferredValue(A)
    }
    ,
    Ee.useEffect = function(A, z) {
        return de.current.useEffect(A, z)
    }
    ,
    Ee.useId = function() {
        return de.current.useId()
    }
    ,
    Ee.useImperativeHandle = function(A, z, ce) {
        return de.current.useImperativeHandle(A, z, ce)
    }
    ,
    Ee.useInsertionEffect = function(A, z) {
        return de.current.useInsertionEffect(A, z)
    }
    ,
    Ee.useLayoutEffect = function(A, z) {
        return de.current.useLayoutEffect(A, z)
    }
    ,
    Ee.useMemo = function(A, z) {
        return de.current.useMemo(A, z)
    }
    ,
    Ee.useReducer = function(A, z, ce) {
        return de.current.useReducer(A, z, ce)
    }
    ,
    Ee.useRef = function(A) {
        return de.current.useRef(A)
    }
    ,
    Ee.useState = function(A) {
        return de.current.useState(A)
    }
    ,
    Ee.useSyncExternalStore = function(A, z, ce) {
        return de.current.useSyncExternalStore(A, z, ce)
    }
    ,
    Ee.useTransition = function() {
        return de.current.useTransition()
    }
    ,
    Ee.version = "18.3.1",
    Ee
}
var lg;
function pf() {
    return lg || (lg = 1,
    Uc.exports = Jb()),
    Uc.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ug;
function Zb() {
    if (ug)
        return Yi;
    ug = 1;
    var t = pf()
      , e = Symbol.for("react.element")
      , r = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function c(f, h, m) {
        var g, y = {}, x = null, E = null;
        m !== void 0 && (x = "" + m),
        h.key !== void 0 && (x = "" + h.key),
        h.ref !== void 0 && (E = h.ref);
        for (g in h)
            i.call(h, g) && !l.hasOwnProperty(g) && (y[g] = h[g]);
        if (f && f.defaultProps)
            for (g in h = f.defaultProps,
            h)
                y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: e,
            type: f,
            key: x,
            ref: E,
            props: y,
            _owner: a.current
        }
    }
    return Yi.Fragment = r,
    Yi.jsx = c,
    Yi.jsxs = c,
    Yi
}
var cg;
function eS() {
    return cg || (cg = 1,
    Bc.exports = Zb()),
    Bc.exports
}
var w = eS()
  , N = pf();
const Ls = q0(N)
  , tS = Xb({
    __proto__: null,
    default: Ls
}, [N]);
var Wa = {}
  , zc = {
    exports: {}
}
  , At = {}
  , $c = {
    exports: {}
}
  , qc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dg;
function nS() {
    return dg || (dg = 1,
    (function(t) {
        function e(B, le) {
            var X = B.length;
            B.push(le);
            e: for (; 0 < X; ) {
                var A = X - 1 >>> 1
                  , z = B[A];
                if (0 < a(z, le))
                    B[A] = le,
                    B[X] = z,
                    X = A;
                else
                    break e
            }
        }
        function r(B) {
            return B.length === 0 ? null : B[0]
        }
        function i(B) {
            if (B.length === 0)
                return null;
            var le = B[0]
              , X = B.pop();
            if (X !== le) {
                B[0] = X;
                e: for (var A = 0, z = B.length, ce = z >>> 1; A < ce; ) {
                    var fe = 2 * (A + 1) - 1
                      , Se = B[fe]
                      , Ce = fe + 1
                      , xe = B[Ce];
                    if (0 > a(Se, X))
                        Ce < z && 0 > a(xe, Se) ? (B[A] = xe,
                        B[Ce] = X,
                        A = Ce) : (B[A] = Se,
                        B[fe] = X,
                        A = fe);
                    else if (Ce < z && 0 > a(xe, X))
                        B[A] = xe,
                        B[Ce] = X,
                        A = Ce;
                    else
                        break e
                }
            }
            return le
        }
        function a(B, le) {
            var X = B.sortIndex - le.sortIndex;
            return X !== 0 ? X : B.id - le.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            t.unstable_now = function() {
                return l.now()
            }
        } else {
            var c = Date
              , f = c.now();
            t.unstable_now = function() {
                return c.now() - f
            }
        }
        var h = []
          , m = []
          , g = 1
          , y = null
          , x = 3
          , E = !1
          , b = !1
          , k = !1
          , S = typeof setTimeout == "function" ? setTimeout : null
          , _ = typeof clearTimeout == "function" ? clearTimeout : null
          , F = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function M(B) {
            for (var le = r(m); le !== null; ) {
                if (le.callback === null)
                    i(m);
                else if (le.startTime <= B)
                    i(m),
                    le.sortIndex = le.expirationTime,
                    e(h, le);
                else
                    break;
                le = r(m)
            }
        }
        function V(B) {
            if (k = !1,
            M(B),
            !b)
                if (r(h) !== null)
                    b = !0,
                    he(U);
                else {
                    var le = r(m);
                    le !== null && de(V, le.startTime - B)
                }
        }
        function U(B, le) {
            b = !1,
            k && (k = !1,
            _(j),
            j = -1),
            E = !0;
            var X = x;
            try {
                for (M(le),
                y = r(h); y !== null && (!(y.expirationTime > le) || B && !J()); ) {
                    var A = y.callback;
                    if (typeof A == "function") {
                        y.callback = null,
                        x = y.priorityLevel;
                        var z = A(y.expirationTime <= le);
                        le = t.unstable_now(),
                        typeof z == "function" ? y.callback = z : y === r(h) && i(h),
                        M(le)
                    } else
                        i(h);
                    y = r(h)
                }
                if (y !== null)
                    var ce = !0;
                else {
                    var fe = r(m);
                    fe !== null && de(V, fe.startTime - le),
                    ce = !1
                }
                return ce
            } finally {
                y = null,
                x = X,
                E = !1
            }
        }
        var Y = !1
          , ne = null
          , j = -1
          , W = 5
          , Q = -1;
        function J() {
            return !(t.unstable_now() - Q < W)
        }
        function $() {
            if (ne !== null) {
                var B = t.unstable_now();
                Q = B;
                var le = !0;
                try {
                    le = ne(!0, B)
                } finally {
                    le ? re() : (Y = !1,
                    ne = null)
                }
            } else
                Y = !1
        }
        var re;
        if (typeof F == "function")
            re = function() {
                F($)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Te = new MessageChannel
              , pe = Te.port2;
            Te.port1.onmessage = $,
            re = function() {
                pe.postMessage(null)
            }
        } else
            re = function() {
                S($, 0)
            }
            ;
        function he(B) {
            ne = B,
            Y || (Y = !0,
            re())
        }
        function de(B, le) {
            j = S(function() {
                B(t.unstable_now())
            }, le)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(B) {
            B.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            b || E || (b = !0,
            he(U))
        }
        ,
        t.unstable_forceFrameRate = function(B) {
            0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < B ? Math.floor(1e3 / B) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return x
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return r(h)
        }
        ,
        t.unstable_next = function(B) {
            switch (x) {
            case 1:
            case 2:
            case 3:
                var le = 3;
                break;
            default:
                le = x
            }
            var X = x;
            x = le;
            try {
                return B()
            } finally {
                x = X
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(B, le) {
            switch (B) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                B = 3
            }
            var X = x;
            x = B;
            try {
                return le()
            } finally {
                x = X
            }
        }
        ,
        t.unstable_scheduleCallback = function(B, le, X) {
            var A = t.unstable_now();
            switch (typeof X == "object" && X !== null ? (X = X.delay,
            X = typeof X == "number" && 0 < X ? A + X : A) : X = A,
            B) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
            }
            return z = X + z,
            B = {
                id: g++,
                callback: le,
                priorityLevel: B,
                startTime: X,
                expirationTime: z,
                sortIndex: -1
            },
            X > A ? (B.sortIndex = X,
            e(m, B),
            r(h) === null && B === r(m) && (k ? (_(j),
            j = -1) : k = !0,
            de(V, X - A))) : (B.sortIndex = z,
            e(h, B),
            b || E || (b = !0,
            he(U))),
            B
        }
        ,
        t.unstable_shouldYield = J,
        t.unstable_wrapCallback = function(B) {
            var le = x;
            return function() {
                var X = x;
                x = le;
                try {
                    return B.apply(this, arguments)
                } finally {
                    x = X
                }
            }
        }
    }
    )(qc)),
    qc
}
var fg;
function rS() {
    return fg || (fg = 1,
    $c.exports = nS()),
    $c.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hg;
function sS() {
    if (hg)
        return At;
    hg = 1;
    var t = pf()
      , e = rS();
    function r(n) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
            s += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , a = {};
    function l(n, s) {
        c(n, s),
        c(n + "Capture", s)
    }
    function c(n, s) {
        for (a[n] = s,
        n = 0; n < s.length; n++)
            i.add(s[n])
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = Object.prototype.hasOwnProperty
      , m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , y = {};
    function x(n) {
        return h.call(y, n) ? !0 : h.call(g, n) ? !1 : m.test(n) ? y[n] = !0 : (g[n] = !0,
        !1)
    }
    function E(n, s, o, u) {
        if (o !== null && o.type === 0)
            return !1;
        switch (typeof s) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5),
            n !== "data-" && n !== "aria-");
        default:
            return !1
        }
    }
    function b(n, s, o, u) {
        if (s === null || typeof s > "u" || E(n, s, o, u))
            return !0;
        if (u)
            return !1;
        if (o !== null)
            switch (o.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
            }
        return !1
    }
    function k(n, s, o, u, d, p, v) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4,
        this.attributeName = u,
        this.attributeNamespace = d,
        this.mustUseProperty = o,
        this.propertyName = n,
        this.type = s,
        this.sanitizeURL = p,
        this.removeEmptyString = v
    }
    var S = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
        S[n] = new k(n,0,!1,n,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
        var s = n[0];
        S[s] = new k(s,1,!1,n[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
        S[n] = new k(n,2,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
        S[n] = new k(n,2,!1,n,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
        S[n] = new k(n,3,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(n) {
        S[n] = new k(n,3,!0,n,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(n) {
        S[n] = new k(n,4,!1,n,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(n) {
        S[n] = new k(n,6,!1,n,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(n) {
        S[n] = new k(n,5,!1,n.toLowerCase(),null,!1,!1)
    });
    var _ = /[\-:]([a-z])/g;
    function F(n) {
        return n[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
        var s = n.replace(_, F);
        S[s] = new k(s,1,!1,n,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
        var s = n.replace(_, F);
        S[s] = new k(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
        var s = n.replace(_, F);
        S[s] = new k(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(n) {
        S[n] = new k(n,1,!1,n.toLowerCase(),null,!1,!1)
    }),
    S.xlinkHref = new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(n) {
        S[n] = new k(n,1,!1,n.toLowerCase(),null,!0,!0)
    });
    function M(n, s, o, u) {
        var d = S.hasOwnProperty(s) ? S[s] : null;
        (d !== null ? d.type !== 0 : u || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (b(s, o, d, u) && (o = null),
        u || d === null ? x(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : d.mustUseProperty ? n[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (s = d.attributeName,
        u = d.attributeNamespace,
        o === null ? n.removeAttribute(s) : (d = d.type,
        o = d === 3 || d === 4 && o === !0 ? "" : "" + o,
        u ? n.setAttributeNS(u, s, o) : n.setAttribute(s, o))))
    }
    var V = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , U = Symbol.for("react.element")
      , Y = Symbol.for("react.portal")
      , ne = Symbol.for("react.fragment")
      , j = Symbol.for("react.strict_mode")
      , W = Symbol.for("react.profiler")
      , Q = Symbol.for("react.provider")
      , J = Symbol.for("react.context")
      , $ = Symbol.for("react.forward_ref")
      , re = Symbol.for("react.suspense")
      , Te = Symbol.for("react.suspense_list")
      , pe = Symbol.for("react.memo")
      , he = Symbol.for("react.lazy")
      , de = Symbol.for("react.offscreen")
      , B = Symbol.iterator;
    function le(n) {
        return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"],
        typeof n == "function" ? n : null)
    }
    var X = Object.assign, A;
    function z(n) {
        if (A === void 0)
            try {
                throw Error()
            } catch (o) {
                var s = o.stack.trim().match(/\n( *(at )?)/);
                A = s && s[1] || ""
            }
        return `
` + A + n
    }
    var ce = !1;
    function fe(n, s) {
        if (!n || ce)
            return "";
        ce = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (D) {
                        var u = D
                    }
                    Reflect.construct(n, [], s)
                } else {
                    try {
                        s.call()
                    } catch (D) {
                        u = D
                    }
                    n.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (D) {
                    u = D
                }
                n()
            }
        } catch (D) {
            if (D && u && typeof D.stack == "string") {
                for (var d = D.stack.split(`
`), p = u.stack.split(`
`), v = d.length - 1, T = p.length - 1; 1 <= v && 0 <= T && d[v] !== p[T]; )
                    T--;
                for (; 1 <= v && 0 <= T; v--,
                T--)
                    if (d[v] !== p[T]) {
                        if (v !== 1 || T !== 1)
                            do
                                if (v--,
                                T--,
                                0 > T || d[v] !== p[T]) {
                                    var C = `
` + d[v].replace(" at new ", " at ");
                                    return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)),
                                    C
                                }
                            while (1 <= v && 0 <= T);
                        break
                    }
            }
        } finally {
            ce = !1,
            Error.prepareStackTrace = o
        }
        return (n = n ? n.displayName || n.name : "") ? z(n) : ""
    }
    function Se(n) {
        switch (n.tag) {
        case 5:
            return z(n.type);
        case 16:
            return z("Lazy");
        case 13:
            return z("Suspense");
        case 19:
            return z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return n = fe(n.type, !1),
            n;
        case 11:
            return n = fe(n.type.render, !1),
            n;
        case 1:
            return n = fe(n.type, !0),
            n;
        default:
            return ""
        }
    }
    function Ce(n) {
        if (n == null)
            return null;
        if (typeof n == "function")
            return n.displayName || n.name || null;
        if (typeof n == "string")
            return n;
        switch (n) {
        case ne:
            return "Fragment";
        case Y:
            return "Portal";
        case W:
            return "Profiler";
        case j:
            return "StrictMode";
        case re:
            return "Suspense";
        case Te:
            return "SuspenseList"
        }
        if (typeof n == "object")
            switch (n.$$typeof) {
            case J:
                return (n.displayName || "Context") + ".Consumer";
            case Q:
                return (n._context.displayName || "Context") + ".Provider";
            case $:
                var s = n.render;
                return n = n.displayName,
                n || (n = s.displayName || s.name || "",
                n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"),
                n;
            case pe:
                return s = n.displayName || null,
                s !== null ? s : Ce(n.type) || "Memo";
            case he:
                s = n._payload,
                n = n._init;
                try {
                    return Ce(n(s))
                } catch {}
            }
        return null
    }
    function xe(n) {
        var s = n.type;
        switch (n.tag) {
        case 24:
            return "Cache";
        case 9:
            return (s.displayName || "Context") + ".Consumer";
        case 10:
            return (s._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return n = s.render,
            n = n.displayName || n.name || "",
            s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return s;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ce(s);
        case 8:
            return s === j ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof s == "function")
                return s.displayName || s.name || null;
            if (typeof s == "string")
                return s
        }
        return null
    }
    function Ne(n) {
        switch (typeof n) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return n;
        case "object":
            return n;
        default:
            return ""
        }
    }
    function Le(n) {
        var s = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }
    function st(n) {
        var s = Le(n) ? "checked" : "value"
          , o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s)
          , u = "" + n[s];
        if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var d = o.get
              , p = o.set;
            return Object.defineProperty(n, s, {
                configurable: !0,
                get: function() {
                    return d.call(this)
                },
                set: function(v) {
                    u = "" + v,
                    p.call(this, v)
                }
            }),
            Object.defineProperty(n, s, {
                enumerable: o.enumerable
            }),
            {
                getValue: function() {
                    return u
                },
                setValue: function(v) {
                    u = "" + v
                },
                stopTracking: function() {
                    n._valueTracker = null,
                    delete n[s]
                }
            }
        }
    }
    function $n(n) {
        n._valueTracker || (n._valueTracker = st(n))
    }
    function Cr(n) {
        if (!n)
            return !1;
        var s = n._valueTracker;
        if (!s)
            return !0;
        var o = s.getValue()
          , u = "";
        return n && (u = Le(n) ? n.checked ? "true" : "false" : n.value),
        n = u,
        n !== o ? (s.setValue(n),
        !0) : !1
    }
    function Do(n) {
        if (n = n || (typeof document < "u" ? document : void 0),
        typeof n > "u")
            return null;
        try {
            return n.activeElement || n.body
        } catch {
            return n.body
        }
    }
    function Wl(n, s) {
        var o = s.checked;
        return X({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? n._wrapperState.initialChecked
        })
    }
    function hh(n, s) {
        var o = s.defaultValue == null ? "" : s.defaultValue
          , u = s.checked != null ? s.checked : s.defaultChecked;
        o = Ne(s.value != null ? s.value : o),
        n._wrapperState = {
            initialChecked: u,
            initialValue: o,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }
    function ph(n, s) {
        s = s.checked,
        s != null && M(n, "checked", s, !1)
    }
    function Kl(n, s) {
        ph(n, s);
        var o = Ne(s.value)
          , u = s.type;
        if (o != null)
            u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
        else if (u === "submit" || u === "reset") {
            n.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? Ql(n, s.type, o) : s.hasOwnProperty("defaultValue") && Ql(n, s.type, Ne(s.defaultValue)),
        s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
    }
    function mh(n, s, o) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var u = s.type;
            if (!(u !== "submit" && u !== "reset" || s.value !== void 0 && s.value !== null))
                return;
            s = "" + n._wrapperState.initialValue,
            o || s === n.value || (n.value = s),
            n.defaultValue = s
        }
        o = n.name,
        o !== "" && (n.name = ""),
        n.defaultChecked = !!n._wrapperState.initialChecked,
        o !== "" && (n.name = o)
    }
    function Ql(n, s, o) {
        (s !== "number" || Do(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
    }
    var di = Array.isArray;
    function ls(n, s, o, u) {
        if (n = n.options,
        s) {
            s = {};
            for (var d = 0; d < o.length; d++)
                s["$" + o[d]] = !0;
            for (o = 0; o < n.length; o++)
                d = s.hasOwnProperty("$" + n[o].value),
                n[o].selected !== d && (n[o].selected = d),
                d && u && (n[o].defaultSelected = !0)
        } else {
            for (o = "" + Ne(o),
            s = null,
            d = 0; d < n.length; d++) {
                if (n[d].value === o) {
                    n[d].selected = !0,
                    u && (n[d].defaultSelected = !0);
                    return
                }
                s !== null || n[d].disabled || (s = n[d])
            }
            s !== null && (s.selected = !0)
        }
    }
    function Gl(n, s) {
        if (s.dangerouslySetInnerHTML != null)
            throw Error(r(91));
        return X({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + n._wrapperState.initialValue
        })
    }
    function gh(n, s) {
        var o = s.value;
        if (o == null) {
            if (o = s.children,
            s = s.defaultValue,
            o != null) {
                if (s != null)
                    throw Error(r(92));
                if (di(o)) {
                    if (1 < o.length)
                        throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""),
            o = s
        }
        n._wrapperState = {
            initialValue: Ne(o)
        }
    }
    function yh(n, s) {
        var o = Ne(s.value)
          , u = Ne(s.defaultValue);
        o != null && (o = "" + o,
        o !== n.value && (n.value = o),
        s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)),
        u != null && (n.defaultValue = "" + u)
    }
    function vh(n) {
        var s = n.textContent;
        s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
    }
    function wh(n) {
        switch (n) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Yl(n, s) {
        return n == null || n === "http://www.w3.org/1999/xhtml" ? wh(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
    }
    var Io, xh = (function(n) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, o, u, d) {
            MSApp.execUnsafeLocalFunction(function() {
                return n(s, o, u, d)
            })
        }
        : n
    }
    )(function(n, s) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in n)
            n.innerHTML = s;
        else {
            for (Io = Io || document.createElement("div"),
            Io.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = Io.firstChild; n.firstChild; )
                n.removeChild(n.firstChild);
            for (; s.firstChild; )
                n.appendChild(s.firstChild)
        }
    });
    function fi(n, s) {
        if (s) {
            var o = n.firstChild;
            if (o && o === n.lastChild && o.nodeType === 3) {
                o.nodeValue = s;
                return
            }
        }
        n.textContent = s
    }
    var hi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , t1 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(hi).forEach(function(n) {
        t1.forEach(function(s) {
            s = s + n.charAt(0).toUpperCase() + n.substring(1),
            hi[s] = hi[n]
        })
    });
    function bh(n, s, o) {
        return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || hi.hasOwnProperty(n) && hi[n] ? ("" + s).trim() : s + "px"
    }
    function Sh(n, s) {
        n = n.style;
        for (var o in s)
            if (s.hasOwnProperty(o)) {
                var u = o.indexOf("--") === 0
                  , d = bh(o, s[o], u);
                o === "float" && (o = "cssFloat"),
                u ? n.setProperty(o, d) : n[o] = d
            }
    }
    var n1 = X({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Xl(n, s) {
        if (s) {
            if (n1[n] && (s.children != null || s.dangerouslySetInnerHTML != null))
                throw Error(r(137, n));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null)
                    throw Error(r(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html"in s.dangerouslySetInnerHTML))
                    throw Error(r(61))
            }
            if (s.style != null && typeof s.style != "object")
                throw Error(r(62))
        }
    }
    function Jl(n, s) {
        if (n.indexOf("-") === -1)
            return typeof s.is == "string";
        switch (n) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Zl = null;
    function eu(n) {
        return n = n.target || n.srcElement || window,
        n.correspondingUseElement && (n = n.correspondingUseElement),
        n.nodeType === 3 ? n.parentNode : n
    }
    var tu = null
      , us = null
      , cs = null;
    function kh(n) {
        if (n = Mi(n)) {
            if (typeof tu != "function")
                throw Error(r(280));
            var s = n.stateNode;
            s && (s = oa(s),
            tu(n.stateNode, n.type, s))
        }
    }
    function Eh(n) {
        us ? cs ? cs.push(n) : cs = [n] : us = n
    }
    function Th() {
        if (us) {
            var n = us
              , s = cs;
            if (cs = us = null,
            kh(n),
            s)
                for (n = 0; n < s.length; n++)
                    kh(s[n])
        }
    }
    function Ch(n, s) {
        return n(s)
    }
    function Ph() {}
    var nu = !1;
    function Rh(n, s, o) {
        if (nu)
            return n(s, o);
        nu = !0;
        try {
            return Ch(n, s, o)
        } finally {
            nu = !1,
            (us !== null || cs !== null) && (Ph(),
            Th())
        }
    }
    function pi(n, s) {
        var o = n.stateNode;
        if (o === null)
            return null;
        var u = oa(o);
        if (u === null)
            return null;
        o = u[s];
        e: switch (s) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (u = !u.disabled) || (n = n.type,
            u = !(n === "button" || n === "input" || n === "select" || n === "textarea")),
            n = !u;
            break e;
        default:
            n = !1
        }
        if (n)
            return null;
        if (o && typeof o != "function")
            throw Error(r(231, s, typeof o));
        return o
    }
    var ru = !1;
    if (f)
        try {
            var mi = {};
            Object.defineProperty(mi, "passive", {
                get: function() {
                    ru = !0
                }
            }),
            window.addEventListener("test", mi, mi),
            window.removeEventListener("test", mi, mi)
        } catch {
            ru = !1
        }
    function r1(n, s, o, u, d, p, v, T, C) {
        var D = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(o, D)
        } catch (H) {
            this.onError(H)
        }
    }
    var gi = !1
      , Fo = null
      , Vo = !1
      , su = null
      , s1 = {
        onError: function(n) {
            gi = !0,
            Fo = n
        }
    };
    function i1(n, s, o, u, d, p, v, T, C) {
        gi = !1,
        Fo = null,
        r1.apply(s1, arguments)
    }
    function o1(n, s, o, u, d, p, v, T, C) {
        if (i1.apply(this, arguments),
        gi) {
            if (gi) {
                var D = Fo;
                gi = !1,
                Fo = null
            } else
                throw Error(r(198));
            Vo || (Vo = !0,
            su = D)
        }
    }
    function Pr(n) {
        var s = n
          , o = n;
        if (n.alternate)
            for (; s.return; )
                s = s.return;
        else {
            n = s;
            do
                s = n,
                (s.flags & 4098) !== 0 && (o = s.return),
                n = s.return;
            while (n)
        }
        return s.tag === 3 ? o : null
    }
    function _h(n) {
        if (n.tag === 13) {
            var s = n.memoizedState;
            if (s === null && (n = n.alternate,
            n !== null && (s = n.memoizedState)),
            s !== null)
                return s.dehydrated
        }
        return null
    }
    function Ah(n) {
        if (Pr(n) !== n)
            throw Error(r(188))
    }
    function a1(n) {
        var s = n.alternate;
        if (!s) {
            if (s = Pr(n),
            s === null)
                throw Error(r(188));
            return s !== n ? null : n
        }
        for (var o = n, u = s; ; ) {
            var d = o.return;
            if (d === null)
                break;
            var p = d.alternate;
            if (p === null) {
                if (u = d.return,
                u !== null) {
                    o = u;
                    continue
                }
                break
            }
            if (d.child === p.child) {
                for (p = d.child; p; ) {
                    if (p === o)
                        return Ah(d),
                        n;
                    if (p === u)
                        return Ah(d),
                        s;
                    p = p.sibling
                }
                throw Error(r(188))
            }
            if (o.return !== u.return)
                o = d,
                u = p;
            else {
                for (var v = !1, T = d.child; T; ) {
                    if (T === o) {
                        v = !0,
                        o = d,
                        u = p;
                        break
                    }
                    if (T === u) {
                        v = !0,
                        u = d,
                        o = p;
                        break
                    }
                    T = T.sibling
                }
                if (!v) {
                    for (T = p.child; T; ) {
                        if (T === o) {
                            v = !0,
                            o = p,
                            u = d;
                            break
                        }
                        if (T === u) {
                            v = !0,
                            u = p,
                            o = d;
                            break
                        }
                        T = T.sibling
                    }
                    if (!v)
                        throw Error(r(189))
                }
            }
            if (o.alternate !== u)
                throw Error(r(190))
        }
        if (o.tag !== 3)
            throw Error(r(188));
        return o.stateNode.current === o ? n : s
    }
    function Nh(n) {
        return n = a1(n),
        n !== null ? jh(n) : null
    }
    function jh(n) {
        if (n.tag === 5 || n.tag === 6)
            return n;
        for (n = n.child; n !== null; ) {
            var s = jh(n);
            if (s !== null)
                return s;
            n = n.sibling
        }
        return null
    }
    var Oh = e.unstable_scheduleCallback
      , Lh = e.unstable_cancelCallback
      , l1 = e.unstable_shouldYield
      , u1 = e.unstable_requestPaint
      , Ge = e.unstable_now
      , c1 = e.unstable_getCurrentPriorityLevel
      , iu = e.unstable_ImmediatePriority
      , Mh = e.unstable_UserBlockingPriority
      , Bo = e.unstable_NormalPriority
      , d1 = e.unstable_LowPriority
      , Dh = e.unstable_IdlePriority
      , Uo = null
      , hn = null;
    function f1(n) {
        if (hn && typeof hn.onCommitFiberRoot == "function")
            try {
                hn.onCommitFiberRoot(Uo, n, void 0, (n.current.flags & 128) === 128)
            } catch {}
    }
    var en = Math.clz32 ? Math.clz32 : m1
      , h1 = Math.log
      , p1 = Math.LN2;
    function m1(n) {
        return n >>>= 0,
        n === 0 ? 32 : 31 - (h1(n) / p1 | 0) | 0
    }
    var zo = 64
      , $o = 4194304;
    function yi(n) {
        switch (n & -n) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return n & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return n
        }
    }
    function qo(n, s) {
        var o = n.pendingLanes;
        if (o === 0)
            return 0;
        var u = 0
          , d = n.suspendedLanes
          , p = n.pingedLanes
          , v = o & 268435455;
        if (v !== 0) {
            var T = v & ~d;
            T !== 0 ? u = yi(T) : (p &= v,
            p !== 0 && (u = yi(p)))
        } else
            v = o & ~d,
            v !== 0 ? u = yi(v) : p !== 0 && (u = yi(p));
        if (u === 0)
            return 0;
        if (s !== 0 && s !== u && (s & d) === 0 && (d = u & -u,
        p = s & -s,
        d >= p || d === 16 && (p & 4194240) !== 0))
            return s;
        if ((u & 4) !== 0 && (u |= o & 16),
        s = n.entangledLanes,
        s !== 0)
            for (n = n.entanglements,
            s &= u; 0 < s; )
                o = 31 - en(s),
                d = 1 << o,
                u |= n[o],
                s &= ~d;
        return u
    }
    function g1(n, s) {
        switch (n) {
        case 1:
        case 2:
        case 4:
            return s + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return s + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function y1(n, s) {
        for (var o = n.suspendedLanes, u = n.pingedLanes, d = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
            var v = 31 - en(p)
              , T = 1 << v
              , C = d[v];
            C === -1 ? ((T & o) === 0 || (T & u) !== 0) && (d[v] = g1(T, s)) : C <= s && (n.expiredLanes |= T),
            p &= ~T
        }
    }
    function ou(n) {
        return n = n.pendingLanes & -1073741825,
        n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    }
    function Ih() {
        var n = zo;
        return zo <<= 1,
        (zo & 4194240) === 0 && (zo = 64),
        n
    }
    function au(n) {
        for (var s = [], o = 0; 31 > o; o++)
            s.push(n);
        return s
    }
    function vi(n, s, o) {
        n.pendingLanes |= s,
        s !== 536870912 && (n.suspendedLanes = 0,
        n.pingedLanes = 0),
        n = n.eventTimes,
        s = 31 - en(s),
        n[s] = o
    }
    function v1(n, s) {
        var o = n.pendingLanes & ~s;
        n.pendingLanes = s,
        n.suspendedLanes = 0,
        n.pingedLanes = 0,
        n.expiredLanes &= s,
        n.mutableReadLanes &= s,
        n.entangledLanes &= s,
        s = n.entanglements;
        var u = n.eventTimes;
        for (n = n.expirationTimes; 0 < o; ) {
            var d = 31 - en(o)
              , p = 1 << d;
            s[d] = 0,
            u[d] = -1,
            n[d] = -1,
            o &= ~p
        }
    }
    function lu(n, s) {
        var o = n.entangledLanes |= s;
        for (n = n.entanglements; o; ) {
            var u = 31 - en(o)
              , d = 1 << u;
            d & s | n[u] & s && (n[u] |= s),
            o &= ~d
        }
    }
    var Me = 0;
    function Fh(n) {
        return n &= -n,
        1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Vh, uu, Bh, Uh, zh, cu = !1, Ho = [], qn = null, Hn = null, Wn = null, wi = new Map, xi = new Map, Kn = [], w1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function $h(n, s) {
        switch (n) {
        case "focusin":
        case "focusout":
            qn = null;
            break;
        case "dragenter":
        case "dragleave":
            Hn = null;
            break;
        case "mouseover":
        case "mouseout":
            Wn = null;
            break;
        case "pointerover":
        case "pointerout":
            wi.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            xi.delete(s.pointerId)
        }
    }
    function bi(n, s, o, u, d, p) {
        return n === null || n.nativeEvent !== p ? (n = {
            blockedOn: s,
            domEventName: o,
            eventSystemFlags: u,
            nativeEvent: p,
            targetContainers: [d]
        },
        s !== null && (s = Mi(s),
        s !== null && uu(s)),
        n) : (n.eventSystemFlags |= u,
        s = n.targetContainers,
        d !== null && s.indexOf(d) === -1 && s.push(d),
        n)
    }
    function x1(n, s, o, u, d) {
        switch (s) {
        case "focusin":
            return qn = bi(qn, n, s, o, u, d),
            !0;
        case "dragenter":
            return Hn = bi(Hn, n, s, o, u, d),
            !0;
        case "mouseover":
            return Wn = bi(Wn, n, s, o, u, d),
            !0;
        case "pointerover":
            var p = d.pointerId;
            return wi.set(p, bi(wi.get(p) || null, n, s, o, u, d)),
            !0;
        case "gotpointercapture":
            return p = d.pointerId,
            xi.set(p, bi(xi.get(p) || null, n, s, o, u, d)),
            !0
        }
        return !1
    }
    function qh(n) {
        var s = Rr(n.target);
        if (s !== null) {
            var o = Pr(s);
            if (o !== null) {
                if (s = o.tag,
                s === 13) {
                    if (s = _h(o),
                    s !== null) {
                        n.blockedOn = s,
                        zh(n.priority, function() {
                            Bh(o)
                        });
                        return
                    }
                } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        n.blockedOn = null
    }
    function Wo(n) {
        if (n.blockedOn !== null)
            return !1;
        for (var s = n.targetContainers; 0 < s.length; ) {
            var o = fu(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
            if (o === null) {
                o = n.nativeEvent;
                var u = new o.constructor(o.type,o);
                Zl = u,
                o.target.dispatchEvent(u),
                Zl = null
            } else
                return s = Mi(o),
                s !== null && uu(s),
                n.blockedOn = o,
                !1;
            s.shift()
        }
        return !0
    }
    function Hh(n, s, o) {
        Wo(n) && o.delete(s)
    }
    function b1() {
        cu = !1,
        qn !== null && Wo(qn) && (qn = null),
        Hn !== null && Wo(Hn) && (Hn = null),
        Wn !== null && Wo(Wn) && (Wn = null),
        wi.forEach(Hh),
        xi.forEach(Hh)
    }
    function Si(n, s) {
        n.blockedOn === s && (n.blockedOn = null,
        cu || (cu = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, b1)))
    }
    function ki(n) {
        function s(d) {
            return Si(d, n)
        }
        if (0 < Ho.length) {
            Si(Ho[0], n);
            for (var o = 1; o < Ho.length; o++) {
                var u = Ho[o];
                u.blockedOn === n && (u.blockedOn = null)
            }
        }
        for (qn !== null && Si(qn, n),
        Hn !== null && Si(Hn, n),
        Wn !== null && Si(Wn, n),
        wi.forEach(s),
        xi.forEach(s),
        o = 0; o < Kn.length; o++)
            u = Kn[o],
            u.blockedOn === n && (u.blockedOn = null);
        for (; 0 < Kn.length && (o = Kn[0],
        o.blockedOn === null); )
            qh(o),
            o.blockedOn === null && Kn.shift()
    }
    var ds = V.ReactCurrentBatchConfig
      , Ko = !0;
    function S1(n, s, o, u) {
        var d = Me
          , p = ds.transition;
        ds.transition = null;
        try {
            Me = 1,
            du(n, s, o, u)
        } finally {
            Me = d,
            ds.transition = p
        }
    }
    function k1(n, s, o, u) {
        var d = Me
          , p = ds.transition;
        ds.transition = null;
        try {
            Me = 4,
            du(n, s, o, u)
        } finally {
            Me = d,
            ds.transition = p
        }
    }
    function du(n, s, o, u) {
        if (Ko) {
            var d = fu(n, s, o, u);
            if (d === null)
                _u(n, s, u, Qo, o),
                $h(n, u);
            else if (x1(d, n, s, o, u))
                u.stopPropagation();
            else if ($h(n, u),
            s & 4 && -1 < w1.indexOf(n)) {
                for (; d !== null; ) {
                    var p = Mi(d);
                    if (p !== null && Vh(p),
                    p = fu(n, s, o, u),
                    p === null && _u(n, s, u, Qo, o),
                    p === d)
                        break;
                    d = p
                }
                d !== null && u.stopPropagation()
            } else
                _u(n, s, u, null, o)
        }
    }
    var Qo = null;
    function fu(n, s, o, u) {
        if (Qo = null,
        n = eu(u),
        n = Rr(n),
        n !== null)
            if (s = Pr(n),
            s === null)
                n = null;
            else if (o = s.tag,
            o === 13) {
                if (n = _h(s),
                n !== null)
                    return n;
                n = null
            } else if (o === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                n = null
            } else
                s !== n && (n = null);
        return Qo = n,
        null
    }
    function Wh(n) {
        switch (n) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (c1()) {
            case iu:
                return 1;
            case Mh:
                return 4;
            case Bo:
            case d1:
                return 16;
            case Dh:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Qn = null
      , hu = null
      , Go = null;
    function Kh() {
        if (Go)
            return Go;
        var n, s = hu, o = s.length, u, d = "value"in Qn ? Qn.value : Qn.textContent, p = d.length;
        for (n = 0; n < o && s[n] === d[n]; n++)
            ;
        var v = o - n;
        for (u = 1; u <= v && s[o - u] === d[p - u]; u++)
            ;
        return Go = d.slice(n, 1 < u ? 1 - u : void 0)
    }
    function Yo(n) {
        var s = n.keyCode;
        return "charCode"in n ? (n = n.charCode,
        n === 0 && s === 13 && (n = 13)) : n = s,
        n === 10 && (n = 13),
        32 <= n || n === 13 ? n : 0
    }
    function Xo() {
        return !0
    }
    function Qh() {
        return !1
    }
    function Dt(n) {
        function s(o, u, d, p, v) {
            this._reactName = o,
            this._targetInst = d,
            this.type = u,
            this.nativeEvent = p,
            this.target = v,
            this.currentTarget = null;
            for (var T in n)
                n.hasOwnProperty(T) && (o = n[T],
                this[T] = o ? o(p) : p[T]);
            return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Xo : Qh,
            this.isPropagationStopped = Qh,
            this
        }
        return X(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                this.isDefaultPrevented = Xo)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                this.isPropagationStopped = Xo)
            },
            persist: function() {},
            isPersistent: Xo
        }),
        s
    }
    var fs = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(n) {
            return n.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, pu = Dt(fs), Ei = X({}, fs, {
        view: 0,
        detail: 0
    }), E1 = Dt(Ei), mu, gu, Ti, Jo = X({}, Ei, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: vu,
        button: 0,
        buttons: 0,
        relatedTarget: function(n) {
            return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
        },
        movementX: function(n) {
            return "movementX"in n ? n.movementX : (n !== Ti && (Ti && n.type === "mousemove" ? (mu = n.screenX - Ti.screenX,
            gu = n.screenY - Ti.screenY) : gu = mu = 0,
            Ti = n),
            mu)
        },
        movementY: function(n) {
            return "movementY"in n ? n.movementY : gu
        }
    }), Gh = Dt(Jo), T1 = X({}, Jo, {
        dataTransfer: 0
    }), C1 = Dt(T1), P1 = X({}, Ei, {
        relatedTarget: 0
    }), yu = Dt(P1), R1 = X({}, fs, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), _1 = Dt(R1), A1 = X({}, fs, {
        clipboardData: function(n) {
            return "clipboardData"in n ? n.clipboardData : window.clipboardData
        }
    }), N1 = Dt(A1), j1 = X({}, fs, {
        data: 0
    }), Yh = Dt(j1), O1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, L1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, M1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function D1(n) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(n) : (n = M1[n]) ? !!s[n] : !1
    }
    function vu() {
        return D1
    }
    var I1 = X({}, Ei, {
        key: function(n) {
            if (n.key) {
                var s = O1[n.key] || n.key;
                if (s !== "Unidentified")
                    return s
            }
            return n.type === "keypress" ? (n = Yo(n),
            n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? L1[n.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: vu,
        charCode: function(n) {
            return n.type === "keypress" ? Yo(n) : 0
        },
        keyCode: function(n) {
            return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        },
        which: function(n) {
            return n.type === "keypress" ? Yo(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        }
    })
      , F1 = Dt(I1)
      , V1 = X({}, Jo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Xh = Dt(V1)
      , B1 = X({}, Ei, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: vu
    })
      , U1 = Dt(B1)
      , z1 = X({}, fs, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , $1 = Dt(z1)
      , q1 = X({}, Jo, {
        deltaX: function(n) {
            return "deltaX"in n ? n.deltaX : "wheelDeltaX"in n ? -n.wheelDeltaX : 0
        },
        deltaY: function(n) {
            return "deltaY"in n ? n.deltaY : "wheelDeltaY"in n ? -n.wheelDeltaY : "wheelDelta"in n ? -n.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , H1 = Dt(q1)
      , W1 = [9, 13, 27, 32]
      , wu = f && "CompositionEvent"in window
      , Ci = null;
    f && "documentMode"in document && (Ci = document.documentMode);
    var K1 = f && "TextEvent"in window && !Ci
      , Jh = f && (!wu || Ci && 8 < Ci && 11 >= Ci)
      , Zh = " "
      , ep = !1;
    function tp(n, s) {
        switch (n) {
        case "keyup":
            return W1.indexOf(s.keyCode) !== -1;
        case "keydown":
            return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function np(n) {
        return n = n.detail,
        typeof n == "object" && "data"in n ? n.data : null
    }
    var hs = !1;
    function Q1(n, s) {
        switch (n) {
        case "compositionend":
            return np(s);
        case "keypress":
            return s.which !== 32 ? null : (ep = !0,
            Zh);
        case "textInput":
            return n = s.data,
            n === Zh && ep ? null : n;
        default:
            return null
        }
    }
    function G1(n, s) {
        if (hs)
            return n === "compositionend" || !wu && tp(n, s) ? (n = Kh(),
            Go = hu = Qn = null,
            hs = !1,
            n) : null;
        switch (n) {
        case "paste":
            return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which)
            }
            return null;
        case "compositionend":
            return Jh && s.locale !== "ko" ? null : s.data;
        default:
            return null
        }
    }
    var Y1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function rp(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s === "input" ? !!Y1[n.type] : s === "textarea"
    }
    function sp(n, s, o, u) {
        Eh(u),
        s = ra(s, "onChange"),
        0 < s.length && (o = new pu("onChange","change",null,o,u),
        n.push({
            event: o,
            listeners: s
        }))
    }
    var Pi = null
      , Ri = null;
    function X1(n) {
        Sp(n, 0)
    }
    function Zo(n) {
        var s = vs(n);
        if (Cr(s))
            return n
    }
    function J1(n, s) {
        if (n === "change")
            return s
    }
    var ip = !1;
    if (f) {
        var xu;
        if (f) {
            var bu = "oninput"in document;
            if (!bu) {
                var op = document.createElement("div");
                op.setAttribute("oninput", "return;"),
                bu = typeof op.oninput == "function"
            }
            xu = bu
        } else
            xu = !1;
        ip = xu && (!document.documentMode || 9 < document.documentMode)
    }
    function ap() {
        Pi && (Pi.detachEvent("onpropertychange", lp),
        Ri = Pi = null)
    }
    function lp(n) {
        if (n.propertyName === "value" && Zo(Ri)) {
            var s = [];
            sp(s, Ri, n, eu(n)),
            Rh(X1, s)
        }
    }
    function Z1(n, s, o) {
        n === "focusin" ? (ap(),
        Pi = s,
        Ri = o,
        Pi.attachEvent("onpropertychange", lp)) : n === "focusout" && ap()
    }
    function eb(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown")
            return Zo(Ri)
    }
    function tb(n, s) {
        if (n === "click")
            return Zo(s)
    }
    function nb(n, s) {
        if (n === "input" || n === "change")
            return Zo(s)
    }
    function rb(n, s) {
        return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
    }
    var tn = typeof Object.is == "function" ? Object.is : rb;
    function _i(n, s) {
        if (tn(n, s))
            return !0;
        if (typeof n != "object" || n === null || typeof s != "object" || s === null)
            return !1;
        var o = Object.keys(n)
          , u = Object.keys(s);
        if (o.length !== u.length)
            return !1;
        for (u = 0; u < o.length; u++) {
            var d = o[u];
            if (!h.call(s, d) || !tn(n[d], s[d]))
                return !1
        }
        return !0
    }
    function up(n) {
        for (; n && n.firstChild; )
            n = n.firstChild;
        return n
    }
    function cp(n, s) {
        var o = up(n);
        n = 0;
        for (var u; o; ) {
            if (o.nodeType === 3) {
                if (u = n + o.textContent.length,
                n <= s && u >= s)
                    return {
                        node: o,
                        offset: s - n
                    };
                n = u
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = up(o)
        }
    }
    function dp(n, s) {
        return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? dp(n, s.parentNode) : "contains"in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
    }
    function fp() {
        for (var n = window, s = Do(); s instanceof n.HTMLIFrameElement; ) {
            try {
                var o = typeof s.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o)
                n = s.contentWindow;
            else
                break;
            s = Do(n.document)
        }
        return s
    }
    function Su(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
    }
    function sb(n) {
        var s = fp()
          , o = n.focusedElem
          , u = n.selectionRange;
        if (s !== o && o && o.ownerDocument && dp(o.ownerDocument.documentElement, o)) {
            if (u !== null && Su(o)) {
                if (s = u.start,
                n = u.end,
                n === void 0 && (n = s),
                "selectionStart"in o)
                    o.selectionStart = s,
                    o.selectionEnd = Math.min(n, o.value.length);
                else if (n = (s = o.ownerDocument || document) && s.defaultView || window,
                n.getSelection) {
                    n = n.getSelection();
                    var d = o.textContent.length
                      , p = Math.min(u.start, d);
                    u = u.end === void 0 ? p : Math.min(u.end, d),
                    !n.extend && p > u && (d = u,
                    u = p,
                    p = d),
                    d = cp(o, p);
                    var v = cp(o, u);
                    d && v && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== v.node || n.focusOffset !== v.offset) && (s = s.createRange(),
                    s.setStart(d.node, d.offset),
                    n.removeAllRanges(),
                    p > u ? (n.addRange(s),
                    n.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset),
                    n.addRange(s)))
                }
            }
            for (s = [],
            n = o; n = n.parentNode; )
                n.nodeType === 1 && s.push({
                    element: n,
                    left: n.scrollLeft,
                    top: n.scrollTop
                });
            for (typeof o.focus == "function" && o.focus(),
            o = 0; o < s.length; o++)
                n = s[o],
                n.element.scrollLeft = n.left,
                n.element.scrollTop = n.top
        }
    }
    var ib = f && "documentMode"in document && 11 >= document.documentMode
      , ps = null
      , ku = null
      , Ai = null
      , Eu = !1;
    function hp(n, s, o) {
        var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        Eu || ps == null || ps !== Do(u) || (u = ps,
        "selectionStart"in u && Su(u) ? u = {
            start: u.selectionStart,
            end: u.selectionEnd
        } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(),
        u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset
        }),
        Ai && _i(Ai, u) || (Ai = u,
        u = ra(ku, "onSelect"),
        0 < u.length && (s = new pu("onSelect","select",null,s,o),
        n.push({
            event: s,
            listeners: u
        }),
        s.target = ps)))
    }
    function ea(n, s) {
        var o = {};
        return o[n.toLowerCase()] = s.toLowerCase(),
        o["Webkit" + n] = "webkit" + s,
        o["Moz" + n] = "moz" + s,
        o
    }
    var ms = {
        animationend: ea("Animation", "AnimationEnd"),
        animationiteration: ea("Animation", "AnimationIteration"),
        animationstart: ea("Animation", "AnimationStart"),
        transitionend: ea("Transition", "TransitionEnd")
    }
      , Tu = {}
      , pp = {};
    f && (pp = document.createElement("div").style,
    "AnimationEvent"in window || (delete ms.animationend.animation,
    delete ms.animationiteration.animation,
    delete ms.animationstart.animation),
    "TransitionEvent"in window || delete ms.transitionend.transition);
    function ta(n) {
        if (Tu[n])
            return Tu[n];
        if (!ms[n])
            return n;
        var s = ms[n], o;
        for (o in s)
            if (s.hasOwnProperty(o) && o in pp)
                return Tu[n] = s[o];
        return n
    }
    var mp = ta("animationend")
      , gp = ta("animationiteration")
      , yp = ta("animationstart")
      , vp = ta("transitionend")
      , wp = new Map
      , xp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Gn(n, s) {
        wp.set(n, s),
        l(s, [n])
    }
    for (var Cu = 0; Cu < xp.length; Cu++) {
        var Pu = xp[Cu]
          , ob = Pu.toLowerCase()
          , ab = Pu[0].toUpperCase() + Pu.slice(1);
        Gn(ob, "on" + ab)
    }
    Gn(mp, "onAnimationEnd"),
    Gn(gp, "onAnimationIteration"),
    Gn(yp, "onAnimationStart"),
    Gn("dblclick", "onDoubleClick"),
    Gn("focusin", "onFocus"),
    Gn("focusout", "onBlur"),
    Gn(vp, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , lb = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));
    function bp(n, s, o) {
        var u = n.type || "unknown-event";
        n.currentTarget = o,
        o1(u, s, void 0, n),
        n.currentTarget = null
    }
    function Sp(n, s) {
        s = (s & 4) !== 0;
        for (var o = 0; o < n.length; o++) {
            var u = n[o]
              , d = u.event;
            u = u.listeners;
            e: {
                var p = void 0;
                if (s)
                    for (var v = u.length - 1; 0 <= v; v--) {
                        var T = u[v]
                          , C = T.instance
                          , D = T.currentTarget;
                        if (T = T.listener,
                        C !== p && d.isPropagationStopped())
                            break e;
                        bp(d, T, D),
                        p = C
                    }
                else
                    for (v = 0; v < u.length; v++) {
                        if (T = u[v],
                        C = T.instance,
                        D = T.currentTarget,
                        T = T.listener,
                        C !== p && d.isPropagationStopped())
                            break e;
                        bp(d, T, D),
                        p = C
                    }
            }
        }
        if (Vo)
            throw n = su,
            Vo = !1,
            su = null,
            n
    }
    function Ve(n, s) {
        var o = s[Mu];
        o === void 0 && (o = s[Mu] = new Set);
        var u = n + "__bubble";
        o.has(u) || (kp(s, n, 2, !1),
        o.add(u))
    }
    function Ru(n, s, o) {
        var u = 0;
        s && (u |= 4),
        kp(o, n, u, s)
    }
    var na = "_reactListening" + Math.random().toString(36).slice(2);
    function ji(n) {
        if (!n[na]) {
            n[na] = !0,
            i.forEach(function(o) {
                o !== "selectionchange" && (lb.has(o) || Ru(o, !1, n),
                Ru(o, !0, n))
            });
            var s = n.nodeType === 9 ? n : n.ownerDocument;
            s === null || s[na] || (s[na] = !0,
            Ru("selectionchange", !1, s))
        }
    }
    function kp(n, s, o, u) {
        switch (Wh(s)) {
        case 1:
            var d = S1;
            break;
        case 4:
            d = k1;
            break;
        default:
            d = du
        }
        o = d.bind(null, s, o, n),
        d = void 0,
        !ru || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (d = !0),
        u ? d !== void 0 ? n.addEventListener(s, o, {
            capture: !0,
            passive: d
        }) : n.addEventListener(s, o, !0) : d !== void 0 ? n.addEventListener(s, o, {
            passive: d
        }) : n.addEventListener(s, o, !1)
    }
    function _u(n, s, o, u, d) {
        var p = u;
        if ((s & 1) === 0 && (s & 2) === 0 && u !== null)
            e: for (; ; ) {
                if (u === null)
                    return;
                var v = u.tag;
                if (v === 3 || v === 4) {
                    var T = u.stateNode.containerInfo;
                    if (T === d || T.nodeType === 8 && T.parentNode === d)
                        break;
                    if (v === 4)
                        for (v = u.return; v !== null; ) {
                            var C = v.tag;
                            if ((C === 3 || C === 4) && (C = v.stateNode.containerInfo,
                            C === d || C.nodeType === 8 && C.parentNode === d))
                                return;
                            v = v.return
                        }
                    for (; T !== null; ) {
                        if (v = Rr(T),
                        v === null)
                            return;
                        if (C = v.tag,
                        C === 5 || C === 6) {
                            u = p = v;
                            continue e
                        }
                        T = T.parentNode
                    }
                }
                u = u.return
            }
        Rh(function() {
            var D = p
              , H = eu(o)
              , K = [];
            e: {
                var q = wp.get(n);
                if (q !== void 0) {
                    var Z = pu
                      , se = n;
                    switch (n) {
                    case "keypress":
                        if (Yo(o) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Z = F1;
                        break;
                    case "focusin":
                        se = "focus",
                        Z = yu;
                        break;
                    case "focusout":
                        se = "blur",
                        Z = yu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Z = yu;
                        break;
                    case "click":
                        if (o.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        Z = Gh;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Z = C1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Z = U1;
                        break;
                    case mp:
                    case gp:
                    case yp:
                        Z = _1;
                        break;
                    case vp:
                        Z = $1;
                        break;
                    case "scroll":
                        Z = E1;
                        break;
                    case "wheel":
                        Z = H1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Z = N1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Z = Xh
                    }
                    var ae = (s & 4) !== 0
                      , Ye = !ae && n === "scroll"
                      , O = ae ? q !== null ? q + "Capture" : null : q;
                    ae = [];
                    for (var R = D, L; R !== null; ) {
                        L = R;
                        var G = L.stateNode;
                        if (L.tag === 5 && G !== null && (L = G,
                        O !== null && (G = pi(R, O),
                        G != null && ae.push(Oi(R, G, L)))),
                        Ye)
                            break;
                        R = R.return
                    }
                    0 < ae.length && (q = new Z(q,se,null,o,H),
                    K.push({
                        event: q,
                        listeners: ae
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if (q = n === "mouseover" || n === "pointerover",
                    Z = n === "mouseout" || n === "pointerout",
                    q && o !== Zl && (se = o.relatedTarget || o.fromElement) && (Rr(se) || se[Pn]))
                        break e;
                    if ((Z || q) && (q = H.window === H ? H : (q = H.ownerDocument) ? q.defaultView || q.parentWindow : window,
                    Z ? (se = o.relatedTarget || o.toElement,
                    Z = D,
                    se = se ? Rr(se) : null,
                    se !== null && (Ye = Pr(se),
                    se !== Ye || se.tag !== 5 && se.tag !== 6) && (se = null)) : (Z = null,
                    se = D),
                    Z !== se)) {
                        if (ae = Gh,
                        G = "onMouseLeave",
                        O = "onMouseEnter",
                        R = "mouse",
                        (n === "pointerout" || n === "pointerover") && (ae = Xh,
                        G = "onPointerLeave",
                        O = "onPointerEnter",
                        R = "pointer"),
                        Ye = Z == null ? q : vs(Z),
                        L = se == null ? q : vs(se),
                        q = new ae(G,R + "leave",Z,o,H),
                        q.target = Ye,
                        q.relatedTarget = L,
                        G = null,
                        Rr(H) === D && (ae = new ae(O,R + "enter",se,o,H),
                        ae.target = L,
                        ae.relatedTarget = Ye,
                        G = ae),
                        Ye = G,
                        Z && se)
                            t: {
                                for (ae = Z,
                                O = se,
                                R = 0,
                                L = ae; L; L = gs(L))
                                    R++;
                                for (L = 0,
                                G = O; G; G = gs(G))
                                    L++;
                                for (; 0 < R - L; )
                                    ae = gs(ae),
                                    R--;
                                for (; 0 < L - R; )
                                    O = gs(O),
                                    L--;
                                for (; R--; ) {
                                    if (ae === O || O !== null && ae === O.alternate)
                                        break t;
                                    ae = gs(ae),
                                    O = gs(O)
                                }
                                ae = null
                            }
                        else
                            ae = null;
                        Z !== null && Ep(K, q, Z, ae, !1),
                        se !== null && Ye !== null && Ep(K, Ye, se, ae, !0)
                    }
                }
                e: {
                    if (q = D ? vs(D) : window,
                    Z = q.nodeName && q.nodeName.toLowerCase(),
                    Z === "select" || Z === "input" && q.type === "file")
                        var ue = J1;
                    else if (rp(q))
                        if (ip)
                            ue = nb;
                        else {
                            ue = eb;
                            var me = Z1
                        }
                    else
                        (Z = q.nodeName) && Z.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (ue = tb);
                    if (ue && (ue = ue(n, D))) {
                        sp(K, ue, o, H);
                        break e
                    }
                    me && me(n, q, D),
                    n === "focusout" && (me = q._wrapperState) && me.controlled && q.type === "number" && Ql(q, "number", q.value)
                }
                switch (me = D ? vs(D) : window,
                n) {
                case "focusin":
                    (rp(me) || me.contentEditable === "true") && (ps = me,
                    ku = D,
                    Ai = null);
                    break;
                case "focusout":
                    Ai = ku = ps = null;
                    break;
                case "mousedown":
                    Eu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Eu = !1,
                    hp(K, o, H);
                    break;
                case "selectionchange":
                    if (ib)
                        break;
                case "keydown":
                case "keyup":
                    hp(K, o, H)
                }
                var ge;
                if (wu)
                    e: {
                        switch (n) {
                        case "compositionstart":
                            var we = "onCompositionStart";
                            break e;
                        case "compositionend":
                            we = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            we = "onCompositionUpdate";
                            break e
                        }
                        we = void 0
                    }
                else
                    hs ? tp(n, o) && (we = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (we = "onCompositionStart");
                we && (Jh && o.locale !== "ko" && (hs || we !== "onCompositionStart" ? we === "onCompositionEnd" && hs && (ge = Kh()) : (Qn = H,
                hu = "value"in Qn ? Qn.value : Qn.textContent,
                hs = !0)),
                me = ra(D, we),
                0 < me.length && (we = new Yh(we,n,null,o,H),
                K.push({
                    event: we,
                    listeners: me
                }),
                ge ? we.data = ge : (ge = np(o),
                ge !== null && (we.data = ge)))),
                (ge = K1 ? Q1(n, o) : G1(n, o)) && (D = ra(D, "onBeforeInput"),
                0 < D.length && (H = new Yh("onBeforeInput","beforeinput",null,o,H),
                K.push({
                    event: H,
                    listeners: D
                }),
                H.data = ge))
            }
            Sp(K, s)
        })
    }
    function Oi(n, s, o) {
        return {
            instance: n,
            listener: s,
            currentTarget: o
        }
    }
    function ra(n, s) {
        for (var o = s + "Capture", u = []; n !== null; ) {
            var d = n
              , p = d.stateNode;
            d.tag === 5 && p !== null && (d = p,
            p = pi(n, o),
            p != null && u.unshift(Oi(n, p, d)),
            p = pi(n, s),
            p != null && u.push(Oi(n, p, d))),
            n = n.return
        }
        return u
    }
    function gs(n) {
        if (n === null)
            return null;
        do
            n = n.return;
        while (n && n.tag !== 5);
        return n || null
    }
    function Ep(n, s, o, u, d) {
        for (var p = s._reactName, v = []; o !== null && o !== u; ) {
            var T = o
              , C = T.alternate
              , D = T.stateNode;
            if (C !== null && C === u)
                break;
            T.tag === 5 && D !== null && (T = D,
            d ? (C = pi(o, p),
            C != null && v.unshift(Oi(o, C, T))) : d || (C = pi(o, p),
            C != null && v.push(Oi(o, C, T)))),
            o = o.return
        }
        v.length !== 0 && n.push({
            event: s,
            listeners: v
        })
    }
    var ub = /\r\n?/g
      , cb = /\u0000|\uFFFD/g;
    function Tp(n) {
        return (typeof n == "string" ? n : "" + n).replace(ub, `
`).replace(cb, "")
    }
    function sa(n, s, o) {
        if (s = Tp(s),
        Tp(n) !== s && o)
            throw Error(r(425))
    }
    function ia() {}
    var Au = null
      , Nu = null;
    function ju(n, s) {
        return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var Ou = typeof setTimeout == "function" ? setTimeout : void 0
      , db = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Cp = typeof Promise == "function" ? Promise : void 0
      , fb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cp < "u" ? function(n) {
        return Cp.resolve(null).then(n).catch(hb)
    }
    : Ou;
    function hb(n) {
        setTimeout(function() {
            throw n
        })
    }
    function Lu(n, s) {
        var o = s
          , u = 0;
        do {
            var d = o.nextSibling;
            if (n.removeChild(o),
            d && d.nodeType === 8)
                if (o = d.data,
                o === "/$") {
                    if (u === 0) {
                        n.removeChild(d),
                        ki(s);
                        return
                    }
                    u--
                } else
                    o !== "$" && o !== "$?" && o !== "$!" || u++;
            o = d
        } while (o);
        ki(s)
    }
    function Yn(n) {
        for (; n != null; n = n.nextSibling) {
            var s = n.nodeType;
            if (s === 1 || s === 3)
                break;
            if (s === 8) {
                if (s = n.data,
                s === "$" || s === "$!" || s === "$?")
                    break;
                if (s === "/$")
                    return null
            }
        }
        return n
    }
    function Pp(n) {
        n = n.previousSibling;
        for (var s = 0; n; ) {
            if (n.nodeType === 8) {
                var o = n.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (s === 0)
                        return n;
                    s--
                } else
                    o === "/$" && s++
            }
            n = n.previousSibling
        }
        return null
    }
    var ys = Math.random().toString(36).slice(2)
      , pn = "__reactFiber$" + ys
      , Li = "__reactProps$" + ys
      , Pn = "__reactContainer$" + ys
      , Mu = "__reactEvents$" + ys
      , pb = "__reactListeners$" + ys
      , mb = "__reactHandles$" + ys;
    function Rr(n) {
        var s = n[pn];
        if (s)
            return s;
        for (var o = n.parentNode; o; ) {
            if (s = o[Pn] || o[pn]) {
                if (o = s.alternate,
                s.child !== null || o !== null && o.child !== null)
                    for (n = Pp(n); n !== null; ) {
                        if (o = n[pn])
                            return o;
                        n = Pp(n)
                    }
                return s
            }
            n = o,
            o = n.parentNode
        }
        return null
    }
    function Mi(n) {
        return n = n[pn] || n[Pn],
        !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
    }
    function vs(n) {
        if (n.tag === 5 || n.tag === 6)
            return n.stateNode;
        throw Error(r(33))
    }
    function oa(n) {
        return n[Li] || null
    }
    var Du = []
      , ws = -1;
    function Xn(n) {
        return {
            current: n
        }
    }
    function Be(n) {
        0 > ws || (n.current = Du[ws],
        Du[ws] = null,
        ws--)
    }
    function Fe(n, s) {
        ws++,
        Du[ws] = n.current,
        n.current = s
    }
    var Jn = {}
      , pt = Xn(Jn)
      , Tt = Xn(!1)
      , _r = Jn;
    function xs(n, s) {
        var o = n.type.contextTypes;
        if (!o)
            return Jn;
        var u = n.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === s)
            return u.__reactInternalMemoizedMaskedChildContext;
        var d = {}, p;
        for (p in o)
            d[p] = s[p];
        return u && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = s,
        n.__reactInternalMemoizedMaskedChildContext = d),
        d
    }
    function Ct(n) {
        return n = n.childContextTypes,
        n != null
    }
    function aa() {
        Be(Tt),
        Be(pt)
    }
    function Rp(n, s, o) {
        if (pt.current !== Jn)
            throw Error(r(168));
        Fe(pt, s),
        Fe(Tt, o)
    }
    function _p(n, s, o) {
        var u = n.stateNode;
        if (s = s.childContextTypes,
        typeof u.getChildContext != "function")
            return o;
        u = u.getChildContext();
        for (var d in u)
            if (!(d in s))
                throw Error(r(108, xe(n) || "Unknown", d));
        return X({}, o, u)
    }
    function la(n) {
        return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Jn,
        _r = pt.current,
        Fe(pt, n),
        Fe(Tt, Tt.current),
        !0
    }
    function Ap(n, s, o) {
        var u = n.stateNode;
        if (!u)
            throw Error(r(169));
        o ? (n = _p(n, s, _r),
        u.__reactInternalMemoizedMergedChildContext = n,
        Be(Tt),
        Be(pt),
        Fe(pt, n)) : Be(Tt),
        Fe(Tt, o)
    }
    var Rn = null
      , ua = !1
      , Iu = !1;
    function Np(n) {
        Rn === null ? Rn = [n] : Rn.push(n)
    }
    function gb(n) {
        ua = !0,
        Np(n)
    }
    function Zn() {
        if (!Iu && Rn !== null) {
            Iu = !0;
            var n = 0
              , s = Me;
            try {
                var o = Rn;
                for (Me = 1; n < o.length; n++) {
                    var u = o[n];
                    do
                        u = u(!0);
                    while (u !== null)
                }
                Rn = null,
                ua = !1
            } catch (d) {
                throw Rn !== null && (Rn = Rn.slice(n + 1)),
                Oh(iu, Zn),
                d
            } finally {
                Me = s,
                Iu = !1
            }
        }
        return null
    }
    var bs = []
      , Ss = 0
      , ca = null
      , da = 0
      , zt = []
      , $t = 0
      , Ar = null
      , _n = 1
      , An = "";
    function Nr(n, s) {
        bs[Ss++] = da,
        bs[Ss++] = ca,
        ca = n,
        da = s
    }
    function jp(n, s, o) {
        zt[$t++] = _n,
        zt[$t++] = An,
        zt[$t++] = Ar,
        Ar = n;
        var u = _n;
        n = An;
        var d = 32 - en(u) - 1;
        u &= ~(1 << d),
        o += 1;
        var p = 32 - en(s) + d;
        if (30 < p) {
            var v = d - d % 5;
            p = (u & (1 << v) - 1).toString(32),
            u >>= v,
            d -= v,
            _n = 1 << 32 - en(s) + d | o << d | u,
            An = p + n
        } else
            _n = 1 << p | o << d | u,
            An = n
    }
    function Fu(n) {
        n.return !== null && (Nr(n, 1),
        jp(n, 1, 0))
    }
    function Vu(n) {
        for (; n === ca; )
            ca = bs[--Ss],
            bs[Ss] = null,
            da = bs[--Ss],
            bs[Ss] = null;
        for (; n === Ar; )
            Ar = zt[--$t],
            zt[$t] = null,
            An = zt[--$t],
            zt[$t] = null,
            _n = zt[--$t],
            zt[$t] = null
    }
    var It = null
      , Ft = null
      , ze = !1
      , nn = null;
    function Op(n, s) {
        var o = Kt(5, null, null, 0);
        o.elementType = "DELETED",
        o.stateNode = s,
        o.return = n,
        s = n.deletions,
        s === null ? (n.deletions = [o],
        n.flags |= 16) : s.push(o)
    }
    function Lp(n, s) {
        switch (n.tag) {
        case 5:
            var o = n.type;
            return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s,
            s !== null ? (n.stateNode = s,
            It = n,
            Ft = Yn(s.firstChild),
            !0) : !1;
        case 6:
            return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s,
            s !== null ? (n.stateNode = s,
            It = n,
            Ft = null,
            !0) : !1;
        case 13:
            return s = s.nodeType !== 8 ? null : s,
            s !== null ? (o = Ar !== null ? {
                id: _n,
                overflow: An
            } : null,
            n.memoizedState = {
                dehydrated: s,
                treeContext: o,
                retryLane: 1073741824
            },
            o = Kt(18, null, null, 0),
            o.stateNode = s,
            o.return = n,
            n.child = o,
            It = n,
            Ft = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Bu(n) {
        return (n.mode & 1) !== 0 && (n.flags & 128) === 0
    }
    function Uu(n) {
        if (ze) {
            var s = Ft;
            if (s) {
                var o = s;
                if (!Lp(n, s)) {
                    if (Bu(n))
                        throw Error(r(418));
                    s = Yn(o.nextSibling);
                    var u = It;
                    s && Lp(n, s) ? Op(u, o) : (n.flags = n.flags & -4097 | 2,
                    ze = !1,
                    It = n)
                }
            } else {
                if (Bu(n))
                    throw Error(r(418));
                n.flags = n.flags & -4097 | 2,
                ze = !1,
                It = n
            }
        }
    }
    function Mp(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
            n = n.return;
        It = n
    }
    function fa(n) {
        if (n !== It)
            return !1;
        if (!ze)
            return Mp(n),
            ze = !0,
            !1;
        var s;
        if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type,
        s = s !== "head" && s !== "body" && !ju(n.type, n.memoizedProps)),
        s && (s = Ft)) {
            if (Bu(n))
                throw Dp(),
                Error(r(418));
            for (; s; )
                Op(n, s),
                s = Yn(s.nextSibling)
        }
        if (Mp(n),
        n.tag === 13) {
            if (n = n.memoizedState,
            n = n !== null ? n.dehydrated : null,
            !n)
                throw Error(r(317));
            e: {
                for (n = n.nextSibling,
                s = 0; n; ) {
                    if (n.nodeType === 8) {
                        var o = n.data;
                        if (o === "/$") {
                            if (s === 0) {
                                Ft = Yn(n.nextSibling);
                                break e
                            }
                            s--
                        } else
                            o !== "$" && o !== "$!" && o !== "$?" || s++
                    }
                    n = n.nextSibling
                }
                Ft = null
            }
        } else
            Ft = It ? Yn(n.stateNode.nextSibling) : null;
        return !0
    }
    function Dp() {
        for (var n = Ft; n; )
            n = Yn(n.nextSibling)
    }
    function ks() {
        Ft = It = null,
        ze = !1
    }
    function zu(n) {
        nn === null ? nn = [n] : nn.push(n)
    }
    var yb = V.ReactCurrentBatchConfig;
    function Di(n, s, o) {
        if (n = o.ref,
        n !== null && typeof n != "function" && typeof n != "object") {
            if (o._owner) {
                if (o = o._owner,
                o) {
                    if (o.tag !== 1)
                        throw Error(r(309));
                    var u = o.stateNode
                }
                if (!u)
                    throw Error(r(147, n));
                var d = u
                  , p = "" + n;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p ? s.ref : (s = function(v) {
                    var T = d.refs;
                    v === null ? delete T[p] : T[p] = v
                }
                ,
                s._stringRef = p,
                s)
            }
            if (typeof n != "string")
                throw Error(r(284));
            if (!o._owner)
                throw Error(r(290, n))
        }
        return n
    }
    function ha(n, s) {
        throw n = Object.prototype.toString.call(s),
        Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
    }
    function Ip(n) {
        var s = n._init;
        return s(n._payload)
    }
    function Fp(n) {
        function s(O, R) {
            if (n) {
                var L = O.deletions;
                L === null ? (O.deletions = [R],
                O.flags |= 16) : L.push(R)
            }
        }
        function o(O, R) {
            if (!n)
                return null;
            for (; R !== null; )
                s(O, R),
                R = R.sibling;
            return null
        }
        function u(O, R) {
            for (O = new Map; R !== null; )
                R.key !== null ? O.set(R.key, R) : O.set(R.index, R),
                R = R.sibling;
            return O
        }
        function d(O, R) {
            return O = ar(O, R),
            O.index = 0,
            O.sibling = null,
            O
        }
        function p(O, R, L) {
            return O.index = L,
            n ? (L = O.alternate,
            L !== null ? (L = L.index,
            L < R ? (O.flags |= 2,
            R) : L) : (O.flags |= 2,
            R)) : (O.flags |= 1048576,
            R)
        }
        function v(O) {
            return n && O.alternate === null && (O.flags |= 2),
            O
        }
        function T(O, R, L, G) {
            return R === null || R.tag !== 6 ? (R = Oc(L, O.mode, G),
            R.return = O,
            R) : (R = d(R, L),
            R.return = O,
            R)
        }
        function C(O, R, L, G) {
            var ue = L.type;
            return ue === ne ? H(O, R, L.props.children, G, L.key) : R !== null && (R.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === he && Ip(ue) === R.type) ? (G = d(R, L.props),
            G.ref = Di(O, R, L),
            G.return = O,
            G) : (G = Ia(L.type, L.key, L.props, null, O.mode, G),
            G.ref = Di(O, R, L),
            G.return = O,
            G)
        }
        function D(O, R, L, G) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== L.containerInfo || R.stateNode.implementation !== L.implementation ? (R = Lc(L, O.mode, G),
            R.return = O,
            R) : (R = d(R, L.children || []),
            R.return = O,
            R)
        }
        function H(O, R, L, G, ue) {
            return R === null || R.tag !== 7 ? (R = Vr(L, O.mode, G, ue),
            R.return = O,
            R) : (R = d(R, L),
            R.return = O,
            R)
        }
        function K(O, R, L) {
            if (typeof R == "string" && R !== "" || typeof R == "number")
                return R = Oc("" + R, O.mode, L),
                R.return = O,
                R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case U:
                    return L = Ia(R.type, R.key, R.props, null, O.mode, L),
                    L.ref = Di(O, null, R),
                    L.return = O,
                    L;
                case Y:
                    return R = Lc(R, O.mode, L),
                    R.return = O,
                    R;
                case he:
                    var G = R._init;
                    return K(O, G(R._payload), L)
                }
                if (di(R) || le(R))
                    return R = Vr(R, O.mode, L, null),
                    R.return = O,
                    R;
                ha(O, R)
            }
            return null
        }
        function q(O, R, L, G) {
            var ue = R !== null ? R.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number")
                return ue !== null ? null : T(O, R, "" + L, G);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case U:
                    return L.key === ue ? C(O, R, L, G) : null;
                case Y:
                    return L.key === ue ? D(O, R, L, G) : null;
                case he:
                    return ue = L._init,
                    q(O, R, ue(L._payload), G)
                }
                if (di(L) || le(L))
                    return ue !== null ? null : H(O, R, L, G, null);
                ha(O, L)
            }
            return null
        }
        function Z(O, R, L, G, ue) {
            if (typeof G == "string" && G !== "" || typeof G == "number")
                return O = O.get(L) || null,
                T(R, O, "" + G, ue);
            if (typeof G == "object" && G !== null) {
                switch (G.$$typeof) {
                case U:
                    return O = O.get(G.key === null ? L : G.key) || null,
                    C(R, O, G, ue);
                case Y:
                    return O = O.get(G.key === null ? L : G.key) || null,
                    D(R, O, G, ue);
                case he:
                    var me = G._init;
                    return Z(O, R, L, me(G._payload), ue)
                }
                if (di(G) || le(G))
                    return O = O.get(L) || null,
                    H(R, O, G, ue, null);
                ha(R, G)
            }
            return null
        }
        function se(O, R, L, G) {
            for (var ue = null, me = null, ge = R, we = R = 0, at = null; ge !== null && we < L.length; we++) {
                ge.index > we ? (at = ge,
                ge = null) : at = ge.sibling;
                var je = q(O, ge, L[we], G);
                if (je === null) {
                    ge === null && (ge = at);
                    break
                }
                n && ge && je.alternate === null && s(O, ge),
                R = p(je, R, we),
                me === null ? ue = je : me.sibling = je,
                me = je,
                ge = at
            }
            if (we === L.length)
                return o(O, ge),
                ze && Nr(O, we),
                ue;
            if (ge === null) {
                for (; we < L.length; we++)
                    ge = K(O, L[we], G),
                    ge !== null && (R = p(ge, R, we),
                    me === null ? ue = ge : me.sibling = ge,
                    me = ge);
                return ze && Nr(O, we),
                ue
            }
            for (ge = u(O, ge); we < L.length; we++)
                at = Z(ge, O, we, L[we], G),
                at !== null && (n && at.alternate !== null && ge.delete(at.key === null ? we : at.key),
                R = p(at, R, we),
                me === null ? ue = at : me.sibling = at,
                me = at);
            return n && ge.forEach(function(lr) {
                return s(O, lr)
            }),
            ze && Nr(O, we),
            ue
        }
        function ae(O, R, L, G) {
            var ue = le(L);
            if (typeof ue != "function")
                throw Error(r(150));
            if (L = ue.call(L),
            L == null)
                throw Error(r(151));
            for (var me = ue = null, ge = R, we = R = 0, at = null, je = L.next(); ge !== null && !je.done; we++,
            je = L.next()) {
                ge.index > we ? (at = ge,
                ge = null) : at = ge.sibling;
                var lr = q(O, ge, je.value, G);
                if (lr === null) {
                    ge === null && (ge = at);
                    break
                }
                n && ge && lr.alternate === null && s(O, ge),
                R = p(lr, R, we),
                me === null ? ue = lr : me.sibling = lr,
                me = lr,
                ge = at
            }
            if (je.done)
                return o(O, ge),
                ze && Nr(O, we),
                ue;
            if (ge === null) {
                for (; !je.done; we++,
                je = L.next())
                    je = K(O, je.value, G),
                    je !== null && (R = p(je, R, we),
                    me === null ? ue = je : me.sibling = je,
                    me = je);
                return ze && Nr(O, we),
                ue
            }
            for (ge = u(O, ge); !je.done; we++,
            je = L.next())
                je = Z(ge, O, we, je.value, G),
                je !== null && (n && je.alternate !== null && ge.delete(je.key === null ? we : je.key),
                R = p(je, R, we),
                me === null ? ue = je : me.sibling = je,
                me = je);
            return n && ge.forEach(function(Yb) {
                return s(O, Yb)
            }),
            ze && Nr(O, we),
            ue
        }
        function Ye(O, R, L, G) {
            if (typeof L == "object" && L !== null && L.type === ne && L.key === null && (L = L.props.children),
            typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case U:
                    e: {
                        for (var ue = L.key, me = R; me !== null; ) {
                            if (me.key === ue) {
                                if (ue = L.type,
                                ue === ne) {
                                    if (me.tag === 7) {
                                        o(O, me.sibling),
                                        R = d(me, L.props.children),
                                        R.return = O,
                                        O = R;
                                        break e
                                    }
                                } else if (me.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === he && Ip(ue) === me.type) {
                                    o(O, me.sibling),
                                    R = d(me, L.props),
                                    R.ref = Di(O, me, L),
                                    R.return = O,
                                    O = R;
                                    break e
                                }
                                o(O, me);
                                break
                            } else
                                s(O, me);
                            me = me.sibling
                        }
                        L.type === ne ? (R = Vr(L.props.children, O.mode, G, L.key),
                        R.return = O,
                        O = R) : (G = Ia(L.type, L.key, L.props, null, O.mode, G),
                        G.ref = Di(O, R, L),
                        G.return = O,
                        O = G)
                    }
                    return v(O);
                case Y:
                    e: {
                        for (me = L.key; R !== null; ) {
                            if (R.key === me)
                                if (R.tag === 4 && R.stateNode.containerInfo === L.containerInfo && R.stateNode.implementation === L.implementation) {
                                    o(O, R.sibling),
                                    R = d(R, L.children || []),
                                    R.return = O,
                                    O = R;
                                    break e
                                } else {
                                    o(O, R);
                                    break
                                }
                            else
                                s(O, R);
                            R = R.sibling
                        }
                        R = Lc(L, O.mode, G),
                        R.return = O,
                        O = R
                    }
                    return v(O);
                case he:
                    return me = L._init,
                    Ye(O, R, me(L._payload), G)
                }
                if (di(L))
                    return se(O, R, L, G);
                if (le(L))
                    return ae(O, R, L, G);
                ha(O, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L,
            R !== null && R.tag === 6 ? (o(O, R.sibling),
            R = d(R, L),
            R.return = O,
            O = R) : (o(O, R),
            R = Oc(L, O.mode, G),
            R.return = O,
            O = R),
            v(O)) : o(O, R)
        }
        return Ye
    }
    var Es = Fp(!0)
      , Vp = Fp(!1)
      , pa = Xn(null)
      , ma = null
      , Ts = null
      , $u = null;
    function qu() {
        $u = Ts = ma = null
    }
    function Hu(n) {
        var s = pa.current;
        Be(pa),
        n._currentValue = s
    }
    function Wu(n, s, o) {
        for (; n !== null; ) {
            var u = n.alternate;
            if ((n.childLanes & s) !== s ? (n.childLanes |= s,
            u !== null && (u.childLanes |= s)) : u !== null && (u.childLanes & s) !== s && (u.childLanes |= s),
            n === o)
                break;
            n = n.return
        }
    }
    function Cs(n, s) {
        ma = n,
        $u = Ts = null,
        n = n.dependencies,
        n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (Pt = !0),
        n.firstContext = null)
    }
    function qt(n) {
        var s = n._currentValue;
        if ($u !== n)
            if (n = {
                context: n,
                memoizedValue: s,
                next: null
            },
            Ts === null) {
                if (ma === null)
                    throw Error(r(308));
                Ts = n,
                ma.dependencies = {
                    lanes: 0,
                    firstContext: n
                }
            } else
                Ts = Ts.next = n;
        return s
    }
    var jr = null;
    function Ku(n) {
        jr === null ? jr = [n] : jr.push(n)
    }
    function Bp(n, s, o, u) {
        var d = s.interleaved;
        return d === null ? (o.next = o,
        Ku(s)) : (o.next = d.next,
        d.next = o),
        s.interleaved = o,
        Nn(n, u)
    }
    function Nn(n, s) {
        n.lanes |= s;
        var o = n.alternate;
        for (o !== null && (o.lanes |= s),
        o = n,
        n = n.return; n !== null; )
            n.childLanes |= s,
            o = n.alternate,
            o !== null && (o.childLanes |= s),
            o = n,
            n = n.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var er = !1;
    function Qu(n) {
        n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Up(n, s) {
        n = n.updateQueue,
        s.updateQueue === n && (s.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
        })
    }
    function jn(n, s) {
        return {
            eventTime: n,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function tr(n, s, o) {
        var u = n.updateQueue;
        if (u === null)
            return null;
        if (u = u.shared,
        (Ae & 2) !== 0) {
            var d = u.pending;
            return d === null ? s.next = s : (s.next = d.next,
            d.next = s),
            u.pending = s,
            Nn(n, o)
        }
        return d = u.interleaved,
        d === null ? (s.next = s,
        Ku(u)) : (s.next = d.next,
        d.next = s),
        u.interleaved = s,
        Nn(n, o)
    }
    function ga(n, s, o) {
        if (s = s.updateQueue,
        s !== null && (s = s.shared,
        (o & 4194240) !== 0)) {
            var u = s.lanes;
            u &= n.pendingLanes,
            o |= u,
            s.lanes = o,
            lu(n, o)
        }
    }
    function zp(n, s) {
        var o = n.updateQueue
          , u = n.alternate;
        if (u !== null && (u = u.updateQueue,
        o === u)) {
            var d = null
              , p = null;
            if (o = o.firstBaseUpdate,
            o !== null) {
                do {
                    var v = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    p === null ? d = p = v : p = p.next = v,
                    o = o.next
                } while (o !== null);
                p === null ? d = p = s : p = p.next = s
            } else
                d = p = s;
            o = {
                baseState: u.baseState,
                firstBaseUpdate: d,
                lastBaseUpdate: p,
                shared: u.shared,
                effects: u.effects
            },
            n.updateQueue = o;
            return
        }
        n = o.lastBaseUpdate,
        n === null ? o.firstBaseUpdate = s : n.next = s,
        o.lastBaseUpdate = s
    }
    function ya(n, s, o, u) {
        var d = n.updateQueue;
        er = !1;
        var p = d.firstBaseUpdate
          , v = d.lastBaseUpdate
          , T = d.shared.pending;
        if (T !== null) {
            d.shared.pending = null;
            var C = T
              , D = C.next;
            C.next = null,
            v === null ? p = D : v.next = D,
            v = C;
            var H = n.alternate;
            H !== null && (H = H.updateQueue,
            T = H.lastBaseUpdate,
            T !== v && (T === null ? H.firstBaseUpdate = D : T.next = D,
            H.lastBaseUpdate = C))
        }
        if (p !== null) {
            var K = d.baseState;
            v = 0,
            H = D = C = null,
            T = p;
            do {
                var q = T.lane
                  , Z = T.eventTime;
                if ((u & q) === q) {
                    H !== null && (H = H.next = {
                        eventTime: Z,
                        lane: 0,
                        tag: T.tag,
                        payload: T.payload,
                        callback: T.callback,
                        next: null
                    });
                    e: {
                        var se = n
                          , ae = T;
                        switch (q = s,
                        Z = o,
                        ae.tag) {
                        case 1:
                            if (se = ae.payload,
                            typeof se == "function") {
                                K = se.call(Z, K, q);
                                break e
                            }
                            K = se;
                            break e;
                        case 3:
                            se.flags = se.flags & -65537 | 128;
                        case 0:
                            if (se = ae.payload,
                            q = typeof se == "function" ? se.call(Z, K, q) : se,
                            q == null)
                                break e;
                            K = X({}, K, q);
                            break e;
                        case 2:
                            er = !0
                        }
                    }
                    T.callback !== null && T.lane !== 0 && (n.flags |= 64,
                    q = d.effects,
                    q === null ? d.effects = [T] : q.push(T))
                } else
                    Z = {
                        eventTime: Z,
                        lane: q,
                        tag: T.tag,
                        payload: T.payload,
                        callback: T.callback,
                        next: null
                    },
                    H === null ? (D = H = Z,
                    C = K) : H = H.next = Z,
                    v |= q;
                if (T = T.next,
                T === null) {
                    if (T = d.shared.pending,
                    T === null)
                        break;
                    q = T,
                    T = q.next,
                    q.next = null,
                    d.lastBaseUpdate = q,
                    d.shared.pending = null
                }
            } while (!0);
            if (H === null && (C = K),
            d.baseState = C,
            d.firstBaseUpdate = D,
            d.lastBaseUpdate = H,
            s = d.shared.interleaved,
            s !== null) {
                d = s;
                do
                    v |= d.lane,
                    d = d.next;
                while (d !== s)
            } else
                p === null && (d.shared.lanes = 0);
            Mr |= v,
            n.lanes = v,
            n.memoizedState = K
        }
    }
    function $p(n, s, o) {
        if (n = s.effects,
        s.effects = null,
        n !== null)
            for (s = 0; s < n.length; s++) {
                var u = n[s]
                  , d = u.callback;
                if (d !== null) {
                    if (u.callback = null,
                    u = o,
                    typeof d != "function")
                        throw Error(r(191, d));
                    d.call(u)
                }
            }
    }
    var Ii = {}
      , mn = Xn(Ii)
      , Fi = Xn(Ii)
      , Vi = Xn(Ii);
    function Or(n) {
        if (n === Ii)
            throw Error(r(174));
        return n
    }
    function Gu(n, s) {
        switch (Fe(Vi, s),
        Fe(Fi, n),
        Fe(mn, Ii),
        n = s.nodeType,
        n) {
        case 9:
        case 11:
            s = (s = s.documentElement) ? s.namespaceURI : Yl(null, "");
            break;
        default:
            n = n === 8 ? s.parentNode : s,
            s = n.namespaceURI || null,
            n = n.tagName,
            s = Yl(s, n)
        }
        Be(mn),
        Fe(mn, s)
    }
    function Ps() {
        Be(mn),
        Be(Fi),
        Be(Vi)
    }
    function qp(n) {
        Or(Vi.current);
        var s = Or(mn.current)
          , o = Yl(s, n.type);
        s !== o && (Fe(Fi, n),
        Fe(mn, o))
    }
    function Yu(n) {
        Fi.current === n && (Be(mn),
        Be(Fi))
    }
    var $e = Xn(0);
    function va(n) {
        for (var s = n; s !== null; ) {
            if (s.tag === 13) {
                var o = s.memoizedState;
                if (o !== null && (o = o.dehydrated,
                o === null || o.data === "$?" || o.data === "$!"))
                    return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0)
                    return s
            } else if (s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === n)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                    return null;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
        return null
    }
    var Xu = [];
    function Ju() {
        for (var n = 0; n < Xu.length; n++)
            Xu[n]._workInProgressVersionPrimary = null;
        Xu.length = 0
    }
    var wa = V.ReactCurrentDispatcher
      , Zu = V.ReactCurrentBatchConfig
      , Lr = 0
      , qe = null
      , tt = null
      , it = null
      , xa = !1
      , Bi = !1
      , Ui = 0
      , vb = 0;
    function mt() {
        throw Error(r(321))
    }
    function ec(n, s) {
        if (s === null)
            return !1;
        for (var o = 0; o < s.length && o < n.length; o++)
            if (!tn(n[o], s[o]))
                return !1;
        return !0
    }
    function tc(n, s, o, u, d, p) {
        if (Lr = p,
        qe = s,
        s.memoizedState = null,
        s.updateQueue = null,
        s.lanes = 0,
        wa.current = n === null || n.memoizedState === null ? Sb : kb,
        n = o(u, d),
        Bi) {
            p = 0;
            do {
                if (Bi = !1,
                Ui = 0,
                25 <= p)
                    throw Error(r(301));
                p += 1,
                it = tt = null,
                s.updateQueue = null,
                wa.current = Eb,
                n = o(u, d)
            } while (Bi)
        }
        if (wa.current = ka,
        s = tt !== null && tt.next !== null,
        Lr = 0,
        it = tt = qe = null,
        xa = !1,
        s)
            throw Error(r(300));
        return n
    }
    function nc() {
        var n = Ui !== 0;
        return Ui = 0,
        n
    }
    function gn() {
        var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return it === null ? qe.memoizedState = it = n : it = it.next = n,
        it
    }
    function Ht() {
        if (tt === null) {
            var n = qe.alternate;
            n = n !== null ? n.memoizedState : null
        } else
            n = tt.next;
        var s = it === null ? qe.memoizedState : it.next;
        if (s !== null)
            it = s,
            tt = n;
        else {
            if (n === null)
                throw Error(r(310));
            tt = n,
            n = {
                memoizedState: tt.memoizedState,
                baseState: tt.baseState,
                baseQueue: tt.baseQueue,
                queue: tt.queue,
                next: null
            },
            it === null ? qe.memoizedState = it = n : it = it.next = n
        }
        return it
    }
    function zi(n, s) {
        return typeof s == "function" ? s(n) : s
    }
    function rc(n) {
        var s = Ht()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var u = tt
          , d = u.baseQueue
          , p = o.pending;
        if (p !== null) {
            if (d !== null) {
                var v = d.next;
                d.next = p.next,
                p.next = v
            }
            u.baseQueue = d = p,
            o.pending = null
        }
        if (d !== null) {
            p = d.next,
            u = u.baseState;
            var T = v = null
              , C = null
              , D = p;
            do {
                var H = D.lane;
                if ((Lr & H) === H)
                    C !== null && (C = C.next = {
                        lane: 0,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    }),
                    u = D.hasEagerState ? D.eagerState : n(u, D.action);
                else {
                    var K = {
                        lane: H,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    };
                    C === null ? (T = C = K,
                    v = u) : C = C.next = K,
                    qe.lanes |= H,
                    Mr |= H
                }
                D = D.next
            } while (D !== null && D !== p);
            C === null ? v = u : C.next = T,
            tn(u, s.memoizedState) || (Pt = !0),
            s.memoizedState = u,
            s.baseState = v,
            s.baseQueue = C,
            o.lastRenderedState = u
        }
        if (n = o.interleaved,
        n !== null) {
            d = n;
            do
                p = d.lane,
                qe.lanes |= p,
                Mr |= p,
                d = d.next;
            while (d !== n)
        } else
            d === null && (o.lanes = 0);
        return [s.memoizedState, o.dispatch]
    }
    function sc(n) {
        var s = Ht()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var u = o.dispatch
          , d = o.pending
          , p = s.memoizedState;
        if (d !== null) {
            o.pending = null;
            var v = d = d.next;
            do
                p = n(p, v.action),
                v = v.next;
            while (v !== d);
            tn(p, s.memoizedState) || (Pt = !0),
            s.memoizedState = p,
            s.baseQueue === null && (s.baseState = p),
            o.lastRenderedState = p
        }
        return [p, u]
    }
    function Hp() {}
    function Wp(n, s) {
        var o = qe
          , u = Ht()
          , d = s()
          , p = !tn(u.memoizedState, d);
        if (p && (u.memoizedState = d,
        Pt = !0),
        u = u.queue,
        ic(Gp.bind(null, o, u, n), [n]),
        u.getSnapshot !== s || p || it !== null && it.memoizedState.tag & 1) {
            if (o.flags |= 2048,
            $i(9, Qp.bind(null, o, u, d, s), void 0, null),
            ot === null)
                throw Error(r(349));
            (Lr & 30) !== 0 || Kp(o, s, d)
        }
        return d
    }
    function Kp(n, s, o) {
        n.flags |= 16384,
        n = {
            getSnapshot: s,
            value: o
        },
        s = qe.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        qe.updateQueue = s,
        s.stores = [n]) : (o = s.stores,
        o === null ? s.stores = [n] : o.push(n))
    }
    function Qp(n, s, o, u) {
        s.value = o,
        s.getSnapshot = u,
        Yp(s) && Xp(n)
    }
    function Gp(n, s, o) {
        return o(function() {
            Yp(s) && Xp(n)
        })
    }
    function Yp(n) {
        var s = n.getSnapshot;
        n = n.value;
        try {
            var o = s();
            return !tn(n, o)
        } catch {
            return !0
        }
    }
    function Xp(n) {
        var s = Nn(n, 1);
        s !== null && an(s, n, 1, -1)
    }
    function Jp(n) {
        var s = gn();
        return typeof n == "function" && (n = n()),
        s.memoizedState = s.baseState = n,
        n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: zi,
            lastRenderedState: n
        },
        s.queue = n,
        n = n.dispatch = bb.bind(null, qe, n),
        [s.memoizedState, n]
    }
    function $i(n, s, o, u) {
        return n = {
            tag: n,
            create: s,
            destroy: o,
            deps: u,
            next: null
        },
        s = qe.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        qe.updateQueue = s,
        s.lastEffect = n.next = n) : (o = s.lastEffect,
        o === null ? s.lastEffect = n.next = n : (u = o.next,
        o.next = n,
        n.next = u,
        s.lastEffect = n)),
        n
    }
    function Zp() {
        return Ht().memoizedState
    }
    function ba(n, s, o, u) {
        var d = gn();
        qe.flags |= n,
        d.memoizedState = $i(1 | s, o, void 0, u === void 0 ? null : u)
    }
    function Sa(n, s, o, u) {
        var d = Ht();
        u = u === void 0 ? null : u;
        var p = void 0;
        if (tt !== null) {
            var v = tt.memoizedState;
            if (p = v.destroy,
            u !== null && ec(u, v.deps)) {
                d.memoizedState = $i(s, o, p, u);
                return
            }
        }
        qe.flags |= n,
        d.memoizedState = $i(1 | s, o, p, u)
    }
    function em(n, s) {
        return ba(8390656, 8, n, s)
    }
    function ic(n, s) {
        return Sa(2048, 8, n, s)
    }
    function tm(n, s) {
        return Sa(4, 2, n, s)
    }
    function nm(n, s) {
        return Sa(4, 4, n, s)
    }
    function rm(n, s) {
        if (typeof s == "function")
            return n = n(),
            s(n),
            function() {
                s(null)
            }
            ;
        if (s != null)
            return n = n(),
            s.current = n,
            function() {
                s.current = null
            }
    }
    function sm(n, s, o) {
        return o = o != null ? o.concat([n]) : null,
        Sa(4, 4, rm.bind(null, s, n), o)
    }
    function oc() {}
    function im(n, s) {
        var o = Ht();
        s = s === void 0 ? null : s;
        var u = o.memoizedState;
        return u !== null && s !== null && ec(s, u[1]) ? u[0] : (o.memoizedState = [n, s],
        n)
    }
    function om(n, s) {
        var o = Ht();
        s = s === void 0 ? null : s;
        var u = o.memoizedState;
        return u !== null && s !== null && ec(s, u[1]) ? u[0] : (n = n(),
        o.memoizedState = [n, s],
        n)
    }
    function am(n, s, o) {
        return (Lr & 21) === 0 ? (n.baseState && (n.baseState = !1,
        Pt = !0),
        n.memoizedState = o) : (tn(o, s) || (o = Ih(),
        qe.lanes |= o,
        Mr |= o,
        n.baseState = !0),
        s)
    }
    function wb(n, s) {
        var o = Me;
        Me = o !== 0 && 4 > o ? o : 4,
        n(!0);
        var u = Zu.transition;
        Zu.transition = {};
        try {
            n(!1),
            s()
        } finally {
            Me = o,
            Zu.transition = u
        }
    }
    function lm() {
        return Ht().memoizedState
    }
    function xb(n, s, o) {
        var u = ir(n);
        if (o = {
            lane: u,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        um(n))
            cm(s, o);
        else if (o = Bp(n, s, o, u),
        o !== null) {
            var d = St();
            an(o, n, u, d),
            dm(o, s, u)
        }
    }
    function bb(n, s, o) {
        var u = ir(n)
          , d = {
            lane: u,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (um(n))
            cm(s, d);
        else {
            var p = n.alternate;
            if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer,
            p !== null))
                try {
                    var v = s.lastRenderedState
                      , T = p(v, o);
                    if (d.hasEagerState = !0,
                    d.eagerState = T,
                    tn(T, v)) {
                        var C = s.interleaved;
                        C === null ? (d.next = d,
                        Ku(s)) : (d.next = C.next,
                        C.next = d),
                        s.interleaved = d;
                        return
                    }
                } catch {} finally {}
            o = Bp(n, s, d, u),
            o !== null && (d = St(),
            an(o, n, u, d),
            dm(o, s, u))
        }
    }
    function um(n) {
        var s = n.alternate;
        return n === qe || s !== null && s === qe
    }
    function cm(n, s) {
        Bi = xa = !0;
        var o = n.pending;
        o === null ? s.next = s : (s.next = o.next,
        o.next = s),
        n.pending = s
    }
    function dm(n, s, o) {
        if ((o & 4194240) !== 0) {
            var u = s.lanes;
            u &= n.pendingLanes,
            o |= u,
            s.lanes = o,
            lu(n, o)
        }
    }
    var ka = {
        readContext: qt,
        useCallback: mt,
        useContext: mt,
        useEffect: mt,
        useImperativeHandle: mt,
        useInsertionEffect: mt,
        useLayoutEffect: mt,
        useMemo: mt,
        useReducer: mt,
        useRef: mt,
        useState: mt,
        useDebugValue: mt,
        useDeferredValue: mt,
        useTransition: mt,
        useMutableSource: mt,
        useSyncExternalStore: mt,
        useId: mt,
        unstable_isNewReconciler: !1
    }
      , Sb = {
        readContext: qt,
        useCallback: function(n, s) {
            return gn().memoizedState = [n, s === void 0 ? null : s],
            n
        },
        useContext: qt,
        useEffect: em,
        useImperativeHandle: function(n, s, o) {
            return o = o != null ? o.concat([n]) : null,
            ba(4194308, 4, rm.bind(null, s, n), o)
        },
        useLayoutEffect: function(n, s) {
            return ba(4194308, 4, n, s)
        },
        useInsertionEffect: function(n, s) {
            return ba(4, 2, n, s)
        },
        useMemo: function(n, s) {
            var o = gn();
            return s = s === void 0 ? null : s,
            n = n(),
            o.memoizedState = [n, s],
            n
        },
        useReducer: function(n, s, o) {
            var u = gn();
            return s = o !== void 0 ? o(s) : s,
            u.memoizedState = u.baseState = s,
            n = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: n,
                lastRenderedState: s
            },
            u.queue = n,
            n = n.dispatch = xb.bind(null, qe, n),
            [u.memoizedState, n]
        },
        useRef: function(n) {
            var s = gn();
            return n = {
                current: n
            },
            s.memoizedState = n
        },
        useState: Jp,
        useDebugValue: oc,
        useDeferredValue: function(n) {
            return gn().memoizedState = n
        },
        useTransition: function() {
            var n = Jp(!1)
              , s = n[0];
            return n = wb.bind(null, n[1]),
            gn().memoizedState = n,
            [s, n]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(n, s, o) {
            var u = qe
              , d = gn();
            if (ze) {
                if (o === void 0)
                    throw Error(r(407));
                o = o()
            } else {
                if (o = s(),
                ot === null)
                    throw Error(r(349));
                (Lr & 30) !== 0 || Kp(u, s, o)
            }
            d.memoizedState = o;
            var p = {
                value: o,
                getSnapshot: s
            };
            return d.queue = p,
            em(Gp.bind(null, u, p, n), [n]),
            u.flags |= 2048,
            $i(9, Qp.bind(null, u, p, o, s), void 0, null),
            o
        },
        useId: function() {
            var n = gn()
              , s = ot.identifierPrefix;
            if (ze) {
                var o = An
                  , u = _n;
                o = (u & ~(1 << 32 - en(u) - 1)).toString(32) + o,
                s = ":" + s + "R" + o,
                o = Ui++,
                0 < o && (s += "H" + o.toString(32)),
                s += ":"
            } else
                o = vb++,
                s = ":" + s + "r" + o.toString(32) + ":";
            return n.memoizedState = s
        },
        unstable_isNewReconciler: !1
    }
      , kb = {
        readContext: qt,
        useCallback: im,
        useContext: qt,
        useEffect: ic,
        useImperativeHandle: sm,
        useInsertionEffect: tm,
        useLayoutEffect: nm,
        useMemo: om,
        useReducer: rc,
        useRef: Zp,
        useState: function() {
            return rc(zi)
        },
        useDebugValue: oc,
        useDeferredValue: function(n) {
            var s = Ht();
            return am(s, tt.memoizedState, n)
        },
        useTransition: function() {
            var n = rc(zi)[0]
              , s = Ht().memoizedState;
            return [n, s]
        },
        useMutableSource: Hp,
        useSyncExternalStore: Wp,
        useId: lm,
        unstable_isNewReconciler: !1
    }
      , Eb = {
        readContext: qt,
        useCallback: im,
        useContext: qt,
        useEffect: ic,
        useImperativeHandle: sm,
        useInsertionEffect: tm,
        useLayoutEffect: nm,
        useMemo: om,
        useReducer: sc,
        useRef: Zp,
        useState: function() {
            return sc(zi)
        },
        useDebugValue: oc,
        useDeferredValue: function(n) {
            var s = Ht();
            return tt === null ? s.memoizedState = n : am(s, tt.memoizedState, n)
        },
        useTransition: function() {
            var n = sc(zi)[0]
              , s = Ht().memoizedState;
            return [n, s]
        },
        useMutableSource: Hp,
        useSyncExternalStore: Wp,
        useId: lm,
        unstable_isNewReconciler: !1
    };
    function rn(n, s) {
        if (n && n.defaultProps) {
            s = X({}, s),
            n = n.defaultProps;
            for (var o in n)
                s[o] === void 0 && (s[o] = n[o]);
            return s
        }
        return s
    }
    function ac(n, s, o, u) {
        s = n.memoizedState,
        o = o(u, s),
        o = o == null ? s : X({}, s, o),
        n.memoizedState = o,
        n.lanes === 0 && (n.updateQueue.baseState = o)
    }
    var Ea = {
        isMounted: function(n) {
            return (n = n._reactInternals) ? Pr(n) === n : !1
        },
        enqueueSetState: function(n, s, o) {
            n = n._reactInternals;
            var u = St()
              , d = ir(n)
              , p = jn(u, d);
            p.payload = s,
            o != null && (p.callback = o),
            s = tr(n, p, d),
            s !== null && (an(s, n, d, u),
            ga(s, n, d))
        },
        enqueueReplaceState: function(n, s, o) {
            n = n._reactInternals;
            var u = St()
              , d = ir(n)
              , p = jn(u, d);
            p.tag = 1,
            p.payload = s,
            o != null && (p.callback = o),
            s = tr(n, p, d),
            s !== null && (an(s, n, d, u),
            ga(s, n, d))
        },
        enqueueForceUpdate: function(n, s) {
            n = n._reactInternals;
            var o = St()
              , u = ir(n)
              , d = jn(o, u);
            d.tag = 2,
            s != null && (d.callback = s),
            s = tr(n, d, u),
            s !== null && (an(s, n, u, o),
            ga(s, n, u))
        }
    };
    function fm(n, s, o, u, d, p, v) {
        return n = n.stateNode,
        typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, v) : s.prototype && s.prototype.isPureReactComponent ? !_i(o, u) || !_i(d, p) : !0
    }
    function hm(n, s, o) {
        var u = !1
          , d = Jn
          , p = s.contextType;
        return typeof p == "object" && p !== null ? p = qt(p) : (d = Ct(s) ? _r : pt.current,
        u = s.contextTypes,
        p = (u = u != null) ? xs(n, d) : Jn),
        s = new s(o,p),
        n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        s.updater = Ea,
        n.stateNode = s,
        s._reactInternals = n,
        u && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = d,
        n.__reactInternalMemoizedMaskedChildContext = p),
        s
    }
    function pm(n, s, o, u) {
        n = s.state,
        typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, u),
        typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, u),
        s.state !== n && Ea.enqueueReplaceState(s, s.state, null)
    }
    function lc(n, s, o, u) {
        var d = n.stateNode;
        d.props = o,
        d.state = n.memoizedState,
        d.refs = {},
        Qu(n);
        var p = s.contextType;
        typeof p == "object" && p !== null ? d.context = qt(p) : (p = Ct(s) ? _r : pt.current,
        d.context = xs(n, p)),
        d.state = n.memoizedState,
        p = s.getDerivedStateFromProps,
        typeof p == "function" && (ac(n, s, p, o),
        d.state = n.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (s = d.state,
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(),
        s !== d.state && Ea.enqueueReplaceState(d, d.state, null),
        ya(n, o, d, u),
        d.state = n.memoizedState),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308)
    }
    function Rs(n, s) {
        try {
            var o = ""
              , u = s;
            do
                o += Se(u),
                u = u.return;
            while (u);
            var d = o
        } catch (p) {
            d = `
Error generating stack: ` + p.message + `
` + p.stack
        }
        return {
            value: n,
            source: s,
            stack: d,
            digest: null
        }
    }
    function uc(n, s, o) {
        return {
            value: n,
            source: null,
            stack: o ?? null,
            digest: s ?? null
        }
    }
    function cc(n, s) {
        try {
            console.error(s.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var Tb = typeof WeakMap == "function" ? WeakMap : Map;
    function mm(n, s, o) {
        o = jn(-1, o),
        o.tag = 3,
        o.payload = {
            element: null
        };
        var u = s.value;
        return o.callback = function() {
            Na || (Na = !0,
            Tc = u),
            cc(n, s)
        }
        ,
        o
    }
    function gm(n, s, o) {
        o = jn(-1, o),
        o.tag = 3;
        var u = n.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var d = s.value;
            o.payload = function() {
                return u(d)
            }
            ,
            o.callback = function() {
                cc(n, s)
            }
        }
        var p = n.stateNode;
        return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
            cc(n, s),
            typeof u != "function" && (rr === null ? rr = new Set([this]) : rr.add(this));
            var v = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: v !== null ? v : ""
            })
        }
        ),
        o
    }
    function ym(n, s, o) {
        var u = n.pingCache;
        if (u === null) {
            u = n.pingCache = new Tb;
            var d = new Set;
            u.set(s, d)
        } else
            d = u.get(s),
            d === void 0 && (d = new Set,
            u.set(s, d));
        d.has(o) || (d.add(o),
        n = Vb.bind(null, n, s, o),
        s.then(n, n))
    }
    function vm(n) {
        do {
            var s;
            if ((s = n.tag === 13) && (s = n.memoizedState,
            s = s !== null ? s.dehydrated !== null : !0),
            s)
                return n;
            n = n.return
        } while (n !== null);
        return null
    }
    function wm(n, s, o, u, d) {
        return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128,
        o.flags |= 131072,
        o.flags &= -52805,
        o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = jn(-1, 1),
        s.tag = 2,
        tr(o, s, 1))),
        o.lanes |= 1),
        n) : (n.flags |= 65536,
        n.lanes = d,
        n)
    }
    var Cb = V.ReactCurrentOwner
      , Pt = !1;
    function bt(n, s, o, u) {
        s.child = n === null ? Vp(s, null, o, u) : Es(s, n.child, o, u)
    }
    function xm(n, s, o, u, d) {
        o = o.render;
        var p = s.ref;
        return Cs(s, d),
        u = tc(n, s, o, u, p, d),
        o = nc(),
        n !== null && !Pt ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~d,
        On(n, s, d)) : (ze && o && Fu(s),
        s.flags |= 1,
        bt(n, s, u, d),
        s.child)
    }
    function bm(n, s, o, u, d) {
        if (n === null) {
            var p = o.type;
            return typeof p == "function" && !jc(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15,
            s.type = p,
            Sm(n, s, p, u, d)) : (n = Ia(o.type, null, u, s, s.mode, d),
            n.ref = s.ref,
            n.return = s,
            s.child = n)
        }
        if (p = n.child,
        (n.lanes & d) === 0) {
            var v = p.memoizedProps;
            if (o = o.compare,
            o = o !== null ? o : _i,
            o(v, u) && n.ref === s.ref)
                return On(n, s, d)
        }
        return s.flags |= 1,
        n = ar(p, u),
        n.ref = s.ref,
        n.return = s,
        s.child = n
    }
    function Sm(n, s, o, u, d) {
        if (n !== null) {
            var p = n.memoizedProps;
            if (_i(p, u) && n.ref === s.ref)
                if (Pt = !1,
                s.pendingProps = u = p,
                (n.lanes & d) !== 0)
                    (n.flags & 131072) !== 0 && (Pt = !0);
                else
                    return s.lanes = n.lanes,
                    On(n, s, d)
        }
        return dc(n, s, o, u, d)
    }
    function km(n, s, o) {
        var u = s.pendingProps
          , d = u.children
          , p = n !== null ? n.memoizedState : null;
        if (u.mode === "hidden")
            if ((s.mode & 1) === 0)
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Fe(As, Vt),
                Vt |= o;
            else {
                if ((o & 1073741824) === 0)
                    return n = p !== null ? p.baseLanes | o : o,
                    s.lanes = s.childLanes = 1073741824,
                    s.memoizedState = {
                        baseLanes: n,
                        cachePool: null,
                        transitions: null
                    },
                    s.updateQueue = null,
                    Fe(As, Vt),
                    Vt |= n,
                    null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                u = p !== null ? p.baseLanes : o,
                Fe(As, Vt),
                Vt |= u
            }
        else
            p !== null ? (u = p.baseLanes | o,
            s.memoizedState = null) : u = o,
            Fe(As, Vt),
            Vt |= u;
        return bt(n, s, d, o),
        s.child
    }
    function Em(n, s) {
        var o = s.ref;
        (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512,
        s.flags |= 2097152)
    }
    function dc(n, s, o, u, d) {
        var p = Ct(o) ? _r : pt.current;
        return p = xs(s, p),
        Cs(s, d),
        o = tc(n, s, o, u, p, d),
        u = nc(),
        n !== null && !Pt ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~d,
        On(n, s, d)) : (ze && u && Fu(s),
        s.flags |= 1,
        bt(n, s, o, d),
        s.child)
    }
    function Tm(n, s, o, u, d) {
        if (Ct(o)) {
            var p = !0;
            la(s)
        } else
            p = !1;
        if (Cs(s, d),
        s.stateNode === null)
            Ca(n, s),
            hm(s, o, u),
            lc(s, o, u, d),
            u = !0;
        else if (n === null) {
            var v = s.stateNode
              , T = s.memoizedProps;
            v.props = T;
            var C = v.context
              , D = o.contextType;
            typeof D == "object" && D !== null ? D = qt(D) : (D = Ct(o) ? _r : pt.current,
            D = xs(s, D));
            var H = o.getDerivedStateFromProps
              , K = typeof H == "function" || typeof v.getSnapshotBeforeUpdate == "function";
            K || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (T !== u || C !== D) && pm(s, v, u, D),
            er = !1;
            var q = s.memoizedState;
            v.state = q,
            ya(s, u, v, d),
            C = s.memoizedState,
            T !== u || q !== C || Tt.current || er ? (typeof H == "function" && (ac(s, o, H, u),
            C = s.memoizedState),
            (T = er || fm(s, o, T, u, q, C, D)) ? (K || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(),
            typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()),
            typeof v.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            s.memoizedProps = u,
            s.memoizedState = C),
            v.props = u,
            v.state = C,
            v.context = D,
            u = T) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            u = !1)
        } else {
            v = s.stateNode,
            Up(n, s),
            T = s.memoizedProps,
            D = s.type === s.elementType ? T : rn(s.type, T),
            v.props = D,
            K = s.pendingProps,
            q = v.context,
            C = o.contextType,
            typeof C == "object" && C !== null ? C = qt(C) : (C = Ct(o) ? _r : pt.current,
            C = xs(s, C));
            var Z = o.getDerivedStateFromProps;
            (H = typeof Z == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (T !== K || q !== C) && pm(s, v, u, C),
            er = !1,
            q = s.memoizedState,
            v.state = q,
            ya(s, u, v, d);
            var se = s.memoizedState;
            T !== K || q !== se || Tt.current || er ? (typeof Z == "function" && (ac(s, o, Z, u),
            se = s.memoizedState),
            (D = er || fm(s, o, D, u, q, se, C) || !1) ? (H || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(u, se, C),
            typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(u, se, C)),
            typeof v.componentDidUpdate == "function" && (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (s.flags |= 1024),
            s.memoizedProps = u,
            s.memoizedState = se),
            v.props = u,
            v.state = se,
            v.context = C,
            u = D) : (typeof v.componentDidUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (s.flags |= 1024),
            u = !1)
        }
        return fc(n, s, o, u, p, d)
    }
    function fc(n, s, o, u, d, p) {
        Em(n, s);
        var v = (s.flags & 128) !== 0;
        if (!u && !v)
            return d && Ap(s, o, !1),
            On(n, s, p);
        u = s.stateNode,
        Cb.current = s;
        var T = v && typeof o.getDerivedStateFromError != "function" ? null : u.render();
        return s.flags |= 1,
        n !== null && v ? (s.child = Es(s, n.child, null, p),
        s.child = Es(s, null, T, p)) : bt(n, s, T, p),
        s.memoizedState = u.state,
        d && Ap(s, o, !0),
        s.child
    }
    function Cm(n) {
        var s = n.stateNode;
        s.pendingContext ? Rp(n, s.pendingContext, s.pendingContext !== s.context) : s.context && Rp(n, s.context, !1),
        Gu(n, s.containerInfo)
    }
    function Pm(n, s, o, u, d) {
        return ks(),
        zu(d),
        s.flags |= 256,
        bt(n, s, o, u),
        s.child
    }
    var hc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function pc(n) {
        return {
            baseLanes: n,
            cachePool: null,
            transitions: null
        }
    }
    function Rm(n, s, o) {
        var u = s.pendingProps, d = $e.current, p = !1, v = (s.flags & 128) !== 0, T;
        if ((T = v) || (T = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0),
        T ? (p = !0,
        s.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1),
        Fe($e, d & 1),
        n === null)
            return Uu(s),
            n = s.memoizedState,
            n !== null && (n = n.dehydrated,
            n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824,
            null) : (v = u.children,
            n = u.fallback,
            p ? (u = s.mode,
            p = s.child,
            v = {
                mode: "hidden",
                children: v
            },
            (u & 1) === 0 && p !== null ? (p.childLanes = 0,
            p.pendingProps = v) : p = Fa(v, u, 0, null),
            n = Vr(n, u, o, null),
            p.return = s,
            n.return = s,
            p.sibling = n,
            s.child = p,
            s.child.memoizedState = pc(o),
            s.memoizedState = hc,
            n) : mc(s, v));
        if (d = n.memoizedState,
        d !== null && (T = d.dehydrated,
        T !== null))
            return Pb(n, s, v, u, T, d, o);
        if (p) {
            p = u.fallback,
            v = s.mode,
            d = n.child,
            T = d.sibling;
            var C = {
                mode: "hidden",
                children: u.children
            };
            return (v & 1) === 0 && s.child !== d ? (u = s.child,
            u.childLanes = 0,
            u.pendingProps = C,
            s.deletions = null) : (u = ar(d, C),
            u.subtreeFlags = d.subtreeFlags & 14680064),
            T !== null ? p = ar(T, p) : (p = Vr(p, v, o, null),
            p.flags |= 2),
            p.return = s,
            u.return = s,
            u.sibling = p,
            s.child = u,
            u = p,
            p = s.child,
            v = n.child.memoizedState,
            v = v === null ? pc(o) : {
                baseLanes: v.baseLanes | o,
                cachePool: null,
                transitions: v.transitions
            },
            p.memoizedState = v,
            p.childLanes = n.childLanes & ~o,
            s.memoizedState = hc,
            u
        }
        return p = n.child,
        n = p.sibling,
        u = ar(p, {
            mode: "visible",
            children: u.children
        }),
        (s.mode & 1) === 0 && (u.lanes = o),
        u.return = s,
        u.sibling = null,
        n !== null && (o = s.deletions,
        o === null ? (s.deletions = [n],
        s.flags |= 16) : o.push(n)),
        s.child = u,
        s.memoizedState = null,
        u
    }
    function mc(n, s) {
        return s = Fa({
            mode: "visible",
            children: s
        }, n.mode, 0, null),
        s.return = n,
        n.child = s
    }
    function Ta(n, s, o, u) {
        return u !== null && zu(u),
        Es(s, n.child, null, o),
        n = mc(s, s.pendingProps.children),
        n.flags |= 2,
        s.memoizedState = null,
        n
    }
    function Pb(n, s, o, u, d, p, v) {
        if (o)
            return s.flags & 256 ? (s.flags &= -257,
            u = uc(Error(r(422))),
            Ta(n, s, v, u)) : s.memoizedState !== null ? (s.child = n.child,
            s.flags |= 128,
            null) : (p = u.fallback,
            d = s.mode,
            u = Fa({
                mode: "visible",
                children: u.children
            }, d, 0, null),
            p = Vr(p, d, v, null),
            p.flags |= 2,
            u.return = s,
            p.return = s,
            u.sibling = p,
            s.child = u,
            (s.mode & 1) !== 0 && Es(s, n.child, null, v),
            s.child.memoizedState = pc(v),
            s.memoizedState = hc,
            p);
        if ((s.mode & 1) === 0)
            return Ta(n, s, v, null);
        if (d.data === "$!") {
            if (u = d.nextSibling && d.nextSibling.dataset,
            u)
                var T = u.dgst;
            return u = T,
            p = Error(r(419)),
            u = uc(p, u, void 0),
            Ta(n, s, v, u)
        }
        if (T = (v & n.childLanes) !== 0,
        Pt || T) {
            if (u = ot,
            u !== null) {
                switch (v & -v) {
                case 4:
                    d = 2;
                    break;
                case 16:
                    d = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    d = 32;
                    break;
                case 536870912:
                    d = 268435456;
                    break;
                default:
                    d = 0
                }
                d = (d & (u.suspendedLanes | v)) !== 0 ? 0 : d,
                d !== 0 && d !== p.retryLane && (p.retryLane = d,
                Nn(n, d),
                an(u, n, d, -1))
            }
            return Nc(),
            u = uc(Error(r(421))),
            Ta(n, s, v, u)
        }
        return d.data === "$?" ? (s.flags |= 128,
        s.child = n.child,
        s = Bb.bind(null, n),
        d._reactRetry = s,
        null) : (n = p.treeContext,
        Ft = Yn(d.nextSibling),
        It = s,
        ze = !0,
        nn = null,
        n !== null && (zt[$t++] = _n,
        zt[$t++] = An,
        zt[$t++] = Ar,
        _n = n.id,
        An = n.overflow,
        Ar = s),
        s = mc(s, u.children),
        s.flags |= 4096,
        s)
    }
    function _m(n, s, o) {
        n.lanes |= s;
        var u = n.alternate;
        u !== null && (u.lanes |= s),
        Wu(n.return, s, o)
    }
    function gc(n, s, o, u, d) {
        var p = n.memoizedState;
        p === null ? n.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: o,
            tailMode: d
        } : (p.isBackwards = s,
        p.rendering = null,
        p.renderingStartTime = 0,
        p.last = u,
        p.tail = o,
        p.tailMode = d)
    }
    function Am(n, s, o) {
        var u = s.pendingProps
          , d = u.revealOrder
          , p = u.tail;
        if (bt(n, s, u.children, o),
        u = $e.current,
        (u & 2) !== 0)
            u = u & 1 | 2,
            s.flags |= 128;
        else {
            if (n !== null && (n.flags & 128) !== 0)
                e: for (n = s.child; n !== null; ) {
                    if (n.tag === 13)
                        n.memoizedState !== null && _m(n, o, s);
                    else if (n.tag === 19)
                        _m(n, o, s);
                    else if (n.child !== null) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === s)
                        break e;
                    for (; n.sibling === null; ) {
                        if (n.return === null || n.return === s)
                            break e;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            u &= 1
        }
        if (Fe($e, u),
        (s.mode & 1) === 0)
            s.memoizedState = null;
        else
            switch (d) {
            case "forwards":
                for (o = s.child,
                d = null; o !== null; )
                    n = o.alternate,
                    n !== null && va(n) === null && (d = o),
                    o = o.sibling;
                o = d,
                o === null ? (d = s.child,
                s.child = null) : (d = o.sibling,
                o.sibling = null),
                gc(s, !1, d, o, p);
                break;
            case "backwards":
                for (o = null,
                d = s.child,
                s.child = null; d !== null; ) {
                    if (n = d.alternate,
                    n !== null && va(n) === null) {
                        s.child = d;
                        break
                    }
                    n = d.sibling,
                    d.sibling = o,
                    o = d,
                    d = n
                }
                gc(s, !0, o, null, p);
                break;
            case "together":
                gc(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
            }
        return s.child
    }
    function Ca(n, s) {
        (s.mode & 1) === 0 && n !== null && (n.alternate = null,
        s.alternate = null,
        s.flags |= 2)
    }
    function On(n, s, o) {
        if (n !== null && (s.dependencies = n.dependencies),
        Mr |= s.lanes,
        (o & s.childLanes) === 0)
            return null;
        if (n !== null && s.child !== n.child)
            throw Error(r(153));
        if (s.child !== null) {
            for (n = s.child,
            o = ar(n, n.pendingProps),
            s.child = o,
            o.return = s; n.sibling !== null; )
                n = n.sibling,
                o = o.sibling = ar(n, n.pendingProps),
                o.return = s;
            o.sibling = null
        }
        return s.child
    }
    function Rb(n, s, o) {
        switch (s.tag) {
        case 3:
            Cm(s),
            ks();
            break;
        case 5:
            qp(s);
            break;
        case 1:
            Ct(s.type) && la(s);
            break;
        case 4:
            Gu(s, s.stateNode.containerInfo);
            break;
        case 10:
            var u = s.type._context
              , d = s.memoizedProps.value;
            Fe(pa, u._currentValue),
            u._currentValue = d;
            break;
        case 13:
            if (u = s.memoizedState,
            u !== null)
                return u.dehydrated !== null ? (Fe($e, $e.current & 1),
                s.flags |= 128,
                null) : (o & s.child.childLanes) !== 0 ? Rm(n, s, o) : (Fe($e, $e.current & 1),
                n = On(n, s, o),
                n !== null ? n.sibling : null);
            Fe($e, $e.current & 1);
            break;
        case 19:
            if (u = (o & s.childLanes) !== 0,
            (n.flags & 128) !== 0) {
                if (u)
                    return Am(n, s, o);
                s.flags |= 128
            }
            if (d = s.memoizedState,
            d !== null && (d.rendering = null,
            d.tail = null,
            d.lastEffect = null),
            Fe($e, $e.current),
            u)
                break;
            return null;
        case 22:
        case 23:
            return s.lanes = 0,
            km(n, s, o)
        }
        return On(n, s, o)
    }
    var Nm, yc, jm, Om;
    Nm = function(n, s) {
        for (var o = s.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
                n.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === s)
                break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === s)
                    return;
                o = o.return
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    ,
    yc = function() {}
    ,
    jm = function(n, s, o, u) {
        var d = n.memoizedProps;
        if (d !== u) {
            n = s.stateNode,
            Or(mn.current);
            var p = null;
            switch (o) {
            case "input":
                d = Wl(n, d),
                u = Wl(n, u),
                p = [];
                break;
            case "select":
                d = X({}, d, {
                    value: void 0
                }),
                u = X({}, u, {
                    value: void 0
                }),
                p = [];
                break;
            case "textarea":
                d = Gl(n, d),
                u = Gl(n, u),
                p = [];
                break;
            default:
                typeof d.onClick != "function" && typeof u.onClick == "function" && (n.onclick = ia)
            }
            Xl(o, u);
            var v;
            o = null;
            for (D in d)
                if (!u.hasOwnProperty(D) && d.hasOwnProperty(D) && d[D] != null)
                    if (D === "style") {
                        var T = d[D];
                        for (v in T)
                            T.hasOwnProperty(v) && (o || (o = {}),
                            o[v] = "")
                    } else
                        D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (a.hasOwnProperty(D) ? p || (p = []) : (p = p || []).push(D, null));
            for (D in u) {
                var C = u[D];
                if (T = d != null ? d[D] : void 0,
                u.hasOwnProperty(D) && C !== T && (C != null || T != null))
                    if (D === "style")
                        if (T) {
                            for (v in T)
                                !T.hasOwnProperty(v) || C && C.hasOwnProperty(v) || (o || (o = {}),
                                o[v] = "");
                            for (v in C)
                                C.hasOwnProperty(v) && T[v] !== C[v] && (o || (o = {}),
                                o[v] = C[v])
                        } else
                            o || (p || (p = []),
                            p.push(D, o)),
                            o = C;
                    else
                        D === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0,
                        T = T ? T.__html : void 0,
                        C != null && T !== C && (p = p || []).push(D, C)) : D === "children" ? typeof C != "string" && typeof C != "number" || (p = p || []).push(D, "" + C) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (a.hasOwnProperty(D) ? (C != null && D === "onScroll" && Ve("scroll", n),
                        p || T === C || (p = [])) : (p = p || []).push(D, C))
            }
            o && (p = p || []).push("style", o);
            var D = p;
            (s.updateQueue = D) && (s.flags |= 4)
        }
    }
    ,
    Om = function(n, s, o, u) {
        o !== u && (s.flags |= 4)
    }
    ;
    function qi(n, s) {
        if (!ze)
            switch (n.tailMode) {
            case "hidden":
                s = n.tail;
                for (var o = null; s !== null; )
                    s.alternate !== null && (o = s),
                    s = s.sibling;
                o === null ? n.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = n.tail;
                for (var u = null; o !== null; )
                    o.alternate !== null && (u = o),
                    o = o.sibling;
                u === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null
            }
    }
    function gt(n) {
        var s = n.alternate !== null && n.alternate.child === n.child
          , o = 0
          , u = 0;
        if (s)
            for (var d = n.child; d !== null; )
                o |= d.lanes | d.childLanes,
                u |= d.subtreeFlags & 14680064,
                u |= d.flags & 14680064,
                d.return = n,
                d = d.sibling;
        else
            for (d = n.child; d !== null; )
                o |= d.lanes | d.childLanes,
                u |= d.subtreeFlags,
                u |= d.flags,
                d.return = n,
                d = d.sibling;
        return n.subtreeFlags |= u,
        n.childLanes = o,
        s
    }
    function _b(n, s, o) {
        var u = s.pendingProps;
        switch (Vu(s),
        s.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return gt(s),
            null;
        case 1:
            return Ct(s.type) && aa(),
            gt(s),
            null;
        case 3:
            return u = s.stateNode,
            Ps(),
            Be(Tt),
            Be(pt),
            Ju(),
            u.pendingContext && (u.context = u.pendingContext,
            u.pendingContext = null),
            (n === null || n.child === null) && (fa(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024,
            nn !== null && (Rc(nn),
            nn = null))),
            yc(n, s),
            gt(s),
            null;
        case 5:
            Yu(s);
            var d = Or(Vi.current);
            if (o = s.type,
            n !== null && s.stateNode != null)
                jm(n, s, o, u, d),
                n.ref !== s.ref && (s.flags |= 512,
                s.flags |= 2097152);
            else {
                if (!u) {
                    if (s.stateNode === null)
                        throw Error(r(166));
                    return gt(s),
                    null
                }
                if (n = Or(mn.current),
                fa(s)) {
                    u = s.stateNode,
                    o = s.type;
                    var p = s.memoizedProps;
                    switch (u[pn] = s,
                    u[Li] = p,
                    n = (s.mode & 1) !== 0,
                    o) {
                    case "dialog":
                        Ve("cancel", u),
                        Ve("close", u);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Ve("load", u);
                        break;
                    case "video":
                    case "audio":
                        for (d = 0; d < Ni.length; d++)
                            Ve(Ni[d], u);
                        break;
                    case "source":
                        Ve("error", u);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Ve("error", u),
                        Ve("load", u);
                        break;
                    case "details":
                        Ve("toggle", u);
                        break;
                    case "input":
                        hh(u, p),
                        Ve("invalid", u);
                        break;
                    case "select":
                        u._wrapperState = {
                            wasMultiple: !!p.multiple
                        },
                        Ve("invalid", u);
                        break;
                    case "textarea":
                        gh(u, p),
                        Ve("invalid", u)
                    }
                    Xl(o, p),
                    d = null;
                    for (var v in p)
                        if (p.hasOwnProperty(v)) {
                            var T = p[v];
                            v === "children" ? typeof T == "string" ? u.textContent !== T && (p.suppressHydrationWarning !== !0 && sa(u.textContent, T, n),
                            d = ["children", T]) : typeof T == "number" && u.textContent !== "" + T && (p.suppressHydrationWarning !== !0 && sa(u.textContent, T, n),
                            d = ["children", "" + T]) : a.hasOwnProperty(v) && T != null && v === "onScroll" && Ve("scroll", u)
                        }
                    switch (o) {
                    case "input":
                        $n(u),
                        mh(u, p, !0);
                        break;
                    case "textarea":
                        $n(u),
                        vh(u);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof p.onClick == "function" && (u.onclick = ia)
                    }
                    u = d,
                    s.updateQueue = u,
                    u !== null && (s.flags |= 4)
                } else {
                    v = d.nodeType === 9 ? d : d.ownerDocument,
                    n === "http://www.w3.org/1999/xhtml" && (n = wh(o)),
                    n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = v.createElement("div"),
                    n.innerHTML = "<script><\/script>",
                    n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = v.createElement(o, {
                        is: u.is
                    }) : (n = v.createElement(o),
                    o === "select" && (v = n,
                    u.multiple ? v.multiple = !0 : u.size && (v.size = u.size))) : n = v.createElementNS(n, o),
                    n[pn] = s,
                    n[Li] = u,
                    Nm(n, s, !1, !1),
                    s.stateNode = n;
                    e: {
                        switch (v = Jl(o, u),
                        o) {
                        case "dialog":
                            Ve("cancel", n),
                            Ve("close", n),
                            d = u;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Ve("load", n),
                            d = u;
                            break;
                        case "video":
                        case "audio":
                            for (d = 0; d < Ni.length; d++)
                                Ve(Ni[d], n);
                            d = u;
                            break;
                        case "source":
                            Ve("error", n),
                            d = u;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Ve("error", n),
                            Ve("load", n),
                            d = u;
                            break;
                        case "details":
                            Ve("toggle", n),
                            d = u;
                            break;
                        case "input":
                            hh(n, u),
                            d = Wl(n, u),
                            Ve("invalid", n);
                            break;
                        case "option":
                            d = u;
                            break;
                        case "select":
                            n._wrapperState = {
                                wasMultiple: !!u.multiple
                            },
                            d = X({}, u, {
                                value: void 0
                            }),
                            Ve("invalid", n);
                            break;
                        case "textarea":
                            gh(n, u),
                            d = Gl(n, u),
                            Ve("invalid", n);
                            break;
                        default:
                            d = u
                        }
                        Xl(o, d),
                        T = d;
                        for (p in T)
                            if (T.hasOwnProperty(p)) {
                                var C = T[p];
                                p === "style" ? Sh(n, C) : p === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0,
                                C != null && xh(n, C)) : p === "children" ? typeof C == "string" ? (o !== "textarea" || C !== "") && fi(n, C) : typeof C == "number" && fi(n, "" + C) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? C != null && p === "onScroll" && Ve("scroll", n) : C != null && M(n, p, C, v))
                            }
                        switch (o) {
                        case "input":
                            $n(n),
                            mh(n, u, !1);
                            break;
                        case "textarea":
                            $n(n),
                            vh(n);
                            break;
                        case "option":
                            u.value != null && n.setAttribute("value", "" + Ne(u.value));
                            break;
                        case "select":
                            n.multiple = !!u.multiple,
                            p = u.value,
                            p != null ? ls(n, !!u.multiple, p, !1) : u.defaultValue != null && ls(n, !!u.multiple, u.defaultValue, !0);
                            break;
                        default:
                            typeof d.onClick == "function" && (n.onclick = ia)
                        }
                        switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            u = !!u.autoFocus;
                            break e;
                        case "img":
                            u = !0;
                            break e;
                        default:
                            u = !1
                        }
                    }
                    u && (s.flags |= 4)
                }
                s.ref !== null && (s.flags |= 512,
                s.flags |= 2097152)
            }
            return gt(s),
            null;
        case 6:
            if (n && s.stateNode != null)
                Om(n, s, n.memoizedProps, u);
            else {
                if (typeof u != "string" && s.stateNode === null)
                    throw Error(r(166));
                if (o = Or(Vi.current),
                Or(mn.current),
                fa(s)) {
                    if (u = s.stateNode,
                    o = s.memoizedProps,
                    u[pn] = s,
                    (p = u.nodeValue !== o) && (n = It,
                    n !== null))
                        switch (n.tag) {
                        case 3:
                            sa(u.nodeValue, o, (n.mode & 1) !== 0);
                            break;
                        case 5:
                            n.memoizedProps.suppressHydrationWarning !== !0 && sa(u.nodeValue, o, (n.mode & 1) !== 0)
                        }
                    p && (s.flags |= 4)
                } else
                    u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u),
                    u[pn] = s,
                    s.stateNode = u
            }
            return gt(s),
            null;
        case 13:
            if (Be($e),
            u = s.memoizedState,
            n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
                if (ze && Ft !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
                    Dp(),
                    ks(),
                    s.flags |= 98560,
                    p = !1;
                else if (p = fa(s),
                u !== null && u.dehydrated !== null) {
                    if (n === null) {
                        if (!p)
                            throw Error(r(318));
                        if (p = s.memoizedState,
                        p = p !== null ? p.dehydrated : null,
                        !p)
                            throw Error(r(317));
                        p[pn] = s
                    } else
                        ks(),
                        (s.flags & 128) === 0 && (s.memoizedState = null),
                        s.flags |= 4;
                    gt(s),
                    p = !1
                } else
                    nn !== null && (Rc(nn),
                    nn = null),
                    p = !0;
                if (!p)
                    return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = o,
            s) : (u = u !== null,
            u !== (n !== null && n.memoizedState !== null) && u && (s.child.flags |= 8192,
            (s.mode & 1) !== 0 && (n === null || ($e.current & 1) !== 0 ? nt === 0 && (nt = 3) : Nc())),
            s.updateQueue !== null && (s.flags |= 4),
            gt(s),
            null);
        case 4:
            return Ps(),
            yc(n, s),
            n === null && ji(s.stateNode.containerInfo),
            gt(s),
            null;
        case 10:
            return Hu(s.type._context),
            gt(s),
            null;
        case 17:
            return Ct(s.type) && aa(),
            gt(s),
            null;
        case 19:
            if (Be($e),
            p = s.memoizedState,
            p === null)
                return gt(s),
                null;
            if (u = (s.flags & 128) !== 0,
            v = p.rendering,
            v === null)
                if (u)
                    qi(p, !1);
                else {
                    if (nt !== 0 || n !== null && (n.flags & 128) !== 0)
                        for (n = s.child; n !== null; ) {
                            if (v = va(n),
                            v !== null) {
                                for (s.flags |= 128,
                                qi(p, !1),
                                u = v.updateQueue,
                                u !== null && (s.updateQueue = u,
                                s.flags |= 4),
                                s.subtreeFlags = 0,
                                u = o,
                                o = s.child; o !== null; )
                                    p = o,
                                    n = u,
                                    p.flags &= 14680066,
                                    v = p.alternate,
                                    v === null ? (p.childLanes = 0,
                                    p.lanes = n,
                                    p.child = null,
                                    p.subtreeFlags = 0,
                                    p.memoizedProps = null,
                                    p.memoizedState = null,
                                    p.updateQueue = null,
                                    p.dependencies = null,
                                    p.stateNode = null) : (p.childLanes = v.childLanes,
                                    p.lanes = v.lanes,
                                    p.child = v.child,
                                    p.subtreeFlags = 0,
                                    p.deletions = null,
                                    p.memoizedProps = v.memoizedProps,
                                    p.memoizedState = v.memoizedState,
                                    p.updateQueue = v.updateQueue,
                                    p.type = v.type,
                                    n = v.dependencies,
                                    p.dependencies = n === null ? null : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext
                                    }),
                                    o = o.sibling;
                                return Fe($e, $e.current & 1 | 2),
                                s.child
                            }
                            n = n.sibling
                        }
                    p.tail !== null && Ge() > Ns && (s.flags |= 128,
                    u = !0,
                    qi(p, !1),
                    s.lanes = 4194304)
                }
            else {
                if (!u)
                    if (n = va(v),
                    n !== null) {
                        if (s.flags |= 128,
                        u = !0,
                        o = n.updateQueue,
                        o !== null && (s.updateQueue = o,
                        s.flags |= 4),
                        qi(p, !0),
                        p.tail === null && p.tailMode === "hidden" && !v.alternate && !ze)
                            return gt(s),
                            null
                    } else
                        2 * Ge() - p.renderingStartTime > Ns && o !== 1073741824 && (s.flags |= 128,
                        u = !0,
                        qi(p, !1),
                        s.lanes = 4194304);
                p.isBackwards ? (v.sibling = s.child,
                s.child = v) : (o = p.last,
                o !== null ? o.sibling = v : s.child = v,
                p.last = v)
            }
            return p.tail !== null ? (s = p.tail,
            p.rendering = s,
            p.tail = s.sibling,
            p.renderingStartTime = Ge(),
            s.sibling = null,
            o = $e.current,
            Fe($e, u ? o & 1 | 2 : o & 1),
            s) : (gt(s),
            null);
        case 22:
        case 23:
            return Ac(),
            u = s.memoizedState !== null,
            n !== null && n.memoizedState !== null !== u && (s.flags |= 8192),
            u && (s.mode & 1) !== 0 ? (Vt & 1073741824) !== 0 && (gt(s),
            s.subtreeFlags & 6 && (s.flags |= 8192)) : gt(s),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(r(156, s.tag))
    }
    function Ab(n, s) {
        switch (Vu(s),
        s.tag) {
        case 1:
            return Ct(s.type) && aa(),
            n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 3:
            return Ps(),
            Be(Tt),
            Be(pt),
            Ju(),
            n = s.flags,
            (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 5:
            return Yu(s),
            null;
        case 13:
            if (Be($e),
            n = s.memoizedState,
            n !== null && n.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(r(340));
                ks()
            }
            return n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 19:
            return Be($e),
            null;
        case 4:
            return Ps(),
            null;
        case 10:
            return Hu(s.type._context),
            null;
        case 22:
        case 23:
            return Ac(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Pa = !1
      , yt = !1
      , Nb = typeof WeakSet == "function" ? WeakSet : Set
      , te = null;
    function _s(n, s) {
        var o = n.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null)
                } catch (u) {
                    We(n, s, u)
                }
            else
                o.current = null
    }
    function vc(n, s, o) {
        try {
            o()
        } catch (u) {
            We(n, s, u)
        }
    }
    var Lm = !1;
    function jb(n, s) {
        if (Au = Ko,
        n = fp(),
        Su(n)) {
            if ("selectionStart"in n)
                var o = {
                    start: n.selectionStart,
                    end: n.selectionEnd
                };
            else
                e: {
                    o = (o = n.ownerDocument) && o.defaultView || window;
                    var u = o.getSelection && o.getSelection();
                    if (u && u.rangeCount !== 0) {
                        o = u.anchorNode;
                        var d = u.anchorOffset
                          , p = u.focusNode;
                        u = u.focusOffset;
                        try {
                            o.nodeType,
                            p.nodeType
                        } catch {
                            o = null;
                            break e
                        }
                        var v = 0
                          , T = -1
                          , C = -1
                          , D = 0
                          , H = 0
                          , K = n
                          , q = null;
                        t: for (; ; ) {
                            for (var Z; K !== o || d !== 0 && K.nodeType !== 3 || (T = v + d),
                            K !== p || u !== 0 && K.nodeType !== 3 || (C = v + u),
                            K.nodeType === 3 && (v += K.nodeValue.length),
                            (Z = K.firstChild) !== null; )
                                q = K,
                                K = Z;
                            for (; ; ) {
                                if (K === n)
                                    break t;
                                if (q === o && ++D === d && (T = v),
                                q === p && ++H === u && (C = v),
                                (Z = K.nextSibling) !== null)
                                    break;
                                K = q,
                                q = K.parentNode
                            }
                            K = Z
                        }
                        o = T === -1 || C === -1 ? null : {
                            start: T,
                            end: C
                        }
                    } else
                        o = null
                }
            o = o || {
                start: 0,
                end: 0
            }
        } else
            o = null;
        for (Nu = {
            focusedElem: n,
            selectionRange: o
        },
        Ko = !1,
        te = s; te !== null; )
            if (s = te,
            n = s.child,
            (s.subtreeFlags & 1028) !== 0 && n !== null)
                n.return = s,
                te = n;
            else
                for (; te !== null; ) {
                    s = te;
                    try {
                        var se = s.alternate;
                        if ((s.flags & 1024) !== 0)
                            switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (se !== null) {
                                    var ae = se.memoizedProps
                                      , Ye = se.memoizedState
                                      , O = s.stateNode
                                      , R = O.getSnapshotBeforeUpdate(s.elementType === s.type ? ae : rn(s.type, ae), Ye);
                                    O.__reactInternalSnapshotBeforeUpdate = R
                                }
                                break;
                            case 3:
                                var L = s.stateNode.containerInfo;
                                L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(r(163))
                            }
                    } catch (G) {
                        We(s, s.return, G)
                    }
                    if (n = s.sibling,
                    n !== null) {
                        n.return = s.return,
                        te = n;
                        break
                    }
                    te = s.return
                }
        return se = Lm,
        Lm = !1,
        se
    }
    function Hi(n, s, o) {
        var u = s.updateQueue;
        if (u = u !== null ? u.lastEffect : null,
        u !== null) {
            var d = u = u.next;
            do {
                if ((d.tag & n) === n) {
                    var p = d.destroy;
                    d.destroy = void 0,
                    p !== void 0 && vc(s, o, p)
                }
                d = d.next
            } while (d !== u)
        }
    }
    function Ra(n, s) {
        if (s = s.updateQueue,
        s = s !== null ? s.lastEffect : null,
        s !== null) {
            var o = s = s.next;
            do {
                if ((o.tag & n) === n) {
                    var u = o.create;
                    o.destroy = u()
                }
                o = o.next
            } while (o !== s)
        }
    }
    function wc(n) {
        var s = n.ref;
        if (s !== null) {
            var o = n.stateNode;
            switch (n.tag) {
            case 5:
                n = o;
                break;
            default:
                n = o
            }
            typeof s == "function" ? s(n) : s.current = n
        }
    }
    function Mm(n) {
        var s = n.alternate;
        s !== null && (n.alternate = null,
        Mm(s)),
        n.child = null,
        n.deletions = null,
        n.sibling = null,
        n.tag === 5 && (s = n.stateNode,
        s !== null && (delete s[pn],
        delete s[Li],
        delete s[Mu],
        delete s[pb],
        delete s[mb])),
        n.stateNode = null,
        n.return = null,
        n.dependencies = null,
        n.memoizedProps = null,
        n.memoizedState = null,
        n.pendingProps = null,
        n.stateNode = null,
        n.updateQueue = null
    }
    function Dm(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4
    }
    function Im(n) {
        e: for (; ; ) {
            for (; n.sibling === null; ) {
                if (n.return === null || Dm(n.return))
                    return null;
                n = n.return
            }
            for (n.sibling.return = n.return,
            n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
                if (n.flags & 2 || n.child === null || n.tag === 4)
                    continue e;
                n.child.return = n,
                n = n.child
            }
            if (!(n.flags & 2))
                return n.stateNode
        }
    }
    function xc(n, s, o) {
        var u = n.tag;
        if (u === 5 || u === 6)
            n = n.stateNode,
            s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode,
            s.insertBefore(n, o)) : (s = o,
            s.appendChild(n)),
            o = o._reactRootContainer,
            o != null || s.onclick !== null || (s.onclick = ia));
        else if (u !== 4 && (n = n.child,
        n !== null))
            for (xc(n, s, o),
            n = n.sibling; n !== null; )
                xc(n, s, o),
                n = n.sibling
    }
    function bc(n, s, o) {
        var u = n.tag;
        if (u === 5 || u === 6)
            n = n.stateNode,
            s ? o.insertBefore(n, s) : o.appendChild(n);
        else if (u !== 4 && (n = n.child,
        n !== null))
            for (bc(n, s, o),
            n = n.sibling; n !== null; )
                bc(n, s, o),
                n = n.sibling
    }
    var ut = null
      , sn = !1;
    function nr(n, s, o) {
        for (o = o.child; o !== null; )
            Fm(n, s, o),
            o = o.sibling
    }
    function Fm(n, s, o) {
        if (hn && typeof hn.onCommitFiberUnmount == "function")
            try {
                hn.onCommitFiberUnmount(Uo, o)
            } catch {}
        switch (o.tag) {
        case 5:
            yt || _s(o, s);
        case 6:
            var u = ut
              , d = sn;
            ut = null,
            nr(n, s, o),
            ut = u,
            sn = d,
            ut !== null && (sn ? (n = ut,
            o = o.stateNode,
            n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : ut.removeChild(o.stateNode));
            break;
        case 18:
            ut !== null && (sn ? (n = ut,
            o = o.stateNode,
            n.nodeType === 8 ? Lu(n.parentNode, o) : n.nodeType === 1 && Lu(n, o),
            ki(n)) : Lu(ut, o.stateNode));
            break;
        case 4:
            u = ut,
            d = sn,
            ut = o.stateNode.containerInfo,
            sn = !0,
            nr(n, s, o),
            ut = u,
            sn = d;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!yt && (u = o.updateQueue,
            u !== null && (u = u.lastEffect,
            u !== null))) {
                d = u = u.next;
                do {
                    var p = d
                      , v = p.destroy;
                    p = p.tag,
                    v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && vc(o, s, v),
                    d = d.next
                } while (d !== u)
            }
            nr(n, s, o);
            break;
        case 1:
            if (!yt && (_s(o, s),
            u = o.stateNode,
            typeof u.componentWillUnmount == "function"))
                try {
                    u.props = o.memoizedProps,
                    u.state = o.memoizedState,
                    u.componentWillUnmount()
                } catch (T) {
                    We(o, s, T)
                }
            nr(n, s, o);
            break;
        case 21:
            nr(n, s, o);
            break;
        case 22:
            o.mode & 1 ? (yt = (u = yt) || o.memoizedState !== null,
            nr(n, s, o),
            yt = u) : nr(n, s, o);
            break;
        default:
            nr(n, s, o)
        }
    }
    function Vm(n) {
        var s = n.updateQueue;
        if (s !== null) {
            n.updateQueue = null;
            var o = n.stateNode;
            o === null && (o = n.stateNode = new Nb),
            s.forEach(function(u) {
                var d = Ub.bind(null, n, u);
                o.has(u) || (o.add(u),
                u.then(d, d))
            })
        }
    }
    function on(n, s) {
        var o = s.deletions;
        if (o !== null)
            for (var u = 0; u < o.length; u++) {
                var d = o[u];
                try {
                    var p = n
                      , v = s
                      , T = v;
                    e: for (; T !== null; ) {
                        switch (T.tag) {
                        case 5:
                            ut = T.stateNode,
                            sn = !1;
                            break e;
                        case 3:
                            ut = T.stateNode.containerInfo,
                            sn = !0;
                            break e;
                        case 4:
                            ut = T.stateNode.containerInfo,
                            sn = !0;
                            break e
                        }
                        T = T.return
                    }
                    if (ut === null)
                        throw Error(r(160));
                    Fm(p, v, d),
                    ut = null,
                    sn = !1;
                    var C = d.alternate;
                    C !== null && (C.return = null),
                    d.return = null
                } catch (D) {
                    We(d, s, D)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null; )
                Bm(s, n),
                s = s.sibling
    }
    function Bm(n, s) {
        var o = n.alternate
          , u = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (on(s, n),
            yn(n),
            u & 4) {
                try {
                    Hi(3, n, n.return),
                    Ra(3, n)
                } catch (ae) {
                    We(n, n.return, ae)
                }
                try {
                    Hi(5, n, n.return)
                } catch (ae) {
                    We(n, n.return, ae)
                }
            }
            break;
        case 1:
            on(s, n),
            yn(n),
            u & 512 && o !== null && _s(o, o.return);
            break;
        case 5:
            if (on(s, n),
            yn(n),
            u & 512 && o !== null && _s(o, o.return),
            n.flags & 32) {
                var d = n.stateNode;
                try {
                    fi(d, "")
                } catch (ae) {
                    We(n, n.return, ae)
                }
            }
            if (u & 4 && (d = n.stateNode,
            d != null)) {
                var p = n.memoizedProps
                  , v = o !== null ? o.memoizedProps : p
                  , T = n.type
                  , C = n.updateQueue;
                if (n.updateQueue = null,
                C !== null)
                    try {
                        T === "input" && p.type === "radio" && p.name != null && ph(d, p),
                        Jl(T, v);
                        var D = Jl(T, p);
                        for (v = 0; v < C.length; v += 2) {
                            var H = C[v]
                              , K = C[v + 1];
                            H === "style" ? Sh(d, K) : H === "dangerouslySetInnerHTML" ? xh(d, K) : H === "children" ? fi(d, K) : M(d, H, K, D)
                        }
                        switch (T) {
                        case "input":
                            Kl(d, p);
                            break;
                        case "textarea":
                            yh(d, p);
                            break;
                        case "select":
                            var q = d._wrapperState.wasMultiple;
                            d._wrapperState.wasMultiple = !!p.multiple;
                            var Z = p.value;
                            Z != null ? ls(d, !!p.multiple, Z, !1) : q !== !!p.multiple && (p.defaultValue != null ? ls(d, !!p.multiple, p.defaultValue, !0) : ls(d, !!p.multiple, p.multiple ? [] : "", !1))
                        }
                        d[Li] = p
                    } catch (ae) {
                        We(n, n.return, ae)
                    }
            }
            break;
        case 6:
            if (on(s, n),
            yn(n),
            u & 4) {
                if (n.stateNode === null)
                    throw Error(r(162));
                d = n.stateNode,
                p = n.memoizedProps;
                try {
                    d.nodeValue = p
                } catch (ae) {
                    We(n, n.return, ae)
                }
            }
            break;
        case 3:
            if (on(s, n),
            yn(n),
            u & 4 && o !== null && o.memoizedState.isDehydrated)
                try {
                    ki(s.containerInfo)
                } catch (ae) {
                    We(n, n.return, ae)
                }
            break;
        case 4:
            on(s, n),
            yn(n);
            break;
        case 13:
            on(s, n),
            yn(n),
            d = n.child,
            d.flags & 8192 && (p = d.memoizedState !== null,
            d.stateNode.isHidden = p,
            !p || d.alternate !== null && d.alternate.memoizedState !== null || (Ec = Ge())),
            u & 4 && Vm(n);
            break;
        case 22:
            if (H = o !== null && o.memoizedState !== null,
            n.mode & 1 ? (yt = (D = yt) || H,
            on(s, n),
            yt = D) : on(s, n),
            yn(n),
            u & 8192) {
                if (D = n.memoizedState !== null,
                (n.stateNode.isHidden = D) && !H && (n.mode & 1) !== 0)
                    for (te = n,
                    H = n.child; H !== null; ) {
                        for (K = te = H; te !== null; ) {
                            switch (q = te,
                            Z = q.child,
                            q.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Hi(4, q, q.return);
                                break;
                            case 1:
                                _s(q, q.return);
                                var se = q.stateNode;
                                if (typeof se.componentWillUnmount == "function") {
                                    u = q,
                                    o = q.return;
                                    try {
                                        s = u,
                                        se.props = s.memoizedProps,
                                        se.state = s.memoizedState,
                                        se.componentWillUnmount()
                                    } catch (ae) {
                                        We(u, o, ae)
                                    }
                                }
                                break;
                            case 5:
                                _s(q, q.return);
                                break;
                            case 22:
                                if (q.memoizedState !== null) {
                                    $m(K);
                                    continue
                                }
                            }
                            Z !== null ? (Z.return = q,
                            te = Z) : $m(K)
                        }
                        H = H.sibling
                    }
                e: for (H = null,
                K = n; ; ) {
                    if (K.tag === 5) {
                        if (H === null) {
                            H = K;
                            try {
                                d = K.stateNode,
                                D ? (p = d.style,
                                typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (T = K.stateNode,
                                C = K.memoizedProps.style,
                                v = C != null && C.hasOwnProperty("display") ? C.display : null,
                                T.style.display = bh("display", v))
                            } catch (ae) {
                                We(n, n.return, ae)
                            }
                        }
                    } else if (K.tag === 6) {
                        if (H === null)
                            try {
                                K.stateNode.nodeValue = D ? "" : K.memoizedProps
                            } catch (ae) {
                                We(n, n.return, ae)
                            }
                    } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === n) && K.child !== null) {
                        K.child.return = K,
                        K = K.child;
                        continue
                    }
                    if (K === n)
                        break e;
                    for (; K.sibling === null; ) {
                        if (K.return === null || K.return === n)
                            break e;
                        H === K && (H = null),
                        K = K.return
                    }
                    H === K && (H = null),
                    K.sibling.return = K.return,
                    K = K.sibling
                }
            }
            break;
        case 19:
            on(s, n),
            yn(n),
            u & 4 && Vm(n);
            break;
        case 21:
            break;
        default:
            on(s, n),
            yn(n)
        }
    }
    function yn(n) {
        var s = n.flags;
        if (s & 2) {
            try {
                e: {
                    for (var o = n.return; o !== null; ) {
                        if (Dm(o)) {
                            var u = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(r(160))
                }
                switch (u.tag) {
                case 5:
                    var d = u.stateNode;
                    u.flags & 32 && (fi(d, ""),
                    u.flags &= -33);
                    var p = Im(n);
                    bc(n, p, d);
                    break;
                case 3:
                case 4:
                    var v = u.stateNode.containerInfo
                      , T = Im(n);
                    xc(n, T, v);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (C) {
                We(n, n.return, C)
            }
            n.flags &= -3
        }
        s & 4096 && (n.flags &= -4097)
    }
    function Ob(n, s, o) {
        te = n,
        Um(n)
    }
    function Um(n, s, o) {
        for (var u = (n.mode & 1) !== 0; te !== null; ) {
            var d = te
              , p = d.child;
            if (d.tag === 22 && u) {
                var v = d.memoizedState !== null || Pa;
                if (!v) {
                    var T = d.alternate
                      , C = T !== null && T.memoizedState !== null || yt;
                    T = Pa;
                    var D = yt;
                    if (Pa = v,
                    (yt = C) && !D)
                        for (te = d; te !== null; )
                            v = te,
                            C = v.child,
                            v.tag === 22 && v.memoizedState !== null ? qm(d) : C !== null ? (C.return = v,
                            te = C) : qm(d);
                    for (; p !== null; )
                        te = p,
                        Um(p),
                        p = p.sibling;
                    te = d,
                    Pa = T,
                    yt = D
                }
                zm(n)
            } else
                (d.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = d,
                te = p) : zm(n)
        }
    }
    function zm(n) {
        for (; te !== null; ) {
            var s = te;
            if ((s.flags & 8772) !== 0) {
                var o = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0)
                        switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            yt || Ra(5, s);
                            break;
                        case 1:
                            var u = s.stateNode;
                            if (s.flags & 4 && !yt)
                                if (o === null)
                                    u.componentDidMount();
                                else {
                                    var d = s.elementType === s.type ? o.memoizedProps : rn(s.type, o.memoizedProps);
                                    u.componentDidUpdate(d, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate)
                                }
                            var p = s.updateQueue;
                            p !== null && $p(s, p, u);
                            break;
                        case 3:
                            var v = s.updateQueue;
                            if (v !== null) {
                                if (o = null,
                                s.child !== null)
                                    switch (s.child.tag) {
                                    case 5:
                                        o = s.child.stateNode;
                                        break;
                                    case 1:
                                        o = s.child.stateNode
                                    }
                                $p(s, v, o)
                            }
                            break;
                        case 5:
                            var T = s.stateNode;
                            if (o === null && s.flags & 4) {
                                o = T;
                                var C = s.memoizedProps;
                                switch (s.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    C.autoFocus && o.focus();
                                    break;
                                case "img":
                                    C.src && (o.src = C.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var D = s.alternate;
                                if (D !== null) {
                                    var H = D.memoizedState;
                                    if (H !== null) {
                                        var K = H.dehydrated;
                                        K !== null && ki(K)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(r(163))
                        }
                    yt || s.flags & 512 && wc(s)
                } catch (q) {
                    We(s, s.return, q)
                }
            }
            if (s === n) {
                te = null;
                break
            }
            if (o = s.sibling,
            o !== null) {
                o.return = s.return,
                te = o;
                break
            }
            te = s.return
        }
    }
    function $m(n) {
        for (; te !== null; ) {
            var s = te;
            if (s === n) {
                te = null;
                break
            }
            var o = s.sibling;
            if (o !== null) {
                o.return = s.return,
                te = o;
                break
            }
            te = s.return
        }
    }
    function qm(n) {
        for (; te !== null; ) {
            var s = te;
            try {
                switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    var o = s.return;
                    try {
                        Ra(4, s)
                    } catch (C) {
                        We(s, o, C)
                    }
                    break;
                case 1:
                    var u = s.stateNode;
                    if (typeof u.componentDidMount == "function") {
                        var d = s.return;
                        try {
                            u.componentDidMount()
                        } catch (C) {
                            We(s, d, C)
                        }
                    }
                    var p = s.return;
                    try {
                        wc(s)
                    } catch (C) {
                        We(s, p, C)
                    }
                    break;
                case 5:
                    var v = s.return;
                    try {
                        wc(s)
                    } catch (C) {
                        We(s, v, C)
                    }
                }
            } catch (C) {
                We(s, s.return, C)
            }
            if (s === n) {
                te = null;
                break
            }
            var T = s.sibling;
            if (T !== null) {
                T.return = s.return,
                te = T;
                break
            }
            te = s.return
        }
    }
    var Lb = Math.ceil
      , _a = V.ReactCurrentDispatcher
      , Sc = V.ReactCurrentOwner
      , Wt = V.ReactCurrentBatchConfig
      , Ae = 0
      , ot = null
      , Ze = null
      , ct = 0
      , Vt = 0
      , As = Xn(0)
      , nt = 0
      , Wi = null
      , Mr = 0
      , Aa = 0
      , kc = 0
      , Ki = null
      , Rt = null
      , Ec = 0
      , Ns = 1 / 0
      , Ln = null
      , Na = !1
      , Tc = null
      , rr = null
      , ja = !1
      , sr = null
      , Oa = 0
      , Qi = 0
      , Cc = null
      , La = -1
      , Ma = 0;
    function St() {
        return (Ae & 6) !== 0 ? Ge() : La !== -1 ? La : La = Ge()
    }
    function ir(n) {
        return (n.mode & 1) === 0 ? 1 : (Ae & 2) !== 0 && ct !== 0 ? ct & -ct : yb.transition !== null ? (Ma === 0 && (Ma = Ih()),
        Ma) : (n = Me,
        n !== 0 || (n = window.event,
        n = n === void 0 ? 16 : Wh(n.type)),
        n)
    }
    function an(n, s, o, u) {
        if (50 < Qi)
            throw Qi = 0,
            Cc = null,
            Error(r(185));
        vi(n, o, u),
        ((Ae & 2) === 0 || n !== ot) && (n === ot && ((Ae & 2) === 0 && (Aa |= o),
        nt === 4 && or(n, ct)),
        _t(n, u),
        o === 1 && Ae === 0 && (s.mode & 1) === 0 && (Ns = Ge() + 500,
        ua && Zn()))
    }
    function _t(n, s) {
        var o = n.callbackNode;
        y1(n, s);
        var u = qo(n, n === ot ? ct : 0);
        if (u === 0)
            o !== null && Lh(o),
            n.callbackNode = null,
            n.callbackPriority = 0;
        else if (s = u & -u,
        n.callbackPriority !== s) {
            if (o != null && Lh(o),
            s === 1)
                n.tag === 0 ? gb(Wm.bind(null, n)) : Np(Wm.bind(null, n)),
                fb(function() {
                    (Ae & 6) === 0 && Zn()
                }),
                o = null;
            else {
                switch (Fh(u)) {
                case 1:
                    o = iu;
                    break;
                case 4:
                    o = Mh;
                    break;
                case 16:
                    o = Bo;
                    break;
                case 536870912:
                    o = Dh;
                    break;
                default:
                    o = Bo
                }
                o = eg(o, Hm.bind(null, n))
            }
            n.callbackPriority = s,
            n.callbackNode = o
        }
    }
    function Hm(n, s) {
        if (La = -1,
        Ma = 0,
        (Ae & 6) !== 0)
            throw Error(r(327));
        var o = n.callbackNode;
        if (js() && n.callbackNode !== o)
            return null;
        var u = qo(n, n === ot ? ct : 0);
        if (u === 0)
            return null;
        if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || s)
            s = Da(n, u);
        else {
            s = u;
            var d = Ae;
            Ae |= 2;
            var p = Qm();
            (ot !== n || ct !== s) && (Ln = null,
            Ns = Ge() + 500,
            Ir(n, s));
            do
                try {
                    Ib();
                    break
                } catch (T) {
                    Km(n, T)
                }
            while (!0);
            qu(),
            _a.current = p,
            Ae = d,
            Ze !== null ? s = 0 : (ot = null,
            ct = 0,
            s = nt)
        }
        if (s !== 0) {
            if (s === 2 && (d = ou(n),
            d !== 0 && (u = d,
            s = Pc(n, d))),
            s === 1)
                throw o = Wi,
                Ir(n, 0),
                or(n, u),
                _t(n, Ge()),
                o;
            if (s === 6)
                or(n, u);
            else {
                if (d = n.current.alternate,
                (u & 30) === 0 && !Mb(d) && (s = Da(n, u),
                s === 2 && (p = ou(n),
                p !== 0 && (u = p,
                s = Pc(n, p))),
                s === 1))
                    throw o = Wi,
                    Ir(n, 0),
                    or(n, u),
                    _t(n, Ge()),
                    o;
                switch (n.finishedWork = d,
                n.finishedLanes = u,
                s) {
                case 0:
                case 1:
                    throw Error(r(345));
                case 2:
                    Fr(n, Rt, Ln);
                    break;
                case 3:
                    if (or(n, u),
                    (u & 130023424) === u && (s = Ec + 500 - Ge(),
                    10 < s)) {
                        if (qo(n, 0) !== 0)
                            break;
                        if (d = n.suspendedLanes,
                        (d & u) !== u) {
                            St(),
                            n.pingedLanes |= n.suspendedLanes & d;
                            break
                        }
                        n.timeoutHandle = Ou(Fr.bind(null, n, Rt, Ln), s);
                        break
                    }
                    Fr(n, Rt, Ln);
                    break;
                case 4:
                    if (or(n, u),
                    (u & 4194240) === u)
                        break;
                    for (s = n.eventTimes,
                    d = -1; 0 < u; ) {
                        var v = 31 - en(u);
                        p = 1 << v,
                        v = s[v],
                        v > d && (d = v),
                        u &= ~p
                    }
                    if (u = d,
                    u = Ge() - u,
                    u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Lb(u / 1960)) - u,
                    10 < u) {
                        n.timeoutHandle = Ou(Fr.bind(null, n, Rt, Ln), u);
                        break
                    }
                    Fr(n, Rt, Ln);
                    break;
                case 5:
                    Fr(n, Rt, Ln);
                    break;
                default:
                    throw Error(r(329))
                }
            }
        }
        return _t(n, Ge()),
        n.callbackNode === o ? Hm.bind(null, n) : null
    }
    function Pc(n, s) {
        var o = Ki;
        return n.current.memoizedState.isDehydrated && (Ir(n, s).flags |= 256),
        n = Da(n, s),
        n !== 2 && (s = Rt,
        Rt = o,
        s !== null && Rc(s)),
        n
    }
    function Rc(n) {
        Rt === null ? Rt = n : Rt.push.apply(Rt, n)
    }
    function Mb(n) {
        for (var s = n; ; ) {
            if (s.flags & 16384) {
                var o = s.updateQueue;
                if (o !== null && (o = o.stores,
                o !== null))
                    for (var u = 0; u < o.length; u++) {
                        var d = o[u]
                          , p = d.getSnapshot;
                        d = d.value;
                        try {
                            if (!tn(p(), d))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = s.child,
            s.subtreeFlags & 16384 && o !== null)
                o.return = s,
                s = o;
            else {
                if (s === n)
                    break;
                for (; s.sibling === null; ) {
                    if (s.return === null || s.return === n)
                        return !0;
                    s = s.return
                }
                s.sibling.return = s.return,
                s = s.sibling
            }
        }
        return !0
    }
    function or(n, s) {
        for (s &= ~kc,
        s &= ~Aa,
        n.suspendedLanes |= s,
        n.pingedLanes &= ~s,
        n = n.expirationTimes; 0 < s; ) {
            var o = 31 - en(s)
              , u = 1 << o;
            n[o] = -1,
            s &= ~u
        }
    }
    function Wm(n) {
        if ((Ae & 6) !== 0)
            throw Error(r(327));
        js();
        var s = qo(n, 0);
        if ((s & 1) === 0)
            return _t(n, Ge()),
            null;
        var o = Da(n, s);
        if (n.tag !== 0 && o === 2) {
            var u = ou(n);
            u !== 0 && (s = u,
            o = Pc(n, u))
        }
        if (o === 1)
            throw o = Wi,
            Ir(n, 0),
            or(n, s),
            _t(n, Ge()),
            o;
        if (o === 6)
            throw Error(r(345));
        return n.finishedWork = n.current.alternate,
        n.finishedLanes = s,
        Fr(n, Rt, Ln),
        _t(n, Ge()),
        null
    }
    function _c(n, s) {
        var o = Ae;
        Ae |= 1;
        try {
            return n(s)
        } finally {
            Ae = o,
            Ae === 0 && (Ns = Ge() + 500,
            ua && Zn())
        }
    }
    function Dr(n) {
        sr !== null && sr.tag === 0 && (Ae & 6) === 0 && js();
        var s = Ae;
        Ae |= 1;
        var o = Wt.transition
          , u = Me;
        try {
            if (Wt.transition = null,
            Me = 1,
            n)
                return n()
        } finally {
            Me = u,
            Wt.transition = o,
            Ae = s,
            (Ae & 6) === 0 && Zn()
        }
    }
    function Ac() {
        Vt = As.current,
        Be(As)
    }
    function Ir(n, s) {
        n.finishedWork = null,
        n.finishedLanes = 0;
        var o = n.timeoutHandle;
        if (o !== -1 && (n.timeoutHandle = -1,
        db(o)),
        Ze !== null)
            for (o = Ze.return; o !== null; ) {
                var u = o;
                switch (Vu(u),
                u.tag) {
                case 1:
                    u = u.type.childContextTypes,
                    u != null && aa();
                    break;
                case 3:
                    Ps(),
                    Be(Tt),
                    Be(pt),
                    Ju();
                    break;
                case 5:
                    Yu(u);
                    break;
                case 4:
                    Ps();
                    break;
                case 13:
                    Be($e);
                    break;
                case 19:
                    Be($e);
                    break;
                case 10:
                    Hu(u.type._context);
                    break;
                case 22:
                case 23:
                    Ac()
                }
                o = o.return
            }
        if (ot = n,
        Ze = n = ar(n.current, null),
        ct = Vt = s,
        nt = 0,
        Wi = null,
        kc = Aa = Mr = 0,
        Rt = Ki = null,
        jr !== null) {
            for (s = 0; s < jr.length; s++)
                if (o = jr[s],
                u = o.interleaved,
                u !== null) {
                    o.interleaved = null;
                    var d = u.next
                      , p = o.pending;
                    if (p !== null) {
                        var v = p.next;
                        p.next = d,
                        u.next = v
                    }
                    o.pending = u
                }
            jr = null
        }
        return n
    }
    function Km(n, s) {
        do {
            var o = Ze;
            try {
                if (qu(),
                wa.current = ka,
                xa) {
                    for (var u = qe.memoizedState; u !== null; ) {
                        var d = u.queue;
                        d !== null && (d.pending = null),
                        u = u.next
                    }
                    xa = !1
                }
                if (Lr = 0,
                it = tt = qe = null,
                Bi = !1,
                Ui = 0,
                Sc.current = null,
                o === null || o.return === null) {
                    nt = 1,
                    Wi = s,
                    Ze = null;
                    break
                }
                e: {
                    var p = n
                      , v = o.return
                      , T = o
                      , C = s;
                    if (s = ct,
                    T.flags |= 32768,
                    C !== null && typeof C == "object" && typeof C.then == "function") {
                        var D = C
                          , H = T
                          , K = H.tag;
                        if ((H.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
                            var q = H.alternate;
                            q ? (H.updateQueue = q.updateQueue,
                            H.memoizedState = q.memoizedState,
                            H.lanes = q.lanes) : (H.updateQueue = null,
                            H.memoizedState = null)
                        }
                        var Z = vm(v);
                        if (Z !== null) {
                            Z.flags &= -257,
                            wm(Z, v, T, p, s),
                            Z.mode & 1 && ym(p, D, s),
                            s = Z,
                            C = D;
                            var se = s.updateQueue;
                            if (se === null) {
                                var ae = new Set;
                                ae.add(C),
                                s.updateQueue = ae
                            } else
                                se.add(C);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                ym(p, D, s),
                                Nc();
                                break e
                            }
                            C = Error(r(426))
                        }
                    } else if (ze && T.mode & 1) {
                        var Ye = vm(v);
                        if (Ye !== null) {
                            (Ye.flags & 65536) === 0 && (Ye.flags |= 256),
                            wm(Ye, v, T, p, s),
                            zu(Rs(C, T));
                            break e
                        }
                    }
                    p = C = Rs(C, T),
                    nt !== 4 && (nt = 2),
                    Ki === null ? Ki = [p] : Ki.push(p),
                    p = v;
                    do {
                        switch (p.tag) {
                        case 3:
                            p.flags |= 65536,
                            s &= -s,
                            p.lanes |= s;
                            var O = mm(p, C, s);
                            zp(p, O);
                            break e;
                        case 1:
                            T = C;
                            var R = p.type
                              , L = p.stateNode;
                            if ((p.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (rr === null || !rr.has(L)))) {
                                p.flags |= 65536,
                                s &= -s,
                                p.lanes |= s;
                                var G = gm(p, T, s);
                                zp(p, G);
                                break e
                            }
                        }
                        p = p.return
                    } while (p !== null)
                }
                Ym(o)
            } catch (ue) {
                s = ue,
                Ze === o && o !== null && (Ze = o = o.return);
                continue
            }
            break
        } while (!0)
    }
    function Qm() {
        var n = _a.current;
        return _a.current = ka,
        n === null ? ka : n
    }
    function Nc() {
        (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
        ot === null || (Mr & 268435455) === 0 && (Aa & 268435455) === 0 || or(ot, ct)
    }
    function Da(n, s) {
        var o = Ae;
        Ae |= 2;
        var u = Qm();
        (ot !== n || ct !== s) && (Ln = null,
        Ir(n, s));
        do
            try {
                Db();
                break
            } catch (d) {
                Km(n, d)
            }
        while (!0);
        if (qu(),
        Ae = o,
        _a.current = u,
        Ze !== null)
            throw Error(r(261));
        return ot = null,
        ct = 0,
        nt
    }
    function Db() {
        for (; Ze !== null; )
            Gm(Ze)
    }
    function Ib() {
        for (; Ze !== null && !l1(); )
            Gm(Ze)
    }
    function Gm(n) {
        var s = Zm(n.alternate, n, Vt);
        n.memoizedProps = n.pendingProps,
        s === null ? Ym(n) : Ze = s,
        Sc.current = null
    }
    function Ym(n) {
        var s = n;
        do {
            var o = s.alternate;
            if (n = s.return,
            (s.flags & 32768) === 0) {
                if (o = _b(o, s, Vt),
                o !== null) {
                    Ze = o;
                    return
                }
            } else {
                if (o = Ab(o, s),
                o !== null) {
                    o.flags &= 32767,
                    Ze = o;
                    return
                }
                if (n !== null)
                    n.flags |= 32768,
                    n.subtreeFlags = 0,
                    n.deletions = null;
                else {
                    nt = 6,
                    Ze = null;
                    return
                }
            }
            if (s = s.sibling,
            s !== null) {
                Ze = s;
                return
            }
            Ze = s = n
        } while (s !== null);
        nt === 0 && (nt = 5)
    }
    function Fr(n, s, o) {
        var u = Me
          , d = Wt.transition;
        try {
            Wt.transition = null,
            Me = 1,
            Fb(n, s, o, u)
        } finally {
            Wt.transition = d,
            Me = u
        }
        return null
    }
    function Fb(n, s, o, u) {
        do
            js();
        while (sr !== null);
        if ((Ae & 6) !== 0)
            throw Error(r(327));
        o = n.finishedWork;
        var d = n.finishedLanes;
        if (o === null)
            return null;
        if (n.finishedWork = null,
        n.finishedLanes = 0,
        o === n.current)
            throw Error(r(177));
        n.callbackNode = null,
        n.callbackPriority = 0;
        var p = o.lanes | o.childLanes;
        if (v1(n, p),
        n === ot && (Ze = ot = null,
        ct = 0),
        (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || ja || (ja = !0,
        eg(Bo, function() {
            return js(),
            null
        })),
        p = (o.flags & 15990) !== 0,
        (o.subtreeFlags & 15990) !== 0 || p) {
            p = Wt.transition,
            Wt.transition = null;
            var v = Me;
            Me = 1;
            var T = Ae;
            Ae |= 4,
            Sc.current = null,
            jb(n, o),
            Bm(o, n),
            sb(Nu),
            Ko = !!Au,
            Nu = Au = null,
            n.current = o,
            Ob(o),
            u1(),
            Ae = T,
            Me = v,
            Wt.transition = p
        } else
            n.current = o;
        if (ja && (ja = !1,
        sr = n,
        Oa = d),
        p = n.pendingLanes,
        p === 0 && (rr = null),
        f1(o.stateNode),
        _t(n, Ge()),
        s !== null)
            for (u = n.onRecoverableError,
            o = 0; o < s.length; o++)
                d = s[o],
                u(d.value, {
                    componentStack: d.stack,
                    digest: d.digest
                });
        if (Na)
            throw Na = !1,
            n = Tc,
            Tc = null,
            n;
        return (Oa & 1) !== 0 && n.tag !== 0 && js(),
        p = n.pendingLanes,
        (p & 1) !== 0 ? n === Cc ? Qi++ : (Qi = 0,
        Cc = n) : Qi = 0,
        Zn(),
        null
    }
    function js() {
        if (sr !== null) {
            var n = Fh(Oa)
              , s = Wt.transition
              , o = Me;
            try {
                if (Wt.transition = null,
                Me = 16 > n ? 16 : n,
                sr === null)
                    var u = !1;
                else {
                    if (n = sr,
                    sr = null,
                    Oa = 0,
                    (Ae & 6) !== 0)
                        throw Error(r(331));
                    var d = Ae;
                    for (Ae |= 4,
                    te = n.current; te !== null; ) {
                        var p = te
                          , v = p.child;
                        if ((te.flags & 16) !== 0) {
                            var T = p.deletions;
                            if (T !== null) {
                                for (var C = 0; C < T.length; C++) {
                                    var D = T[C];
                                    for (te = D; te !== null; ) {
                                        var H = te;
                                        switch (H.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hi(8, H, p)
                                        }
                                        var K = H.child;
                                        if (K !== null)
                                            K.return = H,
                                            te = K;
                                        else
                                            for (; te !== null; ) {
                                                H = te;
                                                var q = H.sibling
                                                  , Z = H.return;
                                                if (Mm(H),
                                                H === D) {
                                                    te = null;
                                                    break
                                                }
                                                if (q !== null) {
                                                    q.return = Z,
                                                    te = q;
                                                    break
                                                }
                                                te = Z
                                            }
                                    }
                                }
                                var se = p.alternate;
                                if (se !== null) {
                                    var ae = se.child;
                                    if (ae !== null) {
                                        se.child = null;
                                        do {
                                            var Ye = ae.sibling;
                                            ae.sibling = null,
                                            ae = Ye
                                        } while (ae !== null)
                                    }
                                }
                                te = p
                            }
                        }
                        if ((p.subtreeFlags & 2064) !== 0 && v !== null)
                            v.return = p,
                            te = v;
                        else
                            e: for (; te !== null; ) {
                                if (p = te,
                                (p.flags & 2048) !== 0)
                                    switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Hi(9, p, p.return)
                                    }
                                var O = p.sibling;
                                if (O !== null) {
                                    O.return = p.return,
                                    te = O;
                                    break e
                                }
                                te = p.return
                            }
                    }
                    var R = n.current;
                    for (te = R; te !== null; ) {
                        v = te;
                        var L = v.child;
                        if ((v.subtreeFlags & 2064) !== 0 && L !== null)
                            L.return = v,
                            te = L;
                        else
                            e: for (v = R; te !== null; ) {
                                if (T = te,
                                (T.flags & 2048) !== 0)
                                    try {
                                        switch (T.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ra(9, T)
                                        }
                                    } catch (ue) {
                                        We(T, T.return, ue)
                                    }
                                if (T === v) {
                                    te = null;
                                    break e
                                }
                                var G = T.sibling;
                                if (G !== null) {
                                    G.return = T.return,
                                    te = G;
                                    break e
                                }
                                te = T.return
                            }
                    }
                    if (Ae = d,
                    Zn(),
                    hn && typeof hn.onPostCommitFiberRoot == "function")
                        try {
                            hn.onPostCommitFiberRoot(Uo, n)
                        } catch {}
                    u = !0
                }
                return u
            } finally {
                Me = o,
                Wt.transition = s
            }
        }
        return !1
    }
    function Xm(n, s, o) {
        s = Rs(o, s),
        s = mm(n, s, 1),
        n = tr(n, s, 1),
        s = St(),
        n !== null && (vi(n, 1, s),
        _t(n, s))
    }
    function We(n, s, o) {
        if (n.tag === 3)
            Xm(n, n, o);
        else
            for (; s !== null; ) {
                if (s.tag === 3) {
                    Xm(s, n, o);
                    break
                } else if (s.tag === 1) {
                    var u = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (rr === null || !rr.has(u))) {
                        n = Rs(o, n),
                        n = gm(s, n, 1),
                        s = tr(s, n, 1),
                        n = St(),
                        s !== null && (vi(s, 1, n),
                        _t(s, n));
                        break
                    }
                }
                s = s.return
            }
    }
    function Vb(n, s, o) {
        var u = n.pingCache;
        u !== null && u.delete(s),
        s = St(),
        n.pingedLanes |= n.suspendedLanes & o,
        ot === n && (ct & o) === o && (nt === 4 || nt === 3 && (ct & 130023424) === ct && 500 > Ge() - Ec ? Ir(n, 0) : kc |= o),
        _t(n, s)
    }
    function Jm(n, s) {
        s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = $o,
        $o <<= 1,
        ($o & 130023424) === 0 && ($o = 4194304)));
        var o = St();
        n = Nn(n, s),
        n !== null && (vi(n, s, o),
        _t(n, o))
    }
    function Bb(n) {
        var s = n.memoizedState
          , o = 0;
        s !== null && (o = s.retryLane),
        Jm(n, o)
    }
    function Ub(n, s) {
        var o = 0;
        switch (n.tag) {
        case 13:
            var u = n.stateNode
              , d = n.memoizedState;
            d !== null && (o = d.retryLane);
            break;
        case 19:
            u = n.stateNode;
            break;
        default:
            throw Error(r(314))
        }
        u !== null && u.delete(s),
        Jm(n, o)
    }
    var Zm;
    Zm = function(n, s, o) {
        if (n !== null)
            if (n.memoizedProps !== s.pendingProps || Tt.current)
                Pt = !0;
            else {
                if ((n.lanes & o) === 0 && (s.flags & 128) === 0)
                    return Pt = !1,
                    Rb(n, s, o);
                Pt = (n.flags & 131072) !== 0
            }
        else
            Pt = !1,
            ze && (s.flags & 1048576) !== 0 && jp(s, da, s.index);
        switch (s.lanes = 0,
        s.tag) {
        case 2:
            var u = s.type;
            Ca(n, s),
            n = s.pendingProps;
            var d = xs(s, pt.current);
            Cs(s, o),
            d = tc(null, s, u, n, d, o);
            var p = nc();
            return s.flags |= 1,
            typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (s.tag = 1,
            s.memoizedState = null,
            s.updateQueue = null,
            Ct(u) ? (p = !0,
            la(s)) : p = !1,
            s.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null,
            Qu(s),
            d.updater = Ea,
            s.stateNode = d,
            d._reactInternals = s,
            lc(s, u, n, o),
            s = fc(null, s, u, !0, p, o)) : (s.tag = 0,
            ze && p && Fu(s),
            bt(null, s, d, o),
            s = s.child),
            s;
        case 16:
            u = s.elementType;
            e: {
                switch (Ca(n, s),
                n = s.pendingProps,
                d = u._init,
                u = d(u._payload),
                s.type = u,
                d = s.tag = $b(u),
                n = rn(u, n),
                d) {
                case 0:
                    s = dc(null, s, u, n, o);
                    break e;
                case 1:
                    s = Tm(null, s, u, n, o);
                    break e;
                case 11:
                    s = xm(null, s, u, n, o);
                    break e;
                case 14:
                    s = bm(null, s, u, rn(u.type, n), o);
                    break e
                }
                throw Error(r(306, u, ""))
            }
            return s;
        case 0:
            return u = s.type,
            d = s.pendingProps,
            d = s.elementType === u ? d : rn(u, d),
            dc(n, s, u, d, o);
        case 1:
            return u = s.type,
            d = s.pendingProps,
            d = s.elementType === u ? d : rn(u, d),
            Tm(n, s, u, d, o);
        case 3:
            e: {
                if (Cm(s),
                n === null)
                    throw Error(r(387));
                u = s.pendingProps,
                p = s.memoizedState,
                d = p.element,
                Up(n, s),
                ya(s, u, null, o);
                var v = s.memoizedState;
                if (u = v.element,
                p.isDehydrated)
                    if (p = {
                        element: u,
                        isDehydrated: !1,
                        cache: v.cache,
                        pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                        transitions: v.transitions
                    },
                    s.updateQueue.baseState = p,
                    s.memoizedState = p,
                    s.flags & 256) {
                        d = Rs(Error(r(423)), s),
                        s = Pm(n, s, u, o, d);
                        break e
                    } else if (u !== d) {
                        d = Rs(Error(r(424)), s),
                        s = Pm(n, s, u, o, d);
                        break e
                    } else
                        for (Ft = Yn(s.stateNode.containerInfo.firstChild),
                        It = s,
                        ze = !0,
                        nn = null,
                        o = Vp(s, null, u, o),
                        s.child = o; o; )
                            o.flags = o.flags & -3 | 4096,
                            o = o.sibling;
                else {
                    if (ks(),
                    u === d) {
                        s = On(n, s, o);
                        break e
                    }
                    bt(n, s, u, o)
                }
                s = s.child
            }
            return s;
        case 5:
            return qp(s),
            n === null && Uu(s),
            u = s.type,
            d = s.pendingProps,
            p = n !== null ? n.memoizedProps : null,
            v = d.children,
            ju(u, d) ? v = null : p !== null && ju(u, p) && (s.flags |= 32),
            Em(n, s),
            bt(n, s, v, o),
            s.child;
        case 6:
            return n === null && Uu(s),
            null;
        case 13:
            return Rm(n, s, o);
        case 4:
            return Gu(s, s.stateNode.containerInfo),
            u = s.pendingProps,
            n === null ? s.child = Es(s, null, u, o) : bt(n, s, u, o),
            s.child;
        case 11:
            return u = s.type,
            d = s.pendingProps,
            d = s.elementType === u ? d : rn(u, d),
            xm(n, s, u, d, o);
        case 7:
            return bt(n, s, s.pendingProps, o),
            s.child;
        case 8:
            return bt(n, s, s.pendingProps.children, o),
            s.child;
        case 12:
            return bt(n, s, s.pendingProps.children, o),
            s.child;
        case 10:
            e: {
                if (u = s.type._context,
                d = s.pendingProps,
                p = s.memoizedProps,
                v = d.value,
                Fe(pa, u._currentValue),
                u._currentValue = v,
                p !== null)
                    if (tn(p.value, v)) {
                        if (p.children === d.children && !Tt.current) {
                            s = On(n, s, o);
                            break e
                        }
                    } else
                        for (p = s.child,
                        p !== null && (p.return = s); p !== null; ) {
                            var T = p.dependencies;
                            if (T !== null) {
                                v = p.child;
                                for (var C = T.firstContext; C !== null; ) {
                                    if (C.context === u) {
                                        if (p.tag === 1) {
                                            C = jn(-1, o & -o),
                                            C.tag = 2;
                                            var D = p.updateQueue;
                                            if (D !== null) {
                                                D = D.shared;
                                                var H = D.pending;
                                                H === null ? C.next = C : (C.next = H.next,
                                                H.next = C),
                                                D.pending = C
                                            }
                                        }
                                        p.lanes |= o,
                                        C = p.alternate,
                                        C !== null && (C.lanes |= o),
                                        Wu(p.return, o, s),
                                        T.lanes |= o;
                                        break
                                    }
                                    C = C.next
                                }
                            } else if (p.tag === 10)
                                v = p.type === s.type ? null : p.child;
                            else if (p.tag === 18) {
                                if (v = p.return,
                                v === null)
                                    throw Error(r(341));
                                v.lanes |= o,
                                T = v.alternate,
                                T !== null && (T.lanes |= o),
                                Wu(v, o, s),
                                v = p.sibling
                            } else
                                v = p.child;
                            if (v !== null)
                                v.return = p;
                            else
                                for (v = p; v !== null; ) {
                                    if (v === s) {
                                        v = null;
                                        break
                                    }
                                    if (p = v.sibling,
                                    p !== null) {
                                        p.return = v.return,
                                        v = p;
                                        break
                                    }
                                    v = v.return
                                }
                            p = v
                        }
                bt(n, s, d.children, o),
                s = s.child
            }
            return s;
        case 9:
            return d = s.type,
            u = s.pendingProps.children,
            Cs(s, o),
            d = qt(d),
            u = u(d),
            s.flags |= 1,
            bt(n, s, u, o),
            s.child;
        case 14:
            return u = s.type,
            d = rn(u, s.pendingProps),
            d = rn(u.type, d),
            bm(n, s, u, d, o);
        case 15:
            return Sm(n, s, s.type, s.pendingProps, o);
        case 17:
            return u = s.type,
            d = s.pendingProps,
            d = s.elementType === u ? d : rn(u, d),
            Ca(n, s),
            s.tag = 1,
            Ct(u) ? (n = !0,
            la(s)) : n = !1,
            Cs(s, o),
            hm(s, u, d),
            lc(s, u, d, o),
            fc(null, s, u, !0, n, o);
        case 19:
            return Am(n, s, o);
        case 22:
            return km(n, s, o)
        }
        throw Error(r(156, s.tag))
    }
    ;
    function eg(n, s) {
        return Oh(n, s)
    }
    function zb(n, s, o, u) {
        this.tag = n,
        this.key = o,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = s,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = u,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Kt(n, s, o, u) {
        return new zb(n,s,o,u)
    }
    function jc(n) {
        return n = n.prototype,
        !(!n || !n.isReactComponent)
    }
    function $b(n) {
        if (typeof n == "function")
            return jc(n) ? 1 : 0;
        if (n != null) {
            if (n = n.$$typeof,
            n === $)
                return 11;
            if (n === pe)
                return 14
        }
        return 2
    }
    function ar(n, s) {
        var o = n.alternate;
        return o === null ? (o = Kt(n.tag, s, n.key, n.mode),
        o.elementType = n.elementType,
        o.type = n.type,
        o.stateNode = n.stateNode,
        o.alternate = n,
        n.alternate = o) : (o.pendingProps = s,
        o.type = n.type,
        o.flags = 0,
        o.subtreeFlags = 0,
        o.deletions = null),
        o.flags = n.flags & 14680064,
        o.childLanes = n.childLanes,
        o.lanes = n.lanes,
        o.child = n.child,
        o.memoizedProps = n.memoizedProps,
        o.memoizedState = n.memoizedState,
        o.updateQueue = n.updateQueue,
        s = n.dependencies,
        o.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        },
        o.sibling = n.sibling,
        o.index = n.index,
        o.ref = n.ref,
        o
    }
    function Ia(n, s, o, u, d, p) {
        var v = 2;
        if (u = n,
        typeof n == "function")
            jc(n) && (v = 1);
        else if (typeof n == "string")
            v = 5;
        else
            e: switch (n) {
            case ne:
                return Vr(o.children, d, p, s);
            case j:
                v = 8,
                d |= 8;
                break;
            case W:
                return n = Kt(12, o, s, d | 2),
                n.elementType = W,
                n.lanes = p,
                n;
            case re:
                return n = Kt(13, o, s, d),
                n.elementType = re,
                n.lanes = p,
                n;
            case Te:
                return n = Kt(19, o, s, d),
                n.elementType = Te,
                n.lanes = p,
                n;
            case de:
                return Fa(o, d, p, s);
            default:
                if (typeof n == "object" && n !== null)
                    switch (n.$$typeof) {
                    case Q:
                        v = 10;
                        break e;
                    case J:
                        v = 9;
                        break e;
                    case $:
                        v = 11;
                        break e;
                    case pe:
                        v = 14;
                        break e;
                    case he:
                        v = 16,
                        u = null;
                        break e
                    }
                throw Error(r(130, n == null ? n : typeof n, ""))
            }
        return s = Kt(v, o, s, d),
        s.elementType = n,
        s.type = u,
        s.lanes = p,
        s
    }
    function Vr(n, s, o, u) {
        return n = Kt(7, n, u, s),
        n.lanes = o,
        n
    }
    function Fa(n, s, o, u) {
        return n = Kt(22, n, u, s),
        n.elementType = de,
        n.lanes = o,
        n.stateNode = {
            isHidden: !1
        },
        n
    }
    function Oc(n, s, o) {
        return n = Kt(6, n, null, s),
        n.lanes = o,
        n
    }
    function Lc(n, s, o) {
        return s = Kt(4, n.children !== null ? n.children : [], n.key, s),
        s.lanes = o,
        s.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation
        },
        s
    }
    function qb(n, s, o, u, d) {
        this.tag = s,
        this.containerInfo = n,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = au(0),
        this.expirationTimes = au(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = au(0),
        this.identifierPrefix = u,
        this.onRecoverableError = d,
        this.mutableSourceEagerHydrationData = null
    }
    function Mc(n, s, o, u, d, p, v, T, C) {
        return n = new qb(n,s,o,T,C),
        s === 1 ? (s = 1,
        p === !0 && (s |= 8)) : s = 0,
        p = Kt(3, null, null, s),
        n.current = p,
        p.stateNode = n,
        p.memoizedState = {
            element: u,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Qu(p),
        n
    }
    function Hb(n, s, o) {
        var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Y,
            key: u == null ? null : "" + u,
            children: n,
            containerInfo: s,
            implementation: o
        }
    }
    function tg(n) {
        if (!n)
            return Jn;
        n = n._reactInternals;
        e: {
            if (Pr(n) !== n || n.tag !== 1)
                throw Error(r(170));
            var s = n;
            do {
                switch (s.tag) {
                case 3:
                    s = s.stateNode.context;
                    break e;
                case 1:
                    if (Ct(s.type)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                s = s.return
            } while (s !== null);
            throw Error(r(171))
        }
        if (n.tag === 1) {
            var o = n.type;
            if (Ct(o))
                return _p(n, o, s)
        }
        return s
    }
    function ng(n, s, o, u, d, p, v, T, C) {
        return n = Mc(o, u, !0, n, d, p, v, T, C),
        n.context = tg(null),
        o = n.current,
        u = St(),
        d = ir(o),
        p = jn(u, d),
        p.callback = s ?? null,
        tr(o, p, d),
        n.current.lanes = d,
        vi(n, d, u),
        _t(n, u),
        n
    }
    function Va(n, s, o, u) {
        var d = s.current
          , p = St()
          , v = ir(d);
        return o = tg(o),
        s.context === null ? s.context = o : s.pendingContext = o,
        s = jn(p, v),
        s.payload = {
            element: n
        },
        u = u === void 0 ? null : u,
        u !== null && (s.callback = u),
        n = tr(d, s, v),
        n !== null && (an(n, d, v, p),
        ga(n, d, v)),
        v
    }
    function Ba(n) {
        if (n = n.current,
        !n.child)
            return null;
        switch (n.child.tag) {
        case 5:
            return n.child.stateNode;
        default:
            return n.child.stateNode
        }
    }
    function rg(n, s) {
        if (n = n.memoizedState,
        n !== null && n.dehydrated !== null) {
            var o = n.retryLane;
            n.retryLane = o !== 0 && o < s ? o : s
        }
    }
    function Dc(n, s) {
        rg(n, s),
        (n = n.alternate) && rg(n, s)
    }
    function Wb() {
        return null
    }
    var sg = typeof reportError == "function" ? reportError : function(n) {
        console.error(n)
    }
    ;
    function Ic(n) {
        this._internalRoot = n
    }
    Ua.prototype.render = Ic.prototype.render = function(n) {
        var s = this._internalRoot;
        if (s === null)
            throw Error(r(409));
        Va(n, s, null, null)
    }
    ,
    Ua.prototype.unmount = Ic.prototype.unmount = function() {
        var n = this._internalRoot;
        if (n !== null) {
            this._internalRoot = null;
            var s = n.containerInfo;
            Dr(function() {
                Va(null, n, null, null)
            }),
            s[Pn] = null
        }
    }
    ;
    function Ua(n) {
        this._internalRoot = n
    }
    Ua.prototype.unstable_scheduleHydration = function(n) {
        if (n) {
            var s = Uh();
            n = {
                blockedOn: null,
                target: n,
                priority: s
            };
            for (var o = 0; o < Kn.length && s !== 0 && s < Kn[o].priority; o++)
                ;
            Kn.splice(o, 0, n),
            o === 0 && qh(n)
        }
    }
    ;
    function Fc(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
    }
    function za(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    }
    function ig() {}
    function Kb(n, s, o, u, d) {
        if (d) {
            if (typeof u == "function") {
                var p = u;
                u = function() {
                    var D = Ba(v);
                    p.call(D)
                }
            }
            var v = ng(s, u, n, 0, null, !1, !1, "", ig);
            return n._reactRootContainer = v,
            n[Pn] = v.current,
            ji(n.nodeType === 8 ? n.parentNode : n),
            Dr(),
            v
        }
        for (; d = n.lastChild; )
            n.removeChild(d);
        if (typeof u == "function") {
            var T = u;
            u = function() {
                var D = Ba(C);
                T.call(D)
            }
        }
        var C = Mc(n, 0, !1, null, null, !1, !1, "", ig);
        return n._reactRootContainer = C,
        n[Pn] = C.current,
        ji(n.nodeType === 8 ? n.parentNode : n),
        Dr(function() {
            Va(s, C, o, u)
        }),
        C
    }
    function $a(n, s, o, u, d) {
        var p = o._reactRootContainer;
        if (p) {
            var v = p;
            if (typeof d == "function") {
                var T = d;
                d = function() {
                    var C = Ba(v);
                    T.call(C)
                }
            }
            Va(s, v, n, d)
        } else
            v = Kb(o, s, n, d, u);
        return Ba(v)
    }
    Vh = function(n) {
        switch (n.tag) {
        case 3:
            var s = n.stateNode;
            if (s.current.memoizedState.isDehydrated) {
                var o = yi(s.pendingLanes);
                o !== 0 && (lu(s, o | 1),
                _t(s, Ge()),
                (Ae & 6) === 0 && (Ns = Ge() + 500,
                Zn()))
            }
            break;
        case 13:
            Dr(function() {
                var u = Nn(n, 1);
                if (u !== null) {
                    var d = St();
                    an(u, n, 1, d)
                }
            }),
            Dc(n, 1)
        }
    }
    ,
    uu = function(n) {
        if (n.tag === 13) {
            var s = Nn(n, 134217728);
            if (s !== null) {
                var o = St();
                an(s, n, 134217728, o)
            }
            Dc(n, 134217728)
        }
    }
    ,
    Bh = function(n) {
        if (n.tag === 13) {
            var s = ir(n)
              , o = Nn(n, s);
            if (o !== null) {
                var u = St();
                an(o, n, s, u)
            }
            Dc(n, s)
        }
    }
    ,
    Uh = function() {
        return Me
    }
    ,
    zh = function(n, s) {
        var o = Me;
        try {
            return Me = n,
            s()
        } finally {
            Me = o
        }
    }
    ,
    tu = function(n, s, o) {
        switch (s) {
        case "input":
            if (Kl(n, o),
            s = o.name,
            o.type === "radio" && s != null) {
                for (o = n; o.parentNode; )
                    o = o.parentNode;
                for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'),
                s = 0; s < o.length; s++) {
                    var u = o[s];
                    if (u !== n && u.form === n.form) {
                        var d = oa(u);
                        if (!d)
                            throw Error(r(90));
                        Cr(u),
                        Kl(u, d)
                    }
                }
            }
            break;
        case "textarea":
            yh(n, o);
            break;
        case "select":
            s = o.value,
            s != null && ls(n, !!o.multiple, s, !1)
        }
    }
    ,
    Ch = _c,
    Ph = Dr;
    var Qb = {
        usingClientEntryPoint: !1,
        Events: [Mi, vs, oa, Eh, Th, _c]
    }
      , Gi = {
        findFiberByHostInstance: Rr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , Gb = {
        bundleType: Gi.bundleType,
        version: Gi.version,
        rendererPackageName: Gi.rendererPackageName,
        rendererConfig: Gi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: V.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(n) {
            return n = Nh(n),
            n === null ? null : n.stateNode
        },
        findFiberByHostInstance: Gi.findFiberByHostInstance || Wb,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var qa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!qa.isDisabled && qa.supportsFiber)
            try {
                Uo = qa.inject(Gb),
                hn = qa
            } catch {}
    }
    return At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qb,
    At.createPortal = function(n, s) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Fc(s))
            throw Error(r(200));
        return Hb(n, s, null, o)
    }
    ,
    At.createRoot = function(n, s) {
        if (!Fc(n))
            throw Error(r(299));
        var o = !1
          , u = ""
          , d = sg;
        return s != null && (s.unstable_strictMode === !0 && (o = !0),
        s.identifierPrefix !== void 0 && (u = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (d = s.onRecoverableError)),
        s = Mc(n, 1, !1, null, null, o, !1, u, d),
        n[Pn] = s.current,
        ji(n.nodeType === 8 ? n.parentNode : n),
        new Ic(s)
    }
    ,
    At.findDOMNode = function(n) {
        if (n == null)
            return null;
        if (n.nodeType === 1)
            return n;
        var s = n._reactInternals;
        if (s === void 0)
            throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","),
            Error(r(268, n)));
        return n = Nh(s),
        n = n === null ? null : n.stateNode,
        n
    }
    ,
    At.flushSync = function(n) {
        return Dr(n)
    }
    ,
    At.hydrate = function(n, s, o) {
        if (!za(s))
            throw Error(r(200));
        return $a(null, n, s, !0, o)
    }
    ,
    At.hydrateRoot = function(n, s, o) {
        if (!Fc(n))
            throw Error(r(405));
        var u = o != null && o.hydratedSources || null
          , d = !1
          , p = ""
          , v = sg;
        if (o != null && (o.unstable_strictMode === !0 && (d = !0),
        o.identifierPrefix !== void 0 && (p = o.identifierPrefix),
        o.onRecoverableError !== void 0 && (v = o.onRecoverableError)),
        s = ng(s, null, n, 1, o ?? null, d, !1, p, v),
        n[Pn] = s.current,
        ji(n),
        u)
            for (n = 0; n < u.length; n++)
                o = u[n],
                d = o._getVersion,
                d = d(o._source),
                s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, d] : s.mutableSourceEagerHydrationData.push(o, d);
        return new Ua(s)
    }
    ,
    At.render = function(n, s, o) {
        if (!za(s))
            throw Error(r(200));
        return $a(null, n, s, !1, o)
    }
    ,
    At.unmountComponentAtNode = function(n) {
        if (!za(n))
            throw Error(r(40));
        return n._reactRootContainer ? (Dr(function() {
            $a(null, null, n, !1, function() {
                n._reactRootContainer = null,
                n[Pn] = null
            })
        }),
        !0) : !1
    }
    ,
    At.unstable_batchedUpdates = _c,
    At.unstable_renderSubtreeIntoContainer = function(n, s, o, u) {
        if (!za(o))
            throw Error(r(200));
        if (n == null || n._reactInternals === void 0)
            throw Error(r(38));
        return $a(n, s, o, !1, u)
    }
    ,
    At.version = "18.3.1-next-f1338f8080-20240426",
    At
}
var pg;
function H0() {
    if (pg)
        return zc.exports;
    pg = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (e) {
                console.error(e)
            }
    }
    return t(),
    zc.exports = sS(),
    zc.exports
}
var mg;
function iS() {
    if (mg)
        return Wa;
    mg = 1;
    var t = H0();
    return Wa.createRoot = t.createRoot,
    Wa.hydrateRoot = t.hydrateRoot,
    Wa
}
var oS = iS();
const aS = q0(oS)
  , lS = 20
  , uS = 1e6
  , Vn = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let Hc = 0;
function cS() {
    return Hc = (Hc + 1) % Number.MAX_VALUE,
    Hc.toString()
}
const Wc = new Map
  , gg = t => {
    if (Wc.has(t))
        return;
    const e = setTimeout( () => {
        Wc.delete(t),
        lo({
            type: Vn.REMOVE_TOAST,
            toastId: t
        })
    }
    , uS);
    Wc.set(t, e)
}
  , dS = (t, e) => {
    switch (e.type) {
    case Vn.ADD_TOAST:
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, lS)
        };
    case Vn.UPDATE_TOAST:
        return {
            ...t,
            toasts: t.toasts.map(r => r.id === e.toast.id ? {
                ...r,
                ...e.toast
            } : r)
        };
    case Vn.DISMISS_TOAST:
        {
            const {toastId: r} = e;
            return r ? gg(r) : t.toasts.forEach(i => {
                gg(i.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(i => i.id === r || r === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case Vn.REMOVE_TOAST:
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(r => r.id !== e.toastId)
        }
    }
}
  , rl = [];
let sl = {
    toasts: []
};
function lo(t) {
    sl = dS(sl, t),
    rl.forEach(e => {
        e(sl)
    }
    )
}
function fS({...t}) {
    const e = cS()
      , r = a => lo({
        type: Vn.UPDATE_TOAST,
        toast: {
            ...a,
            id: e
        }
    })
      , i = () => lo({
        type: Vn.DISMISS_TOAST,
        toastId: e
    });
    return lo({
        type: Vn.ADD_TOAST,
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }),
    {
        id: e,
        dismiss: i,
        update: r
    }
}
function hS() {
    const [t,e] = N.useState(sl);
    return N.useEffect( () => (rl.push(e),
    () => {
        const r = rl.indexOf(e);
        r > -1 && rl.splice(r, 1)
    }
    ), [t]),
    {
        ...t,
        toast: fS,
        dismiss: r => lo({
            type: Vn.DISMISS_TOAST,
            toastId: r
        })
    }
}
function W0(t) {
    var e, r, i = "";
    if (typeof t == "string" || typeof t == "number")
        i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var a = t.length;
            for (e = 0; e < a; e++)
                t[e] && (r = W0(t[e])) && (i && (i += " "),
                i += r)
        } else
            for (r in t)
                t[r] && (i && (i += " "),
                i += r);
    return i
}
function K0() {
    for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)
        (t = arguments[r]) && (e = W0(t)) && (i && (i += " "),
        i += e);
    return i
}
const yg = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , vg = K0
  , Rl = (t, e) => r => {
    var i;
    if ((e == null ? void 0 : e.variants) == null)
        return vg(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: a, defaultVariants: l} = e
      , c = Object.keys(a).map(m => {
        const g = r == null ? void 0 : r[m]
          , y = l == null ? void 0 : l[m];
        if (g === null)
            return null;
        const x = yg(g) || yg(y);
        return a[m][x]
    }
    )
      , f = r && Object.entries(r).reduce( (m, g) => {
        let[y,x] = g;
        return x === void 0 || (m[y] = x),
        m
    }
    , {})
      , h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (m, g) => {
        let {class: y, className: x, ...E} = g;
        return Object.entries(E).every(b => {
            let[k,S] = b;
            return Array.isArray(S) ? S.includes({
                ...l,
                ...f
            }[k]) : {
                ...l,
                ...f
            }[k] === S
        }
        ) ? [...m, y, x] : m
    }
    , []);
    return vg(t, c, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pS = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Q0 = (...t) => t.filter( (e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mS = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gS = N.forwardRef( ({color: t="currentColor", size: e=24, strokeWidth: r=2, absoluteStrokeWidth: i, className: a="", children: l, iconNode: c, ...f}, h) => N.createElement("svg", {
    ref: h,
    ...mS,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(r) * 24 / Number(e) : r,
    className: Q0("lucide", a),
    ...f
}, [...c.map( ([m,g]) => N.createElement(m, g)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = (t, e) => {
    const r = N.forwardRef( ({className: i, ...a}, l) => N.createElement(gS, {
        ref: l,
        iconNode: e,
        className: Q0(`lucide-${pS(t)}`, i),
        ...a
    }));
    return r.displayName = `${t}`,
    r
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yS = [["path", {
    d: "M12 5v14",
    key: "s699le"
}], ["path", {
    d: "m19 12-7 7-7-7",
    key: "1idqje"
}]]
  , vS = De("ArrowDown", yS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wS = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , xS = De("ArrowRight", wS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bS = [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]
  , SS = De("Award", bS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kS = [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]
  , ES = De("Brain", kS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TS = [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]
  , CS = De("Calendar", TS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PS = [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]
  , G0 = De("ChartColumn", PS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RS = [["path", {
    d: "m18 16 4-4-4-4",
    key: "1inbqp"
}], ["path", {
    d: "m6 8-4 4 4 4",
    key: "15zrgr"
}], ["path", {
    d: "m14.5 4-5 16",
    key: "e7oirm"
}]]
  , _S = De("CodeXml", RS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AS = [["rect", {
    width: "16",
    height: "16",
    x: "4",
    y: "4",
    rx: "2",
    key: "14l7u7"
}], ["rect", {
    width: "6",
    height: "6",
    x: "9",
    y: "9",
    rx: "1",
    key: "5aljv4"
}], ["path", {
    d: "M15 2v2",
    key: "13l42r"
}], ["path", {
    d: "M15 20v2",
    key: "15mkzm"
}], ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
}], ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
}], ["path", {
    d: "M20 15h2",
    key: "19e6y8"
}], ["path", {
    d: "M20 9h2",
    key: "19tzq7"
}], ["path", {
    d: "M9 2v2",
    key: "165o2o"
}], ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
}]]
  , NS = De("Cpu", AS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jS = [["ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3",
    key: "msslwz"
}], ["path", {
    d: "M3 5V19A9 3 0 0 0 21 19V5",
    key: "1wlel7"
}], ["path", {
    d: "M3 12A9 3 0 0 0 21 12",
    key: "mv7ke4"
}]]
  , OS = De("Database", jS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LS = [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]
  , gd = De("Download", LS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MS = [["line", {
    x1: "6",
    x2: "6",
    y1: "3",
    y2: "15",
    key: "17qcm7"
}], ["circle", {
    cx: "18",
    cy: "6",
    r: "3",
    key: "1h7g24"
}], ["circle", {
    cx: "6",
    cy: "18",
    r: "3",
    key: "fqmcym"
}], ["path", {
    d: "M18 9a9 9 0 0 1-9 9",
    key: "n2h4wq"
}]]
  , DS = De("GitBranch", MS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IS = [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]
  , mf = De("Github", IS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FS = [["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
}], ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
}], ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
}]]
  , VS = De("GraduationCap", FS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BS = [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]
  , US = De("Heart", BS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zS = [["path", {
    d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
    key: "tarvll"
}]]
  , $S = De("Laptop", zS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qS = [["path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
    key: "1gvzjb"
}], ["path", {
    d: "M9 18h6",
    key: "x1upvd"
}], ["path", {
    d: "M10 22h4",
    key: "ceow96"
}]]
  , Y0 = De("Lightbulb", qS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HS = [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]
  , gf = De("Linkedin", HS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WS = [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]
  , _l = De("Mail", WS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KS = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , X0 = De("MapPin", KS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QS = [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]
  , GS = De("Menu", QS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YS = [["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
}]]
  , XS = De("MessageSquare", YS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JS = [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]
  , ZS = De("Phone", JS);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ek = [["path", {
    d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "14sxne"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}], ["path", {
    d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
    key: "1hlbsb"
}], ["path", {
    d: "M16 16h5v5",
    key: "ccwih5"
}]]
  , tk = De("RefreshCcw", ek);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nk = [["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
}], ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
}], ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
}]]
  , rk = De("Sun", nk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sk = [["path", {
    d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
    key: "gugj83"
}]]
  , ik = De("Table2", sk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ok = [["polyline", {
    points: "4 17 10 11 4 5",
    key: "akl6gq"
}], ["line", {
    x1: "12",
    x2: "20",
    y1: "19",
    y2: "19",
    key: "q2wloq"
}]]
  , ak = De("Terminal", ok);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lk = [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]
  , uk = De("Users", lk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ck = [["path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    key: "cbrjhi"
}]]
  , dk = De("Wrench", ck);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , J0 = De("X", fk)
  , yf = "-"
  , hk = t => {
    const e = mk(t)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: i} = t;
    return {
        getClassGroupId: c => {
            const f = c.split(yf);
            return f[0] === "" && f.length !== 1 && f.shift(),
            Z0(f, e) || pk(c)
        }
        ,
        getConflictingClassGroupIds: (c, f) => {
            const h = r[c] || [];
            return f && i[c] ? [...h, ...i[c]] : h
        }
    }
}
  , Z0 = (t, e) => {
    var c;
    if (t.length === 0)
        return e.classGroupId;
    const r = t[0]
      , i = e.nextPart.get(r)
      , a = i ? Z0(t.slice(1), i) : void 0;
    if (a)
        return a;
    if (e.validators.length === 0)
        return;
    const l = t.join(yf);
    return (c = e.validators.find( ({validator: f}) => f(l))) == null ? void 0 : c.classGroupId
}
  , wg = /^\[(.+)\]$/
  , pk = t => {
    if (wg.test(t)) {
        const e = wg.exec(t)[1]
          , r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
        if (r)
            return "arbitrary.." + r
    }
}
  , mk = t => {
    const {theme: e, classGroups: r} = t
      , i = {
        nextPart: new Map,
        validators: []
    };
    for (const a in r)
        yd(r[a], i, a, e);
    return i
}
  , yd = (t, e, r, i) => {
    t.forEach(a => {
        if (typeof a == "string") {
            const l = a === "" ? e : xg(e, a);
            l.classGroupId = r;
            return
        }
        if (typeof a == "function") {
            if (gk(a)) {
                yd(a(i), e, r, i);
                return
            }
            e.validators.push({
                validator: a,
                classGroupId: r
            });
            return
        }
        Object.entries(a).forEach( ([l,c]) => {
            yd(c, xg(e, l), r, i)
        }
        )
    }
    )
}
  , xg = (t, e) => {
    let r = t;
    return e.split(yf).forEach(i => {
        r.nextPart.has(i) || r.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }),
        r = r.nextPart.get(i)
    }
    ),
    r
}
  , gk = t => t.isThemeGetter
  , yk = t => {
    if (t < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , r = new Map
      , i = new Map;
    const a = (l, c) => {
        r.set(l, c),
        e++,
        e > t && (e = 0,
        i = r,
        r = new Map)
    }
    ;
    return {
        get(l) {
            let c = r.get(l);
            if (c !== void 0)
                return c;
            if ((c = i.get(l)) !== void 0)
                return a(l, c),
                c
        },
        set(l, c) {
            r.has(l) ? r.set(l, c) : a(l, c)
        }
    }
}
  , vd = "!"
  , wd = ":"
  , vk = wd.length
  , wk = t => {
    const {prefix: e, experimentalParseClassName: r} = t;
    let i = a => {
        const l = [];
        let c = 0, f = 0, h = 0, m;
        for (let b = 0; b < a.length; b++) {
            let k = a[b];
            if (c === 0 && f === 0) {
                if (k === wd) {
                    l.push(a.slice(h, b)),
                    h = b + vk;
                    continue
                }
                if (k === "/") {
                    m = b;
                    continue
                }
            }
            k === "[" ? c++ : k === "]" ? c-- : k === "(" ? f++ : k === ")" && f--
        }
        const g = l.length === 0 ? a : a.substring(h)
          , y = xk(g)
          , x = y !== g
          , E = m && m > h ? m - h : void 0;
        return {
            modifiers: l,
            hasImportantModifier: x,
            baseClassName: y,
            maybePostfixModifierPosition: E
        }
    }
    ;
    if (e) {
        const a = e + wd
          , l = i;
        i = c => c.startsWith(a) ? l(c.substring(a.length)) : {
            isExternal: !0,
            modifiers: [],
            hasImportantModifier: !1,
            baseClassName: c,
            maybePostfixModifierPosition: void 0
        }
    }
    if (r) {
        const a = i;
        i = l => r({
            className: l,
            parseClassName: a
        })
    }
    return i
}
  , xk = t => t.endsWith(vd) ? t.substring(0, t.length - 1) : t.startsWith(vd) ? t.substring(1) : t
  , bk = t => {
    const e = Object.fromEntries(t.orderSensitiveModifiers.map(i => [i, !0]));
    return i => {
        if (i.length <= 1)
            return i;
        const a = [];
        let l = [];
        return i.forEach(c => {
            c[0] === "[" || e[c] ? (a.push(...l.sort(), c),
            l = []) : l.push(c)
        }
        ),
        a.push(...l.sort()),
        a
    }
}
  , Sk = t => ({
    cache: yk(t.cacheSize),
    parseClassName: wk(t),
    sortModifiers: bk(t),
    ...hk(t)
})
  , kk = /\s+/
  , Ek = (t, e) => {
    const {parseClassName: r, getClassGroupId: i, getConflictingClassGroupIds: a, sortModifiers: l} = e
      , c = []
      , f = t.trim().split(kk);
    let h = "";
    for (let m = f.length - 1; m >= 0; m -= 1) {
        const g = f[m]
          , {isExternal: y, modifiers: x, hasImportantModifier: E, baseClassName: b, maybePostfixModifierPosition: k} = r(g);
        if (y) {
            h = g + (h.length > 0 ? " " + h : h);
            continue
        }
        let S = !!k
          , _ = i(S ? b.substring(0, k) : b);
        if (!_) {
            if (!S) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            if (_ = i(b),
            !_) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            S = !1
        }
        const F = l(x).join(":")
          , M = E ? F + vd : F
          , V = M + _;
        if (c.includes(V))
            continue;
        c.push(V);
        const U = a(_, S);
        for (let Y = 0; Y < U.length; ++Y) {
            const ne = U[Y];
            c.push(M + ne)
        }
        h = g + (h.length > 0 ? " " + h : h)
    }
    return h
}
;
function Tk() {
    let t = 0, e, r, i = "";
    for (; t < arguments.length; )
        (e = arguments[t++]) && (r = ev(e)) && (i && (i += " "),
        i += r);
    return i
}
const ev = t => {
    if (typeof t == "string")
        return t;
    let e, r = "";
    for (let i = 0; i < t.length; i++)
        t[i] && (e = ev(t[i])) && (r && (r += " "),
        r += e);
    return r
}
;
function Ck(t, ...e) {
    let r, i, a, l = c;
    function c(h) {
        const m = e.reduce( (g, y) => y(g), t());
        return r = Sk(m),
        i = r.cache.get,
        a = r.cache.set,
        l = f,
        f(h)
    }
    function f(h) {
        const m = i(h);
        if (m)
            return m;
        const g = Ek(h, r);
        return a(h, g),
        g
    }
    return function() {
        return l(Tk.apply(null, arguments))
    }
}
const rt = t => {
    const e = r => r[t] || [];
    return e.isThemeGetter = !0,
    e
}
  , tv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , nv = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , Pk = /^\d+\/\d+$/
  , Rk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , _k = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Ak = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , Nk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , jk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Os = t => Pk.test(t)
  , ke = t => !!t && !Number.isNaN(Number(t))
  , ur = t => !!t && Number.isInteger(Number(t))
  , Kc = t => t.endsWith("%") && ke(t.slice(0, -1))
  , Mn = t => Rk.test(t)
  , Ok = () => !0
  , Lk = t => _k.test(t) && !Ak.test(t)
  , rv = () => !1
  , Mk = t => Nk.test(t)
  , Dk = t => jk.test(t)
  , Ik = t => !ie(t) && !oe(t)
  , Fk = t => ii(t, ov, rv)
  , ie = t => tv.test(t)
  , Br = t => ii(t, av, Lk)
  , Qc = t => ii(t, $k, ke)
  , bg = t => ii(t, sv, rv)
  , Vk = t => ii(t, iv, Dk)
  , Ka = t => ii(t, lv, Mk)
  , oe = t => nv.test(t)
  , Xi = t => oi(t, av)
  , Bk = t => oi(t, qk)
  , Sg = t => oi(t, sv)
  , Uk = t => oi(t, ov)
  , zk = t => oi(t, iv)
  , Qa = t => oi(t, lv, !0)
  , ii = (t, e, r) => {
    const i = tv.exec(t);
    return i ? i[1] ? e(i[1]) : r(i[2]) : !1
}
  , oi = (t, e, r=!1) => {
    const i = nv.exec(t);
    return i ? i[1] ? e(i[1]) : r : !1
}
  , sv = t => t === "position" || t === "percentage"
  , iv = t => t === "image" || t === "url"
  , ov = t => t === "length" || t === "size" || t === "bg-size"
  , av = t => t === "length"
  , $k = t => t === "number"
  , qk = t => t === "family-name"
  , lv = t => t === "shadow"
  , Hk = () => {
    const t = rt("color")
      , e = rt("font")
      , r = rt("text")
      , i = rt("font-weight")
      , a = rt("tracking")
      , l = rt("leading")
      , c = rt("breakpoint")
      , f = rt("container")
      , h = rt("spacing")
      , m = rt("radius")
      , g = rt("shadow")
      , y = rt("inset-shadow")
      , x = rt("text-shadow")
      , E = rt("drop-shadow")
      , b = rt("blur")
      , k = rt("perspective")
      , S = rt("aspect")
      , _ = rt("ease")
      , F = rt("animate")
      , M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , V = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , U = () => [...V(), oe, ie]
      , Y = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , ne = () => ["auto", "contain", "none"]
      , j = () => [oe, ie, h]
      , W = () => [Os, "full", "auto", ...j()]
      , Q = () => [ur, "none", "subgrid", oe, ie]
      , J = () => ["auto", {
        span: ["full", ur, oe, ie]
    }, ur, oe, ie]
      , $ = () => [ur, "auto", oe, ie]
      , re = () => ["auto", "min", "max", "fr", oe, ie]
      , Te = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , pe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , he = () => ["auto", ...j()]
      , de = () => [Os, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()]
      , B = () => [t, oe, ie]
      , le = () => [...V(), Sg, bg, {
        position: [oe, ie]
    }]
      , X = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , A = () => ["auto", "cover", "contain", Uk, Fk, {
        size: [oe, ie]
    }]
      , z = () => [Kc, Xi, Br]
      , ce = () => ["", "none", "full", m, oe, ie]
      , fe = () => ["", ke, Xi, Br]
      , Se = () => ["solid", "dashed", "dotted", "double"]
      , Ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , xe = () => [ke, Kc, Sg, bg]
      , Ne = () => ["", "none", b, oe, ie]
      , Le = () => ["none", ke, oe, ie]
      , st = () => ["none", ke, oe, ie]
      , $n = () => [ke, oe, ie]
      , Cr = () => [Os, "full", ...j()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Mn],
            breakpoint: [Mn],
            color: [Ok],
            container: [Mn],
            "drop-shadow": [Mn],
            ease: ["in", "out", "in-out"],
            font: [Ik],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Mn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Mn],
            shadow: [Mn],
            spacing: ["px", ke],
            text: [Mn],
            "text-shadow": [Mn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", Os, ie, oe, S]
            }],
            container: ["container"],
            columns: [{
                columns: [ke, ie, oe, f]
            }],
            "break-after": [{
                "break-after": M()
            }],
            "break-before": [{
                "break-before": M()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: U()
            }],
            overflow: [{
                overflow: Y()
            }],
            "overflow-x": [{
                "overflow-x": Y()
            }],
            "overflow-y": [{
                "overflow-y": Y()
            }],
            overscroll: [{
                overscroll: ne()
            }],
            "overscroll-x": [{
                "overscroll-x": ne()
            }],
            "overscroll-y": [{
                "overscroll-y": ne()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: W()
            }],
            "inset-x": [{
                "inset-x": W()
            }],
            "inset-y": [{
                "inset-y": W()
            }],
            start: [{
                start: W()
            }],
            end: [{
                end: W()
            }],
            top: [{
                top: W()
            }],
            right: [{
                right: W()
            }],
            bottom: [{
                bottom: W()
            }],
            left: [{
                left: W()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [ur, "auto", oe, ie]
            }],
            basis: [{
                basis: [Os, "full", "auto", f, ...j()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [ke, Os, "auto", "initial", "none", ie]
            }],
            grow: [{
                grow: ["", ke, oe, ie]
            }],
            shrink: [{
                shrink: ["", ke, oe, ie]
            }],
            order: [{
                order: [ur, "first", "last", "none", oe, ie]
            }],
            "grid-cols": [{
                "grid-cols": Q()
            }],
            "col-start-end": [{
                col: J()
            }],
            "col-start": [{
                "col-start": $()
            }],
            "col-end": [{
                "col-end": $()
            }],
            "grid-rows": [{
                "grid-rows": Q()
            }],
            "row-start-end": [{
                row: J()
            }],
            "row-start": [{
                "row-start": $()
            }],
            "row-end": [{
                "row-end": $()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": re()
            }],
            "auto-rows": [{
                "auto-rows": re()
            }],
            gap: [{
                gap: j()
            }],
            "gap-x": [{
                "gap-x": j()
            }],
            "gap-y": [{
                "gap-y": j()
            }],
            "justify-content": [{
                justify: [...Te(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...pe(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...pe()]
            }],
            "align-content": [{
                content: ["normal", ...Te()]
            }],
            "align-items": [{
                items: [...pe(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...pe(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Te()
            }],
            "place-items": [{
                "place-items": [...pe(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...pe()]
            }],
            p: [{
                p: j()
            }],
            px: [{
                px: j()
            }],
            py: [{
                py: j()
            }],
            ps: [{
                ps: j()
            }],
            pe: [{
                pe: j()
            }],
            pt: [{
                pt: j()
            }],
            pr: [{
                pr: j()
            }],
            pb: [{
                pb: j()
            }],
            pl: [{
                pl: j()
            }],
            m: [{
                m: he()
            }],
            mx: [{
                mx: he()
            }],
            my: [{
                my: he()
            }],
            ms: [{
                ms: he()
            }],
            me: [{
                me: he()
            }],
            mt: [{
                mt: he()
            }],
            mr: [{
                mr: he()
            }],
            mb: [{
                mb: he()
            }],
            ml: [{
                ml: he()
            }],
            "space-x": [{
                "space-x": j()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": j()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: de()
            }],
            w: [{
                w: [f, "screen", ...de()]
            }],
            "min-w": [{
                "min-w": [f, "screen", "none", ...de()]
            }],
            "max-w": [{
                "max-w": [f, "screen", "none", "prose", {
                    screen: [c]
                }, ...de()]
            }],
            h: [{
                h: ["screen", "lh", ...de()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...de()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...de()]
            }],
            "font-size": [{
                text: ["base", r, Xi, Br]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [i, oe, Qc]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Kc, ie]
            }],
            "font-family": [{
                font: [Bk, ie, e]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [a, oe, ie]
            }],
            "line-clamp": [{
                "line-clamp": [ke, "none", oe, Qc]
            }],
            leading: [{
                leading: [l, ...j()]
            }],
            "list-image": [{
                "list-image": ["none", oe, ie]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", oe, ie]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: B()
            }],
            "text-color": [{
                text: B()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...Se(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [ke, "from-font", "auto", oe, Br]
            }],
            "text-decoration-color": [{
                decoration: B()
            }],
            "underline-offset": [{
                "underline-offset": [ke, "auto", oe, ie]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: j()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", oe, ie]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", oe, ie]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: le()
            }],
            "bg-repeat": [{
                bg: X()
            }],
            "bg-size": [{
                bg: A()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, ur, oe, ie],
                    radial: ["", oe, ie],
                    conic: [ur, oe, ie]
                }, zk, Vk]
            }],
            "bg-color": [{
                bg: B()
            }],
            "gradient-from-pos": [{
                from: z()
            }],
            "gradient-via-pos": [{
                via: z()
            }],
            "gradient-to-pos": [{
                to: z()
            }],
            "gradient-from": [{
                from: B()
            }],
            "gradient-via": [{
                via: B()
            }],
            "gradient-to": [{
                to: B()
            }],
            rounded: [{
                rounded: ce()
            }],
            "rounded-s": [{
                "rounded-s": ce()
            }],
            "rounded-e": [{
                "rounded-e": ce()
            }],
            "rounded-t": [{
                "rounded-t": ce()
            }],
            "rounded-r": [{
                "rounded-r": ce()
            }],
            "rounded-b": [{
                "rounded-b": ce()
            }],
            "rounded-l": [{
                "rounded-l": ce()
            }],
            "rounded-ss": [{
                "rounded-ss": ce()
            }],
            "rounded-se": [{
                "rounded-se": ce()
            }],
            "rounded-ee": [{
                "rounded-ee": ce()
            }],
            "rounded-es": [{
                "rounded-es": ce()
            }],
            "rounded-tl": [{
                "rounded-tl": ce()
            }],
            "rounded-tr": [{
                "rounded-tr": ce()
            }],
            "rounded-br": [{
                "rounded-br": ce()
            }],
            "rounded-bl": [{
                "rounded-bl": ce()
            }],
            "border-w": [{
                border: fe()
            }],
            "border-w-x": [{
                "border-x": fe()
            }],
            "border-w-y": [{
                "border-y": fe()
            }],
            "border-w-s": [{
                "border-s": fe()
            }],
            "border-w-e": [{
                "border-e": fe()
            }],
            "border-w-t": [{
                "border-t": fe()
            }],
            "border-w-r": [{
                "border-r": fe()
            }],
            "border-w-b": [{
                "border-b": fe()
            }],
            "border-w-l": [{
                "border-l": fe()
            }],
            "divide-x": [{
                "divide-x": fe()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": fe()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...Se(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...Se(), "hidden", "none"]
            }],
            "border-color": [{
                border: B()
            }],
            "border-color-x": [{
                "border-x": B()
            }],
            "border-color-y": [{
                "border-y": B()
            }],
            "border-color-s": [{
                "border-s": B()
            }],
            "border-color-e": [{
                "border-e": B()
            }],
            "border-color-t": [{
                "border-t": B()
            }],
            "border-color-r": [{
                "border-r": B()
            }],
            "border-color-b": [{
                "border-b": B()
            }],
            "border-color-l": [{
                "border-l": B()
            }],
            "divide-color": [{
                divide: B()
            }],
            "outline-style": [{
                outline: [...Se(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [ke, oe, ie]
            }],
            "outline-w": [{
                outline: ["", ke, Xi, Br]
            }],
            "outline-color": [{
                outline: B()
            }],
            shadow: [{
                shadow: ["", "none", g, Qa, Ka]
            }],
            "shadow-color": [{
                shadow: B()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", y, Qa, Ka]
            }],
            "inset-shadow-color": [{
                "inset-shadow": B()
            }],
            "ring-w": [{
                ring: fe()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: B()
            }],
            "ring-offset-w": [{
                "ring-offset": [ke, Br]
            }],
            "ring-offset-color": [{
                "ring-offset": B()
            }],
            "inset-ring-w": [{
                "inset-ring": fe()
            }],
            "inset-ring-color": [{
                "inset-ring": B()
            }],
            "text-shadow": [{
                "text-shadow": ["none", x, Qa, Ka]
            }],
            "text-shadow-color": [{
                "text-shadow": B()
            }],
            opacity: [{
                opacity: [ke, oe, ie]
            }],
            "mix-blend": [{
                "mix-blend": [...Ce(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": Ce()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [ke]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": xe()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": xe()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": B()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": B()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": xe()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": xe()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": B()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": B()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": xe()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": xe()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": B()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": B()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": xe()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": xe()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": B()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": B()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": xe()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": xe()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": B()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": B()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": xe()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": xe()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": B()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": B()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": xe()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": xe()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": B()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": B()
            }],
            "mask-image-radial": [{
                "mask-radial": [oe, ie]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": xe()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": xe()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": B()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": B()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": V()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [ke]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": xe()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": xe()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": B()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": B()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: le()
            }],
            "mask-repeat": [{
                mask: X()
            }],
            "mask-size": [{
                mask: A()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", oe, ie]
            }],
            filter: [{
                filter: ["", "none", oe, ie]
            }],
            blur: [{
                blur: Ne()
            }],
            brightness: [{
                brightness: [ke, oe, ie]
            }],
            contrast: [{
                contrast: [ke, oe, ie]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", E, Qa, Ka]
            }],
            "drop-shadow-color": [{
                "drop-shadow": B()
            }],
            grayscale: [{
                grayscale: ["", ke, oe, ie]
            }],
            "hue-rotate": [{
                "hue-rotate": [ke, oe, ie]
            }],
            invert: [{
                invert: ["", ke, oe, ie]
            }],
            saturate: [{
                saturate: [ke, oe, ie]
            }],
            sepia: [{
                sepia: ["", ke, oe, ie]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", oe, ie]
            }],
            "backdrop-blur": [{
                "backdrop-blur": Ne()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [ke, oe, ie]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [ke, oe, ie]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", ke, oe, ie]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [ke, oe, ie]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", ke, oe, ie]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [ke, oe, ie]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [ke, oe, ie]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", ke, oe, ie]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": j()
            }],
            "border-spacing-x": [{
                "border-spacing-x": j()
            }],
            "border-spacing-y": [{
                "border-spacing-y": j()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", oe, ie]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [ke, "initial", oe, ie]
            }],
            ease: [{
                ease: ["linear", "initial", _, oe, ie]
            }],
            delay: [{
                delay: [ke, oe, ie]
            }],
            animate: [{
                animate: ["none", F, oe, ie]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [k, oe, ie]
            }],
            "perspective-origin": [{
                "perspective-origin": U()
            }],
            rotate: [{
                rotate: Le()
            }],
            "rotate-x": [{
                "rotate-x": Le()
            }],
            "rotate-y": [{
                "rotate-y": Le()
            }],
            "rotate-z": [{
                "rotate-z": Le()
            }],
            scale: [{
                scale: st()
            }],
            "scale-x": [{
                "scale-x": st()
            }],
            "scale-y": [{
                "scale-y": st()
            }],
            "scale-z": [{
                "scale-z": st()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: $n()
            }],
            "skew-x": [{
                "skew-x": $n()
            }],
            "skew-y": [{
                "skew-y": $n()
            }],
            transform: [{
                transform: [oe, ie, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: U()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: Cr()
            }],
            "translate-x": [{
                "translate-x": Cr()
            }],
            "translate-y": [{
                "translate-y": Cr()
            }],
            "translate-z": [{
                "translate-z": Cr()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: B()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: B()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", oe, ie]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": j()
            }],
            "scroll-mx": [{
                "scroll-mx": j()
            }],
            "scroll-my": [{
                "scroll-my": j()
            }],
            "scroll-ms": [{
                "scroll-ms": j()
            }],
            "scroll-me": [{
                "scroll-me": j()
            }],
            "scroll-mt": [{
                "scroll-mt": j()
            }],
            "scroll-mr": [{
                "scroll-mr": j()
            }],
            "scroll-mb": [{
                "scroll-mb": j()
            }],
            "scroll-ml": [{
                "scroll-ml": j()
            }],
            "scroll-p": [{
                "scroll-p": j()
            }],
            "scroll-px": [{
                "scroll-px": j()
            }],
            "scroll-py": [{
                "scroll-py": j()
            }],
            "scroll-ps": [{
                "scroll-ps": j()
            }],
            "scroll-pe": [{
                "scroll-pe": j()
            }],
            "scroll-pt": [{
                "scroll-pt": j()
            }],
            "scroll-pr": [{
                "scroll-pr": j()
            }],
            "scroll-pb": [{
                "scroll-pb": j()
            }],
            "scroll-pl": [{
                "scroll-pl": j()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", oe, ie]
            }],
            fill: [{
                fill: ["none", ...B()]
            }],
            "stroke-w": [{
                stroke: [ke, Xi, Br, Qc]
            }],
            stroke: [{
                stroke: ["none", ...B()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , uv = Ck(Hk);
function Cn(...t) {
    return uv(K0(t))
}
const cv = N.forwardRef( ({...t}, e) => w.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
cv.displayName = "ToastProvider";
const dv = N.forwardRef( ({...t}, e) => w.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
dv.displayName = "ToastViewport";
const Wk = Rl("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , fv = N.forwardRef( ({className: t, variant: e, ...r}, i) => w.jsx("div", {
    ref: i,
    className: Cn(Wk({
        variant: e
    }), t),
    ...r
}));
fv.displayName = "Toast";
const Kk = N.forwardRef( ({className: t, ...e}, r) => w.jsx("div", {
    ref: r,
    className: Cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
Kk.displayName = "ToastAction";
const hv = N.forwardRef( ({className: t, ...e}, r) => w.jsx("button", {
    ref: r,
    className: Cn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: w.jsx(J0, {
        className: "h-4 w-4"
    })
}));
hv.displayName = "ToastClose";
const pv = N.forwardRef( ({className: t, ...e}, r) => w.jsx("div", {
    ref: r,
    className: Cn("text-sm font-semibold", t),
    ...e
}));
pv.displayName = "ToastTitle";
const mv = N.forwardRef( ({className: t, ...e}, r) => w.jsx("div", {
    ref: r,
    className: Cn("text-sm opacity-90", t),
    ...e
}));
mv.displayName = "ToastDescription";
function Qk() {
    const {toasts: t} = hS();
    return w.jsxs(cv, {
        children: [t.map(function({id: e, title: r, description: i, action: a, ...l}) {
            return w.jsxs(fv, {
                ...l,
                children: [w.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && w.jsx(pv, {
                        children: r
                    }), i && w.jsx(mv, {
                        children: i
                    })]
                }), a, w.jsx(hv, {})]
            }, e)
        }), w.jsx(dv, {})]
    })
}
var Co = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        () => {
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, Gk = {
    setTimeout: (t, e) => setTimeout(t, e),
    clearTimeout: t => clearTimeout(t),
    setInterval: (t, e) => setInterval(t, e),
    clearInterval: t => clearInterval(t)
}, fr, hf, L0, Yk = (L0 = class {
    constructor() {
        ye(this, fr, Gk);
        ye(this, hf, !1)
    }
    setTimeoutProvider(t) {
        ee(this, fr, t)
    }
    setTimeout(t, e) {
        return P(this, fr).setTimeout(t, e)
    }
    clearTimeout(t) {
        P(this, fr).clearTimeout(t)
    }
    setInterval(t, e) {
        return P(this, fr).setInterval(t, e)
    }
    clearInterval(t) {
        P(this, fr).clearInterval(t)
    }
}
,
fr = new WeakMap,
hf = new WeakMap,
L0), qr = new Yk;
function Xk(t) {
    setTimeout(t, 0)
}
var ss = typeof window > "u" || "Deno"in globalThis;
function jt() {}
function Jk(t, e) {
    return typeof t == "function" ? t(e) : t
}
function xd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function gv(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function br(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Jt(t, e) {
    return typeof t == "function" ? t(e) : t
}
function kg(t, e) {
    const {type: r="all", exact: i, fetchStatus: a, predicate: l, queryKey: c, stale: f} = t;
    if (c) {
        if (i) {
            if (e.queryHash !== vf(c, e.options))
                return !1
        } else if (!mo(e.queryKey, c))
            return !1
    }
    if (r !== "all") {
        const h = e.isActive();
        if (r === "active" && !h || r === "inactive" && h)
            return !1
    }
    return !(typeof f == "boolean" && e.isStale() !== f || a && a !== e.state.fetchStatus || l && !l(e))
}
function Eg(t, e) {
    const {exact: r, status: i, predicate: a, mutationKey: l} = t;
    if (l) {
        if (!e.options.mutationKey)
            return !1;
        if (r) {
            if (po(e.options.mutationKey) !== po(l))
                return !1
        } else if (!mo(e.options.mutationKey, l))
            return !1
    }
    return !(i && e.state.status !== i || a && !a(e))
}
function vf(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || po)(t)
}
function po(t) {
    return JSON.stringify(t, (e, r) => Sd(r) ? Object.keys(r).sort().reduce( (i, a) => (i[a] = r[a],
    i), {}) : r)
}
function mo(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => mo(t[r], e[r])) : !1
}
var Zk = Object.prototype.hasOwnProperty;
function yv(t, e) {
    if (t === e)
        return t;
    const r = Tg(t) && Tg(e);
    if (!r && !(Sd(t) && Sd(e)))
        return e;
    const a = (r ? t : Object.keys(t)).length
      , l = r ? e : Object.keys(e)
      , c = l.length
      , f = r ? new Array(c) : {};
    let h = 0;
    for (let m = 0; m < c; m++) {
        const g = r ? m : l[m]
          , y = t[g]
          , x = e[g];
        if (y === x) {
            f[g] = y,
            (r ? m < a : Zk.call(t, g)) && h++;
            continue
        }
        if (y === null || x === null || typeof y != "object" || typeof x != "object") {
            f[g] = x;
            continue
        }
        const E = yv(y, x);
        f[g] = E,
        E === y && h++
    }
    return a === c && h === a ? t : f
}
function bd(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const r in t)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function Tg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function Sd(t) {
    if (!Cg(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const r = e.prototype;
    return !(!Cg(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function Cg(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function eE(t) {
    return new Promise(e => {
        qr.setTimeout(e, t)
    }
    )
}
function kd(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? yv(t, e) : e
}
function tE(t, e, r=0) {
    const i = [...t, e];
    return r && i.length > r ? i.slice(1) : i
}
function nE(t, e, r=0) {
    const i = [e, ...t];
    return r && i.length > r ? i.slice(0, -1) : i
}
var wf = Symbol();
function vv(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === wf ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
function rE(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
var Kr, hr, $s, M0, sE = (M0 = class extends Co {
    constructor() {
        super();
        ye(this, Kr);
        ye(this, hr);
        ye(this, $s);
        ee(this, $s, e => {
            if (!ss && window.addEventListener) {
                const r = () => e();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, hr) || this.setEventListener(P(this, $s))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = P(this, hr)) == null || e.call(this),
        ee(this, hr, void 0))
    }
    setEventListener(e) {
        var r;
        ee(this, $s, e),
        (r = P(this, hr)) == null || r.call(this),
        ee(this, hr, e(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(e) {
        P(this, Kr) !== e && (ee(this, Kr, e),
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(r => {
            r(e)
        }
        )
    }
    isFocused() {
        var e;
        return typeof P(this, Kr) == "boolean" ? P(this, Kr) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
    }
}
,
Kr = new WeakMap,
hr = new WeakMap,
$s = new WeakMap,
M0), xf = new sE;
function Ed() {
    let t, e;
    const r = new Promise( (a, l) => {
        t = a,
        e = l
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function i(a) {
        Object.assign(r, a),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }),
        t(a)
    }
    ,
    r.reject = a => {
        i({
            status: "rejected",
            reason: a
        }),
        e(a)
    }
    ,
    r
}
var iE = Xk;
function oE() {
    let t = []
      , e = 0
      , r = f => {
        f()
    }
      , i = f => {
        f()
    }
      , a = iE;
    const l = f => {
        e ? t.push(f) : a( () => {
            r(f)
        }
        )
    }
      , c = () => {
        const f = t;
        t = [],
        f.length && a( () => {
            i( () => {
                f.forEach(h => {
                    r(h)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: f => {
            let h;
            e++;
            try {
                h = f()
            } finally {
                e--,
                e || c()
            }
            return h
        }
        ,
        batchCalls: f => (...h) => {
            l( () => {
                f(...h)
            }
            )
        }
        ,
        schedule: l,
        setNotifyFunction: f => {
            r = f
        }
        ,
        setBatchNotifyFunction: f => {
            i = f
        }
        ,
        setScheduler: f => {
            a = f
        }
    }
}
var ht = oE(), qs, pr, Hs, D0, aE = (D0 = class extends Co {
    constructor() {
        super();
        ye(this, qs, !0);
        ye(this, pr);
        ye(this, Hs);
        ee(this, Hs, e => {
            if (!ss && window.addEventListener) {
                const r = () => e(!0)
                  , i = () => e(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, pr) || this.setEventListener(P(this, Hs))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = P(this, pr)) == null || e.call(this),
        ee(this, pr, void 0))
    }
    setEventListener(e) {
        var r;
        ee(this, Hs, e),
        (r = P(this, pr)) == null || r.call(this),
        ee(this, pr, e(this.setOnline.bind(this)))
    }
    setOnline(e) {
        P(this, qs) !== e && (ee(this, qs, e),
        this.listeners.forEach(i => {
            i(e)
        }
        ))
    }
    isOnline() {
        return P(this, qs)
    }
}
,
qs = new WeakMap,
pr = new WeakMap,
Hs = new WeakMap,
D0), yl = new aE;
function lE(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function wv(t) {
    return (t ?? "online") === "online" ? yl.isOnline() : !0
}
var Td = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
;
function xv(t) {
    let e = !1, r = 0, i;
    const a = Ed()
      , l = () => a.status !== "pending"
      , c = k => {
        var S;
        if (!l()) {
            const _ = new Td(k);
            x(_),
            (S = t.onCancel) == null || S.call(t, _)
        }
    }
      , f = () => {
        e = !0
    }
      , h = () => {
        e = !1
    }
      , m = () => xf.isFocused() && (t.networkMode === "always" || yl.isOnline()) && t.canRun()
      , g = () => wv(t.networkMode) && t.canRun()
      , y = k => {
        l() || (i == null || i(),
        a.resolve(k))
    }
      , x = k => {
        l() || (i == null || i(),
        a.reject(k))
    }
      , E = () => new Promise(k => {
        var S;
        i = _ => {
            (l() || m()) && k(_)
        }
        ,
        (S = t.onPause) == null || S.call(t)
    }
    ).then( () => {
        var k;
        i = void 0,
        l() || (k = t.onContinue) == null || k.call(t)
    }
    )
      , b = () => {
        if (l())
            return;
        let k;
        const S = r === 0 ? t.initialPromise : void 0;
        try {
            k = S ?? t.fn()
        } catch (_) {
            k = Promise.reject(_)
        }
        Promise.resolve(k).then(y).catch(_ => {
            var Y;
            if (l())
                return;
            const F = t.retry ?? (ss ? 0 : 3)
              , M = t.retryDelay ?? lE
              , V = typeof M == "function" ? M(r, _) : M
              , U = F === !0 || typeof F == "number" && r < F || typeof F == "function" && F(r, _);
            if (e || !U) {
                x(_);
                return
            }
            r++,
            (Y = t.onFail) == null || Y.call(t, r, _),
            eE(V).then( () => m() ? void 0 : E()).then( () => {
                e ? x(_) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: a,
        status: () => a.status,
        cancel: c,
        continue: () => (i == null || i(),
        a),
        cancelRetry: f,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? b() : E().then(b),
        a)
    }
}
var Qr, I0, bv = (I0 = class {
    constructor() {
        ye(this, Qr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        xd(this.gcTime) && ee(this, Qr, qr.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (ss ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        P(this, Qr) && (qr.clearTimeout(P(this, Qr)),
        ee(this, Qr, void 0))
    }
}
,
Qr = new WeakMap,
I0), Gr, Ws, Xt, Yr, lt, bo, Xr, un, Dn, F0, uE = (F0 = class extends bv {
    constructor(e) {
        super();
        ye(this, un);
        ye(this, Gr);
        ye(this, Ws);
        ye(this, Xt);
        ye(this, Yr);
        ye(this, lt);
        ye(this, bo);
        ye(this, Xr);
        ee(this, Xr, !1),
        ee(this, bo, e.defaultOptions),
        this.setOptions(e.options),
        this.observers = [],
        ee(this, Yr, e.client),
        ee(this, Xt, P(this, Yr).getQueryCache()),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        ee(this, Gr, Pg(this.options)),
        this.state = e.state ?? P(this, Gr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var e;
        return (e = P(this, lt)) == null ? void 0 : e.promise
    }
    setOptions(e) {
        if (this.options = {
            ...P(this, bo),
            ...e
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const r = Pg(this.options);
            r.data !== void 0 && (this.setData(r.data, {
                updatedAt: r.dataUpdatedAt,
                manual: !0
            }),
            ee(this, Gr, r))
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, Xt).remove(this)
    }
    setData(e, r) {
        const i = kd(this.state.data, e, this.options);
        return Pe(this, un, Dn).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        i
    }
    setState(e, r) {
        Pe(this, un, Dn).call(this, {
            type: "setState",
            state: e,
            setStateOptions: r
        })
    }
    cancel(e) {
        var i, a;
        const r = (i = P(this, lt)) == null ? void 0 : i.promise;
        return (a = P(this, lt)) == null || a.cancel(e),
        r ? r.then(jt).catch(jt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, Gr))
    }
    isActive() {
        return this.observers.some(e => Jt(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === wf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => br(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !gv(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var r;
        const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = P(this, lt)) == null || r.continue()
    }
    onOnline() {
        var r;
        const e = this.observers.find(i => i.shouldFetchOnReconnect());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = P(this, lt)) == null || r.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        P(this, Xt).notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e),
        this.observers.length || (P(this, lt) && (P(this, Xr) ? P(this, lt).cancel({
            revert: !0
        }) : P(this, lt).cancelRetry()),
        this.scheduleGc()),
        P(this, Xt).notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Pe(this, un, Dn).call(this, {
            type: "invalidate"
        })
    }
    async fetch(e, r) {
        var h, m, g, y, x, E, b, k, S, _, F, M;
        if (this.state.fetchStatus !== "idle" && ((h = P(this, lt)) == null ? void 0 : h.status()) !== "rejected") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, lt))
                return P(this, lt).continueRetry(),
                P(this, lt).promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const V = this.observers.find(U => U.options.queryFn);
            V && this.setOptions(V.options)
        }
        const i = new AbortController
          , a = V => {
            Object.defineProperty(V, "signal", {
                enumerable: !0,
                get: () => (ee(this, Xr, !0),
                i.signal)
            })
        }
          , l = () => {
            const V = vv(this.options, r)
              , Y = ( () => {
                const ne = {
                    client: P(this, Yr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return a(ne),
                ne
            }
            )();
            return ee(this, Xr, !1),
            this.options.persister ? this.options.persister(V, Y, this) : V(Y)
        }
          , f = ( () => {
            const V = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: P(this, Yr),
                state: this.state,
                fetchFn: l
            };
            return a(V),
            V
        }
        )();
        (m = this.options.behavior) == null || m.onFetch(f, this),
        ee(this, Ws, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = f.fetchOptions) == null ? void 0 : g.meta)) && Pe(this, un, Dn).call(this, {
            type: "fetch",
            meta: (y = f.fetchOptions) == null ? void 0 : y.meta
        }),
        ee(this, lt, xv({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: f.fetchFn,
            onCancel: V => {
                V instanceof Td && V.revert && this.setState({
                    ...P(this, Ws),
                    fetchStatus: "idle"
                }),
                i.abort()
            }
            ,
            onFail: (V, U) => {
                Pe(this, un, Dn).call(this, {
                    type: "failed",
                    failureCount: V,
                    error: U
                })
            }
            ,
            onPause: () => {
                Pe(this, un, Dn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Pe(this, un, Dn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: f.options.retry,
            retryDelay: f.options.retryDelay,
            networkMode: f.options.networkMode,
            canRun: () => !0
        }));
        try {
            const V = await P(this, lt).start();
            if (V === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(V),
            (E = (x = P(this, Xt).config).onSuccess) == null || E.call(x, V, this),
            (k = (b = P(this, Xt).config).onSettled) == null || k.call(b, V, this.state.error, this),
            V
        } catch (V) {
            if (V instanceof Td) {
                if (V.silent)
                    return P(this, lt).promise;
                if (V.revert) {
                    if (this.state.data === void 0)
                        throw V;
                    return this.state.data
                }
            }
            throw Pe(this, un, Dn).call(this, {
                type: "error",
                error: V
            }),
            (_ = (S = P(this, Xt).config).onError) == null || _.call(S, V, this),
            (M = (F = P(this, Xt).config).onSettled) == null || M.call(F, this.state.data, V, this),
            V
        } finally {
            this.scheduleGc()
        }
    }
}
,
Gr = new WeakMap,
Ws = new WeakMap,
Xt = new WeakMap,
Yr = new WeakMap,
lt = new WeakMap,
bo = new WeakMap,
Xr = new WeakMap,
un = new WeakSet,
Dn = function(e) {
    const r = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...Sv(i.data, this.options),
                fetchMeta: e.meta ?? null
            };
        case "success":
            const a = {
                ...i,
                data: e.data,
                dataUpdateCount: i.dataUpdateCount + 1,
                dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return ee(this, Ws, e.manual ? a : void 0),
            a;
        case "error":
            const l = e.error;
            return {
                ...i,
                error: l,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: l,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...e.state
            }
        }
    }
    ;
    this.state = r(this.state),
    ht.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        P(this, Xt).notify({
            query: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
F0);
function Sv(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: wv(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Pg(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , r = e !== void 0
      , i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Nt, Re, So, kt, Jr, Ks, In, mr, ko, Qs, Gs, Zr, es, gr, Ys, Oe, no, Cd, Pd, Rd, _d, Ad, Nd, jd, kv, V0, cE = (V0 = class extends Co {
    constructor(e, r) {
        super();
        ye(this, Oe);
        ye(this, Nt);
        ye(this, Re);
        ye(this, So);
        ye(this, kt);
        ye(this, Jr);
        ye(this, Ks);
        ye(this, In);
        ye(this, mr);
        ye(this, ko);
        ye(this, Qs);
        ye(this, Gs);
        ye(this, Zr);
        ye(this, es);
        ye(this, gr);
        ye(this, Ys, new Set);
        this.options = r,
        ee(this, Nt, e),
        ee(this, mr, null),
        ee(this, In, Ed()),
        this.bindMethods(),
        this.setOptions(r)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (P(this, Re).addObserver(this),
        Rg(P(this, Re), this.options) ? Pe(this, Oe, no).call(this) : this.updateResult(),
        Pe(this, Oe, _d).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Od(P(this, Re), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Od(P(this, Re), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        Pe(this, Oe, Ad).call(this),
        Pe(this, Oe, Nd).call(this),
        P(this, Re).removeObserver(this)
    }
    setOptions(e) {
        const r = this.options
          , i = P(this, Re);
        if (this.options = P(this, Nt).defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Jt(this.options.enabled, P(this, Re)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        Pe(this, Oe, jd).call(this),
        P(this, Re).setOptions(this.options),
        r._defaulted && !bd(this.options, r) && P(this, Nt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: P(this, Re),
            observer: this
        });
        const a = this.hasListeners();
        a && _g(P(this, Re), i, this.options, r) && Pe(this, Oe, no).call(this),
        this.updateResult(),
        a && (P(this, Re) !== i || Jt(this.options.enabled, P(this, Re)) !== Jt(r.enabled, P(this, Re)) || br(this.options.staleTime, P(this, Re)) !== br(r.staleTime, P(this, Re))) && Pe(this, Oe, Cd).call(this);
        const l = Pe(this, Oe, Pd).call(this);
        a && (P(this, Re) !== i || Jt(this.options.enabled, P(this, Re)) !== Jt(r.enabled, P(this, Re)) || l !== P(this, gr)) && Pe(this, Oe, Rd).call(this, l)
    }
    getOptimisticResult(e) {
        const r = P(this, Nt).getQueryCache().build(P(this, Nt), e)
          , i = this.createResult(r, e);
        return fE(this, i) && (ee(this, kt, i),
        ee(this, Ks, this.options),
        ee(this, Jr, P(this, Re).state)),
        i
    }
    getCurrentResult() {
        return P(this, kt)
    }
    trackResult(e, r) {
        return new Proxy(e,{
            get: (i, a) => (this.trackProp(a),
            r == null || r(a),
            a === "promise" && !this.options.experimental_prefetchInRender && P(this, In).status === "pending" && P(this, In).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
            Reflect.get(i, a))
        })
    }
    trackProp(e) {
        P(this, Ys).add(e)
    }
    getCurrentQuery() {
        return P(this, Re)
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        const r = P(this, Nt).defaultQueryOptions(e)
          , i = P(this, Nt).getQueryCache().build(P(this, Nt), r);
        return i.fetch().then( () => this.createResult(i, r))
    }
    fetch(e) {
        return Pe(this, Oe, no).call(this, {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        P(this, kt)))
    }
    createResult(e, r) {
        var W;
        const i = P(this, Re)
          , a = this.options
          , l = P(this, kt)
          , c = P(this, Jr)
          , f = P(this, Ks)
          , m = e !== i ? e.state : P(this, So)
          , {state: g} = e;
        let y = {
            ...g
        }, x = !1, E;
        if (r._optimisticResults) {
            const Q = this.hasListeners()
              , J = !Q && Rg(e, r)
              , $ = Q && _g(e, i, r, a);
            (J || $) && (y = {
                ...y,
                ...Sv(g.data, e.options)
            }),
            r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {error: b, errorUpdatedAt: k, status: S} = y;
        E = y.data;
        let _ = !1;
        if (r.placeholderData !== void 0 && E === void 0 && S === "pending") {
            let Q;
            l != null && l.isPlaceholderData && r.placeholderData === (f == null ? void 0 : f.placeholderData) ? (Q = l.data,
            _ = !0) : Q = typeof r.placeholderData == "function" ? r.placeholderData((W = P(this, Gs)) == null ? void 0 : W.state.data, P(this, Gs)) : r.placeholderData,
            Q !== void 0 && (S = "success",
            E = kd(l == null ? void 0 : l.data, Q, r),
            x = !0)
        }
        if (r.select && E !== void 0 && !_)
            if (l && E === (c == null ? void 0 : c.data) && r.select === P(this, ko))
                E = P(this, Qs);
            else
                try {
                    ee(this, ko, r.select),
                    E = r.select(E),
                    E = kd(l == null ? void 0 : l.data, E, r),
                    ee(this, Qs, E),
                    ee(this, mr, null)
                } catch (Q) {
                    ee(this, mr, Q)
                }
        P(this, mr) && (b = P(this, mr),
        E = P(this, Qs),
        k = Date.now(),
        S = "error");
        const F = y.fetchStatus === "fetching"
          , M = S === "pending"
          , V = S === "error"
          , U = M && F
          , Y = E !== void 0
          , j = {
            status: S,
            fetchStatus: y.fetchStatus,
            isPending: M,
            isSuccess: S === "success",
            isError: V,
            isInitialLoading: U,
            isLoading: U,
            data: E,
            dataUpdatedAt: y.dataUpdatedAt,
            error: b,
            errorUpdatedAt: k,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount: y.dataUpdateCount > m.dataUpdateCount || y.errorUpdateCount > m.errorUpdateCount,
            isFetching: F,
            isRefetching: F && !M,
            isLoadingError: V && !Y,
            isPaused: y.fetchStatus === "paused",
            isPlaceholderData: x,
            isRefetchError: V && Y,
            isStale: bf(e, r),
            refetch: this.refetch,
            promise: P(this, In),
            isEnabled: Jt(r.enabled, e) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const Q = re => {
                j.status === "error" ? re.reject(j.error) : j.data !== void 0 && re.resolve(j.data)
            }
              , J = () => {
                const re = ee(this, In, j.promise = Ed());
                Q(re)
            }
              , $ = P(this, In);
            switch ($.status) {
            case "pending":
                e.queryHash === i.queryHash && Q($);
                break;
            case "fulfilled":
                (j.status === "error" || j.data !== $.value) && J();
                break;
            case "rejected":
                (j.status !== "error" || j.error !== $.reason) && J();
                break
            }
        }
        return j
    }
    updateResult() {
        const e = P(this, kt)
          , r = this.createResult(P(this, Re), this.options);
        if (ee(this, Jr, P(this, Re).state),
        ee(this, Ks, this.options),
        P(this, Jr).data !== void 0 && ee(this, Gs, P(this, Re)),
        bd(r, e))
            return;
        ee(this, kt, r);
        const i = () => {
            if (!e)
                return !0;
            const {notifyOnChangeProps: a} = this.options
              , l = typeof a == "function" ? a() : a;
            if (l === "all" || !l && !P(this, Ys).size)
                return !0;
            const c = new Set(l ?? P(this, Ys));
            return this.options.throwOnError && c.add("error"),
            Object.keys(P(this, kt)).some(f => {
                const h = f;
                return P(this, kt)[h] !== e[h] && c.has(h)
            }
            )
        }
        ;
        Pe(this, Oe, kv).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && Pe(this, Oe, _d).call(this)
    }
}
,
Nt = new WeakMap,
Re = new WeakMap,
So = new WeakMap,
kt = new WeakMap,
Jr = new WeakMap,
Ks = new WeakMap,
In = new WeakMap,
mr = new WeakMap,
ko = new WeakMap,
Qs = new WeakMap,
Gs = new WeakMap,
Zr = new WeakMap,
es = new WeakMap,
gr = new WeakMap,
Ys = new WeakMap,
Oe = new WeakSet,
no = function(e) {
    Pe(this, Oe, jd).call(this);
    let r = P(this, Re).fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(jt)),
    r
}
,
Cd = function() {
    Pe(this, Oe, Ad).call(this);
    const e = br(this.options.staleTime, P(this, Re));
    if (ss || P(this, kt).isStale || !xd(e))
        return;
    const i = gv(P(this, kt).dataUpdatedAt, e) + 1;
    ee(this, Zr, qr.setTimeout( () => {
        P(this, kt).isStale || this.updateResult()
    }
    , i))
}
,
Pd = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(P(this, Re)) : this.options.refetchInterval) ?? !1
}
,
Rd = function(e) {
    Pe(this, Oe, Nd).call(this),
    ee(this, gr, e),
    !(ss || Jt(this.options.enabled, P(this, Re)) === !1 || !xd(P(this, gr)) || P(this, gr) === 0) && ee(this, es, qr.setInterval( () => {
        (this.options.refetchIntervalInBackground || xf.isFocused()) && Pe(this, Oe, no).call(this)
    }
    , P(this, gr)))
}
,
_d = function() {
    Pe(this, Oe, Cd).call(this),
    Pe(this, Oe, Rd).call(this, Pe(this, Oe, Pd).call(this))
}
,
Ad = function() {
    P(this, Zr) && (qr.clearTimeout(P(this, Zr)),
    ee(this, Zr, void 0))
}
,
Nd = function() {
    P(this, es) && (qr.clearInterval(P(this, es)),
    ee(this, es, void 0))
}
,
jd = function() {
    const e = P(this, Nt).getQueryCache().build(P(this, Nt), this.options);
    if (e === P(this, Re))
        return;
    const r = P(this, Re);
    ee(this, Re, e),
    ee(this, So, e.state),
    this.hasListeners() && (r == null || r.removeObserver(this),
    e.addObserver(this))
}
,
kv = function(e) {
    ht.batch( () => {
        e.listeners && this.listeners.forEach(r => {
            r(P(this, kt))
        }
        ),
        P(this, Nt).getQueryCache().notify({
            query: P(this, Re),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
V0);
function dE(t, e) {
    return Jt(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}
function Rg(t, e) {
    return dE(t, e) || t.state.data !== void 0 && Od(t, e, e.refetchOnMount)
}
function Od(t, e, r) {
    if (Jt(e.enabled, t) !== !1 && br(e.staleTime, t) !== "static") {
        const i = typeof r == "function" ? r(t) : r;
        return i === "always" || i !== !1 && bf(t, e)
    }
    return !1
}
function _g(t, e, r, i) {
    return (t !== e || Jt(i.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && bf(t, r)
}
function bf(t, e) {
    return Jt(e.enabled, t) !== !1 && t.isStaleByTime(br(e.staleTime, t))
}
function fE(t, e) {
    return !bd(t.getCurrentResult(), e)
}
function Ag(t) {
    return {
        onFetch: (e, r) => {
            var g, y, x, E, b;
            const i = e.options
              , a = (x = (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : x.direction
              , l = ((E = e.state.data) == null ? void 0 : E.pages) || []
              , c = ((b = e.state.data) == null ? void 0 : b.pageParams) || [];
            let f = {
                pages: [],
                pageParams: []
            }
              , h = 0;
            const m = async () => {
                let k = !1;
                const S = M => {
                    Object.defineProperty(M, "signal", {
                        enumerable: !0,
                        get: () => (e.signal.aborted ? k = !0 : e.signal.addEventListener("abort", () => {
                            k = !0
                        }
                        ),
                        e.signal)
                    })
                }
                  , _ = vv(e.options, e.fetchOptions)
                  , F = async (M, V, U) => {
                    if (k)
                        return Promise.reject();
                    if (V == null && M.pages.length)
                        return Promise.resolve(M);
                    const ne = ( () => {
                        const J = {
                            client: e.client,
                            queryKey: e.queryKey,
                            pageParam: V,
                            direction: U ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        return S(J),
                        J
                    }
                    )()
                      , j = await _(ne)
                      , {maxPages: W} = e.options
                      , Q = U ? nE : tE;
                    return {
                        pages: Q(M.pages, j, W),
                        pageParams: Q(M.pageParams, V, W)
                    }
                }
                ;
                if (a && l.length) {
                    const M = a === "backward"
                      , V = M ? hE : Ng
                      , U = {
                        pages: l,
                        pageParams: c
                    }
                      , Y = V(i, U);
                    f = await F(U, Y, M)
                } else {
                    const M = t ?? l.length;
                    do {
                        const V = h === 0 ? c[0] ?? i.initialPageParam : Ng(i, f);
                        if (h > 0 && V == null)
                            break;
                        f = await F(f, V),
                        h++
                    } while (h < M)
                }
                return f
            }
            ;
            e.options.persister ? e.fetchFn = () => {
                var k, S;
                return (S = (k = e.options).persister) == null ? void 0 : S.call(k, m, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            }
            : e.fetchFn = m
        }
    }
}
function Ng(t, {pages: e, pageParams: r}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0
}
function hE(t, {pages: e, pageParams: r}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, r[0], r) : void 0
}
var Eo, wn, Et, ts, xn, cr, B0, pE = (B0 = class extends bv {
    constructor(e) {
        super();
        ye(this, xn);
        ye(this, Eo);
        ye(this, wn);
        ye(this, Et);
        ye(this, ts);
        ee(this, Eo, e.client),
        this.mutationId = e.mutationId,
        ee(this, Et, e.mutationCache),
        ee(this, wn, []),
        this.state = e.state || mE(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        P(this, wn).includes(e) || (P(this, wn).push(e),
        this.clearGcTimeout(),
        P(this, Et).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        ee(this, wn, P(this, wn).filter(r => r !== e)),
        this.scheduleGc(),
        P(this, Et).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        P(this, wn).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Et).remove(this))
    }
    continue() {
        var e;
        return ((e = P(this, ts)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var c, f, h, m, g, y, x, E, b, k, S, _, F, M, V, U, Y, ne, j, W;
        const r = () => {
            Pe(this, xn, cr).call(this, {
                type: "continue"
            })
        }
          , i = {
            client: P(this, Eo),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        ee(this, ts, xv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (Q, J) => {
                Pe(this, xn, cr).call(this, {
                    type: "failed",
                    failureCount: Q,
                    error: J
                })
            }
            ,
            onPause: () => {
                Pe(this, xn, cr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Et).canRun(this)
        }));
        const a = this.state.status === "pending"
          , l = !P(this, ts).canStart();
        try {
            if (a)
                r();
            else {
                Pe(this, xn, cr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: l
                }),
                await ((f = (c = P(this, Et).config).onMutate) == null ? void 0 : f.call(c, e, this, i));
                const J = await ((m = (h = this.options).onMutate) == null ? void 0 : m.call(h, e, i));
                J !== this.state.context && Pe(this, xn, cr).call(this, {
                    type: "pending",
                    context: J,
                    variables: e,
                    isPaused: l
                })
            }
            const Q = await P(this, ts).start();
            return await ((y = (g = P(this, Et).config).onSuccess) == null ? void 0 : y.call(g, Q, e, this.state.context, this, i)),
            await ((E = (x = this.options).onSuccess) == null ? void 0 : E.call(x, Q, e, this.state.context, i)),
            await ((k = (b = P(this, Et).config).onSettled) == null ? void 0 : k.call(b, Q, null, this.state.variables, this.state.context, this, i)),
            await ((_ = (S = this.options).onSettled) == null ? void 0 : _.call(S, Q, null, e, this.state.context, i)),
            Pe(this, xn, cr).call(this, {
                type: "success",
                data: Q
            }),
            Q
        } catch (Q) {
            try {
                throw await ((M = (F = P(this, Et).config).onError) == null ? void 0 : M.call(F, Q, e, this.state.context, this, i)),
                await ((U = (V = this.options).onError) == null ? void 0 : U.call(V, Q, e, this.state.context, i)),
                await ((ne = (Y = P(this, Et).config).onSettled) == null ? void 0 : ne.call(Y, void 0, Q, this.state.variables, this.state.context, this, i)),
                await ((W = (j = this.options).onSettled) == null ? void 0 : W.call(j, void 0, Q, e, this.state.context, i)),
                Q
            } finally {
                Pe(this, xn, cr).call(this, {
                    type: "error",
                    error: Q
                })
            }
        } finally {
            P(this, Et).runNext(this)
        }
    }
}
,
Eo = new WeakMap,
wn = new WeakMap,
Et = new WeakMap,
ts = new WeakMap,
xn = new WeakSet,
cr = function(e) {
    const r = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                failureCount: e.failureCount,
                failureReason: e.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: e.error,
                failureCount: i.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    ht.batch( () => {
        P(this, wn).forEach(i => {
            i.onMutationUpdate(e)
        }
        ),
        P(this, Et).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
B0);
function mE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Fn, cn, To, U0, gE = (U0 = class extends Co {
    constructor(e={}) {
        super();
        ye(this, Fn);
        ye(this, cn);
        ye(this, To);
        this.config = e,
        ee(this, Fn, new Set),
        ee(this, cn, new Map),
        ee(this, To, 0)
    }
    build(e, r, i) {
        const a = new pE({
            client: e,
            mutationCache: this,
            mutationId: ++Ha(this, To)._,
            options: e.defaultMutationOptions(r),
            state: i
        });
        return this.add(a),
        a
    }
    add(e) {
        P(this, Fn).add(e);
        const r = Ga(e);
        if (typeof r == "string") {
            const i = P(this, cn).get(r);
            i ? i.push(e) : P(this, cn).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (P(this, Fn).delete(e)) {
            const r = Ga(e);
            if (typeof r == "string") {
                const i = P(this, cn).get(r);
                if (i)
                    if (i.length > 1) {
                        const a = i.indexOf(e);
                        a !== -1 && i.splice(a, 1)
                    } else
                        i[0] === e && P(this, cn).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = Ga(e);
        if (typeof r == "string") {
            const i = P(this, cn).get(r)
              , a = i == null ? void 0 : i.find(l => l.state.status === "pending");
            return !a || a === e
        } else
            return !0
    }
    runNext(e) {
        var i;
        const r = Ga(e);
        if (typeof r == "string") {
            const a = (i = P(this, cn).get(r)) == null ? void 0 : i.find(l => l !== e && l.state.isPaused);
            return (a == null ? void 0 : a.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        ht.batch( () => {
            P(this, Fn).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            P(this, Fn).clear(),
            P(this, cn).clear()
        }
        )
    }
    getAll() {
        return Array.from(P(this, Fn))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Eg(r, i))
    }
    findAll(e={}) {
        return this.getAll().filter(r => Eg(e, r))
    }
    notify(e) {
        ht.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return ht.batch( () => Promise.all(e.map(r => r.continue().catch(jt))))
    }
}
,
Fn = new WeakMap,
cn = new WeakMap,
To = new WeakMap,
U0);
function Ga(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var bn, z0, yE = (z0 = class extends Co {
    constructor(e={}) {
        super();
        ye(this, bn);
        this.config = e,
        ee(this, bn, new Map)
    }
    build(e, r, i) {
        const a = r.queryKey
          , l = r.queryHash ?? vf(a, r);
        let c = this.get(l);
        return c || (c = new uE({
            client: e,
            queryKey: a,
            queryHash: l,
            options: e.defaultQueryOptions(r),
            state: i,
            defaultOptions: e.getQueryDefaults(a)
        }),
        this.add(c)),
        c
    }
    add(e) {
        P(this, bn).has(e.queryHash) || (P(this, bn).set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const r = P(this, bn).get(e.queryHash);
        r && (e.destroy(),
        r === e && P(this, bn).delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        ht.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return P(this, bn).get(e)
    }
    getAll() {
        return [...P(this, bn).values()]
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => kg(r, i))
    }
    findAll(e={}) {
        const r = this.getAll();
        return Object.keys(e).length > 0 ? r.filter(i => kg(e, i)) : r
    }
    notify(e) {
        ht.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    onFocus() {
        ht.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ht.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
,
bn = new WeakMap,
z0), Ke, yr, vr, Xs, Js, wr, Zs, ei, $0, vE = ($0 = class {
    constructor(t={}) {
        ye(this, Ke);
        ye(this, yr);
        ye(this, vr);
        ye(this, Xs);
        ye(this, Js);
        ye(this, wr);
        ye(this, Zs);
        ye(this, ei);
        ee(this, Ke, t.queryCache || new yE),
        ee(this, yr, t.mutationCache || new gE),
        ee(this, vr, t.defaultOptions || {}),
        ee(this, Xs, new Map),
        ee(this, Js, new Map),
        ee(this, wr, 0)
    }
    mount() {
        Ha(this, wr)._++,
        P(this, wr) === 1 && (ee(this, Zs, xf.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            P(this, Ke).onFocus())
        }
        )),
        ee(this, ei, yl.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            P(this, Ke).onOnline())
        }
        )))
    }
    unmount() {
        var t, e;
        Ha(this, wr)._--,
        P(this, wr) === 0 && ((t = P(this, Zs)) == null || t.call(this),
        ee(this, Zs, void 0),
        (e = P(this, ei)) == null || e.call(this),
        ee(this, ei, void 0))
    }
    isFetching(t) {
        return P(this, Ke).findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return P(this, yr).findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = P(this, Ke).get(e.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t)
          , r = P(this, Ke).build(this, e)
          , i = r.state.data;
        return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(br(e.staleTime, r)) && this.prefetchQuery(e),
        Promise.resolve(i))
    }
    getQueriesData(t) {
        return P(this, Ke).findAll(t).map( ({queryKey: e, state: r}) => {
            const i = r.data;
            return [e, i]
        }
        )
    }
    setQueryData(t, e, r) {
        const i = this.defaultQueryOptions({
            queryKey: t
        })
          , a = P(this, Ke).get(i.queryHash)
          , l = a == null ? void 0 : a.state.data
          , c = Jk(e, l);
        if (c !== void 0)
            return P(this, Ke).build(this, i).setData(c, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(t, e, r) {
        return ht.batch( () => P(this, Ke).findAll(t).map( ({queryKey: i}) => [i, this.setQueryData(i, e, r)]))
    }
    getQueryState(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = P(this, Ke).get(e.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(t) {
        const e = P(this, Ke);
        ht.batch( () => {
            e.findAll(t).forEach(r => {
                e.remove(r)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const r = P(this, Ke);
        return ht.batch( () => (r.findAll(t).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...t
        }, e)))
    }
    cancelQueries(t, e={}) {
        const r = {
            revert: !0,
            ...e
        }
          , i = ht.batch( () => P(this, Ke).findAll(t).map(a => a.cancel(r)));
        return Promise.all(i).then(jt).catch(jt)
    }
    invalidateQueries(t, e={}) {
        return ht.batch( () => (P(this, Ke).findAll(t).forEach(r => {
            r.invalidate()
        }
        ),
        (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
        }, e)))
    }
    refetchQueries(t, e={}) {
        const r = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }
          , i = ht.batch( () => P(this, Ke).findAll(t).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
            let l = a.fetch(void 0, r);
            return r.throwOnError || (l = l.catch(jt)),
            a.state.fetchStatus === "paused" ? Promise.resolve() : l
        }
        ));
        return Promise.all(i).then(jt)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const r = P(this, Ke).build(this, e);
        return r.isStaleByTime(br(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(jt).catch(jt)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = Ag(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(jt).catch(jt)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = Ag(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return yl.isOnline() ? P(this, yr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, Ke)
    }
    getMutationCache() {
        return P(this, yr)
    }
    getDefaultOptions() {
        return P(this, vr)
    }
    setDefaultOptions(t) {
        ee(this, vr, t)
    }
    setQueryDefaults(t, e) {
        P(this, Xs).set(po(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...P(this, Xs).values()]
          , r = {};
        return e.forEach(i => {
            mo(t, i.queryKey) && Object.assign(r, i.defaultOptions)
        }
        ),
        r
    }
    setMutationDefaults(t, e) {
        P(this, Js).set(po(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...P(this, Js).values()]
          , r = {};
        return e.forEach(i => {
            mo(t, i.mutationKey) && Object.assign(r, i.defaultOptions)
        }
        ),
        r
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...P(this, vr).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = vf(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === wf && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...P(this, vr).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        P(this, Ke).clear(),
        P(this, yr).clear()
    }
}
,
Ke = new WeakMap,
yr = new WeakMap,
vr = new WeakMap,
Xs = new WeakMap,
Js = new WeakMap,
wr = new WeakMap,
Zs = new WeakMap,
ei = new WeakMap,
$0), Ev = N.createContext(void 0), wE = t => {
    const e = N.useContext(Ev);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
, xE = ({client: t, children: e}) => (N.useEffect( () => (t.mount(),
() => {
    t.unmount()
}
), [t]),
w.jsx(Ev.Provider, {
    value: t,
    children: e
})), Tv = N.createContext(!1), bE = () => N.useContext(Tv);
Tv.Provider;
function SE() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        }
        ,
        reset: () => {
            t = !0
        }
        ,
        isReset: () => t
    }
}
var kE = N.createContext(SE())
  , EE = () => N.useContext(kE)
  , TE = (t, e) => {
    (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1))
}
  , CE = t => {
    N.useEffect( () => {
        t.clearReset()
    }
    , [t])
}
  , PE = ({result: t, errorResetBoundary: e, throwOnError: r, query: i, suspense: a}) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === void 0 || rE(r, [t.error, i]))
  , RE = t => {
    if (t.suspense) {
        const r = a => a === "static" ? a : Math.max(a ?? 1e3, 1e3)
          , i = t.staleTime;
        t.staleTime = typeof i == "function" ? (...a) => r(i(...a)) : r(i),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
    }
}
  , _E = (t, e) => t.isLoading && t.isFetching && !e
  , AE = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending
  , jg = (t, e, r) => e.fetchOptimistic(t).catch( () => {
    r.clearReset()
}
);
function NE(t, e, r) {
    var y, x, E, b, k;
    const i = bE()
      , a = EE()
      , l = wE()
      , c = l.defaultQueryOptions(t);
    (x = (y = l.getDefaultOptions().queries) == null ? void 0 : y._experimental_beforeQuery) == null || x.call(y, c),
    c._optimisticResults = i ? "isRestoring" : "optimistic",
    RE(c),
    TE(c, a),
    CE(a);
    const f = !l.getQueryCache().get(c.queryHash)
      , [h] = N.useState( () => new e(l,c))
      , m = h.getOptimisticResult(c)
      , g = !i && t.subscribed !== !1;
    if (N.useSyncExternalStore(N.useCallback(S => {
        const _ = g ? h.subscribe(ht.batchCalls(S)) : jt;
        return h.updateResult(),
        _
    }
    , [h, g]), () => h.getCurrentResult(), () => h.getCurrentResult()),
    N.useEffect( () => {
        h.setOptions(c)
    }
    , [c, h]),
    AE(c, m))
        throw jg(c, h, a);
    if (PE({
        result: m,
        errorResetBoundary: a,
        throwOnError: c.throwOnError,
        query: l.getQueryCache().get(c.queryHash),
        suspense: c.suspense
    }))
        throw m.error;
    if ((b = (E = l.getDefaultOptions().queries) == null ? void 0 : E._experimental_afterQuery) == null || b.call(E, c, m),
    c.experimental_prefetchInRender && !ss && _E(m, i)) {
        const S = f ? jg(c, h, a) : (k = l.getQueryCache().get(c.queryHash)) == null ? void 0 : k.promise;
        S == null || S.catch(jt).finally( () => {
            h.updateResult()
        }
        )
    }
    return c.notifyOnChangeProps ? m : h.trackResult(m)
}
function jE(t, e) {
    return NE(t, cE)
}
const OE = new vE({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
function LE() {
    const [t,e] = N.useState(!1)
      , r = N.useRef(!1)
      , [i,a] = N.useState(!1)
      , l = N.useRef(!1)
      , [c,f] = N.useState(!1)
      , h = N.useRef(!1)
      , m = N.useRef([])
      , g = N.useRef([])
      , y = N.useRef([])
      , x = N.useRef(null)
      , E = (j=!1) => {
        const W = document.createElement("div");
        return W.style.position = "absolute",
        W.style.pointerEvents = "none",
        W.style.transition = "all 0.1s ease-in-out",
        W.style.zIndex = "9999",
        j ? W.style.border = "2px solid #2563EB" : (W.style.border = "2px solid #95a5fc",
        W.style.backgroundColor = "rgba(99, 102, 241, 0.05)"),
        W
    }
      , b = (j, W, Q=!1) => {
        if (!W || !r.current)
            return;
        W.offsetWidth;
        const J = W.getBoundingClientRect();
        j.style.top = `${J.top + window.scrollY}px`,
        j.style.left = `${J.left + window.scrollX}px`,
        j.style.width = `${J.width}px`,
        j.style.height = `${J.height}px`;
        let $ = j.querySelector("div");
        $ || ($ = document.createElement("div"),
        $.textContent = W.tagName.toLowerCase(),
        $.style.position = "absolute",
        $.style.top = "-27px",
        $.style.left = "-2px",
        $.style.padding = "2px 8px",
        $.style.fontSize = "11px",
        $.style.fontWeight = Q ? "500" : "400",
        $.style.color = Q ? "#ffffff" : "#526cff",
        $.style.backgroundColor = Q ? "#526cff" : "#DBEAFE",
        $.style.borderRadius = "3px",
        $.style.boxShadow = "none",
        $.style.minWidth = "24px",
        $.style.textAlign = "center",
        j.appendChild($))
    }
      , k = j => {
        if (!j)
            return [];
        const W = [...document.querySelectorAll(`[data-source-location="${j}"]`)];
        return W.length > 0 ? W : [...document.querySelectorAll(`[data-visual-selector-id="${j}"]`)]
    }
      , S = () => {
        m.current.forEach(j => {
            j && j.parentNode && j.remove()
        }
        ),
        m.current = [],
        y.current = []
    }
      , _ = j => {
        if (!r.current || l.current)
            return;
        if (h.current) {
            S();
            return
        }
        if (j.target.tagName.toLowerCase() === "path") {
            S();
            return
        }
        const W = j.target.closest("[data-source-location], [data-visual-selector-id]");
        if (!W) {
            S();
            return
        }
        const Q = W.dataset.sourceLocation || W.dataset.visualSelectorId;
        if (W.dataset.sourceLocation,
        x.current === Q) {
            S();
            return
        }
        const J = k(Q);
        S(),
        J.forEach($ => {
            const re = E(!1);
            document.body.appendChild(re),
            m.current.push(re),
            b(re, $)
        }
        ),
        y.current = J
    }
      , F = () => {
        l.current || S()
    }
      , M = j => {
        var pe;
        if (!r.current)
            return;
        if (h.current) {
            j.preventDefault(),
            j.stopPropagation(),
            j.stopImmediatePropagation(),
            window.parent.postMessage({
                type: "close-dropdowns"
            }, "*");
            return
        }
        if (j.target.tagName.toLowerCase() === "path")
            return;
        j.preventDefault(),
        j.stopPropagation(),
        j.stopImmediatePropagation();
        const W = j.target.closest("[data-source-location], [data-visual-selector-id]");
        if (!W)
            return;
        const Q = W.dataset.sourceLocation || W.dataset.visualSelectorId;
        W.dataset.sourceLocation,
        g.current.forEach(he => {
            he && he.parentNode && he.remove()
        }
        ),
        g.current = [],
        k(Q).forEach(he => {
            const de = E(!0);
            document.body.appendChild(de),
            g.current.push(de),
            b(de, he, !0)
        }
        ),
        x.current = Q,
        S();
        const $ = W.getBoundingClientRect()
          , re = {
            top: $.top,
            left: $.left,
            right: $.right,
            bottom: $.bottom,
            width: $.width,
            height: $.height,
            centerX: $.left + $.width / 2,
            centerY: $.top + $.height / 2
        }
          , Te = {
            type: "element-selected",
            tagName: W.tagName,
            classes: ((pe = W.className) == null ? void 0 : pe.baseVal) || W.className || "",
            visualSelectorId: Q,
            content: W.innerText,
            dataSourceLocation: W.dataset.sourceLocation,
            isDynamicContent: W.dataset.dynamicContent === "true",
            linenumber: W.dataset.linenumber,
            filename: W.dataset.filename,
            position: re
        };
        window.parent.postMessage(Te, "*")
    }
      , V = () => {
        g.current.forEach(j => {
            j && j.parentNode && j.remove()
        }
        ),
        g.current = [],
        x.current = null
    }
      , U = (j, W, Q=!1) => {
        const J = k(j);
        J.length !== 0 && (J.forEach($ => {
            var re;
            if (Q)
                $.className = W;
            else {
                const Te = ((re = $.className) == null ? void 0 : re.baseVal) || $.className || "";
                $.className = uv(Te, W)
            }
        }
        ),
        setTimeout( () => {
            var $, re;
            x.current === j && g.current.forEach( (Te, pe) => {
                pe < J.length && b(Te, J[pe])
            }
            ),
            y.current.length > 0 && ((re = ($ = y.current[0]) == null ? void 0 : $.dataset) == null ? void 0 : re.visualSelectorId) === j && m.current.forEach( (pe, he) => {
                he < y.current.length && b(pe, y.current[he])
            }
            )
        }
        , 50))
    }
      , Y = (j, W) => {
        const Q = k(j);
        Q.length !== 0 && (Q.forEach(J => {
            J.innerText = W
        }
        ),
        setTimeout( () => {
            x.current === j && g.current.forEach( (J, $) => {
                $ < Q.length && b(J, Q[$])
            }
            )
        }
        , 50))
    }
      , ne = j => {
        e(j),
        r.current = j,
        j ? (document.body.style.cursor = "crosshair",
        document.addEventListener("mouseover", _),
        document.addEventListener("mouseout", F),
        document.addEventListener("click", M, !0)) : (S(),
        g.current.forEach(W => {
            W && W.parentNode && W.remove()
        }
        ),
        g.current = [],
        y.current = [],
        x.current = null,
        document.body.style.cursor = "default",
        document.removeEventListener("mouseover", _),
        document.removeEventListener("mouseout", F),
        document.removeEventListener("click", M, !0))
    }
    ;
    return N.useEffect( () => {
        document.querySelectorAll("[data-linenumber]:not([data-visual-selector-id])").forEach( (J, $) => {
            const re = `visual-id-${J.dataset.filename}-${J.dataset.linenumber}-${$}`;
            J.dataset.visualSelectorId = re
        }
        );
        const W = () => {
            if (x.current) {
                const J = k(x.current);
                if (J.length > 0) {
                    const re = J[0].getBoundingClientRect()
                      , Te = window.innerHeight
                      , pe = window.innerWidth
                      , he = re.top < Te && re.bottom > 0 && re.left < pe && re.right > 0
                      , de = {
                        top: re.top,
                        left: re.left,
                        right: re.right,
                        bottom: re.bottom,
                        width: re.width,
                        height: re.height,
                        centerX: re.left + re.width / 2,
                        centerY: re.top + re.height / 2
                    };
                    window.parent.postMessage({
                        type: "element-position-update",
                        position: de,
                        isInViewport: he,
                        visualSelectorId: x.current
                    }, "*")
                }
            }
        }
          , Q = J => {
            const $ = J.data;
            switch ($.type) {
            case "toggle-visual-edit-mode":
                ne($.data.enabled);
                break;
            case "update-classes":
                $.data && $.data.classes !== void 0 ? U($.data.visualSelectorId, $.data.classes, $.data.replace || !1) : console.warn("[Agent] Invalid update-classes message:", $);
                break;
            case "unselect-element":
                V();
                break;
            case "refresh-page":
                window.location.reload();
                break;
            case "update-content":
                $.data && $.data.content !== void 0 ? Y($.data.visualSelectorId, $.data.content) : console.warn("[Agent] Invalid update-content message:", $);
                break;
            case "request-element-position":
                if (x.current) {
                    const re = k(x.current);
                    if (re.length > 0) {
                        const pe = re[0].getBoundingClientRect()
                          , he = window.innerHeight
                          , de = window.innerWidth
                          , B = pe.top < he && pe.bottom > 0 && pe.left < de && pe.right > 0
                          , le = {
                            top: pe.top,
                            left: pe.left,
                            right: pe.right,
                            bottom: pe.bottom,
                            width: pe.width,
                            height: pe.height,
                            centerX: pe.left + pe.width / 2,
                            centerY: pe.top + pe.height / 2
                        };
                        window.parent.postMessage({
                            type: "element-position-update",
                            position: le,
                            isInViewport: B,
                            visualSelectorId: x.current
                        }, "*")
                    }
                }
                break;
            case "popover-drag-state":
                $.data && $.data.isDragging !== void 0 && (a($.data.isDragging),
                l.current = $.data.isDragging,
                $.data.isDragging && S());
                break;
            case "dropdown-state":
                $.data && $.data.isOpen !== void 0 && (f($.data.isOpen),
                h.current = $.data.isOpen,
                $.data.isOpen && S());
                break
            }
        }
        ;
        return window.addEventListener("message", Q),
        window.addEventListener("scroll", W, !0),
        document.addEventListener("scroll", W, !0),
        window.parent.postMessage({
            type: "visual-edit-agent-ready"
        }, "*"),
        () => {
            window.removeEventListener("message", Q),
            window.removeEventListener("scroll", W, !0),
            document.removeEventListener("scroll", W, !0),
            document.removeEventListener("mouseover", _),
            document.removeEventListener("mouseout", F),
            document.removeEventListener("click", M, !0),
            S(),
            g.current.forEach(J => {
                J && J.parentNode && J.remove()
            }
            )
        }
    }
    , []),
    N.useEffect( () => {
        r.current = t
    }
    , [t]),
    N.useEffect( () => {
        l.current = i
    }
    , [i]),
    N.useEffect( () => {
        h.current = c
    }
    , [c]),
    N.useEffect( () => {
        const j = () => {
            if (x.current) {
                const Q = k(x.current);
                g.current.forEach( (J, $) => {
                    $ < Q.length && b(J, Q[$])
                }
                )
            }
            y.current.length > 0 && m.current.forEach( (Q, J) => {
                J < y.current.length && b(Q, y.current[J])
            }
            )
        }
          , W = new MutationObserver(Q => {
            Q.some($ => {
                const re = pe => {
                    if (pe.nodeType === Node.ELEMENT_NODE) {
                        if (pe.dataset && pe.dataset.visualSelectorId)
                            return !0;
                        for (let he = 0; he < pe.children.length; he++)
                            if (re(pe.children[he]))
                                return !0
                    }
                    return !1
                }
                ;
                return $.type === "attributes" && ($.attributeName === "style" || $.attributeName === "class" || $.attributeName === "width" || $.attributeName === "height") && re($.target)
            }
            ) && setTimeout(j, 50)
        }
        );
        return W.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["style", "class", "width", "height"]
        }),
        window.addEventListener("resize", j),
        window.addEventListener("scroll", j),
        () => {
            window.removeEventListener("resize", j),
            window.removeEventListener("scroll", j),
            W.disconnect()
        }
    }
    , []),
    null
}
H0();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function vl() {
    return vl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    vl.apply(this, arguments)
}
var xr;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(xr || (xr = {}));
const Og = "popstate";
function ME(t) {
    t === void 0 && (t = {});
    function e(i, a) {
        let {pathname: l, search: c, hash: f} = i.location;
        return Ld("", {
            pathname: l,
            search: c,
            hash: f
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }
    function r(i, a) {
        return typeof a == "string" ? a : Pv(a)
    }
    return IE(e, r, null, t)
}
function Mt(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function Cv(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function DE() {
    return Math.random().toString(36).substr(2, 8)
}
function Lg(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function Ld(t, e, r, i) {
    return r === void 0 && (r = null),
    vl({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? Al(e) : e, {
        state: r,
        key: e && e.key || i || DE()
    })
}
function Pv(t) {
    let {pathname: e="/", search: r="", hash: i=""} = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
}
function Al(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r),
        t = t.substr(0, r));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i),
        t = t.substr(0, i)),
        t && (e.pathname = t)
    }
    return e
}
function IE(t, e, r, i) {
    i === void 0 && (i = {});
    let {window: a=document.defaultView, v5Compat: l=!1} = i
      , c = a.history
      , f = xr.Pop
      , h = null
      , m = g();
    m == null && (m = 0,
    c.replaceState(vl({}, c.state, {
        idx: m
    }), ""));
    function g() {
        return (c.state || {
            idx: null
        }).idx
    }
    function y() {
        f = xr.Pop;
        let S = g()
          , _ = S == null ? null : S - m;
        m = S,
        h && h({
            action: f,
            location: k.location,
            delta: _
        })
    }
    function x(S, _) {
        f = xr.Push;
        let F = Ld(k.location, S, _);
        m = g() + 1;
        let M = Lg(F, m)
          , V = k.createHref(F);
        try {
            c.pushState(M, "", V)
        } catch (U) {
            if (U instanceof DOMException && U.name === "DataCloneError")
                throw U;
            a.location.assign(V)
        }
        l && h && h({
            action: f,
            location: k.location,
            delta: 1
        })
    }
    function E(S, _) {
        f = xr.Replace;
        let F = Ld(k.location, S, _);
        m = g();
        let M = Lg(F, m)
          , V = k.createHref(F);
        c.replaceState(M, "", V),
        l && h && h({
            action: f,
            location: k.location,
            delta: 0
        })
    }
    function b(S) {
        let _ = a.location.origin !== "null" ? a.location.origin : a.location.href
          , F = typeof S == "string" ? S : Pv(S);
        return F = F.replace(/ $/, "%20"),
        Mt(_, "No window.location.(origin|href) available to create URL for href: " + F),
        new URL(F,_)
    }
    let k = {
        get action() {
            return f
        },
        get location() {
            return t(a, c)
        },
        listen(S) {
            if (h)
                throw new Error("A history only accepts one active listener");
            return a.addEventListener(Og, y),
            h = S,
            () => {
                a.removeEventListener(Og, y),
                h = null
            }
        },
        createHref(S) {
            return e(a, S)
        },
        createURL: b,
        encodeLocation(S) {
            let _ = b(S);
            return {
                pathname: _.pathname,
                search: _.search,
                hash: _.hash
            }
        },
        push: x,
        replace: E,
        go(S) {
            return c.go(S)
        }
    };
    return k
}
var Mg;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(Mg || (Mg = {}));
function FE(t, e, r) {
    return r === void 0 && (r = "/"),
    VE(t, e, r)
}
function VE(t, e, r, i) {
    let a = typeof e == "string" ? Al(e) : e
      , l = Av(a.pathname || "/", r);
    if (l == null)
        return null;
    let c = Rv(t);
    BE(c);
    let f = null;
    for (let h = 0; f == null && h < c.length; ++h) {
        let m = JE(l);
        f = GE(c[h], m)
    }
    return f
}
function Rv(t, e, r, i) {
    e === void 0 && (e = []),
    r === void 0 && (r = []),
    i === void 0 && (i = "");
    let a = (l, c, f) => {
        let h = {
            relativePath: f === void 0 ? l.path || "" : f,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: c,
            route: l
        };
        h.relativePath.startsWith("/") && (Mt(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        h.relativePath = h.relativePath.slice(i.length));
        let m = zs([i, h.relativePath])
          , g = r.concat(h);
        l.children && l.children.length > 0 && (Mt(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')),
        Rv(l.children, e, g, m)),
        !(l.path == null && !l.index) && e.push({
            path: m,
            score: KE(m, l.index),
            routesMeta: g
        })
    }
    ;
    return t.forEach( (l, c) => {
        var f;
        if (l.path === "" || !((f = l.path) != null && f.includes("?")))
            a(l, c);
        else
            for (let h of _v(l.path))
                a(l, c, h)
    }
    ),
    e
}
function _v(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[r,...i] = e
      , a = r.endsWith("?")
      , l = r.replace(/\?$/, "");
    if (i.length === 0)
        return a ? [l, ""] : [l];
    let c = _v(i.join("/"))
      , f = [];
    return f.push(...c.map(h => h === "" ? l : [l, h].join("/"))),
    a && f.push(...c),
    f.map(h => t.startsWith("/") && h === "" ? "/" : h)
}
function BE(t) {
    t.sort( (e, r) => e.score !== r.score ? r.score - e.score : QE(e.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex)))
}
const UE = /^:[\w-]+$/
  , zE = 3
  , $E = 2
  , qE = 1
  , HE = 10
  , WE = -2
  , Dg = t => t === "*";
function KE(t, e) {
    let r = t.split("/")
      , i = r.length;
    return r.some(Dg) && (i += WE),
    e && (i += $E),
    r.filter(a => !Dg(a)).reduce( (a, l) => a + (UE.test(l) ? zE : l === "" ? qE : HE), i)
}
function QE(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function GE(t, e, r) {
    let {routesMeta: i} = t
      , a = {}
      , l = "/"
      , c = [];
    for (let f = 0; f < i.length; ++f) {
        let h = i[f]
          , m = f === i.length - 1
          , g = l === "/" ? e : e.slice(l.length) || "/"
          , y = YE({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: m
        }, g)
          , x = h.route;
        if (!y)
            return null;
        Object.assign(a, y.params),
        c.push({
            params: a,
            pathname: zs([l, y.pathname]),
            pathnameBase: ZE(zs([l, y.pathnameBase])),
            route: x
        }),
        y.pathnameBase !== "/" && (l = zs([l, y.pathnameBase]))
    }
    return c
}
function YE(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[r,i] = XE(t.path, t.caseSensitive, t.end)
      , a = e.match(r);
    if (!a)
        return null;
    let l = a[0]
      , c = l.replace(/(.)\/+$/, "$1")
      , f = a.slice(1);
    return {
        params: i.reduce( (m, g, y) => {
            let {paramName: x, isOptional: E} = g;
            if (x === "*") {
                let k = f[y] || "";
                c = l.slice(0, l.length - k.length).replace(/(.)\/+$/, "$1")
            }
            const b = f[y];
            return E && !b ? m[x] = void 0 : m[x] = (b || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: l,
        pathnameBase: c,
        pattern: t
    }
}
function XE(t, e, r) {
    e === void 0 && (e = !1),
    r === void 0 && (r = !0),
    Cv(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = []
      , a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, f, h) => (i.push({
        paramName: f,
        isOptional: h != null
    }),
    h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a,e ? void 0 : "i"), i]
}
function JE(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return Cv(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function Av(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length
      , i = t.charAt(r);
    return i && i !== "/" ? null : t.slice(r) || "/"
}
const zs = t => t.join("/").replace(/\/\/+/g, "/")
  , ZE = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");
function eT(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const Nv = ["post", "put", "patch", "delete"];
new Set(Nv);
const tT = ["get", ...Nv];
new Set(tT);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function wl() {
    return wl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    wl.apply(this, arguments)
}
const nT = N.createContext(null)
  , rT = N.createContext(null)
  , jv = N.createContext(null)
  , Nl = N.createContext(null)
  , jl = N.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Ov = N.createContext(null);
function Sf() {
    return N.useContext(Nl) != null
}
function kf() {
    return Sf() || Mt(!1),
    N.useContext(Nl).location
}
function sT(t, e) {
    return iT(t, e)
}
function iT(t, e, r, i) {
    Sf() || Mt(!1);
    let {navigator: a} = N.useContext(jv)
      , {matches: l} = N.useContext(jl)
      , c = l[l.length - 1]
      , f = c ? c.params : {};
    c && c.pathname;
    let h = c ? c.pathnameBase : "/";
    c && c.route;
    let m = kf(), g;
    if (e) {
        var y;
        let S = typeof e == "string" ? Al(e) : e;
        h === "/" || (y = S.pathname) != null && y.startsWith(h) || Mt(!1),
        g = S
    } else
        g = m;
    let x = g.pathname || "/"
      , E = x;
    if (h !== "/") {
        let S = h.replace(/^\//, "").split("/");
        E = "/" + x.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let b = FE(t, {
        pathname: E
    })
      , k = cT(b && b.map(S => Object.assign({}, S, {
        params: Object.assign({}, f, S.params),
        pathname: zs([h, a.encodeLocation ? a.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? h : zs([h, a.encodeLocation ? a.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), l, r, i);
    return e && k ? N.createElement(Nl.Provider, {
        value: {
            location: wl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, g),
            navigationType: xr.Pop
        }
    }, k) : k
}
function oT() {
    let t = pT()
      , e = eT(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , r = t instanceof Error ? t.stack : null
      , a = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? N.createElement("pre", {
        style: a
    }, r) : null, null)
}
const aT = N.createElement(oT, null);
class lT extends N.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? N.createElement(jl.Provider, {
            value: this.props.routeContext
        }, N.createElement(Ov.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function uT(t) {
    let {routeContext: e, match: r, children: i} = t
      , a = N.useContext(nT);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    N.createElement(jl.Provider, {
        value: e
    }, i)
}
function cT(t, e, r, i) {
    var a;
    if (e === void 0 && (e = []),
    r === void 0 && (r = null),
    i === void 0 && (i = null),
    t == null) {
        var l;
        if (!r)
            return null;
        if (r.errors)
            t = r.matches;
        else if ((l = i) != null && l.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0)
            t = r.matches;
        else
            return null
    }
    let c = t
      , f = (a = r) == null ? void 0 : a.errors;
    if (f != null) {
        let g = c.findIndex(y => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0);
        g >= 0 || Mt(!1),
        c = c.slice(0, Math.min(c.length, g + 1))
    }
    let h = !1
      , m = -1;
    if (r && i && i.v7_partialHydration)
        for (let g = 0; g < c.length; g++) {
            let y = c[g];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g),
            y.route.id) {
                let {loaderData: x, errors: E} = r
                  , b = y.route.loader && x[y.route.id] === void 0 && (!E || E[y.route.id] === void 0);
                if (y.route.lazy || b) {
                    h = !0,
                    m >= 0 ? c = c.slice(0, m + 1) : c = [c[0]];
                    break
                }
            }
        }
    return c.reduceRight( (g, y, x) => {
        let E, b = !1, k = null, S = null;
        r && (E = f && y.route.id ? f[y.route.id] : void 0,
        k = y.route.errorElement || aT,
        h && (m < 0 && x === 0 ? (mT("route-fallback"),
        b = !0,
        S = null) : m === x && (b = !0,
        S = y.route.hydrateFallbackElement || null)));
        let _ = e.concat(c.slice(0, x + 1))
          , F = () => {
            let M;
            return E ? M = k : b ? M = S : y.route.Component ? M = N.createElement(y.route.Component, null) : y.route.element ? M = y.route.element : M = g,
            N.createElement(uT, {
                match: y,
                routeContext: {
                    outlet: g,
                    matches: _,
                    isDataRoute: r != null
                },
                children: M
            })
        }
        ;
        return r && (y.route.ErrorBoundary || y.route.errorElement || x === 0) ? N.createElement(lT, {
            location: r.location,
            revalidation: r.revalidation,
            component: k,
            error: E,
            children: F(),
            routeContext: {
                outlet: null,
                matches: _,
                isDataRoute: !0
            }
        }) : F()
    }
    , null)
}
var Lv = (function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}
)(Lv || {});
function dT(t) {
    let e = N.useContext(rT);
    return e || Mt(!1),
    e
}
function fT(t) {
    let e = N.useContext(jl);
    return e || Mt(!1),
    e
}
function hT(t) {
    let e = fT()
      , r = e.matches[e.matches.length - 1];
    return r.route.id || Mt(!1),
    r.route.id
}
function pT() {
    var t;
    let e = N.useContext(Ov)
      , r = dT(Lv.UseRouteError)
      , i = hT();
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[i]
}
const Ig = {};
function mT(t, e, r) {
    Ig[t] || (Ig[t] = !0)
}
function gT(t, e) {
    t == null || t.v7_startTransition,
    t == null || t.v7_relativeSplatPath
}
function il(t) {
    Mt(!1)
}
function yT(t) {
    let {basename: e="/", children: r=null, location: i, navigationType: a=xr.Pop, navigator: l, static: c=!1, future: f} = t;
    Sf() && Mt(!1);
    let h = e.replace(/^\/*/, "/")
      , m = N.useMemo( () => ({
        basename: h,
        navigator: l,
        static: c,
        future: wl({
            v7_relativeSplatPath: !1
        }, f)
    }), [h, f, l, c]);
    typeof i == "string" && (i = Al(i));
    let {pathname: g="/", search: y="", hash: x="", state: E=null, key: b="default"} = i
      , k = N.useMemo( () => {
        let S = Av(g, h);
        return S == null ? null : {
            location: {
                pathname: S,
                search: y,
                hash: x,
                state: E,
                key: b
            },
            navigationType: a
        }
    }
    , [h, g, y, x, E, b, a]);
    return k == null ? null : N.createElement(jv.Provider, {
        value: m
    }, N.createElement(Nl.Provider, {
        children: r,
        value: k
    }))
}
function vT(t) {
    let {children: e, location: r} = t;
    return sT(Md(e), r)
}
new Promise( () => {}
);
function Md(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return N.Children.forEach(t, (i, a) => {
        if (!N.isValidElement(i))
            return;
        let l = [...e, a];
        if (i.type === N.Fragment) {
            r.push.apply(r, Md(i.props.children, l));
            return
        }
        i.type !== il && Mt(!1),
        !i.props.index || !i.props.children || Mt(!1);
        let c = {
            id: i.props.id || l.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (c.children = Md(i.props.children, l)),
        r.push(c)
    }
    ),
    r
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const wT = "6";
try {
    window.__reactRouterVersion = wT
} catch {}
const xT = "startTransition"
  , Fg = tS[xT];
function bT(t) {
    let {basename: e, children: r, future: i, window: a} = t
      , l = N.useRef();
    l.current == null && (l.current = ME({
        window: a,
        v5Compat: !0
    }));
    let c = l.current
      , [f,h] = N.useState({
        action: c.action,
        location: c.location
    })
      , {v7_startTransition: m} = i || {}
      , g = N.useCallback(y => {
        m && Fg ? Fg( () => h(y)) : h(y)
    }
    , [h, m]);
    return N.useLayoutEffect( () => c.listen(g), [c, g]),
    N.useEffect( () => gT(i), [i]),
    N.createElement(yT, {
        basename: e,
        children: r,
        location: f.location,
        navigationType: f.action,
        navigator: c,
        future: i
    })
}
var Vg;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(Vg || (Vg = {}));
var Bg;
(function(t) {
    t.UseFetcher = "useFetcher",
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(Bg || (Bg = {}));
function Mv(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {toString: ST} = Object.prototype
  , {getPrototypeOf: Ef} = Object
  , {iterator: Ol, toStringTag: Dv} = Symbol
  , Ll = (t => e => {
    const r = ST.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , fn = t => (t = t.toLowerCase(),
e => Ll(e) === t)
  , Ml = t => e => typeof e === t
  , {isArray: ai} = Array
  , ti = Ml("undefined");
function Po(t) {
    return t !== null && !ti(t) && t.constructor !== null && !ti(t.constructor) && Ot(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const Iv = fn("ArrayBuffer");
function kT(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Iv(t.buffer),
    e
}
const ET = Ml("string")
  , Ot = Ml("function")
  , Fv = Ml("number")
  , Ro = t => t !== null && typeof t == "object"
  , TT = t => t === !0 || t === !1
  , ol = t => {
    if (Ll(t) !== "object")
        return !1;
    const e = Ef(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Dv in t) && !(Ol in t)
}
  , CT = t => {
    if (!Ro(t) || Po(t))
        return !1;
    try {
        return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
    } catch {
        return !1
    }
}
  , PT = fn("Date")
  , RT = fn("File")
  , _T = fn("Blob")
  , AT = fn("FileList")
  , NT = t => Ro(t) && Ot(t.pipe)
  , jT = t => {
    let e;
    return t && (typeof FormData == "function" && t instanceof FormData || Ot(t.append) && ((e = Ll(t)) === "formdata" || e === "object" && Ot(t.toString) && t.toString() === "[object FormData]"))
}
  , OT = fn("URLSearchParams")
  , [LT,MT,DT,IT] = ["ReadableStream", "Request", "Response", "Headers"].map(fn)
  , FT = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _o(t, e, {allOwnKeys: r=!1}={}) {
    if (t === null || typeof t > "u")
        return;
    let i, a;
    if (typeof t != "object" && (t = [t]),
    ai(t))
        for (i = 0,
        a = t.length; i < a; i++)
            e.call(null, t[i], i, t);
    else {
        if (Po(t))
            return;
        const l = r ? Object.getOwnPropertyNames(t) : Object.keys(t)
          , c = l.length;
        let f;
        for (i = 0; i < c; i++)
            f = l[i],
            e.call(null, t[f], f, t)
    }
}
function Vv(t, e) {
    if (Po(t))
        return null;
    e = e.toLowerCase();
    const r = Object.keys(t);
    let i = r.length, a;
    for (; i-- > 0; )
        if (a = r[i],
        e === a.toLowerCase())
            return a;
    return null
}
const Hr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Bv = t => !ti(t) && t !== Hr;
function Dd() {
    const {caseless: t, skipUndefined: e} = Bv(this) && this || {}
      , r = {}
      , i = (a, l) => {
        const c = t && Vv(r, l) || l;
        ol(r[c]) && ol(a) ? r[c] = Dd(r[c], a) : ol(a) ? r[c] = Dd({}, a) : ai(a) ? r[c] = a.slice() : (!e || !ti(a)) && (r[c] = a)
    }
    ;
    for (let a = 0, l = arguments.length; a < l; a++)
        arguments[a] && _o(arguments[a], i);
    return r
}
const VT = (t, e, r, {allOwnKeys: i}={}) => (_o(e, (a, l) => {
    r && Ot(a) ? t[l] = Mv(a, r) : t[l] = a
}
, {
    allOwnKeys: i
}),
t)
  , BT = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)),
t)
  , UT = (t, e, r, i) => {
    t.prototype = Object.create(e.prototype, i),
    t.prototype.constructor = t,
    Object.defineProperty(t, "super", {
        value: e.prototype
    }),
    r && Object.assign(t.prototype, r)
}
  , zT = (t, e, r, i) => {
    let a, l, c;
    const f = {};
    if (e = e || {},
    t == null)
        return e;
    do {
        for (a = Object.getOwnPropertyNames(t),
        l = a.length; l-- > 0; )
            c = a[l],
            (!i || i(c, t, e)) && !f[c] && (e[c] = t[c],
            f[c] = !0);
        t = r !== !1 && Ef(t)
    } while (t && (!r || r(t, e)) && t !== Object.prototype);
    return e
}
  , $T = (t, e, r) => {
    t = String(t),
    (r === void 0 || r > t.length) && (r = t.length),
    r -= e.length;
    const i = t.indexOf(e, r);
    return i !== -1 && i === r
}
  , qT = t => {
    if (!t)
        return null;
    if (ai(t))
        return t;
    let e = t.length;
    if (!Fv(e))
        return null;
    const r = new Array(e);
    for (; e-- > 0; )
        r[e] = t[e];
    return r
}
  , HT = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && Ef(Uint8Array))
  , WT = (t, e) => {
    const i = (t && t[Ol]).call(t);
    let a;
    for (; (a = i.next()) && !a.done; ) {
        const l = a.value;
        e.call(t, l[0], l[1])
    }
}
  , KT = (t, e) => {
    let r;
    const i = [];
    for (; (r = t.exec(e)) !== null; )
        i.push(r);
    return i
}
  , QT = fn("HTMLFormElement")
  , GT = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, i, a) {
    return i.toUpperCase() + a
})
  , Ug = ( ({hasOwnProperty: t}) => (e, r) => t.call(e, r))(Object.prototype)
  , YT = fn("RegExp")
  , Uv = (t, e) => {
    const r = Object.getOwnPropertyDescriptors(t)
      , i = {};
    _o(r, (a, l) => {
        let c;
        (c = e(a, l, t)) !== !1 && (i[l] = c || a)
    }
    ),
    Object.defineProperties(t, i)
}
  , XT = t => {
    Uv(t, (e, r) => {
        if (Ot(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
            return !1;
        const i = t[r];
        if (Ot(i)) {
            if (e.enumerable = !1,
            "writable"in e) {
                e.writable = !1;
                return
            }
            e.set || (e.set = () => {
                throw Error("Can not rewrite read-only method '" + r + "'")
            }
            )
        }
    }
    )
}
  , JT = (t, e) => {
    const r = {}
      , i = a => {
        a.forEach(l => {
            r[l] = !0
        }
        )
    }
    ;
    return ai(t) ? i(t) : i(String(t).split(e)),
    r
}
  , ZT = () => {}
  , eC = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function tC(t) {
    return !!(t && Ot(t.append) && t[Dv] === "FormData" && t[Ol])
}
const nC = t => {
    const e = new Array(10)
      , r = (i, a) => {
        if (Ro(i)) {
            if (e.indexOf(i) >= 0)
                return;
            if (Po(i))
                return i;
            if (!("toJSON"in i)) {
                e[a] = i;
                const l = ai(i) ? [] : {};
                return _o(i, (c, f) => {
                    const h = r(c, a + 1);
                    !ti(h) && (l[f] = h)
                }
                ),
                e[a] = void 0,
                l
            }
        }
        return i
    }
    ;
    return r(t, 0)
}
  , rC = fn("AsyncFunction")
  , sC = t => t && (Ro(t) || Ot(t)) && Ot(t.then) && Ot(t.catch)
  , zv = ( (t, e) => t ? setImmediate : e ? ( (r, i) => (Hr.addEventListener("message", ({source: a, data: l}) => {
    a === Hr && l === r && i.length && i.shift()()
}
, !1),
a => {
    i.push(a),
    Hr.postMessage(r, "*")
}
))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", Ot(Hr.postMessage))
  , iC = typeof queueMicrotask < "u" ? queueMicrotask.bind(Hr) : typeof process < "u" && process.nextTick || zv
  , oC = t => t != null && Ot(t[Ol])
  , I = {
    isArray: ai,
    isArrayBuffer: Iv,
    isBuffer: Po,
    isFormData: jT,
    isArrayBufferView: kT,
    isString: ET,
    isNumber: Fv,
    isBoolean: TT,
    isObject: Ro,
    isPlainObject: ol,
    isEmptyObject: CT,
    isReadableStream: LT,
    isRequest: MT,
    isResponse: DT,
    isHeaders: IT,
    isUndefined: ti,
    isDate: PT,
    isFile: RT,
    isBlob: _T,
    isRegExp: YT,
    isFunction: Ot,
    isStream: NT,
    isURLSearchParams: OT,
    isTypedArray: HT,
    isFileList: AT,
    forEach: _o,
    merge: Dd,
    extend: VT,
    trim: FT,
    stripBOM: BT,
    inherits: UT,
    toFlatObject: zT,
    kindOf: Ll,
    kindOfTest: fn,
    endsWith: $T,
    toArray: qT,
    forEachEntry: WT,
    matchAll: KT,
    isHTMLForm: QT,
    hasOwnProperty: Ug,
    hasOwnProp: Ug,
    reduceDescriptors: Uv,
    freezeMethods: XT,
    toObjectSet: JT,
    toCamelCase: GT,
    noop: ZT,
    toFiniteNumber: eC,
    findKey: Vv,
    global: Hr,
    isContextDefined: Bv,
    isSpecCompliantForm: tC,
    toJSONObject: nC,
    isAsyncFn: rC,
    isThenable: sC,
    setImmediate: zv,
    asap: iC,
    isIterable: oC
};
function be(t, e, r, i, a) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = t,
    this.name = "AxiosError",
    e && (this.code = e),
    r && (this.config = r),
    i && (this.request = i),
    a && (this.response = a,
    this.status = a.status ? a.status : null)
}
I.inherits(be, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: I.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const $v = be.prototype
  , qv = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
    qv[t] = {
        value: t
    }
}
);
Object.defineProperties(be, qv);
Object.defineProperty($v, "isAxiosError", {
    value: !0
});
be.from = (t, e, r, i, a, l) => {
    const c = Object.create($v);
    I.toFlatObject(t, c, function(g) {
        return g !== Error.prototype
    }, m => m !== "isAxiosError");
    const f = t && t.message ? t.message : "Error"
      , h = e == null && t ? t.code : e;
    return be.call(c, f, h, r, i, a),
    t && c.cause == null && Object.defineProperty(c, "cause", {
        value: t,
        configurable: !0
    }),
    c.name = t && t.name || "Error",
    l && Object.assign(c, l),
    c
}
;
const aC = null;
function Id(t) {
    return I.isPlainObject(t) || I.isArray(t)
}
function Hv(t) {
    return I.endsWith(t, "[]") ? t.slice(0, -2) : t
}
function zg(t, e, r) {
    return t ? t.concat(e).map(function(a, l) {
        return a = Hv(a),
        !r && l ? "[" + a + "]" : a
    }).join(r ? "." : "") : e
}
function lC(t) {
    return I.isArray(t) && !t.some(Id)
}
const uC = I.toFlatObject(I, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});
function Dl(t, e, r) {
    if (!I.isObject(t))
        throw new TypeError("target must be an object");
    e = e || new FormData,
    r = I.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(k, S) {
        return !I.isUndefined(S[k])
    });
    const i = r.metaTokens
      , a = r.visitor || g
      , l = r.dots
      , c = r.indexes
      , h = (r.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(e);
    if (!I.isFunction(a))
        throw new TypeError("visitor must be a function");
    function m(b) {
        if (b === null)
            return "";
        if (I.isDate(b))
            return b.toISOString();
        if (I.isBoolean(b))
            return b.toString();
        if (!h && I.isBlob(b))
            throw new be("Blob is not supported. Use a Buffer instead.");
        return I.isArrayBuffer(b) || I.isTypedArray(b) ? h && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b
    }
    function g(b, k, S) {
        let _ = b;
        if (b && !S && typeof b == "object") {
            if (I.endsWith(k, "{}"))
                k = i ? k : k.slice(0, -2),
                b = JSON.stringify(b);
            else if (I.isArray(b) && lC(b) || (I.isFileList(b) || I.endsWith(k, "[]")) && (_ = I.toArray(b)))
                return k = Hv(k),
                _.forEach(function(M, V) {
                    !(I.isUndefined(M) || M === null) && e.append(c === !0 ? zg([k], V, l) : c === null ? k : k + "[]", m(M))
                }),
                !1
        }
        return Id(b) ? !0 : (e.append(zg(S, k, l), m(b)),
        !1)
    }
    const y = []
      , x = Object.assign(uC, {
        defaultVisitor: g,
        convertValue: m,
        isVisitable: Id
    });
    function E(b, k) {
        if (!I.isUndefined(b)) {
            if (y.indexOf(b) !== -1)
                throw Error("Circular reference detected in " + k.join("."));
            y.push(b),
            I.forEach(b, function(_, F) {
                (!(I.isUndefined(_) || _ === null) && a.call(e, _, I.isString(F) ? F.trim() : F, k, x)) === !0 && E(_, k ? k.concat(F) : [F])
            }),
            y.pop()
        }
    }
    if (!I.isObject(t))
        throw new TypeError("data must be an object");
    return E(t),
    e
}
function $g(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(i) {
        return e[i]
    })
}
function Tf(t, e) {
    this._pairs = [],
    t && Dl(t, this, e)
}
const Wv = Tf.prototype;
Wv.append = function(e, r) {
    this._pairs.push([e, r])
}
;
Wv.toString = function(e) {
    const r = e ? function(i) {
        return e.call(this, i, $g)
    }
    : $g;
    return this._pairs.map(function(a) {
        return r(a[0]) + "=" + r(a[1])
    }, "").join("&")
}
;
function cC(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function Kv(t, e, r) {
    if (!e)
        return t;
    const i = r && r.encode || cC;
    I.isFunction(r) && (r = {
        serialize: r
    });
    const a = r && r.serialize;
    let l;
    if (a ? l = a(e, r) : l = I.isURLSearchParams(e) ? e.toString() : new Tf(e,r).toString(i),
    l) {
        const c = t.indexOf("#");
        c !== -1 && (t = t.slice(0, c)),
        t += (t.indexOf("?") === -1 ? "?" : "&") + l
    }
    return t
}
class qg {
    constructor() {
        this.handlers = []
    }
    use(e, r, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: r,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        I.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const Qv = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , dC = typeof URLSearchParams < "u" ? URLSearchParams : Tf
  , fC = typeof FormData < "u" ? FormData : null
  , hC = typeof Blob < "u" ? Blob : null
  , pC = {
    isBrowser: !0,
    classes: {
        URLSearchParams: dC,
        FormData: fC,
        Blob: hC
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Cf = typeof window < "u" && typeof document < "u"
  , Fd = typeof navigator == "object" && navigator || void 0
  , mC = Cf && (!Fd || ["ReactNative", "NativeScript", "NS"].indexOf(Fd.product) < 0)
  , gC = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , yC = Cf && window.location.href || "http://localhost"
  , vC = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Cf,
    hasStandardBrowserEnv: mC,
    hasStandardBrowserWebWorkerEnv: gC,
    navigator: Fd,
    origin: yC
}, Symbol.toStringTag, {
    value: "Module"
}))
  , wt = {
    ...vC,
    ...pC
};
function wC(t, e) {
    return Dl(t, new wt.classes.URLSearchParams, {
        visitor: function(r, i, a, l) {
            return wt.isNode && I.isBuffer(r) ? (this.append(i, r.toString("base64")),
            !1) : l.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}
function xC(t) {
    return I.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}
function bC(t) {
    const e = {}
      , r = Object.keys(t);
    let i;
    const a = r.length;
    let l;
    for (i = 0; i < a; i++)
        l = r[i],
        e[l] = t[l];
    return e
}
function Gv(t) {
    function e(r, i, a, l) {
        let c = r[l++];
        if (c === "__proto__")
            return !0;
        const f = Number.isFinite(+c)
          , h = l >= r.length;
        return c = !c && I.isArray(a) ? a.length : c,
        h ? (I.hasOwnProp(a, c) ? a[c] = [a[c], i] : a[c] = i,
        !f) : ((!a[c] || !I.isObject(a[c])) && (a[c] = []),
        e(r, i, a[c], l) && I.isArray(a[c]) && (a[c] = bC(a[c])),
        !f)
    }
    if (I.isFormData(t) && I.isFunction(t.entries)) {
        const r = {};
        return I.forEachEntry(t, (i, a) => {
            e(xC(i), a, r, 0)
        }
        ),
        r
    }
    return null
}
function SC(t, e, r) {
    if (I.isString(t))
        try {
            return (e || JSON.parse)(t),
            I.trim(t)
        } catch (i) {
            if (i.name !== "SyntaxError")
                throw i
        }
    return (r || JSON.stringify)(t)
}
const Ao = {
    transitional: Qv,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, r) {
        const i = r.getContentType() || ""
          , a = i.indexOf("application/json") > -1
          , l = I.isObject(e);
        if (l && I.isHTMLForm(e) && (e = new FormData(e)),
        I.isFormData(e))
            return a ? JSON.stringify(Gv(e)) : e;
        if (I.isArrayBuffer(e) || I.isBuffer(e) || I.isStream(e) || I.isFile(e) || I.isBlob(e) || I.isReadableStream(e))
            return e;
        if (I.isArrayBufferView(e))
            return e.buffer;
        if (I.isURLSearchParams(e))
            return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let f;
        if (l) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1)
                return wC(e, this.formSerializer).toString();
            if ((f = I.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return Dl(f ? {
                    "files[]": e
                } : e, h && new h, this.formSerializer)
            }
        }
        return l || a ? (r.setContentType("application/json", !1),
        SC(e)) : e
    }
    ],
    transformResponse: [function(e) {
        const r = this.transitional || Ao.transitional
          , i = r && r.forcedJSONParsing
          , a = this.responseType === "json";
        if (I.isResponse(e) || I.isReadableStream(e))
            return e;
        if (e && I.isString(e) && (i && !this.responseType || a)) {
            const c = !(r && r.silentJSONParsing) && a;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (f) {
                if (c)
                    throw f.name === "SyntaxError" ? be.from(f, be.ERR_BAD_RESPONSE, this, null, this.response) : f
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: wt.classes.FormData,
        Blob: wt.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
I.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    Ao.headers[t] = {}
}
);
const kC = I.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , EC = t => {
    const e = {};
    let r, i, a;
    return t && t.split(`
`).forEach(function(c) {
        a = c.indexOf(":"),
        r = c.substring(0, a).trim().toLowerCase(),
        i = c.substring(a + 1).trim(),
        !(!r || e[r] && kC[r]) && (r === "set-cookie" ? e[r] ? e[r].push(i) : e[r] = [i] : e[r] = e[r] ? e[r] + ", " + i : i)
    }),
    e
}
  , Hg = Symbol("internals");
function Ji(t) {
    return t && String(t).trim().toLowerCase()
}
function al(t) {
    return t === !1 || t == null ? t : I.isArray(t) ? t.map(al) : String(t)
}
function TC(t) {
    const e = Object.create(null)
      , r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = r.exec(t); )
        e[i[1]] = i[2];
    return e
}
const CC = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Gc(t, e, r, i, a) {
    if (I.isFunction(i))
        return i.call(this, e, r);
    if (a && (e = r),
    !!I.isString(e)) {
        if (I.isString(i))
            return e.indexOf(i) !== -1;
        if (I.isRegExp(i))
            return i.test(e)
    }
}
function PC(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, i) => r.toUpperCase() + i)
}
function RC(t, e) {
    const r = I.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + r, {
            value: function(a, l, c) {
                return this[i].call(this, e, a, l, c)
            },
            configurable: !0
        })
    }
    )
}
let Lt = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, r, i) {
        const a = this;
        function l(f, h, m) {
            const g = Ji(h);
            if (!g)
                throw new Error("header name must be a non-empty string");
            const y = I.findKey(a, g);
            (!y || a[y] === void 0 || m === !0 || m === void 0 && a[y] !== !1) && (a[y || h] = al(f))
        }
        const c = (f, h) => I.forEach(f, (m, g) => l(m, g, h));
        if (I.isPlainObject(e) || e instanceof this.constructor)
            c(e, r);
        else if (I.isString(e) && (e = e.trim()) && !CC(e))
            c(EC(e), r);
        else if (I.isObject(e) && I.isIterable(e)) {
            let f = {}, h, m;
            for (const g of e) {
                if (!I.isArray(g))
                    throw TypeError("Object iterator must return a key-value pair");
                f[m = g[0]] = (h = f[m]) ? I.isArray(h) ? [...h, g[1]] : [h, g[1]] : g[1]
            }
            c(f, r)
        } else
            e != null && l(r, e, i);
        return this
    }
    get(e, r) {
        if (e = Ji(e),
        e) {
            const i = I.findKey(this, e);
            if (i) {
                const a = this[i];
                if (!r)
                    return a;
                if (r === !0)
                    return TC(a);
                if (I.isFunction(r))
                    return r.call(this, a, i);
                if (I.isRegExp(r))
                    return r.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, r) {
        if (e = Ji(e),
        e) {
            const i = I.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!r || Gc(this, this[i], i, r)))
        }
        return !1
    }
    delete(e, r) {
        const i = this;
        let a = !1;
        function l(c) {
            if (c = Ji(c),
            c) {
                const f = I.findKey(i, c);
                f && (!r || Gc(i, i[f], f, r)) && (delete i[f],
                a = !0)
            }
        }
        return I.isArray(e) ? e.forEach(l) : l(e),
        a
    }
    clear(e) {
        const r = Object.keys(this);
        let i = r.length
          , a = !1;
        for (; i--; ) {
            const l = r[i];
            (!e || Gc(this, this[l], l, e, !0)) && (delete this[l],
            a = !0)
        }
        return a
    }
    normalize(e) {
        const r = this
          , i = {};
        return I.forEach(this, (a, l) => {
            const c = I.findKey(i, l);
            if (c) {
                r[c] = al(a),
                delete r[l];
                return
            }
            const f = e ? PC(l) : String(l).trim();
            f !== l && delete r[l],
            r[f] = al(a),
            i[f] = !0
        }
        ),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const r = Object.create(null);
        return I.forEach(this, (i, a) => {
            i != null && i !== !1 && (r[a] = e && I.isArray(i) ? i.join(", ") : i)
        }
        ),
        r
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([e,r]) => e + ": " + r).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...r) {
        const i = new this(e);
        return r.forEach(a => i.set(a)),
        i
    }
    static accessor(e) {
        const i = (this[Hg] = this[Hg] = {
            accessors: {}
        }).accessors
          , a = this.prototype;
        function l(c) {
            const f = Ji(c);
            i[f] || (RC(a, c),
            i[f] = !0)
        }
        return I.isArray(e) ? e.forEach(l) : l(e),
        this
    }
}
;
Lt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(Lt.prototype, ({value: t}, e) => {
    let r = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[r] = i
        }
    }
}
);
I.freezeMethods(Lt);
function Yc(t, e) {
    const r = this || Ao
      , i = e || r
      , a = Lt.from(i.headers);
    let l = i.data;
    return I.forEach(t, function(f) {
        l = f.call(r, l, a.normalize(), e ? e.status : void 0)
    }),
    a.normalize(),
    l
}
function Yv(t) {
    return !!(t && t.__CANCEL__)
}
function li(t, e, r) {
    be.call(this, t ?? "canceled", be.ERR_CANCELED, e, r),
    this.name = "CanceledError"
}
I.inherits(li, be, {
    __CANCEL__: !0
});
function Xv(t, e, r) {
    const i = r.config.validateStatus;
    !r.status || !i || i(r.status) ? t(r) : e(new be("Request failed with status code " + r.status,[be.ERR_BAD_REQUEST, be.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],r.config,r.request,r))
}
function _C(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}
function AC(t, e) {
    t = t || 10;
    const r = new Array(t)
      , i = new Array(t);
    let a = 0, l = 0, c;
    return e = e !== void 0 ? e : 1e3,
    function(h) {
        const m = Date.now()
          , g = i[l];
        c || (c = m),
        r[a] = h,
        i[a] = m;
        let y = l
          , x = 0;
        for (; y !== a; )
            x += r[y++],
            y = y % t;
        if (a = (a + 1) % t,
        a === l && (l = (l + 1) % t),
        m - c < e)
            return;
        const E = g && m - g;
        return E ? Math.round(x * 1e3 / E) : void 0
    }
}
function NC(t, e) {
    let r = 0, i = 1e3 / e, a, l;
    const c = (m, g=Date.now()) => {
        r = g,
        a = null,
        l && (clearTimeout(l),
        l = null),
        t(...m)
    }
    ;
    return [ (...m) => {
        const g = Date.now()
          , y = g - r;
        y >= i ? c(m, g) : (a = m,
        l || (l = setTimeout( () => {
            l = null,
            c(a)
        }
        , i - y)))
    }
    , () => a && c(a)]
}
const xl = (t, e, r=3) => {
    let i = 0;
    const a = AC(50, 250);
    return NC(l => {
        const c = l.loaded
          , f = l.lengthComputable ? l.total : void 0
          , h = c - i
          , m = a(h)
          , g = c <= f;
        i = c;
        const y = {
            loaded: c,
            total: f,
            progress: f ? c / f : void 0,
            bytes: h,
            rate: m || void 0,
            estimated: m && f && g ? (f - c) / m : void 0,
            event: l,
            lengthComputable: f != null,
            [e ? "download" : "upload"]: !0
        };
        t(y)
    }
    , r)
}
  , Wg = (t, e) => {
    const r = t != null;
    return [i => e[0]({
        lengthComputable: r,
        total: t,
        loaded: i
    }), e[1]]
}
  , Kg = t => (...e) => I.asap( () => t(...e))
  , jC = wt.hasStandardBrowserEnv ? ( (t, e) => r => (r = new URL(r,wt.origin),
t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(wt.origin), wt.navigator && /(msie|trident)/i.test(wt.navigator.userAgent)) : () => !0
  , OC = wt.hasStandardBrowserEnv ? {
    write(t, e, r, i, a, l) {
        const c = [t + "=" + encodeURIComponent(e)];
        I.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()),
        I.isString(i) && c.push("path=" + i),
        I.isString(a) && c.push("domain=" + a),
        l === !0 && c.push("secure"),
        document.cookie = c.join("; ")
    },
    read(t) {
        const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return e ? decodeURIComponent(e[3]) : null
    },
    remove(t) {
        this.write(t, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function LC(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}
function MC(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}
function Jv(t, e, r) {
    let i = !LC(e);
    return t && (i || r == !1) ? MC(t, e) : e
}
const Qg = t => t instanceof Lt ? {
    ...t
} : t;
function is(t, e) {
    e = e || {};
    const r = {};
    function i(m, g, y, x) {
        return I.isPlainObject(m) && I.isPlainObject(g) ? I.merge.call({
            caseless: x
        }, m, g) : I.isPlainObject(g) ? I.merge({}, g) : I.isArray(g) ? g.slice() : g
    }
    function a(m, g, y, x) {
        if (I.isUndefined(g)) {
            if (!I.isUndefined(m))
                return i(void 0, m, y, x)
        } else
            return i(m, g, y, x)
    }
    function l(m, g) {
        if (!I.isUndefined(g))
            return i(void 0, g)
    }
    function c(m, g) {
        if (I.isUndefined(g)) {
            if (!I.isUndefined(m))
                return i(void 0, m)
        } else
            return i(void 0, g)
    }
    function f(m, g, y) {
        if (y in e)
            return i(m, g);
        if (y in t)
            return i(void 0, m)
    }
    const h = {
        url: l,
        method: l,
        data: l,
        baseURL: c,
        transformRequest: c,
        transformResponse: c,
        paramsSerializer: c,
        timeout: c,
        timeoutMessage: c,
        withCredentials: c,
        withXSRFToken: c,
        adapter: c,
        responseType: c,
        xsrfCookieName: c,
        xsrfHeaderName: c,
        onUploadProgress: c,
        onDownloadProgress: c,
        decompress: c,
        maxContentLength: c,
        maxBodyLength: c,
        beforeRedirect: c,
        transport: c,
        httpAgent: c,
        httpsAgent: c,
        cancelToken: c,
        socketPath: c,
        responseEncoding: c,
        validateStatus: f,
        headers: (m, g, y) => a(Qg(m), Qg(g), y, !0)
    };
    return I.forEach(Object.keys({
        ...t,
        ...e
    }), function(g) {
        const y = h[g] || a
          , x = y(t[g], e[g], g);
        I.isUndefined(x) && y !== f || (r[g] = x)
    }),
    r
}
const Zv = t => {
    const e = is({}, t);
    let {data: r, withXSRFToken: i, xsrfHeaderName: a, xsrfCookieName: l, headers: c, auth: f} = e;
    if (e.headers = c = Lt.from(c),
    e.url = Kv(Jv(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer),
    f && c.set("Authorization", "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))),
    I.isFormData(r)) {
        if (wt.hasStandardBrowserEnv || wt.hasStandardBrowserWebWorkerEnv)
            c.setContentType(void 0);
        else if (I.isFunction(r.getHeaders)) {
            const h = r.getHeaders()
              , m = ["content-type", "content-length"];
            Object.entries(h).forEach( ([g,y]) => {
                m.includes(g.toLowerCase()) && c.set(g, y)
            }
            )
        }
    }
    if (wt.hasStandardBrowserEnv && (i && I.isFunction(i) && (i = i(e)),
    i || i !== !1 && jC(e.url))) {
        const h = a && l && OC.read(l);
        h && c.set(a, h)
    }
    return e
}
  , DC = typeof XMLHttpRequest < "u"
  , IC = DC && function(t) {
    return new Promise(function(r, i) {
        const a = Zv(t);
        let l = a.data;
        const c = Lt.from(a.headers).normalize();
        let {responseType: f, onUploadProgress: h, onDownloadProgress: m} = a, g, y, x, E, b;
        function k() {
            E && E(),
            b && b(),
            a.cancelToken && a.cancelToken.unsubscribe(g),
            a.signal && a.signal.removeEventListener("abort", g)
        }
        let S = new XMLHttpRequest;
        S.open(a.method.toUpperCase(), a.url, !0),
        S.timeout = a.timeout;
        function _() {
            if (!S)
                return;
            const M = Lt.from("getAllResponseHeaders"in S && S.getAllResponseHeaders())
              , U = {
                data: !f || f === "text" || f === "json" ? S.responseText : S.response,
                status: S.status,
                statusText: S.statusText,
                headers: M,
                config: t,
                request: S
            };
            Xv(function(ne) {
                r(ne),
                k()
            }, function(ne) {
                i(ne),
                k()
            }, U),
            S = null
        }
        "onloadend"in S ? S.onloadend = _ : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(_)
        }
        ,
        S.onabort = function() {
            S && (i(new be("Request aborted",be.ECONNABORTED,t,S)),
            S = null)
        }
        ,
        S.onerror = function(V) {
            const U = V && V.message ? V.message : "Network Error"
              , Y = new be(U,be.ERR_NETWORK,t,S);
            Y.event = V || null,
            i(Y),
            S = null
        }
        ,
        S.ontimeout = function() {
            let V = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
            const U = a.transitional || Qv;
            a.timeoutErrorMessage && (V = a.timeoutErrorMessage),
            i(new be(V,U.clarifyTimeoutError ? be.ETIMEDOUT : be.ECONNABORTED,t,S)),
            S = null
        }
        ,
        l === void 0 && c.setContentType(null),
        "setRequestHeader"in S && I.forEach(c.toJSON(), function(V, U) {
            S.setRequestHeader(U, V)
        }),
        I.isUndefined(a.withCredentials) || (S.withCredentials = !!a.withCredentials),
        f && f !== "json" && (S.responseType = a.responseType),
        m && ([x,b] = xl(m, !0),
        S.addEventListener("progress", x)),
        h && S.upload && ([y,E] = xl(h),
        S.upload.addEventListener("progress", y),
        S.upload.addEventListener("loadend", E)),
        (a.cancelToken || a.signal) && (g = M => {
            S && (i(!M || M.type ? new li(null,t,S) : M),
            S.abort(),
            S = null)
        }
        ,
        a.cancelToken && a.cancelToken.subscribe(g),
        a.signal && (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
        const F = _C(a.url);
        if (F && wt.protocols.indexOf(F) === -1) {
            i(new be("Unsupported protocol " + F + ":",be.ERR_BAD_REQUEST,t));
            return
        }
        S.send(l || null)
    }
    )
}
  , FC = (t, e) => {
    const {length: r} = t = t ? t.filter(Boolean) : [];
    if (e || r) {
        let i = new AbortController, a;
        const l = function(m) {
            if (!a) {
                a = !0,
                f();
                const g = m instanceof Error ? m : this.reason;
                i.abort(g instanceof be ? g : new li(g instanceof Error ? g.message : g))
            }
        };
        let c = e && setTimeout( () => {
            c = null,
            l(new be(`timeout ${e} of ms exceeded`,be.ETIMEDOUT))
        }
        , e);
        const f = () => {
            t && (c && clearTimeout(c),
            c = null,
            t.forEach(m => {
                m.unsubscribe ? m.unsubscribe(l) : m.removeEventListener("abort", l)
            }
            ),
            t = null)
        }
        ;
        t.forEach(m => m.addEventListener("abort", l));
        const {signal: h} = i;
        return h.unsubscribe = () => I.asap(f),
        h
    }
}
  , VC = function*(t, e) {
    let r = t.byteLength;
    if (r < e) {
        yield t;
        return
    }
    let i = 0, a;
    for (; i < r; )
        a = i + e,
        yield t.slice(i, a),
        i = a
}
  , BC = async function*(t, e) {
    for await(const r of UC(t))
        yield*VC(r, e)
}
  , UC = async function*(t) {
    if (t[Symbol.asyncIterator]) {
        yield*t;
        return
    }
    const e = t.getReader();
    try {
        for (; ; ) {
            const {done: r, value: i} = await e.read();
            if (r)
                break;
            yield i
        }
    } finally {
        await e.cancel()
    }
}
  , Gg = (t, e, r, i) => {
    const a = BC(t, e);
    let l = 0, c, f = h => {
        c || (c = !0,
        i && i(h))
    }
    ;
    return new ReadableStream({
        async pull(h) {
            try {
                const {done: m, value: g} = await a.next();
                if (m) {
                    f(),
                    h.close();
                    return
                }
                let y = g.byteLength;
                if (r) {
                    let x = l += y;
                    r(x)
                }
                h.enqueue(new Uint8Array(g))
            } catch (m) {
                throw f(m),
                m
            }
        },
        cancel(h) {
            return f(h),
            a.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Yg = 64 * 1024
  , {isFunction: Ya} = I
  , zC = ( ({Request: t, Response: e}) => ({
    Request: t,
    Response: e
}))(I.global)
  , {ReadableStream: Xg, TextEncoder: Jg} = I.global
  , Zg = (t, ...e) => {
    try {
        return !!t(...e)
    } catch {
        return !1
    }
}
  , $C = t => {
    t = I.merge.call({
        skipUndefined: !0
    }, zC, t);
    const {fetch: e, Request: r, Response: i} = t
      , a = e ? Ya(e) : typeof fetch == "function"
      , l = Ya(r)
      , c = Ya(i);
    if (!a)
        return !1;
    const f = a && Ya(Xg)
      , h = a && (typeof Jg == "function" ? (b => k => b.encode(k))(new Jg) : async b => new Uint8Array(await new r(b).arrayBuffer()))
      , m = l && f && Zg( () => {
        let b = !1;
        const k = new r(wt.origin,{
            body: new Xg,
            method: "POST",
            get duplex() {
                return b = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return b && !k
    }
    )
      , g = c && f && Zg( () => I.isReadableStream(new i("").body))
      , y = {
        stream: g && (b => b.body)
    };
    a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(b => {
        !y[b] && (y[b] = (k, S) => {
            let _ = k && k[b];
            if (_)
                return _.call(k);
            throw new be(`Response type '${b}' is not supported`,be.ERR_NOT_SUPPORT,S)
        }
        )
    }
    );
    const x = async b => {
        if (b == null)
            return 0;
        if (I.isBlob(b))
            return b.size;
        if (I.isSpecCompliantForm(b))
            return (await new r(wt.origin,{
                method: "POST",
                body: b
            }).arrayBuffer()).byteLength;
        if (I.isArrayBufferView(b) || I.isArrayBuffer(b))
            return b.byteLength;
        if (I.isURLSearchParams(b) && (b = b + ""),
        I.isString(b))
            return (await h(b)).byteLength
    }
      , E = async (b, k) => {
        const S = I.toFiniteNumber(b.getContentLength());
        return S ?? x(k)
    }
    ;
    return async b => {
        let {url: k, method: S, data: _, signal: F, cancelToken: M, timeout: V, onDownloadProgress: U, onUploadProgress: Y, responseType: ne, headers: j, withCredentials: W="same-origin", fetchOptions: Q} = Zv(b)
          , J = e || fetch;
        ne = ne ? (ne + "").toLowerCase() : "text";
        let $ = FC([F, M && M.toAbortSignal()], V)
          , re = null;
        const Te = $ && $.unsubscribe && ( () => {
            $.unsubscribe()
        }
        );
        let pe;
        try {
            if (Y && m && S !== "get" && S !== "head" && (pe = await E(j, _)) !== 0) {
                let A = new r(k,{
                    method: "POST",
                    body: _,
                    duplex: "half"
                }), z;
                if (I.isFormData(_) && (z = A.headers.get("content-type")) && j.setContentType(z),
                A.body) {
                    const [ce,fe] = Wg(pe, xl(Kg(Y)));
                    _ = Gg(A.body, Yg, ce, fe)
                }
            }
            I.isString(W) || (W = W ? "include" : "omit");
            const he = l && "credentials"in r.prototype
              , de = {
                ...Q,
                signal: $,
                method: S.toUpperCase(),
                headers: j.normalize().toJSON(),
                body: _,
                duplex: "half",
                credentials: he ? W : void 0
            };
            re = l && new r(k,de);
            let B = await (l ? J(re, Q) : J(k, de));
            const le = g && (ne === "stream" || ne === "response");
            if (g && (U || le && Te)) {
                const A = {};
                ["status", "statusText", "headers"].forEach(Se => {
                    A[Se] = B[Se]
                }
                );
                const z = I.toFiniteNumber(B.headers.get("content-length"))
                  , [ce,fe] = U && Wg(z, xl(Kg(U), !0)) || [];
                B = new i(Gg(B.body, Yg, ce, () => {
                    fe && fe(),
                    Te && Te()
                }
                ),A)
            }
            ne = ne || "text";
            let X = await y[I.findKey(y, ne) || "text"](B, b);
            return !le && Te && Te(),
            await new Promise( (A, z) => {
                Xv(A, z, {
                    data: X,
                    headers: Lt.from(B.headers),
                    status: B.status,
                    statusText: B.statusText,
                    config: b,
                    request: re
                })
            }
            )
        } catch (he) {
            throw Te && Te(),
            he && he.name === "TypeError" && /Load failed|fetch/i.test(he.message) ? Object.assign(new be("Network Error",be.ERR_NETWORK,b,re), {
                cause: he.cause || he
            }) : be.from(he, he && he.code, b, re)
        }
    }
}
  , qC = new Map
  , ew = t => {
    let e = t ? t.env : {};
    const {fetch: r, Request: i, Response: a} = e
      , l = [i, a, r];
    let c = l.length, f = c, h, m, g = qC;
    for (; f--; )
        h = l[f],
        m = g.get(h),
        m === void 0 && g.set(h, m = f ? new Map : $C(e)),
        g = m;
    return m
}
;
ew();
const Vd = {
    http: aC,
    xhr: IC,
    fetch: {
        get: ew
    }
};
I.forEach(Vd, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
}
);
const ey = t => `- ${t}`
  , HC = t => I.isFunction(t) || t === null || t === !1
  , tw = {
    getAdapter: (t, e) => {
        t = I.isArray(t) ? t : [t];
        const {length: r} = t;
        let i, a;
        const l = {};
        for (let c = 0; c < r; c++) {
            i = t[c];
            let f;
            if (a = i,
            !HC(i) && (a = Vd[(f = String(i)).toLowerCase()],
            a === void 0))
                throw new be(`Unknown adapter '${f}'`);
            if (a && (I.isFunction(a) || (a = a.get(e))))
                break;
            l[f || "#" + c] = a
        }
        if (!a) {
            const c = Object.entries(l).map( ([h,m]) => `adapter ${h} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build"));
            let f = r ? c.length > 1 ? `since :
` + c.map(ey).join(`
`) : " " + ey(c[0]) : "as no adapter specified";
            throw new be("There is no suitable adapter to dispatch the request " + f,"ERR_NOT_SUPPORT")
        }
        return a
    }
    ,
    adapters: Vd
};
function Xc(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
        throw new li(null,t)
}
function ty(t) {
    return Xc(t),
    t.headers = Lt.from(t.headers),
    t.data = Yc.call(t, t.transformRequest),
    ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1),
    tw.getAdapter(t.adapter || Ao.adapter, t)(t).then(function(i) {
        return Xc(t),
        i.data = Yc.call(t, t.transformResponse, i),
        i.headers = Lt.from(i.headers),
        i
    }, function(i) {
        return Yv(i) || (Xc(t),
        i && i.response && (i.response.data = Yc.call(t, t.transformResponse, i.response),
        i.response.headers = Lt.from(i.response.headers))),
        Promise.reject(i)
    })
}
const nw = "1.12.2"
  , Il = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (t, e) => {
    Il[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
}
);
const ny = {};
Il.transitional = function(e, r, i) {
    function a(l, c) {
        return "[Axios v" + nw + "] Transitional option '" + l + "'" + c + (i ? ". " + i : "")
    }
    return (l, c, f) => {
        if (e === !1)
            throw new be(a(c, " has been removed" + (r ? " in " + r : "")),be.ERR_DEPRECATED);
        return r && !ny[c] && (ny[c] = !0,
        console.warn(a(c, " has been deprecated since v" + r + " and will be removed in the near future"))),
        e ? e(l, c, f) : !0
    }
}
;
Il.spelling = function(e) {
    return (r, i) => (console.warn(`${i} is likely a misspelling of ${e}`),
    !0)
}
;
function WC(t, e, r) {
    if (typeof t != "object")
        throw new be("options must be an object",be.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let a = i.length;
    for (; a-- > 0; ) {
        const l = i[a]
          , c = e[l];
        if (c) {
            const f = t[l]
              , h = f === void 0 || c(f, l, t);
            if (h !== !0)
                throw new be("option " + l + " must be " + h,be.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0)
            throw new be("Unknown option " + l,be.ERR_BAD_OPTION)
    }
}
const ll = {
    assertOptions: WC,
    validators: Il
}
  , vn = ll.validators;
let ns = class {
    constructor(e) {
        this.defaults = e || {},
        this.interceptors = {
            request: new qg,
            response: new qg
        }
    }
    async request(e, r) {
        try {
            return await this._request(e, r)
        } catch (i) {
            if (i instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const l = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? l && !String(i.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + l) : i.stack = l
                } catch {}
            }
            throw i
        }
    }
    _request(e, r) {
        typeof e == "string" ? (r = r || {},
        r.url = e) : r = e || {},
        r = is(this.defaults, r);
        const {transitional: i, paramsSerializer: a, headers: l} = r;
        i !== void 0 && ll.assertOptions(i, {
            silentJSONParsing: vn.transitional(vn.boolean),
            forcedJSONParsing: vn.transitional(vn.boolean),
            clarifyTimeoutError: vn.transitional(vn.boolean)
        }, !1),
        a != null && (I.isFunction(a) ? r.paramsSerializer = {
            serialize: a
        } : ll.assertOptions(a, {
            encode: vn.function,
            serialize: vn.function
        }, !0)),
        r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0),
        ll.assertOptions(r, {
            baseUrl: vn.spelling("baseURL"),
            withXsrfToken: vn.spelling("withXSRFToken")
        }, !0),
        r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let c = l && I.merge(l.common, l[r.method]);
        l && I.forEach(["delete", "get", "head", "post", "put", "patch", "common"], b => {
            delete l[b]
        }
        ),
        r.headers = Lt.concat(c, l);
        const f = [];
        let h = !0;
        this.interceptors.request.forEach(function(k) {
            typeof k.runWhen == "function" && k.runWhen(r) === !1 || (h = h && k.synchronous,
            f.unshift(k.fulfilled, k.rejected))
        });
        const m = [];
        this.interceptors.response.forEach(function(k) {
            m.push(k.fulfilled, k.rejected)
        });
        let g, y = 0, x;
        if (!h) {
            const b = [ty.bind(this), void 0];
            for (b.unshift(...f),
            b.push(...m),
            x = b.length,
            g = Promise.resolve(r); y < x; )
                g = g.then(b[y++], b[y++]);
            return g
        }
        x = f.length;
        let E = r;
        for (; y < x; ) {
            const b = f[y++]
              , k = f[y++];
            try {
                E = b(E)
            } catch (S) {
                k.call(this, S);
                break
            }
        }
        try {
            g = ty.call(this, E)
        } catch (b) {
            return Promise.reject(b)
        }
        for (y = 0,
        x = m.length; y < x; )
            g = g.then(m[y++], m[y++]);
        return g
    }
    getUri(e) {
        e = is(this.defaults, e);
        const r = Jv(e.baseURL, e.url, e.allowAbsoluteUrls);
        return Kv(r, e.params, e.paramsSerializer)
    }
}
;
I.forEach(["delete", "get", "head", "options"], function(e) {
    ns.prototype[e] = function(r, i) {
        return this.request(is(i || {}, {
            method: e,
            url: r,
            data: (i || {}).data
        }))
    }
});
I.forEach(["post", "put", "patch"], function(e) {
    function r(i) {
        return function(l, c, f) {
            return this.request(is(f || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: c
            }))
        }
    }
    ns.prototype[e] = r(),
    ns.prototype[e + "Form"] = r(!0)
});
let KC = class rw {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(l) {
            r = l
        }
        );
        const i = this;
        this.promise.then(a => {
            if (!i._listeners)
                return;
            let l = i._listeners.length;
            for (; l-- > 0; )
                i._listeners[l](a);
            i._listeners = null
        }
        ),
        this.promise.then = a => {
            let l;
            const c = new Promise(f => {
                i.subscribe(f),
                l = f
            }
            ).then(a);
            return c.cancel = function() {
                i.unsubscribe(l)
            }
            ,
            c
        }
        ,
        e(function(l, c, f) {
            i.reason || (i.reason = new li(l,c,f),
            r(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const r = this._listeners.indexOf(e);
        r !== -1 && this._listeners.splice(r, 1)
    }
    toAbortSignal() {
        const e = new AbortController
          , r = i => {
            e.abort(i)
        }
        ;
        return this.subscribe(r),
        e.signal.unsubscribe = () => this.unsubscribe(r),
        e.signal
    }
    static source() {
        let e;
        return {
            token: new rw(function(a) {
                e = a
            }
            ),
            cancel: e
        }
    }
}
;
function QC(t) {
    return function(r) {
        return t.apply(null, r)
    }
}
function GC(t) {
    return I.isObject(t) && t.isAxiosError === !0
}
const Bd = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Bd).forEach( ([t,e]) => {
    Bd[e] = t
}
);
function sw(t) {
    const e = new ns(t)
      , r = Mv(ns.prototype.request, e);
    return I.extend(r, ns.prototype, e, {
        allOwnKeys: !0
    }),
    I.extend(r, e, null, {
        allOwnKeys: !0
    }),
    r.create = function(a) {
        return sw(is(t, a))
    }
    ,
    r
}
const Je = sw(Ao);
Je.Axios = ns;
Je.CanceledError = li;
Je.CancelToken = KC;
Je.isCancel = Yv;
Je.VERSION = nw;
Je.toFormData = Dl;
Je.AxiosError = be;
Je.Cancel = Je.CanceledError;
Je.all = function(e) {
    return Promise.all(e)
}
;
Je.spread = QC;
Je.isAxiosError = GC;
Je.mergeConfig = is;
Je.AxiosHeaders = Lt;
Je.formToJSON = t => Gv(I.isHTMLForm(t) ? new FormData(t) : t);
Je.getAdapter = tw.getAdapter;
Je.HttpStatusCode = Bd;
Je.default = Je;
const {Axios: Fj, AxiosError: Vj, CanceledError: Bj, isCancel: Uj, CancelToken: zj, VERSION: $j, all: qj, Cancel: Hj, isAxiosError: Wj, spread: Kj, toFormData: Qj, AxiosHeaders: Gj, HttpStatusCode: Yj, formToJSON: Xj, getAdapter: Jj, mergeConfig: Zj} = Je
  , YC = typeof window > "u"
  , ry = !YC && window.self !== window.top
  , dt = [];
for (let t = 0; t < 256; ++t)
    dt.push((t + 256).toString(16).slice(1));
function XC(t, e=0) {
    return (dt[t[e + 0]] + dt[t[e + 1]] + dt[t[e + 2]] + dt[t[e + 3]] + "-" + dt[t[e + 4]] + dt[t[e + 5]] + "-" + dt[t[e + 6]] + dt[t[e + 7]] + "-" + dt[t[e + 8]] + dt[t[e + 9]] + "-" + dt[t[e + 10]] + dt[t[e + 11]] + dt[t[e + 12]] + dt[t[e + 13]] + dt[t[e + 14]] + dt[t[e + 15]]).toLowerCase()
}
let Jc;
const JC = new Uint8Array(16);
function ZC() {
    if (!Jc) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        Jc = crypto.getRandomValues.bind(crypto)
    }
    return Jc(JC)
}
const eP = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , sy = {
    randomUUID: eP
};
function tP(t, e, r) {
    var a;
    t = t || {};
    const i = t.random ?? ((a = t.rng) == null ? void 0 : a.call(t)) ?? ZC();
    if (i.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    XC(i)
}
function nP(t, e, r) {
    return sy.randomUUID && !t ? sy.randomUUID() : tP(t)
}
class rP extends Error {
    constructor(e, r, i, a, l) {
        super(e),
        this.name = "Base44Error",
        this.status = r,
        this.code = i,
        this.data = a,
        this.originalError = l
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}
function ro({baseURL: t, headers: e={}, token: r, interceptResponses: i=!0, onError: a}) {
    const l = Je.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return r && (l.defaults.headers.common.Authorization = `Bearer ${r}`),
    l.interceptors.request.use(c => {
        typeof window < "u" && c.headers.set("X-Origin-URL", window.location.href);
        const f = nP();
        if (c.requestId = f,
        ry)
            try {
                window.parent.postMessage({
                    type: "api-request-start",
                    requestId: f,
                    data: {
                        url: t + c.url,
                        method: c.method,
                        body: c.data instanceof FormData ? "[FormData object]" : c.data
                    }
                }, "*")
            } catch {}
        return c
    }
    ),
    i && l.interceptors.response.use(c => {
        var f;
        const h = (f = c.config) === null || f === void 0 ? void 0 : f.requestId;
        try {
            ry && h && window.parent.postMessage({
                type: "api-request-end",
                requestId: h,
                data: {
                    statusCode: c.status,
                    response: c.data
                }
            }, "*")
        } catch {}
        return c.data
    }
    , c => {
        var f, h, m, g, y, x, E, b;
        const k = ((h = (f = c.response) === null || f === void 0 ? void 0 : f.data) === null || h === void 0 ? void 0 : h.message) || ((g = (m = c.response) === null || m === void 0 ? void 0 : m.data) === null || g === void 0 ? void 0 : g.detail) || c.message
          , S = new rP(k,(y = c.response) === null || y === void 0 ? void 0 : y.status,(E = (x = c.response) === null || x === void 0 ? void 0 : x.data) === null || E === void 0 ? void 0 : E.code,(b = c.response) === null || b === void 0 ? void 0 : b.data,c);
        return a == null || a(S),
        Promise.reject(S)
    }
    ),
    l
}
function iy(t, e) {
    return new Proxy({},{
        get(r, i) {
            if (!(typeof i != "string" || i === "then" || i.startsWith("_")))
                return sP(t, e, i)
        }
    })
}
function sP(t, e, r) {
    const i = `/apps/${e}/entities/${r}`;
    return {
        async list(a, l, c, f) {
            const h = {};
            return a && (h.sort = a),
            l && (h.limit = l),
            c && (h.skip = c),
            f && (h.fields = Array.isArray(f) ? f.join(",") : f),
            t.get(i, {
                params: h
            })
        },
        async filter(a, l, c, f, h) {
            const m = {
                q: JSON.stringify(a)
            };
            return l && (m.sort = l),
            c && (m.limit = c),
            f && (m.skip = f),
            h && (m.fields = Array.isArray(h) ? h.join(",") : h),
            t.get(i, {
                params: m
            })
        },
        async get(a) {
            return t.get(`${i}/${a}`)
        },
        async create(a) {
            return t.post(i, a)
        },
        async update(a, l) {
            return t.put(`${i}/${a}`, l)
        },
        async delete(a) {
            return t.delete(`${i}/${a}`)
        },
        async deleteMany(a) {
            return t.delete(i, {
                data: a
            })
        },
        async bulkCreate(a) {
            return t.post(`${i}/bulk`, a)
        },
        async importEntities(a) {
            const l = new FormData;
            return l.append("file", a, a.name),
            t.post(`${i}/import`, l, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
    }
}
function oy(t, e) {
    return new Proxy({},{
        get(r, i) {
            if (!(typeof i != "string" || i === "then" || i.startsWith("_")))
                return new Proxy({},{
                    get(a, l) {
                        if (!(typeof l != "string" || l === "then" || l.startsWith("_")))
                            return async c => {
                                if (typeof c == "string")
                                    throw new Error(`Integration ${l} must receive an object with named parameters, received: ${c}`);
                                let f, h;
                                return c instanceof FormData || c && Object.values(c).some(m => m instanceof File) ? (f = new FormData,
                                Object.keys(c).forEach(m => {
                                    c[m]instanceof File ? f.append(m, c[m], c[m].name) : typeof c[m] == "object" && c[m] !== null ? f.append(m, JSON.stringify(c[m])) : f.append(m, c[m])
                                }
                                ),
                                h = "multipart/form-data") : (f = c,
                                h = "application/json"),
                                i === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${l}`, f || c, {
                                    headers: {
                                        "Content-Type": h
                                    }
                                }) : t.post(`/apps/${e}/integration-endpoints/installable/${i}/integration-endpoints/${l}`, f || c, {
                                    headers: {
                                        "Content-Type": h
                                    }
                                })
                            }
                    }
                })
        }
    })
}
function iP(t, e, r, i) {
    return {
        async me() {
            return t.get(`/apps/${r}/entities/User/me`)
        },
        async updateMe(a) {
            return t.put(`/apps/${r}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            var l;
            if (typeof window > "u")
                throw new Error("Login method can only be used in a browser environment");
            const c = a ? new URL(a,window.location.origin).toString() : window.location.href
              , f = `${(l = i.appBaseUrl) !== null && l !== void 0 ? l : ""}/login?from_url=${encodeURIComponent(c)}`;
            //window.location.href = f
        },
        logout(a) {
            if (delete t.defaults.headers.common.Authorization,
            typeof window < "u" && window.localStorage)
                try {
                   // window.localStorage.removeItem("base44_access_token"),
                    //window.localStorage.removeItem("token")
                } catch (l) {
                    console.error("Failed to remove token from localStorage:", l)
                }
            typeof window < "u" && (a ? window.location.href = a : window.location.reload())
        },
        setToken(a, l=!0) {
            if (a && (//t.defaults.headers.common.Authorization = `Bearer ${a}`,
            //e.defaults.headers.common.Authorization = `Bearer ${a}`,
            l && typeof window < "u" && window.localStorage))
                try {
                   // window.localStorage.setItem("base44_access_token", a),
                   // window.localStorage.setItem("token", a)
                } catch (c) {
                    console.error("Failed to save token to localStorage:", c)
                }
        },
        async loginViaEmailPassword(a, l, c) {
            var f;
            try {
                const h = await t.post(`/apps/${r}/auth/login`, {
                    email: a,
                    password: l,
                    ...c && {
                        turnstile_token: c
                    }
                })
                  , {access_token: m, user: g} = h;
                return m && this.setToken(m),
                {
                    access_token: m,
                    user: g
                }
            } catch (h) {
                throw ((f = h.response) === null || f === void 0 ? void 0 : f.status) === 401 && await this.logout(),
                h
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(),
                !0
            } catch {
                return !1
            }
        },
        inviteUser(a, l) {
            return t.post(`/apps/${r}/users/invite-user`, {
                user_email: a,
                role: l
            })
        },
        register(a) {
            return t.post(`/apps/${r}/auth/register`, a)
        },
        verifyOtp({email: a, otpCode: l}) {
            return t.post(`/apps/${r}/auth/verify-otp`, {
                email: a,
                otp_code: l
            })
        },
        resendOtp(a) {
            return t.post(`/apps/${r}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return t.post(`/apps/${r}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({resetToken: a, newPassword: l}) {
            return t.post(`/apps/${r}/auth/reset-password`, {
                reset_token: a,
                new_password: l
            })
        },
        changePassword({userId: a, currentPassword: l, newPassword: c}) {
            return t.post(`/apps/${r}/auth/change-password`, {
                user_id: a,
                current_password: l,
                new_password: c
            })
        }
    }
}
function oP(t, e, r) {
    return {
        async getAccessToken(i) {
            const a = `/apps/${e}/auth/sso/accesstoken/${i}`
              , l = {};
            return r && (l["on-behalf-of"] = `Bearer ${r}`),
            t.get(a, {
                headers: l
            })
        }
    }
}
function aP(t, e) {
    return {
        async getAccessToken(r) {
            if (!r || typeof r != "string")
                throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${r}`)).access_token
        }
    }
}
function Pf(t={}) {
    const {storageKey: e="base44_access_token", paramName: r="access_token", saveToStorage: i=!0, removeFromUrl: a=!0} = t;
    let l = null;
    if (typeof window < "u" && window.location)
        try {
            const c = new URLSearchParams(window.location.search);
            if (l = c.get(r),
            l) {
                if (i && lP(l, {
                    storageKey: e
                }),
                a) {
                    c.delete(r);
                    const f = `${window.location.pathname}${c.toString() ? `?${c.toString()}` : ""}${window.location.hash}`;
                    window.history.replaceState({}, document.title, f)
                }
                return l
            }
        } catch (c) {
            console.error("Error retrieving token from URL:", c)
        }
    if (typeof window < "u" && window.localStorage)
        try {
            return l = window.localStorage.getItem(e),
            l
        } catch (c) {
            console.error("Error retrieving token from localStorage:", c)
        }
    return null
}
function lP(t, e) {
    const {storageKey: r="base44_access_token"} = e;
    if (typeof window > "u" || !window.localStorage || !t)
        return !1;
    try {
        return window.localStorage.setItem(r, t),
        window.localStorage.setItem("token", t),
        !0
    } catch (i) {
        return console.error("Error saving token to localStorage:", i),
        !1
    }
}
function ay(t, e) {
    return {
        async invoke(r, i) {
            if (typeof i == "string")
                throw new Error(`Function ${r} must receive an object with named parameters, received: ${i}`);
            let a, l;
            return i instanceof FormData || i && Object.values(i).some(c => c instanceof File) ? (a = new FormData,
            Object.keys(i).forEach(c => {
                i[c]instanceof File ? a.append(c, i[c], i[c].name) : typeof i[c] == "object" && i[c] !== null ? a.append(c, JSON.stringify(i[c])) : a.append(c, i[c])
            }
            ),
            l = "multipart/form-data") : (a = i,
            l = "application/json"),
            t.post(`/apps/${e}/functions/${r}`, a || i, {
                headers: {
                    "Content-Type": l
                }
            })
        }
    }
}
function ly({axios: t, socket: e, appId: r, serverUrl: i, token: a}) {
    const l = `/apps/${r}/agents`;
    return {
        getConversations: () => t.get(`${l}/conversations`),
        getConversation: E => t.get(`${l}/conversations/${E}`),
        listConversations: E => t.get(`${l}/conversations`, {
            params: E
        }),
        createConversation: E => t.post(`${l}/conversations`, E),
        addMessage: async (E, b) => {
            const k = `/agent-conversations/${E.id}`;
            return await e.updateModel(k, {
                ...E,
                messages: [...E.messages || [], b]
            }),
            t.post(`${l}/conversations/${E.id}/messages`, b)
        }
        ,
        subscribeToConversation: (E, b) => {
            const k = `/agent-conversations/${E}`;
            return e.subscribeToRoom(k, {
                connect: () => {}
                ,
                update_model: ({data: S}) => {
                    const _ = JSON.parse(S);
                    b == null || b(_)
                }
            })
        }
        ,
        getWhatsAppConnectURL: E => {
            const b = `${i}/api/apps/${r}/agents/${encodeURIComponent(E)}/whatsapp`
              , k = a ?? Pf();
            return k ? `${b}?token=${k}` : b
        }
    }
}
function uy(t, e) {
    const r = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            await t.post(`${r}/log-user-in-app/${i}`)
        },
        async fetchLogs(i={}) {
            return await t.get(r, {
                params: i
            })
        },
        async getStats(i={}) {
            return await t.get(`${r}/stats`, {
                params: i
            })
        }
    }
}
const Tn = Object.create(null);
Tn.open = "0";
Tn.close = "1";
Tn.ping = "2";
Tn.pong = "3";
Tn.message = "4";
Tn.upgrade = "5";
Tn.noop = "6";
const ul = Object.create(null);
Object.keys(Tn).forEach(t => {
    ul[Tn[t]] = t
}
);
const Ud = {
    type: "error",
    data: "parser error"
}
  , iw = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , ow = typeof ArrayBuffer == "function"
  , aw = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
  , Rf = ({type: t, data: e}, r, i) => iw && e instanceof Blob ? r ? i(e) : cy(e, i) : ow && (e instanceof ArrayBuffer || aw(e)) ? r ? i(e) : cy(new Blob([e]), i) : i(Tn[t] + (e || ""))
  , cy = (t, e) => {
    const r = new FileReader;
    return r.onload = function() {
        const i = r.result.split(",")[1];
        e("b" + (i || ""))
    }
    ,
    r.readAsDataURL(t)
}
;
function dy(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
}
let Zc;
function uP(t, e) {
    if (iw && t.data instanceof Blob)
        return t.data.arrayBuffer().then(dy).then(e);
    if (ow && (t.data instanceof ArrayBuffer || aw(t.data)))
        return e(dy(t.data));
    Rf(t, !1, r => {
        Zc || (Zc = new TextEncoder),
        e(Zc.encode(r))
    }
    )
}
const fy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , so = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < fy.length; t++)
    so[fy.charCodeAt(t)] = t;
const cP = t => {
    let e = t.length * .75, r = t.length, i, a = 0, l, c, f, h;
    t[t.length - 1] === "=" && (e--,
    t[t.length - 2] === "=" && e--);
    const m = new ArrayBuffer(e)
      , g = new Uint8Array(m);
    for (i = 0; i < r; i += 4)
        l = so[t.charCodeAt(i)],
        c = so[t.charCodeAt(i + 1)],
        f = so[t.charCodeAt(i + 2)],
        h = so[t.charCodeAt(i + 3)],
        g[a++] = l << 2 | c >> 4,
        g[a++] = (c & 15) << 4 | f >> 2,
        g[a++] = (f & 3) << 6 | h & 63;
    return m
}
  , dP = typeof ArrayBuffer == "function"
  , _f = (t, e) => {
    if (typeof t != "string")
        return {
            type: "message",
            data: lw(t, e)
        };
    const r = t.charAt(0);
    return r === "b" ? {
        type: "message",
        data: fP(t.substring(1), e)
    } : ul[r] ? t.length > 1 ? {
        type: ul[r],
        data: t.substring(1)
    } : {
        type: ul[r]
    } : Ud
}
  , fP = (t, e) => {
    if (dP) {
        const r = cP(t);
        return lw(r, e)
    } else
        return {
            base64: !0,
            data: t
        }
}
  , lw = (t, e) => {
    switch (e) {
    case "blob":
        return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
        return t instanceof ArrayBuffer ? t : t.buffer
    }
}
  , uw = ""
  , hP = (t, e) => {
    const r = t.length
      , i = new Array(r);
    let a = 0;
    t.forEach( (l, c) => {
        Rf(l, !1, f => {
            i[c] = f,
            ++a === r && e(i.join(uw))
        }
        )
    }
    )
}
  , pP = (t, e) => {
    const r = t.split(uw)
      , i = [];
    for (let a = 0; a < r.length; a++) {
        const l = _f(r[a], e);
        if (i.push(l),
        l.type === "error")
            break
    }
    return i
}
;
function mP() {
    return new TransformStream({
        transform(t, e) {
            uP(t, r => {
                const i = r.length;
                let a;
                if (i < 126)
                    a = new Uint8Array(1),
                    new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                    a = new Uint8Array(3);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 126),
                    l.setUint16(1, i)
                } else {
                    a = new Uint8Array(9);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 127),
                    l.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (a[0] |= 128),
                e.enqueue(a),
                e.enqueue(r)
            }
            )
        }
    })
}
let ed;
function Xa(t) {
    return t.reduce( (e, r) => e + r.length, 0)
}
function Ja(t, e) {
    if (t[0].length === e)
        return t.shift();
    const r = new Uint8Array(e);
    let i = 0;
    for (let a = 0; a < e; a++)
        r[a] = t[0][i++],
        i === t[0].length && (t.shift(),
        i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)),
    r
}
function gP(t, e) {
    ed || (ed = new TextDecoder);
    const r = [];
    let i = 0
      , a = -1
      , l = !1;
    return new TransformStream({
        transform(c, f) {
            for (r.push(c); ; ) {
                if (i === 0) {
                    if (Xa(r) < 1)
                        break;
                    const h = Ja(r, 1);
                    l = (h[0] & 128) === 128,
                    a = h[0] & 127,
                    a < 126 ? i = 3 : a === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (Xa(r) < 2)
                        break;
                    const h = Ja(r, 2);
                    a = new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),
                    i = 3
                } else if (i === 2) {
                    if (Xa(r) < 8)
                        break;
                    const h = Ja(r, 8)
                      , m = new DataView(h.buffer,h.byteOffset,h.length)
                      , g = m.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        f.enqueue(Ud);
                        break
                    }
                    a = g * Math.pow(2, 32) + m.getUint32(4),
                    i = 3
                } else {
                    if (Xa(r) < a)
                        break;
                    const h = Ja(r, a);
                    f.enqueue(_f(l ? h : ed.decode(h), e)),
                    i = 0
                }
                if (a === 0 || a > t) {
                    f.enqueue(Ud);
                    break
                }
            }
        }
    })
}
const cw = 4;
function et(t) {
    if (t)
        return yP(t)
}
function yP(t) {
    for (var e in et.prototype)
        t[e] = et.prototype[e];
    return t
}
et.prototype.on = et.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
    this
}
;
et.prototype.once = function(t, e) {
    function r() {
        this.off(t, r),
        e.apply(this, arguments)
    }
    return r.fn = e,
    this.on(t, r),
    this
}
;
et.prototype.off = et.prototype.removeListener = et.prototype.removeAllListeners = et.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var r = this._callbacks["$" + t];
    if (!r)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + t],
        this;
    for (var i, a = 0; a < r.length; a++)
        if (i = r[a],
        i === e || i.fn === e) {
            r.splice(a, 1);
            break
        }
    return r.length === 0 && delete this._callbacks["$" + t],
    this
}
;
et.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], i = 1; i < arguments.length; i++)
        e[i - 1] = arguments[i];
    if (r) {
        r = r.slice(0);
        for (var i = 0, a = r.length; i < a; ++i)
            r[i].apply(this, e)
    }
    return this
}
;
et.prototype.emitReserved = et.prototype.emit;
et.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + t] || []
}
;
et.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
}
;
const Fl = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, r) => r(e, 0)
  , Zt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , vP = "arraybuffer";
function dw(t, ...e) {
    return e.reduce( (r, i) => (t.hasOwnProperty(i) && (r[i] = t[i]),
    r), {})
}
const wP = Zt.setTimeout
  , xP = Zt.clearTimeout;
function Vl(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = wP.bind(Zt),
    t.clearTimeoutFn = xP.bind(Zt)) : (t.setTimeoutFn = Zt.setTimeout.bind(Zt),
    t.clearTimeoutFn = Zt.clearTimeout.bind(Zt))
}
const bP = 1.33;
function SP(t) {
    return typeof t == "string" ? kP(t) : Math.ceil((t.byteLength || t.size) * bP)
}
function kP(t) {
    let e = 0
      , r = 0;
    for (let i = 0, a = t.length; i < a; i++)
        e = t.charCodeAt(i),
        e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (i++,
        r += 4);
    return r
}
function fw() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function EP(t) {
    let e = "";
    for (let r in t)
        t.hasOwnProperty(r) && (e.length && (e += "&"),
        e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    return e
}
function TP(t) {
    let e = {}
      , r = t.split("&");
    for (let i = 0, a = r.length; i < a; i++) {
        let l = r[i].split("=");
        e[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
    }
    return e
}
class CP extends Error {
    constructor(e, r, i) {
        super(e),
        this.description = r,
        this.context = i,
        this.type = "TransportError"
    }
}
class Af extends et {
    constructor(e) {
        super(),
        this.writable = !1,
        Vl(this, e),
        this.opts = e,
        this.query = e.query,
        this.socket = e.socket,
        this.supportsBinary = !e.forceBase64
    }
    onError(e, r, i) {
        return super.emitReserved("error", new CP(e,r,i)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(e) {
        const r = _f(e, this.socket.binaryType);
        this.onPacket(r)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed",
        super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, r={}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const r = EP(e);
        return r.length ? "?" + r : ""
    }
}
class PP extends Af {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const r = () => {
            this.readyState = "paused",
            e()
        }
        ;
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++,
            this.once("pollComplete", function() {
                --i || r()
            })),
            this.writable || (i++,
            this.once("drain", function() {
                --i || r()
            }))
        } else
            r()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(e) {
        const r = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(),
            i.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(i)
        }
        ;
        pP(e, this.socket.binaryType).forEach(r),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1,
        hP(e, r => {
            this.doWrite(r, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const e = this.opts.secure ? "https" : "http"
          , r = this.query || {};
        return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = fw()),
        !this.supportsBinary && !r.sid && (r.b64 = 1),
        this.createUri(e, r)
    }
}
let hw = !1;
try {
    hw = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const RP = hw;
function _P() {}
class AP extends PP {
    constructor(e) {
        if (super(e),
        typeof location < "u") {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"),
            this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, r) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", r),
        i.on("error", (a, l) => {
            this.onError("xhr post error", a, l)
        }
        )
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)),
        e.on("error", (r, i) => {
            this.onError("xhr poll error", r, i)
        }
        ),
        this.pollXhr = e
    }
}
class Sn extends et {
    constructor(e, r, i) {
        super(),
        this.createRequest = e,
        Vl(this, i),
        this._opts = i,
        this._method = i.method || "GET",
        this._uri = r,
        this._data = i.data !== void 0 ? i.data : null,
        this._create()
    }
    _create() {
        var e;
        const r = dw(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(r);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(a) && i.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}
            (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i),
            "withCredentials"in i && (i.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
            i.onreadystatechange = () => {
                var a;
                i.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(i.getResponseHeader("set-cookie"))),
                i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }
                , 0))
            }
            ,
            i.send(this._data)
        } catch (a) {
            this.setTimeoutFn( () => {
                this._onError(a)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = Sn.requestsCount++,
        Sn.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = _P,
            e)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete Sn.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
Sn.requestsCount = 0;
Sn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", hy);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide"in Zt ? "pagehide" : "unload";
        addEventListener(t, hy, !1)
    }
}
function hy() {
    for (let t in Sn.requests)
        Sn.requests.hasOwnProperty(t) && Sn.requests[t].abort()
}
const NP = (function() {
    const t = pw({
        xdomain: !1
    });
    return t && t.responseType !== null
}
)();
class jP extends AP {
    constructor(e) {
        super(e);
        const r = e && e.forceBase64;
        this.supportsBinary = NP && !r
    }
    request(e={}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts),
        new Sn(pw,this.uri(),e)
    }
}
function pw(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || RP))
            return new XMLHttpRequest
    } catch {}
    if (!e)
        try {
            return new Zt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const mw = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class OP extends Af {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri()
          , r = this.opts.protocols
          , i = mw ? {} : dw(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, r, i)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }),
        this.ws.onmessage = e => this.onData(e.data),
        this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , a = r === e.length - 1;
            Rf(i, this.supportsBinary, l => {
                try {
                    this.doWrite(i, l)
                } catch {}
                a && Fl( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws"
          , r = this.query || {};
        return this.opts.timestampRequests && (r[this.opts.timestampParam] = fw()),
        this.supportsBinary || (r.b64 = 1),
        this.createUri(e, r)
    }
}
const td = Zt.WebSocket || Zt.MozWebSocket;
class LP extends OP {
    createSocket(e, r, i) {
        return mw ? new td(e,r,i) : r ? new td(e,r) : new td(e)
    }
    doWrite(e, r) {
        this.ws.send(r)
    }
}
class MP extends Af {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(e => {
            this.onError("webtransport error", e)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(e => {
                const r = gP(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , i = e.readable.pipeThrough(r).getReader()
                  , a = mP();
                a.readable.pipeTo(e.writable),
                this._writer = a.writable.getWriter();
                const l = () => {
                    i.read().then( ({done: f, value: h}) => {
                        f || (this.onPacket(h),
                        l())
                    }
                    ).catch(f => {}
                    )
                }
                ;
                l();
                const c = {
                    type: "open"
                };
                this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(c).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , a = r === e.length - 1;
            this._writer.write(i).then( () => {
                a && Fl( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const DP = {
    websocket: LP,
    webtransport: MP,
    polling: jP
}
  , IP = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , FP = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function zd(t) {
    if (t.length > 8e3)
        throw "URI too long";
    const e = t
      , r = t.indexOf("[")
      , i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    let a = IP.exec(t || "")
      , l = {}
      , c = 14;
    for (; c--; )
        l[FP[c]] = a[c] || "";
    return r != -1 && i != -1 && (l.source = e,
    l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"),
    l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    l.ipv6uri = !0),
    l.pathNames = VP(l, l.path),
    l.queryKey = BP(l, l.query),
    l
}
function VP(t, e) {
    const r = /\/{2,9}/g
      , i = e.replace(r, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1),
    e.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
}
function BP(t, e) {
    const r = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, a, l) {
        a && (r[a] = l)
    }),
    r
}
const $d = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , cl = [];
$d && addEventListener("offline", () => {
    cl.forEach(t => t())
}
, !1);
class Sr extends et {
    constructor(e, r) {
        if (super(),
        this.binaryType = vP,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        e && typeof e == "object" && (r = e,
        e = null),
        e) {
            const i = zd(e);
            r.hostname = i.host,
            r.secure = i.protocol === "https" || i.protocol === "wss",
            r.port = i.port,
            i.query && (r.query = i.query)
        } else
            r.host && (r.hostname = zd(r.host).host);
        Vl(this, r),
        this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:",
        r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
        this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        r.transports.forEach(i => {
            const a = i.prototype.name;
            this.transports.push(a),
            this._transportsByName[a] = i
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, r),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = TP(this.opts.query)),
        $d && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        cl.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(e) {
        const r = Object.assign({}, this.opts.query);
        r.EIO = cw,
        r.transport = e,
        this.id && (r.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const e = this.opts.rememberUpgrade && Sr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const r = this.createTransport(e);
        r.open(),
        this.setTransport(r)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = e,
        e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
    }
    onOpen() {
        this.readyState = "open",
        Sr.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", e),
            this.emitReserved("heartbeat"),
            e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const r = new Error("server error");
                r.code = e.data,
                this._onError(r);
                break;
            case "message":
                this.emitReserved("data", e.data),
                this.emitReserved("message", e.data);
                break
            }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e),
        this.id = e.sid,
        this.transport.query.sid = e.sid,
        this._pingInterval = e.pingInterval,
        this._pingTimeout = e.pingTimeout,
        this._maxPayload = e.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , e),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e),
            this._prevBufferLen = e.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let r = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const a = this.writeBuffer[i].data;
            if (a && (r += SP(a)),
            i > 0 && r > this._maxPayload)
                return this.writeBuffer.slice(0, i);
            r += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0,
        Fl( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        e
    }
    write(e, r, i) {
        return this._sendPacket("message", e, r, i),
        this
    }
    send(e, r, i) {
        return this._sendPacket("message", e, r, i),
        this
    }
    _sendPacket(e, r, i, a) {
        if (typeof r == "function" && (a = r,
        r = void 0),
        typeof i == "function" && (a = i,
        i = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        i = i || {},
        i.compress = i.compress !== !1;
        const l = {
            type: e,
            data: r,
            options: i
        };
        this.emitReserved("packetCreate", l),
        this.writeBuffer.push(l),
        a && this.once("flush", a),
        this.flush()
    }
    close() {
        const e = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , r = () => {
            this.off("upgrade", r),
            this.off("upgradeError", r),
            e()
        }
          , i = () => {
            this.once("upgrade", r),
            this.once("upgradeError", r)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }
        ) : this.upgrading ? i() : e()),
        this
    }
    _onError(e) {
        if (Sr.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", e),
        this._onClose("transport error", e)
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            $d && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const i = cl.indexOf(this._offlineEventListener);
                i !== -1 && cl.splice(i, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", e, r),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
Sr.protocol = cw;
class UP extends Sr {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++)
                this._probe(this._upgrades[e])
    }
    _probe(e) {
        let r = this.createTransport(e)
          , i = !1;
        Sr.priorWebsocketSuccess = !1;
        const a = () => {
            i || (r.send([{
                type: "ping",
                data: "probe"
            }]),
            r.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", r),
                        !r)
                            return;
                        Sr.priorWebsocketSuccess = r.name === "websocket",
                        this.transport.pause( () => {
                            i || this.readyState !== "closed" && (g(),
                            this.setTransport(r),
                            r.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", r),
                            r = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const x = new Error("probe error");
                        x.transport = r.name,
                        this.emitReserved("upgradeError", x)
                    }
            }
            ))
        }
        ;
        function l() {
            i || (i = !0,
            g(),
            r.close(),
            r = null)
        }
        const c = y => {
            const x = new Error("probe error: " + y);
            x.transport = r.name,
            l(),
            this.emitReserved("upgradeError", x)
        }
        ;
        function f() {
            c("transport closed")
        }
        function h() {
            c("socket closed")
        }
        function m(y) {
            r && y.name !== r.name && l()
        }
        const g = () => {
            r.removeListener("open", a),
            r.removeListener("error", c),
            r.removeListener("close", f),
            this.off("close", h),
            this.off("upgrading", m)
        }
        ;
        r.once("open", a),
        r.once("error", c),
        r.once("close", f),
        this.once("close", h),
        this.once("upgrading", m),
        this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn( () => {
            i || r.open()
        }
        , 200) : r.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades),
        super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const r = [];
        for (let i = 0; i < e.length; i++)
            ~this.transports.indexOf(e[i]) && r.push(e[i]);
        return r
    }
}
let zP = class extends UP {
    constructor(e, r={}) {
        const i = typeof e == "object" ? e : r;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(a => DP[a]).filter(a => !!a)),
        super(e, i)
    }
}
;
function $P(t, e="", r) {
    let i = t;
    r = r || typeof location < "u" && location,
    t == null && (t = r.protocol + "//" + r.host),
    typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t),
    /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t),
    i = zd(t)),
    i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    i.path = i.path || "/";
    const l = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + l + ":" + i.port + e,
    i.href = i.protocol + "://" + l + (r && r.port === i.port ? "" : ":" + i.port),
    i
}
const qP = typeof ArrayBuffer == "function"
  , HP = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
  , gw = Object.prototype.toString
  , WP = typeof Blob == "function" || typeof Blob < "u" && gw.call(Blob) === "[object BlobConstructor]"
  , KP = typeof File == "function" || typeof File < "u" && gw.call(File) === "[object FileConstructor]";
function Nf(t) {
    return qP && (t instanceof ArrayBuffer || HP(t)) || WP && t instanceof Blob || KP && t instanceof File
}
function dl(t, e) {
    if (!t || typeof t != "object")
        return !1;
    if (Array.isArray(t)) {
        for (let r = 0, i = t.length; r < i; r++)
            if (dl(t[r]))
                return !0;
        return !1
    }
    if (Nf(t))
        return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
        return dl(t.toJSON(), !0);
    for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && dl(t[r]))
            return !0;
    return !1
}
function QP(t) {
    const e = []
      , r = t.data
      , i = t;
    return i.data = qd(r, e),
    i.attachments = e.length,
    {
        packet: i,
        buffers: e
    }
}
function qd(t, e) {
    if (!t)
        return t;
    if (Nf(t)) {
        const r = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t),
        r
    } else if (Array.isArray(t)) {
        const r = new Array(t.length);
        for (let i = 0; i < t.length; i++)
            r[i] = qd(t[i], e);
        return r
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const r = {};
        for (const i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (r[i] = qd(t[i], e));
        return r
    }
    return t
}
function GP(t, e) {
    return t.data = Hd(t.data, e),
    delete t.attachments,
    t
}
function Hd(t, e) {
    if (!t)
        return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
            return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let r = 0; r < t.length; r++)
            t[r] = Hd(t[r], e);
    else if (typeof t == "object")
        for (const r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (t[r] = Hd(t[r], e));
    return t
}
const YP = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"]
  , XP = 5;
var _e;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT",
    t[t.DISCONNECT = 1] = "DISCONNECT",
    t[t.EVENT = 2] = "EVENT",
    t[t.ACK = 3] = "ACK",
    t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    t[t.BINARY_EVENT = 5] = "BINARY_EVENT",
    t[t.BINARY_ACK = 6] = "BINARY_ACK"
}
)(_e || (_e = {}));
class JP {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === _e.EVENT || e.type === _e.ACK) && dl(e) ? this.encodeAsBinary({
            type: e.type === _e.EVENT ? _e.BINARY_EVENT : _e.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let r = "" + e.type;
        return (e.type === _e.BINARY_EVENT || e.type === _e.BINARY_ACK) && (r += e.attachments + "-"),
        e.nsp && e.nsp !== "/" && (r += e.nsp + ","),
        e.id != null && (r += e.id),
        e.data != null && (r += JSON.stringify(e.data, this.replacer)),
        r
    }
    encodeAsBinary(e) {
        const r = QP(e)
          , i = this.encodeAsString(r.packet)
          , a = r.buffers;
        return a.unshift(i),
        a
    }
}
function py(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
class jf extends et {
    constructor(e) {
        super(),
        this.reviver = e
    }
    add(e) {
        let r;
        if (typeof e == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(e);
            const i = r.type === _e.BINARY_EVENT;
            i || r.type === _e.BINARY_ACK ? (r.type = i ? _e.EVENT : _e.ACK,
            this.reconstructor = new ZP(r),
            r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r)
        } else if (Nf(e) || e.base64)
            if (this.reconstructor)
                r = this.reconstructor.takeBinaryData(e),
                r && (this.reconstructor = null,
                super.emitReserved("decoded", r));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let r = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (_e[i.type] === void 0)
            throw new Error("unknown packet type " + i.type);
        if (i.type === _e.BINARY_EVENT || i.type === _e.BINARY_ACK) {
            const l = r + 1;
            for (; e.charAt(++r) !== "-" && r != e.length; )
                ;
            const c = e.substring(l, r);
            if (c != Number(c) || e.charAt(r) !== "-")
                throw new Error("Illegal attachments");
            i.attachments = Number(c)
        }
        if (e.charAt(r + 1) === "/") {
            const l = r + 1;
            for (; ++r && !(e.charAt(r) === "," || r === e.length); )
                ;
            i.nsp = e.substring(l, r)
        } else
            i.nsp = "/";
        const a = e.charAt(r + 1);
        if (a !== "" && Number(a) == a) {
            const l = r + 1;
            for (; ++r; ) {
                const c = e.charAt(r);
                if (c == null || Number(c) != c) {
                    --r;
                    break
                }
                if (r === e.length)
                    break
            }
            i.id = Number(e.substring(l, r + 1))
        }
        if (e.charAt(++r)) {
            const l = this.tryParse(e.substr(r));
            if (jf.isPayloadValid(i.type, l))
                i.data = l;
            else
                throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, r) {
        switch (e) {
        case _e.CONNECT:
            return py(r);
        case _e.DISCONNECT:
            return r === void 0;
        case _e.CONNECT_ERROR:
            return typeof r == "string" || py(r);
        case _e.EVENT:
        case _e.BINARY_EVENT:
            return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && YP.indexOf(r[0]) === -1);
        case _e.ACK:
        case _e.BINARY_ACK:
            return Array.isArray(r)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class ZP {
    constructor(e) {
        this.packet = e,
        this.buffers = [],
        this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments) {
            const r = GP(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            r
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
const e2 = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: jf,
    Encoder: JP,
    get PacketType() {
        return _e
    },
    protocol: XP
}, Symbol.toStringTag, {
    value: "Module"
}));
function dn(t, e, r) {
    return t.on(e, r),
    function() {
        t.off(e, r)
    }
}
const t2 = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class yw extends et {
    constructor(e, r, i) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = e,
        this.nsp = r,
        i && i.auth && (this.auth = i.auth),
        this._opts = Object.assign({}, i),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const e = this.io;
        this.subs = [dn(e, "open", this.onopen.bind(this)), dn(e, "packet", this.onpacket.bind(this)), dn(e, "error", this.onerror.bind(this)), dn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"),
        this.emit.apply(this, e),
        this
    }
    emit(e, ...r) {
        var i, a, l;
        if (t2.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
        if (r.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(r),
            this;
        const c = {
            type: _e.EVENT,
            data: r
        };
        if (c.options = {},
        c.options.compress = this.flags.compress !== !1,
        typeof r[r.length - 1] == "function") {
            const g = this.ids++
              , y = r.pop();
            this._registerAckCallback(g, y),
            c.id = g
        }
        const f = (a = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || a === void 0 ? void 0 : a.writable
          , h = this.connected && !(!((l = this.io.engine) === null || l === void 0) && l._hasPingExpired());
        return this.flags.volatile && !f || (h ? (this.notifyOutgoingListeners(c),
        this.packet(c)) : this.sendBuffer.push(c)),
        this.flags = {},
        this
    }
    _registerAckCallback(e, r) {
        var i;
        const a = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[e] = r;
            return
        }
        const l = this.io.setTimeoutFn( () => {
            delete this.acks[e];
            for (let f = 0; f < this.sendBuffer.length; f++)
                this.sendBuffer[f].id === e && this.sendBuffer.splice(f, 1);
            r.call(this, new Error("operation has timed out"))
        }
        , a)
          , c = (...f) => {
            this.io.clearTimeoutFn(l),
            r.apply(this, f)
        }
        ;
        c.withError = !0,
        this.acks[e] = c
    }
    emitWithAck(e, ...r) {
        return new Promise( (i, a) => {
            const l = (c, f) => c ? a(c) : i(f);
            l.withError = !0,
            r.push(l),
            this.emit(e, ...r)
        }
        )
    }
    _addToQueue(e) {
        let r;
        typeof e[e.length - 1] == "function" && (r = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push( (a, ...l) => i !== this._queue[0] ? void 0 : (a !== null ? i.tryCount > this._opts.retries && (this._queue.shift(),
        r && r(a)) : (this._queue.shift(),
        r && r(null, ...l)),
        i.pending = !1,
        this._drainQueue())),
        this._queue.push(i),
        this._drainQueue()
    }
    _drainQueue(e=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const r = this._queue[0];
        r.pending && !e || (r.pending = !0,
        r.tryCount++,
        this.flags = r.flags,
        this.emit.apply(this, r.args))
    }
    packet(e) {
        e.nsp = this.nsp,
        this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: _e.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, r) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", e, r),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e],
                i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(e) {
        if (e.nsp === this.nsp)
            switch (e.type) {
            case _e.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case _e.EVENT:
            case _e.BINARY_EVENT:
                this.onevent(e);
                break;
            case _e.ACK:
            case _e.BINARY_ACK:
                this.onack(e);
                break;
            case _e.DISCONNECT:
                this.ondisconnect();
                break;
            case _e.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data,
                this.emitReserved("connect_error", i);
                break
            }
    }
    onevent(e) {
        const r = e.data || [];
        e.id != null && r.push(this.ack(e.id)),
        this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const r = this._anyListeners.slice();
            for (const i of r)
                i.apply(this, e)
        }
        super.emit.apply(this, e),
        this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const r = this;
        let i = !1;
        return function(...a) {
            i || (i = !0,
            r.packet({
                type: _e.ACK,
                id: e,
                data: a
            }))
        }
    }
    onack(e) {
        const r = this.acks[e.id];
        typeof r == "function" && (delete this.acks[e.id],
        r.withError && e.data.unshift(null),
        r.apply(this, e.data))
    }
    onconnect(e, r) {
        this.id = e,
        this.recovered = r && this._pid === r,
        this._pid = r,
        this.connected = !0,
        this.emitBuffered(),
        this.emitReserved("connect"),
        this._drainQueue(!0)
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e),
            this.packet(e)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: _e.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(e) {
        return this.flags.timeout = e,
        this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(e),
        this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(e),
        this
    }
    offAny(e) {
        if (!this._anyListeners)
            return this;
        if (e) {
            const r = this._anyListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i])
                    return r.splice(i, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(e),
        this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(e),
        this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners)
            return this;
        if (e) {
            const r = this._anyOutgoingListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i])
                    return r.splice(i, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const r = this._anyOutgoingListeners.slice();
            for (const i of r)
                i.apply(this, e.data)
        }
    }
}
function ui(t) {
    t = t || {},
    this.ms = t.min || 100,
    this.max = t.max || 1e4,
    this.factor = t.factor || 2,
    this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
    this.attempts = 0
}
ui.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random()
          , r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r
    }
    return Math.min(t, this.max) | 0
}
;
ui.prototype.reset = function() {
    this.attempts = 0
}
;
ui.prototype.setMin = function(t) {
    this.ms = t
}
;
ui.prototype.setMax = function(t) {
    this.max = t
}
;
ui.prototype.setJitter = function(t) {
    this.jitter = t
}
;
class Wd extends et {
    constructor(e, r) {
        var i;
        super(),
        this.nsps = {},
        this.subs = [],
        e && typeof e == "object" && (r = e,
        e = void 0),
        r = r || {},
        r.path = r.path || "/socket.io",
        this.opts = r,
        Vl(this, r),
        this.reconnection(r.reconnection !== !1),
        this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(r.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
        this.randomizationFactor((i = r.randomizationFactor) !== null && i !== void 0 ? i : .5),
        this.backoff = new ui({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(r.timeout == null ? 2e4 : r.timeout),
        this._readyState = "closed",
        this.uri = e;
        const a = r.parser || e2;
        this.encoder = new a.Encoder,
        this.decoder = new a.Decoder,
        this._autoConnect = r.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e,
        e || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e,
        this)
    }
    reconnectionDelay(e) {
        var r;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e,
        (r = this.backoff) === null || r === void 0 || r.setMin(e),
        this)
    }
    randomizationFactor(e) {
        var r;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e,
        (r = this.backoff) === null || r === void 0 || r.setJitter(e),
        this)
    }
    reconnectionDelayMax(e) {
        var r;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e,
        (r = this.backoff) === null || r === void 0 || r.setMax(e),
        this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new zP(this.uri,this.opts);
        const r = this.engine
          , i = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const a = dn(r, "open", function() {
            i.onopen(),
            e && e()
        })
          , l = f => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", f),
            e ? e(f) : this.maybeReconnectOnOpen()
        }
          , c = dn(r, "error", l);
        if (this._timeout !== !1) {
            const f = this._timeout
              , h = this.setTimeoutFn( () => {
                a(),
                l(new Error("timeout")),
                r.close()
            }
            , f);
            this.opts.autoUnref && h.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(h)
            }
            )
        }
        return this.subs.push(a),
        this.subs.push(c),
        this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const e = this.engine;
        this.subs.push(dn(e, "ping", this.onping.bind(this)), dn(e, "data", this.ondata.bind(this)), dn(e, "error", this.onerror.bind(this)), dn(e, "close", this.onclose.bind(this)), dn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (r) {
            this.onclose("parse error", r)
        }
    }
    ondecoded(e) {
        Fl( () => {
            this.emitReserved("packet", e)
        }
        , this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, r) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new yw(this,e,r),
        this.nsps[e] = i),
        i
    }
    _destroy(e) {
        const r = Object.keys(this.nsps);
        for (const i of r)
            if (this.nsps[i].active)
                return;
        this._close()
    }
    _packet(e) {
        const r = this.encoder.encode(e);
        for (let i = 0; i < r.length; i++)
            this.engine.write(r[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, r) {
        var i;
        this.cleanup(),
        (i = this.engine) === null || i === void 0 || i.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", e, r),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const r = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn( () => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                !e.skipReconnect && e.open(a => {
                    a ? (e._reconnecting = !1,
                    e.reconnect(),
                    this.emitReserved("reconnect_error", a)) : e.onreconnect()
                }
                ))
            }
            , r);
            this.opts.autoUnref && i.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(i)
            }
            )
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", e)
    }
}
const Zi = {};
function fl(t, e) {
    typeof t == "object" && (e = t,
    t = void 0),
    e = e || {};
    const r = $P(t, e.path || "/socket.io")
      , i = r.source
      , a = r.id
      , l = r.path
      , c = Zi[a] && l in Zi[a].nsps
      , f = e.forceNew || e["force new connection"] || e.multiplex === !1 || c;
    let h;
    return f ? h = new Wd(i,e) : (Zi[a] || (Zi[a] = new Wd(i,e)),
    h = Zi[a]),
    r.query && !e.query && (e.query = r.queryKey),
    h.socket(r.path, e)
}
Object.assign(fl, {
    Manager: Wd,
    Socket: yw,
    io: fl,
    connect: fl
});
function my(t, e) {
    var r;
    const i = fl(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: {
            app_id: t.appId,
            token: (r = t.token) !== null && r !== void 0 ? r : Pf()
        }
    });
    return i.on("connect", async () => {
        var a;
        return console.log("connect", i.id),
        (a = e.connect) === null || a === void 0 ? void 0 : a.call(e)
    }
    ),
    i.on("update_model", async a => {
        var l;
        return (l = e.update_model) === null || l === void 0 ? void 0 : l.call(e, a)
    }
    ),
    i.on("error", async a => {
        var l;
        return (l = e.error) === null || l === void 0 ? void 0 : l.call(e, a)
    }
    ),
    i.on("connect_error", async a => {
        var l;
        return console.error("connect_error", a),
        (l = e.error) === null || l === void 0 ? void 0 : l.call(e, a)
    }
    ),
    i
}
function n2({config: t}) {
    let e = {
        ...t
    };
    const r = {}
      , i = {
        connect: async () => {
            const E = [];
            Object.keys(r).forEach(b => {
                h(b);
                const k = y(b);
                k == null || k.forEach( ({connect: S}) => {
                    const _ = async () => S == null ? void 0 : S();
                    E.push(_())
                }
                )
            }
            ),
            await Promise.all(E)
        }
        ,
        update_model: async E => {
            const k = y(E.room).map(S => {
                var _;
                return (_ = S.update_model) === null || _ === void 0 ? void 0 : _.call(S, E)
            }
            );
            await Promise.all(k)
        }
        ,
        error: async E => {
            console.error("error", E);
            const b = Object.values(r).flat().map(k => {
                var S;
                return (S = k.error) === null || S === void 0 ? void 0 : S.call(k, E)
            }
            );
            await Promise.all(b)
        }
    };
    let a = my(t, i);
    function l() {
        c()
    }
    function c() {
        a && a.disconnect()
    }
    function f(E) {
        l(),
        e = {
            ...e,
            ...E
        },
        a = my(e, i)
    }
    function h(E) {
        a.emit("join", E)
    }
    function m(E) {
        a.emit("leave", E)
    }
    async function g(E, b) {
        var k;
        const S = JSON.stringify(b);
        return (k = i.update_model) === null || k === void 0 ? void 0 : k.call(i, {
            room: E,
            data: S
        })
    }
    function y(E) {
        return r[E]
    }
    return {
        socket: a,
        subscribeToRoom: (E, b) => (r[E] || (h(E),
        r[E] = []),
        r[E].push(b),
        () => {
            var k, S;
            r[E] = (S = (k = r[E]) === null || k === void 0 ? void 0 : k.filter(_ => _ !== b)) !== null && S !== void 0 ? S : [],
            r[E].length === 0 && m(E)
        }
        ),
        updateConfig: f,
        updateModel: g,
        disconnect: c
    }
}
function r2(t) {
    const {serverUrl: e="https://base44.app", appId: r, token: i, serviceToken: a, requiresAuth: l=!1, appBaseUrl: c, options: f, functionsVersion: h, headers: m} = t
      , y = n2({
        config: {
            serverUrl: e,
            mountPath: "/ws-user-apps/socket.io/",
            transports: ["websocket"],
            appId: r,
            token: i
        }
    })
      , x = {
        ...m,
        "X-App-Id": String(r)
    }
      , E = h ? {
        ...x,
        "Base44-Functions-Version": h
    } : x
      , b = ro({
        baseURL: `${e}/api`,
        headers: x,
        token: i,
        onError: f == null ? void 0 : f.onError
    })
      , k = ro({
        baseURL: `${e}/api`,
        headers: E,
        token: i,
        interceptResponses: !1,
        onError: f == null ? void 0 : f.onError
    })
      , S = ro({
        baseURL: `${e}/api`,
        headers: x,
        token: a,
        onError: f == null ? void 0 : f.onError
    })
      , _ = ro({
        baseURL: `${e}/api`,
        headers: E,
        token: a,
        interceptResponses: !1
    })
      , F = {
        entities: iy(b, r),
        integrations: oy(b, r),
        auth: iP(b, k, r, {
            appBaseUrl: c
        }),
        functions: ay(k, r),
        agents: ly({
            axios: b,
            socket: y,
            appId: r,
            serverUrl: e,
            token: i
        }),
        appLogs: uy(b, r),
        cleanup: () => {
            y.disconnect()
        }
    }
      , M = {
        entities: iy(S, r),
        integrations: oy(S, r),
        sso: oP(S, r, i),
        connectors: aP(S, r),
        functions: ay(_, r),
        agents: ly({
            axios: S,
            socket: y,
            appId: r,
            serverUrl: e,
            token: i
        }),
        appLogs: uy(S, r),
        cleanup: () => {
            y.disconnect()
        }
    };
    if (typeof window < "u") {
        const U = i || Pf();
        U && F.auth.setToken(U)
    }
    return l && typeof window < "u" && setTimeout(async () => {
        try {
            await F.auth.isAuthenticated() || F.auth.redirectToLogin(window.location.href)
        } catch (U) {
            console.error("Authentication check failed:", U),
            F.auth.redirectToLogin(window.location.href)
        }
    }
    , 0),
    {
        ...F,
        setToken(U) {
            F.auth.setToken(U),
            y.updateConfig({
                token: U
            })
        },
        getConfig() {
            return {
                serverUrl: e,
                appId: r,
                requiresAuth: l
            }
        },
        get asServiceRole() {
            if (!a)
                throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return M
        }
    }
}
const vw = typeof window > "u"
  , s2 = vw ? {
    localStorage: new Map
} : window
  , nd = s2.localStorage
  , i2 = t => t.replace(/([A-Z])/g, "_$1").toLowerCase()
  , eo = (t, {defaultValue: e=void 0, removeFromUrl: r=!1}={}) => {
    if (vw)
        return e;
    const i = `base44_${i2(t)}`
      , a = new URLSearchParams(window.location.search)
      , l = a.get(t);
    if (r) {
        a.delete(t);
        const f = `${window.location.pathname}${a.toString() ? `?${a.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, f)
    }
    if (l)
        return nd.setItem(i, l),
        l;
    if (e)
        return nd.setItem(i, e),
        e;
    const c = nd.getItem(i);
    return c || null
}
  , o2 = () => ({
    appId: eo("app_id", {
        defaultValue: "692ac7e90dc2ab3b5d25674e"
    }),
    serverUrl: eo("server_url", {
        defaultValue: "https://base44.app"
    }),
    token: eo("access_token", {
        removeFromUrl: !0
    }),
    fromUrl: eo("from_url", {
        defaultValue: window.location.href
    }),
    functionsVersion: eo("functions_version")
})
  , Ms = {
    ...o2()
}
  , {appId: a2, serverUrl: l2, token: u2, functionsVersion: c2} = Ms
  , Ds = r2({
    appId: a2,
    serverUrl: l2,
    token: u2,
    functionsVersion: c2,
    requiresAuth: !1
})
  , ww = N.createContext()
  , d2 = ({children: t}) => {
    const [e,r] = N.useState(null)
      , [i,a] = N.useState(!1)
      , [l,c] = N.useState(!0)
      , [f,h] = N.useState(!0)
      , [m,g] = N.useState(null)
      , [y,x] = N.useState(null);
    N.useEffect( () => {
        E()
    }
    , []);
    const E = async () => {
        var _, F;
        try {
            h(!0),
            g(null);
            const M = ro({
                baseURL: `${Ms.serverUrl}/api/apps/public`,
                headers: {
                    "X-App-Id": Ms.appId
                },
                token: Ms.token,
                interceptResponses: !0
            });
            try {
                const V = await M.get(`/prod/public-settings/by-id/${Ms.appId}`);
                x(V),
                Ms.token ? await b() : (c(!1),
                a(!1)),
                h(!1)
            } catch (V) {
    // Base44 app-state check disabled for static deployment
    h(!1);
    c(!1);
}

        } catch (M) {
            console.error("Unexpected error:", M),
            g({
                type: "unknown",
                message: M.message || "An unexpected error occurred"
            }),
            h(!1),
            c(!1)
        }
    }
      , b = async () => {
        try {
            c(!0);
            const _ = await Ds.auth.me();
            r(_),
            a(!0),
            c(!1)
        } catch (_) {
            console.error("User auth check failed:", _),
            c(!1),
            a(!1),
            (_.status === 401 || _.status === 403) && g({
                type: "auth_required",
                message: "Authentication required"
            })
        }
    }
      , k = (_=!0) => {
        r(null),
        a(!1),
        _ ? Ds.auth.logout(window.location.href) : Ds.auth.logout()
    }
      , S = () => {
        Ds.auth.redirectToLogin(window.location.href)
    }
    ;
    return w.jsx(ww.Provider, {
        value: {
            user: e,
            isAuthenticated: i,
            isLoadingAuth: l,
            isLoadingPublicSettings: f,
            authError: m,
            appPublicSettings: y,
            logout: k,
            navigateToLogin: S,
            checkAppState: E
        },
        children: t
    })
}
  , xw = () => {
    const t = N.useContext(ww);
    if (!t)
        throw new Error("useAuth must be used within an AuthProvider");
    return t
}
;
function gy(t, e) {
    if (typeof t == "function")
        return t(e);
    t != null && (t.current = e)
}
function f2(...t) {
    return e => {
        let r = !1;
        const i = t.map(a => {
            const l = gy(a, e);
            return !r && typeof l == "function" && (r = !0),
            l
        }
        );
        if (r)
            return () => {
                for (let a = 0; a < i.length; a++) {
                    const l = i[a];
                    typeof l == "function" ? l() : gy(t[a], null)
                }
            }
    }
}
function bw(t) {
    const e = p2(t)
      , r = N.forwardRef( (i, a) => {
        const {children: l, ...c} = i
          , f = N.Children.toArray(l)
          , h = f.find(g2);
        if (h) {
            const m = h.props.children
              , g = f.map(y => y === h ? N.Children.count(m) > 1 ? N.Children.only(null) : N.isValidElement(m) ? m.props.children : null : y);
            return w.jsx(e, {
                ...c,
                ref: a,
                children: N.isValidElement(m) ? N.cloneElement(m, void 0, g) : null
            })
        }
        return w.jsx(e, {
            ...c,
            ref: a,
            children: l
        })
    }
    );
    return r.displayName = `${t}.Slot`,
    r
}
var h2 = bw("Slot");
function p2(t) {
    const e = N.forwardRef( (r, i) => {
        const {children: a, ...l} = r;
        if (N.isValidElement(a)) {
            const c = v2(a)
              , f = y2(l, a.props);
            return a.type !== N.Fragment && (f.ref = i ? f2(i, c) : c),
            N.cloneElement(a, f)
        }
        return N.Children.count(a) > 1 ? N.Children.only(null) : null
    }
    );
    return e.displayName = `${t}.SlotClone`,
    e
}
var m2 = Symbol("radix.slottable");
function g2(t) {
    return N.isValidElement(t) && typeof t.type == "function" && "__radixId"in t.type && t.type.__radixId === m2
}
function y2(t, e) {
    const r = {
        ...e
    };
    for (const i in e) {
        const a = t[i]
          , l = e[i];
        /^on[A-Z]/.test(i) ? a && l ? r[i] = (...f) => {
            const h = l(...f);
            return a(...f),
            h
        }
        : a && (r[i] = a) : i === "style" ? r[i] = {
            ...a,
            ...l
        } : i === "className" && (r[i] = [a, l].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...r
    }
}
function v2(t) {
    var i, a;
    let e = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get
      , r = e && "isReactWarning"in e && e.isReactWarning;
    return r ? t.ref : (e = (a = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : a.get,
    r = e && "isReactWarning"in e && e.isReactWarning,
    r ? t.props.ref : t.props.ref || t.ref)
}
const w2 = Rl("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , os = N.forwardRef( ({className: t, variant: e, size: r, asChild: i=!1, ...a}, l) => {
    const c = i ? h2 : "button";
    return w.jsx(c, {
        className: Cn(w2({
            variant: e,
            size: r,
            className: t
        })),
        ref: l,
        ...a
    })
}
);
os.displayName = "Button";
const Bl = N.createContext(null);
function Of(t) {
    const e = N.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const Lf = N.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
});
class x2 extends N.Component {
    getSnapshotBeforeUpdate(e) {
        const r = this.props.childRef.current;
        if (r && e.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = r.offsetHeight || 0,
            i.width = r.offsetWidth || 0,
            i.top = r.offsetTop,
            i.left = r.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function b2({children: t, isPresent: e}) {
    const r = N.useId()
      , i = N.useRef(null)
      , a = N.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: l} = N.useContext(Lf);
    return N.useInsertionEffect( () => {
        const {width: c, height: f, top: h, left: m} = a.current;
        if (e || !i.current || !c || !f)
            return;
        i.current.dataset.motionPopId = r;
        const g = document.createElement("style");
        return l && (g.nonce = l),
        document.head.appendChild(g),
        g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `),
        () => {
            document.head.removeChild(g)
        }
    }
    , [e]),
    w.jsx(x2, {
        isPresent: e,
        childRef: i,
        sizeRef: a,
        children: N.cloneElement(t, {
            ref: i
        })
    })
}
const S2 = ({children: t, initial: e, isPresent: r, onExitComplete: i, custom: a, presenceAffectsLayout: l, mode: c}) => {
    const f = Of(k2)
      , h = N.useId()
      , m = N.useCallback(y => {
        f.set(y, !0);
        for (const x of f.values())
            if (!x)
                return;
        i && i()
    }
    , [f, i])
      , g = N.useMemo( () => ({
        id: h,
        initial: e,
        isPresent: r,
        custom: a,
        onExitComplete: m,
        register: y => (f.set(y, !1),
        () => f.delete(y))
    }), l ? [Math.random(), m] : [r, m]);
    return N.useMemo( () => {
        f.forEach( (y, x) => f.set(x, !1))
    }
    , [r]),
    N.useEffect( () => {
        !r && !f.size && i && i()
    }
    , [r]),
    c === "popLayout" && (t = w.jsx(b2, {
        isPresent: r,
        children: t
    })),
    w.jsx(Bl.Provider, {
        value: g,
        children: t
    })
}
;
function k2() {
    return new Map
}
const Mf = N.createContext({})
  , Bt = t => t;
let Sw = Bt;
function Df(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const ni = (t, e, r) => {
    const i = e - t;
    return i === 0 ? 1 : (r - t) / i
}
  , Bn = t => t * 1e3
  , Un = t => t / 1e3
  , Za = t => t.key || "";
function yy(t) {
    const e = [];
    return N.Children.forEach(t, r => {
        N.isValidElement(r) && e.push(r)
    }
    ),
    e
}
const If = typeof window < "u"
  , kw = If ? N.useLayoutEffect : N.useEffect
  , E2 = ({children: t, exitBeforeEnter: e, custom: r, initial: i=!0, onExitComplete: a, presenceAffectsLayout: l=!0, mode: c="sync"}) => {
    const f = N.useMemo( () => yy(t), [t])
      , h = f.map(Za)
      , m = N.useRef(!0)
      , g = N.useRef(f)
      , y = Of( () => new Map)
      , [x,E] = N.useState(f)
      , [b,k] = N.useState(f);
    kw( () => {
        m.current = !1,
        g.current = f;
        for (let F = 0; F < b.length; F++) {
            const M = Za(b[F]);
            h.includes(M) ? y.delete(M) : y.get(M) !== !0 && y.set(M, !1)
        }
    }
    , [b, h.length, h.join("-")]);
    const S = [];
    if (f !== x) {
        let F = [...f];
        for (let M = 0; M < b.length; M++) {
            const V = b[M]
              , U = Za(V);
            h.includes(U) || (F.splice(M, 0, V),
            S.push(V))
        }
        c === "wait" && S.length && (F = S),
        k(yy(F)),
        E(f);
        return
    }
    const {forceRender: _} = N.useContext(Mf);
    return w.jsx(w.Fragment, {
        children: b.map(F => {
            const M = Za(F)
              , V = f === b || h.includes(M)
              , U = () => {
                if (y.has(M))
                    y.set(M, !0);
                else
                    return;
                let Y = !0;
                y.forEach(ne => {
                    ne || (Y = !1)
                }
                ),
                Y && (_ == null || _(),
                k(g.current),
                a && a())
            }
            ;
            return w.jsx(S2, {
                isPresent: V,
                initial: !m.current || i ? void 0 : !1,
                custom: V ? void 0 : r,
                presenceAffectsLayout: l,
                mode: c,
                onExitComplete: V ? void 0 : U,
                children: F
            }, M)
        }
        )
    })
}
  , T2 = {
    useManualTiming: !1
};
function C2(t) {
    let e = new Set
      , r = new Set
      , i = !1
      , a = !1;
    const l = new WeakSet;
    let c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function f(m) {
        l.has(m) && (h.schedule(m),
        t()),
        m(c)
    }
    const h = {
        schedule: (m, g=!1, y=!1) => {
            const E = y && i ? e : r;
            return g && l.add(m),
            E.has(m) || E.add(m),
            m
        }
        ,
        cancel: m => {
            r.delete(m),
            l.delete(m)
        }
        ,
        process: m => {
            if (c = m,
            i) {
                a = !0;
                return
            }
            i = !0,
            [e,r] = [r, e],
            e.forEach(f),
            e.clear(),
            i = !1,
            a && (a = !1,
            h.process(m))
        }
    };
    return h
}
const el = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , P2 = 40;
function Ew(t, e) {
    let r = !1
      , i = !0;
    const a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = () => r = !0
      , c = el.reduce( (_, F) => (_[F] = C2(l),
    _), {})
      , {read: f, resolveKeyframes: h, update: m, preRender: g, render: y, postRender: x} = c
      , E = () => {
        const _ = performance.now();
        r = !1,
        a.delta = i ? 1e3 / 60 : Math.max(Math.min(_ - a.timestamp, P2), 1),
        a.timestamp = _,
        a.isProcessing = !0,
        f.process(a),
        h.process(a),
        m.process(a),
        g.process(a),
        y.process(a),
        x.process(a),
        a.isProcessing = !1,
        r && e && (i = !1,
        t(E))
    }
      , b = () => {
        r = !0,
        i = !0,
        a.isProcessing || t(E)
    }
    ;
    return {
        schedule: el.reduce( (_, F) => {
            const M = c[F];
            return _[F] = (V, U=!1, Y=!1) => (r || b(),
            M.schedule(V, U, Y)),
            _
        }
        , {}),
        cancel: _ => {
            for (let F = 0; F < el.length; F++)
                c[el[F]].cancel(_)
        }
        ,
        state: a,
        steps: c
    }
}
const {schedule: Ue, cancel: kr, state: ft, steps: rd} = Ew(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Bt, !0)
  , Tw = N.createContext({
    strict: !1
})
  , vy = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , ri = {};
for (const t in vy)
    ri[t] = {
        isEnabled: e => vy[t].some(r => !!e[r])
    };
function R2(t) {
    for (const e in t)
        ri[e] = {
            ...ri[e],
            ...t[e]
        }
}
const _2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function bl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || _2.has(t)
}
let Cw = t => !bl(t);
function A2(t) {
    t && (Cw = e => e.startsWith("on") ? !bl(e) : t(e))
}
try {
    A2(require("@emotion/is-prop-valid").default)
} catch {}
function N2(t, e, r) {
    const i = {};
    for (const a in t)
        a === "values" && typeof t.values == "object" || (Cw(a) || r === !0 && bl(a) || !e && !bl(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i
}
function j2(t) {
    if (typeof Proxy > "u")
        return t;
    const e = new Map
      , r = (...i) => t(...i);
    return new Proxy(r,{
        get: (i, a) => a === "create" ? t : (e.has(a) || e.set(a, t(a)),
        e.get(a))
    })
}
const Ul = N.createContext({});
function go(t) {
    return typeof t == "string" || Array.isArray(t)
}
function zl(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Ff = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Vf = ["initial", ...Ff];
function $l(t) {
    return zl(t.animate) || Vf.some(e => go(t[e]))
}
function Pw(t) {
    return !!($l(t) || t.variants)
}
function O2(t, e) {
    if ($l(t)) {
        const {initial: r, animate: i} = t;
        return {
            initial: r === !1 || go(r) ? r : void 0,
            animate: go(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function L2(t) {
    const {initial: e, animate: r} = O2(t, N.useContext(Ul));
    return N.useMemo( () => ({
        initial: e,
        animate: r
    }), [wy(e), wy(r)])
}
function wy(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const M2 = Symbol.for("motionComponentSymbol");
function Is(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function D2(t, e, r) {
    return N.useCallback(i => {
        i && t.mount && t.mount(i),
        e && (i ? e.mount(i) : e.unmount()),
        r && (typeof r == "function" ? r(i) : Is(r) && (r.current = i))
    }
    , [e])
}
const Bf = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , I2 = "framerAppearId"
  , Rw = "data-" + Bf(I2)
  , {schedule: Uf} = Ew(queueMicrotask, !1)
  , _w = N.createContext({});
function F2(t, e, r, i, a) {
    var l, c;
    const {visualElement: f} = N.useContext(Ul)
      , h = N.useContext(Tw)
      , m = N.useContext(Bl)
      , g = N.useContext(Lf).reducedMotion
      , y = N.useRef(null);
    i = i || h.renderer,
    !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: f,
        props: r,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const x = y.current
      , E = N.useContext(_w);
    x && !x.projection && a && (x.type === "html" || x.type === "svg") && V2(y.current, r, a, E);
    const b = N.useRef(!1);
    N.useInsertionEffect( () => {
        x && b.current && x.update(r, m)
    }
    );
    const k = r[Rw]
      , S = N.useRef(!!k && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, k)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, k)));
    return kw( () => {
        x && (b.current = !0,
        window.MotionIsMounted = !0,
        x.updateFeatures(),
        Uf.render(x.render),
        S.current && x.animationState && x.animationState.animateChanges())
    }
    ),
    N.useEffect( () => {
        x && (!S.current && x.animationState && x.animationState.animateChanges(),
        S.current && (queueMicrotask( () => {
            var _;
            (_ = window.MotionHandoffMarkAsComplete) === null || _ === void 0 || _.call(window, k)
        }
        ),
        S.current = !1))
    }
    ),
    x
}
function V2(t, e, r, i) {
    const {layoutId: a, layout: l, drag: c, dragConstraints: f, layoutScroll: h, layoutRoot: m} = e;
    t.projection = new r(t.latestValues,e["data-framer-portal-id"] ? void 0 : Aw(t.parent)),
    t.projection.setOptions({
        layoutId: a,
        layout: l,
        alwaysMeasureLayout: !!c || f && Is(f),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
    })
}
function Aw(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : Aw(t.parent)
}
function B2({preloadedFeatures: t, createVisualElement: e, useRender: r, useVisualState: i, Component: a}) {
    var l, c;
    t && R2(t);
    function f(m, g) {
        let y;
        const x = {
            ...N.useContext(Lf),
            ...m,
            layoutId: U2(m)
        }
          , {isStatic: E} = x
          , b = L2(m)
          , k = i(m, E);
        if (!E && If) {
            z2();
            const S = $2(x);
            y = S.MeasureLayout,
            b.visualElement = F2(a, k, x, e, S.ProjectionNode)
        }
        return w.jsxs(Ul.Provider, {
            value: b,
            children: [y && b.visualElement ? w.jsx(y, {
                visualElement: b.visualElement,
                ...x
            }) : null, r(a, m, D2(k, b.visualElement, g), k, E, b.visualElement)]
        })
    }
    f.displayName = `motion.${typeof a == "string" ? a : `create(${(c = (l = a.displayName) !== null && l !== void 0 ? l : a.name) !== null && c !== void 0 ? c : ""})`}`;
    const h = N.forwardRef(f);
    return h[M2] = a,
    h
}
function U2({layoutId: t}) {
    const e = N.useContext(Mf).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function z2(t, e) {
    N.useContext(Tw).strict
}
function $2(t) {
    const {drag: e, layout: r} = ri;
    if (!e && !r)
        return {};
    const i = {
        ...e,
        ...r
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const q2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function zf(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(q2.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function Nw(t, {style: e, vars: r}, i, a) {
    Object.assign(t.style, e, a && a.getProjectionStyles(i));
    for (const l in r)
        t.style.setProperty(l, r[l])
}
const jw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Ow(t, e, r, i) {
    Nw(t, e, void 0, i);
    for (const a in e.attrs)
        t.setAttribute(jw.has(a) ? a : Bf(a), e.attrs[a])
}
const xt = t => !!(t && t.getVelocity)
  , Sl = {};
function H2(t) {
    Object.assign(Sl, t)
}
const No = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , as = new Set(No);
function Lw(t, {layout: e, layoutId: r}) {
    return as.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!Sl[t] || t === "opacity")
}
function $f(t, e, r) {
    var i;
    const {style: a} = t
      , l = {};
    for (const c in a)
        (xt(a[c]) || e.style && xt(e.style[c]) || Lw(c, t) || ((i = r == null ? void 0 : r.getValue(c)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[c] = a[c]);
    return l
}
function Mw(t, e, r) {
    const i = $f(t, e, r);
    for (const a in t)
        if (xt(t[a]) || xt(e[a])) {
            const l = No.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[l] = t[a]
        }
    return i
}
function xy(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach( (r, i) => {
        e[0][i] = r.get(),
        e[1][i] = r.getVelocity()
    }
    ),
    e
}
function qf(t, e, r, i) {
    if (typeof e == "function") {
        const [a,l] = xy(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [a,l] = xy(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    return e
}
const Kd = t => Array.isArray(t)
  , W2 = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , K2 = t => Kd(t) ? t[t.length - 1] || 0 : t;
function hl(t) {
    const e = xt(t) ? t.get() : t;
    return W2(e) ? e.toValue() : e
}
function Q2({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: r}, i, a, l) {
    const c = {
        latestValues: G2(i, a, l, t),
        renderState: e()
    };
    return r && (c.mount = f => r(i, f, c)),
    c
}
const Dw = t => (e, r) => {
    const i = N.useContext(Ul)
      , a = N.useContext(Bl)
      , l = () => Q2(t, e, i, a);
    return r ? l() : Of(l)
}
;
function G2(t, e, r, i) {
    const a = {}
      , l = i(t, {});
    for (const x in l)
        a[x] = hl(l[x]);
    let {initial: c, animate: f} = t;
    const h = $l(t)
      , m = Pw(t);
    e && m && !h && t.inherit !== !1 && (c === void 0 && (c = e.initial),
    f === void 0 && (f = e.animate));
    let g = r ? r.initial === !1 : !1;
    g = g || c === !1;
    const y = g ? f : c;
    if (y && typeof y != "boolean" && !zl(y)) {
        const x = Array.isArray(y) ? y : [y];
        for (let E = 0; E < x.length; E++) {
            const b = qf(t, x[E]);
            if (b) {
                const {transitionEnd: k, transition: S, ..._} = b;
                for (const F in _) {
                    let M = _[F];
                    if (Array.isArray(M)) {
                        const V = g ? M.length - 1 : 0;
                        M = M[V]
                    }
                    M !== null && (a[F] = M)
                }
                for (const F in k)
                    a[F] = k[F]
            }
        }
    }
    return a
}
const Hf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Iw = () => ({
    ...Hf(),
    attrs: {}
})
  , Fw = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , zn = (t, e, r) => r > e ? e : r < t ? t : r
  , ci = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , yo = {
    ...ci,
    transform: t => zn(0, 1, t)
}
  , tl = {
    ...ci,
    default: 1
}
  , jo = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , dr = jo("deg")
  , kn = jo("%")
  , ve = jo("px")
  , Y2 = jo("vh")
  , X2 = jo("vw")
  , by = {
    ...kn,
    parse: t => kn.parse(t) / 100,
    transform: t => kn.transform(t * 100)
}
  , J2 = {
    borderWidth: ve,
    borderTopWidth: ve,
    borderRightWidth: ve,
    borderBottomWidth: ve,
    borderLeftWidth: ve,
    borderRadius: ve,
    radius: ve,
    borderTopLeftRadius: ve,
    borderTopRightRadius: ve,
    borderBottomRightRadius: ve,
    borderBottomLeftRadius: ve,
    width: ve,
    maxWidth: ve,
    height: ve,
    maxHeight: ve,
    top: ve,
    right: ve,
    bottom: ve,
    left: ve,
    padding: ve,
    paddingTop: ve,
    paddingRight: ve,
    paddingBottom: ve,
    paddingLeft: ve,
    margin: ve,
    marginTop: ve,
    marginRight: ve,
    marginBottom: ve,
    marginLeft: ve,
    backgroundPositionX: ve,
    backgroundPositionY: ve
}
  , Z2 = {
    rotate: dr,
    rotateX: dr,
    rotateY: dr,
    rotateZ: dr,
    scale: tl,
    scaleX: tl,
    scaleY: tl,
    scaleZ: tl,
    skew: dr,
    skewX: dr,
    skewY: dr,
    distance: ve,
    translateX: ve,
    translateY: ve,
    translateZ: ve,
    x: ve,
    y: ve,
    z: ve,
    perspective: ve,
    transformPerspective: ve,
    opacity: yo,
    originX: by,
    originY: by,
    originZ: ve
}
  , Sy = {
    ...ci,
    transform: Math.round
}
  , Wf = {
    ...J2,
    ...Z2,
    zIndex: Sy,
    size: ve,
    fillOpacity: yo,
    strokeOpacity: yo,
    numOctaves: Sy
}
  , eR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , tR = No.length;
function nR(t, e, r) {
    let i = ""
      , a = !0;
    for (let l = 0; l < tR; l++) {
        const c = No[l]
          , f = t[c];
        if (f === void 0)
            continue;
        let h = !0;
        if (typeof f == "number" ? h = f === (c.startsWith("scale") ? 1 : 0) : h = parseFloat(f) === 0,
        !h || r) {
            const m = Fw(f, Wf[c]);
            if (!h) {
                a = !1;
                const g = eR[c] || c;
                i += `${g}(${m}) `
            }
            r && (e[c] = m)
        }
    }
    return i = i.trim(),
    r ? i = r(e, a ? "" : i) : a && (i = "none"),
    i
}
const Vw = t => e => typeof e == "string" && e.startsWith(t)
  , Bw = Vw("--")
  , rR = Vw("var(--")
  , Kf = t => rR(t) ? sR.test(t.split("/*")[0].trim()) : !1
  , sR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Qf(t, e, r) {
    const {style: i, vars: a, transformOrigin: l} = t;
    let c = !1
      , f = !1;
    for (const h in e) {
        const m = e[h];
        if (as.has(h)) {
            c = !0;
            continue
        } else if (Bw(h)) {
            a[h] = m;
            continue
        } else {
            const g = Fw(m, Wf[h]);
            h.startsWith("origin") ? (f = !0,
            l[h] = g) : i[h] = g
        }
    }
    if (e.transform || (c || r ? i.transform = nR(e, t.transform, r) : i.transform && (i.transform = "none")),
    f) {
        const {originX: h="50%", originY: m="50%", originZ: g=0} = l;
        i.transformOrigin = `${h} ${m} ${g}`
    }
}
function ky(t, e, r) {
    return typeof t == "string" ? t : ve.transform(e + r * t)
}
function iR(t, e, r) {
    const i = ky(e, t.x, t.width)
      , a = ky(r, t.y, t.height);
    return `${i} ${a}`
}
const oR = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , aR = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function lR(t, e, r=1, i=0, a=!0) {
    t.pathLength = 1;
    const l = a ? oR : aR;
    t[l.offset] = ve.transform(-i);
    const c = ve.transform(e)
      , f = ve.transform(r);
    t[l.array] = `${c} ${f}`
}
function Gf(t, {attrX: e, attrY: r, attrScale: i, originX: a, originY: l, pathLength: c, pathSpacing: f=1, pathOffset: h=0, ...m}, g, y) {
    if (Qf(t, m, y),
    g) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: x, style: E, dimensions: b} = t;
    x.transform && (b && (E.transform = x.transform),
    delete x.transform),
    b && (a !== void 0 || l !== void 0 || E.transform) && (E.transformOrigin = iR(b, a !== void 0 ? a : .5, l !== void 0 ? l : .5)),
    e !== void 0 && (x.x = e),
    r !== void 0 && (x.y = r),
    i !== void 0 && (x.scale = i),
    c !== void 0 && lR(x, c, f, h, !1)
}
const Yf = t => typeof t == "string" && t.toLowerCase() === "svg"
  , uR = {
    useVisualState: Dw({
        scrapeMotionValuesFromProps: Mw,
        createRenderState: Iw,
        onMount: (t, e, {renderState: r, latestValues: i}) => {
            Ue.read( () => {
                try {
                    r.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    r.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            Ue.render( () => {
                Gf(r, i, Yf(e.tagName), t.transformTemplate),
                Ow(e, r)
            }
            )
        }
    })
}
  , cR = {
    useVisualState: Dw({
        scrapeMotionValuesFromProps: $f,
        createRenderState: Hf
    })
};
function Uw(t, e, r) {
    for (const i in e)
        !xt(e[i]) && !Lw(i, r) && (t[i] = e[i])
}
function dR({transformTemplate: t}, e) {
    return N.useMemo( () => {
        const r = Hf();
        return Qf(r, e, t),
        Object.assign({}, r.vars, r.style)
    }
    , [e])
}
function fR(t, e) {
    const r = t.style || {}
      , i = {};
    return Uw(i, r, t),
    Object.assign(i, dR(t, e)),
    i
}
function hR(t, e) {
    const r = {}
      , i = fR(t, e);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
function pR(t, e, r, i) {
    const a = N.useMemo( () => {
        const l = Iw();
        return Gf(l, e, Yf(i), t.transformTemplate),
        {
            ...l.attrs,
            style: {
                ...l.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const l = {};
        Uw(l, t.style, t),
        a.style = {
            ...l,
            ...a.style
        }
    }
    return a
}
function mR(t=!1) {
    return (r, i, a, {latestValues: l}, c) => {
        const h = (zf(r) ? pR : hR)(i, l, c, r)
          , m = N2(i, typeof r == "string", t)
          , g = r !== N.Fragment ? {
            ...m,
            ...h,
            ref: a
        } : {}
          , {children: y} = i
          , x = N.useMemo( () => xt(y) ? y.get() : y, [y]);
        return N.createElement(r, {
            ...g,
            children: x
        })
    }
}
function gR(t, e) {
    return function(i, {forwardMotionProps: a}={
        forwardMotionProps: !1
    }) {
        const c = {
            ...zf(i) ? uR : cR,
            preloadedFeatures: t,
            useRender: mR(a),
            createVisualElement: e,
            Component: i
        };
        return B2(c)
    }
}
function zw(t, e) {
    if (!Array.isArray(e))
        return !1;
    const r = e.length;
    if (r !== t.length)
        return !1;
    for (let i = 0; i < r; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function ql(t, e, r) {
    const i = t.getProps();
    return qf(i, e, r !== void 0 ? r : i.custom, t)
}
const yR = Df( () => window.ScrollTimeline !== void 0);
class vR {
    constructor(e) {
        this.stop = () => this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished"in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, r) {
        for (let i = 0; i < this.animations.length; i++)
            this.animations[i][e] = r
    }
    attachTimeline(e, r) {
        const i = this.animations.map(a => {
            if (yR() && a.attachTimeline)
                return a.attachTimeline(e);
            if (typeof r == "function")
                return r(a)
        }
        );
        return () => {
            i.forEach( (a, l) => {
                a && a(),
                this.animations[l].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let r = 0; r < this.animations.length; r++)
            e = Math.max(e, this.animations[r].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(r => r[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class wR extends vR {
    then(e, r) {
        return Promise.all(this.animations).then(e).catch(r)
    }
}
function Xf(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const Qd = 2e4;
function $w(t) {
    let e = 0;
    const r = 50;
    let i = t.next(e);
    for (; !i.done && e < Qd; )
        e += r,
        i = t.next(e);
    return e >= Qd ? 1 / 0 : e
}
function Jf(t) {
    return typeof t == "function"
}
function Ey(t, e) {
    t.timeline = e,
    t.onfinish = null
}
const Zf = t => Array.isArray(t) && typeof t[0] == "number"
  , xR = {
    linearEasing: void 0
};
function bR(t, e) {
    const r = Df(t);
    return () => {
        var i;
        return (i = xR[e]) !== null && i !== void 0 ? i : r()
    }
}
const kl = bR( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , qw = (t, e, r=10) => {
    let i = "";
    const a = Math.max(Math.round(e / r), 2);
    for (let l = 0; l < a; l++)
        i += t(ni(0, a - 1, l)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
;
function Hw(t) {
    return !!(typeof t == "function" && kl() || !t || typeof t == "string" && (t in Gd || kl()) || Zf(t) || Array.isArray(t) && t.every(Hw))
}
const io = ([t,e,r,i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`
  , Gd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: io([0, .65, .55, 1]),
    circOut: io([.55, 0, 1, .45]),
    backIn: io([.31, .01, .66, -.59]),
    backOut: io([.33, 1.53, .69, .99])
};
function Ww(t, e) {
    if (t)
        return typeof t == "function" && kl() ? qw(t, e) : Zf(t) ? io(t) : Array.isArray(t) ? t.map(r => Ww(r, e) || Gd.easeOut) : Gd[t]
}
const ln = {
    x: !1,
    y: !1
};
function Kw() {
    return ln.x || ln.y
}
function SR(t, e, r) {
    var i;
    if (t instanceof Element)
        return [t];
    if (typeof t == "string") {
        let a = document;
        const l = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t)
}
function Qw(t, e) {
    const r = SR(t)
      , i = new AbortController
      , a = {
        passive: !0,
        ...e,
        signal: i.signal
    };
    return [r, a, () => i.abort()]
}
function Ty(t) {
    return e => {
        e.pointerType === "touch" || Kw() || t(e)
    }
}
function kR(t, e, r={}) {
    const [i,a,l] = Qw(t, r)
      , c = Ty(f => {
        const {target: h} = f
          , m = e(f);
        if (typeof m != "function" || !h)
            return;
        const g = Ty(y => {
            m(y),
            h.removeEventListener("pointerleave", g)
        }
        );
        h.addEventListener("pointerleave", g, a)
    }
    );
    return i.forEach(f => {
        f.addEventListener("pointerenter", c, a)
    }
    ),
    l
}
const Gw = (t, e) => e ? t === e ? !0 : Gw(t, e.parentElement) : !1
  , eh = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , ER = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function TR(t) {
    return ER.has(t.tagName) || t.tabIndex !== -1
}
const oo = new WeakSet;
function Cy(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}
function sd(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const CR = (t, e) => {
    const r = t.currentTarget;
    if (!r)
        return;
    const i = Cy( () => {
        if (oo.has(r))
            return;
        sd(r, "down");
        const a = Cy( () => {
            sd(r, "up")
        }
        )
          , l = () => sd(r, "cancel");
        r.addEventListener("keyup", a, e),
        r.addEventListener("blur", l, e)
    }
    );
    r.addEventListener("keydown", i, e),
    r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
}
;
function Py(t) {
    return eh(t) && !Kw()
}
function PR(t, e, r={}) {
    const [i,a,l] = Qw(t, r)
      , c = f => {
        const h = f.currentTarget;
        if (!Py(f) || oo.has(h))
            return;
        oo.add(h);
        const m = e(f)
          , g = (E, b) => {
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", x),
            !(!Py(E) || !oo.has(h)) && (oo.delete(h),
            typeof m == "function" && m(E, {
                success: b
            }))
        }
          , y = E => {
            g(E, r.useGlobalTarget || Gw(h, E.target))
        }
          , x = E => {
            g(E, !1)
        }
        ;
        window.addEventListener("pointerup", y, a),
        window.addEventListener("pointercancel", x, a)
    }
    ;
    return i.forEach(f => {
        !TR(f) && f.getAttribute("tabindex") === null && (f.tabIndex = 0),
        (r.useGlobalTarget ? window : f).addEventListener("pointerdown", c, a),
        f.addEventListener("focus", m => CR(m, a), a)
    }
    ),
    l
}
function RR(t) {
    return t === "x" || t === "y" ? ln[t] ? null : (ln[t] = !0,
    () => {
        ln[t] = !1
    }
    ) : ln.x || ln.y ? null : (ln.x = ln.y = !0,
    () => {
        ln.x = ln.y = !1
    }
    )
}
let pl;
function _R() {
    pl = void 0
}
const En = {
    now: () => (pl === void 0 && En.set(ft.isProcessing || T2.useManualTiming ? ft.timestamp : performance.now()),
    pl),
    set: t => {
        pl = t,
        queueMicrotask(_R)
    }
};
function th(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function nh(t, e) {
    const r = t.indexOf(e);
    r > -1 && t.splice(r, 1)
}
class rh {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return th(this.subscriptions, e),
        () => nh(this.subscriptions, e)
    }
    notify(e, r, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1)
                this.subscriptions[0](e, r, i);
            else
                for (let l = 0; l < a; l++) {
                    const c = this.subscriptions[l];
                    c && c(e, r, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function Yw(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Ry = 30
  , AR = t => !isNaN(parseFloat(t));
class NR {
    constructor(e, r={}) {
        this.version = "11.16.4",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (i, a=!0) => {
            const l = En.now();
            this.updatedAt !== l && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = r.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = En.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = AR(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, r) {
        this.events[e] || (this.events[e] = new rh);
        const i = this.events[e].add(r);
        return e === "change" ? () => {
            i(),
            Ue.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, r) {
        this.passiveEffect = e,
        this.stopPassiveEffect = r
    }
    set(e, r=!0) {
        !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, r, i) {
        this.set(r),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, r=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        r && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = En.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ry)
            return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, Ry);
        return Yw(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(e) {
        return this.stop(),
        new Promise(r => {
            this.hasAnimated = !0,
            this.animation = e(r),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function vo(t, e) {
    return new NR(t,e)
}
function jR(t, e, r) {
    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, vo(r))
}
function OR(t, e) {
    const r = ql(t, e);
    let {transitionEnd: i={}, transition: a={}, ...l} = r || {};
    l = {
        ...l,
        ...i
    };
    for (const c in l) {
        const f = K2(l[c]);
        jR(t, c, f)
    }
}
function LR(t) {
    return !!(xt(t) && t.add)
}
function Yd(t, e) {
    const r = t.getValue("willChange");
    if (LR(r))
        return r.add(e)
}
function Xw(t) {
    return t.props[Rw]
}
const Jw = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t
  , MR = 1e-7
  , DR = 12;
function IR(t, e, r, i, a) {
    let l, c, f = 0;
    do
        c = e + (r - e) / 2,
        l = Jw(c, i, a) - t,
        l > 0 ? r = c : e = c;
    while (Math.abs(l) > MR && ++f < DR);
    return c
}
function Oo(t, e, r, i) {
    if (t === e && r === i)
        return Bt;
    const a = l => IR(l, 0, 1, t, r);
    return l => l === 0 || l === 1 ? l : Jw(a(l), e, i)
}
const Zw = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , ex = t => e => 1 - t(1 - e)
  , tx = Oo(.33, 1.53, .69, .99)
  , sh = ex(tx)
  , nx = Zw(sh)
  , rx = t => (t *= 2) < 1 ? .5 * sh(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , ih = t => 1 - Math.sin(Math.acos(t))
  , sx = ex(ih)
  , ix = Zw(ih)
  , ox = t => /^0[^.\s]+$/u.test(t);
function FR(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || ox(t) : !0
}
const ax = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , VR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function BR(t) {
    const e = VR.exec(t);
    if (!e)
        return [, ];
    const [,r,i,a] = e;
    return [`--${r ?? i}`, a]
}
function lx(t, e, r=1) {
    const [i,a] = BR(t);
    if (!i)
        return;
    const l = window.getComputedStyle(e).getPropertyValue(i);
    if (l) {
        const c = l.trim();
        return ax(c) ? parseFloat(c) : c
    }
    return Kf(a) ? lx(a, e, r + 1) : a
}
const UR = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , _y = t => t === ci || t === ve
  , Ay = (t, e) => parseFloat(t.split(", ")[e])
  , Ny = (t, e) => (r, {transform: i}) => {
    if (i === "none" || !i)
        return 0;
    const a = i.match(/^matrix3d\((.+)\)$/u);
    if (a)
        return Ay(a[1], e);
    {
        const l = i.match(/^matrix\((.+)\)$/u);
        return l ? Ay(l[1], t) : 0
    }
}
  , zR = new Set(["x", "y", "z"])
  , $R = No.filter(t => !zR.has(t));
function qR(t) {
    const e = [];
    return $R.forEach(r => {
        const i = t.getValue(r);
        i !== void 0 && (e.push([r, i.get()]),
        i.set(r.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const si = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: r="0"}) => t.max - t.min - parseFloat(e) - parseFloat(r),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: r="0"}) => t.max - t.min - parseFloat(e) - parseFloat(r),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: Ny(4, 13),
    y: Ny(5, 14)
};
si.translateX = si.x;
si.translateY = si.y;
const ux = t => e => e.test(t)
  , HR = {
    test: t => t === "auto",
    parse: t => t
}
  , cx = [ci, ve, kn, dr, X2, Y2, HR]
  , jy = t => cx.find(ux(t))
  , rs = new Set;
let Xd = !1
  , Jd = !1;
function dx() {
    if (Jd) {
        const t = Array.from(rs).filter(i => i.needsMeasurement)
          , e = new Set(t.map(i => i.element))
          , r = new Map;
        e.forEach(i => {
            const a = qR(i);
            a.length && (r.set(i, a),
            i.render())
        }
        ),
        t.forEach(i => i.measureInitialState()),
        e.forEach(i => {
            i.render();
            const a = r.get(i);
            a && a.forEach( ([l,c]) => {
                var f;
                (f = i.getValue(l)) === null || f === void 0 || f.set(c)
            }
            )
        }
        ),
        t.forEach(i => i.measureEndState()),
        t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    Jd = !1,
    Xd = !1,
    rs.forEach(t => t.complete()),
    rs.clear()
}
function fx() {
    rs.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (Jd = !0)
    }
    )
}
function WR() {
    fx(),
    dx()
}
class oh {
    constructor(e, r, i, a, l, c=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = r,
        this.name = i,
        this.motionValue = a,
        this.element = l,
        this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (rs.add(this),
        Xd || (Xd = !0,
        Ue.read(fx),
        Ue.resolveKeyframes(dx))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: r, element: i, motionValue: a} = this;
        for (let l = 0; l < e.length; l++)
            if (e[l] === null)
                if (l === 0) {
                    const c = a == null ? void 0 : a.get()
                      , f = e[e.length - 1];
                    if (c !== void 0)
                        e[0] = c;
                    else if (i && r) {
                        const h = i.readValue(r, f);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = f),
                    a && c === void 0 && a.set(e[0])
                } else
                    e[l] = e[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        rs.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        rs.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const uo = t => Math.round(t * 1e5) / 1e5
  , ah = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function KR(t) {
    return t == null
}
const QR = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , lh = (t, e) => r => !!(typeof r == "string" && QR.test(r) && r.startsWith(t) || e && !KR(r) && Object.prototype.hasOwnProperty.call(r, e))
  , hx = (t, e, r) => i => {
    if (typeof i != "string")
        return i;
    const [a,l,c,f] = i.match(ah);
    return {
        [t]: parseFloat(a),
        [e]: parseFloat(l),
        [r]: parseFloat(c),
        alpha: f !== void 0 ? parseFloat(f) : 1
    }
}
  , GR = t => zn(0, 255, t)
  , id = {
    ...ci,
    transform: t => Math.round(GR(t))
}
  , Wr = {
    test: lh("rgb", "red"),
    parse: hx("red", "green", "blue"),
    transform: ({red: t, green: e, blue: r, alpha: i=1}) => "rgba(" + id.transform(t) + ", " + id.transform(e) + ", " + id.transform(r) + ", " + uo(yo.transform(i)) + ")"
};
function YR(t) {
    let e = ""
      , r = ""
      , i = ""
      , a = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    r = t.substring(3, 5),
    i = t.substring(5, 7),
    a = t.substring(7, 9)) : (e = t.substring(1, 2),
    r = t.substring(2, 3),
    i = t.substring(3, 4),
    a = t.substring(4, 5),
    e += e,
    r += r,
    i += i,
    a += a),
    {
        red: parseInt(e, 16),
        green: parseInt(r, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const Zd = {
    test: lh("#"),
    parse: YR,
    transform: Wr.transform
}
  , Fs = {
    test: lh("hsl", "hue"),
    parse: hx("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: r, alpha: i=1}) => "hsla(" + Math.round(t) + ", " + kn.transform(uo(e)) + ", " + kn.transform(uo(r)) + ", " + uo(yo.transform(i)) + ")"
}
  , vt = {
    test: t => Wr.test(t) || Zd.test(t) || Fs.test(t),
    parse: t => Wr.test(t) ? Wr.parse(t) : Fs.test(t) ? Fs.parse(t) : Zd.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Wr.transform(t) : Fs.transform(t)
}
  , XR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function JR(t) {
    var e, r;
    return isNaN(t) && typeof t == "string" && (((e = t.match(ah)) === null || e === void 0 ? void 0 : e.length) || 0) + (((r = t.match(XR)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const px = "number"
  , mx = "color"
  , ZR = "var"
  , e_ = "var("
  , Oy = "${}"
  , t_ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function wo(t) {
    const e = t.toString()
      , r = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , a = [];
    let l = 0;
    const f = e.replace(t_, h => (vt.test(h) ? (i.color.push(l),
    a.push(mx),
    r.push(vt.parse(h))) : h.startsWith(e_) ? (i.var.push(l),
    a.push(ZR),
    r.push(h)) : (i.number.push(l),
    a.push(px),
    r.push(parseFloat(h))),
    ++l,
    Oy)).split(Oy);
    return {
        values: r,
        split: f,
        indexes: i,
        types: a
    }
}
function gx(t) {
    return wo(t).values
}
function yx(t) {
    const {split: e, types: r} = wo(t)
      , i = e.length;
    return a => {
        let l = "";
        for (let c = 0; c < i; c++)
            if (l += e[c],
            a[c] !== void 0) {
                const f = r[c];
                f === px ? l += uo(a[c]) : f === mx ? l += vt.transform(a[c]) : l += a[c]
            }
        return l
    }
}
const n_ = t => typeof t == "number" ? 0 : t;
function r_(t) {
    const e = gx(t);
    return yx(t)(e.map(n_))
}
const Er = {
    test: JR,
    parse: gx,
    createTransformer: yx,
    getAnimatableNone: r_
}
  , s_ = new Set(["brightness", "contrast", "saturate", "opacity"]);
function i_(t) {
    const [e,r] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [i] = r.match(ah) || [];
    if (!i)
        return t;
    const a = r.replace(i, "");
    let l = s_.has(e) ? 1 : 0;
    return i !== r && (l *= 100),
    e + "(" + l + a + ")"
}
const o_ = /\b([a-z-]*)\(.*?\)/gu
  , ef = {
    ...Er,
    getAnimatableNone: t => {
        const e = t.match(o_);
        return e ? e.map(i_).join(" ") : t
    }
}
  , a_ = {
    ...Wf,
    color: vt,
    backgroundColor: vt,
    outlineColor: vt,
    fill: vt,
    stroke: vt,
    borderColor: vt,
    borderTopColor: vt,
    borderRightColor: vt,
    borderBottomColor: vt,
    borderLeftColor: vt,
    filter: ef,
    WebkitFilter: ef
}
  , uh = t => a_[t];
function vx(t, e) {
    let r = uh(t);
    return r !== ef && (r = Er),
    r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}
const l_ = new Set(["auto", "none", "0"]);
function u_(t, e, r) {
    let i = 0, a;
    for (; i < t.length && !a; ) {
        const l = t[i];
        typeof l == "string" && !l_.has(l) && wo(l).values.length && (a = t[i]),
        i++
    }
    if (a && r)
        for (const l of e)
            t[l] = vx(r, a)
}
class wx extends oh {
    constructor(e, r, i, a, l) {
        super(e, r, i, a, l, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: r, name: i} = this;
        if (!r || !r.current)
            return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let m = e[h];
            if (typeof m == "string" && (m = m.trim(),
            Kf(m))) {
                const g = lx(m, r.current);
                g !== void 0 && (e[h] = g),
                h === e.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !UR.has(i) || e.length !== 2)
            return;
        const [a,l] = e
          , c = jy(a)
          , f = jy(l);
        if (c !== f)
            if (_y(c) && _y(f))
                for (let h = 0; h < e.length; h++) {
                    const m = e[h];
                    typeof m == "string" && (e[h] = parseFloat(m))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: r} = this
          , i = [];
        for (let a = 0; a < e.length; a++)
            FR(e[a]) && i.push(a);
        i.length && u_(e, i, r)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: r, name: i} = this;
        if (!e || !e.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = si[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
        r[0] = this.measuredOrigin;
        const a = r[r.length - 1];
        a !== void 0 && e.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var e;
        const {element: r, name: i, unresolvedKeyframes: a} = this;
        if (!r || !r.current)
            return;
        const l = r.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const c = a.length - 1
          , f = a[c];
        a[c] = si[i](r.measureViewportBox(), window.getComputedStyle(r.current)),
        f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([h,m]) => {
            r.getValue(h).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Ly = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Er.test(t) || t === "0") && !t.startsWith("url("));
function c_(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e)
            return !0
}
function d_(t, e, r, i) {
    const a = t[0];
    if (a === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const l = t[t.length - 1]
      , c = Ly(a, e)
      , f = Ly(l, e);
    return !c || !f ? !1 : c_(t) || (r === "spring" || Jf(r)) && i
}
const f_ = t => t !== null;
function Hl(t, {repeat: e, repeatType: r="loop"}, i) {
    const a = t.filter(f_)
      , l = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !l || i === void 0 ? a[l] : i
}
const h_ = 40;
class xx {
    constructor({autoplay: e=!0, delay: r=0, type: i="keyframes", repeat: a=0, repeatDelay: l=0, repeatType: c="loop", ...f}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = En.now(),
        this.options = {
            autoplay: e,
            delay: r,
            type: i,
            repeat: a,
            repeatDelay: l,
            repeatType: c,
            ...f
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > h_ ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && WR(),
        this._resolved
    }
    onKeyframesResolved(e, r) {
        this.resolvedAt = En.now(),
        this.hasAttemptedResolve = !0;
        const {name: i, type: a, velocity: l, delay: c, onComplete: f, onUpdate: h, isGenerator: m} = this.options;
        if (!m && !d_(e, i, a, l))
            if (c)
                this.options.duration = 0;
            else {
                h == null || h(Hl(e, this.options, r)),
                f == null || f(),
                this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(e, r);
        g !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: r,
            ...g
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, r) {
        return this.currentFinishedPromise.then(e, r)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        }
        )
    }
}
const He = (t, e, r) => t + (e - t) * r;
function od(t, e, r) {
    return r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}
function p_({hue: t, saturation: e, lightness: r, alpha: i}) {
    t /= 360,
    e /= 100,
    r /= 100;
    let a = 0
      , l = 0
      , c = 0;
    if (!e)
        a = l = c = r;
    else {
        const f = r < .5 ? r * (1 + e) : r + e - r * e
          , h = 2 * r - f;
        a = od(h, f, t + 1 / 3),
        l = od(h, f, t),
        c = od(h, f, t - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(l * 255),
        blue: Math.round(c * 255),
        alpha: i
    }
}
function El(t, e) {
    return r => r > 0 ? e : t
}
const ad = (t, e, r) => {
    const i = t * t
      , a = r * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a)
}
  , m_ = [Zd, Wr, Fs]
  , g_ = t => m_.find(e => e.test(t));
function My(t) {
    const e = g_(t);
    if (!e)
        return !1;
    let r = e.parse(t);
    return e === Fs && (r = p_(r)),
    r
}
const Dy = (t, e) => {
    const r = My(t)
      , i = My(e);
    if (!r || !i)
        return El(t, e);
    const a = {
        ...r
    };
    return l => (a.red = ad(r.red, i.red, l),
    a.green = ad(r.green, i.green, l),
    a.blue = ad(r.blue, i.blue, l),
    a.alpha = He(r.alpha, i.alpha, l),
    Wr.transform(a))
}
  , y_ = (t, e) => r => e(t(r))
  , Lo = (...t) => t.reduce(y_)
  , tf = new Set(["none", "hidden"]);
function v_(t, e) {
    return tf.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}
function w_(t, e) {
    return r => He(t, e, r)
}
function ch(t) {
    return typeof t == "number" ? w_ : typeof t == "string" ? Kf(t) ? El : vt.test(t) ? Dy : S_ : Array.isArray(t) ? bx : typeof t == "object" ? vt.test(t) ? Dy : x_ : El
}
function bx(t, e) {
    const r = [...t]
      , i = r.length
      , a = t.map( (l, c) => ch(l)(l, e[c]));
    return l => {
        for (let c = 0; c < i; c++)
            r[c] = a[c](l);
        return r
    }
}
function x_(t, e) {
    const r = {
        ...t,
        ...e
    }
      , i = {};
    for (const a in r)
        t[a] !== void 0 && e[a] !== void 0 && (i[a] = ch(t[a])(t[a], e[a]));
    return a => {
        for (const l in i)
            r[l] = i[l](a);
        return r
    }
}
function b_(t, e) {
    var r;
    const i = []
      , a = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let l = 0; l < e.values.length; l++) {
        const c = e.types[l]
          , f = t.indexes[c][a[c]]
          , h = (r = t.values[f]) !== null && r !== void 0 ? r : 0;
        i[l] = h,
        a[c]++
    }
    return i
}
const S_ = (t, e) => {
    const r = Er.createTransformer(e)
      , i = wo(t)
      , a = wo(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? tf.has(t) && !a.values.length || tf.has(e) && !i.values.length ? v_(t, e) : Lo(bx(b_(i, a), a.values), r) : El(t, e)
}
;
function Sx(t, e, r) {
    return typeof t == "number" && typeof e == "number" && typeof r == "number" ? He(t, e, r) : ch(t)(t, e)
}
const k_ = 5;
function kx(t, e, r) {
    const i = Math.max(e - k_, 0);
    return Yw(r - t(i), e - i)
}
const Qe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , ld = .001;
function E_({duration: t=Qe.duration, bounce: e=Qe.bounce, velocity: r=Qe.velocity, mass: i=Qe.mass}) {
    let a, l, c = 1 - e;
    c = zn(Qe.minDamping, Qe.maxDamping, c),
    t = zn(Qe.minDuration, Qe.maxDuration, Un(t)),
    c < 1 ? (a = m => {
        const g = m * c
          , y = g * t
          , x = g - r
          , E = nf(m, c)
          , b = Math.exp(-y);
        return ld - x / E * b
    }
    ,
    l = m => {
        const y = m * c * t
          , x = y * r + r
          , E = Math.pow(c, 2) * Math.pow(m, 2) * t
          , b = Math.exp(-y)
          , k = nf(Math.pow(m, 2), c);
        return (-a(m) + ld > 0 ? -1 : 1) * ((x - E) * b) / k
    }
    ) : (a = m => {
        const g = Math.exp(-m * t)
          , y = (m - r) * t + 1;
        return -ld + g * y
    }
    ,
    l = m => {
        const g = Math.exp(-m * t)
          , y = (r - m) * (t * t);
        return g * y
    }
    );
    const f = 5 / t
      , h = C_(a, l, f);
    if (t = Bn(t),
    isNaN(h))
        return {
            stiffness: Qe.stiffness,
            damping: Qe.damping,
            duration: t
        };
    {
        const m = Math.pow(h, 2) * i;
        return {
            stiffness: m,
            damping: c * 2 * Math.sqrt(i * m),
            duration: t
        }
    }
}
const T_ = 12;
function C_(t, e, r) {
    let i = r;
    for (let a = 1; a < T_; a++)
        i = i - t(i) / e(i);
    return i
}
function nf(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const P_ = ["duration", "bounce"]
  , R_ = ["stiffness", "damping", "mass"];
function Iy(t, e) {
    return e.some(r => t[r] !== void 0)
}
function __(t) {
    let e = {
        velocity: Qe.velocity,
        stiffness: Qe.stiffness,
        damping: Qe.damping,
        mass: Qe.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Iy(t, R_) && Iy(t, P_))
        if (t.visualDuration) {
            const r = t.visualDuration
              , i = 2 * Math.PI / (r * 1.2)
              , a = i * i
              , l = 2 * zn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
            e = {
                ...e,
                mass: Qe.mass,
                stiffness: a,
                damping: l
            }
        } else {
            const r = E_(t);
            e = {
                ...e,
                ...r,
                mass: Qe.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function Ex(t=Qe.visualDuration, e=Qe.bounce) {
    const r = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: i, restDelta: a} = r;
    const l = r.keyframes[0]
      , c = r.keyframes[r.keyframes.length - 1]
      , f = {
        done: !1,
        value: l
    }
      , {stiffness: h, damping: m, mass: g, duration: y, velocity: x, isResolvedFromDuration: E} = __({
        ...r,
        velocity: -Un(r.velocity || 0)
    })
      , b = x || 0
      , k = m / (2 * Math.sqrt(h * g))
      , S = c - l
      , _ = Un(Math.sqrt(h / g))
      , F = Math.abs(S) < 5;
    i || (i = F ? Qe.restSpeed.granular : Qe.restSpeed.default),
    a || (a = F ? Qe.restDelta.granular : Qe.restDelta.default);
    let M;
    if (k < 1) {
        const U = nf(_, k);
        M = Y => {
            const ne = Math.exp(-k * _ * Y);
            return c - ne * ((b + k * _ * S) / U * Math.sin(U * Y) + S * Math.cos(U * Y))
        }
    } else if (k === 1)
        M = U => c - Math.exp(-_ * U) * (S + (b + _ * S) * U);
    else {
        const U = _ * Math.sqrt(k * k - 1);
        M = Y => {
            const ne = Math.exp(-k * _ * Y)
              , j = Math.min(U * Y, 300);
            return c - ne * ((b + k * _ * S) * Math.sinh(j) + U * S * Math.cosh(j)) / U
        }
    }
    const V = {
        calculatedDuration: E && y || null,
        next: U => {
            const Y = M(U);
            if (E)
                f.done = U >= y;
            else {
                let ne = 0;
                k < 1 && (ne = U === 0 ? Bn(b) : kx(M, U, Y));
                const j = Math.abs(ne) <= i
                  , W = Math.abs(c - Y) <= a;
                f.done = j && W
            }
            return f.value = f.done ? c : Y,
            f
        }
        ,
        toString: () => {
            const U = Math.min($w(V), Qd)
              , Y = qw(ne => V.next(U * ne).value, U, 30);
            return U + "ms " + Y
        }
    };
    return V
}
function Fy({keyframes: t, velocity: e=0, power: r=.8, timeConstant: i=325, bounceDamping: a=10, bounceStiffness: l=500, modifyTarget: c, min: f, max: h, restDelta: m=.5, restSpeed: g}) {
    const y = t[0]
      , x = {
        done: !1,
        value: y
    }
      , E = j => f !== void 0 && j < f || h !== void 0 && j > h
      , b = j => f === void 0 ? h : h === void 0 || Math.abs(f - j) < Math.abs(h - j) ? f : h;
    let k = r * e;
    const S = y + k
      , _ = c === void 0 ? S : c(S);
    _ !== S && (k = _ - y);
    const F = j => -k * Math.exp(-j / i)
      , M = j => _ + F(j)
      , V = j => {
        const W = F(j)
          , Q = M(j);
        x.done = Math.abs(W) <= m,
        x.value = x.done ? _ : Q
    }
    ;
    let U, Y;
    const ne = j => {
        E(x.value) && (U = j,
        Y = Ex({
            keyframes: [x.value, b(x.value)],
            velocity: kx(M, j, x.value),
            damping: a,
            stiffness: l,
            restDelta: m,
            restSpeed: g
        }))
    }
    ;
    return ne(0),
    {
        calculatedDuration: null,
        next: j => {
            let W = !1;
            return !Y && U === void 0 && (W = !0,
            V(j),
            ne(j)),
            U !== void 0 && j >= U ? Y.next(j - U) : (!W && V(j),
            x)
        }
    }
}
const A_ = Oo(.42, 0, 1, 1)
  , N_ = Oo(0, 0, .58, 1)
  , Tx = Oo(.42, 0, .58, 1)
  , j_ = t => Array.isArray(t) && typeof t[0] != "number"
  , O_ = {
    linear: Bt,
    easeIn: A_,
    easeInOut: Tx,
    easeOut: N_,
    circIn: ih,
    circInOut: ix,
    circOut: sx,
    backIn: sh,
    backInOut: nx,
    backOut: tx,
    anticipate: rx
}
  , Vy = t => {
    if (Zf(t)) {
        Sw(t.length === 4);
        const [e,r,i,a] = t;
        return Oo(e, r, i, a)
    } else if (typeof t == "string")
        return O_[t];
    return t
}
;
function L_(t, e, r) {
    const i = []
      , a = r || Sx
      , l = t.length - 1;
    for (let c = 0; c < l; c++) {
        let f = a(t[c], t[c + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[c] || Bt : e;
            f = Lo(h, f)
        }
        i.push(f)
    }
    return i
}
function M_(t, e, {clamp: r=!0, ease: i, mixer: a}={}) {
    const l = t.length;
    if (Sw(l === e.length),
    l === 1)
        return () => e[0];
    if (l === 2 && t[0] === t[1])
        return () => e[1];
    t[0] > t[l - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const c = L_(e, i, a)
      , f = c.length
      , h = m => {
        let g = 0;
        if (f > 1)
            for (; g < t.length - 2 && !(m < t[g + 1]); g++)
                ;
        const y = ni(t[g], t[g + 1], m);
        return c[g](y)
    }
    ;
    return r ? m => h(zn(t[0], t[l - 1], m)) : h
}
function D_(t, e) {
    const r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const a = ni(0, e, i);
        t.push(He(r, 1, a))
    }
}
function I_(t) {
    const e = [0];
    return D_(e, t.length - 1),
    e
}
function F_(t, e) {
    return t.map(r => r * e)
}
function V_(t, e) {
    return t.map( () => e || Tx).splice(0, t.length - 1)
}
function Tl({duration: t=300, keyframes: e, times: r, ease: i="easeInOut"}) {
    const a = j_(i) ? i.map(Vy) : Vy(i)
      , l = {
        done: !1,
        value: e[0]
    }
      , c = F_(r && r.length === e.length ? r : I_(e), t)
      , f = M_(c, e, {
        ease: Array.isArray(a) ? a : V_(e, a)
    });
    return {
        calculatedDuration: t,
        next: h => (l.value = f(h),
        l.done = h >= t,
        l)
    }
}
const B_ = t => {
    const e = ({timestamp: r}) => t(r);
    return {
        start: () => Ue.update(e, !0),
        stop: () => kr(e),
        now: () => ft.isProcessing ? ft.timestamp : En.now()
    }
}
  , U_ = {
    decay: Fy,
    inertia: Fy,
    tween: Tl,
    keyframes: Tl,
    spring: Ex
}
  , z_ = t => t / 100;
class dh extends xx {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: h} = this.options;
            h && h()
        }
        ;
        const {name: r, motionValue: i, element: a, keyframes: l} = this.options
          , c = (a == null ? void 0 : a.KeyframeResolver) || oh
          , f = (h, m) => this.onKeyframesResolved(h, m);
        this.resolver = new c(l,f,r,i,a),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {type: r="keyframes", repeat: i=0, repeatDelay: a=0, repeatType: l, velocity: c=0} = this.options
          , f = Jf(r) ? r : U_[r] || Tl;
        let h, m;
        f !== Tl && typeof e[0] != "number" && (h = Lo(z_, Sx(e[0], e[1])),
        e = [0, 100]);
        const g = f({
            ...this.options,
            keyframes: e
        });
        l === "mirror" && (m = f({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -c
        })),
        g.calculatedDuration === null && (g.calculatedDuration = $w(g));
        const {calculatedDuration: y} = g
          , x = y + a
          , E = x * (i + 1) - a;
        return {
            generator: g,
            mirroredGenerator: m,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: x,
            totalDuration: E
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, r=!1) {
        const {resolved: i} = this;
        if (!i) {
            const {keyframes: j} = this.options;
            return {
                done: !0,
                value: j[j.length - 1]
            }
        }
        const {finalKeyframe: a, generator: l, mirroredGenerator: c, mapPercentToKeyframes: f, keyframes: h, calculatedDuration: m, totalDuration: g, resolvedDuration: y} = i;
        if (this.startTime === null)
            return l.next(0);
        const {delay: x, repeat: E, repeatType: b, repeatDelay: k, onUpdate: S} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - g / this.speed, this.startTime)),
        r ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const _ = this.currentTime - x * (this.speed >= 0 ? 1 : -1)
          , F = this.speed >= 0 ? _ < 0 : _ > g;
        this.currentTime = Math.max(_, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let M = this.currentTime
          , V = l;
        if (E) {
            const j = Math.min(this.currentTime, g) / y;
            let W = Math.floor(j)
              , Q = j % 1;
            !Q && j >= 1 && (Q = 1),
            Q === 1 && W--,
            W = Math.min(W, E + 1),
            !!(W % 2) && (b === "reverse" ? (Q = 1 - Q,
            k && (Q -= k / y)) : b === "mirror" && (V = c)),
            M = zn(0, 1, Q) * y
        }
        const U = F ? {
            done: !1,
            value: h[0]
        } : V.next(M);
        f && (U.value = f(U.value));
        let {done: Y} = U;
        !F && m !== null && (Y = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const ne = this.holdTime === null && (this.state === "finished" || this.state === "running" && Y);
        return ne && a !== void 0 && (U.value = Hl(h, this.options, a)),
        S && S(U.value),
        ne && this.finish(),
        U
    }
    get duration() {
        const {resolved: e} = this;
        return e ? Un(e.calculatedDuration) : 0
    }
    get time() {
        return Un(this.currentTime)
    }
    set time(e) {
        e = Bn(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const r = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        r && (this.time = Un(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: e=B_, onPlay: r, startTime: i} = this.options;
        this.driver || (this.driver = e(l => this.tick(l))),
        r && r();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const $_ = new Set(["opacity", "clipPath", "filter", "transform"]);
function q_(t, e, r, {delay: i=0, duration: a=300, repeat: l=0, repeatType: c="loop", ease: f="easeInOut", times: h}={}) {
    const m = {
        [e]: r
    };
    h && (m.offset = h);
    const g = Ww(f, a);
    return Array.isArray(g) && (m.easing = g),
    t.animate(m, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: l + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    })
}
const H_ = Df( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Cl = 10
  , W_ = 2e4;
function K_(t) {
    return Jf(t.type) || t.type === "spring" || !Hw(t.ease)
}
function Q_(t, e) {
    const r = new dh({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const a = [];
    let l = 0;
    for (; !i.done && l < W_; )
        i = r.sample(l),
        a.push(i.value),
        l += Cl;
    return {
        times: void 0,
        keyframes: a,
        duration: l - Cl,
        ease: "linear"
    }
}
const Cx = {
    anticipate: rx,
    backInOut: nx,
    circInOut: ix
};
function G_(t) {
    return t in Cx
}
class By extends xx {
    constructor(e) {
        super(e);
        const {name: r, motionValue: i, element: a, keyframes: l} = this.options;
        this.resolver = new wx(l, (c, f) => this.onKeyframesResolved(c, f),r,i,a),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, r) {
        var i;
        let {duration: a=300, times: l, ease: c, type: f, motionValue: h, name: m, startTime: g} = this.options;
        if (!(!((i = h.owner) === null || i === void 0) && i.current))
            return !1;
        if (typeof c == "string" && kl() && G_(c) && (c = Cx[c]),
        K_(this.options)) {
            const {onComplete: x, onUpdate: E, motionValue: b, element: k, ...S} = this.options
              , _ = Q_(e, S);
            e = _.keyframes,
            e.length === 1 && (e[1] = e[0]),
            a = _.duration,
            l = _.times,
            c = _.ease,
            f = "keyframes"
        }
        const y = q_(h.owner.current, m, e, {
            ...this.options,
            duration: a,
            times: l,
            ease: c
        });
        return y.startTime = g ?? this.calcStartTime(),
        this.pendingTimeline ? (Ey(y, this.pendingTimeline),
        this.pendingTimeline = void 0) : y.onfinish = () => {
            const {onComplete: x} = this.options;
            h.set(Hl(e, this.options, r)),
            x && x(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: y,
            duration: a,
            times: l,
            type: f,
            ease: c,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: r} = e;
        return Un(r)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: r} = e;
        return Un(r.currentTime || 0)
    }
    set time(e) {
        const {resolved: r} = this;
        if (!r)
            return;
        const {animation: i} = r;
        i.currentTime = Bn(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: r} = e;
        return r.playbackRate
    }
    set speed(e) {
        const {resolved: r} = this;
        if (!r)
            return;
        const {animation: i} = r;
        i.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: r} = e;
        return r.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: r} = e;
        return r.startTime
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            const {resolved: r} = this;
            if (!r)
                return Bt;
            const {animation: i} = r;
            Ey(i, e)
        }
        return Bt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r} = e;
        r.playState === "finished" && this.updateFinishedPromise(),
        r.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r} = e;
        r.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r, keyframes: i, duration: a, type: l, ease: c, times: f} = e;
        if (r.playState === "idle" || r.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: m, onUpdate: g, onComplete: y, element: x, ...E} = this.options
              , b = new dh({
                ...E,
                keyframes: i,
                duration: a,
                type: l,
                ease: c,
                times: f,
                isGenerator: !0
            })
              , k = Bn(this.time);
            m.setWithVelocity(b.sample(k - Cl).value, b.sample(k).value, Cl)
        }
        const {onStop: h} = this.options;
        h && h(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: r, name: i, repeatDelay: a, repeatType: l, damping: c, type: f} = e;
        return H_() && i && $_.has(i) && r && r.owner && r.owner.current instanceof HTMLElement && !r.owner.getProps().onUpdate && !a && l !== "mirror" && c !== 0 && f !== "inertia"
    }
}
const Y_ = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , X_ = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , J_ = {
    type: "keyframes",
    duration: .8
}
  , Z_ = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , eA = (t, {keyframes: e}) => e.length > 2 ? J_ : as.has(t) ? t.startsWith("scale") ? X_(e[1]) : Y_ : Z_;
function tA({when: t, delay: e, delayChildren: r, staggerChildren: i, staggerDirection: a, repeat: l, repeatType: c, repeatDelay: f, from: h, elapsed: m, ...g}) {
    return !!Object.keys(g).length
}
const fh = (t, e, r, i={}, a, l) => c => {
    const f = Xf(i, t) || {}
      , h = f.delay || i.delay || 0;
    let {elapsed: m=0} = i;
    m = m - Bn(h);
    let g = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...f,
        delay: -m,
        onUpdate: x => {
            e.set(x),
            f.onUpdate && f.onUpdate(x)
        }
        ,
        onComplete: () => {
            c(),
            f.onComplete && f.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: l ? void 0 : a
    };
    tA(f) || (g = {
        ...g,
        ...eA(t, g)
    }),
    g.duration && (g.duration = Bn(g.duration)),
    g.repeatDelay && (g.repeatDelay = Bn(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0,
    g.delay === 0 && (y = !0)),
    y && !l && e.get() !== void 0) {
        const x = Hl(g.keyframes, f);
        if (x !== void 0)
            return Ue.update( () => {
                g.onUpdate(x),
                g.onComplete()
            }
            ),
            new wR([])
    }
    return !l && By.supports(g) ? new By(g) : new dh(g)
}
;
function nA({protectedKeys: t, needsAnimating: e}, r) {
    const i = t.hasOwnProperty(r) && e[r] !== !0;
    return e[r] = !1,
    i
}
function Px(t, e, {delay: r=0, transitionOverride: i, type: a}={}) {
    var l;
    let {transition: c=t.getDefaultTransition(), transitionEnd: f, ...h} = e;
    i && (c = i);
    const m = []
      , g = a && t.animationState && t.animationState.getState()[a];
    for (const y in h) {
        const x = t.getValue(y, (l = t.latestValues[y]) !== null && l !== void 0 ? l : null)
          , E = h[y];
        if (E === void 0 || g && nA(g, y))
            continue;
        const b = {
            delay: r,
            ...Xf(c || {}, y)
        };
        let k = !1;
        if (window.MotionHandoffAnimation) {
            const _ = Xw(t);
            if (_) {
                const F = window.MotionHandoffAnimation(_, y, Ue);
                F !== null && (b.startTime = F,
                k = !0)
            }
        }
        Yd(t, y),
        x.start(fh(y, x, E, t.shouldReduceMotion && as.has(y) ? {
            type: !1
        } : b, t, k));
        const S = x.animation;
        S && m.push(S)
    }
    return f && Promise.all(m).then( () => {
        Ue.update( () => {
            f && OR(t, f)
        }
        )
    }
    ),
    m
}
function rf(t, e, r={}) {
    var i;
    const a = ql(t, e, r.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {transition: l=t.getDefaultTransition() || {}} = a || {};
    r.transitionOverride && (l = r.transitionOverride);
    const c = a ? () => Promise.all(Px(t, a, r)) : () => Promise.resolve()
      , f = t.variantChildren && t.variantChildren.size ? (m=0) => {
        const {delayChildren: g=0, staggerChildren: y, staggerDirection: x} = l;
        return rA(t, e, g + m, y, x, r)
    }
    : () => Promise.resolve()
      , {when: h} = l;
    if (h) {
        const [m,g] = h === "beforeChildren" ? [c, f] : [f, c];
        return m().then( () => g())
    } else
        return Promise.all([c(), f(r.delay)])
}
function rA(t, e, r=0, i=0, a=1, l) {
    const c = []
      , f = (t.variantChildren.size - 1) * i
      , h = a === 1 ? (m=0) => m * i : (m=0) => f - m * i;
    return Array.from(t.variantChildren).sort(sA).forEach( (m, g) => {
        m.notify("AnimationStart", e),
        c.push(rf(m, e, {
            ...l,
            delay: r + h(g)
        }).then( () => m.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(c)
}
function sA(t, e) {
    return t.sortNodePosition(e)
}
function iA(t, e, r={}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const a = e.map(l => rf(t, l, r));
        i = Promise.all(a)
    } else if (typeof e == "string")
        i = rf(t, e, r);
    else {
        const a = typeof e == "function" ? ql(t, e, r.custom) : e;
        i = Promise.all(Px(t, a, r))
    }
    return i.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
const oA = Vf.length;
function Rx(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const r = t.parent ? Rx(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial),
        r
    }
    const e = {};
    for (let r = 0; r < oA; r++) {
        const i = Vf[r]
          , a = t.props[i];
        (go(a) || a === !1) && (e[i] = a)
    }
    return e
}
const aA = [...Ff].reverse()
  , lA = Ff.length;
function uA(t) {
    return e => Promise.all(e.map( ({animation: r, options: i}) => iA(t, r, i)))
}
function cA(t) {
    let e = uA(t)
      , r = Uy()
      , i = !0;
    const a = h => (m, g) => {
        var y;
        const x = ql(t, g, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (x) {
            const {transition: E, transitionEnd: b, ...k} = x;
            m = {
                ...m,
                ...k,
                ...b
            }
        }
        return m
    }
    ;
    function l(h) {
        e = h(t)
    }
    function c(h) {
        const {props: m} = t
          , g = Rx(t.parent) || {}
          , y = []
          , x = new Set;
        let E = {}
          , b = 1 / 0;
        for (let S = 0; S < lA; S++) {
            const _ = aA[S]
              , F = r[_]
              , M = m[_] !== void 0 ? m[_] : g[_]
              , V = go(M)
              , U = _ === h ? F.isActive : null;
            U === !1 && (b = S);
            let Y = M === g[_] && M !== m[_] && V;
            if (Y && i && t.manuallyAnimateOnMount && (Y = !1),
            F.protectedKeys = {
                ...E
            },
            !F.isActive && U === null || !M && !F.prevProp || zl(M) || typeof M == "boolean")
                continue;
            const ne = dA(F.prevProp, M);
            let j = ne || _ === h && F.isActive && !Y && V || S > b && V
              , W = !1;
            const Q = Array.isArray(M) ? M : [M];
            let J = Q.reduce(a(_), {});
            U === !1 && (J = {});
            const {prevResolvedValues: $={}} = F
              , re = {
                ...$,
                ...J
            }
              , Te = de => {
                j = !0,
                x.has(de) && (W = !0,
                x.delete(de)),
                F.needsAnimating[de] = !0;
                const B = t.getValue(de);
                B && (B.liveStyle = !1)
            }
            ;
            for (const de in re) {
                const B = J[de]
                  , le = $[de];
                if (E.hasOwnProperty(de))
                    continue;
                let X = !1;
                Kd(B) && Kd(le) ? X = !zw(B, le) : X = B !== le,
                X ? B != null ? Te(de) : x.add(de) : B !== void 0 && x.has(de) ? Te(de) : F.protectedKeys[de] = !0
            }
            F.prevProp = M,
            F.prevResolvedValues = J,
            F.isActive && (E = {
                ...E,
                ...J
            }),
            i && t.blockInitialAnimation && (j = !1),
            j && (!(Y && ne) || W) && y.push(...Q.map(de => ({
                animation: de,
                options: {
                    type: _
                }
            })))
        }
        if (x.size) {
            const S = {};
            x.forEach(_ => {
                const F = t.getBaseTarget(_)
                  , M = t.getValue(_);
                M && (M.liveStyle = !0),
                S[_] = F ?? null
            }
            ),
            y.push({
                animation: S
            })
        }
        let k = !!y.length;
        return i && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (k = !1),
        i = !1,
        k ? e(y) : Promise.resolve()
    }
    function f(h, m) {
        var g;
        if (r[h].isActive === m)
            return Promise.resolve();
        (g = t.variantChildren) === null || g === void 0 || g.forEach(x => {
            var E;
            return (E = x.animationState) === null || E === void 0 ? void 0 : E.setActive(h, m)
        }
        ),
        r[h].isActive = m;
        const y = c(h);
        for (const x in r)
            r[x].protectedKeys = {};
        return y
    }
    return {
        animateChanges: c,
        setActive: f,
        setAnimateFunction: l,
        getState: () => r,
        reset: () => {
            r = Uy(),
            i = !0
        }
    }
}
function dA(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !zw(e, t) : !1
}
function Ur(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Uy() {
    return {
        animate: Ur(!0),
        whileInView: Ur(),
        whileHover: Ur(),
        whileTap: Ur(),
        whileDrag: Ur(),
        whileFocus: Ur(),
        exit: Ur()
    }
}
class Tr {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
class fA extends Tr {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = cA(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        zl(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: r} = this.node.prevProps || {};
        e !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let hA = 0;
class pA extends Tr {
    constructor() {
        super(...arguments),
        this.id = hA++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const a = this.node.animationState.setActive("exit", !e);
        r && !e && a.then( () => r(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const mA = {
    animation: {
        Feature: fA
    },
    exit: {
        Feature: pA
    }
};
function xo(t, e, r, i={
    passive: !0
}) {
    return t.addEventListener(e, r, i),
    () => t.removeEventListener(e, r)
}
function Mo(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const gA = t => e => eh(e) && t(e, Mo(e));
function co(t, e, r, i) {
    return xo(t, e, gA(r), i)
}
const zy = (t, e) => Math.abs(t - e);
function yA(t, e) {
    const r = zy(t.x, e.x)
      , i = zy(t.y, e.y);
    return Math.sqrt(r ** 2 + i ** 2)
}
class _x {
    constructor(e, r, {transformPagePoint: i, contextWindow: a, dragSnapToOrigin: l=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = cd(this.lastMoveEventInfo, this.history)
              , x = this.startEvent !== null
              , E = yA(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!x && !E)
                return;
            const {point: b} = y
              , {timestamp: k} = ft;
            this.history.push({
                ...b,
                timestamp: k
            });
            const {onStart: S, onMove: _} = this.handlers;
            x || (S && S(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            _ && _(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, x) => {
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = ud(x, this.transformPagePoint),
            Ue.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, x) => {
            this.end();
            const {onEnd: E, onSessionEnd: b, resumeAnimation: k} = this.handlers;
            if (this.dragSnapToOrigin && k && k(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = cd(y.type === "pointercancel" ? this.lastMoveEventInfo : ud(x, this.transformPagePoint), this.history);
            this.startEvent && E && E(y, S),
            b && b(y, S)
        }
        ,
        !eh(e))
            return;
        this.dragSnapToOrigin = l,
        this.handlers = r,
        this.transformPagePoint = i,
        this.contextWindow = a || window;
        const c = Mo(e)
          , f = ud(c, this.transformPagePoint)
          , {point: h} = f
          , {timestamp: m} = ft;
        this.history = [{
            ...h,
            timestamp: m
        }];
        const {onSessionStart: g} = r;
        g && g(e, cd(f, this.history)),
        this.removeListeners = Lo(co(this.contextWindow, "pointermove", this.handlePointerMove), co(this.contextWindow, "pointerup", this.handlePointerUp), co(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        kr(this.updatePoint)
    }
}
function ud(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function $y(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function cd({point: t}, e) {
    return {
        point: t,
        delta: $y(t, Ax(e)),
        offset: $y(t, vA(e)),
        velocity: wA(e, .1)
    }
}
function vA(t) {
    return t[0]
}
function Ax(t) {
    return t[t.length - 1]
}
function wA(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let r = t.length - 1
      , i = null;
    const a = Ax(t);
    for (; r >= 0 && (i = t[r],
    !(a.timestamp - i.timestamp > Bn(e))); )
        r--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const l = Un(a.timestamp - i.timestamp);
    if (l === 0)
        return {
            x: 0,
            y: 0
        };
    const c = {
        x: (a.x - i.x) / l,
        y: (a.y - i.y) / l
    };
    return c.x === 1 / 0 && (c.x = 0),
    c.y === 1 / 0 && (c.y = 0),
    c
}
const Nx = 1e-4
  , xA = 1 - Nx
  , bA = 1 + Nx
  , jx = .01
  , SA = 0 - jx
  , kA = 0 + jx;
function Ut(t) {
    return t.max - t.min
}
function EA(t, e, r) {
    return Math.abs(t - e) <= r
}
function qy(t, e, r, i=.5) {
    t.origin = i,
    t.originPoint = He(e.min, e.max, t.origin),
    t.scale = Ut(r) / Ut(e),
    t.translate = He(r.min, r.max, t.origin) - t.originPoint,
    (t.scale >= xA && t.scale <= bA || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= SA && t.translate <= kA || isNaN(t.translate)) && (t.translate = 0)
}
function fo(t, e, r, i) {
    qy(t.x, e.x, r.x, i ? i.originX : void 0),
    qy(t.y, e.y, r.y, i ? i.originY : void 0)
}
function Hy(t, e, r) {
    t.min = r.min + e.min,
    t.max = t.min + Ut(e)
}
function TA(t, e, r) {
    Hy(t.x, e.x, r.x),
    Hy(t.y, e.y, r.y)
}
function Wy(t, e, r) {
    t.min = e.min - r.min,
    t.max = t.min + Ut(e)
}
function ho(t, e, r) {
    Wy(t.x, e.x, r.x),
    Wy(t.y, e.y, r.y)
}
function CA(t, {min: e, max: r}, i) {
    return e !== void 0 && t < e ? t = i ? He(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? He(r, t, i.max) : Math.min(t, r)),
    t
}
function Ky(t, e, r) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}
function PA(t, {top: e, left: r, bottom: i, right: a}) {
    return {
        x: Ky(t.x, r, a),
        y: Ky(t.y, e, i)
    }
}
function Qy(t, e) {
    let r = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([r,i] = [i, r]),
    {
        min: r,
        max: i
    }
}
function RA(t, e) {
    return {
        x: Qy(t.x, e.x),
        y: Qy(t.y, e.y)
    }
}
function _A(t, e) {
    let r = .5;
    const i = Ut(t)
      , a = Ut(e);
    return a > i ? r = ni(e.min, e.max - i, t.min) : i > a && (r = ni(t.min, t.max - a, e.min)),
    zn(0, 1, r)
}
function AA(t, e) {
    const r = {};
    return e.min !== void 0 && (r.min = e.min - t.min),
    e.max !== void 0 && (r.max = e.max - t.min),
    r
}
const sf = .35;
function NA(t=sf) {
    return t === !1 ? t = 0 : t === !0 && (t = sf),
    {
        x: Gy(t, "left", "right"),
        y: Gy(t, "top", "bottom")
    }
}
function Gy(t, e, r) {
    return {
        min: Yy(t, e),
        max: Yy(t, r)
    }
}
function Yy(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Xy = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Vs = () => ({
    x: Xy(),
    y: Xy()
})
  , Jy = () => ({
    min: 0,
    max: 0
})
  , Xe = () => ({
    x: Jy(),
    y: Jy()
});
function Gt(t) {
    return [t("x"), t("y")]
}
function Ox({top: t, left: e, right: r, bottom: i}) {
    return {
        x: {
            min: e,
            max: r
        },
        y: {
            min: t,
            max: i
        }
    }
}
function jA({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function OA(t, e) {
    if (!e)
        return t;
    const r = e({
        x: t.left,
        y: t.top
    })
      , i = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: r.y,
        left: r.x,
        bottom: i.y,
        right: i.x
    }
}
function dd(t) {
    return t === void 0 || t === 1
}
function of({scale: t, scaleX: e, scaleY: r}) {
    return !dd(t) || !dd(e) || !dd(r)
}
function zr(t) {
    return of(t) || Lx(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function Lx(t) {
    return Zy(t.x) || Zy(t.y)
}
function Zy(t) {
    return t && t !== "0%"
}
function Pl(t, e, r) {
    const i = t - r
      , a = e * i;
    return r + a
}
function e0(t, e, r, i, a) {
    return a !== void 0 && (t = Pl(t, a, i)),
    Pl(t, r, i) + e
}
function af(t, e=0, r=1, i, a) {
    t.min = e0(t.min, e, r, i, a),
    t.max = e0(t.max, e, r, i, a)
}
function Mx(t, {x: e, y: r}) {
    af(t.x, e.translate, e.scale, e.originPoint),
    af(t.y, r.translate, r.scale, r.originPoint)
}
const t0 = .999999999999
  , n0 = 1.0000000000001;
function LA(t, e, r, i=!1) {
    const a = r.length;
    if (!a)
        return;
    e.x = e.y = 1;
    let l, c;
    for (let f = 0; f < a; f++) {
        l = r[f],
        c = l.projectionDelta;
        const {visualElement: h} = l.options;
        h && h.props.style && h.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && Us(t, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }),
        c && (e.x *= c.x.scale,
        e.y *= c.y.scale,
        Mx(t, c)),
        i && zr(l.latestValues) && Us(t, l.latestValues))
    }
    e.x < n0 && e.x > t0 && (e.x = 1),
    e.y < n0 && e.y > t0 && (e.y = 1)
}
function Bs(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function r0(t, e, r, i, a=.5) {
    const l = He(t.min, t.max, a);
    af(t, e, r, l, i)
}
function Us(t, e) {
    r0(t.x, e.x, e.scaleX, e.scale, e.originX),
    r0(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function Dx(t, e) {
    return Ox(OA(t.getBoundingClientRect(), e))
}
function MA(t, e, r) {
    const i = Dx(t, r)
      , {scroll: a} = e;
    return a && (Bs(i.x, a.offset.x),
    Bs(i.y, a.offset.y)),
    i
}
const Ix = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , DA = new WeakMap;
class IA {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Xe(),
        this.visualElement = e
    }
    start(e, {snapToCursor: r=!1}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const a = g => {
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            r && this.snapToCursor(Mo(g).point)
        }
          , l = (g, y) => {
            const {drag: x, dragPropagation: E, onDragStart: b} = this.getProps();
            if (x && !E && (this.openDragLock && this.openDragLock(),
            this.openDragLock = RR(x),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Gt(S => {
                let _ = this.getAxisMotionValue(S).get() || 0;
                if (kn.test(_)) {
                    const {projection: F} = this.visualElement;
                    if (F && F.layout) {
                        const M = F.layout.layoutBox[S];
                        M && (_ = Ut(M) * (parseFloat(_) / 100))
                    }
                }
                this.originPoint[S] = _
            }
            ),
            b && Ue.postRender( () => b(g, y)),
            Yd(this.visualElement, "transform");
            const {animationState: k} = this.visualElement;
            k && k.setActive("whileDrag", !0)
        }
          , c = (g, y) => {
            const {dragPropagation: x, dragDirectionLock: E, onDirectionLock: b, onDrag: k} = this.getProps();
            if (!x && !this.openDragLock)
                return;
            const {offset: S} = y;
            if (E && this.currentDirection === null) {
                this.currentDirection = FA(S),
                this.currentDirection !== null && b && b(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, S),
            this.updateAxis("y", y.point, S),
            this.visualElement.render(),
            k && k(g, y)
        }
          , f = (g, y) => this.stop(g, y)
          , h = () => Gt(g => {
            var y;
            return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: m} = this.getProps();
        this.panSession = new _x(e,{
            onSessionStart: a,
            onStart: l,
            onMove: c,
            onSessionEnd: f,
            resumeAnimation: h
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: Ix(this.visualElement)
        })
    }
    stop(e, r) {
        const i = this.isDragging;
        if (this.cancel(),
        !i)
            return;
        const {velocity: a} = r;
        this.startAnimation(a);
        const {onDragEnd: l} = this.getProps();
        l && Ue.postRender( () => l(e, r))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: r} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        r && r.setActive("whileDrag", !1)
    }
    updateAxis(e, r, i) {
        const {drag: a} = this.getProps();
        if (!i || !nl(e, a, this.currentDirection))
            return;
        const l = this.getAxisMotionValue(e);
        let c = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (c = CA(c, this.constraints[e], this.elastic[e])),
        l.set(c)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: r, dragElastic: i} = this.getProps()
          , a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , l = this.constraints;
        r && Is(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = PA(a.layoutBox, r) : this.constraints = !1,
        this.elastic = NA(i),
        l !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && Gt(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = AA(a.layoutBox[c], this.constraints[c]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: r} = this.getProps();
        if (!e || !Is(e))
            return !1;
        const i = e.current
          , {projection: a} = this.visualElement;
        if (!a || !a.layout)
            return !1;
        const l = MA(i, a.root, this.visualElement.getTransformPagePoint());
        let c = RA(a.layout.layoutBox, l);
        if (r) {
            const f = r(jA(c));
            this.hasMutatedConstraints = !!f,
            f && (c = Ox(f))
        }
        return c
    }
    startAnimation(e) {
        const {drag: r, dragMomentum: i, dragElastic: a, dragTransition: l, dragSnapToOrigin: c, onDragTransitionEnd: f} = this.getProps()
          , h = this.constraints || {}
          , m = Gt(g => {
            if (!nl(g, r, this.currentDirection))
                return;
            let y = h && h[g] || {};
            c && (y = {
                min: 0,
                max: 0
            });
            const x = a ? 200 : 1e6
              , E = a ? 40 : 1e7
              , b = {
                type: "inertia",
                velocity: i ? e[g] : 0,
                bounceStiffness: x,
                bounceDamping: E,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...l,
                ...y
            };
            return this.startAxisValueAnimation(g, b)
        }
        );
        return Promise.all(m).then(f)
    }
    startAxisValueAnimation(e, r) {
        const i = this.getAxisMotionValue(e);
        return Yd(this.visualElement, e),
        i.start(fh(e, i, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        Gt(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Gt(e => {
            var r;
            return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.pause()
        }
        )
    }
    getAnimationState(e) {
        var r;
        return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.state
    }
    getAxisMotionValue(e) {
        const r = `_drag${e.toUpperCase()}`
          , i = this.visualElement.getProps()
          , a = i[r];
        return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Gt(r => {
            const {drag: i} = this.getProps();
            if (!nl(r, i, this.currentDirection))
                return;
            const {projection: a} = this.visualElement
              , l = this.getAxisMotionValue(r);
            if (a && a.layout) {
                const {min: c, max: f} = a.layout.layoutBox[r];
                l.set(e[r] - He(c, f, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: r} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!Is(r) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        Gt(c => {
            const f = this.getAxisMotionValue(c);
            if (f && this.constraints !== !1) {
                const h = f.get();
                a[c] = _A({
                    min: h,
                    max: h
                }, this.constraints[c])
            }
        }
        );
        const {transformTemplate: l} = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        Gt(c => {
            if (!nl(c, e, null))
                return;
            const f = this.getAxisMotionValue(c)
              , {min: h, max: m} = this.constraints[c];
            f.set(He(h, m, a[c]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        DA.set(this.visualElement, this);
        const e = this.visualElement.current
          , r = co(e, "pointerdown", h => {
            const {drag: m, dragListener: g=!0} = this.getProps();
            m && g && this.start(h)
        }
        )
          , i = () => {
            const {dragConstraints: h} = this.getProps();
            Is(h) && h.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: a} = this.visualElement
          , l = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(),
        a.updateLayout()),
        Ue.read(i);
        const c = xo(window, "resize", () => this.scalePositionWithinConstraints())
          , f = a.addEventListener("didUpdate", ( ({delta: h, hasLayoutChanged: m}) => {
            this.isDragging && m && (Gt(g => {
                const y = this.getAxisMotionValue(g);
                y && (this.originPoint[g] += h[g].translate,
                y.set(y.get() + h[g].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            c(),
            r(),
            l(),
            f && f()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: r=!1, dragDirectionLock: i=!1, dragPropagation: a=!1, dragConstraints: l=!1, dragElastic: c=sf, dragMomentum: f=!0} = e;
        return {
            ...e,
            drag: r,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: l,
            dragElastic: c,
            dragMomentum: f
        }
    }
}
function nl(t, e, r) {
    return (e === !0 || e === t) && (r === null || r === t)
}
function FA(t, e=10) {
    let r = null;
    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"),
    r
}
class VA extends Tr {
    constructor(e) {
        super(e),
        this.removeGroupControls = Bt,
        this.removeListeners = Bt,
        this.controls = new IA(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Bt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const s0 = t => (e, r) => {
    t && Ue.postRender( () => t(e, r))
}
;
class BA extends Tr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Bt
    }
    onPointerDown(e) {
        this.session = new _x(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Ix(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: r, onPan: i, onPanEnd: a} = this.node.getProps();
        return {
            onSessionStart: s0(e),
            onStart: s0(r),
            onMove: i,
            onEnd: (l, c) => {
                delete this.session,
                a && Ue.postRender( () => a(l, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = co(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function UA() {
    const t = N.useContext(Bl);
    if (t === null)
        return [!0, null];
    const {isPresent: e, onExitComplete: r, register: i} = t
      , a = N.useId();
    N.useEffect( () => i(a), []);
    const l = N.useCallback( () => r && r(a), [a, r]);
    return !e && r ? [!1, l] : [!0]
}
const ml = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function i0(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const to = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (ve.test(t))
                t = parseFloat(t);
            else
                return t;
        const r = i0(t, e.target.x)
          , i = i0(t, e.target.y);
        return `${r}% ${i}%`
    }
}
  , zA = {
    correct: (t, {treeScale: e, projectionDelta: r}) => {
        const i = t
          , a = Er.parse(t);
        if (a.length > 5)
            return i;
        const l = Er.createTransformer(t)
          , c = typeof a[0] != "number" ? 1 : 0
          , f = r.x.scale * e.x
          , h = r.y.scale * e.y;
        a[0 + c] /= f,
        a[1 + c] /= h;
        const m = He(f, h, .5);
        return typeof a[2 + c] == "number" && (a[2 + c] /= m),
        typeof a[3 + c] == "number" && (a[3 + c] /= m),
        l(a)
    }
};
class $A extends N.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: r, switchLayoutGroup: i, layoutId: a} = this.props
          , {projection: l} = e;
        H2(qA),
        l && (r.group && r.group.add(l),
        i && i.register && a && i.register(l),
        l.root.didUpdate(),
        l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        l.setOptions({
            ...l.options,
            onExitComplete: () => this.safeToRemove()
        })),
        ml.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: r, visualElement: i, drag: a, isPresent: l} = this.props
          , c = i.projection;
        return c && (c.isPresent = l,
        a || e.layoutDependency !== r || r === void 0 ? c.willUpdate() : this.safeToRemove(),
        e.isPresent !== l && (l ? c.promote() : c.relegate() || Ue.postRender( () => {
            const f = c.getStack();
            (!f || !f.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        Uf.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: r, switchLayoutGroup: i} = this.props
          , {projection: a} = e;
        a && (a.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(a),
        i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function Fx(t) {
    const [e,r] = UA()
      , i = N.useContext(Mf);
    return w.jsx($A, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: N.useContext(_w),
        isPresent: e,
        safeToRemove: r
    })
}
const qA = {
    borderRadius: {
        ...to,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: to,
    borderTopRightRadius: to,
    borderBottomLeftRadius: to,
    borderBottomRightRadius: to,
    boxShadow: zA
};
function HA(t, e, r) {
    const i = xt(t) ? t : vo(t);
    return i.start(fh("", i, e, r)),
    i.animation
}
function WA(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const KA = (t, e) => t.depth - e.depth;
class QA {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        th(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        nh(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(KA),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function GA(t, e) {
    const r = En.now()
      , i = ({timestamp: a}) => {
        const l = a - r;
        l >= e && (kr(i),
        t(l - e))
    }
    ;
    return Ue.read(i, !0),
    () => kr(i)
}
const Vx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , YA = Vx.length
  , o0 = t => typeof t == "string" ? parseFloat(t) : t
  , a0 = t => typeof t == "number" || ve.test(t);
function XA(t, e, r, i, a, l) {
    a ? (t.opacity = He(0, r.opacity !== void 0 ? r.opacity : 1, JA(i)),
    t.opacityExit = He(e.opacity !== void 0 ? e.opacity : 1, 0, ZA(i))) : l && (t.opacity = He(e.opacity !== void 0 ? e.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, i));
    for (let c = 0; c < YA; c++) {
        const f = `border${Vx[c]}Radius`;
        let h = l0(e, f)
          , m = l0(r, f);
        if (h === void 0 && m === void 0)
            continue;
        h || (h = 0),
        m || (m = 0),
        h === 0 || m === 0 || a0(h) === a0(m) ? (t[f] = Math.max(He(o0(h), o0(m), i), 0),
        (kn.test(m) || kn.test(h)) && (t[f] += "%")) : t[f] = m
    }
    (e.rotate || r.rotate) && (t.rotate = He(e.rotate || 0, r.rotate || 0, i))
}
function l0(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const JA = Bx(0, .5, sx)
  , ZA = Bx(.5, .95, Bt);
function Bx(t, e, r) {
    return i => i < t ? 0 : i > e ? 1 : r(ni(t, e, i))
}
function u0(t, e) {
    t.min = e.min,
    t.max = e.max
}
function Qt(t, e) {
    u0(t.x, e.x),
    u0(t.y, e.y)
}
function c0(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function d0(t, e, r, i, a) {
    return t -= e,
    t = Pl(t, 1 / r, i),
    a !== void 0 && (t = Pl(t, 1 / a, i)),
    t
}
function eN(t, e=0, r=1, i=.5, a, l=t, c=t) {
    if (kn.test(e) && (e = parseFloat(e),
    e = He(c.min, c.max, e / 100) - c.min),
    typeof e != "number")
        return;
    let f = He(l.min, l.max, i);
    t === l && (f -= e),
    t.min = d0(t.min, e, r, f, a),
    t.max = d0(t.max, e, r, f, a)
}
function f0(t, e, [r,i,a], l, c) {
    eN(t, e[r], e[i], e[a], e.scale, l, c)
}
const tN = ["x", "scaleX", "originX"]
  , nN = ["y", "scaleY", "originY"];
function h0(t, e, r, i) {
    f0(t.x, e, tN, r ? r.x : void 0, i ? i.x : void 0),
    f0(t.y, e, nN, r ? r.y : void 0, i ? i.y : void 0)
}
function p0(t) {
    return t.translate === 0 && t.scale === 1
}
function Ux(t) {
    return p0(t.x) && p0(t.y)
}
function m0(t, e) {
    return t.min === e.min && t.max === e.max
}
function rN(t, e) {
    return m0(t.x, e.x) && m0(t.y, e.y)
}
function g0(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function zx(t, e) {
    return g0(t.x, e.x) && g0(t.y, e.y)
}
function y0(t) {
    return Ut(t.x) / Ut(t.y)
}
function v0(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class sN {
    constructor() {
        this.members = []
    }
    add(e) {
        th(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (nh(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(e) {
        const r = this.members.findIndex(a => e === a);
        if (r === 0)
            return !1;
        let i;
        for (let a = r; a >= 0; a--) {
            const l = this.members[a];
            if (l.isPresent !== !1) {
                i = l;
                break
            }
        }
        return i ? (this.promote(i),
        !0) : !1
    }
    promote(e, r) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i,
        this.lead = e,
        e.show(),
        i)) {
            i.instance && i.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = i,
            r && (e.resumeFrom.preserveOpacity = !0),
            i.snapshot && (e.snapshot = i.snapshot,
            e.snapshot.latestValues = i.animationValues || i.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: a} = e.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: r, resumingFrom: i} = e;
            r.onExitComplete && r.onExitComplete(),
            i && i.options.onExitComplete && i.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function iN(t, e, r) {
    let i = "";
    const a = t.x.translate / e.x
      , l = t.y.translate / e.y
      , c = (r == null ? void 0 : r.z) || 0;
    if ((a || l || c) && (i = `translate3d(${a}px, ${l}px, ${c}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    r) {
        const {transformPerspective: m, rotate: g, rotateX: y, rotateY: x, skewX: E, skewY: b} = r;
        m && (i = `perspective(${m}px) ${i}`),
        g && (i += `rotate(${g}deg) `),
        y && (i += `rotateX(${y}deg) `),
        x && (i += `rotateY(${x}deg) `),
        E && (i += `skewX(${E}deg) `),
        b && (i += `skewY(${b}deg) `)
    }
    const f = t.x.scale * e.x
      , h = t.y.scale * e.y;
    return (f !== 1 || h !== 1) && (i += `scale(${f}, ${h})`),
    i || "none"
}
const $r = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , ao = typeof window < "u" && window.MotionDebug !== void 0
  , fd = ["", "X", "Y", "Z"]
  , oN = {
    visibility: "hidden"
}
  , w0 = 1e3;
let aN = 0;
function hd(t, e, r, i) {
    const {latestValues: a} = e;
    a[t] && (r[t] = a[t],
    e.setStaticValue(t, 0),
    i && (i[t] = 0))
}
function $x(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const r = Xw(e);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {layout: a, layoutId: l} = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Ue, !(a || l))
    }
    const {parent: i} = t;
    i && !i.hasCheckedOptimisedAppear && $x(i)
}
function qx({attachResizeListener: t, defaultParent: e, measureScroll: r, checkIsScrollRoot: i, resetTransform: a}) {
    return class {
        constructor(c={}, f=e == null ? void 0 : e()) {
            this.id = aN++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                ao && ($r.totalNodes = $r.resolvedTargetDeltas = $r.recalculatedProjection = 0),
                this.nodes.forEach(cN),
                this.nodes.forEach(mN),
                this.nodes.forEach(gN),
                this.nodes.forEach(dN),
                ao && window.MotionDebug.record($r)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = c,
            this.root = f ? f.root || f : this,
            this.path = f ? [...f.path, f] : [],
            this.parent = f,
            this.depth = f ? f.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new QA)
        }
        addEventListener(c, f) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new rh),
            this.eventHandlers.get(c).add(f)
        }
        notifyListeners(c, ...f) {
            const h = this.eventHandlers.get(c);
            h && h.notify(...f)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c, f=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = WA(c),
            this.instance = c;
            const {layoutId: h, layout: m, visualElement: g} = this.options;
            if (g && !g.current && g.mount(c),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            f && (m || h) && (this.isLayoutDirty = !0),
            t) {
                let y;
                const x = () => this.root.updateBlockedByResize = !1;
                t(c, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = GA(x, 250),
                    ml.hasAnimatedSinceResize && (ml.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(b0))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && g && (h || m) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: x, hasRelativeTargetChanged: E, layout: b}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const k = this.options.transition || g.getDefaultTransition() || bN
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: _} = g.getProps()
                  , F = !this.targetLayout || !zx(this.targetLayout, b) || E
                  , M = !x && E;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || M || x && (F || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, M);
                    const V = {
                        ...Xf(k, "layout"),
                        onPlay: S,
                        onComplete: _
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (V.delay = 0,
                    V.type = !1),
                    this.startAnimation(V)
                } else
                    x || b0(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = b
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            kr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(yN),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: c} = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && $x(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: f, layout: h} = this.options;
            if (f === void 0 && !h)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(x0);
                return
            }
            this.isUpdating || this.nodes.forEach(hN),
            this.isUpdating = !1,
            this.nodes.forEach(pN),
            this.nodes.forEach(lN),
            this.nodes.forEach(uN),
            this.clearAllSnapshots();
            const f = En.now();
            ft.delta = zn(0, 1e3 / 60, f - ft.timestamp),
            ft.timestamp = f,
            ft.isProcessing = !0,
            rd.update.process(ft),
            rd.preRender.process(ft),
            rd.render.process(ft),
            ft.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Uf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(fN),
            this.sharedNodes.forEach(vN)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ue.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ue.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Xe(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: f} = this.options;
            f && f.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c="measure") {
            let f = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (f = !1),
            f) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: h,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!a)
                return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , f = this.projectionDelta && !Ux(this.projectionDelta)
              , h = this.getTransformTemplate()
              , m = h ? h(this.latestValues, "") : void 0
              , g = m !== this.prevTransformTemplateValue;
            c && (f || zr(this.latestValues) || g) && (a(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(c=!0) {
            const f = this.measurePageBox();
            let h = this.removeElementScroll(f);
            return c && (h = this.removeTransform(h)),
            SN(h),
            {
                animationId: this.root.animationId,
                measuredBox: f,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {visualElement: f} = this.options;
            if (!f)
                return Xe();
            const h = f.measureViewportBox();
            if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(kN))) {
                const {scroll: g} = this.root;
                g && (Bs(h.x, g.offset.x),
                Bs(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(c) {
            var f;
            const h = Xe();
            if (Qt(h, c),
            !((f = this.scroll) === null || f === void 0) && f.wasRoot)
                return h;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m]
                  , {scroll: y, options: x} = g;
                g !== this.root && y && x.layoutScroll && (y.wasRoot && Qt(h, c),
                Bs(h.x, y.offset.x),
                Bs(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(c, f=!1) {
            const h = Xe();
            Qt(h, c);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !f && g.options.layoutScroll && g.scroll && g !== g.root && Us(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }),
                zr(g.latestValues) && Us(h, g.latestValues)
            }
            return zr(this.latestValues) && Us(h, this.latestValues),
            h
        }
        removeTransform(c) {
            const f = Xe();
            Qt(f, c);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !zr(m.latestValues))
                    continue;
                of(m.latestValues) && m.updateSnapshot();
                const g = Xe()
                  , y = m.measurePageBox();
                Qt(g, y),
                h0(f, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return zr(this.latestValues) && h0(f, this.latestValues),
            f
        }
        setTargetDelta(c) {
            this.targetDelta = c,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ft.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c=!1) {
            var f;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(c || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: x} = this.options;
            if (!(!this.layout || !(y || x))) {
                if (this.resolvedRelativeTargetAt = ft.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const E = this.getClosestProjectingParent();
                    E && E.layout && this.animationProgress !== 1 ? (this.relativeParent = E,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Xe(),
                    this.relativeTargetOrigin = Xe(),
                    ho(this.relativeTargetOrigin, this.layout.layoutBox, E.layout.layoutBox),
                    Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Xe(),
                    this.targetWithTransforms = Xe()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    TA(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Qt(this.target, this.layout.layoutBox),
                    Mx(this.target, this.targetDelta)) : Qt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const E = this.getClosestProjectingParent();
                        E && !!E.resumingFrom == !!this.resumingFrom && !E.options.layoutScroll && E.target && this.animationProgress !== 1 ? (this.relativeParent = E,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Xe(),
                        this.relativeTargetOrigin = Xe(),
                        ho(this.relativeTargetOrigin, this.target, E.target),
                        Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    ao && $r.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || of(this.parent.latestValues) || Lx(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var c;
            const f = this.getLead()
              , h = !!this.resumingFrom || this !== f;
            let m = !0;
            if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (m = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === ft.timestamp && (m = !1),
            m)
                return;
            const {layout: g, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || y))
                return;
            Qt(this.layoutCorrected, this.layout.layoutBox);
            const x = this.treeScale.x
              , E = this.treeScale.y;
            LA(this.layoutCorrected, this.treeScale, this.path, h),
            f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox,
            f.targetWithTransforms = Xe());
            const {target: b} = f;
            if (!b) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (c0(this.prevProjectionDelta.x, this.projectionDelta.x),
            c0(this.prevProjectionDelta.y, this.projectionDelta.y)),
            fo(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
            (this.treeScale.x !== x || this.treeScale.y !== E || !v0(this.projectionDelta.x, this.prevProjectionDelta.x) || !v0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", b)),
            ao && $r.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c=!0) {
            var f;
            if ((f = this.options.visualElement) === null || f === void 0 || f.scheduleRender(),
            c) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Vs(),
            this.projectionDelta = Vs(),
            this.projectionDeltaWithTransform = Vs()
        }
        setAnimationOrigin(c, f=!1) {
            const h = this.snapshot
              , m = h ? h.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , y = Vs();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !f;
            const x = Xe()
              , E = h ? h.source : void 0
              , b = this.layout ? this.layout.source : void 0
              , k = E !== b
              , S = this.getStack()
              , _ = !S || S.members.length <= 1
              , F = !!(k && !_ && this.options.crossfade === !0 && !this.path.some(xN));
            this.animationProgress = 0;
            let M;
            this.mixTargetDelta = V => {
                const U = V / 1e3;
                S0(y.x, c.x, U),
                S0(y.y, c.y, U),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ho(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                wN(this.relativeTarget, this.relativeTargetOrigin, x, U),
                M && rN(this.relativeTarget, M) && (this.isProjectionDirty = !1),
                M || (M = Xe()),
                Qt(M, this.relativeTarget)),
                k && (this.animationValues = g,
                XA(g, m, this.latestValues, U, F, _)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = U
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (kr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ue.update( () => {
                ml.hasAnimatedSinceResize = !0,
                this.currentAnimation = HA(0, w0, {
                    ...c,
                    onUpdate: f => {
                        this.mixTargetDelta(f),
                        c.onUpdate && c.onUpdate(f)
                    }
                    ,
                    onComplete: () => {
                        c.onComplete && c.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(w0),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {targetWithTransforms: f, target: h, layout: m, latestValues: g} = c;
            if (!(!f || !h || !m)) {
                if (this !== c && this.layout && m && Hx(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Xe();
                    const y = Ut(this.layout.layoutBox.x);
                    h.x.min = c.target.x.min,
                    h.x.max = h.x.min + y;
                    const x = Ut(this.layout.layoutBox.y);
                    h.y.min = c.target.y.min,
                    h.y.max = h.y.min + x
                }
                Qt(f, h),
                Us(f, g),
                fo(this.projectionDeltaWithTransform, this.layoutCorrected, f, g)
            }
        }
        registerSharedNode(c, f) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new sN),
            this.sharedNodes.get(c).add(f);
            const m = f.options.initialPromotionConfig;
            f.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(f) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var c;
            const {layoutId: f} = this.options;
            return f ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
        }
        getPrevLead() {
            var c;
            const {layoutId: f} = this.options;
            return f ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
        }
        getStack() {
            const {layoutId: c} = this.options;
            if (c)
                return this.root.sharedNodes.get(c)
        }
        promote({needsReset: c, transition: f, preserveFollowOpacity: h}={}) {
            const m = this.getStack();
            m && m.promote(this, h),
            c && (this.projectionDelta = void 0,
            this.needsReset = !0),
            f && this.setOptions({
                transition: f
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: c} = this.options;
            if (!c)
                return;
            let f = !1;
            const {latestValues: h} = c;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (f = !0),
            !f)
                return;
            const m = {};
            h.z && hd("z", c, m, this.animationValues);
            for (let g = 0; g < fd.length; g++)
                hd(`rotate${fd[g]}`, c, m, this.animationValues),
                hd(`skew${fd[g]}`, c, m, this.animationValues);
            c.render();
            for (const g in m)
                c.setStaticValue(g, m[g]),
                this.animationValues && (this.animationValues[g] = m[g]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            var f, h;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return oN;
            const m = {
                visibility: ""
            }
              , g = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                m.opacity = "",
                m.pointerEvents = hl(c == null ? void 0 : c.pointerEvents) || "",
                m.transform = g ? g(this.latestValues, "") : "none",
                m;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const k = {};
                return this.options.layoutId && (k.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                k.pointerEvents = hl(c == null ? void 0 : c.pointerEvents) || ""),
                this.hasProjected && !zr(this.latestValues) && (k.transform = g ? g({}, "") : "none",
                this.hasProjected = !1),
                k
            }
            const x = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            m.transform = iN(this.projectionDeltaWithTransform, this.treeScale, x),
            g && (m.transform = g(x, m.transform));
            const {x: E, y: b} = this.projectionDelta;
            m.transformOrigin = `${E.origin * 100}% ${b.origin * 100}% 0`,
            y.animationValues ? m.opacity = y === this ? (h = (f = x.opacity) !== null && f !== void 0 ? f : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : m.opacity = y === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
            for (const k in Sl) {
                if (x[k] === void 0)
                    continue;
                const {correct: S, applyTo: _} = Sl[k]
                  , F = m.transform === "none" ? x[k] : S(x[k], y);
                if (_) {
                    const M = _.length;
                    for (let V = 0; V < M; V++)
                        m[_[V]] = F
                } else
                    m[k] = F
            }
            return this.options.layoutId && (m.pointerEvents = y === this ? hl(c == null ? void 0 : c.pointerEvents) || "" : "none"),
            m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var f;
                return (f = c.currentAnimation) === null || f === void 0 ? void 0 : f.stop()
            }
            ),
            this.root.nodes.forEach(x0),
            this.root.sharedNodes.clear()
        }
    }
}
function lN(t) {
    t.updateLayout()
}
function uN(t) {
    var e;
    const r = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
        const {layoutBox: i, measuredBox: a} = t.layout
          , {animationType: l} = t.options
          , c = r.source !== t.layout.source;
        l === "size" ? Gt(y => {
            const x = c ? r.measuredBox[y] : r.layoutBox[y]
              , E = Ut(x);
            x.min = i[y].min,
            x.max = x.min + E
        }
        ) : Hx(l, r.layoutBox, i) && Gt(y => {
            const x = c ? r.measuredBox[y] : r.layoutBox[y]
              , E = Ut(i[y]);
            x.max = x.min + E,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[y].max = t.relativeTarget[y].min + E)
        }
        );
        const f = Vs();
        fo(f, i, r.layoutBox);
        const h = Vs();
        c ? fo(h, t.applyTransform(a, !0), r.measuredBox) : fo(h, i, r.layoutBox);
        const m = !Ux(f);
        let g = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: x, layout: E} = y;
                if (x && E) {
                    const b = Xe();
                    ho(b, r.layoutBox, x.layoutBox);
                    const k = Xe();
                    ho(k, i, E.layoutBox),
                    zx(b, k) || (g = !0),
                    y.options.layoutRoot && (t.relativeTarget = k,
                    t.relativeTargetOrigin = b,
                    t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: r,
            delta: h,
            layoutDelta: f,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: g
        })
    } else if (t.isLead()) {
        const {onExitComplete: i} = t.options;
        i && i()
    }
    t.options.transition = void 0
}
function cN(t) {
    ao && $r.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function dN(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function fN(t) {
    t.clearSnapshot()
}
function x0(t) {
    t.clearMeasurements()
}
function hN(t) {
    t.isLayoutDirty = !1
}
function pN(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function b0(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function mN(t) {
    t.resolveTargetDelta()
}
function gN(t) {
    t.calcProjection()
}
function yN(t) {
    t.resetSkewAndRotation()
}
function vN(t) {
    t.removeLeadSnapshot()
}
function S0(t, e, r) {
    t.translate = He(e.translate, 0, r),
    t.scale = He(e.scale, 1, r),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function k0(t, e, r, i) {
    t.min = He(e.min, r.min, i),
    t.max = He(e.max, r.max, i)
}
function wN(t, e, r, i) {
    k0(t.x, e.x, r.x, i),
    k0(t.y, e.y, r.y, i)
}
function xN(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const bN = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , E0 = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , T0 = E0("applewebkit/") && !E0("chrome/") ? Math.round : Bt;
function C0(t) {
    t.min = T0(t.min),
    t.max = T0(t.max)
}
function SN(t) {
    C0(t.x),
    C0(t.y)
}
function Hx(t, e, r) {
    return t === "position" || t === "preserve-aspect" && !EA(y0(e), y0(r), .2)
}
function kN(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const EN = qx({
    attachResizeListener: (t, e) => xo(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , pd = {
    current: void 0
}
  , Wx = qx({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!pd.current) {
            const t = new EN({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            pd.current = t
        }
        return pd.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , TN = {
    pan: {
        Feature: BA
    },
    drag: {
        Feature: VA,
        ProjectionNode: Wx,
        MeasureLayout: Fx
    }
};
function P0(t, e, r) {
    const {props: i} = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
    const a = "onHover" + r
      , l = i[a];
    l && Ue.postRender( () => l(e, Mo(e)))
}
class CN extends Tr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = kR(e, r => (P0(this.node, r, "Start"),
        i => P0(this.node, i, "End"))))
    }
    unmount() {}
}
class PN extends Tr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Lo(xo(this.node.current, "focus", () => this.onFocus()), xo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function R0(t, e, r) {
    const {props: i} = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
    const a = "onTap" + (r === "End" ? "" : r)
      , l = i[a];
    l && Ue.postRender( () => l(e, Mo(e)))
}
class RN extends Tr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = PR(e, r => (R0(this.node, r, "Start"),
        (i, {success: a}) => R0(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const lf = new WeakMap
  , md = new WeakMap
  , _N = t => {
    const e = lf.get(t.target);
    e && e(t)
}
  , AN = t => {
    t.forEach(_N)
}
;
function NN({root: t, ...e}) {
    const r = t || document;
    md.has(r) || md.set(r, {});
    const i = md.get(r)
      , a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(AN,{
        root: t,
        ...e
    })),
    i[a]
}
function jN(t, e, r) {
    const i = NN(e);
    return lf.set(t, r),
    i.observe(t),
    () => {
        lf.delete(t),
        i.unobserve(t)
    }
}
const ON = {
    some: 0,
    all: 1
};
class LN extends Tr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: r, margin: i, amount: a="some", once: l} = e
          , c = {
            root: r ? r.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : ON[a]
        }
          , f = h => {
            const {isIntersecting: m} = h;
            if (this.isInView === m || (this.isInView = m,
            l && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: g, onViewportLeave: y} = this.node.getProps()
              , x = m ? g : y;
            x && x(h)
        }
        ;
        return jN(this.node.current, c, f)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: r} = this.node;
        ["amount", "margin", "root"].some(MN(e, r)) && this.startObserver()
    }
    unmount() {}
}
function MN({viewport: t={}}, {viewport: e={}}={}) {
    return r => t[r] !== e[r]
}
const DN = {
    inView: {
        Feature: LN
    },
    tap: {
        Feature: RN
    },
    focus: {
        Feature: PN
    },
    hover: {
        Feature: CN
    }
}
  , IN = {
    layout: {
        ProjectionNode: Wx,
        MeasureLayout: Fx
    }
}
  , uf = {
    current: null
}
  , Kx = {
    current: !1
};
function FN() {
    if (Kx.current = !0,
    !!If)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => uf.current = t.matches;
            t.addListener(e),
            e()
        } else
            uf.current = !1
}
function VN(t, e, r) {
    for (const i in e) {
        const a = e[i]
          , l = r[i];
        if (xt(a))
            t.addValue(i, a);
        else if (xt(l))
            t.addValue(i, vo(a, {
                owner: t
            }));
        else if (l !== a)
            if (t.hasValue(i)) {
                const c = t.getValue(i);
                c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
            } else {
                const c = t.getStaticValue(i);
                t.addValue(i, vo(c !== void 0 ? c : a, {
                    owner: t
                }))
            }
    }
    for (const i in r)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const _0 = new WeakMap
  , BN = [...cx, vt, Er]
  , UN = t => BN.find(ux(t))
  , A0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class zN {
    scrapeMotionValuesFromProps(e, r, i) {
        return {}
    }
    constructor({parent: e, props: r, presenceContext: i, reducedMotionConfig: a, blockInitialAnimation: l, visualState: c}, f={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = oh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const x = En.now();
            this.renderScheduledAt < x && (this.renderScheduledAt = x,
            Ue.render(this.render, !1, !0))
        }
        ;
        const {latestValues: h, renderState: m} = c;
        this.latestValues = h,
        this.baseTarget = {
            ...h
        },
        this.initialValues = r.initial ? {
            ...h
        } : {},
        this.renderState = m,
        this.parent = e,
        this.props = r,
        this.presenceContext = i,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = a,
        this.options = f,
        this.blockInitialAnimation = !!l,
        this.isControllingVariants = $l(r),
        this.isVariantNode = Pw(r),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: g, ...y} = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const x in y) {
            const E = y[x];
            h[x] !== void 0 && xt(E) && E.set(h[x], !1)
        }
    }
    mount(e) {
        this.current = e,
        _0.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (r, i) => this.bindToMotionValue(i, r)),
        Kx.current || FN(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : uf.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        _0.delete(this.current),
        this.projection && this.projection.unmount(),
        kr(this.notifyUpdate),
        kr(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const r = this.features[e];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, r) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = as.has(e)
          , a = r.on("change", f => {
            this.latestValues[e] = f,
            this.props.onUpdate && Ue.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , l = r.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, e, r)),
        this.valueSubscriptions.set(e, () => {
            a(),
            l(),
            c && c(),
            r.owner && r.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in ri) {
            const r = ri[e];
            if (!r)
                continue;
            const {isEnabled: i, Feature: a} = r;
            if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)),
            this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(),
                l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xe()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, r) {
        this.latestValues[e] = r
    }
    update(e, r) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = r;
        for (let i = 0; i < A0.length; i++) {
            const a = A0[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](),
            delete this.propEventSubscriptions[a]);
            const l = "on" + a
              , c = e[l];
            c && (this.propEventSubscriptions[a] = this.on(a, c))
        }
        this.prevMotionValues = VN(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const r = this.getClosestVariantNode();
        if (r)
            return r.variantChildren && r.variantChildren.add(e),
            () => r.variantChildren.delete(e)
    }
    addValue(e, r) {
        const i = this.values.get(e);
        r !== i && (i && this.removeValue(e),
        this.bindToMotionValue(e, r),
        this.values.set(e, r),
        this.latestValues[e] = r.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const r = this.valueSubscriptions.get(e);
        r && (r(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, r) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && r !== void 0 && (i = vo(r === null ? void 0 : r, {
            owner: this
        }),
        this.addValue(e, i)),
        i
    }
    readValue(e, r) {
        var i;
        let a = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return a != null && (typeof a == "string" && (ax(a) || ox(a)) ? a = parseFloat(a) : !UN(a) && Er.test(r) && (a = vx(e, r)),
        this.setBaseTarget(e, xt(a) ? a.get() : a)),
        xt(a) ? a.get() : a
    }
    setBaseTarget(e, r) {
        this.baseTarget[e] = r
    }
    getBaseTarget(e) {
        var r;
        const {initial: i} = this.props;
        let a;
        if (typeof i == "string" || typeof i == "object") {
            const c = qf(this.props, i, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
            c && (a = c[e])
        }
        if (i && a !== void 0)
            return a;
        const l = this.getBaseTargetFromProps(this.props, e);
        return l !== void 0 && !xt(l) ? l : this.initialValues[e] !== void 0 && a === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, r) {
        return this.events[e] || (this.events[e] = new rh),
        this.events[e].add(r)
    }
    notify(e, ...r) {
        this.events[e] && this.events[e].notify(...r)
    }
}
class Qx extends zN {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = wx
    }
    sortInstanceNodePosition(e, r) {
        return e.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, r) {
        return e.style ? e.style[r] : void 0
    }
    removeValueFromRenderState(e, {vars: r, style: i}) {
        delete r[e],
        delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        xt(e) && (this.childSubscription = e.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }
        ))
    }
}
function $N(t) {
    return window.getComputedStyle(t)
}
class qN extends Qx {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Nw
    }
    readValueFromInstance(e, r) {
        if (as.has(r)) {
            const i = uh(r);
            return i && i.default || 0
        } else {
            const i = $N(e)
              , a = (Bw(r) ? i.getPropertyValue(r) : i[r]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: r}) {
        return Dx(e, r)
    }
    build(e, r, i) {
        Qf(e, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return $f(e, r, i)
    }
}
class HN extends Qx {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Xe
    }
    getBaseTargetFromProps(e, r) {
        return e[r]
    }
    readValueFromInstance(e, r) {
        if (as.has(r)) {
            const i = uh(r);
            return i && i.default || 0
        }
        return r = jw.has(r) ? r : Bf(r),
        e.getAttribute(r)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return Mw(e, r, i)
    }
    build(e, r, i) {
        Gf(e, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, r, i, a) {
        Ow(e, r, i, a)
    }
    mount(e) {
        this.isSVGTag = Yf(e.tagName),
        super.mount(e)
    }
}
const WN = (t, e) => zf(t) ? new HN(e) : new qN(e,{
    allowProjection: t !== N.Fragment
})
  , KN = gR({
    ...mA,
    ...DN,
    ...TN,
    ...IN
}, WN)
  , Ie = j2(KN)
  , N0 = [{
    name: "Home",
    href: "#home"
}, {
    name: "About",
    href: "#about"
}, {
    name: "Skills",
    href: "#skills"
}, {
    name: "Projects",
    href: "#projects"
}, {
    name: "Certifications",
    href: "#certifications"
}, {
    name: "Contact",
    href: "#contact"
}];
function QN() {
    const [t,e] = N.useState(!1)
      , [r,i] = N.useState(!1);
    N.useEffect( () => {
        const l = () => i(window.scrollY > 20);
        return window.addEventListener("scroll", l),
        () => window.removeEventListener("scroll", l)
    }
    , []);
    const a = l => {
        e(!1);
        const c = document.querySelector(l);
        c && c.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return w.jsxs(Ie.nav, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${r ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100" : "bg-transparent"}`,
        children: [w.jsx("div", {
            className: "max-w-6xl mx-auto px-6",
            children: w.jsxs("div", {
                className: "flex items-center justify-between h-16 md:h-20",
                children: [w.jsx(Ie.a, {
                    href: "#home",
                    onClick: l => {
                        l.preventDefault(),
                        a("#home")
                    }
                    ,
                    className: "text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent",
                    whileHover: {
                        scale: 1.02
                    },
                    children: "JC"
                }), w.jsxs("div", {
                    className: "hidden md:flex items-center gap-1",
                    children: [N0.map(l => w.jsx("button", {
                        onClick: () => a(l.href),
                        className: "px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50",
                        children: l.name
                    }, l.name)), w.jsx("a", {
                        href: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692ac440f3f6b84b38b5157d/2d424028f_PersonalResume.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: w.jsxs(os, {
                            size: "sm",
                            className: "ml-4 bg-indigo-600 hover:bg-indigo-700 gap-2",
                            children: [w.jsx(gd, {
                                className: "w-4 h-4"
                            }), "Resume"]
                        })
                    })]
                }), w.jsx("button", {
                    onClick: () => e(!t),
                    className: "md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors",
                    children: t ? w.jsx(J0, {
                        className: "w-5 h-5"
                    }) : w.jsx(GS, {
                        className: "w-5 h-5"
                    })
                })]
            })
        }), w.jsx(E2, {
            children: t && w.jsx(Ie.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                className: "md:hidden bg-white border-t border-slate-100",
                children: w.jsxs("div", {
                    className: "px-6 py-4 space-y-1",
                    children: [N0.map(l => w.jsx("button", {
                        onClick: () => a(l.href),
                        className: "block w-full text-left px-4 py-3 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors",
                        children: l.name
                    }, l.name)), w.jsx("a", {
                        href: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692ac440f3f6b84b38b5157d/2d424028f_PersonalResume.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block mt-4",
                        children: w.jsxs(os, {
                            className: "w-full bg-indigo-600 hover:bg-indigo-700 gap-2",
                            children: [w.jsx(gd, {
                                className: "w-4 h-4"
                            }), "Download Resume"]
                        })
                    })]
                })
            })
        })]
    })
}
function GN() {
    const t = () => {
        var e;
        (e = document.querySelector("#about")) == null || e.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return w.jsxs("section", {
        id: "home",
        className: "min-h-screen flex items-center justify-center relative overflow-hidden",
        children: [w.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50"
        }), w.jsxs("div", {
            className: "absolute inset-0 overflow-hidden",
            children: [w.jsx(Ie.div, {
                animate: {
                    x: [0, 30, 0],
                    y: [0, -30, 0]
                },
                transition: {
                    duration: 20,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                },
                className: "absolute top-20 right-[20%] w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"
            }), w.jsx(Ie.div, {
                animate: {
                    x: [0, -20, 0],
                    y: [0, 20, 0]
                },
                transition: {
                    duration: 15,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                },
                className: "absolute bottom-20 left-[10%] w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"
            })]
        }), w.jsxs("div", {
            className: "relative z-10 max-w-6xl mx-auto px-6 py-20 text-center",
            children: [w.jsx(Ie.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5
                },
                children: w.jsxs("span", {
                    className: "inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-8",
                    children: [w.jsx("span", {
                        className: "w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                    }), "Open to Internship Opportunities"]
                })
            }), w.jsxs(Ie.h1, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    delay: .1
                },
                className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6",
                children: ["Hi, I'm", " ", w.jsx("span", {
                    className: "text-white",
children: "Jashwanth"

                })]
            }), w.jsx(Ie.p, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    delay: .2
                },
                className: "text-lg sm:text-xl md:text-2xl text-slate-600 mb-4 max-w-2xl mx-auto",
                children: "Data Analyst • IoT Enthusiast • Problem Solver"
            }), w.jsx(Ie.p, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    delay: .3
                },
                className: "text-base md:text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed",
                children: "Transforming raw data into actionable insights with Python, SQL & Power BI. Building smart solutions at the intersection of analytics and IoT."
            }), w.jsxs(Ie.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    delay: .4
                },
                className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",
                children: [w.jsx(os, {
                    size: "lg",
                    className: "bg-indigo-600 hover:bg-indigo-700 px-8 h-12 text-base",
                    onClick: () => {
                        var e;
                        return (e = document.querySelector("#projects")) == null ? void 0 : e.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                    ,
                    children: "View My Work"
                }), w.jsx(os, {
                    size: "lg",
                    variant: "outline",
                    className: "px-8 h-12 text-base border-slate-300 hover:bg-slate-50",
                    onClick: () => {
                        var e;
                        return (e = document.querySelector("#contact")) == null ? void 0 : e.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                    ,
                    children: "Get In Touch"
                })]
            }), w.jsxs(Ie.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    delay: .5
                },
                className: "flex items-center justify-center gap-4",
                children: [w.jsx("a", {
                    href: "https://github.com/jashwanth1128",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all hover:scale-110",
                    children: w.jsx(mf, {
                        className: "w-5 h-5"
                    })
                }), w.jsx("a", {
                    href: "https://www.linkedin.com/in/jashwanth-chitla/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all hover:scale-110",
                    children: w.jsx(gf, {
                        className: "w-5 h-5"
                    })
                }), w.jsx("a", {
                    href: "mailto:jashwanthmudiraj5@gmail.com",
                    className: "p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all hover:scale-110",
                    children: w.jsx(_l, {
                        className: "w-5 h-5"
                    })
                })]
            }), w.jsx(Ie.button, {
                onClick: t,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1,
                    y: [0, 10, 0]
                },
                transition: {
                    opacity: {
                        delay: 1,
                        duration: .5
                    },
                    y: {
                        delay: 1,
                        duration: 2,
                        repeat: 1 / 0
                    }
                },
                className: "absolute bottom-10 left-1/2 -translate-x-1/2 p-2 text-slate-400 hover:text-indigo-600 transition-colors",
                children: w.jsx(vS, {
                    className: "w-6 h-6"
                })
            })]
        })]
    })
}
const YN = [{
    icon: VS,
    title: "B.Tech CSE (IoT)",
    description: "Swami Vivekananda Institute of Technology, Hyderabad • Expected 2026"
}, {
    icon: X0,
    title: "Based in Hyderabad",
    description: "Telangana, India • Open to Remote Opportunities"
}, {
    icon: uk,
    title: "Project Lead",
    description: "Led multiple academic IoT projects including Smart Trolley & Line Following Robot"
}, {
    icon: Y0,
    title: "Continuous Learner",
    description: "Active in hackathons and online learning communities"
}];
function XN() {
    return w.jsx("section", {
        id: "about",
        className: "py-20 md:py-32 bg-white",
        children: w.jsxs("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [w.jsxs(Ie.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                className: "text-center mb-16",
                children: [w.jsx("span", {
                    className: "text-indigo-600 font-medium text-sm tracking-wider uppercase mb-4 block",
                    children: "About Me"
                }), w.jsx("h2", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6",
                    children: "Turning Data Into Decisions"
                })]
            }), w.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                children: [w.jsxs(Ie.div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5,
                        delay: .1
                    },
                    className: "space-y-6",
                    children: [w.jsxs("p", {
                        className: "text-lg text-slate-600 leading-relaxed",
                        children: ["I'm a ", w.jsx("span", {
                            className: "text-slate-900 font-medium",
                            children: "Data Analyst"
                        }), " and", " ", w.jsx("span", {
                            className: "text-slate-900 font-medium",
                            children: "IoT enthusiast"
                        }), " from Hyderabad, India. I transform raw data into actionable insights using Python, SQL, and Power BI."]
                    }), w.jsx("p", {
                        className: "text-lg text-slate-600 leading-relaxed",
                        children: "Currently pursuing my B.Tech in Computer Science with a specialization in Internet of Things, I blend analytical thinking with hands-on project experience—from customer behavior analytics to smart automation systems."
                    }), w.jsx("p", {
                        className: "text-lg text-slate-600 leading-relaxed",
                        children: "I've led multiple academic projects, organized peer study sessions, and consistently upskill through certifications from IBM, Microsoft, and LinkedIn Learning. I thrive in collaborative environments and enjoy tackling complex problems with data-driven solutions."
                    }), w.jsxs("div", {
                        className: "flex flex-wrap gap-6 pt-4",
                        children: [w.jsxs("div", {
                            className: "text-center",
                            children: [w.jsx("div", {
                                className: "text-3xl font-bold text-indigo-600",
                                children: "5+"
                            }), w.jsx("div", {
                                className: "text-sm text-slate-500",
                                children: "Certifications"
                            })]
                        }), w.jsxs("div", {
                            className: "text-center",
                            children: [w.jsx("div", {
                                className: "text-3xl font-bold text-indigo-600",
                                children: "3+"
                            }), w.jsx("div", {
                                className: "text-sm text-slate-500",
                                children: "Projects"
                            })]
                        }), w.jsxs("div", {
                            className: "text-center",
                            children: [w.jsx("div", {
                                className: "text-3xl font-bold text-indigo-600",
                                children: "2026"
                            }), w.jsx("div", {
                                className: "text-sm text-slate-500",
                                children: "Graduation"
                            })]
                        })]
                    })]
                }), w.jsx(Ie.div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5,
                        delay: .2
                    },
                    className: "grid sm:grid-cols-2 gap-4",
                    children: YN.map( (t, e) => w.jsxs(Ie.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .3,
                            delay: .1 * e
                        },
                        className: "p-6 rounded-2xl bg-slate-50 hover:bg-indigo-50 transition-colors group",
                        children: [w.jsx("div", {
                            className: "w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors",
                            children: w.jsx(t.icon, {
                                className: "w-6 h-6 text-indigo-600"
                            })
                        }), w.jsx("h3", {
                            className: "font-semibold text-slate-900 mb-2",
                            children: t.title
                        }), w.jsx("p", {
                            className: "text-sm text-slate-500 leading-relaxed",
                            children: t.description
                        })]
                    }, t.title))
                })]
            })]
        })
    })
}
const JN = [{
    title: "Technical Skills",
    color: "indigo",
    skills: [{
        name: "Python",
        icon: _S,
        level: 85,
        details: "Pandas, NumPy, Matplotlib"
    }, {
        name: "SQL / MySQL",
        icon: OS,
        level: 80,
        details: "Queries, Joins, Optimization"
    }, {
        name: "Power BI",
        icon: G0,
        level: 75,
        details: "Dashboards, DAX, Reports"
    }, {
        name: "MS Excel",
        icon: ik,
        level: 85,
        details: "Pivot Tables, VLOOKUP, Charts"
    }]
}, {
    title: "Soft Skills",
    color: "emerald",
    skills: [{
        name: "Problem Solving",
        icon: ES
    }, {
        name: "Logical Thinking",
        icon: Y0
    }, {
        name: "Communication",
        icon: XS
    }, {
        name: "Adaptability",
        icon: tk
    }]
}, {
    title: "Tools & Technologies",
    color: "slate",
    skills: [{
        name: "VS Code",
        icon: ak
    }, {
        name: "Jupyter Notebook",
        icon: $S
    }, {
        name: "GitHub",
        icon: DS
    }, {
        name: "MySQL Workbench",
        icon: dk
    }]
}]
  , ZN = {
    indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        text: "text-indigo-600",
        bar: "bg-indigo-500",
        barBg: "bg-indigo-100"
    },
    emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        text: "text-emerald-600",
        bar: "bg-emerald-500",
        barBg: "bg-emerald-100"
    },
    slate: {
        bg: "bg-slate-50",
        border: "border-slate-200",
        text: "text-slate-600",
        bar: "bg-slate-500",
        barBg: "bg-slate-200"
    }
};
function ej() {
    return w.jsx("section", {
        id: "skills",
        className: "py-20 md:py-32 bg-slate-50",
        children: w.jsxs("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [w.jsxs(Ie.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                className: "text-center mb-16",
                children: [w.jsx("span", {
                    className: "text-indigo-600 font-medium text-sm tracking-wider uppercase mb-4 block",
                    children: "Skills & Expertise"
                }), w.jsx("h2", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6",
                    children: "My Technical Toolkit"
                }), w.jsx("p", {
                    className: "text-slate-600 max-w-2xl mx-auto",
                    children: "A combination of technical proficiency and soft skills that help me deliver impactful data solutions."
                })]
            }), w.jsx("div", {
                className: "space-y-12",
                children: JN.map( (t, e) => {
                    const r = ZN[t.color];
                    return w.jsxs(Ie.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .5,
                            delay: e * .1
                        },
                        children: [w.jsxs("h3", {
                            className: "text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3",
                            children: [w.jsx("span", {
                                className: `w-3 h-3 rounded-full ${r.bar}`
                            }), t.title]
                        }), w.jsx("div", {
                            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                            children: t.skills.map( (i, a) => w.jsx(Ie.div, {
                                initial: {
                                    opacity: 0,
                                    scale: .95
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .3,
                                    delay: a * .05
                                },
                                whileHover: {
                                    y: -4
                                },
                                className: `p-5 rounded-2xl bg-white border ${r.border} shadow-sm hover:shadow-md transition-all`,
                                children: w.jsxs("div", {
                                    className: "flex items-start gap-4",
                                    children: [w.jsx("div", {
                                        className: `p-3 rounded-xl ${r.bg}`,
                                        children: w.jsx(i.icon, {
                                            className: `w-5 h-5 ${r.text}`
                                        })
                                    }), w.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [w.jsx("h4", {
                                            className: "font-medium text-slate-900 mb-1",
                                            children: i.name
                                        }), i.details && w.jsx("p", {
                                            className: "text-xs text-slate-500 mb-3",
                                            children: i.details
                                        }), i.level && w.jsxs("div", {
                                            className: "space-y-1",
                                            children: [w.jsx("div", {
                                                className: `h-1.5 rounded-full ${r.barBg} overflow-hidden`,
                                                children: w.jsx(Ie.div, {
                                                    initial: {
                                                        width: 0
                                                    },
                                                    whileInView: {
                                                        width: `${i.level}%`
                                                    },
                                                    viewport: {
                                                        once: !0
                                                    },
                                                    transition: {
                                                        duration: 1,
                                                        delay: .2
                                                    },
                                                    className: `h-full rounded-full ${r.bar}`
                                                })
                                            }), w.jsxs("span", {
                                                className: "text-xs text-slate-400",
                                                children: [i.level, "%"]
                                            })]
                                        })]
                                    })]
                                })
                            }, i.name))
                        })]
                    }, t.title)
                }
                )
            })]
        })
    })
}
const tj = Rl("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function cf({className: t, variant: e, ...r}) {
    return w.jsx("div", {
        className: Cn(tj({
            variant: e
        }), t),
        ...r
    })
}
const nj = [{
    title: "Customer Behavior Analysis",
    subtitle: "Data Analytics Project",
    description: "Developed an end-to-end analytics solution analyzing customer shopping behavior. Used Python for exploratory data analysis, SQL for querying and segmentation, and Power BI for interactive dashboards.",
    impact: ["Identified key customer segments for targeted marketing", "Uncovered product-category trends driving sales", "Provided regional performance insights for business decisions"],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Power BI"],
    icon: G0,
    color: "indigo",
    featured: !0
}, {
    title: "Smart Trolley System",
    subtitle: "IoT-Based Automation Project",
    description: "Designed and implemented a Smart Trolley using IR and Ultrasonic sensors for automatic object detection and movement control. The trolley follows the user while avoiding obstacles.",
    impact: ["Enhanced automation in smart retail environments", "Implemented real-time obstacle avoidance", "Led hardware integration and code optimization"],
    technologies: ["Arduino", "IR Sensors", "Ultrasonic Sensors", "C++", "IoT"],
    icon: NS,
    color: "emerald"
}, {
    title: "Solar Tracking System",
    subtitle: "Renewable Energy Optimization",
    description: "Developed a solar tracking system using LDR sensors and servo motors to automatically orient solar panels for maximum sunlight exposure, improving energy efficiency.",
    impact: ["Improved solar panel energy efficiency", "Automatic alignment for optimal sunlight", "Enhanced performance reliability"],
    technologies: ["LDR Sensors", "Servo Motors", "Arduino", "Embedded Systems"],
    icon: rk,
    color: "amber"
}]
  , rj = {
    indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        text: "text-indigo-600",
        badge: "bg-indigo-100 text-indigo-700",
        gradient: "from-indigo-500 to-indigo-600"
    },
    emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-600",
        badge: "bg-emerald-100 text-emerald-700",
        gradient: "from-emerald-500 to-emerald-600"
    },
    amber: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-600",
        badge: "bg-amber-100 text-amber-700",
        gradient: "from-amber-500 to-amber-600"
    }
};
function sj() {
    return w.jsx("section", {
        id: "projects",
        className: "py-20 md:py-32 bg-white",
        children: w.jsxs("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [w.jsxs(Ie.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                className: "text-center mb-16",
                children: [w.jsx("span", {
                    className: "text-indigo-600 font-medium text-sm tracking-wider uppercase mb-4 block",
                    children: "Featured Work"
                }), w.jsx("h2", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6",
                    children: "Projects That Define Me"
                }), w.jsx("p", {
                    className: "text-slate-600 max-w-2xl mx-auto",
                    children: "From data analytics to IoT automation, here are some projects that showcase my skills and passion."
                })]
            }), w.jsx("div", {
                className: "space-y-8",
                children: nj.map( (t, e) => {
                    const r = rj[t.color];
                    return w.jsxs(Ie.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .5,
                            delay: e * .1
                        },
                        className: `group relative overflow-hidden rounded-3xl border ${r.border} bg-white hover:shadow-xl transition-all duration-500`,
                        children: [t.featured && w.jsx("div", {
                            className: "absolute top-4 right-4 z-10",
                            children: w.jsx(cf, {
                                className: "bg-gradient-to-r from-indigo-600 to-emerald-500 text-white border-0",
                                children: "Featured"
                            })
                        }), w.jsxs("div", {
                            className: "grid md:grid-cols-5 gap-6 p-6 md:p-8",
                            children: [w.jsx("div", {
                                className: "md:col-span-1 flex md:flex-col items-center md:items-start gap-4",
                                children: w.jsx("div", {
                                    className: `w-16 h-16 rounded-2xl ${r.bg} flex items-center justify-center`,
                                    children: w.jsx(t.icon, {
                                        className: `w-8 h-8 ${r.text}`
                                    })
                                })
                            }), w.jsxs("div", {
                                className: "md:col-span-4 space-y-4",
                                children: [w.jsxs("div", {
                                    children: [w.jsx("span", {
                                        className: `text-sm font-medium ${r.text}`,
                                        children: t.subtitle
                                    }), w.jsx("h3", {
                                        className: "text-xl md:text-2xl font-bold text-slate-900 mt-1",
                                        children: t.title
                                    })]
                                }), w.jsx("p", {
                                    className: "text-slate-600 leading-relaxed",
                                    children: t.description
                                }), w.jsxs("div", {
                                    className: "space-y-2",
                                    children: [w.jsx("span", {
                                        className: "text-sm font-medium text-slate-700",
                                        children: "Key Outcomes:"
                                    }), w.jsx("ul", {
                                        className: "grid sm:grid-cols-2 gap-2",
                                        children: t.impact.map( (i, a) => w.jsxs("li", {
                                            className: "flex items-start gap-2 text-sm text-slate-600",
                                            children: [w.jsx("span", {
                                                className: `w-1.5 h-1.5 rounded-full ${r.text.replace("text", "bg")} mt-2 flex-shrink-0`
                                            }), i]
                                        }, a))
                                    })]
                                }), w.jsx("div", {
                                    className: "flex flex-wrap gap-2 pt-2",
                                    children: t.technologies.map(i => w.jsx(cf, {
                                        variant: "secondary",
                                        className: `${r.badge} font-normal`,
                                        children: i
                                    }, i))
                                })]
                            })]
                        }), w.jsx("div", {
                            className: `absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${r.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`
                        })]
                    }, t.title)
                }
                )
            })]
        })
    })
}
const ij = [{
    title: "Python for Data Science",
    issuer: "IBM",
    date: "Nov 2025",
    description: "Data manipulation, visualization, and analysis using Python libraries such as Pandas, NumPy, and Matplotlib.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
    color: "blue"
}, {
    title: "What is Generative AI",
    issuer: "LinkedIn Learning",
    date: "Nov 2025",
    description: "Foundational generative AI concepts, prompt design, and real-world AI applications in automation and analytics.",
    skills: ["AI", "Prompt Engineering", "Automation"],
    color: "purple"
}, {
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
    date: "Sep 2025",
    description: "Analytical thinking, data storytelling, and visualization using Microsoft Power BI and Excel tools.",
    skills: ["Power BI", "Excel", "Data Storytelling"],
    color: "indigo"
}, {
    title: "Data Fundamentals",
    issuer: "IBM",
    date: "Aug 2025",
    description: "Key data concepts including databases, SQL operations, and data pipeline fundamentals for analytics.",
    skills: ["SQL", "Databases", "Data Pipelines"],
    color: "cyan"
}, {
    title: "Excel Bootcamp",
    issuer: "LetsUpgrade",
    date: "Aug 2025",
    description: "Data cleaning, pivot tables, and dashboard creation for professional business reporting.",
    skills: ["Excel", "Pivot Tables", "Dashboards"],
    color: "emerald"
}]
  , oj = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    indigo: "from-indigo-500 to-indigo-600",
    cyan: "from-cyan-500 to-cyan-600",
    emerald: "from-emerald-500 to-emerald-600"
};
function aj() {
    return w.jsx("section", {
        id: "certifications",
        className: "py-20 md:py-32 bg-slate-50",
        children: w.jsxs("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [w.jsxs(Ie.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                className: "text-center mb-16",
                children: [w.jsx("span", {
                    className: "text-indigo-600 font-medium text-sm tracking-wider uppercase mb-4 block",
                    children: "Credentials"
                }), w.jsx("h2", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6",
                    children: "Certifications & Learning"
                }), w.jsx("p", {
                    className: "text-slate-600 max-w-2xl mx-auto",
                    children: "Continuously upskilling through industry-recognized certifications from leading tech companies."
                })]
            }), w.jsxs("div", {
                className: "relative",
                children: [w.jsx("div", {
                    className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-px"
                }), w.jsx("div", {
                    className: "space-y-8",
                    children: ij.map( (t, e) => w.jsxs(Ie.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .5,
                            delay: e * .1
                        },
                        className: `relative flex flex-col md:flex-row gap-4 md:gap-8 ${e % 2 === 0 ? "md:flex-row-reverse" : ""}`,
                        children: [w.jsx("div", {
                            className: "absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-indigo-600 -translate-x-1.5 mt-8 md:mt-6 z-10 ring-4 ring-white"
                        }), w.jsx("div", {
                            className: "hidden md:block md:w-1/2"
                        }), w.jsx("div", {
                            className: "ml-10 md:ml-0 md:w-1/2",
                            children: w.jsxs("div", {
                                className: "bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100",
                                children: [w.jsxs("div", {
                                    className: "flex items-start gap-4 mb-4",
                                    children: [w.jsx("div", {
                                        className: `w-12 h-12 rounded-xl bg-gradient-to-br ${oj[t.color]} flex items-center justify-center flex-shrink-0`,
                                        children: w.jsx(SS, {
                                            className: "w-6 h-6 text-white"
                                        })
                                    }), w.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [w.jsx("h3", {
                                            className: "font-semibold text-slate-900 text-lg leading-tight",
                                            children: t.title
                                        }), w.jsx("p", {
                                            className: "text-indigo-600 text-sm font-medium mt-1",
                                            children: t.issuer
                                        })]
                                    })]
                                }), w.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-slate-500 mb-3",
                                    children: [w.jsx(CS, {
                                        className: "w-4 h-4"
                                    }), t.date]
                                }), w.jsx("p", {
                                    className: "text-slate-600 text-sm leading-relaxed mb-4",
                                    children: t.description
                                }), w.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: t.skills.map(r => w.jsx(cf, {
                                        variant: "secondary",
                                        className: "bg-slate-100 text-slate-600 font-normal text-xs",
                                        children: r
                                    }, r))
                                })]
                            })
                        })]
                    }, t.title))
                })]
            })]
        })
    })
}
const df = N.forwardRef( ({className: t, type: e, ...r}, i) => w.jsx("input", {
    type: e,
    className: Cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: i,
    ...r
}));
df.displayName = "Input";
const Gx = N.forwardRef( ({className: t, ...e}, r) => w.jsx("textarea", {
    className: Cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: r,
    ...e
}));
Gx.displayName = "Textarea";
var lj = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , uj = lj.reduce( (t, e) => {
    const r = bw(`Primitive.${e}`)
      , i = N.forwardRef( (a, l) => {
        const {asChild: c, ...f} = a
          , h = c ? r : e;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        w.jsx(h, {
            ...f,
            ref: l
        })
    }
    );
    return i.displayName = `Primitive.${e}`,
    {
        ...t,
        [e]: i
    }
}
, {})
  , cj = "Label"
  , Yx = N.forwardRef( (t, e) => w.jsx(uj.label, {
    ...t,
    ref: e,
    onMouseDown: r => {
        var a;
        r.target.closest("button, input, select, textarea") || ((a = t.onMouseDown) == null || a.call(t, r),
        !r.defaultPrevented && r.detail > 1 && r.preventDefault())
    }
}));
Yx.displayName = cj;
var Xx = Yx;
const dj = Rl("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , gl = N.forwardRef( ({className: t, ...e}, r) => w.jsx(Xx, {
    ref: r,
    className: Cn(dj(), t),
    ...e
}));
gl.displayName = Xx.displayName;
function fj(t) {
    if (typeof document > "u")
        return;
    let e = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    e.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
}
Array(12).fill(0);
let ff = 1;
class hj {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            const r = this.subscribers.indexOf(e);
            this.subscribers.splice(r, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(r => r(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var r;
            const {message: i, ...a} = e
              , l = typeof (e == null ? void 0 : e.id) == "number" || ((r = e.id) == null ? void 0 : r.length) > 0 ? e.id : ff++
              , c = this.toasts.find(h => h.id === l)
              , f = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(l) && this.dismissedToasts.delete(l),
            c ? this.toasts = this.toasts.map(h => h.id === l ? (this.publish({
                ...h,
                ...e,
                id: l,
                title: i
            }),
            {
                ...h,
                ...e,
                id: l,
                dismissible: f,
                title: i
            }) : h) : this.addToast({
                title: i,
                ...a,
                dismissible: f,
                id: l
            }),
            l
        }
        ,
        this.dismiss = e => (e ? (this.dismissedToasts.add(e),
        requestAnimationFrame( () => this.subscribers.forEach(r => r({
            id: e,
            dismiss: !0
        })))) : this.toasts.forEach(r => {
            this.subscribers.forEach(i => i({
                id: r.id,
                dismiss: !0
            }))
        }
        ),
        e),
        this.message = (e, r) => this.create({
            ...r,
            message: e
        }),
        this.error = (e, r) => this.create({
            ...r,
            message: e,
            type: "error"
        }),
        this.success = (e, r) => this.create({
            ...r,
            type: "success",
            message: e
        }),
        this.info = (e, r) => this.create({
            ...r,
            type: "info",
            message: e
        }),
        this.warning = (e, r) => this.create({
            ...r,
            type: "warning",
            message: e
        }),
        this.loading = (e, r) => this.create({
            ...r,
            type: "loading",
            message: e
        }),
        this.promise = (e, r) => {
            if (!r)
                return;
            let i;
            r.loading !== void 0 && (i = this.create({
                ...r,
                promise: e,
                type: "loading",
                message: r.loading,
                description: typeof r.description != "function" ? r.description : void 0
            }));
            const a = Promise.resolve(e instanceof Function ? e() : e);
            let l = i !== void 0, c;
            const f = a.then(async m => {
                if (c = ["resolve", m],
                Ls.isValidElement(m))
                    l = !1,
                    this.create({
                        id: i,
                        type: "default",
                        message: m
                    });
                else if (mj(m) && !m.ok) {
                    l = !1;
                    const y = typeof r.error == "function" ? await r.error(`HTTP error! status: ${m.status}`) : r.error
                      , x = typeof r.description == "function" ? await r.description(`HTTP error! status: ${m.status}`) : r.description
                      , b = typeof y == "object" && !Ls.isValidElement(y) ? y : {
                        message: y
                    };
                    this.create({
                        id: i,
                        type: "error",
                        description: x,
                        ...b
                    })
                } else if (m instanceof Error) {
                    l = !1;
                    const y = typeof r.error == "function" ? await r.error(m) : r.error
                      , x = typeof r.description == "function" ? await r.description(m) : r.description
                      , b = typeof y == "object" && !Ls.isValidElement(y) ? y : {
                        message: y
                    };
                    this.create({
                        id: i,
                        type: "error",
                        description: x,
                        ...b
                    })
                } else if (r.success !== void 0) {
                    l = !1;
                    const y = typeof r.success == "function" ? await r.success(m) : r.success
                      , x = typeof r.description == "function" ? await r.description(m) : r.description
                      , b = typeof y == "object" && !Ls.isValidElement(y) ? y : {
                        message: y
                    };
                    this.create({
                        id: i,
                        type: "success",
                        description: x,
                        ...b
                    })
                }
            }
            ).catch(async m => {
                if (c = ["reject", m],
                r.error !== void 0) {
                    l = !1;
                    const g = typeof r.error == "function" ? await r.error(m) : r.error
                      , y = typeof r.description == "function" ? await r.description(m) : r.description
                      , E = typeof g == "object" && !Ls.isValidElement(g) ? g : {
                        message: g
                    };
                    this.create({
                        id: i,
                        type: "error",
                        description: y,
                        ...E
                    })
                }
            }
            ).finally( () => {
                l && (this.dismiss(i),
                i = void 0),
                r.finally == null || r.finally.call(r)
            }
            )
              , h = () => new Promise( (m, g) => f.then( () => c[0] === "reject" ? g(c[1]) : m(c[1])).catch(g));
            return typeof i != "string" && typeof i != "number" ? {
                unwrap: h
            } : Object.assign(i, {
                unwrap: h
            })
        }
        ,
        this.custom = (e, r) => {
            const i = (r == null ? void 0 : r.id) || ff++;
            return this.create({
                jsx: e(i),
                id: i,
                ...r
            }),
            i
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
const Yt = new hj
  , pj = (t, e) => {
    const r = (e == null ? void 0 : e.id) || ff++;
    return Yt.addToast({
        title: t,
        ...e,
        id: r
    }),
    r
}
  , mj = t => t && typeof t == "object" && "ok"in t && typeof t.ok == "boolean" && "status"in t && typeof t.status == "number"
  , gj = pj
  , yj = () => Yt.toasts
  , vj = () => Yt.getActiveToasts()
  , wj = Object.assign(gj, {
    success: Yt.success,
    info: Yt.info,
    warning: Yt.warning,
    error: Yt.error,
    custom: Yt.custom,
    message: Yt.message,
    promise: Yt.promise,
    dismiss: Yt.dismiss,
    loading: Yt.loading
}, {
    getHistory: yj,
    getToasts: vj
});
fj("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
const xj = [{
    icon: _l,
    label: "Email",
    value: "jashwanth@gmail.com",
    href: "mailto:jashwanth@gmail.com"
}, {
    icon: ZS,
    label: "Phone",
    value: "+91 9160798426",
    href: "tel:+919160798426"
}, {
    icon: X0,
    label: "Location",
    value: "Hyderabad, Telangana, India",
    href: null
}]
  , bj = [{
    icon: mf,
    label: "GitHub",
    href: "https://github.com/jashwanth1128"
}, {
    icon: gf,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jashwanth-chitla/"
}, {
    icon: _l,
    label: "Email",
    href: "mailto:jashwanthmudiraj5@gmail.com"
}];
function Sj() {
    const [t,e] = N.useState({
        name: "",
        email: "",
        message: ""
    })
      , [r,i] = N.useState(!1)
      , a = async l => {
        l.preventDefault(),
        i(!0),
        await new Promise(c => setTimeout(c, 1e3)),
        wj.success("Message sent! I'll get back to you soon."),
        e({
            name: "",
            email: "",
            message: ""
        }),
        i(!1)
    }
    ;
    return w.jsx("section", {
        id: "contact",
        className: "py-20 md:py-32 bg-white",
        children: w.jsxs("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [w.jsxs(Ie.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                className: "text-center mb-16",
                children: [w.jsx("span", {
                    className: "text-indigo-600 font-medium text-sm tracking-wider uppercase mb-4 block",
                    children: "Get In Touch"
                }), w.jsx("h2", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6",
                    children: "Let's Work Together"
                }), w.jsx("p", {
                    className: "text-slate-600 max-w-2xl mx-auto",
                    children: "I'm currently looking for internship opportunities in data analytics. Feel free to reach out if you'd like to connect!"
                })]
            }), w.jsxs("div", {
                className: "grid lg:grid-cols-5 gap-12",
                children: [w.jsxs(Ie.div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "lg:col-span-2 space-y-8",
                    children: [w.jsx("div", {
                        className: "space-y-4",
                        children: xj.map(l => w.jsxs("div", {
                            className: "flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors group",
                            children: [w.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-indigo-100 transition-colors",
                                children: w.jsx(l.icon, {
                                    className: "w-5 h-5 text-indigo-600"
                                })
                            }), w.jsxs("div", {
                                children: [w.jsx("p", {
                                    className: "text-sm text-slate-500",
                                    children: l.label
                                }), l.href ? w.jsx("a", {
                                    href: l.href,
                                    className: "font-medium text-slate-900 hover:text-indigo-600 transition-colors",
                                    children: l.value
                                }) : w.jsx("p", {
                                    className: "font-medium text-slate-900",
                                    children: l.value
                                })]
                            })]
                        }, l.label))
                    }), w.jsxs("div", {
                        children: [w.jsx("h3", {
                            className: "font-medium text-slate-900 mb-4",
                            children: "Connect with me"
                        }), w.jsx("div", {
                            className: "flex gap-3",
                            children: bj.map(l => w.jsx("a", {
                                href: l.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "w-12 h-12 rounded-xl bg-slate-100 hover:bg-indigo-600 flex items-center justify-center text-slate-600 hover:text-white transition-all hover:scale-110",
                                children: w.jsx(l.icon, {
                                    className: "w-5 h-5"
                                })
                            }, l.label))
                        })]
                    }), w.jsxs("div", {
                        className: "p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-white",
                        children: [w.jsx("h3", {
                            className: "font-semibold mb-2",
                            children: "Download My Resume"
                        }), w.jsx("p", {
                            className: "text-indigo-100 text-sm mb-4",
                            children: "Get a detailed overview of my skills and experience."
                        }), w.jsx("a", {
                            href: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692ac440f3f6b84b38b5157d/2d424028f_PersonalResume.pdf",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: w.jsxs(os, {
                                variant: "secondary",
                                className: "w-full bg-white text-indigo-700 hover:bg-indigo-50 gap-2",
                                children: [w.jsx(gd, {
                                    className: "w-4 h-4"
                                }), "Download PDF"]
                            })
                        })]
                    })]
                }), w.jsx(Ie.div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5,
                        delay: .1
                    },
                    className: "lg:col-span-3",
                    children: w.jsx("form", {
                        onSubmit: a,
                        className: "bg-slate-50 rounded-3xl p-6 md:p-8",
                        children: w.jsxs("div", {
                            className: "space-y-6",
                            children: [w.jsxs("div", {
                                className: "grid sm:grid-cols-2 gap-6",
                                children: [w.jsxs("div", {
                                    className: "space-y-2",
                                    children: [w.jsx(gl, {
                                        htmlFor: "name",
                                        className: "text-slate-700",
                                        children: "Your Name"
                                    }), w.jsx(df, {
                                        id: "name",
                                        placeholder: "John Doe",
                                        value: t.name,
                                        onChange: l => e({
                                            ...t,
                                            name: l.target.value
                                        }),
                                        required: !0,
                                        className: "h-12 bg-white border-slate-200 focus:border-indigo-500"
                                    })]
                                }), w.jsxs("div", {
                                    className: "space-y-2",
                                    children: [w.jsx(gl, {
                                        htmlFor: "email",
                                        className: "text-slate-700",
                                        children: "Your Email"
                                    }), w.jsx(df, {
                                        id: "email",
                                        type: "email",
                                        placeholder: "john@example.com",
                                        value: t.email,
                                        onChange: l => e({
                                            ...t,
                                            email: l.target.value
                                        }),
                                        required: !0,
                                        className: "h-12 bg-white border-slate-200 focus:border-indigo-500"
                                    })]
                                })]
                            }), w.jsxs("div", {
                                className: "space-y-2",
                                children: [w.jsx(gl, {
                                    htmlFor: "message",
                                    className: "text-slate-700",
                                    children: "Your Message"
                                }), w.jsx(Gx, {
                                    id: "message",
                                    placeholder: "Tell me about your opportunity or project...",
                                    value: t.message,
                                    onChange: l => e({
                                        ...t,
                                        message: l.target.value
                                    }),
                                    required: !0,
                                    rows: 6,
                                    className: "bg-white border-slate-200 focus:border-indigo-500 resize-none"
                                })]
                            }), w.jsx(os, {
                                type: "submit",
                                size: "lg",
                                disabled: r,
                                className: "w-full h-12 bg-indigo-600 hover:bg-indigo-700 gap-2",
                                children: r ? w.jsx(w.Fragment, {
                                    children: "Sending..."
                                }) : w.jsxs(w.Fragment, {
                                    children: ["Send Message", w.jsx(xS, {
                                        className: "w-4 h-4"
                                    })]
                                })
                            })]
                        })
                    })
                })]
            })]
        })
    })
}
const kj = [{
    icon: mf,
    label: "GitHub",
    href: "https://github.com/jashwanth1128"
}, {
    icon: gf,
    label: "LinkedIn",
    href: "https://linkedin.com"
}, {
    icon: _l,
    label: "Email",
    href: "mailto:jashwanth@gmail.com"
}]
  , Ej = [{
    name: "Home",
    href: "#home"
}, {
    name: "About",
    href: "#about"
}, {
    name: "Skills",
    href: "#skills"
}, {
    name: "Projects",
    href: "#projects"
}, {
    name: "Contact",
    href: "#contact"
}];
function Tj() {
    const t = e => {
        const r = document.querySelector(e);
        r && r.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return w.jsx("footer", {
        className: "bg-slate-900 text-white",
        children: w.jsxs("div", {
            className: "max-w-6xl mx-auto px-6 py-12",
            children: [w.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 mb-8",
                children: [w.jsxs("div", {
                    children: [w.jsx("h3", {
                        className: "text-2xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-4",
                        children: "Jashwanth Chitla"
                    }), w.jsx("p", {
                        className: "text-slate-400 text-sm leading-relaxed mb-4",
                        children: "Data Analyst & IoT Enthusiast turning data into decisions. Open to internship opportunities in data analytics."
                    }), w.jsx("div", {
                        className: "flex gap-3",
                        children: kj.map(e => w.jsx("a", {
                            href: e.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-all hover:scale-110",
                            children: w.jsx(e.icon, {
                                className: "w-4 h-4"
                            })
                        }, e.label))
                    })]
                }), w.jsxs("div", {
                    children: [w.jsx("h4", {
                        className: "font-semibold mb-4",
                        children: "Quick Links"
                    }), w.jsx("ul", {
                        className: "space-y-2",
                        children: Ej.map(e => w.jsx("li", {
                            children: w.jsx("button", {
                                onClick: () => t(e.href),
                                className: "text-slate-400 hover:text-white text-sm transition-colors",
                                children: e.name
                            })
                        }, e.name))
                    })]
                }), w.jsxs("div", {
                    children: [w.jsx("h4", {
                        className: "font-semibold mb-4",
                        children: "Contact"
                    }), w.jsxs("ul", {
                        className: "space-y-2 text-sm text-slate-400",
                        children: [w.jsx("li", {
                            children: w.jsx("a", {
                                href: "mailto:jashwanth@gmail.com",
                                className: "hover:text-white transition-colors",
                                children: "jashwanth@gmail.com"
                            })
                        }), w.jsx("li", {
                            children: w.jsx("a", {
                                href: "tel:+919160798426",
                                className: "hover:text-white transition-colors",
                                children: "+91 9160798426"
                            })
                        }), w.jsx("li", {
                            children: "Hyderabad, Telangana, India"
                        })]
                    })]
                })]
            }), w.jsxs("div", {
                className: "border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4",
                children: [w.jsxs("p", {
                    className: "text-slate-500 text-sm text-center sm:text-left",
                    children: ["© ", new Date().getFullYear(), " Jashwanth Chitla. All rights reserved."]
                }), w.jsxs("p", {
                    className: "text-slate-500 text-sm flex items-center gap-1",
                    children: ["Built with ", w.jsx(US, {
                        className: "w-4 h-4 text-red-500 fill-red-500"
                    }), " using React & Tailwind"]
                })]
            })]
        })
    })
}
function Cj() {
    return w.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [w.jsx(QN, {}), w.jsxs("main", {
            children: [w.jsx(GN, {}), w.jsx(XN, {}), w.jsx(ej, {}), w.jsx(sj, {}), w.jsx(aj, {}), w.jsx(Sj, {})]
        }), w.jsx(Tj, {})]
    })
}
const Pj = {
    Home: Cj
}
  , Jx = {
    mainPage: "Home",
    Pages: Pj
};
function Rj() {
    const t = kf()
      , {isAuthenticated: e} = xw()
      , {Pages: r, mainPage: i} = Jx
      , a = i;
    return N.useEffect( () => {
        var l;
        (l = window.parent) == null || l.postMessage({
            type: "app_changed_url",
            url: window.location.href
        }, "*")
    }
    , [t]),
    N.useEffect( () => {
        const l = t.pathname;
        let c;
        if (l === "/" || l === "")
            c = a;
        else {
            const f = l.replace(/^\//, "").split("/")[0];
            c = Object.keys(r).find(g => g.toLowerCase() === f.toLowerCase()) || null
        }
        e && c && Ds.appLogs.logUserInApp(c).catch( () => {}
        )
    }
    , [t, e, r, a]),
    null
}
function _j({}) {
    var a;
    const e = kf().pathname.substring(1)
      , {data: r, isFetched: i} = jE({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                return {
                    user: await Ds.auth.me(),
                    isAuthenticated: !0
                }
            } catch {
                return {
                    user: null,
                    isAuthenticated: !1
                }
            }
        }
    });
    return w.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: w.jsx("div", {
            className: "max-w-md w-full",
            children: w.jsxs("div", {
                className: "text-center space-y-6",
                children: [w.jsxs("div", {
                    className: "space-y-2",
                    children: [w.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), w.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), w.jsxs("div", {
                    className: "space-y-3",
                    children: [w.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), w.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", w.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && r.isAuthenticated && ((a = r.user) == null ? void 0 : a.role) === "admin" && w.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: w.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [w.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: w.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), w.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [w.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), w.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), w.jsx("div", {
                    className: "pt-6",
                    children: w.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [w.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: w.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const Aj = () => w.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
    children: w.jsx("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: w.jsxs("div", {
            className: "text-center",
            children: [w.jsx("div", {
                className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                children: w.jsx("svg", {
                    className: "w-8 h-8 text-orange-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: w.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), w.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Access Restricted"
            }), w.jsx("p", {
                className: "text-slate-600 mb-8",
                children: "You are not registered to use this application. Please contact the app administrator to request access."
            }), w.jsxs("div", {
                className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                children: [w.jsx("p", {
                    children: "If you believe this is an error, you can:"
                }), w.jsxs("ul", {
                    className: "list-disc list-inside mt-2 space-y-1",
                    children: [w.jsx("li", {
                        children: "Verify you are logged in with the correct account"
                    }), w.jsx("li", {
                        children: "Contact the app administrator for access"
                    }), w.jsx("li", {
                        children: "Try logging out and back in again"
                    })]
                })]
            })]
        })
    })
})
  , {Pages: Zx, Layout: j0, mainPage: Nj} = Jx
  , e1 = Nj
  , jj = Zx[e1]
  , O0 = ({children: t, currentPageName: e}) => j0 ? w.jsx(j0, {
    currentPageName: e,
    children: t
}) : w.jsx(w.Fragment, {
    children: t
})
  , Oj = () => {
    const {isLoadingAuth: t, isLoadingPublicSettings: e, authError: r, isAuthenticated: i, navigateToLogin: a} = xw();
    if (e || t)
        return w.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: w.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
    if (r) {
        if (r.type === "user_not_registered")
            return w.jsx(Aj, {});
        if (r.type === "auth_required")
            return a(),
            null
    }
    return w.jsxs(vT, {
        children: [w.jsx(il, {
            path: "/",
            element: w.jsx(O0, {
                currentPageName: e1,
                children: w.jsx(jj, {})
            })
        }), Object.entries(Zx).map( ([l,c]) => w.jsx(il, {
            path: `/${l}`,
            element: w.jsx(O0, {
                currentPageName: l,
                children: w.jsx(c, {})
            })
        }, l)), w.jsx(il, {
            path: "*",
            element: w.jsx(_j, {})
        })]
    })
}
;
function Lj() {
    return w.jsx(d2, {
        children: w.jsxs(xE, {
            client: OE,
            children: [w.jsxs(bT, {
                children: [w.jsx(Rj, {}), w.jsx(Oj, {})]
            }), w.jsx(Qk, {}), w.jsx(LE, {})]
        })
    })
}
aS.createRoot(document.getElementById("root")).render(w.jsx(Lj, {}));

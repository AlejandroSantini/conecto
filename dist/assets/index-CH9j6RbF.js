(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
    new MutationObserver((n) => {
        for (const u of n)
            if (u.type === 'childList')
                for (const i of u.addedNodes)
                    i.tagName === 'LINK' && i.rel === 'modulepreload' && a(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function l(n) {
        const u = {};
        return (
            n.integrity && (u.integrity = n.integrity),
            n.referrerPolicy && (u.referrerPolicy = n.referrerPolicy),
            n.crossOrigin === 'use-credentials'
                ? (u.credentials = 'include')
                : n.crossOrigin === 'anonymous'
                  ? (u.credentials = 'omit')
                  : (u.credentials = 'same-origin'),
            u
        );
    }
    function a(n) {
        if (n.ep) return;
        n.ep = !0;
        const u = l(n);
        fetch(n.href, u);
    }
})();
function Qv(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Yd = { exports: {} },
    Zi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zv = Symbol.for('react.transitional.element'),
    Kv = Symbol.for('react.fragment');
function Gd(e, t, l) {
    var a = null;
    if ((l !== void 0 && (a = '' + l), t.key !== void 0 && (a = '' + t.key), 'key' in t)) {
        l = {};
        for (var n in t) n !== 'key' && (l[n] = t[n]);
    } else l = t;
    return ((t = l.ref), { $$typeof: Zv, type: e, key: a, ref: t !== void 0 ? t : null, props: l });
}
Zi.Fragment = Kv;
Zi.jsx = Gd;
Zi.jsxs = Gd;
Yd.exports = Zi;
var D = Yd.exports,
    Xd = { exports: {} },
    Z = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vs = Symbol.for('react.transitional.element'),
    kv = Symbol.for('react.portal'),
    Jv = Symbol.for('react.fragment'),
    Fv = Symbol.for('react.strict_mode'),
    $v = Symbol.for('react.profiler'),
    Wv = Symbol.for('react.consumer'),
    Pv = Symbol.for('react.context'),
    Iv = Symbol.for('react.forward_ref'),
    e0 = Symbol.for('react.suspense'),
    t0 = Symbol.for('react.memo'),
    Qd = Symbol.for('react.lazy'),
    Hf = Symbol.iterator;
function l0(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Hf && e[Hf]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Zd = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Kd = Object.assign,
    kd = {};
function Ja(e, t, l) {
    ((this.props = e), (this.context = t), (this.refs = kd), (this.updater = l || Zd));
}
Ja.prototype.isReactComponent = {};
Ja.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.'
        );
    this.updater.enqueueSetState(this, e, t, 'setState');
};
Ja.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Jd() {}
Jd.prototype = Ja.prototype;
function gs(e, t, l) {
    ((this.props = e), (this.context = t), (this.refs = kd), (this.updater = l || Zd));
}
var ps = (gs.prototype = new Jd());
ps.constructor = gs;
Kd(ps, Ja.prototype);
ps.isPureReactComponent = !0;
var Lf = Array.isArray,
    he = { H: null, A: null, T: null, S: null, V: null },
    Fd = Object.prototype.hasOwnProperty;
function bs(e, t, l, a, n, u) {
    return ((l = u.ref), { $$typeof: vs, type: e, key: t, ref: l !== void 0 ? l : null, props: u });
}
function a0(e, t) {
    return bs(e.type, t, void 0, void 0, void 0, e.props);
}
function Ss(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === vs;
}
function n0(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
        '$' +
        e.replace(/[=:]/g, function (l) {
            return t[l];
        })
    );
}
var qf = /\/+/g;
function Rr(e, t) {
    return typeof e == 'object' && e !== null && e.key != null ? n0('' + e.key) : t.toString(36);
}
function Vf() {}
function u0(e) {
    switch (e.status) {
        case 'fulfilled':
            return e.value;
        case 'rejected':
            throw e.reason;
        default:
            switch (
                (typeof e.status == 'string'
                    ? e.then(Vf, Vf)
                    : ((e.status = 'pending'),
                      e.then(
                          function (t) {
                              e.status === 'pending' && ((e.status = 'fulfilled'), (e.value = t));
                          },
                          function (t) {
                              e.status === 'pending' && ((e.status = 'rejected'), (e.reason = t));
                          }
                      )),
                e.status)
            ) {
                case 'fulfilled':
                    return e.value;
                case 'rejected':
                    throw e.reason;
            }
    }
    throw e;
}
function ha(e, t, l, a, n) {
    var u = typeof e;
    (u === 'undefined' || u === 'boolean') && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
        switch (u) {
            case 'bigint':
            case 'string':
            case 'number':
                i = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case vs:
                    case kv:
                        i = !0;
                        break;
                    case Qd:
                        return ((i = e._init), ha(i(e._payload), t, l, a, n));
                }
        }
    if (i)
        return (
            (n = n(e)),
            (i = a === '' ? '.' + Rr(e, 0) : a),
            Lf(n)
                ? ((l = ''),
                  i != null && (l = i.replace(qf, '$&/') + '/'),
                  ha(n, t, l, '', function (s) {
                      return s;
                  }))
                : n != null &&
                  (Ss(n) &&
                      (n = a0(
                          n,
                          l +
                              (n.key == null || (e && e.key === n.key)
                                  ? ''
                                  : ('' + n.key).replace(qf, '$&/') + '/') +
                              i
                      )),
                  t.push(n)),
            1
        );
    i = 0;
    var r = a === '' ? '.' : a + ':';
    if (Lf(e))
        for (var c = 0; c < e.length; c++)
            ((a = e[c]), (u = r + Rr(a, c)), (i += ha(a, t, l, u, n)));
    else if (((c = l0(e)), typeof c == 'function'))
        for (e = c.call(e), c = 0; !(a = e.next()).done; )
            ((a = a.value), (u = r + Rr(a, c++)), (i += ha(a, t, l, u, n)));
    else if (u === 'object') {
        if (typeof e.then == 'function') return ha(u0(e), t, l, a, n);
        throw (
            (t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (t === '[object Object]'
                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                        : t) +
                    '). If you meant to render a collection of children, use an array instead.'
            )
        );
    }
    return i;
}
function xu(e, t, l) {
    if (e == null) return e;
    var a = [],
        n = 0;
    return (
        ha(e, a, '', '', function (u) {
            return t.call(l, u, n++);
        }),
        a
    );
}
function i0(e) {
    if (e._status === -1) {
        var t = e._result;
        ((t = t()),
            t.then(
                function (l) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = l));
                },
                function (l) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = l));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t)));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Yf =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                  var t = new window.ErrorEvent('error', {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                          typeof e == 'object' && e !== null && typeof e.message == 'string'
                              ? String(e.message)
                              : String(e),
                      error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
              } else if (typeof process == 'object' && typeof process.emit == 'function') {
                  process.emit('uncaughtException', e);
                  return;
              }
              console.error(e);
          };
function r0() {}
Z.Children = {
    map: xu,
    forEach: function (e, t, l) {
        xu(
            e,
            function () {
                t.apply(this, arguments);
            },
            l
        );
    },
    count: function (e) {
        var t = 0;
        return (
            xu(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            xu(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Ss(e))
            throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
};
Z.Component = Ja;
Z.Fragment = Jv;
Z.Profiler = $v;
Z.PureComponent = gs;
Z.StrictMode = Fv;
Z.Suspense = e0;
Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = he;
Z.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (e) {
        return he.H.useMemoCache(e);
    },
};
Z.cache = function (e) {
    return function () {
        return e.apply(null, arguments);
    };
};
Z.cloneElement = function (e, t, l) {
    if (e == null) throw Error('The argument must be a React element, but you passed ' + e + '.');
    var a = Kd({}, e.props),
        n = e.key,
        u = void 0;
    if (t != null)
        for (i in (t.ref !== void 0 && (u = void 0), t.key !== void 0 && (n = '' + t.key), t))
            !Fd.call(t, i) ||
                i === 'key' ||
                i === '__self' ||
                i === '__source' ||
                (i === 'ref' && t.ref === void 0) ||
                (a[i] = t[i]);
    var i = arguments.length - 2;
    if (i === 1) a.children = l;
    else if (1 < i) {
        for (var r = Array(i), c = 0; c < i; c++) r[c] = arguments[c + 2];
        a.children = r;
    }
    return bs(e.type, n, void 0, void 0, u, a);
};
Z.createContext = function (e) {
    return (
        (e = {
            $$typeof: Pv,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
        }),
        (e.Provider = e),
        (e.Consumer = { $$typeof: Wv, _context: e }),
        e
    );
};
Z.createElement = function (e, t, l) {
    var a,
        n = {},
        u = null;
    if (t != null)
        for (a in (t.key !== void 0 && (u = '' + t.key), t))
            Fd.call(t, a) && a !== 'key' && a !== '__self' && a !== '__source' && (n[a] = t[a]);
    var i = arguments.length - 2;
    if (i === 1) n.children = l;
    else if (1 < i) {
        for (var r = Array(i), c = 0; c < i; c++) r[c] = arguments[c + 2];
        n.children = r;
    }
    if (e && e.defaultProps) for (a in ((i = e.defaultProps), i)) n[a] === void 0 && (n[a] = i[a]);
    return bs(e, u, void 0, void 0, null, n);
};
Z.createRef = function () {
    return { current: null };
};
Z.forwardRef = function (e) {
    return { $$typeof: Iv, render: e };
};
Z.isValidElement = Ss;
Z.lazy = function (e) {
    return { $$typeof: Qd, _payload: { _status: -1, _result: e }, _init: i0 };
};
Z.memo = function (e, t) {
    return { $$typeof: t0, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
    var t = he.T,
        l = {};
    he.T = l;
    try {
        var a = e(),
            n = he.S;
        (n !== null && n(l, a),
            typeof a == 'object' && a !== null && typeof a.then == 'function' && a.then(r0, Yf));
    } catch (u) {
        Yf(u);
    } finally {
        he.T = t;
    }
};
Z.unstable_useCacheRefresh = function () {
    return he.H.useCacheRefresh();
};
Z.use = function (e) {
    return he.H.use(e);
};
Z.useActionState = function (e, t, l) {
    return he.H.useActionState(e, t, l);
};
Z.useCallback = function (e, t) {
    return he.H.useCallback(e, t);
};
Z.useContext = function (e) {
    return he.H.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e, t) {
    return he.H.useDeferredValue(e, t);
};
Z.useEffect = function (e, t, l) {
    var a = he.H;
    if (typeof l == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
    return a.useEffect(e, t);
};
Z.useId = function () {
    return he.H.useId();
};
Z.useImperativeHandle = function (e, t, l) {
    return he.H.useImperativeHandle(e, t, l);
};
Z.useInsertionEffect = function (e, t) {
    return he.H.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
    return he.H.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
    return he.H.useMemo(e, t);
};
Z.useOptimistic = function (e, t) {
    return he.H.useOptimistic(e, t);
};
Z.useReducer = function (e, t, l) {
    return he.H.useReducer(e, t, l);
};
Z.useRef = function (e) {
    return he.H.useRef(e);
};
Z.useState = function (e) {
    return he.H.useState(e);
};
Z.useSyncExternalStore = function (e, t, l) {
    return he.H.useSyncExternalStore(e, t, l);
};
Z.useTransition = function () {
    return he.H.useTransition();
};
Z.version = '19.1.1';
Xd.exports = Z;
var R = Xd.exports;
const Oe = Qv(R);
var $d = { exports: {} },
    Ki = {},
    Wd = { exports: {} },
    Pd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(M, V) {
        var G = M.length;
        M.push(V);
        e: for (; 0 < G; ) {
            var le = (G - 1) >>> 1,
                ve = M[le];
            if (0 < n(ve, V)) ((M[le] = V), (M[G] = ve), (G = le));
            else break e;
        }
    }
    function l(M) {
        return M.length === 0 ? null : M[0];
    }
    function a(M) {
        if (M.length === 0) return null;
        var V = M[0],
            G = M.pop();
        if (G !== V) {
            M[0] = G;
            e: for (var le = 0, ve = M.length, Bl = ve >>> 1; le < Bl; ) {
                var ca = 2 * (le + 1) - 1,
                    sa = M[ca],
                    Yt = ca + 1,
                    jl = M[Yt];
                if (0 > n(sa, G))
                    Yt < ve && 0 > n(jl, sa)
                        ? ((M[le] = jl), (M[Yt] = G), (le = Yt))
                        : ((M[le] = sa), (M[ca] = G), (le = ca));
                else if (Yt < ve && 0 > n(jl, G)) ((M[le] = jl), (M[Yt] = G), (le = Yt));
                else break e;
            }
        }
        return V;
    }
    function n(M, V) {
        var G = M.sortIndex - V.sortIndex;
        return G !== 0 ? G : M.id - V.id;
    }
    if (
        ((e.unstable_now = void 0),
        typeof performance == 'object' && typeof performance.now == 'function')
    ) {
        var u = performance;
        e.unstable_now = function () {
            return u.now();
        };
    } else {
        var i = Date,
            r = i.now();
        e.unstable_now = function () {
            return i.now() - r;
        };
    }
    var c = [],
        s = [],
        f = 1,
        h = null,
        d = 3,
        v = !1,
        b = !1,
        S = !1,
        A = !1,
        m = typeof setTimeout == 'function' ? setTimeout : null,
        o = typeof clearTimeout == 'function' ? clearTimeout : null,
        y = typeof setImmediate < 'u' ? setImmediate : null;
    function p(M) {
        for (var V = l(s); V !== null; ) {
            if (V.callback === null) a(s);
            else if (V.startTime <= M) (a(s), (V.sortIndex = V.expirationTime), t(c, V));
            else break;
            V = l(s);
        }
    }
    function x(M) {
        if (((S = !1), p(M), !b))
            if (l(c) !== null) ((b = !0), B || ((B = !0), Q()));
            else {
                var V = l(s);
                V !== null && Ne(x, V.startTime - M);
            }
    }
    var B = !1,
        N = -1,
        w = 5,
        q = -1;
    function L() {
        return A ? !0 : !(e.unstable_now() - q < w);
    }
    function re() {
        if (((A = !1), B)) {
            var M = e.unstable_now();
            q = M;
            var V = !0;
            try {
                e: {
                    ((b = !1), S && ((S = !1), o(N), (N = -1)), (v = !0));
                    var G = d;
                    try {
                        t: {
                            for (p(M), h = l(c); h !== null && !(h.expirationTime > M && L()); ) {
                                var le = h.callback;
                                if (typeof le == 'function') {
                                    ((h.callback = null), (d = h.priorityLevel));
                                    var ve = le(h.expirationTime <= M);
                                    if (((M = e.unstable_now()), typeof ve == 'function')) {
                                        ((h.callback = ve), p(M), (V = !0));
                                        break t;
                                    }
                                    (h === l(c) && a(c), p(M));
                                } else a(c);
                                h = l(c);
                            }
                            if (h !== null) V = !0;
                            else {
                                var Bl = l(s);
                                (Bl !== null && Ne(x, Bl.startTime - M), (V = !1));
                            }
                        }
                        break e;
                    } finally {
                        ((h = null), (d = G), (v = !1));
                    }
                    V = void 0;
                }
            } finally {
                V ? Q() : (B = !1);
            }
        }
    }
    var Q;
    if (typeof y == 'function')
        Q = function () {
            y(re);
        };
    else if (typeof MessageChannel < 'u') {
        var $ = new MessageChannel(),
            ye = $.port2;
        (($.port1.onmessage = re),
            (Q = function () {
                ye.postMessage(null);
            }));
    } else
        Q = function () {
            m(re, 0);
        };
    function Ne(M, V) {
        N = m(function () {
            M(e.unstable_now());
        }, V);
    }
    ((e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (M) {
            M.callback = null;
        }),
        (e.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (w = 0 < M ? Math.floor(1e3 / M) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_next = function (M) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var V = 3;
                    break;
                default:
                    V = d;
            }
            var G = d;
            d = V;
            try {
                return M();
            } finally {
                d = G;
            }
        }),
        (e.unstable_requestPaint = function () {
            A = !0;
        }),
        (e.unstable_runWithPriority = function (M, V) {
            switch (M) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    M = 3;
            }
            var G = d;
            d = M;
            try {
                return V();
            } finally {
                d = G;
            }
        }),
        (e.unstable_scheduleCallback = function (M, V, G) {
            var le = e.unstable_now();
            switch (
                (typeof G == 'object' && G !== null
                    ? ((G = G.delay), (G = typeof G == 'number' && 0 < G ? le + G : le))
                    : (G = le),
                M)
            ) {
                case 1:
                    var ve = -1;
                    break;
                case 2:
                    ve = 250;
                    break;
                case 5:
                    ve = 1073741823;
                    break;
                case 4:
                    ve = 1e4;
                    break;
                default:
                    ve = 5e3;
            }
            return (
                (ve = G + ve),
                (M = {
                    id: f++,
                    callback: V,
                    priorityLevel: M,
                    startTime: G,
                    expirationTime: ve,
                    sortIndex: -1,
                }),
                G > le
                    ? ((M.sortIndex = G),
                      t(s, M),
                      l(c) === null &&
                          M === l(s) &&
                          (S ? (o(N), (N = -1)) : (S = !0), Ne(x, G - le)))
                    : ((M.sortIndex = ve), t(c, M), b || v || ((b = !0), B || ((B = !0), Q()))),
                M
            );
        }),
        (e.unstable_shouldYield = L),
        (e.unstable_wrapCallback = function (M) {
            var V = d;
            return function () {
                var G = d;
                d = V;
                try {
                    return M.apply(this, arguments);
                } finally {
                    d = G;
                }
            };
        }));
})(Pd);
Wd.exports = Pd;
var c0 = Wd.exports,
    Id = { exports: {} },
    ke = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var s0 = R;
function eh(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
        t += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++)
            t += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
function cl() {}
var Ke = {
        d: {
            f: cl,
            r: function () {
                throw Error(eh(522));
            },
            D: cl,
            C: cl,
            L: cl,
            m: cl,
            X: cl,
            S: cl,
            M: cl,
        },
        p: 0,
        findDOMNode: null,
    },
    f0 = Symbol.for('react.portal');
function o0(e, t, l) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: f0,
        key: a == null ? null : '' + a,
        children: e,
        containerInfo: t,
        implementation: l,
    };
}
var An = s0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function ki(e, t) {
    if (e === 'font') return '';
    if (typeof t == 'string') return t === 'use-credentials' ? t : '';
}
ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ke;
ke.createPortal = function (e, t) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)) throw Error(eh(299));
    return o0(e, t, null, l);
};
ke.flushSync = function (e) {
    var t = An.T,
        l = Ke.p;
    try {
        if (((An.T = null), (Ke.p = 2), e)) return e();
    } finally {
        ((An.T = t), (Ke.p = l), Ke.d.f());
    }
};
ke.preconnect = function (e, t) {
    typeof e == 'string' &&
        (t
            ? ((t = t.crossOrigin),
              (t = typeof t == 'string' ? (t === 'use-credentials' ? t : '') : void 0))
            : (t = null),
        Ke.d.C(e, t));
};
ke.prefetchDNS = function (e) {
    typeof e == 'string' && Ke.d.D(e);
};
ke.preinit = function (e, t) {
    if (typeof e == 'string' && t && typeof t.as == 'string') {
        var l = t.as,
            a = ki(l, t.crossOrigin),
            n = typeof t.integrity == 'string' ? t.integrity : void 0,
            u = typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0;
        l === 'style'
            ? Ke.d.S(e, typeof t.precedence == 'string' ? t.precedence : void 0, {
                  crossOrigin: a,
                  integrity: n,
                  fetchPriority: u,
              })
            : l === 'script' &&
              Ke.d.X(e, {
                  crossOrigin: a,
                  integrity: n,
                  fetchPriority: u,
                  nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
              });
    }
};
ke.preinitModule = function (e, t) {
    if (typeof e == 'string')
        if (typeof t == 'object' && t !== null) {
            if (t.as == null || t.as === 'script') {
                var l = ki(t.as, t.crossOrigin);
                Ke.d.M(e, {
                    crossOrigin: l,
                    integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
                    nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
                });
            }
        } else t == null && Ke.d.M(e);
};
ke.preload = function (e, t) {
    if (typeof e == 'string' && typeof t == 'object' && t !== null && typeof t.as == 'string') {
        var l = t.as,
            a = ki(l, t.crossOrigin);
        Ke.d.L(e, l, {
            crossOrigin: a,
            integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
            nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
            type: typeof t.type == 'string' ? t.type : void 0,
            fetchPriority: typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0,
            referrerPolicy: typeof t.referrerPolicy == 'string' ? t.referrerPolicy : void 0,
            imageSrcSet: typeof t.imageSrcSet == 'string' ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == 'string' ? t.imageSizes : void 0,
            media: typeof t.media == 'string' ? t.media : void 0,
        });
    }
};
ke.preloadModule = function (e, t) {
    if (typeof e == 'string')
        if (t) {
            var l = ki(t.as, t.crossOrigin);
            Ke.d.m(e, {
                as: typeof t.as == 'string' && t.as !== 'script' ? t.as : void 0,
                crossOrigin: l,
                integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
            });
        } else Ke.d.m(e);
};
ke.requestFormReset = function (e) {
    Ke.d.r(e);
};
ke.unstable_batchedUpdates = function (e, t) {
    return e(t);
};
ke.useFormState = function (e, t, l) {
    return An.H.useFormState(e, t, l);
};
ke.useFormStatus = function () {
    return An.H.useHostTransitionStatus();
};
ke.version = '19.1.1';
function th() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(th);
        } catch (e) {
            console.error(e);
        }
}
(th(), (Id.exports = ke));
var d0 = Id.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ze = c0,
    lh = R,
    h0 = d0;
function _(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
        t += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++)
            t += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
function ah(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function tu(e) {
    var t = e,
        l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do ((t = e), t.flags & 4098 && (l = t.return), (e = t.return));
        while (e);
    }
    return t.tag === 3 ? l : null;
}
function nh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
            return t.dehydrated;
    }
    return null;
}
function Gf(e) {
    if (tu(e) !== e) throw Error(_(188));
}
function m0(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = tu(e)), t === null)) throw Error(_(188));
        return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
        var n = l.return;
        if (n === null) break;
        var u = n.alternate;
        if (u === null) {
            if (((a = n.return), a !== null)) {
                l = a;
                continue;
            }
            break;
        }
        if (n.child === u.child) {
            for (u = n.child; u; ) {
                if (u === l) return (Gf(n), e);
                if (u === a) return (Gf(n), t);
                u = u.sibling;
            }
            throw Error(_(188));
        }
        if (l.return !== a.return) ((l = n), (a = u));
        else {
            for (var i = !1, r = n.child; r; ) {
                if (r === l) {
                    ((i = !0), (l = n), (a = u));
                    break;
                }
                if (r === a) {
                    ((i = !0), (a = n), (l = u));
                    break;
                }
                r = r.sibling;
            }
            if (!i) {
                for (r = u.child; r; ) {
                    if (r === l) {
                        ((i = !0), (l = u), (a = n));
                        break;
                    }
                    if (r === a) {
                        ((i = !0), (a = u), (l = n));
                        break;
                    }
                    r = r.sibling;
                }
                if (!i) throw Error(_(189));
            }
        }
        if (l.alternate !== a) throw Error(_(190));
    }
    if (l.tag !== 3) throw Error(_(188));
    return l.stateNode.current === l ? e : t;
}
function uh(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
        if (((t = uh(e)), t !== null)) return t;
        e = e.sibling;
    }
    return null;
}
var fe = Object.assign,
    y0 = Symbol.for('react.element'),
    _u = Symbol.for('react.transitional.element'),
    pn = Symbol.for('react.portal'),
    ga = Symbol.for('react.fragment'),
    ih = Symbol.for('react.strict_mode'),
    oc = Symbol.for('react.profiler'),
    v0 = Symbol.for('react.provider'),
    rh = Symbol.for('react.consumer'),
    kt = Symbol.for('react.context'),
    Es = Symbol.for('react.forward_ref'),
    dc = Symbol.for('react.suspense'),
    hc = Symbol.for('react.suspense_list'),
    As = Symbol.for('react.memo'),
    ol = Symbol.for('react.lazy'),
    mc = Symbol.for('react.activity'),
    g0 = Symbol.for('react.memo_cache_sentinel'),
    Xf = Symbol.iterator;
function un(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Xf && e[Xf]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var p0 = Symbol.for('react.client.reference');
function yc(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === p0 ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
        case ga:
            return 'Fragment';
        case oc:
            return 'Profiler';
        case ih:
            return 'StrictMode';
        case dc:
            return 'Suspense';
        case hc:
            return 'SuspenseList';
        case mc:
            return 'Activity';
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case pn:
                return 'Portal';
            case kt:
                return (e.displayName || 'Context') + '.Provider';
            case rh:
                return (e._context.displayName || 'Context') + '.Consumer';
            case Es:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ''),
                        (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                );
            case As:
                return ((t = e.displayName || null), t !== null ? t : yc(e.type) || 'Memo');
            case ol:
                ((t = e._payload), (e = e._init));
                try {
                    return yc(e(t));
                } catch {}
        }
    return null;
}
var bn = Array.isArray,
    Y = lh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = h0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Xl = { pending: !1, data: null, method: null, action: null },
    vc = [],
    pa = -1;
function Ht(e) {
    return { current: e };
}
function He(e) {
    0 > pa || ((e.current = vc[pa]), (vc[pa] = null), pa--);
}
function me(e, t) {
    (pa++, (vc[pa] = e.current), (e.current = t));
}
var Ct = Ht(null),
    qn = Ht(null),
    Al = Ht(null),
    ri = Ht(null);
function ci(e, t) {
    switch ((me(Al, t), me(qn, e), me(Ct, null), t.nodeType)) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Fo(e) : 0;
            break;
        default:
            if (((e = t.tagName), (t = t.namespaceURI))) ((t = Fo(t)), (e = Ry(t, e)));
            else
                switch (e) {
                    case 'svg':
                        e = 1;
                        break;
                    case 'math':
                        e = 2;
                        break;
                    default:
                        e = 0;
                }
    }
    (He(Ct), me(Ct, e));
}
function Ha() {
    (He(Ct), He(qn), He(Al));
}
function gc(e) {
    e.memoizedState !== null && me(ri, e);
    var t = Ct.current,
        l = Ry(t, e.type);
    t !== l && (me(qn, e), me(Ct, l));
}
function si(e) {
    (qn.current === e && (He(Ct), He(qn)), ri.current === e && (He(ri), (Fn._currentValue = Xl)));
}
var pc = Object.prototype.hasOwnProperty,
    Ts = ze.unstable_scheduleCallback,
    Or = ze.unstable_cancelCallback,
    b0 = ze.unstable_shouldYield,
    S0 = ze.unstable_requestPaint,
    wt = ze.unstable_now,
    E0 = ze.unstable_getCurrentPriorityLevel,
    ch = ze.unstable_ImmediatePriority,
    sh = ze.unstable_UserBlockingPriority,
    fi = ze.unstable_NormalPriority,
    A0 = ze.unstable_LowPriority,
    fh = ze.unstable_IdlePriority,
    T0 = ze.log,
    R0 = ze.unstable_setDisableYieldValue,
    lu = null,
    it = null;
function pl(e) {
    if ((typeof T0 == 'function' && R0(e), it && typeof it.setStrictMode == 'function'))
        try {
            it.setStrictMode(lu, e);
        } catch {}
}
var rt = Math.clz32 ? Math.clz32 : _0,
    O0 = Math.log,
    x0 = Math.LN2;
function _0(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((O0(e) / x0) | 0)) | 0);
}
var Du = 256,
    Nu = 4194304;
function Ll(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
            return 64;
        case 128:
            return 128;
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
            return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e;
    }
}
function Ji(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
        u = e.suspendedLanes,
        i = e.pingedLanes;
    e = e.warmLanes;
    var r = a & 134217727;
    return (
        r !== 0
            ? ((a = r & ~u),
              a !== 0
                  ? (n = Ll(a))
                  : ((i &= r), i !== 0 ? (n = Ll(i)) : l || ((l = r & ~e), l !== 0 && (n = Ll(l)))))
            : ((r = a & ~u),
              r !== 0
                  ? (n = Ll(r))
                  : i !== 0
                    ? (n = Ll(i))
                    : l || ((l = a & ~e), l !== 0 && (n = Ll(l)))),
        n === 0
            ? 0
            : t !== 0 &&
                t !== n &&
                !(t & u) &&
                ((u = n & -n), (l = t & -t), u >= l || (u === 32 && (l & 4194048) !== 0))
              ? t
              : n
    );
}
function au(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
}
function D0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
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
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function oh() {
    var e = Du;
    return ((Du <<= 1), !(Du & 4194048) && (Du = 256), e);
}
function dh() {
    var e = Nu;
    return ((Nu <<= 1), !(Nu & 62914560) && (Nu = 4194304), e);
}
function xr(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
}
function nu(e, t) {
    ((e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
}
function N0(e, t, l, a, n, u) {
    var i = e.pendingLanes;
    ((e.pendingLanes = l),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= l),
        (e.entangledLanes &= l),
        (e.errorRecoveryDisabledLanes &= l),
        (e.shellSuspendCounter = 0));
    var r = e.entanglements,
        c = e.expirationTimes,
        s = e.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
        var f = 31 - rt(l),
            h = 1 << f;
        ((r[f] = 0), (c[f] = -1));
        var d = s[f];
        if (d !== null)
            for (s[f] = null, f = 0; f < d.length; f++) {
                var v = d[f];
                v !== null && (v.lane &= -536870913);
            }
        l &= ~h;
    }
    (a !== 0 && hh(e, a, 0),
        u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t)));
}
function hh(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - rt(t);
    ((e.entangledLanes |= t),
        (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090)));
}
function mh(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
        var a = 31 - rt(l),
            n = 1 << a;
        ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
}
function Rs(e) {
    switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
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
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0;
    }
    return e;
}
function Os(e) {
    return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
}
function yh() {
    var e = P.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : wy(e.type));
}
function U0(e, t) {
    var l = P.p;
    try {
        return ((P.p = e), t());
    } finally {
        P.p = l;
    }
}
var Cl = Math.random().toString(36).slice(2),
    Ge = '__reactFiber$' + Cl,
    et = '__reactProps$' + Cl,
    Fa = '__reactContainer$' + Cl,
    bc = '__reactEvents$' + Cl,
    M0 = '__reactListeners$' + Cl,
    z0 = '__reactHandles$' + Cl,
    Qf = '__reactResources$' + Cl,
    uu = '__reactMarker$' + Cl;
function xs(e) {
    (delete e[Ge], delete e[et], delete e[bc], delete e[M0], delete e[z0]);
}
function ba(e) {
    var t = e[Ge];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
        if ((t = l[Fa] || l[Ge])) {
            if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
                for (e = Po(e); e !== null; ) {
                    if ((l = e[Ge])) return l;
                    e = Po(e);
                }
            return t;
        }
        ((e = l), (l = e.parentNode));
    }
    return null;
}
function $a(e) {
    if ((e = e[Ge] || e[Fa])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
}
function Sn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(_(33));
}
function Na(e) {
    var t = e[Qf];
    return (t || (t = e[Qf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
}
function Be(e) {
    e[uu] = !0;
}
var vh = new Set(),
    gh = {};
function la(e, t) {
    (La(e, t), La(e + 'Capture', t));
}
function La(e, t) {
    for (gh[e] = t, e = 0; e < t.length; e++) vh.add(t[e]);
}
var C0 = RegExp(
        '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Zf = {},
    Kf = {};
function w0(e) {
    return pc.call(Kf, e)
        ? !0
        : pc.call(Zf, e)
          ? !1
          : C0.test(e)
            ? (Kf[e] = !0)
            : ((Zf[e] = !0), !1);
}
function Gu(e, t, l) {
    if (w0(t))
        if (l === null) e.removeAttribute(t);
        else {
            switch (typeof l) {
                case 'undefined':
                case 'function':
                case 'symbol':
                    e.removeAttribute(t);
                    return;
                case 'boolean':
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== 'data-' && a !== 'aria-') {
                        e.removeAttribute(t);
                        return;
                    }
            }
            e.setAttribute(t, '' + l);
        }
}
function Uu(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
        switch (typeof l) {
            case 'undefined':
            case 'function':
            case 'symbol':
            case 'boolean':
                e.removeAttribute(t);
                return;
        }
        e.setAttribute(t, '' + l);
    }
}
function Gt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
        switch (typeof a) {
            case 'undefined':
            case 'function':
            case 'symbol':
            case 'boolean':
                e.removeAttribute(l);
                return;
        }
        e.setAttributeNS(t, l, '' + a);
    }
}
var _r, kf;
function ma(e) {
    if (_r === void 0)
        try {
            throw Error();
        } catch (l) {
            var t = l.stack.trim().match(/\n( *(at )?)/);
            ((_r = (t && t[1]) || ''),
                (kf =
                    -1 <
                    l.stack.indexOf(`
    at`)
                        ? ' (<anonymous>)'
                        : -1 < l.stack.indexOf('@')
                          ? '@unknown:0:0'
                          : ''));
        }
    return (
        `
` +
        _r +
        e +
        kf
    );
}
var Dr = !1;
function Nr(e, t) {
    if (!e || Dr) return '';
    Dr = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        var a = {
            DetermineComponentFrameRoot: function () {
                try {
                    if (t) {
                        var h = function () {
                            throw Error();
                        };
                        if (
                            (Object.defineProperty(h.prototype, 'props', {
                                set: function () {
                                    throw Error();
                                },
                            }),
                            typeof Reflect == 'object' && Reflect.construct)
                        ) {
                            try {
                                Reflect.construct(h, []);
                            } catch (v) {
                                var d = v;
                            }
                            Reflect.construct(e, [], h);
                        } else {
                            try {
                                h.call();
                            } catch (v) {
                                d = v;
                            }
                            e.call(h.prototype);
                        }
                    } else {
                        try {
                            throw Error();
                        } catch (v) {
                            d = v;
                        }
                        (h = e()) && typeof h.catch == 'function' && h.catch(function () {});
                    }
                } catch (v) {
                    if (v && d && typeof v.stack == 'string') return [v.stack, d.stack];
                }
                return [null, null];
            },
        };
        a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
        var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
        n &&
            n.configurable &&
            Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
                value: 'DetermineComponentFrameRoot',
            });
        var u = a.DetermineComponentFrameRoot(),
            i = u[0],
            r = u[1];
        if (i && r) {
            var c = i.split(`
`),
                s = r.split(`
`);
            for (n = a = 0; a < c.length && !c[a].includes('DetermineComponentFrameRoot'); ) a++;
            for (; n < s.length && !s[n].includes('DetermineComponentFrameRoot'); ) n++;
            if (a === c.length || n === s.length)
                for (a = c.length - 1, n = s.length - 1; 1 <= a && 0 <= n && c[a] !== s[n]; ) n--;
            for (; 1 <= a && 0 <= n; a--, n--)
                if (c[a] !== s[n]) {
                    if (a !== 1 || n !== 1)
                        do
                            if ((a--, n--, 0 > n || c[a] !== s[n])) {
                                var f =
                                    `
` + c[a].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        f.includes('<anonymous>') &&
                                        (f = f.replace('<anonymous>', e.displayName)),
                                    f
                                );
                            }
                        while (1 <= a && 0 <= n);
                    break;
                }
        }
    } finally {
        ((Dr = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : '') ? ma(l) : '';
}
function B0(e) {
    switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return ma(e.type);
        case 16:
            return ma('Lazy');
        case 13:
            return ma('Suspense');
        case 19:
            return ma('SuspenseList');
        case 0:
        case 15:
            return Nr(e.type, !1);
        case 11:
            return Nr(e.type.render, !1);
        case 1:
            return Nr(e.type, !0);
        case 31:
            return ma('Activity');
        default:
            return '';
    }
}
function Jf(e) {
    try {
        var t = '';
        do ((t += B0(e)), (e = e.return));
        while (e);
        return t;
    } catch (l) {
        return (
            `
Error generating stack: ` +
            l.message +
            `
` +
            l.stack
        );
    }
}
function ht(e) {
    switch (typeof e) {
        case 'bigint':
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return e;
        case 'object':
            return e;
        default:
            return '';
    }
}
function ph(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function j0(e) {
    var t = ph(e) ? 'checked' : 'value',
        l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        a = '' + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof l < 'u' &&
        typeof l.get == 'function' &&
        typeof l.set == 'function'
    ) {
        var n = l.get,
            u = l.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return n.call(this);
                },
                set: function (i) {
                    ((a = '' + i), u.call(this, i));
                },
            }),
            Object.defineProperty(e, t, { enumerable: l.enumerable }),
            {
                getValue: function () {
                    return a;
                },
                setValue: function (i) {
                    a = '' + i;
                },
                stopTracking: function () {
                    ((e._valueTracker = null), delete e[t]);
                },
            }
        );
    }
}
function oi(e) {
    e._valueTracker || (e._valueTracker = j0(e));
}
function bh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
        a = '';
    return (
        e && (a = ph(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = a),
        e !== l ? (t.setValue(e), !0) : !1
    );
}
function di(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
var H0 = /[\n"\\]/g;
function vt(e) {
    return e.replace(H0, function (t) {
        return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
}
function Sc(e, t, l, a, n, u, i, r) {
    ((e.name = ''),
        i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean'
            ? (e.type = i)
            : e.removeAttribute('type'),
        t != null
            ? i === 'number'
                ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + ht(t))
                : e.value !== '' + ht(t) && (e.value = '' + ht(t))
            : (i !== 'submit' && i !== 'reset') || e.removeAttribute('value'),
        t != null
            ? Ec(e, i, ht(t))
            : l != null
              ? Ec(e, i, ht(l))
              : a != null && e.removeAttribute('value'),
        n == null && u != null && (e.defaultChecked = !!u),
        n != null && (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
        r != null && typeof r != 'function' && typeof r != 'symbol' && typeof r != 'boolean'
            ? (e.name = '' + ht(r))
            : e.removeAttribute('name'));
}
function Sh(e, t, l, a, n, u, i, r) {
    if (
        (u != null &&
            typeof u != 'function' &&
            typeof u != 'symbol' &&
            typeof u != 'boolean' &&
            (e.type = u),
        t != null || l != null)
    ) {
        if (!((u !== 'submit' && u !== 'reset') || t != null)) return;
        ((l = l != null ? '' + ht(l) : ''),
            (t = t != null ? '' + ht(t) : l),
            r || t === e.value || (e.value = t),
            (e.defaultValue = t));
    }
    ((a = a ?? n),
        (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
        (e.checked = r ? e.checked : !!a),
        (e.defaultChecked = !!a),
        i != null &&
            typeof i != 'function' &&
            typeof i != 'symbol' &&
            typeof i != 'boolean' &&
            (e.name = i));
}
function Ec(e, t, l) {
    (t === 'number' && di(e.ownerDocument) === e) ||
        e.defaultValue === '' + l ||
        (e.defaultValue = '' + l);
}
function Ua(e, t, l, a) {
    if (((e = e.options), t)) {
        t = {};
        for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0;
        for (l = 0; l < e.length; l++)
            ((n = t.hasOwnProperty('$' + e[l].value)),
                e[l].selected !== n && (e[l].selected = n),
                n && a && (e[l].defaultSelected = !0));
    } else {
        for (l = '' + ht(l), t = null, n = 0; n < e.length; n++) {
            if (e[n].value === l) {
                ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
                return;
            }
            t !== null || e[n].disabled || (t = e[n]);
        }
        t !== null && (t.selected = !0);
    }
}
function Eh(e, t, l) {
    if (t != null && ((t = '' + ht(t)), t !== e.value && (e.value = t), l == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
    }
    e.defaultValue = l != null ? '' + ht(l) : '';
}
function Ah(e, t, l, a) {
    if (t == null) {
        if (a != null) {
            if (l != null) throw Error(_(92));
            if (bn(a)) {
                if (1 < a.length) throw Error(_(93));
                a = a[0];
            }
            l = a;
        }
        (l == null && (l = ''), (t = l));
    }
    ((l = ht(t)),
        (e.defaultValue = l),
        (a = e.textContent),
        a === l && a !== '' && a !== null && (e.value = a));
}
function qa(e, t) {
    if (t) {
        var l = e.firstChild;
        if (l && l === e.lastChild && l.nodeType === 3) {
            l.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var L0 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
        ' '
    )
);
function Ff(e, t, l) {
    var a = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
        ? a
            ? e.setProperty(t, '')
            : t === 'float'
              ? (e.cssFloat = '')
              : (e[t] = '')
        : a
          ? e.setProperty(t, l)
          : typeof l != 'number' || l === 0 || L0.has(t)
            ? t === 'float'
                ? (e.cssFloat = l)
                : (e[t] = ('' + l).trim())
            : (e[t] = l + 'px');
}
function Th(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(_(62));
    if (((e = e.style), l != null)) {
        for (var a in l)
            !l.hasOwnProperty(a) ||
                (t != null && t.hasOwnProperty(a)) ||
                (a.indexOf('--') === 0
                    ? e.setProperty(a, '')
                    : a === 'float'
                      ? (e.cssFloat = '')
                      : (e[a] = ''));
        for (var n in t) ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Ff(e, n, a));
    } else for (var u in t) t.hasOwnProperty(u) && Ff(e, u, t[u]);
}
function _s(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}
var q0 = new Map([
        ['acceptCharset', 'accept-charset'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
        ['crossOrigin', 'crossorigin'],
        ['accentHeight', 'accent-height'],
        ['alignmentBaseline', 'alignment-baseline'],
        ['arabicForm', 'arabic-form'],
        ['baselineShift', 'baseline-shift'],
        ['capHeight', 'cap-height'],
        ['clipPath', 'clip-path'],
        ['clipRule', 'clip-rule'],
        ['colorInterpolation', 'color-interpolation'],
        ['colorInterpolationFilters', 'color-interpolation-filters'],
        ['colorProfile', 'color-profile'],
        ['colorRendering', 'color-rendering'],
        ['dominantBaseline', 'dominant-baseline'],
        ['enableBackground', 'enable-background'],
        ['fillOpacity', 'fill-opacity'],
        ['fillRule', 'fill-rule'],
        ['floodColor', 'flood-color'],
        ['floodOpacity', 'flood-opacity'],
        ['fontFamily', 'font-family'],
        ['fontSize', 'font-size'],
        ['fontSizeAdjust', 'font-size-adjust'],
        ['fontStretch', 'font-stretch'],
        ['fontStyle', 'font-style'],
        ['fontVariant', 'font-variant'],
        ['fontWeight', 'font-weight'],
        ['glyphName', 'glyph-name'],
        ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
        ['glyphOrientationVertical', 'glyph-orientation-vertical'],
        ['horizAdvX', 'horiz-adv-x'],
        ['horizOriginX', 'horiz-origin-x'],
        ['imageRendering', 'image-rendering'],
        ['letterSpacing', 'letter-spacing'],
        ['lightingColor', 'lighting-color'],
        ['markerEnd', 'marker-end'],
        ['markerMid', 'marker-mid'],
        ['markerStart', 'marker-start'],
        ['overlinePosition', 'overline-position'],
        ['overlineThickness', 'overline-thickness'],
        ['paintOrder', 'paint-order'],
        ['panose-1', 'panose-1'],
        ['pointerEvents', 'pointer-events'],
        ['renderingIntent', 'rendering-intent'],
        ['shapeRendering', 'shape-rendering'],
        ['stopColor', 'stop-color'],
        ['stopOpacity', 'stop-opacity'],
        ['strikethroughPosition', 'strikethrough-position'],
        ['strikethroughThickness', 'strikethrough-thickness'],
        ['strokeDasharray', 'stroke-dasharray'],
        ['strokeDashoffset', 'stroke-dashoffset'],
        ['strokeLinecap', 'stroke-linecap'],
        ['strokeLinejoin', 'stroke-linejoin'],
        ['strokeMiterlimit', 'stroke-miterlimit'],
        ['strokeOpacity', 'stroke-opacity'],
        ['strokeWidth', 'stroke-width'],
        ['textAnchor', 'text-anchor'],
        ['textDecoration', 'text-decoration'],
        ['textRendering', 'text-rendering'],
        ['transformOrigin', 'transform-origin'],
        ['underlinePosition', 'underline-position'],
        ['underlineThickness', 'underline-thickness'],
        ['unicodeBidi', 'unicode-bidi'],
        ['unicodeRange', 'unicode-range'],
        ['unitsPerEm', 'units-per-em'],
        ['vAlphabetic', 'v-alphabetic'],
        ['vHanging', 'v-hanging'],
        ['vIdeographic', 'v-ideographic'],
        ['vMathematical', 'v-mathematical'],
        ['vectorEffect', 'vector-effect'],
        ['vertAdvY', 'vert-adv-y'],
        ['vertOriginX', 'vert-origin-x'],
        ['vertOriginY', 'vert-origin-y'],
        ['wordSpacing', 'word-spacing'],
        ['writingMode', 'writing-mode'],
        ['xmlnsXlink', 'xmlns:xlink'],
        ['xHeight', 'x-height'],
    ]),
    V0 =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Xu(e) {
    return V0.test('' + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
}
var Ac = null;
function Ds(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Sa = null,
    Ma = null;
function $f(e) {
    var t = $a(e);
    if (t && (e = t.stateNode)) {
        var l = e[et] || null;
        e: switch (((e = t.stateNode), t.type)) {
            case 'input':
                if (
                    (Sc(
                        e,
                        l.value,
                        l.defaultValue,
                        l.defaultValue,
                        l.checked,
                        l.defaultChecked,
                        l.type,
                        l.name
                    ),
                    (t = l.name),
                    l.type === 'radio' && t != null)
                ) {
                    for (l = e; l.parentNode; ) l = l.parentNode;
                    for (
                        l = l.querySelectorAll('input[name="' + vt('' + t) + '"][type="radio"]'),
                            t = 0;
                        t < l.length;
                        t++
                    ) {
                        var a = l[t];
                        if (a !== e && a.form === e.form) {
                            var n = a[et] || null;
                            if (!n) throw Error(_(90));
                            Sc(
                                a,
                                n.value,
                                n.defaultValue,
                                n.defaultValue,
                                n.checked,
                                n.defaultChecked,
                                n.type,
                                n.name
                            );
                        }
                    }
                    for (t = 0; t < l.length; t++) ((a = l[t]), a.form === e.form && bh(a));
                }
                break e;
            case 'textarea':
                Eh(e, l.value, l.defaultValue);
                break e;
            case 'select':
                ((t = l.value), t != null && Ua(e, !!l.multiple, t, !1));
        }
    }
}
var Ur = !1;
function Rh(e, t, l) {
    if (Ur) return e(t, l);
    Ur = !0;
    try {
        var a = e(t);
        return a;
    } finally {
        if (
            ((Ur = !1),
            (Sa !== null || Ma !== null) &&
                (nr(), Sa && ((t = Sa), (e = Ma), (Ma = Sa = null), $f(t), e)))
        )
            for (t = 0; t < e.length; t++) $f(e[t]);
    }
}
function Vn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[et] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            ((a = !a.disabled) ||
                ((e = e.type),
                (a = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
                (e = !a));
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (l && typeof l != 'function') throw Error(_(231, t, typeof l));
    return l;
}
var tl = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    Tc = !1;
if (tl)
    try {
        var rn = {};
        (Object.defineProperty(rn, 'passive', {
            get: function () {
                Tc = !0;
            },
        }),
            window.addEventListener('test', rn, rn),
            window.removeEventListener('test', rn, rn));
    } catch {
        Tc = !1;
    }
var bl = null,
    Ns = null,
    Qu = null;
function Oh() {
    if (Qu) return Qu;
    var e,
        t = Ns,
        l = t.length,
        a,
        n = 'value' in bl ? bl.value : bl.textContent,
        u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var i = l - e;
    for (a = 1; a <= i && t[l - a] === n[u - a]; a++);
    return (Qu = n.slice(e, 1 < a ? 1 - a : void 0));
}
function Zu(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Mu() {
    return !0;
}
function Wf() {
    return !1;
}
function tt(e) {
    function t(l, a, n, u, i) {
        ((this._reactName = l),
            (this._targetInst = n),
            (this.type = a),
            (this.nativeEvent = u),
            (this.target = i),
            (this.currentTarget = null));
        for (var r in e) e.hasOwnProperty(r) && ((l = e[r]), (this[r] = l ? l(u) : u[r]));
        return (
            (this.isDefaultPrevented = (
                u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
            )
                ? Mu
                : Wf),
            (this.isPropagationStopped = Wf),
            this
        );
    }
    return (
        fe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l &&
                    (l.preventDefault
                        ? l.preventDefault()
                        : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
                    (this.isDefaultPrevented = Mu));
            },
            stopPropagation: function () {
                var l = this.nativeEvent;
                l &&
                    (l.stopPropagation
                        ? l.stopPropagation()
                        : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
                    (this.isPropagationStopped = Mu));
            },
            persist: function () {},
            isPersistent: Mu,
        }),
        t
    );
}
var aa = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Fi = tt(aa),
    iu = fe({}, aa, { view: 0, detail: 0 }),
    Y0 = tt(iu),
    Mr,
    zr,
    cn,
    $i = fe({}, iu, {
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
        getModifierState: Us,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== cn &&
                      (cn && e.type === 'mousemove'
                          ? ((Mr = e.screenX - cn.screenX), (zr = e.screenY - cn.screenY))
                          : (zr = Mr = 0),
                      (cn = e)),
                  Mr);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : zr;
        },
    }),
    Pf = tt($i),
    G0 = fe({}, $i, { dataTransfer: 0 }),
    X0 = tt(G0),
    Q0 = fe({}, iu, { relatedTarget: 0 }),
    Cr = tt(Q0),
    Z0 = fe({}, aa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    K0 = tt(Z0),
    k0 = fe({}, aa, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    J0 = tt(k0),
    F0 = fe({}, aa, { data: 0 }),
    If = tt(F0),
    $0 = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    W0 = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    P0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function I0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = P0[e]) ? !!t[e] : !1;
}
function Us() {
    return I0;
}
var eg = fe({}, iu, {
        key: function (e) {
            if (e.key) {
                var t = $0[e.key] || e.key;
                if (t !== 'Unidentified') return t;
            }
            return e.type === 'keypress'
                ? ((e = Zu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                  ? W0[e.keyCode] || 'Unidentified'
                  : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Us,
        charCode: function (e) {
            return e.type === 'keypress' ? Zu(e) : 0;
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === 'keypress'
                ? Zu(e)
                : e.type === 'keydown' || e.type === 'keyup'
                  ? e.keyCode
                  : 0;
        },
    }),
    tg = tt(eg),
    lg = fe({}, $i, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    eo = tt(lg),
    ag = fe({}, iu, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Us,
    }),
    ng = tt(ag),
    ug = fe({}, aa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ig = tt(ug),
    rg = fe({}, $i, {
        deltaX: function (e) {
            return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    cg = tt(rg),
    sg = fe({}, aa, { newState: 0, oldState: 0 }),
    fg = tt(sg),
    og = [9, 13, 27, 32],
    Ms = tl && 'CompositionEvent' in window,
    Tn = null;
tl && 'documentMode' in document && (Tn = document.documentMode);
var dg = tl && 'TextEvent' in window && !Tn,
    xh = tl && (!Ms || (Tn && 8 < Tn && 11 >= Tn)),
    to = ' ',
    lo = !1;
function _h(e, t) {
    switch (e) {
        case 'keyup':
            return og.indexOf(t.keyCode) !== -1;
        case 'keydown':
            return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function Dh(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
}
var Ea = !1;
function hg(e, t) {
    switch (e) {
        case 'compositionend':
            return Dh(t);
        case 'keypress':
            return t.which !== 32 ? null : ((lo = !0), to);
        case 'textInput':
            return ((e = t.data), e === to && lo ? null : e);
        default:
            return null;
    }
}
function mg(e, t) {
    if (Ea)
        return e === 'compositionend' || (!Ms && _h(e, t))
            ? ((e = Oh()), (Qu = Ns = bl = null), (Ea = !1), e)
            : null;
    switch (e) {
        case 'paste':
            return null;
        case 'keypress':
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case 'compositionend':
            return xh && t.locale !== 'ko' ? null : t.data;
        default:
            return null;
    }
}
var yg = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
    week: !0,
};
function ao(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!yg[e.type] : t === 'textarea';
}
function Nh(e, t, l, a) {
    (Sa ? (Ma ? Ma.push(a) : (Ma = [a])) : (Sa = a),
        (t = Ui(t, 'onChange')),
        0 < t.length &&
            ((l = new Fi('onChange', 'change', null, l, a)), e.push({ event: l, listeners: t })));
}
var Rn = null,
    Yn = null;
function vg(e) {
    Ey(e, 0);
}
function Wi(e) {
    var t = Sn(e);
    if (bh(t)) return e;
}
function no(e, t) {
    if (e === 'change') return t;
}
var Uh = !1;
if (tl) {
    var wr;
    if (tl) {
        var Br = 'oninput' in document;
        if (!Br) {
            var uo = document.createElement('div');
            (uo.setAttribute('oninput', 'return;'), (Br = typeof uo.oninput == 'function'));
        }
        wr = Br;
    } else wr = !1;
    Uh = wr && (!document.documentMode || 9 < document.documentMode);
}
function io() {
    Rn && (Rn.detachEvent('onpropertychange', Mh), (Yn = Rn = null));
}
function Mh(e) {
    if (e.propertyName === 'value' && Wi(Yn)) {
        var t = [];
        (Nh(t, Yn, e, Ds(e)), Rh(vg, t));
    }
}
function gg(e, t, l) {
    e === 'focusin'
        ? (io(), (Rn = t), (Yn = l), Rn.attachEvent('onpropertychange', Mh))
        : e === 'focusout' && io();
}
function pg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Wi(Yn);
}
function bg(e, t) {
    if (e === 'click') return Wi(t);
}
function Sg(e, t) {
    if (e === 'input' || e === 'change') return Wi(t);
}
function Eg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == 'function' ? Object.is : Eg;
function Gn(e, t) {
    if (ft(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var l = Object.keys(e),
        a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
        var n = l[a];
        if (!pc.call(t, n) || !ft(e[n], t[n])) return !1;
    }
    return !0;
}
function ro(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function co(e, t) {
    var l = ro(e);
    e = 0;
    for (var a; l; ) {
        if (l.nodeType === 3) {
            if (((a = e + l.textContent.length), e <= t && a >= t))
                return { node: l, offset: t - e };
            e = a;
        }
        e: {
            for (; l; ) {
                if (l.nextSibling) {
                    l = l.nextSibling;
                    break e;
                }
                l = l.parentNode;
            }
            l = void 0;
        }
        l = ro(l);
    }
}
function zh(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? zh(e, t.parentNode)
                : 'contains' in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function Ch(e) {
    e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
            ? e.ownerDocument.defaultView
            : window;
    for (var t = di(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
            var l = typeof t.contentWindow.location.href == 'string';
        } catch {
            l = !1;
        }
        if (l) e = t.contentWindow;
        else break;
        t = di(e.document);
    }
    return t;
}
function zs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === 'input' &&
            (e.type === 'text' ||
                e.type === 'search' ||
                e.type === 'tel' ||
                e.type === 'url' ||
                e.type === 'password')) ||
            t === 'textarea' ||
            e.contentEditable === 'true')
    );
}
var Ag = tl && 'documentMode' in document && 11 >= document.documentMode,
    Aa = null,
    Rc = null,
    On = null,
    Oc = !1;
function so(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Oc ||
        Aa == null ||
        Aa !== di(a) ||
        ((a = Aa),
        'selectionStart' in a && zs(a)
            ? (a = { start: a.selectionStart, end: a.selectionEnd })
            : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
              (a = {
                  anchorNode: a.anchorNode,
                  anchorOffset: a.anchorOffset,
                  focusNode: a.focusNode,
                  focusOffset: a.focusOffset,
              })),
        (On && Gn(On, a)) ||
            ((On = a),
            (a = Ui(Rc, 'onSelect')),
            0 < a.length &&
                ((t = new Fi('onSelect', 'select', null, t, l)),
                e.push({ event: t, listeners: a }),
                (t.target = Aa))));
}
function Hl(e, t) {
    var l = {};
    return (
        (l[e.toLowerCase()] = t.toLowerCase()),
        (l['Webkit' + e] = 'webkit' + t),
        (l['Moz' + e] = 'moz' + t),
        l
    );
}
var Ta = {
        animationend: Hl('Animation', 'AnimationEnd'),
        animationiteration: Hl('Animation', 'AnimationIteration'),
        animationstart: Hl('Animation', 'AnimationStart'),
        transitionrun: Hl('Transition', 'TransitionRun'),
        transitionstart: Hl('Transition', 'TransitionStart'),
        transitioncancel: Hl('Transition', 'TransitionCancel'),
        transitionend: Hl('Transition', 'TransitionEnd'),
    },
    jr = {},
    wh = {};
tl &&
    ((wh = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete Ta.animationend.animation,
        delete Ta.animationiteration.animation,
        delete Ta.animationstart.animation),
    'TransitionEvent' in window || delete Ta.transitionend.transition);
function na(e) {
    if (jr[e]) return jr[e];
    if (!Ta[e]) return e;
    var t = Ta[e],
        l;
    for (l in t) if (t.hasOwnProperty(l) && l in wh) return (jr[e] = t[l]);
    return e;
}
var Bh = na('animationend'),
    jh = na('animationiteration'),
    Hh = na('animationstart'),
    Tg = na('transitionrun'),
    Rg = na('transitionstart'),
    Og = na('transitioncancel'),
    Lh = na('transitionend'),
    qh = new Map(),
    xc =
        'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        );
xc.push('scrollEnd');
function Ot(e, t) {
    (qh.set(e, t), la(t, [e]));
}
var fo = new WeakMap();
function gt(e, t) {
    if (typeof e == 'object' && e !== null) {
        var l = fo.get(e);
        return l !== void 0 ? l : ((t = { value: e, source: t, stack: Jf(t) }), fo.set(e, t), t);
    }
    return { value: e, source: t, stack: Jf(t) };
}
var dt = [],
    Ra = 0,
    Cs = 0;
function Pi() {
    for (var e = Ra, t = (Cs = Ra = 0); t < e; ) {
        var l = dt[t];
        dt[t++] = null;
        var a = dt[t];
        dt[t++] = null;
        var n = dt[t];
        dt[t++] = null;
        var u = dt[t];
        if (((dt[t++] = null), a !== null && n !== null)) {
            var i = a.pending;
            (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)), (a.pending = n));
        }
        u !== 0 && Vh(l, n, u);
    }
}
function Ii(e, t, l, a) {
    ((dt[Ra++] = e),
        (dt[Ra++] = t),
        (dt[Ra++] = l),
        (dt[Ra++] = a),
        (Cs |= a),
        (e.lanes |= a),
        (e = e.alternate),
        e !== null && (e.lanes |= a));
}
function ws(e, t, l, a) {
    return (Ii(e, t, l, a), hi(e));
}
function Wa(e, t) {
    return (Ii(e, null, null, t), hi(e));
}
function Vh(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
        ((u.childLanes |= l),
            (a = u.alternate),
            a !== null && (a.childLanes |= l),
            u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
            (e = u),
            (u = u.return));
    return e.tag === 3
        ? ((u = e.stateNode),
          n &&
              t !== null &&
              ((n = 31 - rt(l)),
              (e = u.hiddenUpdates),
              (a = e[n]),
              a === null ? (e[n] = [t]) : a.push(t),
              (t.lane = l | 536870912)),
          u)
        : null;
}
function hi(e) {
    if (50 < Bn) throw ((Bn = 0), (kc = null), Error(_(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
}
var Oa = {};
function xg(e, t, l, a) {
    ((this.tag = e),
        (this.key = l),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = a),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
}
function ut(e, t, l, a) {
    return new xg(e, t, l, a);
}
function Bs(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Pt(e, t) {
    var l = e.alternate;
    return (
        l === null
            ? ((l = ut(e.tag, t, e.key, e.mode)),
              (l.elementType = e.elementType),
              (l.type = e.type),
              (l.stateNode = e.stateNode),
              (l.alternate = e),
              (e.alternate = l))
            : ((l.pendingProps = t),
              (l.type = e.type),
              (l.flags = 0),
              (l.subtreeFlags = 0),
              (l.deletions = null)),
        (l.flags = e.flags & 65011712),
        (l.childLanes = e.childLanes),
        (l.lanes = e.lanes),
        (l.child = e.child),
        (l.memoizedProps = e.memoizedProps),
        (l.memoizedState = e.memoizedState),
        (l.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (l.sibling = e.sibling),
        (l.index = e.index),
        (l.ref = e.ref),
        (l.refCleanup = e.refCleanup),
        l
    );
}
function Yh(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
        l === null
            ? ((e.childLanes = 0),
              (e.lanes = t),
              (e.child = null),
              (e.subtreeFlags = 0),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.updateQueue = null),
              (e.dependencies = null),
              (e.stateNode = null))
            : ((e.childLanes = l.childLanes),
              (e.lanes = l.lanes),
              (e.child = l.child),
              (e.subtreeFlags = 0),
              (e.deletions = null),
              (e.memoizedProps = l.memoizedProps),
              (e.memoizedState = l.memoizedState),
              (e.updateQueue = l.updateQueue),
              (e.type = l.type),
              (t = l.dependencies),
              (e.dependencies =
                  t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
    );
}
function Ku(e, t, l, a, n, u) {
    var i = 0;
    if (((a = e), typeof e == 'function')) Bs(e) && (i = 1);
    else if (typeof e == 'string')
        i = Dp(e, l, Ct.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
        e: switch (e) {
            case mc:
                return ((e = ut(31, l, t, n)), (e.elementType = mc), (e.lanes = u), e);
            case ga:
                return Ql(l.children, n, u, t);
            case ih:
                ((i = 8), (n |= 24));
                break;
            case oc:
                return ((e = ut(12, l, t, n | 2)), (e.elementType = oc), (e.lanes = u), e);
            case dc:
                return ((e = ut(13, l, t, n)), (e.elementType = dc), (e.lanes = u), e);
            case hc:
                return ((e = ut(19, l, t, n)), (e.elementType = hc), (e.lanes = u), e);
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case v0:
                        case kt:
                            i = 10;
                            break e;
                        case rh:
                            i = 9;
                            break e;
                        case Es:
                            i = 11;
                            break e;
                        case As:
                            i = 14;
                            break e;
                        case ol:
                            ((i = 16), (a = null));
                            break e;
                    }
                ((i = 29), (l = Error(_(130, e === null ? 'null' : typeof e, ''))), (a = null));
        }
    return ((t = ut(i, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
}
function Ql(e, t, l, a) {
    return ((e = ut(7, e, a, t)), (e.lanes = l), e);
}
function Hr(e, t, l) {
    return ((e = ut(6, e, null, t)), (e.lanes = l), e);
}
function Lr(e, t, l) {
    return (
        (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = l),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
var xa = [],
    _a = 0,
    mi = null,
    yi = 0,
    mt = [],
    yt = 0,
    Zl = null,
    Jt = 1,
    Ft = '';
function ql(e, t) {
    ((xa[_a++] = yi), (xa[_a++] = mi), (mi = e), (yi = t));
}
function Gh(e, t, l) {
    ((mt[yt++] = Jt), (mt[yt++] = Ft), (mt[yt++] = Zl), (Zl = e));
    var a = Jt;
    e = Ft;
    var n = 32 - rt(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - rt(t) + n;
    if (30 < u) {
        var i = n - (n % 5);
        ((u = (a & ((1 << i) - 1)).toString(32)),
            (a >>= i),
            (n -= i),
            (Jt = (1 << (32 - rt(t) + n)) | (l << n) | a),
            (Ft = u + e));
    } else ((Jt = (1 << u) | (l << n) | a), (Ft = e));
}
function js(e) {
    e.return !== null && (ql(e, 1), Gh(e, 1, 0));
}
function Hs(e) {
    for (; e === mi; ) ((mi = xa[--_a]), (xa[_a] = null), (yi = xa[--_a]), (xa[_a] = null));
    for (; e === Zl; )
        ((Zl = mt[--yt]),
            (mt[yt] = null),
            (Ft = mt[--yt]),
            (mt[yt] = null),
            (Jt = mt[--yt]),
            (mt[yt] = null));
}
var Ze = null,
    be = null,
    W = !1,
    Kl = null,
    Ut = !1,
    _c = Error(_(519));
function Wl(e) {
    var t = Error(_(418, ''));
    throw (Xn(gt(t, e)), _c);
}
function oo(e) {
    var t = e.stateNode,
        l = e.type,
        a = e.memoizedProps;
    switch (((t[Ge] = e), (t[et] = a), l)) {
        case 'dialog':
            (k('cancel', t), k('close', t));
            break;
        case 'iframe':
        case 'object':
        case 'embed':
            k('load', t);
            break;
        case 'video':
        case 'audio':
            for (l = 0; l < Kn.length; l++) k(Kn[l], t);
            break;
        case 'source':
            k('error', t);
            break;
        case 'img':
        case 'image':
        case 'link':
            (k('error', t), k('load', t));
            break;
        case 'details':
            k('toggle', t);
            break;
        case 'input':
            (k('invalid', t),
                Sh(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
                oi(t));
            break;
        case 'select':
            k('invalid', t);
            break;
        case 'textarea':
            (k('invalid', t), Ah(t, a.value, a.defaultValue, a.children), oi(t));
    }
    ((l = a.children),
        (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
        t.textContent === '' + l ||
        a.suppressHydrationWarning === !0 ||
        Ty(t.textContent, l)
            ? (a.popover != null && (k('beforetoggle', t), k('toggle', t)),
              a.onScroll != null && k('scroll', t),
              a.onScrollEnd != null && k('scrollend', t),
              a.onClick != null && (t.onclick = rr),
              (t = !0))
            : (t = !1),
        t || Wl(e));
}
function ho(e) {
    for (Ze = e.return; Ze; )
        switch (Ze.tag) {
            case 5:
            case 13:
                Ut = !1;
                return;
            case 27:
            case 3:
                Ut = !0;
                return;
            default:
                Ze = Ze.return;
        }
}
function sn(e) {
    if (e !== Ze) return !1;
    if (!W) return (ho(e), (W = !0), !1);
    var t = e.tag,
        l;
    if (
        ((l = t !== 3 && t !== 27) &&
            ((l = t === 5) &&
                ((l = e.type),
                (l = !(l !== 'form' && l !== 'button') || Ic(e.type, e.memoizedProps))),
            (l = !l)),
        l && be && Wl(e),
        ho(e),
        t === 13)
    ) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(_(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8)
                    if (((l = e.data), l === '/$')) {
                        if (t === 0) {
                            be = Rt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (l !== '$' && l !== '$!' && l !== '$?') || t++;
                e = e.nextSibling;
            }
            be = null;
        }
    } else
        t === 27
            ? ((t = be), wl(e.type) ? ((e = ls), (ls = null), (be = e)) : (be = t))
            : (be = Ze ? Rt(e.stateNode.nextSibling) : null);
    return !0;
}
function ru() {
    ((be = Ze = null), (W = !1));
}
function mo() {
    var e = Kl;
    return (e !== null && (We === null ? (We = e) : We.push.apply(We, e), (Kl = null)), e);
}
function Xn(e) {
    Kl === null ? (Kl = [e]) : Kl.push(e);
}
var Dc = Ht(null),
    ua = null,
    $t = null;
function hl(e, t, l) {
    (me(Dc, t._currentValue), (t._currentValue = l));
}
function It(e) {
    ((e._currentValue = Dc.current), He(Dc));
}
function Nc(e, t, l) {
    for (; e !== null; ) {
        var a = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
                : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            e === l)
        )
            break;
        e = e.return;
    }
}
function Uc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
        var u = n.dependencies;
        if (u !== null) {
            var i = n.child;
            u = u.firstContext;
            e: for (; u !== null; ) {
                var r = u;
                u = n;
                for (var c = 0; c < t.length; c++)
                    if (r.context === t[c]) {
                        ((u.lanes |= l),
                            (r = u.alternate),
                            r !== null && (r.lanes |= l),
                            Nc(u.return, l, e),
                            a || (i = null));
                        break e;
                    }
                u = r.next;
            }
        } else if (n.tag === 18) {
            if (((i = n.return), i === null)) throw Error(_(341));
            ((i.lanes |= l),
                (u = i.alternate),
                u !== null && (u.lanes |= l),
                Nc(i, l, e),
                (i = null));
        } else i = n.child;
        if (i !== null) i.return = n;
        else
            for (i = n; i !== null; ) {
                if (i === e) {
                    i = null;
                    break;
                }
                if (((n = i.sibling), n !== null)) {
                    ((n.return = i.return), (i = n));
                    break;
                }
                i = i.return;
            }
        n = i;
    }
}
function cu(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
        if (!u) {
            if (n.flags & 524288) u = !0;
            else if (n.flags & 262144) break;
        }
        if (n.tag === 10) {
            var i = n.alternate;
            if (i === null) throw Error(_(387));
            if (((i = i.memoizedProps), i !== null)) {
                var r = n.type;
                ft(n.pendingProps.value, i.value) || (e !== null ? e.push(r) : (e = [r]));
            }
        } else if (n === ri.current) {
            if (((i = n.alternate), i === null)) throw Error(_(387));
            i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
                (e !== null ? e.push(Fn) : (e = [Fn]));
        }
        n = n.return;
    }
    (e !== null && Uc(t, e, l, a), (t.flags |= 262144));
}
function vi(e) {
    for (e = e.firstContext; e !== null; ) {
        if (!ft(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
    }
    return !1;
}
function Pl(e) {
    ((ua = e), ($t = null), (e = e.dependencies), e !== null && (e.firstContext = null));
}
function Xe(e) {
    return Xh(ua, e);
}
function zu(e, t) {
    return (ua === null && Pl(e), Xh(e, t));
}
function Xh(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), $t === null)) {
        if (e === null) throw Error(_(308));
        (($t = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else $t = $t.next = t;
    return l;
}
var _g =
        typeof AbortController < 'u'
            ? AbortController
            : function () {
                  var e = [],
                      t = (this.signal = {
                          aborted: !1,
                          addEventListener: function (l, a) {
                              e.push(a);
                          },
                      });
                  this.abort = function () {
                      ((t.aborted = !0),
                          e.forEach(function (l) {
                              return l();
                          }));
                  };
              },
    Dg = ze.unstable_scheduleCallback,
    Ng = ze.unstable_NormalPriority,
    Ue = {
        $$typeof: kt,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
    };
function Ls() {
    return { controller: new _g(), data: new Map(), refCount: 0 };
}
function su(e) {
    (e.refCount--,
        e.refCount === 0 &&
            Dg(Ng, function () {
                e.controller.abort();
            }));
}
var xn = null,
    Mc = 0,
    Va = 0,
    za = null;
function Ug(e, t) {
    if (xn === null) {
        var l = (xn = []);
        ((Mc = 0),
            (Va = cf()),
            (za = {
                status: 'pending',
                value: void 0,
                then: function (a) {
                    l.push(a);
                },
            }));
    }
    return (Mc++, t.then(yo, yo), t);
}
function yo() {
    if (--Mc === 0 && xn !== null) {
        za !== null && (za.status = 'fulfilled');
        var e = xn;
        ((xn = null), (Va = 0), (za = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
}
function Mg(e, t) {
    var l = [],
        a = {
            status: 'pending',
            value: null,
            reason: null,
            then: function (n) {
                l.push(n);
            },
        };
    return (
        e.then(
            function () {
                ((a.status = 'fulfilled'), (a.value = t));
                for (var n = 0; n < l.length; n++) (0, l[n])(t);
            },
            function (n) {
                for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++)
                    (0, l[n])(void 0);
            }
        ),
        a
    );
}
var vo = Y.S;
Y.S = function (e, t) {
    (typeof t == 'object' && t !== null && typeof t.then == 'function' && Ug(e, t),
        vo !== null && vo(e, t));
};
var kl = Ht(null);
function qs() {
    var e = kl.current;
    return e !== null ? e : se.pooledCache;
}
function ku(e, t) {
    t === null ? me(kl, kl.current) : me(kl, t.pool);
}
function Qh() {
    var e = qs();
    return e === null ? null : { parent: Ue._currentValue, pool: e };
}
var fu = Error(_(460)),
    Zh = Error(_(474)),
    er = Error(_(542)),
    zc = { then: function () {} };
function go(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
}
function Cu() {}
function Kh(e, t, l) {
    switch (
        ((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(Cu, Cu), (t = l)), t.status)
    ) {
        case 'fulfilled':
            return t.value;
        case 'rejected':
            throw ((e = t.reason), bo(e), e);
        default:
            if (typeof t.status == 'string') t.then(Cu, Cu);
            else {
                if (((e = se), e !== null && 100 < e.shellSuspendCounter)) throw Error(_(482));
                ((e = t),
                    (e.status = 'pending'),
                    e.then(
                        function (a) {
                            if (t.status === 'pending') {
                                var n = t;
                                ((n.status = 'fulfilled'), (n.value = a));
                            }
                        },
                        function (a) {
                            if (t.status === 'pending') {
                                var n = t;
                                ((n.status = 'rejected'), (n.reason = a));
                            }
                        }
                    ));
            }
            switch (t.status) {
                case 'fulfilled':
                    return t.value;
                case 'rejected':
                    throw ((e = t.reason), bo(e), e);
            }
            throw ((_n = t), fu);
    }
}
var _n = null;
function po() {
    if (_n === null) throw Error(_(459));
    var e = _n;
    return ((_n = null), e);
}
function bo(e) {
    if (e === fu || e === er) throw Error(_(483));
}
var dl = !1;
function Vs(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
    };
}
function Cc(e, t) {
    ((e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
            }));
}
function Tl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Rl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), te & 2)) {
        var n = a.pending;
        return (
            n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (a.pending = t),
            (t = hi(e)),
            Vh(e, null, l),
            t
        );
    }
    return (Ii(e, a, t, l), hi(e));
}
function Dn(e, t, l) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
        var a = t.lanes;
        ((a &= e.pendingLanes), (l |= a), (t.lanes = l), mh(e, l));
    }
}
function qr(e, t) {
    var l = e.updateQueue,
        a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
        var n = null,
            u = null;
        if (((l = l.firstBaseUpdate), l !== null)) {
            do {
                var i = {
                    lane: l.lane,
                    tag: l.tag,
                    payload: l.payload,
                    callback: null,
                    next: null,
                };
                (u === null ? (n = u = i) : (u = u.next = i), (l = l.next));
            } while (l !== null);
            u === null ? (n = u = t) : (u = u.next = t);
        } else n = u = t;
        ((l = {
            baseState: a.baseState,
            firstBaseUpdate: n,
            lastBaseUpdate: u,
            shared: a.shared,
            callbacks: a.callbacks,
        }),
            (e.updateQueue = l));
        return;
    }
    ((e = l.lastBaseUpdate),
        e === null ? (l.firstBaseUpdate = t) : (e.next = t),
        (l.lastBaseUpdate = t));
}
var wc = !1;
function Nn() {
    if (wc) {
        var e = za;
        if (e !== null) throw e;
    }
}
function Un(e, t, l, a) {
    wc = !1;
    var n = e.updateQueue;
    dl = !1;
    var u = n.firstBaseUpdate,
        i = n.lastBaseUpdate,
        r = n.shared.pending;
    if (r !== null) {
        n.shared.pending = null;
        var c = r,
            s = c.next;
        ((c.next = null), i === null ? (u = s) : (i.next = s), (i = c));
        var f = e.alternate;
        f !== null &&
            ((f = f.updateQueue),
            (r = f.lastBaseUpdate),
            r !== i &&
                (r === null ? (f.firstBaseUpdate = s) : (r.next = s), (f.lastBaseUpdate = c)));
    }
    if (u !== null) {
        var h = n.baseState;
        ((i = 0), (f = s = c = null), (r = u));
        do {
            var d = r.lane & -536870913,
                v = d !== r.lane;
            if (v ? (F & d) === d : (a & d) === d) {
                (d !== 0 && d === Va && (wc = !0),
                    f !== null &&
                        (f = f.next =
                            {
                                lane: 0,
                                tag: r.tag,
                                payload: r.payload,
                                callback: null,
                                next: null,
                            }));
                e: {
                    var b = e,
                        S = r;
                    d = t;
                    var A = l;
                    switch (S.tag) {
                        case 1:
                            if (((b = S.payload), typeof b == 'function')) {
                                h = b.call(A, h, d);
                                break e;
                            }
                            h = b;
                            break e;
                        case 3:
                            b.flags = (b.flags & -65537) | 128;
                        case 0:
                            if (
                                ((b = S.payload),
                                (d = typeof b == 'function' ? b.call(A, h, d) : b),
                                d == null)
                            )
                                break e;
                            h = fe({}, h, d);
                            break e;
                        case 2:
                            dl = !0;
                    }
                }
                ((d = r.callback),
                    d !== null &&
                        ((e.flags |= 64),
                        v && (e.flags |= 8192),
                        (v = n.callbacks),
                        v === null ? (n.callbacks = [d]) : v.push(d)));
            } else
                ((v = {
                    lane: d,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null,
                }),
                    f === null ? ((s = f = v), (c = h)) : (f = f.next = v),
                    (i |= d));
            if (((r = r.next), r === null)) {
                if (((r = n.shared.pending), r === null)) break;
                ((v = r),
                    (r = v.next),
                    (v.next = null),
                    (n.lastBaseUpdate = v),
                    (n.shared.pending = null));
            }
        } while (!0);
        (f === null && (c = h),
            (n.baseState = c),
            (n.firstBaseUpdate = s),
            (n.lastBaseUpdate = f),
            u === null && (n.shared.lanes = 0),
            (zl |= i),
            (e.lanes = i),
            (e.memoizedState = h));
    }
}
function kh(e, t) {
    if (typeof e != 'function') throw Error(_(191, e));
    e.call(t);
}
function Jh(e, t) {
    var l = e.callbacks;
    if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) kh(l[e], t);
}
var Ya = Ht(null),
    gi = Ht(0);
function So(e, t) {
    ((e = nl), me(gi, e), me(Ya, t), (nl = e | t.baseLanes));
}
function Bc() {
    (me(gi, nl), me(Ya, Ya.current));
}
function Ys() {
    ((nl = gi.current), He(Ya), He(gi));
}
var Ul = 0,
    K = null,
    ne = null,
    xe = null,
    pi = !1,
    Ca = !1,
    Il = !1,
    bi = 0,
    Qn = 0,
    wa = null,
    zg = 0;
function Ee() {
    throw Error(_(321));
}
function Gs(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++) if (!ft(e[l], t[l])) return !1;
    return !0;
}
function Xs(e, t, l, a, n, u) {
    return (
        (Ul = u),
        (K = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Y.H = e === null || e.memoizedState === null ? Om : xm),
        (Il = !1),
        (u = l(a, n)),
        (Il = !1),
        Ca && (u = $h(t, l, a, n)),
        Fh(e),
        u
    );
}
function Fh(e) {
    Y.H = Si;
    var t = ne !== null && ne.next !== null;
    if (((Ul = 0), (xe = ne = K = null), (pi = !1), (Qn = 0), (wa = null), t)) throw Error(_(300));
    e === null || je || ((e = e.dependencies), e !== null && vi(e) && (je = !0));
}
function $h(e, t, l, a) {
    K = e;
    var n = 0;
    do {
        if ((Ca && (wa = null), (Qn = 0), (Ca = !1), 25 <= n)) throw Error(_(301));
        if (((n += 1), (xe = ne = null), e.updateQueue != null)) {
            var u = e.updateQueue;
            ((u.lastEffect = null),
                (u.events = null),
                (u.stores = null),
                u.memoCache != null && (u.memoCache.index = 0));
        }
        ((Y.H = qg), (u = t(l, a)));
    } while (Ca);
    return u;
}
function Cg() {
    var e = Y.H,
        t = e.useState()[0];
    return (
        (t = typeof t.then == 'function' ? ou(t) : t),
        (e = e.useState()[0]),
        (ne !== null ? ne.memoizedState : null) !== e && (K.flags |= 1024),
        t
    );
}
function Qs() {
    var e = bi !== 0;
    return ((bi = 0), e);
}
function Zs(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
}
function Ks(e) {
    if (pi) {
        for (e = e.memoizedState; e !== null; ) {
            var t = e.queue;
            (t !== null && (t.pending = null), (e = e.next));
        }
        pi = !1;
    }
    ((Ul = 0), (xe = ne = K = null), (Ca = !1), (Qn = bi = 0), (wa = null));
}
function Je() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (xe === null ? (K.memoizedState = xe = e) : (xe = xe.next = e), xe);
}
function De() {
    if (ne === null) {
        var e = K.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = ne.next;
    var t = xe === null ? K.memoizedState : xe.next;
    if (t !== null) ((xe = t), (ne = e));
    else {
        if (e === null) throw K.alternate === null ? Error(_(467)) : Error(_(310));
        ((ne = e),
            (e = {
                memoizedState: ne.memoizedState,
                baseState: ne.baseState,
                baseQueue: ne.baseQueue,
                queue: ne.queue,
                next: null,
            }),
            xe === null ? (K.memoizedState = xe = e) : (xe = xe.next = e));
    }
    return xe;
}
function ks() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function ou(e) {
    var t = Qn;
    return (
        (Qn += 1),
        wa === null && (wa = []),
        (e = Kh(wa, e, t)),
        (t = K),
        (xe === null ? t.memoizedState : xe.next) === null &&
            ((t = t.alternate), (Y.H = t === null || t.memoizedState === null ? Om : xm)),
        e
    );
}
function tr(e) {
    if (e !== null && typeof e == 'object') {
        if (typeof e.then == 'function') return ou(e);
        if (e.$$typeof === kt) return Xe(e);
    }
    throw Error(_(438, String(e)));
}
function Js(e) {
    var t = null,
        l = K.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
        var a = K.alternate;
        a !== null &&
            ((a = a.updateQueue),
            a !== null &&
                ((a = a.memoCache),
                a != null &&
                    (t = {
                        data: a.data.map(function (n) {
                            return n.slice();
                        }),
                        index: 0,
                    })));
    }
    if (
        (t == null && (t = { data: [], index: 0 }),
        l === null && ((l = ks()), (K.updateQueue = l)),
        (l.memoCache = t),
        (l = t.data[t.index]),
        l === void 0)
    )
        for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = g0;
    return (t.index++, l);
}
function ll(e, t) {
    return typeof t == 'function' ? t(e) : t;
}
function Ju(e) {
    var t = De();
    return Fs(t, ne, e);
}
function Fs(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(_(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
        u = a.pending;
    if (u !== null) {
        if (n !== null) {
            var i = n.next;
            ((n.next = u.next), (u.next = i));
        }
        ((t.baseQueue = n = u), (a.pending = null));
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
        t = n.next;
        var r = (i = null),
            c = null,
            s = t,
            f = !1;
        do {
            var h = s.lane & -536870913;
            if (h !== s.lane ? (F & h) === h : (Ul & h) === h) {
                var d = s.revertLane;
                if (d === 0)
                    (c !== null &&
                        (c = c.next =
                            {
                                lane: 0,
                                revertLane: 0,
                                action: s.action,
                                hasEagerState: s.hasEagerState,
                                eagerState: s.eagerState,
                                next: null,
                            }),
                        h === Va && (f = !0));
                else if ((Ul & d) === d) {
                    ((s = s.next), d === Va && (f = !0));
                    continue;
                } else
                    ((h = {
                        lane: 0,
                        revertLane: s.revertLane,
                        action: s.action,
                        hasEagerState: s.hasEagerState,
                        eagerState: s.eagerState,
                        next: null,
                    }),
                        c === null ? ((r = c = h), (i = u)) : (c = c.next = h),
                        (K.lanes |= d),
                        (zl |= d));
                ((h = s.action), Il && l(u, h), (u = s.hasEagerState ? s.eagerState : l(u, h)));
            } else
                ((d = {
                    lane: h,
                    revertLane: s.revertLane,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                }),
                    c === null ? ((r = c = d), (i = u)) : (c = c.next = d),
                    (K.lanes |= h),
                    (zl |= h));
            s = s.next;
        } while (s !== null && s !== t);
        if (
            (c === null ? (i = u) : (c.next = r),
            !ft(u, e.memoizedState) && ((je = !0), f && ((l = za), l !== null)))
        )
            throw l;
        ((e.memoizedState = u), (e.baseState = i), (e.baseQueue = c), (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
}
function Vr(e) {
    var t = De(),
        l = t.queue;
    if (l === null) throw Error(_(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
        n = l.pending,
        u = t.memoizedState;
    if (n !== null) {
        l.pending = null;
        var i = (n = n.next);
        do ((u = e(u, i.action)), (i = i.next));
        while (i !== n);
        (ft(u, t.memoizedState) || (je = !0),
            (t.memoizedState = u),
            t.baseQueue === null && (t.baseState = u),
            (l.lastRenderedState = u));
    }
    return [u, a];
}
function Wh(e, t, l) {
    var a = K,
        n = De(),
        u = W;
    if (u) {
        if (l === void 0) throw Error(_(407));
        l = l();
    } else l = t();
    var i = !ft((ne || n).memoizedState, l);
    (i && ((n.memoizedState = l), (je = !0)), (n = n.queue));
    var r = em.bind(null, a, n, e);
    if (
        (du(2048, 8, r, [e]), n.getSnapshot !== t || i || (xe !== null && xe.memoizedState.tag & 1))
    ) {
        if (((a.flags |= 2048), Ga(9, lr(), Ih.bind(null, a, n, l, t), null), se === null))
            throw Error(_(349));
        u || Ul & 124 || Ph(a, t, l);
    }
    return l;
}
function Ph(e, t, l) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: l }),
        (t = K.updateQueue),
        t === null
            ? ((t = ks()), (K.updateQueue = t), (t.stores = [e]))
            : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
}
function Ih(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), tm(t) && lm(e));
}
function em(e, t, l) {
    return l(function () {
        tm(t) && lm(e);
    });
}
function tm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var l = t();
        return !ft(e, l);
    } catch {
        return !0;
    }
}
function lm(e) {
    var t = Wa(e, 2);
    t !== null && st(t, e, 2);
}
function jc(e) {
    var t = Je();
    if (typeof e == 'function') {
        var l = e;
        if (((e = l()), Il)) {
            pl(!0);
            try {
                l();
            } finally {
                pl(!1);
            }
        }
    }
    return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ll,
            lastRenderedState: e,
        }),
        t
    );
}
function am(e, t, l, a) {
    return ((e.baseState = l), Fs(e, ne, typeof a == 'function' ? a : ll));
}
function wg(e, t, l, a, n) {
    if (ar(e)) throw Error(_(485));
    if (((e = t.action), e !== null)) {
        var u = {
            payload: n,
            action: e,
            next: null,
            isTransition: !0,
            status: 'pending',
            value: null,
            reason: null,
            listeners: [],
            then: function (i) {
                u.listeners.push(i);
            },
        };
        (Y.T !== null ? l(!0) : (u.isTransition = !1),
            a(u),
            (l = t.pending),
            l === null
                ? ((u.next = t.pending = u), nm(t, u))
                : ((u.next = l.next), (t.pending = l.next = u)));
    }
}
function nm(e, t) {
    var l = t.action,
        a = t.payload,
        n = e.state;
    if (t.isTransition) {
        var u = Y.T,
            i = {};
        Y.T = i;
        try {
            var r = l(n, a),
                c = Y.S;
            (c !== null && c(i, r), Eo(e, t, r));
        } catch (s) {
            Hc(e, t, s);
        } finally {
            Y.T = u;
        }
    } else
        try {
            ((u = l(n, a)), Eo(e, t, u));
        } catch (s) {
            Hc(e, t, s);
        }
}
function Eo(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
        ? l.then(
              function (a) {
                  Ao(e, t, a);
              },
              function (a) {
                  return Hc(e, t, a);
              }
          )
        : Ao(e, t, l);
}
function Ao(e, t, l) {
    ((t.status = 'fulfilled'),
        (t.value = l),
        um(t),
        (e.state = l),
        (t = e.pending),
        t !== null &&
            ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), nm(e, l))));
}
function Hc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
        a = a.next;
        do ((t.status = 'rejected'), (t.reason = l), um(t), (t = t.next));
        while (t !== a);
    }
    e.action = null;
}
function um(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
}
function im(e, t) {
    return t;
}
function To(e, t) {
    if (W) {
        var l = se.formState;
        if (l !== null) {
            e: {
                var a = K;
                if (W) {
                    if (be) {
                        t: {
                            for (var n = be, u = Ut; n.nodeType !== 8; ) {
                                if (!u) {
                                    n = null;
                                    break t;
                                }
                                if (((n = Rt(n.nextSibling)), n === null)) {
                                    n = null;
                                    break t;
                                }
                            }
                            ((u = n.data), (n = u === 'F!' || u === 'F' ? n : null));
                        }
                        if (n) {
                            ((be = Rt(n.nextSibling)), (a = n.data === 'F!'));
                            break e;
                        }
                    }
                    Wl(a);
                }
                a = !1;
            }
            a && (t = l[0]);
        }
    }
    return (
        (l = Je()),
        (l.memoizedState = l.baseState = t),
        (a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: im,
            lastRenderedState: t,
        }),
        (l.queue = a),
        (l = Am.bind(null, K, a)),
        (a.dispatch = l),
        (a = jc(!1)),
        (u = Is.bind(null, K, !1, a.queue)),
        (a = Je()),
        (n = { state: t, dispatch: null, action: e, pending: null }),
        (a.queue = n),
        (l = wg.bind(null, K, n, u, l)),
        (n.dispatch = l),
        (a.memoizedState = e),
        [t, l, !1]
    );
}
function Ro(e) {
    var t = De();
    return rm(t, ne, e);
}
function rm(e, t, l) {
    if (
        ((t = Fs(e, t, im)[0]),
        (e = Ju(ll)[0]),
        typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
        try {
            var a = ou(t);
        } catch (i) {
            throw i === fu ? er : i;
        }
    else a = t;
    t = De();
    var n = t.queue,
        u = n.dispatch;
    return (
        l !== t.memoizedState && ((K.flags |= 2048), Ga(9, lr(), Bg.bind(null, n, l), null)),
        [a, u, e]
    );
}
function Bg(e, t) {
    e.action = t;
}
function Oo(e) {
    var t = De(),
        l = ne;
    if (l !== null) return rm(t, l, e);
    (De(), (t = t.memoizedState), (l = De()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
}
function Ga(e, t, l, a) {
    return (
        (e = { tag: e, create: l, deps: a, inst: t, next: null }),
        (t = K.updateQueue),
        t === null && ((t = ks()), (K.updateQueue = t)),
        (l = t.lastEffect),
        l === null
            ? (t.lastEffect = e.next = e)
            : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
        e
    );
}
function lr() {
    return { destroy: void 0, resource: void 0 };
}
function cm() {
    return De().memoizedState;
}
function Fu(e, t, l, a) {
    var n = Je();
    ((a = a === void 0 ? null : a), (K.flags |= e), (n.memoizedState = Ga(1 | t, lr(), l, a)));
}
function du(e, t, l, a) {
    var n = De();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    ne !== null && a !== null && Gs(a, ne.memoizedState.deps)
        ? (n.memoizedState = Ga(t, u, l, a))
        : ((K.flags |= e), (n.memoizedState = Ga(1 | t, u, l, a)));
}
function xo(e, t) {
    Fu(8390656, 8, e, t);
}
function sm(e, t) {
    du(2048, 8, e, t);
}
function fm(e, t) {
    return du(4, 2, e, t);
}
function om(e, t) {
    return du(4, 4, e, t);
}
function dm(e, t) {
    if (typeof t == 'function') {
        e = e();
        var l = t(e);
        return function () {
            typeof l == 'function' ? l() : t(null);
        };
    }
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function hm(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), du(4, 4, dm.bind(null, t, e), l));
}
function $s() {}
function mm(e, t) {
    var l = De();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Gs(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
}
function ym(e, t) {
    var l = De();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Gs(t, a[1])) return a[0];
    if (((a = e()), Il)) {
        pl(!0);
        try {
            e();
        } finally {
            pl(!1);
        }
    }
    return ((l.memoizedState = [a, t]), a);
}
function Ws(e, t, l) {
    return l === void 0 || Ul & 1073741824
        ? (e.memoizedState = t)
        : ((e.memoizedState = l), (e = uy()), (K.lanes |= e), (zl |= e), l);
}
function vm(e, t, l, a) {
    return ft(l, t)
        ? l
        : Ya.current !== null
          ? ((e = Ws(e, l, a)), ft(e, t) || (je = !0), e)
          : Ul & 42
            ? ((e = uy()), (K.lanes |= e), (zl |= e), t)
            : ((je = !0), (e.memoizedState = l));
}
function gm(e, t, l, a, n) {
    var u = P.p;
    P.p = u !== 0 && 8 > u ? u : 8;
    var i = Y.T,
        r = {};
    ((Y.T = r), Is(e, !1, t, l));
    try {
        var c = n(),
            s = Y.S;
        if (
            (s !== null && s(r, c),
            c !== null && typeof c == 'object' && typeof c.then == 'function')
        ) {
            var f = Mg(c, a);
            Mn(e, t, f, ct(e));
        } else Mn(e, t, a, ct(e));
    } catch (h) {
        Mn(e, t, { then: function () {}, status: 'rejected', reason: h }, ct());
    } finally {
        ((P.p = u), (Y.T = i));
    }
}
function jg() {}
function Lc(e, t, l, a) {
    if (e.tag !== 5) throw Error(_(476));
    var n = pm(e).queue;
    gm(
        e,
        n,
        t,
        Xl,
        l === null
            ? jg
            : function () {
                  return (bm(e), l(a));
              }
    );
}
function pm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
        memoizedState: Xl,
        baseState: Xl,
        baseQueue: null,
        queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ll,
            lastRenderedState: Xl,
        },
        next: null,
    };
    var l = {};
    return (
        (t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ll,
                lastRenderedState: l,
            },
            next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
    );
}
function bm(e) {
    var t = pm(e).next.queue;
    Mn(e, t, {}, ct());
}
function Ps() {
    return Xe(Fn);
}
function Sm() {
    return De().memoizedState;
}
function Em() {
    return De().memoizedState;
}
function Hg(e) {
    for (var t = e.return; t !== null; ) {
        switch (t.tag) {
            case 24:
            case 3:
                var l = ct();
                e = Tl(l);
                var a = Rl(t, e, l);
                (a !== null && (st(a, t, l), Dn(a, t, l)), (t = { cache: Ls() }), (e.payload = t));
                return;
        }
        t = t.return;
    }
}
function Lg(e, t, l) {
    var a = ct();
    ((l = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }),
        ar(e) ? Tm(t, l) : ((l = ws(e, t, l, a)), l !== null && (st(l, e, a), Rm(l, t, a))));
}
function Am(e, t, l) {
    var a = ct();
    Mn(e, t, l, a);
}
function Mn(e, t, l, a) {
    var n = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ar(e)) Tm(t, n);
    else {
        var u = e.alternate;
        if (
            e.lanes === 0 &&
            (u === null || u.lanes === 0) &&
            ((u = t.lastRenderedReducer), u !== null)
        )
            try {
                var i = t.lastRenderedState,
                    r = u(i, l);
                if (((n.hasEagerState = !0), (n.eagerState = r), ft(r, i)))
                    return (Ii(e, t, n, 0), se === null && Pi(), !1);
            } catch {
            } finally {
            }
        if (((l = ws(e, t, n, a)), l !== null)) return (st(l, e, a), Rm(l, t, a), !0);
    }
    return !1;
}
function Is(e, t, l, a) {
    if (
        ((a = {
            lane: 2,
            revertLane: cf(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        ar(e))
    ) {
        if (t) throw Error(_(479));
    } else ((t = ws(e, l, a, 2)), t !== null && st(t, e, 2));
}
function ar(e) {
    var t = e.alternate;
    return e === K || (t !== null && t === K);
}
function Tm(e, t) {
    Ca = pi = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t));
}
function Rm(e, t, l) {
    if (l & 4194048) {
        var a = t.lanes;
        ((a &= e.pendingLanes), (l |= a), (t.lanes = l), mh(e, l));
    }
}
var Si = {
        readContext: Xe,
        use: tr,
        useCallback: Ee,
        useContext: Ee,
        useEffect: Ee,
        useImperativeHandle: Ee,
        useLayoutEffect: Ee,
        useInsertionEffect: Ee,
        useMemo: Ee,
        useReducer: Ee,
        useRef: Ee,
        useState: Ee,
        useDebugValue: Ee,
        useDeferredValue: Ee,
        useTransition: Ee,
        useSyncExternalStore: Ee,
        useId: Ee,
        useHostTransitionStatus: Ee,
        useFormState: Ee,
        useActionState: Ee,
        useOptimistic: Ee,
        useMemoCache: Ee,
        useCacheRefresh: Ee,
    },
    Om = {
        readContext: Xe,
        use: tr,
        useCallback: function (e, t) {
            return ((Je().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Xe,
        useEffect: xo,
        useImperativeHandle: function (e, t, l) {
            ((l = l != null ? l.concat([e]) : null), Fu(4194308, 4, dm.bind(null, t, e), l));
        },
        useLayoutEffect: function (e, t) {
            return Fu(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            Fu(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var l = Je();
            t = t === void 0 ? null : t;
            var a = e();
            if (Il) {
                pl(!0);
                try {
                    e();
                } finally {
                    pl(!1);
                }
            }
            return ((l.memoizedState = [a, t]), a);
        },
        useReducer: function (e, t, l) {
            var a = Je();
            if (l !== void 0) {
                var n = l(t);
                if (Il) {
                    pl(!0);
                    try {
                        l(t);
                    } finally {
                        pl(!1);
                    }
                }
            } else n = t;
            return (
                (a.memoizedState = a.baseState = n),
                (e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: n,
                }),
                (a.queue = e),
                (e = e.dispatch = Lg.bind(null, K, e)),
                [a.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Je();
            return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
            e = jc(e);
            var t = e.queue,
                l = Am.bind(null, K, t);
            return ((t.dispatch = l), [e.memoizedState, l]);
        },
        useDebugValue: $s,
        useDeferredValue: function (e, t) {
            var l = Je();
            return Ws(l, e, t);
        },
        useTransition: function () {
            var e = jc(!1);
            return ((e = gm.bind(null, K, e.queue, !0, !1)), (Je().memoizedState = e), [!1, e]);
        },
        useSyncExternalStore: function (e, t, l) {
            var a = K,
                n = Je();
            if (W) {
                if (l === void 0) throw Error(_(407));
                l = l();
            } else {
                if (((l = t()), se === null)) throw Error(_(349));
                F & 124 || Ph(a, t, l);
            }
            n.memoizedState = l;
            var u = { value: l, getSnapshot: t };
            return (
                (n.queue = u),
                xo(em.bind(null, a, u, e), [e]),
                (a.flags |= 2048),
                Ga(9, lr(), Ih.bind(null, a, u, l, t), null),
                l
            );
        },
        useId: function () {
            var e = Je(),
                t = se.identifierPrefix;
            if (W) {
                var l = Ft,
                    a = Jt;
                ((l = (a & ~(1 << (32 - rt(a) - 1))).toString(32) + l),
                    (t = '«' + t + 'R' + l),
                    (l = bi++),
                    0 < l && (t += 'H' + l.toString(32)),
                    (t += '»'));
            } else ((l = zg++), (t = '«' + t + 'r' + l.toString(32) + '»'));
            return (e.memoizedState = t);
        },
        useHostTransitionStatus: Ps,
        useFormState: To,
        useActionState: To,
        useOptimistic: function (e) {
            var t = Je();
            t.memoizedState = t.baseState = e;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
            };
            return ((t.queue = l), (t = Is.bind(null, K, !0, l)), (l.dispatch = t), [e, t]);
        },
        useMemoCache: Js,
        useCacheRefresh: function () {
            return (Je().memoizedState = Hg.bind(null, K));
        },
    },
    xm = {
        readContext: Xe,
        use: tr,
        useCallback: mm,
        useContext: Xe,
        useEffect: sm,
        useImperativeHandle: hm,
        useInsertionEffect: fm,
        useLayoutEffect: om,
        useMemo: ym,
        useReducer: Ju,
        useRef: cm,
        useState: function () {
            return Ju(ll);
        },
        useDebugValue: $s,
        useDeferredValue: function (e, t) {
            var l = De();
            return vm(l, ne.memoizedState, e, t);
        },
        useTransition: function () {
            var e = Ju(ll)[0],
                t = De().memoizedState;
            return [typeof e == 'boolean' ? e : ou(e), t];
        },
        useSyncExternalStore: Wh,
        useId: Sm,
        useHostTransitionStatus: Ps,
        useFormState: Ro,
        useActionState: Ro,
        useOptimistic: function (e, t) {
            var l = De();
            return am(l, ne, e, t);
        },
        useMemoCache: Js,
        useCacheRefresh: Em,
    },
    qg = {
        readContext: Xe,
        use: tr,
        useCallback: mm,
        useContext: Xe,
        useEffect: sm,
        useImperativeHandle: hm,
        useInsertionEffect: fm,
        useLayoutEffect: om,
        useMemo: ym,
        useReducer: Vr,
        useRef: cm,
        useState: function () {
            return Vr(ll);
        },
        useDebugValue: $s,
        useDeferredValue: function (e, t) {
            var l = De();
            return ne === null ? Ws(l, e, t) : vm(l, ne.memoizedState, e, t);
        },
        useTransition: function () {
            var e = Vr(ll)[0],
                t = De().memoizedState;
            return [typeof e == 'boolean' ? e : ou(e), t];
        },
        useSyncExternalStore: Wh,
        useId: Sm,
        useHostTransitionStatus: Ps,
        useFormState: Oo,
        useActionState: Oo,
        useOptimistic: function (e, t) {
            var l = De();
            return ne !== null ? am(l, ne, e, t) : ((l.baseState = e), [e, l.queue.dispatch]);
        },
        useMemoCache: Js,
        useCacheRefresh: Em,
    },
    Ba = null,
    Zn = 0;
function wu(e) {
    var t = Zn;
    return ((Zn += 1), Ba === null && (Ba = []), Kh(Ba, e, t));
}
function fn(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
}
function Bu(e, t) {
    throw t.$$typeof === y0
        ? Error(_(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
              _(
                  31,
                  e === '[object Object]'
                      ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                      : e
              )
          ));
}
function _o(e) {
    var t = e._init;
    return t(e._payload);
}
function _m(e) {
    function t(m, o) {
        if (e) {
            var y = m.deletions;
            y === null ? ((m.deletions = [o]), (m.flags |= 16)) : y.push(o);
        }
    }
    function l(m, o) {
        if (!e) return null;
        for (; o !== null; ) (t(m, o), (o = o.sibling));
        return null;
    }
    function a(m) {
        for (var o = new Map(); m !== null; )
            (m.key !== null ? o.set(m.key, m) : o.set(m.index, m), (m = m.sibling));
        return o;
    }
    function n(m, o) {
        return ((m = Pt(m, o)), (m.index = 0), (m.sibling = null), m);
    }
    function u(m, o, y) {
        return (
            (m.index = y),
            e
                ? ((y = m.alternate),
                  y !== null
                      ? ((y = y.index), y < o ? ((m.flags |= 67108866), o) : y)
                      : ((m.flags |= 67108866), o))
                : ((m.flags |= 1048576), o)
        );
    }
    function i(m) {
        return (e && m.alternate === null && (m.flags |= 67108866), m);
    }
    function r(m, o, y, p) {
        return o === null || o.tag !== 6
            ? ((o = Hr(y, m.mode, p)), (o.return = m), o)
            : ((o = n(o, y)), (o.return = m), o);
    }
    function c(m, o, y, p) {
        var x = y.type;
        return x === ga
            ? f(m, o, y.props.children, p, y.key)
            : o !== null &&
                (o.elementType === x ||
                    (typeof x == 'object' && x !== null && x.$$typeof === ol && _o(x) === o.type))
              ? ((o = n(o, y.props)), fn(o, y), (o.return = m), o)
              : ((o = Ku(y.type, y.key, y.props, null, m.mode, p)), fn(o, y), (o.return = m), o);
    }
    function s(m, o, y, p) {
        return o === null ||
            o.tag !== 4 ||
            o.stateNode.containerInfo !== y.containerInfo ||
            o.stateNode.implementation !== y.implementation
            ? ((o = Lr(y, m.mode, p)), (o.return = m), o)
            : ((o = n(o, y.children || [])), (o.return = m), o);
    }
    function f(m, o, y, p, x) {
        return o === null || o.tag !== 7
            ? ((o = Ql(y, m.mode, p, x)), (o.return = m), o)
            : ((o = n(o, y)), (o.return = m), o);
    }
    function h(m, o, y) {
        if ((typeof o == 'string' && o !== '') || typeof o == 'number' || typeof o == 'bigint')
            return ((o = Hr('' + o, m.mode, y)), (o.return = m), o);
        if (typeof o == 'object' && o !== null) {
            switch (o.$$typeof) {
                case _u:
                    return (
                        (y = Ku(o.type, o.key, o.props, null, m.mode, y)),
                        fn(y, o),
                        (y.return = m),
                        y
                    );
                case pn:
                    return ((o = Lr(o, m.mode, y)), (o.return = m), o);
                case ol:
                    var p = o._init;
                    return ((o = p(o._payload)), h(m, o, y));
            }
            if (bn(o) || un(o)) return ((o = Ql(o, m.mode, y, null)), (o.return = m), o);
            if (typeof o.then == 'function') return h(m, wu(o), y);
            if (o.$$typeof === kt) return h(m, zu(m, o), y);
            Bu(m, o);
        }
        return null;
    }
    function d(m, o, y, p) {
        var x = o !== null ? o.key : null;
        if ((typeof y == 'string' && y !== '') || typeof y == 'number' || typeof y == 'bigint')
            return x !== null ? null : r(m, o, '' + y, p);
        if (typeof y == 'object' && y !== null) {
            switch (y.$$typeof) {
                case _u:
                    return y.key === x ? c(m, o, y, p) : null;
                case pn:
                    return y.key === x ? s(m, o, y, p) : null;
                case ol:
                    return ((x = y._init), (y = x(y._payload)), d(m, o, y, p));
            }
            if (bn(y) || un(y)) return x !== null ? null : f(m, o, y, p, null);
            if (typeof y.then == 'function') return d(m, o, wu(y), p);
            if (y.$$typeof === kt) return d(m, o, zu(m, y), p);
            Bu(m, y);
        }
        return null;
    }
    function v(m, o, y, p, x) {
        if ((typeof p == 'string' && p !== '') || typeof p == 'number' || typeof p == 'bigint')
            return ((m = m.get(y) || null), r(o, m, '' + p, x));
        if (typeof p == 'object' && p !== null) {
            switch (p.$$typeof) {
                case _u:
                    return ((m = m.get(p.key === null ? y : p.key) || null), c(o, m, p, x));
                case pn:
                    return ((m = m.get(p.key === null ? y : p.key) || null), s(o, m, p, x));
                case ol:
                    var B = p._init;
                    return ((p = B(p._payload)), v(m, o, y, p, x));
            }
            if (bn(p) || un(p)) return ((m = m.get(y) || null), f(o, m, p, x, null));
            if (typeof p.then == 'function') return v(m, o, y, wu(p), x);
            if (p.$$typeof === kt) return v(m, o, y, zu(o, p), x);
            Bu(o, p);
        }
        return null;
    }
    function b(m, o, y, p) {
        for (
            var x = null, B = null, N = o, w = (o = 0), q = null;
            N !== null && w < y.length;
            w++
        ) {
            N.index > w ? ((q = N), (N = null)) : (q = N.sibling);
            var L = d(m, N, y[w], p);
            if (L === null) {
                N === null && (N = q);
                break;
            }
            (e && N && L.alternate === null && t(m, N),
                (o = u(L, o, w)),
                B === null ? (x = L) : (B.sibling = L),
                (B = L),
                (N = q));
        }
        if (w === y.length) return (l(m, N), W && ql(m, w), x);
        if (N === null) {
            for (; w < y.length; w++)
                ((N = h(m, y[w], p)),
                    N !== null &&
                        ((o = u(N, o, w)), B === null ? (x = N) : (B.sibling = N), (B = N)));
            return (W && ql(m, w), x);
        }
        for (N = a(N); w < y.length; w++)
            ((q = v(N, m, w, y[w], p)),
                q !== null &&
                    (e && q.alternate !== null && N.delete(q.key === null ? w : q.key),
                    (o = u(q, o, w)),
                    B === null ? (x = q) : (B.sibling = q),
                    (B = q)));
        return (
            e &&
                N.forEach(function (re) {
                    return t(m, re);
                }),
            W && ql(m, w),
            x
        );
    }
    function S(m, o, y, p) {
        if (y == null) throw Error(_(151));
        for (
            var x = null, B = null, N = o, w = (o = 0), q = null, L = y.next();
            N !== null && !L.done;
            w++, L = y.next()
        ) {
            N.index > w ? ((q = N), (N = null)) : (q = N.sibling);
            var re = d(m, N, L.value, p);
            if (re === null) {
                N === null && (N = q);
                break;
            }
            (e && N && re.alternate === null && t(m, N),
                (o = u(re, o, w)),
                B === null ? (x = re) : (B.sibling = re),
                (B = re),
                (N = q));
        }
        if (L.done) return (l(m, N), W && ql(m, w), x);
        if (N === null) {
            for (; !L.done; w++, L = y.next())
                ((L = h(m, L.value, p)),
                    L !== null &&
                        ((o = u(L, o, w)), B === null ? (x = L) : (B.sibling = L), (B = L)));
            return (W && ql(m, w), x);
        }
        for (N = a(N); !L.done; w++, L = y.next())
            ((L = v(N, m, w, L.value, p)),
                L !== null &&
                    (e && L.alternate !== null && N.delete(L.key === null ? w : L.key),
                    (o = u(L, o, w)),
                    B === null ? (x = L) : (B.sibling = L),
                    (B = L)));
        return (
            e &&
                N.forEach(function (Q) {
                    return t(m, Q);
                }),
            W && ql(m, w),
            x
        );
    }
    function A(m, o, y, p) {
        if (
            (typeof y == 'object' &&
                y !== null &&
                y.type === ga &&
                y.key === null &&
                (y = y.props.children),
            typeof y == 'object' && y !== null)
        ) {
            switch (y.$$typeof) {
                case _u:
                    e: {
                        for (var x = y.key; o !== null; ) {
                            if (o.key === x) {
                                if (((x = y.type), x === ga)) {
                                    if (o.tag === 7) {
                                        (l(m, o.sibling),
                                            (p = n(o, y.props.children)),
                                            (p.return = m),
                                            (m = p));
                                        break e;
                                    }
                                } else if (
                                    o.elementType === x ||
                                    (typeof x == 'object' &&
                                        x !== null &&
                                        x.$$typeof === ol &&
                                        _o(x) === o.type)
                                ) {
                                    (l(m, o.sibling),
                                        (p = n(o, y.props)),
                                        fn(p, y),
                                        (p.return = m),
                                        (m = p));
                                    break e;
                                }
                                l(m, o);
                                break;
                            } else t(m, o);
                            o = o.sibling;
                        }
                        y.type === ga
                            ? ((p = Ql(y.props.children, m.mode, p, y.key)),
                              (p.return = m),
                              (m = p))
                            : ((p = Ku(y.type, y.key, y.props, null, m.mode, p)),
                              fn(p, y),
                              (p.return = m),
                              (m = p));
                    }
                    return i(m);
                case pn:
                    e: {
                        for (x = y.key; o !== null; ) {
                            if (o.key === x)
                                if (
                                    o.tag === 4 &&
                                    o.stateNode.containerInfo === y.containerInfo &&
                                    o.stateNode.implementation === y.implementation
                                ) {
                                    (l(m, o.sibling),
                                        (p = n(o, y.children || [])),
                                        (p.return = m),
                                        (m = p));
                                    break e;
                                } else {
                                    l(m, o);
                                    break;
                                }
                            else t(m, o);
                            o = o.sibling;
                        }
                        ((p = Lr(y, m.mode, p)), (p.return = m), (m = p));
                    }
                    return i(m);
                case ol:
                    return ((x = y._init), (y = x(y._payload)), A(m, o, y, p));
            }
            if (bn(y)) return b(m, o, y, p);
            if (un(y)) {
                if (((x = un(y)), typeof x != 'function')) throw Error(_(150));
                return ((y = x.call(y)), S(m, o, y, p));
            }
            if (typeof y.then == 'function') return A(m, o, wu(y), p);
            if (y.$$typeof === kt) return A(m, o, zu(m, y), p);
            Bu(m, y);
        }
        return (typeof y == 'string' && y !== '') || typeof y == 'number' || typeof y == 'bigint'
            ? ((y = '' + y),
              o !== null && o.tag === 6
                  ? (l(m, o.sibling), (p = n(o, y)), (p.return = m), (m = p))
                  : (l(m, o), (p = Hr(y, m.mode, p)), (p.return = m), (m = p)),
              i(m))
            : l(m, o);
    }
    return function (m, o, y, p) {
        try {
            Zn = 0;
            var x = A(m, o, y, p);
            return ((Ba = null), x);
        } catch (N) {
            if (N === fu || N === er) throw N;
            var B = ut(29, N, null, m.mode);
            return ((B.lanes = p), (B.return = m), B);
        } finally {
        }
    };
}
var Xa = _m(!0),
    Dm = _m(!1),
    bt = Ht(null),
    Bt = null;
function ml(e) {
    var t = e.alternate;
    (me(Me, Me.current & 1),
        me(bt, e),
        Bt === null && (t === null || Ya.current !== null || t.memoizedState !== null) && (Bt = e));
}
function Nm(e) {
    if (e.tag === 22) {
        if ((me(Me, Me.current), me(bt, e), Bt === null)) {
            var t = e.alternate;
            t !== null && t.memoizedState !== null && (Bt = e);
        }
    } else yl();
}
function yl() {
    (me(Me, Me.current), me(bt, bt.current));
}
function Wt(e) {
    (He(bt), Bt === e && (Bt = null), He(Me));
}
var Me = Ht(0);
function Ei(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var l = t.memoizedState;
            if (l !== null && ((l = l.dehydrated), l === null || l.data === '$?' || ts(l)))
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
}
function Yr(e, t, l, a) {
    ((t = e.memoizedState),
        (l = l(a, t)),
        (l = l == null ? t : fe({}, t, l)),
        (e.memoizedState = l),
        e.lanes === 0 && (e.updateQueue.baseState = l));
}
var qc = {
    enqueueSetState: function (e, t, l) {
        e = e._reactInternals;
        var a = ct(),
            n = Tl(a);
        ((n.payload = t),
            l != null && (n.callback = l),
            (t = Rl(e, n, a)),
            t !== null && (st(t, e, a), Dn(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
        e = e._reactInternals;
        var a = ct(),
            n = Tl(a);
        ((n.tag = 1),
            (n.payload = t),
            l != null && (n.callback = l),
            (t = Rl(e, n, a)),
            t !== null && (st(t, e, a), Dn(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var l = ct(),
            a = Tl(l);
        ((a.tag = 2),
            t != null && (a.callback = t),
            (t = Rl(e, a, l)),
            t !== null && (st(t, e, l), Dn(t, e, l)));
    },
};
function Do(e, t, l, a, n, u, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(a, u, i)
            : t.prototype && t.prototype.isPureReactComponent
              ? !Gn(l, a) || !Gn(n, u)
              : !0
    );
}
function No(e, t, l, a) {
    ((e = t.state),
        typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, a),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
            t.UNSAFE_componentWillReceiveProps(l, a),
        t.state !== e && qc.enqueueReplaceState(t, t.state, null));
}
function ea(e, t) {
    var l = t;
    if ('ref' in t) {
        l = {};
        for (var a in t) a !== 'ref' && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
        l === t && (l = fe({}, l));
        for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
}
var Ai =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                  var t = new window.ErrorEvent('error', {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                          typeof e == 'object' && e !== null && typeof e.message == 'string'
                              ? String(e.message)
                              : String(e),
                      error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
              } else if (typeof process == 'object' && typeof process.emit == 'function') {
                  process.emit('uncaughtException', e);
                  return;
              }
              console.error(e);
          };
function Um(e) {
    Ai(e);
}
function Mm(e) {
    console.error(e);
}
function zm(e) {
    Ai(e);
}
function Ti(e, t) {
    try {
        var l = e.onUncaughtError;
        l(t.value, { componentStack: t.stack });
    } catch (a) {
        setTimeout(function () {
            throw a;
        });
    }
}
function Uo(e, t, l) {
    try {
        var a = e.onCaughtError;
        a(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
function Vc(e, t, l) {
    return (
        (l = Tl(l)),
        (l.tag = 3),
        (l.payload = { element: null }),
        (l.callback = function () {
            Ti(e, t);
        }),
        l
    );
}
function Cm(e) {
    return ((e = Tl(e)), (e.tag = 3), e);
}
function wm(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
        var u = a.value;
        ((e.payload = function () {
            return n(u);
        }),
            (e.callback = function () {
                Uo(t, l, a);
            }));
    }
    var i = l.stateNode;
    i !== null &&
        typeof i.componentDidCatch == 'function' &&
        (e.callback = function () {
            (Uo(t, l, a),
                typeof n != 'function' && (Ol === null ? (Ol = new Set([this])) : Ol.add(this)));
            var r = a.stack;
            this.componentDidCatch(a.value, { componentStack: r !== null ? r : '' });
        });
}
function Vg(e, t, l, a, n) {
    if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
        if (((t = l.alternate), t !== null && cu(t, l, n, !0), (l = bt.current), l !== null)) {
            switch (l.tag) {
                case 13:
                    return (
                        Bt === null ? Jc() : l.alternate === null && Se === 0 && (Se = 3),
                        (l.flags &= -257),
                        (l.flags |= 65536),
                        (l.lanes = n),
                        a === zc
                            ? (l.flags |= 16384)
                            : ((t = l.updateQueue),
                              t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                              Pr(e, a, n)),
                        !1
                    );
                case 22:
                    return (
                        (l.flags |= 65536),
                        a === zc
                            ? (l.flags |= 16384)
                            : ((t = l.updateQueue),
                              t === null
                                  ? ((t = {
                                        transitions: null,
                                        markerInstances: null,
                                        retryQueue: new Set([a]),
                                    }),
                                    (l.updateQueue = t))
                                  : ((l = t.retryQueue),
                                    l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                              Pr(e, a, n)),
                        !1
                    );
            }
            throw Error(_(435, l.tag));
        }
        return (Pr(e, a, n), Jc(), !1);
    }
    if (W)
        return (
            (t = bt.current),
            t !== null
                ? (!(t.flags & 65536) && (t.flags |= 256),
                  (t.flags |= 65536),
                  (t.lanes = n),
                  a !== _c && ((e = Error(_(422), { cause: a })), Xn(gt(e, l))))
                : (a !== _c && ((t = Error(_(423), { cause: a })), Xn(gt(t, l))),
                  (e = e.current.alternate),
                  (e.flags |= 65536),
                  (n &= -n),
                  (e.lanes |= n),
                  (a = gt(a, l)),
                  (n = Vc(e.stateNode, a, n)),
                  qr(e, n),
                  Se !== 4 && (Se = 2)),
            !1
        );
    var u = Error(_(520), { cause: a });
    if (((u = gt(u, l)), wn === null ? (wn = [u]) : wn.push(u), Se !== 4 && (Se = 2), t === null))
        return !0;
    ((a = gt(a, l)), (l = t));
    do {
        switch (l.tag) {
            case 3:
                return (
                    (l.flags |= 65536),
                    (e = n & -n),
                    (l.lanes |= e),
                    (e = Vc(l.stateNode, a, e)),
                    qr(l, e),
                    !1
                );
            case 1:
                if (
                    ((t = l.type),
                    (u = l.stateNode),
                    (l.flags & 128) === 0 &&
                        (typeof t.getDerivedStateFromError == 'function' ||
                            (u !== null &&
                                typeof u.componentDidCatch == 'function' &&
                                (Ol === null || !Ol.has(u)))))
                )
                    return (
                        (l.flags |= 65536),
                        (n &= -n),
                        (l.lanes |= n),
                        (n = Cm(n)),
                        wm(n, e, l, a),
                        qr(l, n),
                        !1
                    );
        }
        l = l.return;
    } while (l !== null);
    return !1;
}
var Bm = Error(_(461)),
    je = !1;
function Le(e, t, l, a) {
    t.child = e === null ? Dm(t, null, l, a) : Xa(t, e.child, l, a);
}
function Mo(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ('ref' in a) {
        var i = {};
        for (var r in a) r !== 'ref' && (i[r] = a[r]);
    } else i = a;
    return (
        Pl(t),
        (a = Xs(e, t, l, i, u, n)),
        (r = Qs()),
        e !== null && !je
            ? (Zs(e, t, n), al(e, t, n))
            : (W && r && js(t), (t.flags |= 1), Le(e, t, a, n), t.child)
    );
}
function zo(e, t, l, a, n) {
    if (e === null) {
        var u = l.type;
        return typeof u == 'function' && !Bs(u) && u.defaultProps === void 0 && l.compare === null
            ? ((t.tag = 15), (t.type = u), jm(e, t, u, a, n))
            : ((e = Ku(l.type, null, a, t, t.mode, n)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((u = e.child), !ef(e, n))) {
        var i = u.memoizedProps;
        if (((l = l.compare), (l = l !== null ? l : Gn), l(i, a) && e.ref === t.ref))
            return al(e, t, n);
    }
    return ((t.flags |= 1), (e = Pt(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
}
function jm(e, t, l, a, n) {
    if (e !== null) {
        var u = e.memoizedProps;
        if (Gn(u, a) && e.ref === t.ref)
            if (((je = !1), (t.pendingProps = a = u), ef(e, n))) e.flags & 131072 && (je = !0);
            else return ((t.lanes = e.lanes), al(e, t, n));
    }
    return Yc(e, t, l, a, n);
}
function Hm(e, t, l) {
    var a = t.pendingProps,
        n = a.children,
        u = e !== null ? e.memoizedState : null;
    if (a.mode === 'hidden') {
        if (t.flags & 128) {
            if (((a = u !== null ? u.baseLanes | l : l), e !== null)) {
                for (n = t.child = e.child, u = 0; n !== null; )
                    ((u = u | n.lanes | n.childLanes), (n = n.sibling));
                t.childLanes = u & ~a;
            } else ((t.childLanes = 0), (t.child = null));
            return Co(e, t, a, l);
        }
        if (l & 536870912)
            ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                e !== null && ku(t, u !== null ? u.cachePool : null),
                u !== null ? So(t, u) : Bc(),
                Nm(t));
        else
            return (
                (t.lanes = t.childLanes = 536870912),
                Co(e, t, u !== null ? u.baseLanes | l : l, l)
            );
    } else
        u !== null
            ? (ku(t, u.cachePool), So(t, u), yl(), (t.memoizedState = null))
            : (e !== null && ku(t, null), Bc(), yl());
    return (Le(e, t, n, l), t.child);
}
function Co(e, t, l, a) {
    var n = qs();
    return (
        (n = n === null ? null : { parent: Ue._currentValue, pool: n }),
        (t.memoizedState = { baseLanes: l, cachePool: n }),
        e !== null && ku(t, null),
        Bc(),
        Nm(t),
        e !== null && cu(e, t, a, !0),
        null
    );
}
function $u(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
        if (typeof l != 'function' && typeof l != 'object') throw Error(_(284));
        (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
}
function Yc(e, t, l, a, n) {
    return (
        Pl(t),
        (l = Xs(e, t, l, a, void 0, n)),
        (a = Qs()),
        e !== null && !je
            ? (Zs(e, t, n), al(e, t, n))
            : (W && a && js(t), (t.flags |= 1), Le(e, t, l, n), t.child)
    );
}
function wo(e, t, l, a, n, u) {
    return (
        Pl(t),
        (t.updateQueue = null),
        (l = $h(t, a, l, n)),
        Fh(e),
        (a = Qs()),
        e !== null && !je
            ? (Zs(e, t, u), al(e, t, u))
            : (W && a && js(t), (t.flags |= 1), Le(e, t, l, u), t.child)
    );
}
function Bo(e, t, l, a, n) {
    if ((Pl(t), t.stateNode === null)) {
        var u = Oa,
            i = l.contextType;
        (typeof i == 'object' && i !== null && (u = Xe(i)),
            (u = new l(a, u)),
            (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
            (u.updater = qc),
            (t.stateNode = u),
            (u._reactInternals = t),
            (u = t.stateNode),
            (u.props = a),
            (u.state = t.memoizedState),
            (u.refs = {}),
            Vs(t),
            (i = l.contextType),
            (u.context = typeof i == 'object' && i !== null ? Xe(i) : Oa),
            (u.state = t.memoizedState),
            (i = l.getDerivedStateFromProps),
            typeof i == 'function' && (Yr(t, l, i, a), (u.state = t.memoizedState)),
            typeof l.getDerivedStateFromProps == 'function' ||
                typeof u.getSnapshotBeforeUpdate == 'function' ||
                (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                ((i = u.state),
                typeof u.componentWillMount == 'function' && u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
                i !== u.state && qc.enqueueReplaceState(u, u.state, null),
                Un(t, a, u, n),
                Nn(),
                (u.state = t.memoizedState)),
            typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
            (a = !0));
    } else if (e === null) {
        u = t.stateNode;
        var r = t.memoizedProps,
            c = ea(l, r);
        u.props = c;
        var s = u.context,
            f = l.contextType;
        ((i = Oa), typeof f == 'object' && f !== null && (i = Xe(f)));
        var h = l.getDerivedStateFromProps;
        ((f = typeof h == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
            (r = t.pendingProps !== r),
            f ||
                (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
                    typeof u.componentWillReceiveProps != 'function') ||
                ((r || s !== i) && No(t, u, a, i)),
            (dl = !1));
        var d = t.memoizedState;
        ((u.state = d),
            Un(t, a, u, n),
            Nn(),
            (s = t.memoizedState),
            r || d !== s || dl
                ? (typeof h == 'function' && (Yr(t, l, h, a), (s = t.memoizedState)),
                  (c = dl || Do(t, l, c, a, d, s, i))
                      ? (f ||
                            (typeof u.UNSAFE_componentWillMount != 'function' &&
                                typeof u.componentWillMount != 'function') ||
                            (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                            typeof u.UNSAFE_componentWillMount == 'function' &&
                                u.UNSAFE_componentWillMount()),
                        typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
                      : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                        (t.memoizedProps = a),
                        (t.memoizedState = s)),
                  (u.props = a),
                  (u.state = s),
                  (u.context = i),
                  (a = c))
                : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
    } else {
        ((u = t.stateNode),
            Cc(e, t),
            (i = t.memoizedProps),
            (f = ea(l, i)),
            (u.props = f),
            (h = t.pendingProps),
            (d = u.context),
            (s = l.contextType),
            (c = Oa),
            typeof s == 'object' && s !== null && (c = Xe(s)),
            (r = l.getDerivedStateFromProps),
            (s = typeof r == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
                (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
                    typeof u.componentWillReceiveProps != 'function') ||
                ((i !== h || d !== c) && No(t, u, a, c)),
            (dl = !1),
            (d = t.memoizedState),
            (u.state = d),
            Un(t, a, u, n),
            Nn());
        var v = t.memoizedState;
        i !== h || d !== v || dl || (e !== null && e.dependencies !== null && vi(e.dependencies))
            ? (typeof r == 'function' && (Yr(t, l, r, a), (v = t.memoizedState)),
              (f =
                  dl ||
                  Do(t, l, f, a, d, v, c) ||
                  (e !== null && e.dependencies !== null && vi(e.dependencies)))
                  ? (s ||
                        (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                            typeof u.componentWillUpdate != 'function') ||
                        (typeof u.componentWillUpdate == 'function' &&
                            u.componentWillUpdate(a, v, c),
                        typeof u.UNSAFE_componentWillUpdate == 'function' &&
                            u.UNSAFE_componentWillUpdate(a, v, c)),
                    typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
                    typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
                  : (typeof u.componentDidUpdate != 'function' ||
                        (i === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof u.getSnapshotBeforeUpdate != 'function' ||
                        (i === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = a),
                    (t.memoizedState = v)),
              (u.props = a),
              (u.state = v),
              (u.context = c),
              (a = f))
            : (typeof u.componentDidUpdate != 'function' ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (a = !1));
    }
    return (
        (u = a),
        $u(e, t),
        (a = (t.flags & 128) !== 0),
        u || a
            ? ((u = t.stateNode),
              (l = a && typeof l.getDerivedStateFromError != 'function' ? null : u.render()),
              (t.flags |= 1),
              e !== null && a
                  ? ((t.child = Xa(t, e.child, null, n)), (t.child = Xa(t, null, l, n)))
                  : Le(e, t, l, n),
              (t.memoizedState = u.state),
              (e = t.child))
            : (e = al(e, t, n)),
        e
    );
}
function jo(e, t, l, a) {
    return (ru(), (t.flags |= 256), Le(e, t, l, a), t.child);
}
var Gr = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
function Xr(e) {
    return { baseLanes: e, cachePool: Qh() };
}
function Qr(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= pt), e);
}
function Lm(e, t, l) {
    var a = t.pendingProps,
        n = !1,
        u = (t.flags & 128) !== 0,
        i;
    if (
        ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (Me.current & 2) !== 0),
        i && ((n = !0), (t.flags &= -129)),
        (i = (t.flags & 32) !== 0),
        (t.flags &= -33),
        e === null)
    ) {
        if (W) {
            if ((n ? ml(t) : yl(), W)) {
                var r = be,
                    c;
                if ((c = r)) {
                    e: {
                        for (c = r, r = Ut; c.nodeType !== 8; ) {
                            if (!r) {
                                r = null;
                                break e;
                            }
                            if (((c = Rt(c.nextSibling)), c === null)) {
                                r = null;
                                break e;
                            }
                        }
                        r = c;
                    }
                    r !== null
                        ? ((t.memoizedState = {
                              dehydrated: r,
                              treeContext: Zl !== null ? { id: Jt, overflow: Ft } : null,
                              retryLane: 536870912,
                              hydrationErrors: null,
                          }),
                          (c = ut(18, null, null, 0)),
                          (c.stateNode = r),
                          (c.return = t),
                          (t.child = c),
                          (Ze = t),
                          (be = null),
                          (c = !0))
                        : (c = !1);
                }
                c || Wl(t);
            }
            if (((r = t.memoizedState), r !== null && ((r = r.dehydrated), r !== null)))
                return (ts(r) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            Wt(t);
        }
        return (
            (r = a.children),
            (a = a.fallback),
            n
                ? (yl(),
                  (n = t.mode),
                  (r = Ri({ mode: 'hidden', children: r }, n)),
                  (a = Ql(a, n, l, null)),
                  (r.return = t),
                  (a.return = t),
                  (r.sibling = a),
                  (t.child = r),
                  (n = t.child),
                  (n.memoizedState = Xr(l)),
                  (n.childLanes = Qr(e, i, l)),
                  (t.memoizedState = Gr),
                  a)
                : (ml(t), Gc(t, r))
        );
    }
    if (((c = e.memoizedState), c !== null && ((r = c.dehydrated), r !== null))) {
        if (u)
            t.flags & 256
                ? (ml(t), (t.flags &= -257), (t = Zr(e, t, l)))
                : t.memoizedState !== null
                  ? (yl(), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (yl(),
                    (n = a.fallback),
                    (r = t.mode),
                    (a = Ri({ mode: 'visible', children: a.children }, r)),
                    (n = Ql(n, r, l, null)),
                    (n.flags |= 2),
                    (a.return = t),
                    (n.return = t),
                    (a.sibling = n),
                    (t.child = a),
                    Xa(t, e.child, null, l),
                    (a = t.child),
                    (a.memoizedState = Xr(l)),
                    (a.childLanes = Qr(e, i, l)),
                    (t.memoizedState = Gr),
                    (t = n));
        else if ((ml(t), ts(r))) {
            if (((i = r.nextSibling && r.nextSibling.dataset), i)) var s = i.dgst;
            ((i = s),
                (a = Error(_(419))),
                (a.stack = ''),
                (a.digest = i),
                Xn({ value: a, source: null, stack: null }),
                (t = Zr(e, t, l)));
        } else if ((je || cu(e, t, l, !1), (i = (l & e.childLanes) !== 0), je || i)) {
            if (
                ((i = se),
                i !== null &&
                    ((a = l & -l),
                    (a = a & 42 ? 1 : Rs(a)),
                    (a = a & (i.suspendedLanes | l) ? 0 : a),
                    a !== 0 && a !== c.retryLane))
            )
                throw ((c.retryLane = a), Wa(e, a), st(i, e, a), Bm);
            (r.data === '$?' || Jc(), (t = Zr(e, t, l)));
        } else
            r.data === '$?'
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = c.treeContext),
                  (be = Rt(r.nextSibling)),
                  (Ze = t),
                  (W = !0),
                  (Kl = null),
                  (Ut = !1),
                  e !== null &&
                      ((mt[yt++] = Jt),
                      (mt[yt++] = Ft),
                      (mt[yt++] = Zl),
                      (Jt = e.id),
                      (Ft = e.overflow),
                      (Zl = t)),
                  (t = Gc(t, a.children)),
                  (t.flags |= 4096));
        return t;
    }
    return n
        ? (yl(),
          (n = a.fallback),
          (r = t.mode),
          (c = e.child),
          (s = c.sibling),
          (a = Pt(c, { mode: 'hidden', children: a.children })),
          (a.subtreeFlags = c.subtreeFlags & 65011712),
          s !== null ? (n = Pt(s, n)) : ((n = Ql(n, r, l, null)), (n.flags |= 2)),
          (n.return = t),
          (a.return = t),
          (a.sibling = n),
          (t.child = a),
          (a = n),
          (n = t.child),
          (r = e.child.memoizedState),
          r === null
              ? (r = Xr(l))
              : ((c = r.cachePool),
                c !== null
                    ? ((s = Ue._currentValue), (c = c.parent !== s ? { parent: s, pool: s } : c))
                    : (c = Qh()),
                (r = { baseLanes: r.baseLanes | l, cachePool: c })),
          (n.memoizedState = r),
          (n.childLanes = Qr(e, i, l)),
          (t.memoizedState = Gr),
          a)
        : (ml(t),
          (l = e.child),
          (e = l.sibling),
          (l = Pt(l, { mode: 'visible', children: a.children })),
          (l.return = t),
          (l.sibling = null),
          e !== null &&
              ((i = t.deletions), i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
          (t.child = l),
          (t.memoizedState = null),
          l);
}
function Gc(e, t) {
    return ((t = Ri({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
}
function Ri(e, t) {
    return (
        (e = ut(22, e, null, t)),
        (e.lanes = 0),
        (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
        }),
        e
    );
}
function Zr(e, t, l) {
    return (
        Xa(t, e.child, null, l),
        (e = Gc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Ho(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Nc(e.return, t, l));
}
function Kr(e, t, l, a, n) {
    var u = e.memoizedState;
    u === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: a,
              tail: l,
              tailMode: n,
          })
        : ((u.isBackwards = t),
          (u.rendering = null),
          (u.renderingStartTime = 0),
          (u.last = a),
          (u.tail = l),
          (u.tailMode = n));
}
function qm(e, t, l) {
    var a = t.pendingProps,
        n = a.revealOrder,
        u = a.tail;
    if ((Le(e, t, a.children, l), (a = Me.current), a & 2)) ((a = (a & 1) | 2), (t.flags |= 128));
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Ho(e, l, t);
                else if (e.tag === 19) Ho(e, l, t);
                else if (e.child !== null) {
                    ((e.child.return = e), (e = e.child));
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
            }
        a &= 1;
    }
    switch ((me(Me, a), n)) {
        case 'forwards':
            for (l = t.child, n = null; l !== null; )
                ((e = l.alternate), e !== null && Ei(e) === null && (n = l), (l = l.sibling));
            ((l = n),
                l === null
                    ? ((n = t.child), (t.child = null))
                    : ((n = l.sibling), (l.sibling = null)),
                Kr(t, !1, n, l, u));
            break;
        case 'backwards':
            for (l = null, n = t.child, t.child = null; n !== null; ) {
                if (((e = n.alternate), e !== null && Ei(e) === null)) {
                    t.child = n;
                    break;
                }
                ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
            }
            Kr(t, !0, l, null, u);
            break;
        case 'together':
            Kr(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null;
    }
    return t.child;
}
function al(e, t, l) {
    if ((e !== null && (t.dependencies = e.dependencies), (zl |= t.lanes), !(l & t.childLanes)))
        if (e !== null) {
            if ((cu(e, t, l, !1), (l & t.childLanes) === 0)) return null;
        } else return null;
    if (e !== null && t.child !== e.child) throw Error(_(153));
    if (t.child !== null) {
        for (
            e = t.child, l = Pt(e, e.pendingProps), t.child = l, l.return = t;
            e.sibling !== null;

        )
            ((e = e.sibling), (l = l.sibling = Pt(e, e.pendingProps)), (l.return = t));
        l.sibling = null;
    }
    return t.child;
}
function ef(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && vi(e)));
}
function Yg(e, t, l) {
    switch (t.tag) {
        case 3:
            (ci(t, t.stateNode.containerInfo), hl(t, Ue, e.memoizedState.cache), ru());
            break;
        case 27:
        case 5:
            gc(t);
            break;
        case 4:
            ci(t, t.stateNode.containerInfo);
            break;
        case 10:
            hl(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null
                    ? (ml(t), (t.flags |= 128), null)
                    : l & t.child.childLanes
                      ? Lm(e, t, l)
                      : (ml(t), (e = al(e, t, l)), e !== null ? e.sibling : null);
            ml(t);
            break;
        case 19:
            var n = (e.flags & 128) !== 0;
            if (
                ((a = (l & t.childLanes) !== 0),
                a || (cu(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
                n)
            ) {
                if (a) return qm(e, t, l);
                t.flags |= 128;
            }
            if (
                ((n = t.memoizedState),
                n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
                me(Me, Me.current),
                a)
            )
                break;
            return null;
        case 22:
        case 23:
            return ((t.lanes = 0), Hm(e, t, l));
        case 24:
            hl(t, Ue, e.memoizedState.cache);
    }
    return al(e, t, l);
}
function Vm(e, t, l) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps) je = !0;
        else {
            if (!ef(e, l) && !(t.flags & 128)) return ((je = !1), Yg(e, t, l));
            je = !!(e.flags & 131072);
        }
    else ((je = !1), W && t.flags & 1048576 && Gh(t, yi, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 16:
            e: {
                e = t.pendingProps;
                var a = t.elementType,
                    n = a._init;
                if (((a = n(a._payload)), (t.type = a), typeof a == 'function'))
                    Bs(a)
                        ? ((e = ea(a, e)), (t.tag = 1), (t = Bo(null, t, a, e, l)))
                        : ((t.tag = 0), (t = Yc(null, t, a, e, l)));
                else {
                    if (a != null) {
                        if (((n = a.$$typeof), n === Es)) {
                            ((t.tag = 11), (t = Mo(null, t, a, e, l)));
                            break e;
                        } else if (n === As) {
                            ((t.tag = 14), (t = zo(null, t, a, e, l)));
                            break e;
                        }
                    }
                    throw ((t = yc(a) || a), Error(_(306, t, '')));
                }
            }
            return t;
        case 0:
            return Yc(e, t, t.type, t.pendingProps, l);
        case 1:
            return ((a = t.type), (n = ea(a, t.pendingProps)), Bo(e, t, a, n, l));
        case 3:
            e: {
                if ((ci(t, t.stateNode.containerInfo), e === null)) throw Error(_(387));
                a = t.pendingProps;
                var u = t.memoizedState;
                ((n = u.element), Cc(e, t), Un(t, a, null, l));
                var i = t.memoizedState;
                if (
                    ((a = i.cache),
                    hl(t, Ue, a),
                    a !== u.cache && Uc(t, [Ue], l, !0),
                    Nn(),
                    (a = i.element),
                    u.isDehydrated)
                )
                    if (
                        ((u = { element: a, isDehydrated: !1, cache: i.cache }),
                        (t.updateQueue.baseState = u),
                        (t.memoizedState = u),
                        t.flags & 256)
                    ) {
                        t = jo(e, t, a, l);
                        break e;
                    } else if (a !== n) {
                        ((n = gt(Error(_(424)), t)), Xn(n), (t = jo(e, t, a, l)));
                        break e;
                    } else {
                        switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                            case 9:
                                e = e.body;
                                break;
                            default:
                                e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
                        }
                        for (
                            be = Rt(e.firstChild),
                                Ze = t,
                                W = !0,
                                Kl = null,
                                Ut = !0,
                                l = Dm(t, null, a, l),
                                t.child = l;
                            l;

                        )
                            ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
                    }
                else {
                    if ((ru(), a === n)) {
                        t = al(e, t, l);
                        break e;
                    }
                    Le(e, t, a, l);
                }
                t = t.child;
            }
            return t;
        case 26:
            return (
                $u(e, t),
                e === null
                    ? (l = ed(t.type, null, t.pendingProps, null))
                        ? (t.memoizedState = l)
                        : W ||
                          ((l = t.type),
                          (e = t.pendingProps),
                          (a = Mi(Al.current).createElement(l)),
                          (a[Ge] = t),
                          (a[et] = e),
                          Ve(a, l, e),
                          Be(a),
                          (t.stateNode = a))
                    : (t.memoizedState = ed(
                          t.type,
                          e.memoizedProps,
                          t.pendingProps,
                          e.memoizedState
                      )),
                null
            );
        case 27:
            return (
                gc(t),
                e === null &&
                    W &&
                    ((a = t.stateNode = xy(t.type, t.pendingProps, Al.current)),
                    (Ze = t),
                    (Ut = !0),
                    (n = be),
                    wl(t.type) ? ((ls = n), (be = Rt(a.firstChild))) : (be = n)),
                Le(e, t, t.pendingProps.children, l),
                $u(e, t),
                e === null && (t.flags |= 4194304),
                t.child
            );
        case 5:
            return (
                e === null &&
                    W &&
                    ((n = a = be) &&
                        ((a = yp(a, t.type, t.pendingProps, Ut)),
                        a !== null
                            ? ((t.stateNode = a),
                              (Ze = t),
                              (be = Rt(a.firstChild)),
                              (Ut = !1),
                              (n = !0))
                            : (n = !1)),
                    n || Wl(t)),
                gc(t),
                (n = t.type),
                (u = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (a = u.children),
                Ic(n, u) ? (a = null) : i !== null && Ic(n, i) && (t.flags |= 32),
                t.memoizedState !== null &&
                    ((n = Xs(e, t, Cg, null, null, l)), (Fn._currentValue = n)),
                $u(e, t),
                Le(e, t, a, l),
                t.child
            );
        case 6:
            return (
                e === null &&
                    W &&
                    ((e = l = be) &&
                        ((l = vp(l, t.pendingProps, Ut)),
                        l !== null
                            ? ((t.stateNode = l), (Ze = t), (be = null), (e = !0))
                            : (e = !1)),
                    e || Wl(t)),
                null
            );
        case 13:
            return Lm(e, t, l);
        case 4:
            return (
                ci(t, t.stateNode.containerInfo),
                (a = t.pendingProps),
                e === null ? (t.child = Xa(t, null, a, l)) : Le(e, t, a, l),
                t.child
            );
        case 11:
            return Mo(e, t, t.type, t.pendingProps, l);
        case 7:
            return (Le(e, t, t.pendingProps, l), t.child);
        case 8:
            return (Le(e, t, t.pendingProps.children, l), t.child);
        case 12:
            return (Le(e, t, t.pendingProps.children, l), t.child);
        case 10:
            return ((a = t.pendingProps), hl(t, t.type, a.value), Le(e, t, a.children, l), t.child);
        case 9:
            return (
                (n = t.type._context),
                (a = t.pendingProps.children),
                Pl(t),
                (n = Xe(n)),
                (a = a(n)),
                (t.flags |= 1),
                Le(e, t, a, l),
                t.child
            );
        case 14:
            return zo(e, t, t.type, t.pendingProps, l);
        case 15:
            return jm(e, t, t.type, t.pendingProps, l);
        case 19:
            return qm(e, t, l);
        case 31:
            return (
                (a = t.pendingProps),
                (l = t.mode),
                (a = { mode: a.mode, children: a.children }),
                e === null
                    ? ((l = Ri(a, l)), (l.ref = t.ref), (t.child = l), (l.return = t), (t = l))
                    : ((l = Pt(e.child, a)),
                      (l.ref = t.ref),
                      (t.child = l),
                      (l.return = t),
                      (t = l)),
                t
            );
        case 22:
            return Hm(e, t, l);
        case 24:
            return (
                Pl(t),
                (a = Xe(Ue)),
                e === null
                    ? ((n = qs()),
                      n === null &&
                          ((n = se),
                          (u = Ls()),
                          (n.pooledCache = u),
                          u.refCount++,
                          u !== null && (n.pooledCacheLanes |= l),
                          (n = u)),
                      (t.memoizedState = { parent: a, cache: n }),
                      Vs(t),
                      hl(t, Ue, n))
                    : (e.lanes & l && (Cc(e, t), Un(t, null, null, l), Nn()),
                      (n = e.memoizedState),
                      (u = t.memoizedState),
                      n.parent !== a
                          ? ((n = { parent: a, cache: a }),
                            (t.memoizedState = n),
                            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
                            hl(t, Ue, a))
                          : ((a = u.cache), hl(t, Ue, a), a !== n.cache && Uc(t, [Ue], l, !0))),
                Le(e, t, t.pendingProps.children, l),
                t.child
            );
        case 29:
            throw t.pendingProps;
    }
    throw Error(_(156, t.tag));
}
function Xt(e) {
    e.flags |= 4;
}
function Lo(e, t) {
    if (t.type !== 'stylesheet' || t.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Ny(t))) {
        if (
            ((t = bt.current),
            t !== null &&
                ((F & 4194048) === F
                    ? Bt !== null
                    : ((F & 62914560) !== F && !(F & 536870912)) || t !== Bt))
        )
            throw ((_n = zc), Zh);
        e.flags |= 8192;
    }
}
function ju(e, t) {
    (t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag !== 22 ? dh() : 536870912), (e.lanes |= t), (Qa |= t)));
}
function on(e, t) {
    if (!W)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var l = null; t !== null; ) (t.alternate !== null && (l = t), (t = t.sibling));
                l === null ? (e.tail = null) : (l.sibling = null);
                break;
            case 'collapsed':
                l = e.tail;
                for (var a = null; l !== null; ) (l.alternate !== null && (a = l), (l = l.sibling));
                a === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (a.sibling = null);
        }
}
function ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        l = 0,
        a = 0;
    if (t)
        for (var n = e.child; n !== null; )
            ((l |= n.lanes | n.childLanes),
                (a |= n.subtreeFlags & 65011712),
                (a |= n.flags & 65011712),
                (n.return = e),
                (n = n.sibling));
    else
        for (n = e.child; n !== null; )
            ((l |= n.lanes | n.childLanes),
                (a |= n.subtreeFlags),
                (a |= n.flags),
                (n.return = e),
                (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
}
function Gg(e, t, l) {
    var a = t.pendingProps;
    switch ((Hs(t), t.tag)) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return (ge(t), null);
        case 1:
            return (ge(t), null);
        case 3:
            return (
                (l = t.stateNode),
                (a = null),
                e !== null && (a = e.memoizedState.cache),
                t.memoizedState.cache !== a && (t.flags |= 2048),
                It(Ue),
                Ha(),
                l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
                (e === null || e.child === null) &&
                    (sn(t)
                        ? Xt(t)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024), mo())),
                ge(t),
                null
            );
        case 26:
            return (
                (l = t.memoizedState),
                e === null
                    ? (Xt(t), l !== null ? (ge(t), Lo(t, l)) : (ge(t), (t.flags &= -16777217)))
                    : l
                      ? l !== e.memoizedState
                          ? (Xt(t), ge(t), Lo(t, l))
                          : (ge(t), (t.flags &= -16777217))
                      : (e.memoizedProps !== a && Xt(t), ge(t), (t.flags &= -16777217)),
                null
            );
        case 27:
            (si(t), (l = Al.current));
            var n = t.type;
            if (e !== null && t.stateNode != null) e.memoizedProps !== a && Xt(t);
            else {
                if (!a) {
                    if (t.stateNode === null) throw Error(_(166));
                    return (ge(t), null);
                }
                ((e = Ct.current), sn(t) ? oo(t) : ((e = xy(n, a, l)), (t.stateNode = e), Xt(t)));
            }
            return (ge(t), null);
        case 5:
            if ((si(t), (l = t.type), e !== null && t.stateNode != null))
                e.memoizedProps !== a && Xt(t);
            else {
                if (!a) {
                    if (t.stateNode === null) throw Error(_(166));
                    return (ge(t), null);
                }
                if (((e = Ct.current), sn(t))) oo(t);
                else {
                    switch (((n = Mi(Al.current)), e)) {
                        case 1:
                            e = n.createElementNS('http://www.w3.org/2000/svg', l);
                            break;
                        case 2:
                            e = n.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                            break;
                        default:
                            switch (l) {
                                case 'svg':
                                    e = n.createElementNS('http://www.w3.org/2000/svg', l);
                                    break;
                                case 'math':
                                    e = n.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                                    break;
                                case 'script':
                                    ((e = n.createElement('div')),
                                        (e.innerHTML = '<script><\/script>'),
                                        (e = e.removeChild(e.firstChild)));
                                    break;
                                case 'select':
                                    ((e =
                                        typeof a.is == 'string'
                                            ? n.createElement('select', { is: a.is })
                                            : n.createElement('select')),
                                        a.multiple
                                            ? (e.multiple = !0)
                                            : a.size && (e.size = a.size));
                                    break;
                                default:
                                    e =
                                        typeof a.is == 'string'
                                            ? n.createElement(l, { is: a.is })
                                            : n.createElement(l);
                            }
                    }
                    ((e[Ge] = t), (e[et] = a));
                    e: for (n = t.child; n !== null; ) {
                        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
                        else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                            ((n.child.return = n), (n = n.child));
                            continue;
                        }
                        if (n === t) break e;
                        for (; n.sibling === null; ) {
                            if (n.return === null || n.return === t) break e;
                            n = n.return;
                        }
                        ((n.sibling.return = n.return), (n = n.sibling));
                    }
                    t.stateNode = e;
                    e: switch ((Ve(e, l, a), l)) {
                        case 'button':
                        case 'input':
                        case 'select':
                        case 'textarea':
                            e = !!a.autoFocus;
                            break e;
                        case 'img':
                            e = !0;
                            break e;
                        default:
                            e = !1;
                    }
                    e && Xt(t);
                }
            }
            return (ge(t), (t.flags &= -16777217), null);
        case 6:
            if (e && t.stateNode != null) e.memoizedProps !== a && Xt(t);
            else {
                if (typeof a != 'string' && t.stateNode === null) throw Error(_(166));
                if (((e = Al.current), sn(t))) {
                    if (
                        ((e = t.stateNode), (l = t.memoizedProps), (a = null), (n = Ze), n !== null)
                    )
                        switch (n.tag) {
                            case 27:
                            case 5:
                                a = n.memoizedProps;
                        }
                    ((e[Ge] = t),
                        (e = !!(
                            e.nodeValue === l ||
                            (a !== null && a.suppressHydrationWarning === !0) ||
                            Ty(e.nodeValue, l)
                        )),
                        e || Wl(t));
                } else ((e = Mi(e).createTextNode(a)), (e[Ge] = t), (t.stateNode = e));
            }
            return (ge(t), null);
        case 13:
            if (
                ((a = t.memoizedState),
                e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (((n = sn(t)), a !== null && a.dehydrated !== null)) {
                    if (e === null) {
                        if (!n) throw Error(_(318));
                        if (((n = t.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
                            throw Error(_(317));
                        n[Ge] = t;
                    } else (ru(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
                    (ge(t), (n = !1));
                } else
                    ((n = mo()),
                        e !== null &&
                            e.memoizedState !== null &&
                            (e.memoizedState.hydrationErrors = n),
                        (n = !0));
                if (!n) return t.flags & 256 ? (Wt(t), t) : (Wt(t), null);
            }
            if ((Wt(t), t.flags & 128)) return ((t.lanes = l), t);
            if (((l = a !== null), (e = e !== null && e.memoizedState !== null), l)) {
                ((a = t.child),
                    (n = null),
                    a.alternate !== null &&
                        a.alternate.memoizedState !== null &&
                        a.alternate.memoizedState.cachePool !== null &&
                        (n = a.alternate.memoizedState.cachePool.pool));
                var u = null;
                (a.memoizedState !== null &&
                    a.memoizedState.cachePool !== null &&
                    (u = a.memoizedState.cachePool.pool),
                    u !== n && (a.flags |= 2048));
            }
            return (l !== e && l && (t.child.flags |= 8192), ju(t, t.updateQueue), ge(t), null);
        case 4:
            return (Ha(), e === null && sf(t.stateNode.containerInfo), ge(t), null);
        case 10:
            return (It(t.type), ge(t), null);
        case 19:
            if ((He(Me), (n = t.memoizedState), n === null)) return (ge(t), null);
            if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
                if (a) on(n, !1);
                else {
                    if (Se !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((u = Ei(e)), u !== null)) {
                                for (
                                    t.flags |= 128,
                                        on(n, !1),
                                        e = u.updateQueue,
                                        t.updateQueue = e,
                                        ju(t, e),
                                        t.subtreeFlags = 0,
                                        e = l,
                                        l = t.child;
                                    l !== null;

                                )
                                    (Yh(l, e), (l = l.sibling));
                                return (me(Me, (Me.current & 1) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    n.tail !== null &&
                        wt() > xi &&
                        ((t.flags |= 128), (a = !0), on(n, !1), (t.lanes = 4194304));
                }
            else {
                if (!a)
                    if (((e = Ei(u)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (a = !0),
                            (e = e.updateQueue),
                            (t.updateQueue = e),
                            ju(t, e),
                            on(n, !0),
                            n.tail === null && n.tailMode === 'hidden' && !u.alternate && !W)
                        )
                            return (ge(t), null);
                    } else
                        2 * wt() - n.renderingStartTime > xi &&
                            l !== 536870912 &&
                            ((t.flags |= 128), (a = !0), on(n, !1), (t.lanes = 4194304));
                n.isBackwards
                    ? ((u.sibling = t.child), (t.child = u))
                    : ((e = n.last), e !== null ? (e.sibling = u) : (t.child = u), (n.last = u));
            }
            return n.tail !== null
                ? ((t = n.tail),
                  (n.rendering = t),
                  (n.tail = t.sibling),
                  (n.renderingStartTime = wt()),
                  (t.sibling = null),
                  (e = Me.current),
                  me(Me, a ? (e & 1) | 2 : e & 1),
                  t)
                : (ge(t), null);
        case 22:
        case 23:
            return (
                Wt(t),
                Ys(),
                (a = t.memoizedState !== null),
                e !== null
                    ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
                    : a && (t.flags |= 8192),
                a
                    ? l & 536870912 &&
                      !(t.flags & 128) &&
                      (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : ge(t),
                (l = t.updateQueue),
                l !== null && ju(t, l.retryQueue),
                (l = null),
                e !== null &&
                    e.memoizedState !== null &&
                    e.memoizedState.cachePool !== null &&
                    (l = e.memoizedState.cachePool.pool),
                (a = null),
                t.memoizedState !== null &&
                    t.memoizedState.cachePool !== null &&
                    (a = t.memoizedState.cachePool.pool),
                a !== l && (t.flags |= 2048),
                e !== null && He(kl),
                null
            );
        case 24:
            return (
                (l = null),
                e !== null && (l = e.memoizedState.cache),
                t.memoizedState.cache !== l && (t.flags |= 2048),
                It(Ue),
                ge(t),
                null
            );
        case 25:
            return null;
        case 30:
            return null;
    }
    throw Error(_(156, t.tag));
}
function Xg(e, t) {
    switch ((Hs(t), t.tag)) {
        case 1:
            return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 3:
            return (
                It(Ue),
                Ha(),
                (e = t.flags),
                e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 26:
        case 27:
        case 5:
            return (si(t), null);
        case 13:
            if ((Wt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(_(340));
                ru();
            }
            return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
            return (He(Me), null);
        case 4:
            return (Ha(), null);
        case 10:
            return (It(t.type), null);
        case 22:
        case 23:
            return (
                Wt(t),
                Ys(),
                e !== null && He(kl),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 24:
            return (It(Ue), null);
        case 25:
            return null;
        default:
            return null;
    }
}
function Ym(e, t) {
    switch ((Hs(t), t.tag)) {
        case 3:
            (It(Ue), Ha());
            break;
        case 26:
        case 27:
        case 5:
            si(t);
            break;
        case 4:
            Ha();
            break;
        case 13:
            Wt(t);
            break;
        case 19:
            He(Me);
            break;
        case 10:
            It(t.type);
            break;
        case 22:
        case 23:
            (Wt(t), Ys(), e !== null && He(kl));
            break;
        case 24:
            It(Ue);
    }
}
function hu(e, t) {
    try {
        var l = t.updateQueue,
            a = l !== null ? l.lastEffect : null;
        if (a !== null) {
            var n = a.next;
            l = n;
            do {
                if ((l.tag & e) === e) {
                    a = void 0;
                    var u = l.create,
                        i = l.inst;
                    ((a = u()), (i.destroy = a));
                }
                l = l.next;
            } while (l !== n);
        }
    } catch (r) {
        ue(t, t.return, r);
    }
}
function Ml(e, t, l) {
    try {
        var a = t.updateQueue,
            n = a !== null ? a.lastEffect : null;
        if (n !== null) {
            var u = n.next;
            a = u;
            do {
                if ((a.tag & e) === e) {
                    var i = a.inst,
                        r = i.destroy;
                    if (r !== void 0) {
                        ((i.destroy = void 0), (n = t));
                        var c = l,
                            s = r;
                        try {
                            s();
                        } catch (f) {
                            ue(n, c, f);
                        }
                    }
                }
                a = a.next;
            } while (a !== u);
        }
    } catch (f) {
        ue(t, t.return, f);
    }
}
function Gm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        var l = e.stateNode;
        try {
            Jh(t, l);
        } catch (a) {
            ue(e, e.return, a);
        }
    }
}
function Xm(e, t, l) {
    ((l.props = ea(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
        l.componentWillUnmount();
    } catch (a) {
        ue(e, t, a);
    }
}
function zn(e, t) {
    try {
        var l = e.ref;
        if (l !== null) {
            switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var a = e.stateNode;
                    break;
                case 30:
                    a = e.stateNode;
                    break;
                default:
                    a = e.stateNode;
            }
            typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a);
        }
    } catch (n) {
        ue(e, t, n);
    }
}
function Mt(e, t) {
    var l = e.ref,
        a = e.refCleanup;
    if (l !== null)
        if (typeof a == 'function')
            try {
                a();
            } catch (n) {
                ue(e, t, n);
            } finally {
                ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
            }
        else if (typeof l == 'function')
            try {
                l(null);
            } catch (n) {
                ue(e, t, n);
            }
        else l.current = null;
}
function Qm(e) {
    var t = e.type,
        l = e.memoizedProps,
        a = e.stateNode;
    try {
        e: switch (t) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
                l.autoFocus && a.focus();
                break e;
            case 'img':
                l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
        }
    } catch (n) {
        ue(e, e.return, n);
    }
}
function kr(e, t, l) {
    try {
        var a = e.stateNode;
        (fp(a, e.type, l, t), (a[et] = t));
    } catch (n) {
        ue(e, e.return, n);
    }
}
function Zm(e) {
    return (
        e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && wl(e.type)) || e.tag === 4
    );
}
function Jr(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Zm(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if ((e.tag === 27 && wl(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Xc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
        ((e = e.stateNode),
            t
                ? (l.nodeType === 9
                      ? l.body
                      : l.nodeName === 'HTML'
                        ? l.ownerDocument.body
                        : l
                  ).insertBefore(e, t)
                : ((t =
                      l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
                  t.appendChild(e),
                  (l = l._reactRootContainer),
                  l != null || t.onclick !== null || (t.onclick = rr)));
    else if (
        a !== 4 &&
        (a === 27 && wl(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
        for (Xc(e, t, l), e = e.sibling; e !== null; ) (Xc(e, t, l), (e = e.sibling));
}
function Oi(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (a !== 4 && (a === 27 && wl(e.type) && (l = e.stateNode), (e = e.child), e !== null))
        for (Oi(e, t, l), e = e.sibling; e !== null; ) (Oi(e, t, l), (e = e.sibling));
}
function Km(e) {
    var t = e.stateNode,
        l = e.memoizedProps;
    try {
        for (var a = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
        (Ve(t, a, l), (t[Ge] = e), (t[et] = l));
    } catch (u) {
        ue(e, e.return, u);
    }
}
var Kt = !1,
    Ae = !1,
    Fr = !1,
    qo = typeof WeakSet == 'function' ? WeakSet : Set,
    we = null;
function Qg(e, t) {
    if (((e = e.containerInfo), (Wc = Bi), (e = Ch(e)), zs(e))) {
        if ('selectionStart' in e) var l = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                l = ((l = e.ownerDocument) && l.defaultView) || window;
                var a = l.getSelection && l.getSelection();
                if (a && a.rangeCount !== 0) {
                    l = a.anchorNode;
                    var n = a.anchorOffset,
                        u = a.focusNode;
                    a = a.focusOffset;
                    try {
                        (l.nodeType, u.nodeType);
                    } catch {
                        l = null;
                        break e;
                    }
                    var i = 0,
                        r = -1,
                        c = -1,
                        s = 0,
                        f = 0,
                        h = e,
                        d = null;
                    t: for (;;) {
                        for (
                            var v;
                            h !== l || (n !== 0 && h.nodeType !== 3) || (r = i + n),
                                h !== u || (a !== 0 && h.nodeType !== 3) || (c = i + a),
                                h.nodeType === 3 && (i += h.nodeValue.length),
                                (v = h.firstChild) !== null;

                        )
                            ((d = h), (h = v));
                        for (;;) {
                            if (h === e) break t;
                            if (
                                (d === l && ++s === n && (r = i),
                                d === u && ++f === a && (c = i),
                                (v = h.nextSibling) !== null)
                            )
                                break;
                            ((h = d), (d = h.parentNode));
                        }
                        h = v;
                    }
                    l = r === -1 || c === -1 ? null : { start: r, end: c };
                } else l = null;
            }
        l = l || { start: 0, end: 0 };
    } else l = null;
    for (Pc = { focusedElem: e, selectionRange: l }, Bi = !1, we = t; we !== null; )
        if (((t = we), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null))
            ((e.return = t), (we = e));
        else
            for (; we !== null; ) {
                switch (((t = we), (u = t.alternate), (e = t.flags), t.tag)) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (e & 1024 && u !== null) {
                            ((e = void 0),
                                (l = t),
                                (n = u.memoizedProps),
                                (u = u.memoizedState),
                                (a = l.stateNode));
                            try {
                                var b = ea(l.type, n, l.elementType === l.type);
                                ((e = a.getSnapshotBeforeUpdate(b, u)),
                                    (a.__reactInternalSnapshotBeforeUpdate = e));
                            } catch (S) {
                                ue(l, l.return, S);
                            }
                        }
                        break;
                    case 3:
                        if (e & 1024) {
                            if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) es(e);
                            else if (l === 1)
                                switch (e.nodeName) {
                                    case 'HEAD':
                                    case 'HTML':
                                    case 'BODY':
                                        es(e);
                                        break;
                                    default:
                                        e.textContent = '';
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if (e & 1024) throw Error(_(163));
                }
                if (((e = t.sibling), e !== null)) {
                    ((e.return = t.return), (we = e));
                    break;
                }
                we = t.return;
            }
}
function km(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
        case 0:
        case 11:
        case 15:
            (sl(e, l), a & 4 && hu(5, l));
            break;
        case 1:
            if ((sl(e, l), a & 4))
                if (((e = l.stateNode), t === null))
                    try {
                        e.componentDidMount();
                    } catch (i) {
                        ue(l, l.return, i);
                    }
                else {
                    var n = ea(l.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
                    } catch (i) {
                        ue(l, l.return, i);
                    }
                }
            (a & 64 && Gm(l), a & 512 && zn(l, l.return));
            break;
        case 3:
            if ((sl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
                if (((t = null), l.child !== null))
                    switch (l.child.tag) {
                        case 27:
                        case 5:
                            t = l.child.stateNode;
                            break;
                        case 1:
                            t = l.child.stateNode;
                    }
                try {
                    Jh(e, t);
                } catch (i) {
                    ue(l, l.return, i);
                }
            }
            break;
        case 27:
            t === null && a & 4 && Km(l);
        case 26:
        case 5:
            (sl(e, l), t === null && a & 4 && Qm(l), a & 512 && zn(l, l.return));
            break;
        case 12:
            sl(e, l);
            break;
        case 13:
            (sl(e, l),
                a & 4 && $m(e, l),
                a & 64 &&
                    ((e = l.memoizedState),
                    e !== null &&
                        ((e = e.dehydrated), e !== null && ((l = Ig.bind(null, l)), gp(e, l)))));
            break;
        case 22:
            if (((a = l.memoizedState !== null || Kt), !a)) {
                ((t = (t !== null && t.memoizedState !== null) || Ae), (n = Kt));
                var u = Ae;
                ((Kt = a),
                    (Ae = t) && !u ? fl(e, l, (l.subtreeFlags & 8772) !== 0) : sl(e, l),
                    (Kt = n),
                    (Ae = u));
            }
            break;
        case 30:
            break;
        default:
            sl(e, l);
    }
}
function Jm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Jm(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && xs(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
var de = null,
    Fe = !1;
function Qt(e, t, l) {
    for (l = l.child; l !== null; ) (Fm(e, t, l), (l = l.sibling));
}
function Fm(e, t, l) {
    if (it && typeof it.onCommitFiberUnmount == 'function')
        try {
            it.onCommitFiberUnmount(lu, l);
        } catch {}
    switch (l.tag) {
        case 26:
            (Ae || Mt(l, t),
                Qt(e, t, l),
                l.memoizedState
                    ? l.memoizedState.count--
                    : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
            break;
        case 27:
            Ae || Mt(l, t);
            var a = de,
                n = Fe;
            (wl(l.type) && ((de = l.stateNode), (Fe = !1)),
                Qt(e, t, l),
                jn(l.stateNode),
                (de = a),
                (Fe = n));
            break;
        case 5:
            Ae || Mt(l, t);
        case 6:
            if (((a = de), (n = Fe), (de = null), Qt(e, t, l), (de = a), (Fe = n), de !== null))
                if (Fe)
                    try {
                        (de.nodeType === 9
                            ? de.body
                            : de.nodeName === 'HTML'
                              ? de.ownerDocument.body
                              : de
                        ).removeChild(l.stateNode);
                    } catch (u) {
                        ue(l, t, u);
                    }
                else
                    try {
                        de.removeChild(l.stateNode);
                    } catch (u) {
                        ue(l, t, u);
                    }
            break;
        case 18:
            de !== null &&
                (Fe
                    ? ((e = de),
                      Wo(
                          e.nodeType === 9
                              ? e.body
                              : e.nodeName === 'HTML'
                                ? e.ownerDocument.body
                                : e,
                          l.stateNode
                      ),
                      Pn(e))
                    : Wo(de, l.stateNode));
            break;
        case 4:
            ((a = de),
                (n = Fe),
                (de = l.stateNode.containerInfo),
                (Fe = !0),
                Qt(e, t, l),
                (de = a),
                (Fe = n));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            (Ae || Ml(2, l, t), Ae || Ml(4, l, t), Qt(e, t, l));
            break;
        case 1:
            (Ae ||
                (Mt(l, t),
                (a = l.stateNode),
                typeof a.componentWillUnmount == 'function' && Xm(l, t, a)),
                Qt(e, t, l));
            break;
        case 21:
            Qt(e, t, l);
            break;
        case 22:
            ((Ae = (a = Ae) || l.memoizedState !== null), Qt(e, t, l), (Ae = a));
            break;
        default:
            Qt(e, t, l);
    }
}
function $m(e, t) {
    if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
        try {
            Pn(e);
        } catch (l) {
            ue(t, t.return, l);
        }
}
function Zg(e) {
    switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return (t === null && (t = e.stateNode = new qo()), t);
        case 22:
            return (
                (e = e.stateNode),
                (t = e._retryCache),
                t === null && (t = e._retryCache = new qo()),
                t
            );
        default:
            throw Error(_(435, e.tag));
    }
}
function $r(e, t) {
    var l = Zg(e);
    t.forEach(function (a) {
        var n = ep.bind(null, e, a);
        l.has(a) || (l.add(a), a.then(n, n));
    });
}
function lt(e, t) {
    var l = t.deletions;
    if (l !== null)
        for (var a = 0; a < l.length; a++) {
            var n = l[a],
                u = e,
                i = t,
                r = i;
            e: for (; r !== null; ) {
                switch (r.tag) {
                    case 27:
                        if (wl(r.type)) {
                            ((de = r.stateNode), (Fe = !1));
                            break e;
                        }
                        break;
                    case 5:
                        ((de = r.stateNode), (Fe = !1));
                        break e;
                    case 3:
                    case 4:
                        ((de = r.stateNode.containerInfo), (Fe = !0));
                        break e;
                }
                r = r.return;
            }
            if (de === null) throw Error(_(160));
            (Fm(u, i, n),
                (de = null),
                (Fe = !1),
                (u = n.alternate),
                u !== null && (u.return = null),
                (n.return = null));
        }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) (Wm(t, e), (t = t.sibling));
}
var Et = null;
function Wm(e, t) {
    var l = e.alternate,
        a = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            (lt(t, e), at(e), a & 4 && (Ml(3, e, e.return), hu(3, e), Ml(5, e, e.return)));
            break;
        case 1:
            (lt(t, e),
                at(e),
                a & 512 && (Ae || l === null || Mt(l, l.return)),
                a & 64 &&
                    Kt &&
                    ((e = e.updateQueue),
                    e !== null &&
                        ((a = e.callbacks),
                        a !== null &&
                            ((l = e.shared.hiddenCallbacks),
                            (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
            break;
        case 26:
            var n = Et;
            if ((lt(t, e), at(e), a & 512 && (Ae || l === null || Mt(l, l.return)), a & 4)) {
                var u = l !== null ? l.memoizedState : null;
                if (((a = e.memoizedState), l === null))
                    if (a === null)
                        if (e.stateNode === null) {
                            e: {
                                ((a = e.type), (l = e.memoizedProps), (n = n.ownerDocument || n));
                                t: switch (a) {
                                    case 'title':
                                        ((u = n.getElementsByTagName('title')[0]),
                                            (!u ||
                                                u[uu] ||
                                                u[Ge] ||
                                                u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                                                u.hasAttribute('itemprop')) &&
                                                ((u = n.createElement(a)),
                                                n.head.insertBefore(
                                                    u,
                                                    n.querySelector('head > title')
                                                )),
                                            Ve(u, a, l),
                                            (u[Ge] = e),
                                            Be(u),
                                            (a = u));
                                        break e;
                                    case 'link':
                                        var i = ld('link', 'href', n).get(a + (l.href || ''));
                                        if (i) {
                                            for (var r = 0; r < i.length; r++)
                                                if (
                                                    ((u = i[r]),
                                                    u.getAttribute('href') ===
                                                        (l.href == null || l.href === ''
                                                            ? null
                                                            : l.href) &&
                                                        u.getAttribute('rel') ===
                                                            (l.rel == null ? null : l.rel) &&
                                                        u.getAttribute('title') ===
                                                            (l.title == null ? null : l.title) &&
                                                        u.getAttribute('crossorigin') ===
                                                            (l.crossOrigin == null
                                                                ? null
                                                                : l.crossOrigin))
                                                ) {
                                                    i.splice(r, 1);
                                                    break t;
                                                }
                                        }
                                        ((u = n.createElement(a)),
                                            Ve(u, a, l),
                                            n.head.appendChild(u));
                                        break;
                                    case 'meta':
                                        if (
                                            (i = ld('meta', 'content', n).get(
                                                a + (l.content || '')
                                            ))
                                        ) {
                                            for (r = 0; r < i.length; r++)
                                                if (
                                                    ((u = i[r]),
                                                    u.getAttribute('content') ===
                                                        (l.content == null
                                                            ? null
                                                            : '' + l.content) &&
                                                        u.getAttribute('name') ===
                                                            (l.name == null ? null : l.name) &&
                                                        u.getAttribute('property') ===
                                                            (l.property == null
                                                                ? null
                                                                : l.property) &&
                                                        u.getAttribute('http-equiv') ===
                                                            (l.httpEquiv == null
                                                                ? null
                                                                : l.httpEquiv) &&
                                                        u.getAttribute('charset') ===
                                                            (l.charSet == null ? null : l.charSet))
                                                ) {
                                                    i.splice(r, 1);
                                                    break t;
                                                }
                                        }
                                        ((u = n.createElement(a)),
                                            Ve(u, a, l),
                                            n.head.appendChild(u));
                                        break;
                                    default:
                                        throw Error(_(468, a));
                                }
                                ((u[Ge] = e), Be(u), (a = u));
                            }
                            e.stateNode = a;
                        } else ad(n, e.type, e.stateNode);
                    else e.stateNode = td(n, a, e.memoizedProps);
                else
                    u !== a
                        ? (u === null
                              ? l.stateNode !== null &&
                                ((l = l.stateNode), l.parentNode.removeChild(l))
                              : u.count--,
                          a === null ? ad(n, e.type, e.stateNode) : td(n, a, e.memoizedProps))
                        : a === null &&
                          e.stateNode !== null &&
                          kr(e, e.memoizedProps, l.memoizedProps);
            }
            break;
        case 27:
            (lt(t, e),
                at(e),
                a & 512 && (Ae || l === null || Mt(l, l.return)),
                l !== null && a & 4 && kr(e, e.memoizedProps, l.memoizedProps));
            break;
        case 5:
            if ((lt(t, e), at(e), a & 512 && (Ae || l === null || Mt(l, l.return)), e.flags & 32)) {
                n = e.stateNode;
                try {
                    qa(n, '');
                } catch (v) {
                    ue(e, e.return, v);
                }
            }
            (a & 4 &&
                e.stateNode != null &&
                ((n = e.memoizedProps), kr(e, n, l !== null ? l.memoizedProps : n)),
                a & 1024 && (Fr = !0));
            break;
        case 6:
            if ((lt(t, e), at(e), a & 4)) {
                if (e.stateNode === null) throw Error(_(162));
                ((a = e.memoizedProps), (l = e.stateNode));
                try {
                    l.nodeValue = a;
                } catch (v) {
                    ue(e, e.return, v);
                }
            }
            break;
        case 3:
            if (
                ((Iu = null),
                (n = Et),
                (Et = zi(t.containerInfo)),
                lt(t, e),
                (Et = n),
                at(e),
                a & 4 && l !== null && l.memoizedState.isDehydrated)
            )
                try {
                    Pn(t.containerInfo);
                } catch (v) {
                    ue(e, e.return, v);
                }
            Fr && ((Fr = !1), Pm(e));
            break;
        case 4:
            ((a = Et), (Et = zi(e.stateNode.containerInfo)), lt(t, e), at(e), (Et = a));
            break;
        case 12:
            (lt(t, e), at(e));
            break;
        case 13:
            (lt(t, e),
                at(e),
                e.child.flags & 8192 &&
                    (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
                    (uf = wt()),
                a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), $r(e, a))));
            break;
        case 22:
            n = e.memoizedState !== null;
            var c = l !== null && l.memoizedState !== null,
                s = Kt,
                f = Ae;
            if (((Kt = s || n), (Ae = f || c), lt(t, e), (Ae = f), (Kt = s), at(e), a & 8192))
                e: for (
                    t = e.stateNode,
                        t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                        n && (l === null || c || Kt || Ae || Vl(e)),
                        l = null,
                        t = e;
                    ;

                ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (l === null) {
                            c = l = t;
                            try {
                                if (((u = c.stateNode), n))
                                    ((i = u.style),
                                        typeof i.setProperty == 'function'
                                            ? i.setProperty('display', 'none', 'important')
                                            : (i.display = 'none'));
                                else {
                                    r = c.stateNode;
                                    var h = c.memoizedProps.style,
                                        d =
                                            h != null && h.hasOwnProperty('display')
                                                ? h.display
                                                : null;
                                    r.style.display =
                                        d == null || typeof d == 'boolean' ? '' : ('' + d).trim();
                                }
                            } catch (v) {
                                ue(c, c.return, v);
                            }
                        }
                    } else if (t.tag === 6) {
                        if (l === null) {
                            c = t;
                            try {
                                c.stateNode.nodeValue = n ? '' : c.memoizedProps;
                            } catch (v) {
                                ue(c, c.return, v);
                            }
                        }
                    } else if (
                        ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
                        t.child !== null
                    ) {
                        ((t.child.return = t), (t = t.child));
                        continue;
                    }
                    if (t === e) break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e) break e;
                        (l === t && (l = null), (t = t.return));
                    }
                    (l === t && (l = null), (t.sibling.return = t.return), (t = t.sibling));
                }
            a & 4 &&
                ((a = e.updateQueue),
                a !== null &&
                    ((l = a.retryQueue), l !== null && ((a.retryQueue = null), $r(e, l))));
            break;
        case 19:
            (lt(t, e),
                at(e),
                a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), $r(e, a))));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            (lt(t, e), at(e));
    }
}
function at(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            for (var l, a = e.return; a !== null; ) {
                if (Zm(a)) {
                    l = a;
                    break;
                }
                a = a.return;
            }
            if (l == null) throw Error(_(160));
            switch (l.tag) {
                case 27:
                    var n = l.stateNode,
                        u = Jr(e);
                    Oi(e, u, n);
                    break;
                case 5:
                    var i = l.stateNode;
                    l.flags & 32 && (qa(i, ''), (l.flags &= -33));
                    var r = Jr(e);
                    Oi(e, r, i);
                    break;
                case 3:
                case 4:
                    var c = l.stateNode.containerInfo,
                        s = Jr(e);
                    Xc(e, s, c);
                    break;
                default:
                    throw Error(_(161));
            }
        } catch (f) {
            ue(e, e.return, f);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Pm(e) {
    if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
            var t = e;
            (Pm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
        }
}
function sl(e, t) {
    if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; ) (km(e, t.alternate, t), (t = t.sibling));
}
function Vl(e) {
    for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                (Ml(4, t, t.return), Vl(t));
                break;
            case 1:
                Mt(t, t.return);
                var l = t.stateNode;
                (typeof l.componentWillUnmount == 'function' && Xm(t, t.return, l), Vl(t));
                break;
            case 27:
                jn(t.stateNode);
            case 26:
            case 5:
                (Mt(t, t.return), Vl(t));
                break;
            case 22:
                t.memoizedState === null && Vl(t);
                break;
            case 30:
                Vl(t);
                break;
            default:
                Vl(t);
        }
        e = e.sibling;
    }
}
function fl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var a = t.alternate,
            n = e,
            u = t,
            i = u.flags;
        switch (u.tag) {
            case 0:
            case 11:
            case 15:
                (fl(n, u, l), hu(4, u));
                break;
            case 1:
                if (
                    (fl(n, u, l),
                    (a = u),
                    (n = a.stateNode),
                    typeof n.componentDidMount == 'function')
                )
                    try {
                        n.componentDidMount();
                    } catch (s) {
                        ue(a, a.return, s);
                    }
                if (((a = u), (n = a.updateQueue), n !== null)) {
                    var r = a.stateNode;
                    try {
                        var c = n.shared.hiddenCallbacks;
                        if (c !== null)
                            for (n.shared.hiddenCallbacks = null, n = 0; n < c.length; n++)
                                kh(c[n], r);
                    } catch (s) {
                        ue(a, a.return, s);
                    }
                }
                (l && i & 64 && Gm(u), zn(u, u.return));
                break;
            case 27:
                Km(u);
            case 26:
            case 5:
                (fl(n, u, l), l && a === null && i & 4 && Qm(u), zn(u, u.return));
                break;
            case 12:
                fl(n, u, l);
                break;
            case 13:
                (fl(n, u, l), l && i & 4 && $m(n, u));
                break;
            case 22:
                (u.memoizedState === null && fl(n, u, l), zn(u, u.return));
                break;
            case 30:
                break;
            default:
                fl(n, u, l);
        }
        t = t.sibling;
    }
}
function tf(e, t) {
    var l = null;
    (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (l = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
        e !== l && (e != null && e.refCount++, l != null && su(l)));
}
function lf(e, t) {
    ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && su(e)));
}
function _t(e, t, l, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Im(e, t, l, a), (t = t.sibling));
}
function Im(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 15:
            (_t(e, t, l, a), n & 2048 && hu(9, t));
            break;
        case 1:
            _t(e, t, l, a);
            break;
        case 3:
            (_t(e, t, l, a),
                n & 2048 &&
                    ((e = null),
                    t.alternate !== null && (e = t.alternate.memoizedState.cache),
                    (t = t.memoizedState.cache),
                    t !== e && (t.refCount++, e != null && su(e))));
            break;
        case 12:
            if (n & 2048) {
                (_t(e, t, l, a), (e = t.stateNode));
                try {
                    var u = t.memoizedProps,
                        i = u.id,
                        r = u.onPostCommit;
                    typeof r == 'function' &&
                        r(
                            i,
                            t.alternate === null ? 'mount' : 'update',
                            e.passiveEffectDuration,
                            -0
                        );
                } catch (c) {
                    ue(t, t.return, c);
                }
            } else _t(e, t, l, a);
            break;
        case 13:
            _t(e, t, l, a);
            break;
        case 23:
            break;
        case 22:
            ((u = t.stateNode),
                (i = t.alternate),
                t.memoizedState !== null
                    ? u._visibility & 2
                        ? _t(e, t, l, a)
                        : Cn(e, t)
                    : u._visibility & 2
                      ? _t(e, t, l, a)
                      : ((u._visibility |= 2), ya(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
                n & 2048 && tf(i, t));
            break;
        case 24:
            (_t(e, t, l, a), n & 2048 && lf(t.alternate, t));
            break;
        default:
            _t(e, t, l, a);
    }
}
function ya(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
        var u = e,
            i = t,
            r = l,
            c = a,
            s = i.flags;
        switch (i.tag) {
            case 0:
            case 11:
            case 15:
                (ya(u, i, r, c, n), hu(8, i));
                break;
            case 23:
                break;
            case 22:
                var f = i.stateNode;
                (i.memoizedState !== null
                    ? f._visibility & 2
                        ? ya(u, i, r, c, n)
                        : Cn(u, i)
                    : ((f._visibility |= 2), ya(u, i, r, c, n)),
                    n && s & 2048 && tf(i.alternate, i));
                break;
            case 24:
                (ya(u, i, r, c, n), n && s & 2048 && lf(i.alternate, i));
                break;
            default:
                ya(u, i, r, c, n);
        }
        t = t.sibling;
    }
}
function Cn(e, t) {
    if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
            var l = e,
                a = t,
                n = a.flags;
            switch (a.tag) {
                case 22:
                    (Cn(l, a), n & 2048 && tf(a.alternate, a));
                    break;
                case 24:
                    (Cn(l, a), n & 2048 && lf(a.alternate, a));
                    break;
                default:
                    Cn(l, a);
            }
            t = t.sibling;
        }
}
var En = 8192;
function fa(e) {
    if (e.subtreeFlags & En) for (e = e.child; e !== null; ) (ey(e), (e = e.sibling));
}
function ey(e) {
    switch (e.tag) {
        case 26:
            (fa(e),
                e.flags & En &&
                    e.memoizedState !== null &&
                    Up(Et, e.memoizedState, e.memoizedProps));
            break;
        case 5:
            fa(e);
            break;
        case 3:
        case 4:
            var t = Et;
            ((Et = zi(e.stateNode.containerInfo)), fa(e), (Et = t));
            break;
        case 22:
            e.memoizedState === null &&
                ((t = e.alternate),
                t !== null && t.memoizedState !== null
                    ? ((t = En), (En = 16777216), fa(e), (En = t))
                    : fa(e));
            break;
        default:
            fa(e);
    }
}
function ty(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
    }
}
function dn(e) {
    var t = e.deletions;
    if (e.flags & 16) {
        if (t !== null)
            for (var l = 0; l < t.length; l++) {
                var a = t[l];
                ((we = a), ay(a, e));
            }
        ty(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (ly(e), (e = e.sibling));
}
function ly(e) {
    switch (e.tag) {
        case 0:
        case 11:
        case 15:
            (dn(e), e.flags & 2048 && Ml(9, e, e.return));
            break;
        case 3:
            dn(e);
            break;
        case 12:
            dn(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null &&
            t._visibility & 2 &&
            (e.return === null || e.return.tag !== 13)
                ? ((t._visibility &= -3), Wu(e))
                : dn(e);
            break;
        default:
            dn(e);
    }
}
function Wu(e) {
    var t = e.deletions;
    if (e.flags & 16) {
        if (t !== null)
            for (var l = 0; l < t.length; l++) {
                var a = t[l];
                ((we = a), ay(a, e));
            }
        ty(e);
    }
    for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
            case 0:
            case 11:
            case 15:
                (Ml(8, t, t.return), Wu(t));
                break;
            case 22:
                ((l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), Wu(t)));
                break;
            default:
                Wu(t);
        }
        e = e.sibling;
    }
}
function ay(e, t) {
    for (; we !== null; ) {
        var l = we;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                Ml(8, l, t);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var a = l.memoizedState.cachePool.pool;
                    a != null && a.refCount++;
                }
                break;
            case 24:
                su(l.memoizedState.cache);
        }
        if (((a = l.child), a !== null)) ((a.return = l), (we = a));
        else
            e: for (l = e; we !== null; ) {
                a = we;
                var n = a.sibling,
                    u = a.return;
                if ((Jm(a), a === l)) {
                    we = null;
                    break e;
                }
                if (n !== null) {
                    ((n.return = u), (we = n));
                    break e;
                }
                we = u;
            }
    }
}
var Kg = {
        getCacheForType: function (e) {
            var t = Xe(Ue),
                l = t.data.get(e);
            return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
        },
    },
    kg = typeof WeakMap == 'function' ? WeakMap : Map,
    te = 0,
    se = null,
    J = null,
    F = 0,
    ee = 0,
    nt = null,
    Sl = !1,
    Pa = !1,
    af = !1,
    nl = 0,
    Se = 0,
    zl = 0,
    Jl = 0,
    nf = 0,
    pt = 0,
    Qa = 0,
    wn = null,
    We = null,
    Qc = !1,
    uf = 0,
    xi = 1 / 0,
    _i = null,
    Ol = null,
    qe = 0,
    xl = null,
    Za = null,
    ja = 0,
    Zc = 0,
    Kc = null,
    ny = null,
    Bn = 0,
    kc = null;
function ct() {
    if (te & 2 && F !== 0) return F & -F;
    if (Y.T !== null) {
        var e = Va;
        return e !== 0 ? e : cf();
    }
    return yh();
}
function uy() {
    pt === 0 && (pt = !(F & 536870912) || W ? oh() : 536870912);
    var e = bt.current;
    return (e !== null && (e.flags |= 32), pt);
}
function st(e, t, l) {
    (((e === se && (ee === 2 || ee === 9)) || e.cancelPendingCommit !== null) &&
        (Ka(e, 0), El(e, F, pt, !1)),
        nu(e, l),
        (!(te & 2) || e !== se) &&
            (e === se && (!(te & 2) && (Jl |= l), Se === 4 && El(e, F, pt, !1)), Lt(e)));
}
function iy(e, t, l) {
    if (te & 6) throw Error(_(327));
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || au(e, t),
        n = a ? $g(e, t) : Wr(e, t, !0),
        u = a;
    do {
        if (n === 0) {
            Pa && !a && El(e, t, 0, !1);
            break;
        } else {
            if (((l = e.current.alternate), u && !Jg(l))) {
                ((n = Wr(e, t, !1)), (u = !1));
                continue;
            }
            if (n === 2) {
                if (((u = t), e.errorRecoveryDisabledLanes & u)) var i = 0;
                else
                    ((i = e.pendingLanes & -536870913),
                        (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
                if (i !== 0) {
                    t = i;
                    e: {
                        var r = e;
                        n = wn;
                        var c = r.current.memoizedState.isDehydrated;
                        if ((c && (Ka(r, i).flags |= 256), (i = Wr(r, i, !1)), i !== 2)) {
                            if (af && !c) {
                                ((r.errorRecoveryDisabledLanes |= u), (Jl |= u), (n = 4));
                                break e;
                            }
                            ((u = We),
                                (We = n),
                                u !== null && (We === null ? (We = u) : We.push.apply(We, u)));
                        }
                        n = i;
                    }
                    if (((u = !1), n !== 2)) continue;
                }
            }
            if (n === 1) {
                (Ka(e, 0), El(e, t, 0, !0));
                break;
            }
            e: {
                switch (((a = e), (u = n), u)) {
                    case 0:
                    case 1:
                        throw Error(_(345));
                    case 4:
                        if ((t & 4194048) !== t) break;
                    case 6:
                        El(a, t, pt, !Sl);
                        break e;
                    case 2:
                        We = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(_(329));
                }
                if ((t & 62914560) === t && ((n = uf + 300 - wt()), 10 < n)) {
                    if ((El(a, t, pt, !Sl), Ji(a, 0, !0) !== 0)) break e;
                    a.timeoutHandle = Oy(
                        Vo.bind(null, a, l, We, _i, Qc, t, pt, Jl, Qa, Sl, u, 2, -0, 0),
                        n
                    );
                    break e;
                }
                Vo(a, l, We, _i, Qc, t, pt, Jl, Qa, Sl, u, 0, -0, 0);
            }
        }
        break;
    } while (!0);
    Lt(e);
}
function Vo(e, t, l, a, n, u, i, r, c, s, f, h, d, v) {
    if (
        ((e.timeoutHandle = -1),
        (h = t.subtreeFlags),
        (h & 8192 || (h & 16785408) === 16785408) &&
            ((Jn = { stylesheets: null, count: 0, unsuspend: Np }), ey(t), (h = Mp()), h !== null))
    ) {
        ((e.cancelPendingCommit = h(Go.bind(null, e, t, u, l, a, n, i, r, c, f, 1, d, v))),
            El(e, u, i, !s));
        return;
    }
    Go(e, t, u, l, a, n, i, r, c);
}
function Jg(e) {
    for (var t = e; ; ) {
        var l = t.tag;
        if (
            (l === 0 || l === 11 || l === 15) &&
            t.flags & 16384 &&
            ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
        )
            for (var a = 0; a < l.length; a++) {
                var n = l[a],
                    u = n.getSnapshot;
                n = n.value;
                try {
                    if (!ft(u(), n)) return !1;
                } catch {
                    return !1;
                }
            }
        if (((l = t.child), t.subtreeFlags & 16384 && l !== null)) ((l.return = t), (t = l));
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
        }
    }
    return !0;
}
function El(e, t, l, a) {
    ((t &= ~nf),
        (t &= ~Jl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        a && (e.warmLanes |= t),
        (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
        var u = 31 - rt(n),
            i = 1 << u;
        ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && hh(e, l, t);
}
function nr() {
    return te & 6 ? !0 : (mu(0), !1);
}
function rf() {
    if (J !== null) {
        if (ee === 0) var e = J.return;
        else ((e = J), ($t = ua = null), Ks(e), (Ba = null), (Zn = 0), (e = J));
        for (; e !== null; ) (Ym(e.alternate, e), (e = e.return));
        J = null;
    }
}
function Ka(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), dp(l)),
        (l = e.cancelPendingCommit),
        l !== null && ((e.cancelPendingCommit = null), l()),
        rf(),
        (se = e),
        (J = l = Pt(e.current, null)),
        (F = t),
        (ee = 0),
        (nt = null),
        (Sl = !1),
        (Pa = au(e, t)),
        (af = !1),
        (Qa = pt = nf = Jl = zl = Se = 0),
        (We = wn = null),
        (Qc = !1),
        t & 8 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
        for (e = e.entanglements, a &= t; 0 < a; ) {
            var n = 31 - rt(a),
                u = 1 << n;
            ((t |= e[n]), (a &= ~u));
        }
    return ((nl = t), Pi(), l);
}
function ry(e, t) {
    ((K = null),
        (Y.H = Si),
        t === fu || t === er
            ? ((t = po()), (ee = 3))
            : t === Zh
              ? ((t = po()), (ee = 4))
              : (ee =
                    t === Bm
                        ? 8
                        : t !== null && typeof t == 'object' && typeof t.then == 'function'
                          ? 6
                          : 1),
        (nt = t),
        J === null && ((Se = 1), Ti(e, gt(t, e.current))));
}
function cy() {
    var e = Y.H;
    return ((Y.H = Si), e === null ? Si : e);
}
function sy() {
    var e = Y.A;
    return ((Y.A = Kg), e);
}
function Jc() {
    ((Se = 4),
        Sl || ((F & 4194048) !== F && bt.current !== null) || (Pa = !0),
        (!(zl & 134217727) && !(Jl & 134217727)) || se === null || El(se, F, pt, !1));
}
function Wr(e, t, l) {
    var a = te;
    te |= 2;
    var n = cy(),
        u = sy();
    ((se !== e || F !== t) && ((_i = null), Ka(e, t)), (t = !1));
    var i = Se;
    e: do
        try {
            if (ee !== 0 && J !== null) {
                var r = J,
                    c = nt;
                switch (ee) {
                    case 8:
                        (rf(), (i = 6));
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        bt.current === null && (t = !0);
                        var s = ee;
                        if (((ee = 0), (nt = null), Da(e, r, c, s), l && Pa)) {
                            i = 0;
                            break e;
                        }
                        break;
                    default:
                        ((s = ee), (ee = 0), (nt = null), Da(e, r, c, s));
                }
            }
            (Fg(), (i = Se));
            break;
        } catch (f) {
            ry(e, f);
        }
    while (!0);
    return (
        t && e.shellSuspendCounter++,
        ($t = ua = null),
        (te = a),
        (Y.H = n),
        (Y.A = u),
        J === null && ((se = null), (F = 0), Pi()),
        i
    );
}
function Fg() {
    for (; J !== null; ) fy(J);
}
function $g(e, t) {
    var l = te;
    te |= 2;
    var a = cy(),
        n = sy();
    se !== e || F !== t ? ((_i = null), (xi = wt() + 500), Ka(e, t)) : (Pa = au(e, t));
    e: do
        try {
            if (ee !== 0 && J !== null) {
                t = J;
                var u = nt;
                t: switch (ee) {
                    case 1:
                        ((ee = 0), (nt = null), Da(e, t, u, 1));
                        break;
                    case 2:
                    case 9:
                        if (go(u)) {
                            ((ee = 0), (nt = null), Yo(t));
                            break;
                        }
                        ((t = function () {
                            ((ee !== 2 && ee !== 9) || se !== e || (ee = 7), Lt(e));
                        }),
                            u.then(t, t));
                        break e;
                    case 3:
                        ee = 7;
                        break e;
                    case 4:
                        ee = 5;
                        break e;
                    case 7:
                        go(u)
                            ? ((ee = 0), (nt = null), Yo(t))
                            : ((ee = 0), (nt = null), Da(e, t, u, 7));
                        break;
                    case 5:
                        var i = null;
                        switch (J.tag) {
                            case 26:
                                i = J.memoizedState;
                            case 5:
                            case 27:
                                var r = J;
                                if (!i || Ny(i)) {
                                    ((ee = 0), (nt = null));
                                    var c = r.sibling;
                                    if (c !== null) J = c;
                                    else {
                                        var s = r.return;
                                        s !== null ? ((J = s), ur(s)) : (J = null);
                                    }
                                    break t;
                                }
                        }
                        ((ee = 0), (nt = null), Da(e, t, u, 5));
                        break;
                    case 6:
                        ((ee = 0), (nt = null), Da(e, t, u, 6));
                        break;
                    case 8:
                        (rf(), (Se = 6));
                        break e;
                    default:
                        throw Error(_(462));
                }
            }
            Wg();
            break;
        } catch (f) {
            ry(e, f);
        }
    while (!0);
    return (
        ($t = ua = null),
        (Y.H = a),
        (Y.A = n),
        (te = l),
        J !== null ? 0 : ((se = null), (F = 0), Pi(), Se)
    );
}
function Wg() {
    for (; J !== null && !b0(); ) fy(J);
}
function fy(e) {
    var t = Vm(e.alternate, e, nl);
    ((e.memoizedProps = e.pendingProps), t === null ? ur(e) : (J = t));
}
function Yo(e) {
    var t = e,
        l = t.alternate;
    switch (t.tag) {
        case 15:
        case 0:
            t = wo(l, t, t.pendingProps, t.type, void 0, F);
            break;
        case 11:
            t = wo(l, t, t.pendingProps, t.type.render, t.ref, F);
            break;
        case 5:
            Ks(t);
        default:
            (Ym(l, t), (t = J = Yh(t, nl)), (t = Vm(l, t, nl)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ur(e) : (J = t));
}
function Da(e, t, l, a) {
    (($t = ua = null), Ks(t), (Ba = null), (Zn = 0));
    var n = t.return;
    try {
        if (Vg(e, n, t, l, F)) {
            ((Se = 1), Ti(e, gt(l, e.current)), (J = null));
            return;
        }
    } catch (u) {
        if (n !== null) throw ((J = n), u);
        ((Se = 1), Ti(e, gt(l, e.current)), (J = null));
        return;
    }
    t.flags & 32768
        ? (W || a === 1
              ? (e = !0)
              : Pa || F & 536870912
                ? (e = !1)
                : ((Sl = e = !0),
                  (a === 2 || a === 9 || a === 3 || a === 6) &&
                      ((a = bt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
          oy(t, e))
        : ur(t);
}
function ur(e) {
    var t = e;
    do {
        if (t.flags & 32768) {
            oy(t, Sl);
            return;
        }
        e = t.return;
        var l = Gg(t.alternate, t, nl);
        if (l !== null) {
            J = l;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            J = t;
            return;
        }
        J = t = e;
    } while (t !== null);
    Se === 0 && (Se = 5);
}
function oy(e, t) {
    do {
        var l = Xg(e.alternate, e);
        if (l !== null) {
            ((l.flags &= 32767), (J = l));
            return;
        }
        if (
            ((l = e.return),
            l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
            !t && ((e = e.sibling), e !== null))
        ) {
            J = e;
            return;
        }
        J = e = l;
    } while (e !== null);
    ((Se = 6), (J = null));
}
function Go(e, t, l, a, n, u, i, r, c) {
    e.cancelPendingCommit = null;
    do ir();
    while (qe !== 0);
    if (te & 6) throw Error(_(327));
    if (t !== null) {
        if (t === e.current) throw Error(_(177));
        if (
            ((u = t.lanes | t.childLanes),
            (u |= Cs),
            N0(e, l, u, i, r, c),
            e === se && ((J = se = null), (F = 0)),
            (Za = t),
            (xl = e),
            (ja = l),
            (Zc = u),
            (Kc = n),
            (ny = a),
            t.subtreeFlags & 10256 || t.flags & 10256
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  tp(fi, function () {
                      return (vy(), null);
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
            (a = (t.flags & 13878) !== 0),
            t.subtreeFlags & 13878 || a)
        ) {
            ((a = Y.T), (Y.T = null), (n = P.p), (P.p = 2), (i = te), (te |= 4));
            try {
                Qg(e, t, l);
            } finally {
                ((te = i), (P.p = n), (Y.T = a));
            }
        }
        ((qe = 1), dy(), hy(), my());
    }
}
function dy() {
    if (qe === 1) {
        qe = 0;
        var e = xl,
            t = Za,
            l = (t.flags & 13878) !== 0;
        if (t.subtreeFlags & 13878 || l) {
            ((l = Y.T), (Y.T = null));
            var a = P.p;
            P.p = 2;
            var n = te;
            te |= 4;
            try {
                Wm(t, e);
                var u = Pc,
                    i = Ch(e.containerInfo),
                    r = u.focusedElem,
                    c = u.selectionRange;
                if (i !== r && r && r.ownerDocument && zh(r.ownerDocument.documentElement, r)) {
                    if (c !== null && zs(r)) {
                        var s = c.start,
                            f = c.end;
                        if ((f === void 0 && (f = s), 'selectionStart' in r))
                            ((r.selectionStart = s),
                                (r.selectionEnd = Math.min(f, r.value.length)));
                        else {
                            var h = r.ownerDocument || document,
                                d = (h && h.defaultView) || window;
                            if (d.getSelection) {
                                var v = d.getSelection(),
                                    b = r.textContent.length,
                                    S = Math.min(c.start, b),
                                    A = c.end === void 0 ? S : Math.min(c.end, b);
                                !v.extend && S > A && ((i = A), (A = S), (S = i));
                                var m = co(r, S),
                                    o = co(r, A);
                                if (
                                    m &&
                                    o &&
                                    (v.rangeCount !== 1 ||
                                        v.anchorNode !== m.node ||
                                        v.anchorOffset !== m.offset ||
                                        v.focusNode !== o.node ||
                                        v.focusOffset !== o.offset)
                                ) {
                                    var y = h.createRange();
                                    (y.setStart(m.node, m.offset),
                                        v.removeAllRanges(),
                                        S > A
                                            ? (v.addRange(y), v.extend(o.node, o.offset))
                                            : (y.setEnd(o.node, o.offset), v.addRange(y)));
                                }
                            }
                        }
                    }
                    for (h = [], v = r; (v = v.parentNode); )
                        v.nodeType === 1 &&
                            h.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
                    for (typeof r.focus == 'function' && r.focus(), r = 0; r < h.length; r++) {
                        var p = h[r];
                        ((p.element.scrollLeft = p.left), (p.element.scrollTop = p.top));
                    }
                }
                ((Bi = !!Wc), (Pc = Wc = null));
            } finally {
                ((te = n), (P.p = a), (Y.T = l));
            }
        }
        ((e.current = t), (qe = 2));
    }
}
function hy() {
    if (qe === 2) {
        qe = 0;
        var e = xl,
            t = Za,
            l = (t.flags & 8772) !== 0;
        if (t.subtreeFlags & 8772 || l) {
            ((l = Y.T), (Y.T = null));
            var a = P.p;
            P.p = 2;
            var n = te;
            te |= 4;
            try {
                km(e, t.alternate, t);
            } finally {
                ((te = n), (P.p = a), (Y.T = l));
            }
        }
        qe = 3;
    }
}
function my() {
    if (qe === 4 || qe === 3) {
        ((qe = 0), S0());
        var e = xl,
            t = Za,
            l = ja,
            a = ny;
        t.subtreeFlags & 10256 || t.flags & 10256
            ? (qe = 5)
            : ((qe = 0), (Za = xl = null), yy(e, e.pendingLanes));
        var n = e.pendingLanes;
        if (
            (n === 0 && (Ol = null),
            Os(l),
            (t = t.stateNode),
            it && typeof it.onCommitFiberRoot == 'function')
        )
            try {
                it.onCommitFiberRoot(lu, t, void 0, (t.current.flags & 128) === 128);
            } catch {}
        if (a !== null) {
            ((t = Y.T), (n = P.p), (P.p = 2), (Y.T = null));
            try {
                for (var u = e.onRecoverableError, i = 0; i < a.length; i++) {
                    var r = a[i];
                    u(r.value, { componentStack: r.stack });
                }
            } finally {
                ((Y.T = t), (P.p = n));
            }
        }
        (ja & 3 && ir(),
            Lt(e),
            (n = e.pendingLanes),
            l & 4194090 && n & 42 ? (e === kc ? Bn++ : ((Bn = 0), (kc = e))) : (Bn = 0),
            mu(0));
    }
}
function yy(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), su(t)));
}
function ir(e) {
    return (dy(), hy(), my(), vy());
}
function vy() {
    if (qe !== 5) return !1;
    var e = xl,
        t = Zc;
    Zc = 0;
    var l = Os(ja),
        a = Y.T,
        n = P.p;
    try {
        ((P.p = 32 > l ? 32 : l), (Y.T = null), (l = Kc), (Kc = null));
        var u = xl,
            i = ja;
        if (((qe = 0), (Za = xl = null), (ja = 0), te & 6)) throw Error(_(331));
        var r = te;
        if (
            ((te |= 4),
            ly(u.current),
            Im(u, u.current, i, l),
            (te = r),
            mu(0, !1),
            it && typeof it.onPostCommitFiberRoot == 'function')
        )
            try {
                it.onPostCommitFiberRoot(lu, u);
            } catch {}
        return !0;
    } finally {
        ((P.p = n), (Y.T = a), yy(e, t));
    }
}
function Xo(e, t, l) {
    ((t = gt(l, t)),
        (t = Vc(e.stateNode, t, 2)),
        (e = Rl(e, t, 2)),
        e !== null && (nu(e, 2), Lt(e)));
}
function ue(e, t, l) {
    if (e.tag === 3) Xo(e, e, l);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Xo(t, e, l);
                break;
            } else if (t.tag === 1) {
                var a = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof a.componentDidCatch == 'function' && (Ol === null || !Ol.has(a)))
                ) {
                    ((e = gt(l, e)),
                        (l = Cm(2)),
                        (a = Rl(t, l, 2)),
                        a !== null && (wm(l, a, t, e), nu(a, 2), Lt(a)));
                    break;
                }
            }
            t = t.return;
        }
}
function Pr(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
        a = e.pingCache = new kg();
        var n = new Set();
        a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) || ((af = !0), n.add(l), (e = Pg.bind(null, e, t, l)), t.then(e, e));
}
function Pg(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
        (e.pingedLanes |= e.suspendedLanes & l),
        (e.warmLanes &= ~l),
        se === e &&
            (F & l) === l &&
            (Se === 4 || (Se === 3 && (F & 62914560) === F && 300 > wt() - uf)
                ? !(te & 2) && Ka(e, 0)
                : (nf |= l),
            Qa === F && (Qa = 0)),
        Lt(e));
}
function gy(e, t) {
    (t === 0 && (t = dh()), (e = Wa(e, t)), e !== null && (nu(e, t), Lt(e)));
}
function Ig(e) {
    var t = e.memoizedState,
        l = 0;
    (t !== null && (l = t.retryLane), gy(e, l));
}
function ep(e, t) {
    var l = 0;
    switch (e.tag) {
        case 13:
            var a = e.stateNode,
                n = e.memoizedState;
            n !== null && (l = n.retryLane);
            break;
        case 19:
            a = e.stateNode;
            break;
        case 22:
            a = e.stateNode._retryCache;
            break;
        default:
            throw Error(_(314));
    }
    (a !== null && a.delete(t), gy(e, l));
}
function tp(e, t) {
    return Ts(e, t);
}
var Di = null,
    va = null,
    Fc = !1,
    Ni = !1,
    Ir = !1,
    Fl = 0;
function Lt(e) {
    (e !== va && e.next === null && (va === null ? (Di = va = e) : (va = va.next = e)),
        (Ni = !0),
        Fc || ((Fc = !0), ap()));
}
function mu(e, t) {
    if (!Ir && Ni) {
        Ir = !0;
        do
            for (var l = !1, a = Di; a !== null; ) {
                if (e !== 0) {
                    var n = a.pendingLanes;
                    if (n === 0) var u = 0;
                    else {
                        var i = a.suspendedLanes,
                            r = a.pingedLanes;
                        ((u = (1 << (31 - rt(42 | e) + 1)) - 1),
                            (u &= n & ~(i & ~r)),
                            (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
                    }
                    u !== 0 && ((l = !0), Qo(a, u));
                } else
                    ((u = F),
                        (u = Ji(
                            a,
                            a === se ? u : 0,
                            a.cancelPendingCommit !== null || a.timeoutHandle !== -1
                        )),
                        !(u & 3) || au(a, u) || ((l = !0), Qo(a, u)));
                a = a.next;
            }
        while (l);
        Ir = !1;
    }
}
function lp() {
    py();
}
function py() {
    Ni = Fc = !1;
    var e = 0;
    Fl !== 0 && (op() && (e = Fl), (Fl = 0));
    for (var t = wt(), l = null, a = Di; a !== null; ) {
        var n = a.next,
            u = by(a, t);
        (u === 0
            ? ((a.next = null), l === null ? (Di = n) : (l.next = n), n === null && (va = l))
            : ((l = a), (e !== 0 || u & 3) && (Ni = !0)),
            (a = n));
    }
    mu(e);
}
function by(e, t) {
    for (
        var l = e.suspendedLanes,
            a = e.pingedLanes,
            n = e.expirationTimes,
            u = e.pendingLanes & -62914561;
        0 < u;

    ) {
        var i = 31 - rt(u),
            r = 1 << i,
            c = n[i];
        (c === -1 ? (!(r & l) || r & a) && (n[i] = D0(r, t)) : c <= t && (e.expiredLanes |= r),
            (u &= ~r));
    }
    if (
        ((t = se),
        (l = F),
        (l = Ji(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (a = e.callbackNode),
        l === 0 || (e === t && (ee === 2 || ee === 9)) || e.cancelPendingCommit !== null)
    )
        return (
            a !== null && a !== null && Or(a),
            (e.callbackNode = null),
            (e.callbackPriority = 0)
        );
    if (!(l & 3) || au(e, l)) {
        if (((t = l & -l), t === e.callbackPriority)) return t;
        switch ((a !== null && Or(a), Os(l))) {
            case 2:
            case 8:
                l = sh;
                break;
            case 32:
                l = fi;
                break;
            case 268435456:
                l = fh;
                break;
            default:
                l = fi;
        }
        return (
            (a = Sy.bind(null, e)),
            (l = Ts(l, a)),
            (e.callbackPriority = t),
            (e.callbackNode = l),
            t
        );
    }
    return (
        a !== null && a !== null && Or(a),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
    );
}
function Sy(e, t) {
    if (qe !== 0 && qe !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (ir() && e.callbackNode !== l) return null;
    var a = F;
    return (
        (a = Ji(e, e === se ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        a === 0
            ? null
            : (iy(e, a, t),
              by(e, wt()),
              e.callbackNode != null && e.callbackNode === l ? Sy.bind(null, e) : null)
    );
}
function Qo(e, t) {
    if (ir()) return null;
    iy(e, t, !0);
}
function ap() {
    hp(function () {
        te & 6 ? Ts(ch, lp) : py();
    });
}
function cf() {
    return (Fl === 0 && (Fl = oh()), Fl);
}
function Zo(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
        ? null
        : typeof e == 'function'
          ? e
          : Xu('' + e);
}
function Ko(e, t) {
    var l = t.ownerDocument.createElement('input');
    return (
        (l.name = t.name),
        (l.value = t.value),
        e.id && l.setAttribute('form', e.id),
        t.parentNode.insertBefore(l, t),
        (e = new FormData(e)),
        l.parentNode.removeChild(l),
        e
    );
}
function np(e, t, l, a, n) {
    if (t === 'submit' && l && l.stateNode === n) {
        var u = Zo((n[et] || null).action),
            i = a.submitter;
        i &&
            ((t = (t = i[et] || null) ? Zo(t.formAction) : i.getAttribute('formAction')),
            t !== null && ((u = t), (i = null)));
        var r = new Fi('action', 'action', null, a, n);
        e.push({
            event: r,
            listeners: [
                {
                    instance: null,
                    listener: function () {
                        if (a.defaultPrevented) {
                            if (Fl !== 0) {
                                var c = i ? Ko(n, i) : new FormData(n);
                                Lc(
                                    l,
                                    { pending: !0, data: c, method: n.method, action: u },
                                    null,
                                    c
                                );
                            }
                        } else
                            typeof u == 'function' &&
                                (r.preventDefault(),
                                (c = i ? Ko(n, i) : new FormData(n)),
                                Lc(l, { pending: !0, data: c, method: n.method, action: u }, u, c));
                    },
                    currentTarget: n,
                },
            ],
        });
    }
}
for (var ec = 0; ec < xc.length; ec++) {
    var tc = xc[ec],
        up = tc.toLowerCase(),
        ip = tc[0].toUpperCase() + tc.slice(1);
    Ot(up, 'on' + ip);
}
Ot(Bh, 'onAnimationEnd');
Ot(jh, 'onAnimationIteration');
Ot(Hh, 'onAnimationStart');
Ot('dblclick', 'onDoubleClick');
Ot('focusin', 'onFocus');
Ot('focusout', 'onBlur');
Ot(Tg, 'onTransitionRun');
Ot(Rg, 'onTransitionStart');
Ot(Og, 'onTransitionCancel');
Ot(Lh, 'onTransitionEnd');
La('onMouseEnter', ['mouseout', 'mouseover']);
La('onMouseLeave', ['mouseout', 'mouseover']);
La('onPointerEnter', ['pointerout', 'pointerover']);
La('onPointerLeave', ['pointerout', 'pointerover']);
la('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
la(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
);
la('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
la('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
la('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
la('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Kn =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    rp = new Set(
        'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Kn)
    );
function Ey(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
        var a = e[l],
            n = a.event;
        a = a.listeners;
        e: {
            var u = void 0;
            if (t)
                for (var i = a.length - 1; 0 <= i; i--) {
                    var r = a[i],
                        c = r.instance,
                        s = r.currentTarget;
                    if (((r = r.listener), c !== u && n.isPropagationStopped())) break e;
                    ((u = r), (n.currentTarget = s));
                    try {
                        u(n);
                    } catch (f) {
                        Ai(f);
                    }
                    ((n.currentTarget = null), (u = c));
                }
            else
                for (i = 0; i < a.length; i++) {
                    if (
                        ((r = a[i]),
                        (c = r.instance),
                        (s = r.currentTarget),
                        (r = r.listener),
                        c !== u && n.isPropagationStopped())
                    )
                        break e;
                    ((u = r), (n.currentTarget = s));
                    try {
                        u(n);
                    } catch (f) {
                        Ai(f);
                    }
                    ((n.currentTarget = null), (u = c));
                }
        }
    }
}
function k(e, t) {
    var l = t[bc];
    l === void 0 && (l = t[bc] = new Set());
    var a = e + '__bubble';
    l.has(a) || (Ay(t, e, 2, !1), l.add(a));
}
function lc(e, t, l) {
    var a = 0;
    (t && (a |= 4), Ay(l, e, a, t));
}
var Hu = '_reactListening' + Math.random().toString(36).slice(2);
function sf(e) {
    if (!e[Hu]) {
        ((e[Hu] = !0),
            vh.forEach(function (l) {
                l !== 'selectionchange' && (rp.has(l) || lc(l, !1, e), lc(l, !0, e));
            }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Hu] || ((t[Hu] = !0), lc('selectionchange', !1, t));
    }
}
function Ay(e, t, l, a) {
    switch (wy(t)) {
        case 2:
            var n = wp;
            break;
        case 8:
            n = Bp;
            break;
        default:
            n = hf;
    }
    ((l = n.bind(null, t, l, e)),
        (n = void 0),
        !Tc || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (n = !0),
        a
            ? n !== void 0
                ? e.addEventListener(t, l, { capture: !0, passive: n })
                : e.addEventListener(t, l, !0)
            : n !== void 0
              ? e.addEventListener(t, l, { passive: n })
              : e.addEventListener(t, l, !1));
}
function ac(e, t, l, a, n) {
    var u = a;
    if (!(t & 1) && !(t & 2) && a !== null)
        e: for (;;) {
            if (a === null) return;
            var i = a.tag;
            if (i === 3 || i === 4) {
                var r = a.stateNode.containerInfo;
                if (r === n) break;
                if (i === 4)
                    for (i = a.return; i !== null; ) {
                        var c = i.tag;
                        if ((c === 3 || c === 4) && i.stateNode.containerInfo === n) return;
                        i = i.return;
                    }
                for (; r !== null; ) {
                    if (((i = ba(r)), i === null)) return;
                    if (((c = i.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
                        a = u = i;
                        continue e;
                    }
                    r = r.parentNode;
                }
            }
            a = a.return;
        }
    Rh(function () {
        var s = u,
            f = Ds(l),
            h = [];
        e: {
            var d = qh.get(e);
            if (d !== void 0) {
                var v = Fi,
                    b = e;
                switch (e) {
                    case 'keypress':
                        if (Zu(l) === 0) break e;
                    case 'keydown':
                    case 'keyup':
                        v = tg;
                        break;
                    case 'focusin':
                        ((b = 'focus'), (v = Cr));
                        break;
                    case 'focusout':
                        ((b = 'blur'), (v = Cr));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        v = Cr;
                        break;
                    case 'click':
                        if (l.button === 2) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        v = Pf;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        v = X0;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        v = ng;
                        break;
                    case Bh:
                    case jh:
                    case Hh:
                        v = K0;
                        break;
                    case Lh:
                        v = ig;
                        break;
                    case 'scroll':
                    case 'scrollend':
                        v = Y0;
                        break;
                    case 'wheel':
                        v = cg;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        v = J0;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        v = eo;
                        break;
                    case 'toggle':
                    case 'beforetoggle':
                        v = fg;
                }
                var S = (t & 4) !== 0,
                    A = !S && (e === 'scroll' || e === 'scrollend'),
                    m = S ? (d !== null ? d + 'Capture' : null) : d;
                S = [];
                for (var o = s, y; o !== null; ) {
                    var p = o;
                    if (
                        ((y = p.stateNode),
                        (p = p.tag),
                        (p !== 5 && p !== 26 && p !== 27) ||
                            y === null ||
                            m === null ||
                            ((p = Vn(o, m)), p != null && S.push(kn(o, p, y))),
                        A)
                    )
                        break;
                    o = o.return;
                }
                0 < S.length && ((d = new v(d, b, null, l, f)), h.push({ event: d, listeners: S }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((d = e === 'mouseover' || e === 'pointerover'),
                    (v = e === 'mouseout' || e === 'pointerout'),
                    d && l !== Ac && (b = l.relatedTarget || l.fromElement) && (ba(b) || b[Fa]))
                )
                    break e;
                if (
                    (v || d) &&
                    ((d =
                        f.window === f
                            ? f
                            : (d = f.ownerDocument)
                              ? d.defaultView || d.parentWindow
                              : window),
                    v
                        ? ((b = l.relatedTarget || l.toElement),
                          (v = s),
                          (b = b ? ba(b) : null),
                          b !== null &&
                              ((A = tu(b)),
                              (S = b.tag),
                              b !== A || (S !== 5 && S !== 27 && S !== 6)) &&
                              (b = null))
                        : ((v = null), (b = s)),
                    v !== b)
                ) {
                    if (
                        ((S = Pf),
                        (p = 'onMouseLeave'),
                        (m = 'onMouseEnter'),
                        (o = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((S = eo),
                            (p = 'onPointerLeave'),
                            (m = 'onPointerEnter'),
                            (o = 'pointer')),
                        (A = v == null ? d : Sn(v)),
                        (y = b == null ? d : Sn(b)),
                        (d = new S(p, o + 'leave', v, l, f)),
                        (d.target = A),
                        (d.relatedTarget = y),
                        (p = null),
                        ba(f) === s &&
                            ((S = new S(m, o + 'enter', b, l, f)),
                            (S.target = y),
                            (S.relatedTarget = A),
                            (p = S)),
                        (A = p),
                        v && b)
                    )
                        t: {
                            for (S = v, m = b, o = 0, y = S; y; y = oa(y)) o++;
                            for (y = 0, p = m; p; p = oa(p)) y++;
                            for (; 0 < o - y; ) ((S = oa(S)), o--);
                            for (; 0 < y - o; ) ((m = oa(m)), y--);
                            for (; o--; ) {
                                if (S === m || (m !== null && S === m.alternate)) break t;
                                ((S = oa(S)), (m = oa(m)));
                            }
                            S = null;
                        }
                    else S = null;
                    (v !== null && ko(h, d, v, S, !1),
                        b !== null && A !== null && ko(h, A, b, S, !0));
                }
            }
            e: {
                if (
                    ((d = s ? Sn(s) : window),
                    (v = d.nodeName && d.nodeName.toLowerCase()),
                    v === 'select' || (v === 'input' && d.type === 'file'))
                )
                    var x = no;
                else if (ao(d))
                    if (Uh) x = Sg;
                    else {
                        x = pg;
                        var B = gg;
                    }
                else
                    ((v = d.nodeName),
                        !v ||
                        v.toLowerCase() !== 'input' ||
                        (d.type !== 'checkbox' && d.type !== 'radio')
                            ? s && _s(s.elementType) && (x = no)
                            : (x = bg));
                if (x && (x = x(e, s))) {
                    Nh(h, x, l, f);
                    break e;
                }
                (B && B(e, d, s),
                    e === 'focusout' &&
                        s &&
                        d.type === 'number' &&
                        s.memoizedProps.value != null &&
                        Ec(d, 'number', d.value));
            }
            switch (((B = s ? Sn(s) : window), e)) {
                case 'focusin':
                    (ao(B) || B.contentEditable === 'true') && ((Aa = B), (Rc = s), (On = null));
                    break;
                case 'focusout':
                    On = Rc = Aa = null;
                    break;
                case 'mousedown':
                    Oc = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ((Oc = !1), so(h, l, f));
                    break;
                case 'selectionchange':
                    if (Ag) break;
                case 'keydown':
                case 'keyup':
                    so(h, l, f);
            }
            var N;
            if (Ms)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var w = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            w = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            w = 'onCompositionUpdate';
                            break e;
                    }
                    w = void 0;
                }
            else
                Ea
                    ? _h(e, l) && (w = 'onCompositionEnd')
                    : e === 'keydown' && l.keyCode === 229 && (w = 'onCompositionStart');
            (w &&
                (xh &&
                    l.locale !== 'ko' &&
                    (Ea || w !== 'onCompositionStart'
                        ? w === 'onCompositionEnd' && Ea && (N = Oh())
                        : ((bl = f), (Ns = 'value' in bl ? bl.value : bl.textContent), (Ea = !0))),
                (B = Ui(s, w)),
                0 < B.length &&
                    ((w = new If(w, e, null, l, f)),
                    h.push({ event: w, listeners: B }),
                    N ? (w.data = N) : ((N = Dh(l)), N !== null && (w.data = N)))),
                (N = dg ? hg(e, l) : mg(e, l)) &&
                    ((w = Ui(s, 'onBeforeInput')),
                    0 < w.length &&
                        ((B = new If('onBeforeInput', 'beforeinput', null, l, f)),
                        h.push({ event: B, listeners: w }),
                        (B.data = N))),
                np(h, e, s, l, f));
        }
        Ey(h, t);
    });
}
function kn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
}
function Ui(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
        var n = e,
            u = n.stateNode;
        if (
            ((n = n.tag),
            (n !== 5 && n !== 26 && n !== 27) ||
                u === null ||
                ((n = Vn(e, l)),
                n != null && a.unshift(kn(e, n, u)),
                (n = Vn(e, t)),
                n != null && a.push(kn(e, n, u))),
            e.tag === 3)
        )
            return a;
        e = e.return;
    }
    return [];
}
function oa(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
}
function ko(e, t, l, a, n) {
    for (var u = t._reactName, i = []; l !== null && l !== a; ) {
        var r = l,
            c = r.alternate,
            s = r.stateNode;
        if (((r = r.tag), c !== null && c === a)) break;
        ((r !== 5 && r !== 26 && r !== 27) ||
            s === null ||
            ((c = s),
            n
                ? ((s = Vn(l, u)), s != null && i.unshift(kn(l, s, c)))
                : n || ((s = Vn(l, u)), s != null && i.push(kn(l, s, c)))),
            (l = l.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
}
var cp = /\r\n?/g,
    sp = /\u0000|\uFFFD/g;
function Jo(e) {
    return (typeof e == 'string' ? e : '' + e)
        .replace(
            cp,
            `
`
        )
        .replace(sp, '');
}
function Ty(e, t) {
    return ((t = Jo(t)), Jo(e) === t);
}
function rr() {}
function ae(e, t, l, a, n, u) {
    switch (l) {
        case 'children':
            typeof a == 'string'
                ? t === 'body' || (t === 'textarea' && a === '') || qa(e, a)
                : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && qa(e, '' + a);
            break;
        case 'className':
            Uu(e, 'class', a);
            break;
        case 'tabIndex':
            Uu(e, 'tabindex', a);
            break;
        case 'dir':
        case 'role':
        case 'viewBox':
        case 'width':
        case 'height':
            Uu(e, l, a);
            break;
        case 'style':
            Th(e, a, u);
            break;
        case 'data':
            if (t !== 'object') {
                Uu(e, 'data', a);
                break;
            }
        case 'src':
        case 'href':
            if (a === '' && (t !== 'a' || l !== 'href')) {
                e.removeAttribute(l);
                break;
            }
            if (
                a == null ||
                typeof a == 'function' ||
                typeof a == 'symbol' ||
                typeof a == 'boolean'
            ) {
                e.removeAttribute(l);
                break;
            }
            ((a = Xu('' + a)), e.setAttribute(l, a));
            break;
        case 'action':
        case 'formAction':
            if (typeof a == 'function') {
                e.setAttribute(
                    l,
                    "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
            } else
                typeof u == 'function' &&
                    (l === 'formAction'
                        ? (t !== 'input' && ae(e, t, 'name', n.name, n, null),
                          ae(e, t, 'formEncType', n.formEncType, n, null),
                          ae(e, t, 'formMethod', n.formMethod, n, null),
                          ae(e, t, 'formTarget', n.formTarget, n, null))
                        : (ae(e, t, 'encType', n.encType, n, null),
                          ae(e, t, 'method', n.method, n, null),
                          ae(e, t, 'target', n.target, n, null)));
            if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
                e.removeAttribute(l);
                break;
            }
            ((a = Xu('' + a)), e.setAttribute(l, a));
            break;
        case 'onClick':
            a != null && (e.onclick = rr);
            break;
        case 'onScroll':
            a != null && k('scroll', e);
            break;
        case 'onScrollEnd':
            a != null && k('scrollend', e);
            break;
        case 'dangerouslySetInnerHTML':
            if (a != null) {
                if (typeof a != 'object' || !('__html' in a)) throw Error(_(61));
                if (((l = a.__html), l != null)) {
                    if (n.children != null) throw Error(_(60));
                    e.innerHTML = l;
                }
            }
            break;
        case 'multiple':
            e.multiple = a && typeof a != 'function' && typeof a != 'symbol';
            break;
        case 'muted':
            e.muted = a && typeof a != 'function' && typeof a != 'symbol';
            break;
        case 'suppressContentEditableWarning':
        case 'suppressHydrationWarning':
        case 'defaultValue':
        case 'defaultChecked':
        case 'innerHTML':
        case 'ref':
            break;
        case 'autoFocus':
            break;
        case 'xlinkHref':
            if (
                a == null ||
                typeof a == 'function' ||
                typeof a == 'boolean' ||
                typeof a == 'symbol'
            ) {
                e.removeAttribute('xlink:href');
                break;
            }
            ((l = Xu('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
            break;
        case 'contentEditable':
        case 'spellCheck':
        case 'draggable':
        case 'value':
        case 'autoReverse':
        case 'externalResourcesRequired':
        case 'focusable':
        case 'preserveAlpha':
            a != null && typeof a != 'function' && typeof a != 'symbol'
                ? e.setAttribute(l, '' + a)
                : e.removeAttribute(l);
            break;
        case 'inert':
        case 'allowFullScreen':
        case 'async':
        case 'autoPlay':
        case 'controls':
        case 'default':
        case 'defer':
        case 'disabled':
        case 'disablePictureInPicture':
        case 'disableRemotePlayback':
        case 'formNoValidate':
        case 'hidden':
        case 'loop':
        case 'noModule':
        case 'noValidate':
        case 'open':
        case 'playsInline':
        case 'readOnly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'itemScope':
            a && typeof a != 'function' && typeof a != 'symbol'
                ? e.setAttribute(l, '')
                : e.removeAttribute(l);
            break;
        case 'capture':
        case 'download':
            a === !0
                ? e.setAttribute(l, '')
                : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
                  ? e.setAttribute(l, a)
                  : e.removeAttribute(l);
            break;
        case 'cols':
        case 'rows':
        case 'size':
        case 'span':
            a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a
                ? e.setAttribute(l, a)
                : e.removeAttribute(l);
            break;
        case 'rowSpan':
        case 'start':
            a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
                ? e.removeAttribute(l)
                : e.setAttribute(l, a);
            break;
        case 'popover':
            (k('beforetoggle', e), k('toggle', e), Gu(e, 'popover', a));
            break;
        case 'xlinkActuate':
            Gt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
            break;
        case 'xlinkArcrole':
            Gt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
            break;
        case 'xlinkRole':
            Gt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
            break;
        case 'xlinkShow':
            Gt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
            break;
        case 'xlinkTitle':
            Gt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
            break;
        case 'xlinkType':
            Gt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
            break;
        case 'xmlBase':
            Gt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
            break;
        case 'xmlLang':
            Gt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
            break;
        case 'xmlSpace':
            Gt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
            break;
        case 'is':
            Gu(e, 'is', a);
            break;
        case 'innerText':
        case 'textContent':
            break;
        default:
            (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
                ((l = q0.get(l) || l), Gu(e, l, a));
    }
}
function $c(e, t, l, a, n, u) {
    switch (l) {
        case 'style':
            Th(e, a, u);
            break;
        case 'dangerouslySetInnerHTML':
            if (a != null) {
                if (typeof a != 'object' || !('__html' in a)) throw Error(_(61));
                if (((l = a.__html), l != null)) {
                    if (n.children != null) throw Error(_(60));
                    e.innerHTML = l;
                }
            }
            break;
        case 'children':
            typeof a == 'string'
                ? qa(e, a)
                : (typeof a == 'number' || typeof a == 'bigint') && qa(e, '' + a);
            break;
        case 'onScroll':
            a != null && k('scroll', e);
            break;
        case 'onScrollEnd':
            a != null && k('scrollend', e);
            break;
        case 'onClick':
            a != null && (e.onclick = rr);
            break;
        case 'suppressContentEditableWarning':
        case 'suppressHydrationWarning':
        case 'innerHTML':
        case 'ref':
            break;
        case 'innerText':
        case 'textContent':
            break;
        default:
            if (!gh.hasOwnProperty(l))
                e: {
                    if (
                        l[0] === 'o' &&
                        l[1] === 'n' &&
                        ((n = l.endsWith('Capture')),
                        (t = l.slice(2, n ? l.length - 7 : void 0)),
                        (u = e[et] || null),
                        (u = u != null ? u[l] : null),
                        typeof u == 'function' && e.removeEventListener(t, u, n),
                        typeof a == 'function')
                    ) {
                        (typeof u != 'function' &&
                            u !== null &&
                            (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                            e.addEventListener(t, a, n));
                        break e;
                    }
                    l in e ? (e[l] = a) : a === !0 ? e.setAttribute(l, '') : Gu(e, l, a);
                }
    }
}
function Ve(e, t, l) {
    switch (t) {
        case 'div':
        case 'span':
        case 'svg':
        case 'path':
        case 'a':
        case 'g':
        case 'p':
        case 'li':
            break;
        case 'img':
            (k('error', e), k('load', e));
            var a = !1,
                n = !1,
                u;
            for (u in l)
                if (l.hasOwnProperty(u)) {
                    var i = l[u];
                    if (i != null)
                        switch (u) {
                            case 'src':
                                a = !0;
                                break;
                            case 'srcSet':
                                n = !0;
                                break;
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                throw Error(_(137, t));
                            default:
                                ae(e, t, u, i, l, null);
                        }
                }
            (n && ae(e, t, 'srcSet', l.srcSet, l, null), a && ae(e, t, 'src', l.src, l, null));
            return;
        case 'input':
            k('invalid', e);
            var r = (u = i = n = null),
                c = null,
                s = null;
            for (a in l)
                if (l.hasOwnProperty(a)) {
                    var f = l[a];
                    if (f != null)
                        switch (a) {
                            case 'name':
                                n = f;
                                break;
                            case 'type':
                                i = f;
                                break;
                            case 'checked':
                                c = f;
                                break;
                            case 'defaultChecked':
                                s = f;
                                break;
                            case 'value':
                                u = f;
                                break;
                            case 'defaultValue':
                                r = f;
                                break;
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (f != null) throw Error(_(137, t));
                                break;
                            default:
                                ae(e, t, a, f, l, null);
                        }
                }
            (Sh(e, u, r, c, s, i, n, !1), oi(e));
            return;
        case 'select':
            (k('invalid', e), (a = i = u = null));
            for (n in l)
                if (l.hasOwnProperty(n) && ((r = l[n]), r != null))
                    switch (n) {
                        case 'value':
                            u = r;
                            break;
                        case 'defaultValue':
                            i = r;
                            break;
                        case 'multiple':
                            a = r;
                        default:
                            ae(e, t, n, r, l, null);
                    }
            ((t = u),
                (l = i),
                (e.multiple = !!a),
                t != null ? Ua(e, !!a, t, !1) : l != null && Ua(e, !!a, l, !0));
            return;
        case 'textarea':
            (k('invalid', e), (u = n = a = null));
            for (i in l)
                if (l.hasOwnProperty(i) && ((r = l[i]), r != null))
                    switch (i) {
                        case 'value':
                            a = r;
                            break;
                        case 'defaultValue':
                            n = r;
                            break;
                        case 'children':
                            u = r;
                            break;
                        case 'dangerouslySetInnerHTML':
                            if (r != null) throw Error(_(91));
                            break;
                        default:
                            ae(e, t, i, r, l, null);
                    }
            (Ah(e, a, n, u), oi(e));
            return;
        case 'option':
            for (c in l)
                if (l.hasOwnProperty(c) && ((a = l[c]), a != null))
                    switch (c) {
                        case 'selected':
                            e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                            break;
                        default:
                            ae(e, t, c, a, l, null);
                    }
            return;
        case 'dialog':
            (k('beforetoggle', e), k('toggle', e), k('cancel', e), k('close', e));
            break;
        case 'iframe':
        case 'object':
            k('load', e);
            break;
        case 'video':
        case 'audio':
            for (a = 0; a < Kn.length; a++) k(Kn[a], e);
            break;
        case 'image':
            (k('error', e), k('load', e));
            break;
        case 'details':
            k('toggle', e);
            break;
        case 'embed':
        case 'source':
        case 'link':
            (k('error', e), k('load', e));
        case 'area':
        case 'base':
        case 'br':
        case 'col':
        case 'hr':
        case 'keygen':
        case 'meta':
        case 'param':
        case 'track':
        case 'wbr':
        case 'menuitem':
            for (s in l)
                if (l.hasOwnProperty(s) && ((a = l[s]), a != null))
                    switch (s) {
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw Error(_(137, t));
                        default:
                            ae(e, t, s, a, l, null);
                    }
            return;
        default:
            if (_s(t)) {
                for (f in l)
                    l.hasOwnProperty(f) && ((a = l[f]), a !== void 0 && $c(e, t, f, a, l, void 0));
                return;
            }
    }
    for (r in l) l.hasOwnProperty(r) && ((a = l[r]), a != null && ae(e, t, r, a, l, null));
}
function fp(e, t, l, a) {
    switch (t) {
        case 'div':
        case 'span':
        case 'svg':
        case 'path':
        case 'a':
        case 'g':
        case 'p':
        case 'li':
            break;
        case 'input':
            var n = null,
                u = null,
                i = null,
                r = null,
                c = null,
                s = null,
                f = null;
            for (v in l) {
                var h = l[v];
                if (l.hasOwnProperty(v) && h != null)
                    switch (v) {
                        case 'checked':
                            break;
                        case 'value':
                            break;
                        case 'defaultValue':
                            c = h;
                        default:
                            a.hasOwnProperty(v) || ae(e, t, v, null, a, h);
                    }
            }
            for (var d in a) {
                var v = a[d];
                if (((h = l[d]), a.hasOwnProperty(d) && (v != null || h != null)))
                    switch (d) {
                        case 'type':
                            u = v;
                            break;
                        case 'name':
                            n = v;
                            break;
                        case 'checked':
                            s = v;
                            break;
                        case 'defaultChecked':
                            f = v;
                            break;
                        case 'value':
                            i = v;
                            break;
                        case 'defaultValue':
                            r = v;
                            break;
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            if (v != null) throw Error(_(137, t));
                            break;
                        default:
                            v !== h && ae(e, t, d, v, a, h);
                    }
            }
            Sc(e, i, r, c, s, f, u, n);
            return;
        case 'select':
            v = i = r = d = null;
            for (u in l)
                if (((c = l[u]), l.hasOwnProperty(u) && c != null))
                    switch (u) {
                        case 'value':
                            break;
                        case 'multiple':
                            v = c;
                        default:
                            a.hasOwnProperty(u) || ae(e, t, u, null, a, c);
                    }
            for (n in a)
                if (((u = a[n]), (c = l[n]), a.hasOwnProperty(n) && (u != null || c != null)))
                    switch (n) {
                        case 'value':
                            d = u;
                            break;
                        case 'defaultValue':
                            r = u;
                            break;
                        case 'multiple':
                            i = u;
                        default:
                            u !== c && ae(e, t, n, u, a, c);
                    }
            ((t = r),
                (l = i),
                (a = v),
                d != null
                    ? Ua(e, !!l, d, !1)
                    : !!a != !!l && (t != null ? Ua(e, !!l, t, !0) : Ua(e, !!l, l ? [] : '', !1)));
            return;
        case 'textarea':
            v = d = null;
            for (r in l)
                if (((n = l[r]), l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r)))
                    switch (r) {
                        case 'value':
                            break;
                        case 'children':
                            break;
                        default:
                            ae(e, t, r, null, a, n);
                    }
            for (i in a)
                if (((n = a[i]), (u = l[i]), a.hasOwnProperty(i) && (n != null || u != null)))
                    switch (i) {
                        case 'value':
                            d = n;
                            break;
                        case 'defaultValue':
                            v = n;
                            break;
                        case 'children':
                            break;
                        case 'dangerouslySetInnerHTML':
                            if (n != null) throw Error(_(91));
                            break;
                        default:
                            n !== u && ae(e, t, i, n, a, u);
                    }
            Eh(e, d, v);
            return;
        case 'option':
            for (var b in l)
                if (((d = l[b]), l.hasOwnProperty(b) && d != null && !a.hasOwnProperty(b)))
                    switch (b) {
                        case 'selected':
                            e.selected = !1;
                            break;
                        default:
                            ae(e, t, b, null, a, d);
                    }
            for (c in a)
                if (
                    ((d = a[c]),
                    (v = l[c]),
                    a.hasOwnProperty(c) && d !== v && (d != null || v != null))
                )
                    switch (c) {
                        case 'selected':
                            e.selected = d && typeof d != 'function' && typeof d != 'symbol';
                            break;
                        default:
                            ae(e, t, c, d, a, v);
                    }
            return;
        case 'img':
        case 'link':
        case 'area':
        case 'base':
        case 'br':
        case 'col':
        case 'embed':
        case 'hr':
        case 'keygen':
        case 'meta':
        case 'param':
        case 'source':
        case 'track':
        case 'wbr':
        case 'menuitem':
            for (var S in l)
                ((d = l[S]),
                    l.hasOwnProperty(S) &&
                        d != null &&
                        !a.hasOwnProperty(S) &&
                        ae(e, t, S, null, a, d));
            for (s in a)
                if (
                    ((d = a[s]),
                    (v = l[s]),
                    a.hasOwnProperty(s) && d !== v && (d != null || v != null))
                )
                    switch (s) {
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            if (d != null) throw Error(_(137, t));
                            break;
                        default:
                            ae(e, t, s, d, a, v);
                    }
            return;
        default:
            if (_s(t)) {
                for (var A in l)
                    ((d = l[A]),
                        l.hasOwnProperty(A) &&
                            d !== void 0 &&
                            !a.hasOwnProperty(A) &&
                            $c(e, t, A, void 0, a, d));
                for (f in a)
                    ((d = a[f]),
                        (v = l[f]),
                        !a.hasOwnProperty(f) ||
                            d === v ||
                            (d === void 0 && v === void 0) ||
                            $c(e, t, f, d, a, v));
                return;
            }
    }
    for (var m in l)
        ((d = l[m]),
            l.hasOwnProperty(m) && d != null && !a.hasOwnProperty(m) && ae(e, t, m, null, a, d));
    for (h in a)
        ((d = a[h]),
            (v = l[h]),
            !a.hasOwnProperty(h) || d === v || (d == null && v == null) || ae(e, t, h, d, a, v));
}
var Wc = null,
    Pc = null;
function Mi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
}
function Fo(e) {
    switch (e) {
        case 'http://www.w3.org/2000/svg':
            return 1;
        case 'http://www.w3.org/1998/Math/MathML':
            return 2;
        default:
            return 0;
    }
}
function Ry(e, t) {
    if (e === 0)
        switch (t) {
            case 'svg':
                return 1;
            case 'math':
                return 2;
            default:
                return 0;
        }
    return e === 1 && t === 'foreignObject' ? 0 : e;
}
function Ic(e, t) {
    return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        typeof t.children == 'bigint' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var nc = null;
function op() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === nc ? !1 : ((nc = e), !0)) : ((nc = null), !1);
}
var Oy = typeof setTimeout == 'function' ? setTimeout : void 0,
    dp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    $o = typeof Promise == 'function' ? Promise : void 0,
    hp =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof $o < 'u'
              ? function (e) {
                    return $o.resolve(null).then(e).catch(mp);
                }
              : Oy;
function mp(e) {
    setTimeout(function () {
        throw e;
    });
}
function wl(e) {
    return e === 'head';
}
function Wo(e, t) {
    var l = t,
        a = 0,
        n = 0;
    do {
        var u = l.nextSibling;
        if ((e.removeChild(l), u && u.nodeType === 8))
            if (((l = u.data), l === '/$')) {
                if (0 < a && 8 > a) {
                    l = a;
                    var i = e.ownerDocument;
                    if ((l & 1 && jn(i.documentElement), l & 2 && jn(i.body), l & 4))
                        for (l = i.head, jn(l), i = l.firstChild; i; ) {
                            var r = i.nextSibling,
                                c = i.nodeName;
                            (i[uu] ||
                                c === 'SCRIPT' ||
                                c === 'STYLE' ||
                                (c === 'LINK' && i.rel.toLowerCase() === 'stylesheet') ||
                                l.removeChild(i),
                                (i = r));
                        }
                }
                if (n === 0) {
                    (e.removeChild(u), Pn(t));
                    return;
                }
                n--;
            } else l === '$' || l === '$?' || l === '$!' ? n++ : (a = l.charCodeAt(0) - 48);
        else a = 0;
        l = u;
    } while (l);
    Pn(t);
}
function es(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var l = t;
        switch (((t = t.nextSibling), l.nodeName)) {
            case 'HTML':
            case 'HEAD':
            case 'BODY':
                (es(l), xs(l));
                continue;
            case 'SCRIPT':
            case 'STYLE':
                continue;
            case 'LINK':
                if (l.rel.toLowerCase() === 'stylesheet') continue;
        }
        e.removeChild(l);
    }
}
function yp(e, t, l, a) {
    for (; e.nodeType === 1; ) {
        var n = l;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
            if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
        } else if (a) {
            if (!e[uu])
                switch (t) {
                    case 'meta':
                        if (!e.hasAttribute('itemprop')) break;
                        return e;
                    case 'link':
                        if (
                            ((u = e.getAttribute('rel')),
                            u === 'stylesheet' && e.hasAttribute('data-precedence'))
                        )
                            break;
                        if (
                            u !== n.rel ||
                            e.getAttribute('href') !==
                                (n.href == null || n.href === '' ? null : n.href) ||
                            e.getAttribute('crossorigin') !==
                                (n.crossOrigin == null ? null : n.crossOrigin) ||
                            e.getAttribute('title') !== (n.title == null ? null : n.title)
                        )
                            break;
                        return e;
                    case 'style':
                        if (e.hasAttribute('data-precedence')) break;
                        return e;
                    case 'script':
                        if (
                            ((u = e.getAttribute('src')),
                            (u !== (n.src == null ? null : n.src) ||
                                e.getAttribute('type') !== (n.type == null ? null : n.type) ||
                                e.getAttribute('crossorigin') !==
                                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                                u &&
                                e.hasAttribute('async') &&
                                !e.hasAttribute('itemprop'))
                        )
                            break;
                        return e;
                    default:
                        return e;
                }
        } else if (t === 'input' && e.type === 'hidden') {
            var u = n.name == null ? null : '' + n.name;
            if (n.type === 'hidden' && e.getAttribute('name') === u) return e;
        } else return e;
        if (((e = Rt(e.nextSibling)), e === null)) break;
    }
    return null;
}
function vp(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
        if (
            ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) ||
            ((e = Rt(e.nextSibling)), e === null)
        )
            return null;
    return e;
}
function ts(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete');
}
function gp(e, t) {
    var l = e.ownerDocument;
    if (e.data !== '$?' || l.readyState === 'complete') t();
    else {
        var a = function () {
            (t(), l.removeEventListener('DOMContentLoaded', a));
        };
        (l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a));
    }
}
function Rt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F'))
                break;
            if (t === '/$') return null;
        }
    }
    return e;
}
var ls = null;
function Po(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var l = e.data;
            if (l === '$' || l === '$!' || l === '$?') {
                if (t === 0) return e;
                t--;
            } else l === '/$' && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
function xy(e, t, l) {
    switch (((t = Mi(l)), e)) {
        case 'html':
            if (((e = t.documentElement), !e)) throw Error(_(452));
            return e;
        case 'head':
            if (((e = t.head), !e)) throw Error(_(453));
            return e;
        case 'body':
            if (((e = t.body), !e)) throw Error(_(454));
            return e;
        default:
            throw Error(_(451));
    }
}
function jn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    xs(e);
}
var St = new Map(),
    Io = new Set();
function zi(e) {
    return typeof e.getRootNode == 'function'
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
}
var il = P.d;
P.d = { f: pp, r: bp, D: Sp, C: Ep, L: Ap, m: Tp, X: Op, S: Rp, M: xp };
function pp() {
    var e = il.f(),
        t = nr();
    return e || t;
}
function bp(e) {
    var t = $a(e);
    t !== null && t.tag === 5 && t.type === 'form' ? bm(t) : il.r(e);
}
var Ia = typeof document > 'u' ? null : document;
function _y(e, t, l) {
    var a = Ia;
    if (a && typeof t == 'string' && t) {
        var n = vt(t);
        ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
            typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
            Io.has(n) ||
                (Io.add(n),
                (e = { rel: e, crossOrigin: l, href: t }),
                a.querySelector(n) === null &&
                    ((t = a.createElement('link')),
                    Ve(t, 'link', e),
                    Be(t),
                    a.head.appendChild(t))));
    }
}
function Sp(e) {
    (il.D(e), _y('dns-prefetch', e, null));
}
function Ep(e, t) {
    (il.C(e, t), _y('preconnect', e, t));
}
function Ap(e, t, l) {
    il.L(e, t, l);
    var a = Ia;
    if (a && e && t) {
        var n = 'link[rel="preload"][as="' + vt(t) + '"]';
        t === 'image' && l && l.imageSrcSet
            ? ((n += '[imagesrcset="' + vt(l.imageSrcSet) + '"]'),
              typeof l.imageSizes == 'string' && (n += '[imagesizes="' + vt(l.imageSizes) + '"]'))
            : (n += '[href="' + vt(e) + '"]');
        var u = n;
        switch (t) {
            case 'style':
                u = ka(e);
                break;
            case 'script':
                u = en(e);
        }
        St.has(u) ||
            ((e = fe(
                { rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t },
                l
            )),
            St.set(u, e),
            a.querySelector(n) !== null ||
                (t === 'style' && a.querySelector(yu(u))) ||
                (t === 'script' && a.querySelector(vu(u))) ||
                ((t = a.createElement('link')), Ve(t, 'link', e), Be(t), a.head.appendChild(t)));
    }
}
function Tp(e, t) {
    il.m(e, t);
    var l = Ia;
    if (l && e) {
        var a = t && typeof t.as == 'string' ? t.as : 'script',
            n = 'link[rel="modulepreload"][as="' + vt(a) + '"][href="' + vt(e) + '"]',
            u = n;
        switch (a) {
            case 'audioworklet':
            case 'paintworklet':
            case 'serviceworker':
            case 'sharedworker':
            case 'worker':
            case 'script':
                u = en(e);
        }
        if (
            !St.has(u) &&
            ((e = fe({ rel: 'modulepreload', href: e }, t)),
            St.set(u, e),
            l.querySelector(n) === null)
        ) {
            switch (a) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                    if (l.querySelector(vu(u))) return;
            }
            ((a = l.createElement('link')), Ve(a, 'link', e), Be(a), l.head.appendChild(a));
        }
    }
}
function Rp(e, t, l) {
    il.S(e, t, l);
    var a = Ia;
    if (a && e) {
        var n = Na(a).hoistableStyles,
            u = ka(e);
        t = t || 'default';
        var i = n.get(u);
        if (!i) {
            var r = { loading: 0, preload: null };
            if ((i = a.querySelector(yu(u)))) r.loading = 5;
            else {
                ((e = fe({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
                    (l = St.get(u)) && ff(e, l));
                var c = (i = a.createElement('link'));
                (Be(c),
                    Ve(c, 'link', e),
                    (c._p = new Promise(function (s, f) {
                        ((c.onload = s), (c.onerror = f));
                    })),
                    c.addEventListener('load', function () {
                        r.loading |= 1;
                    }),
                    c.addEventListener('error', function () {
                        r.loading |= 2;
                    }),
                    (r.loading |= 4),
                    Pu(i, t, a));
            }
            ((i = { type: 'stylesheet', instance: i, count: 1, state: r }), n.set(u, i));
        }
    }
}
function Op(e, t) {
    il.X(e, t);
    var l = Ia;
    if (l && e) {
        var a = Na(l).hoistableScripts,
            n = en(e),
            u = a.get(n);
        u ||
            ((u = l.querySelector(vu(n))),
            u ||
                ((e = fe({ src: e, async: !0 }, t)),
                (t = St.get(n)) && of(e, t),
                (u = l.createElement('script')),
                Be(u),
                Ve(u, 'link', e),
                l.head.appendChild(u)),
            (u = { type: 'script', instance: u, count: 1, state: null }),
            a.set(n, u));
    }
}
function xp(e, t) {
    il.M(e, t);
    var l = Ia;
    if (l && e) {
        var a = Na(l).hoistableScripts,
            n = en(e),
            u = a.get(n);
        u ||
            ((u = l.querySelector(vu(n))),
            u ||
                ((e = fe({ src: e, async: !0, type: 'module' }, t)),
                (t = St.get(n)) && of(e, t),
                (u = l.createElement('script')),
                Be(u),
                Ve(u, 'link', e),
                l.head.appendChild(u)),
            (u = { type: 'script', instance: u, count: 1, state: null }),
            a.set(n, u));
    }
}
function ed(e, t, l, a) {
    var n = (n = Al.current) ? zi(n) : null;
    if (!n) throw Error(_(446));
    switch (e) {
        case 'meta':
        case 'title':
            return null;
        case 'style':
            return typeof l.precedence == 'string' && typeof l.href == 'string'
                ? ((t = ka(l.href)),
                  (l = Na(n).hoistableStyles),
                  (a = l.get(t)),
                  a ||
                      ((a = { type: 'style', instance: null, count: 0, state: null }), l.set(t, a)),
                  a)
                : { type: 'void', instance: null, count: 0, state: null };
        case 'link':
            if (
                l.rel === 'stylesheet' &&
                typeof l.href == 'string' &&
                typeof l.precedence == 'string'
            ) {
                e = ka(l.href);
                var u = Na(n).hoistableStyles,
                    i = u.get(e);
                if (
                    (i ||
                        ((n = n.ownerDocument || n),
                        (i = {
                            type: 'stylesheet',
                            instance: null,
                            count: 0,
                            state: { loading: 0, preload: null },
                        }),
                        u.set(e, i),
                        (u = n.querySelector(yu(e))) &&
                            !u._p &&
                            ((i.instance = u), (i.state.loading = 5)),
                        St.has(e) ||
                            ((l = {
                                rel: 'preload',
                                as: 'style',
                                href: l.href,
                                crossOrigin: l.crossOrigin,
                                integrity: l.integrity,
                                media: l.media,
                                hrefLang: l.hrefLang,
                                referrerPolicy: l.referrerPolicy,
                            }),
                            St.set(e, l),
                            u || _p(n, e, l, i.state))),
                    t && a === null)
                )
                    throw Error(_(528, ''));
                return i;
            }
            if (t && a !== null) throw Error(_(529, ''));
            return null;
        case 'script':
            return (
                (t = l.async),
                (l = l.src),
                typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
                    ? ((t = en(l)),
                      (l = Na(n).hoistableScripts),
                      (a = l.get(t)),
                      a ||
                          ((a = { type: 'script', instance: null, count: 0, state: null }),
                          l.set(t, a)),
                      a)
                    : { type: 'void', instance: null, count: 0, state: null }
            );
        default:
            throw Error(_(444, e));
    }
}
function ka(e) {
    return 'href="' + vt(e) + '"';
}
function yu(e) {
    return 'link[rel="stylesheet"][' + e + ']';
}
function Dy(e) {
    return fe({}, e, { 'data-precedence': e.precedence, precedence: null });
}
function _p(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
        ? (a.loading = 1)
        : ((t = e.createElement('link')),
          (a.preload = t),
          t.addEventListener('load', function () {
              return (a.loading |= 1);
          }),
          t.addEventListener('error', function () {
              return (a.loading |= 2);
          }),
          Ve(t, 'link', l),
          Be(t),
          e.head.appendChild(t));
}
function en(e) {
    return '[src="' + vt(e) + '"]';
}
function vu(e) {
    return 'script[async]' + e;
}
function td(e, t, l) {
    if ((t.count++, t.instance === null))
        switch (t.type) {
            case 'style':
                var a = e.querySelector('style[data-href~="' + vt(l.href) + '"]');
                if (a) return ((t.instance = a), Be(a), a);
                var n = fe({}, l, {
                    'data-href': l.href,
                    'data-precedence': l.precedence,
                    href: null,
                    precedence: null,
                });
                return (
                    (a = (e.ownerDocument || e).createElement('style')),
                    Be(a),
                    Ve(a, 'style', n),
                    Pu(a, l.precedence, e),
                    (t.instance = a)
                );
            case 'stylesheet':
                n = ka(l.href);
                var u = e.querySelector(yu(n));
                if (u) return ((t.state.loading |= 4), (t.instance = u), Be(u), u);
                ((a = Dy(l)),
                    (n = St.get(n)) && ff(a, n),
                    (u = (e.ownerDocument || e).createElement('link')),
                    Be(u));
                var i = u;
                return (
                    (i._p = new Promise(function (r, c) {
                        ((i.onload = r), (i.onerror = c));
                    })),
                    Ve(u, 'link', a),
                    (t.state.loading |= 4),
                    Pu(u, l.precedence, e),
                    (t.instance = u)
                );
            case 'script':
                return (
                    (u = en(l.src)),
                    (n = e.querySelector(vu(u)))
                        ? ((t.instance = n), Be(n), n)
                        : ((a = l),
                          (n = St.get(u)) && ((a = fe({}, l)), of(a, n)),
                          (e = e.ownerDocument || e),
                          (n = e.createElement('script')),
                          Be(n),
                          Ve(n, 'link', a),
                          e.head.appendChild(n),
                          (t.instance = n))
                );
            case 'void':
                return null;
            default:
                throw Error(_(443, t.type));
        }
    else
        t.type === 'stylesheet' &&
            !(t.state.loading & 4) &&
            ((a = t.instance), (t.state.loading |= 4), Pu(a, l.precedence, e));
    return t.instance;
}
function Pu(e, t, l) {
    for (
        var a = l.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
            ),
            n = a.length ? a[a.length - 1] : null,
            u = n,
            i = 0;
        i < a.length;
        i++
    ) {
        var r = a[i];
        if (r.dataset.precedence === t) u = r;
        else if (u !== n) break;
    }
    u
        ? u.parentNode.insertBefore(e, u.nextSibling)
        : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
}
function ff(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title));
}
function of(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity));
}
var Iu = null;
function ld(e, t, l) {
    if (Iu === null) {
        var a = new Map(),
            n = (Iu = new Map());
        n.set(l, a);
    } else ((n = Iu), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
        var u = l[n];
        if (
            !(u[uu] || u[Ge] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
            u.namespaceURI !== 'http://www.w3.org/2000/svg'
        ) {
            var i = u.getAttribute(t) || '';
            i = e + i;
            var r = a.get(i);
            r ? r.push(u) : a.set(i, [u]);
        }
    }
    return a;
}
function ad(e, t, l) {
    ((e = e.ownerDocument || e),
        e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null));
}
function Dp(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
        case 'meta':
        case 'title':
            return !0;
        case 'style':
            if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '')
                break;
            return !0;
        case 'link':
            if (
                typeof t.rel != 'string' ||
                typeof t.href != 'string' ||
                t.href === '' ||
                t.onLoad ||
                t.onError
            )
                break;
            switch (t.rel) {
                case 'stylesheet':
                    return ((e = t.disabled), typeof t.precedence == 'string' && e == null);
                default:
                    return !0;
            }
        case 'script':
            if (
                t.async &&
                typeof t.async != 'function' &&
                typeof t.async != 'symbol' &&
                !t.onLoad &&
                !t.onError &&
                t.src &&
                typeof t.src == 'string'
            )
                return !0;
    }
    return !1;
}
function Ny(e) {
    return !(e.type === 'stylesheet' && !(e.state.loading & 3));
}
var Jn = null;
function Np() {}
function Up(e, t, l) {
    if (Jn === null) throw Error(_(475));
    var a = Jn;
    if (
        t.type === 'stylesheet' &&
        (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
        !(t.state.loading & 4)
    ) {
        if (t.instance === null) {
            var n = ka(l.href),
                u = e.querySelector(yu(n));
            if (u) {
                ((e = u._p),
                    e !== null &&
                        typeof e == 'object' &&
                        typeof e.then == 'function' &&
                        (a.count++, (a = Ci.bind(a)), e.then(a, a)),
                    (t.state.loading |= 4),
                    (t.instance = u),
                    Be(u));
                return;
            }
            ((u = e.ownerDocument || e),
                (l = Dy(l)),
                (n = St.get(n)) && ff(l, n),
                (u = u.createElement('link')),
                Be(u));
            var i = u;
            ((i._p = new Promise(function (r, c) {
                ((i.onload = r), (i.onerror = c));
            })),
                Ve(u, 'link', l),
                (t.instance = u));
        }
        (a.stylesheets === null && (a.stylesheets = new Map()),
            a.stylesheets.set(t, e),
            (e = t.state.preload) &&
                !(t.state.loading & 3) &&
                (a.count++,
                (t = Ci.bind(a)),
                e.addEventListener('load', t),
                e.addEventListener('error', t)));
    }
}
function Mp() {
    if (Jn === null) throw Error(_(475));
    var e = Jn;
    return (
        e.stylesheets && e.count === 0 && as(e, e.stylesheets),
        0 < e.count
            ? function (t) {
                  var l = setTimeout(function () {
                      if ((e.stylesheets && as(e, e.stylesheets), e.unsuspend)) {
                          var a = e.unsuspend;
                          ((e.unsuspend = null), a());
                      }
                  }, 6e4);
                  return (
                      (e.unsuspend = t),
                      function () {
                          ((e.unsuspend = null), clearTimeout(l));
                      }
                  );
              }
            : null
    );
}
function Ci() {
    if ((this.count--, this.count === 0)) {
        if (this.stylesheets) as(this, this.stylesheets);
        else if (this.unsuspend) {
            var e = this.unsuspend;
            ((this.unsuspend = null), e());
        }
    }
}
var wi = null;
function as(e, t) {
    ((e.stylesheets = null),
        e.unsuspend !== null &&
            (e.count++, (wi = new Map()), t.forEach(zp, e), (wi = null), Ci.call(e)));
}
function zp(e, t) {
    if (!(t.state.loading & 4)) {
        var l = wi.get(e);
        if (l) var a = l.get(null);
        else {
            ((l = new Map()), wi.set(e, l));
            for (
                var n = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
                u < n.length;
                u++
            ) {
                var i = n[u];
                (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
                    (l.set(i.dataset.precedence, i), (a = i));
            }
            a && l.set(null, a);
        }
        ((n = t.instance),
            (i = n.getAttribute('data-precedence')),
            (u = l.get(i) || a),
            u === a && l.set(null, n),
            l.set(i, n),
            this.count++,
            (a = Ci.bind(this)),
            n.addEventListener('load', a),
            n.addEventListener('error', a),
            u
                ? u.parentNode.insertBefore(n, u.nextSibling)
                : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(n, e.firstChild)),
            (t.state.loading |= 4));
    }
}
var Fn = {
    $$typeof: kt,
    Provider: null,
    Consumer: null,
    _currentValue: Xl,
    _currentValue2: Xl,
    _threadCount: 0,
};
function Cp(e, t, l, a, n, u, i, r) {
    ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
            this.next =
            this.pendingContext =
            this.context =
            this.cancelPendingCommit =
                null),
        (this.callbackPriority = 0),
        (this.expirationTimes = xr(-1)),
        (this.entangledLanes =
            this.shellSuspendCounter =
            this.errorRecoveryDisabledLanes =
            this.expiredLanes =
            this.warmLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = xr(0)),
        (this.hiddenUpdates = xr(null)),
        (this.identifierPrefix = a),
        (this.onUncaughtError = n),
        (this.onCaughtError = u),
        (this.onRecoverableError = i),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = r),
        (this.incompleteTransitions = new Map()));
}
function Uy(e, t, l, a, n, u, i, r, c, s, f, h) {
    return (
        (e = new Cp(e, t, l, i, r, c, s, h)),
        (t = 1),
        u === !0 && (t |= 24),
        (u = ut(3, null, null, t)),
        (e.current = u),
        (u.stateNode = e),
        (t = Ls()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
        Vs(u),
        e
    );
}
function My(e) {
    return e ? ((e = Oa), e) : Oa;
}
function zy(e, t, l, a, n, u) {
    ((n = My(n)),
        a.context === null ? (a.context = n) : (a.pendingContext = n),
        (a = Tl(t)),
        (a.payload = { element: l }),
        (u = u === void 0 ? null : u),
        u !== null && (a.callback = u),
        (l = Rl(e, a, t)),
        l !== null && (st(l, e, t), Dn(l, e, t)));
}
function nd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var l = e.retryLane;
        e.retryLane = l !== 0 && l < t ? l : t;
    }
}
function df(e, t) {
    (nd(e, t), (e = e.alternate) && nd(e, t));
}
function Cy(e) {
    if (e.tag === 13) {
        var t = Wa(e, 67108864);
        (t !== null && st(t, e, 67108864), df(e, 67108864));
    }
}
var Bi = !0;
function wp(e, t, l, a) {
    var n = Y.T;
    Y.T = null;
    var u = P.p;
    try {
        ((P.p = 2), hf(e, t, l, a));
    } finally {
        ((P.p = u), (Y.T = n));
    }
}
function Bp(e, t, l, a) {
    var n = Y.T;
    Y.T = null;
    var u = P.p;
    try {
        ((P.p = 8), hf(e, t, l, a));
    } finally {
        ((P.p = u), (Y.T = n));
    }
}
function hf(e, t, l, a) {
    if (Bi) {
        var n = ns(a);
        if (n === null) (ac(e, t, a, ji, l), ud(e, a));
        else if (Hp(n, e, t, l, a)) a.stopPropagation();
        else if ((ud(e, a), t & 4 && -1 < jp.indexOf(e))) {
            for (; n !== null; ) {
                var u = $a(n);
                if (u !== null)
                    switch (u.tag) {
                        case 3:
                            if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                                var i = Ll(u.pendingLanes);
                                if (i !== 0) {
                                    var r = u;
                                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; i; ) {
                                        var c = 1 << (31 - rt(i));
                                        ((r.entanglements[1] |= c), (i &= ~c));
                                    }
                                    (Lt(u), !(te & 6) && ((xi = wt() + 500), mu(0)));
                                }
                            }
                            break;
                        case 13:
                            ((r = Wa(u, 2)), r !== null && st(r, u, 2), nr(), df(u, 2));
                    }
                if (((u = ns(a)), u === null && ac(e, t, a, ji, l), u === n)) break;
                n = u;
            }
            n !== null && a.stopPropagation();
        } else ac(e, t, a, null, l);
    }
}
function ns(e) {
    return ((e = Ds(e)), mf(e));
}
var ji = null;
function mf(e) {
    if (((ji = null), (e = ba(e)), e !== null)) {
        var t = tu(e);
        if (t === null) e = null;
        else {
            var l = t.tag;
            if (l === 13) {
                if (((e = nh(t)), e !== null)) return e;
                e = null;
            } else if (l === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
        }
    }
    return ((ji = e), null);
}
function wy(e) {
    switch (e) {
        case 'beforetoggle':
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'toggle':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 2;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 8;
        case 'message':
            switch (E0()) {
                case ch:
                    return 2;
                case sh:
                    return 8;
                case fi:
                case A0:
                    return 32;
                case fh:
                    return 268435456;
                default:
                    return 32;
            }
        default:
            return 32;
    }
}
var us = !1,
    _l = null,
    Dl = null,
    Nl = null,
    $n = new Map(),
    Wn = new Map(),
    vl = [],
    jp =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
            ' '
        );
function ud(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            _l = null;
            break;
        case 'dragenter':
        case 'dragleave':
            Dl = null;
            break;
        case 'mouseover':
        case 'mouseout':
            Nl = null;
            break;
        case 'pointerover':
        case 'pointerout':
            $n.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            Wn.delete(t.pointerId);
    }
}
function hn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
        ? ((e = {
              blockedOn: t,
              domEventName: l,
              eventSystemFlags: a,
              nativeEvent: u,
              targetContainers: [n],
          }),
          t !== null && ((t = $a(t)), t !== null && Cy(t)),
          e)
        : ((e.eventSystemFlags |= a),
          (t = e.targetContainers),
          n !== null && t.indexOf(n) === -1 && t.push(n),
          e);
}
function Hp(e, t, l, a, n) {
    switch (t) {
        case 'focusin':
            return ((_l = hn(_l, e, t, l, a, n)), !0);
        case 'dragenter':
            return ((Dl = hn(Dl, e, t, l, a, n)), !0);
        case 'mouseover':
            return ((Nl = hn(Nl, e, t, l, a, n)), !0);
        case 'pointerover':
            var u = n.pointerId;
            return ($n.set(u, hn($n.get(u) || null, e, t, l, a, n)), !0);
        case 'gotpointercapture':
            return ((u = n.pointerId), Wn.set(u, hn(Wn.get(u) || null, e, t, l, a, n)), !0);
    }
    return !1;
}
function By(e) {
    var t = ba(e.target);
    if (t !== null) {
        var l = tu(t);
        if (l !== null) {
            if (((t = l.tag), t === 13)) {
                if (((t = nh(l)), t !== null)) {
                    ((e.blockedOn = t),
                        U0(e.priority, function () {
                            if (l.tag === 13) {
                                var a = ct();
                                a = Rs(a);
                                var n = Wa(l, a);
                                (n !== null && st(n, l, a), df(l, a));
                            }
                        }));
                    return;
                }
            } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function ei(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var l = ns(e.nativeEvent);
        if (l === null) {
            l = e.nativeEvent;
            var a = new l.constructor(l.type, l);
            ((Ac = a), l.target.dispatchEvent(a), (Ac = null));
        } else return ((t = $a(l)), t !== null && Cy(t), (e.blockedOn = l), !1);
        t.shift();
    }
    return !0;
}
function id(e, t, l) {
    ei(e) && l.delete(t);
}
function Lp() {
    ((us = !1),
        _l !== null && ei(_l) && (_l = null),
        Dl !== null && ei(Dl) && (Dl = null),
        Nl !== null && ei(Nl) && (Nl = null),
        $n.forEach(id),
        Wn.forEach(id));
}
function Lu(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        us || ((us = !0), ze.unstable_scheduleCallback(ze.unstable_NormalPriority, Lp)));
}
var qu = null;
function rd(e) {
    qu !== e &&
        ((qu = e),
        ze.unstable_scheduleCallback(ze.unstable_NormalPriority, function () {
            qu === e && (qu = null);
            for (var t = 0; t < e.length; t += 3) {
                var l = e[t],
                    a = e[t + 1],
                    n = e[t + 2];
                if (typeof a != 'function') {
                    if (mf(a || l) === null) continue;
                    break;
                }
                var u = $a(l);
                u !== null &&
                    (e.splice(t, 3),
                    (t -= 3),
                    Lc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
            }
        }));
}
function Pn(e) {
    function t(c) {
        return Lu(c, e);
    }
    (_l !== null && Lu(_l, e),
        Dl !== null && Lu(Dl, e),
        Nl !== null && Lu(Nl, e),
        $n.forEach(t),
        Wn.forEach(t));
    for (var l = 0; l < vl.length; l++) {
        var a = vl[l];
        a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < vl.length && ((l = vl[0]), l.blockedOn === null); )
        (By(l), l.blockedOn === null && vl.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
        for (a = 0; a < l.length; a += 3) {
            var n = l[a],
                u = l[a + 1],
                i = n[et] || null;
            if (typeof u == 'function') i || rd(l);
            else if (i) {
                var r = null;
                if (u && u.hasAttribute('formAction')) {
                    if (((n = u), (i = u[et] || null))) r = i.formAction;
                    else if (mf(n) !== null) continue;
                } else r = i.action;
                (typeof r == 'function' ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)), rd(l));
            }
        }
}
function yf(e) {
    this._internalRoot = e;
}
cr.prototype.render = yf.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(_(409));
    var l = t.current,
        a = ct();
    zy(l, a, e, t, null, null);
};
cr.prototype.unmount = yf.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (zy(e.current, 2, null, e, null, null), nr(), (t[Fa] = null));
    }
};
function cr(e) {
    this._internalRoot = e;
}
cr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = yh();
        e = { blockedOn: null, target: e, priority: t };
        for (var l = 0; l < vl.length && t !== 0 && t < vl[l].priority; l++);
        (vl.splice(l, 0, e), l === 0 && By(e));
    }
};
var cd = lh.version;
if (cd !== '19.1.1') throw Error(_(527, cd, '19.1.1'));
P.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == 'function'
            ? Error(_(188))
            : ((e = Object.keys(e).join(',')), Error(_(268, e)));
    return ((e = m0(t)), (e = e !== null ? uh(e) : null), (e = e === null ? null : e.stateNode), e);
};
var qp = {
    bundleType: 0,
    version: '19.1.1',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: Y,
    reconcilerVersion: '19.1.1',
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Vu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vu.isDisabled && Vu.supportsFiber)
        try {
            ((lu = Vu.inject(qp)), (it = Vu));
        } catch {}
}
Ki.createRoot = function (e, t) {
    if (!ah(e)) throw Error(_(299));
    var l = !1,
        a = '',
        n = Um,
        u = Mm,
        i = zm,
        r = null;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (l = !0),
            t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
            t.onCaughtError !== void 0 && (u = t.onCaughtError),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
            t.unstable_transitionCallbacks !== void 0 && (r = t.unstable_transitionCallbacks)),
        (t = Uy(e, 1, !1, null, null, l, a, n, u, i, r, null)),
        (e[Fa] = t.current),
        sf(e),
        new yf(t)
    );
};
Ki.hydrateRoot = function (e, t, l) {
    if (!ah(e)) throw Error(_(299));
    var a = !1,
        n = '',
        u = Um,
        i = Mm,
        r = zm,
        c = null,
        s = null;
    return (
        l != null &&
            (l.unstable_strictMode === !0 && (a = !0),
            l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
            l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
            l.onCaughtError !== void 0 && (i = l.onCaughtError),
            l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
            l.unstable_transitionCallbacks !== void 0 && (c = l.unstable_transitionCallbacks),
            l.formState !== void 0 && (s = l.formState)),
        (t = Uy(e, 1, !0, t, l ?? null, a, n, u, i, r, c, s)),
        (t.context = My(null)),
        (l = t.current),
        (a = ct()),
        (a = Rs(a)),
        (n = Tl(a)),
        (n.callback = null),
        Rl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        nu(t, l),
        Lt(t),
        (e[Fa] = t.current),
        sf(e),
        new cr(t)
    );
};
Ki.version = '19.1.1';
function jy() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jy);
        } catch (e) {
            console.error(e);
        }
}
(jy(), ($d.exports = Ki));
var Vp = $d.exports;
/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var sd = 'popstate';
function Yp(e = {}) {
    function t(a, n) {
        let { pathname: u, search: i, hash: r } = a.location;
        return is(
            '',
            { pathname: u, search: i, hash: r },
            (n.state && n.state.usr) || null,
            (n.state && n.state.key) || 'default'
        );
    }
    function l(a, n) {
        return typeof n == 'string' ? n : In(n);
    }
    return Xp(t, l, null, e);
}
function pe(e, t) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function jt(e, t) {
    if (!e) {
        typeof console < 'u' && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function Gp() {
    return Math.random().toString(36).substring(2, 10);
}
function fd(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function is(e, t, l = null, a) {
    return {
        pathname: typeof e == 'string' ? e : e.pathname,
        search: '',
        hash: '',
        ...(typeof t == 'string' ? tn(t) : t),
        state: l,
        key: (t && t.key) || a || Gp(),
    };
}
function In({ pathname: e = '/', search: t = '', hash: l = '' }) {
    return (
        t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
        l && l !== '#' && (e += l.charAt(0) === '#' ? l : '#' + l),
        e
    );
}
function tn(e) {
    let t = {};
    if (e) {
        let l = e.indexOf('#');
        l >= 0 && ((t.hash = e.substring(l)), (e = e.substring(0, l)));
        let a = e.indexOf('?');
        (a >= 0 && ((t.search = e.substring(a)), (e = e.substring(0, a))), e && (t.pathname = e));
    }
    return t;
}
function Xp(e, t, l, a = {}) {
    let { window: n = document.defaultView, v5Compat: u = !1 } = a,
        i = n.history,
        r = 'POP',
        c = null,
        s = f();
    s == null && ((s = 0), i.replaceState({ ...i.state, idx: s }, ''));
    function f() {
        return (i.state || { idx: null }).idx;
    }
    function h() {
        r = 'POP';
        let A = f(),
            m = A == null ? null : A - s;
        ((s = A), c && c({ action: r, location: S.location, delta: m }));
    }
    function d(A, m) {
        r = 'PUSH';
        let o = is(S.location, A, m);
        s = f() + 1;
        let y = fd(o, s),
            p = S.createHref(o);
        try {
            i.pushState(y, '', p);
        } catch (x) {
            if (x instanceof DOMException && x.name === 'DataCloneError') throw x;
            n.location.assign(p);
        }
        u && c && c({ action: r, location: S.location, delta: 1 });
    }
    function v(A, m) {
        r = 'REPLACE';
        let o = is(S.location, A, m);
        s = f();
        let y = fd(o, s),
            p = S.createHref(o);
        (i.replaceState(y, '', p), u && c && c({ action: r, location: S.location, delta: 0 }));
    }
    function b(A) {
        return Qp(A);
    }
    let S = {
        get action() {
            return r;
        },
        get location() {
            return e(n, i);
        },
        listen(A) {
            if (c) throw new Error('A history only accepts one active listener');
            return (
                n.addEventListener(sd, h),
                (c = A),
                () => {
                    (n.removeEventListener(sd, h), (c = null));
                }
            );
        },
        createHref(A) {
            return t(n, A);
        },
        createURL: b,
        encodeLocation(A) {
            let m = b(A);
            return { pathname: m.pathname, search: m.search, hash: m.hash };
        },
        push: d,
        replace: v,
        go(A) {
            return i.go(A);
        },
    };
    return S;
}
function Qp(e, t = !1) {
    let l = 'http://localhost';
    (typeof window < 'u' &&
        (l = window.location.origin !== 'null' ? window.location.origin : window.location.href),
        pe(l, 'No window.location.(origin|href) available to create URL'));
    let a = typeof e == 'string' ? e : In(e);
    return ((a = a.replace(/ $/, '%20')), !t && a.startsWith('//') && (a = l + a), new URL(a, l));
}
function Hy(e, t, l = '/') {
    return Zp(e, t, l, !1);
}
function Zp(e, t, l, a) {
    let n = typeof t == 'string' ? tn(t) : t,
        u = ul(n.pathname || '/', l);
    if (u == null) return null;
    let i = Ly(e);
    Kp(i);
    let r = null;
    for (let c = 0; r == null && c < i.length; ++c) {
        let s = a1(u);
        r = t1(i[c], s, a);
    }
    return r;
}
function Ly(e, t = [], l = [], a = '', n = !1) {
    let u = (i, r, c = n, s) => {
        let f = {
            relativePath: s === void 0 ? i.path || '' : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: r,
            route: i,
        };
        if (f.relativePath.startsWith('/')) {
            if (!f.relativePath.startsWith(a) && c) return;
            (pe(
                f.relativePath.startsWith(a),
                `Absolute route path "${f.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
            ),
                (f.relativePath = f.relativePath.slice(a.length)));
        }
        let h = el([a, f.relativePath]),
            d = l.concat(f);
        (i.children &&
            i.children.length > 0 &&
            (pe(
                i.index !== !0,
                `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
            ),
            Ly(i.children, t, d, h, c)),
            !(i.path == null && !i.index) &&
                t.push({ path: h, score: Ip(h, i.index), routesMeta: d }));
    };
    return (
        e.forEach((i, r) => {
            var c;
            if (i.path === '' || !((c = i.path) != null && c.includes('?'))) u(i, r);
            else for (let s of qy(i.path)) u(i, r, !0, s);
        }),
        t
    );
}
function qy(e) {
    let t = e.split('/');
    if (t.length === 0) return [];
    let [l, ...a] = t,
        n = l.endsWith('?'),
        u = l.replace(/\?$/, '');
    if (a.length === 0) return n ? [u, ''] : [u];
    let i = qy(a.join('/')),
        r = [];
    return (
        r.push(...i.map((c) => (c === '' ? u : [u, c].join('/')))),
        n && r.push(...i),
        r.map((c) => (e.startsWith('/') && c === '' ? '/' : c))
    );
}
function Kp(e) {
    e.sort((t, l) =>
        t.score !== l.score
            ? l.score - t.score
            : e1(
                  t.routesMeta.map((a) => a.childrenIndex),
                  l.routesMeta.map((a) => a.childrenIndex)
              )
    );
}
var kp = /^:[\w-]+$/,
    Jp = 3,
    Fp = 2,
    $p = 1,
    Wp = 10,
    Pp = -2,
    od = (e) => e === '*';
function Ip(e, t) {
    let l = e.split('/'),
        a = l.length;
    return (
        l.some(od) && (a += Pp),
        t && (a += Fp),
        l.filter((n) => !od(n)).reduce((n, u) => n + (kp.test(u) ? Jp : u === '' ? $p : Wp), a)
    );
}
function e1(e, t) {
    return e.length === t.length && e.slice(0, -1).every((a, n) => a === t[n])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
}
function t1(e, t, l = !1) {
    let { routesMeta: a } = e,
        n = {},
        u = '/',
        i = [];
    for (let r = 0; r < a.length; ++r) {
        let c = a[r],
            s = r === a.length - 1,
            f = u === '/' ? t : t.slice(u.length) || '/',
            h = Hi({ path: c.relativePath, caseSensitive: c.caseSensitive, end: s }, f),
            d = c.route;
        if (
            (!h &&
                s &&
                l &&
                !a[a.length - 1].route.index &&
                (h = Hi({ path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 }, f)),
            !h)
        )
            return null;
        (Object.assign(n, h.params),
            i.push({
                params: n,
                pathname: el([u, h.pathname]),
                pathnameBase: r1(el([u, h.pathnameBase])),
                route: d,
            }),
            h.pathnameBase !== '/' && (u = el([u, h.pathnameBase])));
    }
    return i;
}
function Hi(e, t) {
    typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
    let [l, a] = l1(e.path, e.caseSensitive, e.end),
        n = t.match(l);
    if (!n) return null;
    let u = n[0],
        i = u.replace(/(.)\/+$/, '$1'),
        r = n.slice(1);
    return {
        params: a.reduce((s, { paramName: f, isOptional: h }, d) => {
            if (f === '*') {
                let b = r[d] || '';
                i = u.slice(0, u.length - b.length).replace(/(.)\/+$/, '$1');
            }
            const v = r[d];
            return (h && !v ? (s[f] = void 0) : (s[f] = (v || '').replace(/%2F/g, '/')), s);
        }, {}),
        pathname: u,
        pathnameBase: i,
        pattern: e,
    };
}
function l1(e, t = !1, l = !0) {
    jt(
        e === '*' || !e.endsWith('*') || e.endsWith('/*'),
        `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`
    );
    let a = [],
        n =
            '^' +
            e
                .replace(/\/*\*?$/, '')
                .replace(/^\/*/, '/')
                .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (i, r, c) => (
                        a.push({ paramName: r, isOptional: c != null }),
                        c ? '/?([^\\/]+)?' : '/([^\\/]+)'
                    )
                )
                .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
    return (
        e.endsWith('*')
            ? (a.push({ paramName: '*' }),
              (n += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
            : l
              ? (n += '\\/*$')
              : e !== '' && e !== '/' && (n += '(?:(?=\\/|$))'),
        [new RegExp(n, t ? void 0 : 'i'), a]
    );
}
function a1(e) {
    try {
        return e
            .split('/')
            .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
            .join('/');
    } catch (t) {
        return (
            jt(
                !1,
                `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
            ),
            e
        );
    }
}
function ul(e, t) {
    if (t === '/') return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let l = t.endsWith('/') ? t.length - 1 : t.length,
        a = e.charAt(l);
    return a && a !== '/' ? null : e.slice(l) || '/';
}
function n1(e, t = '/') {
    let { pathname: l, search: a = '', hash: n = '' } = typeof e == 'string' ? tn(e) : e;
    return { pathname: l ? (l.startsWith('/') ? l : u1(l, t)) : t, search: c1(a), hash: s1(n) };
}
function u1(e, t) {
    let l = t.replace(/\/+$/, '').split('/');
    return (
        e.split('/').forEach((n) => {
            n === '..' ? l.length > 1 && l.pop() : n !== '.' && l.push(n);
        }),
        l.length > 1 ? l.join('/') : '/'
    );
}
function uc(e, t, l, a) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function i1(e) {
    return e.filter((t, l) => l === 0 || (t.route.path && t.route.path.length > 0));
}
function Vy(e) {
    let t = i1(e);
    return t.map((l, a) => (a === t.length - 1 ? l.pathname : l.pathnameBase));
}
function Yy(e, t, l, a = !1) {
    let n;
    typeof e == 'string'
        ? (n = tn(e))
        : ((n = { ...e }),
          pe(!n.pathname || !n.pathname.includes('?'), uc('?', 'pathname', 'search', n)),
          pe(!n.pathname || !n.pathname.includes('#'), uc('#', 'pathname', 'hash', n)),
          pe(!n.search || !n.search.includes('#'), uc('#', 'search', 'hash', n)));
    let u = e === '' || n.pathname === '',
        i = u ? '/' : n.pathname,
        r;
    if (i == null) r = l;
    else {
        let h = t.length - 1;
        if (!a && i.startsWith('..')) {
            let d = i.split('/');
            for (; d[0] === '..'; ) (d.shift(), (h -= 1));
            n.pathname = d.join('/');
        }
        r = h >= 0 ? t[h] : '/';
    }
    let c = n1(n, r),
        s = i && i !== '/' && i.endsWith('/'),
        f = (u || i === '.') && l.endsWith('/');
    return (!c.pathname.endsWith('/') && (s || f) && (c.pathname += '/'), c);
}
var el = (e) => e.join('/').replace(/\/\/+/g, '/'),
    r1 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
    c1 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
    s1 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function f1(e) {
    return (
        e != null &&
        typeof e.status == 'number' &&
        typeof e.statusText == 'string' &&
        typeof e.internal == 'boolean' &&
        'data' in e
    );
}
var Gy = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Gy);
var o1 = ['GET', ...Gy];
new Set(o1);
var ln = R.createContext(null);
ln.displayName = 'DataRouter';
var sr = R.createContext(null);
sr.displayName = 'DataRouterState';
R.createContext(!1);
var Xy = R.createContext({ isTransitioning: !1 });
Xy.displayName = 'ViewTransition';
var d1 = R.createContext(new Map());
d1.displayName = 'Fetchers';
var h1 = R.createContext(null);
h1.displayName = 'Await';
var qt = R.createContext(null);
qt.displayName = 'Navigation';
var gu = R.createContext(null);
gu.displayName = 'Location';
var Vt = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Vt.displayName = 'Route';
var vf = R.createContext(null);
vf.displayName = 'RouteError';
function m1(e, { relative: t } = {}) {
    pe(pu(), 'useHref() may be used only in the context of a <Router> component.');
    let { basename: l, navigator: a } = R.useContext(qt),
        { hash: n, pathname: u, search: i } = bu(e, { relative: t }),
        r = u;
    return (
        l !== '/' && (r = u === '/' ? l : el([l, u])),
        a.createHref({ pathname: r, search: i, hash: n })
    );
}
function pu() {
    return R.useContext(gu) != null;
}
function ia() {
    return (
        pe(pu(), 'useLocation() may be used only in the context of a <Router> component.'),
        R.useContext(gu).location
    );
}
var Qy =
    'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Zy(e) {
    R.useContext(qt).static || R.useLayoutEffect(e);
}
function fr() {
    let { isDataRoute: e } = R.useContext(Vt);
    return e ? D1() : y1();
}
function y1() {
    pe(pu(), 'useNavigate() may be used only in the context of a <Router> component.');
    let e = R.useContext(ln),
        { basename: t, navigator: l } = R.useContext(qt),
        { matches: a } = R.useContext(Vt),
        { pathname: n } = ia(),
        u = JSON.stringify(Vy(a)),
        i = R.useRef(!1);
    return (
        Zy(() => {
            i.current = !0;
        }),
        R.useCallback(
            (c, s = {}) => {
                if ((jt(i.current, Qy), !i.current)) return;
                if (typeof c == 'number') {
                    l.go(c);
                    return;
                }
                let f = Yy(c, JSON.parse(u), n, s.relative === 'path');
                (e == null &&
                    t !== '/' &&
                    (f.pathname = f.pathname === '/' ? t : el([t, f.pathname])),
                    (s.replace ? l.replace : l.push)(f, s.state, s));
            },
            [t, l, u, n, e]
        )
    );
}
R.createContext(null);
function v1() {
    let { matches: e } = R.useContext(Vt),
        t = e[e.length - 1];
    return t ? t.params : {};
}
function bu(e, { relative: t } = {}) {
    let { matches: l } = R.useContext(Vt),
        { pathname: a } = ia(),
        n = JSON.stringify(Vy(l));
    return R.useMemo(() => Yy(e, JSON.parse(n), a, t === 'path'), [e, n, a, t]);
}
function g1(e, t) {
    return Ky(e, t);
}
function Ky(e, t, l, a, n) {
    var o;
    pe(pu(), 'useRoutes() may be used only in the context of a <Router> component.');
    let { navigator: u } = R.useContext(qt),
        { matches: i } = R.useContext(Vt),
        r = i[i.length - 1],
        c = r ? r.params : {},
        s = r ? r.pathname : '/',
        f = r ? r.pathnameBase : '/',
        h = r && r.route;
    {
        let y = (h && h.path) || '';
        ky(
            s,
            !h || y.endsWith('*') || y.endsWith('*?'),
            `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y === '/' ? '*' : `${y}/*`}">.`
        );
    }
    let d = ia(),
        v;
    if (t) {
        let y = typeof t == 'string' ? tn(t) : t;
        (pe(
            f === '/' || ((o = y.pathname) == null ? void 0 : o.startsWith(f)),
            `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${y.pathname}" was given in the \`location\` prop.`
        ),
            (v = y));
    } else v = d;
    let b = v.pathname || '/',
        S = b;
    if (f !== '/') {
        let y = f.replace(/^\//, '').split('/');
        S = '/' + b.replace(/^\//, '').split('/').slice(y.length).join('/');
    }
    let A = Hy(e, { pathname: S });
    (jt(h || A != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `),
        jt(
            A == null ||
                A[A.length - 1].route.element !== void 0 ||
                A[A.length - 1].route.Component !== void 0 ||
                A[A.length - 1].route.lazy !== void 0,
            `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
        ));
    let m = A1(
        A &&
            A.map((y) =>
                Object.assign({}, y, {
                    params: Object.assign({}, c, y.params),
                    pathname: el([
                        f,
                        u.encodeLocation ? u.encodeLocation(y.pathname).pathname : y.pathname,
                    ]),
                    pathnameBase:
                        y.pathnameBase === '/'
                            ? f
                            : el([
                                  f,
                                  u.encodeLocation
                                      ? u.encodeLocation(y.pathnameBase).pathname
                                      : y.pathnameBase,
                              ]),
                })
            ),
        i,
        l,
        a,
        n
    );
    return t && m
        ? R.createElement(
              gu.Provider,
              {
                  value: {
                      location: {
                          pathname: '/',
                          search: '',
                          hash: '',
                          state: null,
                          key: 'default',
                          ...v,
                      },
                      navigationType: 'POP',
                  },
              },
              m
          )
        : m;
}
function p1() {
    let e = _1(),
        t = f1(e)
            ? `${e.status} ${e.statusText}`
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
        l = e instanceof Error ? e.stack : null,
        a = 'rgba(200,200,200, 0.5)',
        n = { padding: '0.5rem', backgroundColor: a },
        u = { padding: '2px 4px', backgroundColor: a },
        i = null;
    return (
        console.error('Error handled by React Router default ErrorBoundary:', e),
        (i = R.createElement(
            R.Fragment,
            null,
            R.createElement('p', null, '💿 Hey developer 👋'),
            R.createElement(
                'p',
                null,
                'You can provide a way better UX than this when your app throws errors by providing your own ',
                R.createElement('code', { style: u }, 'ErrorBoundary'),
                ' or',
                ' ',
                R.createElement('code', { style: u }, 'errorElement'),
                ' prop on your route.'
            )
        )),
        R.createElement(
            R.Fragment,
            null,
            R.createElement('h2', null, 'Unexpected Application Error!'),
            R.createElement('h3', { style: { fontStyle: 'italic' } }, t),
            l ? R.createElement('pre', { style: n }, l) : null,
            i
        )
    );
}
var b1 = R.createElement(p1, null),
    S1 = class extends R.Component {
        constructor(e) {
            (super(e),
                (this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error,
                }));
        }
        static getDerivedStateFromError(e) {
            return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
            return t.location !== e.location ||
                (t.revalidation !== 'idle' && e.revalidation === 'idle')
                ? { error: e.error, location: e.location, revalidation: e.revalidation }
                : {
                      error: e.error !== void 0 ? e.error : t.error,
                      location: t.location,
                      revalidation: e.revalidation || t.revalidation,
                  };
        }
        componentDidCatch(e, t) {
            this.props.unstable_onError
                ? this.props.unstable_onError(e, t)
                : console.error('React Router caught the following error during render', e);
        }
        render() {
            return this.state.error !== void 0
                ? R.createElement(
                      Vt.Provider,
                      { value: this.props.routeContext },
                      R.createElement(vf.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                      })
                  )
                : this.props.children;
        }
    };
function E1({ routeContext: e, match: t, children: l }) {
    let a = R.useContext(ln);
    return (
        a &&
            a.static &&
            a.staticContext &&
            (t.route.errorElement || t.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = t.route.id),
        R.createElement(Vt.Provider, { value: e }, l)
    );
}
function A1(e, t = [], l = null, a = null, n = null) {
    if (e == null) {
        if (!l) return null;
        if (l.errors) e = l.matches;
        else if (t.length === 0 && !l.initialized && l.matches.length > 0) e = l.matches;
        else return null;
    }
    let u = e,
        i = l == null ? void 0 : l.errors;
    if (i != null) {
        let s = u.findIndex((f) => f.route.id && (i == null ? void 0 : i[f.route.id]) !== void 0);
        (pe(
            s >= 0,
            `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
        ),
            (u = u.slice(0, Math.min(u.length, s + 1))));
    }
    let r = !1,
        c = -1;
    if (l)
        for (let s = 0; s < u.length; s++) {
            let f = u[s];
            if (
                ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = s), f.route.id)
            ) {
                let { loaderData: h, errors: d } = l,
                    v =
                        f.route.loader &&
                        !h.hasOwnProperty(f.route.id) &&
                        (!d || d[f.route.id] === void 0);
                if (f.route.lazy || v) {
                    ((r = !0), c >= 0 ? (u = u.slice(0, c + 1)) : (u = [u[0]]));
                    break;
                }
            }
        }
    return u.reduceRight((s, f, h) => {
        let d,
            v = !1,
            b = null,
            S = null;
        l &&
            ((d = i && f.route.id ? i[f.route.id] : void 0),
            (b = f.route.errorElement || b1),
            r &&
                (c < 0 && h === 0
                    ? (ky(
                          'route-fallback',
                          !1,
                          'No `HydrateFallback` element provided to render during initial hydration'
                      ),
                      (v = !0),
                      (S = null))
                    : c === h && ((v = !0), (S = f.route.hydrateFallbackElement || null))));
        let A = t.concat(u.slice(0, h + 1)),
            m = () => {
                let o;
                return (
                    d
                        ? (o = b)
                        : v
                          ? (o = S)
                          : f.route.Component
                            ? (o = R.createElement(f.route.Component, null))
                            : f.route.element
                              ? (o = f.route.element)
                              : (o = s),
                    R.createElement(E1, {
                        match: f,
                        routeContext: { outlet: s, matches: A, isDataRoute: l != null },
                        children: o,
                    })
                );
            };
        return l && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
            ? R.createElement(S1, {
                  location: l.location,
                  revalidation: l.revalidation,
                  component: b,
                  error: d,
                  children: m(),
                  routeContext: { outlet: null, matches: A, isDataRoute: !0 },
                  unstable_onError: a,
              })
            : m();
    }, null);
}
function gf(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function T1(e) {
    let t = R.useContext(ln);
    return (pe(t, gf(e)), t);
}
function R1(e) {
    let t = R.useContext(sr);
    return (pe(t, gf(e)), t);
}
function O1(e) {
    let t = R.useContext(Vt);
    return (pe(t, gf(e)), t);
}
function pf(e) {
    let t = O1(e),
        l = t.matches[t.matches.length - 1];
    return (
        pe(l.route.id, `${e} can only be used on routes that contain a unique "id"`),
        l.route.id
    );
}
function x1() {
    return pf('useRouteId');
}
function _1() {
    var a;
    let e = R.useContext(vf),
        t = R1('useRouteError'),
        l = pf('useRouteError');
    return e !== void 0 ? e : (a = t.errors) == null ? void 0 : a[l];
}
function D1() {
    let { router: e } = T1('useNavigate'),
        t = pf('useNavigate'),
        l = R.useRef(!1);
    return (
        Zy(() => {
            l.current = !0;
        }),
        R.useCallback(
            async (n, u = {}) => {
                (jt(l.current, Qy),
                    l.current &&
                        (typeof n == 'number'
                            ? e.navigate(n)
                            : await e.navigate(n, { fromRouteId: t, ...u })));
            },
            [e, t]
        )
    );
}
var dd = {};
function ky(e, t, l) {
    !t && !dd[e] && ((dd[e] = !0), jt(!1, l));
}
R.memo(N1);
function N1({ routes: e, future: t, state: l, unstable_onError: a }) {
    return Ky(e, void 0, l, a, t);
}
function rs(e) {
    pe(
        !1,
        'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
    );
}
function U1({
    basename: e = '/',
    children: t = null,
    location: l,
    navigationType: a = 'POP',
    navigator: n,
    static: u = !1,
}) {
    pe(
        !pu(),
        'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
    );
    let i = e.replace(/^\/*/, '/'),
        r = R.useMemo(() => ({ basename: i, navigator: n, static: u, future: {} }), [i, n, u]);
    typeof l == 'string' && (l = tn(l));
    let {
            pathname: c = '/',
            search: s = '',
            hash: f = '',
            state: h = null,
            key: d = 'default',
        } = l,
        v = R.useMemo(() => {
            let b = ul(c, i);
            return b == null
                ? null
                : {
                      location: { pathname: b, search: s, hash: f, state: h, key: d },
                      navigationType: a,
                  };
        }, [i, c, s, f, h, d, a]);
    return (
        jt(
            v != null,
            `<Router basename="${i}"> is not able to match the URL "${c}${s}${f}" because it does not start with the basename, so the <Router> won't render anything.`
        ),
        v == null
            ? null
            : R.createElement(
                  qt.Provider,
                  { value: r },
                  R.createElement(gu.Provider, { children: t, value: v })
              )
    );
}
function M1({ children: e, location: t }) {
    return g1(cs(e), t);
}
function cs(e, t = []) {
    let l = [];
    return (
        R.Children.forEach(e, (a, n) => {
            if (!R.isValidElement(a)) return;
            let u = [...t, n];
            if (a.type === R.Fragment) {
                l.push.apply(l, cs(a.props.children, u));
                return;
            }
            (pe(
                a.type === rs,
                `[${typeof a.type == 'string' ? a.type : a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
            ),
                pe(
                    !a.props.index || !a.props.children,
                    'An index route cannot have child routes.'
                ));
            let i = {
                id: a.props.id || u.join('-'),
                caseSensitive: a.props.caseSensitive,
                element: a.props.element,
                Component: a.props.Component,
                index: a.props.index,
                path: a.props.path,
                loader: a.props.loader,
                action: a.props.action,
                hydrateFallbackElement: a.props.hydrateFallbackElement,
                HydrateFallback: a.props.HydrateFallback,
                errorElement: a.props.errorElement,
                ErrorBoundary: a.props.ErrorBoundary,
                hasErrorBoundary:
                    a.props.hasErrorBoundary === !0 ||
                    a.props.ErrorBoundary != null ||
                    a.props.errorElement != null,
                shouldRevalidate: a.props.shouldRevalidate,
                handle: a.props.handle,
                lazy: a.props.lazy,
            };
            (a.props.children && (i.children = cs(a.props.children, u)), l.push(i));
        }),
        l
    );
}
var ti = 'get',
    li = 'application/x-www-form-urlencoded';
function or(e) {
    return e != null && typeof e.tagName == 'string';
}
function z1(e) {
    return or(e) && e.tagName.toLowerCase() === 'button';
}
function C1(e) {
    return or(e) && e.tagName.toLowerCase() === 'form';
}
function w1(e) {
    return or(e) && e.tagName.toLowerCase() === 'input';
}
function B1(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function j1(e, t) {
    return e.button === 0 && (!t || t === '_self') && !B1(e);
}
var Yu = null;
function H1() {
    if (Yu === null)
        try {
            (new FormData(document.createElement('form'), 0), (Yu = !1));
        } catch {
            Yu = !0;
        }
    return Yu;
}
var L1 = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function ic(e) {
    return e != null && !L1.has(e)
        ? (jt(
              !1,
              `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${li}"`
          ),
          null)
        : e;
}
function q1(e, t) {
    let l, a, n, u, i;
    if (C1(e)) {
        let r = e.getAttribute('action');
        ((a = r ? ul(r, t) : null),
            (l = e.getAttribute('method') || ti),
            (n = ic(e.getAttribute('enctype')) || li),
            (u = new FormData(e)));
    } else if (z1(e) || (w1(e) && (e.type === 'submit' || e.type === 'image'))) {
        let r = e.form;
        if (r == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let c = e.getAttribute('formaction') || r.getAttribute('action');
        if (
            ((a = c ? ul(c, t) : null),
            (l = e.getAttribute('formmethod') || r.getAttribute('method') || ti),
            (n = ic(e.getAttribute('formenctype')) || ic(r.getAttribute('enctype')) || li),
            (u = new FormData(r, e)),
            !H1())
        ) {
            let { name: s, type: f, value: h } = e;
            if (f === 'image') {
                let d = s ? `${s}.` : '';
                (u.append(`${d}x`, '0'), u.append(`${d}y`, '0'));
            } else s && u.append(s, h);
        }
    } else {
        if (or(e))
            throw new Error(
                'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
            );
        ((l = ti), (a = null), (n = li), (i = e));
    }
    return (
        u && n === 'text/plain' && ((i = u), (u = void 0)),
        { action: a, method: l.toLowerCase(), encType: n, formData: u, body: i }
    );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function bf(e, t) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function V1(e, t, l) {
    let a =
        typeof e == 'string'
            ? new URL(e, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
            : e;
    return (
        a.pathname === '/'
            ? (a.pathname = `_root.${l}`)
            : t && ul(a.pathname, t) === '/'
              ? (a.pathname = `${t.replace(/\/$/, '')}/_root.${l}`)
              : (a.pathname = `${a.pathname.replace(/\/$/, '')}.${l}`),
        a
    );
}
async function Y1(e, t) {
    if (e.id in t) return t[e.id];
    try {
        let l = await import(e.module);
        return ((t[e.id] = l), l);
    } catch (l) {
        return (
            console.error(`Error loading route module \`${e.module}\`, reloading page...`),
            console.error(l),
            window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
            window.location.reload(),
            new Promise(() => {})
        );
    }
}
function G1(e) {
    return e == null
        ? !1
        : e.href == null
          ? e.rel === 'preload' &&
            typeof e.imageSrcSet == 'string' &&
            typeof e.imageSizes == 'string'
          : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function X1(e, t, l) {
    let a = await Promise.all(
        e.map(async (n) => {
            let u = t.routes[n.route.id];
            if (u) {
                let i = await Y1(u, l);
                return i.links ? i.links() : [];
            }
            return [];
        })
    );
    return k1(
        a
            .flat(1)
            .filter(G1)
            .filter((n) => n.rel === 'stylesheet' || n.rel === 'preload')
            .map((n) =>
                n.rel === 'stylesheet'
                    ? { ...n, rel: 'prefetch', as: 'style' }
                    : { ...n, rel: 'prefetch' }
            )
    );
}
function hd(e, t, l, a, n, u) {
    let i = (c, s) => (l[s] ? c.route.id !== l[s].route.id : !0),
        r = (c, s) => {
            var f;
            return (
                l[s].pathname !== c.pathname ||
                (((f = l[s].route.path) == null ? void 0 : f.endsWith('*')) &&
                    l[s].params['*'] !== c.params['*'])
            );
        };
    return u === 'assets'
        ? t.filter((c, s) => i(c, s) || r(c, s))
        : u === 'data'
          ? t.filter((c, s) => {
                var h;
                let f = a.routes[c.route.id];
                if (!f || !f.hasLoader) return !1;
                if (i(c, s) || r(c, s)) return !0;
                if (c.route.shouldRevalidate) {
                    let d = c.route.shouldRevalidate({
                        currentUrl: new URL(n.pathname + n.search + n.hash, window.origin),
                        currentParams: ((h = l[0]) == null ? void 0 : h.params) || {},
                        nextUrl: new URL(e, window.origin),
                        nextParams: c.params,
                        defaultShouldRevalidate: !0,
                    });
                    if (typeof d == 'boolean') return d;
                }
                return !0;
            })
          : [];
}
function Q1(e, t, { includeHydrateFallback: l } = {}) {
    return Z1(
        e
            .map((a) => {
                let n = t.routes[a.route.id];
                if (!n) return [];
                let u = [n.module];
                return (
                    n.clientActionModule && (u = u.concat(n.clientActionModule)),
                    n.clientLoaderModule && (u = u.concat(n.clientLoaderModule)),
                    l && n.hydrateFallbackModule && (u = u.concat(n.hydrateFallbackModule)),
                    n.imports && (u = u.concat(n.imports)),
                    u
                );
            })
            .flat(1)
    );
}
function Z1(e) {
    return [...new Set(e)];
}
function K1(e) {
    let t = {},
        l = Object.keys(e).sort();
    for (let a of l) t[a] = e[a];
    return t;
}
function k1(e, t) {
    let l = new Set();
    return (
        new Set(t),
        e.reduce((a, n) => {
            let u = JSON.stringify(K1(n));
            return (l.has(u) || (l.add(u), a.push({ key: u, link: n })), a);
        }, [])
    );
}
function Jy() {
    let e = R.useContext(ln);
    return (bf(e, 'You must render this element inside a <DataRouterContext.Provider> element'), e);
}
function J1() {
    let e = R.useContext(sr);
    return (
        bf(e, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
        e
    );
}
var Sf = R.createContext(void 0);
Sf.displayName = 'FrameworkContext';
function Fy() {
    let e = R.useContext(Sf);
    return (bf(e, 'You must render this element inside a <HydratedRouter> element'), e);
}
function F1(e, t) {
    let l = R.useContext(Sf),
        [a, n] = R.useState(!1),
        [u, i] = R.useState(!1),
        { onFocus: r, onBlur: c, onMouseEnter: s, onMouseLeave: f, onTouchStart: h } = t,
        d = R.useRef(null);
    (R.useEffect(() => {
        if ((e === 'render' && i(!0), e === 'viewport')) {
            let S = (m) => {
                    m.forEach((o) => {
                        i(o.isIntersecting);
                    });
                },
                A = new IntersectionObserver(S, { threshold: 0.5 });
            return (
                d.current && A.observe(d.current),
                () => {
                    A.disconnect();
                }
            );
        }
    }, [e]),
        R.useEffect(() => {
            if (a) {
                let S = setTimeout(() => {
                    i(!0);
                }, 100);
                return () => {
                    clearTimeout(S);
                };
            }
        }, [a]));
    let v = () => {
            n(!0);
        },
        b = () => {
            (n(!1), i(!1));
        };
    return l
        ? e !== 'intent'
            ? [u, d, {}]
            : [
                  u,
                  d,
                  {
                      onFocus: mn(r, v),
                      onBlur: mn(c, b),
                      onMouseEnter: mn(s, v),
                      onMouseLeave: mn(f, b),
                      onTouchStart: mn(h, v),
                  },
              ]
        : [!1, d, {}];
}
function mn(e, t) {
    return (l) => {
        (e && e(l), l.defaultPrevented || t(l));
    };
}
function $1({ page: e, ...t }) {
    let { router: l } = Jy(),
        a = R.useMemo(() => Hy(l.routes, e, l.basename), [l.routes, e, l.basename]);
    return a ? R.createElement(P1, { page: e, matches: a, ...t }) : null;
}
function W1(e) {
    let { manifest: t, routeModules: l } = Fy(),
        [a, n] = R.useState([]);
    return (
        R.useEffect(() => {
            let u = !1;
            return (
                X1(e, t, l).then((i) => {
                    u || n(i);
                }),
                () => {
                    u = !0;
                }
            );
        }, [e, t, l]),
        a
    );
}
function P1({ page: e, matches: t, ...l }) {
    let a = ia(),
        { manifest: n, routeModules: u } = Fy(),
        { basename: i } = Jy(),
        { loaderData: r, matches: c } = J1(),
        s = R.useMemo(() => hd(e, t, c, n, a, 'data'), [e, t, c, n, a]),
        f = R.useMemo(() => hd(e, t, c, n, a, 'assets'), [e, t, c, n, a]),
        h = R.useMemo(() => {
            if (e === a.pathname + a.search + a.hash) return [];
            let b = new Set(),
                S = !1;
            if (
                (t.forEach((m) => {
                    var y;
                    let o = n.routes[m.route.id];
                    !o ||
                        !o.hasLoader ||
                        ((!s.some((p) => p.route.id === m.route.id) &&
                            m.route.id in r &&
                            (y = u[m.route.id]) != null &&
                            y.shouldRevalidate) ||
                        o.hasClientLoader
                            ? (S = !0)
                            : b.add(m.route.id));
                }),
                b.size === 0)
            )
                return [];
            let A = V1(e, i, 'data');
            return (
                S &&
                    b.size > 0 &&
                    A.searchParams.set(
                        '_routes',
                        t
                            .filter((m) => b.has(m.route.id))
                            .map((m) => m.route.id)
                            .join(',')
                    ),
                [A.pathname + A.search]
            );
        }, [i, r, a, n, s, t, e, u]),
        d = R.useMemo(() => Q1(f, n), [f, n]),
        v = W1(f);
    return R.createElement(
        R.Fragment,
        null,
        h.map((b) =>
            R.createElement('link', { key: b, rel: 'prefetch', as: 'fetch', href: b, ...l })
        ),
        d.map((b) => R.createElement('link', { key: b, rel: 'modulepreload', href: b, ...l })),
        v.map(({ key: b, link: S }) => R.createElement('link', { key: b, nonce: l.nonce, ...S }))
    );
}
function I1(...e) {
    return (t) => {
        e.forEach((l) => {
            typeof l == 'function' ? l(t) : l != null && (l.current = t);
        });
    };
}
var $y =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u';
try {
    $y && (window.__reactRouterVersion = '7.8.2');
} catch {}
function eb({ basename: e, children: t, window: l }) {
    let a = R.useRef();
    a.current == null && (a.current = Yp({ window: l, v5Compat: !0 }));
    let n = a.current,
        [u, i] = R.useState({ action: n.action, location: n.location }),
        r = R.useCallback(
            (c) => {
                R.startTransition(() => i(c));
            },
            [i]
        );
    return (
        R.useLayoutEffect(() => n.listen(r), [n, r]),
        R.createElement(U1, {
            basename: e,
            children: t,
            location: u.location,
            navigationType: u.action,
            navigator: n,
        })
    );
}
var Wy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Py = R.forwardRef(function (
        {
            onClick: t,
            discover: l = 'render',
            prefetch: a = 'none',
            relative: n,
            reloadDocument: u,
            replace: i,
            state: r,
            target: c,
            to: s,
            preventScrollReset: f,
            viewTransition: h,
            ...d
        },
        v
    ) {
        let { basename: b } = R.useContext(qt),
            S = typeof s == 'string' && Wy.test(s),
            A,
            m = !1;
        if (typeof s == 'string' && S && ((A = s), $y))
            try {
                let q = new URL(window.location.href),
                    L = s.startsWith('//') ? new URL(q.protocol + s) : new URL(s),
                    re = ul(L.pathname, b);
                L.origin === q.origin && re != null ? (s = re + L.search + L.hash) : (m = !0);
            } catch {
                jt(
                    !1,
                    `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
                );
            }
        let o = m1(s, { relative: n }),
            [y, p, x] = F1(a, d),
            B = nb(s, {
                replace: i,
                state: r,
                target: c,
                preventScrollReset: f,
                relative: n,
                viewTransition: h,
            });
        function N(q) {
            (t && t(q), q.defaultPrevented || B(q));
        }
        let w = R.createElement('a', {
            ...d,
            ...x,
            href: A || o,
            onClick: m || u ? t : N,
            ref: I1(v, p),
            target: c,
            'data-discover': !S && l === 'render' ? 'true' : void 0,
        });
        return y && !S ? R.createElement(R.Fragment, null, w, R.createElement($1, { page: o })) : w;
    });
Py.displayName = 'Link';
var tb = R.forwardRef(function (
    {
        'aria-current': t = 'page',
        caseSensitive: l = !1,
        className: a = '',
        end: n = !1,
        style: u,
        to: i,
        viewTransition: r,
        children: c,
        ...s
    },
    f
) {
    let h = bu(i, { relative: s.relative }),
        d = ia(),
        v = R.useContext(sr),
        { navigator: b, basename: S } = R.useContext(qt),
        A = v != null && sb(h) && r === !0,
        m = b.encodeLocation ? b.encodeLocation(h).pathname : h.pathname,
        o = d.pathname,
        y = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
    (l || ((o = o.toLowerCase()), (y = y ? y.toLowerCase() : null), (m = m.toLowerCase())),
        y && S && (y = ul(y, S) || y));
    const p = m !== '/' && m.endsWith('/') ? m.length - 1 : m.length;
    let x = o === m || (!n && o.startsWith(m) && o.charAt(p) === '/'),
        B = y != null && (y === m || (!n && y.startsWith(m) && y.charAt(m.length) === '/')),
        N = { isActive: x, isPending: B, isTransitioning: A },
        w = x ? t : void 0,
        q;
    typeof a == 'function'
        ? (q = a(N))
        : (q = [a, x ? 'active' : null, B ? 'pending' : null, A ? 'transitioning' : null]
              .filter(Boolean)
              .join(' '));
    let L = typeof u == 'function' ? u(N) : u;
    return R.createElement(
        Py,
        { ...s, 'aria-current': w, className: q, ref: f, style: L, to: i, viewTransition: r },
        typeof c == 'function' ? c(N) : c
    );
});
tb.displayName = 'NavLink';
var lb = R.forwardRef(
    (
        {
            discover: e = 'render',
            fetcherKey: t,
            navigate: l,
            reloadDocument: a,
            replace: n,
            state: u,
            method: i = ti,
            action: r,
            onSubmit: c,
            relative: s,
            preventScrollReset: f,
            viewTransition: h,
            ...d
        },
        v
    ) => {
        let b = rb(),
            S = cb(r, { relative: s }),
            A = i.toLowerCase() === 'get' ? 'get' : 'post',
            m = typeof r == 'string' && Wy.test(r),
            o = (y) => {
                if ((c && c(y), y.defaultPrevented)) return;
                y.preventDefault();
                let p = y.nativeEvent.submitter,
                    x = (p == null ? void 0 : p.getAttribute('formmethod')) || i;
                b(p || y.currentTarget, {
                    fetcherKey: t,
                    method: x,
                    navigate: l,
                    replace: n,
                    state: u,
                    relative: s,
                    preventScrollReset: f,
                    viewTransition: h,
                });
            };
        return R.createElement('form', {
            ref: v,
            method: A,
            action: S,
            onSubmit: a ? c : o,
            ...d,
            'data-discover': !m && e === 'render' ? 'true' : void 0,
        });
    }
);
lb.displayName = 'Form';
function ab(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Iy(e) {
    let t = R.useContext(ln);
    return (pe(t, ab(e)), t);
}
function nb(
    e,
    { target: t, replace: l, state: a, preventScrollReset: n, relative: u, viewTransition: i } = {}
) {
    let r = fr(),
        c = ia(),
        s = bu(e, { relative: u });
    return R.useCallback(
        (f) => {
            if (j1(f, t)) {
                f.preventDefault();
                let h = l !== void 0 ? l : In(c) === In(s);
                r(e, {
                    replace: h,
                    state: a,
                    preventScrollReset: n,
                    relative: u,
                    viewTransition: i,
                });
            }
        },
        [c, r, s, l, a, t, e, n, u, i]
    );
}
var ub = 0,
    ib = () => `__${String(++ub)}__`;
function rb() {
    let { router: e } = Iy('useSubmit'),
        { basename: t } = R.useContext(qt),
        l = x1();
    return R.useCallback(
        async (a, n = {}) => {
            let { action: u, method: i, encType: r, formData: c, body: s } = q1(a, t);
            if (n.navigate === !1) {
                let f = n.fetcherKey || ib();
                await e.fetch(f, l, n.action || u, {
                    preventScrollReset: n.preventScrollReset,
                    formData: c,
                    body: s,
                    formMethod: n.method || i,
                    formEncType: n.encType || r,
                    flushSync: n.flushSync,
                });
            } else
                await e.navigate(n.action || u, {
                    preventScrollReset: n.preventScrollReset,
                    formData: c,
                    body: s,
                    formMethod: n.method || i,
                    formEncType: n.encType || r,
                    replace: n.replace,
                    state: n.state,
                    fromRouteId: l,
                    flushSync: n.flushSync,
                    viewTransition: n.viewTransition,
                });
        },
        [e, t, l]
    );
}
function cb(e, { relative: t } = {}) {
    let { basename: l } = R.useContext(qt),
        a = R.useContext(Vt);
    pe(a, 'useFormAction must be used inside a RouteContext');
    let [n] = a.matches.slice(-1),
        u = { ...bu(e || '.', { relative: t }) },
        i = ia();
    if (e == null) {
        u.search = i.search;
        let r = new URLSearchParams(u.search),
            c = r.getAll('index');
        if (c.some((f) => f === '')) {
            (r.delete('index'), c.filter((h) => h).forEach((h) => r.append('index', h)));
            let f = r.toString();
            u.search = f ? `?${f}` : '';
        }
    }
    return (
        (!e || e === '.') &&
            n.route.index &&
            (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
        l !== '/' && (u.pathname = u.pathname === '/' ? l : el([l, u.pathname])),
        In(u)
    );
}
function sb(e, { relative: t } = {}) {
    let l = R.useContext(Xy);
    pe(
        l != null,
        "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename: a } = Iy('useViewTransitionState'),
        n = bu(e, { relative: t });
    if (!l.isTransitioning) return !1;
    let u = ul(l.currentLocation.pathname, a) || l.currentLocation.pathname,
        i = ul(l.nextLocation.pathname, a) || l.nextLocation.pathname;
    return Hi(n.pathname, i) != null || Hi(n.pathname, u) != null;
}
function ev(e, t) {
    return function () {
        return e.apply(t, arguments);
    };
}
const { toString: fb } = Object.prototype,
    { getPrototypeOf: Ef } = Object,
    { iterator: dr, toStringTag: tv } = Symbol,
    hr = ((e) => (t) => {
        const l = fb.call(t);
        return e[l] || (e[l] = l.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    xt = (e) => ((e = e.toLowerCase()), (t) => hr(t) === e),
    mr = (e) => (t) => typeof t === e,
    { isArray: an } = Array,
    eu = mr('undefined');
function Su(e) {
    return (
        e !== null &&
        !eu(e) &&
        e.constructor !== null &&
        !eu(e.constructor) &&
        Pe(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    );
}
const lv = xt('ArrayBuffer');
function ob(e) {
    let t;
    return (
        typeof ArrayBuffer < 'u' && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && lv(e.buffer)),
        t
    );
}
const db = mr('string'),
    Pe = mr('function'),
    av = mr('number'),
    Eu = (e) => e !== null && typeof e == 'object',
    hb = (e) => e === !0 || e === !1,
    ai = (e) => {
        if (hr(e) !== 'object') return !1;
        const t = Ef(e);
        return (
            (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
            !(tv in e) &&
            !(dr in e)
        );
    },
    mb = (e) => {
        if (!Eu(e) || Su(e)) return !1;
        try {
            return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
        } catch {
            return !1;
        }
    },
    yb = xt('Date'),
    vb = xt('File'),
    gb = xt('Blob'),
    pb = xt('FileList'),
    bb = (e) => Eu(e) && Pe(e.pipe),
    Sb = (e) => {
        let t;
        return (
            e &&
            ((typeof FormData == 'function' && e instanceof FormData) ||
                (Pe(e.append) &&
                    ((t = hr(e)) === 'formdata' ||
                        (t === 'object' &&
                            Pe(e.toString) &&
                            e.toString() === '[object FormData]'))))
        );
    },
    Eb = xt('URLSearchParams'),
    [Ab, Tb, Rb, Ob] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(xt),
    xb = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function Au(e, t, { allOwnKeys: l = !1 } = {}) {
    if (e === null || typeof e > 'u') return;
    let a, n;
    if ((typeof e != 'object' && (e = [e]), an(e)))
        for (a = 0, n = e.length; a < n; a++) t.call(null, e[a], a, e);
    else {
        if (Su(e)) return;
        const u = l ? Object.getOwnPropertyNames(e) : Object.keys(e),
            i = u.length;
        let r;
        for (a = 0; a < i; a++) ((r = u[a]), t.call(null, e[r], r, e));
    }
}
function nv(e, t) {
    if (Su(e)) return null;
    t = t.toLowerCase();
    const l = Object.keys(e);
    let a = l.length,
        n;
    for (; a-- > 0; ) if (((n = l[a]), t === n.toLowerCase())) return n;
    return null;
}
const Yl =
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
              ? self
              : typeof window < 'u'
                ? window
                : global,
    uv = (e) => !eu(e) && e !== Yl;
function ss() {
    const { caseless: e } = (uv(this) && this) || {},
        t = {},
        l = (a, n) => {
            const u = (e && nv(t, n)) || n;
            ai(t[u]) && ai(a)
                ? (t[u] = ss(t[u], a))
                : ai(a)
                  ? (t[u] = ss({}, a))
                  : an(a)
                    ? (t[u] = a.slice())
                    : (t[u] = a);
        };
    for (let a = 0, n = arguments.length; a < n; a++) arguments[a] && Au(arguments[a], l);
    return t;
}
const _b = (e, t, l, { allOwnKeys: a } = {}) => (
        Au(
            t,
            (n, u) => {
                l && Pe(n) ? (e[u] = ev(n, l)) : (e[u] = n);
            },
            { allOwnKeys: a }
        ),
        e
    ),
    Db = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Nb = (e, t, l, a) => {
        ((e.prototype = Object.create(t.prototype, a)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, 'super', { value: t.prototype }),
            l && Object.assign(e.prototype, l));
    },
    Ub = (e, t, l, a) => {
        let n, u, i;
        const r = {};
        if (((t = t || {}), e == null)) return t;
        do {
            for (n = Object.getOwnPropertyNames(e), u = n.length; u-- > 0; )
                ((i = n[u]), (!a || a(i, e, t)) && !r[i] && ((t[i] = e[i]), (r[i] = !0)));
            e = l !== !1 && Ef(e);
        } while (e && (!l || l(e, t)) && e !== Object.prototype);
        return t;
    },
    Mb = (e, t, l) => {
        ((e = String(e)), (l === void 0 || l > e.length) && (l = e.length), (l -= t.length));
        const a = e.indexOf(t, l);
        return a !== -1 && a === l;
    },
    zb = (e) => {
        if (!e) return null;
        if (an(e)) return e;
        let t = e.length;
        if (!av(t)) return null;
        const l = new Array(t);
        for (; t-- > 0; ) l[t] = e[t];
        return l;
    },
    Cb = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < 'u' && Ef(Uint8Array)),
    wb = (e, t) => {
        const a = (e && e[dr]).call(e);
        let n;
        for (; (n = a.next()) && !n.done; ) {
            const u = n.value;
            t.call(e, u[0], u[1]);
        }
    },
    Bb = (e, t) => {
        let l;
        const a = [];
        for (; (l = e.exec(t)) !== null; ) a.push(l);
        return a;
    },
    jb = xt('HTMLFormElement'),
    Hb = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, a, n) {
            return a.toUpperCase() + n;
        }),
    md = (
        ({ hasOwnProperty: e }) =>
        (t, l) =>
            e.call(t, l)
    )(Object.prototype),
    Lb = xt('RegExp'),
    iv = (e, t) => {
        const l = Object.getOwnPropertyDescriptors(e),
            a = {};
        (Au(l, (n, u) => {
            let i;
            (i = t(n, u, e)) !== !1 && (a[u] = i || n);
        }),
            Object.defineProperties(e, a));
    },
    qb = (e) => {
        iv(e, (t, l) => {
            if (Pe(e) && ['arguments', 'caller', 'callee'].indexOf(l) !== -1) return !1;
            const a = e[l];
            if (Pe(a)) {
                if (((t.enumerable = !1), 'writable' in t)) {
                    t.writable = !1;
                    return;
                }
                t.set ||
                    (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + l + "'");
                    });
            }
        });
    },
    Vb = (e, t) => {
        const l = {},
            a = (n) => {
                n.forEach((u) => {
                    l[u] = !0;
                });
            };
        return (an(e) ? a(e) : a(String(e).split(t)), l);
    },
    Yb = () => {},
    Gb = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Xb(e) {
    return !!(e && Pe(e.append) && e[tv] === 'FormData' && e[dr]);
}
const Qb = (e) => {
        const t = new Array(10),
            l = (a, n) => {
                if (Eu(a)) {
                    if (t.indexOf(a) >= 0) return;
                    if (Su(a)) return a;
                    if (!('toJSON' in a)) {
                        t[n] = a;
                        const u = an(a) ? [] : {};
                        return (
                            Au(a, (i, r) => {
                                const c = l(i, n + 1);
                                !eu(c) && (u[r] = c);
                            }),
                            (t[n] = void 0),
                            u
                        );
                    }
                }
                return a;
            };
        return l(e, 0);
    },
    Zb = xt('AsyncFunction'),
    Kb = (e) => e && (Eu(e) || Pe(e)) && Pe(e.then) && Pe(e.catch),
    rv = ((e, t) =>
        e
            ? setImmediate
            : t
              ? ((l, a) => (
                    Yl.addEventListener(
                        'message',
                        ({ source: n, data: u }) => {
                            n === Yl && u === l && a.length && a.shift()();
                        },
                        !1
                    ),
                    (n) => {
                        (a.push(n), Yl.postMessage(l, '*'));
                    }
                ))(`axios@${Math.random()}`, [])
              : (l) => setTimeout(l))(typeof setImmediate == 'function', Pe(Yl.postMessage)),
    kb =
        typeof queueMicrotask < 'u'
            ? queueMicrotask.bind(Yl)
            : (typeof process < 'u' && process.nextTick) || rv,
    Jb = (e) => e != null && Pe(e[dr]),
    T = {
        isArray: an,
        isArrayBuffer: lv,
        isBuffer: Su,
        isFormData: Sb,
        isArrayBufferView: ob,
        isString: db,
        isNumber: av,
        isBoolean: hb,
        isObject: Eu,
        isPlainObject: ai,
        isEmptyObject: mb,
        isReadableStream: Ab,
        isRequest: Tb,
        isResponse: Rb,
        isHeaders: Ob,
        isUndefined: eu,
        isDate: yb,
        isFile: vb,
        isBlob: gb,
        isRegExp: Lb,
        isFunction: Pe,
        isStream: bb,
        isURLSearchParams: Eb,
        isTypedArray: Cb,
        isFileList: pb,
        forEach: Au,
        merge: ss,
        extend: _b,
        trim: xb,
        stripBOM: Db,
        inherits: Nb,
        toFlatObject: Ub,
        kindOf: hr,
        kindOfTest: xt,
        endsWith: Mb,
        toArray: zb,
        forEachEntry: wb,
        matchAll: Bb,
        isHTMLForm: jb,
        hasOwnProperty: md,
        hasOwnProp: md,
        reduceDescriptors: iv,
        freezeMethods: qb,
        toObjectSet: Vb,
        toCamelCase: Hb,
        noop: Yb,
        toFiniteNumber: Gb,
        findKey: nv,
        global: Yl,
        isContextDefined: uv,
        isSpecCompliantForm: Xb,
        toJSONObject: Qb,
        isAsyncFn: Zb,
        isThenable: Kb,
        setImmediate: rv,
        asap: kb,
        isIterable: Jb,
    };
function X(e, t, l, a, n) {
    (Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = 'AxiosError'),
        t && (this.code = t),
        l && (this.config = l),
        a && (this.request = a),
        n && ((this.response = n), (this.status = n.status ? n.status : null)));
}
T.inherits(X, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: T.toJSONObject(this.config),
            code: this.code,
            status: this.status,
        };
    },
});
const cv = X.prototype,
    sv = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
].forEach((e) => {
    sv[e] = { value: e };
});
Object.defineProperties(X, sv);
Object.defineProperty(cv, 'isAxiosError', { value: !0 });
X.from = (e, t, l, a, n, u) => {
    const i = Object.create(cv);
    return (
        T.toFlatObject(
            e,
            i,
            function (c) {
                return c !== Error.prototype;
            },
            (r) => r !== 'isAxiosError'
        ),
        X.call(i, e.message, t, l, a, n),
        (i.cause = e),
        (i.name = e.name),
        u && Object.assign(i, u),
        i
    );
};
const Fb = null;
function fs(e) {
    return T.isPlainObject(e) || T.isArray(e);
}
function fv(e) {
    return T.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function yd(e, t, l) {
    return e
        ? e
              .concat(t)
              .map(function (n, u) {
                  return ((n = fv(n)), !l && u ? '[' + n + ']' : n);
              })
              .join(l ? '.' : '')
        : t;
}
function $b(e) {
    return T.isArray(e) && !e.some(fs);
}
const Wb = T.toFlatObject(T, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
});
function yr(e, t, l) {
    if (!T.isObject(e)) throw new TypeError('target must be an object');
    ((t = t || new FormData()),
        (l = T.toFlatObject(l, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (S, A) {
            return !T.isUndefined(A[S]);
        })));
    const a = l.metaTokens,
        n = l.visitor || f,
        u = l.dots,
        i = l.indexes,
        c = (l.Blob || (typeof Blob < 'u' && Blob)) && T.isSpecCompliantForm(t);
    if (!T.isFunction(n)) throw new TypeError('visitor must be a function');
    function s(b) {
        if (b === null) return '';
        if (T.isDate(b)) return b.toISOString();
        if (T.isBoolean(b)) return b.toString();
        if (!c && T.isBlob(b)) throw new X('Blob is not supported. Use a Buffer instead.');
        return T.isArrayBuffer(b) || T.isTypedArray(b)
            ? c && typeof Blob == 'function'
                ? new Blob([b])
                : Buffer.from(b)
            : b;
    }
    function f(b, S, A) {
        let m = b;
        if (b && !A && typeof b == 'object') {
            if (T.endsWith(S, '{}')) ((S = a ? S : S.slice(0, -2)), (b = JSON.stringify(b)));
            else if (
                (T.isArray(b) && $b(b)) ||
                ((T.isFileList(b) || T.endsWith(S, '[]')) && (m = T.toArray(b)))
            )
                return (
                    (S = fv(S)),
                    m.forEach(function (y, p) {
                        !(T.isUndefined(y) || y === null) &&
                            t.append(i === !0 ? yd([S], p, u) : i === null ? S : S + '[]', s(y));
                    }),
                    !1
                );
        }
        return fs(b) ? !0 : (t.append(yd(A, S, u), s(b)), !1);
    }
    const h = [],
        d = Object.assign(Wb, { defaultVisitor: f, convertValue: s, isVisitable: fs });
    function v(b, S) {
        if (!T.isUndefined(b)) {
            if (h.indexOf(b) !== -1) throw Error('Circular reference detected in ' + S.join('.'));
            (h.push(b),
                T.forEach(b, function (m, o) {
                    (!(T.isUndefined(m) || m === null) &&
                        n.call(t, m, T.isString(o) ? o.trim() : o, S, d)) === !0 &&
                        v(m, S ? S.concat(o) : [o]);
                }),
                h.pop());
        }
    }
    if (!T.isObject(e)) throw new TypeError('data must be an object');
    return (v(e), t);
}
function vd(e) {
    const t = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\0',
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (a) {
        return t[a];
    });
}
function Af(e, t) {
    ((this._pairs = []), e && yr(e, this, t));
}
const ov = Af.prototype;
ov.append = function (t, l) {
    this._pairs.push([t, l]);
};
ov.toString = function (t) {
    const l = t
        ? function (a) {
              return t.call(this, a, vd);
          }
        : vd;
    return this._pairs
        .map(function (n) {
            return l(n[0]) + '=' + l(n[1]);
        }, '')
        .join('&');
};
function Pb(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}
function dv(e, t, l) {
    if (!t) return e;
    const a = (l && l.encode) || Pb;
    T.isFunction(l) && (l = { serialize: l });
    const n = l && l.serialize;
    let u;
    if (
        (n ? (u = n(t, l)) : (u = T.isURLSearchParams(t) ? t.toString() : new Af(t, l).toString(a)),
        u)
    ) {
        const i = e.indexOf('#');
        (i !== -1 && (e = e.slice(0, i)), (e += (e.indexOf('?') === -1 ? '?' : '&') + u));
    }
    return e;
}
class gd {
    constructor() {
        this.handlers = [];
    }
    use(t, l, a) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: l,
                synchronous: a ? a.synchronous : !1,
                runWhen: a ? a.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(t) {
        T.forEach(this.handlers, function (a) {
            a !== null && t(a);
        });
    }
}
const hv = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    Ib = typeof URLSearchParams < 'u' ? URLSearchParams : Af,
    eS = typeof FormData < 'u' ? FormData : null,
    tS = typeof Blob < 'u' ? Blob : null,
    lS = {
        isBrowser: !0,
        classes: { URLSearchParams: Ib, FormData: eS, Blob: tS },
        protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    },
    Tf = typeof window < 'u' && typeof document < 'u',
    os = (typeof navigator == 'object' && navigator) || void 0,
    aS = Tf && (!os || ['ReactNative', 'NativeScript', 'NS'].indexOf(os.product) < 0),
    nS =
        typeof WorkerGlobalScope < 'u' &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == 'function',
    uS = (Tf && window.location.href) || 'http://localhost',
    iS = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: Tf,
                hasStandardBrowserEnv: aS,
                hasStandardBrowserWebWorkerEnv: nS,
                navigator: os,
                origin: uS,
            },
            Symbol.toStringTag,
            { value: 'Module' }
        )
    ),
    Ye = { ...iS, ...lS };
function rS(e, t) {
    return yr(e, new Ye.classes.URLSearchParams(), {
        visitor: function (l, a, n, u) {
            return Ye.isNode && T.isBuffer(l)
                ? (this.append(a, l.toString('base64')), !1)
                : u.defaultVisitor.apply(this, arguments);
        },
        ...t,
    });
}
function cS(e) {
    return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function sS(e) {
    const t = {},
        l = Object.keys(e);
    let a;
    const n = l.length;
    let u;
    for (a = 0; a < n; a++) ((u = l[a]), (t[u] = e[u]));
    return t;
}
function mv(e) {
    function t(l, a, n, u) {
        let i = l[u++];
        if (i === '__proto__') return !0;
        const r = Number.isFinite(+i),
            c = u >= l.length;
        return (
            (i = !i && T.isArray(n) ? n.length : i),
            c
                ? (T.hasOwnProp(n, i) ? (n[i] = [n[i], a]) : (n[i] = a), !r)
                : ((!n[i] || !T.isObject(n[i])) && (n[i] = []),
                  t(l, a, n[i], u) && T.isArray(n[i]) && (n[i] = sS(n[i])),
                  !r)
        );
    }
    if (T.isFormData(e) && T.isFunction(e.entries)) {
        const l = {};
        return (
            T.forEachEntry(e, (a, n) => {
                t(cS(a), n, l, 0);
            }),
            l
        );
    }
    return null;
}
function fS(e, t, l) {
    if (T.isString(e))
        try {
            return ((t || JSON.parse)(e), T.trim(e));
        } catch (a) {
            if (a.name !== 'SyntaxError') throw a;
        }
    return (l || JSON.stringify)(e);
}
const Tu = {
    transitional: hv,
    adapter: ['xhr', 'http', 'fetch'],
    transformRequest: [
        function (t, l) {
            const a = l.getContentType() || '',
                n = a.indexOf('application/json') > -1,
                u = T.isObject(t);
            if ((u && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t)))
                return n ? JSON.stringify(mv(t)) : t;
            if (
                T.isArrayBuffer(t) ||
                T.isBuffer(t) ||
                T.isStream(t) ||
                T.isFile(t) ||
                T.isBlob(t) ||
                T.isReadableStream(t)
            )
                return t;
            if (T.isArrayBufferView(t)) return t.buffer;
            if (T.isURLSearchParams(t))
                return (
                    l.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1),
                    t.toString()
                );
            let r;
            if (u) {
                if (a.indexOf('application/x-www-form-urlencoded') > -1)
                    return rS(t, this.formSerializer).toString();
                if ((r = T.isFileList(t)) || a.indexOf('multipart/form-data') > -1) {
                    const c = this.env && this.env.FormData;
                    return yr(r ? { 'files[]': t } : t, c && new c(), this.formSerializer);
                }
            }
            return u || n ? (l.setContentType('application/json', !1), fS(t)) : t;
        },
    ],
    transformResponse: [
        function (t) {
            const l = this.transitional || Tu.transitional,
                a = l && l.forcedJSONParsing,
                n = this.responseType === 'json';
            if (T.isResponse(t) || T.isReadableStream(t)) return t;
            if (t && T.isString(t) && ((a && !this.responseType) || n)) {
                const i = !(l && l.silentJSONParsing) && n;
                try {
                    return JSON.parse(t);
                } catch (r) {
                    if (i)
                        throw r.name === 'SyntaxError'
                            ? X.from(r, X.ERR_BAD_RESPONSE, this, null, this.response)
                            : r;
                }
            }
            return t;
        },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Ye.classes.FormData, Blob: Ye.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300;
    },
    headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
};
T.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
    Tu.headers[e] = {};
});
const oS = T.toObjectSet([
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
    ]),
    dS = (e) => {
        const t = {};
        let l, a, n;
        return (
            e &&
                e
                    .split(
                        `
`
                    )
                    .forEach(function (i) {
                        ((n = i.indexOf(':')),
                            (l = i.substring(0, n).trim().toLowerCase()),
                            (a = i.substring(n + 1).trim()),
                            !(!l || (t[l] && oS[l])) &&
                                (l === 'set-cookie'
                                    ? t[l]
                                        ? t[l].push(a)
                                        : (t[l] = [a])
                                    : (t[l] = t[l] ? t[l] + ', ' + a : a)));
                    }),
            t
        );
    },
    pd = Symbol('internals');
function yn(e) {
    return e && String(e).trim().toLowerCase();
}
function ni(e) {
    return e === !1 || e == null ? e : T.isArray(e) ? e.map(ni) : String(e);
}
function hS(e) {
    const t = Object.create(null),
        l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let a;
    for (; (a = l.exec(e)); ) t[a[1]] = a[2];
    return t;
}
const mS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function rc(e, t, l, a, n) {
    if (T.isFunction(a)) return a.call(this, t, l);
    if ((n && (t = l), !!T.isString(t))) {
        if (T.isString(a)) return t.indexOf(a) !== -1;
        if (T.isRegExp(a)) return a.test(t);
    }
}
function yS(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, l, a) => l.toUpperCase() + a);
}
function vS(e, t) {
    const l = T.toCamelCase(' ' + t);
    ['get', 'set', 'has'].forEach((a) => {
        Object.defineProperty(e, a + l, {
            value: function (n, u, i) {
                return this[a].call(this, t, n, u, i);
            },
            configurable: !0,
        });
    });
}
let Ie = class {
    constructor(t) {
        t && this.set(t);
    }
    set(t, l, a) {
        const n = this;
        function u(r, c, s) {
            const f = yn(c);
            if (!f) throw new Error('header name must be a non-empty string');
            const h = T.findKey(n, f);
            (!h || n[h] === void 0 || s === !0 || (s === void 0 && n[h] !== !1)) &&
                (n[h || c] = ni(r));
        }
        const i = (r, c) => T.forEach(r, (s, f) => u(s, f, c));
        if (T.isPlainObject(t) || t instanceof this.constructor) i(t, l);
        else if (T.isString(t) && (t = t.trim()) && !mS(t)) i(dS(t), l);
        else if (T.isObject(t) && T.isIterable(t)) {
            let r = {},
                c,
                s;
            for (const f of t) {
                if (!T.isArray(f)) throw TypeError('Object iterator must return a key-value pair');
                r[(s = f[0])] = (c = r[s]) ? (T.isArray(c) ? [...c, f[1]] : [c, f[1]]) : f[1];
            }
            i(r, l);
        } else t != null && u(l, t, a);
        return this;
    }
    get(t, l) {
        if (((t = yn(t)), t)) {
            const a = T.findKey(this, t);
            if (a) {
                const n = this[a];
                if (!l) return n;
                if (l === !0) return hS(n);
                if (T.isFunction(l)) return l.call(this, n, a);
                if (T.isRegExp(l)) return l.exec(n);
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(t, l) {
        if (((t = yn(t)), t)) {
            const a = T.findKey(this, t);
            return !!(a && this[a] !== void 0 && (!l || rc(this, this[a], a, l)));
        }
        return !1;
    }
    delete(t, l) {
        const a = this;
        let n = !1;
        function u(i) {
            if (((i = yn(i)), i)) {
                const r = T.findKey(a, i);
                r && (!l || rc(a, a[r], r, l)) && (delete a[r], (n = !0));
            }
        }
        return (T.isArray(t) ? t.forEach(u) : u(t), n);
    }
    clear(t) {
        const l = Object.keys(this);
        let a = l.length,
            n = !1;
        for (; a--; ) {
            const u = l[a];
            (!t || rc(this, this[u], u, t, !0)) && (delete this[u], (n = !0));
        }
        return n;
    }
    normalize(t) {
        const l = this,
            a = {};
        return (
            T.forEach(this, (n, u) => {
                const i = T.findKey(a, u);
                if (i) {
                    ((l[i] = ni(n)), delete l[u]);
                    return;
                }
                const r = t ? yS(u) : String(u).trim();
                (r !== u && delete l[u], (l[r] = ni(n)), (a[r] = !0));
            }),
            this
        );
    }
    concat(...t) {
        return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
        const l = Object.create(null);
        return (
            T.forEach(this, (a, n) => {
                a != null && a !== !1 && (l[n] = t && T.isArray(a) ? a.join(', ') : a);
            }),
            l
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, l]) => t + ': ' + l).join(`
`);
    }
    getSetCookie() {
        return this.get('set-cookie') || [];
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(t) {
        return t instanceof this ? t : new this(t);
    }
    static concat(t, ...l) {
        const a = new this(t);
        return (l.forEach((n) => a.set(n)), a);
    }
    static accessor(t) {
        const a = (this[pd] = this[pd] = { accessors: {} }).accessors,
            n = this.prototype;
        function u(i) {
            const r = yn(i);
            a[r] || (vS(n, i), (a[r] = !0));
        }
        return (T.isArray(t) ? t.forEach(u) : u(t), this);
    }
};
Ie.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
]);
T.reduceDescriptors(Ie.prototype, ({ value: e }, t) => {
    let l = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(a) {
            this[l] = a;
        },
    };
});
T.freezeMethods(Ie);
function cc(e, t) {
    const l = this || Tu,
        a = t || l,
        n = Ie.from(a.headers);
    let u = a.data;
    return (
        T.forEach(e, function (r) {
            u = r.call(l, u, n.normalize(), t ? t.status : void 0);
        }),
        n.normalize(),
        u
    );
}
function yv(e) {
    return !!(e && e.__CANCEL__);
}
function nn(e, t, l) {
    (X.call(this, e ?? 'canceled', X.ERR_CANCELED, t, l), (this.name = 'CanceledError'));
}
T.inherits(nn, X, { __CANCEL__: !0 });
function vv(e, t, l) {
    const a = l.config.validateStatus;
    !l.status || !a || a(l.status)
        ? e(l)
        : t(
              new X(
                  'Request failed with status code ' + l.status,
                  [X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
                  l.config,
                  l.request,
                  l
              )
          );
}
function gS(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || '';
}
function pS(e, t) {
    e = e || 10;
    const l = new Array(e),
        a = new Array(e);
    let n = 0,
        u = 0,
        i;
    return (
        (t = t !== void 0 ? t : 1e3),
        function (c) {
            const s = Date.now(),
                f = a[u];
            (i || (i = s), (l[n] = c), (a[n] = s));
            let h = u,
                d = 0;
            for (; h !== n; ) ((d += l[h++]), (h = h % e));
            if (((n = (n + 1) % e), n === u && (u = (u + 1) % e), s - i < t)) return;
            const v = f && s - f;
            return v ? Math.round((d * 1e3) / v) : void 0;
        }
    );
}
function bS(e, t) {
    let l = 0,
        a = 1e3 / t,
        n,
        u;
    const i = (s, f = Date.now()) => {
        ((l = f), (n = null), u && (clearTimeout(u), (u = null)), e(...s));
    };
    return [
        (...s) => {
            const f = Date.now(),
                h = f - l;
            h >= a
                ? i(s, f)
                : ((n = s),
                  u ||
                      (u = setTimeout(() => {
                          ((u = null), i(n));
                      }, a - h)));
        },
        () => n && i(n),
    ];
}
const Li = (e, t, l = 3) => {
        let a = 0;
        const n = pS(50, 250);
        return bS((u) => {
            const i = u.loaded,
                r = u.lengthComputable ? u.total : void 0,
                c = i - a,
                s = n(c),
                f = i <= r;
            a = i;
            const h = {
                loaded: i,
                total: r,
                progress: r ? i / r : void 0,
                bytes: c,
                rate: s || void 0,
                estimated: s && r && f ? (r - i) / s : void 0,
                event: u,
                lengthComputable: r != null,
                [t ? 'download' : 'upload']: !0,
            };
            e(h);
        }, l);
    },
    bd = (e, t) => {
        const l = e != null;
        return [(a) => t[0]({ lengthComputable: l, total: e, loaded: a }), t[1]];
    },
    Sd =
        (e) =>
        (...t) =>
            T.asap(() => e(...t)),
    SS = Ye.hasStandardBrowserEnv
        ? ((e, t) => (l) => (
              (l = new URL(l, Ye.origin)),
              e.protocol === l.protocol && e.host === l.host && (t || e.port === l.port)
          ))(new URL(Ye.origin), Ye.navigator && /(msie|trident)/i.test(Ye.navigator.userAgent))
        : () => !0,
    ES = Ye.hasStandardBrowserEnv
        ? {
              write(e, t, l, a, n, u) {
                  const i = [e + '=' + encodeURIComponent(t)];
                  (T.isNumber(l) && i.push('expires=' + new Date(l).toGMTString()),
                      T.isString(a) && i.push('path=' + a),
                      T.isString(n) && i.push('domain=' + n),
                      u === !0 && i.push('secure'),
                      (document.cookie = i.join('; ')));
              },
              read(e) {
                  const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
                  return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                  this.write(e, '', Date.now() - 864e5);
              },
          }
        : {
              write() {},
              read() {
                  return null;
              },
              remove() {},
          };
function AS(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function TS(e, t) {
    return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function gv(e, t, l) {
    let a = !AS(t);
    return e && (a || l == !1) ? TS(e, t) : t;
}
const Ed = (e) => (e instanceof Ie ? { ...e } : e);
function ta(e, t) {
    t = t || {};
    const l = {};
    function a(s, f, h, d) {
        return T.isPlainObject(s) && T.isPlainObject(f)
            ? T.merge.call({ caseless: d }, s, f)
            : T.isPlainObject(f)
              ? T.merge({}, f)
              : T.isArray(f)
                ? f.slice()
                : f;
    }
    function n(s, f, h, d) {
        if (T.isUndefined(f)) {
            if (!T.isUndefined(s)) return a(void 0, s, h, d);
        } else return a(s, f, h, d);
    }
    function u(s, f) {
        if (!T.isUndefined(f)) return a(void 0, f);
    }
    function i(s, f) {
        if (T.isUndefined(f)) {
            if (!T.isUndefined(s)) return a(void 0, s);
        } else return a(void 0, f);
    }
    function r(s, f, h) {
        if (h in t) return a(s, f);
        if (h in e) return a(void 0, s);
    }
    const c = {
        url: u,
        method: u,
        data: u,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: r,
        headers: (s, f, h) => n(Ed(s), Ed(f), h, !0),
    };
    return (
        T.forEach(Object.keys({ ...e, ...t }), function (f) {
            const h = c[f] || n,
                d = h(e[f], t[f], f);
            (T.isUndefined(d) && h !== r) || (l[f] = d);
        }),
        l
    );
}
const pv = (e) => {
        const t = ta({}, e);
        let {
            data: l,
            withXSRFToken: a,
            xsrfHeaderName: n,
            xsrfCookieName: u,
            headers: i,
            auth: r,
        } = t;
        ((t.headers = i = Ie.from(i)),
            (t.url = dv(gv(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer)),
            r &&
                i.set(
                    'Authorization',
                    'Basic ' +
                        btoa(
                            (r.username || '') +
                                ':' +
                                (r.password ? unescape(encodeURIComponent(r.password)) : '')
                        )
                ));
        let c;
        if (T.isFormData(l)) {
            if (Ye.hasStandardBrowserEnv || Ye.hasStandardBrowserWebWorkerEnv)
                i.setContentType(void 0);
            else if ((c = i.getContentType()) !== !1) {
                const [s, ...f] = c
                    ? c
                          .split(';')
                          .map((h) => h.trim())
                          .filter(Boolean)
                    : [];
                i.setContentType([s || 'multipart/form-data', ...f].join('; '));
            }
        }
        if (
            Ye.hasStandardBrowserEnv &&
            (a && T.isFunction(a) && (a = a(t)), a || (a !== !1 && SS(t.url)))
        ) {
            const s = n && u && ES.read(u);
            s && i.set(n, s);
        }
        return t;
    },
    RS = typeof XMLHttpRequest < 'u',
    OS =
        RS &&
        function (e) {
            return new Promise(function (l, a) {
                const n = pv(e);
                let u = n.data;
                const i = Ie.from(n.headers).normalize();
                let { responseType: r, onUploadProgress: c, onDownloadProgress: s } = n,
                    f,
                    h,
                    d,
                    v,
                    b;
                function S() {
                    (v && v(),
                        b && b(),
                        n.cancelToken && n.cancelToken.unsubscribe(f),
                        n.signal && n.signal.removeEventListener('abort', f));
                }
                let A = new XMLHttpRequest();
                (A.open(n.method.toUpperCase(), n.url, !0), (A.timeout = n.timeout));
                function m() {
                    if (!A) return;
                    const y = Ie.from('getAllResponseHeaders' in A && A.getAllResponseHeaders()),
                        x = {
                            data: !r || r === 'text' || r === 'json' ? A.responseText : A.response,
                            status: A.status,
                            statusText: A.statusText,
                            headers: y,
                            config: e,
                            request: A,
                        };
                    (vv(
                        function (N) {
                            (l(N), S());
                        },
                        function (N) {
                            (a(N), S());
                        },
                        x
                    ),
                        (A = null));
                }
                ('onloadend' in A
                    ? (A.onloadend = m)
                    : (A.onreadystatechange = function () {
                          !A ||
                              A.readyState !== 4 ||
                              (A.status === 0 &&
                                  !(A.responseURL && A.responseURL.indexOf('file:') === 0)) ||
                              setTimeout(m);
                      }),
                    (A.onabort = function () {
                        A && (a(new X('Request aborted', X.ECONNABORTED, e, A)), (A = null));
                    }),
                    (A.onerror = function () {
                        (a(new X('Network Error', X.ERR_NETWORK, e, A)), (A = null));
                    }),
                    (A.ontimeout = function () {
                        let p = n.timeout
                            ? 'timeout of ' + n.timeout + 'ms exceeded'
                            : 'timeout exceeded';
                        const x = n.transitional || hv;
                        (n.timeoutErrorMessage && (p = n.timeoutErrorMessage),
                            a(new X(p, x.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED, e, A)),
                            (A = null));
                    }),
                    u === void 0 && i.setContentType(null),
                    'setRequestHeader' in A &&
                        T.forEach(i.toJSON(), function (p, x) {
                            A.setRequestHeader(x, p);
                        }),
                    T.isUndefined(n.withCredentials) || (A.withCredentials = !!n.withCredentials),
                    r && r !== 'json' && (A.responseType = n.responseType),
                    s && (([d, b] = Li(s, !0)), A.addEventListener('progress', d)),
                    c &&
                        A.upload &&
                        (([h, v] = Li(c)),
                        A.upload.addEventListener('progress', h),
                        A.upload.addEventListener('loadend', v)),
                    (n.cancelToken || n.signal) &&
                        ((f = (y) => {
                            A && (a(!y || y.type ? new nn(null, e, A) : y), A.abort(), (A = null));
                        }),
                        n.cancelToken && n.cancelToken.subscribe(f),
                        n.signal &&
                            (n.signal.aborted ? f() : n.signal.addEventListener('abort', f))));
                const o = gS(n.url);
                if (o && Ye.protocols.indexOf(o) === -1) {
                    a(new X('Unsupported protocol ' + o + ':', X.ERR_BAD_REQUEST, e));
                    return;
                }
                A.send(u || null);
            });
        },
    xS = (e, t) => {
        const { length: l } = (e = e ? e.filter(Boolean) : []);
        if (t || l) {
            let a = new AbortController(),
                n;
            const u = function (s) {
                if (!n) {
                    ((n = !0), r());
                    const f = s instanceof Error ? s : this.reason;
                    a.abort(f instanceof X ? f : new nn(f instanceof Error ? f.message : f));
                }
            };
            let i =
                t &&
                setTimeout(() => {
                    ((i = null), u(new X(`timeout ${t} of ms exceeded`, X.ETIMEDOUT)));
                }, t);
            const r = () => {
                e &&
                    (i && clearTimeout(i),
                    (i = null),
                    e.forEach((s) => {
                        s.unsubscribe ? s.unsubscribe(u) : s.removeEventListener('abort', u);
                    }),
                    (e = null));
            };
            e.forEach((s) => s.addEventListener('abort', u));
            const { signal: c } = a;
            return ((c.unsubscribe = () => T.asap(r)), c);
        }
    },
    _S = function* (e, t) {
        let l = e.byteLength;
        if (l < t) {
            yield e;
            return;
        }
        let a = 0,
            n;
        for (; a < l; ) ((n = a + t), yield e.slice(a, n), (a = n));
    },
    DS = async function* (e, t) {
        for await (const l of NS(e)) yield* _S(l, t);
    },
    NS = async function* (e) {
        if (e[Symbol.asyncIterator]) {
            yield* e;
            return;
        }
        const t = e.getReader();
        try {
            for (;;) {
                const { done: l, value: a } = await t.read();
                if (l) break;
                yield a;
            }
        } finally {
            await t.cancel();
        }
    },
    Ad = (e, t, l, a) => {
        const n = DS(e, t);
        let u = 0,
            i,
            r = (c) => {
                i || ((i = !0), a && a(c));
            };
        return new ReadableStream(
            {
                async pull(c) {
                    try {
                        const { done: s, value: f } = await n.next();
                        if (s) {
                            (r(), c.close());
                            return;
                        }
                        let h = f.byteLength;
                        if (l) {
                            let d = (u += h);
                            l(d);
                        }
                        c.enqueue(new Uint8Array(f));
                    } catch (s) {
                        throw (r(s), s);
                    }
                },
                cancel(c) {
                    return (r(c), n.return());
                },
            },
            { highWaterMark: 2 }
        );
    },
    vr =
        typeof fetch == 'function' && typeof Request == 'function' && typeof Response == 'function',
    bv = vr && typeof ReadableStream == 'function',
    US =
        vr &&
        (typeof TextEncoder == 'function'
            ? (
                  (e) => (t) =>
                      e.encode(t)
              )(new TextEncoder())
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    Sv = (e, ...t) => {
        try {
            return !!e(...t);
        } catch {
            return !1;
        }
    },
    MS =
        bv &&
        Sv(() => {
            let e = !1;
            const t = new Request(Ye.origin, {
                body: new ReadableStream(),
                method: 'POST',
                get duplex() {
                    return ((e = !0), 'half');
                },
            }).headers.has('Content-Type');
            return e && !t;
        }),
    Td = 64 * 1024,
    ds = bv && Sv(() => T.isReadableStream(new Response('').body)),
    qi = { stream: ds && ((e) => e.body) };
vr &&
    ((e) => {
        ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
            !qi[t] &&
                (qi[t] = T.isFunction(e[t])
                    ? (l) => l[t]()
                    : (l, a) => {
                          throw new X(
                              `Response type '${t}' is not supported`,
                              X.ERR_NOT_SUPPORT,
                              a
                          );
                      });
        });
    })(new Response());
const zS = async (e) => {
        if (e == null) return 0;
        if (T.isBlob(e)) return e.size;
        if (T.isSpecCompliantForm(e))
            return (await new Request(Ye.origin, { method: 'POST', body: e }).arrayBuffer())
                .byteLength;
        if (T.isArrayBufferView(e) || T.isArrayBuffer(e)) return e.byteLength;
        if ((T.isURLSearchParams(e) && (e = e + ''), T.isString(e)))
            return (await US(e)).byteLength;
    },
    CS = async (e, t) => {
        const l = T.toFiniteNumber(e.getContentLength());
        return l ?? zS(t);
    },
    wS =
        vr &&
        (async (e) => {
            let {
                url: t,
                method: l,
                data: a,
                signal: n,
                cancelToken: u,
                timeout: i,
                onDownloadProgress: r,
                onUploadProgress: c,
                responseType: s,
                headers: f,
                withCredentials: h = 'same-origin',
                fetchOptions: d,
            } = pv(e);
            s = s ? (s + '').toLowerCase() : 'text';
            let v = xS([n, u && u.toAbortSignal()], i),
                b;
            const S =
                v &&
                v.unsubscribe &&
                (() => {
                    v.unsubscribe();
                });
            let A;
            try {
                if (c && MS && l !== 'get' && l !== 'head' && (A = await CS(f, a)) !== 0) {
                    let x = new Request(t, { method: 'POST', body: a, duplex: 'half' }),
                        B;
                    if (
                        (T.isFormData(a) &&
                            (B = x.headers.get('content-type')) &&
                            f.setContentType(B),
                        x.body)
                    ) {
                        const [N, w] = bd(A, Li(Sd(c)));
                        a = Ad(x.body, Td, N, w);
                    }
                }
                T.isString(h) || (h = h ? 'include' : 'omit');
                const m = 'credentials' in Request.prototype;
                b = new Request(t, {
                    ...d,
                    signal: v,
                    method: l.toUpperCase(),
                    headers: f.normalize().toJSON(),
                    body: a,
                    duplex: 'half',
                    credentials: m ? h : void 0,
                });
                let o = await fetch(b, d);
                const y = ds && (s === 'stream' || s === 'response');
                if (ds && (r || (y && S))) {
                    const x = {};
                    ['status', 'statusText', 'headers'].forEach((q) => {
                        x[q] = o[q];
                    });
                    const B = T.toFiniteNumber(o.headers.get('content-length')),
                        [N, w] = (r && bd(B, Li(Sd(r), !0))) || [];
                    o = new Response(
                        Ad(o.body, Td, N, () => {
                            (w && w(), S && S());
                        }),
                        x
                    );
                }
                s = s || 'text';
                let p = await qi[T.findKey(qi, s) || 'text'](o, e);
                return (
                    !y && S && S(),
                    await new Promise((x, B) => {
                        vv(x, B, {
                            data: p,
                            headers: Ie.from(o.headers),
                            status: o.status,
                            statusText: o.statusText,
                            config: e,
                            request: b,
                        });
                    })
                );
            } catch (m) {
                throw (
                    S && S(),
                    m && m.name === 'TypeError' && /Load failed|fetch/i.test(m.message)
                        ? Object.assign(new X('Network Error', X.ERR_NETWORK, e, b), {
                              cause: m.cause || m,
                          })
                        : X.from(m, m && m.code, e, b)
                );
            }
        }),
    hs = { http: Fb, xhr: OS, fetch: wS };
T.forEach(hs, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, 'name', { value: t });
        } catch {}
        Object.defineProperty(e, 'adapterName', { value: t });
    }
});
const Rd = (e) => `- ${e}`,
    BS = (e) => T.isFunction(e) || e === null || e === !1,
    Ev = {
        getAdapter: (e) => {
            e = T.isArray(e) ? e : [e];
            const { length: t } = e;
            let l, a;
            const n = {};
            for (let u = 0; u < t; u++) {
                l = e[u];
                let i;
                if (((a = l), !BS(l) && ((a = hs[(i = String(l)).toLowerCase()]), a === void 0)))
                    throw new X(`Unknown adapter '${i}'`);
                if (a) break;
                n[i || '#' + u] = a;
            }
            if (!a) {
                const u = Object.entries(n).map(
                    ([r, c]) =>
                        `adapter ${r} ` +
                        (c === !1
                            ? 'is not supported by the environment'
                            : 'is not available in the build')
                );
                let i = t
                    ? u.length > 1
                        ? `since :
` +
                          u.map(Rd).join(`
`)
                        : ' ' + Rd(u[0])
                    : 'as no adapter specified';
                throw new X(
                    'There is no suitable adapter to dispatch the request ' + i,
                    'ERR_NOT_SUPPORT'
                );
            }
            return a;
        },
        adapters: hs,
    };
function sc(e) {
    if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
        throw new nn(null, e);
}
function Od(e) {
    return (
        sc(e),
        (e.headers = Ie.from(e.headers)),
        (e.data = cc.call(e, e.transformRequest)),
        ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
        Ev.getAdapter(e.adapter || Tu.adapter)(e).then(
            function (a) {
                return (
                    sc(e),
                    (a.data = cc.call(e, e.transformResponse, a)),
                    (a.headers = Ie.from(a.headers)),
                    a
                );
            },
            function (a) {
                return (
                    yv(a) ||
                        (sc(e),
                        a &&
                            a.response &&
                            ((a.response.data = cc.call(e, e.transformResponse, a.response)),
                            (a.response.headers = Ie.from(a.response.headers)))),
                    Promise.reject(a)
                );
            }
        )
    );
}
const Av = '1.11.0',
    gr = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
    gr[e] = function (a) {
        return typeof a === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
});
const xd = {};
gr.transitional = function (t, l, a) {
    function n(u, i) {
        return '[Axios v' + Av + "] Transitional option '" + u + "'" + i + (a ? '. ' + a : '');
    }
    return (u, i, r) => {
        if (t === !1)
            throw new X(n(i, ' has been removed' + (l ? ' in ' + l : '')), X.ERR_DEPRECATED);
        return (
            l &&
                !xd[i] &&
                ((xd[i] = !0),
                console.warn(
                    n(
                        i,
                        ' has been deprecated since v' +
                            l +
                            ' and will be removed in the near future'
                    )
                )),
            t ? t(u, i, r) : !0
        );
    };
};
gr.spelling = function (t) {
    return (l, a) => (console.warn(`${a} is likely a misspelling of ${t}`), !0);
};
function jS(e, t, l) {
    if (typeof e != 'object') throw new X('options must be an object', X.ERR_BAD_OPTION_VALUE);
    const a = Object.keys(e);
    let n = a.length;
    for (; n-- > 0; ) {
        const u = a[n],
            i = t[u];
        if (i) {
            const r = e[u],
                c = r === void 0 || i(r, u, e);
            if (c !== !0) throw new X('option ' + u + ' must be ' + c, X.ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (l !== !0) throw new X('Unknown option ' + u, X.ERR_BAD_OPTION);
    }
}
const ui = { assertOptions: jS, validators: gr },
    Dt = ui.validators;
let $l = class {
    constructor(t) {
        ((this.defaults = t || {}),
            (this.interceptors = { request: new gd(), response: new gd() }));
    }
    async request(t, l) {
        try {
            return await this._request(t, l);
        } catch (a) {
            if (a instanceof Error) {
                let n = {};
                Error.captureStackTrace ? Error.captureStackTrace(n) : (n = new Error());
                const u = n.stack ? n.stack.replace(/^.+\n/, '') : '';
                try {
                    a.stack
                        ? u &&
                          !String(a.stack).endsWith(u.replace(/^.+\n.+\n/, '')) &&
                          (a.stack +=
                              `
` + u)
                        : (a.stack = u);
                } catch {}
            }
            throw a;
        }
    }
    _request(t, l) {
        (typeof t == 'string' ? ((l = l || {}), (l.url = t)) : (l = t || {}),
            (l = ta(this.defaults, l)));
        const { transitional: a, paramsSerializer: n, headers: u } = l;
        (a !== void 0 &&
            ui.assertOptions(
                a,
                {
                    silentJSONParsing: Dt.transitional(Dt.boolean),
                    forcedJSONParsing: Dt.transitional(Dt.boolean),
                    clarifyTimeoutError: Dt.transitional(Dt.boolean),
                },
                !1
            ),
            n != null &&
                (T.isFunction(n)
                    ? (l.paramsSerializer = { serialize: n })
                    : ui.assertOptions(n, { encode: Dt.function, serialize: Dt.function }, !0)),
            l.allowAbsoluteUrls !== void 0 ||
                (this.defaults.allowAbsoluteUrls !== void 0
                    ? (l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                    : (l.allowAbsoluteUrls = !0)),
            ui.assertOptions(
                l,
                { baseUrl: Dt.spelling('baseURL'), withXsrfToken: Dt.spelling('withXSRFToken') },
                !0
            ),
            (l.method = (l.method || this.defaults.method || 'get').toLowerCase()));
        let i = u && T.merge(u.common, u[l.method]);
        (u &&
            T.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (b) => {
                delete u[b];
            }),
            (l.headers = Ie.concat(i, u)));
        const r = [];
        let c = !0;
        this.interceptors.request.forEach(function (S) {
            (typeof S.runWhen == 'function' && S.runWhen(l) === !1) ||
                ((c = c && S.synchronous), r.unshift(S.fulfilled, S.rejected));
        });
        const s = [];
        this.interceptors.response.forEach(function (S) {
            s.push(S.fulfilled, S.rejected);
        });
        let f,
            h = 0,
            d;
        if (!c) {
            const b = [Od.bind(this), void 0];
            for (b.unshift(...r), b.push(...s), d = b.length, f = Promise.resolve(l); h < d; )
                f = f.then(b[h++], b[h++]);
            return f;
        }
        d = r.length;
        let v = l;
        for (h = 0; h < d; ) {
            const b = r[h++],
                S = r[h++];
            try {
                v = b(v);
            } catch (A) {
                S.call(this, A);
                break;
            }
        }
        try {
            f = Od.call(this, v);
        } catch (b) {
            return Promise.reject(b);
        }
        for (h = 0, d = s.length; h < d; ) f = f.then(s[h++], s[h++]);
        return f;
    }
    getUri(t) {
        t = ta(this.defaults, t);
        const l = gv(t.baseURL, t.url, t.allowAbsoluteUrls);
        return dv(l, t.params, t.paramsSerializer);
    }
};
T.forEach(['delete', 'get', 'head', 'options'], function (t) {
    $l.prototype[t] = function (l, a) {
        return this.request(ta(a || {}, { method: t, url: l, data: (a || {}).data }));
    };
});
T.forEach(['post', 'put', 'patch'], function (t) {
    function l(a) {
        return function (u, i, r) {
            return this.request(
                ta(r || {}, {
                    method: t,
                    headers: a ? { 'Content-Type': 'multipart/form-data' } : {},
                    url: u,
                    data: i,
                })
            );
        };
    }
    (($l.prototype[t] = l()), ($l.prototype[t + 'Form'] = l(!0)));
});
let HS = class Tv {
    constructor(t) {
        if (typeof t != 'function') throw new TypeError('executor must be a function.');
        let l;
        this.promise = new Promise(function (u) {
            l = u;
        });
        const a = this;
        (this.promise.then((n) => {
            if (!a._listeners) return;
            let u = a._listeners.length;
            for (; u-- > 0; ) a._listeners[u](n);
            a._listeners = null;
        }),
            (this.promise.then = (n) => {
                let u;
                const i = new Promise((r) => {
                    (a.subscribe(r), (u = r));
                }).then(n);
                return (
                    (i.cancel = function () {
                        a.unsubscribe(u);
                    }),
                    i
                );
            }),
            t(function (u, i, r) {
                a.reason || ((a.reason = new nn(u, i, r)), l(a.reason));
            }));
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const l = this._listeners.indexOf(t);
        l !== -1 && this._listeners.splice(l, 1);
    }
    toAbortSignal() {
        const t = new AbortController(),
            l = (a) => {
                t.abort(a);
            };
        return (this.subscribe(l), (t.signal.unsubscribe = () => this.unsubscribe(l)), t.signal);
    }
    static source() {
        let t;
        return {
            token: new Tv(function (n) {
                t = n;
            }),
            cancel: t,
        };
    }
};
function LS(e) {
    return function (l) {
        return e.apply(null, l);
    };
}
function qS(e) {
    return T.isObject(e) && e.isAxiosError === !0;
}
const ms = {
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
    NetworkAuthenticationRequired: 511,
};
Object.entries(ms).forEach(([e, t]) => {
    ms[t] = e;
});
function Rv(e) {
    const t = new $l(e),
        l = ev($l.prototype.request, t);
    return (
        T.extend(l, $l.prototype, t, { allOwnKeys: !0 }),
        T.extend(l, t, null, { allOwnKeys: !0 }),
        (l.create = function (n) {
            return Rv(ta(e, n));
        }),
        l
    );
}
const ie = Rv(Tu);
ie.Axios = $l;
ie.CanceledError = nn;
ie.CancelToken = HS;
ie.isCancel = yv;
ie.VERSION = Av;
ie.toFormData = yr;
ie.AxiosError = X;
ie.Cancel = ie.CanceledError;
ie.all = function (t) {
    return Promise.all(t);
};
ie.spread = LS;
ie.isAxiosError = qS;
ie.mergeConfig = ta;
ie.AxiosHeaders = Ie;
ie.formToJSON = (e) => mv(T.isHTMLForm(e) ? new FormData(e) : e);
ie.getAdapter = Ev.getAdapter;
ie.HttpStatusCode = ms;
ie.default = ie;
const {
        Axios: qE,
        AxiosError: VE,
        CanceledError: YE,
        isCancel: GE,
        CancelToken: XE,
        VERSION: QE,
        all: ZE,
        Cancel: KE,
        isAxiosError: kE,
        spread: JE,
        toFormData: FE,
        AxiosHeaders: $E,
        HttpStatusCode: WE,
        formToJSON: PE,
        getAdapter: IE,
        mergeConfig: e2,
    } = ie,
    ra = 'https://665de6d7e88051d60408c32d.mockapi.io',
    VS = async () => {
        const { data: e } = await ie.get(`${ra}/post`);
        return e;
    },
    YS = async (e) => {
        const { data: t } = await ie.get(`${ra}/post/${e}`);
        return t;
    },
    GS = async (e) => {
        const { data: t } = await ie.post(`${ra}/post`, e);
        return t;
    },
    Ov = async (e) => {
        const { data: t } = await ie.delete(`${ra}/post/${e}`);
        return t;
    },
    XS = async (e) => {
        const { data: t } = await ie.get(`${ra}/post/${e}/comment`);
        return t;
    },
    QS = async (e, t) => {
        const { data: l } = await ie.post(`${ra}/post/${e}/comment`, t);
        return l;
    },
    ZS = async (e, t) => {
        const { data: l } = await ie.delete(`${ra}/post/${e}/comment/${t}`);
        return l;
    };
var xv = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    _d = Oe.createContext && Oe.createContext(xv),
    KS = ['attr', 'size', 'title'];
function kS(e, t) {
    if (e == null) return {};
    var l = JS(e, t),
        a,
        n;
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        for (n = 0; n < u.length; n++)
            ((a = u[n]),
                !(t.indexOf(a) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, a) &&
                    (l[a] = e[a]));
    }
    return l;
}
function JS(e, t) {
    if (e == null) return {};
    var l = {};
    for (var a in e)
        if (Object.prototype.hasOwnProperty.call(e, a)) {
            if (t.indexOf(a) >= 0) continue;
            l[a] = e[a];
        }
    return l;
}
function Vi() {
    return (
        (Vi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var l = arguments[t];
                      for (var a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
                  }
                  return e;
              }),
        Vi.apply(this, arguments)
    );
}
function Dd(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        (t &&
            (a = a.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            l.push.apply(l, a));
    }
    return l;
}
function Yi(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Dd(Object(l), !0).forEach(function (a) {
                  FS(e, a, l[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
              : Dd(Object(l)).forEach(function (a) {
                    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(l, a));
                });
    }
    return e;
}
function FS(e, t, l) {
    return (
        (t = $S(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = l),
        e
    );
}
function $S(e) {
    var t = WS(e, 'string');
    return typeof t == 'symbol' ? t : t + '';
}
function WS(e, t) {
    if (typeof e != 'object' || !e) return e;
    var l = e[Symbol.toPrimitive];
    if (l !== void 0) {
        var a = l.call(e, t);
        if (typeof a != 'object') return a;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function _v(e) {
    return e && e.map((t, l) => Oe.createElement(t.tag, Yi({ key: l }, t.attr), _v(t.child)));
}
function PS(e) {
    return (t) => Oe.createElement(IS, Vi({ attr: Yi({}, e.attr) }, t), _v(e.child));
}
function IS(e) {
    var t = (l) => {
        var { attr: a, size: n, title: u } = e,
            i = kS(e, KS),
            r = n || l.size || '1em',
            c;
        return (
            l.className && (c = l.className),
            e.className && (c = (c ? c + ' ' : '') + e.className),
            Oe.createElement(
                'svg',
                Vi(
                    { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
                    l.attr,
                    a,
                    i,
                    {
                        className: c,
                        style: Yi(Yi({ color: e.color || l.color }, l.style), e.style),
                        height: r,
                        width: r,
                        xmlns: 'http://www.w3.org/2000/svg',
                    }
                ),
                u && Oe.createElement('title', null, u),
                e.children
            )
        );
    };
    return _d !== void 0 ? Oe.createElement(_d.Consumer, null, (l) => t(l)) : t(xv);
}
function eE(e) {
    return PS({
        attr: { viewBox: '0 0 448 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z',
                },
                child: [],
            },
        ],
    })(e);
}
const Rf = ({ onClick: e, disabled: t = !1 }) =>
        D.jsx('button', {
            className: 'delete-btn',
            onClick: e,
            disabled: t,
            children: D.jsx(eE, { size: 22 }),
        }),
    tE = async (e) => {
        if (window.confirm('¿Seguro que quieres eliminar este post?'))
            try {
                await Ov(e);
            } catch (t) {
                (alert(t), console.error('Error deleting post:', t));
            }
    },
    lE = ({ id: e, avatar: t, name: l, title: a, content: n, createdAt: u }) =>
        D.jsxs('div', {
            className: 'card',
            children: [
                D.jsxs('div', {
                    className: 'header',
                    children: [
                        D.jsxs('div', {
                            className: 'header-left',
                            children: [
                                D.jsx('img', { className: 'avatar', src: t, alt: l }),
                                D.jsxs('div', {
                                    className: 'author-container',
                                    children: [
                                        D.jsx('span', { className: 'author', children: l }),
                                        D.jsx('span', {
                                            className: 'date',
                                            children: new Date(u).toLocaleString(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        D.jsx(Rf, { onClick: () => tE(e) }),
                    ],
                }),
                D.jsx('h3', { className: 'title', children: a }),
                D.jsx('div', { className: 'content', children: D.jsx('p', { children: n }) }),
            ],
        });
var Ru = (e) => e.type === 'checkbox',
    Gl = (e) => e instanceof Date,
    Qe = (e) => e == null;
const Dv = (e) => typeof e == 'object';
var Te = (e) => !Qe(e) && !Array.isArray(e) && Dv(e) && !Gl(e),
    aE = (e) => (Te(e) && e.target ? (Ru(e.target) ? e.target.checked : e.target.value) : e),
    nE = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
    uE = (e, t) => e.has(nE(t)),
    iE = (e) => {
        const t = e.constructor && e.constructor.prototype;
        return Te(t) && t.hasOwnProperty('isPrototypeOf');
    },
    Of = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Ce(e) {
    let t;
    const l = Array.isArray(e),
        a = typeof FileList < 'u' ? e instanceof FileList : !1;
    if (e instanceof Date) t = new Date(e);
    else if (!(Of && (e instanceof Blob || a)) && (l || Te(e)))
        if (((t = l ? [] : Object.create(Object.getPrototypeOf(e))), !l && !iE(e))) t = e;
        else for (const n in e) e.hasOwnProperty(n) && (t[n] = Ce(e[n]));
    else return e;
    return t;
}
var pr = (e) => /^\w*$/.test(e),
    _e = (e) => e === void 0,
    xf = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
    _f = (e) => xf(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
    j = (e, t, l) => {
        if (!t || !Te(e)) return l;
        const a = (pr(t) ? [t] : _f(t)).reduce((n, u) => (Qe(n) ? n : n[u]), e);
        return _e(a) || a === e ? (_e(e[t]) ? l : e[t]) : a;
    },
    Nt = (e) => typeof e == 'boolean',
    oe = (e, t, l) => {
        let a = -1;
        const n = pr(t) ? [t] : _f(t),
            u = n.length,
            i = u - 1;
        for (; ++a < u; ) {
            const r = n[a];
            let c = l;
            if (a !== i) {
                const s = e[r];
                c = Te(s) || Array.isArray(s) ? s : isNaN(+n[a + 1]) ? {} : [];
            }
            if (r === '__proto__' || r === 'constructor' || r === 'prototype') return;
            ((e[r] = c), (e = e[r]));
        }
    };
const Nd = { BLUR: 'blur', FOCUS_OUT: 'focusout' },
    At = {
        onBlur: 'onBlur',
        onChange: 'onChange',
        onSubmit: 'onSubmit',
        onTouched: 'onTouched',
        all: 'all',
    },
    Zt = {
        max: 'max',
        min: 'min',
        maxLength: 'maxLength',
        minLength: 'minLength',
        pattern: 'pattern',
        required: 'required',
        validate: 'validate',
    },
    rE = Oe.createContext(null);
rE.displayName = 'HookFormContext';
var cE = (e, t, l, a = !0) => {
    const n = { defaultValues: t._defaultValues };
    for (const u in e)
        Object.defineProperty(n, u, {
            get: () => {
                const i = u;
                return (
                    t._proxyFormState[i] !== At.all && (t._proxyFormState[i] = !a || At.all),
                    e[i]
                );
            },
        });
    return n;
};
const sE = typeof window < 'u' ? Oe.useLayoutEffect : Oe.useEffect;
var zt = (e) => typeof e == 'string',
    fE = (e, t, l, a, n) =>
        zt(e)
            ? (a && t.watch.add(e), j(l, e, n))
            : Array.isArray(e)
              ? e.map((u) => (a && t.watch.add(u), j(l, u)))
              : (a && (t.watchAll = !0), l),
    ys = (e) => Qe(e) || !Dv(e);
function gl(e, t, l = new WeakSet()) {
    if (ys(e) || ys(t)) return e === t;
    if (Gl(e) && Gl(t)) return e.getTime() === t.getTime();
    const a = Object.keys(e),
        n = Object.keys(t);
    if (a.length !== n.length) return !1;
    if (l.has(e) || l.has(t)) return !0;
    (l.add(e), l.add(t));
    for (const u of a) {
        const i = e[u];
        if (!n.includes(u)) return !1;
        if (u !== 'ref') {
            const r = t[u];
            if (
                (Gl(i) && Gl(r)) || (Te(i) && Te(r)) || (Array.isArray(i) && Array.isArray(r))
                    ? !gl(i, r, l)
                    : i !== r
            )
                return !1;
        }
    }
    return !0;
}
var oE = (e, t, l, a, n) =>
        t ? { ...l[e], types: { ...(l[e] && l[e].types ? l[e].types : {}), [a]: n || !0 } } : {},
    Hn = (e) => (Array.isArray(e) ? e : [e]),
    Ud = () => {
        let e = [];
        return {
            get observers() {
                return e;
            },
            next: (n) => {
                for (const u of e) u.next && u.next(n);
            },
            subscribe: (n) => (
                e.push(n),
                {
                    unsubscribe: () => {
                        e = e.filter((u) => u !== n);
                    },
                }
            ),
            unsubscribe: () => {
                e = [];
            },
        };
    },
    $e = (e) => Te(e) && !Object.keys(e).length,
    Df = (e) => e.type === 'file',
    Tt = (e) => typeof e == 'function',
    Gi = (e) => {
        if (!Of) return !1;
        const t = e ? e.ownerDocument : 0;
        return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
    },
    Nv = (e) => e.type === 'select-multiple',
    Nf = (e) => e.type === 'radio',
    dE = (e) => Nf(e) || Ru(e),
    fc = (e) => Gi(e) && e.isConnected;
function hE(e, t) {
    const l = t.slice(0, -1).length;
    let a = 0;
    for (; a < l; ) e = _e(e) ? a++ : e[t[a++]];
    return e;
}
function mE(e) {
    for (const t in e) if (e.hasOwnProperty(t) && !_e(e[t])) return !1;
    return !0;
}
function Re(e, t) {
    const l = Array.isArray(t) ? t : pr(t) ? [t] : _f(t),
        a = l.length === 1 ? e : hE(e, l),
        n = l.length - 1,
        u = l[n];
    return (
        a && delete a[u],
        n !== 0 && ((Te(a) && $e(a)) || (Array.isArray(a) && mE(a))) && Re(e, l.slice(0, -1)),
        e
    );
}
var Uv = (e) => {
    for (const t in e) if (Tt(e[t])) return !0;
    return !1;
};
function Xi(e, t = {}) {
    const l = Array.isArray(e);
    if (Te(e) || l)
        for (const a in e)
            Array.isArray(e[a]) || (Te(e[a]) && !Uv(e[a]))
                ? ((t[a] = Array.isArray(e[a]) ? [] : {}), Xi(e[a], t[a]))
                : Qe(e[a]) || (t[a] = !0);
    return t;
}
function Mv(e, t, l) {
    const a = Array.isArray(e);
    if (Te(e) || a)
        for (const n in e)
            Array.isArray(e[n]) || (Te(e[n]) && !Uv(e[n]))
                ? _e(t) || ys(l[n])
                    ? (l[n] = Array.isArray(e[n]) ? Xi(e[n], []) : { ...Xi(e[n]) })
                    : Mv(e[n], Qe(t) ? {} : t[n], l[n])
                : (l[n] = !gl(e[n], t[n]));
    return l;
}
var vn = (e, t) => Mv(e, t, Xi(t));
const Md = { value: !1, isValid: !1 },
    zd = { value: !0, isValid: !0 };
var zv = (e) => {
        if (Array.isArray(e)) {
            if (e.length > 1) {
                const t = e.filter((l) => l && l.checked && !l.disabled).map((l) => l.value);
                return { value: t, isValid: !!t.length };
            }
            return e[0].checked && !e[0].disabled
                ? e[0].attributes && !_e(e[0].attributes.value)
                    ? _e(e[0].value) || e[0].value === ''
                        ? zd
                        : { value: e[0].value, isValid: !0 }
                    : zd
                : Md;
        }
        return Md;
    },
    Cv = (e, { valueAsNumber: t, valueAsDate: l, setValueAs: a }) =>
        _e(e) ? e : t ? (e === '' ? NaN : e && +e) : l && zt(e) ? new Date(e) : a ? a(e) : e;
const Cd = { isValid: !1, value: null };
var wv = (e) =>
    Array.isArray(e)
        ? e.reduce(
              (t, l) => (l && l.checked && !l.disabled ? { isValid: !0, value: l.value } : t),
              Cd
          )
        : Cd;
function wd(e) {
    const t = e.ref;
    return Df(t)
        ? t.files
        : Nf(t)
          ? wv(e.refs).value
          : Nv(t)
            ? [...t.selectedOptions].map(({ value: l }) => l)
            : Ru(t)
              ? zv(e.refs).value
              : Cv(_e(t.value) ? e.ref.value : t.value, e);
}
var yE = (e, t, l, a) => {
        const n = {};
        for (const u of e) {
            const i = j(t, u);
            i && oe(n, u, i._f);
        }
        return { criteriaMode: l, names: [...e], fields: n, shouldUseNativeValidation: a };
    },
    Qi = (e) => e instanceof RegExp,
    gn = (e) =>
        _e(e) ? e : Qi(e) ? e.source : Te(e) ? (Qi(e.value) ? e.value.source : e.value) : e,
    Bd = (e) => ({
        isOnSubmit: !e || e === At.onSubmit,
        isOnBlur: e === At.onBlur,
        isOnChange: e === At.onChange,
        isOnAll: e === At.all,
        isOnTouch: e === At.onTouched,
    });
const jd = 'AsyncFunction';
var vE = (e) =>
        !!e &&
        !!e.validate &&
        !!(
            (Tt(e.validate) && e.validate.constructor.name === jd) ||
            (Te(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === jd))
        ),
    gE = (e) =>
        e.mount &&
        (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate),
    Hd = (e, t, l) =>
        !l &&
        (t.watchAll ||
            t.watch.has(e) ||
            [...t.watch].some((a) => e.startsWith(a) && /^\.\w+/.test(e.slice(a.length))));
const Ln = (e, t, l, a) => {
    for (const n of l || Object.keys(e)) {
        const u = j(e, n);
        if (u) {
            const { _f: i, ...r } = u;
            if (i) {
                if (i.refs && i.refs[0] && t(i.refs[0], n) && !a) return !0;
                if (i.ref && t(i.ref, i.name) && !a) return !0;
                if (Ln(r, t)) break;
            } else if (Te(r) && Ln(r, t)) break;
        }
    }
};
function Ld(e, t, l) {
    const a = j(e, l);
    if (a || pr(l)) return { error: a, name: l };
    const n = l.split('.');
    for (; n.length; ) {
        const u = n.join('.'),
            i = j(t, u),
            r = j(e, u);
        if (i && !Array.isArray(i) && l !== u) return { name: l };
        if (r && r.type) return { name: u, error: r };
        if (r && r.root && r.root.type) return { name: `${u}.root`, error: r.root };
        n.pop();
    }
    return { name: l };
}
var pE = (e, t, l, a) => {
        l(e);
        const { name: n, ...u } = e;
        return (
            $e(u) ||
            Object.keys(u).length >= Object.keys(t).length ||
            Object.keys(u).find((i) => t[i] === (!a || At.all))
        );
    },
    bE = (e, t, l) =>
        !e ||
        !t ||
        e === t ||
        Hn(e).some((a) => a && (l ? a === t : a.startsWith(t) || t.startsWith(a))),
    SE = (e, t, l, a, n) =>
        n.isOnAll
            ? !1
            : !l && n.isOnTouch
              ? !(t || e)
              : (l ? a.isOnBlur : n.isOnBlur)
                ? !e
                : (l ? a.isOnChange : n.isOnChange)
                  ? e
                  : !0,
    EE = (e, t) => !xf(j(e, t)).length && Re(e, t),
    AE = (e, t, l) => {
        const a = Hn(j(e, l));
        return (oe(a, 'root', t[l]), oe(e, l, a), e);
    },
    ii = (e) => zt(e);
function qd(e, t, l = 'validate') {
    if (ii(e) || (Array.isArray(e) && e.every(ii)) || (Nt(e) && !e))
        return { type: l, message: ii(e) ? e : '', ref: t };
}
var da = (e) => (Te(e) && !Qi(e) ? e : { value: e, message: '' }),
    Vd = async (e, t, l, a, n, u) => {
        const {
                ref: i,
                refs: r,
                required: c,
                maxLength: s,
                minLength: f,
                min: h,
                max: d,
                pattern: v,
                validate: b,
                name: S,
                valueAsNumber: A,
                mount: m,
            } = e._f,
            o = j(l, S);
        if (!m || t.has(S)) return {};
        const y = r ? r[0] : i,
            p = (Q) => {
                n &&
                    y.reportValidity &&
                    (y.setCustomValidity(Nt(Q) ? '' : Q || ''), y.reportValidity());
            },
            x = {},
            B = Nf(i),
            N = Ru(i),
            w = B || N,
            q =
                ((A || Df(i)) && _e(i.value) && _e(o)) ||
                (Gi(i) && i.value === '') ||
                o === '' ||
                (Array.isArray(o) && !o.length),
            L = oE.bind(null, S, a, x),
            re = (Q, $, ye, Ne = Zt.maxLength, M = Zt.minLength) => {
                const V = Q ? $ : ye;
                x[S] = { type: Q ? Ne : M, message: V, ref: i, ...L(Q ? Ne : M, V) };
            };
        if (
            u
                ? !Array.isArray(o) || !o.length
                : c &&
                  ((!w && (q || Qe(o))) ||
                      (Nt(o) && !o) ||
                      (N && !zv(r).isValid) ||
                      (B && !wv(r).isValid))
        ) {
            const { value: Q, message: $ } = ii(c) ? { value: !!c, message: c } : da(c);
            if (Q && ((x[S] = { type: Zt.required, message: $, ref: y, ...L(Zt.required, $) }), !a))
                return (p($), x);
        }
        if (!q && (!Qe(h) || !Qe(d))) {
            let Q, $;
            const ye = da(d),
                Ne = da(h);
            if (!Qe(o) && !isNaN(o)) {
                const M = i.valueAsNumber || (o && +o);
                (Qe(ye.value) || (Q = M > ye.value), Qe(Ne.value) || ($ = M < Ne.value));
            } else {
                const M = i.valueAsDate || new Date(o),
                    V = (ve) => new Date(new Date().toDateString() + ' ' + ve),
                    G = i.type == 'time',
                    le = i.type == 'week';
                (zt(ye.value) &&
                    o &&
                    (Q = G ? V(o) > V(ye.value) : le ? o > ye.value : M > new Date(ye.value)),
                    zt(Ne.value) &&
                        o &&
                        ($ = G ? V(o) < V(Ne.value) : le ? o < Ne.value : M < new Date(Ne.value)));
            }
            if ((Q || $) && (re(!!Q, ye.message, Ne.message, Zt.max, Zt.min), !a))
                return (p(x[S].message), x);
        }
        if ((s || f) && !q && (zt(o) || (u && Array.isArray(o)))) {
            const Q = da(s),
                $ = da(f),
                ye = !Qe(Q.value) && o.length > +Q.value,
                Ne = !Qe($.value) && o.length < +$.value;
            if ((ye || Ne) && (re(ye, Q.message, $.message), !a)) return (p(x[S].message), x);
        }
        if (v && !q && zt(o)) {
            const { value: Q, message: $ } = da(v);
            if (
                Qi(Q) &&
                !o.match(Q) &&
                ((x[S] = { type: Zt.pattern, message: $, ref: i, ...L(Zt.pattern, $) }), !a)
            )
                return (p($), x);
        }
        if (b) {
            if (Tt(b)) {
                const Q = await b(o, l),
                    $ = qd(Q, y);
                if ($ && ((x[S] = { ...$, ...L(Zt.validate, $.message) }), !a))
                    return (p($.message), x);
            } else if (Te(b)) {
                let Q = {};
                for (const $ in b) {
                    if (!$e(Q) && !a) break;
                    const ye = qd(await b[$](o, l), y, $);
                    ye && ((Q = { ...ye, ...L($, ye.message) }), p(ye.message), a && (x[S] = Q));
                }
                if (!$e(Q) && ((x[S] = { ref: y, ...Q }), !a)) return x;
            }
        }
        return (p(!0), x);
    };
const TE = { mode: At.onSubmit, reValidateMode: At.onChange, shouldFocusError: !0 };
function RE(e = {}) {
    let t = { ...TE, ...e },
        l = {
            submitCount: 0,
            isDirty: !1,
            isReady: !1,
            isLoading: Tt(t.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            validatingFields: {},
            errors: t.errors || {},
            disabled: t.disabled || !1,
        },
        a = {},
        n = Te(t.defaultValues) || Te(t.values) ? Ce(t.defaultValues || t.values) || {} : {},
        u = t.shouldUnregister ? {} : Ce(n),
        i = { action: !1, mount: !1, watch: !1 },
        r = {
            mount: new Set(),
            disabled: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
        },
        c,
        s = 0;
    const f = {
        isDirty: !1,
        dirtyFields: !1,
        validatingFields: !1,
        touchedFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1,
    };
    let h = { ...f };
    const d = { array: Ud(), state: Ud() },
        v = t.criteriaMode === At.all,
        b = (g) => (E) => {
            (clearTimeout(s), (s = setTimeout(g, E)));
        },
        S = async (g) => {
            if (!t.disabled && (f.isValid || h.isValid || g)) {
                const E = t.resolver ? $e((await N()).errors) : await q(a, !0);
                E !== l.isValid && d.state.next({ isValid: E });
            }
        },
        A = (g, E) => {
            !t.disabled &&
                (f.isValidating || f.validatingFields || h.isValidating || h.validatingFields) &&
                ((g || Array.from(r.mount)).forEach((O) => {
                    O && (E ? oe(l.validatingFields, O, E) : Re(l.validatingFields, O));
                }),
                d.state.next({
                    validatingFields: l.validatingFields,
                    isValidating: !$e(l.validatingFields),
                }));
        },
        m = (g, E = [], O, C, z = !0, U = !0) => {
            if (C && O && !t.disabled) {
                if (((i.action = !0), U && Array.isArray(j(a, g)))) {
                    const H = O(j(a, g), C.argA, C.argB);
                    z && oe(a, g, H);
                }
                if (U && Array.isArray(j(l.errors, g))) {
                    const H = O(j(l.errors, g), C.argA, C.argB);
                    (z && oe(l.errors, g, H), EE(l.errors, g));
                }
                if (
                    (f.touchedFields || h.touchedFields) &&
                    U &&
                    Array.isArray(j(l.touchedFields, g))
                ) {
                    const H = O(j(l.touchedFields, g), C.argA, C.argB);
                    z && oe(l.touchedFields, g, H);
                }
                ((f.dirtyFields || h.dirtyFields) && (l.dirtyFields = vn(n, u)),
                    d.state.next({
                        name: g,
                        isDirty: re(g, E),
                        dirtyFields: l.dirtyFields,
                        errors: l.errors,
                        isValid: l.isValid,
                    }));
            } else oe(u, g, E);
        },
        o = (g, E) => {
            (oe(l.errors, g, E), d.state.next({ errors: l.errors }));
        },
        y = (g) => {
            ((l.errors = g), d.state.next({ errors: l.errors, isValid: !1 }));
        },
        p = (g, E, O, C) => {
            const z = j(a, g);
            if (z) {
                const U = j(u, g, _e(O) ? j(n, g) : O);
                (_e(U) || (C && C.defaultChecked) || E ? oe(u, g, E ? U : wd(z._f)) : ye(g, U),
                    i.mount && S());
            }
        },
        x = (g, E, O, C, z) => {
            let U = !1,
                H = !1;
            const I = { name: g };
            if (!t.disabled) {
                if (!O || C) {
                    (f.isDirty || h.isDirty) &&
                        ((H = l.isDirty), (l.isDirty = I.isDirty = re()), (U = H !== I.isDirty));
                    const ce = gl(j(n, g), E);
                    ((H = !!j(l.dirtyFields, g)),
                        ce ? Re(l.dirtyFields, g) : oe(l.dirtyFields, g, !0),
                        (I.dirtyFields = l.dirtyFields),
                        (U = U || ((f.dirtyFields || h.dirtyFields) && H !== !ce)));
                }
                if (O) {
                    const ce = j(l.touchedFields, g);
                    ce ||
                        (oe(l.touchedFields, g, O),
                        (I.touchedFields = l.touchedFields),
                        (U = U || ((f.touchedFields || h.touchedFields) && ce !== O)));
                }
                U && z && d.state.next(I);
            }
            return U ? I : {};
        },
        B = (g, E, O, C) => {
            const z = j(l.errors, g),
                U = (f.isValid || h.isValid) && Nt(E) && l.isValid !== E;
            if (
                (t.delayError && O
                    ? ((c = b(() => o(g, O))), c(t.delayError))
                    : (clearTimeout(s), (c = null), O ? oe(l.errors, g, O) : Re(l.errors, g)),
                (O ? !gl(z, O) : z) || !$e(C) || U)
            ) {
                const H = {
                    ...C,
                    ...(U && Nt(E) ? { isValid: E } : {}),
                    errors: l.errors,
                    name: g,
                };
                ((l = { ...l, ...H }), d.state.next(H));
            }
        },
        N = async (g) => {
            A(g, !0);
            const E = await t.resolver(
                u,
                t.context,
                yE(g || r.mount, a, t.criteriaMode, t.shouldUseNativeValidation)
            );
            return (A(g), E);
        },
        w = async (g) => {
            const { errors: E } = await N(g);
            if (g)
                for (const O of g) {
                    const C = j(E, O);
                    C ? oe(l.errors, O, C) : Re(l.errors, O);
                }
            else l.errors = E;
            return E;
        },
        q = async (g, E, O = { valid: !0 }) => {
            for (const C in g) {
                const z = g[C];
                if (z) {
                    const { _f: U, ...H } = z;
                    if (U) {
                        const I = r.array.has(U.name),
                            ce = z._f && vE(z._f);
                        ce && f.validatingFields && A([C], !0);
                        const ot = await Vd(
                            z,
                            r.disabled,
                            u,
                            v,
                            t.shouldUseNativeValidation && !E,
                            I
                        );
                        if ((ce && f.validatingFields && A([C]), ot[U.name] && ((O.valid = !1), E)))
                            break;
                        !E &&
                            (j(ot, U.name)
                                ? I
                                    ? AE(l.errors, ot, U.name)
                                    : oe(l.errors, U.name, ot[U.name])
                                : Re(l.errors, U.name));
                    }
                    !$e(H) && (await q(H, E, O));
                }
            }
            return O.valid;
        },
        L = () => {
            for (const g of r.unMount) {
                const E = j(a, g);
                E && (E._f.refs ? E._f.refs.every((O) => !fc(O)) : !fc(E._f.ref)) && br(g);
            }
            r.unMount = new Set();
        },
        re = (g, E) => !t.disabled && (g && E && oe(u, g, E), !gl(ve(), n)),
        Q = (g, E, O) => fE(g, r, { ...(i.mount ? u : _e(E) ? n : zt(g) ? { [g]: E } : E) }, O, E),
        $ = (g) => xf(j(i.mount ? u : n, g, t.shouldUnregister ? j(n, g, []) : [])),
        ye = (g, E, O = {}) => {
            const C = j(a, g);
            let z = E;
            if (C) {
                const U = C._f;
                U &&
                    (!U.disabled && oe(u, g, Cv(E, U)),
                    (z = Gi(U.ref) && Qe(E) ? '' : E),
                    Nv(U.ref)
                        ? [...U.ref.options].forEach((H) => (H.selected = z.includes(H.value)))
                        : U.refs
                          ? Ru(U.ref)
                              ? U.refs.forEach((H) => {
                                    (!H.defaultChecked || !H.disabled) &&
                                        (Array.isArray(z)
                                            ? (H.checked = !!z.find((I) => I === H.value))
                                            : (H.checked = z === H.value || !!z));
                                })
                              : U.refs.forEach((H) => (H.checked = H.value === z))
                          : Df(U.ref)
                            ? (U.ref.value = '')
                            : ((U.ref.value = z),
                              U.ref.type || d.state.next({ name: g, values: Ce(u) })));
            }
            ((O.shouldDirty || O.shouldTouch) && x(g, z, O.shouldTouch, O.shouldDirty, !0),
                O.shouldValidate && le(g));
        },
        Ne = (g, E, O) => {
            for (const C in E) {
                if (!E.hasOwnProperty(C)) return;
                const z = E[C],
                    U = g + '.' + C,
                    H = j(a, U);
                (r.array.has(g) || Te(z) || (H && !H._f)) && !Gl(z) ? Ne(U, z, O) : ye(U, z, O);
            }
        },
        M = (g, E, O = {}) => {
            const C = j(a, g),
                z = r.array.has(g),
                U = Ce(E);
            (oe(u, g, U),
                z
                    ? (d.array.next({ name: g, values: Ce(u) }),
                      (f.isDirty || f.dirtyFields || h.isDirty || h.dirtyFields) &&
                          O.shouldDirty &&
                          d.state.next({ name: g, dirtyFields: vn(n, u), isDirty: re(g, U) }))
                    : C && !C._f && !Qe(U)
                      ? Ne(g, U, O)
                      : ye(g, U, O),
                Hd(g, r) && d.state.next({ ...l, name: g }),
                d.state.next({ name: i.mount ? g : void 0, values: Ce(u) }));
        },
        V = async (g) => {
            i.mount = !0;
            const E = g.target;
            let O = E.name,
                C = !0;
            const z = j(a, O),
                U = (ce) => {
                    C = Number.isNaN(ce) || (Gl(ce) && isNaN(ce.getTime())) || gl(ce, j(u, O, ce));
                },
                H = Bd(t.mode),
                I = Bd(t.reValidateMode);
            if (z) {
                let ce, ot;
                const Ou = E.type ? wd(z._f) : aE(g),
                    rl = g.type === Nd.BLUR || g.type === Nd.FOCUS_OUT,
                    Yv =
                        (!gE(z._f) && !t.resolver && !j(l.errors, O) && !z._f.deps) ||
                        SE(rl, j(l.touchedFields, O), l.isSubmitted, I, H),
                    Ar = Hd(O, r, rl);
                (oe(u, O, Ou),
                    rl
                        ? (!E || !E.readOnly) && (z._f.onBlur && z._f.onBlur(g), c && c(0))
                        : z._f.onChange && z._f.onChange(g));
                const Tr = x(O, Ou, rl),
                    Gv = !$e(Tr) || Ar;
                if ((!rl && d.state.next({ name: O, type: g.type, values: Ce(u) }), Yv))
                    return (
                        (f.isValid || h.isValid) && (t.mode === 'onBlur' ? rl && S() : rl || S()),
                        Gv && d.state.next({ name: O, ...(Ar ? {} : Tr) })
                    );
                if ((!rl && Ar && d.state.next({ ...l }), t.resolver)) {
                    const { errors: Bf } = await N([O]);
                    if ((U(Ou), C)) {
                        const Xv = Ld(l.errors, a, O),
                            jf = Ld(Bf, a, Xv.name || O);
                        ((ce = jf.error), (O = jf.name), (ot = $e(Bf)));
                    }
                } else
                    (A([O], !0),
                        (ce = (await Vd(z, r.disabled, u, v, t.shouldUseNativeValidation))[O]),
                        A([O]),
                        U(Ou),
                        C && (ce ? (ot = !1) : (f.isValid || h.isValid) && (ot = await q(a, !0))));
                C && (z._f.deps && le(z._f.deps), B(O, ot, ce, Tr));
            }
        },
        G = (g, E) => {
            if (j(l.errors, E) && g.focus) return (g.focus(), 1);
        },
        le = async (g, E = {}) => {
            let O, C;
            const z = Hn(g);
            if (t.resolver) {
                const U = await w(_e(g) ? g : z);
                ((O = $e(U)), (C = g ? !z.some((H) => j(U, H)) : O));
            } else
                g
                    ? ((C = (
                          await Promise.all(
                              z.map(async (U) => {
                                  const H = j(a, U);
                                  return await q(H && H._f ? { [U]: H } : H);
                              })
                          )
                      ).every(Boolean)),
                      !(!C && !l.isValid) && S())
                    : (C = O = await q(a));
            return (
                d.state.next({
                    ...(!zt(g) || ((f.isValid || h.isValid) && O !== l.isValid) ? {} : { name: g }),
                    ...(t.resolver || !g ? { isValid: O } : {}),
                    errors: l.errors,
                }),
                E.shouldFocus && !C && Ln(a, G, g ? z : r.mount),
                C
            );
        },
        ve = (g) => {
            const E = { ...(i.mount ? u : n) };
            return _e(g) ? E : zt(g) ? j(E, g) : g.map((O) => j(E, O));
        },
        Bl = (g, E) => ({
            invalid: !!j((E || l).errors, g),
            isDirty: !!j((E || l).dirtyFields, g),
            error: j((E || l).errors, g),
            isValidating: !!j(l.validatingFields, g),
            isTouched: !!j((E || l).touchedFields, g),
        }),
        ca = (g) => {
            (g && Hn(g).forEach((E) => Re(l.errors, E)),
                d.state.next({ errors: g ? l.errors : {} }));
        },
        sa = (g, E, O) => {
            const C = (j(a, g, { _f: {} })._f || {}).ref,
                z = j(l.errors, g) || {},
                { ref: U, message: H, type: I, ...ce } = z;
            (oe(l.errors, g, { ...ce, ...E, ref: C }),
                d.state.next({ name: g, errors: l.errors, isValid: !1 }),
                O && O.shouldFocus && C && C.focus && C.focus());
        },
        Yt = (g, E) =>
            Tt(g)
                ? d.state.subscribe({ next: (O) => 'values' in O && g(Q(void 0, E), O) })
                : Q(g, E, !0),
        jl = (g) =>
            d.state.subscribe({
                next: (E) => {
                    bE(g.name, E.name, g.exact) &&
                        pE(E, g.formState || f, Vv, g.reRenderRoot) &&
                        g.callback({ values: { ...u }, ...l, ...E, defaultValues: n });
                },
            }).unsubscribe,
        jv = (g) => ((i.mount = !0), (h = { ...h, ...g.formState }), jl({ ...g, formState: h })),
        br = (g, E = {}) => {
            for (const O of g ? Hn(g) : r.mount)
                (r.mount.delete(O),
                    r.array.delete(O),
                    E.keepValue || (Re(a, O), Re(u, O)),
                    !E.keepError && Re(l.errors, O),
                    !E.keepDirty && Re(l.dirtyFields, O),
                    !E.keepTouched && Re(l.touchedFields, O),
                    !E.keepIsValidating && Re(l.validatingFields, O),
                    !t.shouldUnregister && !E.keepDefaultValue && Re(n, O));
            (d.state.next({ values: Ce(u) }),
                d.state.next({ ...l, ...(E.keepDirty ? { isDirty: re() } : {}) }),
                !E.keepIsValid && S());
        },
        Uf = ({ disabled: g, name: E }) => {
            ((Nt(g) && i.mount) || g || r.disabled.has(E)) &&
                (g ? r.disabled.add(E) : r.disabled.delete(E));
        },
        Sr = (g, E = {}) => {
            let O = j(a, g);
            const C = Nt(E.disabled) || Nt(t.disabled);
            return (
                oe(a, g, {
                    ...(O || {}),
                    _f: { ...(O && O._f ? O._f : { ref: { name: g } }), name: g, mount: !0, ...E },
                }),
                r.mount.add(g),
                O
                    ? Uf({ disabled: Nt(E.disabled) ? E.disabled : t.disabled, name: g })
                    : p(g, !0, E.value),
                {
                    ...(C ? { disabled: E.disabled || t.disabled } : {}),
                    ...(t.progressive
                        ? {
                              required: !!E.required,
                              min: gn(E.min),
                              max: gn(E.max),
                              minLength: gn(E.minLength),
                              maxLength: gn(E.maxLength),
                              pattern: gn(E.pattern),
                          }
                        : {}),
                    name: g,
                    onChange: V,
                    onBlur: V,
                    ref: (z) => {
                        if (z) {
                            (Sr(g, E), (O = j(a, g)));
                            const U =
                                    (_e(z.value) &&
                                        z.querySelectorAll &&
                                        z.querySelectorAll('input,select,textarea')[0]) ||
                                    z,
                                H = dE(U),
                                I = O._f.refs || [];
                            if (H ? I.find((ce) => ce === U) : U === O._f.ref) return;
                            (oe(a, g, {
                                _f: {
                                    ...O._f,
                                    ...(H
                                        ? {
                                              refs: [
                                                  ...I.filter(fc),
                                                  U,
                                                  ...(Array.isArray(j(n, g)) ? [{}] : []),
                                              ],
                                              ref: { type: U.type, name: g },
                                          }
                                        : { ref: U }),
                                },
                            }),
                                p(g, !1, void 0, U));
                        } else
                            ((O = j(a, g, {})),
                                O._f && (O._f.mount = !1),
                                (t.shouldUnregister || E.shouldUnregister) &&
                                    !(uE(r.array, g) && i.action) &&
                                    r.unMount.add(g));
                    },
                }
            );
        },
        Er = () => t.shouldFocusError && Ln(a, G, r.mount),
        Hv = (g) => {
            Nt(g) &&
                (d.state.next({ disabled: g }),
                Ln(
                    a,
                    (E, O) => {
                        const C = j(a, O);
                        C &&
                            ((E.disabled = C._f.disabled || g),
                            Array.isArray(C._f.refs) &&
                                C._f.refs.forEach((z) => {
                                    z.disabled = C._f.disabled || g;
                                }));
                    },
                    0,
                    !1
                ));
        },
        Mf = (g, E) => async (O) => {
            let C;
            O && (O.preventDefault && O.preventDefault(), O.persist && O.persist());
            let z = Ce(u);
            if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
                const { errors: U, values: H } = await N();
                ((l.errors = U), (z = Ce(H)));
            } else await q(a);
            if (r.disabled.size) for (const U of r.disabled) Re(z, U);
            if ((Re(l.errors, 'root'), $e(l.errors))) {
                d.state.next({ errors: {} });
                try {
                    await g(z, O);
                } catch (U) {
                    C = U;
                }
            } else (E && (await E({ ...l.errors }, O)), Er(), setTimeout(Er));
            if (
                (d.state.next({
                    isSubmitted: !0,
                    isSubmitting: !1,
                    isSubmitSuccessful: $e(l.errors) && !C,
                    submitCount: l.submitCount + 1,
                    errors: l.errors,
                }),
                C)
            )
                throw C;
        },
        Lv = (g, E = {}) => {
            j(a, g) &&
                (_e(E.defaultValue)
                    ? M(g, Ce(j(n, g)))
                    : (M(g, E.defaultValue), oe(n, g, Ce(E.defaultValue))),
                E.keepTouched || Re(l.touchedFields, g),
                E.keepDirty ||
                    (Re(l.dirtyFields, g),
                    (l.isDirty = E.defaultValue ? re(g, Ce(j(n, g))) : re())),
                E.keepError || (Re(l.errors, g), f.isValid && S()),
                d.state.next({ ...l }));
        },
        zf = (g, E = {}) => {
            const O = g ? Ce(g) : n,
                C = Ce(O),
                z = $e(g),
                U = z ? n : C;
            if ((E.keepDefaultValues || (n = O), !E.keepValues)) {
                if (E.keepDirtyValues) {
                    const H = new Set([...r.mount, ...Object.keys(vn(n, u))]);
                    for (const I of Array.from(H))
                        j(l.dirtyFields, I) ? oe(U, I, j(u, I)) : M(I, j(U, I));
                } else {
                    if (Of && _e(g))
                        for (const H of r.mount) {
                            const I = j(a, H);
                            if (I && I._f) {
                                const ce = Array.isArray(I._f.refs) ? I._f.refs[0] : I._f.ref;
                                if (Gi(ce)) {
                                    const ot = ce.closest('form');
                                    if (ot) {
                                        ot.reset();
                                        break;
                                    }
                                }
                            }
                        }
                    if (E.keepFieldsRef) for (const H of r.mount) M(H, j(U, H));
                    else a = {};
                }
                ((u = t.shouldUnregister ? (E.keepDefaultValues ? Ce(n) : {}) : Ce(U)),
                    d.array.next({ values: { ...U } }),
                    d.state.next({ values: { ...U } }));
            }
            ((r = {
                mount: E.keepDirtyValues ? r.mount : new Set(),
                unMount: new Set(),
                array: new Set(),
                disabled: new Set(),
                watch: new Set(),
                watchAll: !1,
                focus: '',
            }),
                (i.mount = !f.isValid || !!E.keepIsValid || !!E.keepDirtyValues),
                (i.watch = !!t.shouldUnregister),
                d.state.next({
                    submitCount: E.keepSubmitCount ? l.submitCount : 0,
                    isDirty: z
                        ? !1
                        : E.keepDirty
                          ? l.isDirty
                          : !!(E.keepDefaultValues && !gl(g, n)),
                    isSubmitted: E.keepIsSubmitted ? l.isSubmitted : !1,
                    dirtyFields: z
                        ? {}
                        : E.keepDirtyValues
                          ? E.keepDefaultValues && u
                              ? vn(n, u)
                              : l.dirtyFields
                          : E.keepDefaultValues && g
                            ? vn(n, g)
                            : E.keepDirty
                              ? l.dirtyFields
                              : {},
                    touchedFields: E.keepTouched ? l.touchedFields : {},
                    errors: E.keepErrors ? l.errors : {},
                    isSubmitSuccessful: E.keepIsSubmitSuccessful ? l.isSubmitSuccessful : !1,
                    isSubmitting: !1,
                    defaultValues: n,
                }));
        },
        Cf = (g, E) => zf(Tt(g) ? g(u) : g, E),
        qv = (g, E = {}) => {
            const O = j(a, g),
                C = O && O._f;
            if (C) {
                const z = C.refs ? C.refs[0] : C.ref;
                z.focus && (z.focus(), E.shouldSelect && Tt(z.select) && z.select());
            }
        },
        Vv = (g) => {
            l = { ...l, ...g };
        },
        wf = {
            control: {
                register: Sr,
                unregister: br,
                getFieldState: Bl,
                handleSubmit: Mf,
                setError: sa,
                _subscribe: jl,
                _runSchema: N,
                _focusError: Er,
                _getWatch: Q,
                _getDirty: re,
                _setValid: S,
                _setFieldArray: m,
                _setDisabledField: Uf,
                _setErrors: y,
                _getFieldArray: $,
                _reset: zf,
                _resetDefaultValues: () =>
                    Tt(t.defaultValues) &&
                    t.defaultValues().then((g) => {
                        (Cf(g, t.resetOptions), d.state.next({ isLoading: !1 }));
                    }),
                _removeUnmounted: L,
                _disableForm: Hv,
                _subjects: d,
                _proxyFormState: f,
                get _fields() {
                    return a;
                },
                get _formValues() {
                    return u;
                },
                get _state() {
                    return i;
                },
                set _state(g) {
                    i = g;
                },
                get _defaultValues() {
                    return n;
                },
                get _names() {
                    return r;
                },
                set _names(g) {
                    r = g;
                },
                get _formState() {
                    return l;
                },
                get _options() {
                    return t;
                },
                set _options(g) {
                    t = { ...t, ...g };
                },
            },
            subscribe: jv,
            trigger: le,
            register: Sr,
            handleSubmit: Mf,
            watch: Yt,
            setValue: M,
            getValues: ve,
            reset: Cf,
            resetField: Lv,
            clearErrors: ca,
            unregister: br,
            setError: sa,
            setFocus: qv,
            getFieldState: Bl,
        };
    return { ...wf, formControl: wf };
}
function Bv(e = {}) {
    const t = Oe.useRef(void 0),
        l = Oe.useRef(void 0),
        [a, n] = Oe.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: Tt(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: e.errors || {},
            disabled: e.disabled || !1,
            isReady: !1,
            defaultValues: Tt(e.defaultValues) ? void 0 : e.defaultValues,
        });
    if (!t.current)
        if (e.formControl)
            ((t.current = { ...e.formControl, formState: a }),
                e.defaultValues &&
                    !Tt(e.defaultValues) &&
                    e.formControl.reset(e.defaultValues, e.resetOptions));
        else {
            const { formControl: i, ...r } = RE(e);
            t.current = { ...r, formState: a };
        }
    const u = t.current.control;
    return (
        (u._options = e),
        sE(() => {
            const i = u._subscribe({
                formState: u._proxyFormState,
                callback: () => n({ ...u._formState }),
                reRenderRoot: !0,
            });
            return (n((r) => ({ ...r, isReady: !0 })), (u._formState.isReady = !0), i);
        }, [u]),
        Oe.useEffect(() => u._disableForm(e.disabled), [u, e.disabled]),
        Oe.useEffect(() => {
            (e.mode && (u._options.mode = e.mode),
                e.reValidateMode && (u._options.reValidateMode = e.reValidateMode));
        }, [u, e.mode, e.reValidateMode]),
        Oe.useEffect(() => {
            e.errors && (u._setErrors(e.errors), u._focusError());
        }, [u, e.errors]),
        Oe.useEffect(() => {
            e.shouldUnregister && u._subjects.state.next({ values: u._getWatch() });
        }, [u, e.shouldUnregister]),
        Oe.useEffect(() => {
            if (u._proxyFormState.isDirty) {
                const i = u._getDirty();
                i !== a.isDirty && u._subjects.state.next({ isDirty: i });
            }
        }, [u, a.isDirty]),
        Oe.useEffect(() => {
            e.values && !gl(e.values, l.current)
                ? (u._reset(e.values, { keepFieldsRef: !0, ...u._options.resetOptions }),
                  (l.current = e.values),
                  n((i) => ({ ...i })))
                : u._resetDefaultValues();
        }, [u, e.values]),
        Oe.useEffect(() => {
            (u._state.mount || (u._setValid(), (u._state.mount = !0)),
                u._state.watch &&
                    ((u._state.watch = !1), u._subjects.state.next({ ...u._formState })),
                u._removeUnmounted());
        }),
        (t.current.formState = cE(a, u)),
        t.current
    );
}
const OE = ({ onPostCreated: e }) => {
        const {
                register: t,
                handleSubmit: l,
                reset: a,
                watch: n,
                formState: u,
            } = Bv({ mode: 'onChange' }),
            i = R.useRef(null),
            r = n('avatarFile'),
            [c, s] = R.useState(null);
        R.useEffect(() => {
            if (r && r.length > 0) {
                const h = URL.createObjectURL(r[0]);
                return (s(h), () => URL.revokeObjectURL(h));
            } else s(null);
        }, [r]);
        const f = async (h) => {
            let d = h.avatar;
            h.avatarFile && h.avatarFile.length > 0 && (d = URL.createObjectURL(h.avatarFile[0]));
            try {
                (await GS({ ...h, avatar: d, createdAt: new Date().toISOString() }), a(), e());
            } catch (v) {
                (alert(v), console.error('Error creating post:', v));
            }
        };
        return D.jsxs('form', {
            className: 'add-post-card',
            onSubmit: l(f),
            children: [
                D.jsxs('div', {
                    className: 'img-input-group',
                    children: [
                        D.jsxs('div', {
                            className: 'avatar-upload',
                            children: [
                                D.jsx('label', { children: 'Avatar' }),
                                D.jsx('button', {
                                    type: 'button',
                                    onClick: () => {
                                        var h;
                                        return (h = i.current) == null ? void 0 : h.click();
                                    },
                                    children: c
                                        ? D.jsx('img', {
                                              src: c,
                                              alt: 'avatar preview',
                                              className: 'avatar-img',
                                          })
                                        : D.jsx('span', {
                                              className: 'avatar-placeholder',
                                              children: '+',
                                          }),
                                }),
                                D.jsx('input', {
                                    type: 'file',
                                    accept: 'image/*',
                                    style: { display: 'none' },
                                    ...t('avatarFile'),
                                    ref: i,
                                }),
                            ],
                        }),
                        D.jsxs('div', {
                            className: 'input-group',
                            children: [
                                D.jsx('input', {
                                    placeholder: 'Name',
                                    ...t('name', { required: !0 }),
                                }),
                                D.jsx('input', {
                                    placeholder: 'Title',
                                    ...t('title', { required: !0 }),
                                }),
                            ],
                        }),
                    ],
                }),
                D.jsx('textarea', { placeholder: 'Content', ...t('content', { required: !0 }) }),
                D.jsx('button', {
                    className: 'btn-primary',
                    disabled: !u.isValid,
                    type: 'submit',
                    children: 'Publicar',
                }),
            ],
        });
    },
    xE = () =>
        D.jsx('div', {
            className: 'posts-grid',
            children: [...Array(3)].map((e, t) =>
                D.jsxs(
                    'div',
                    {
                        className: 'card skeleton',
                        children: [
                            D.jsx('div', { className: 'avatar-skeleton' }),
                            D.jsxs('div', {
                                className: 'content-skeleton',
                                children: [
                                    D.jsx('div', { className: 'title-skeleton' }),
                                    D.jsx('div', { className: 'text-skeleton' }),
                                    D.jsx('div', { className: 'text-skeleton short' }),
                                    D.jsx('div', { className: 'footer-skeleton' }),
                                ],
                            }),
                        ],
                    },
                    t
                )
            ),
        }),
    _E = () => {
        const [e, t] = R.useState([]),
            [l, a] = R.useState(!0);
        R.useEffect(() => {
            n();
        }, []);
        const n = async () => {
                a(!0);
                try {
                    const i = await VS();
                    t(i);
                } catch (i) {
                    console.error('Error fetching posts:', i);
                } finally {
                    a(!1);
                }
            },
            u = fr();
        return D.jsxs('div', {
            className: 'posts-container',
            children: [
                D.jsx(OE, { onPostCreated: n }),
                l
                    ? D.jsx(xE, {})
                    : D.jsx('div', {
                          className: 'posts-grid',
                          children: e.map((i) =>
                              D.jsx(
                                  'div',
                                  {
                                      style: { cursor: 'pointer' },
                                      onClick: () => u(`/post/${i.id}`),
                                      children: D.jsx(lE, {
                                          id: i.id,
                                          avatar: i.avatar,
                                          name: i.name,
                                          title: i.title,
                                          content: i.content,
                                          createdAt: i.createdAt,
                                      }),
                                  },
                                  i.id
                              )
                          ),
                      }),
            ],
        });
    },
    DE = ({ post: e }) => {
        const t = fr(),
            l = async () => {
                if (window.confirm('¿Seguro que quieres eliminar este post?'))
                    try {
                        (await Ov(e.id), t('/'));
                    } catch (a) {
                        (alert(a), console.error('Error deleting post:', a));
                    }
            };
        return D.jsxs('div', {
            className: 'post-detail-card',
            children: [
                D.jsxs('div', {
                    className: 'header',
                    children: [
                        D.jsxs('div', {
                            className: 'header-left',
                            children: [
                                D.jsx('img', { className: 'avatar', src: e.avatar, alt: e.name }),
                                D.jsxs('div', {
                                    className: 'author-container',
                                    children: [
                                        D.jsx('span', { className: 'author', children: e.name }),
                                        D.jsx('span', {
                                            className: 'date',
                                            children: new Date(e.createdAt).toLocaleString(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        D.jsx(Rf, { onClick: l }),
                    ],
                }),
                D.jsx('h2', { className: 'title', children: e.title }),
                D.jsx('div', { className: 'content', children: e.content }),
            ],
        });
    },
    NE = ({ postId: e, onCommented: t }) => {
        const { register: l, handleSubmit: a, reset: n, formState: u } = Bv({ mode: 'onChange' }),
            [i, r] = R.useState(!1),
            c = async (s) => {
                r(!0);
                try {
                    (await QS(e, {
                        name: 'Anon',
                        content: s.comment,
                        createdAt: new Date().toISOString(),
                        parentId: e,
                    }),
                        n(),
                        t());
                } catch (f) {
                    alert(f);
                } finally {
                    r(!1);
                }
            };
        return D.jsxs('form', {
            className: 'comment-form',
            onSubmit: a(c),
            children: [
                D.jsx('textarea', {
                    placeholder: 'Escribe un comentario...',
                    ...l('comment', { required: !0, minLength: 1 }),
                    disabled: i,
                }),
                D.jsx('button', {
                    className: 'btn-primary',
                    type: 'submit',
                    disabled: i || !u.isValid,
                    children: 'Comentar',
                }),
            ],
        });
    },
    UE = ({ comment: e, onDelete: t }) =>
        D.jsxs('div', {
            className: 'comment-card',
            children: [
                D.jsxs('div', {
                    className: 'header',
                    children: [
                        D.jsxs('div', {
                            className: 'header-left',
                            children: [
                                D.jsx('img', { className: 'avatar', src: e.avatar, alt: e.name }),
                                D.jsxs('div', {
                                    className: 'author-container',
                                    children: [
                                        D.jsx('span', { className: 'author', children: e.name }),
                                        D.jsx('span', {
                                            className: 'date',
                                            children: new Date(e.createdAt).toLocaleString(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        D.jsx(Rf, { onClick: () => t(e.id) }),
                    ],
                }),
                D.jsx('div', {
                    className: 'comment-content',
                    children: D.jsx('p', { children: e.content }),
                }),
            ],
        }),
    ME = ({ postId: e, comments: t, onCommented: l, onDelete: a }) =>
        D.jsxs('div', {
            className: 'comments-section',
            children: [
                D.jsx('h3', { children: 'Comentarios' }),
                D.jsx(NE, { postId: e, onCommented: l }),
                D.jsx('div', {
                    className: 'comments-list',
                    children:
                        t.length === 0
                            ? D.jsx('p', {
                                  className: 'no-comments',
                                  children: 'No hay comentarios aún.',
                              })
                            : t.map((n) => D.jsx(UE, { comment: n, onDelete: a }, n.id)),
                }),
            ],
        }),
    zE = () =>
        D.jsxs('div', {
            className: 'post-detail-skeleton',
            children: [
                D.jsxs('div', {
                    className: 'post-detail-card-skeleton',
                    children: [
                        D.jsxs('div', {
                            className: 'header',
                            children: [
                                D.jsx('div', { className: 'avatar-skeleton' }),
                                D.jsxs('div', {
                                    className: 'info',
                                    children: [
                                        D.jsx('div', { className: 'title-skeleton' }),
                                        D.jsx('div', { className: 'author-skeleton' }),
                                        D.jsx('div', { className: 'date-skeleton' }),
                                    ],
                                }),
                            ],
                        }),
                        D.jsx('div', { className: 'content-skeleton' }),
                    ],
                }),
                D.jsxs('div', {
                    className: 'comments-section-skeleton',
                    children: [
                        D.jsx('div', { className: 'comment-title-skeleton' }),
                        [...Array(3)].map((e, t) =>
                            D.jsxs(
                                'div',
                                {
                                    className: 'comment-card-skeleton',
                                    children: [
                                        D.jsx('div', { className: 'avatar-skeleton' }),
                                        D.jsxs('div', {
                                            className: 'comment-content-skeleton',
                                            children: [
                                                D.jsx('div', { className: 'author-skeleton' }),
                                                D.jsx('div', { className: 'date-skeleton' }),
                                                D.jsx('div', { className: 'text-skeleton' }),
                                            ],
                                        }),
                                    ],
                                },
                                t
                            )
                        ),
                    ],
                }),
            ],
        }),
    CE = ({ title: e }) => {
        const t = fr();
        return D.jsxs('div', {
            className: 'back-header-bar',
            children: [
                D.jsx('button', {
                    className: 'back-btn',
                    onClick: () => t(-1),
                    title: 'Volver',
                    children: D.jsx('svg', {
                        width: '28',
                        height: '28',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        stroke: '#9ca3af',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        children: D.jsx('polyline', { points: '15 18 9 12 15 6' }),
                    }),
                }),
                e && D.jsx('span', { className: 'header-title', children: e }),
            ],
        });
    },
    wE = () => {
        const { postId: e } = v1(),
            [t, l] = R.useState(null),
            [a, n] = R.useState([]),
            [u, i] = R.useState(!0);
        R.useEffect(() => {
            e && r();
        }, []);
        const r = async () => {
                i(!0);
                try {
                    const f = await YS(e);
                    (l(f), c());
                } catch (f) {
                    (alert(f), console.error('Error fetching post:', f), i(!1));
                }
            },
            c = async () => {
                i(!0);
                try {
                    const f = await XS(e);
                    n(f);
                } catch (f) {
                    console.error('Error fetching comments:', f);
                } finally {
                    i(!1);
                }
            },
            s = async (f) => {
                if (window.confirm('¿Eliminar este comentario?'))
                    try {
                        (await ZS(e, f), n((h) => h.filter((d) => d.id !== f)));
                    } catch (h) {
                        alert(h);
                    }
            };
        return D.jsxs('div', {
            className: 'post-detail',
            children: [
                D.jsx(CE, {}),
                u || !t
                    ? D.jsx(zE, {})
                    : D.jsxs(D.Fragment, {
                          children: [
                              D.jsx(DE, { post: t }),
                              e &&
                                  D.jsx(ME, {
                                      postId: e,
                                      comments: a,
                                      onCommented: c,
                                      onDelete: s,
                                  }),
                          ],
                      }),
            ],
        });
    };
function BE() {
    return D.jsx(eb, {
        children: D.jsxs(M1, {
            children: [
                D.jsx(rs, { path: '/', element: D.jsx(_E, {}) }),
                D.jsx(rs, { path: '/post/:postId', element: D.jsx(wE, {}) }),
            ],
        }),
    });
}
Vp.createRoot(document.getElementById('root')).render(
    D.jsx(R.StrictMode, { children: D.jsx(BE, {}) })
);

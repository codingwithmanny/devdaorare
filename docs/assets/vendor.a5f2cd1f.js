var e =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {},
  t = { exports: {} },
  r = {},
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable;
function i(e) {
  if (null == e)
    throw new TypeError(
      'Object.assign cannot be called with null or undefined',
    );
  return Object(e);
}
var l = (function () {
    try {
      if (!Object.assign) return !1;
      var e = new String('abc');
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r;
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e];
          })
          .join('')
      )
        return !1;
      var n = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
          n[e] = e;
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
      );
    } catch (a) {
      return !1;
    }
  })()
    ? Object.assign
    : function (e, t) {
        for (var r, l, s = i(e), u = 1; u < arguments.length; u++) {
          for (var c in (r = Object(arguments[u])))
            a.call(r, c) && (s[c] = r[c]);
          if (n) {
            l = n(r);
            for (var d = 0; d < l.length; d++)
              o.call(r, l[d]) && (s[l[d]] = r[l[d]]);
          }
        }
        return s;
      },
  s = l,
  u = 60103,
  c = 60106;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (r.Fragment = 60107), (r.StrictMode = 60108), (r.Profiler = 60114);
var d = 60109,
  f = 60110,
  p = 60112;
r.Suspense = 60113;
var h = 60115,
  m = 60116;
if ('function' == typeof Symbol && Symbol.for) {
  var g = Symbol.for;
  (u = g('react.element')),
    (c = g('react.portal')),
    (r.Fragment = g('react.fragment')),
    (r.StrictMode = g('react.strict_mode')),
    (r.Profiler = g('react.profiler')),
    (d = g('react.provider')),
    (f = g('react.context')),
    (p = g('react.forward_ref')),
    (r.Suspense = g('react.suspense')),
    (h = g('react.memo')),
    (m = g('react.lazy'));
}
var b = 'function' == typeof Symbol && Symbol.iterator;
function v(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
    r < arguments.length;
    r++
  )
    t += '&args[]=' + encodeURIComponent(arguments[r]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var y = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  x = {};
function k(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = x),
    (this.updater = r || y);
}
function w() {}
function S(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = x),
    (this.updater = r || y);
}
(k.prototype.isReactComponent = {}),
  (k.prototype.setState = function (e, t) {
    if ('object' != typeof e && 'function' != typeof e && null != e)
      throw Error(v(85));
    this.updater.enqueueSetState(this, e, t, 'setState');
  }),
  (k.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
  }),
  (w.prototype = k.prototype);
var _ = (S.prototype = new w());
(_.constructor = S), s(_, k.prototype), (_.isPureReactComponent = !0);
var E = { current: null },
  C = Object.prototype.hasOwnProperty,
  z = { key: !0, ref: !0, __self: !0, __source: !0 };
function O(e, t, r) {
  var n,
    a = {},
    o = null,
    i = null;
  if (null != t)
    for (n in (void 0 !== t.ref && (i = t.ref),
    void 0 !== t.key && (o = '' + t.key),
    t))
      C.call(t, n) && !z.hasOwnProperty(n) && (a[n] = t[n]);
  var l = arguments.length - 2;
  if (1 === l) a.children = r;
  else if (1 < l) {
    for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
    a.children = s;
  }
  if (e && e.defaultProps)
    for (n in (l = e.defaultProps)) void 0 === a[n] && (a[n] = l[n]);
  return { $$typeof: u, type: e, key: o, ref: i, props: a, _owner: E.current };
}
function P(e) {
  return 'object' == typeof e && null !== e && e.$$typeof === u;
}
var R = /\/+/g;
function A(e, t) {
  return 'object' == typeof e && null !== e && null != e.key
    ? (function (e) {
        var t = { '=': '=0', ':': '=2' };
        return (
          '$' +
          e.replace(/[=:]/g, function (e) {
            return t[e];
          })
        );
      })('' + e.key)
    : t.toString(36);
}
function T(e, t, r, n, a) {
  var o = typeof e;
  ('undefined' !== o && 'boolean' !== o) || (e = null);
  var i = !1;
  if (null === e) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case u:
          case c:
            i = !0;
        }
    }
  if (i)
    return (
      (a = a((i = e))),
      (e = '' === n ? '.' + A(i, 0) : n),
      Array.isArray(a)
        ? ((r = ''),
          null != e && (r = e.replace(R, '$&/') + '/'),
          T(a, t, r, '', function (e) {
            return e;
          }))
        : null != a &&
          (P(a) &&
            (a = (function (e, t) {
              return {
                $$typeof: u,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner,
              };
            })(
              a,
              r +
                (!a.key || (i && i.key === a.key)
                  ? ''
                  : ('' + a.key).replace(R, '$&/') + '/') +
                e,
            )),
          t.push(a)),
      1
    );
  if (((i = 0), (n = '' === n ? '.' : n + ':'), Array.isArray(e)))
    for (var l = 0; l < e.length; l++) {
      var s = n + A((o = e[l]), l);
      i += T(o, t, r, s, a);
    }
  else if (
    'function' ==
    typeof (s = (function (e) {
      return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (b && e[b]) || e['@@iterator'])
        ? e
        : null;
    })(e))
  )
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      i += T((o = o.value), t, r, (s = n + A(o, l++)), a);
  else if ('object' === o)
    throw (
      ((t = '' + e),
      Error(
        v(
          31,
          '[object Object]' === t
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t,
        ),
      ))
    );
  return i;
}
function j(e, t, r) {
  if (null == e) return e;
  var n = [],
    a = 0;
  return (
    T(e, n, '', '', function (e) {
      return t.call(r, e, a++);
    }),
    n
  );
}
function F(e) {
  if (-1 === e._status) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (t) {
          0 === e._status &&
            ((t = t.default), (e._status = 1), (e._result = t));
        },
        function (t) {
          0 === e._status && ((e._status = 2), (e._result = t));
        },
      );
  }
  if (1 === e._status) return e._result;
  throw e._result;
}
var I = { current: null };
function B() {
  var e = I.current;
  if (null === e) throw Error(v(321));
  return e;
}
var N = {
  ReactCurrentDispatcher: I,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: E,
  IsSomeRendererActing: { current: !1 },
  assign: s,
};
(r.Children = {
  map: j,
  forEach: function (e, t, r) {
    j(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      j(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      j(e, function (e) {
        return e;
      }) || []
    );
  },
  only: function (e) {
    if (!P(e)) throw Error(v(143));
    return e;
  },
}),
  (r.Component = k),
  (r.PureComponent = S),
  (r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
  (r.cloneElement = function (e, t, r) {
    if (null == e) throw Error(v(267, e));
    var n = s({}, e.props),
      a = e.key,
      o = e.ref,
      i = e._owner;
    if (null != t) {
      if (
        (void 0 !== t.ref && ((o = t.ref), (i = E.current)),
        void 0 !== t.key && (a = '' + t.key),
        e.type && e.type.defaultProps)
      )
        var l = e.type.defaultProps;
      for (c in t)
        C.call(t, c) &&
          !z.hasOwnProperty(c) &&
          (n[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
    }
    var c = arguments.length - 2;
    if (1 === c) n.children = r;
    else if (1 < c) {
      l = Array(c);
      for (var d = 0; d < c; d++) l[d] = arguments[d + 2];
      n.children = l;
    }
    return { $$typeof: u, type: e.type, key: a, ref: o, props: n, _owner: i };
  }),
  (r.createContext = function (e, t) {
    return (
      void 0 === t && (t = null),
      ((e = {
        $$typeof: f,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }).Provider = { $$typeof: d, _context: e }),
      (e.Consumer = e)
    );
  }),
  (r.createElement = O),
  (r.createFactory = function (e) {
    var t = O.bind(null, e);
    return (t.type = e), t;
  }),
  (r.createRef = function () {
    return { current: null };
  }),
  (r.forwardRef = function (e) {
    return { $$typeof: p, render: e };
  }),
  (r.isValidElement = P),
  (r.lazy = function (e) {
    return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: F };
  }),
  (r.memo = function (e, t) {
    return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
  }),
  (r.useCallback = function (e, t) {
    return B().useCallback(e, t);
  }),
  (r.useContext = function (e, t) {
    return B().useContext(e, t);
  }),
  (r.useDebugValue = function () {}),
  (r.useEffect = function (e, t) {
    return B().useEffect(e, t);
  }),
  (r.useImperativeHandle = function (e, t, r) {
    return B().useImperativeHandle(e, t, r);
  }),
  (r.useLayoutEffect = function (e, t) {
    return B().useLayoutEffect(e, t);
  }),
  (r.useMemo = function (e, t) {
    return B().useMemo(e, t);
  }),
  (r.useReducer = function (e, t, r) {
    return B().useReducer(e, t, r);
  }),
  (r.useRef = function (e) {
    return B().useRef(e);
  }),
  (r.useState = function (e) {
    return B().useState(e);
  }),
  (r.version = '17.0.2'),
  (t.exports = r);
var L = t.exports,
  M = { exports: {} },
  D = {},
  W = { exports: {} },
  H = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!(function (e) {
  var t, r, n, a;
  if ('object' == typeof performance && 'function' == typeof performance.now) {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
    var s = null,
      u = null,
      c = function () {
        if (null !== s)
          try {
            var t = e.unstable_now();
            s(!0, t), (s = null);
          } catch (r) {
            throw (setTimeout(c, 0), r);
          }
      };
    (t = function (e) {
      null !== s ? setTimeout(t, 0, e) : ((s = e), setTimeout(c, 0));
    }),
      (r = function (e, t) {
        u = setTimeout(e, t);
      }),
      (n = function () {
        clearTimeout(u);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (a = e.unstable_forceFrameRate = function () {});
  } else {
    var d = window.setTimeout,
      f = window.clearTimeout;
    if ('undefined' != typeof console) {
      var p = window.cancelAnimationFrame;
      'function' != typeof window.requestAnimationFrame &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        ),
        'function' != typeof p &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          );
    }
    var h = !1,
      m = null,
      g = -1,
      b = 5,
      v = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= v;
    }),
      (a = function () {}),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (b = 0 < e ? Math.floor(1e3 / e) : 5);
      });
    var y = new MessageChannel(),
      x = y.port2;
    (y.port1.onmessage = function () {
      if (null !== m) {
        var t = e.unstable_now();
        v = t + b;
        try {
          m(!0, t) ? x.postMessage(null) : ((h = !1), (m = null));
        } catch (r) {
          throw (x.postMessage(null), r);
        }
      } else h = !1;
    }),
      (t = function (e) {
        (m = e), h || ((h = !0), x.postMessage(null));
      }),
      (r = function (t, r) {
        g = d(function () {
          t(e.unstable_now());
        }, r);
      }),
      (n = function () {
        f(g), (g = -1);
      });
  }
  function k(e, t) {
    var r = e.length;
    e.push(t);
    e: for (;;) {
      var n = (r - 1) >>> 1,
        a = e[n];
      if (!(void 0 !== a && 0 < _(a, t))) break e;
      (e[n] = t), (e[r] = a), (r = n);
    }
  }
  function w(e) {
    return void 0 === (e = e[0]) ? null : e;
  }
  function S(e) {
    var t = e[0];
    if (void 0 !== t) {
      var r = e.pop();
      if (r !== t) {
        e[0] = r;
        e: for (var n = 0, a = e.length; n < a; ) {
          var o = 2 * (n + 1) - 1,
            i = e[o],
            l = o + 1,
            s = e[l];
          if (void 0 !== i && 0 > _(i, r))
            void 0 !== s && 0 > _(s, i)
              ? ((e[n] = s), (e[l] = r), (n = l))
              : ((e[n] = i), (e[o] = r), (n = o));
          else {
            if (!(void 0 !== s && 0 > _(s, r))) break e;
            (e[n] = s), (e[l] = r), (n = l);
          }
        }
      }
      return t;
    }
    return null;
  }
  function _(e, t) {
    var r = e.sortIndex - t.sortIndex;
    return 0 !== r ? r : e.id - t.id;
  }
  var E = [],
    C = [],
    z = 1,
    O = null,
    P = 3,
    R = !1,
    A = !1,
    T = !1;
  function j(e) {
    for (var t = w(C); null !== t; ) {
      if (null === t.callback) S(C);
      else {
        if (!(t.startTime <= e)) break;
        S(C), (t.sortIndex = t.expirationTime), k(E, t);
      }
      t = w(C);
    }
  }
  function F(e) {
    if (((T = !1), j(e), !A))
      if (null !== w(E)) (A = !0), t(I);
      else {
        var n = w(C);
        null !== n && r(F, n.startTime - e);
      }
  }
  function I(t, a) {
    (A = !1), T && ((T = !1), n()), (R = !0);
    var o = P;
    try {
      for (
        j(a), O = w(E);
        null !== O &&
        (!(O.expirationTime > a) || (t && !e.unstable_shouldYield()));

      ) {
        var i = O.callback;
        if ('function' == typeof i) {
          (O.callback = null), (P = O.priorityLevel);
          var l = i(O.expirationTime <= a);
          (a = e.unstable_now()),
            'function' == typeof l ? (O.callback = l) : O === w(E) && S(E),
            j(a);
        } else S(E);
        O = w(E);
      }
      if (null !== O) var s = !0;
      else {
        var u = w(C);
        null !== u && r(F, u.startTime - a), (s = !1);
      }
      return s;
    } finally {
      (O = null), (P = o), (R = !1);
    }
  }
  var B = a;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (e) {
      e.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      A || R || ((A = !0), t(I));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return P;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return w(E);
    }),
    (e.unstable_next = function (e) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = P;
      }
      var r = P;
      P = t;
      try {
        return e();
      } finally {
        P = r;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = B),
    (e.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var r = P;
      P = e;
      try {
        return t();
      } finally {
        P = r;
      }
    }),
    (e.unstable_scheduleCallback = function (a, o, i) {
      var l = e.unstable_now();
      switch (
        ('object' == typeof i && null !== i
          ? (i = 'number' == typeof (i = i.delay) && 0 < i ? l + i : l)
          : (i = l),
        a)
      ) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return (
        (a = {
          id: z++,
          callback: o,
          priorityLevel: a,
          startTime: i,
          expirationTime: (s = i + s),
          sortIndex: -1,
        }),
        i > l
          ? ((a.sortIndex = i),
            k(C, a),
            null === w(E) && a === w(C) && (T ? n() : (T = !0), r(F, i - l)))
          : ((a.sortIndex = s), k(E, a), A || R || ((A = !0), t(I))),
        a
      );
    }),
    (e.unstable_wrapCallback = function (e) {
      var t = P;
      return function () {
        var r = P;
        P = t;
        try {
          return e.apply(this, arguments);
        } finally {
          P = r;
        }
      };
    });
})(H),
  (W.exports = H);
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $ = t.exports,
  U = l,
  V = W.exports;
function q(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
    r < arguments.length;
    r++
  )
    t += '&args[]=' + encodeURIComponent(arguments[r]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
if (!$) throw Error(q(227));
var Q = new Set(),
  Y = {};
function X(e, t) {
  G(e, t), G(e + 'Capture', t);
}
function G(e, t) {
  for (Y[e] = t, e = 0; e < t.length; e++) Q.add(t[e]);
}
var K = !(
    'undefined' == typeof window ||
    void 0 === window.document ||
    void 0 === window.document.createElement
  ),
  Z =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  J = Object.prototype.hasOwnProperty,
  ee = {},
  te = {};
function re(e, t, r, n, a, o, i) {
  (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
    (this.attributeName = n),
    (this.attributeNamespace = a),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new re(e, 0, !1, e, null, !1, !1);
  }),
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0];
    ne[t] = new re(t, 1, !1, e[1], null, !1, !1);
  }),
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    ne[e] = new re(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }),
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (e) {
    ne[e] = new re(e, 2, !1, e, null, !1, !1);
  }),
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      ne[e] = new re(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    ne[e] = new re(e, 3, !0, e, null, !1, !1);
  }),
  ['capture', 'download'].forEach(function (e) {
    ne[e] = new re(e, 4, !1, e, null, !1, !1);
  }),
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    ne[e] = new re(e, 6, !1, e, null, !1, !1);
  }),
  ['rowSpan', 'start'].forEach(function (e) {
    ne[e] = new re(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
var ae = /[\-:]([a-z])/g;
function oe(e) {
  return e[1].toUpperCase();
}
function ie(e, t, r, n) {
  var a = ne.hasOwnProperty(t) ? ne[t] : null;
  (null !== a
    ? 0 === a.type
    : !n &&
      2 < t.length &&
      ('o' === t[0] || 'O' === t[0]) &&
      ('n' === t[1] || 'N' === t[1])) ||
    ((function (e, t, r, n) {
      if (
        null == t ||
        (function (e, t, r, n) {
          if (null !== r && 0 === r.type) return !1;
          switch (typeof t) {
            case 'function':
            case 'symbol':
              return !0;
            case 'boolean':
              return (
                !n &&
                (null !== r
                  ? !r.acceptsBooleans
                  : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                    'aria-' !== e)
              );
            default:
              return !1;
          }
        })(e, t, r, n)
      )
        return !0;
      if (n) return !1;
      if (null !== r)
        switch (r.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    })(t, r, a, n) && (r = null),
    n || null === a
      ? (function (e) {
          return (
            !!J.call(te, e) ||
            (!J.call(ee, e) && (Z.test(e) ? (te[e] = !0) : ((ee[e] = !0), !1)))
          );
        })(t) && (null === r ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
      : a.mustUseProperty
      ? (e[a.propertyName] = null === r ? 3 !== a.type && '' : r)
      : ((t = a.attributeName),
        (n = a.attributeNamespace),
        null === r
          ? e.removeAttribute(t)
          : ((r = 3 === (a = a.type) || (4 === a && !0 === r) ? '' : '' + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ae, oe);
    ne[t] = new re(t, 1, !1, e, null, !1, !1);
  }),
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(ae, oe);
      ne[t] = new re(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(ae, oe);
    ne[t] = new re(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  }),
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    ne[e] = new re(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }),
  (ne.xlinkHref = new re(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1,
  )),
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    ne[e] = new re(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
var le = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  se = 60103,
  ue = 60106,
  ce = 60107,
  de = 60108,
  fe = 60114,
  pe = 60109,
  he = 60110,
  me = 60112,
  ge = 60113,
  be = 60120,
  ve = 60115,
  ye = 60116,
  xe = 60121,
  ke = 60128,
  we = 60129,
  Se = 60130,
  _e = 60131;
if ('function' == typeof Symbol && Symbol.for) {
  var Ee = Symbol.for;
  (se = Ee('react.element')),
    (ue = Ee('react.portal')),
    (ce = Ee('react.fragment')),
    (de = Ee('react.strict_mode')),
    (fe = Ee('react.profiler')),
    (pe = Ee('react.provider')),
    (he = Ee('react.context')),
    (me = Ee('react.forward_ref')),
    (ge = Ee('react.suspense')),
    (be = Ee('react.suspense_list')),
    (ve = Ee('react.memo')),
    (ye = Ee('react.lazy')),
    (xe = Ee('react.block')),
    Ee('react.scope'),
    (ke = Ee('react.opaque.id')),
    (we = Ee('react.debug_trace_mode')),
    (Se = Ee('react.offscreen')),
    (_e = Ee('react.legacy_hidden'));
}
var Ce,
  ze = 'function' == typeof Symbol && Symbol.iterator;
function Oe(e) {
  return null === e || 'object' != typeof e
    ? null
    : 'function' == typeof (e = (ze && e[ze]) || e['@@iterator'])
    ? e
    : null;
}
function Pe(e) {
  if (void 0 === Ce)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Ce = (t && t[1]) || '';
    }
  return '\n' + Ce + e;
}
var Re = !1;
function Ae(e, t) {
  if (!e || Re) return '';
  Re = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        'object' == typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var n = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          n = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        n = s;
      }
      e();
    }
  } catch (s) {
    if (s && n && 'string' == typeof s.stack) {
      for (
        var a = s.stack.split('\n'),
          o = n.stack.split('\n'),
          i = a.length - 1,
          l = o.length - 1;
        1 <= i && 0 <= l && a[i] !== o[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (a[i] !== o[l]) {
          if (1 !== i || 1 !== l)
            do {
              if ((i--, 0 > --l || a[i] !== o[l]))
                return '\n' + a[i].replace(' at new ', ' at ');
            } while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (Re = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : '') ? Pe(e) : '';
}
function Te(e) {
  switch (e.tag) {
    case 5:
      return Pe(e.type);
    case 16:
      return Pe('Lazy');
    case 13:
      return Pe('Suspense');
    case 19:
      return Pe('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ae(e.type, !1));
    case 11:
      return (e = Ae(e.type.render, !1));
    case 22:
      return (e = Ae(e.type._render, !1));
    case 1:
      return (e = Ae(e.type, !0));
    default:
      return '';
  }
}
function je(e) {
  if (null == e) return null;
  if ('function' == typeof e) return e.displayName || e.name || null;
  if ('string' == typeof e) return e;
  switch (e) {
    case ce:
      return 'Fragment';
    case ue:
      return 'Portal';
    case fe:
      return 'Profiler';
    case de:
      return 'StrictMode';
    case ge:
      return 'Suspense';
    case be:
      return 'SuspenseList';
  }
  if ('object' == typeof e)
    switch (e.$$typeof) {
      case he:
        return (e.displayName || 'Context') + '.Consumer';
      case pe:
        return (e._context.displayName || 'Context') + '.Provider';
      case me:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ''),
          e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        );
      case ve:
        return je(e.type);
      case xe:
        return je(e._render);
      case ye:
        (t = e._payload), (e = e._init);
        try {
          return je(e(t));
        } catch (r) {}
    }
  return null;
}
function Fe(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return e;
    default:
      return '';
  }
}
function Ie(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    'input' === e.toLowerCase() &&
    ('checkbox' === t || 'radio' === t)
  );
}
function Be(e) {
  e._valueTracker ||
    (e._valueTracker = (function (e) {
      var t = Ie(e) ? 'checked' : 'value',
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = '' + e[t];
      if (
        !e.hasOwnProperty(t) &&
        void 0 !== r &&
        'function' == typeof r.get &&
        'function' == typeof r.set
      ) {
        var a = r.get,
          o = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return a.call(this);
            },
            set: function (e) {
              (n = '' + e), o.call(this, e);
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = '' + e;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    })(e));
}
function Ne(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = '';
  return (
    e && (n = Ie(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n) !== r && (t.setValue(e), !0)
  );
}
function Le(e) {
  if (
    void 0 === (e = e || ('undefined' != typeof document ? document : void 0))
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function Me(e, t) {
  var r = t.checked;
  return U({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != r ? r : e._wrapperState.initialChecked,
  });
}
function De(e, t) {
  var r = null == t.defaultValue ? '' : t.defaultValue,
    n = null != t.checked ? t.checked : t.defaultChecked;
  (r = Fe(null != t.value ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        'checkbox' === t.type || 'radio' === t.type
          ? null != t.checked
          : null != t.value,
    });
}
function We(e, t) {
  null != (t = t.checked) && ie(e, 'checked', t, !1);
}
function He(e, t) {
  We(e, t);
  var r = Fe(t.value),
    n = t.type;
  if (null != r)
    'number' === n
      ? ((0 === r && '' === e.value) || e.value != r) && (e.value = '' + r)
      : e.value !== '' + r && (e.value = '' + r);
  else if ('submit' === n || 'reset' === n)
    return void e.removeAttribute('value');
  t.hasOwnProperty('value')
    ? Ue(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && Ue(e, t.type, Fe(t.defaultValue)),
    null == t.checked &&
      null != t.defaultChecked &&
      (e.defaultChecked = !!t.defaultChecked);
}
function $e(e, t, r) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var n = t.type;
    if (
      !(
        ('submit' !== n && 'reset' !== n) ||
        (void 0 !== t.value && null !== t.value)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  '' !== (r = e.name) && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    '' !== r && (e.name = r);
}
function Ue(e, t, r) {
  ('number' === t && Le(e.ownerDocument) === e) ||
    (null == r
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
}
function Ve(e, t) {
  return (
    (e = U({ children: void 0 }, t)),
    (t = (function (e) {
      var t = '';
      return (
        $.Children.forEach(e, function (e) {
          null != e && (t += e);
        }),
        t
      );
    })(t.children)) && (e.children = t),
    e
  );
}
function qe(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < r.length; a++) t['$' + r[a]] = !0;
    for (r = 0; r < e.length; r++)
      (a = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== a && (e[r].selected = a),
        a && n && (e[r].defaultSelected = !0);
  } else {
    for (r = '' + Fe(r), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === r)
        return (e[a].selected = !0), void (n && (e[a].defaultSelected = !0));
      null !== t || e[a].disabled || (t = e[a]);
    }
    null !== t && (t.selected = !0);
  }
}
function Qe(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error(q(91));
  return U({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ye(e, t) {
  var r = t.value;
  if (null == r) {
    if (((r = t.children), (t = t.defaultValue), null != r)) {
      if (null != t) throw Error(q(92));
      if (Array.isArray(r)) {
        if (!(1 >= r.length)) throw Error(q(93));
        r = r[0];
      }
      t = r;
    }
    null == t && (t = ''), (r = t);
  }
  e._wrapperState = { initialValue: Fe(r) };
}
function Xe(e, t) {
  var r = Fe(t.value),
    n = Fe(t.defaultValue);
  null != r &&
    ((r = '' + r) !== e.value && (e.value = r),
    null == t.defaultValue && e.defaultValue !== r && (e.defaultValue = r)),
    null != n && (e.defaultValue = '' + n);
}
function Ge(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
var Ke = 'http://www.w3.org/1999/xhtml',
  Ze = 'http://www.w3.org/2000/svg';
function Je(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function et(e, t) {
  return null == e || 'http://www.w3.org/1999/xhtml' === e
    ? Je(t)
    : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var tt,
  rt,
  nt =
    ((rt = function (e, t) {
      if (e.namespaceURI !== Ze || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          (tt = tt || document.createElement('div')).innerHTML =
            '<svg>' + t.valueOf().toString() + '</svg>',
            t = tt.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    }),
    'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
      ? function (e, t, r, n) {
          MSApp.execUnsafeLocalFunction(function () {
            return rt(e, t);
          });
        }
      : rt);
function at(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && 3 === r.nodeType)
      return void (r.nodeValue = t);
  }
  e.textContent = t;
}
var ot = {
    animationIterationCount: !0,
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
    strokeWidth: !0,
  },
  it = ['Webkit', 'ms', 'Moz', 'O'];
function lt(e, t, r) {
  return null == t || 'boolean' == typeof t || '' === t
    ? ''
    : r || 'number' != typeof t || 0 === t || (ot.hasOwnProperty(e) && ot[e])
    ? ('' + t).trim()
    : t + 'px';
}
function st(e, t) {
  for (var r in ((e = e.style), t))
    if (t.hasOwnProperty(r)) {
      var n = 0 === r.indexOf('--'),
        a = lt(r, t[r], n);
      'float' === r && (r = 'cssFloat'), n ? e.setProperty(r, a) : (e[r] = a);
    }
}
Object.keys(ot).forEach(function (e) {
  it.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ot[t] = ot[e]);
  });
});
var ut = U(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function ct(e, t) {
  if (t) {
    if (ut[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
      throw Error(q(137, e));
    if (null != t.dangerouslySetInnerHTML) {
      if (null != t.children) throw Error(q(60));
      if (
        'object' != typeof t.dangerouslySetInnerHTML ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(q(61));
    }
    if (null != t.style && 'object' != typeof t.style) throw Error(q(62));
  }
}
function dt(e, t) {
  if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
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
function ft(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  );
}
var pt = null,
  ht = null,
  mt = null;
function gt(e) {
  if ((e = Da(e))) {
    if ('function' != typeof pt) throw Error(q(280));
    var t = e.stateNode;
    t && ((t = Ha(t)), pt(e.stateNode, e.type, t));
  }
}
function bt(e) {
  ht ? (mt ? mt.push(e) : (mt = [e])) : (ht = e);
}
function vt() {
  if (ht) {
    var e = ht,
      t = mt;
    if (((mt = ht = null), gt(e), t)) for (e = 0; e < t.length; e++) gt(t[e]);
  }
}
function yt(e, t) {
  return e(t);
}
function xt(e, t, r, n, a) {
  return e(t, r, n, a);
}
function kt() {}
var wt = yt,
  St = !1,
  _t = !1;
function Et() {
  (null === ht && null === mt) || (kt(), vt());
}
function Ct(e, t) {
  var r = e.stateNode;
  if (null === r) return null;
  var n = Ha(r);
  if (null === n) return null;
  r = n[t];
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
      (n = !n.disabled) ||
        (n = !(
          'button' === (e = e.type) ||
          'input' === e ||
          'select' === e ||
          'textarea' === e
        )),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && 'function' != typeof r) throw Error(q(231, t, typeof r));
  return r;
}
var zt = !1;
if (K)
  try {
    var Ot = {};
    Object.defineProperty(Ot, 'passive', {
      get: function () {
        zt = !0;
      },
    }),
      window.addEventListener('test', Ot, Ot),
      window.removeEventListener('test', Ot, Ot);
  } catch (rt) {
    zt = !1;
  }
function Pt(e, t, r, n, a, o, i, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Rt = !1,
  At = null,
  Tt = !1,
  jt = null,
  Ft = {
    onError: function (e) {
      (Rt = !0), (At = e);
    },
  };
function It(e, t, r, n, a, o, i, l, s) {
  (Rt = !1), (At = null), Pt.apply(Ft, arguments);
}
function Bt(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do {
      0 != (1026 & (t = e).flags) && (r = t.return), (e = t.return);
    } while (e);
  }
  return 3 === t.tag ? r : null;
}
function Nt(e) {
  if (13 === e.tag) {
    var t = e.memoizedState;
    if (
      (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
      null !== t)
    )
      return t.dehydrated;
  }
  return null;
}
function Lt(e) {
  if (Bt(e) !== e) throw Error(q(188));
}
function Mt(e) {
  if (
    !(e = (function (e) {
      var t = e.alternate;
      if (!t) {
        if (null === (t = Bt(e))) throw Error(q(188));
        return t !== e ? null : e;
      }
      for (var r = e, n = t; ; ) {
        var a = r.return;
        if (null === a) break;
        var o = a.alternate;
        if (null === o) {
          if (null !== (n = a.return)) {
            r = n;
            continue;
          }
          break;
        }
        if (a.child === o.child) {
          for (o = a.child; o; ) {
            if (o === r) return Lt(a), e;
            if (o === n) return Lt(a), t;
            o = o.sibling;
          }
          throw Error(q(188));
        }
        if (r.return !== n.return) (r = a), (n = o);
        else {
          for (var i = !1, l = a.child; l; ) {
            if (l === r) {
              (i = !0), (r = a), (n = o);
              break;
            }
            if (l === n) {
              (i = !0), (n = a), (r = o);
              break;
            }
            l = l.sibling;
          }
          if (!i) {
            for (l = o.child; l; ) {
              if (l === r) {
                (i = !0), (r = o), (n = a);
                break;
              }
              if (l === n) {
                (i = !0), (n = o), (r = a);
                break;
              }
              l = l.sibling;
            }
            if (!i) throw Error(q(189));
          }
        }
        if (r.alternate !== n) throw Error(q(190));
      }
      if (3 !== r.tag) throw Error(q(188));
      return r.stateNode.current === r ? e : t;
    })(e))
  )
    return null;
  for (var t = e; ; ) {
    if (5 === t.tag || 6 === t.tag) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function Dt(e, t) {
  for (var r = e.alternate; null !== t; ) {
    if (t === e || t === r) return !0;
    t = t.return;
  }
  return !1;
}
var Wt,
  Ht,
  $t,
  Ut,
  Vt = !1,
  qt = [],
  Qt = null,
  Yt = null,
  Xt = null,
  Gt = new Map(),
  Kt = new Map(),
  Zt = [],
  Jt =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function er(e, t, r, n, a) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: 16 | r,
    nativeEvent: a,
    targetContainers: [n],
  };
}
function tr(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Qt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Yt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Xt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Gt.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Kt.delete(t.pointerId);
  }
}
function rr(e, t, r, n, a, o) {
  return null === e || e.nativeEvent !== o
    ? ((e = er(t, r, n, a, o)), null !== t && null !== (t = Da(t)) && Ht(t), e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      null !== a && -1 === t.indexOf(a) && t.push(a),
      e);
}
function nr(e) {
  var t = Ma(e.target);
  if (null !== t) {
    var r = Bt(t);
    if (null !== r)
      if (13 === (t = r.tag)) {
        if (null !== (t = Nt(r)))
          return (
            (e.blockedOn = t),
            void Ut(e.lanePriority, function () {
              V.unstable_runWithPriority(e.priority, function () {
                $t(r);
              });
            })
          );
      } else if (3 === t && r.stateNode.hydrate)
        return void (e.blockedOn =
          3 === r.tag ? r.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function ar(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Mr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (null !== r) return null !== (t = Da(r)) && Ht(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function or(e, t, r) {
  ar(e) && r.delete(t);
}
function ir() {
  for (Vt = !1; 0 < qt.length; ) {
    var e = qt[0];
    if (null !== e.blockedOn) {
      null !== (e = Da(e.blockedOn)) && Wt(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Mr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== r) {
        e.blockedOn = r;
        break;
      }
      t.shift();
    }
    null === e.blockedOn && qt.shift();
  }
  null !== Qt && ar(Qt) && (Qt = null),
    null !== Yt && ar(Yt) && (Yt = null),
    null !== Xt && ar(Xt) && (Xt = null),
    Gt.forEach(or),
    Kt.forEach(or);
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Vt ||
      ((Vt = !0), V.unstable_scheduleCallback(V.unstable_NormalPriority, ir)));
}
function sr(e) {
  function t(t) {
    return lr(t, e);
  }
  if (0 < qt.length) {
    lr(qt[0], e);
    for (var r = 1; r < qt.length; r++) {
      var n = qt[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    null !== Qt && lr(Qt, e),
      null !== Yt && lr(Yt, e),
      null !== Xt && lr(Xt, e),
      Gt.forEach(t),
      Kt.forEach(t),
      r = 0;
    r < Zt.length;
    r++
  )
    (n = Zt[r]).blockedOn === e && (n.blockedOn = null);
  for (; 0 < Zt.length && null === (r = Zt[0]).blockedOn; )
    nr(r), null === r.blockedOn && Zt.shift();
}
function ur(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  );
}
var cr = {
    animationend: ur('Animation', 'AnimationEnd'),
    animationiteration: ur('Animation', 'AnimationIteration'),
    animationstart: ur('Animation', 'AnimationStart'),
    transitionend: ur('Transition', 'TransitionEnd'),
  },
  dr = {},
  fr = {};
function pr(e) {
  if (dr[e]) return dr[e];
  if (!cr[e]) return e;
  var t,
    r = cr[e];
  for (t in r) if (r.hasOwnProperty(t) && t in fr) return (dr[e] = r[t]);
  return e;
}
K &&
  ((fr = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  'TransitionEvent' in window || delete cr.transitionend.transition);
var hr = pr('animationend'),
  mr = pr('animationiteration'),
  gr = pr('animationstart'),
  br = pr('transitionend'),
  vr = new Map(),
  yr = new Map(),
  xr = [
    'abort',
    'abort',
    hr,
    'animationEnd',
    mr,
    'animationIteration',
    gr,
    'animationStart',
    'canplay',
    'canPlay',
    'canplaythrough',
    'canPlayThrough',
    'durationchange',
    'durationChange',
    'emptied',
    'emptied',
    'encrypted',
    'encrypted',
    'ended',
    'ended',
    'error',
    'error',
    'gotpointercapture',
    'gotPointerCapture',
    'load',
    'load',
    'loadeddata',
    'loadedData',
    'loadedmetadata',
    'loadedMetadata',
    'loadstart',
    'loadStart',
    'lostpointercapture',
    'lostPointerCapture',
    'playing',
    'playing',
    'progress',
    'progress',
    'seeking',
    'seeking',
    'stalled',
    'stalled',
    'suspend',
    'suspend',
    'timeupdate',
    'timeUpdate',
    br,
    'transitionEnd',
    'waiting',
    'waiting',
  ];
function kr(e, t) {
  for (var r = 0; r < e.length; r += 2) {
    var n = e[r],
      a = e[r + 1];
    (a = 'on' + (a[0].toUpperCase() + a.slice(1))),
      yr.set(n, t),
      vr.set(n, a),
      X(a, [n]);
  }
}
(0, V.unstable_now)();
var wr = 8;
function Sr(e) {
  if (0 != (1 & e)) return (wr = 15), 1;
  if (0 != (2 & e)) return (wr = 14), 2;
  if (0 != (4 & e)) return (wr = 13), 4;
  var t = 24 & e;
  return 0 !== t
    ? ((wr = 12), t)
    : 0 != (32 & e)
    ? ((wr = 11), 32)
    : 0 !== (t = 192 & e)
    ? ((wr = 10), t)
    : 0 != (256 & e)
    ? ((wr = 9), 256)
    : 0 !== (t = 3584 & e)
    ? ((wr = 8), t)
    : 0 != (4096 & e)
    ? ((wr = 7), 4096)
    : 0 !== (t = 4186112 & e)
    ? ((wr = 6), t)
    : 0 !== (t = 62914560 & e)
    ? ((wr = 5), t)
    : 67108864 & e
    ? ((wr = 4), 67108864)
    : 0 != (134217728 & e)
    ? ((wr = 3), 134217728)
    : 0 !== (t = 805306368 & e)
    ? ((wr = 2), t)
    : 0 != (1073741824 & e)
    ? ((wr = 1), 1073741824)
    : ((wr = 8), e);
}
function _r(e, t) {
  var r = e.pendingLanes;
  if (0 === r) return (wr = 0);
  var n = 0,
    a = 0,
    o = e.expiredLanes,
    i = e.suspendedLanes,
    l = e.pingedLanes;
  if (0 !== o) (n = o), (a = wr = 15);
  else if (0 !== (o = 134217727 & r)) {
    var s = o & ~i;
    0 !== s
      ? ((n = Sr(s)), (a = wr))
      : 0 !== (l &= o) && ((n = Sr(l)), (a = wr));
  } else
    0 !== (o = r & ~i)
      ? ((n = Sr(o)), (a = wr))
      : 0 !== l && ((n = Sr(l)), (a = wr));
  if (0 === n) return 0;
  if (
    ((n = r & (((0 > (n = 31 - Rr(n)) ? 0 : 1 << n) << 1) - 1)),
    0 !== t && t !== n && 0 == (t & i))
  ) {
    if ((Sr(t), a <= wr)) return t;
    wr = a;
  }
  if (0 !== (t = e.entangledLanes))
    for (e = e.entanglements, t &= n; 0 < t; )
      (a = 1 << (r = 31 - Rr(t))), (n |= e[r]), (t &= ~a);
  return n;
}
function Er(e) {
  return 0 !== (e = -1073741825 & e.pendingLanes)
    ? e
    : 1073741824 & e
    ? 1073741824
    : 0;
}
function Cr(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return 0 === (e = zr(24 & ~t)) ? Cr(10, t) : e;
    case 10:
      return 0 === (e = zr(192 & ~t)) ? Cr(8, t) : e;
    case 8:
      return (
        0 === (e = zr(3584 & ~t)) && 0 === (e = zr(4186112 & ~t)) && (e = 512),
        e
      );
    case 2:
      return 0 === (t = zr(805306368 & ~t)) && (t = 268435456), t;
  }
  throw Error(q(358, e));
}
function zr(e) {
  return e & -e;
}
function Or(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Pr(e, t, r) {
  e.pendingLanes |= t;
  var n = t - 1;
  (e.suspendedLanes &= n),
    (e.pingedLanes &= n),
    ((e = e.eventTimes)[(t = 31 - Rr(t))] = r);
}
var Rr = Math.clz32
    ? Math.clz32
    : function (e) {
        return 0 === e ? 32 : (31 - ((Ar(e) / Tr) | 0)) | 0;
      },
  Ar = Math.log,
  Tr = Math.LN2;
var jr = V.unstable_UserBlockingPriority,
  Fr = V.unstable_runWithPriority,
  Ir = !0;
function Br(e, t, r, n) {
  St || kt();
  var a = Lr,
    o = St;
  St = !0;
  try {
    xt(a, e, t, r, n);
  } finally {
    (St = o) || Et();
  }
}
function Nr(e, t, r, n) {
  Fr(jr, Lr.bind(null, e, t, r, n));
}
function Lr(e, t, r, n) {
  var a;
  if (Ir)
    if ((a = 0 == (4 & t)) && 0 < qt.length && -1 < Jt.indexOf(e))
      (e = er(null, e, t, r, n)), qt.push(e);
    else {
      var o = Mr(e, t, r, n);
      if (null === o) a && tr(e, n);
      else {
        if (a) {
          if (-1 < Jt.indexOf(e))
            return (e = er(o, e, t, r, n)), void qt.push(e);
          if (
            (function (e, t, r, n, a) {
              switch (t) {
                case 'focusin':
                  return (Qt = rr(Qt, e, t, r, n, a)), !0;
                case 'dragenter':
                  return (Yt = rr(Yt, e, t, r, n, a)), !0;
                case 'mouseover':
                  return (Xt = rr(Xt, e, t, r, n, a)), !0;
                case 'pointerover':
                  var o = a.pointerId;
                  return Gt.set(o, rr(Gt.get(o) || null, e, t, r, n, a)), !0;
                case 'gotpointercapture':
                  return (
                    (o = a.pointerId),
                    Kt.set(o, rr(Kt.get(o) || null, e, t, r, n, a)),
                    !0
                  );
              }
              return !1;
            })(o, e, t, r, n)
          )
            return;
          tr(e, n);
        }
        va(e, t, n, null, r);
      }
    }
}
function Mr(e, t, r, n) {
  var a = ft(n);
  if (null !== (a = Ma(a))) {
    var o = Bt(a);
    if (null === o) a = null;
    else {
      var i = o.tag;
      if (13 === i) {
        if (null !== (a = Nt(o))) return a;
        a = null;
      } else if (3 === i) {
        if (o.stateNode.hydrate)
          return 3 === o.tag ? o.stateNode.containerInfo : null;
        a = null;
      } else o !== a && (a = null);
    }
  }
  return va(e, t, n, a, r), null;
}
var Dr = null,
  Wr = null,
  Hr = null;
function $r() {
  if (Hr) return Hr;
  var e,
    t,
    r = Wr,
    n = r.length,
    a = 'value' in Dr ? Dr.value : Dr.textContent,
    o = a.length;
  for (e = 0; e < n && r[e] === a[e]; e++);
  var i = n - e;
  for (t = 1; t <= i && r[n - t] === a[o - t]; t++);
  return (Hr = a.slice(e, 1 < t ? 1 - t : void 0));
}
function Ur(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
    10 === e && (e = 13),
    32 <= e || 13 === e ? e : 0
  );
}
function Vr() {
  return !0;
}
function qr() {
  return !1;
}
function Qr(e) {
  function t(t, r, n, a, o) {
    for (var i in ((this._reactName = t),
    (this._targetInst = n),
    (this.type = r),
    (this.nativeEvent = a),
    (this.target = o),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
    return (
      (this.isDefaultPrevented = (
        null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
      )
        ? Vr
        : qr),
      (this.isPropagationStopped = qr),
      this
    );
  }
  return (
    U(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Vr));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Vr));
      },
      persist: function () {},
      isPersistent: Vr,
    }),
    t
  );
}
var Yr,
  Xr,
  Gr,
  Kr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zr = Qr(Kr),
  Jr = U({}, Kr, { view: 0, detail: 0 }),
  en = Qr(Jr),
  tn = U({}, Jr, {
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
    getModifierState: pn,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return void 0 === e.relatedTarget
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Gr &&
            (Gr && 'mousemove' === e.type
              ? ((Yr = e.screenX - Gr.screenX), (Xr = e.screenY - Gr.screenY))
              : (Xr = Yr = 0),
            (Gr = e)),
          Yr);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Xr;
    },
  }),
  rn = Qr(tn),
  nn = Qr(U({}, tn, { dataTransfer: 0 })),
  an = Qr(U({}, Jr, { relatedTarget: 0 })),
  on = Qr(U({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  ln = Qr(
    U({}, Kr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
  ),
  sn = Qr(U({}, Kr, { data: 0 })),
  un = {
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
  cn = {
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
  dn = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function fn(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = dn[e]) && !!t[e];
}
function pn() {
  return fn;
}
var hn = Qr(
    U({}, Jr, {
      key: function (e) {
        if (e.key) {
          var t = un[e.key] || e.key;
          if ('Unidentified' !== t) return t;
        }
        return 'keypress' === e.type
          ? 13 === (e = Ur(e))
            ? 'Enter'
            : String.fromCharCode(e)
          : 'keydown' === e.type || 'keyup' === e.type
          ? cn[e.keyCode] || 'Unidentified'
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
      getModifierState: pn,
      charCode: function (e) {
        return 'keypress' === e.type ? Ur(e) : 0;
      },
      keyCode: function (e) {
        return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return 'keypress' === e.type
          ? Ur(e)
          : 'keydown' === e.type || 'keyup' === e.type
          ? e.keyCode
          : 0;
      },
    }),
  ),
  mn = Qr(
    U({}, tn, {
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
  ),
  gn = Qr(
    U({}, Jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn,
    }),
  ),
  bn = Qr(U({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  vn = Qr(
    U({}, tn, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0;
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
  ),
  yn = [9, 13, 27, 32],
  xn = K && 'CompositionEvent' in window,
  kn = null;
K && 'documentMode' in document && (kn = document.documentMode);
var wn = K && 'TextEvent' in window && !kn,
  Sn = K && (!xn || (kn && 8 < kn && 11 >= kn)),
  _n = String.fromCharCode(32),
  En = !1;
function Cn(e, t) {
  switch (e) {
    case 'keyup':
      return -1 !== yn.indexOf(t.keyCode);
    case 'keydown':
      return 229 !== t.keyCode;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function zn(e) {
  return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var On = !1;
var Pn = {
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
function Rn(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return 'input' === t ? !!Pn[e.type] : 'textarea' === t;
}
function An(e, t, r, n) {
  bt(n),
    0 < (t = xa(t, 'onChange')).length &&
      ((r = new Zr('onChange', 'change', null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Tn = null,
  jn = null;
function Fn(e) {
  fa(e, 0);
}
function In(e) {
  if (Ne(Wa(e))) return e;
}
function Bn(e, t) {
  if ('change' === e) return t;
}
var Nn = !1;
if (K) {
  var Ln;
  if (K) {
    var Mn = 'oninput' in document;
    if (!Mn) {
      var Dn = document.createElement('div');
      Dn.setAttribute('oninput', 'return;'),
        (Mn = 'function' == typeof Dn.oninput);
    }
    Ln = Mn;
  } else Ln = !1;
  Nn = Ln && (!document.documentMode || 9 < document.documentMode);
}
function Wn() {
  Tn && (Tn.detachEvent('onpropertychange', Hn), (jn = Tn = null));
}
function Hn(e) {
  if ('value' === e.propertyName && In(jn)) {
    var t = [];
    if ((An(t, jn, e, ft(e)), (e = Fn), St)) e(t);
    else {
      St = !0;
      try {
        yt(e, t);
      } finally {
        (St = !1), Et();
      }
    }
  }
}
function $n(e, t, r) {
  'focusin' === e
    ? (Wn(), (jn = r), (Tn = t).attachEvent('onpropertychange', Hn))
    : 'focusout' === e && Wn();
}
function Un(e) {
  if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
    return In(jn);
}
function Vn(e, t) {
  if ('click' === e) return In(t);
}
function qn(e, t) {
  if ('input' === e || 'change' === e) return In(t);
}
var Qn =
    'function' == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
  Yn = Object.prototype.hasOwnProperty;
function Xn(e, t) {
  if (Qn(e, t)) return !0;
  if ('object' != typeof e || null === e || 'object' != typeof t || null === t)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++)
    if (!Yn.call(t, r[n]) || !Qn(e[r[n]], t[r[n]])) return !1;
  return !0;
}
function Gn(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Kn(e, t) {
  var r,
    n = Gn(e);
  for (e = 0; n; ) {
    if (3 === n.nodeType) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Gn(n);
  }
}
function Zn(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || 3 !== e.nodeType) &&
        (t && 3 === t.nodeType
          ? Zn(e, t.parentNode)
          : 'contains' in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function Jn() {
  for (var e = window, t = Le(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = 'string' == typeof t.contentWindow.location.href;
    } catch (n) {
      r = !1;
    }
    if (!r) break;
    t = Le((e = t.contentWindow).document);
  }
  return t;
}
function ea(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    (('input' === t &&
      ('text' === e.type ||
        'search' === e.type ||
        'tel' === e.type ||
        'url' === e.type ||
        'password' === e.type)) ||
      'textarea' === t ||
      'true' === e.contentEditable)
  );
}
var ta = K && 'documentMode' in document && 11 >= document.documentMode,
  ra = null,
  na = null,
  aa = null,
  oa = !1;
function ia(e, t, r) {
  var n = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
  oa ||
    null == ra ||
    ra !== Le(n) ||
    ('selectionStart' in (n = ra) && ea(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : (n = {
          anchorNode: (n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()).anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        }),
    (aa && Xn(aa, n)) ||
      ((aa = n),
      0 < (n = xa(na, 'onSelect')).length &&
        ((t = new Zr('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = ra))));
}
kr(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' ',
  ),
  0,
),
  kr(
    'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
      ' ',
    ),
    1,
  ),
  kr(xr, 2);
for (
  var la =
      'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' ',
      ),
    sa = 0;
  sa < la.length;
  sa++
)
  yr.set(la[sa], 0);
G('onMouseEnter', ['mouseout', 'mouseover']),
  G('onMouseLeave', ['mouseout', 'mouseover']),
  G('onPointerEnter', ['pointerout', 'pointerover']),
  G('onPointerLeave', ['pointerout', 'pointerover']),
  X(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' ',
    ),
  ),
  X(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' ',
    ),
  ),
  X('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
  X(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' '),
  ),
  X(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
  ),
  X(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
  );
var ua =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  ca = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ua));
function da(e, t, r) {
  var n = e.type || 'unknown-event';
  (e.currentTarget = r),
    (function (e, t, r, n, a, o, i, l, s) {
      if ((It.apply(this, arguments), Rt)) {
        if (!Rt) throw Error(q(198));
        var u = At;
        (Rt = !1), (At = null), Tt || ((Tt = !0), (jt = u));
      }
    })(n, t, void 0, e),
    (e.currentTarget = null);
}
function fa(e, t) {
  t = 0 != (4 & t);
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      a = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = n.length - 1; 0 <= i; i--) {
          var l = n[i],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== o && a.isPropagationStopped())) break e;
          da(a, l, u), (o = s);
        }
      else
        for (i = 0; i < n.length; i++) {
          if (
            ((s = (l = n[i]).instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== o && a.isPropagationStopped())
          )
            break e;
          da(a, l, u), (o = s);
        }
    }
  }
  if (Tt) throw ((e = jt), (Tt = !1), (jt = null), e);
}
function pa(e, t) {
  var r = $a(t),
    n = e + '__bubble';
  r.has(n) || (ba(t, e, 2, !1), r.add(n));
}
var ha = '_reactListening' + Math.random().toString(36).slice(2);
function ma(e) {
  e[ha] ||
    ((e[ha] = !0),
    Q.forEach(function (t) {
      ca.has(t) || ga(t, !1, e, null), ga(t, !0, e, null);
    }));
}
function ga(e, t, r, n) {
  var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
    o = r;
  if (
    ('selectionchange' === e && 9 !== r.nodeType && (o = r.ownerDocument),
    null !== n && !t && ca.has(e))
  ) {
    if ('scroll' !== e) return;
    (a |= 2), (o = n);
  }
  var i = $a(o),
    l = e + '__' + (t ? 'capture' : 'bubble');
  i.has(l) || (t && (a |= 4), ba(o, e, a, t), i.add(l));
}
function ba(e, t, r, n) {
  var a = yr.get(t);
  switch (void 0 === a ? 2 : a) {
    case 0:
      a = Br;
      break;
    case 1:
      a = Nr;
      break;
    default:
      a = Lr;
  }
  (r = a.bind(null, t, r, e)),
    (a = void 0),
    !zt ||
      ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
      (a = !0),
    n
      ? void 0 !== a
        ? e.addEventListener(t, r, { capture: !0, passive: a })
        : e.addEventListener(t, r, !0)
      : void 0 !== a
      ? e.addEventListener(t, r, { passive: a })
      : e.addEventListener(t, r, !1);
}
function va(e, t, r, n, a) {
  var o = n;
  if (0 == (1 & t) && 0 == (2 & t) && null !== n)
    e: for (;;) {
      if (null === n) return;
      var i = n.tag;
      if (3 === i || 4 === i) {
        var l = n.stateNode.containerInfo;
        if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
        if (4 === i)
          for (i = n.return; null !== i; ) {
            var s = i.tag;
            if (
              (3 === s || 4 === s) &&
              ((s = i.stateNode.containerInfo) === a ||
                (8 === s.nodeType && s.parentNode === a))
            )
              return;
            i = i.return;
          }
        for (; null !== l; ) {
          if (null === (i = Ma(l))) return;
          if (5 === (s = i.tag) || 6 === s) {
            n = o = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  !(function (e, t, r) {
    if (_t) return e(t, r);
    _t = !0;
    try {
      wt(e, t, r);
    } finally {
      (_t = !1), Et();
    }
  })(function () {
    var n = o,
      a = ft(r),
      i = [];
    e: {
      var l = vr.get(e);
      if (void 0 !== l) {
        var s = Zr,
          u = e;
        switch (e) {
          case 'keypress':
            if (0 === Ur(r)) break e;
          case 'keydown':
          case 'keyup':
            s = hn;
            break;
          case 'focusin':
            (u = 'focus'), (s = an);
            break;
          case 'focusout':
            (u = 'blur'), (s = an);
            break;
          case 'beforeblur':
          case 'afterblur':
            s = an;
            break;
          case 'click':
            if (2 === r.button) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            s = rn;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            s = nn;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            s = gn;
            break;
          case hr:
          case mr:
          case gr:
            s = on;
            break;
          case br:
            s = bn;
            break;
          case 'scroll':
            s = en;
            break;
          case 'wheel':
            s = vn;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            s = ln;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            s = mn;
        }
        var c = 0 != (4 & t),
          d = !c && 'scroll' === e,
          f = c ? (null !== l ? l + 'Capture' : null) : l;
        c = [];
        for (var p, h = n; null !== h; ) {
          var m = (p = h).stateNode;
          if (
            (5 === p.tag &&
              null !== m &&
              ((p = m),
              null !== f && null != (m = Ct(h, f)) && c.push(ya(h, m, p))),
            d)
          )
            break;
          h = h.return;
        }
        0 < c.length &&
          ((l = new s(l, u, null, r, a)), i.push({ event: l, listeners: c }));
      }
    }
    if (0 == (7 & t)) {
      if (
        ((s = 'mouseout' === e || 'pointerout' === e),
        (!(l = 'mouseover' === e || 'pointerover' === e) ||
          0 != (16 & t) ||
          !(u = r.relatedTarget || r.fromElement) ||
          (!Ma(u) && !u[Na])) &&
          (s || l) &&
          ((l =
            a.window === a
              ? a
              : (l = a.ownerDocument)
              ? l.defaultView || l.parentWindow
              : window),
          s
            ? ((s = n),
              null !==
                (u = (u = r.relatedTarget || r.toElement) ? Ma(u) : null) &&
                (u !== (d = Bt(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                (u = null))
            : ((s = null), (u = n)),
          s !== u))
      ) {
        if (
          ((c = rn),
          (m = 'onMouseLeave'),
          (f = 'onMouseEnter'),
          (h = 'mouse'),
          ('pointerout' !== e && 'pointerover' !== e) ||
            ((c = mn),
            (m = 'onPointerLeave'),
            (f = 'onPointerEnter'),
            (h = 'pointer')),
          (d = null == s ? l : Wa(s)),
          (p = null == u ? l : Wa(u)),
          ((l = new c(m, h + 'leave', s, r, a)).target = d),
          (l.relatedTarget = p),
          (m = null),
          Ma(a) === n &&
            (((c = new c(f, h + 'enter', u, r, a)).target = p),
            (c.relatedTarget = d),
            (m = c)),
          (d = m),
          s && u)
        )
          e: {
            for (f = u, h = 0, p = c = s; p; p = ka(p)) h++;
            for (p = 0, m = f; m; m = ka(m)) p++;
            for (; 0 < h - p; ) (c = ka(c)), h--;
            for (; 0 < p - h; ) (f = ka(f)), p--;
            for (; h--; ) {
              if (c === f || (null !== f && c === f.alternate)) break e;
              (c = ka(c)), (f = ka(f));
            }
            c = null;
          }
        else c = null;
        null !== s && wa(i, l, s, c, !1),
          null !== u && null !== d && wa(i, d, u, c, !0);
      }
      if (
        'select' ===
          (s = (l = n ? Wa(n) : window).nodeName && l.nodeName.toLowerCase()) ||
        ('input' === s && 'file' === l.type)
      )
        var g = Bn;
      else if (Rn(l))
        if (Nn) g = qn;
        else {
          g = Un;
          var b = $n;
        }
      else
        (s = l.nodeName) &&
          'input' === s.toLowerCase() &&
          ('checkbox' === l.type || 'radio' === l.type) &&
          (g = Vn);
      switch (
        (g && (g = g(e, n))
          ? An(i, g, r, a)
          : (b && b(e, l, n),
            'focusout' === e &&
              (b = l._wrapperState) &&
              b.controlled &&
              'number' === l.type &&
              Ue(l, 'number', l.value)),
        (b = n ? Wa(n) : window),
        e)
      ) {
        case 'focusin':
          (Rn(b) || 'true' === b.contentEditable) &&
            ((ra = b), (na = n), (aa = null));
          break;
        case 'focusout':
          aa = na = ra = null;
          break;
        case 'mousedown':
          oa = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (oa = !1), ia(i, r, a);
          break;
        case 'selectionchange':
          if (ta) break;
        case 'keydown':
        case 'keyup':
          ia(i, r, a);
      }
      var v;
      if (xn)
        e: {
          switch (e) {
            case 'compositionstart':
              var y = 'onCompositionStart';
              break e;
            case 'compositionend':
              y = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              y = 'onCompositionUpdate';
              break e;
          }
          y = void 0;
        }
      else
        On
          ? Cn(e, r) && (y = 'onCompositionEnd')
          : 'keydown' === e && 229 === r.keyCode && (y = 'onCompositionStart');
      y &&
        (Sn &&
          'ko' !== r.locale &&
          (On || 'onCompositionStart' !== y
            ? 'onCompositionEnd' === y && On && (v = $r())
            : ((Wr = 'value' in (Dr = a) ? Dr.value : Dr.textContent),
              (On = !0))),
        0 < (b = xa(n, y)).length &&
          ((y = new sn(y, e, null, r, a)),
          i.push({ event: y, listeners: b }),
          v ? (y.data = v) : null !== (v = zn(r)) && (y.data = v))),
        (v = wn
          ? (function (e, t) {
              switch (e) {
                case 'compositionend':
                  return zn(t);
                case 'keypress':
                  return 32 !== t.which ? null : ((En = !0), _n);
                case 'textInput':
                  return (e = t.data) === _n && En ? null : e;
                default:
                  return null;
              }
            })(e, r)
          : (function (e, t) {
              if (On)
                return 'compositionend' === e || (!xn && Cn(e, t))
                  ? ((e = $r()), (Hr = Wr = Dr = null), (On = !1), e)
                  : null;
              switch (e) {
                case 'paste':
                  return null;
                case 'keypress':
                  if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                  ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                  }
                  return null;
                case 'compositionend':
                  return Sn && 'ko' !== t.locale ? null : t.data;
                default:
                  return null;
              }
            })(e, r)) &&
          0 < (n = xa(n, 'onBeforeInput')).length &&
          ((a = new sn('onBeforeInput', 'beforeinput', null, r, a)),
          i.push({ event: a, listeners: n }),
          (a.data = v));
    }
    fa(i, t);
  });
}
function ya(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function xa(e, t) {
  for (var r = t + 'Capture', n = []; null !== e; ) {
    var a = e,
      o = a.stateNode;
    5 === a.tag &&
      null !== o &&
      ((a = o),
      null != (o = Ct(e, r)) && n.unshift(ya(e, o, a)),
      null != (o = Ct(e, t)) && n.push(ya(e, o, a))),
      (e = e.return);
  }
  return n;
}
function ka(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag);
  return e || null;
}
function wa(e, t, r, n, a) {
  for (var o = t._reactName, i = []; null !== r && r !== n; ) {
    var l = r,
      s = l.alternate,
      u = l.stateNode;
    if (null !== s && s === n) break;
    5 === l.tag &&
      null !== u &&
      ((l = u),
      a
        ? null != (s = Ct(r, o)) && i.unshift(ya(r, s, l))
        : a || (null != (s = Ct(r, o)) && i.push(ya(r, s, l)))),
      (r = r.return);
  }
  0 !== i.length && e.push({ event: t, listeners: i });
}
function Sa() {}
var _a = null,
  Ea = null;
function Ca(e, t) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!t.autoFocus;
  }
  return !1;
}
function za(e, t) {
  return (
    'textarea' === e ||
    'option' === e ||
    'noscript' === e ||
    'string' == typeof t.children ||
    'number' == typeof t.children ||
    ('object' == typeof t.dangerouslySetInnerHTML &&
      null !== t.dangerouslySetInnerHTML &&
      null != t.dangerouslySetInnerHTML.__html)
  );
}
var Oa = 'function' == typeof setTimeout ? setTimeout : void 0,
  Pa = 'function' == typeof clearTimeout ? clearTimeout : void 0;
function Ra(e) {
  1 === e.nodeType
    ? (e.textContent = '')
    : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '');
}
function Aa(e) {
  for (; null != e; e = e.nextSibling) {
    var t = e.nodeType;
    if (1 === t || 3 === t) break;
  }
  return e;
}
function Ta(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (8 === e.nodeType) {
      var r = e.data;
      if ('$' === r || '$!' === r || '$?' === r) {
        if (0 === t) return e;
        t--;
      } else '/$' === r && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ja = 0;
var Fa = Math.random().toString(36).slice(2),
  Ia = '__reactFiber$' + Fa,
  Ba = '__reactProps$' + Fa,
  Na = '__reactContainer$' + Fa,
  La = '__reactEvents$' + Fa;
function Ma(e) {
  var t = e[Ia];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Na] || r[Ia])) {
      if (
        ((r = t.alternate),
        null !== t.child || (null !== r && null !== r.child))
      )
        for (e = Ta(e); null !== e; ) {
          if ((r = e[Ia])) return r;
          e = Ta(e);
        }
      return t;
    }
    r = (e = r).parentNode;
  }
  return null;
}
function Da(e) {
  return !(e = e[Ia] || e[Na]) ||
    (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e;
}
function Wa(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(q(33));
}
function Ha(e) {
  return e[Ba] || null;
}
function $a(e) {
  var t = e[La];
  return void 0 === t && (t = e[La] = new Set()), t;
}
var Ua = [],
  Va = -1;
function qa(e) {
  return { current: e };
}
function Qa(e) {
  0 > Va || ((e.current = Ua[Va]), (Ua[Va] = null), Va--);
}
function Ya(e, t) {
  Va++, (Ua[Va] = e.current), (e.current = t);
}
var Xa = {},
  Ga = qa(Xa),
  Ka = qa(!1),
  Za = Xa;
function Ja(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Xa;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var a,
    o = {};
  for (a in r) o[a] = t[a];
  return (
    n &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function eo(e) {
  return null != (e = e.childContextTypes);
}
function to() {
  Qa(Ka), Qa(Ga);
}
function ro(e, t, r) {
  if (Ga.current !== Xa) throw Error(q(168));
  Ya(Ga, t), Ya(Ka, r);
}
function no(e, t, r) {
  var n = e.stateNode;
  if (((e = t.childContextTypes), 'function' != typeof n.getChildContext))
    return r;
  for (var a in (n = n.getChildContext()))
    if (!(a in e)) throw Error(q(108, je(t) || 'Unknown', a));
  return U({}, r, n);
}
function ao(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xa),
    (Za = Ga.current),
    Ya(Ga, e),
    Ya(Ka, Ka.current),
    !0
  );
}
function oo(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(q(169));
  r
    ? ((e = no(e, t, Za)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Qa(Ka),
      Qa(Ga),
      Ya(Ga, e))
    : Qa(Ka),
    Ya(Ka, r);
}
var io = null,
  lo = null,
  so = V.unstable_runWithPriority,
  uo = V.unstable_scheduleCallback,
  co = V.unstable_cancelCallback,
  fo = V.unstable_shouldYield,
  po = V.unstable_requestPaint,
  ho = V.unstable_now,
  mo = V.unstable_getCurrentPriorityLevel,
  go = V.unstable_ImmediatePriority,
  bo = V.unstable_UserBlockingPriority,
  vo = V.unstable_NormalPriority,
  yo = V.unstable_LowPriority,
  xo = V.unstable_IdlePriority,
  ko = {},
  wo = void 0 !== po ? po : function () {},
  So = null,
  _o = null,
  Eo = !1,
  Co = ho(),
  zo =
    1e4 > Co
      ? ho
      : function () {
          return ho() - Co;
        };
function Oo() {
  switch (mo()) {
    case go:
      return 99;
    case bo:
      return 98;
    case vo:
      return 97;
    case yo:
      return 96;
    case xo:
      return 95;
    default:
      throw Error(q(332));
  }
}
function Po(e) {
  switch (e) {
    case 99:
      return go;
    case 98:
      return bo;
    case 97:
      return vo;
    case 96:
      return yo;
    case 95:
      return xo;
    default:
      throw Error(q(332));
  }
}
function Ro(e, t) {
  return (e = Po(e)), so(e, t);
}
function Ao(e, t, r) {
  return (e = Po(e)), uo(e, t, r);
}
function To() {
  if (null !== _o) {
    var e = _o;
    (_o = null), co(e);
  }
  jo();
}
function jo() {
  if (!Eo && null !== So) {
    Eo = !0;
    var e = 0;
    try {
      var t = So;
      Ro(99, function () {
        for (; e < t.length; e++) {
          var r = t[e];
          do {
            r = r(!0);
          } while (null !== r);
        }
      }),
        (So = null);
    } catch (r) {
      throw (null !== So && (So = So.slice(e + 1)), uo(go, To), r);
    } finally {
      Eo = !1;
    }
  }
}
var Fo = le.ReactCurrentBatchConfig;
function Io(e, t) {
  if (e && e.defaultProps) {
    for (var r in ((t = U({}, t)), (e = e.defaultProps)))
      void 0 === t[r] && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Bo = qa(null),
  No = null,
  Lo = null,
  Mo = null;
function Do() {
  Mo = Lo = No = null;
}
function Wo(e) {
  var t = Bo.current;
  Qa(Bo), (e.type._context._currentValue = t);
}
function Ho(e, t) {
  for (; null !== e; ) {
    var r = e.alternate;
    if ((e.childLanes & t) === t) {
      if (null === r || (r.childLanes & t) === t) break;
      r.childLanes |= t;
    } else (e.childLanes |= t), null !== r && (r.childLanes |= t);
    e = e.return;
  }
}
function $o(e, t) {
  (No = e),
    (Mo = Lo = null),
    null !== (e = e.dependencies) &&
      null !== e.firstContext &&
      (0 != (e.lanes & t) && (xl = !0), (e.firstContext = null));
}
function Uo(e, t) {
  if (Mo !== e && !1 !== t && 0 !== t)
    if (
      (('number' == typeof t && 1073741823 !== t) ||
        ((Mo = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      null === Lo)
    ) {
      if (null === No) throw Error(q(308));
      (Lo = t),
        (No.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else Lo = Lo.next = t;
  return e._currentValue;
}
var Vo = !1;
function qo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function Qo(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Yo(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xo(e, t) {
  if (null !== (e = e.updateQueue)) {
    var r = (e = e.shared).pending;
    null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
}
function Go(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (null !== n && r === (n = n.updateQueue)) {
    var a = null,
      o = null;
    if (null !== (r = r.firstBaseUpdate)) {
      do {
        var i = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        null === o ? (a = o = i) : (o = o.next = i), (r = r.next);
      } while (null !== r);
      null === o ? (a = o = t) : (o = o.next = t);
    } else a = o = t;
    return (
      (r = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: o,
        shared: n.shared,
        effects: n.effects,
      }),
      void (e.updateQueue = r)
    );
  }
  null === (e = r.lastBaseUpdate) ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Ko(e, t, r, n) {
  var a = e.updateQueue;
  Vo = !1;
  var o = a.firstBaseUpdate,
    i = a.lastBaseUpdate,
    l = a.shared.pending;
  if (null !== l) {
    a.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), null === i ? (o = u) : (i.next = u), (i = s);
    var c = e.alternate;
    if (null !== c) {
      var d = (c = c.updateQueue).lastBaseUpdate;
      d !== i &&
        (null === d ? (c.firstBaseUpdate = u) : (d.next = u),
        (c.lastBaseUpdate = s));
    }
  }
  if (null !== o) {
    for (d = a.baseState, i = 0, c = u = s = null; ; ) {
      l = o.lane;
      var f = o.eventTime;
      if ((n & l) === l) {
        null !== c &&
          (c = c.next =
            {
              eventTime: f,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var p = e,
            h = o;
          switch (((l = t), (f = r), h.tag)) {
            case 1:
              if ('function' == typeof (p = h.payload)) {
                d = p.call(f, d, l);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (-4097 & p.flags) | 64;
            case 0:
              if (
                null ==
                (l = 'function' == typeof (p = h.payload) ? p.call(f, d, l) : p)
              )
                break e;
              d = U({}, d, l);
              break e;
            case 2:
              Vo = !0;
          }
        }
        null !== o.callback &&
          ((e.flags |= 32),
          null === (l = a.effects) ? (a.effects = [o]) : l.push(o));
      } else
        (f = {
          eventTime: f,
          lane: l,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          null === c ? ((u = c = f), (s = d)) : (c = c.next = f),
          (i |= l);
      if (null === (o = o.next)) {
        if (null === (l = a.shared.pending)) break;
        (o = l.next),
          (l.next = null),
          (a.lastBaseUpdate = l),
          (a.shared.pending = null);
      }
    }
    null === c && (s = d),
      (a.baseState = s),
      (a.firstBaseUpdate = u),
      (a.lastBaseUpdate = c),
      (_s |= i),
      (e.lanes = i),
      (e.memoizedState = d);
  }
}
function Zo(e, t, r) {
  if (((e = t.effects), (t.effects = null), null !== e))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        a = n.callback;
      if (null !== a) {
        if (((n.callback = null), (n = r), 'function' != typeof a))
          throw Error(q(191, a));
        a.call(n);
      }
    }
}
var Jo = new $.Component().refs;
function ei(e, t, r, n) {
  (r = null == (r = r(n, (t = e.memoizedState))) ? t : U({}, t, r)),
    (e.memoizedState = r),
    0 === e.lanes && (e.updateQueue.baseState = r);
}
var ti = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Bt(e) === e;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Xs(),
      a = Gs(e),
      o = Yo(n, a);
    (o.payload = t), null != r && (o.callback = r), Xo(e, o), Ks(e, a, n);
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Xs(),
      a = Gs(e),
      o = Yo(n, a);
    (o.tag = 1),
      (o.payload = t),
      null != r && (o.callback = r),
      Xo(e, o),
      Ks(e, a, n);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Xs(),
      n = Gs(e),
      a = Yo(r, n);
    (a.tag = 2), null != t && (a.callback = t), Xo(e, a), Ks(e, n, r);
  },
};
function ri(e, t, r, n, a, o, i) {
  return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(n, o, i)
    : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !Xn(r, n) ||
        !Xn(a, o);
}
function ni(e, t, r) {
  var n = !1,
    a = Xa,
    o = t.contextType;
  return (
    'object' == typeof o && null !== o
      ? (o = Uo(o))
      : ((a = eo(t) ? Za : Ga.current),
        (o = (n = null != (n = t.contextTypes)) ? Ja(e, a) : Xa)),
    (t = new t(r, o)),
    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
    (t.updater = ti),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ai(e, t, r, n) {
  (e = t.state),
    'function' == typeof t.componentWillReceiveProps &&
      t.componentWillReceiveProps(r, n),
    'function' == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && ti.enqueueReplaceState(t, t.state, null);
}
function oi(e, t, r, n) {
  var a = e.stateNode;
  (a.props = r), (a.state = e.memoizedState), (a.refs = Jo), qo(e);
  var o = t.contextType;
  'object' == typeof o && null !== o
    ? (a.context = Uo(o))
    : ((o = eo(t) ? Za : Ga.current), (a.context = Ja(e, o))),
    Ko(e, r, a, n),
    (a.state = e.memoizedState),
    'function' == typeof (o = t.getDerivedStateFromProps) &&
      (ei(e, t, o, r), (a.state = e.memoizedState)),
    'function' == typeof t.getDerivedStateFromProps ||
      'function' == typeof a.getSnapshotBeforeUpdate ||
      ('function' != typeof a.UNSAFE_componentWillMount &&
        'function' != typeof a.componentWillMount) ||
      ((t = a.state),
      'function' == typeof a.componentWillMount && a.componentWillMount(),
      'function' == typeof a.UNSAFE_componentWillMount &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && ti.enqueueReplaceState(a, a.state, null),
      Ko(e, r, a, n),
      (a.state = e.memoizedState)),
    'function' == typeof a.componentDidMount && (e.flags |= 4);
}
var ii = Array.isArray;
function li(e, t, r) {
  if (null !== (e = r.ref) && 'function' != typeof e && 'object' != typeof e) {
    if (r._owner) {
      if ((r = r._owner)) {
        if (1 !== r.tag) throw Error(q(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(q(147, e));
      var a = '' + e;
      return null !== t &&
        null !== t.ref &&
        'function' == typeof t.ref &&
        t.ref._stringRef === a
        ? t.ref
        : (((t = function (e) {
            var t = n.refs;
            t === Jo && (t = n.refs = {}),
              null === e ? delete t[a] : (t[a] = e);
          })._stringRef = a),
          t);
    }
    if ('string' != typeof e) throw Error(q(284));
    if (!r._owner) throw Error(q(290, e));
  }
  return e;
}
function si(e, t) {
  if ('textarea' !== e.type)
    throw Error(
      q(
        31,
        '[object Object]' === Object.prototype.toString.call(t)
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : t,
      ),
    );
}
function ui(e) {
  function t(t, r) {
    if (e) {
      var n = t.lastEffect;
      null !== n
        ? ((n.nextEffect = r), (t.lastEffect = r))
        : (t.firstEffect = t.lastEffect = r),
        (r.nextEffect = null),
        (r.flags = 8);
    }
  }
  function r(r, n) {
    if (!e) return null;
    for (; null !== n; ) t(r, n), (n = n.sibling);
    return null;
  }
  function n(e, t) {
    for (e = new Map(); null !== t; )
      null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
    return e;
  }
  function a(e, t) {
    return ((e = Pu(e, t)).index = 0), (e.sibling = null), e;
  }
  function o(t, r, n) {
    return (
      (t.index = n),
      e
        ? null !== (n = t.alternate)
          ? (n = n.index) < r
            ? ((t.flags = 2), r)
            : n
          : ((t.flags = 2), r)
        : r
    );
  }
  function i(t) {
    return e && null === t.alternate && (t.flags = 2), t;
  }
  function l(e, t, r, n) {
    return null === t || 6 !== t.tag
      ? (((t = ju(r, e.mode, n)).return = e), t)
      : (((t = a(t, r)).return = e), t);
  }
  function s(e, t, r, n) {
    return null !== t && t.elementType === r.type
      ? (((n = a(t, r.props)).ref = li(e, t, r)), (n.return = e), n)
      : (((n = Ru(r.type, r.key, r.props, null, e.mode, n)).ref = li(e, t, r)),
        (n.return = e),
        n);
  }
  function u(e, t, r, n) {
    return null === t ||
      4 !== t.tag ||
      t.stateNode.containerInfo !== r.containerInfo ||
      t.stateNode.implementation !== r.implementation
      ? (((t = Fu(r, e.mode, n)).return = e), t)
      : (((t = a(t, r.children || [])).return = e), t);
  }
  function c(e, t, r, n, o) {
    return null === t || 7 !== t.tag
      ? (((t = Au(r, e.mode, n, o)).return = e), t)
      : (((t = a(t, r)).return = e), t);
  }
  function d(e, t, r) {
    if ('string' == typeof t || 'number' == typeof t)
      return ((t = ju('' + t, e.mode, r)).return = e), t;
    if ('object' == typeof t && null !== t) {
      switch (t.$$typeof) {
        case se:
          return (
            ((r = Ru(t.type, t.key, t.props, null, e.mode, r)).ref = li(
              e,
              null,
              t,
            )),
            (r.return = e),
            r
          );
        case ue:
          return ((t = Fu(t, e.mode, r)).return = e), t;
      }
      if (ii(t) || Oe(t)) return ((t = Au(t, e.mode, r, null)).return = e), t;
      si(e, t);
    }
    return null;
  }
  function f(e, t, r, n) {
    var a = null !== t ? t.key : null;
    if ('string' == typeof r || 'number' == typeof r)
      return null !== a ? null : l(e, t, '' + r, n);
    if ('object' == typeof r && null !== r) {
      switch (r.$$typeof) {
        case se:
          return r.key === a
            ? r.type === ce
              ? c(e, t, r.props.children, n, a)
              : s(e, t, r, n)
            : null;
        case ue:
          return r.key === a ? u(e, t, r, n) : null;
      }
      if (ii(r) || Oe(r)) return null !== a ? null : c(e, t, r, n, null);
      si(e, r);
    }
    return null;
  }
  function p(e, t, r, n, a) {
    if ('string' == typeof n || 'number' == typeof n)
      return l(t, (e = e.get(r) || null), '' + n, a);
    if ('object' == typeof n && null !== n) {
      switch (n.$$typeof) {
        case se:
          return (
            (e = e.get(null === n.key ? r : n.key) || null),
            n.type === ce ? c(t, e, n.props.children, a, n.key) : s(t, e, n, a)
          );
        case ue:
          return u(t, (e = e.get(null === n.key ? r : n.key) || null), n, a);
      }
      if (ii(n) || Oe(n)) return c(t, (e = e.get(r) || null), n, a, null);
      si(t, n);
    }
    return null;
  }
  return function (l, s, u, c) {
    var h =
      'object' == typeof u && null !== u && u.type === ce && null === u.key;
    h && (u = u.props.children);
    var m = 'object' == typeof u && null !== u;
    if (m)
      switch (u.$$typeof) {
        case se:
          e: {
            for (m = u.key, h = s; null !== h; ) {
              if (h.key === m) {
                switch (h.tag) {
                  case 7:
                    if (u.type === ce) {
                      r(l, h.sibling),
                        ((s = a(h, u.props.children)).return = l),
                        (l = s);
                      break e;
                    }
                    break;
                  default:
                    if (h.elementType === u.type) {
                      r(l, h.sibling),
                        ((s = a(h, u.props)).ref = li(l, h, u)),
                        (s.return = l),
                        (l = s);
                      break e;
                    }
                }
                r(l, h);
                break;
              }
              t(l, h), (h = h.sibling);
            }
            u.type === ce
              ? (((s = Au(u.props.children, l.mode, c, u.key)).return = l),
                (l = s))
              : (((c = Ru(u.type, u.key, u.props, null, l.mode, c)).ref = li(
                  l,
                  s,
                  u,
                )),
                (c.return = l),
                (l = c));
          }
          return i(l);
        case ue:
          e: {
            for (h = u.key; null !== s; ) {
              if (s.key === h) {
                if (
                  4 === s.tag &&
                  s.stateNode.containerInfo === u.containerInfo &&
                  s.stateNode.implementation === u.implementation
                ) {
                  r(l, s.sibling),
                    ((s = a(s, u.children || [])).return = l),
                    (l = s);
                  break e;
                }
                r(l, s);
                break;
              }
              t(l, s), (s = s.sibling);
            }
            ((s = Fu(u, l.mode, c)).return = l), (l = s);
          }
          return i(l);
      }
    if ('string' == typeof u || 'number' == typeof u)
      return (
        (u = '' + u),
        null !== s && 6 === s.tag
          ? (r(l, s.sibling), ((s = a(s, u)).return = l), (l = s))
          : (r(l, s), ((s = ju(u, l.mode, c)).return = l), (l = s)),
        i(l)
      );
    if (ii(u))
      return (function (a, i, l, s) {
        for (
          var u = null, c = null, h = i, m = (i = 0), g = null;
          null !== h && m < l.length;
          m++
        ) {
          h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
          var b = f(a, h, l[m], s);
          if (null === b) {
            null === h && (h = g);
            break;
          }
          e && h && null === b.alternate && t(a, h),
            (i = o(b, i, m)),
            null === c ? (u = b) : (c.sibling = b),
            (c = b),
            (h = g);
        }
        if (m === l.length) return r(a, h), u;
        if (null === h) {
          for (; m < l.length; m++)
            null !== (h = d(a, l[m], s)) &&
              ((i = o(h, i, m)),
              null === c ? (u = h) : (c.sibling = h),
              (c = h));
          return u;
        }
        for (h = n(a, h); m < l.length; m++)
          null !== (g = p(h, a, m, l[m], s)) &&
            (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
            (i = o(g, i, m)),
            null === c ? (u = g) : (c.sibling = g),
            (c = g));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          u
        );
      })(l, s, u, c);
    if (Oe(u))
      return (function (a, i, l, s) {
        var u = Oe(l);
        if ('function' != typeof u) throw Error(q(150));
        if (null == (l = u.call(l))) throw Error(q(151));
        for (
          var c = (u = null), h = i, m = (i = 0), g = null, b = l.next();
          null !== h && !b.done;
          m++, b = l.next()
        ) {
          h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
          var v = f(a, h, b.value, s);
          if (null === v) {
            null === h && (h = g);
            break;
          }
          e && h && null === v.alternate && t(a, h),
            (i = o(v, i, m)),
            null === c ? (u = v) : (c.sibling = v),
            (c = v),
            (h = g);
        }
        if (b.done) return r(a, h), u;
        if (null === h) {
          for (; !b.done; m++, b = l.next())
            null !== (b = d(a, b.value, s)) &&
              ((i = o(b, i, m)),
              null === c ? (u = b) : (c.sibling = b),
              (c = b));
          return u;
        }
        for (h = n(a, h); !b.done; m++, b = l.next())
          null !== (b = p(h, a, m, b.value, s)) &&
            (e && null !== b.alternate && h.delete(null === b.key ? m : b.key),
            (i = o(b, i, m)),
            null === c ? (u = b) : (c.sibling = b),
            (c = b));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          u
        );
      })(l, s, u, c);
    if ((m && si(l, u), void 0 === u && !h))
      switch (l.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(q(152, je(l.type) || 'Component'));
      }
    return r(l, s);
  };
}
var ci = ui(!0),
  di = ui(!1),
  fi = {},
  pi = qa(fi),
  hi = qa(fi),
  mi = qa(fi);
function gi(e) {
  if (e === fi) throw Error(q(174));
  return e;
}
function bi(e, t) {
  switch ((Ya(mi, t), Ya(hi, e), Ya(pi, fi), (e = t.nodeType))) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : et(null, '');
      break;
    default:
      t = et(
        (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
        (e = e.tagName),
      );
  }
  Qa(pi), Ya(pi, t);
}
function vi() {
  Qa(pi), Qa(hi), Qa(mi);
}
function yi(e) {
  gi(mi.current);
  var t = gi(pi.current),
    r = et(t, e.type);
  t !== r && (Ya(hi, e), Ya(pi, r));
}
function xi(e) {
  hi.current === e && (Qa(pi), Qa(hi));
}
var ki = qa(0);
function wi(e) {
  for (var t = e; null !== t; ) {
    if (13 === t.tag) {
      var r = t.memoizedState;
      if (
        null !== r &&
        (null === (r = r.dehydrated) || '$?' === r.data || '$!' === r.data)
      )
        return t;
    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
      if (0 != (64 & t.flags)) return t;
    } else if (null !== t.child) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; null === t.sibling; ) {
      if (null === t.return || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Si = null,
  _i = null,
  Ei = !1;
function Ci(e, t) {
  var r = zu(5, null, null, 0);
  (r.elementType = 'DELETED'),
    (r.type = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (r.flags = 8),
    null !== e.lastEffect
      ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r))
      : (e.firstEffect = e.lastEffect = r);
}
function zi(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        null !==
          (t =
            1 !== t.nodeType || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t) && ((e.stateNode = t), !0)
      );
    case 6:
      return (
        null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
        ((e.stateNode = t), !0)
      );
    case 13:
    default:
      return !1;
  }
}
function Oi(e) {
  if (Ei) {
    var t = _i;
    if (t) {
      var r = t;
      if (!zi(e, t)) {
        if (!(t = Aa(r.nextSibling)) || !zi(e, t))
          return (e.flags = (-1025 & e.flags) | 2), (Ei = !1), void (Si = e);
        Ci(Si, r);
      }
      (Si = e), (_i = Aa(t.firstChild));
    } else (e.flags = (-1025 & e.flags) | 2), (Ei = !1), (Si = e);
  }
}
function Pi(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
    e = e.return;
  Si = e;
}
function Ri(e) {
  if (e !== Si) return !1;
  if (!Ei) return Pi(e), (Ei = !0), !1;
  var t = e.type;
  if (5 !== e.tag || ('head' !== t && 'body' !== t && !za(t, e.memoizedProps)))
    for (t = _i; t; ) Ci(e, t), (t = Aa(t.nextSibling));
  if ((Pi(e), 13 === e.tag)) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error(q(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (8 === e.nodeType) {
          var r = e.data;
          if ('/$' === r) {
            if (0 === t) {
              _i = Aa(e.nextSibling);
              break e;
            }
            t--;
          } else ('$' !== r && '$!' !== r && '$?' !== r) || t++;
        }
        e = e.nextSibling;
      }
      _i = null;
    }
  } else _i = Si ? Aa(e.stateNode.nextSibling) : null;
  return !0;
}
function Ai() {
  (_i = Si = null), (Ei = !1);
}
var Ti = [];
function ji() {
  for (var e = 0; e < Ti.length; e++)
    Ti[e]._workInProgressVersionPrimary = null;
  Ti.length = 0;
}
var Fi = le.ReactCurrentDispatcher,
  Ii = le.ReactCurrentBatchConfig,
  Bi = 0,
  Ni = null,
  Li = null,
  Mi = null,
  Di = !1,
  Wi = !1;
function Hi() {
  throw Error(q(321));
}
function $i(e, t) {
  if (null === t) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Qn(e[r], t[r])) return !1;
  return !0;
}
function Ui(e, t, r, n, a, o) {
  if (
    ((Bi = o),
    (Ni = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fi.current = null === e || null === e.memoizedState ? gl : bl),
    (e = r(n, a)),
    Wi)
  ) {
    o = 0;
    do {
      if (((Wi = !1), !(25 > o))) throw Error(q(301));
      (o += 1),
        (Mi = Li = null),
        (t.updateQueue = null),
        (Fi.current = vl),
        (e = r(n, a));
    } while (Wi);
  }
  if (
    ((Fi.current = ml),
    (t = null !== Li && null !== Li.next),
    (Bi = 0),
    (Mi = Li = Ni = null),
    (Di = !1),
    t)
  )
    throw Error(q(300));
  return e;
}
function Vi() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return null === Mi ? (Ni.memoizedState = Mi = e) : (Mi = Mi.next = e), Mi;
}
function qi() {
  if (null === Li) {
    var e = Ni.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = Li.next;
  var t = null === Mi ? Ni.memoizedState : Mi.next;
  if (null !== t) (Mi = t), (Li = e);
  else {
    if (null === e) throw Error(q(310));
    (e = {
      memoizedState: (Li = e).memoizedState,
      baseState: Li.baseState,
      baseQueue: Li.baseQueue,
      queue: Li.queue,
      next: null,
    }),
      null === Mi ? (Ni.memoizedState = Mi = e) : (Mi = Mi.next = e);
  }
  return Mi;
}
function Qi(e, t) {
  return 'function' == typeof t ? t(e) : t;
}
function Yi(e) {
  var t = qi(),
    r = t.queue;
  if (null === r) throw Error(q(311));
  r.lastRenderedReducer = e;
  var n = Li,
    a = n.baseQueue,
    o = r.pending;
  if (null !== o) {
    if (null !== a) {
      var i = a.next;
      (a.next = o.next), (o.next = i);
    }
    (n.baseQueue = a = o), (r.pending = null);
  }
  if (null !== a) {
    (a = a.next), (n = n.baseState);
    var l = (i = o = null),
      s = a;
    do {
      var u = s.lane;
      if ((Bi & u) === u)
        null !== l &&
          (l = l.next =
            {
              lane: 0,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null,
            }),
          (n = s.eagerReducer === e ? s.eagerState : e(n, s.action));
      else {
        var c = {
          lane: u,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null,
        };
        null === l ? ((i = l = c), (o = n)) : (l = l.next = c),
          (Ni.lanes |= u),
          (_s |= u);
      }
      s = s.next;
    } while (null !== s && s !== a);
    null === l ? (o = n) : (l.next = i),
      Qn(n, t.memoizedState) || (xl = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  return [t.memoizedState, r.dispatch];
}
function Xi(e) {
  var t = qi(),
    r = t.queue;
  if (null === r) throw Error(q(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    a = r.pending,
    o = t.memoizedState;
  if (null !== a) {
    r.pending = null;
    var i = (a = a.next);
    do {
      (o = e(o, i.action)), (i = i.next);
    } while (i !== a);
    Qn(o, t.memoizedState) || (xl = !0),
      (t.memoizedState = o),
      null === t.baseQueue && (t.baseState = o),
      (r.lastRenderedState = o);
  }
  return [o, n];
}
function Gi(e, t, r) {
  var n = t._getVersion;
  n = n(t._source);
  var a = t._workInProgressVersionPrimary;
  if (
    (null !== a
      ? (e = a === n)
      : ((e = e.mutableReadLanes),
        (e = (Bi & e) === e) &&
          ((t._workInProgressVersionPrimary = n), Ti.push(t))),
    e)
  )
    return r(t._source);
  throw (Ti.push(t), Error(q(350)));
}
function Ki(e, t, r, n) {
  var a = gs;
  if (null === a) throw Error(q(349));
  var o = t._getVersion,
    i = o(t._source),
    l = Fi.current,
    s = l.useState(function () {
      return Gi(a, t, r);
    }),
    u = s[1],
    c = s[0];
  s = Mi;
  var d = e.memoizedState,
    f = d.refs,
    p = f.getSnapshot,
    h = d.source;
  d = d.subscribe;
  var m = Ni;
  return (
    (e.memoizedState = { refs: f, source: t, subscribe: n }),
    l.useEffect(
      function () {
        (f.getSnapshot = r), (f.setSnapshot = u);
        var e = o(t._source);
        if (!Qn(i, e)) {
          (e = r(t._source)),
            Qn(c, e) ||
              (u(e), (e = Gs(m)), (a.mutableReadLanes |= e & a.pendingLanes)),
            (e = a.mutableReadLanes),
            (a.entangledLanes |= e);
          for (var n = a.entanglements, l = e; 0 < l; ) {
            var s = 31 - Rr(l),
              d = 1 << s;
            (n[s] |= e), (l &= ~d);
          }
        }
      },
      [r, t, n],
    ),
    l.useEffect(
      function () {
        return n(t._source, function () {
          var e = f.getSnapshot,
            r = f.setSnapshot;
          try {
            r(e(t._source));
            var n = Gs(m);
            a.mutableReadLanes |= n & a.pendingLanes;
          } catch (o) {
            r(function () {
              throw o;
            });
          }
        });
      },
      [t, n],
    ),
    (Qn(p, r) && Qn(h, t) && Qn(d, n)) ||
      (((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Qi,
        lastRenderedState: c,
      }).dispatch = u =
        hl.bind(null, Ni, e)),
      (s.queue = e),
      (s.baseQueue = null),
      (c = Gi(a, t, r)),
      (s.memoizedState = s.baseState = c)),
    c
  );
}
function Zi(e, t, r) {
  return Ki(qi(), e, t, r);
}
function Ji(e) {
  var t = Vi();
  return (
    'function' == typeof e && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Qi,
        lastRenderedState: e,
      }).dispatch =
      hl.bind(null, Ni, e)),
    [t.memoizedState, e]
  );
}
function el(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    null === (t = Ni.updateQueue)
      ? ((t = { lastEffect: null }),
        (Ni.updateQueue = t),
        (t.lastEffect = e.next = e))
      : null === (r = t.lastEffect)
      ? (t.lastEffect = e.next = e)
      : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e)),
    e
  );
}
function tl(e) {
  return (e = { current: e }), (Vi().memoizedState = e);
}
function rl() {
  return qi().memoizedState;
}
function nl(e, t, r, n) {
  var a = Vi();
  (Ni.flags |= e),
    (a.memoizedState = el(1 | t, r, void 0, void 0 === n ? null : n));
}
function al(e, t, r, n) {
  var a = qi();
  n = void 0 === n ? null : n;
  var o = void 0;
  if (null !== Li) {
    var i = Li.memoizedState;
    if (((o = i.destroy), null !== n && $i(n, i.deps)))
      return void el(t, r, o, n);
  }
  (Ni.flags |= e), (a.memoizedState = el(1 | t, r, o, n));
}
function ol(e, t) {
  return nl(516, 4, e, t);
}
function il(e, t) {
  return al(516, 4, e, t);
}
function ll(e, t) {
  return al(4, 2, e, t);
}
function sl(e, t) {
  return 'function' == typeof t
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : null != t
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function ul(e, t, r) {
  return (
    (r = null != r ? r.concat([e]) : null), al(4, 2, sl.bind(null, t, e), r)
  );
}
function cl() {}
function dl(e, t) {
  var r = qi();
  t = void 0 === t ? null : t;
  var n = r.memoizedState;
  return null !== n && null !== t && $i(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function fl(e, t) {
  var r = qi();
  t = void 0 === t ? null : t;
  var n = r.memoizedState;
  return null !== n && null !== t && $i(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function pl(e, t) {
  var r = Oo();
  Ro(98 > r ? 98 : r, function () {
    e(!0);
  }),
    Ro(97 < r ? 97 : r, function () {
      var r = Ii.transition;
      Ii.transition = 1;
      try {
        e(!1), t();
      } finally {
        Ii.transition = r;
      }
    });
}
function hl(e, t, r) {
  var n = Xs(),
    a = Gs(e),
    o = {
      lane: a,
      action: r,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    i = t.pending;
  if (
    (null === i ? (o.next = o) : ((o.next = i.next), (i.next = o)),
    (t.pending = o),
    (i = e.alternate),
    e === Ni || (null !== i && i === Ni))
  )
    Wi = Di = !0;
  else {
    if (
      0 === e.lanes &&
      (null === i || 0 === i.lanes) &&
      null !== (i = t.lastRenderedReducer)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, r);
        if (((o.eagerReducer = i), (o.eagerState = s), Qn(s, l))) return;
      } catch (u) {}
    Ks(e, a, n);
  }
}
var ml = {
    readContext: Uo,
    useCallback: Hi,
    useContext: Hi,
    useEffect: Hi,
    useImperativeHandle: Hi,
    useLayoutEffect: Hi,
    useMemo: Hi,
    useReducer: Hi,
    useRef: Hi,
    useState: Hi,
    useDebugValue: Hi,
    useDeferredValue: Hi,
    useTransition: Hi,
    useMutableSource: Hi,
    useOpaqueIdentifier: Hi,
    unstable_isNewReconciler: !1,
  },
  gl = {
    readContext: Uo,
    useCallback: function (e, t) {
      return (Vi().memoizedState = [e, void 0 === t ? null : t]), e;
    },
    useContext: Uo,
    useEffect: ol,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = null != r ? r.concat([e]) : null), nl(4, 2, sl.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Vi();
      return (
        (t = void 0 === t ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Vi();
      return (
        (t = void 0 !== r ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = (e = n.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }).dispatch =
          hl.bind(null, Ni, e)),
        [n.memoizedState, e]
      );
    },
    useRef: tl,
    useState: Ji,
    useDebugValue: cl,
    useDeferredValue: function (e) {
      var t = Ji(e),
        r = t[0],
        n = t[1];
      return (
        ol(
          function () {
            var t = Ii.transition;
            Ii.transition = 1;
            try {
              n(e);
            } finally {
              Ii.transition = t;
            }
          },
          [e],
        ),
        r
      );
    },
    useTransition: function () {
      var e = Ji(!1),
        t = e[0];
      return tl((e = pl.bind(null, e[1]))), [e, t];
    },
    useMutableSource: function (e, t, r) {
      var n = Vi();
      return (
        (n.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: r,
        }),
        Ki(n, e, t, r)
      );
    },
    useOpaqueIdentifier: function () {
      if (Ei) {
        var e = !1,
          t = (function (e) {
            return { $$typeof: ke, toString: e, valueOf: e };
          })(function () {
            throw (
              (e || ((e = !0), r('r:' + (ja++).toString(36))), Error(q(355)))
            );
          }),
          r = Ji(t)[1];
        return (
          0 == (2 & Ni.mode) &&
            ((Ni.flags |= 516),
            el(
              5,
              function () {
                r('r:' + (ja++).toString(36));
              },
              void 0,
              null,
            )),
          t
        );
      }
      return Ji((t = 'r:' + (ja++).toString(36))), t;
    },
    unstable_isNewReconciler: !1,
  },
  bl = {
    readContext: Uo,
    useCallback: dl,
    useContext: Uo,
    useEffect: il,
    useImperativeHandle: ul,
    useLayoutEffect: ll,
    useMemo: fl,
    useReducer: Yi,
    useRef: rl,
    useState: function () {
      return Yi(Qi);
    },
    useDebugValue: cl,
    useDeferredValue: function (e) {
      var t = Yi(Qi),
        r = t[0],
        n = t[1];
      return (
        il(
          function () {
            var t = Ii.transition;
            Ii.transition = 1;
            try {
              n(e);
            } finally {
              Ii.transition = t;
            }
          },
          [e],
        ),
        r
      );
    },
    useTransition: function () {
      var e = Yi(Qi)[0];
      return [rl().current, e];
    },
    useMutableSource: Zi,
    useOpaqueIdentifier: function () {
      return Yi(Qi)[0];
    },
    unstable_isNewReconciler: !1,
  },
  vl = {
    readContext: Uo,
    useCallback: dl,
    useContext: Uo,
    useEffect: il,
    useImperativeHandle: ul,
    useLayoutEffect: ll,
    useMemo: fl,
    useReducer: Xi,
    useRef: rl,
    useState: function () {
      return Xi(Qi);
    },
    useDebugValue: cl,
    useDeferredValue: function (e) {
      var t = Xi(Qi),
        r = t[0],
        n = t[1];
      return (
        il(
          function () {
            var t = Ii.transition;
            Ii.transition = 1;
            try {
              n(e);
            } finally {
              Ii.transition = t;
            }
          },
          [e],
        ),
        r
      );
    },
    useTransition: function () {
      var e = Xi(Qi)[0];
      return [rl().current, e];
    },
    useMutableSource: Zi,
    useOpaqueIdentifier: function () {
      return Xi(Qi)[0];
    },
    unstable_isNewReconciler: !1,
  },
  yl = le.ReactCurrentOwner,
  xl = !1;
function kl(e, t, r, n) {
  t.child = null === e ? di(t, null, r, n) : ci(t, e.child, r, n);
}
function wl(e, t, r, n, a) {
  r = r.render;
  var o = t.ref;
  return (
    $o(t, a),
    (n = Ui(e, t, r, n, o, a)),
    null === e || xl
      ? ((t.flags |= 1), kl(e, t, n, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~a),
        Hl(e, t, a))
  );
}
function Sl(e, t, r, n, a, o) {
  if (null === e) {
    var i = r.type;
    return 'function' != typeof i ||
      Ou(i) ||
      void 0 !== i.defaultProps ||
      null !== r.compare ||
      void 0 !== r.defaultProps
      ? (((e = Ru(r.type, null, n, t, t.mode, o)).ref = t.ref),
        (e.return = t),
        (t.child = e))
      : ((t.tag = 15), (t.type = i), _l(e, t, i, n, a, o));
  }
  return (
    (i = e.child),
    0 == (a & o) &&
    ((a = i.memoizedProps),
    (r = null !== (r = r.compare) ? r : Xn)(a, n) && e.ref === t.ref)
      ? Hl(e, t, o)
      : ((t.flags |= 1),
        ((e = Pu(i, n)).ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function _l(e, t, r, n, a, o) {
  if (null !== e && Xn(e.memoizedProps, n) && e.ref === t.ref) {
    if (((xl = !1), 0 == (o & a))) return (t.lanes = e.lanes), Hl(e, t, o);
    0 != (16384 & e.flags) && (xl = !0);
  }
  return zl(e, t, r, n, o);
}
function El(e, t, r) {
  var n = t.pendingProps,
    a = n.children,
    o = null !== e ? e.memoizedState : null;
  if ('hidden' === n.mode || 'unstable-defer-without-hiding' === n.mode)
    if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), ou(t, r);
    else {
      if (0 == (1073741824 & r))
        return (
          (e = null !== o ? o.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e }),
          ou(t, e),
          null
        );
      (t.memoizedState = { baseLanes: 0 }), ou(t, null !== o ? o.baseLanes : r);
    }
  else
    null !== o ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ou(t, n);
  return kl(e, t, a, r), t.child;
}
function Cl(e, t) {
  var r = t.ref;
  ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
    (t.flags |= 128);
}
function zl(e, t, r, n, a) {
  var o = eo(r) ? Za : Ga.current;
  return (
    (o = Ja(t, o)),
    $o(t, a),
    (r = Ui(e, t, r, n, o, a)),
    null === e || xl
      ? ((t.flags |= 1), kl(e, t, r, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~a),
        Hl(e, t, a))
  );
}
function Ol(e, t, r, n, a) {
  if (eo(r)) {
    var o = !0;
    ao(t);
  } else o = !1;
  if (($o(t, a), null === t.stateNode))
    null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      ni(t, r, n),
      oi(t, r, n, a),
      (n = !0);
  else if (null === e) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var s = i.context,
      u = r.contextType;
    'object' == typeof u && null !== u
      ? (u = Uo(u))
      : (u = Ja(t, (u = eo(r) ? Za : Ga.current)));
    var c = r.getDerivedStateFromProps,
      d =
        'function' == typeof c ||
        'function' == typeof i.getSnapshotBeforeUpdate;
    d ||
      ('function' != typeof i.UNSAFE_componentWillReceiveProps &&
        'function' != typeof i.componentWillReceiveProps) ||
      ((l !== n || s !== u) && ai(t, i, n, u)),
      (Vo = !1);
    var f = t.memoizedState;
    (i.state = f),
      Ko(t, n, i, a),
      (s = t.memoizedState),
      l !== n || f !== s || Ka.current || Vo
        ? ('function' == typeof c && (ei(t, r, c, n), (s = t.memoizedState)),
          (l = Vo || ri(t, r, l, n, f, s, u))
            ? (d ||
                ('function' != typeof i.UNSAFE_componentWillMount &&
                  'function' != typeof i.componentWillMount) ||
                ('function' == typeof i.componentWillMount &&
                  i.componentWillMount(),
                'function' == typeof i.UNSAFE_componentWillMount &&
                  i.UNSAFE_componentWillMount()),
              'function' == typeof i.componentDidMount && (t.flags |= 4))
            : ('function' == typeof i.componentDidMount && (t.flags |= 4),
              (t.memoizedProps = n),
              (t.memoizedState = s)),
          (i.props = n),
          (i.state = s),
          (i.context = u),
          (n = l))
        : ('function' == typeof i.componentDidMount && (t.flags |= 4),
          (n = !1));
  } else {
    (i = t.stateNode),
      Qo(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Io(t.type, l)),
      (i.props = u),
      (d = t.pendingProps),
      (f = i.context),
      'object' == typeof (s = r.contextType) && null !== s
        ? (s = Uo(s))
        : (s = Ja(t, (s = eo(r) ? Za : Ga.current)));
    var p = r.getDerivedStateFromProps;
    (c =
      'function' == typeof p ||
      'function' == typeof i.getSnapshotBeforeUpdate) ||
      ('function' != typeof i.UNSAFE_componentWillReceiveProps &&
        'function' != typeof i.componentWillReceiveProps) ||
      ((l !== d || f !== s) && ai(t, i, n, s)),
      (Vo = !1),
      (f = t.memoizedState),
      (i.state = f),
      Ko(t, n, i, a);
    var h = t.memoizedState;
    l !== d || f !== h || Ka.current || Vo
      ? ('function' == typeof p && (ei(t, r, p, n), (h = t.memoizedState)),
        (u = Vo || ri(t, r, u, n, f, h, s))
          ? (c ||
              ('function' != typeof i.UNSAFE_componentWillUpdate &&
                'function' != typeof i.componentWillUpdate) ||
              ('function' == typeof i.componentWillUpdate &&
                i.componentWillUpdate(n, h, s),
              'function' == typeof i.UNSAFE_componentWillUpdate &&
                i.UNSAFE_componentWillUpdate(n, h, s)),
            'function' == typeof i.componentDidUpdate && (t.flags |= 4),
            'function' == typeof i.getSnapshotBeforeUpdate && (t.flags |= 256))
          : ('function' != typeof i.componentDidUpdate ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            'function' != typeof i.getSnapshotBeforeUpdate ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = n),
            (t.memoizedState = h)),
        (i.props = n),
        (i.state = h),
        (i.context = s),
        (n = u))
      : ('function' != typeof i.componentDidUpdate ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        'function' != typeof i.getSnapshotBeforeUpdate ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 256),
        (n = !1));
  }
  return Pl(e, t, r, n, o, a);
}
function Pl(e, t, r, n, a, o) {
  Cl(e, t);
  var i = 0 != (64 & t.flags);
  if (!n && !i) return a && oo(t, r, !1), Hl(e, t, o);
  (n = t.stateNode), (yl.current = t);
  var l =
    i && 'function' != typeof r.getDerivedStateFromError ? null : n.render();
  return (
    (t.flags |= 1),
    null !== e && i
      ? ((t.child = ci(t, e.child, null, o)), (t.child = ci(t, null, l, o)))
      : kl(e, t, l, o),
    (t.memoizedState = n.state),
    a && oo(t, r, !0),
    t.child
  );
}
function Rl(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ro(0, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ro(0, t.context, !1),
    bi(e, t.containerInfo);
}
var Al,
  Tl,
  jl,
  Fl = { dehydrated: null, retryLane: 0 };
function Il(e, t, r) {
  var n,
    a = t.pendingProps,
    o = ki.current,
    i = !1;
  return (
    (n = 0 != (64 & t.flags)) ||
      (n = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
    n
      ? ((i = !0), (t.flags &= -65))
      : (null !== e && null === e.memoizedState) ||
        void 0 === a.fallback ||
        !0 === a.unstable_avoidThisFallback ||
        (o |= 1),
    Ya(ki, 1 & o),
    null === e
      ? (void 0 !== a.fallback && Oi(t),
        (e = a.children),
        (o = a.fallback),
        i
          ? ((e = Bl(t, e, o, r)),
            (t.child.memoizedState = { baseLanes: r }),
            (t.memoizedState = Fl),
            e)
          : 'number' == typeof a.unstable_expectedLoadTime
          ? ((e = Bl(t, e, o, r)),
            (t.child.memoizedState = { baseLanes: r }),
            (t.memoizedState = Fl),
            (t.lanes = 33554432),
            e)
          : (((r = Tu(
              { mode: 'visible', children: e },
              t.mode,
              r,
              null,
            )).return = t),
            (t.child = r)))
      : (e.memoizedState,
        i
          ? ((a = Ll(e, t, a.children, a.fallback, r)),
            (i = t.child),
            (o = e.child.memoizedState),
            (i.memoizedState =
              null === o ? { baseLanes: r } : { baseLanes: o.baseLanes | r }),
            (i.childLanes = e.childLanes & ~r),
            (t.memoizedState = Fl),
            a)
          : ((r = Nl(e, t, a.children, r)), (t.memoizedState = null), r))
  );
}
function Bl(e, t, r, n) {
  var a = e.mode,
    o = e.child;
  return (
    (t = { mode: 'hidden', children: t }),
    0 == (2 & a) && null !== o
      ? ((o.childLanes = 0), (o.pendingProps = t))
      : (o = Tu(t, a, 0, null)),
    (r = Au(r, a, n, null)),
    (o.return = e),
    (r.return = e),
    (o.sibling = r),
    (e.child = o),
    r
  );
}
function Nl(e, t, r, n) {
  var a = e.child;
  return (
    (e = a.sibling),
    (r = Pu(a, { mode: 'visible', children: r })),
    0 == (2 & t.mode) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    null !== e &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = r)
  );
}
function Ll(e, t, r, n, a) {
  var o = t.mode,
    i = e.child;
  e = i.sibling;
  var l = { mode: 'hidden', children: r };
  return (
    0 == (2 & o) && t.child !== i
      ? (((r = t.child).childLanes = 0),
        (r.pendingProps = l),
        null !== (i = r.lastEffect)
          ? ((t.firstEffect = r.firstEffect),
            (t.lastEffect = i),
            (i.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (r = Pu(i, l)),
    null !== e ? (n = Pu(e, n)) : ((n = Au(n, o, a, null)).flags |= 2),
    (n.return = t),
    (r.return = t),
    (r.sibling = n),
    (t.child = r),
    n
  );
}
function Ml(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  null !== r && (r.lanes |= t), Ho(e.return, t);
}
function Dl(e, t, r, n, a, o) {
  var i = e.memoizedState;
  null === i
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: a,
        lastEffect: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = a),
      (i.lastEffect = o));
}
function Wl(e, t, r) {
  var n = t.pendingProps,
    a = n.revealOrder,
    o = n.tail;
  if ((kl(e, t, n.children, r), 0 != (2 & (n = ki.current))))
    (n = (1 & n) | 2), (t.flags |= 64);
  else {
    if (null !== e && 0 != (64 & e.flags))
      e: for (e = t.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && Ml(e, r);
        else if (19 === e.tag) Ml(e, r);
        else if (null !== e.child) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Ya(ki, n), 0 == (2 & t.mode))) t.memoizedState = null;
  else
    switch (a) {
      case 'forwards':
        for (r = t.child, a = null; null !== r; )
          null !== (e = r.alternate) && null === wi(e) && (a = r),
            (r = r.sibling);
        null === (r = a)
          ? ((a = t.child), (t.child = null))
          : ((a = r.sibling), (r.sibling = null)),
          Dl(t, !1, a, r, o, t.lastEffect);
        break;
      case 'backwards':
        for (r = null, a = t.child, t.child = null; null !== a; ) {
          if (null !== (e = a.alternate) && null === wi(e)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = r), (r = a), (a = e);
        }
        Dl(t, !0, r, null, o, t.lastEffect);
        break;
      case 'together':
        Dl(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hl(e, t, r) {
  if (
    (null !== e && (t.dependencies = e.dependencies),
    (_s |= t.lanes),
    0 != (r & t.childLanes))
  ) {
    if (null !== e && t.child !== e.child) throw Error(q(153));
    if (null !== t.child) {
      for (
        r = Pu((e = t.child), e.pendingProps), t.child = r, r.return = t;
        null !== e.sibling;

      )
        (e = e.sibling), ((r = r.sibling = Pu(e, e.pendingProps)).return = t);
      r.sibling = null;
    }
    return t.child;
  }
  return null;
}
function $l(e, t) {
  if (!Ei)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var r = null; null !== t; )
          null !== t.alternate && (r = t), (t = t.sibling);
        null === r ? (e.tail = null) : (r.sibling = null);
        break;
      case 'collapsed':
        r = e.tail;
        for (var n = null; null !== r; )
          null !== r.alternate && (n = r), (r = r.sibling);
        null === n
          ? t || null === e.tail
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ul(e, t, r) {
  var n = t.pendingProps;
  switch (t.tag) {
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
      return null;
    case 1:
      return eo(t.type) && to(), null;
    case 3:
      return (
        vi(),
        Qa(Ka),
        Qa(Ga),
        ji(),
        (n = t.stateNode).pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (null !== e && null !== e.child) ||
          (Ri(t) ? (t.flags |= 4) : n.hydrate || (t.flags |= 256)),
        null
      );
    case 5:
      xi(t);
      var a = gi(mi.current);
      if (((r = t.type), null !== e && null != t.stateNode))
        Tl(e, t, r, n), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!n) {
          if (null === t.stateNode) throw Error(q(166));
          return null;
        }
        if (((e = gi(pi.current)), Ri(t))) {
          (n = t.stateNode), (r = t.type);
          var o = t.memoizedProps;
          switch (((n[Ia] = t), (n[Ba] = o), r)) {
            case 'dialog':
              pa('cancel', n), pa('close', n);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              pa('load', n);
              break;
            case 'video':
            case 'audio':
              for (e = 0; e < ua.length; e++) pa(ua[e], n);
              break;
            case 'source':
              pa('error', n);
              break;
            case 'img':
            case 'image':
            case 'link':
              pa('error', n), pa('load', n);
              break;
            case 'details':
              pa('toggle', n);
              break;
            case 'input':
              De(n, o), pa('invalid', n);
              break;
            case 'select':
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                pa('invalid', n);
              break;
            case 'textarea':
              Ye(n, o), pa('invalid', n);
          }
          for (var i in (ct(r, o), (e = null), o))
            o.hasOwnProperty(i) &&
              ((a = o[i]),
              'children' === i
                ? 'string' == typeof a
                  ? n.textContent !== a && (e = ['children', a])
                  : 'number' == typeof a &&
                    n.textContent !== '' + a &&
                    (e = ['children', '' + a])
                : Y.hasOwnProperty(i) &&
                  null != a &&
                  'onScroll' === i &&
                  pa('scroll', n));
          switch (r) {
            case 'input':
              Be(n), $e(n, o, !0);
              break;
            case 'textarea':
              Be(n), Ge(n);
              break;
            case 'select':
            case 'option':
              break;
            default:
              'function' == typeof o.onClick && (n.onclick = Sa);
          }
          (n = e), (t.updateQueue = n), null !== n && (t.flags |= 4);
        } else {
          switch (
            ((i = 9 === a.nodeType ? a : a.ownerDocument),
            e === Ke && (e = Je(r)),
            e === Ke
              ? 'script' === r
                ? (((e = i.createElement('div')).innerHTML =
                    '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : 'string' == typeof n.is
                ? (e = i.createElement(r, { is: n.is }))
                : ((e = i.createElement(r)),
                  'select' === r &&
                    ((i = e),
                    n.multiple
                      ? (i.multiple = !0)
                      : n.size && (i.size = n.size)))
              : (e = i.createElementNS(e, r)),
            (e[Ia] = t),
            (e[Ba] = n),
            Al(e, t),
            (t.stateNode = e),
            (i = dt(r, n)),
            r)
          ) {
            case 'dialog':
              pa('cancel', e), pa('close', e), (a = n);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              pa('load', e), (a = n);
              break;
            case 'video':
            case 'audio':
              for (a = 0; a < ua.length; a++) pa(ua[a], e);
              a = n;
              break;
            case 'source':
              pa('error', e), (a = n);
              break;
            case 'img':
            case 'image':
            case 'link':
              pa('error', e), pa('load', e), (a = n);
              break;
            case 'details':
              pa('toggle', e), (a = n);
              break;
            case 'input':
              De(e, n), (a = Me(e, n)), pa('invalid', e);
              break;
            case 'option':
              a = Ve(e, n);
              break;
            case 'select':
              (e._wrapperState = { wasMultiple: !!n.multiple }),
                (a = U({}, n, { value: void 0 })),
                pa('invalid', e);
              break;
            case 'textarea':
              Ye(e, n), (a = Qe(e, n)), pa('invalid', e);
              break;
            default:
              a = n;
          }
          ct(r, a);
          var l = a;
          for (o in l)
            if (l.hasOwnProperty(o)) {
              var s = l[o];
              'style' === o
                ? st(e, s)
                : 'dangerouslySetInnerHTML' === o
                ? null != (s = s ? s.__html : void 0) && nt(e, s)
                : 'children' === o
                ? 'string' == typeof s
                  ? ('textarea' !== r || '' !== s) && at(e, s)
                  : 'number' == typeof s && at(e, '' + s)
                : 'suppressContentEditableWarning' !== o &&
                  'suppressHydrationWarning' !== o &&
                  'autoFocus' !== o &&
                  (Y.hasOwnProperty(o)
                    ? null != s && 'onScroll' === o && pa('scroll', e)
                    : null != s && ie(e, o, s, i));
            }
          switch (r) {
            case 'input':
              Be(e), $e(e, n, !1);
              break;
            case 'textarea':
              Be(e), Ge(e);
              break;
            case 'option':
              null != n.value && e.setAttribute('value', '' + Fe(n.value));
              break;
            case 'select':
              (e.multiple = !!n.multiple),
                null != (o = n.value)
                  ? qe(e, !!n.multiple, o, !1)
                  : null != n.defaultValue &&
                    qe(e, !!n.multiple, n.defaultValue, !0);
              break;
            default:
              'function' == typeof a.onClick && (e.onclick = Sa);
          }
          Ca(r, n) && (t.flags |= 4);
        }
        null !== t.ref && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && null != t.stateNode) jl(0, t, e.memoizedProps, n);
      else {
        if ('string' != typeof n && null === t.stateNode) throw Error(q(166));
        (r = gi(mi.current)),
          gi(pi.current),
          Ri(t)
            ? ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[Ia] = t),
              n.nodeValue !== r && (t.flags |= 4))
            : (((n = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(
                n,
              ))[Ia] = t),
              (t.stateNode = n));
      }
      return null;
    case 13:
      return (
        Qa(ki),
        (n = t.memoizedState),
        0 != (64 & t.flags)
          ? ((t.lanes = r), t)
          : ((n = null !== n),
            (r = !1),
            null === e
              ? void 0 !== t.memoizedProps.fallback && Ri(t)
              : (r = null !== e.memoizedState),
            n &&
              !r &&
              0 != (2 & t.mode) &&
              ((null === e &&
                !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
              0 != (1 & ki.current)
                ? 0 === ks && (ks = 3)
                : ((0 !== ks && 3 !== ks) || (ks = 4),
                  null === gs ||
                    (0 == (134217727 & _s) && 0 == (134217727 & Es)) ||
                    tu(gs, vs))),
            (n || r) && (t.flags |= 4),
            null)
      );
    case 4:
      return vi(), null === e && ma(t.stateNode.containerInfo), null;
    case 10:
      return Wo(t), null;
    case 17:
      return eo(t.type) && to(), null;
    case 19:
      if ((Qa(ki), null === (n = t.memoizedState))) return null;
      if (((o = 0 != (64 & t.flags)), null === (i = n.rendering)))
        if (o) $l(n, !1);
        else {
          if (0 !== ks || (null !== e && 0 != (64 & e.flags)))
            for (e = t.child; null !== e; ) {
              if (null !== (i = wi(e))) {
                for (
                  t.flags |= 64,
                    $l(n, !1),
                    null !== (o = i.updateQueue) &&
                      ((t.updateQueue = o), (t.flags |= 4)),
                    null === n.lastEffect && (t.firstEffect = null),
                    t.lastEffect = n.lastEffect,
                    n = r,
                    r = t.child;
                  null !== r;

                )
                  (e = n),
                    ((o = r).flags &= 2),
                    (o.nextEffect = null),
                    (o.firstEffect = null),
                    (o.lastEffect = null),
                    null === (i = o.alternate)
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          null === e
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Ya(ki, (1 & ki.current) | 2), t.child;
              }
              e = e.sibling;
            }
          null !== n.tail &&
            zo() > Ps &&
            ((t.flags |= 64), (o = !0), $l(n, !1), (t.lanes = 33554432));
        }
      else {
        if (!o)
          if (null !== (e = wi(i))) {
            if (
              ((t.flags |= 64),
              (o = !0),
              null !== (r = e.updateQueue) &&
                ((t.updateQueue = r), (t.flags |= 4)),
              $l(n, !0),
              null === n.tail && 'hidden' === n.tailMode && !i.alternate && !Ei)
            )
              return (
                null !== (t = t.lastEffect = n.lastEffect) &&
                  (t.nextEffect = null),
                null
              );
          } else
            2 * zo() - n.renderingStartTime > Ps &&
              1073741824 !== r &&
              ((t.flags |= 64), (o = !0), $l(n, !1), (t.lanes = 33554432));
        n.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : (null !== (r = n.last) ? (r.sibling = i) : (t.child = i),
            (n.last = i));
      }
      return null !== n.tail
        ? ((r = n.tail),
          (n.rendering = r),
          (n.tail = r.sibling),
          (n.lastEffect = t.lastEffect),
          (n.renderingStartTime = zo()),
          (r.sibling = null),
          (t = ki.current),
          Ya(ki, o ? (1 & t) | 2 : 1 & t),
          r)
        : null;
    case 23:
    case 24:
      return (
        iu(),
        null !== e &&
          (null !== e.memoizedState) != (null !== t.memoizedState) &&
          'unstable-defer-without-hiding' !== n.mode &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(q(156, t.tag));
}
function Vl(e) {
  switch (e.tag) {
    case 1:
      eo(e.type) && to();
      var t = e.flags;
      return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
    case 3:
      if ((vi(), Qa(Ka), Qa(Ga), ji(), 0 != (64 & (t = e.flags))))
        throw Error(q(285));
      return (e.flags = (-4097 & t) | 64), e;
    case 5:
      return xi(e), null;
    case 13:
      return (
        Qa(ki), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
      );
    case 19:
      return Qa(ki), null;
    case 4:
      return vi(), null;
    case 10:
      return Wo(e), null;
    case 23:
    case 24:
      return iu(), null;
    default:
      return null;
  }
}
function ql(e, t) {
  try {
    var r = '',
      n = t;
    do {
      (r += Te(n)), (n = n.return);
    } while (n);
    var a = r;
  } catch (o) {
    a = '\nError generating stack: ' + o.message + '\n' + o.stack;
  }
  return { value: e, source: t, stack: a };
}
function Ql(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
(Al = function (e, t) {
  for (var r = t.child; null !== r; ) {
    if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
    else if (4 !== r.tag && null !== r.child) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; null === r.sibling; ) {
      if (null === r.return || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
}),
  (Tl = function (e, t, r, n) {
    var a = e.memoizedProps;
    if (a !== n) {
      (e = t.stateNode), gi(pi.current);
      var o,
        i = null;
      switch (r) {
        case 'input':
          (a = Me(e, a)), (n = Me(e, n)), (i = []);
          break;
        case 'option':
          (a = Ve(e, a)), (n = Ve(e, n)), (i = []);
          break;
        case 'select':
          (a = U({}, a, { value: void 0 })),
            (n = U({}, n, { value: void 0 })),
            (i = []);
          break;
        case 'textarea':
          (a = Qe(e, a)), (n = Qe(e, n)), (i = []);
          break;
        default:
          'function' != typeof a.onClick &&
            'function' == typeof n.onClick &&
            (e.onclick = Sa);
      }
      for (u in (ct(r, n), (r = null), a))
        if (!n.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
          if ('style' === u) {
            var l = a[u];
            for (o in l) l.hasOwnProperty(o) && (r || (r = {}), (r[o] = ''));
          } else
            'dangerouslySetInnerHTML' !== u &&
              'children' !== u &&
              'suppressContentEditableWarning' !== u &&
              'suppressHydrationWarning' !== u &&
              'autoFocus' !== u &&
              (Y.hasOwnProperty(u)
                ? i || (i = [])
                : (i = i || []).push(u, null));
      for (u in n) {
        var s = n[u];
        if (
          ((l = null != a ? a[u] : void 0),
          n.hasOwnProperty(u) && s !== l && (null != s || null != l))
        )
          if ('style' === u)
            if (l) {
              for (o in l)
                !l.hasOwnProperty(o) ||
                  (s && s.hasOwnProperty(o)) ||
                  (r || (r = {}), (r[o] = ''));
              for (o in s)
                s.hasOwnProperty(o) &&
                  l[o] !== s[o] &&
                  (r || (r = {}), (r[o] = s[o]));
            } else r || (i || (i = []), i.push(u, r)), (r = s);
          else
            'dangerouslySetInnerHTML' === u
              ? ((s = s ? s.__html : void 0),
                (l = l ? l.__html : void 0),
                null != s && l !== s && (i = i || []).push(u, s))
              : 'children' === u
              ? ('string' != typeof s && 'number' != typeof s) ||
                (i = i || []).push(u, '' + s)
              : 'suppressContentEditableWarning' !== u &&
                'suppressHydrationWarning' !== u &&
                (Y.hasOwnProperty(u)
                  ? (null != s && 'onScroll' === u && pa('scroll', e),
                    i || l === s || (i = []))
                  : 'object' == typeof s && null !== s && s.$$typeof === ke
                  ? s.toString()
                  : (i = i || []).push(u, s));
      }
      r && (i = i || []).push('style', r);
      var u = i;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  }),
  (jl = function (e, t, r, n) {
    r !== n && (t.flags |= 4);
  });
var Yl = 'function' == typeof WeakMap ? WeakMap : Map;
function Xl(e, t, r) {
  ((r = Yo(-1, r)).tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      js || ((js = !0), (Fs = n)), Ql(0, t);
    }),
    r
  );
}
function Gl(e, t, r) {
  (r = Yo(-1, r)).tag = 3;
  var n = e.type.getDerivedStateFromError;
  if ('function' == typeof n) {
    var a = t.value;
    r.payload = function () {
      return Ql(0, t), n(a);
    };
  }
  var o = e.stateNode;
  return (
    null !== o &&
      'function' == typeof o.componentDidCatch &&
      (r.callback = function () {
        'function' != typeof n &&
          (null === Is ? (Is = new Set([this])) : Is.add(this), Ql(0, t));
        var e = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: null !== e ? e : '',
        });
      }),
    r
  );
}
var Kl = 'function' == typeof WeakSet ? WeakSet : Set;
function Zl(e) {
  var t = e.ref;
  if (null !== t)
    if ('function' == typeof t)
      try {
        t(null);
      } catch (r) {
        Su(e, r);
      }
    else t.current = null;
}
function Jl(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (256 & t.flags && null !== e) {
        var r = e.memoizedProps,
          n = e.memoizedState;
        (t = (e = t.stateNode).getSnapshotBeforeUpdate(
          t.elementType === t.type ? r : Io(t.type, r),
          n,
        )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      return void (256 & t.flags && Ra(t.stateNode.containerInfo));
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(q(163));
}
function es(e, t, r) {
  switch (r.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (null !== (t = null !== (t = r.updateQueue) ? t.lastEffect : null)) {
        e = t = t.next;
        do {
          if (3 == (3 & e.tag)) {
            var n = e.create;
            e.destroy = n();
          }
          e = e.next;
        } while (e !== t);
      }
      if (null !== (t = null !== (t = r.updateQueue) ? t.lastEffect : null)) {
        e = t = t.next;
        do {
          var a = e;
          (n = a.next),
            0 != (4 & (a = a.tag)) && 0 != (1 & a) && (xu(r, e), yu(r, e)),
            (e = n);
        } while (e !== t);
      }
      return;
    case 1:
      return (
        (e = r.stateNode),
        4 & r.flags &&
          (null === t
            ? e.componentDidMount()
            : ((n =
                r.elementType === r.type
                  ? t.memoizedProps
                  : Io(r.type, t.memoizedProps)),
              e.componentDidUpdate(
                n,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate,
              ))),
        void (null !== (t = r.updateQueue) && Zo(r, t, e))
      );
    case 3:
      if (null !== (t = r.updateQueue)) {
        if (((e = null), null !== r.child))
          switch (r.child.tag) {
            case 5:
              e = r.child.stateNode;
              break;
            case 1:
              e = r.child.stateNode;
          }
        Zo(r, t, e);
      }
      return;
    case 5:
      return (
        (e = r.stateNode),
        void (
          null === t &&
          4 & r.flags &&
          Ca(r.type, r.memoizedProps) &&
          e.focus()
        )
      );
    case 6:
    case 4:
    case 12:
      return;
    case 13:
      return void (
        null === r.memoizedState &&
        ((r = r.alternate),
        null !== r &&
          ((r = r.memoizedState),
          null !== r && ((r = r.dehydrated), null !== r && sr(r))))
      );
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(q(163));
}
function ts(e, t) {
  for (var r = e; ; ) {
    if (5 === r.tag) {
      var n = r.stateNode;
      if (t)
        'function' == typeof (n = n.style).setProperty
          ? n.setProperty('display', 'none', 'important')
          : (n.display = 'none');
      else {
        n = r.stateNode;
        var a = r.memoizedProps.style;
        (a = null != a && a.hasOwnProperty('display') ? a.display : null),
          (n.style.display = lt('display', a));
      }
    } else if (6 === r.tag) r.stateNode.nodeValue = t ? '' : r.memoizedProps;
    else if (
      ((23 !== r.tag && 24 !== r.tag) || null === r.memoizedState || r === e) &&
      null !== r.child
    ) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === e) break;
    for (; null === r.sibling; ) {
      if (null === r.return || r.return === e) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
}
function rs(e, t) {
  if (lo && 'function' == typeof lo.onCommitFiberUnmount)
    try {
      lo.onCommitFiberUnmount(io, t);
    } catch (o) {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
        var r = (e = e.next);
        do {
          var n = r,
            a = n.destroy;
          if (((n = n.tag), void 0 !== a))
            if (0 != (4 & n)) xu(t, r);
            else {
              n = t;
              try {
                a();
              } catch (o) {
                Su(n, o);
              }
            }
          r = r.next;
        } while (r !== e);
      }
      break;
    case 1:
      if ((Zl(t), 'function' == typeof (e = t.stateNode).componentWillUnmount))
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (o) {
          Su(t, o);
        }
      break;
    case 5:
      Zl(t);
      break;
    case 4:
      ss(e, t);
  }
}
function ns(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function as(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function os(e) {
  e: {
    for (var t = e.return; null !== t; ) {
      if (as(t)) break e;
      t = t.return;
    }
    throw Error(q(160));
  }
  var r = t;
  switch (((t = r.stateNode), r.tag)) {
    case 5:
      var n = !1;
      break;
    case 3:
    case 4:
      (t = t.containerInfo), (n = !0);
      break;
    default:
      throw Error(q(161));
  }
  16 & r.flags && (at(t, ''), (r.flags &= -17));
  e: t: for (r = e; ; ) {
    for (; null === r.sibling; ) {
      if (null === r.return || as(r.return)) {
        r = null;
        break e;
      }
      r = r.return;
    }
    for (
      r.sibling.return = r.return, r = r.sibling;
      5 !== r.tag && 6 !== r.tag && 18 !== r.tag;

    ) {
      if (2 & r.flags) continue t;
      if (null === r.child || 4 === r.tag) continue t;
      (r.child.return = r), (r = r.child);
    }
    if (!(2 & r.flags)) {
      r = r.stateNode;
      break e;
    }
  }
  n ? is(e, r, t) : ls(e, r, t);
}
function is(e, t, r) {
  var n = e.tag,
    a = 5 === n || 6 === n;
  if (a)
    (e = a ? e.stateNode : e.stateNode.instance),
      t
        ? 8 === r.nodeType
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (8 === r.nodeType
            ? (t = r.parentNode).insertBefore(e, r)
            : (t = r).appendChild(e),
          null != (r = r._reactRootContainer) ||
            null !== t.onclick ||
            (t.onclick = Sa));
  else if (4 !== n && null !== (e = e.child))
    for (is(e, t, r), e = e.sibling; null !== e; ) is(e, t, r), (e = e.sibling);
}
function ls(e, t, r) {
  var n = e.tag,
    a = 5 === n || 6 === n;
  if (a)
    (e = a ? e.stateNode : e.stateNode.instance),
      t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (4 !== n && null !== (e = e.child))
    for (ls(e, t, r), e = e.sibling; null !== e; ) ls(e, t, r), (e = e.sibling);
}
function ss(e, t) {
  for (var r, n, a = t, o = !1; ; ) {
    if (!o) {
      o = a.return;
      e: for (;;) {
        if (null === o) throw Error(q(160));
        switch (((r = o.stateNode), o.tag)) {
          case 5:
            n = !1;
            break e;
          case 3:
          case 4:
            (r = r.containerInfo), (n = !0);
            break e;
        }
        o = o.return;
      }
      o = !0;
    }
    if (5 === a.tag || 6 === a.tag) {
      e: for (var i = e, l = a, s = l; ; )
        if ((rs(i, s), null !== s.child && 4 !== s.tag))
          (s.child.return = s), (s = s.child);
        else {
          if (s === l) break e;
          for (; null === s.sibling; ) {
            if (null === s.return || s.return === l) break e;
            s = s.return;
          }
          (s.sibling.return = s.return), (s = s.sibling);
        }
      n
        ? ((i = r),
          (l = a.stateNode),
          8 === i.nodeType ? i.parentNode.removeChild(l) : i.removeChild(l))
        : r.removeChild(a.stateNode);
    } else if (4 === a.tag) {
      if (null !== a.child) {
        (r = a.stateNode.containerInfo),
          (n = !0),
          (a.child.return = a),
          (a = a.child);
        continue;
      }
    } else if ((rs(e, a), null !== a.child)) {
      (a.child.return = a), (a = a.child);
      continue;
    }
    if (a === t) break;
    for (; null === a.sibling; ) {
      if (null === a.return || a.return === t) return;
      4 === (a = a.return).tag && (o = !1);
    }
    (a.sibling.return = a.return), (a = a.sibling);
  }
}
function us(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var r = t.updateQueue;
      if (null !== (r = null !== r ? r.lastEffect : null)) {
        var n = (r = r.next);
        do {
          3 == (3 & n.tag) &&
            ((e = n.destroy), (n.destroy = void 0), void 0 !== e && e()),
            (n = n.next);
        } while (n !== r);
      }
      return;
    case 1:
      return;
    case 5:
      if (null != (r = t.stateNode)) {
        n = t.memoizedProps;
        var a = null !== e ? e.memoizedProps : n;
        e = t.type;
        var o = t.updateQueue;
        if (((t.updateQueue = null), null !== o)) {
          for (
            r[Ba] = n,
              'input' === e && 'radio' === n.type && null != n.name && We(r, n),
              dt(e, a),
              t = dt(e, n),
              a = 0;
            a < o.length;
            a += 2
          ) {
            var i = o[a],
              l = o[a + 1];
            'style' === i
              ? st(r, l)
              : 'dangerouslySetInnerHTML' === i
              ? nt(r, l)
              : 'children' === i
              ? at(r, l)
              : ie(r, i, l, t);
          }
          switch (e) {
            case 'input':
              He(r, n);
              break;
            case 'textarea':
              Xe(r, n);
              break;
            case 'select':
              (e = r._wrapperState.wasMultiple),
                (r._wrapperState.wasMultiple = !!n.multiple),
                null != (o = n.value)
                  ? qe(r, !!n.multiple, o, !1)
                  : e !== !!n.multiple &&
                    (null != n.defaultValue
                      ? qe(r, !!n.multiple, n.defaultValue, !0)
                      : qe(r, !!n.multiple, n.multiple ? [] : '', !1));
          }
        }
      }
      return;
    case 6:
      if (null === t.stateNode) throw Error(q(162));
      return void (t.stateNode.nodeValue = t.memoizedProps);
    case 3:
      return void (
        (r = t.stateNode).hydrate && ((r.hydrate = !1), sr(r.containerInfo))
      );
    case 12:
      return;
    case 13:
      return (
        null !== t.memoizedState && ((Os = zo()), ts(t.child, !0)), void cs(t)
      );
    case 19:
      return void cs(t);
    case 17:
      return;
    case 23:
    case 24:
      return void ts(t, null !== t.memoizedState);
  }
  throw Error(q(163));
}
function cs(e) {
  var t = e.updateQueue;
  if (null !== t) {
    e.updateQueue = null;
    var r = e.stateNode;
    null === r && (r = e.stateNode = new Kl()),
      t.forEach(function (t) {
        var n = Eu.bind(null, e, t);
        r.has(t) || (r.add(t), t.then(n, n));
      });
  }
}
function ds(e, t) {
  return (
    null !== e &&
    (null === (e = e.memoizedState) || null !== e.dehydrated) &&
    null !== (t = t.memoizedState) &&
    null === t.dehydrated
  );
}
var fs = Math.ceil,
  ps = le.ReactCurrentDispatcher,
  hs = le.ReactCurrentOwner,
  ms = 0,
  gs = null,
  bs = null,
  vs = 0,
  ys = 0,
  xs = qa(0),
  ks = 0,
  ws = null,
  Ss = 0,
  _s = 0,
  Es = 0,
  Cs = 0,
  zs = null,
  Os = 0,
  Ps = 1 / 0;
function Rs() {
  Ps = zo() + 500;
}
var As,
  Ts = null,
  js = !1,
  Fs = null,
  Is = null,
  Bs = !1,
  Ns = null,
  Ls = 90,
  Ms = [],
  Ds = [],
  Ws = null,
  Hs = 0,
  $s = null,
  Us = -1,
  Vs = 0,
  qs = 0,
  Qs = null,
  Ys = !1;
function Xs() {
  return 0 != (48 & ms) ? zo() : -1 !== Us ? Us : (Us = zo());
}
function Gs(e) {
  if (0 == (2 & (e = e.mode))) return 1;
  if (0 == (4 & e)) return 99 === Oo() ? 1 : 2;
  if ((0 === Vs && (Vs = Ss), 0 !== Fo.transition)) {
    0 !== qs && (qs = null !== zs ? zs.pendingLanes : 0), (e = Vs);
    var t = 4186112 & ~qs;
    return (
      0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t
    );
  }
  return (
    (e = Oo()),
    0 != (4 & ms) && 98 === e
      ? (e = Cr(12, Vs))
      : (e = Cr(
          (e = (function (e) {
            switch (e) {
              case 99:
                return 15;
              case 98:
                return 10;
              case 97:
              case 96:
                return 8;
              case 95:
                return 2;
              default:
                return 0;
            }
          })(e)),
          Vs,
        )),
    e
  );
}
function Ks(e, t, r) {
  if (50 < Hs) throw ((Hs = 0), ($s = null), Error(q(185)));
  if (null === (e = Zs(e, t))) return null;
  Pr(e, t, r), e === gs && ((Es |= t), 4 === ks && tu(e, vs));
  var n = Oo();
  1 === t
    ? 0 != (8 & ms) && 0 == (48 & ms)
      ? ru(e)
      : (Js(e, r), 0 === ms && (Rs(), To()))
    : (0 == (4 & ms) ||
        (98 !== n && 99 !== n) ||
        (null === Ws ? (Ws = new Set([e])) : Ws.add(e)),
      Js(e, r)),
    (zs = e);
}
function Zs(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (null !== r && (r.lanes |= t), r = e, e = e.return; null !== e; )
    (e.childLanes |= t),
      null !== (r = e.alternate) && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return 3 === r.tag ? r.stateNode : null;
}
function Js(e, t) {
  for (
    var r = e.callbackNode,
      n = e.suspendedLanes,
      a = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Rr(i),
      s = 1 << l,
      u = o[l];
    if (-1 === u) {
      if (0 == (s & n) || 0 != (s & a)) {
        (u = t), Sr(s);
        var c = wr;
        o[l] = 10 <= c ? u + 250 : 6 <= c ? u + 5e3 : -1;
      }
    } else u <= t && (e.expiredLanes |= s);
    i &= ~s;
  }
  if (((n = _r(e, e === gs ? vs : 0)), (t = wr), 0 === n))
    null !== r &&
      (r !== ko && co(r), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (null !== r) {
      if (e.callbackPriority === t) return;
      r !== ko && co(r);
    }
    15 === t
      ? ((r = ru.bind(null, e)),
        null === So ? ((So = [r]), (_o = uo(go, jo))) : So.push(r),
        (r = ko))
      : 14 === t
      ? (r = Ao(99, ru.bind(null, e)))
      : (r = Ao(
          (r = (function (e) {
            switch (e) {
              case 15:
              case 14:
                return 99;
              case 13:
              case 12:
              case 11:
              case 10:
                return 98;
              case 9:
              case 8:
              case 7:
              case 6:
              case 4:
              case 5:
                return 97;
              case 3:
              case 2:
              case 1:
                return 95;
              case 0:
                return 90;
              default:
                throw Error(q(358, e));
            }
          })(t)),
          eu.bind(null, e),
        )),
      (e.callbackPriority = t),
      (e.callbackNode = r);
  }
}
function eu(e) {
  if (((Us = -1), (qs = Vs = 0), 0 != (48 & ms))) throw Error(q(327));
  var t = e.callbackNode;
  if (vu() && e.callbackNode !== t) return null;
  var r = _r(e, e === gs ? vs : 0);
  if (0 === r) return null;
  var n = r,
    a = ms;
  ms |= 16;
  var o = uu();
  for ((gs === e && vs === n) || (Rs(), lu(e, n)); ; )
    try {
      fu();
      break;
    } catch (l) {
      su(e, l);
    }
  if (
    (Do(),
    (ps.current = o),
    (ms = a),
    null !== bs ? (n = 0) : ((gs = null), (vs = 0), (n = ks)),
    0 != (Ss & Es))
  )
    lu(e, 0);
  else if (0 !== n) {
    if (
      (2 === n &&
        ((ms |= 64),
        e.hydrate && ((e.hydrate = !1), Ra(e.containerInfo)),
        0 !== (r = Er(e)) && (n = cu(e, r))),
      1 === n)
    )
      throw ((t = ws), lu(e, 0), tu(e, r), Js(e, zo()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = r), n)
    ) {
      case 0:
      case 1:
        throw Error(q(345));
      case 2:
        mu(e);
        break;
      case 3:
        if ((tu(e, r), (62914560 & r) === r && 10 < (n = Os + 500 - zo()))) {
          if (0 !== _r(e, 0)) break;
          if (((a = e.suspendedLanes) & r) !== r) {
            Xs(), (e.pingedLanes |= e.suspendedLanes & a);
            break;
          }
          e.timeoutHandle = Oa(mu.bind(null, e), n);
          break;
        }
        mu(e);
        break;
      case 4:
        if ((tu(e, r), (4186112 & r) === r)) break;
        for (n = e.eventTimes, a = -1; 0 < r; ) {
          var i = 31 - Rr(r);
          (o = 1 << i), (i = n[i]) > a && (a = i), (r &= ~o);
        }
        if (
          ((r = a),
          10 <
            (r =
              (120 > (r = zo() - r)
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * fs(r / 1960)) - r))
        ) {
          e.timeoutHandle = Oa(mu.bind(null, e), r);
          break;
        }
        mu(e);
        break;
      case 5:
        mu(e);
        break;
      default:
        throw Error(q(329));
    }
  }
  return Js(e, zo()), e.callbackNode === t ? eu.bind(null, e) : null;
}
function tu(e, t) {
  for (
    t &= ~Cs,
      t &= ~Es,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Rr(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function ru(e) {
  if (0 != (48 & ms)) throw Error(q(327));
  if ((vu(), e === gs && 0 != (e.expiredLanes & vs))) {
    var t = vs,
      r = cu(e, t);
    0 != (Ss & Es) && (r = cu(e, (t = _r(e, t))));
  } else r = cu(e, (t = _r(e, 0)));
  if (
    (0 !== e.tag &&
      2 === r &&
      ((ms |= 64),
      e.hydrate && ((e.hydrate = !1), Ra(e.containerInfo)),
      0 !== (t = Er(e)) && (r = cu(e, t))),
    1 === r)
  )
    throw ((r = ws), lu(e, 0), tu(e, t), Js(e, zo()), r);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mu(e),
    Js(e, zo()),
    null
  );
}
function nu(e, t) {
  var r = ms;
  ms |= 1;
  try {
    return e(t);
  } finally {
    0 === (ms = r) && (Rs(), To());
  }
}
function au(e, t) {
  var r = ms;
  (ms &= -2), (ms |= 8);
  try {
    return e(t);
  } finally {
    0 === (ms = r) && (Rs(), To());
  }
}
function ou(e, t) {
  Ya(xs, ys), (ys |= t), (Ss |= t);
}
function iu() {
  (ys = xs.current), Qa(xs);
}
function lu(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((-1 !== r && ((e.timeoutHandle = -1), Pa(r)), null !== bs))
    for (r = bs.return; null !== r; ) {
      var n = r;
      switch (n.tag) {
        case 1:
          null != (n = n.type.childContextTypes) && to();
          break;
        case 3:
          vi(), Qa(Ka), Qa(Ga), ji();
          break;
        case 5:
          xi(n);
          break;
        case 4:
          vi();
          break;
        case 13:
        case 19:
          Qa(ki);
          break;
        case 10:
          Wo(n);
          break;
        case 23:
        case 24:
          iu();
      }
      r = r.return;
    }
  (gs = e),
    (bs = Pu(e.current, null)),
    (vs = ys = Ss = t),
    (ks = 0),
    (ws = null),
    (Cs = Es = _s = 0);
}
function su(e, t) {
  for (;;) {
    var r = bs;
    try {
      if ((Do(), (Fi.current = ml), Di)) {
        for (var n = Ni.memoizedState; null !== n; ) {
          var a = n.queue;
          null !== a && (a.pending = null), (n = n.next);
        }
        Di = !1;
      }
      if (
        ((Bi = 0),
        (Mi = Li = Ni = null),
        (Wi = !1),
        (hs.current = null),
        null === r || null === r.return)
      ) {
        (ks = 1), (ws = t), (bs = null);
        break;
      }
      e: {
        var o = e,
          i = r.return,
          l = r,
          s = t;
        if (
          ((t = vs),
          (l.flags |= 2048),
          (l.firstEffect = l.lastEffect = null),
          null !== s && 'object' == typeof s && 'function' == typeof s.then)
        ) {
          var u = s;
          if (0 == (2 & l.mode)) {
            var c = l.alternate;
            c
              ? ((l.updateQueue = c.updateQueue),
                (l.memoizedState = c.memoizedState),
                (l.lanes = c.lanes))
              : ((l.updateQueue = null), (l.memoizedState = null));
          }
          var d = 0 != (1 & ki.current),
            f = i;
          do {
            var p;
            if ((p = 13 === f.tag)) {
              var h = f.memoizedState;
              if (null !== h) p = null !== h.dehydrated;
              else {
                var m = f.memoizedProps;
                p =
                  void 0 !== m.fallback &&
                  (!0 !== m.unstable_avoidThisFallback || !d);
              }
            }
            if (p) {
              var g = f.updateQueue;
              if (null === g) {
                var b = new Set();
                b.add(u), (f.updateQueue = b);
              } else g.add(u);
              if (0 == (2 & f.mode)) {
                if (
                  ((f.flags |= 64),
                  (l.flags |= 16384),
                  (l.flags &= -2981),
                  1 === l.tag)
                )
                  if (null === l.alternate) l.tag = 17;
                  else {
                    var v = Yo(-1, 1);
                    (v.tag = 2), Xo(l, v);
                  }
                l.lanes |= 1;
                break e;
              }
              (s = void 0), (l = t);
              var y = o.pingCache;
              if (
                (null === y
                  ? ((y = o.pingCache = new Yl()), (s = new Set()), y.set(u, s))
                  : void 0 === (s = y.get(u)) && ((s = new Set()), y.set(u, s)),
                !s.has(l))
              ) {
                s.add(l);
                var x = _u.bind(null, o, u, l);
                u.then(x, x);
              }
              (f.flags |= 4096), (f.lanes = t);
              break e;
            }
            f = f.return;
          } while (null !== f);
          s = Error(
            (je(l.type) || 'A React component') +
              ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
          );
        }
        5 !== ks && (ks = 2), (s = ql(s, l)), (f = i);
        do {
          switch (f.tag) {
            case 3:
              (o = s),
                (f.flags |= 4096),
                (t &= -t),
                (f.lanes |= t),
                Go(f, Xl(0, o, t));
              break e;
            case 1:
              o = s;
              var k = f.type,
                w = f.stateNode;
              if (
                0 == (64 & f.flags) &&
                ('function' == typeof k.getDerivedStateFromError ||
                  (null !== w &&
                    'function' == typeof w.componentDidCatch &&
                    (null === Is || !Is.has(w))))
              ) {
                (f.flags |= 4096),
                  (t &= -t),
                  (f.lanes |= t),
                  Go(f, Gl(f, o, t));
                break e;
              }
          }
          f = f.return;
        } while (null !== f);
      }
      hu(r);
    } catch (S) {
      (t = S), bs === r && null !== r && (bs = r = r.return);
      continue;
    }
    break;
  }
}
function uu() {
  var e = ps.current;
  return (ps.current = ml), null === e ? ml : e;
}
function cu(e, t) {
  var r = ms;
  ms |= 16;
  var n = uu();
  for ((gs === e && vs === t) || lu(e, t); ; )
    try {
      du();
      break;
    } catch (a) {
      su(e, a);
    }
  if ((Do(), (ms = r), (ps.current = n), null !== bs)) throw Error(q(261));
  return (gs = null), (vs = 0), ks;
}
function du() {
  for (; null !== bs; ) pu(bs);
}
function fu() {
  for (; null !== bs && !fo(); ) pu(bs);
}
function pu(e) {
  var t = As(e.alternate, e, ys);
  (e.memoizedProps = e.pendingProps),
    null === t ? hu(e) : (bs = t),
    (hs.current = null);
}
function hu(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), 0 == (2048 & t.flags))) {
      if (null !== (r = Ul(r, t, ys))) return void (bs = r);
      if (
        (24 !== (r = t).tag && 23 !== r.tag) ||
        null === r.memoizedState ||
        0 != (1073741824 & ys) ||
        0 == (4 & r.mode)
      ) {
        for (var n = 0, a = r.child; null !== a; )
          (n |= a.lanes | a.childLanes), (a = a.sibling);
        r.childLanes = n;
      }
      null !== e &&
        0 == (2048 & e.flags) &&
        (null === e.firstEffect && (e.firstEffect = t.firstEffect),
        null !== t.lastEffect &&
          (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (null !== e.lastEffect
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (null !== (r = Vl(t))) return (r.flags &= 2047), void (bs = r);
      null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (null !== (t = t.sibling)) return void (bs = t);
    bs = t = e;
  } while (null !== t);
  0 === ks && (ks = 5);
}
function mu(e) {
  var t = Oo();
  return Ro(99, gu.bind(null, e, t)), null;
}
function gu(e, t) {
  do {
    vu();
  } while (null !== Ns);
  if (0 != (48 & ms)) throw Error(q(327));
  var r = e.finishedWork;
  if (null === r) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(q(177));
  e.callbackNode = null;
  var n = r.lanes | r.childLanes,
    a = n,
    o = e.pendingLanes & ~a;
  (e.pendingLanes = a),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= a),
    (e.mutableReadLanes &= a),
    (e.entangledLanes &= a),
    (a = e.entanglements);
  for (var i = e.eventTimes, l = e.expirationTimes; 0 < o; ) {
    var s = 31 - Rr(o),
      u = 1 << s;
    (a[s] = 0), (i[s] = -1), (l[s] = -1), (o &= ~u);
  }
  if (
    (null !== Ws && 0 == (24 & n) && Ws.has(e) && Ws.delete(e),
    e === gs && ((bs = gs = null), (vs = 0)),
    1 < r.flags
      ? null !== r.lastEffect
        ? ((r.lastEffect.nextEffect = r), (n = r.firstEffect))
        : (n = r)
      : (n = r.firstEffect),
    null !== n)
  ) {
    if (
      ((a = ms), (ms |= 32), (hs.current = null), (_a = Ir), ea((i = Jn())))
    ) {
      if ('selectionStart' in i)
        l = { start: i.selectionStart, end: i.selectionEnd };
      else
        e: if (
          ((l = ((l = i.ownerDocument) && l.defaultView) || window),
          (u = l.getSelection && l.getSelection()) && 0 !== u.rangeCount)
        ) {
          (l = u.anchorNode),
            (o = u.anchorOffset),
            (s = u.focusNode),
            (u = u.focusOffset);
          try {
            l.nodeType, s.nodeType;
          } catch (E) {
            l = null;
            break e;
          }
          var c = 0,
            d = -1,
            f = -1,
            p = 0,
            h = 0,
            m = i,
            g = null;
          t: for (;;) {
            for (
              var b;
              m !== l || (0 !== o && 3 !== m.nodeType) || (d = c + o),
                m !== s || (0 !== u && 3 !== m.nodeType) || (f = c + u),
                3 === m.nodeType && (c += m.nodeValue.length),
                null !== (b = m.firstChild);

            )
              (g = m), (m = b);
            for (;;) {
              if (m === i) break t;
              if (
                (g === l && ++p === o && (d = c),
                g === s && ++h === u && (f = c),
                null !== (b = m.nextSibling))
              )
                break;
              g = (m = g).parentNode;
            }
            m = b;
          }
          l = -1 === d || -1 === f ? null : { start: d, end: f };
        } else l = null;
      l = l || { start: 0, end: 0 };
    } else l = null;
    (Ea = { focusedElem: i, selectionRange: l }),
      (Ir = !1),
      (Qs = null),
      (Ys = !1),
      (Ts = n);
    do {
      try {
        bu();
      } catch (E) {
        if (null === Ts) throw Error(q(330));
        Su(Ts, E), (Ts = Ts.nextEffect);
      }
    } while (null !== Ts);
    (Qs = null), (Ts = n);
    do {
      try {
        for (i = e; null !== Ts; ) {
          var v = Ts.flags;
          if ((16 & v && at(Ts.stateNode, ''), 128 & v)) {
            var y = Ts.alternate;
            if (null !== y) {
              var x = y.ref;
              null !== x &&
                ('function' == typeof x ? x(null) : (x.current = null));
            }
          }
          switch (1038 & v) {
            case 2:
              os(Ts), (Ts.flags &= -3);
              break;
            case 6:
              os(Ts), (Ts.flags &= -3), us(Ts.alternate, Ts);
              break;
            case 1024:
              Ts.flags &= -1025;
              break;
            case 1028:
              (Ts.flags &= -1025), us(Ts.alternate, Ts);
              break;
            case 4:
              us(Ts.alternate, Ts);
              break;
            case 8:
              ss(i, (l = Ts));
              var k = l.alternate;
              ns(l), null !== k && ns(k);
          }
          Ts = Ts.nextEffect;
        }
      } catch (E) {
        if (null === Ts) throw Error(q(330));
        Su(Ts, E), (Ts = Ts.nextEffect);
      }
    } while (null !== Ts);
    if (
      ((x = Ea),
      (y = Jn()),
      (v = x.focusedElem),
      (i = x.selectionRange),
      y !== v && v && v.ownerDocument && Zn(v.ownerDocument.documentElement, v))
    ) {
      null !== i &&
        ea(v) &&
        ((y = i.start),
        void 0 === (x = i.end) && (x = y),
        'selectionStart' in v
          ? ((v.selectionStart = y),
            (v.selectionEnd = Math.min(x, v.value.length)))
          : (x = ((y = v.ownerDocument || document) && y.defaultView) || window)
              .getSelection &&
            ((x = x.getSelection()),
            (l = v.textContent.length),
            (k = Math.min(i.start, l)),
            (i = void 0 === i.end ? k : Math.min(i.end, l)),
            !x.extend && k > i && ((l = i), (i = k), (k = l)),
            (l = Kn(v, k)),
            (o = Kn(v, i)),
            l &&
              o &&
              (1 !== x.rangeCount ||
                x.anchorNode !== l.node ||
                x.anchorOffset !== l.offset ||
                x.focusNode !== o.node ||
                x.focusOffset !== o.offset) &&
              ((y = y.createRange()).setStart(l.node, l.offset),
              x.removeAllRanges(),
              k > i
                ? (x.addRange(y), x.extend(o.node, o.offset))
                : (y.setEnd(o.node, o.offset), x.addRange(y))))),
        (y = []);
      for (x = v; (x = x.parentNode); )
        1 === x.nodeType &&
          y.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
      for ('function' == typeof v.focus && v.focus(), v = 0; v < y.length; v++)
        ((x = y[v]).element.scrollLeft = x.left), (x.element.scrollTop = x.top);
    }
    (Ir = !!_a), (Ea = _a = null), (e.current = r), (Ts = n);
    do {
      try {
        for (v = e; null !== Ts; ) {
          var w = Ts.flags;
          if ((36 & w && es(v, Ts.alternate, Ts), 128 & w)) {
            y = void 0;
            var S = Ts.ref;
            if (null !== S) {
              var _ = Ts.stateNode;
              switch (Ts.tag) {
                case 5:
                  y = _;
                  break;
                default:
                  y = _;
              }
              'function' == typeof S ? S(y) : (S.current = y);
            }
          }
          Ts = Ts.nextEffect;
        }
      } catch (E) {
        if (null === Ts) throw Error(q(330));
        Su(Ts, E), (Ts = Ts.nextEffect);
      }
    } while (null !== Ts);
    (Ts = null), wo(), (ms = a);
  } else e.current = r;
  if (Bs) (Bs = !1), (Ns = e), (Ls = t);
  else
    for (Ts = n; null !== Ts; )
      (t = Ts.nextEffect),
        (Ts.nextEffect = null),
        8 & Ts.flags && (((w = Ts).sibling = null), (w.stateNode = null)),
        (Ts = t);
  if (
    (0 === (n = e.pendingLanes) && (Is = null),
    1 === n ? (e === $s ? Hs++ : ((Hs = 0), ($s = e))) : (Hs = 0),
    (r = r.stateNode),
    lo && 'function' == typeof lo.onCommitFiberRoot)
  )
    try {
      lo.onCommitFiberRoot(io, r, void 0, 64 == (64 & r.current.flags));
    } catch (E) {}
  if ((Js(e, zo()), js)) throw ((js = !1), (e = Fs), (Fs = null), e);
  return 0 != (8 & ms) || To(), null;
}
function bu() {
  for (; null !== Ts; ) {
    var e = Ts.alternate;
    Ys ||
      null === Qs ||
      (0 != (8 & Ts.flags)
        ? Dt(Ts, Qs) && (Ys = !0)
        : 13 === Ts.tag && ds(e, Ts) && Dt(Ts, Qs) && (Ys = !0));
    var t = Ts.flags;
    0 != (256 & t) && Jl(e, Ts),
      0 == (512 & t) ||
        Bs ||
        ((Bs = !0),
        Ao(97, function () {
          return vu(), null;
        })),
      (Ts = Ts.nextEffect);
  }
}
function vu() {
  if (90 !== Ls) {
    var e = 97 < Ls ? 97 : Ls;
    return (Ls = 90), Ro(e, ku);
  }
  return !1;
}
function yu(e, t) {
  Ms.push(t, e),
    Bs ||
      ((Bs = !0),
      Ao(97, function () {
        return vu(), null;
      }));
}
function xu(e, t) {
  Ds.push(t, e),
    Bs ||
      ((Bs = !0),
      Ao(97, function () {
        return vu(), null;
      }));
}
function ku() {
  if (null === Ns) return !1;
  var e = Ns;
  if (((Ns = null), 0 != (48 & ms))) throw Error(q(331));
  var t = ms;
  ms |= 32;
  var r = Ds;
  Ds = [];
  for (var n = 0; n < r.length; n += 2) {
    var a = r[n],
      o = r[n + 1],
      i = a.destroy;
    if (((a.destroy = void 0), 'function' == typeof i))
      try {
        i();
      } catch (s) {
        if (null === o) throw Error(q(330));
        Su(o, s);
      }
  }
  for (r = Ms, Ms = [], n = 0; n < r.length; n += 2) {
    (a = r[n]), (o = r[n + 1]);
    try {
      var l = a.create;
      a.destroy = l();
    } catch (s) {
      if (null === o) throw Error(q(330));
      Su(o, s);
    }
  }
  for (l = e.current.firstEffect; null !== l; )
    (e = l.nextEffect),
      (l.nextEffect = null),
      8 & l.flags && ((l.sibling = null), (l.stateNode = null)),
      (l = e);
  return (ms = t), To(), !0;
}
function wu(e, t, r) {
  Xo(e, (t = Xl(0, (t = ql(r, t)), 1))),
    (t = Xs()),
    null !== (e = Zs(e, 1)) && (Pr(e, 1, t), Js(e, t));
}
function Su(e, t) {
  if (3 === e.tag) wu(e, e, t);
  else
    for (var r = e.return; null !== r; ) {
      if (3 === r.tag) {
        wu(r, e, t);
        break;
      }
      if (1 === r.tag) {
        var n = r.stateNode;
        if (
          'function' == typeof r.type.getDerivedStateFromError ||
          ('function' == typeof n.componentDidCatch &&
            (null === Is || !Is.has(n)))
        ) {
          var a = Gl(r, (e = ql(t, e)), 1);
          if ((Xo(r, a), (a = Xs()), null !== (r = Zs(r, 1))))
            Pr(r, 1, a), Js(r, a);
          else if (
            'function' == typeof n.componentDidCatch &&
            (null === Is || !Is.has(n))
          )
            try {
              n.componentDidCatch(t, e);
            } catch (o) {}
          break;
        }
      }
      r = r.return;
    }
}
function _u(e, t, r) {
  var n = e.pingCache;
  null !== n && n.delete(t),
    (t = Xs()),
    (e.pingedLanes |= e.suspendedLanes & r),
    gs === e &&
      (vs & r) === r &&
      (4 === ks || (3 === ks && (62914560 & vs) === vs && 500 > zo() - Os)
        ? lu(e, 0)
        : (Cs |= r)),
    Js(e, t);
}
function Eu(e, t) {
  var r = e.stateNode;
  null !== r && r.delete(t),
    0 === (t = 0) &&
      (0 == (2 & (t = e.mode))
        ? (t = 1)
        : 0 == (4 & t)
        ? (t = 99 === Oo() ? 1 : 2)
        : (0 === Vs && (Vs = Ss),
          0 === (t = zr(62914560 & ~Vs)) && (t = 4194304))),
    (r = Xs()),
    null !== (e = Zs(e, t)) && (Pr(e, t, r), Js(e, r));
}
function Cu(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function zu(e, t, r, n) {
  return new Cu(e, t, r, n);
}
function Ou(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function Pu(e, t) {
  var r = e.alternate;
  return (
    null === r
      ? (((r = zu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.nextEffect = null),
        (r.firstEffect = null),
        (r.lastEffect = null)),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Ru(e, t, r, n, a, o) {
  var i = 2;
  if (((n = e), 'function' == typeof e)) Ou(e) && (i = 1);
  else if ('string' == typeof e) i = 5;
  else
    e: switch (e) {
      case ce:
        return Au(r.children, a, o, t);
      case we:
        (i = 8), (a |= 16);
        break;
      case de:
        (i = 8), (a |= 1);
        break;
      case fe:
        return (
          ((e = zu(12, r, t, 8 | a)).elementType = fe),
          (e.type = fe),
          (e.lanes = o),
          e
        );
      case ge:
        return (
          ((e = zu(13, r, t, a)).type = ge),
          (e.elementType = ge),
          (e.lanes = o),
          e
        );
      case be:
        return ((e = zu(19, r, t, a)).elementType = be), (e.lanes = o), e;
      case Se:
        return Tu(r, a, o, t);
      case _e:
        return ((e = zu(24, r, t, a)).elementType = _e), (e.lanes = o), e;
      default:
        if ('object' == typeof e && null !== e)
          switch (e.$$typeof) {
            case pe:
              i = 10;
              break e;
            case he:
              i = 9;
              break e;
            case me:
              i = 11;
              break e;
            case ve:
              i = 14;
              break e;
            case ye:
              (i = 16), (n = null);
              break e;
            case xe:
              i = 22;
              break e;
          }
        throw Error(q(130, null == e ? e : typeof e, ''));
    }
  return ((t = zu(i, r, t, a)).elementType = e), (t.type = n), (t.lanes = o), t;
}
function Au(e, t, r, n) {
  return ((e = zu(7, e, n, t)).lanes = r), e;
}
function Tu(e, t, r, n) {
  return ((e = zu(23, e, n, t)).elementType = Se), (e.lanes = r), e;
}
function ju(e, t, r) {
  return ((e = zu(6, e, null, t)).lanes = r), e;
}
function Fu(e, t, r) {
  return (
    ((t = zu(4, null !== e.children ? e.children : [], e.key, t)).lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Iu(e, t, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = r),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Or(0)),
    (this.expirationTimes = Or(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Or(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function Bu(e, t, r) {
  var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: ue,
    key: null == n ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Nu(e, t, r, n) {
  var a = t.current,
    o = Xs(),
    i = Gs(a);
  e: if (r) {
    t: {
      if (Bt((r = r._reactInternals)) !== r || 1 !== r.tag) throw Error(q(170));
      var l = r;
      do {
        switch (l.tag) {
          case 3:
            l = l.stateNode.context;
            break t;
          case 1:
            if (eo(l.type)) {
              l = l.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        l = l.return;
      } while (null !== l);
      throw Error(q(171));
    }
    if (1 === r.tag) {
      var s = r.type;
      if (eo(s)) {
        r = no(r, s, l);
        break e;
      }
    }
    r = l;
  } else r = Xa;
  return (
    null === t.context ? (t.context = r) : (t.pendingContext = r),
    ((t = Yo(o, i)).payload = { element: e }),
    null !== (n = void 0 === n ? null : n) && (t.callback = n),
    Xo(a, t),
    Ks(a, i, o),
    i
  );
}
function Lu(e) {
  if (!(e = e.current).child) return null;
  switch (e.child.tag) {
    case 5:
    default:
      return e.child.stateNode;
  }
}
function Mu(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var r = e.retryLane;
    e.retryLane = 0 !== r && r < t ? r : t;
  }
}
function Du(e, t) {
  Mu(e, t), (e = e.alternate) && Mu(e, t);
}
function Wu(e, t, r) {
  var n =
    (null != r &&
      null != r.hydrationOptions &&
      r.hydrationOptions.mutableSources) ||
    null;
  if (
    ((r = new Iu(e, t, null != r && !0 === r.hydrate)),
    (t = zu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
    (r.current = t),
    (t.stateNode = r),
    qo(t),
    (e[Na] = r.current),
    ma(8 === e.nodeType ? e.parentNode : e),
    n)
  )
    for (e = 0; e < n.length; e++) {
      var a = (t = n[e])._getVersion;
      (a = a(t._source)),
        null == r.mutableSourceEagerHydrationData
          ? (r.mutableSourceEagerHydrationData = [t, a])
          : r.mutableSourceEagerHydrationData.push(t, a);
    }
  this._internalRoot = r;
}
function Hu(e) {
  return !(
    !e ||
    (1 !== e.nodeType &&
      9 !== e.nodeType &&
      11 !== e.nodeType &&
      (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
  );
}
function $u(e, t, r, n, a) {
  var o = r._reactRootContainer;
  if (o) {
    var i = o._internalRoot;
    if ('function' == typeof a) {
      var l = a;
      a = function () {
        var e = Lu(i);
        l.call(e);
      };
    }
    Nu(t, i, e, a);
  } else {
    if (
      ((o = r._reactRootContainer =
        (function (e, t) {
          if (
            (t ||
              (t = !(
                !(t = e
                  ? 9 === e.nodeType
                    ? e.documentElement
                    : e.firstChild
                  : null) ||
                1 !== t.nodeType ||
                !t.hasAttribute('data-reactroot')
              )),
            !t)
          )
            for (var r; (r = e.lastChild); ) e.removeChild(r);
          return new Wu(e, 0, t ? { hydrate: !0 } : void 0);
        })(r, n)),
      (i = o._internalRoot),
      'function' == typeof a)
    ) {
      var s = a;
      a = function () {
        var e = Lu(i);
        s.call(e);
      };
    }
    au(function () {
      Nu(t, i, e, a);
    });
  }
  return Lu(i);
}
function Uu(e, t) {
  var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!Hu(t)) throw Error(q(200));
  return Bu(e, t, null, r);
}
(As = function (e, t, r) {
  var n = t.lanes;
  if (null !== e)
    if (e.memoizedProps !== t.pendingProps || Ka.current) xl = !0;
    else {
      if (0 == (r & n)) {
        switch (((xl = !1), t.tag)) {
          case 3:
            Rl(t), Ai();
            break;
          case 5:
            yi(t);
            break;
          case 1:
            eo(t.type) && ao(t);
            break;
          case 4:
            bi(t, t.stateNode.containerInfo);
            break;
          case 10:
            n = t.memoizedProps.value;
            var a = t.type._context;
            Ya(Bo, a._currentValue), (a._currentValue = n);
            break;
          case 13:
            if (null !== t.memoizedState)
              return 0 != (r & t.child.childLanes)
                ? Il(e, t, r)
                : (Ya(ki, 1 & ki.current),
                  null !== (t = Hl(e, t, r)) ? t.sibling : null);
            Ya(ki, 1 & ki.current);
            break;
          case 19:
            if (((n = 0 != (r & t.childLanes)), 0 != (64 & e.flags))) {
              if (n) return Wl(e, t, r);
              t.flags |= 64;
            }
            if (
              (null !== (a = t.memoizedState) &&
                ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
              Ya(ki, ki.current),
              n)
            )
              break;
            return null;
          case 23:
          case 24:
            return (t.lanes = 0), El(e, t, r);
        }
        return Hl(e, t, r);
      }
      xl = 0 != (16384 & e.flags);
    }
  else xl = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((n = t.type),
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (a = Ja(t, Ga.current)),
        $o(t, r),
        (a = Ui(null, t, n, e, a, r)),
        (t.flags |= 1),
        'object' == typeof a &&
          null !== a &&
          'function' == typeof a.render &&
          void 0 === a.$$typeof)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), eo(n))
        ) {
          var o = !0;
          ao(t);
        } else o = !1;
        (t.memoizedState =
          null !== a.state && void 0 !== a.state ? a.state : null),
          qo(t);
        var i = n.getDerivedStateFromProps;
        'function' == typeof i && ei(t, n, i, e),
          (a.updater = ti),
          (t.stateNode = a),
          (a._reactInternals = t),
          oi(t, n, e, r),
          (t = Pl(null, t, n, !0, o, r));
      } else (t.tag = 0), kl(null, t, a, r), (t = t.child);
      return t;
    case 16:
      a = t.elementType;
      e: {
        switch (
          (null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (a = (o = a._init)(a._payload)),
          (t.type = a),
          (o = t.tag =
            (function (e) {
              if ('function' == typeof e) return Ou(e) ? 1 : 0;
              if (null != e) {
                if ((e = e.$$typeof) === me) return 11;
                if (e === ve) return 14;
              }
              return 2;
            })(a)),
          (e = Io(a, e)),
          o)
        ) {
          case 0:
            t = zl(null, t, a, e, r);
            break e;
          case 1:
            t = Ol(null, t, a, e, r);
            break e;
          case 11:
            t = wl(null, t, a, e, r);
            break e;
          case 14:
            t = Sl(null, t, a, Io(a.type, e), n, r);
            break e;
        }
        throw Error(q(306, a, ''));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (a = t.pendingProps),
        zl(e, t, n, (a = t.elementType === n ? a : Io(n, a)), r)
      );
    case 1:
      return (
        (n = t.type),
        (a = t.pendingProps),
        Ol(e, t, n, (a = t.elementType === n ? a : Io(n, a)), r)
      );
    case 3:
      if ((Rl(t), (n = t.updateQueue), null === e || null === n))
        throw Error(q(282));
      if (
        ((n = t.pendingProps),
        (a = null !== (a = t.memoizedState) ? a.element : null),
        Qo(e, t),
        Ko(t, n, null, r),
        (n = t.memoizedState.element) === a)
      )
        Ai(), (t = Hl(e, t, r));
      else {
        if (
          ((o = (a = t.stateNode).hydrate) &&
            ((_i = Aa(t.stateNode.containerInfo.firstChild)),
            (Si = t),
            (o = Ei = !0)),
          o)
        ) {
          if (null != (e = a.mutableSourceEagerHydrationData))
            for (a = 0; a < e.length; a += 2)
              ((o = e[a])._workInProgressVersionPrimary = e[a + 1]), Ti.push(o);
          for (r = di(t, null, n, r), t.child = r; r; )
            (r.flags = (-3 & r.flags) | 1024), (r = r.sibling);
        } else kl(e, t, n, r), Ai();
        t = t.child;
      }
      return t;
    case 5:
      return (
        yi(t),
        null === e && Oi(t),
        (n = t.type),
        (a = t.pendingProps),
        (o = null !== e ? e.memoizedProps : null),
        (i = a.children),
        za(n, a) ? (i = null) : null !== o && za(n, o) && (t.flags |= 16),
        Cl(e, t),
        kl(e, t, i, r),
        t.child
      );
    case 6:
      return null === e && Oi(t), null;
    case 13:
      return Il(e, t, r);
    case 4:
      return (
        bi(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        null === e ? (t.child = ci(t, null, n, r)) : kl(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (a = t.pendingProps),
        wl(e, t, n, (a = t.elementType === n ? a : Io(n, a)), r)
      );
    case 7:
      return kl(e, t, t.pendingProps, r), t.child;
    case 8:
    case 12:
      return kl(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        (n = t.type._context),
          (a = t.pendingProps),
          (i = t.memoizedProps),
          (o = a.value);
        var l = t.type._context;
        if ((Ya(Bo, l._currentValue), (l._currentValue = o), null !== i))
          if (
            ((l = i.value),
            0 ===
              (o = Qn(l, o)
                ? 0
                : 0 |
                  ('function' == typeof n._calculateChangedBits
                    ? n._calculateChangedBits(l, o)
                    : 1073741823)))
          ) {
            if (i.children === a.children && !Ka.current) {
              t = Hl(e, t, r);
              break e;
            }
          } else
            for (null !== (l = t.child) && (l.return = t); null !== l; ) {
              var s = l.dependencies;
              if (null !== s) {
                i = l.child;
                for (var u = s.firstContext; null !== u; ) {
                  if (u.context === n && 0 != (u.observedBits & o)) {
                    1 === l.tag && (((u = Yo(-1, r & -r)).tag = 2), Xo(l, u)),
                      (l.lanes |= r),
                      null !== (u = l.alternate) && (u.lanes |= r),
                      Ho(l.return, r),
                      (s.lanes |= r);
                    break;
                  }
                  u = u.next;
                }
              } else i = 10 === l.tag && l.type === t.type ? null : l.child;
              if (null !== i) i.return = l;
              else
                for (i = l; null !== i; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (null !== (l = i.sibling)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        kl(e, t, a.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (n = (o = t.pendingProps).children),
        $o(t, r),
        (n = n((a = Uo(a, o.unstable_observedBits)))),
        (t.flags |= 1),
        kl(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (o = Io((a = t.type), t.pendingProps)),
        Sl(e, t, a, (o = Io(a.type, o)), n, r)
      );
    case 15:
      return _l(e, t, t.type, t.pendingProps, n, r);
    case 17:
      return (
        (n = t.type),
        (a = t.pendingProps),
        (a = t.elementType === n ? a : Io(n, a)),
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        eo(n) ? ((e = !0), ao(t)) : (e = !1),
        $o(t, r),
        ni(t, n, a),
        oi(t, n, a, r),
        Pl(null, t, n, !0, e, r)
      );
    case 19:
      return Wl(e, t, r);
    case 23:
    case 24:
      return El(e, t, r);
  }
  throw Error(q(156, t.tag));
}),
  (Wu.prototype.render = function (e) {
    Nu(e, this._internalRoot, null, null);
  }),
  (Wu.prototype.unmount = function () {
    var e = this._internalRoot,
      t = e.containerInfo;
    Nu(null, e, null, function () {
      t[Na] = null;
    });
  }),
  (Wt = function (e) {
    13 === e.tag && (Ks(e, 4, Xs()), Du(e, 4));
  }),
  (Ht = function (e) {
    13 === e.tag && (Ks(e, 67108864, Xs()), Du(e, 67108864));
  }),
  ($t = function (e) {
    if (13 === e.tag) {
      var t = Xs(),
        r = Gs(e);
      Ks(e, r, t), Du(e, r);
    }
  }),
  (Ut = function (e, t) {
    return t();
  }),
  (pt = function (e, t, r) {
    switch (t) {
      case 'input':
        if ((He(e, r), (t = r.name), 'radio' === r.type && null != t)) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (
            r = r.querySelectorAll(
              'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
            ),
              t = 0;
            t < r.length;
            t++
          ) {
            var n = r[t];
            if (n !== e && n.form === e.form) {
              var a = Ha(n);
              if (!a) throw Error(q(90));
              Ne(n), He(n, a);
            }
          }
        }
        break;
      case 'textarea':
        Xe(e, r);
        break;
      case 'select':
        null != (t = r.value) && qe(e, !!r.multiple, t, !1);
    }
  }),
  (yt = nu),
  (xt = function (e, t, r, n, a) {
    var o = ms;
    ms |= 4;
    try {
      return Ro(98, e.bind(null, t, r, n, a));
    } finally {
      0 === (ms = o) && (Rs(), To());
    }
  }),
  (kt = function () {
    0 == (49 & ms) &&
      ((function () {
        if (null !== Ws) {
          var e = Ws;
          (Ws = null),
            e.forEach(function (e) {
              (e.expiredLanes |= 24 & e.pendingLanes), Js(e, zo());
            });
        }
        To();
      })(),
      vu());
  }),
  (wt = function (e, t) {
    var r = ms;
    ms |= 2;
    try {
      return e(t);
    } finally {
      0 === (ms = r) && (Rs(), To());
    }
  });
var Vu = { Events: [Da, Wa, Ha, bt, vt, vu, { current: !1 }] },
  qu = {
    findFiberByHostInstance: Ma,
    bundleType: 0,
    version: '17.0.2',
    rendererPackageName: 'react-dom',
  },
  Qu = {
    bundleType: qu.bundleType,
    version: qu.version,
    rendererPackageName: qu.rendererPackageName,
    rendererConfig: qu.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: le.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return null === (e = Mt(e)) ? null : e.stateNode;
    },
    findFiberByHostInstance:
      qu.findFiberByHostInstance ||
      function () {
        return null;
      },
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var Yu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yu.isDisabled && Yu.supportsFiber)
    try {
      (io = Yu.inject(Qu)), (lo = Yu);
    } catch (rt) {}
}
(D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vu),
  (D.createPortal = Uu),
  (D.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) {
      if ('function' == typeof e.render) throw Error(q(188));
      throw Error(q(268, Object.keys(e)));
    }
    return (e = null === (e = Mt(t)) ? null : e.stateNode);
  }),
  (D.flushSync = function (e, t) {
    var r = ms;
    if (0 != (48 & r)) return e(t);
    ms |= 1;
    try {
      if (e) return Ro(99, e.bind(null, t));
    } finally {
      (ms = r), To();
    }
  }),
  (D.hydrate = function (e, t, r) {
    if (!Hu(t)) throw Error(q(200));
    return $u(null, e, t, !0, r);
  }),
  (D.render = function (e, t, r) {
    if (!Hu(t)) throw Error(q(200));
    return $u(null, e, t, !1, r);
  }),
  (D.unmountComponentAtNode = function (e) {
    if (!Hu(e)) throw Error(q(40));
    return (
      !!e._reactRootContainer &&
      (au(function () {
        $u(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Na] = null);
        });
      }),
      !0)
    );
  }),
  (D.unstable_batchedUpdates = nu),
  (D.unstable_createPortal = function (e, t) {
    return Uu(
      e,
      t,
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
    );
  }),
  (D.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
    if (!Hu(r)) throw Error(q(200));
    if (null == e || void 0 === e._reactInternals) throw Error(q(38));
    return $u(e, t, r, !1, n);
  }),
  (D.version = '17.0.2'),
  (function e() {
    if (
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  })(),
  (M.exports = D);
var Xu = M.exports;
var Gu = (function () {
    function e(e) {
      var t = this;
      (this._insertTag = function (e) {
        var r;
        (r =
          0 === t.tags.length
            ? t.prepend
              ? t.container.firstChild
              : t.before
            : t.tags[t.tags.length - 1].nextSibling),
          t.container.insertBefore(e, r),
          t.tags.push(e);
      }),
        (this.isSpeedy = void 0 === e.speedy || e.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = e.nonce),
        (this.key = e.key),
        (this.container = e.container),
        (this.prepend = e.prepend),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (e) {
        e.forEach(this._insertTag);
      }),
      (t.insert = function (e) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
          this._insertTag(
            (function (e) {
              var t = document.createElement('style');
              return (
                t.setAttribute('data-emotion', e.key),
                void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                t.appendChild(document.createTextNode('')),
                t.setAttribute('data-s', ''),
                t
              );
            })(this),
          );
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var r = (function (e) {
            if (e.sheet) return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++)
              if (document.styleSheets[t].ownerNode === e)
                return document.styleSheets[t];
          })(t);
          try {
            r.insertRule(e, r.cssRules.length);
          } catch (n) {}
        } else t.appendChild(document.createTextNode(e));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (e) {
          return e.parentNode.removeChild(e);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ku = '-ms-',
  Zu = '-moz-',
  Ju = '-webkit-',
  ec = Math.abs,
  tc = String.fromCharCode;
function rc(e) {
  return e.trim();
}
function nc(e, t, r) {
  return e.replace(t, r);
}
function ac(e, t) {
  return e.indexOf(t);
}
function oc(e, t) {
  return 0 | e.charCodeAt(t);
}
function ic(e, t, r) {
  return e.slice(t, r);
}
function lc(e) {
  return e.length;
}
function sc(e) {
  return e.length;
}
function uc(e, t) {
  return t.push(e), e;
}
var cc = 1,
  dc = 1,
  fc = 0,
  pc = 0,
  hc = 0,
  mc = '';
function gc(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: cc,
    column: dc,
    length: i,
    return: '',
  };
}
function bc(e, t, r) {
  return gc(e, t.root, t.parent, r, t.props, t.children, 0);
}
function vc() {
  return (
    (hc = pc < fc ? oc(mc, pc++) : 0), dc++, 10 === hc && ((dc = 1), cc++), hc
  );
}
function yc() {
  return oc(mc, pc);
}
function xc() {
  return pc;
}
function kc(e, t) {
  return ic(mc, e, t);
}
function wc(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Sc(e) {
  return (cc = dc = 1), (fc = lc((mc = e))), (pc = 0), [];
}
function _c(e) {
  return (mc = ''), e;
}
function Ec(e) {
  return rc(kc(pc - 1, Oc(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function Cc(e) {
  for (; (hc = yc()) && hc < 33; ) vc();
  return wc(e) > 2 || wc(hc) > 3 ? '' : ' ';
}
function zc(e, t) {
  for (
    ;
    --t &&
    vc() &&
    !(hc < 48 || hc > 102 || (hc > 57 && hc < 65) || (hc > 70 && hc < 97));

  );
  return kc(e, xc() + (t < 6 && 32 == yc() && 32 == vc()));
}
function Oc(e) {
  for (; vc(); )
    switch (hc) {
      case e:
        return pc;
      case 34:
      case 39:
        return Oc(34 === e || 39 === e ? e : hc);
      case 40:
        41 === e && Oc(e);
        break;
      case 92:
        vc();
    }
  return pc;
}
function Pc(e, t) {
  for (; vc() && e + hc !== 57 && (e + hc !== 84 || 47 !== yc()); );
  return '/*' + kc(t, pc - 1) + '*' + tc(47 === e ? e : vc());
}
function Rc(e) {
  for (; !wc(yc()); ) vc();
  return kc(e, pc);
}
function Ac(e) {
  return _c(Tc('', null, null, null, [''], (e = Sc(e)), 0, [0], e));
}
function Tc(e, t, r, n, a, o, i, l, s) {
  for (
    var u = 0,
      c = 0,
      d = i,
      f = 0,
      p = 0,
      h = 0,
      m = 1,
      g = 1,
      b = 1,
      v = 0,
      y = '',
      x = a,
      k = o,
      w = n,
      S = y;
    g;

  )
    switch (((h = v), (v = vc()))) {
      case 34:
      case 39:
      case 91:
      case 40:
        S += Ec(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Cc(h);
        break;
      case 92:
        S += zc(xc() - 1, 7);
        continue;
      case 47:
        switch (yc()) {
          case 42:
          case 47:
            uc(Fc(Pc(vc(), xc()), t, r), s);
            break;
          default:
            S += '/';
        }
        break;
      case 123 * m:
        l[u++] = lc(S) * b;
      case 125 * m:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            g = 0;
          case 59 + c:
            p > 0 &&
              lc(S) - d &&
              uc(
                p > 32
                  ? Ic(S + ';', n, r, d - 1)
                  : Ic(nc(S, ' ', '') + ';', n, r, d - 2),
                s,
              );
            break;
          case 59:
            S += ';';
          default:
            if (
              (uc((w = jc(S, t, r, u, c, a, l, y, (x = []), (k = []), d)), o),
              123 === v)
            )
              if (0 === c) Tc(S, t, w, w, x, o, d, l, k);
              else
                switch (f) {
                  case 100:
                  case 109:
                  case 115:
                    Tc(
                      e,
                      w,
                      w,
                      n && uc(jc(e, w, w, 0, 0, a, l, y, a, (x = []), d), k),
                      a,
                      k,
                      d,
                      l,
                      n ? x : k,
                    );
                    break;
                  default:
                    Tc(S, w, w, w, [''], k, d, l, k);
                }
        }
        (u = c = p = 0), (m = b = 1), (y = S = ''), (d = i);
        break;
      case 58:
        (d = 1 + lc(S)), (p = h);
      default:
        if (m < 1)
          if (123 == v) --m;
          else if (
            125 == v &&
            0 == m++ &&
            125 ==
              ((hc = pc > 0 ? oc(mc, --pc) : 0),
              dc--,
              10 === hc && ((dc = 1), cc--),
              hc)
          )
            continue;
        switch (((S += tc(v)), v * m)) {
          case 38:
            b = c > 0 ? 1 : ((S += '\f'), -1);
            break;
          case 44:
            (l[u++] = (lc(S) - 1) * b), (b = 1);
            break;
          case 64:
            45 === yc() && (S += Ec(vc())),
              (f = yc()),
              (c = lc((y = S += Rc(xc())))),
              v++;
            break;
          case 45:
            45 === h && 2 == lc(S) && (m = 0);
        }
    }
  return o;
}
function jc(e, t, r, n, a, o, i, l, s, u, c) {
  for (
    var d = a - 1, f = 0 === a ? o : [''], p = sc(f), h = 0, m = 0, g = 0;
    h < n;
    ++h
  )
    for (var b = 0, v = ic(e, d + 1, (d = ec((m = i[h])))), y = e; b < p; ++b)
      (y = rc(m > 0 ? f[b] + ' ' + v : nc(v, /&\f/g, f[b]))) && (s[g++] = y);
  return gc(e, t, r, 0 === a ? 'rule' : l, s, u, c);
}
function Fc(e, t, r) {
  return gc(e, t, r, 'comm', tc(hc), ic(e, 2, -2), 0);
}
function Ic(e, t, r, n) {
  return gc(e, t, r, 'decl', ic(e, 0, n), ic(e, n + 1, -1), n);
}
function Bc(e, t) {
  switch (
    (function (e, t) {
      return (
        (((((((t << 2) ^ oc(e, 0)) << 2) ^ oc(e, 1)) << 2) ^ oc(e, 2)) << 2) ^
        oc(e, 3)
      );
    })(e, t)
  ) {
    case 5103:
      return Ju + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ju + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ju + e + Zu + e + Ku + e + e;
    case 6828:
    case 4268:
      return Ju + e + Ku + e + e;
    case 6165:
      return Ju + e + Ku + 'flex-' + e + e;
    case 5187:
      return (
        Ju + e + nc(e, /(\w+).+(:[^]+)/, '-webkit-box-$1$2-ms-flex-$1$2') + e
      );
    case 5443:
      return Ju + e + Ku + 'flex-item-' + nc(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        Ju +
        e +
        Ku +
        'flex-line-pack' +
        nc(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return Ju + e + Ku + nc(e, 'shrink', 'negative') + e;
    case 5292:
      return Ju + e + Ku + nc(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        Ju +
        'box-' +
        nc(e, '-grow', '') +
        Ju +
        e +
        Ku +
        nc(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return Ju + nc(e, /([^-])(transform)/g, '$1-webkit-$2') + e;
    case 6187:
      return (
        nc(
          nc(nc(e, /(zoom-|grab)/, Ju + '$1'), /(image-set)/, Ju + '$1'),
          e,
          '',
        ) + e
      );
    case 5495:
    case 3959:
      return nc(e, /(image-set\([^]*)/, Ju + '$1$`$1');
    case 4968:
      return (
        nc(
          nc(e, /(.+:)(flex-)?(.*)/, '-webkit-box-pack:$3-ms-flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        Ju +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return nc(e, /(.+)-inline(.+)/, Ju + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (lc(e) - 1 - t > 6)
        switch (oc(e, t + 1)) {
          case 109:
            if (45 !== oc(e, t + 4)) break;
          case 102:
            return (
              nc(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1-webkit-$2-$3$1' +
                  Zu +
                  (108 == oc(e, t + 3) ? '$3' : '$2-$3'),
              ) + e
            );
          case 115:
            return ~ac(e, 'stretch')
              ? Bc(nc(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (115 !== oc(e, t + 1)) break;
    case 6444:
      switch (oc(e, lc(e) - 3 - (~ac(e, '!important') && 10))) {
        case 107:
          return nc(e, ':', ':' + Ju) + e;
        case 101:
          return (
            nc(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Ju +
                (45 === oc(e, 14) ? 'inline-' : '') +
                'box$3$1' +
                Ju +
                '$2$3$1' +
                Ku +
                '$2box$3',
            ) + e
          );
      }
      break;
    case 5936:
      switch (oc(e, t + 11)) {
        case 114:
          return Ju + e + Ku + nc(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Ju + e + Ku + nc(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Ju + e + Ku + nc(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Ju + e + Ku + e + e;
  }
  return e;
}
function Nc(e, t) {
  for (var r = '', n = sc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || '';
  return r;
}
function Lc(e, t, r, n) {
  switch (e.type) {
    case '@import':
    case 'decl':
      return (e.return = e.return || e.value);
    case 'comm':
      return '';
    case 'rule':
      e.value = e.props.join(',');
  }
  return lc((r = Nc(e.children, n)))
    ? (e.return = e.value + '{' + r + '}')
    : '';
}
var Mc = function (e) {
  var t = new WeakMap();
  return function (r) {
    if (t.has(r)) return t.get(r);
    var n = e(r);
    return t.set(r, n), n;
  };
};
function Dc(e) {
  var t = Object.create(null);
  return function (r) {
    return void 0 === t[r] && (t[r] = e(r)), t[r];
  };
}
var Wc = function (e, t) {
    return _c(
      (function (e, t) {
        var r = -1,
          n = 44;
        do {
          switch (wc(n)) {
            case 0:
              38 === n && 12 === yc() && (t[r] = 1), (e[r] += Rc(pc - 1));
              break;
            case 2:
              e[r] += Ec(n);
              break;
            case 4:
              if (44 === n) {
                (e[++r] = 58 === yc() ? '&\f' : ''), (t[r] = e[r].length);
                break;
              }
            default:
              e[r] += tc(n);
          }
        } while ((n = vc()));
        return e;
      })(Sc(e), t),
    );
  },
  Hc = new WeakMap(),
  $c = function (e) {
    if ('rule' === e.type && e.parent && e.length) {
      for (
        var t = e.value,
          r = e.parent,
          n = e.column === r.column && e.line === r.line;
        'rule' !== r.type;

      )
        if (!(r = r.parent)) return;
      if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Hc.get(r)) && !n) {
        Hc.set(e, !0);
        for (
          var a = [], o = Wc(t, a), i = r.props, l = 0, s = 0;
          l < o.length;
          l++
        )
          for (var u = 0; u < i.length; u++, s++)
            e.props[s] = a[l] ? o[l].replace(/&\f/g, i[u]) : i[u] + ' ' + o[l];
      }
    }
  },
  Uc = function (e) {
    if ('decl' === e.type) {
      var t = e.value;
      108 === t.charCodeAt(0) &&
        98 === t.charCodeAt(2) &&
        ((e.return = ''), (e.value = ''));
    }
  },
  Vc = [
    function (e, t, r, n) {
      if (!e.return)
        switch (e.type) {
          case 'decl':
            e.return = Bc(e.value, e.length);
            break;
          case '@keyframes':
            return Nc([bc(nc(e.value, '@', '@' + Ju), e, '')], n);
          case 'rule':
            if (e.length)
              return (function (e, t) {
                return e.map(t).join('');
              })(e.props, function (t) {
                switch (
                  (function (e, t) {
                    return (e = t.exec(e)) ? e[0] : e;
                  })(t, /(::plac\w+|:read-\w+)/)
                ) {
                  case ':read-only':
                  case ':read-write':
                    return Nc([bc(nc(t, /:(read-\w+)/, ':-moz-$1'), e, '')], n);
                  case '::placeholder':
                    return Nc(
                      [
                        bc(nc(t, /:(plac\w+)/, ':-webkit-input-$1'), e, ''),
                        bc(nc(t, /:(plac\w+)/, ':-moz-$1'), e, ''),
                        bc(nc(t, /:(plac\w+)/, Ku + 'input-$1'), e, ''),
                      ],
                      n,
                    );
                }
                return '';
              });
        }
    },
  ],
  qc = function (e) {
    var t = e.key;
    if ('css' === t) {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (e) {
        -1 !== e.getAttribute('data-emotion').indexOf(' ') &&
          (document.head.appendChild(e), e.setAttribute('data-s', ''));
      });
    }
    var n,
      a,
      o = e.stylisPlugins || Vc,
      i = {},
      l = [];
    (n = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (e) {
          for (
            var t = e.getAttribute('data-emotion').split(' '), r = 1;
            r < t.length;
            r++
          )
            i[t[r]] = !0;
          l.push(e);
        },
      );
    var s,
      u,
      c,
      d,
      f = [
        Lc,
        ((d = function (e) {
          s.insert(e);
        }),
        function (e) {
          e.root || ((e = e.return) && d(e));
        }),
      ],
      p =
        ((u = [$c, Uc].concat(o, f)),
        (c = sc(u)),
        function (e, t, r, n) {
          for (var a = '', o = 0; o < c; o++) a += u[o](e, t, r, n) || '';
          return a;
        });
    a = function (e, t, r, n) {
      (s = r),
        Nc(Ac(e ? e + '{' + t.styles + '}' : t.styles), p),
        n && (h.inserted[t.name] = !0);
    };
    var h = {
      key: t,
      sheet: new Gu({
        key: t,
        container: n,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
      }),
      nonce: e.nonce,
      inserted: i,
      registered: {},
      insert: a,
    };
    return h.sheet.hydrate(l), h;
  };
function Qc() {
  return (Qc =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Yc = { exports: {} },
  Xc = {},
  Gc = 'function' == typeof Symbol && Symbol.for,
  Kc = Gc ? Symbol.for('react.element') : 60103,
  Zc = Gc ? Symbol.for('react.portal') : 60106,
  Jc = Gc ? Symbol.for('react.fragment') : 60107,
  ed = Gc ? Symbol.for('react.strict_mode') : 60108,
  td = Gc ? Symbol.for('react.profiler') : 60114,
  rd = Gc ? Symbol.for('react.provider') : 60109,
  nd = Gc ? Symbol.for('react.context') : 60110,
  ad = Gc ? Symbol.for('react.async_mode') : 60111,
  od = Gc ? Symbol.for('react.concurrent_mode') : 60111,
  id = Gc ? Symbol.for('react.forward_ref') : 60112,
  ld = Gc ? Symbol.for('react.suspense') : 60113,
  sd = Gc ? Symbol.for('react.suspense_list') : 60120,
  ud = Gc ? Symbol.for('react.memo') : 60115,
  cd = Gc ? Symbol.for('react.lazy') : 60116,
  dd = Gc ? Symbol.for('react.block') : 60121,
  fd = Gc ? Symbol.for('react.fundamental') : 60117,
  pd = Gc ? Symbol.for('react.responder') : 60118,
  hd = Gc ? Symbol.for('react.scope') : 60119;
function md(e) {
  if ('object' == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case Kc:
        switch ((e = e.type)) {
          case ad:
          case od:
          case Jc:
          case td:
          case ed:
          case ld:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case nd:
              case id:
              case cd:
              case ud:
              case rd:
                return e;
              default:
                return t;
            }
        }
      case Zc:
        return t;
    }
  }
}
function gd(e) {
  return md(e) === od;
}
(Xc.AsyncMode = ad),
  (Xc.ConcurrentMode = od),
  (Xc.ContextConsumer = nd),
  (Xc.ContextProvider = rd),
  (Xc.Element = Kc),
  (Xc.ForwardRef = id),
  (Xc.Fragment = Jc),
  (Xc.Lazy = cd),
  (Xc.Memo = ud),
  (Xc.Portal = Zc),
  (Xc.Profiler = td),
  (Xc.StrictMode = ed),
  (Xc.Suspense = ld),
  (Xc.isAsyncMode = function (e) {
    return gd(e) || md(e) === ad;
  }),
  (Xc.isConcurrentMode = gd),
  (Xc.isContextConsumer = function (e) {
    return md(e) === nd;
  }),
  (Xc.isContextProvider = function (e) {
    return md(e) === rd;
  }),
  (Xc.isElement = function (e) {
    return 'object' == typeof e && null !== e && e.$$typeof === Kc;
  }),
  (Xc.isForwardRef = function (e) {
    return md(e) === id;
  }),
  (Xc.isFragment = function (e) {
    return md(e) === Jc;
  }),
  (Xc.isLazy = function (e) {
    return md(e) === cd;
  }),
  (Xc.isMemo = function (e) {
    return md(e) === ud;
  }),
  (Xc.isPortal = function (e) {
    return md(e) === Zc;
  }),
  (Xc.isProfiler = function (e) {
    return md(e) === td;
  }),
  (Xc.isStrictMode = function (e) {
    return md(e) === ed;
  }),
  (Xc.isSuspense = function (e) {
    return md(e) === ld;
  }),
  (Xc.isValidElementType = function (e) {
    return (
      'string' == typeof e ||
      'function' == typeof e ||
      e === Jc ||
      e === od ||
      e === td ||
      e === ed ||
      e === ld ||
      e === sd ||
      ('object' == typeof e &&
        null !== e &&
        (e.$$typeof === cd ||
          e.$$typeof === ud ||
          e.$$typeof === rd ||
          e.$$typeof === nd ||
          e.$$typeof === id ||
          e.$$typeof === fd ||
          e.$$typeof === pd ||
          e.$$typeof === hd ||
          e.$$typeof === dd))
    );
  }),
  (Xc.typeOf = md),
  (Yc.exports = Xc);
var bd = Yc.exports,
  vd = {};
(vd[bd.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
}),
  (vd[bd.Memo] = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  });
function yd(e, t, r) {
  var n = '';
  return (
    r.split(' ').forEach(function (r) {
      void 0 !== e[r] ? t.push(e[r] + ';') : (n += r + ' ');
    }),
    n
  );
}
var xd = function (e, t, r) {
  var n = e.key + '-' + t.name;
  if (
    (!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles),
    void 0 === e.inserted[t.name])
  ) {
    var a = t;
    do {
      e.insert(t === a ? '.' + n : '', a, e.sheet, !0), (a = a.next);
    } while (void 0 !== a);
  }
};
var kd = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  wd = /[A-Z]|^ms/g,
  Sd = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  _d = function (e) {
    return 45 === e.charCodeAt(1);
  },
  Ed = function (e) {
    return null != e && 'boolean' != typeof e;
  },
  Cd = Dc(function (e) {
    return _d(e) ? e : e.replace(wd, '-$&').toLowerCase();
  }),
  zd = function (e, t) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if ('string' == typeof t)
          return t.replace(Sd, function (e, t, r) {
            return (Pd = { name: t, styles: r, next: Pd }), t;
          });
    }
    return 1 === kd[e] || _d(e) || 'number' != typeof t || 0 === t
      ? t
      : t + 'px';
  };
function Od(e, t, r) {
  if (null == r) return '';
  if (void 0 !== r.__emotion_styles) return r;
  switch (typeof r) {
    case 'boolean':
      return '';
    case 'object':
      if (1 === r.anim)
        return (Pd = { name: r.name, styles: r.styles, next: Pd }), r.name;
      if (void 0 !== r.styles) {
        var n = r.next;
        if (void 0 !== n)
          for (; void 0 !== n; )
            (Pd = { name: n.name, styles: n.styles, next: Pd }), (n = n.next);
        return r.styles + ';';
      }
      return (function (e, t, r) {
        var n = '';
        if (Array.isArray(r))
          for (var a = 0; a < r.length; a++) n += Od(e, t, r[a]) + ';';
        else
          for (var o in r) {
            var i = r[o];
            if ('object' != typeof i)
              null != t && void 0 !== t[i]
                ? (n += o + '{' + t[i] + '}')
                : Ed(i) && (n += Cd(o) + ':' + zd(o, i) + ';');
            else if (
              !Array.isArray(i) ||
              'string' != typeof i[0] ||
              (null != t && void 0 !== t[i[0]])
            ) {
              var l = Od(e, t, i);
              switch (o) {
                case 'animation':
                case 'animationName':
                  n += Cd(o) + ':' + l + ';';
                  break;
                default:
                  n += o + '{' + l + '}';
              }
            } else
              for (var s = 0; s < i.length; s++)
                Ed(i[s]) && (n += Cd(o) + ':' + zd(o, i[s]) + ';');
          }
        return n;
      })(e, t, r);
    case 'function':
      if (void 0 !== e) {
        var a = Pd,
          o = r(e);
        return (Pd = a), Od(e, t, o);
      }
  }
  if (null == t) return r;
  var i = t[r];
  return void 0 !== i ? i : r;
}
var Pd,
  Rd = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ad = function (e, t, r) {
    if (
      1 === e.length &&
      'object' == typeof e[0] &&
      null !== e[0] &&
      void 0 !== e[0].styles
    )
      return e[0];
    var n = !0,
      a = '';
    Pd = void 0;
    var o = e[0];
    null == o || void 0 === o.raw
      ? ((n = !1), (a += Od(r, t, o)))
      : (a += o[0]);
    for (var i = 1; i < e.length; i++) (a += Od(r, t, e[i])), n && (a += o[i]);
    Rd.lastIndex = 0;
    for (var l, s = ''; null !== (l = Rd.exec(a)); ) s += '-' + l[1];
    return {
      name:
        (function (e) {
          for (var t, r = 0, n = 0, a = e.length; a >= 4; ++n, a -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(n)) |
                    ((255 & e.charCodeAt(++n)) << 8) |
                    ((255 & e.charCodeAt(++n)) << 16) |
                    ((255 & e.charCodeAt(++n)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (r =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)));
          switch (a) {
            case 3:
              r ^= (255 & e.charCodeAt(n + 2)) << 16;
            case 2:
              r ^= (255 & e.charCodeAt(n + 1)) << 8;
            case 1:
              r =
                1540483477 * (65535 & (r ^= 255 & e.charCodeAt(n))) +
                ((59797 * (r >>> 16)) << 16);
          }
          return (
            ((r =
              1540483477 * (65535 & (r ^= r >>> 13)) +
              ((59797 * (r >>> 16)) << 16)) ^
              (r >>> 15)) >>>
            0
          ).toString(36);
        })(a) + s,
      styles: a,
      next: Pd,
    };
  },
  Td = t.exports.createContext(
    'undefined' != typeof HTMLElement ? qc({ key: 'css' }) : null,
  );
Td.Provider;
var jd = function (e) {
    return t.exports.forwardRef(function (r, n) {
      var a = t.exports.useContext(Td);
      return e(r, a, n);
    });
  },
  Fd = t.exports.createContext({}),
  Id = Mc(function (e) {
    return Mc(function (t) {
      return (function (e, t) {
        return 'function' == typeof t ? t(e) : Qc({}, e, t);
      })(e, t);
    });
  }),
  Bd = function (e) {
    var r = t.exports.useContext(Fd);
    return (
      e.theme !== r && (r = Id(r)(e.theme)),
      t.exports.createElement(Fd.Provider, { value: r }, e.children)
    );
  },
  Nd = jd(function (e, r) {
    var n = e.styles,
      a = Ad([n], void 0, t.exports.useContext(Fd)),
      o = t.exports.useRef();
    return (
      t.exports.useLayoutEffect(
        function () {
          var e = r.key + '-global',
            t = new Gu({
              key: e,
              nonce: r.sheet.nonce,
              container: r.sheet.container,
              speedy: r.sheet.isSpeedy,
            }),
            n = !1,
            i = document.querySelector(
              'style[data-emotion="' + e + ' ' + a.name + '"]',
            );
          return (
            r.sheet.tags.length && (t.before = r.sheet.tags[0]),
            null !== i &&
              ((n = !0), i.setAttribute('data-emotion', e), t.hydrate([i])),
            (o.current = [t, n]),
            function () {
              t.flush();
            }
          );
        },
        [r],
      ),
      t.exports.useLayoutEffect(
        function () {
          var e = o.current,
            t = e[0];
          if (e[1]) e[1] = !1;
          else {
            if ((void 0 !== a.next && xd(r, a.next, !0), t.tags.length)) {
              var n = t.tags[t.tags.length - 1].nextElementSibling;
              (t.before = n), t.flush();
            }
            r.insert('', a, t, !1);
          }
        },
        [r, a.name],
      ),
      null
    );
  });
function Ld() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Ad(t);
}
var Md = function () {
    var e = Ld.apply(void 0, arguments),
      t = 'animation-' + e.name;
    return {
      name: t,
      styles: '@keyframes ' + t + '{' + e.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  Dd = () =>
    t.exports.createElement(Nd, {
      styles:
        '\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;      \n        -moz-osx-font-smoothing: grayscale; \n        touch-action: manipulation; \n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: \'kern\';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type="button"]::-moz-focus-inner,\n      [type="reset"]::-moz-focus-inner,\n      [type="submit"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type="checkbox"],\n      [type="radio"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type="number"]::-webkit-inner-spin-button,\n      [type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      [type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role="button"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n        vertical-align: middle;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n    ',
    });
function Wd(e) {
  return 'number' == typeof e;
}
function Hd(e) {
  return Array.isArray(e);
}
function $d(e) {
  return 'function' == typeof e;
}
function Ud(e) {
  var t = typeof e;
  return null != e && ('object' === t || 'function' === t) && !Hd(e);
}
function Vd(e) {
  return '[object String]' === Object.prototype.toString.call(e);
}
function qd(e) {
  return /^var\(--.+\)$/.test(e);
}
var Qd = { exports: {} };
!(function (t, r) {
  var n = '__lodash_hash_undefined__',
    a = 9007199254740991,
    o = '[object Arguments]',
    i = '[object Function]',
    l = '[object Object]',
    s = /^\[object .+?Constructor\]$/,
    u = /^(?:0|[1-9]\d*)$/,
    c = {};
  (c['[object Float32Array]'] =
    c['[object Float64Array]'] =
    c['[object Int8Array]'] =
    c['[object Int16Array]'] =
    c['[object Int32Array]'] =
    c['[object Uint8Array]'] =
    c['[object Uint8ClampedArray]'] =
    c['[object Uint16Array]'] =
    c['[object Uint32Array]'] =
      !0),
    (c[o] =
      c['[object Array]'] =
      c['[object ArrayBuffer]'] =
      c['[object Boolean]'] =
      c['[object DataView]'] =
      c['[object Date]'] =
      c['[object Error]'] =
      c[i] =
      c['[object Map]'] =
      c['[object Number]'] =
      c[l] =
      c['[object RegExp]'] =
      c['[object Set]'] =
      c['[object String]'] =
      c['[object WeakMap]'] =
        !1);
  var d = 'object' == typeof e && e && e.Object === Object && e,
    f = 'object' == typeof self && self && self.Object === Object && self,
    p = d || f || Function('return this')(),
    h = r && !r.nodeType && r,
    m = h && t && !t.nodeType && t,
    g = m && m.exports === h,
    b = g && d.process,
    v = (function () {
      try {
        var e = m && m.require && m.require('util').types;
        return e || (b && b.binding && b.binding('util'));
      } catch (t) {}
    })(),
    y = v && v.isTypedArray;
  function x(e, t, r) {
    switch (r.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, r[0]);
      case 2:
        return e.call(t, r[0], r[1]);
      case 3:
        return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
  }
  var k,
    w,
    S,
    _ = Array.prototype,
    E = Function.prototype,
    C = Object.prototype,
    z = p['__core-js_shared__'],
    O = E.toString,
    P = C.hasOwnProperty,
    R = (k = /[^.]+$/.exec((z && z.keys && z.keys.IE_PROTO) || ''))
      ? 'Symbol(src)_1.' + k
      : '',
    A = C.toString,
    T = O.call(Object),
    j = RegExp(
      '^' +
        O.call(P)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    ),
    F = g ? p.Buffer : void 0,
    I = p.Symbol,
    B = p.Uint8Array,
    N = F ? F.allocUnsafe : void 0,
    L =
      ((w = Object.getPrototypeOf),
      (S = Object),
      function (e) {
        return w(S(e));
      }),
    M = Object.create,
    D = C.propertyIsEnumerable,
    W = _.splice,
    H = I ? I.toStringTag : void 0,
    $ = (function () {
      try {
        var e = he(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch (t) {}
    })(),
    U = F ? F.isBuffer : void 0,
    V = Math.max,
    q = Date.now,
    Q = he(p, 'Map'),
    Y = he(Object, 'create'),
    X = (function () {
      function e() {}
      return function (t) {
        if (!Ce(t)) return {};
        if (M) return M(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })();
  function G(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function K(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function Z(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function J(e) {
    var t = (this.__data__ = new K(e));
    this.size = t.size;
  }
  function ee(e, t) {
    var r = ke(e),
      n = !r && xe(e),
      a = !r && !n && Se(e),
      o = !r && !n && !a && Oe(e),
      i = r || n || a || o,
      l = i
        ? (function (e, t) {
            for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
            return n;
          })(e.length, String)
        : [],
      s = l.length;
    for (var u in e)
      (!t && !P.call(e, u)) ||
        (i &&
          ('length' == u ||
            (a && ('offset' == u || 'parent' == u)) ||
            (o && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
            me(u, s))) ||
        l.push(u);
    return l;
  }
  function te(e, t, r) {
    ((void 0 !== r && !ye(e[t], r)) || (void 0 === r && !(t in e))) &&
      ae(e, t, r);
  }
  function re(e, t, r) {
    var n = e[t];
    (P.call(e, t) && ye(n, r) && (void 0 !== r || t in e)) || ae(e, t, r);
  }
  function ne(e, t) {
    for (var r = e.length; r--; ) if (ye(e[r][0], t)) return r;
    return -1;
  }
  function ae(e, t, r) {
    '__proto__' == t && $
      ? $(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  (G.prototype.clear = function () {
    (this.__data__ = Y ? Y(null) : {}), (this.size = 0);
  }),
    (G.prototype.delete = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }),
    (G.prototype.get = function (e) {
      var t = this.__data__;
      if (Y) {
        var r = t[e];
        return r === n ? void 0 : r;
      }
      return P.call(t, e) ? t[e] : void 0;
    }),
    (G.prototype.has = function (e) {
      var t = this.__data__;
      return Y ? void 0 !== t[e] : P.call(t, e);
    }),
    (G.prototype.set = function (e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Y && void 0 === t ? n : t),
        this
      );
    }),
    (K.prototype.clear = function () {
      (this.__data__ = []), (this.size = 0);
    }),
    (K.prototype.delete = function (e) {
      var t = this.__data__,
        r = ne(t, e);
      return (
        !(r < 0) &&
        (r == t.length - 1 ? t.pop() : W.call(t, r, 1), --this.size, !0)
      );
    }),
    (K.prototype.get = function (e) {
      var t = this.__data__,
        r = ne(t, e);
      return r < 0 ? void 0 : t[r][1];
    }),
    (K.prototype.has = function (e) {
      return ne(this.__data__, e) > -1;
    }),
    (K.prototype.set = function (e, t) {
      var r = this.__data__,
        n = ne(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }),
    (Z.prototype.clear = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new G(),
          map: new (Q || K)(),
          string: new G(),
        });
    }),
    (Z.prototype.delete = function (e) {
      var t = pe(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }),
    (Z.prototype.get = function (e) {
      return pe(this, e).get(e);
    }),
    (Z.prototype.has = function (e) {
      return pe(this, e).has(e);
    }),
    (Z.prototype.set = function (e, t) {
      var r = pe(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }),
    (J.prototype.clear = function () {
      (this.__data__ = new K()), (this.size = 0);
    }),
    (J.prototype.delete = function (e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }),
    (J.prototype.get = function (e) {
      return this.__data__.get(e);
    }),
    (J.prototype.has = function (e) {
      return this.__data__.has(e);
    }),
    (J.prototype.set = function (e, t) {
      var r = this.__data__;
      if (r instanceof K) {
        var n = r.__data__;
        if (!Q || n.length < 199)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Z(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    });
  var oe,
    ie = function (e, t, r) {
      for (var n = -1, a = Object(e), o = r(e), i = o.length; i--; ) {
        var l = o[oe ? i : ++n];
        if (!1 === t(a[l], l, a)) break;
      }
      return e;
    };
  function le(e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : H && H in Object(e)
      ? (function (e) {
          var t = P.call(e, H),
            r = e[H];
          try {
            e[H] = void 0;
            var n = !0;
          } catch (o) {}
          var a = A.call(e);
          n && (t ? (e[H] = r) : delete e[H]);
          return a;
        })(e)
      : (function (e) {
          return A.call(e);
        })(e);
  }
  function se(e) {
    return ze(e) && le(e) == o;
  }
  function ue(e) {
    return (
      !(
        !Ce(e) ||
        (function (e) {
          return !!R && R in e;
        })(e)
      ) &&
      (_e(e) ? j : s).test(
        (function (e) {
          if (null != e) {
            try {
              return O.call(e);
            } catch (t) {}
            try {
              return e + '';
            } catch (t) {}
          }
          return '';
        })(e),
      )
    );
  }
  function ce(e) {
    if (!Ce(e))
      return (function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      })(e);
    var t = ge(e),
      r = [];
    for (var n in e) ('constructor' != n || (!t && P.call(e, n))) && r.push(n);
    return r;
  }
  function de(e, t, r, n, a) {
    e !== t &&
      ie(
        t,
        function (o, i) {
          if ((a || (a = new J()), Ce(o)))
            !(function (e, t, r, n, a, o, i) {
              var s = be(e, r),
                u = be(t, r),
                c = i.get(u);
              if (c) return void te(e, r, c);
              var d = o ? o(s, u, r + '', e, t, i) : void 0,
                f = void 0 === d;
              if (f) {
                var p = ke(u),
                  h = !p && Se(u),
                  m = !p && !h && Oe(u);
                (d = u),
                  p || h || m
                    ? ke(s)
                      ? (d = s)
                      : ze((x = s)) && we(x)
                      ? (d = (function (e, t) {
                          var r = -1,
                            n = e.length;
                          t || (t = Array(n));
                          for (; ++r < n; ) t[r] = e[r];
                          return t;
                        })(s))
                      : h
                      ? ((f = !1),
                        (d = (function (e, t) {
                          if (t) return e.slice();
                          var r = e.length,
                            n = N ? N(r) : new e.constructor(r);
                          return e.copy(n), n;
                        })(u, !0)))
                      : m
                      ? ((f = !1),
                        (g = u),
                        (b = !0
                          ? ((v = g.buffer),
                            (y = new v.constructor(v.byteLength)),
                            new B(y).set(new B(v)),
                            y)
                          : g.buffer),
                        (d = new g.constructor(b, g.byteOffset, g.length)))
                      : (d = [])
                    : (function (e) {
                        if (!ze(e) || le(e) != l) return !1;
                        var t = L(e);
                        if (null === t) return !0;
                        var r = P.call(t, 'constructor') && t.constructor;
                        return (
                          'function' == typeof r &&
                          r instanceof r &&
                          O.call(r) == T
                        );
                      })(u) || xe(u)
                    ? ((d = s),
                      xe(s)
                        ? (d = (function (e) {
                            return (function (e, t, r, n) {
                              var a = !r;
                              r || (r = {});
                              var o = -1,
                                i = t.length;
                              for (; ++o < i; ) {
                                var l = t[o],
                                  s = n ? n(r[l], e[l], l, r, e) : void 0;
                                void 0 === s && (s = e[l]),
                                  a ? ae(r, l, s) : re(r, l, s);
                              }
                              return r;
                            })(e, Pe(e));
                          })(s))
                        : (Ce(s) && !_e(s)) ||
                          (d = (function (e) {
                            return 'function' != typeof e.constructor || ge(e)
                              ? {}
                              : X(L(e));
                          })(u)))
                    : (f = !1);
              }
              var g, b, v, y;
              var x;
              f && (i.set(u, d), a(d, u, n, o, i), i.delete(u));
              te(e, r, d);
            })(e, t, i, r, de, n, a);
          else {
            var s = n ? n(be(e, i), o, i + '', e, t, a) : void 0;
            void 0 === s && (s = o), te(e, i, s);
          }
        },
        Pe,
      );
  }
  function fe(e, t) {
    return ve(
      (function (e, t, r) {
        return (
          (t = V(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var n = arguments, a = -1, o = V(n.length - t, 0), i = Array(o);
              ++a < o;

            )
              i[a] = n[t + a];
            a = -1;
            for (var l = Array(t + 1); ++a < t; ) l[a] = n[a];
            return (l[t] = r(i)), x(e, this, l);
          }
        );
      })(e, t, Te),
      e + '',
    );
  }
  function pe(e, t) {
    var r,
      n,
      a = e.__data__;
    return (
      'string' == (n = typeof (r = t)) ||
      'number' == n ||
      'symbol' == n ||
      'boolean' == n
        ? '__proto__' !== r
        : null === r
    )
      ? a['string' == typeof t ? 'string' : 'hash']
      : a.map;
  }
  function he(e, t) {
    var r = (function (e, t) {
      return null == e ? void 0 : e[t];
    })(e, t);
    return ue(r) ? r : void 0;
  }
  function me(e, t) {
    var r = typeof e;
    return (
      !!(t = null == t ? a : t) &&
      ('number' == r || ('symbol' != r && u.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
    );
  }
  function ge(e) {
    var t = e && e.constructor;
    return e === (('function' == typeof t && t.prototype) || C);
  }
  function be(e, t) {
    if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t)
      return e[t];
  }
  var ve = (function (e) {
    var t = 0,
      r = 0;
    return function () {
      var n = q(),
        a = 16 - (n - r);
      if (((r = n), a > 0)) {
        if (++t >= 800) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  })(
    $
      ? function (e, t) {
          return $(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value:
              ((r = t),
              function () {
                return r;
              }),
            writable: !0,
          });
          var r;
        }
      : Te,
  );
  function ye(e, t) {
    return e === t || (e != e && t != t);
  }
  var xe = se(
      (function () {
        return arguments;
      })(),
    )
      ? se
      : function (e) {
          return ze(e) && P.call(e, 'callee') && !D.call(e, 'callee');
        },
    ke = Array.isArray;
  function we(e) {
    return null != e && Ee(e.length) && !_e(e);
  }
  var Se =
    U ||
    function () {
      return !1;
    };
  function _e(e) {
    if (!Ce(e)) return !1;
    var t = le(e);
    return (
      t == i ||
      '[object GeneratorFunction]' == t ||
      '[object AsyncFunction]' == t ||
      '[object Proxy]' == t
    );
  }
  function Ee(e) {
    return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= a;
  }
  function Ce(e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  }
  function ze(e) {
    return null != e && 'object' == typeof e;
  }
  var Oe = y
    ? (function (e) {
        return function (t) {
          return e(t);
        };
      })(y)
    : function (e) {
        return ze(e) && Ee(e.length) && !!c[le(e)];
      };
  function Pe(e) {
    return we(e) ? ee(e, !0) : ce(e);
  }
  var Re,
    Ae =
      ((Re = function (e, t, r, n) {
        de(e, t, r, n);
      }),
      fe(function (e, t) {
        var r = -1,
          n = t.length,
          a = n > 1 ? t[n - 1] : void 0,
          o = n > 2 ? t[2] : void 0;
        for (
          a = Re.length > 3 && 'function' == typeof a ? (n--, a) : void 0,
            o &&
              (function (e, t, r) {
                if (!Ce(r)) return !1;
                var n = typeof t;
                return (
                  !!('number' == n
                    ? we(r) && me(t, r.length)
                    : 'string' == n && (t in r)) && ye(r[t], e)
                );
              })(t[0], t[1], o) &&
              ((a = n < 3 ? void 0 : a), (n = 1)),
            e = Object(e);
          ++r < n;

        ) {
          var i = t[r];
          i && Re(e, i, r, a);
        }
        return e;
      }));
  function Te(e) {
    return e;
  }
  t.exports = Ae;
})(Qd, Qd.exports);
var Yd = Qd.exports;
function Xd(e, t) {
  var r = {};
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n]);
    }),
    r
  );
}
var Gd,
  Kd,
  Zd =
    ((Gd = function (e, t, r, n) {
      var a = 'string' == typeof t ? t.split('.') : [t];
      for (n = 0; n < a.length && e; n += 1) e = e[a[n]];
      return void 0 === e ? r : e;
    }),
    (Kd = new WeakMap()),
    (e, t, r, n) => {
      if (void 0 === e) return Gd(e, t, r);
      Kd.has(e) || Kd.set(e, new Map());
      var a = Kd.get(e);
      if (a.has(t)) return a.get(t);
      var o = Gd(e, t, r, n);
      return a.set(t, o), o;
    });
function Jd(e, t) {
  var r = {};
  return (
    Object.keys(e).forEach((n) => {
      var a = e[n];
      t(a, n, e) && (r[n] = a);
    }),
    r
  );
}
var ef = (e) => Jd(e, (e) => null != e),
  tf = (e) => Object.keys(e);
function rf(e) {
  if (null == e) return e;
  var { unitless: t } = (function (e) {
    var t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), '');
    return { unitless: !r, value: t, unit: r };
  })(e);
  return t || Wd(e) ? e + 'px' : e;
}
var nf = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  af = (e) =>
    Object.entries(e)
      .sort(nf)
      .reduce((e, t) => {
        var [r, n] = t;
        return (e[r] = n), e;
      }, {});
function of(e) {
  var t = af(e);
  return Object.assign(Object.values(t), t);
}
function lf(e, t) {
  var r = [];
  return (
    e && r.push('@media screen and (min-width: ' + rf(e) + ')'),
    r.length > 0 && t && r.push('and'),
    t && r.push('@media screen and (max-width: ' + rf(t) + ')'),
    r.join(' ')
  );
}
function sf(e) {
  var t;
  if (!e) return null;
  e.base = null != (t = e.base) ? t : '0px';
  var r = of(e),
    n = Object.entries(e)
      .sort(nf)
      .map((e, t, r) => {
        var n,
          [a, o] = e,
          [, i] = null != (n = r[t + 1]) ? n : [];
        return {
          breakpoint: a,
          minW: o,
          maxW: (i =
            parseFloat(i) > 0
              ? (function (e) {
                  var t;
                  if (!e) return e;
                  var r = (e = null != (t = rf(e)) ? t : e).endsWith('px')
                    ? -1
                    : -0.0635;
                  return Wd(e)
                    ? '' + (e + r)
                    : e.replace(
                        /([0-9]+\.?[0-9]*)/,
                        (e) => '' + (parseFloat(e) + r),
                      );
                })(i)
              : void 0),
          maxWQuery: lf(null, i),
          minWQuery: lf(o),
          minMaxQuery: lf(o, i),
        };
      }),
    a = (function (e) {
      var t = Object.keys(af(e));
      return new Set(t);
    })(e),
    o = Array.from(a.values());
  return {
    keys: a,
    normalized: r,
    isResponsive(e) {
      var t = Object.keys(e);
      return t.length > 0 && t.every((e) => a.has(e));
    },
    asObject: af(e),
    asArray: of(e),
    details: n,
    media: [null, ...r.map((e) => lf(e)).slice(1)],
    toArrayValue(e) {
      if (!Ud(e)) throw new Error('toArrayValue: value must be an object');
      for (
        var t,
          r,
          n = o.map((t) => {
            var r;
            return null != (r = e[t]) ? r : null;
          });
        null ===
        ((r = void 0),
        (r = null == (t = n) ? 0 : t.length) ? t[r - 1] : void 0);

      )
        n.pop();
      return n;
    },
    toObjectValue(e) {
      if (!Array.isArray(e))
        throw new Error('toObjectValue: value must be an array');
      return e.reduce((e, t, r) => {
        var n = o[r];
        return null != n && null != t && (e[n] = t), e;
      }, {});
    },
  };
}
var uf = !(
    'undefined' == typeof window ||
    !window.document ||
    !window.document.createElement
  ),
  cf = (e) => (e ? '' : void 0),
  df = (e) => !!e || void 0,
  ff = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return t.filter(Boolean).join(' ');
  };
function pf(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  return $d(e) ? e(...r) : e;
}
function hf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (e) {
    t.some((t) => (null == t || t(e), null == e ? void 0 : e.defaultPrevented));
  };
}
var mf = () => {},
  gf = (function (e) {
    var t;
    return function () {
      if (e) {
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
          n[a] = arguments[a];
        (t = e.apply(this, n)), (e = null);
      }
      return t;
    };
  })((e) => () => {
    var { condition: t, message: r } = e;
  }),
  bf = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return (e) => t.reduce((e, t) => t(e), e);
  };
function vf(e, t) {
  if (null != e)
    if ($d(e)) e(t);
    else
      try {
        e.current = t;
      } catch (r) {
        throw new Error("Cannot assign value '" + t + "' to ref '" + e + "'");
      }
}
function yf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return (e) => {
    t.forEach((t) => vf(t, e));
  };
}
function xf(e) {
  void 0 === e && (e = {});
  var {
      strict: r = !0,
      errorMessage:
        n = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
      name: a,
    } = e,
    o = t.exports.createContext(void 0);
  return (
    (o.displayName = a),
    [
      o.Provider,
      function e() {
        var a = t.exports.useContext(o);
        if (!a && r) {
          var i = new Error(n);
          throw (
            ((i.name = 'ContextError'),
            null == Error.captureStackTrace || Error.captureStackTrace(i, e),
            i)
          );
        }
        return a;
      },
      o,
    ]
  );
}
Object.freeze(['base', 'sm', 'md', 'lg', 'xl', '2xl']);
var [kf, wf] = xf({ strict: !1, name: 'PortalManagerContext' });
function Sf(e) {
  var { children: r, zIndex: n } = e;
  return t.exports.createElement(kf, { value: { zIndex: n } }, r);
}
var _f = { prefix: Math.round(1e10 * Math.random()), current: 0 },
  Ef = t.exports.createContext(_f),
  Cf = t.exports.memo((e) => {
    var { children: r } = e,
      n = t.exports.useContext(Ef),
      a = n === _f,
      o = t.exports.useMemo(
        () => ({ prefix: a ? 0 : ++n.prefix, current: 0 }),
        [a, n],
      );
    return t.exports.createElement(Ef.Provider, { value: o }, r);
  }),
  zf = 'chakra-ui-light',
  Of = 'chakra-ui-dark',
  Pf = { classList: { add: mf, remove: mf } };
function Rf(e) {
  var t = uf ? document.body : Pf;
  t.classList.add(e ? Of : zf), t.classList.remove(e ? zf : Of);
}
var Af = '(prefers-color-scheme: dark)';
function Tf(e) {
  var t;
  return (
    null !=
    (t = (function (e) {
      var t = null == window.matchMedia ? void 0 : window.matchMedia(e);
      if (t) return !!t.media === t.matches;
    })(Af))
      ? t
      : 'dark' === e
  )
    ? 'dark'
    : 'light';
}
var jf = () =>
    document.documentElement.style.getPropertyValue('--chakra-ui-color-mode'),
  Ff = (e) => {
    uf &&
      document.documentElement.style.setProperty('--chakra-ui-color-mode', e);
  },
  If = () => 'undefined' != typeof Storage,
  Bf = {
    get(e) {
      if (!If()) return e;
      try {
        var t = localStorage.getItem('chakra-ui-color-mode');
        return null != t ? t : e;
      } catch (r) {
        return e;
      }
    },
    set(e) {
      if (If())
        try {
          localStorage.setItem('chakra-ui-color-mode', e);
        } catch (t) {}
    },
    type: 'localStorage',
  },
  Nf = t.exports.createContext({}),
  Lf = () => {
    var e = t.exports.useContext(Nf);
    if (void 0 === e)
      throw new Error('useColorMode must be used within a ColorModeProvider');
    return e;
  };
function Mf(e) {
  var {
      value: r,
      children: n,
      options: { useSystemColorMode: a, initialColorMode: o },
      colorModeManager: i = Bf,
    } = e,
    [l, s] = t.exports.useState('cookie' === i.type ? i.get(o) : o);
  t.exports.useEffect(() => {
    if (uf && 'localStorage' === i.type) {
      var e = a ? Tf(o) : jf() || i.get();
      e && s(e);
    }
  }, [i, a, o]),
    t.exports.useEffect(() => {
      var e = 'dark' === l;
      Rf(e), Ff(e ? 'dark' : 'light');
    }, [l]);
  var u = t.exports.useCallback(
      (e) => {
        i.set(e), s(e);
      },
      [i],
    ),
    c = t.exports.useCallback(() => {
      u('light' === l ? 'dark' : 'light');
    }, [l, u]);
  t.exports.useEffect(() => {
    var e;
    return (
      a &&
        (e = (function (e) {
          if (!('matchMedia' in window)) return mf;
          var t = window.matchMedia(Af),
            r = () => {
              e(t.matches ? 'dark' : 'light');
            };
          return (
            r(),
            t.addListener(r),
            () => {
              t.removeListener(r);
            }
          );
        })(u)),
      () => {
        e && a && e();
      }
    );
  }, [u, a]);
  var d = t.exports.useMemo(
    () => ({
      colorMode: null != r ? r : l,
      toggleColorMode: r ? mf : c,
      setColorMode: r ? mf : u,
    }),
    [l, u, c, r],
  );
  return t.exports.createElement(Nf.Provider, { value: d }, n);
}
var Df = (e, t) => (r) => {
  var n = String(t),
    a = e ? e + '.' + n : n;
  return Ud(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
};
function Wf(e) {
  var { scale: t, transform: r, compose: n } = e;
  return (e, a) => {
    var o,
      i = Df(t, e)(a),
      l = null != (o = null == r ? void 0 : r(i, a)) ? o : i;
    return n && (l = n(l, a)), l;
  };
}
function Hf(e, t) {
  return (r) => {
    var n = { property: r, scale: e };
    return (n.transform = Wf({ scale: e, transform: t })), n;
  };
}
var $f = (e) => {
  var { rtl: t, ltr: r } = e;
  return (e) => ('rtl' === e.direction ? t : r);
};
var Uf = [
  'rotate(var(--chakra-rotate, 0))',
  'scaleX(var(--chakra-scale-x, 1))',
  'scaleY(var(--chakra-scale-y, 1))',
  'skewX(var(--chakra-skew-x, 0))',
  'skewY(var(--chakra-skew-y, 0))',
];
var Vf = {
    '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
    filter: [
      'var(--chakra-blur)',
      'var(--chakra-brightness)',
      'var(--chakra-contrast)',
      'var(--chakra-grayscale)',
      'var(--chakra-hue-rotate)',
      'var(--chakra-invert)',
      'var(--chakra-saturate)',
      'var(--chakra-sepia)',
      'var(--chakra-drop-shadow)',
    ].join(' '),
  },
  qf = {
    backdropFilter: [
      'var(--chakra-backdrop-blur)',
      'var(--chakra-backdrop-brightness)',
      'var(--chakra-backdrop-contrast)',
      'var(--chakra-backdrop-grayscale)',
      'var(--chakra-backdrop-hue-rotate)',
      'var(--chakra-backdrop-invert)',
      'var(--chakra-backdrop-opacity)',
      'var(--chakra-backdrop-saturate)',
      'var(--chakra-backdrop-sepia)',
    ].join(' '),
    '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
  };
var Qf = {
    'row-reverse': {
      space: '--chakra-space-x-reverse',
      divide: '--chakra-divide-x-reverse',
    },
    'column-reverse': {
      space: '--chakra-space-y-reverse',
      divide: '--chakra-divide-y-reverse',
    },
  },
  Yf = {
    '& > :not(style) ~ :not(style)': {
      marginInlineStart:
        'calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))',
      marginInlineEnd:
        'calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))',
    },
  },
  Xf = {
    '& > :not(style) ~ :not(style)': {
      marginTop:
        'calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))',
      marginBottom:
        'calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))',
    },
  };
function Gf(e, t) {
  Gf = function (e, t) {
    return new o(e, void 0, t);
  };
  var r = Zf(RegExp),
    n = RegExp.prototype,
    a = new WeakMap();
  function o(e, t, n) {
    var o = r.call(this, e, t);
    return a.set(o, n || a.get(e)), o;
  }
  function i(e, t) {
    var r = a.get(t);
    return Object.keys(r).reduce(function (t, n) {
      return (t[n] = e[r[n]]), t;
    }, Object.create(null));
  }
  return (
    Kf(o, r),
    (o.prototype.exec = function (e) {
      var t = n.exec.call(this, e);
      return t && (t.groups = i(t, this)), t;
    }),
    (o.prototype[Symbol.replace] = function (e, t) {
      if ('string' == typeof t) {
        var r = a.get(this);
        return n[Symbol.replace].call(
          this,
          e,
          t.replace(/\$<([^>]+)>/g, function (e, t) {
            return '$' + r[t];
          }),
        );
      }
      if ('function' == typeof t) {
        var o = this;
        return n[Symbol.replace].call(this, e, function () {
          var e = [];
          return (
            e.push.apply(e, arguments),
            'object' != typeof e[e.length - 1] && e.push(i(e, o)),
            t.apply(this, e)
          );
        });
      }
      return n[Symbol.replace].call(this, e, t);
    }),
    Gf.apply(this, arguments)
  );
}
function Kf(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && tp(e, t);
}
function Zf(e) {
  var t = 'function' == typeof Map ? new Map() : void 0;
  return (Zf = function (e) {
    if (
      null === e ||
      !(function (e) {
        return -1 !== Function.toString.call(e).indexOf('[native code]');
      })(e)
    )
      return e;
    if ('function' != typeof e)
      throw new TypeError('Super expression must either be null or a function');
    if (void 0 !== t) {
      if (t.has(e)) return t.get(e);
      t.set(e, r);
    }
    function r() {
      return Jf(e, arguments, rp(this).constructor);
    }
    return (
      (r.prototype = Object.create(e.prototype, {
        constructor: {
          value: r,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
      tp(r, e)
    );
  })(e);
}
function Jf(e, t, r) {
  return (Jf = ep()
    ? Reflect.construct
    : function (e, t, r) {
        var n = [null];
        n.push.apply(n, t);
        var a = new (Function.bind.apply(e, n))();
        return r && tp(a, r.prototype), a;
      }).apply(null, arguments);
}
function ep() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ('function' == typeof Proxy) return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch (e) {
    return !1;
  }
}
function tp(e, t) {
  return (tp =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function rp(e) {
  return (rp = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
var np = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  ap = new Set(Object.values(np)),
  op = new Set([
    'none',
    '-moz-initial',
    'inherit',
    'initial',
    'revert',
    'unset',
  ]),
  ip = (e) => e.trim();
var lp = (e) => Vd(e) && e.includes('(') && e.includes(')'),
  sp = (e) => (t) => e + '(' + t + ')',
  up = {
    filter: (e) => ('auto' !== e ? e : Vf),
    backdropFilter: (e) => ('auto' !== e ? e : qf),
    ring: (e) =>
      (function (e) {
        return {
          '--chakra-ring-offset-shadow':
            'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
          '--chakra-ring-shadow':
            'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
          '--chakra-ring-width': e,
          boxShadow: [
            'var(--chakra-ring-offset-shadow)',
            'var(--chakra-ring-shadow)',
            'var(--chakra-shadow, 0 0 #0000)',
          ].join(', '),
        };
      })(up.px(e)),
    bgClip: (e) =>
      'text' === e
        ? { color: 'transparent', backgroundClip: 'text' }
        : { backgroundClip: e },
    transform: (e) =>
      'auto' === e
        ? [
            'translateX(var(--chakra-translate-x, 0))',
            'translateY(var(--chakra-translate-y, 0))',
            ...Uf,
          ].join(' ')
        : 'auto-gpu' === e
        ? [
            'translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)',
            ...Uf,
          ].join(' ')
        : e,
    px(e) {
      if (null == e) return e;
      var { unitless: t } = ((e) => {
        var t = parseFloat(e.toString()),
          r = e.toString().replace(String(t), '');
        return { unitless: !r, value: t, unit: r };
      })(e);
      return t || Wd(e) ? e + 'px' : e;
    },
    fraction: (e) => (!Wd(e) || e > 1 ? e : 100 * e + '%'),
    float: (e, t) =>
      'rtl' === t.direction ? { left: 'right', right: 'left' }[e] : e,
    degree(e) {
      if (qd(e) || null == e) return e;
      var t = Vd(e) && !e.endsWith('deg');
      return Wd(e) || t ? e + 'deg' : e;
    },
    gradient: (e, t) =>
      (function (e, t) {
        var r, n;
        if (null == e || op.has(e)) return e;
        var a = Gf(/(^[\x2DA-Za-z]+)\(((.*))\)/g, { type: 1, values: 2 }),
          { type: o, values: i } =
            null != (r = null == (n = a.exec(e)) ? void 0 : n.groups) ? r : {};
        if (!o || !i) return e;
        var l = o.includes('-gradient') ? o : o + '-gradient',
          [s, ...u] = i.split(',').map(ip).filter(Boolean);
        if (0 === (null == u ? void 0 : u.length)) return e;
        var c = s in np ? np[s] : s;
        return (
          u.unshift(c),
          l +
            '(' +
            u
              .map((e) => {
                if (ap.has(e)) return e;
                var r = e.indexOf(' '),
                  [n, a] = -1 !== r ? [e.substr(0, r), e.substr(r + 1)] : [e],
                  o = lp(a) ? a : a && a.split(' '),
                  i = 'colors.' + n,
                  l = i in t.__cssMap ? t.__cssMap[i].varRef : n;
                return o ? [l, o].join(' ') : l;
              })
              .join(', ') +
            ')'
        );
      })(e, null != t ? t : {}),
    blur: sp('blur'),
    opacity: sp('opacity'),
    brightness: sp('brightness'),
    contrast: sp('contrast'),
    dropShadow: sp('drop-shadow'),
    grayscale: sp('grayscale'),
    hueRotate: sp('hue-rotate'),
    invert: sp('invert'),
    saturate: sp('saturate'),
    sepia: sp('sepia'),
    bgImage: (e) => (null == e || lp(e) || op.has(e) ? e : 'url(' + e + ')'),
    outline(e) {
      var t = '0' === String(e) || 'none' === String(e);
      return null !== e && t
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: e };
    },
    flexDirection(e) {
      var t,
        { space: r, divide: n } = null != (t = Qf[e]) ? t : {},
        a = { flexDirection: e };
      return r && (a[r] = 1), n && (a[n] = 1), a;
    },
  };
function cp() {
  return (cp =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var dp = {
    borderWidths: Hf('borderWidths'),
    borderStyles: Hf('borderStyles'),
    colors: Hf('colors'),
    borders: Hf('borders'),
    radii: Hf('radii', up.px),
    space: Hf('space', up.px),
    spaceT: Hf('space', up.px),
    degreeT: (e) => ({ property: e, transform: up.degree }),
    prop: (e, t, r) =>
      cp(
        { property: e, scale: t },
        t && { transform: Wf({ scale: t, transform: r }) },
      ),
    propT: (e, t) => ({ property: e, transform: t }),
    sizes: Hf('sizes', up.px),
    sizesT: Hf('sizes', up.fraction),
    shadows: Hf('shadows'),
    logical: function (e) {
      var { property: t, scale: r, transform: n } = e;
      return {
        scale: r,
        property: $f(t),
        transform: r ? Wf({ scale: r, compose: n }) : n,
      };
    },
    blur: Hf('blur', up.blur),
  },
  fp = {
    background: dp.colors('background'),
    backgroundColor: dp.colors('backgroundColor'),
    backgroundImage: dp.propT('backgroundImage', up.bgImage),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: up.bgClip },
    bgSize: dp.prop('backgroundSize'),
    bgPosition: dp.prop('backgroundPosition'),
    bg: dp.colors('background'),
    bgColor: dp.colors('backgroundColor'),
    bgPos: dp.prop('backgroundPosition'),
    bgRepeat: dp.prop('backgroundRepeat'),
    bgAttachment: dp.prop('backgroundAttachment'),
    bgGradient: dp.propT('backgroundImage', up.gradient),
    bgClip: { transform: up.bgClip },
  };
Object.assign(fp, { bgImage: fp.backgroundImage, bgImg: fp.backgroundImage });
var pp = {
  border: dp.borders('border'),
  borderWidth: dp.borderWidths('borderWidth'),
  borderStyle: dp.borderStyles('borderStyle'),
  borderColor: dp.colors('borderColor'),
  borderRadius: dp.radii('borderRadius'),
  borderTop: dp.borders('borderTop'),
  borderBlockStart: dp.borders('borderBlockStart'),
  borderTopLeftRadius: dp.radii('borderTopLeftRadius'),
  borderStartStartRadius: dp.logical({
    scale: 'radii',
    property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
  }),
  borderEndStartRadius: dp.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' },
  }),
  borderTopRightRadius: dp.radii('borderTopRightRadius'),
  borderStartEndRadius: dp.logical({
    scale: 'radii',
    property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
  }),
  borderEndEndRadius: dp.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' },
  }),
  borderRight: dp.borders('borderRight'),
  borderInlineEnd: dp.borders('borderInlineEnd'),
  borderBottom: dp.borders('borderBottom'),
  borderBlockEnd: dp.borders('borderBlockEnd'),
  borderBottomLeftRadius: dp.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: dp.radii('borderBottomRightRadius'),
  borderLeft: dp.borders('borderLeft'),
  borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
  borderInlineStartRadius: dp.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
    },
  }),
  borderInlineEndRadius: dp.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
      rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    },
  }),
  borderX: dp.borders(['borderLeft', 'borderRight']),
  borderInline: dp.borders('borderInline'),
  borderY: dp.borders(['borderTop', 'borderBottom']),
  borderBlock: dp.borders('borderBlock'),
  borderTopWidth: dp.borderWidths('borderTopWidth'),
  borderBlockStartWidth: dp.borderWidths('borderBlockStartWidth'),
  borderTopColor: dp.colors('borderTopColor'),
  borderBlockStartColor: dp.colors('borderBlockStartColor'),
  borderTopStyle: dp.borderStyles('borderTopStyle'),
  borderBlockStartStyle: dp.borderStyles('borderBlockStartStyle'),
  borderBottomWidth: dp.borderWidths('borderBottomWidth'),
  borderBlockEndWidth: dp.borderWidths('borderBlockEndWidth'),
  borderBottomColor: dp.colors('borderBottomColor'),
  borderBlockEndColor: dp.colors('borderBlockEndColor'),
  borderBottomStyle: dp.borderStyles('borderBottomStyle'),
  borderBlockEndStyle: dp.borderStyles('borderBlockEndStyle'),
  borderLeftWidth: dp.borderWidths('borderLeftWidth'),
  borderInlineStartWidth: dp.borderWidths('borderInlineStartWidth'),
  borderLeftColor: dp.colors('borderLeftColor'),
  borderInlineStartColor: dp.colors('borderInlineStartColor'),
  borderLeftStyle: dp.borderStyles('borderLeftStyle'),
  borderInlineStartStyle: dp.borderStyles('borderInlineStartStyle'),
  borderRightWidth: dp.borderWidths('borderRightWidth'),
  borderInlineEndWidth: dp.borderWidths('borderInlineEndWidth'),
  borderRightColor: dp.colors('borderRightColor'),
  borderInlineEndColor: dp.colors('borderInlineEndColor'),
  borderRightStyle: dp.borderStyles('borderRightStyle'),
  borderInlineEndStyle: dp.borderStyles('borderInlineEndStyle'),
  borderTopRadius: dp.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: dp.radii([
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ]),
  borderLeftRadius: dp.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: dp.radii([
    'borderTopRightRadius',
    'borderBottomRightRadius',
  ]),
};
Object.assign(pp, {
  rounded: pp.borderRadius,
  roundedTop: pp.borderTopRadius,
  roundedTopLeft: pp.borderTopLeftRadius,
  roundedTopRight: pp.borderTopRightRadius,
  roundedTopStart: pp.borderStartStartRadius,
  roundedTopEnd: pp.borderStartEndRadius,
  roundedBottom: pp.borderBottomRadius,
  roundedBottomLeft: pp.borderBottomLeftRadius,
  roundedBottomRight: pp.borderBottomRightRadius,
  roundedBottomStart: pp.borderEndStartRadius,
  roundedBottomEnd: pp.borderEndEndRadius,
  roundedLeft: pp.borderLeftRadius,
  roundedRight: pp.borderRightRadius,
  roundedStart: pp.borderInlineStartRadius,
  roundedEnd: pp.borderInlineEndRadius,
  borderStart: pp.borderInlineStart,
  borderEnd: pp.borderInlineEnd,
  borderTopStartRadius: pp.borderStartStartRadius,
  borderTopEndRadius: pp.borderStartEndRadius,
  borderBottomStartRadius: pp.borderEndStartRadius,
  borderBottomEndRadius: pp.borderEndEndRadius,
  borderStartRadius: pp.borderInlineStartRadius,
  borderEndRadius: pp.borderInlineEndRadius,
  borderStartWidth: pp.borderInlineStartWidth,
  borderEndWidth: pp.borderInlineEndWidth,
  borderStartColor: pp.borderInlineStartColor,
  borderEndColor: pp.borderInlineEndColor,
  borderStartStyle: pp.borderInlineStartStyle,
  borderEndStyle: pp.borderInlineEndStyle,
});
var hp = {
    color: dp.colors('color'),
    textColor: dp.colors('color'),
    fill: dp.colors('fill'),
    stroke: dp.colors('stroke'),
  },
  mp = {
    boxShadow: dp.shadows('boxShadow'),
    mixBlendMode: !0,
    blendMode: dp.prop('mixBlendMode'),
    backgroundBlendMode: !0,
    bgBlendMode: dp.prop('backgroundBlendMode'),
    opacity: !0,
  };
Object.assign(mp, { shadow: mp.boxShadow });
var gp = {
    filter: { transform: up.filter },
    blur: dp.blur('--chakra-blur'),
    brightness: dp.propT('--chakra-brightness', up.brightness),
    contrast: dp.propT('--chakra-contrast', up.contrast),
    hueRotate: dp.degreeT('--chakra-hue-rotate'),
    invert: dp.propT('--chakra-invert', up.invert),
    saturate: dp.propT('--chakra-saturate', up.saturate),
    dropShadow: dp.propT('--chakra-drop-shadow', up.dropShadow),
    backdropFilter: { transform: up.backdropFilter },
    backdropBlur: dp.blur('--chakra-backdrop-blur'),
    backdropBrightness: dp.propT('--chakra-backdrop-brightness', up.brightness),
    backdropContrast: dp.propT('--chakra-backdrop-contrast', up.contrast),
    backdropHueRotate: dp.degreeT('--chakra-backdrop-hue-rotate'),
    backdropInvert: dp.propT('--chakra-backdrop-invert', up.invert),
    backdropSaturate: dp.propT('--chakra-backdrop-saturate', up.saturate),
  },
  bp = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: up.flexDirection },
    experimental_spaceX: {
      static: Yf,
      transform: Wf({
        scale: 'space',
        transform: (e) => (null !== e ? { '--chakra-space-x': e } : null),
      }),
    },
    experimental_spaceY: {
      static: Xf,
      transform: Wf({
        scale: 'space',
        transform: (e) => (null != e ? { '--chakra-space-y': e } : null),
      }),
    },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: dp.sizes('flexBasis'),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
  };
Object.assign(bp, { flexDir: bp.flexDirection });
var vp = {
    gridGap: dp.space('gridGap'),
    gridColumnGap: dp.space('gridColumnGap'),
    gridRowGap: dp.space('gridRowGap'),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  yp = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: up.outline },
    outlineOffset: !0,
    outlineColor: dp.colors('outlineColor'),
  },
  xp = {
    width: dp.sizesT('width'),
    inlineSize: dp.sizesT('inlineSize'),
    height: dp.sizes('height'),
    blockSize: dp.sizes('blockSize'),
    boxSize: dp.sizes(['width', 'height']),
    minWidth: dp.sizes('minWidth'),
    minInlineSize: dp.sizes('minInlineSize'),
    minHeight: dp.sizes('minHeight'),
    minBlockSize: dp.sizes('minBlockSize'),
    maxWidth: dp.sizes('maxWidth'),
    maxInlineSize: dp.sizes('maxInlineSize'),
    maxHeight: dp.sizes('maxHeight'),
    maxBlockSize: dp.sizes('maxBlockSize'),
    d: dp.prop('display'),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: dp.propT('float', up.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(xp, {
  w: xp.width,
  h: xp.height,
  minW: xp.minWidth,
  maxW: xp.maxWidth,
  minH: xp.minHeight,
  maxH: xp.maxHeight,
  overscroll: xp.overscrollBehavior,
  overscrollX: xp.overscrollBehaviorX,
  overscrollY: xp.overscrollBehaviorY,
});
var kp = {
    listStyleType: !0,
    listStylePosition: !0,
    listStylePos: dp.prop('listStylePosition'),
    listStyleImage: !0,
    listStyleImg: dp.prop('listStyleImage'),
  },
  wp = {
    border: '0px',
    clip: 'rect(0, 0, 0, 0)',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
  },
  Sp = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  _p = (e, t, r) => {
    var n = {},
      a = Zd(e, t, {});
    for (var o in a) {
      (o in r && null != r[o]) || (n[o] = a[o]);
    }
    return n;
  },
  Ep = {
    srOnly: { transform: (e) => (!0 === e ? wp : 'focusable' === e ? Sp : {}) },
    layerStyle: {
      processResult: !0,
      transform: (e, t, r) => _p(t, 'layerStyles.' + e, r),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, r) => _p(t, 'textStyles.' + e, r),
    },
    apply: { processResult: !0, transform: (e, t, r) => _p(t, e, r) },
  },
  Cp = {
    position: !0,
    pos: dp.prop('position'),
    zIndex: dp.prop('zIndex', 'zIndices'),
    inset: dp.spaceT(['top', 'right', 'bottom', 'left']),
    insetX: dp.spaceT(['left', 'right']),
    insetInline: dp.spaceT('insetInline'),
    insetY: dp.spaceT(['top', 'bottom']),
    insetBlock: dp.spaceT('insetBlock'),
    top: dp.spaceT('top'),
    insetBlockStart: dp.spaceT('insetBlockStart'),
    bottom: dp.spaceT('bottom'),
    insetBlockEnd: dp.spaceT('insetBlockEnd'),
    left: dp.spaceT('left'),
    insetInlineStart: dp.logical({
      scale: 'space',
      property: { ltr: 'left', rtl: 'right' },
    }),
    right: dp.spaceT('right'),
    insetInlineEnd: dp.logical({
      scale: 'space',
      property: { ltr: 'right', rtl: 'left' },
    }),
  };
Object.assign(Cp, {
  insetStart: Cp.insetInlineStart,
  insetEnd: Cp.insetInlineEnd,
});
var zp = {
    ring: { transform: up.ring },
    ringColor: dp.colors('--chakra-ring-color'),
    ringOffset: dp.prop('--chakra-ring-offset-width'),
    ringOffsetColor: dp.colors('--chakra-ring-offset-color'),
    ringInset: dp.prop('--chakra-ring-inset'),
  },
  Op = {
    margin: dp.spaceT('margin'),
    marginTop: dp.spaceT('marginTop'),
    marginBlockStart: dp.spaceT('marginBlockStart'),
    marginRight: dp.spaceT('marginRight'),
    marginInlineEnd: dp.spaceT('marginInlineEnd'),
    marginBottom: dp.spaceT('marginBottom'),
    marginBlockEnd: dp.spaceT('marginBlockEnd'),
    marginLeft: dp.spaceT('marginLeft'),
    marginInlineStart: dp.spaceT('marginInlineStart'),
    marginX: dp.spaceT(['marginInlineStart', 'marginInlineEnd']),
    marginInline: dp.spaceT('marginInline'),
    marginY: dp.spaceT(['marginTop', 'marginBottom']),
    marginBlock: dp.spaceT('marginBlock'),
    padding: dp.space('padding'),
    paddingTop: dp.space('paddingTop'),
    paddingBlockStart: dp.space('paddingBlockStart'),
    paddingRight: dp.space('paddingRight'),
    paddingBottom: dp.space('paddingBottom'),
    paddingBlockEnd: dp.space('paddingBlockEnd'),
    paddingLeft: dp.space('paddingLeft'),
    paddingInlineStart: dp.space('paddingInlineStart'),
    paddingInlineEnd: dp.space('paddingInlineEnd'),
    paddingX: dp.space(['paddingInlineStart', 'paddingInlineEnd']),
    paddingInline: dp.space('paddingInline'),
    paddingY: dp.space(['paddingTop', 'paddingBottom']),
    paddingBlock: dp.space('paddingBlock'),
  };
Object.assign(Op, {
  m: Op.margin,
  mt: Op.marginTop,
  mr: Op.marginRight,
  me: Op.marginInlineEnd,
  marginEnd: Op.marginInlineEnd,
  mb: Op.marginBottom,
  ml: Op.marginLeft,
  ms: Op.marginInlineStart,
  marginStart: Op.marginInlineStart,
  mx: Op.marginX,
  my: Op.marginY,
  p: Op.padding,
  pt: Op.paddingTop,
  py: Op.paddingY,
  px: Op.paddingX,
  pb: Op.paddingBottom,
  pl: Op.paddingLeft,
  ps: Op.paddingInlineStart,
  paddingStart: Op.paddingInlineStart,
  pr: Op.paddingRight,
  pe: Op.paddingInlineEnd,
  paddingEnd: Op.paddingInlineEnd,
});
var Pp = {
    textDecorationColor: dp.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: dp.shadows('textShadow'),
  },
  Rp = {
    clipPath: !0,
    transform: dp.propT('transform', up.transform),
    transformOrigin: !0,
    translateX: dp.spaceT('--chakra-translate-x'),
    translateY: dp.spaceT('--chakra-translate-y'),
    skewX: dp.degreeT('--chakra-skew-x'),
    skewY: dp.degreeT('--chakra-skew-y'),
    scaleX: dp.prop('--chakra-scale-x'),
    scaleY: dp.prop('--chakra-scale-y'),
    scale: dp.prop(['--chakra-scale-x', '--chakra-scale-y']),
    rotate: dp.degreeT('--chakra-rotate'),
  },
  Ap = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: dp.prop('transitionDuration', 'transition.duration'),
    transitionProperty: dp.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: dp.prop(
      'transitionTimingFunction',
      'transition.easing',
    ),
  },
  Tp = {
    fontFamily: dp.prop('fontFamily', 'fonts'),
    fontSize: dp.prop('fontSize', 'fontSizes', up.px),
    fontWeight: dp.prop('fontWeight', 'fontWeights'),
    lineHeight: dp.prop('lineHeight', 'lineHeights'),
    letterSpacing: dp.prop('letterSpacing', 'letterSpacings'),
    textAlign: !0,
    fontStyle: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    noOfLines: {
      static: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 'var(--chakra-line-clamp)',
      },
      property: '--chakra-line-clamp',
    },
    isTruncated: {
      transform(e) {
        if (!0 === e)
          return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          };
      },
    },
  },
  jp = (e) => e + ':focus &, ' + e + '[data-focus] &',
  Fp = (e) => e + ':active &, ' + e + '[data-active] &',
  Ip = (e) => e + ':disabled &, ' + e + '[data-disabled] &',
  Bp = (e) => e + ':invalid &, ' + e + '[data-invalid] &',
  Np = (e) => e + ':checked &, ' + e + '[data-checked] &',
  Lp = (e) => Mp(e, '[role=group]', '[data-group]', '.group'),
  Mp = function (e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    return r.map(e).join(', ');
  },
  Dp = {
    _hover: '&:hover, &[data-hover]',
    _active: '&:active, &[data-active]',
    _focus: '&:focus, &[data-focus]',
    _highlighted: '&[data-highlighted]',
    _focusWithin: '&:focus-within',
    _focusVisible: '&:focus-visible',
    _disabled: '&[disabled], &[aria-disabled=true], &[data-disabled]',
    _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
    _before: '&::before',
    _after: '&::after',
    _empty: '&:empty',
    _expanded: '&[aria-expanded=true], &[data-expanded]',
    _checked: '&[aria-checked=true], &[data-checked]',
    _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
    _pressed: '&[aria-pressed=true], &[data-pressed]',
    _invalid: '&[aria-invalid=true], &[data-invalid]',
    _valid: '&[data-valid], &[data-state=valid]',
    _loading: '&[data-loading], &[aria-busy=true]',
    _selected: '&[aria-selected=true], &[data-selected]',
    _hidden: '&[hidden], &[data-hidden]',
    _autofill: '&:-webkit-autofill',
    _even: '&:nth-of-type(even)',
    _odd: '&:nth-of-type(odd)',
    _first: '&:first-of-type',
    _last: '&:last-of-type',
    _notFirst: '&:not(:first-of-type)',
    _notLast: '&:not(:last-of-type)',
    _visited: '&:visited',
    _activeLink: '&[aria-current=page]',
    _activeStep: '&[aria-current=step]',
    _indeterminate:
      '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
    _groupHover: Lp((e) => e + ':hover &, ' + e + '[data-hover] &'),
    _groupFocus: Lp(jp),
    _groupActive: Lp(Fp),
    _groupDisabled: Lp(Ip),
    _groupInvalid: Lp(Bp),
    _groupChecked: Lp(Np),
    _placeholder: '&::placeholder',
    _fullScreen: '&:fullscreen',
    _selection: '&::selection',
    _rtl: '[dir=rtl] &',
    _mediaDark: '@media (prefers-color-scheme: dark)',
    _dark: '.chakra-ui-dark &, [data-theme=dark] &, &[data-theme=dark]',
    _light: '.chakra-ui-light &, [data-theme=light] &, &[data-theme=light]',
  },
  Wp = tf(Dp);
function Hp() {
  return (Hp =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var $p = Yd(
  {},
  fp,
  pp,
  hp,
  bp,
  xp,
  gp,
  zp,
  yp,
  vp,
  Ep,
  Cp,
  mp,
  Op,
  Tp,
  Pp,
  Rp,
  kp,
  Ap,
);
Object.assign({}, Op, xp, bp, vp, Cp);
var Up = [...tf($p), ...Wp],
  Vp = Hp({}, $p, Dp),
  qp = (e, t) => e.startsWith('--') && Vd(t) && !qd(t),
  Qp = (e, t) => {
    var r, n;
    if (null == t) return t;
    var a = (t) => {
        var r, n;
        return null == (r = e.__cssMap) || null == (n = r[t])
          ? void 0
          : n.varRef;
      },
      o = (e) => {
        var t;
        return null != (t = a(e)) ? t : e;
      },
      i = t.split(',').map((e) => e.trim()),
      [l, s] = i;
    return (t = null != (r = null != (n = a(l)) ? n : o(s)) ? r : o(t));
  };
function Yp(e) {
  var { configs: t = {}, pseudos: r = {}, theme: n } = e;
  return function e(a, o) {
    void 0 === o && (o = !1);
    var i = pf(a, n),
      l = ((e) => (t) => {
        if (!t.__breakpoints) return e;
        var { isResponsive: r, toArrayValue: n, media: a } = t.__breakpoints,
          o = {};
        for (var i in e) {
          var l = pf(e[i], t);
          if (null != l)
            if (((l = Ud(l) && r(l) ? n(l) : l), Array.isArray(l)))
              for (var s = l.slice(0, a.length).length, u = 0; u < s; u += 1) {
                var c = null == a ? void 0 : a[u];
                c
                  ? ((o[c] = o[c] || {}), null != l[u] && (o[c][i] = l[u]))
                  : (o[i] = l[u]);
              }
            else o[i] = l;
        }
        return o;
      })(i)(n),
      s = {};
    for (var u in l) {
      var c,
        d,
        f,
        p,
        h,
        m = pf(l[u], n);
      u in r && (u = r[u]), qp(u, m) && (m = Qp(n, m));
      var g = t[u];
      if ((!0 === g && (g = { property: u }), Ud(m))) {
        var b;
        (s[u] = null != (b = s[u]) ? b : {}), (s[u] = Yd({}, s[u], e(m, !0)));
      } else {
        var v =
          null !=
          (c =
            null == (d = g) || null == d.transform
              ? void 0
              : d.transform(m, n, i))
            ? c
            : m;
        v = null != (f = g) && f.processResult ? e(v, !0) : v;
        var y = pf(null == (p = g) ? void 0 : p.property, n);
        if (!o && null != (h = g) && h.static) {
          var x = pf(g.static, n);
          s = Yd({}, s, x);
        }
        if (y && Array.isArray(y)) for (var k of y) s[k] = v;
        else
          y
            ? '&' === y && Ud(v)
              ? (s = Yd({}, s, v))
              : (s[y] = v)
            : Ud(v)
            ? (s = Yd({}, s, v))
            : (s[u] = v);
      }
    }
    return s;
  };
}
var Xp = (e) => (t) => Yp({ theme: t, pseudos: Dp, configs: $p })(e);
function Gp(e) {
  return Ud(e) && e.reference ? e.reference : String(e);
}
var Kp = function (e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    return r
      .map(Gp)
      .join(' ' + e + ' ')
      .replace(/calc/g, '');
  },
  Zp = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + Kp('+', ...t) + ')';
  },
  Jp = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + Kp('-', ...t) + ')';
  },
  eh = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + Kp('*', ...t) + ')';
  },
  th = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + Kp('/', ...t) + ')';
  },
  rh = (e) => {
    var t = Gp(e);
    return null == t || Number.isNaN(parseFloat(t))
      ? eh(t, -1)
      : String(t).startsWith('-')
      ? String(t).slice(1)
      : '-' + t;
  },
  nh = Object.assign(
    (e) => ({
      add: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return nh(Zp(e, ...r));
      },
      subtract: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return nh(Jp(e, ...r));
      },
      multiply: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return nh(eh(e, ...r));
      },
      divide: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return nh(th(e, ...r));
      },
      negate: () => nh(rh(e)),
      toString: () => e.toString(),
    }),
    { add: Zp, subtract: Jp, multiply: eh, divide: th, negate: rh },
  );
function ah(e) {
  var t = (function (e, t) {
    return void 0 === t && (t = '-'), e.replace(/\s+/g, t);
  })(e.toString());
  return t.includes('\\.')
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? t.replace('.', '\\.')
    : e;
}
function oh(e, t) {
  return 'var(' + ah(e) + (t ? ', ' + t : '') + ')';
}
function ih(e, t) {
  return (
    void 0 === t && (t = ''),
    '--' +
      (function (e, t) {
        return void 0 === t && (t = ''), [t, ah(e)].filter(Boolean).join('-');
      })(e, t)
  );
}
function lh(e, t, r) {
  var n = ih(e, r);
  return { variable: n, reference: oh(n, t) };
}
function sh() {
  return (sh =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function uh(e, t) {
  var r = { cssMap: {}, cssVars: {} };
  return (
    (function (e, t) {
      (function e(r, n) {
        return (
          void 0 === n && (n = []),
          Hd(r)
            ? r.map((t, r) => e(t, [...n, String(r)]))
            : Ud(r)
            ? Object.fromEntries(
                Object.entries(r).map((t) => {
                  var [r, a] = t;
                  return [r, e(a, [...n, r])];
                }),
              )
            : t(r, n)
        );
      })(e);
    })(e, (e, n) => {
      var a,
        [o] = n,
        i = null != (a = ch[o]) ? a : ch.defaultHandler,
        { cssVars: l, cssMap: s } = i(n, e, t);
      Object.assign(r.cssVars, l), Object.assign(r.cssMap, s);
    }),
    r
  );
}
var ch = {
  space: (e, t, r) => {
    var n = ch.defaultHandler(e, t, r),
      [a, ...o] = e,
      i = a + '.-' + o.join('.'),
      l = e.join('-'),
      { variable: s, reference: u } = lh(l, void 0, r.cssVarPrefix),
      c = nh.negate(t),
      d = nh.negate(u);
    return {
      cssVars: n.cssVars,
      cssMap: sh({}, n.cssMap, {
        [i]: { value: '' + c, var: '' + s, varRef: d },
      }),
    };
  },
  defaultHandler: (e, t, r) => {
    var n = e.join('.'),
      a = e.join('-'),
      { variable: o, reference: i } = lh(a, void 0, r.cssVarPrefix);
    return {
      cssVars: { [o]: t },
      cssMap: { [n]: { value: t, var: o, varRef: i } },
    };
  },
};
var dh = [
  'colors',
  'borders',
  'borderWidths',
  'borderStyles',
  'fonts',
  'fontSizes',
  'fontWeights',
  'letterSpacings',
  'lineHeights',
  'radii',
  'space',
  'shadows',
  'sizes',
  'zIndices',
  'transition',
  'blur',
];
function fh(e) {
  return (function (e, t) {
    if (null == e) return {};
    var r,
      n,
      a = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++)
      (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
    return a;
  })(e, ['__cssMap', '__cssVars', '__breakpoints']);
}
function ph() {
  return (ph =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function hh(e) {
  var t,
    r = fh(e),
    n = (function (e) {
      var t, r;
      return (
        (t = e),
        (r = {}),
        dh.forEach((e) => {
          e in t && (r[e] = t[e]);
        }),
        r
      );
    })(r),
    a = null == (t = r.config) ? void 0 : t.cssVarPrefix,
    { cssMap: o, cssVars: i } = uh(n, { cssVarPrefix: a });
  return (
    Object.assign(r, {
      __cssVars: ph(
        {},
        {
          '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-ring-offset-width': '0px',
          '--chakra-ring-offset-color': '#fff',
          '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
          '--chakra-ring-offset-shadow': '0 0 #0000',
          '--chakra-ring-shadow': '0 0 #0000',
          '--chakra-space-x-reverse': '0',
          '--chakra-space-y-reverse': '0',
        },
        i,
      ),
      __cssMap: o,
      __breakpoints: sf(r.breakpoints),
    }),
    r
  );
}
var mh = 'undefined' != typeof Element,
  gh = 'function' == typeof Map,
  bh = 'function' == typeof Set,
  vh = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
function yh(e, t) {
  if (e === t) return !0;
  if (e && t && 'object' == typeof e && 'object' == typeof t) {
    if (e.constructor !== t.constructor) return !1;
    var r, n, a, o;
    if (Array.isArray(e)) {
      if ((r = e.length) != t.length) return !1;
      for (n = r; 0 != n--; ) if (!yh(e[n], t[n])) return !1;
      return !0;
    }
    if (gh && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!yh(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (bh && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (vh && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if ((r = e.length) != t.length) return !1;
      for (n = r; 0 != n--; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if ((r = (a = Object.keys(e)).length) !== Object.keys(t).length) return !1;
    for (n = r; 0 != n--; )
      if (!Object.prototype.hasOwnProperty.call(t, a[n])) return !1;
    if (mh && e instanceof Element) return !1;
    for (n = r; 0 != n--; )
      if (
        (('_owner' !== a[n] && '__v' !== a[n] && '__o' !== a[n]) ||
          !e.$$typeof) &&
        !yh(e[a[n]], t[a[n]])
      )
        return !1;
    return !0;
  }
  return e != e && t != t;
}
var xh = function (e, t) {
    try {
      return yh(e, t);
    } catch (r) {
      if ((r.message || '').match(/stack|recursion/i))
        return (
          console.warn('react-fast-compare cannot handle circular refs'), !1
        );
      throw r;
    }
  },
  kh = (e) => {
    var { cssVarsRoot: r = ':host, :root', theme: n, children: a } = e,
      o = t.exports.useMemo(() => hh(n), [n]);
    return t.exports.createElement(
      Bd,
      { theme: o },
      t.exports.createElement(Nd, { styles: (e) => ({ [r]: e.__cssVars }) }),
      a,
    );
  };
xf({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
});
var wh = () => {
  var { colorMode: e } = Lf();
  return t.exports.createElement(Nd, {
    styles: (t) => {
      var r = pf(Zd(t, 'styles.global'), { theme: t, colorMode: e });
      if (r) return Xp(r)(t);
    },
  });
};
function Sh(e) {
  return Xd(e, ['styleConfig', 'size', 'variant', 'colorScheme']);
}
function _h() {
  return (_h =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function Eh() {
  return _h({}, Lf(), {
    theme: (function () {
      var e = t.exports.useContext(Fd);
      if (!e)
        throw Error(
          'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`',
        );
      return e;
    })(),
  });
}
var Ch =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  zh = Dc(function (e) {
    return (
      Ch.test(e) ||
      (111 === e.charCodeAt(0) &&
        110 === e.charCodeAt(1) &&
        e.charCodeAt(2) < 91)
    );
  }),
  Oh = function (e) {
    return 'theme' !== e;
  },
  Ph = function (e) {
    return 'string' == typeof e && e.charCodeAt(0) > 96 ? zh : Oh;
  },
  Rh = function (e, t, r) {
    var n;
    if (t) {
      var a = t.shouldForwardProp;
      n =
        e.__emotion_forwardProp && a
          ? function (t) {
              return e.__emotion_forwardProp(t) && a(t);
            }
          : a;
    }
    return 'function' != typeof n && r && (n = e.__emotion_forwardProp), n;
  },
  Ah = function e(r, n) {
    var a,
      o,
      i = r.__emotion_real === r,
      l = (i && r.__emotion_base) || r;
    void 0 !== n && ((a = n.label), (o = n.target));
    var s = Rh(r, n, i),
      u = s || Ph(l),
      c = !u('as');
    return function () {
      var d = arguments,
        f =
          i && void 0 !== r.__emotion_styles ? r.__emotion_styles.slice(0) : [];
      if (
        (void 0 !== a && f.push('label:' + a + ';'),
        null == d[0] || void 0 === d[0].raw)
      )
        f.push.apply(f, d);
      else {
        f.push(d[0][0]);
        for (var p = d.length, h = 1; h < p; h++) f.push(d[h], d[0][h]);
      }
      var m = jd(function (e, r, n) {
        var a = (c && e.as) || l,
          i = '',
          d = [],
          p = e;
        if (null == e.theme) {
          for (var h in ((p = {}), e)) p[h] = e[h];
          p.theme = t.exports.useContext(Fd);
        }
        'string' == typeof e.className
          ? (i = yd(r.registered, d, e.className))
          : null != e.className && (i = e.className + ' ');
        var m = Ad(f.concat(d), r.registered, p);
        xd(r, m, 'string' == typeof a),
          (i += r.key + '-' + m.name),
          void 0 !== o && (i += ' ' + o);
        var g = c && void 0 === s ? Ph(a) : u,
          b = {};
        for (var v in e) (c && 'as' === v) || (g(v) && (b[v] = e[v]));
        return (b.className = i), (b.ref = n), t.exports.createElement(a, b);
      });
      return (
        (m.displayName =
          void 0 !== a
            ? a
            : 'Styled(' +
              ('string' == typeof l
                ? l
                : l.displayName || l.name || 'Component') +
              ')'),
        (m.defaultProps = r.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = l),
        (m.__emotion_styles = f),
        (m.__emotion_forwardProp = s),
        Object.defineProperty(m, 'toString', {
          value: function () {
            return '.' + o;
          },
        }),
        (m.withComponent = function (t, r) {
          return e(t, Qc({}, n, r, { shouldForwardProp: Rh(m, r, !0) })).apply(
            void 0,
            f,
          );
        }),
        m
      );
    };
  }.bind();
[
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'tspan',
].forEach(function (e) {
  Ah[e] = Ah(e);
});
var Th = new Set([
    ...Up,
    'textStyle',
    'layerStyle',
    'apply',
    'isTruncated',
    'noOfLines',
    'focusBorderColor',
    'errorBorderColor',
    'as',
    '__css',
    'css',
    'sx',
  ]),
  jh = new Set(['htmlWidth', 'htmlHeight', 'htmlSize']),
  Fh = (e) => jh.has(e) || !Th.has(e);
function Ih(e, t) {
  if (null == e) return {};
  var r,
    n,
    a = {},
    o = Object.keys(e);
  for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
  return a;
}
var Bh = (e) => {
  var { baseStyle: t } = e;
  return (e) => {
    var { css: r, __css: n, sx: a } = e,
      o = Jd(Ih(e, ['theme', 'css', '__css', 'sx']), (e, t) =>
        ((e) => e in Vp)(t),
      ),
      i = pf(t, e),
      l = Object.assign({}, n, i, ef(o), a),
      s = Xp(l)(e.theme);
    return r ? [s, r] : s;
  };
};
var Nh = function (e, t) {
  var r = null != t ? t : {},
    { baseStyle: n } = r,
    a = Ih(r, ['baseStyle']);
  a.shouldForwardProp || (a.shouldForwardProp = Fh);
  var o = Bh({ baseStyle: n });
  return Ah(e, a)(o);
};
function Lh(e) {
  return t.exports.forwardRef(e);
}
function Mh(e, r, n) {
  var a;
  void 0 === r && (r = {}), void 0 === n && (n = {});
  var { styleConfig: o } = r,
    i = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++)
        (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a;
    })(r, ['styleConfig']),
    { theme: l, colorMode: s } = Eh(),
    u = Zd(l, 'components.' + e),
    c = o || u,
    d = Yd(
      { theme: l, colorMode: s },
      null != (a = null == c ? void 0 : c.defaultProps) ? a : {},
      ef(Xd(i, ['children'])),
    ),
    f = t.exports.useRef({});
  if (c) {
    var p,
      h,
      m,
      g,
      b,
      v,
      y = pf(null != (p = c.baseStyle) ? p : {}, d),
      x = pf(
        null != (h = null == (m = c.variants) ? void 0 : m[d.variant]) ? h : {},
        d,
      ),
      k = pf(
        null != (g = null == (b = c.sizes) ? void 0 : b[d.size]) ? g : {},
        d,
      ),
      w = Yd({}, y, k, x);
    null != (v = n) &&
      v.isMultiPart &&
      c.parts &&
      c.parts.forEach((e) => {
        var t;
        w[e] = null != (t = w[e]) ? t : {};
      }),
      xh(f.current, w) || (f.current = w);
  }
  return f.current;
}
[
  'a',
  'b',
  'article',
  'aside',
  'blockquote',
  'button',
  'caption',
  'cite',
  'circle',
  'code',
  'dd',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hr',
  'img',
  'input',
  'kbd',
  'label',
  'li',
  'main',
  'mark',
  'nav',
  'ol',
  'p',
  'path',
  'pre',
  'q',
  'rect',
  's',
  'svg',
  'section',
  'select',
  'strong',
  'small',
  'span',
  'sub',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'tr',
  'ul',
].forEach((e) => {
  Nh[e] = Nh(e);
});
var Dh = {
    body: { classList: { add() {}, remove() {} } },
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
  },
  Wh = () => {},
  Hh = uf
    ? { window: window, document: document }
    : {
        window: {
          document: Dh,
          navigator: { userAgent: '' },
          CustomEvent: function () {
            return this;
          },
          addEventListener: Wh,
          removeEventListener: Wh,
          getComputedStyle: () => ({ getPropertyValue: () => '' }),
          matchMedia: () => ({
            matches: !1,
            addListener: Wh,
            removeListener: Wh,
          }),
          requestAnimationFrame: (e) =>
            'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
          cancelAnimationFrame(e) {
            'undefined' != typeof setTimeout && clearTimeout(e);
          },
          setTimeout: () => 0,
          clearTimeout: Wh,
          setInterval: () => 0,
          clearInterval: Wh,
        },
        document: Dh,
      },
  $h = t.exports.createContext(Hh);
function Uh(e) {
  var { children: r, environment: n } = e,
    [a, o] = t.exports.useState(null),
    i = t.exports.useMemo(() => {
      var e,
        t = null == a ? void 0 : a.ownerDocument,
        r = null == a ? void 0 : a.ownerDocument.defaultView;
      return null !=
        (e = null != n ? n : t ? { document: t, window: r } : void 0)
        ? e
        : Hh;
    }, [a, n]),
    l = !a && !n;
  return L.createElement(
    $h.Provider,
    { value: i },
    r,
    l &&
      L.createElement('span', {
        ref: (e) => {
          e && o(e);
        },
      }),
  );
}
var Vh,
  qh = { exports: {} };
(Vh = qh),
  (function (e) {
    var t = /^\s+/,
      r = /\s+$/,
      n = 0,
      a = e.round,
      o = e.min,
      i = e.max,
      l = e.random;
    function s(l, u) {
      if (((u = u || {}), (l = l || '') instanceof s)) return l;
      if (!(this instanceof s)) return new s(l, u);
      var c = (function (n) {
        var a,
          l,
          s,
          u = { r: 0, g: 0, b: 0 },
          c = 1,
          d = null,
          f = null,
          p = null,
          h = !1,
          m = !1;
        return (
          'string' == typeof n &&
            (n = (function (e) {
              e = e.replace(t, '').replace(r, '').toLowerCase();
              var n,
                a = !1;
              if (C[e]) (e = C[e]), (a = !0);
              else if ('transparent' == e)
                return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
              return (n = M.rgb.exec(e))
                ? { r: n[1], g: n[2], b: n[3] }
                : (n = M.rgba.exec(e))
                ? { r: n[1], g: n[2], b: n[3], a: n[4] }
                : (n = M.hsl.exec(e))
                ? { h: n[1], s: n[2], l: n[3] }
                : (n = M.hsla.exec(e))
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : (n = M.hsv.exec(e))
                ? { h: n[1], s: n[2], v: n[3] }
                : (n = M.hsva.exec(e))
                ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                : (n = M.hex8.exec(e))
                ? {
                    r: A(n[1]),
                    g: A(n[2]),
                    b: A(n[3]),
                    a: I(n[4]),
                    format: a ? 'name' : 'hex8',
                  }
                : (n = M.hex6.exec(e))
                ? {
                    r: A(n[1]),
                    g: A(n[2]),
                    b: A(n[3]),
                    format: a ? 'name' : 'hex',
                  }
                : (n = M.hex4.exec(e))
                ? {
                    r: A(n[1] + '' + n[1]),
                    g: A(n[2] + '' + n[2]),
                    b: A(n[3] + '' + n[3]),
                    a: I(n[4] + '' + n[4]),
                    format: a ? 'name' : 'hex8',
                  }
                : !!(n = M.hex3.exec(e)) && {
                    r: A(n[1] + '' + n[1]),
                    g: A(n[2] + '' + n[2]),
                    b: A(n[3] + '' + n[3]),
                    format: a ? 'name' : 'hex',
                  };
            })(n)),
          'object' == typeof n &&
            (D(n.r) && D(n.g) && D(n.b)
              ? ((a = n.r),
                (l = n.g),
                (s = n.b),
                (u = {
                  r: 255 * P(a, 255),
                  g: 255 * P(l, 255),
                  b: 255 * P(s, 255),
                }),
                (h = !0),
                (m = '%' === String(n.r).substr(-1) ? 'prgb' : 'rgb'))
              : D(n.h) && D(n.s) && D(n.v)
              ? ((d = j(n.s)),
                (f = j(n.v)),
                (u = (function (t, r, n) {
                  (t = 6 * P(t, 360)), (r = P(r, 100)), (n = P(n, 100));
                  var a = e.floor(t),
                    o = t - a,
                    i = n * (1 - r),
                    l = n * (1 - o * r),
                    s = n * (1 - (1 - o) * r),
                    u = a % 6;
                  return {
                    r: 255 * [n, l, i, i, s, n][u],
                    g: 255 * [s, n, n, l, i, i][u],
                    b: 255 * [i, i, s, n, n, l][u],
                  };
                })(n.h, d, f)),
                (h = !0),
                (m = 'hsv'))
              : D(n.h) &&
                D(n.s) &&
                D(n.l) &&
                ((d = j(n.s)),
                (p = j(n.l)),
                (u = (function (e, t, r) {
                  var n, a, o;
                  function i(e, t, r) {
                    return (
                      r < 0 && (r += 1),
                      r > 1 && (r -= 1),
                      r < 1 / 6
                        ? e + 6 * (t - e) * r
                        : r < 0.5
                        ? t
                        : r < 2 / 3
                        ? e + (t - e) * (2 / 3 - r) * 6
                        : e
                    );
                  }
                  if (
                    ((e = P(e, 360)), (t = P(t, 100)), (r = P(r, 100)), 0 === t)
                  )
                    n = a = o = r;
                  else {
                    var l = r < 0.5 ? r * (1 + t) : r + t - r * t,
                      s = 2 * r - l;
                    (n = i(s, l, e + 1 / 3)),
                      (a = i(s, l, e)),
                      (o = i(s, l, e - 1 / 3));
                  }
                  return { r: 255 * n, g: 255 * a, b: 255 * o };
                })(n.h, d, p)),
                (h = !0),
                (m = 'hsl')),
            n.hasOwnProperty('a') && (c = n.a)),
          (c = O(c)),
          {
            ok: h,
            format: n.format || m,
            r: o(255, i(u.r, 0)),
            g: o(255, i(u.g, 0)),
            b: o(255, i(u.b, 0)),
            a: c,
          }
        );
      })(l);
      (this._originalInput = l),
        (this._r = c.r),
        (this._g = c.g),
        (this._b = c.b),
        (this._a = c.a),
        (this._roundA = a(100 * this._a) / 100),
        (this._format = u.format || c.format),
        (this._gradientType = u.gradientType),
        this._r < 1 && (this._r = a(this._r)),
        this._g < 1 && (this._g = a(this._g)),
        this._b < 1 && (this._b = a(this._b)),
        (this._ok = c.ok),
        (this._tc_id = n++);
    }
    function u(e, t, r) {
      (e = P(e, 255)), (t = P(t, 255)), (r = P(r, 255));
      var n,
        a,
        l = i(e, t, r),
        s = o(e, t, r),
        u = (l + s) / 2;
      if (l == s) n = a = 0;
      else {
        var c = l - s;
        switch (((a = u > 0.5 ? c / (2 - l - s) : c / (l + s)), l)) {
          case e:
            n = (t - r) / c + (t < r ? 6 : 0);
            break;
          case t:
            n = (r - e) / c + 2;
            break;
          case r:
            n = (e - t) / c + 4;
        }
        n /= 6;
      }
      return { h: n, s: a, l: u };
    }
    function c(e, t, r) {
      (e = P(e, 255)), (t = P(t, 255)), (r = P(r, 255));
      var n,
        a,
        l = i(e, t, r),
        s = o(e, t, r),
        u = l,
        c = l - s;
      if (((a = 0 === l ? 0 : c / l), l == s)) n = 0;
      else {
        switch (l) {
          case e:
            n = (t - r) / c + (t < r ? 6 : 0);
            break;
          case t:
            n = (r - e) / c + 2;
            break;
          case r:
            n = (e - t) / c + 4;
        }
        n /= 6;
      }
      return { h: n, s: a, v: u };
    }
    function d(e, t, r, n) {
      var o = [
        T(a(e).toString(16)),
        T(a(t).toString(16)),
        T(a(r).toString(16)),
      ];
      return n &&
        o[0].charAt(0) == o[0].charAt(1) &&
        o[1].charAt(0) == o[1].charAt(1) &&
        o[2].charAt(0) == o[2].charAt(1)
        ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
        : o.join('');
    }
    function f(e, t, r, n) {
      return [
        T(F(n)),
        T(a(e).toString(16)),
        T(a(t).toString(16)),
        T(a(r).toString(16)),
      ].join('');
    }
    function p(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = s(e).toHsl();
      return (r.s -= t / 100), (r.s = R(r.s)), s(r);
    }
    function h(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = s(e).toHsl();
      return (r.s += t / 100), (r.s = R(r.s)), s(r);
    }
    function m(e) {
      return s(e).desaturate(100);
    }
    function g(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = s(e).toHsl();
      return (r.l += t / 100), (r.l = R(r.l)), s(r);
    }
    function b(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = s(e).toRgb();
      return (
        (r.r = i(0, o(255, r.r - a((-t / 100) * 255)))),
        (r.g = i(0, o(255, r.g - a((-t / 100) * 255)))),
        (r.b = i(0, o(255, r.b - a((-t / 100) * 255)))),
        s(r)
      );
    }
    function v(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = s(e).toHsl();
      return (r.l -= t / 100), (r.l = R(r.l)), s(r);
    }
    function y(e, t) {
      var r = s(e).toHsl(),
        n = (r.h + t) % 360;
      return (r.h = n < 0 ? 360 + n : n), s(r);
    }
    function x(e) {
      var t = s(e).toHsl();
      return (t.h = (t.h + 180) % 360), s(t);
    }
    function k(e) {
      var t = s(e).toHsl(),
        r = t.h;
      return [
        s(e),
        s({ h: (r + 120) % 360, s: t.s, l: t.l }),
        s({ h: (r + 240) % 360, s: t.s, l: t.l }),
      ];
    }
    function w(e) {
      var t = s(e).toHsl(),
        r = t.h;
      return [
        s(e),
        s({ h: (r + 90) % 360, s: t.s, l: t.l }),
        s({ h: (r + 180) % 360, s: t.s, l: t.l }),
        s({ h: (r + 270) % 360, s: t.s, l: t.l }),
      ];
    }
    function S(e) {
      var t = s(e).toHsl(),
        r = t.h;
      return [
        s(e),
        s({ h: (r + 72) % 360, s: t.s, l: t.l }),
        s({ h: (r + 216) % 360, s: t.s, l: t.l }),
      ];
    }
    function _(e, t, r) {
      (t = t || 6), (r = r || 30);
      var n = s(e).toHsl(),
        a = 360 / r,
        o = [s(e)];
      for (n.h = (n.h - ((a * t) >> 1) + 720) % 360; --t; )
        (n.h = (n.h + a) % 360), o.push(s(n));
      return o;
    }
    function E(e, t) {
      t = t || 6;
      for (
        var r = s(e).toHsv(), n = r.h, a = r.s, o = r.v, i = [], l = 1 / t;
        t--;

      )
        i.push(s({ h: n, s: a, v: o })), (o = (o + l) % 1);
      return i;
    }
    (s.prototype = {
      isDark: function () {
        return this.getBrightness() < 128;
      },
      isLight: function () {
        return !this.isDark();
      },
      isValid: function () {
        return this._ok;
      },
      getOriginalInput: function () {
        return this._originalInput;
      },
      getFormat: function () {
        return this._format;
      },
      getAlpha: function () {
        return this._a;
      },
      getBrightness: function () {
        var e = this.toRgb();
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
      },
      getLuminance: function () {
        var t,
          r,
          n,
          a = this.toRgb();
        return (
          (t = a.r / 255),
          (r = a.g / 255),
          (n = a.b / 255),
          0.2126 *
            (t <= 0.03928 ? t / 12.92 : e.pow((t + 0.055) / 1.055, 2.4)) +
            0.7152 *
              (r <= 0.03928 ? r / 12.92 : e.pow((r + 0.055) / 1.055, 2.4)) +
            0.0722 *
              (n <= 0.03928 ? n / 12.92 : e.pow((n + 0.055) / 1.055, 2.4))
        );
      },
      setAlpha: function (e) {
        return (this._a = O(e)), (this._roundA = a(100 * this._a) / 100), this;
      },
      toHsv: function () {
        var e = c(this._r, this._g, this._b);
        return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
      },
      toHsvString: function () {
        var e = c(this._r, this._g, this._b),
          t = a(360 * e.h),
          r = a(100 * e.s),
          n = a(100 * e.v);
        return 1 == this._a
          ? 'hsv(' + t + ', ' + r + '%, ' + n + '%)'
          : 'hsva(' + t + ', ' + r + '%, ' + n + '%, ' + this._roundA + ')';
      },
      toHsl: function () {
        var e = u(this._r, this._g, this._b);
        return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
      },
      toHslString: function () {
        var e = u(this._r, this._g, this._b),
          t = a(360 * e.h),
          r = a(100 * e.s),
          n = a(100 * e.l);
        return 1 == this._a
          ? 'hsl(' + t + ', ' + r + '%, ' + n + '%)'
          : 'hsla(' + t + ', ' + r + '%, ' + n + '%, ' + this._roundA + ')';
      },
      toHex: function (e) {
        return d(this._r, this._g, this._b, e);
      },
      toHexString: function (e) {
        return '#' + this.toHex(e);
      },
      toHex8: function (e) {
        return (function (e, t, r, n, o) {
          var i = [
            T(a(e).toString(16)),
            T(a(t).toString(16)),
            T(a(r).toString(16)),
            T(F(n)),
          ];
          return o &&
            i[0].charAt(0) == i[0].charAt(1) &&
            i[1].charAt(0) == i[1].charAt(1) &&
            i[2].charAt(0) == i[2].charAt(1) &&
            i[3].charAt(0) == i[3].charAt(1)
            ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
            : i.join('');
        })(this._r, this._g, this._b, this._a, e);
      },
      toHex8String: function (e) {
        return '#' + this.toHex8(e);
      },
      toRgb: function () {
        return { r: a(this._r), g: a(this._g), b: a(this._b), a: this._a };
      },
      toRgbString: function () {
        return 1 == this._a
          ? 'rgb(' + a(this._r) + ', ' + a(this._g) + ', ' + a(this._b) + ')'
          : 'rgba(' +
              a(this._r) +
              ', ' +
              a(this._g) +
              ', ' +
              a(this._b) +
              ', ' +
              this._roundA +
              ')';
      },
      toPercentageRgb: function () {
        return {
          r: a(100 * P(this._r, 255)) + '%',
          g: a(100 * P(this._g, 255)) + '%',
          b: a(100 * P(this._b, 255)) + '%',
          a: this._a,
        };
      },
      toPercentageRgbString: function () {
        return 1 == this._a
          ? 'rgb(' +
              a(100 * P(this._r, 255)) +
              '%, ' +
              a(100 * P(this._g, 255)) +
              '%, ' +
              a(100 * P(this._b, 255)) +
              '%)'
          : 'rgba(' +
              a(100 * P(this._r, 255)) +
              '%, ' +
              a(100 * P(this._g, 255)) +
              '%, ' +
              a(100 * P(this._b, 255)) +
              '%, ' +
              this._roundA +
              ')';
      },
      toName: function () {
        return 0 === this._a
          ? 'transparent'
          : !(this._a < 1) && (z[d(this._r, this._g, this._b, !0)] || !1);
      },
      toFilter: function (e) {
        var t = '#' + f(this._r, this._g, this._b, this._a),
          r = t,
          n = this._gradientType ? 'GradientType = 1, ' : '';
        if (e) {
          var a = s(e);
          r = '#' + f(a._r, a._g, a._b, a._a);
        }
        return (
          'progid:DXImageTransform.Microsoft.gradient(' +
          n +
          'startColorstr=' +
          t +
          ',endColorstr=' +
          r +
          ')'
        );
      },
      toString: function (e) {
        var t = !!e;
        e = e || this._format;
        var r = !1,
          n = this._a < 1 && this._a >= 0;
        return t ||
          !n ||
          ('hex' !== e &&
            'hex6' !== e &&
            'hex3' !== e &&
            'hex4' !== e &&
            'hex8' !== e &&
            'name' !== e)
          ? ('rgb' === e && (r = this.toRgbString()),
            'prgb' === e && (r = this.toPercentageRgbString()),
            ('hex' !== e && 'hex6' !== e) || (r = this.toHexString()),
            'hex3' === e && (r = this.toHexString(!0)),
            'hex4' === e && (r = this.toHex8String(!0)),
            'hex8' === e && (r = this.toHex8String()),
            'name' === e && (r = this.toName()),
            'hsl' === e && (r = this.toHslString()),
            'hsv' === e && (r = this.toHsvString()),
            r || this.toHexString())
          : 'name' === e && 0 === this._a
          ? this.toName()
          : this.toRgbString();
      },
      clone: function () {
        return s(this.toString());
      },
      _applyModification: function (e, t) {
        var r = e.apply(null, [this].concat([].slice.call(t)));
        return (
          (this._r = r._r),
          (this._g = r._g),
          (this._b = r._b),
          this.setAlpha(r._a),
          this
        );
      },
      lighten: function () {
        return this._applyModification(g, arguments);
      },
      brighten: function () {
        return this._applyModification(b, arguments);
      },
      darken: function () {
        return this._applyModification(v, arguments);
      },
      desaturate: function () {
        return this._applyModification(p, arguments);
      },
      saturate: function () {
        return this._applyModification(h, arguments);
      },
      greyscale: function () {
        return this._applyModification(m, arguments);
      },
      spin: function () {
        return this._applyModification(y, arguments);
      },
      _applyCombination: function (e, t) {
        return e.apply(null, [this].concat([].slice.call(t)));
      },
      analogous: function () {
        return this._applyCombination(_, arguments);
      },
      complement: function () {
        return this._applyCombination(x, arguments);
      },
      monochromatic: function () {
        return this._applyCombination(E, arguments);
      },
      splitcomplement: function () {
        return this._applyCombination(S, arguments);
      },
      triad: function () {
        return this._applyCombination(k, arguments);
      },
      tetrad: function () {
        return this._applyCombination(w, arguments);
      },
    }),
      (s.fromRatio = function (e, t) {
        if ('object' == typeof e) {
          var r = {};
          for (var n in e)
            e.hasOwnProperty(n) && (r[n] = 'a' === n ? e[n] : j(e[n]));
          e = r;
        }
        return s(e, t);
      }),
      (s.equals = function (e, t) {
        return !(!e || !t) && s(e).toRgbString() == s(t).toRgbString();
      }),
      (s.random = function () {
        return s.fromRatio({ r: l(), g: l(), b: l() });
      }),
      (s.mix = function (e, t, r) {
        r = 0 === r ? 0 : r || 50;
        var n = s(e).toRgb(),
          a = s(t).toRgb(),
          o = r / 100;
        return s({
          r: (a.r - n.r) * o + n.r,
          g: (a.g - n.g) * o + n.g,
          b: (a.b - n.b) * o + n.b,
          a: (a.a - n.a) * o + n.a,
        });
      }),
      (s.readability = function (t, r) {
        var n = s(t),
          a = s(r);
        return (
          (e.max(n.getLuminance(), a.getLuminance()) + 0.05) /
          (e.min(n.getLuminance(), a.getLuminance()) + 0.05)
        );
      }),
      (s.isReadable = function (e, t, r) {
        var n,
          a,
          o,
          i,
          l,
          u = s.readability(e, t);
        switch (
          ((a = !1),
          ((o = r),
          (i = (
            (o = o || { level: 'AA', size: 'small' }).level || 'AA'
          ).toUpperCase()),
          (l = (o.size || 'small').toLowerCase()),
          'AA' !== i && 'AAA' !== i && (i = 'AA'),
          'small' !== l && 'large' !== l && (l = 'small'),
          (n = { level: i, size: l })).level + n.size)
        ) {
          case 'AAsmall':
          case 'AAAlarge':
            a = u >= 4.5;
            break;
          case 'AAlarge':
            a = u >= 3;
            break;
          case 'AAAsmall':
            a = u >= 7;
        }
        return a;
      }),
      (s.mostReadable = function (e, t, r) {
        var n,
          a,
          o,
          i,
          l = null,
          u = 0;
        (a = (r = r || {}).includeFallbackColors), (o = r.level), (i = r.size);
        for (var c = 0; c < t.length; c++)
          (n = s.readability(e, t[c])) > u && ((u = n), (l = s(t[c])));
        return s.isReadable(e, l, { level: o, size: i }) || !a
          ? l
          : ((r.includeFallbackColors = !1),
            s.mostReadable(e, ['#fff', '#000'], r));
      });
    var C = (s.names = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '0ff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000',
        blanchedalmond: 'ffebcd',
        blue: '00f',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        burntsienna: 'ea7e5d',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '0ff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkgrey: 'a9a9a9',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkslategrey: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dimgrey: '696969',
        dodgerblue: '1e90ff',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'f0f',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        grey: '808080',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgray: 'd3d3d3',
        lightgreen: '90ee90',
        lightgrey: 'd3d3d3',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslategray: '789',
        lightslategrey: '789',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '0f0',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'f0f',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370db',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'db7093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'f00',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        slategrey: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        wheat: 'f5deb3',
        white: 'fff',
        whitesmoke: 'f5f5f5',
        yellow: 'ff0',
        yellowgreen: '9acd32',
      }),
      z = (s.hexNames = (function (e) {
        var t = {};
        for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
        return t;
      })(C));
    function O(e) {
      return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
    }
    function P(t, r) {
      (function (e) {
        return (
          'string' == typeof e && -1 != e.indexOf('.') && 1 === parseFloat(e)
        );
      })(t) && (t = '100%');
      var n = (function (e) {
        return 'string' == typeof e && -1 != e.indexOf('%');
      })(t);
      return (
        (t = o(r, i(0, parseFloat(t)))),
        n && (t = parseInt(t * r, 10) / 100),
        e.abs(t - r) < 1e-6 ? 1 : (t % r) / parseFloat(r)
      );
    }
    function R(e) {
      return o(1, i(0, e));
    }
    function A(e) {
      return parseInt(e, 16);
    }
    function T(e) {
      return 1 == e.length ? '0' + e : '' + e;
    }
    function j(e) {
      return e <= 1 && (e = 100 * e + '%'), e;
    }
    function F(t) {
      return e.round(255 * parseFloat(t)).toString(16);
    }
    function I(e) {
      return A(e) / 255;
    }
    var B,
      N,
      L,
      M =
        ((N =
          '[\\s|\\(]+(' +
          (B = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)') +
          ')[,|\\s]+(' +
          B +
          ')[,|\\s]+(' +
          B +
          ')\\s*\\)?'),
        (L =
          '[\\s|\\(]+(' +
          B +
          ')[,|\\s]+(' +
          B +
          ')[,|\\s]+(' +
          B +
          ')[,|\\s]+(' +
          B +
          ')\\s*\\)?'),
        {
          CSS_UNIT: new RegExp(B),
          rgb: new RegExp('rgb' + N),
          rgba: new RegExp('rgba' + L),
          hsl: new RegExp('hsl' + N),
          hsla: new RegExp('hsla' + L),
          hsv: new RegExp('hsv' + N),
          hsva: new RegExp('hsva' + L),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        });
    function D(e) {
      return !!M.CSS_UNIT.exec(e);
    }
    Vh.exports ? (Vh.exports = s) : (window.tinycolor = s);
  })(Math);
var Qh = qh.exports,
  Yh = (e, t, r) => {
    var n = Zd(e, 'colors.' + t, t);
    return Qh(n).isValid() ? n : r;
  },
  Xh = (e) => (t) =>
    'dark' ===
    ((e) => (t) => {
      var r = Yh(t, e);
      return Qh(r).isDark() ? 'dark' : 'light';
    })(e)(t),
  Gh = (e, t) => (r) => {
    var n = Yh(r, e);
    return Qh(n).setAlpha(t).toRgbString();
  };
function Kh(e, t) {
  return (
    void 0 === e && (e = '1rem'),
    void 0 === t && (t = 'rgba(255, 255, 255, 0.15)'),
    {
      backgroundImage:
        'linear-gradient(\n    45deg,\n    ' +
        t +
        ' 25%,\n    transparent 25%,\n    transparent 50%,\n    ' +
        t +
        ' 50%,\n    ' +
        t +
        ' 75%,\n    transparent 75%,\n    transparent\n  )',
      backgroundSize: e + ' ' + e,
    }
  );
}
function Zh(e) {
  var t,
    r,
    n = Qh.random().toHexString();
  return !e || (Ud((t = e)) && 0 === Object.keys(t).length)
    ? n
    : e.string && e.colors
    ? (function (e, t) {
        var r = 0;
        if (0 === e.length) return t[0];
        for (var n = 0; n < e.length; n += 1)
          (r = e.charCodeAt(n) + ((r << 5) - r)), (r &= r);
        return (r = ((r % t.length) + t.length) % t.length), t[r];
      })(e.string, e.colors)
    : e.string && !e.colors
    ? (function (e) {
        var t = 0;
        if (0 === e.length) return t.toString();
        for (var r = 0; r < e.length; r += 1)
          (t = e.charCodeAt(r) + ((t << 5) - t)), (t &= t);
        for (var n = '#', a = 0; a < 3; a += 1) {
          n += ('00' + ((t >> (8 * a)) & 255).toString(16)).substr(-2);
        }
        return n;
      })(e.string)
    : e.colors && !e.string
    ? (r = e.colors)[Math.floor(Math.random() * r.length)]
    : n;
}
function Jh(e, t) {
  return (r) => ('dark' === r.colorMode ? t : e);
}
function em(e) {
  var { orientation: t, vertical: r, horizontal: n } = e;
  return t ? ('vertical' === t ? r : n) : {};
}
function tm() {
  return (tm =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function rm(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
class nm {
  constructor(e) {
    var t = this;
    (this.name = e),
      rm(this, 'map', {}),
      rm(this, 'called', !1),
      rm(this, 'assert', () => {
        if (this.called)
          throw new Error(
            '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?',
          );
        this.called = !0;
      }),
      rm(this, 'parts', function () {
        t.assert();
        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
          r[n] = arguments[n];
        for (var a of r) t.map[a] = t.toPart(a);
        return t;
      }),
      rm(this, 'extend', function () {
        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
          r[n] = arguments[n];
        for (var a of r) a in t.map || (t.map[a] = t.toPart(a));
        return t;
      }),
      rm(this, 'toPart', (e) => {
        var t =
          'chakra-' +
          (['container', 'root'].includes(null != e ? e : '')
            ? [this.name]
            : [this.name, e]
          )
            .filter(Boolean)
            .join('__');
        return { className: t, selector: '.' + t, toString: () => e };
      }),
      rm(this, '__type', {});
  }
  get selectors() {
    return Object.fromEntries(
      Object.entries(this.map).map((e) => {
        var [t, r] = e;
        return [t, r.selector];
      }),
    );
  }
  get classNames() {
    return Object.fromEntries(
      Object.entries(this.map).map((e) => {
        var [t, r] = e;
        return [t, r.className];
      }),
    );
  }
  get keys() {
    return Object.keys(this.map);
  }
}
function am(e) {
  return new nm(e);
}
function om(e) {
  return Ud(e) && e.reference ? e.reference : String(e);
}
var im = function (e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    return r
      .map(om)
      .join(' ' + e + ' ')
      .replace(/calc/g, '');
  },
  lm = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + im('+', ...t) + ')';
  },
  sm = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + im('-', ...t) + ')';
  },
  um = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + im('*', ...t) + ')';
  },
  cm = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + im('/', ...t) + ')';
  },
  dm = (e) => {
    var t = om(e);
    return null == t || Number.isNaN(parseFloat(t))
      ? um(t, -1)
      : String(t).startsWith('-')
      ? String(t).slice(1)
      : '-' + t;
  },
  fm = Object.assign(
    (e) => ({
      add: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return fm(lm(e, ...r));
      },
      subtract: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return fm(sm(e, ...r));
      },
      multiply: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return fm(um(e, ...r));
      },
      divide: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return fm(cm(e, ...r));
      },
      negate: () => fm(dm(e)),
      toString: () => e.toString(),
    }),
    { add: lm, subtract: sm, multiply: um, divide: cm, negate: dm },
  );
function pm(e) {
  var t = (function (e, t) {
    return void 0 === t && (t = '-'), e.replace(/\s+/g, t);
  })(e.toString());
  return t.includes('\\.')
    ? e
    : (function (e) {
        return !Number.isInteger(parseFloat(e.toString()));
      })(e)
    ? t.replace('.', '\\.')
    : e;
}
function hm(e, t) {
  return 'var(' + pm(e) + (t ? ', ' + t : '') + ')';
}
function mm(e, t) {
  return (
    void 0 === t && (t = ''),
    '--' +
      (function (e, t) {
        return void 0 === t && (t = ''), [t, pm(e)].filter(Boolean).join('-');
      })(e, t)
  );
}
function gm(e, t) {
  var r = mm(e, null == t ? void 0 : t.prefix);
  return { variable: r, reference: hm(r, bm(null == t ? void 0 : t.fallback)) };
}
function bm(e) {
  return 'string' == typeof e ? e : null == e ? void 0 : e.reference;
}
var vm = am('accordion')
    .parts('container', 'item', 'button', 'panel')
    .extend('icon'),
  ym = am('alert').parts('title', 'description', 'container').extend('icon'),
  xm = am('avatar')
    .parts('label', 'badge', 'container')
    .extend('excessLabel', 'group'),
  km = am('breadcrumb').parts('link', 'item').extend('separator');
am('button').parts();
var wm = am('checkbox').parts('control', 'icon').extend('label');
am('progress').parts('track', 'filledTrack').extend('label');
var Sm = am('drawer')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  _m = am('editable').parts('preview', 'input'),
  Em = am('form').parts('container', 'requiredIndicator', 'helperText'),
  Cm = am('formError').parts('text', 'icon'),
  zm = am('input').parts('addon', 'field', 'element'),
  Om = am('list').parts('container', 'item', 'icon'),
  Pm = am('menu')
    .parts('button', 'list', 'item')
    .extend('groupTitle', 'command', 'divider'),
  Rm = am('modal')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  Am = am('numberinput').parts('root', 'field', 'stepperGroup', 'stepper');
am('pininput').parts('field');
var Tm = am('popover')
    .parts('content', 'header', 'body', 'footer')
    .extend('popper', 'arrow'),
  jm = am('progress').parts('label', 'filledTrack', 'track'),
  Fm = am('radio').parts('container', 'control', 'label'),
  Im = am('select').parts('field', 'icon'),
  Bm = am('slider').parts('container', 'track', 'thumb', 'filledTrack'),
  Nm = am('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  Lm = am('switch').parts('container', 'track', 'thumb'),
  Mm = am('table').parts(
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'tfoot',
    'caption',
  ),
  Dm = am('tabs').parts(
    'root',
    'tab',
    'tablist',
    'tabpanel',
    'tabpanels',
    'indicator',
  ),
  Wm = am('tag').parts('container', 'label', 'closeButton'),
  Hm = {
    container: {
      borderTopWidth: '1px',
      borderColor: 'inherit',
      _last: { borderBottomWidth: '1px' },
    },
    button: {
      transitionProperty: 'common',
      transitionDuration: 'normal',
      fontSize: '1rem',
      _focus: { boxShadow: 'outline' },
      _hover: { bg: 'blackAlpha.50' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      px: 4,
      py: 2,
    },
    panel: { pt: 2, px: 4, pb: 5 },
    icon: { fontSize: '1.25em' },
  },
  $m = { parts: vm.keys, baseStyle: Hm };
function Um(e) {
  var { theme: t, colorScheme: r } = e;
  return Jh(Yh(t, r + '.100', r), Gh(r + '.200', 0.16)(t))(e);
}
var Vm = {
    subtle: (e) => {
      var { colorScheme: t } = e;
      return {
        container: { bg: Um(e) },
        icon: { color: Jh(t + '.500', t + '.200')(e) },
      };
    },
    'left-accent': (e) => {
      var { colorScheme: t } = e;
      return {
        container: {
          paddingStart: 3,
          borderStartWidth: '4px',
          borderStartColor: Jh(t + '.500', t + '.200')(e),
          bg: Um(e),
        },
        icon: { color: Jh(t + '.500', t + '.200')(e) },
      };
    },
    'top-accent': (e) => {
      var { colorScheme: t } = e;
      return {
        container: {
          pt: 2,
          borderTopWidth: '4px',
          borderTopColor: Jh(t + '.500', t + '.200')(e),
          bg: Um(e),
        },
        icon: { color: Jh(t + '.500', t + '.200')(e) },
      };
    },
    solid: (e) => {
      var { colorScheme: t } = e;
      return {
        container: {
          bg: Jh(t + '.500', t + '.200')(e),
          color: Jh('white', 'gray.900')(e),
        },
      };
    },
  },
  qm = {
    parts: ym.keys,
    baseStyle: {
      container: { px: 4, py: 3 },
      title: { fontWeight: 'bold', lineHeight: 6, marginEnd: 2 },
      description: { lineHeight: 6 },
      icon: { flexShrink: 0, marginEnd: 3, w: 5, h: 6 },
    },
    variants: Vm,
    defaultProps: { variant: 'subtle', colorScheme: 'blue' },
  },
  Qm = {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  };
function Ym() {
  return (Ym =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Xm = Ym(
    {},
    Qm,
    {
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      '3xs': '14rem',
      '2xs': '16rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '90rem',
    },
    { container: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' } },
  ),
  Gm = (e) => ({
    transform: 'translate(25%, 25%)',
    borderRadius: 'full',
    border: '0.2em solid',
    borderColor: Jh('white', 'gray.800')(e),
  }),
  Km = (e) => ({ bg: Jh('gray.200', 'whiteAlpha.400')(e) }),
  Zm = (e) => {
    var { name: t, theme: r } = e,
      n = t ? Zh({ string: t }) : 'gray.400',
      a = 'white';
    return (
      Xh(n)(r) || (a = 'gray.800'),
      {
        bg: n,
        color: a,
        borderColor: Jh('white', 'gray.800')(e),
        verticalAlign: 'top',
      }
    );
  };
function Jm(e) {
  var t = Xm[e];
  return {
    container: {
      width: e,
      height: e,
      fontSize: 'calc(' + (null != t ? t : e) + ' / 2.5)',
    },
    excessLabel: { width: e, height: e },
    label: {
      fontSize: 'calc(' + (null != t ? t : e) + ' / 2.5)',
      lineHeight: '100%' !== e ? (null != t ? t : e) : void 0,
    },
  };
}
var eg = {
    '2xs': Jm('4'),
    xs: Jm('6'),
    sm: Jm('8'),
    md: Jm('12'),
    lg: Jm('16'),
    xl: Jm('24'),
    '2xl': Jm('32'),
    full: Jm('100%'),
  },
  tg = {
    parts: xm.keys,
    baseStyle: (e) => ({ badge: Gm(e), excessLabel: Km(e), container: Zm(e) }),
    sizes: eg,
    defaultProps: { size: 'md' },
  },
  rg = {
    baseStyle: {
      px: 1,
      textTransform: 'uppercase',
      fontSize: 'xs',
      borderRadius: 'sm',
      fontWeight: 'bold',
    },
    variants: {
      solid: (e) => {
        var { colorScheme: t, theme: r } = e;
        return {
          bg: Jh(t + '.500', Gh(t + '.500', 0.6)(r))(e),
          color: Jh('white', 'whiteAlpha.800')(e),
        };
      },
      subtle: (e) => {
        var { colorScheme: t, theme: r } = e;
        return {
          bg: Jh(t + '.100', Gh(t + '.200', 0.16)(r))(e),
          color: Jh(t + '.800', t + '.200')(e),
        };
      },
      outline: (e) => {
        var { colorScheme: t, theme: r } = e,
          n = Gh(t + '.200', 0.8)(r),
          a = Jh(Yh(r, t + '.500'), n)(e);
        return { color: a, boxShadow: 'inset 0 0 0px 1px ' + a };
      },
    },
    defaultProps: { variant: 'subtle', colorScheme: 'gray' },
  },
  ng = {
    link: {
      transitionProperty: 'common',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-out',
      cursor: 'pointer',
      textDecoration: 'none',
      outline: 'none',
      color: 'inherit',
      _hover: { textDecoration: 'underline' },
      _focus: { boxShadow: 'outline' },
    },
  },
  ag = { parts: km.keys, baseStyle: ng };
function og() {
  return (og =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var ig = (e) => {
    var { colorScheme: t, theme: r } = e;
    if ('gray' === t)
      return {
        color: Jh('inherit', 'whiteAlpha.900')(e),
        _hover: { bg: Jh('gray.100', 'whiteAlpha.200')(e) },
        _active: { bg: Jh('gray.200', 'whiteAlpha.300')(e) },
      };
    var n = Gh(t + '.200', 0.12)(r),
      a = Gh(t + '.200', 0.24)(r);
    return {
      color: Jh(t + '.600', t + '.200')(e),
      bg: 'transparent',
      _hover: { bg: Jh(t + '.50', n)(e) },
      _active: { bg: Jh(t + '.100', a)(e) },
    };
  },
  lg = {
    yellow: {
      bg: 'yellow.400',
      color: 'black',
      hoverBg: 'yellow.500',
      activeBg: 'yellow.600',
    },
    cyan: {
      bg: 'cyan.400',
      color: 'black',
      hoverBg: 'cyan.500',
      activeBg: 'cyan.600',
    },
  },
  sg = {
    baseStyle: {
      lineHeight: '1.2',
      borderRadius: 'md',
      fontWeight: 'semibold',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focus: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
      _hover: { _disabled: { bg: 'initial' } },
    },
    variants: {
      ghost: ig,
      outline: (e) => {
        var { colorScheme: t } = e,
          r = Jh('gray.200', 'whiteAlpha.300')(e);
        return og(
          {
            border: '1px solid',
            borderColor: 'gray' === t ? r : 'currentColor',
          },
          ig(e),
        );
      },
      solid: (e) => {
        var t,
          { colorScheme: r } = e;
        if ('gray' === r) {
          var n = Jh('gray.100', 'whiteAlpha.200')(e);
          return {
            bg: n,
            _hover: {
              bg: Jh('gray.200', 'whiteAlpha.300')(e),
              _disabled: { bg: n },
            },
            _active: { bg: Jh('gray.300', 'whiteAlpha.400')(e) },
          };
        }
        var {
            bg: a = r + '.500',
            color: o = 'white',
            hoverBg: i = r + '.600',
            activeBg: l = r + '.700',
          } = null != (t = lg[r]) ? t : {},
          s = Jh(a, r + '.200')(e);
        return {
          bg: s,
          color: Jh(o, 'gray.800')(e),
          _hover: { bg: Jh(i, r + '.300')(e), _disabled: { bg: s } },
          _active: { bg: Jh(l, r + '.400')(e) },
        };
      },
      link: (e) => {
        var { colorScheme: t } = e;
        return {
          padding: 0,
          height: 'auto',
          lineHeight: 'normal',
          verticalAlign: 'baseline',
          color: Jh(t + '.500', t + '.200')(e),
          _hover: {
            textDecoration: 'underline',
            _disabled: { textDecoration: 'none' },
          },
          _active: { color: Jh(t + '.700', t + '.500')(e) },
        };
      },
      unstyled: {
        bg: 'none',
        color: 'inherit',
        display: 'inline',
        lineHeight: 'inherit',
        m: 0,
        p: 0,
      },
    },
    sizes: {
      lg: { h: 12, minW: 12, fontSize: 'lg', px: 6 },
      md: { h: 10, minW: 10, fontSize: 'md', px: 4 },
      sm: { h: 8, minW: 8, fontSize: 'sm', px: 3 },
      xs: { h: 6, minW: 6, fontSize: 'xs', px: 2 },
    },
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
  },
  ug = (e) => {
    var { colorScheme: t } = e;
    return {
      w: '100%',
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',
      _checked: {
        bg: Jh(t + '.500', t + '.200')(e),
        borderColor: Jh(t + '.500', t + '.200')(e),
        color: Jh('white', 'gray.900')(e),
        _hover: {
          bg: Jh(t + '.600', t + '.300')(e),
          borderColor: Jh(t + '.600', t + '.300')(e),
        },
        _disabled: {
          borderColor: Jh('gray.200', 'transparent')(e),
          bg: Jh('gray.200', 'whiteAlpha.300')(e),
          color: Jh('gray.500', 'whiteAlpha.500')(e),
        },
      },
      _indeterminate: {
        bg: Jh(t + '.500', t + '.200')(e),
        borderColor: Jh(t + '.500', t + '.200')(e),
        color: Jh('white', 'gray.900')(e),
      },
      _disabled: {
        bg: Jh('gray.100', 'whiteAlpha.100')(e),
        borderColor: Jh('gray.100', 'transparent')(e),
      },
      _focus: { boxShadow: 'outline' },
      _invalid: { borderColor: Jh('red.500', 'red.300')(e) },
    };
  },
  cg = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  dg = { transitionProperty: 'transform', transitionDuration: 'normal' },
  fg = {
    parts: wm.keys,
    baseStyle: (e) => ({ icon: dg, control: ug(e), label: cg }),
    sizes: {
      sm: {
        control: { h: 3, w: 3 },
        label: { fontSize: 'sm' },
        icon: { fontSize: '0.45rem' },
      },
      md: {
        control: { w: 4, h: 4 },
        label: { fontSize: 'md' },
        icon: { fontSize: '0.625rem' },
      },
      lg: {
        control: { w: 5, h: 5 },
        label: { fontSize: 'lg' },
        icon: { fontSize: '0.625rem' },
      },
    },
    defaultProps: { size: 'md', colorScheme: 'blue' },
  },
  pg = gm('close-button-size'),
  hg = {
    baseStyle: (e) => {
      var t = Jh('blackAlpha.100', 'whiteAlpha.100')(e),
        r = Jh('blackAlpha.200', 'whiteAlpha.200')(e);
      return {
        w: [pg.reference],
        h: [pg.reference],
        borderRadius: 'md',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
        _hover: { bg: t },
        _active: { bg: r },
        _focus: { boxShadow: 'outline' },
      };
    },
    sizes: {
      lg: { [pg.variable]: '40px', fontSize: '16px' },
      md: { [pg.variable]: '32px', fontSize: '12px' },
      sm: { [pg.variable]: '24px', fontSize: '10px' },
    },
    defaultProps: { size: 'md' },
  },
  { variants: mg, defaultProps: gg } = rg,
  bg = {
    baseStyle: {
      fontFamily: 'mono',
      fontSize: 'sm',
      px: '0.2em',
      borderRadius: 'sm',
    },
    variants: mg,
    defaultProps: gg,
  },
  vg = { baseStyle: { w: '100%', mx: 'auto', maxW: '60ch', px: '1rem' } },
  yg = {
    baseStyle: { opacity: 0.6, borderColor: 'inherit' },
    variants: {
      solid: { borderStyle: 'solid' },
      dashed: { borderStyle: 'dashed' },
    },
    defaultProps: { variant: 'solid' },
  };
function xg() {
  return (xg =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function kg(e) {
  return 'full' === e
    ? { dialog: { maxW: '100vw', h: '100vh' } }
    : { dialog: { maxW: e } };
}
var wg = { bg: 'blackAlpha.600', zIndex: 'overlay' },
  Sg = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  _g = (e) => {
    var { isFullHeight: t } = e;
    return xg({}, t && { height: '100vh' }, {
      zIndex: 'modal',
      maxH: '100vh',
      bg: Jh('white', 'gray.700')(e),
      color: 'inherit',
      boxShadow: Jh('lg', 'dark-lg')(e),
    });
  },
  Eg = { px: 6, py: 4, fontSize: 'xl', fontWeight: 'semibold' },
  Cg = { position: 'absolute', top: 2, insetEnd: 3 },
  zg = { px: 6, py: 2, flex: 1, overflow: 'auto' },
  Og = { px: 6, py: 4 },
  Pg = {
    xs: kg('xs'),
    sm: kg('md'),
    md: kg('lg'),
    lg: kg('2xl'),
    xl: kg('4xl'),
    full: kg('full'),
  },
  Rg = {
    parts: Sm.keys,
    baseStyle: (e) => ({
      overlay: wg,
      dialogContainer: Sg,
      dialog: _g(e),
      header: Eg,
      closeButton: Cg,
      body: zg,
      footer: Og,
    }),
    sizes: Pg,
    defaultProps: { size: 'xs' },
  },
  Ag = {
    preview: {
      borderRadius: 'md',
      py: '3px',
      transitionProperty: 'common',
      transitionDuration: 'normal',
    },
    input: {
      borderRadius: 'md',
      py: '3px',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      width: 'full',
      _focus: { boxShadow: 'outline' },
      _placeholder: { opacity: 0.6 },
    },
  },
  Tg = { parts: _m.keys, baseStyle: Ag },
  jg = (e) => ({ marginStart: 1, color: Jh('red.500', 'red.300')(e) }),
  Fg = (e) => ({
    mt: 2,
    color: Jh('gray.500', 'whiteAlpha.600')(e),
    lineHeight: 'normal',
    fontSize: 'sm',
  }),
  Ig = {
    parts: Em.keys,
    baseStyle: (e) => ({
      container: { width: '100%', position: 'relative' },
      requiredIndicator: jg(e),
      helperText: Fg(e),
    }),
  },
  Bg = {
    baseStyle: {
      fontSize: 'md',
      marginEnd: 3,
      mb: 2,
      fontWeight: 'medium',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      opacity: 1,
      _disabled: { opacity: 0.4 },
    },
  },
  Ng = {
    baseStyle: { fontFamily: 'heading', fontWeight: 'bold' },
    sizes: {
      '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
      '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
      '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
      xl: { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
      lg: { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
      md: { fontSize: 'xl', lineHeight: 1.2 },
      sm: { fontSize: 'md', lineHeight: 1.2 },
      xs: { fontSize: 'sm', lineHeight: 1.2 },
    },
    defaultProps: { size: 'xl' },
  },
  Lg = {
    lg: { fontSize: 'lg', px: 4, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', px: 4, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', px: 3, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', px: 2, h: 6, borderRadius: 'sm' },
  },
  Mg = {
    lg: { field: Lg.lg, addon: Lg.lg },
    md: { field: Lg.md, addon: Lg.md },
    sm: { field: Lg.sm, addon: Lg.sm },
    xs: { field: Lg.xs, addon: Lg.xs },
  };
function Dg(e) {
  var { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || Jh('blue.500', 'blue.300')(e),
    errorBorderColor: r || Jh('red.500', 'red.300')(e),
  };
}
var Wg = {
    outline: (e) => {
      var { theme: t } = e,
        { focusBorderColor: r, errorBorderColor: n } = Dg(e);
      return {
        field: {
          border: '1px solid',
          borderColor: 'inherit',
          bg: 'inherit',
          _hover: { borderColor: Jh('gray.300', 'whiteAlpha.400')(e) },
          _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
          _invalid: {
            borderColor: Yh(t, n),
            boxShadow: '0 0 0 1px ' + Yh(t, n),
          },
          _focus: {
            zIndex: 1,
            borderColor: Yh(t, r),
            boxShadow: '0 0 0 1px ' + Yh(t, r),
          },
        },
        addon: {
          border: '1px solid',
          borderColor: Jh('inherit', 'whiteAlpha.50')(e),
          bg: Jh('gray.100', 'whiteAlpha.300')(e),
        },
      };
    },
    filled: (e) => {
      var { theme: t } = e,
        { focusBorderColor: r, errorBorderColor: n } = Dg(e);
      return {
        field: {
          border: '2px solid',
          borderColor: 'transparent',
          bg: Jh('gray.100', 'whiteAlpha.50')(e),
          _hover: { bg: Jh('gray.200', 'whiteAlpha.100')(e) },
          _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
          _invalid: { borderColor: Yh(t, n) },
          _focus: { bg: 'transparent', borderColor: Yh(t, r) },
        },
        addon: {
          border: '2px solid',
          borderColor: 'transparent',
          bg: Jh('gray.100', 'whiteAlpha.50')(e),
        },
      };
    },
    flushed: (e) => {
      var { theme: t } = e,
        { focusBorderColor: r, errorBorderColor: n } = Dg(e);
      return {
        field: {
          borderBottom: '1px solid',
          borderColor: 'inherit',
          borderRadius: 0,
          px: 0,
          bg: 'transparent',
          _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
          _invalid: {
            borderColor: Yh(t, n),
            boxShadow: '0px 1px 0px 0px ' + Yh(t, n),
          },
          _focus: {
            borderColor: Yh(t, r),
            boxShadow: '0px 1px 0px 0px ' + Yh(t, r),
          },
        },
        addon: {
          borderBottom: '2px solid',
          borderColor: 'inherit',
          borderRadius: 0,
          px: 0,
          bg: 'transparent',
        },
      };
    },
    unstyled: {
      field: { bg: 'transparent', px: 0, height: 'auto' },
      addon: { bg: 'transparent', px: 0, height: 'auto' },
    },
  },
  Hg = {
    parts: zm.keys,
    baseStyle: {
      field: {
        width: '100%',
        minWidth: 0,
        outline: 0,
        position: 'relative',
        appearance: 'none',
        transitionProperty: 'common',
        transitionDuration: 'normal',
      },
    },
    sizes: Mg,
    variants: Wg,
    defaultProps: { size: 'md', variant: 'outline' },
  },
  $g = {
    baseStyle: (e) => ({
      bg: Jh('gray.100', 'whiteAlpha')(e),
      borderRadius: 'md',
      borderWidth: '1px',
      borderBottomWidth: '3px',
      fontSize: '0.8em',
      fontWeight: 'bold',
      lineHeight: 'normal',
      px: '0.4em',
      whiteSpace: 'nowrap',
    }),
  },
  Ug = {
    baseStyle: {
      transitionProperty: 'common',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-out',
      cursor: 'pointer',
      textDecoration: 'none',
      outline: 'none',
      color: 'inherit',
      _hover: { textDecoration: 'underline' },
      _focus: { boxShadow: 'outline' },
    },
  },
  Vg = {
    container: {},
    item: {},
    icon: {
      marginEnd: '0.5rem',
      display: 'inline',
      verticalAlign: 'text-bottom',
    },
  },
  qg = { parts: Om.keys, baseStyle: Vg },
  Qg = (e) => ({
    bg: Jh('#fff', 'gray.700')(e),
    boxShadow: Jh('sm', 'dark-lg')(e),
    color: 'inherit',
    minW: '3xs',
    py: '2',
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
  }),
  Yg = (e) => ({
    py: '0.4rem',
    px: '0.8rem',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    _focus: { bg: Jh('gray.100', 'whiteAlpha.100')(e) },
    _active: { bg: Jh('gray.200', 'whiteAlpha.200')(e) },
    _expanded: { bg: Jh('gray.100', 'whiteAlpha.100')(e) },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  }),
  Xg = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  Gg = { opacity: 0.6 },
  Kg = {
    border: 0,
    borderBottom: '1px solid',
    borderColor: 'inherit',
    my: '0.5rem',
    opacity: 0.6,
  },
  Zg = { transitionProperty: 'common', transitionDuration: 'normal' },
  Jg = {
    parts: Pm.keys,
    baseStyle: (e) => ({
      button: Zg,
      list: Qg(e),
      item: Yg(e),
      groupTitle: Xg,
      command: Gg,
      divider: Kg,
    }),
  },
  eb = { bg: 'blackAlpha.600', zIndex: 'modal' },
  tb = (e) => {
    var { isCentered: t, scrollBehavior: r } = e;
    return {
      display: 'flex',
      zIndex: 'modal',
      justifyContent: 'center',
      alignItems: t ? 'center' : 'flex-start',
      overflow: 'inside' === r ? 'hidden' : 'auto',
    };
  },
  rb = (e) => {
    var { scrollBehavior: t } = e;
    return {
      borderRadius: 'md',
      bg: Jh('white', 'gray.700')(e),
      color: 'inherit',
      my: '3.75rem',
      zIndex: 'modal',
      maxH: 'inside' === t ? 'calc(100% - 7.5rem)' : void 0,
      boxShadow: Jh('lg', 'dark-lg')(e),
    };
  },
  nb = { px: 6, py: 4, fontSize: 'xl', fontWeight: 'semibold' },
  ab = { position: 'absolute', top: 2, insetEnd: 3 },
  ob = (e) => {
    var { scrollBehavior: t } = e;
    return {
      px: 6,
      py: 2,
      flex: 1,
      overflow: 'inside' === t ? 'auto' : void 0,
    };
  },
  ib = { px: 6, py: 4 };
function lb(e) {
  return 'full' === e
    ? { dialog: { maxW: '100vw', minH: '100vh', my: 0 } }
    : { dialog: { maxW: e } };
}
var sb,
  ub,
  cb = {
    xs: lb('xs'),
    sm: lb('sm'),
    md: lb('md'),
    lg: lb('lg'),
    xl: lb('xl'),
    '2xl': lb('2xl'),
    '3xl': lb('3xl'),
    '4xl': lb('4xl'),
    '5xl': lb('5xl'),
    '6xl': lb('6xl'),
    full: lb('full'),
  },
  db = {
    parts: Rm.keys,
    baseStyle: (e) => ({
      overlay: eb,
      dialogContainer: tb(e),
      dialog: rb(e),
      header: nb,
      closeButton: ab,
      body: ob(e),
      footer: ib,
    }),
    sizes: cb,
    defaultProps: { size: 'md' },
  },
  fb = {
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
  };
function pb() {
  return (pb =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var { variants: hb, defaultProps: mb } = Hg,
  gb = gm('number-input-stepper-width'),
  bb = gm('number-input-input-padding'),
  vb = fm(gb).add('0.5rem').toString(),
  yb = { [gb.variable]: '24px', [bb.variable]: vb },
  xb = null != (sb = null == (ub = Hg.baseStyle) ? void 0 : ub.field) ? sb : {},
  kb = { width: [gb.reference] },
  wb = (e) => ({
    borderStart: '1px solid',
    borderStartColor: Jh('inherit', 'whiteAlpha.300')(e),
    color: Jh('inherit', 'whiteAlpha.800')(e),
    _active: { bg: Jh('gray.200', 'whiteAlpha.300')(e) },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  });
function Sb(e) {
  var t,
    r,
    n = Hg.sizes[e],
    a = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    o = null != (t = null == (r = n.field) ? void 0 : r.fontSize) ? t : 'md',
    i = fb.fontSizes[o.toString()];
  return {
    field: pb({}, n.field, {
      paddingInlineEnd: bb.reference,
      verticalAlign: 'top',
    }),
    stepper: {
      fontSize: fm(i).multiply(0.75).toString(),
      _first: { borderTopEndRadius: a[e] },
      _last: { borderBottomEndRadius: a[e], mt: '-1px', borderTopWidth: 1 },
    },
  };
}
var _b,
  Eb = { xs: Sb('xs'), sm: Sb('sm'), md: Sb('md'), lg: Sb('lg') },
  Cb = {
    parts: Am.keys,
    baseStyle: (e) => ({
      root: yb,
      field: xb,
      stepperGroup: kb,
      stepper: wb(e),
    }),
    sizes: Eb,
    variants: hb,
    defaultProps: mb,
  };
function zb() {
  return (zb =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Ob = {
    baseStyle: zb({}, Hg.baseStyle.field, { textAlign: 'center' }),
    sizes: {
      lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
      md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
      sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
      xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
    },
    variants: {
      outline: (e) => {
        var t;
        return null != (t = Hg.variants.outline(e).field) ? t : {};
      },
      flushed: (e) => {
        var t;
        return null != (t = Hg.variants.flushed(e).field) ? t : {};
      },
      filled: (e) => {
        var t;
        return null != (t = Hg.variants.filled(e).field) ? t : {};
      },
      unstyled: null != (_b = Hg.variants.unstyled.field) ? _b : {},
    },
    defaultProps: Hg.defaultProps,
  },
  Pb = gm('popper-bg'),
  Rb = gm('popper-arrow-bg'),
  Ab = gm('popper-arrow-shadow-color'),
  Tb = { zIndex: 10 },
  jb = (e) => {
    var t = Jh('white', 'gray.700')(e),
      r = Jh('gray.200', 'whiteAlpha.300')(e);
    return {
      [Pb.variable]: 'colors.' + t,
      bg: Pb.reference,
      [Rb.variable]: Pb.reference,
      [Ab.variable]: 'colors.' + r,
      width: 'xs',
      border: '1px solid',
      borderColor: 'inherit',
      borderRadius: 'md',
      boxShadow: 'sm',
      zIndex: 'inherit',
      _focus: { outline: 0, boxShadow: 'outline' },
    };
  },
  Fb = { px: 3, py: 2, borderBottomWidth: '1px' },
  Ib = { px: 3, py: 2 },
  Bb = { px: 3, py: 2, borderTopWidth: '1px' },
  Nb = {
    parts: Tm.keys,
    baseStyle: (e) => ({
      popper: Tb,
      content: jb(e),
      header: Fb,
      body: Ib,
      footer: Bb,
      arrow: {},
    }),
  };
function Lb() {
  return (Lb =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Mb = {
    lineHeight: '1',
    fontSize: '0.25em',
    fontWeight: 'bold',
    color: 'white',
  },
  Db = (e) => ({ bg: Jh('gray.100', 'whiteAlpha.300')(e) }),
  Wb = (e) =>
    Lb(
      { transitionProperty: 'common', transitionDuration: 'slow' },
      (function (e) {
        var { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: a } = e,
          o = Jh(Kh(), Kh('1rem', 'rgba(0,0,0,0.1)'))(e),
          i = Jh(t + '.500', t + '.200')(e),
          l =
            'linear-gradient(\n    to right,\n    transparent 0%,\n    ' +
            Yh(r, i) +
            ' 50%,\n    transparent 100%\n  )';
        return Lb({}, !n && a && o, n ? { bgImage: l } : { bgColor: i });
      })(e),
    ),
  Hb = {
    parts: jm.keys,
    sizes: {
      xs: { track: { h: '0.25rem' } },
      sm: { track: { h: '0.5rem' } },
      md: { track: { h: '0.75rem' } },
      lg: { track: { h: '1rem' } },
    },
    baseStyle: (e) => ({ label: Mb, filledTrack: Wb(e), track: Db(e) }),
    defaultProps: { size: 'md', colorScheme: 'blue' },
  };
function $b() {
  return ($b =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Ub = (e) => {
    var { control: t = {} } = fg.baseStyle(e);
    return $b({}, t, {
      borderRadius: 'full',
      _checked: $b({}, t._checked, {
        _before: {
          content: '""',
          display: 'inline-block',
          pos: 'relative',
          w: '50%',
          h: '50%',
          borderRadius: '50%',
          bg: 'currentColor',
        },
      }),
    });
  },
  Vb = {
    parts: Fm.keys,
    baseStyle: (e) => ({ label: fg.baseStyle(e).label, control: Ub(e) }),
    sizes: {
      md: { control: { w: 4, h: 4 }, label: { fontSize: 'md' } },
      lg: { control: { w: 5, h: 5 }, label: { fontSize: 'lg' } },
      sm: { control: { width: 3, height: 3 }, label: { fontSize: 'sm' } },
    },
    defaultProps: { size: 'md', colorScheme: 'blue' },
  };
function qb() {
  return (qb =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Qb = (e) =>
    qb({}, Hg.baseStyle.field, {
      bg: Jh('white', 'gray.700')(e),
      appearance: 'none',
      paddingBottom: '1px',
      lineHeight: 'normal',
      '> option, > optgroup': { bg: Jh('white', 'gray.700')(e) },
    }),
  Yb = {
    width: '1.5rem',
    height: '100%',
    insetEnd: '0.5rem',
    position: 'relative',
    color: 'currentColor',
    fontSize: '1.25rem',
    _disabled: { opacity: 0.5 },
  },
  Xb = qb({}, Hg.sizes, {
    xs: qb({}, Hg.sizes.xs, { icon: { insetEnd: '0.25rem' } }),
  }),
  Gb = {
    parts: Im.keys,
    baseStyle: (e) => ({ field: Qb(e), icon: Yb }),
    sizes: Xb,
    variants: Hg.variants,
    defaultProps: Hg.defaultProps,
  },
  Kb = (e, t) =>
    Md({
      from: { borderColor: e, background: e },
      to: { borderColor: t, background: t },
    }),
  Zb = {
    baseStyle: (e) => {
      var t = Jh('gray.100', 'gray.800')(e),
        r = Jh('gray.400', 'gray.600')(e),
        { startColor: n = t, endColor: a = r, speed: o, theme: i } = e,
        l = Yh(i, n),
        s = Yh(i, a);
      return {
        opacity: 0.7,
        borderRadius: '2px',
        borderColor: l,
        background: s,
        animation: o + 's linear infinite alternate ' + Kb(l, s),
      };
    },
  },
  Jb = {
    baseStyle: (e) => ({
      borderRadius: 'md',
      fontWeight: 'semibold',
      _focus: {
        boxShadow: 'outline',
        padding: '1rem',
        position: 'fixed',
        top: '1.5rem',
        insetStart: '1.5rem',
        bg: Jh('white', 'gray.700')(e),
      },
    }),
  };
function ev() {
  return (ev =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var tv = (e) => {
    var { orientation: t } = e;
    return ev(
      { _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' } },
      em({
        orientation: t,
        vertical: { h: '100%' },
        horizontal: { w: '100%' },
      }),
    );
  },
  rv = (e) => ({
    borderRadius: 'sm',
    bg: Jh('gray.200', 'whiteAlpha.200')(e),
    _disabled: { bg: Jh('gray.300', 'whiteAlpha.300')(e) },
  }),
  nv = (e) =>
    ev(
      {
        zIndex: 1,
        borderRadius: 'full',
        bg: 'white',
        boxShadow: 'base',
        border: '1px solid',
        borderColor: 'transparent',
        transitionProperty: 'transform',
        transitionDuration: 'normal',
        _focus: { boxShadow: 'outline' },
        _disabled: { bg: 'gray.300' },
      },
      (function (e) {
        return em({
          orientation: e.orientation,
          vertical: {
            left: '50%',
            transform: 'translateX(-50%)',
            _active: { transform: 'translateX(-50%) scale(1.15)' },
          },
          horizontal: {
            top: '50%',
            transform: 'translateY(-50%)',
            _active: { transform: 'translateY(-50%) scale(1.15)' },
          },
        });
      })(e),
    ),
  av = (e) => {
    var { colorScheme: t } = e;
    return { bg: Jh(t + '.500', t + '.200')(e) };
  },
  ov = {
    lg: (e) => ({
      thumb: { w: '16px', h: '16px' },
      track: em({
        orientation: e.orientation,
        horizontal: { h: '4px' },
        vertical: { w: '4px' },
      }),
    }),
    md: (e) => ({
      thumb: { w: '14px', h: '14px' },
      track: em({
        orientation: e.orientation,
        horizontal: { h: '4px' },
        vertical: { w: '4px' },
      }),
    }),
    sm: (e) => ({
      thumb: { w: '10px', h: '10px' },
      track: em({
        orientation: e.orientation,
        horizontal: { h: '2px' },
        vertical: { w: '2px' },
      }),
    }),
  },
  iv = {
    parts: Bm.keys,
    sizes: ov,
    baseStyle: (e) => ({
      container: tv(e),
      track: rv(e),
      thumb: nv(e),
      filledTrack: av(e),
    }),
    defaultProps: { size: 'md', colorScheme: 'blue' },
  },
  lv = gm('spinner-size'),
  sv = {
    baseStyle: { width: [lv.reference], height: [lv.reference] },
    sizes: {
      xs: { [lv.variable]: '0.75rem' },
      sm: { [lv.variable]: '1rem' },
      md: { [lv.variable]: '1.5rem' },
      lg: { [lv.variable]: '2rem' },
      xl: { [lv.variable]: '3rem' },
    },
    defaultProps: { size: 'md' },
  },
  uv = {
    container: {},
    label: { fontWeight: 'medium' },
    helpText: { opacity: 0.8, marginBottom: 2 },
    number: { verticalAlign: 'baseline', fontWeight: 'semibold' },
    icon: { marginEnd: 1, w: '14px', h: '14px', verticalAlign: 'middle' },
  },
  cv = {
    parts: Nm.keys,
    baseStyle: uv,
    sizes: {
      md: {
        label: { fontSize: 'sm' },
        helpText: { fontSize: 'sm' },
        number: { fontSize: '2xl' },
      },
    },
    defaultProps: { size: 'md' },
  },
  dv = gm('switch-track-width'),
  fv = gm('switch-track-height'),
  pv = gm('switch-track-diff'),
  hv = fm.subtract(dv, fv),
  mv = gm('switch-thumb-x'),
  gv = (e) => {
    var { colorScheme: t } = e;
    return {
      borderRadius: 'full',
      p: '2px',
      width: [dv.reference],
      height: [fv.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      bg: Jh('gray.300', 'whiteAlpha.400')(e),
      _focus: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: { bg: Jh(t + '.500', t + '.200')(e) },
    };
  },
  bv = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [fv.reference],
    height: [fv.reference],
    _checked: { transform: 'translateX(' + mv.reference + ')' },
  },
  vv = {
    sm: { container: { [dv.variable]: '1.375rem', [fv.variable]: '0.75rem' } },
    md: { container: { [dv.variable]: '1.875rem', [fv.variable]: '1rem' } },
    lg: { container: { [dv.variable]: '2.875rem', [fv.variable]: '1.5rem' } },
  },
  yv = {
    parts: Lm.keys,
    baseStyle: (e) => ({
      container: {
        [pv.variable]: hv,
        [mv.variable]: pv.reference,
        _rtl: { [mv.variable]: fm(pv).negate().toString() },
      },
      track: gv(e),
      thumb: bv,
    }),
    sizes: vv,
    defaultProps: { size: 'md', colorScheme: 'blue' },
  };
function xv() {
  return (xv =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var kv,
  wv,
  Sv,
  _v,
  Ev,
  Cv = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  zv = {
    simple: (e) => {
      var { colorScheme: t } = e;
      return {
        th: xv(
          {
            color: Jh('gray.600', 'gray.400')(e),
            borderBottom: '1px',
            borderColor: Jh(t + '.100', t + '.700')(e),
          },
          Cv,
        ),
        td: xv(
          { borderBottom: '1px', borderColor: Jh(t + '.100', t + '.700')(e) },
          Cv,
        ),
        caption: { color: Jh('gray.600', 'gray.100')(e) },
        tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
      };
    },
    striped: (e) => {
      var { colorScheme: t } = e;
      return {
        th: xv(
          {
            color: Jh('gray.600', 'gray.400')(e),
            borderBottom: '1px',
            borderColor: Jh(t + '.100', t + '.700')(e),
          },
          Cv,
        ),
        td: xv(
          { borderBottom: '1px', borderColor: Jh(t + '.100', t + '.700')(e) },
          Cv,
        ),
        caption: { color: Jh('gray.600', 'gray.100')(e) },
        tbody: {
          tr: {
            '&:nth-of-type(odd)': {
              'th, td': {
                borderBottomWidth: '1px',
                borderColor: Jh(t + '.100', t + '.700')(e),
              },
              td: { background: Jh(t + '.100', t + '.700')(e) },
            },
          },
        },
        tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
      };
    },
    unstyled: {},
  },
  Ov = {
    parts: Mm.keys,
    baseStyle: {
      table: {
        fontVariantNumeric: 'lining-nums tabular-nums',
        borderCollapse: 'collapse',
        width: 'full',
      },
      th: {
        fontFamily: 'heading',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 'wider',
        textAlign: 'start',
      },
      td: { textAlign: 'start' },
      caption: {
        mt: 4,
        fontFamily: 'heading',
        textAlign: 'center',
        fontWeight: 'medium',
      },
    },
    variants: zv,
    sizes: {
      sm: {
        th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
        td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
        caption: { px: '4', py: '2', fontSize: 'xs' },
      },
      md: {
        th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
        td: { px: '6', py: '4', lineHeight: '5' },
        caption: { px: '6', py: '2', fontSize: 'sm' },
      },
      lg: {
        th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
        td: { px: '8', py: '5', lineHeight: '6' },
        caption: { px: '6', py: '2', fontSize: 'md' },
      },
    },
    defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
  },
  Pv = (e) => {
    var { orientation: t } = e;
    return { display: 'vertical' === t ? 'flex' : 'block' };
  },
  Rv = (e) => {
    var { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focus: { zIndex: 1, boxShadow: 'outline' },
    };
  },
  Av = (e) => {
    var { align: t = 'start', orientation: r } = e;
    return {
      justifyContent: {
        end: 'flex-end',
        center: 'center',
        start: 'flex-start',
      }[t],
      flexDirection: 'vertical' === r ? 'column' : 'row',
    };
  },
  Tv = { p: 4 },
  jv = {
    line: (e) => {
      var { colorScheme: t, orientation: r } = e,
        n = 'vertical' === r ? 'borderStart' : 'borderBottom';
      return {
        tablist: { [n]: '2px solid', borderColor: 'inherit' },
        tab: {
          [n]: '2px solid',
          borderColor: 'transparent',
          ['vertical' === r ? 'marginStart' : 'marginBottom']: '-2px',
          _selected: {
            color: Jh(t + '.600', t + '.300')(e),
            borderColor: 'currentColor',
          },
          _active: { bg: Jh('gray.200', 'whiteAlpha.300')(e) },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        },
      };
    },
    enclosed: (e) => {
      var { colorScheme: t } = e;
      return {
        tab: {
          borderTopRadius: 'md',
          border: '1px solid',
          borderColor: 'transparent',
          mb: '-1px',
          _selected: {
            color: Jh(t + '.600', t + '.300')(e),
            borderColor: 'inherit',
            borderBottomColor: Jh('white', 'gray.800')(e),
          },
        },
        tablist: {
          mb: '-1px',
          borderBottom: '1px solid',
          borderColor: 'inherit',
        },
      };
    },
    'enclosed-colored': (e) => {
      var { colorScheme: t } = e;
      return {
        tab: {
          border: '1px solid',
          borderColor: 'inherit',
          bg: Jh('gray.50', 'whiteAlpha.50')(e),
          mb: '-1px',
          _notLast: { marginEnd: '-1px' },
          _selected: {
            bg: Jh('#fff', 'gray.800')(e),
            color: Jh(t + '.600', t + '.300')(e),
            borderColor: 'inherit',
            borderTopColor: 'currentColor',
            borderBottomColor: 'transparent',
          },
        },
        tablist: {
          mb: '-1px',
          borderBottom: '1px solid',
          borderColor: 'inherit',
        },
      };
    },
    'soft-rounded': (e) => {
      var { colorScheme: t, theme: r } = e;
      return {
        tab: {
          borderRadius: 'full',
          fontWeight: 'semibold',
          color: 'gray.600',
          _selected: { color: Yh(r, t + '.700'), bg: Yh(r, t + '.100') },
        },
      };
    },
    'solid-rounded': (e) => {
      var { colorScheme: t } = e;
      return {
        tab: {
          borderRadius: 'full',
          fontWeight: 'semibold',
          color: Jh('gray.600', 'inherit')(e),
          _selected: {
            color: Jh('#fff', 'gray.800')(e),
            bg: Jh(t + '.600', t + '.300')(e),
          },
        },
      };
    },
    unstyled: {},
  },
  Fv = {
    parts: Dm.keys,
    baseStyle: (e) => ({
      root: Pv(e),
      tab: Rv(e),
      tablist: Av(e),
      tabpanel: Tv,
    }),
    sizes: {
      sm: { tab: { py: 1, px: 4, fontSize: 'sm' } },
      md: { tab: { fontSize: 'md', py: 2, px: 4 } },
      lg: { tab: { fontSize: 'lg', py: 3, px: 4 } },
    },
    variants: jv,
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
  },
  Iv = {
    container: {
      fontWeight: 'medium',
      lineHeight: 1.2,
      outline: 0,
      _focus: { boxShadow: 'outline' },
    },
    label: { lineHeight: 1.2, overflow: 'visible' },
    closeButton: {
      fontSize: '18px',
      w: '1.25rem',
      h: '1.25rem',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      borderRadius: 'full',
      marginStart: '0.375rem',
      marginEnd: '-1',
      opacity: 0.5,
      _disabled: { opacity: 0.4 },
      _focus: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
      _hover: { opacity: 0.8 },
      _active: { opacity: 1 },
    },
  },
  Bv = {
    subtle: (e) => ({ container: rg.variants.subtle(e) }),
    solid: (e) => ({ container: rg.variants.solid(e) }),
    outline: (e) => ({ container: rg.variants.outline(e) }),
  },
  Nv = {
    parts: Wm.keys,
    variants: Bv,
    baseStyle: Iv,
    sizes: {
      sm: {
        container: {
          minH: '1.25rem',
          minW: '1.25rem',
          fontSize: 'xs',
          px: 2,
          borderRadius: 'md',
        },
        closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
      },
      md: {
        container: {
          minH: '1.5rem',
          minW: '1.5rem',
          fontSize: 'sm',
          borderRadius: 'md',
          px: 2,
        },
      },
      lg: {
        container: {
          minH: 8,
          minW: 8,
          fontSize: 'md',
          borderRadius: 'md',
          px: 3,
        },
      },
    },
    defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
  };
function Lv() {
  return (Lv =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Mv,
  Dv = Lv({}, Hg.baseStyle.field, {
    paddingY: '8px',
    minHeight: '80px',
    lineHeight: 'short',
    verticalAlign: 'top',
  }),
  Wv = {
    outline: (e) => {
      var t;
      return null != (t = Hg.variants.outline(e).field) ? t : {};
    },
    flushed: (e) => {
      var t;
      return null != (t = Hg.variants.flushed(e).field) ? t : {};
    },
    filled: (e) => {
      var t;
      return null != (t = Hg.variants.filled(e).field) ? t : {};
    },
    unstyled: null != (kv = Hg.variants.unstyled.field) ? kv : {},
  },
  Hv = {
    baseStyle: Dv,
    sizes: {
      xs: null != (wv = Hg.sizes.xs.field) ? wv : {},
      sm: null != (Sv = Hg.sizes.sm.field) ? Sv : {},
      md: null != (_v = Hg.sizes.md.field) ? _v : {},
      lg: null != (Ev = Hg.sizes.lg.field) ? Ev : {},
    },
    variants: Wv,
    defaultProps: { size: 'md', variant: 'outline' },
  },
  $v = gm('tooltip-bg'),
  Uv = gm('popper-arrow-bg'),
  Vv = {
    baseStyle: (e) => {
      var t = Jh('gray.700', 'gray.300')(e);
      return {
        [$v.variable]: 'colors.' + t,
        px: '8px',
        py: '2px',
        bg: [$v.reference],
        [Uv.variable]: [$v.reference],
        color: Jh('whiteAlpha.900', 'gray.900')(e),
        borderRadius: 'sm',
        fontWeight: 'medium',
        fontSize: 'sm',
        boxShadow: 'md',
        maxW: '320px',
        zIndex: 'tooltip',
      };
    },
  },
  qv = (e) => ({ color: Jh('red.500', 'red.300')(e), mt: 2, fontSize: 'sm' }),
  Qv = (e) => ({ marginEnd: '0.5em', color: Jh('red.500', 'red.300')(e) }),
  Yv = { parts: Cm.keys, baseStyle: (e) => ({ text: qv(e), icon: Qv(e) }) },
  Xv = {
    Accordion: $m,
    Alert: qm,
    Avatar: tg,
    Badge: rg,
    Breadcrumb: ag,
    Button: sg,
    Checkbox: fg,
    CloseButton: hg,
    Code: bg,
    Container: vg,
    Divider: yg,
    Drawer: Rg,
    Editable: Tg,
    Form: Ig,
    FormLabel: Bg,
    Heading: Ng,
    Input: Hg,
    Kbd: $g,
    Link: Ug,
    List: qg,
    Menu: Jg,
    Modal: db,
    NumberInput: Cb,
    PinInput: Ob,
    Popover: Nb,
    Progress: Hb,
    Radio: Vb,
    Select: Gb,
    Skeleton: Zb,
    SkipLink: Jb,
    Slider: iv,
    Spinner: sv,
    Stat: cv,
    Switch: yv,
    Table: Ov,
    Tabs: Fv,
    Tag: Nv,
    Textarea: Hv,
    Tooltip: Vv,
    FormError: Yv,
  },
  Gv = {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
    '8px': '8px solid',
  };
function Kv() {
  return (Kv =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Zv = Kv(
    {
      breakpoints:
        ((Mv = {
          sm: '30em',
          md: '48em',
          lg: '62em',
          xl: '80em',
          '2xl': '96em',
        }),
        gf({
          condition: !0,
          message: [
            '[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon',
            'simply pass the breakpoints as an object. Remove the createBreakpoint(..) call',
          ].join(''),
        }),
        tm({ base: '0em' }, Mv)),
      zIndices: {
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1e3,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
      },
      radii: {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      blur: {
        none: 0,
        sm: '4px',
        base: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        white: '#FFFFFF',
        whiteAlpha: {
          50: 'rgba(255, 255, 255, 0.04)',
          100: 'rgba(255, 255, 255, 0.06)',
          200: 'rgba(255, 255, 255, 0.08)',
          300: 'rgba(255, 255, 255, 0.16)',
          400: 'rgba(255, 255, 255, 0.24)',
          500: 'rgba(255, 255, 255, 0.36)',
          600: 'rgba(255, 255, 255, 0.48)',
          700: 'rgba(255, 255, 255, 0.64)',
          800: 'rgba(255, 255, 255, 0.80)',
          900: 'rgba(255, 255, 255, 0.92)',
        },
        blackAlpha: {
          50: 'rgba(0, 0, 0, 0.04)',
          100: 'rgba(0, 0, 0, 0.06)',
          200: 'rgba(0, 0, 0, 0.08)',
          300: 'rgba(0, 0, 0, 0.16)',
          400: 'rgba(0, 0, 0, 0.24)',
          500: 'rgba(0, 0, 0, 0.36)',
          600: 'rgba(0, 0, 0, 0.48)',
          700: 'rgba(0, 0, 0, 0.64)',
          800: 'rgba(0, 0, 0, 0.80)',
          900: 'rgba(0, 0, 0, 0.92)',
        },
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        red: {
          50: '#FFF5F5',
          100: '#FED7D7',
          200: '#FEB2B2',
          300: '#FC8181',
          400: '#F56565',
          500: '#E53E3E',
          600: '#C53030',
          700: '#9B2C2C',
          800: '#822727',
          900: '#63171B',
        },
        orange: {
          50: '#FFFAF0',
          100: '#FEEBC8',
          200: '#FBD38D',
          300: '#F6AD55',
          400: '#ED8936',
          500: '#DD6B20',
          600: '#C05621',
          700: '#9C4221',
          800: '#7B341E',
          900: '#652B19',
        },
        yellow: {
          50: '#FFFFF0',
          100: '#FEFCBF',
          200: '#FAF089',
          300: '#F6E05E',
          400: '#ECC94B',
          500: '#D69E2E',
          600: '#B7791F',
          700: '#975A16',
          800: '#744210',
          900: '#5F370E',
        },
        green: {
          50: '#F0FFF4',
          100: '#C6F6D5',
          200: '#9AE6B4',
          300: '#68D391',
          400: '#48BB78',
          500: '#38A169',
          600: '#2F855A',
          700: '#276749',
          800: '#22543D',
          900: '#1C4532',
        },
        teal: {
          50: '#E6FFFA',
          100: '#B2F5EA',
          200: '#81E6D9',
          300: '#4FD1C5',
          400: '#38B2AC',
          500: '#319795',
          600: '#2C7A7B',
          700: '#285E61',
          800: '#234E52',
          900: '#1D4044',
        },
        blue: {
          50: '#ebf8ff',
          100: '#bee3f8',
          200: '#90cdf4',
          300: '#63b3ed',
          400: '#4299e1',
          500: '#3182ce',
          600: '#2b6cb0',
          700: '#2c5282',
          800: '#2a4365',
          900: '#1A365D',
        },
        cyan: {
          50: '#EDFDFD',
          100: '#C4F1F9',
          200: '#9DECF9',
          300: '#76E4F7',
          400: '#0BC5EA',
          500: '#00B5D8',
          600: '#00A3C4',
          700: '#0987A0',
          800: '#086F83',
          900: '#065666',
        },
        purple: {
          50: '#FAF5FF',
          100: '#E9D8FD',
          200: '#D6BCFA',
          300: '#B794F4',
          400: '#9F7AEA',
          500: '#805AD5',
          600: '#6B46C1',
          700: '#553C9A',
          800: '#44337A',
          900: '#322659',
        },
        pink: {
          50: '#FFF5F7',
          100: '#FED7E2',
          200: '#FBB6CE',
          300: '#F687B3',
          400: '#ED64A6',
          500: '#D53F8C',
          600: '#B83280',
          700: '#97266D',
          800: '#702459',
          900: '#521B41',
        },
        linkedin: {
          50: '#E8F4F9',
          100: '#CFEDFB',
          200: '#9BDAF3',
          300: '#68C7EC',
          400: '#34B3E4',
          500: '#00A0DC',
          600: '#008CC9',
          700: '#0077B5',
          800: '#005E93',
          900: '#004471',
        },
        facebook: {
          50: '#E8F4F9',
          100: '#D9DEE9',
          200: '#B7C2DA',
          300: '#6482C0',
          400: '#4267B2',
          500: '#385898',
          600: '#314E89',
          700: '#29487D',
          800: '#223B67',
          900: '#1E355B',
        },
        messenger: {
          50: '#D0E6FF',
          100: '#B9DAFF',
          200: '#A2CDFF',
          300: '#7AB8FF',
          400: '#2E90FF',
          500: '#0078FF',
          600: '#0063D1',
          700: '#0052AC',
          800: '#003C7E',
          900: '#002C5C',
        },
        whatsapp: {
          50: '#dffeec',
          100: '#b9f5d0',
          200: '#90edb3',
          300: '#65e495',
          400: '#3cdd78',
          500: '#22c35e',
          600: '#179848',
          700: '#0c6c33',
          800: '#01421c',
          900: '#001803',
        },
        twitter: {
          50: '#E5F4FD',
          100: '#C8E9FB',
          200: '#A8DCFA',
          300: '#83CDF7',
          400: '#57BBF5',
          500: '#1DA1F2',
          600: '#1A94DA',
          700: '#1681BF',
          800: '#136B9E',
          900: '#0D4D71',
        },
        telegram: {
          50: '#E3F2F9',
          100: '#C5E4F3',
          200: '#A2D4EC',
          300: '#7AC1E4',
          400: '#47A9DA',
          500: '#0088CC',
          600: '#007AB8',
          700: '#006BA1',
          800: '#005885',
          900: '#003F5E',
        },
      },
    },
    fb,
    {
      sizes: Xm,
      shadows: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        none: 'none',
        'dark-lg':
          'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
      },
      space: Qm,
      borders: Gv,
      transition: {
        property: {
          common:
            'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
          colors: 'background-color, border-color, color, fill, stroke',
          dimensions: 'width, height',
          position: 'left, right, top, bottom',
          background: 'background-color, background-image, background-position',
        },
        easing: {
          'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
          'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
          'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        duration: {
          'ultra-fast': '50ms',
          faster: '100ms',
          fast: '150ms',
          normal: '200ms',
          slow: '300ms',
          slower: '400ms',
          'ultra-slow': '500ms',
        },
      },
    },
  ),
  Jv = [
    'borders',
    'breakpoints',
    'colors',
    'components',
    'config',
    'direction',
    'fonts',
    'fontSizes',
    'fontWeights',
    'letterSpacings',
    'lineHeights',
    'radii',
    'shadows',
    'sizes',
    'space',
    'styles',
    'transition',
    'zIndices',
  ];
function ey(e) {
  return !!Ud(e) && Jv.every((t) => Object.prototype.hasOwnProperty.call(e, t));
}
function ty() {
  return (ty =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var ry = ty({ direction: 'ltr' }, Zv, {
    components: Xv,
    styles: {
      global: (e) => ({
        body: {
          fontFamily: 'body',
          color: Jh('gray.800', 'whiteAlpha.900')(e),
          bg: Jh('white', 'gray.800')(e),
          transitionProperty: 'background-color',
          transitionDuration: 'normal',
          lineHeight: 'base',
        },
        '*::placeholder': { color: Jh('gray.400', 'whiteAlpha.400')(e) },
        '*, *::before, &::after': {
          borderColor: Jh('gray.200', 'whiteAlpha.300')(e),
          wordWrap: 'break-word',
        },
      }),
    },
    config: {
      useSystemColorMode: !1,
      initialColorMode: 'light',
      cssVarPrefix: 'chakra',
    },
  }),
  ny = (e) => {
    var {
        children: r,
        colorModeManager: n,
        portalZIndex: a,
        resetCSS: o = !0,
        theme: i = {},
        environment: l,
        cssVarsRoot: s,
      } = e,
      u = t.exports.createElement(Uh, { environment: l }, r);
    return t.exports.createElement(
      Cf,
      null,
      t.exports.createElement(
        kh,
        { theme: i, cssVarsRoot: s },
        t.exports.createElement(
          Mf,
          { colorModeManager: n, options: i.config },
          o && t.exports.createElement(Dd, null),
          t.exports.createElement(wh, null),
          a ? t.exports.createElement(Sf, { zIndex: a }, u) : u,
        ),
      ),
    );
  };
function ay() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = [...t],
    a = t[t.length - 1];
  return (
    ey(a) && n.length > 1 ? (n = n.slice(0, n.length - 1)) : (a = ry),
    bf(...n.map((e) => (t) => $d(e) ? e(t) : oy(t, e)))(a)
  );
}
function oy() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Yd({}, ...t, iy);
}
function iy(e, t, r, n) {
  if (($d(e) || $d(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return function () {
      var r = $d(e) ? e(...arguments) : e,
        n = $d(t) ? t(...arguments) : t;
      return Yd({}, r, n, iy);
    };
}
ny.defaultProps = { theme: ry };
var [ly, sy] = xf({ strict: !1, name: 'ButtonGroupContext' }),
  uy = {
    border: '0px',
    clip: 'rect(0px, 0px, 0px, 0px)',
    height: '1px',
    width: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
  },
  cy = Nh('span', { baseStyle: uy });
function dy() {
  return (dy =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
Nh('input', { baseStyle: uy });
var fy = Md({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  }),
  py = Lh((e, r) => {
    var n = Mh('Spinner', e),
      a = Sh(e),
      {
        label: o = 'Loading...',
        thickness: i = '2px',
        speed: l = '0.45s',
        emptyColor: s = 'transparent',
        className: u,
      } = a,
      c = (function (e, t) {
        if (null == e) return {};
        var r,
          n,
          a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a;
      })(a, ['label', 'thickness', 'speed', 'emptyColor', 'className']),
      d = ff('chakra-spinner', u),
      f = dy(
        {
          display: 'inline-block',
          borderColor: 'currentColor',
          borderStyle: 'solid',
          borderRadius: '99999px',
          borderWidth: i,
          borderBottomColor: s,
          borderLeftColor: s,
          animation: fy + ' ' + l + ' linear infinite',
        },
        n,
      );
    return t.exports.createElement(
      Nh.div,
      dy({ ref: r, __css: f, className: d }, c),
      o && t.exports.createElement(cy, null, o),
    );
  });
function hy() {
  return (hy =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var my = (e) => {
  var {
      label: r,
      placement: n,
      children: a = t.exports.createElement(py, {
        color: 'currentColor',
        width: '1em',
        height: '1em',
      }),
      className: o,
      __css: i,
    } = e,
    l = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++)
        (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a;
    })(e, ['label', 'placement', 'spacing', 'children', 'className', '__css']),
    s = ff('chakra-button__spinner', o),
    u = 'start' === n ? 'marginEnd' : 'marginStart',
    c = t.exports.useMemo(
      () =>
        hy(
          {
            display: 'flex',
            alignItems: 'center',
            position: r ? 'relative' : 'absolute',
            [u]: r ? '0.5rem' : 0,
            fontSize: '1em',
            lineHeight: 'normal',
          },
          i,
        ),
      [i, r, u],
    );
  return t.exports.createElement(
    Nh.div,
    hy({ className: s }, l, { __css: c }),
    a,
  );
};
function gy() {
  return (gy =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var by = (e) => {
  var { children: r, className: n } = e,
    a = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++)
        (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a;
    })(e, ['children', 'className']),
    o = t.exports.isValidElement(r)
      ? t.exports.cloneElement(r, { 'aria-hidden': !0, focusable: !1 })
      : r,
    i = ff('chakra-button__icon', n);
  return t.exports.createElement(
    Nh.span,
    gy({ display: 'inline-flex', alignSelf: 'center', flexShrink: 0 }, a, {
      className: i,
    }),
    o,
  );
};
function vy() {
  return (vy =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var yy = Lh((e, r) => {
  var n = sy(),
    a = Mh('Button', vy({}, n, e)),
    o = Sh(e),
    {
      isDisabled: i = null == n ? void 0 : n.isDisabled,
      isLoading: l,
      isActive: s,
      isFullWidth: u,
      children: c,
      leftIcon: d,
      rightIcon: f,
      loadingText: p,
      iconSpacing: h = '0.5rem',
      type: m,
      spinner: g,
      spinnerPlacement: b = 'start',
      className: v,
      as: y,
    } = o,
    x = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++)
        (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a;
    })(o, [
      'isDisabled',
      'isLoading',
      'isActive',
      'isFullWidth',
      'children',
      'leftIcon',
      'rightIcon',
      'loadingText',
      'iconSpacing',
      'type',
      'spinner',
      'spinnerPlacement',
      'className',
      'as',
    ]),
    k = t.exports.useMemo(() => {
      var e,
        t = Yd({}, null != (e = null == a ? void 0 : a._focus) ? e : {}, {
          zIndex: 1,
        });
      return vy(
        {
          display: 'inline-flex',
          appearance: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
          position: 'relative',
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          outline: 'none',
          width: u ? '100%' : 'auto',
        },
        a,
        !!n && { _focus: t },
      );
    }, [a, n, u]),
    { ref: w, type: S } = (function (e) {
      var [r, n] = t.exports.useState(!e);
      return {
        ref: t.exports.useCallback((e) => {
          e && n('BUTTON' === e.tagName);
        }, []),
        type: r ? 'button' : void 0,
      };
    })(y),
    _ = { rightIcon: f, leftIcon: d, iconSpacing: h, children: c };
  return t.exports.createElement(
    Nh.button,
    vy(
      {
        disabled: i || l,
        ref: yf(r, w),
        as: y,
        type: null != m ? m : S,
        'data-active': cf(s),
        'data-loading': cf(l),
        __css: k,
        className: ff('chakra-button', v),
      },
      x,
    ),
    l &&
      'start' === b &&
      t.exports.createElement(
        my,
        {
          className: 'chakra-button__spinner--start',
          label: p,
          placement: 'start',
        },
        g,
      ),
    l
      ? p ||
          t.exports.createElement(
            Nh.span,
            { opacity: 0 },
            t.exports.createElement(xy, _),
          )
      : t.exports.createElement(xy, _),
    l &&
      'end' === b &&
      t.exports.createElement(
        my,
        {
          className: 'chakra-button__spinner--end',
          label: p,
          placement: 'end',
        },
        g,
      ),
  );
});
function xy(e) {
  var { leftIcon: r, rightIcon: n, children: a, iconSpacing: o } = e;
  return t.exports.createElement(
    t.exports.Fragment,
    null,
    r && t.exports.createElement(by, { marginEnd: o }, r),
    a,
    n && t.exports.createElement(by, { marginStart: o }, n),
  );
}
var [ky, wy] = xf({ strict: !1, name: 'FormControlContext' });
function Sy() {
  return (Sy =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function _y(e, t) {
  if (null == e) return {};
  var r,
    n,
    a = {},
    o = Object.keys(e);
  for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
  return a;
}
function Ey(e) {
  var t = (function (e) {
      var t,
        r,
        n,
        a = wy(),
        {
          id: o,
          disabled: i,
          readOnly: l,
          required: s,
          isRequired: u,
          isInvalid: c,
          isReadOnly: d,
          isDisabled: f,
          onFocus: p,
          onBlur: h,
        } = e,
        m = _y(e, [
          'id',
          'disabled',
          'readOnly',
          'required',
          'isRequired',
          'isInvalid',
          'isReadOnly',
          'isDisabled',
          'onFocus',
          'onBlur',
        ]),
        g = e['aria-describedby'] ? [e['aria-describedby']] : [];
      null != a &&
        a.hasFeedbackText &&
        null != a &&
        a.isInvalid &&
        g.push(a.feedbackId);
      null != a && a.hasHelpText && g.push(a.helpTextId);
      return Sy({}, m, {
        'aria-describedby': g.join(' ') || void 0,
        id: null != o ? o : null == a ? void 0 : a.id,
        isDisabled:
          null != (t = null != i ? i : f)
            ? t
            : null == a
            ? void 0
            : a.isDisabled,
        isReadOnly:
          null != (r = null != l ? l : d)
            ? r
            : null == a
            ? void 0
            : a.isReadOnly,
        isRequired:
          null != (n = null != s ? s : u)
            ? n
            : null == a
            ? void 0
            : a.isRequired,
        isInvalid: null != c ? c : null == a ? void 0 : a.isInvalid,
        onFocus: hf(null == a ? void 0 : a.onFocus, p),
        onBlur: hf(null == a ? void 0 : a.onBlur, h),
      });
    })(e),
    { isDisabled: r, isInvalid: n, isReadOnly: a, isRequired: o } = t;
  return Sy(
    {},
    _y(t, ['isDisabled', 'isInvalid', 'isReadOnly', 'isRequired']),
    {
      disabled: r,
      readOnly: a,
      required: o,
      'aria-invalid': df(n),
      'aria-required': df(o),
      'aria-readonly': df(a),
    },
  );
}
function Cy() {
  return (Cy =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var zy = Lh((e, r) => {
  var n = (function (e, t) {
      return Mh(e, t, { isMultiPart: !0 });
    })('Input', e),
    a = Ey(Sh(e)),
    o = ff('chakra-input', e.className);
  return t.exports.createElement(
    Nh.input,
    Cy({}, a, { __css: n.field, ref: r, className: o }),
  );
});
zy.id = 'Input';
var Oy = Nh('div');
function Py() {
  return (Py =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Ry = Lh((e, r) => {
  var n = Sh(e),
    { className: a, centerContent: o } = n,
    i = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++)
        (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a;
    })(n, ['className', 'centerContent']),
    l = Mh('Container', e);
  return t.exports.createElement(
    Nh.div,
    Py({ ref: r, className: ff('chakra-container', a) }, i, {
      __css: Py(
        {},
        l,
        o && { display: 'flex', flexDirection: 'column', alignItems: 'center' },
      ),
    }),
  );
});
function Ay() {
  return (Ay =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Ty = Lh((e, r) => {
  var {
      direction: n,
      align: a,
      justify: o,
      wrap: i,
      basis: l,
      grow: s,
      shrink: u,
    } = e,
    c = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++)
        (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a;
    })(e, ['direction', 'align', 'justify', 'wrap', 'basis', 'grow', 'shrink']),
    d = {
      display: 'flex',
      flexDirection: n,
      alignItems: a,
      justifyContent: o,
      flexWrap: i,
      flexBasis: l,
      flexGrow: s,
      flexShrink: u,
    };
  return t.exports.createElement(Nh.div, Ay({ ref: r, __css: d }, c));
});
function jy() {
  return (jy =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Fy = Lh((e, r) => {
  var n = Mh('Heading', e),
    a = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++)
        (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a;
    })(Sh(e), ['className']);
  return t.exports.createElement(
    Nh.h2,
    jy({ ref: r, className: ff('chakra-heading', e.className) }, a, {
      __css: n,
    }),
  );
});
function Iy() {
  return (Iy =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var By = Lh((e, r) => {
    var n = Mh('Link', e),
      a = Sh(e),
      { className: o, isExternal: i } = a,
      l = (function (e, t) {
        if (null == e) return {};
        var r,
          n,
          a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a;
      })(a, ['className', 'isExternal']);
    return t.exports.createElement(
      Nh.a,
      Iy(
        {
          target: i ? '_blank' : void 0,
          rel: i ? 'noopener noreferrer' : void 0,
          ref: r,
          className: ff('chakra-link', o),
        },
        l,
        { __css: n },
      ),
    );
  }),
  Ny = Nh('div', {
    baseStyle: { flex: 1, justifySelf: 'stretch', alignSelf: 'stretch' },
  });
function Ly() {
  return (Ly =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function My(e, t) {
  if (null == e) return {};
  var r,
    n,
    a = {},
    o = Object.keys(e);
  for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
  return a;
}
var Dy = Lh((e, r) => {
    var {
        spacing: n = '0.5rem',
        children: a,
        justify: o,
        direction: i,
        align: l,
        className: s,
        shouldWrapChildren: u,
      } = e,
      c = My(e, [
        'spacing',
        'children',
        'justify',
        'direction',
        'align',
        'className',
        'shouldWrapChildren',
      ]),
      d = t.exports.useMemo(
        () => ({
          '--chakra-wrap-spacing': (e) => {
            return (
              (r = (t) => Df('space', t)(e)),
              Hd((t = n))
                ? t.map((e) => (null === e ? null : r(e)))
                : Ud(t)
                ? tf(t).reduce((e, n) => ((e[n] = r(t[n])), e), {})
                : null != t
                ? r(t)
                : null
            );
            var t, r;
          },
          '--wrap-spacing': 'calc(var(--chakra-wrap-spacing) / 2)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: o,
          alignItems: l,
          flexDirection: i,
          listStyleType: 'none',
          padding: '0',
          margin: 'calc(var(--wrap-spacing) * -1)',
          '& > *:not(style)': { margin: 'var(--wrap-spacing)' },
        }),
        [n, o, l, i],
      ),
      f = u
        ? t.exports.Children.map(a, (e, r) =>
            t.exports.createElement(Wy, { key: r }, e),
          )
        : a;
    return t.exports.createElement(
      Nh.div,
      Ly({ ref: r, className: ff('chakra-wrap', s) }, c),
      t.exports.createElement(
        Nh.ul,
        { className: 'chakra-wrap__list', __css: d },
        f,
      ),
    );
  }),
  Wy = Lh((e, r) => {
    var { className: n } = e,
      a = My(e, ['className']);
    return t.exports.createElement(
      Nh.li,
      Ly(
        {
          ref: r,
          __css: { display: 'flex', alignItems: 'flex-start' },
          className: ff('chakra-wrap__listitem', n),
        },
        a,
      ),
    );
  });
export {
  Oy as B,
  ny as C,
  Ty as F,
  Fy as H,
  zy as I,
  By as L,
  L as R,
  Ny as S,
  Dy as W,
  Ry as a,
  yy as b,
  Wy as c,
  Xu as d,
  ay as e,
  t as r,
  ry as t,
};

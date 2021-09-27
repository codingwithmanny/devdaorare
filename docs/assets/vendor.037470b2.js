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
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable;
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
    } catch (o) {
      return !1;
    }
  })()
    ? Object.assign
    : function (e, t) {
        for (var r, l, u = i(e), s = 1; s < arguments.length; s++) {
          for (var c in (r = Object(arguments[s])))
            o.call(r, c) && (u[c] = r[c]);
          if (n) {
            l = n(r);
            for (var f = 0; f < l.length; f++)
              a.call(r, l[f]) && (u[l[f]] = r[l[f]]);
          }
        }
        return u;
      },
  u = l,
  s = 60103,
  c = 60106;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (r.Fragment = 60107), (r.StrictMode = 60108), (r.Profiler = 60114);
var f = 60109,
  d = 60110,
  p = 60112;
r.Suspense = 60113;
var h = 60115,
  m = 60116;
if ('function' == typeof Symbol && Symbol.for) {
  var v = Symbol.for;
  (s = v('react.element')),
    (c = v('react.portal')),
    (r.Fragment = v('react.fragment')),
    (r.StrictMode = v('react.strict_mode')),
    (r.Profiler = v('react.profiler')),
    (f = v('react.provider')),
    (d = v('react.context')),
    (p = v('react.forward_ref')),
    (r.Suspense = v('react.suspense')),
    (h = v('react.memo')),
    (m = v('react.lazy'));
}
var g = 'function' == typeof Symbol && Symbol.iterator;
function y(e) {
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
var b = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  x = {};
function w(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = x),
    (this.updater = r || b);
}
function k() {}
function S(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = x),
    (this.updater = r || b);
}
(w.prototype.isReactComponent = {}),
  (w.prototype.setState = function (e, t) {
    if ('object' != typeof e && 'function' != typeof e && null != e)
      throw Error(y(85));
    this.updater.enqueueSetState(this, e, t, 'setState');
  }),
  (w.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
  }),
  (k.prototype = w.prototype);
var E = (S.prototype = new k());
(E.constructor = S), u(E, w.prototype), (E.isPureReactComponent = !0);
var _ = { current: null },
  C = Object.prototype.hasOwnProperty,
  P = { key: !0, ref: !0, __self: !0, __source: !0 };
function A(e, t, r) {
  var n,
    o = {},
    a = null,
    i = null;
  if (null != t)
    for (n in (void 0 !== t.ref && (i = t.ref),
    void 0 !== t.key && (a = '' + t.key),
    t))
      C.call(t, n) && !P.hasOwnProperty(n) && (o[n] = t[n]);
  var l = arguments.length - 2;
  if (1 === l) o.children = r;
  else if (1 < l) {
    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (n in (l = e.defaultProps)) void 0 === o[n] && (o[n] = l[n]);
  return { $$typeof: s, type: e, key: a, ref: i, props: o, _owner: _.current };
}
function T(e) {
  return 'object' == typeof e && null !== e && e.$$typeof === s;
}
var O = /\/+/g;
function R(e, t) {
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
function z(e, t, r, n, o) {
  var a = typeof e;
  ('undefined' !== a && 'boolean' !== a) || (e = null);
  var i = !1;
  if (null === e) i = !0;
  else
    switch (a) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case s:
          case c:
            i = !0;
        }
    }
  if (i)
    return (
      (o = o((i = e))),
      (e = '' === n ? '.' + R(i, 0) : n),
      Array.isArray(o)
        ? ((r = ''),
          null != e && (r = e.replace(O, '$&/') + '/'),
          z(o, t, r, '', function (e) {
            return e;
          }))
        : null != o &&
          (T(o) &&
            (o = (function (e, t) {
              return {
                $$typeof: s,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner,
              };
            })(
              o,
              r +
                (!o.key || (i && i.key === o.key)
                  ? ''
                  : ('' + o.key).replace(O, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (n = '' === n ? '.' : n + ':'), Array.isArray(e)))
    for (var l = 0; l < e.length; l++) {
      var u = n + R((a = e[l]), l);
      i += z(a, t, r, u, o);
    }
  else if (
    'function' ==
    typeof (u = (function (e) {
      return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (g && e[g]) || e['@@iterator'])
        ? e
        : null;
    })(e))
  )
    for (e = u.call(e), l = 0; !(a = e.next()).done; )
      i += z((a = a.value), t, r, (u = n + R(a, l++)), o);
  else if ('object' === a)
    throw (
      ((t = '' + e),
      Error(
        y(
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
    o = 0;
  return (
    z(e, n, '', '', function (e) {
      return t.call(r, e, o++);
    }),
    n
  );
}
function L(e) {
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
var M = { current: null };
function F() {
  var e = M.current;
  if (null === e) throw Error(y(321));
  return e;
}
var B = {
  ReactCurrentDispatcher: M,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: _,
  IsSomeRendererActing: { current: !1 },
  assign: u,
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
    if (!T(e)) throw Error(y(143));
    return e;
  },
}),
  (r.Component = w),
  (r.PureComponent = S),
  (r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
  (r.cloneElement = function (e, t, r) {
    if (null == e) throw Error(y(267, e));
    var n = u({}, e.props),
      o = e.key,
      a = e.ref,
      i = e._owner;
    if (null != t) {
      if (
        (void 0 !== t.ref && ((a = t.ref), (i = _.current)),
        void 0 !== t.key && (o = '' + t.key),
        e.type && e.type.defaultProps)
      )
        var l = e.type.defaultProps;
      for (c in t)
        C.call(t, c) &&
          !P.hasOwnProperty(c) &&
          (n[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
    }
    var c = arguments.length - 2;
    if (1 === c) n.children = r;
    else if (1 < c) {
      l = Array(c);
      for (var f = 0; f < c; f++) l[f] = arguments[f + 2];
      n.children = l;
    }
    return { $$typeof: s, type: e.type, key: o, ref: a, props: n, _owner: i };
  }),
  (r.createContext = function (e, t) {
    return (
      void 0 === t && (t = null),
      ((e = {
        $$typeof: d,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }).Provider = { $$typeof: f, _context: e }),
      (e.Consumer = e)
    );
  }),
  (r.createElement = A),
  (r.createFactory = function (e) {
    var t = A.bind(null, e);
    return (t.type = e), t;
  }),
  (r.createRef = function () {
    return { current: null };
  }),
  (r.forwardRef = function (e) {
    return { $$typeof: p, render: e };
  }),
  (r.isValidElement = T),
  (r.lazy = function (e) {
    return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: L };
  }),
  (r.memo = function (e, t) {
    return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
  }),
  (r.useCallback = function (e, t) {
    return F().useCallback(e, t);
  }),
  (r.useContext = function (e, t) {
    return F().useContext(e, t);
  }),
  (r.useDebugValue = function () {}),
  (r.useEffect = function (e, t) {
    return F().useEffect(e, t);
  }),
  (r.useImperativeHandle = function (e, t, r) {
    return F().useImperativeHandle(e, t, r);
  }),
  (r.useLayoutEffect = function (e, t) {
    return F().useLayoutEffect(e, t);
  }),
  (r.useMemo = function (e, t) {
    return F().useMemo(e, t);
  }),
  (r.useReducer = function (e, t, r) {
    return F().useReducer(e, t, r);
  }),
  (r.useRef = function (e) {
    return F().useRef(e);
  }),
  (r.useState = function (e) {
    return F().useState(e);
  }),
  (r.version = '17.0.2'),
  (t.exports = r);
var I = t.exports,
  D = { exports: {} },
  N = {},
  V = { exports: {} },
  W = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!(function (e) {
  var t, r, n, o;
  if ('object' == typeof performance && 'function' == typeof performance.now) {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
    var u = null,
      s = null,
      c = function () {
        if (null !== u)
          try {
            var t = e.unstable_now();
            u(!0, t), (u = null);
          } catch (r) {
            throw (setTimeout(c, 0), r);
          }
      };
    (t = function (e) {
      null !== u ? setTimeout(t, 0, e) : ((u = e), setTimeout(c, 0));
    }),
      (r = function (e, t) {
        s = setTimeout(e, t);
      }),
      (n = function () {
        clearTimeout(s);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (o = e.unstable_forceFrameRate = function () {});
  } else {
    var f = window.setTimeout,
      d = window.clearTimeout;
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
      v = -1,
      g = 5,
      y = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= y;
    }),
      (o = function () {}),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (g = 0 < e ? Math.floor(1e3 / e) : 5);
      });
    var b = new MessageChannel(),
      x = b.port2;
    (b.port1.onmessage = function () {
      if (null !== m) {
        var t = e.unstable_now();
        y = t + g;
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
        v = f(function () {
          t(e.unstable_now());
        }, r);
      }),
      (n = function () {
        d(v), (v = -1);
      });
  }
  function w(e, t) {
    var r = e.length;
    e.push(t);
    e: for (;;) {
      var n = (r - 1) >>> 1,
        o = e[n];
      if (!(void 0 !== o && 0 < E(o, t))) break e;
      (e[n] = t), (e[r] = o), (r = n);
    }
  }
  function k(e) {
    return void 0 === (e = e[0]) ? null : e;
  }
  function S(e) {
    var t = e[0];
    if (void 0 !== t) {
      var r = e.pop();
      if (r !== t) {
        e[0] = r;
        e: for (var n = 0, o = e.length; n < o; ) {
          var a = 2 * (n + 1) - 1,
            i = e[a],
            l = a + 1,
            u = e[l];
          if (void 0 !== i && 0 > E(i, r))
            void 0 !== u && 0 > E(u, i)
              ? ((e[n] = u), (e[l] = r), (n = l))
              : ((e[n] = i), (e[a] = r), (n = a));
          else {
            if (!(void 0 !== u && 0 > E(u, r))) break e;
            (e[n] = u), (e[l] = r), (n = l);
          }
        }
      }
      return t;
    }
    return null;
  }
  function E(e, t) {
    var r = e.sortIndex - t.sortIndex;
    return 0 !== r ? r : e.id - t.id;
  }
  var _ = [],
    C = [],
    P = 1,
    A = null,
    T = 3,
    O = !1,
    R = !1,
    z = !1;
  function j(e) {
    for (var t = k(C); null !== t; ) {
      if (null === t.callback) S(C);
      else {
        if (!(t.startTime <= e)) break;
        S(C), (t.sortIndex = t.expirationTime), w(_, t);
      }
      t = k(C);
    }
  }
  function L(e) {
    if (((z = !1), j(e), !R))
      if (null !== k(_)) (R = !0), t(M);
      else {
        var n = k(C);
        null !== n && r(L, n.startTime - e);
      }
  }
  function M(t, o) {
    (R = !1), z && ((z = !1), n()), (O = !0);
    var a = T;
    try {
      for (
        j(o), A = k(_);
        null !== A &&
        (!(A.expirationTime > o) || (t && !e.unstable_shouldYield()));

      ) {
        var i = A.callback;
        if ('function' == typeof i) {
          (A.callback = null), (T = A.priorityLevel);
          var l = i(A.expirationTime <= o);
          (o = e.unstable_now()),
            'function' == typeof l ? (A.callback = l) : A === k(_) && S(_),
            j(o);
        } else S(_);
        A = k(_);
      }
      if (null !== A) var u = !0;
      else {
        var s = k(C);
        null !== s && r(L, s.startTime - o), (u = !1);
      }
      return u;
    } finally {
      (A = null), (T = a), (O = !1);
    }
  }
  var F = o;
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
      R || O || ((R = !0), t(M));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return T;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return k(_);
    }),
    (e.unstable_next = function (e) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = T;
      }
      var r = T;
      T = t;
      try {
        return e();
      } finally {
        T = r;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = F),
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
      var r = T;
      T = e;
      try {
        return t();
      } finally {
        T = r;
      }
    }),
    (e.unstable_scheduleCallback = function (o, a, i) {
      var l = e.unstable_now();
      switch (
        ('object' == typeof i && null !== i
          ? (i = 'number' == typeof (i = i.delay) && 0 < i ? l + i : l)
          : (i = l),
        o)
      ) {
        case 1:
          var u = -1;
          break;
        case 2:
          u = 250;
          break;
        case 5:
          u = 1073741823;
          break;
        case 4:
          u = 1e4;
          break;
        default:
          u = 5e3;
      }
      return (
        (o = {
          id: P++,
          callback: a,
          priorityLevel: o,
          startTime: i,
          expirationTime: (u = i + u),
          sortIndex: -1,
        }),
        i > l
          ? ((o.sortIndex = i),
            w(C, o),
            null === k(_) && o === k(C) && (z ? n() : (z = !0), r(L, i - l)))
          : ((o.sortIndex = u), w(_, o), R || O || ((R = !0), t(M))),
        o
      );
    }),
    (e.unstable_wrapCallback = function (e) {
      var t = T;
      return function () {
        var r = T;
        T = t;
        try {
          return e.apply(this, arguments);
        } finally {
          T = r;
        }
      };
    });
})(W),
  (V.exports = W);
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H = t.exports,
  U = l,
  $ = V.exports;
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
if (!H) throw Error(q(227));
var Y = new Set(),
  X = {};
function Q(e, t) {
  G(e, t), G(e + 'Capture', t);
}
function G(e, t) {
  for (X[e] = t, e = 0; e < t.length; e++) Y.add(t[e]);
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
function re(e, t, r, n, o, a, i) {
  (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
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
var oe = /[\-:]([a-z])/g;
function ae(e) {
  return e[1].toUpperCase();
}
function ie(e, t, r, n) {
  var o = ne.hasOwnProperty(t) ? ne[t] : null;
  (null !== o
    ? 0 === o.type
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
    })(t, r, o, n) && (r = null),
    n || null === o
      ? (function (e) {
          return (
            !!J.call(te, e) ||
            (!J.call(ee, e) && (Z.test(e) ? (te[e] = !0) : ((ee[e] = !0), !1)))
          );
        })(t) && (null === r ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = null === r ? 3 !== o.type && '' : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        null === r
          ? e.removeAttribute(t)
          : ((r = 3 === (o = o.type) || (4 === o && !0 === r) ? '' : '' + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(oe, ae);
    ne[t] = new re(t, 1, !1, e, null, !1, !1);
  }),
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(oe, ae);
      ne[t] = new re(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(oe, ae);
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
var le = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ue = 60103,
  se = 60106,
  ce = 60107,
  fe = 60108,
  de = 60114,
  pe = 60109,
  he = 60110,
  me = 60112,
  ve = 60113,
  ge = 60120,
  ye = 60115,
  be = 60116,
  xe = 60121,
  we = 60128,
  ke = 60129,
  Se = 60130,
  Ee = 60131;
if ('function' == typeof Symbol && Symbol.for) {
  var _e = Symbol.for;
  (ue = _e('react.element')),
    (se = _e('react.portal')),
    (ce = _e('react.fragment')),
    (fe = _e('react.strict_mode')),
    (de = _e('react.profiler')),
    (pe = _e('react.provider')),
    (he = _e('react.context')),
    (me = _e('react.forward_ref')),
    (ve = _e('react.suspense')),
    (ge = _e('react.suspense_list')),
    (ye = _e('react.memo')),
    (be = _e('react.lazy')),
    (xe = _e('react.block')),
    _e('react.scope'),
    (we = _e('react.opaque.id')),
    (ke = _e('react.debug_trace_mode')),
    (Se = _e('react.offscreen')),
    (Ee = _e('react.legacy_hidden'));
}
var Ce,
  Pe = 'function' == typeof Symbol && Symbol.iterator;
function Ae(e) {
  return null === e || 'object' != typeof e
    ? null
    : 'function' == typeof (e = (Pe && e[Pe]) || e['@@iterator'])
    ? e
    : null;
}
function Te(e) {
  if (void 0 === Ce)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Ce = (t && t[1]) || '';
    }
  return '\n' + Ce + e;
}
var Oe = !1;
function Re(e, t) {
  if (!e || Oe) return '';
  Oe = !0;
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
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && 'string' == typeof u.stack) {
      for (
        var o = u.stack.split('\n'),
          a = n.stack.split('\n'),
          i = o.length - 1,
          l = a.length - 1;
        1 <= i && 0 <= l && o[i] !== a[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== a[l]) {
          if (1 !== i || 1 !== l)
            do {
              if ((i--, 0 > --l || o[i] !== a[l]))
                return '\n' + o[i].replace(' at new ', ' at ');
            } while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (Oe = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : '') ? Te(e) : '';
}
function ze(e) {
  switch (e.tag) {
    case 5:
      return Te(e.type);
    case 16:
      return Te('Lazy');
    case 13:
      return Te('Suspense');
    case 19:
      return Te('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Re(e.type, !1));
    case 11:
      return (e = Re(e.type.render, !1));
    case 22:
      return (e = Re(e.type._render, !1));
    case 1:
      return (e = Re(e.type, !0));
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
    case se:
      return 'Portal';
    case de:
      return 'Profiler';
    case fe:
      return 'StrictMode';
    case ve:
      return 'Suspense';
    case ge:
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
      case ye:
        return je(e.type);
      case xe:
        return je(e._render);
      case be:
        (t = e._payload), (e = e._init);
        try {
          return je(e(t));
        } catch (r) {}
    }
  return null;
}
function Le(e) {
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
function Me(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    'input' === e.toLowerCase() &&
    ('checkbox' === t || 'radio' === t)
  );
}
function Fe(e) {
  e._valueTracker ||
    (e._valueTracker = (function (e) {
      var t = Me(e) ? 'checked' : 'value',
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = '' + e[t];
      if (
        !e.hasOwnProperty(t) &&
        void 0 !== r &&
        'function' == typeof r.get &&
        'function' == typeof r.set
      ) {
        var o = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return o.call(this);
            },
            set: function (e) {
              (n = '' + e), a.call(this, e);
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
function Be(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = '';
  return (
    e && (n = Me(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n) !== r && (t.setValue(e), !0)
  );
}
function Ie(e) {
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
function De(e, t) {
  var r = t.checked;
  return U({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != r ? r : e._wrapperState.initialChecked,
  });
}
function Ne(e, t) {
  var r = null == t.defaultValue ? '' : t.defaultValue,
    n = null != t.checked ? t.checked : t.defaultChecked;
  (r = Le(null != t.value ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        'checkbox' === t.type || 'radio' === t.type
          ? null != t.checked
          : null != t.value,
    });
}
function Ve(e, t) {
  null != (t = t.checked) && ie(e, 'checked', t, !1);
}
function We(e, t) {
  Ve(e, t);
  var r = Le(t.value),
    n = t.type;
  if (null != r)
    'number' === n
      ? ((0 === r && '' === e.value) || e.value != r) && (e.value = '' + r)
      : e.value !== '' + r && (e.value = '' + r);
  else if ('submit' === n || 'reset' === n)
    return void e.removeAttribute('value');
  t.hasOwnProperty('value')
    ? Ue(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && Ue(e, t.type, Le(t.defaultValue)),
    null == t.checked &&
      null != t.defaultChecked &&
      (e.defaultChecked = !!t.defaultChecked);
}
function He(e, t, r) {
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
  ('number' === t && Ie(e.ownerDocument) === e) ||
    (null == r
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
}
function $e(e, t) {
  return (
    (e = U({ children: void 0 }, t)),
    (t = (function (e) {
      var t = '';
      return (
        H.Children.forEach(e, function (e) {
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
    for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = '' + Le(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r)
        return (e[o].selected = !0), void (n && (e[o].defaultSelected = !0));
      null !== t || e[o].disabled || (t = e[o]);
    }
    null !== t && (t.selected = !0);
  }
}
function Ye(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error(q(91));
  return U({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Xe(e, t) {
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
  e._wrapperState = { initialValue: Le(r) };
}
function Qe(e, t) {
  var r = Le(t.value),
    n = Le(t.defaultValue);
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
function ot(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && 3 === r.nodeType)
      return void (r.nodeValue = t);
  }
  e.textContent = t;
}
var at = {
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
    : r || 'number' != typeof t || 0 === t || (at.hasOwnProperty(e) && at[e])
    ? ('' + t).trim()
    : t + 'px';
}
function ut(e, t) {
  for (var r in ((e = e.style), t))
    if (t.hasOwnProperty(r)) {
      var n = 0 === r.indexOf('--'),
        o = lt(r, t[r], n);
      'float' === r && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
Object.keys(at).forEach(function (e) {
  it.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (at[t] = at[e]);
  });
});
var st = U(
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
    if (st[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
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
function ft(e, t) {
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
function dt(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  );
}
var pt = null,
  ht = null,
  mt = null;
function vt(e) {
  if ((e = Vo(e))) {
    if ('function' != typeof pt) throw Error(q(280));
    var t = e.stateNode;
    t && ((t = Ho(t)), pt(e.stateNode, e.type, t));
  }
}
function gt(e) {
  ht ? (mt ? mt.push(e) : (mt = [e])) : (ht = e);
}
function yt() {
  if (ht) {
    var e = ht,
      t = mt;
    if (((mt = ht = null), vt(e), t)) for (e = 0; e < t.length; e++) vt(t[e]);
  }
}
function bt(e, t) {
  return e(t);
}
function xt(e, t, r, n, o) {
  return e(t, r, n, o);
}
function wt() {}
var kt = bt,
  St = !1,
  Et = !1;
function _t() {
  (null === ht && null === mt) || (wt(), yt());
}
function Ct(e, t) {
  var r = e.stateNode;
  if (null === r) return null;
  var n = Ho(r);
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
var Pt = !1;
if (K)
  try {
    var At = {};
    Object.defineProperty(At, 'passive', {
      get: function () {
        Pt = !0;
      },
    }),
      window.addEventListener('test', At, At),
      window.removeEventListener('test', At, At);
  } catch (rt) {
    Pt = !1;
  }
function Tt(e, t, r, n, o, a, i, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, s);
  } catch (c) {
    this.onError(c);
  }
}
var Ot = !1,
  Rt = null,
  zt = !1,
  jt = null,
  Lt = {
    onError: function (e) {
      (Ot = !0), (Rt = e);
    },
  };
function Mt(e, t, r, n, o, a, i, l, u) {
  (Ot = !1), (Rt = null), Tt.apply(Lt, arguments);
}
function Ft(e) {
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
function Bt(e) {
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
function It(e) {
  if (Ft(e) !== e) throw Error(q(188));
}
function Dt(e) {
  if (
    !(e = (function (e) {
      var t = e.alternate;
      if (!t) {
        if (null === (t = Ft(e))) throw Error(q(188));
        return t !== e ? null : e;
      }
      for (var r = e, n = t; ; ) {
        var o = r.return;
        if (null === o) break;
        var a = o.alternate;
        if (null === a) {
          if (null !== (n = o.return)) {
            r = n;
            continue;
          }
          break;
        }
        if (o.child === a.child) {
          for (a = o.child; a; ) {
            if (a === r) return It(o), e;
            if (a === n) return It(o), t;
            a = a.sibling;
          }
          throw Error(q(188));
        }
        if (r.return !== n.return) (r = o), (n = a);
        else {
          for (var i = !1, l = o.child; l; ) {
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
          if (!i) {
            for (l = a.child; l; ) {
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
function Nt(e, t) {
  for (var r = e.alternate; null !== t; ) {
    if (t === e || t === r) return !0;
    t = t.return;
  }
  return !1;
}
var Vt,
  Wt,
  Ht,
  Ut,
  $t = !1,
  qt = [],
  Yt = null,
  Xt = null,
  Qt = null,
  Gt = new Map(),
  Kt = new Map(),
  Zt = [],
  Jt =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function er(e, t, r, n, o) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: 16 | r,
    nativeEvent: o,
    targetContainers: [n],
  };
}
function tr(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Yt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Xt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Qt = null;
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
function rr(e, t, r, n, o, a) {
  return null === e || e.nativeEvent !== a
    ? ((e = er(t, r, n, o, a)), null !== t && null !== (t = Vo(t)) && Wt(t), e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      null !== o && -1 === t.indexOf(o) && t.push(o),
      e);
}
function nr(e) {
  var t = No(e.target);
  if (null !== t) {
    var r = Ft(t);
    if (null !== r)
      if (13 === (t = r.tag)) {
        if (null !== (t = Bt(r)))
          return (
            (e.blockedOn = t),
            void Ut(e.lanePriority, function () {
              $.unstable_runWithPriority(e.priority, function () {
                Ht(r);
              });
            })
          );
      } else if (3 === t && r.stateNode.hydrate)
        return void (e.blockedOn =
          3 === r.tag ? r.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function or(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Dr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (null !== r) return null !== (t = Vo(r)) && Wt(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function ar(e, t, r) {
  or(e) && r.delete(t);
}
function ir() {
  for ($t = !1; 0 < qt.length; ) {
    var e = qt[0];
    if (null !== e.blockedOn) {
      null !== (e = Vo(e.blockedOn)) && Vt(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Dr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== r) {
        e.blockedOn = r;
        break;
      }
      t.shift();
    }
    null === e.blockedOn && qt.shift();
  }
  null !== Yt && or(Yt) && (Yt = null),
    null !== Xt && or(Xt) && (Xt = null),
    null !== Qt && or(Qt) && (Qt = null),
    Gt.forEach(ar),
    Kt.forEach(ar);
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $t ||
      (($t = !0), $.unstable_scheduleCallback($.unstable_NormalPriority, ir)));
}
function ur(e) {
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
    null !== Yt && lr(Yt, e),
      null !== Xt && lr(Xt, e),
      null !== Qt && lr(Qt, e),
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
function sr(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  );
}
var cr = {
    animationend: sr('Animation', 'AnimationEnd'),
    animationiteration: sr('Animation', 'AnimationIteration'),
    animationstart: sr('Animation', 'AnimationStart'),
    transitionend: sr('Transition', 'TransitionEnd'),
  },
  fr = {},
  dr = {};
function pr(e) {
  if (fr[e]) return fr[e];
  if (!cr[e]) return e;
  var t,
    r = cr[e];
  for (t in r) if (r.hasOwnProperty(t) && t in dr) return (fr[e] = r[t]);
  return e;
}
K &&
  ((dr = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  'TransitionEvent' in window || delete cr.transitionend.transition);
var hr = pr('animationend'),
  mr = pr('animationiteration'),
  vr = pr('animationstart'),
  gr = pr('transitionend'),
  yr = new Map(),
  br = new Map(),
  xr = [
    'abort',
    'abort',
    hr,
    'animationEnd',
    mr,
    'animationIteration',
    vr,
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
    gr,
    'transitionEnd',
    'waiting',
    'waiting',
  ];
function wr(e, t) {
  for (var r = 0; r < e.length; r += 2) {
    var n = e[r],
      o = e[r + 1];
    (o = 'on' + (o[0].toUpperCase() + o.slice(1))),
      br.set(n, t),
      yr.set(n, o),
      Q(o, [n]);
  }
}
(0, $.unstable_now)();
var kr = 8;
function Sr(e) {
  if (0 != (1 & e)) return (kr = 15), 1;
  if (0 != (2 & e)) return (kr = 14), 2;
  if (0 != (4 & e)) return (kr = 13), 4;
  var t = 24 & e;
  return 0 !== t
    ? ((kr = 12), t)
    : 0 != (32 & e)
    ? ((kr = 11), 32)
    : 0 !== (t = 192 & e)
    ? ((kr = 10), t)
    : 0 != (256 & e)
    ? ((kr = 9), 256)
    : 0 !== (t = 3584 & e)
    ? ((kr = 8), t)
    : 0 != (4096 & e)
    ? ((kr = 7), 4096)
    : 0 !== (t = 4186112 & e)
    ? ((kr = 6), t)
    : 0 !== (t = 62914560 & e)
    ? ((kr = 5), t)
    : 67108864 & e
    ? ((kr = 4), 67108864)
    : 0 != (134217728 & e)
    ? ((kr = 3), 134217728)
    : 0 !== (t = 805306368 & e)
    ? ((kr = 2), t)
    : 0 != (1073741824 & e)
    ? ((kr = 1), 1073741824)
    : ((kr = 8), e);
}
function Er(e, t) {
  var r = e.pendingLanes;
  if (0 === r) return (kr = 0);
  var n = 0,
    o = 0,
    a = e.expiredLanes,
    i = e.suspendedLanes,
    l = e.pingedLanes;
  if (0 !== a) (n = a), (o = kr = 15);
  else if (0 !== (a = 134217727 & r)) {
    var u = a & ~i;
    0 !== u
      ? ((n = Sr(u)), (o = kr))
      : 0 !== (l &= a) && ((n = Sr(l)), (o = kr));
  } else
    0 !== (a = r & ~i)
      ? ((n = Sr(a)), (o = kr))
      : 0 !== l && ((n = Sr(l)), (o = kr));
  if (0 === n) return 0;
  if (
    ((n = r & (((0 > (n = 31 - Or(n)) ? 0 : 1 << n) << 1) - 1)),
    0 !== t && t !== n && 0 == (t & i))
  ) {
    if ((Sr(t), o <= kr)) return t;
    kr = o;
  }
  if (0 !== (t = e.entangledLanes))
    for (e = e.entanglements, t &= n; 0 < t; )
      (o = 1 << (r = 31 - Or(t))), (n |= e[r]), (t &= ~o);
  return n;
}
function _r(e) {
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
      return 0 === (e = Pr(24 & ~t)) ? Cr(10, t) : e;
    case 10:
      return 0 === (e = Pr(192 & ~t)) ? Cr(8, t) : e;
    case 8:
      return (
        0 === (e = Pr(3584 & ~t)) && 0 === (e = Pr(4186112 & ~t)) && (e = 512),
        e
      );
    case 2:
      return 0 === (t = Pr(805306368 & ~t)) && (t = 268435456), t;
  }
  throw Error(q(358, e));
}
function Pr(e) {
  return e & -e;
}
function Ar(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Tr(e, t, r) {
  e.pendingLanes |= t;
  var n = t - 1;
  (e.suspendedLanes &= n),
    (e.pingedLanes &= n),
    ((e = e.eventTimes)[(t = 31 - Or(t))] = r);
}
var Or = Math.clz32
    ? Math.clz32
    : function (e) {
        return 0 === e ? 32 : (31 - ((Rr(e) / zr) | 0)) | 0;
      },
  Rr = Math.log,
  zr = Math.LN2;
var jr = $.unstable_UserBlockingPriority,
  Lr = $.unstable_runWithPriority,
  Mr = !0;
function Fr(e, t, r, n) {
  St || wt();
  var o = Ir,
    a = St;
  St = !0;
  try {
    xt(o, e, t, r, n);
  } finally {
    (St = a) || _t();
  }
}
function Br(e, t, r, n) {
  Lr(jr, Ir.bind(null, e, t, r, n));
}
function Ir(e, t, r, n) {
  var o;
  if (Mr)
    if ((o = 0 == (4 & t)) && 0 < qt.length && -1 < Jt.indexOf(e))
      (e = er(null, e, t, r, n)), qt.push(e);
    else {
      var a = Dr(e, t, r, n);
      if (null === a) o && tr(e, n);
      else {
        if (o) {
          if (-1 < Jt.indexOf(e))
            return (e = er(a, e, t, r, n)), void qt.push(e);
          if (
            (function (e, t, r, n, o) {
              switch (t) {
                case 'focusin':
                  return (Yt = rr(Yt, e, t, r, n, o)), !0;
                case 'dragenter':
                  return (Xt = rr(Xt, e, t, r, n, o)), !0;
                case 'mouseover':
                  return (Qt = rr(Qt, e, t, r, n, o)), !0;
                case 'pointerover':
                  var a = o.pointerId;
                  return Gt.set(a, rr(Gt.get(a) || null, e, t, r, n, o)), !0;
                case 'gotpointercapture':
                  return (
                    (a = o.pointerId),
                    Kt.set(a, rr(Kt.get(a) || null, e, t, r, n, o)),
                    !0
                  );
              }
              return !1;
            })(a, e, t, r, n)
          )
            return;
          tr(e, n);
        }
        bo(e, t, n, null, r);
      }
    }
}
function Dr(e, t, r, n) {
  var o = dt(n);
  if (null !== (o = No(o))) {
    var a = Ft(o);
    if (null === a) o = null;
    else {
      var i = a.tag;
      if (13 === i) {
        if (null !== (o = Bt(a))) return o;
        o = null;
      } else if (3 === i) {
        if (a.stateNode.hydrate)
          return 3 === a.tag ? a.stateNode.containerInfo : null;
        o = null;
      } else a !== o && (o = null);
    }
  }
  return bo(e, t, n, o, r), null;
}
var Nr = null,
  Vr = null,
  Wr = null;
function Hr() {
  if (Wr) return Wr;
  var e,
    t,
    r = Vr,
    n = r.length,
    o = 'value' in Nr ? Nr.value : Nr.textContent,
    a = o.length;
  for (e = 0; e < n && r[e] === o[e]; e++);
  var i = n - e;
  for (t = 1; t <= i && r[n - t] === o[a - t]; t++);
  return (Wr = o.slice(e, 1 < t ? 1 - t : void 0));
}
function Ur(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
    10 === e && (e = 13),
    32 <= e || 13 === e ? e : 0
  );
}
function $r() {
  return !0;
}
function qr() {
  return !1;
}
function Yr(e) {
  function t(t, r, n, o, a) {
    for (var i in ((this._reactName = t),
    (this._targetInst = n),
    (this.type = r),
    (this.nativeEvent = o),
    (this.target = a),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
    return (
      (this.isDefaultPrevented = (
        null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
      )
        ? $r
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
          (this.isDefaultPrevented = $r));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = $r));
      },
      persist: function () {},
      isPersistent: $r,
    }),
    t
  );
}
var Xr,
  Qr,
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
  Zr = Yr(Kr),
  Jr = U({}, Kr, { view: 0, detail: 0 }),
  en = Yr(Jr),
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
              ? ((Xr = e.screenX - Gr.screenX), (Qr = e.screenY - Gr.screenY))
              : (Qr = Xr = 0),
            (Gr = e)),
          Xr);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Qr;
    },
  }),
  rn = Yr(tn),
  nn = Yr(U({}, tn, { dataTransfer: 0 })),
  on = Yr(U({}, Jr, { relatedTarget: 0 })),
  an = Yr(U({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  ln = Yr(
    U({}, Kr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
  ),
  un = Yr(U({}, Kr, { data: 0 })),
  sn = {
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
  fn = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function dn(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = fn[e]) && !!t[e];
}
function pn() {
  return dn;
}
var hn = Yr(
    U({}, Jr, {
      key: function (e) {
        if (e.key) {
          var t = sn[e.key] || e.key;
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
  mn = Yr(
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
  vn = Yr(
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
  gn = Yr(U({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  yn = Yr(
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
  bn = [9, 13, 27, 32],
  xn = K && 'CompositionEvent' in window,
  wn = null;
K && 'documentMode' in document && (wn = document.documentMode);
var kn = K && 'TextEvent' in window && !wn,
  Sn = K && (!xn || (wn && 8 < wn && 11 >= wn)),
  En = String.fromCharCode(32),
  _n = !1;
function Cn(e, t) {
  switch (e) {
    case 'keyup':
      return -1 !== bn.indexOf(t.keyCode);
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
function Pn(e) {
  return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var An = !1;
var Tn = {
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
function On(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return 'input' === t ? !!Tn[e.type] : 'textarea' === t;
}
function Rn(e, t, r, n) {
  gt(n),
    0 < (t = wo(t, 'onChange')).length &&
      ((r = new Zr('onChange', 'change', null, r, n)),
      e.push({ event: r, listeners: t }));
}
var zn = null,
  jn = null;
function Ln(e) {
  po(e, 0);
}
function Mn(e) {
  if (Be(Wo(e))) return e;
}
function Fn(e, t) {
  if ('change' === e) return t;
}
var Bn = !1;
if (K) {
  var In;
  if (K) {
    var Dn = 'oninput' in document;
    if (!Dn) {
      var Nn = document.createElement('div');
      Nn.setAttribute('oninput', 'return;'),
        (Dn = 'function' == typeof Nn.oninput);
    }
    In = Dn;
  } else In = !1;
  Bn = In && (!document.documentMode || 9 < document.documentMode);
}
function Vn() {
  zn && (zn.detachEvent('onpropertychange', Wn), (jn = zn = null));
}
function Wn(e) {
  if ('value' === e.propertyName && Mn(jn)) {
    var t = [];
    if ((Rn(t, jn, e, dt(e)), (e = Ln), St)) e(t);
    else {
      St = !0;
      try {
        bt(e, t);
      } finally {
        (St = !1), _t();
      }
    }
  }
}
function Hn(e, t, r) {
  'focusin' === e
    ? (Vn(), (jn = r), (zn = t).attachEvent('onpropertychange', Wn))
    : 'focusout' === e && Vn();
}
function Un(e) {
  if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
    return Mn(jn);
}
function $n(e, t) {
  if ('click' === e) return Mn(t);
}
function qn(e, t) {
  if ('input' === e || 'change' === e) return Mn(t);
}
var Yn =
    'function' == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
  Xn = Object.prototype.hasOwnProperty;
function Qn(e, t) {
  if (Yn(e, t)) return !0;
  if ('object' != typeof e || null === e || 'object' != typeof t || null === t)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++)
    if (!Xn.call(t, r[n]) || !Yn(e[r[n]], t[r[n]])) return !1;
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
  for (var e = window, t = Ie(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = 'string' == typeof t.contentWindow.location.href;
    } catch (n) {
      r = !1;
    }
    if (!r) break;
    t = Ie((e = t.contentWindow).document);
  }
  return t;
}
function eo(e) {
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
var to = K && 'documentMode' in document && 11 >= document.documentMode,
  ro = null,
  no = null,
  oo = null,
  ao = !1;
function io(e, t, r) {
  var n = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
  ao ||
    null == ro ||
    ro !== Ie(n) ||
    ('selectionStart' in (n = ro) && eo(n)
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
    (oo && Qn(oo, n)) ||
      ((oo = n),
      0 < (n = wo(no, 'onSelect')).length &&
        ((t = new Zr('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = ro))));
}
wr(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' ',
  ),
  0,
),
  wr(
    'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
      ' ',
    ),
    1,
  ),
  wr(xr, 2);
for (
  var lo =
      'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' ',
      ),
    uo = 0;
  uo < lo.length;
  uo++
)
  br.set(lo[uo], 0);
G('onMouseEnter', ['mouseout', 'mouseover']),
  G('onMouseLeave', ['mouseout', 'mouseover']),
  G('onPointerEnter', ['pointerout', 'pointerover']),
  G('onPointerLeave', ['pointerout', 'pointerover']),
  Q(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' ',
    ),
  ),
  Q(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' ',
    ),
  ),
  Q('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
  Q(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' '),
  ),
  Q(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
  ),
  Q(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
  );
var so =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  co = new Set('cancel close invalid load scroll toggle'.split(' ').concat(so));
function fo(e, t, r) {
  var n = e.type || 'unknown-event';
  (e.currentTarget = r),
    (function (e, t, r, n, o, a, i, l, u) {
      if ((Mt.apply(this, arguments), Ot)) {
        if (!Ot) throw Error(q(198));
        var s = Rt;
        (Ot = !1), (Rt = null), zt || ((zt = !0), (jt = s));
      }
    })(n, t, void 0, e),
    (e.currentTarget = null);
}
function po(e, t) {
  t = 0 != (4 & t);
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var i = n.length - 1; 0 <= i; i--) {
          var l = n[i],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== a && o.isPropagationStopped())) break e;
          fo(o, l, s), (a = u);
        }
      else
        for (i = 0; i < n.length; i++) {
          if (
            ((u = (l = n[i]).instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== a && o.isPropagationStopped())
          )
            break e;
          fo(o, l, s), (a = u);
        }
    }
  }
  if (zt) throw ((e = jt), (zt = !1), (jt = null), e);
}
function ho(e, t) {
  var r = Uo(t),
    n = e + '__bubble';
  r.has(n) || (yo(t, e, 2, !1), r.add(n));
}
var mo = '_reactListening' + Math.random().toString(36).slice(2);
function vo(e) {
  e[mo] ||
    ((e[mo] = !0),
    Y.forEach(function (t) {
      co.has(t) || go(t, !1, e, null), go(t, !0, e, null);
    }));
}
function go(e, t, r, n) {
  var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
    a = r;
  if (
    ('selectionchange' === e && 9 !== r.nodeType && (a = r.ownerDocument),
    null !== n && !t && co.has(e))
  ) {
    if ('scroll' !== e) return;
    (o |= 2), (a = n);
  }
  var i = Uo(a),
    l = e + '__' + (t ? 'capture' : 'bubble');
  i.has(l) || (t && (o |= 4), yo(a, e, o, t), i.add(l));
}
function yo(e, t, r, n) {
  var o = br.get(t);
  switch (void 0 === o ? 2 : o) {
    case 0:
      o = Fr;
      break;
    case 1:
      o = Br;
      break;
    default:
      o = Ir;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !Pt ||
      ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
      (o = !0),
    n
      ? void 0 !== o
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : void 0 !== o
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1);
}
function bo(e, t, r, n, o) {
  var a = n;
  if (0 == (1 & t) && 0 == (2 & t) && null !== n)
    e: for (;;) {
      if (null === n) return;
      var i = n.tag;
      if (3 === i || 4 === i) {
        var l = n.stateNode.containerInfo;
        if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
        if (4 === i)
          for (i = n.return; null !== i; ) {
            var u = i.tag;
            if (
              (3 === u || 4 === u) &&
              ((u = i.stateNode.containerInfo) === o ||
                (8 === u.nodeType && u.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; null !== l; ) {
          if (null === (i = No(l))) return;
          if (5 === (u = i.tag) || 6 === u) {
            n = a = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  !(function (e, t, r) {
    if (Et) return e(t, r);
    Et = !0;
    try {
      kt(e, t, r);
    } finally {
      (Et = !1), _t();
    }
  })(function () {
    var n = a,
      o = dt(r),
      i = [];
    e: {
      var l = yr.get(e);
      if (void 0 !== l) {
        var u = Zr,
          s = e;
        switch (e) {
          case 'keypress':
            if (0 === Ur(r)) break e;
          case 'keydown':
          case 'keyup':
            u = hn;
            break;
          case 'focusin':
            (s = 'focus'), (u = on);
            break;
          case 'focusout':
            (s = 'blur'), (u = on);
            break;
          case 'beforeblur':
          case 'afterblur':
            u = on;
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
            u = rn;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            u = nn;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            u = vn;
            break;
          case hr:
          case mr:
          case vr:
            u = an;
            break;
          case gr:
            u = gn;
            break;
          case 'scroll':
            u = en;
            break;
          case 'wheel':
            u = yn;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            u = ln;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            u = mn;
        }
        var c = 0 != (4 & t),
          f = !c && 'scroll' === e,
          d = c ? (null !== l ? l + 'Capture' : null) : l;
        c = [];
        for (var p, h = n; null !== h; ) {
          var m = (p = h).stateNode;
          if (
            (5 === p.tag &&
              null !== m &&
              ((p = m),
              null !== d && null != (m = Ct(h, d)) && c.push(xo(h, m, p))),
            f)
          )
            break;
          h = h.return;
        }
        0 < c.length &&
          ((l = new u(l, s, null, r, o)), i.push({ event: l, listeners: c }));
      }
    }
    if (0 == (7 & t)) {
      if (
        ((u = 'mouseout' === e || 'pointerout' === e),
        (!(l = 'mouseover' === e || 'pointerover' === e) ||
          0 != (16 & t) ||
          !(s = r.relatedTarget || r.fromElement) ||
          (!No(s) && !s[Io])) &&
          (u || l) &&
          ((l =
            o.window === o
              ? o
              : (l = o.ownerDocument)
              ? l.defaultView || l.parentWindow
              : window),
          u
            ? ((u = n),
              null !==
                (s = (s = r.relatedTarget || r.toElement) ? No(s) : null) &&
                (s !== (f = Ft(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                (s = null))
            : ((u = null), (s = n)),
          u !== s))
      ) {
        if (
          ((c = rn),
          (m = 'onMouseLeave'),
          (d = 'onMouseEnter'),
          (h = 'mouse'),
          ('pointerout' !== e && 'pointerover' !== e) ||
            ((c = mn),
            (m = 'onPointerLeave'),
            (d = 'onPointerEnter'),
            (h = 'pointer')),
          (f = null == u ? l : Wo(u)),
          (p = null == s ? l : Wo(s)),
          ((l = new c(m, h + 'leave', u, r, o)).target = f),
          (l.relatedTarget = p),
          (m = null),
          No(o) === n &&
            (((c = new c(d, h + 'enter', s, r, o)).target = p),
            (c.relatedTarget = f),
            (m = c)),
          (f = m),
          u && s)
        )
          e: {
            for (d = s, h = 0, p = c = u; p; p = ko(p)) h++;
            for (p = 0, m = d; m; m = ko(m)) p++;
            for (; 0 < h - p; ) (c = ko(c)), h--;
            for (; 0 < p - h; ) (d = ko(d)), p--;
            for (; h--; ) {
              if (c === d || (null !== d && c === d.alternate)) break e;
              (c = ko(c)), (d = ko(d));
            }
            c = null;
          }
        else c = null;
        null !== u && So(i, l, u, c, !1),
          null !== s && null !== f && So(i, f, s, c, !0);
      }
      if (
        'select' ===
          (u = (l = n ? Wo(n) : window).nodeName && l.nodeName.toLowerCase()) ||
        ('input' === u && 'file' === l.type)
      )
        var v = Fn;
      else if (On(l))
        if (Bn) v = qn;
        else {
          v = Un;
          var g = Hn;
        }
      else
        (u = l.nodeName) &&
          'input' === u.toLowerCase() &&
          ('checkbox' === l.type || 'radio' === l.type) &&
          (v = $n);
      switch (
        (v && (v = v(e, n))
          ? Rn(i, v, r, o)
          : (g && g(e, l, n),
            'focusout' === e &&
              (g = l._wrapperState) &&
              g.controlled &&
              'number' === l.type &&
              Ue(l, 'number', l.value)),
        (g = n ? Wo(n) : window),
        e)
      ) {
        case 'focusin':
          (On(g) || 'true' === g.contentEditable) &&
            ((ro = g), (no = n), (oo = null));
          break;
        case 'focusout':
          oo = no = ro = null;
          break;
        case 'mousedown':
          ao = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ao = !1), io(i, r, o);
          break;
        case 'selectionchange':
          if (to) break;
        case 'keydown':
        case 'keyup':
          io(i, r, o);
      }
      var y;
      if (xn)
        e: {
          switch (e) {
            case 'compositionstart':
              var b = 'onCompositionStart';
              break e;
            case 'compositionend':
              b = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              b = 'onCompositionUpdate';
              break e;
          }
          b = void 0;
        }
      else
        An
          ? Cn(e, r) && (b = 'onCompositionEnd')
          : 'keydown' === e && 229 === r.keyCode && (b = 'onCompositionStart');
      b &&
        (Sn &&
          'ko' !== r.locale &&
          (An || 'onCompositionStart' !== b
            ? 'onCompositionEnd' === b && An && (y = Hr())
            : ((Vr = 'value' in (Nr = o) ? Nr.value : Nr.textContent),
              (An = !0))),
        0 < (g = wo(n, b)).length &&
          ((b = new un(b, e, null, r, o)),
          i.push({ event: b, listeners: g }),
          y ? (b.data = y) : null !== (y = Pn(r)) && (b.data = y))),
        (y = kn
          ? (function (e, t) {
              switch (e) {
                case 'compositionend':
                  return Pn(t);
                case 'keypress':
                  return 32 !== t.which ? null : ((_n = !0), En);
                case 'textInput':
                  return (e = t.data) === En && _n ? null : e;
                default:
                  return null;
              }
            })(e, r)
          : (function (e, t) {
              if (An)
                return 'compositionend' === e || (!xn && Cn(e, t))
                  ? ((e = Hr()), (Wr = Vr = Nr = null), (An = !1), e)
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
          0 < (n = wo(n, 'onBeforeInput')).length &&
          ((o = new un('onBeforeInput', 'beforeinput', null, r, o)),
          i.push({ event: o, listeners: n }),
          (o.data = y));
    }
    po(i, t);
  });
}
function xo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function wo(e, t) {
  for (var r = t + 'Capture', n = []; null !== e; ) {
    var o = e,
      a = o.stateNode;
    5 === o.tag &&
      null !== a &&
      ((o = a),
      null != (a = Ct(e, r)) && n.unshift(xo(e, a, o)),
      null != (a = Ct(e, t)) && n.push(xo(e, a, o))),
      (e = e.return);
  }
  return n;
}
function ko(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag);
  return e || null;
}
function So(e, t, r, n, o) {
  for (var a = t._reactName, i = []; null !== r && r !== n; ) {
    var l = r,
      u = l.alternate,
      s = l.stateNode;
    if (null !== u && u === n) break;
    5 === l.tag &&
      null !== s &&
      ((l = s),
      o
        ? null != (u = Ct(r, a)) && i.unshift(xo(r, u, l))
        : o || (null != (u = Ct(r, a)) && i.push(xo(r, u, l)))),
      (r = r.return);
  }
  0 !== i.length && e.push({ event: t, listeners: i });
}
function Eo() {}
var _o = null,
  Co = null;
function Po(e, t) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!t.autoFocus;
  }
  return !1;
}
function Ao(e, t) {
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
var To = 'function' == typeof setTimeout ? setTimeout : void 0,
  Oo = 'function' == typeof clearTimeout ? clearTimeout : void 0;
function Ro(e) {
  1 === e.nodeType
    ? (e.textContent = '')
    : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '');
}
function zo(e) {
  for (; null != e; e = e.nextSibling) {
    var t = e.nodeType;
    if (1 === t || 3 === t) break;
  }
  return e;
}
function jo(e) {
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
var Lo = 0;
var Mo = Math.random().toString(36).slice(2),
  Fo = '__reactFiber$' + Mo,
  Bo = '__reactProps$' + Mo,
  Io = '__reactContainer$' + Mo,
  Do = '__reactEvents$' + Mo;
function No(e) {
  var t = e[Fo];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Io] || r[Fo])) {
      if (
        ((r = t.alternate),
        null !== t.child || (null !== r && null !== r.child))
      )
        for (e = jo(e); null !== e; ) {
          if ((r = e[Fo])) return r;
          e = jo(e);
        }
      return t;
    }
    r = (e = r).parentNode;
  }
  return null;
}
function Vo(e) {
  return !(e = e[Fo] || e[Io]) ||
    (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e;
}
function Wo(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(q(33));
}
function Ho(e) {
  return e[Bo] || null;
}
function Uo(e) {
  var t = e[Do];
  return void 0 === t && (t = e[Do] = new Set()), t;
}
var $o = [],
  qo = -1;
function Yo(e) {
  return { current: e };
}
function Xo(e) {
  0 > qo || ((e.current = $o[qo]), ($o[qo] = null), qo--);
}
function Qo(e, t) {
  qo++, ($o[qo] = e.current), (e.current = t);
}
var Go = {},
  Ko = Yo(Go),
  Zo = Yo(!1),
  Jo = Go;
function ea(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Go;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o,
    a = {};
  for (o in r) a[o] = t[o];
  return (
    n &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function ta(e) {
  return null != (e = e.childContextTypes);
}
function ra() {
  Xo(Zo), Xo(Ko);
}
function na(e, t, r) {
  if (Ko.current !== Go) throw Error(q(168));
  Qo(Ko, t), Qo(Zo, r);
}
function oa(e, t, r) {
  var n = e.stateNode;
  if (((e = t.childContextTypes), 'function' != typeof n.getChildContext))
    return r;
  for (var o in (n = n.getChildContext()))
    if (!(o in e)) throw Error(q(108, je(t) || 'Unknown', o));
  return U({}, r, n);
}
function aa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Go),
    (Jo = Ko.current),
    Qo(Ko, e),
    Qo(Zo, Zo.current),
    !0
  );
}
function ia(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(q(169));
  r
    ? ((e = oa(e, t, Jo)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Xo(Zo),
      Xo(Ko),
      Qo(Ko, e))
    : Xo(Zo),
    Qo(Zo, r);
}
var la = null,
  ua = null,
  sa = $.unstable_runWithPriority,
  ca = $.unstable_scheduleCallback,
  fa = $.unstable_cancelCallback,
  da = $.unstable_shouldYield,
  pa = $.unstable_requestPaint,
  ha = $.unstable_now,
  ma = $.unstable_getCurrentPriorityLevel,
  va = $.unstable_ImmediatePriority,
  ga = $.unstable_UserBlockingPriority,
  ya = $.unstable_NormalPriority,
  ba = $.unstable_LowPriority,
  xa = $.unstable_IdlePriority,
  wa = {},
  ka = void 0 !== pa ? pa : function () {},
  Sa = null,
  Ea = null,
  _a = !1,
  Ca = ha(),
  Pa =
    1e4 > Ca
      ? ha
      : function () {
          return ha() - Ca;
        };
function Aa() {
  switch (ma()) {
    case va:
      return 99;
    case ga:
      return 98;
    case ya:
      return 97;
    case ba:
      return 96;
    case xa:
      return 95;
    default:
      throw Error(q(332));
  }
}
function Ta(e) {
  switch (e) {
    case 99:
      return va;
    case 98:
      return ga;
    case 97:
      return ya;
    case 96:
      return ba;
    case 95:
      return xa;
    default:
      throw Error(q(332));
  }
}
function Oa(e, t) {
  return (e = Ta(e)), sa(e, t);
}
function Ra(e, t, r) {
  return (e = Ta(e)), ca(e, t, r);
}
function za() {
  if (null !== Ea) {
    var e = Ea;
    (Ea = null), fa(e);
  }
  ja();
}
function ja() {
  if (!_a && null !== Sa) {
    _a = !0;
    var e = 0;
    try {
      var t = Sa;
      Oa(99, function () {
        for (; e < t.length; e++) {
          var r = t[e];
          do {
            r = r(!0);
          } while (null !== r);
        }
      }),
        (Sa = null);
    } catch (r) {
      throw (null !== Sa && (Sa = Sa.slice(e + 1)), ca(va, za), r);
    } finally {
      _a = !1;
    }
  }
}
var La = le.ReactCurrentBatchConfig;
function Ma(e, t) {
  if (e && e.defaultProps) {
    for (var r in ((t = U({}, t)), (e = e.defaultProps)))
      void 0 === t[r] && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Fa = Yo(null),
  Ba = null,
  Ia = null,
  Da = null;
function Na() {
  Da = Ia = Ba = null;
}
function Va(e) {
  var t = Fa.current;
  Xo(Fa), (e.type._context._currentValue = t);
}
function Wa(e, t) {
  for (; null !== e; ) {
    var r = e.alternate;
    if ((e.childLanes & t) === t) {
      if (null === r || (r.childLanes & t) === t) break;
      r.childLanes |= t;
    } else (e.childLanes |= t), null !== r && (r.childLanes |= t);
    e = e.return;
  }
}
function Ha(e, t) {
  (Ba = e),
    (Da = Ia = null),
    null !== (e = e.dependencies) &&
      null !== e.firstContext &&
      (0 != (e.lanes & t) && (xl = !0), (e.firstContext = null));
}
function Ua(e, t) {
  if (Da !== e && !1 !== t && 0 !== t)
    if (
      (('number' == typeof t && 1073741823 !== t) ||
        ((Da = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      null === Ia)
    ) {
      if (null === Ba) throw Error(q(308));
      (Ia = t),
        (Ba.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else Ia = Ia.next = t;
  return e._currentValue;
}
var $a = !1;
function qa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function Ya(e, t) {
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
function Xa(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qa(e, t) {
  if (null !== (e = e.updateQueue)) {
    var r = (e = e.shared).pending;
    null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
}
function Ga(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (null !== n && r === (n = n.updateQueue)) {
    var o = null,
      a = null;
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
        null === a ? (o = a = i) : (a = a.next = i), (r = r.next);
      } while (null !== r);
      null === a ? (o = a = t) : (a = a.next = t);
    } else o = a = t;
    return (
      (r = {
        baseState: n.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: a,
        shared: n.shared,
        effects: n.effects,
      }),
      void (e.updateQueue = r)
    );
  }
  null === (e = r.lastBaseUpdate) ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Ka(e, t, r, n) {
  var o = e.updateQueue;
  $a = !1;
  var a = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (null !== l) {
    o.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), null === i ? (a = s) : (i.next = s), (i = u);
    var c = e.alternate;
    if (null !== c) {
      var f = (c = c.updateQueue).lastBaseUpdate;
      f !== i &&
        (null === f ? (c.firstBaseUpdate = s) : (f.next = s),
        (c.lastBaseUpdate = u));
    }
  }
  if (null !== a) {
    for (f = o.baseState, i = 0, c = s = u = null; ; ) {
      l = a.lane;
      var d = a.eventTime;
      if ((n & l) === l) {
        null !== c &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = e,
            h = a;
          switch (((l = t), (d = r), h.tag)) {
            case 1:
              if ('function' == typeof (p = h.payload)) {
                f = p.call(d, f, l);
                break e;
              }
              f = p;
              break e;
            case 3:
              p.flags = (-4097 & p.flags) | 64;
            case 0:
              if (
                null ==
                (l = 'function' == typeof (p = h.payload) ? p.call(d, f, l) : p)
              )
                break e;
              f = U({}, f, l);
              break e;
            case 2:
              $a = !0;
          }
        }
        null !== a.callback &&
          ((e.flags |= 32),
          null === (l = o.effects) ? (o.effects = [a]) : l.push(a));
      } else
        (d = {
          eventTime: d,
          lane: l,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          null === c ? ((s = c = d), (u = f)) : (c = c.next = d),
          (i |= l);
      if (null === (a = a.next)) {
        if (null === (l = o.shared.pending)) break;
        (a = l.next),
          (l.next = null),
          (o.lastBaseUpdate = l),
          (o.shared.pending = null);
      }
    }
    null === c && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = c),
      (Eu |= i),
      (e.lanes = i),
      (e.memoizedState = f);
  }
}
function Za(e, t, r) {
  if (((e = t.effects), (t.effects = null), null !== e))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (null !== o) {
        if (((n.callback = null), (n = r), 'function' != typeof o))
          throw Error(q(191, o));
        o.call(n);
      }
    }
}
var Ja = new H.Component().refs;
function ei(e, t, r, n) {
  (r = null == (r = r(n, (t = e.memoizedState))) ? t : U({}, t, r)),
    (e.memoizedState = r),
    0 === e.lanes && (e.updateQueue.baseState = r);
}
var ti = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Ft(e) === e;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Qu(),
      o = Gu(e),
      a = Xa(n, o);
    (a.payload = t), null != r && (a.callback = r), Qa(e, a), Ku(e, o, n);
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Qu(),
      o = Gu(e),
      a = Xa(n, o);
    (a.tag = 1),
      (a.payload = t),
      null != r && (a.callback = r),
      Qa(e, a),
      Ku(e, o, n);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Qu(),
      n = Gu(e),
      o = Xa(r, n);
    (o.tag = 2), null != t && (o.callback = t), Qa(e, o), Ku(e, n, r);
  },
};
function ri(e, t, r, n, o, a, i) {
  return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(n, a, i)
    : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !Qn(r, n) ||
        !Qn(o, a);
}
function ni(e, t, r) {
  var n = !1,
    o = Go,
    a = t.contextType;
  return (
    'object' == typeof a && null !== a
      ? (a = Ua(a))
      : ((o = ta(t) ? Jo : Ko.current),
        (a = (n = null != (n = t.contextTypes)) ? ea(e, o) : Go)),
    (t = new t(r, a)),
    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
    (t.updater = ti),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function oi(e, t, r, n) {
  (e = t.state),
    'function' == typeof t.componentWillReceiveProps &&
      t.componentWillReceiveProps(r, n),
    'function' == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && ti.enqueueReplaceState(t, t.state, null);
}
function ai(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = Ja), qa(e);
  var a = t.contextType;
  'object' == typeof a && null !== a
    ? (o.context = Ua(a))
    : ((a = ta(t) ? Jo : Ko.current), (o.context = ea(e, a))),
    Ka(e, r, o, n),
    (o.state = e.memoizedState),
    'function' == typeof (a = t.getDerivedStateFromProps) &&
      (ei(e, t, a, r), (o.state = e.memoizedState)),
    'function' == typeof t.getDerivedStateFromProps ||
      'function' == typeof o.getSnapshotBeforeUpdate ||
      ('function' != typeof o.UNSAFE_componentWillMount &&
        'function' != typeof o.componentWillMount) ||
      ((t = o.state),
      'function' == typeof o.componentWillMount && o.componentWillMount(),
      'function' == typeof o.UNSAFE_componentWillMount &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ti.enqueueReplaceState(o, o.state, null),
      Ka(e, r, o, n),
      (o.state = e.memoizedState)),
    'function' == typeof o.componentDidMount && (e.flags |= 4);
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
      var o = '' + e;
      return null !== t &&
        null !== t.ref &&
        'function' == typeof t.ref &&
        t.ref._stringRef === o
        ? t.ref
        : (((t = function (e) {
            var t = n.refs;
            t === Ja && (t = n.refs = {}),
              null === e ? delete t[o] : (t[o] = e);
          })._stringRef = o),
          t);
    }
    if ('string' != typeof e) throw Error(q(284));
    if (!r._owner) throw Error(q(290, e));
  }
  return e;
}
function ui(e, t) {
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
function si(e) {
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
  function o(e, t) {
    return ((e = Ts(e, t)).index = 0), (e.sibling = null), e;
  }
  function a(t, r, n) {
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
      ? (((t = js(r, e.mode, n)).return = e), t)
      : (((t = o(t, r)).return = e), t);
  }
  function u(e, t, r, n) {
    return null !== t && t.elementType === r.type
      ? (((n = o(t, r.props)).ref = li(e, t, r)), (n.return = e), n)
      : (((n = Os(r.type, r.key, r.props, null, e.mode, n)).ref = li(e, t, r)),
        (n.return = e),
        n);
  }
  function s(e, t, r, n) {
    return null === t ||
      4 !== t.tag ||
      t.stateNode.containerInfo !== r.containerInfo ||
      t.stateNode.implementation !== r.implementation
      ? (((t = Ls(r, e.mode, n)).return = e), t)
      : (((t = o(t, r.children || [])).return = e), t);
  }
  function c(e, t, r, n, a) {
    return null === t || 7 !== t.tag
      ? (((t = Rs(r, e.mode, n, a)).return = e), t)
      : (((t = o(t, r)).return = e), t);
  }
  function f(e, t, r) {
    if ('string' == typeof t || 'number' == typeof t)
      return ((t = js('' + t, e.mode, r)).return = e), t;
    if ('object' == typeof t && null !== t) {
      switch (t.$$typeof) {
        case ue:
          return (
            ((r = Os(t.type, t.key, t.props, null, e.mode, r)).ref = li(
              e,
              null,
              t,
            )),
            (r.return = e),
            r
          );
        case se:
          return ((t = Ls(t, e.mode, r)).return = e), t;
      }
      if (ii(t) || Ae(t)) return ((t = Rs(t, e.mode, r, null)).return = e), t;
      ui(e, t);
    }
    return null;
  }
  function d(e, t, r, n) {
    var o = null !== t ? t.key : null;
    if ('string' == typeof r || 'number' == typeof r)
      return null !== o ? null : l(e, t, '' + r, n);
    if ('object' == typeof r && null !== r) {
      switch (r.$$typeof) {
        case ue:
          return r.key === o
            ? r.type === ce
              ? c(e, t, r.props.children, n, o)
              : u(e, t, r, n)
            : null;
        case se:
          return r.key === o ? s(e, t, r, n) : null;
      }
      if (ii(r) || Ae(r)) return null !== o ? null : c(e, t, r, n, null);
      ui(e, r);
    }
    return null;
  }
  function p(e, t, r, n, o) {
    if ('string' == typeof n || 'number' == typeof n)
      return l(t, (e = e.get(r) || null), '' + n, o);
    if ('object' == typeof n && null !== n) {
      switch (n.$$typeof) {
        case ue:
          return (
            (e = e.get(null === n.key ? r : n.key) || null),
            n.type === ce ? c(t, e, n.props.children, o, n.key) : u(t, e, n, o)
          );
        case se:
          return s(t, (e = e.get(null === n.key ? r : n.key) || null), n, o);
      }
      if (ii(n) || Ae(n)) return c(t, (e = e.get(r) || null), n, o, null);
      ui(t, n);
    }
    return null;
  }
  return function (l, u, s, c) {
    var h =
      'object' == typeof s && null !== s && s.type === ce && null === s.key;
    h && (s = s.props.children);
    var m = 'object' == typeof s && null !== s;
    if (m)
      switch (s.$$typeof) {
        case ue:
          e: {
            for (m = s.key, h = u; null !== h; ) {
              if (h.key === m) {
                switch (h.tag) {
                  case 7:
                    if (s.type === ce) {
                      r(l, h.sibling),
                        ((u = o(h, s.props.children)).return = l),
                        (l = u);
                      break e;
                    }
                    break;
                  default:
                    if (h.elementType === s.type) {
                      r(l, h.sibling),
                        ((u = o(h, s.props)).ref = li(l, h, s)),
                        (u.return = l),
                        (l = u);
                      break e;
                    }
                }
                r(l, h);
                break;
              }
              t(l, h), (h = h.sibling);
            }
            s.type === ce
              ? (((u = Rs(s.props.children, l.mode, c, s.key)).return = l),
                (l = u))
              : (((c = Os(s.type, s.key, s.props, null, l.mode, c)).ref = li(
                  l,
                  u,
                  s,
                )),
                (c.return = l),
                (l = c));
          }
          return i(l);
        case se:
          e: {
            for (h = s.key; null !== u; ) {
              if (u.key === h) {
                if (
                  4 === u.tag &&
                  u.stateNode.containerInfo === s.containerInfo &&
                  u.stateNode.implementation === s.implementation
                ) {
                  r(l, u.sibling),
                    ((u = o(u, s.children || [])).return = l),
                    (l = u);
                  break e;
                }
                r(l, u);
                break;
              }
              t(l, u), (u = u.sibling);
            }
            ((u = Ls(s, l.mode, c)).return = l), (l = u);
          }
          return i(l);
      }
    if ('string' == typeof s || 'number' == typeof s)
      return (
        (s = '' + s),
        null !== u && 6 === u.tag
          ? (r(l, u.sibling), ((u = o(u, s)).return = l), (l = u))
          : (r(l, u), ((u = js(s, l.mode, c)).return = l), (l = u)),
        i(l)
      );
    if (ii(s))
      return (function (o, i, l, u) {
        for (
          var s = null, c = null, h = i, m = (i = 0), v = null;
          null !== h && m < l.length;
          m++
        ) {
          h.index > m ? ((v = h), (h = null)) : (v = h.sibling);
          var g = d(o, h, l[m], u);
          if (null === g) {
            null === h && (h = v);
            break;
          }
          e && h && null === g.alternate && t(o, h),
            (i = a(g, i, m)),
            null === c ? (s = g) : (c.sibling = g),
            (c = g),
            (h = v);
        }
        if (m === l.length) return r(o, h), s;
        if (null === h) {
          for (; m < l.length; m++)
            null !== (h = f(o, l[m], u)) &&
              ((i = a(h, i, m)),
              null === c ? (s = h) : (c.sibling = h),
              (c = h));
          return s;
        }
        for (h = n(o, h); m < l.length; m++)
          null !== (v = p(h, o, m, l[m], u)) &&
            (e && null !== v.alternate && h.delete(null === v.key ? m : v.key),
            (i = a(v, i, m)),
            null === c ? (s = v) : (c.sibling = v),
            (c = v));
        return (
          e &&
            h.forEach(function (e) {
              return t(o, e);
            }),
          s
        );
      })(l, u, s, c);
    if (Ae(s))
      return (function (o, i, l, u) {
        var s = Ae(l);
        if ('function' != typeof s) throw Error(q(150));
        if (null == (l = s.call(l))) throw Error(q(151));
        for (
          var c = (s = null), h = i, m = (i = 0), v = null, g = l.next();
          null !== h && !g.done;
          m++, g = l.next()
        ) {
          h.index > m ? ((v = h), (h = null)) : (v = h.sibling);
          var y = d(o, h, g.value, u);
          if (null === y) {
            null === h && (h = v);
            break;
          }
          e && h && null === y.alternate && t(o, h),
            (i = a(y, i, m)),
            null === c ? (s = y) : (c.sibling = y),
            (c = y),
            (h = v);
        }
        if (g.done) return r(o, h), s;
        if (null === h) {
          for (; !g.done; m++, g = l.next())
            null !== (g = f(o, g.value, u)) &&
              ((i = a(g, i, m)),
              null === c ? (s = g) : (c.sibling = g),
              (c = g));
          return s;
        }
        for (h = n(o, h); !g.done; m++, g = l.next())
          null !== (g = p(h, o, m, g.value, u)) &&
            (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
            (i = a(g, i, m)),
            null === c ? (s = g) : (c.sibling = g),
            (c = g));
        return (
          e &&
            h.forEach(function (e) {
              return t(o, e);
            }),
          s
        );
      })(l, u, s, c);
    if ((m && ui(l, s), void 0 === s && !h))
      switch (l.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(q(152, je(l.type) || 'Component'));
      }
    return r(l, u);
  };
}
var ci = si(!0),
  fi = si(!1),
  di = {},
  pi = Yo(di),
  hi = Yo(di),
  mi = Yo(di);
function vi(e) {
  if (e === di) throw Error(q(174));
  return e;
}
function gi(e, t) {
  switch ((Qo(mi, t), Qo(hi, e), Qo(pi, di), (e = t.nodeType))) {
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
  Xo(pi), Qo(pi, t);
}
function yi() {
  Xo(pi), Xo(hi), Xo(mi);
}
function bi(e) {
  vi(mi.current);
  var t = vi(pi.current),
    r = et(t, e.type);
  t !== r && (Qo(hi, e), Qo(pi, r));
}
function xi(e) {
  hi.current === e && (Xo(pi), Xo(hi));
}
var wi = Yo(0);
function ki(e) {
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
  Ei = null,
  _i = !1;
function Ci(e, t) {
  var r = Ps(5, null, null, 0);
  (r.elementType = 'DELETED'),
    (r.type = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (r.flags = 8),
    null !== e.lastEffect
      ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r))
      : (e.firstEffect = e.lastEffect = r);
}
function Pi(e, t) {
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
function Ai(e) {
  if (_i) {
    var t = Ei;
    if (t) {
      var r = t;
      if (!Pi(e, t)) {
        if (!(t = zo(r.nextSibling)) || !Pi(e, t))
          return (e.flags = (-1025 & e.flags) | 2), (_i = !1), void (Si = e);
        Ci(Si, r);
      }
      (Si = e), (Ei = zo(t.firstChild));
    } else (e.flags = (-1025 & e.flags) | 2), (_i = !1), (Si = e);
  }
}
function Ti(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
    e = e.return;
  Si = e;
}
function Oi(e) {
  if (e !== Si) return !1;
  if (!_i) return Ti(e), (_i = !0), !1;
  var t = e.type;
  if (5 !== e.tag || ('head' !== t && 'body' !== t && !Ao(t, e.memoizedProps)))
    for (t = Ei; t; ) Ci(e, t), (t = zo(t.nextSibling));
  if ((Ti(e), 13 === e.tag)) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error(q(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (8 === e.nodeType) {
          var r = e.data;
          if ('/$' === r) {
            if (0 === t) {
              Ei = zo(e.nextSibling);
              break e;
            }
            t--;
          } else ('$' !== r && '$!' !== r && '$?' !== r) || t++;
        }
        e = e.nextSibling;
      }
      Ei = null;
    }
  } else Ei = Si ? zo(e.stateNode.nextSibling) : null;
  return !0;
}
function Ri() {
  (Ei = Si = null), (_i = !1);
}
var zi = [];
function ji() {
  for (var e = 0; e < zi.length; e++)
    zi[e]._workInProgressVersionPrimary = null;
  zi.length = 0;
}
var Li = le.ReactCurrentDispatcher,
  Mi = le.ReactCurrentBatchConfig,
  Fi = 0,
  Bi = null,
  Ii = null,
  Di = null,
  Ni = !1,
  Vi = !1;
function Wi() {
  throw Error(q(321));
}
function Hi(e, t) {
  if (null === t) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Yn(e[r], t[r])) return !1;
  return !0;
}
function Ui(e, t, r, n, o, a) {
  if (
    ((Fi = a),
    (Bi = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Li.current = null === e || null === e.memoizedState ? vl : gl),
    (e = r(n, o)),
    Vi)
  ) {
    a = 0;
    do {
      if (((Vi = !1), !(25 > a))) throw Error(q(301));
      (a += 1),
        (Di = Ii = null),
        (t.updateQueue = null),
        (Li.current = yl),
        (e = r(n, o));
    } while (Vi);
  }
  if (
    ((Li.current = ml),
    (t = null !== Ii && null !== Ii.next),
    (Fi = 0),
    (Di = Ii = Bi = null),
    (Ni = !1),
    t)
  )
    throw Error(q(300));
  return e;
}
function $i() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return null === Di ? (Bi.memoizedState = Di = e) : (Di = Di.next = e), Di;
}
function qi() {
  if (null === Ii) {
    var e = Bi.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = Ii.next;
  var t = null === Di ? Bi.memoizedState : Di.next;
  if (null !== t) (Di = t), (Ii = e);
  else {
    if (null === e) throw Error(q(310));
    (e = {
      memoizedState: (Ii = e).memoizedState,
      baseState: Ii.baseState,
      baseQueue: Ii.baseQueue,
      queue: Ii.queue,
      next: null,
    }),
      null === Di ? (Bi.memoizedState = Di = e) : (Di = Di.next = e);
  }
  return Di;
}
function Yi(e, t) {
  return 'function' == typeof t ? t(e) : t;
}
function Xi(e) {
  var t = qi(),
    r = t.queue;
  if (null === r) throw Error(q(311));
  r.lastRenderedReducer = e;
  var n = Ii,
    o = n.baseQueue,
    a = r.pending;
  if (null !== a) {
    if (null !== o) {
      var i = o.next;
      (o.next = a.next), (a.next = i);
    }
    (n.baseQueue = o = a), (r.pending = null);
  }
  if (null !== o) {
    (o = o.next), (n = n.baseState);
    var l = (i = a = null),
      u = o;
    do {
      var s = u.lane;
      if ((Fi & s) === s)
        null !== l &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              eagerReducer: u.eagerReducer,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.eagerReducer === e ? u.eagerState : e(n, u.action));
      else {
        var c = {
          lane: s,
          action: u.action,
          eagerReducer: u.eagerReducer,
          eagerState: u.eagerState,
          next: null,
        };
        null === l ? ((i = l = c), (a = n)) : (l = l.next = c),
          (Bi.lanes |= s),
          (Eu |= s);
      }
      u = u.next;
    } while (null !== u && u !== o);
    null === l ? (a = n) : (l.next = i),
      Yn(n, t.memoizedState) || (xl = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  return [t.memoizedState, r.dispatch];
}
function Qi(e) {
  var t = qi(),
    r = t.queue;
  if (null === r) throw Error(q(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    a = t.memoizedState;
  if (null !== o) {
    r.pending = null;
    var i = (o = o.next);
    do {
      (a = e(a, i.action)), (i = i.next);
    } while (i !== o);
    Yn(a, t.memoizedState) || (xl = !0),
      (t.memoizedState = a),
      null === t.baseQueue && (t.baseState = a),
      (r.lastRenderedState = a);
  }
  return [a, n];
}
function Gi(e, t, r) {
  var n = t._getVersion;
  n = n(t._source);
  var o = t._workInProgressVersionPrimary;
  if (
    (null !== o
      ? (e = o === n)
      : ((e = e.mutableReadLanes),
        (e = (Fi & e) === e) &&
          ((t._workInProgressVersionPrimary = n), zi.push(t))),
    e)
  )
    return r(t._source);
  throw (zi.push(t), Error(q(350)));
}
function Ki(e, t, r, n) {
  var o = vu;
  if (null === o) throw Error(q(349));
  var a = t._getVersion,
    i = a(t._source),
    l = Li.current,
    u = l.useState(function () {
      return Gi(o, t, r);
    }),
    s = u[1],
    c = u[0];
  u = Di;
  var f = e.memoizedState,
    d = f.refs,
    p = d.getSnapshot,
    h = f.source;
  f = f.subscribe;
  var m = Bi;
  return (
    (e.memoizedState = { refs: d, source: t, subscribe: n }),
    l.useEffect(
      function () {
        (d.getSnapshot = r), (d.setSnapshot = s);
        var e = a(t._source);
        if (!Yn(i, e)) {
          (e = r(t._source)),
            Yn(c, e) ||
              (s(e), (e = Gu(m)), (o.mutableReadLanes |= e & o.pendingLanes)),
            (e = o.mutableReadLanes),
            (o.entangledLanes |= e);
          for (var n = o.entanglements, l = e; 0 < l; ) {
            var u = 31 - Or(l),
              f = 1 << u;
            (n[u] |= e), (l &= ~f);
          }
        }
      },
      [r, t, n],
    ),
    l.useEffect(
      function () {
        return n(t._source, function () {
          var e = d.getSnapshot,
            r = d.setSnapshot;
          try {
            r(e(t._source));
            var n = Gu(m);
            o.mutableReadLanes |= n & o.pendingLanes;
          } catch (a) {
            r(function () {
              throw a;
            });
          }
        });
      },
      [t, n],
    ),
    (Yn(p, r) && Yn(h, t) && Yn(f, n)) ||
      (((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Yi,
        lastRenderedState: c,
      }).dispatch = s =
        hl.bind(null, Bi, e)),
      (u.queue = e),
      (u.baseQueue = null),
      (c = Gi(o, t, r)),
      (u.memoizedState = u.baseState = c)),
    c
  );
}
function Zi(e, t, r) {
  return Ki(qi(), e, t, r);
}
function Ji(e) {
  var t = $i();
  return (
    'function' == typeof e && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Yi,
        lastRenderedState: e,
      }).dispatch =
      hl.bind(null, Bi, e)),
    [t.memoizedState, e]
  );
}
function el(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    null === (t = Bi.updateQueue)
      ? ((t = { lastEffect: null }),
        (Bi.updateQueue = t),
        (t.lastEffect = e.next = e))
      : null === (r = t.lastEffect)
      ? (t.lastEffect = e.next = e)
      : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e)),
    e
  );
}
function tl(e) {
  return (e = { current: e }), ($i().memoizedState = e);
}
function rl() {
  return qi().memoizedState;
}
function nl(e, t, r, n) {
  var o = $i();
  (Bi.flags |= e),
    (o.memoizedState = el(1 | t, r, void 0, void 0 === n ? null : n));
}
function ol(e, t, r, n) {
  var o = qi();
  n = void 0 === n ? null : n;
  var a = void 0;
  if (null !== Ii) {
    var i = Ii.memoizedState;
    if (((a = i.destroy), null !== n && Hi(n, i.deps)))
      return void el(t, r, a, n);
  }
  (Bi.flags |= e), (o.memoizedState = el(1 | t, r, a, n));
}
function al(e, t) {
  return nl(516, 4, e, t);
}
function il(e, t) {
  return ol(516, 4, e, t);
}
function ll(e, t) {
  return ol(4, 2, e, t);
}
function ul(e, t) {
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
function sl(e, t, r) {
  return (
    (r = null != r ? r.concat([e]) : null), ol(4, 2, ul.bind(null, t, e), r)
  );
}
function cl() {}
function fl(e, t) {
  var r = qi();
  t = void 0 === t ? null : t;
  var n = r.memoizedState;
  return null !== n && null !== t && Hi(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function dl(e, t) {
  var r = qi();
  t = void 0 === t ? null : t;
  var n = r.memoizedState;
  return null !== n && null !== t && Hi(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function pl(e, t) {
  var r = Aa();
  Oa(98 > r ? 98 : r, function () {
    e(!0);
  }),
    Oa(97 < r ? 97 : r, function () {
      var r = Mi.transition;
      Mi.transition = 1;
      try {
        e(!1), t();
      } finally {
        Mi.transition = r;
      }
    });
}
function hl(e, t, r) {
  var n = Qu(),
    o = Gu(e),
    a = {
      lane: o,
      action: r,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    i = t.pending;
  if (
    (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
    (t.pending = a),
    (i = e.alternate),
    e === Bi || (null !== i && i === Bi))
  )
    Vi = Ni = !0;
  else {
    if (
      0 === e.lanes &&
      (null === i || 0 === i.lanes) &&
      null !== (i = t.lastRenderedReducer)
    )
      try {
        var l = t.lastRenderedState,
          u = i(l, r);
        if (((a.eagerReducer = i), (a.eagerState = u), Yn(u, l))) return;
      } catch (s) {}
    Ku(e, o, n);
  }
}
var ml = {
    readContext: Ua,
    useCallback: Wi,
    useContext: Wi,
    useEffect: Wi,
    useImperativeHandle: Wi,
    useLayoutEffect: Wi,
    useMemo: Wi,
    useReducer: Wi,
    useRef: Wi,
    useState: Wi,
    useDebugValue: Wi,
    useDeferredValue: Wi,
    useTransition: Wi,
    useMutableSource: Wi,
    useOpaqueIdentifier: Wi,
    unstable_isNewReconciler: !1,
  },
  vl = {
    readContext: Ua,
    useCallback: function (e, t) {
      return ($i().memoizedState = [e, void 0 === t ? null : t]), e;
    },
    useContext: Ua,
    useEffect: al,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = null != r ? r.concat([e]) : null), nl(4, 2, ul.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = $i();
      return (
        (t = void 0 === t ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = $i();
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
          hl.bind(null, Bi, e)),
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
        al(
          function () {
            var t = Mi.transition;
            Mi.transition = 1;
            try {
              n(e);
            } finally {
              Mi.transition = t;
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
      var n = $i();
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
      if (_i) {
        var e = !1,
          t = (function (e) {
            return { $$typeof: we, toString: e, valueOf: e };
          })(function () {
            throw (
              (e || ((e = !0), r('r:' + (Lo++).toString(36))), Error(q(355)))
            );
          }),
          r = Ji(t)[1];
        return (
          0 == (2 & Bi.mode) &&
            ((Bi.flags |= 516),
            el(
              5,
              function () {
                r('r:' + (Lo++).toString(36));
              },
              void 0,
              null,
            )),
          t
        );
      }
      return Ji((t = 'r:' + (Lo++).toString(36))), t;
    },
    unstable_isNewReconciler: !1,
  },
  gl = {
    readContext: Ua,
    useCallback: fl,
    useContext: Ua,
    useEffect: il,
    useImperativeHandle: sl,
    useLayoutEffect: ll,
    useMemo: dl,
    useReducer: Xi,
    useRef: rl,
    useState: function () {
      return Xi(Yi);
    },
    useDebugValue: cl,
    useDeferredValue: function (e) {
      var t = Xi(Yi),
        r = t[0],
        n = t[1];
      return (
        il(
          function () {
            var t = Mi.transition;
            Mi.transition = 1;
            try {
              n(e);
            } finally {
              Mi.transition = t;
            }
          },
          [e],
        ),
        r
      );
    },
    useTransition: function () {
      var e = Xi(Yi)[0];
      return [rl().current, e];
    },
    useMutableSource: Zi,
    useOpaqueIdentifier: function () {
      return Xi(Yi)[0];
    },
    unstable_isNewReconciler: !1,
  },
  yl = {
    readContext: Ua,
    useCallback: fl,
    useContext: Ua,
    useEffect: il,
    useImperativeHandle: sl,
    useLayoutEffect: ll,
    useMemo: dl,
    useReducer: Qi,
    useRef: rl,
    useState: function () {
      return Qi(Yi);
    },
    useDebugValue: cl,
    useDeferredValue: function (e) {
      var t = Qi(Yi),
        r = t[0],
        n = t[1];
      return (
        il(
          function () {
            var t = Mi.transition;
            Mi.transition = 1;
            try {
              n(e);
            } finally {
              Mi.transition = t;
            }
          },
          [e],
        ),
        r
      );
    },
    useTransition: function () {
      var e = Qi(Yi)[0];
      return [rl().current, e];
    },
    useMutableSource: Zi,
    useOpaqueIdentifier: function () {
      return Qi(Yi)[0];
    },
    unstable_isNewReconciler: !1,
  },
  bl = le.ReactCurrentOwner,
  xl = !1;
function wl(e, t, r, n) {
  t.child = null === e ? fi(t, null, r, n) : ci(t, e.child, r, n);
}
function kl(e, t, r, n, o) {
  r = r.render;
  var a = t.ref;
  return (
    Ha(t, o),
    (n = Ui(e, t, r, n, a, o)),
    null === e || xl
      ? ((t.flags |= 1), wl(e, t, n, o), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        Wl(e, t, o))
  );
}
function Sl(e, t, r, n, o, a) {
  if (null === e) {
    var i = r.type;
    return 'function' != typeof i ||
      As(i) ||
      void 0 !== i.defaultProps ||
      null !== r.compare ||
      void 0 !== r.defaultProps
      ? (((e = Os(r.type, null, n, t, t.mode, a)).ref = t.ref),
        (e.return = t),
        (t.child = e))
      : ((t.tag = 15), (t.type = i), El(e, t, i, n, o, a));
  }
  return (
    (i = e.child),
    0 == (o & a) &&
    ((o = i.memoizedProps),
    (r = null !== (r = r.compare) ? r : Qn)(o, n) && e.ref === t.ref)
      ? Wl(e, t, a)
      : ((t.flags |= 1),
        ((e = Ts(i, n)).ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function El(e, t, r, n, o, a) {
  if (null !== e && Qn(e.memoizedProps, n) && e.ref === t.ref) {
    if (((xl = !1), 0 == (a & o))) return (t.lanes = e.lanes), Wl(e, t, a);
    0 != (16384 & e.flags) && (xl = !0);
  }
  return Pl(e, t, r, n, a);
}
function _l(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    a = null !== e ? e.memoizedState : null;
  if ('hidden' === n.mode || 'unstable-defer-without-hiding' === n.mode)
    if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), as(t, r);
    else {
      if (0 == (1073741824 & r))
        return (
          (e = null !== a ? a.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e }),
          as(t, e),
          null
        );
      (t.memoizedState = { baseLanes: 0 }), as(t, null !== a ? a.baseLanes : r);
    }
  else
    null !== a ? ((n = a.baseLanes | r), (t.memoizedState = null)) : (n = r),
      as(t, n);
  return wl(e, t, o, r), t.child;
}
function Cl(e, t) {
  var r = t.ref;
  ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
    (t.flags |= 128);
}
function Pl(e, t, r, n, o) {
  var a = ta(r) ? Jo : Ko.current;
  return (
    (a = ea(t, a)),
    Ha(t, o),
    (r = Ui(e, t, r, n, a, o)),
    null === e || xl
      ? ((t.flags |= 1), wl(e, t, r, o), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        Wl(e, t, o))
  );
}
function Al(e, t, r, n, o) {
  if (ta(r)) {
    var a = !0;
    aa(t);
  } else a = !1;
  if ((Ha(t, o), null === t.stateNode))
    null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      ni(t, r, n),
      ai(t, r, n, o),
      (n = !0);
  else if (null === e) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var u = i.context,
      s = r.contextType;
    'object' == typeof s && null !== s
      ? (s = Ua(s))
      : (s = ea(t, (s = ta(r) ? Jo : Ko.current)));
    var c = r.getDerivedStateFromProps,
      f =
        'function' == typeof c ||
        'function' == typeof i.getSnapshotBeforeUpdate;
    f ||
      ('function' != typeof i.UNSAFE_componentWillReceiveProps &&
        'function' != typeof i.componentWillReceiveProps) ||
      ((l !== n || u !== s) && oi(t, i, n, s)),
      ($a = !1);
    var d = t.memoizedState;
    (i.state = d),
      Ka(t, n, i, o),
      (u = t.memoizedState),
      l !== n || d !== u || Zo.current || $a
        ? ('function' == typeof c && (ei(t, r, c, n), (u = t.memoizedState)),
          (l = $a || ri(t, r, l, n, d, u, s))
            ? (f ||
                ('function' != typeof i.UNSAFE_componentWillMount &&
                  'function' != typeof i.componentWillMount) ||
                ('function' == typeof i.componentWillMount &&
                  i.componentWillMount(),
                'function' == typeof i.UNSAFE_componentWillMount &&
                  i.UNSAFE_componentWillMount()),
              'function' == typeof i.componentDidMount && (t.flags |= 4))
            : ('function' == typeof i.componentDidMount && (t.flags |= 4),
              (t.memoizedProps = n),
              (t.memoizedState = u)),
          (i.props = n),
          (i.state = u),
          (i.context = s),
          (n = l))
        : ('function' == typeof i.componentDidMount && (t.flags |= 4),
          (n = !1));
  } else {
    (i = t.stateNode),
      Ya(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : Ma(t.type, l)),
      (i.props = s),
      (f = t.pendingProps),
      (d = i.context),
      'object' == typeof (u = r.contextType) && null !== u
        ? (u = Ua(u))
        : (u = ea(t, (u = ta(r) ? Jo : Ko.current)));
    var p = r.getDerivedStateFromProps;
    (c =
      'function' == typeof p ||
      'function' == typeof i.getSnapshotBeforeUpdate) ||
      ('function' != typeof i.UNSAFE_componentWillReceiveProps &&
        'function' != typeof i.componentWillReceiveProps) ||
      ((l !== f || d !== u) && oi(t, i, n, u)),
      ($a = !1),
      (d = t.memoizedState),
      (i.state = d),
      Ka(t, n, i, o);
    var h = t.memoizedState;
    l !== f || d !== h || Zo.current || $a
      ? ('function' == typeof p && (ei(t, r, p, n), (h = t.memoizedState)),
        (s = $a || ri(t, r, s, n, d, h, u))
          ? (c ||
              ('function' != typeof i.UNSAFE_componentWillUpdate &&
                'function' != typeof i.componentWillUpdate) ||
              ('function' == typeof i.componentWillUpdate &&
                i.componentWillUpdate(n, h, u),
              'function' == typeof i.UNSAFE_componentWillUpdate &&
                i.UNSAFE_componentWillUpdate(n, h, u)),
            'function' == typeof i.componentDidUpdate && (t.flags |= 4),
            'function' == typeof i.getSnapshotBeforeUpdate && (t.flags |= 256))
          : ('function' != typeof i.componentDidUpdate ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            'function' != typeof i.getSnapshotBeforeUpdate ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = n),
            (t.memoizedState = h)),
        (i.props = n),
        (i.state = h),
        (i.context = u),
        (n = s))
      : ('function' != typeof i.componentDidUpdate ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        'function' != typeof i.getSnapshotBeforeUpdate ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 256),
        (n = !1));
  }
  return Tl(e, t, r, n, a, o);
}
function Tl(e, t, r, n, o, a) {
  Cl(e, t);
  var i = 0 != (64 & t.flags);
  if (!n && !i) return o && ia(t, r, !1), Wl(e, t, a);
  (n = t.stateNode), (bl.current = t);
  var l =
    i && 'function' != typeof r.getDerivedStateFromError ? null : n.render();
  return (
    (t.flags |= 1),
    null !== e && i
      ? ((t.child = ci(t, e.child, null, a)), (t.child = ci(t, null, l, a)))
      : wl(e, t, l, a),
    (t.memoizedState = n.state),
    o && ia(t, r, !0),
    t.child
  );
}
function Ol(e) {
  var t = e.stateNode;
  t.pendingContext
    ? na(0, t.pendingContext, t.pendingContext !== t.context)
    : t.context && na(0, t.context, !1),
    gi(e, t.containerInfo);
}
var Rl,
  zl,
  jl,
  Ll = { dehydrated: null, retryLane: 0 };
function Ml(e, t, r) {
  var n,
    o = t.pendingProps,
    a = wi.current,
    i = !1;
  return (
    (n = 0 != (64 & t.flags)) ||
      (n = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
    n
      ? ((i = !0), (t.flags &= -65))
      : (null !== e && null === e.memoizedState) ||
        void 0 === o.fallback ||
        !0 === o.unstable_avoidThisFallback ||
        (a |= 1),
    Qo(wi, 1 & a),
    null === e
      ? (void 0 !== o.fallback && Ai(t),
        (e = o.children),
        (a = o.fallback),
        i
          ? ((e = Fl(t, e, a, r)),
            (t.child.memoizedState = { baseLanes: r }),
            (t.memoizedState = Ll),
            e)
          : 'number' == typeof o.unstable_expectedLoadTime
          ? ((e = Fl(t, e, a, r)),
            (t.child.memoizedState = { baseLanes: r }),
            (t.memoizedState = Ll),
            (t.lanes = 33554432),
            e)
          : (((r = zs(
              { mode: 'visible', children: e },
              t.mode,
              r,
              null,
            )).return = t),
            (t.child = r)))
      : (e.memoizedState,
        i
          ? ((o = Il(e, t, o.children, o.fallback, r)),
            (i = t.child),
            (a = e.child.memoizedState),
            (i.memoizedState =
              null === a ? { baseLanes: r } : { baseLanes: a.baseLanes | r }),
            (i.childLanes = e.childLanes & ~r),
            (t.memoizedState = Ll),
            o)
          : ((r = Bl(e, t, o.children, r)), (t.memoizedState = null), r))
  );
}
function Fl(e, t, r, n) {
  var o = e.mode,
    a = e.child;
  return (
    (t = { mode: 'hidden', children: t }),
    0 == (2 & o) && null !== a
      ? ((a.childLanes = 0), (a.pendingProps = t))
      : (a = zs(t, o, 0, null)),
    (r = Rs(r, o, n, null)),
    (a.return = e),
    (r.return = e),
    (a.sibling = r),
    (e.child = a),
    r
  );
}
function Bl(e, t, r, n) {
  var o = e.child;
  return (
    (e = o.sibling),
    (r = Ts(o, { mode: 'visible', children: r })),
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
function Il(e, t, r, n, o) {
  var a = t.mode,
    i = e.child;
  e = i.sibling;
  var l = { mode: 'hidden', children: r };
  return (
    0 == (2 & a) && t.child !== i
      ? (((r = t.child).childLanes = 0),
        (r.pendingProps = l),
        null !== (i = r.lastEffect)
          ? ((t.firstEffect = r.firstEffect),
            (t.lastEffect = i),
            (i.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (r = Ts(i, l)),
    null !== e ? (n = Ts(e, n)) : ((n = Rs(n, a, o, null)).flags |= 2),
    (n.return = t),
    (r.return = t),
    (r.sibling = n),
    (t.child = r),
    n
  );
}
function Dl(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  null !== r && (r.lanes |= t), Wa(e.return, t);
}
function Nl(e, t, r, n, o, a) {
  var i = e.memoizedState;
  null === i
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
        lastEffect: a,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o),
      (i.lastEffect = a));
}
function Vl(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    a = n.tail;
  if ((wl(e, t, n.children, r), 0 != (2 & (n = wi.current))))
    (n = (1 & n) | 2), (t.flags |= 64);
  else {
    if (null !== e && 0 != (64 & e.flags))
      e: for (e = t.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && Dl(e, r);
        else if (19 === e.tag) Dl(e, r);
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
  if ((Qo(wi, n), 0 == (2 & t.mode))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (r = t.child, o = null; null !== r; )
          null !== (e = r.alternate) && null === ki(e) && (o = r),
            (r = r.sibling);
        null === (r = o)
          ? ((o = t.child), (t.child = null))
          : ((o = r.sibling), (r.sibling = null)),
          Nl(t, !1, o, r, a, t.lastEffect);
        break;
      case 'backwards':
        for (r = null, o = t.child, t.child = null; null !== o; ) {
          if (null !== (e = o.alternate) && null === ki(e)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        Nl(t, !0, r, null, a, t.lastEffect);
        break;
      case 'together':
        Nl(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wl(e, t, r) {
  if (
    (null !== e && (t.dependencies = e.dependencies),
    (Eu |= t.lanes),
    0 != (r & t.childLanes))
  ) {
    if (null !== e && t.child !== e.child) throw Error(q(153));
    if (null !== t.child) {
      for (
        r = Ts((e = t.child), e.pendingProps), t.child = r, r.return = t;
        null !== e.sibling;

      )
        (e = e.sibling), ((r = r.sibling = Ts(e, e.pendingProps)).return = t);
      r.sibling = null;
    }
    return t.child;
  }
  return null;
}
function Hl(e, t) {
  if (!_i)
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
      return ta(t.type) && ra(), null;
    case 3:
      return (
        yi(),
        Xo(Zo),
        Xo(Ko),
        ji(),
        (n = t.stateNode).pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (null !== e && null !== e.child) ||
          (Oi(t) ? (t.flags |= 4) : n.hydrate || (t.flags |= 256)),
        null
      );
    case 5:
      xi(t);
      var o = vi(mi.current);
      if (((r = t.type), null !== e && null != t.stateNode))
        zl(e, t, r, n), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!n) {
          if (null === t.stateNode) throw Error(q(166));
          return null;
        }
        if (((e = vi(pi.current)), Oi(t))) {
          (n = t.stateNode), (r = t.type);
          var a = t.memoizedProps;
          switch (((n[Fo] = t), (n[Bo] = a), r)) {
            case 'dialog':
              ho('cancel', n), ho('close', n);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ho('load', n);
              break;
            case 'video':
            case 'audio':
              for (e = 0; e < so.length; e++) ho(so[e], n);
              break;
            case 'source':
              ho('error', n);
              break;
            case 'img':
            case 'image':
            case 'link':
              ho('error', n), ho('load', n);
              break;
            case 'details':
              ho('toggle', n);
              break;
            case 'input':
              Ne(n, a), ho('invalid', n);
              break;
            case 'select':
              (n._wrapperState = { wasMultiple: !!a.multiple }),
                ho('invalid', n);
              break;
            case 'textarea':
              Xe(n, a), ho('invalid', n);
          }
          for (var i in (ct(r, a), (e = null), a))
            a.hasOwnProperty(i) &&
              ((o = a[i]),
              'children' === i
                ? 'string' == typeof o
                  ? n.textContent !== o && (e = ['children', o])
                  : 'number' == typeof o &&
                    n.textContent !== '' + o &&
                    (e = ['children', '' + o])
                : X.hasOwnProperty(i) &&
                  null != o &&
                  'onScroll' === i &&
                  ho('scroll', n));
          switch (r) {
            case 'input':
              Fe(n), He(n, a, !0);
              break;
            case 'textarea':
              Fe(n), Ge(n);
              break;
            case 'select':
            case 'option':
              break;
            default:
              'function' == typeof a.onClick && (n.onclick = Eo);
          }
          (n = e), (t.updateQueue = n), null !== n && (t.flags |= 4);
        } else {
          switch (
            ((i = 9 === o.nodeType ? o : o.ownerDocument),
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
            (e[Fo] = t),
            (e[Bo] = n),
            Rl(e, t),
            (t.stateNode = e),
            (i = ft(r, n)),
            r)
          ) {
            case 'dialog':
              ho('cancel', e), ho('close', e), (o = n);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ho('load', e), (o = n);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < so.length; o++) ho(so[o], e);
              o = n;
              break;
            case 'source':
              ho('error', e), (o = n);
              break;
            case 'img':
            case 'image':
            case 'link':
              ho('error', e), ho('load', e), (o = n);
              break;
            case 'details':
              ho('toggle', e), (o = n);
              break;
            case 'input':
              Ne(e, n), (o = De(e, n)), ho('invalid', e);
              break;
            case 'option':
              o = $e(e, n);
              break;
            case 'select':
              (e._wrapperState = { wasMultiple: !!n.multiple }),
                (o = U({}, n, { value: void 0 })),
                ho('invalid', e);
              break;
            case 'textarea':
              Xe(e, n), (o = Ye(e, n)), ho('invalid', e);
              break;
            default:
              o = n;
          }
          ct(r, o);
          var l = o;
          for (a in l)
            if (l.hasOwnProperty(a)) {
              var u = l[a];
              'style' === a
                ? ut(e, u)
                : 'dangerouslySetInnerHTML' === a
                ? null != (u = u ? u.__html : void 0) && nt(e, u)
                : 'children' === a
                ? 'string' == typeof u
                  ? ('textarea' !== r || '' !== u) && ot(e, u)
                  : 'number' == typeof u && ot(e, '' + u)
                : 'suppressContentEditableWarning' !== a &&
                  'suppressHydrationWarning' !== a &&
                  'autoFocus' !== a &&
                  (X.hasOwnProperty(a)
                    ? null != u && 'onScroll' === a && ho('scroll', e)
                    : null != u && ie(e, a, u, i));
            }
          switch (r) {
            case 'input':
              Fe(e), He(e, n, !1);
              break;
            case 'textarea':
              Fe(e), Ge(e);
              break;
            case 'option':
              null != n.value && e.setAttribute('value', '' + Le(n.value));
              break;
            case 'select':
              (e.multiple = !!n.multiple),
                null != (a = n.value)
                  ? qe(e, !!n.multiple, a, !1)
                  : null != n.defaultValue &&
                    qe(e, !!n.multiple, n.defaultValue, !0);
              break;
            default:
              'function' == typeof o.onClick && (e.onclick = Eo);
          }
          Po(r, n) && (t.flags |= 4);
        }
        null !== t.ref && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && null != t.stateNode) jl(0, t, e.memoizedProps, n);
      else {
        if ('string' != typeof n && null === t.stateNode) throw Error(q(166));
        (r = vi(mi.current)),
          vi(pi.current),
          Oi(t)
            ? ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[Fo] = t),
              n.nodeValue !== r && (t.flags |= 4))
            : (((n = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(
                n,
              ))[Fo] = t),
              (t.stateNode = n));
      }
      return null;
    case 13:
      return (
        Xo(wi),
        (n = t.memoizedState),
        0 != (64 & t.flags)
          ? ((t.lanes = r), t)
          : ((n = null !== n),
            (r = !1),
            null === e
              ? void 0 !== t.memoizedProps.fallback && Oi(t)
              : (r = null !== e.memoizedState),
            n &&
              !r &&
              0 != (2 & t.mode) &&
              ((null === e &&
                !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
              0 != (1 & wi.current)
                ? 0 === wu && (wu = 3)
                : ((0 !== wu && 3 !== wu) || (wu = 4),
                  null === vu ||
                    (0 == (134217727 & Eu) && 0 == (134217727 & _u)) ||
                    ts(vu, yu))),
            (n || r) && (t.flags |= 4),
            null)
      );
    case 4:
      return yi(), null === e && vo(t.stateNode.containerInfo), null;
    case 10:
      return Va(t), null;
    case 17:
      return ta(t.type) && ra(), null;
    case 19:
      if ((Xo(wi), null === (n = t.memoizedState))) return null;
      if (((a = 0 != (64 & t.flags)), null === (i = n.rendering)))
        if (a) Hl(n, !1);
        else {
          if (0 !== wu || (null !== e && 0 != (64 & e.flags)))
            for (e = t.child; null !== e; ) {
              if (null !== (i = ki(e))) {
                for (
                  t.flags |= 64,
                    Hl(n, !1),
                    null !== (a = i.updateQueue) &&
                      ((t.updateQueue = a), (t.flags |= 4)),
                    null === n.lastEffect && (t.firstEffect = null),
                    t.lastEffect = n.lastEffect,
                    n = r,
                    r = t.child;
                  null !== r;

                )
                  (e = n),
                    ((a = r).flags &= 2),
                    (a.nextEffect = null),
                    (a.firstEffect = null),
                    (a.lastEffect = null),
                    null === (i = a.alternate)
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = i.childLanes),
                        (a.lanes = i.lanes),
                        (a.child = i.child),
                        (a.memoizedProps = i.memoizedProps),
                        (a.memoizedState = i.memoizedState),
                        (a.updateQueue = i.updateQueue),
                        (a.type = i.type),
                        (e = i.dependencies),
                        (a.dependencies =
                          null === e
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Qo(wi, (1 & wi.current) | 2), t.child;
              }
              e = e.sibling;
            }
          null !== n.tail &&
            Pa() > Tu &&
            ((t.flags |= 64), (a = !0), Hl(n, !1), (t.lanes = 33554432));
        }
      else {
        if (!a)
          if (null !== (e = ki(i))) {
            if (
              ((t.flags |= 64),
              (a = !0),
              null !== (r = e.updateQueue) &&
                ((t.updateQueue = r), (t.flags |= 4)),
              Hl(n, !0),
              null === n.tail && 'hidden' === n.tailMode && !i.alternate && !_i)
            )
              return (
                null !== (t = t.lastEffect = n.lastEffect) &&
                  (t.nextEffect = null),
                null
              );
          } else
            2 * Pa() - n.renderingStartTime > Tu &&
              1073741824 !== r &&
              ((t.flags |= 64), (a = !0), Hl(n, !1), (t.lanes = 33554432));
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
          (n.renderingStartTime = Pa()),
          (r.sibling = null),
          (t = wi.current),
          Qo(wi, a ? (1 & t) | 2 : 1 & t),
          r)
        : null;
    case 23:
    case 24:
      return (
        is(),
        null !== e &&
          (null !== e.memoizedState) != (null !== t.memoizedState) &&
          'unstable-defer-without-hiding' !== n.mode &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(q(156, t.tag));
}
function $l(e) {
  switch (e.tag) {
    case 1:
      ta(e.type) && ra();
      var t = e.flags;
      return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
    case 3:
      if ((yi(), Xo(Zo), Xo(Ko), ji(), 0 != (64 & (t = e.flags))))
        throw Error(q(285));
      return (e.flags = (-4097 & t) | 64), e;
    case 5:
      return xi(e), null;
    case 13:
      return (
        Xo(wi), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
      );
    case 19:
      return Xo(wi), null;
    case 4:
      return yi(), null;
    case 10:
      return Va(e), null;
    case 23:
    case 24:
      return is(), null;
    default:
      return null;
  }
}
function ql(e, t) {
  try {
    var r = '',
      n = t;
    do {
      (r += ze(n)), (n = n.return);
    } while (n);
    var o = r;
  } catch (a) {
    o = '\nError generating stack: ' + a.message + '\n' + a.stack;
  }
  return { value: e, source: t, stack: o };
}
function Yl(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
(Rl = function (e, t) {
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
  (zl = function (e, t, r, n) {
    var o = e.memoizedProps;
    if (o !== n) {
      (e = t.stateNode), vi(pi.current);
      var a,
        i = null;
      switch (r) {
        case 'input':
          (o = De(e, o)), (n = De(e, n)), (i = []);
          break;
        case 'option':
          (o = $e(e, o)), (n = $e(e, n)), (i = []);
          break;
        case 'select':
          (o = U({}, o, { value: void 0 })),
            (n = U({}, n, { value: void 0 })),
            (i = []);
          break;
        case 'textarea':
          (o = Ye(e, o)), (n = Ye(e, n)), (i = []);
          break;
        default:
          'function' != typeof o.onClick &&
            'function' == typeof n.onClick &&
            (e.onclick = Eo);
      }
      for (s in (ct(r, n), (r = null), o))
        if (!n.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
          if ('style' === s) {
            var l = o[s];
            for (a in l) l.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''));
          } else
            'dangerouslySetInnerHTML' !== s &&
              'children' !== s &&
              'suppressContentEditableWarning' !== s &&
              'suppressHydrationWarning' !== s &&
              'autoFocus' !== s &&
              (X.hasOwnProperty(s)
                ? i || (i = [])
                : (i = i || []).push(s, null));
      for (s in n) {
        var u = n[s];
        if (
          ((l = null != o ? o[s] : void 0),
          n.hasOwnProperty(s) && u !== l && (null != u || null != l))
        )
          if ('style' === s)
            if (l) {
              for (a in l)
                !l.hasOwnProperty(a) ||
                  (u && u.hasOwnProperty(a)) ||
                  (r || (r = {}), (r[a] = ''));
              for (a in u)
                u.hasOwnProperty(a) &&
                  l[a] !== u[a] &&
                  (r || (r = {}), (r[a] = u[a]));
            } else r || (i || (i = []), i.push(s, r)), (r = u);
          else
            'dangerouslySetInnerHTML' === s
              ? ((u = u ? u.__html : void 0),
                (l = l ? l.__html : void 0),
                null != u && l !== u && (i = i || []).push(s, u))
              : 'children' === s
              ? ('string' != typeof u && 'number' != typeof u) ||
                (i = i || []).push(s, '' + u)
              : 'suppressContentEditableWarning' !== s &&
                'suppressHydrationWarning' !== s &&
                (X.hasOwnProperty(s)
                  ? (null != u && 'onScroll' === s && ho('scroll', e),
                    i || l === u || (i = []))
                  : 'object' == typeof u && null !== u && u.$$typeof === we
                  ? u.toString()
                  : (i = i || []).push(s, u));
      }
      r && (i = i || []).push('style', r);
      var s = i;
      (t.updateQueue = s) && (t.flags |= 4);
    }
  }),
  (jl = function (e, t, r, n) {
    r !== n && (t.flags |= 4);
  });
var Xl = 'function' == typeof WeakMap ? WeakMap : Map;
function Ql(e, t, r) {
  ((r = Xa(-1, r)).tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      ju || ((ju = !0), (Lu = n)), Yl(0, t);
    }),
    r
  );
}
function Gl(e, t, r) {
  (r = Xa(-1, r)).tag = 3;
  var n = e.type.getDerivedStateFromError;
  if ('function' == typeof n) {
    var o = t.value;
    r.payload = function () {
      return Yl(0, t), n(o);
    };
  }
  var a = e.stateNode;
  return (
    null !== a &&
      'function' == typeof a.componentDidCatch &&
      (r.callback = function () {
        'function' != typeof n &&
          (null === Mu ? (Mu = new Set([this])) : Mu.add(this), Yl(0, t));
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
        Ss(e, r);
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
          t.elementType === t.type ? r : Ma(t.type, r),
          n,
        )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      return void (256 & t.flags && Ro(t.stateNode.containerInfo));
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(q(163));
}
function eu(e, t, r) {
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
          var o = e;
          (n = o.next),
            0 != (4 & (o = o.tag)) && 0 != (1 & o) && (xs(r, e), bs(r, e)),
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
                  : Ma(r.type, t.memoizedProps)),
              e.componentDidUpdate(
                n,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate,
              ))),
        void (null !== (t = r.updateQueue) && Za(r, t, e))
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
        Za(r, t, e);
      }
      return;
    case 5:
      return (
        (e = r.stateNode),
        void (
          null === t &&
          4 & r.flags &&
          Po(r.type, r.memoizedProps) &&
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
          null !== r && ((r = r.dehydrated), null !== r && ur(r))))
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
function tu(e, t) {
  for (var r = e; ; ) {
    if (5 === r.tag) {
      var n = r.stateNode;
      if (t)
        'function' == typeof (n = n.style).setProperty
          ? n.setProperty('display', 'none', 'important')
          : (n.display = 'none');
      else {
        n = r.stateNode;
        var o = r.memoizedProps.style;
        (o = null != o && o.hasOwnProperty('display') ? o.display : null),
          (n.style.display = lt('display', o));
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
function ru(e, t) {
  if (ua && 'function' == typeof ua.onCommitFiberUnmount)
    try {
      ua.onCommitFiberUnmount(la, t);
    } catch (a) {}
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
            o = n.destroy;
          if (((n = n.tag), void 0 !== o))
            if (0 != (4 & n)) xs(t, r);
            else {
              n = t;
              try {
                o();
              } catch (a) {
                Ss(n, a);
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
        } catch (a) {
          Ss(t, a);
        }
      break;
    case 5:
      Zl(t);
      break;
    case 4:
      uu(e, t);
  }
}
function nu(e) {
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
function ou(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function au(e) {
  e: {
    for (var t = e.return; null !== t; ) {
      if (ou(t)) break e;
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
  16 & r.flags && (ot(t, ''), (r.flags &= -17));
  e: t: for (r = e; ; ) {
    for (; null === r.sibling; ) {
      if (null === r.return || ou(r.return)) {
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
  n ? iu(e, r, t) : lu(e, r, t);
}
function iu(e, t, r) {
  var n = e.tag,
    o = 5 === n || 6 === n;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t
        ? 8 === r.nodeType
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (8 === r.nodeType
            ? (t = r.parentNode).insertBefore(e, r)
            : (t = r).appendChild(e),
          null != (r = r._reactRootContainer) ||
            null !== t.onclick ||
            (t.onclick = Eo));
  else if (4 !== n && null !== (e = e.child))
    for (iu(e, t, r), e = e.sibling; null !== e; ) iu(e, t, r), (e = e.sibling);
}
function lu(e, t, r) {
  var n = e.tag,
    o = 5 === n || 6 === n;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (4 !== n && null !== (e = e.child))
    for (lu(e, t, r), e = e.sibling; null !== e; ) lu(e, t, r), (e = e.sibling);
}
function uu(e, t) {
  for (var r, n, o = t, a = !1; ; ) {
    if (!a) {
      a = o.return;
      e: for (;;) {
        if (null === a) throw Error(q(160));
        switch (((r = a.stateNode), a.tag)) {
          case 5:
            n = !1;
            break e;
          case 3:
          case 4:
            (r = r.containerInfo), (n = !0);
            break e;
        }
        a = a.return;
      }
      a = !0;
    }
    if (5 === o.tag || 6 === o.tag) {
      e: for (var i = e, l = o, u = l; ; )
        if ((ru(i, u), null !== u.child && 4 !== u.tag))
          (u.child.return = u), (u = u.child);
        else {
          if (u === l) break e;
          for (; null === u.sibling; ) {
            if (null === u.return || u.return === l) break e;
            u = u.return;
          }
          (u.sibling.return = u.return), (u = u.sibling);
        }
      n
        ? ((i = r),
          (l = o.stateNode),
          8 === i.nodeType ? i.parentNode.removeChild(l) : i.removeChild(l))
        : r.removeChild(o.stateNode);
    } else if (4 === o.tag) {
      if (null !== o.child) {
        (r = o.stateNode.containerInfo),
          (n = !0),
          (o.child.return = o),
          (o = o.child);
        continue;
      }
    } else if ((ru(e, o), null !== o.child)) {
      (o.child.return = o), (o = o.child);
      continue;
    }
    if (o === t) break;
    for (; null === o.sibling; ) {
      if (null === o.return || o.return === t) return;
      4 === (o = o.return).tag && (a = !1);
    }
    (o.sibling.return = o.return), (o = o.sibling);
  }
}
function su(e, t) {
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
        var o = null !== e ? e.memoizedProps : n;
        e = t.type;
        var a = t.updateQueue;
        if (((t.updateQueue = null), null !== a)) {
          for (
            r[Bo] = n,
              'input' === e && 'radio' === n.type && null != n.name && Ve(r, n),
              ft(e, o),
              t = ft(e, n),
              o = 0;
            o < a.length;
            o += 2
          ) {
            var i = a[o],
              l = a[o + 1];
            'style' === i
              ? ut(r, l)
              : 'dangerouslySetInnerHTML' === i
              ? nt(r, l)
              : 'children' === i
              ? ot(r, l)
              : ie(r, i, l, t);
          }
          switch (e) {
            case 'input':
              We(r, n);
              break;
            case 'textarea':
              Qe(r, n);
              break;
            case 'select':
              (e = r._wrapperState.wasMultiple),
                (r._wrapperState.wasMultiple = !!n.multiple),
                null != (a = n.value)
                  ? qe(r, !!n.multiple, a, !1)
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
        (r = t.stateNode).hydrate && ((r.hydrate = !1), ur(r.containerInfo))
      );
    case 12:
      return;
    case 13:
      return (
        null !== t.memoizedState && ((Au = Pa()), tu(t.child, !0)), void cu(t)
      );
    case 19:
      return void cu(t);
    case 17:
      return;
    case 23:
    case 24:
      return void tu(t, null !== t.memoizedState);
  }
  throw Error(q(163));
}
function cu(e) {
  var t = e.updateQueue;
  if (null !== t) {
    e.updateQueue = null;
    var r = e.stateNode;
    null === r && (r = e.stateNode = new Kl()),
      t.forEach(function (t) {
        var n = _s.bind(null, e, t);
        r.has(t) || (r.add(t), t.then(n, n));
      });
  }
}
function fu(e, t) {
  return (
    null !== e &&
    (null === (e = e.memoizedState) || null !== e.dehydrated) &&
    null !== (t = t.memoizedState) &&
    null === t.dehydrated
  );
}
var du = Math.ceil,
  pu = le.ReactCurrentDispatcher,
  hu = le.ReactCurrentOwner,
  mu = 0,
  vu = null,
  gu = null,
  yu = 0,
  bu = 0,
  xu = Yo(0),
  wu = 0,
  ku = null,
  Su = 0,
  Eu = 0,
  _u = 0,
  Cu = 0,
  Pu = null,
  Au = 0,
  Tu = 1 / 0;
function Ou() {
  Tu = Pa() + 500;
}
var Ru,
  zu = null,
  ju = !1,
  Lu = null,
  Mu = null,
  Fu = !1,
  Bu = null,
  Iu = 90,
  Du = [],
  Nu = [],
  Vu = null,
  Wu = 0,
  Hu = null,
  Uu = -1,
  $u = 0,
  qu = 0,
  Yu = null,
  Xu = !1;
function Qu() {
  return 0 != (48 & mu) ? Pa() : -1 !== Uu ? Uu : (Uu = Pa());
}
function Gu(e) {
  if (0 == (2 & (e = e.mode))) return 1;
  if (0 == (4 & e)) return 99 === Aa() ? 1 : 2;
  if ((0 === $u && ($u = Su), 0 !== La.transition)) {
    0 !== qu && (qu = null !== Pu ? Pu.pendingLanes : 0), (e = $u);
    var t = 4186112 & ~qu;
    return (
      0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t
    );
  }
  return (
    (e = Aa()),
    0 != (4 & mu) && 98 === e
      ? (e = Cr(12, $u))
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
          $u,
        )),
    e
  );
}
function Ku(e, t, r) {
  if (50 < Wu) throw ((Wu = 0), (Hu = null), Error(q(185)));
  if (null === (e = Zu(e, t))) return null;
  Tr(e, t, r), e === vu && ((_u |= t), 4 === wu && ts(e, yu));
  var n = Aa();
  1 === t
    ? 0 != (8 & mu) && 0 == (48 & mu)
      ? rs(e)
      : (Ju(e, r), 0 === mu && (Ou(), za()))
    : (0 == (4 & mu) ||
        (98 !== n && 99 !== n) ||
        (null === Vu ? (Vu = new Set([e])) : Vu.add(e)),
      Ju(e, r)),
    (Pu = e);
}
function Zu(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (null !== r && (r.lanes |= t), r = e, e = e.return; null !== e; )
    (e.childLanes |= t),
      null !== (r = e.alternate) && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return 3 === r.tag ? r.stateNode : null;
}
function Ju(e, t) {
  for (
    var r = e.callbackNode,
      n = e.suspendedLanes,
      o = e.pingedLanes,
      a = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Or(i),
      u = 1 << l,
      s = a[l];
    if (-1 === s) {
      if (0 == (u & n) || 0 != (u & o)) {
        (s = t), Sr(u);
        var c = kr;
        a[l] = 10 <= c ? s + 250 : 6 <= c ? s + 5e3 : -1;
      }
    } else s <= t && (e.expiredLanes |= u);
    i &= ~u;
  }
  if (((n = Er(e, e === vu ? yu : 0)), (t = kr), 0 === n))
    null !== r &&
      (r !== wa && fa(r), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (null !== r) {
      if (e.callbackPriority === t) return;
      r !== wa && fa(r);
    }
    15 === t
      ? ((r = rs.bind(null, e)),
        null === Sa ? ((Sa = [r]), (Ea = ca(va, ja))) : Sa.push(r),
        (r = wa))
      : 14 === t
      ? (r = Ra(99, rs.bind(null, e)))
      : (r = Ra(
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
          es.bind(null, e),
        )),
      (e.callbackPriority = t),
      (e.callbackNode = r);
  }
}
function es(e) {
  if (((Uu = -1), (qu = $u = 0), 0 != (48 & mu))) throw Error(q(327));
  var t = e.callbackNode;
  if (ys() && e.callbackNode !== t) return null;
  var r = Er(e, e === vu ? yu : 0);
  if (0 === r) return null;
  var n = r,
    o = mu;
  mu |= 16;
  var a = ss();
  for ((vu === e && yu === n) || (Ou(), ls(e, n)); ; )
    try {
      ds();
      break;
    } catch (l) {
      us(e, l);
    }
  if (
    (Na(),
    (pu.current = a),
    (mu = o),
    null !== gu ? (n = 0) : ((vu = null), (yu = 0), (n = wu)),
    0 != (Su & _u))
  )
    ls(e, 0);
  else if (0 !== n) {
    if (
      (2 === n &&
        ((mu |= 64),
        e.hydrate && ((e.hydrate = !1), Ro(e.containerInfo)),
        0 !== (r = _r(e)) && (n = cs(e, r))),
      1 === n)
    )
      throw ((t = ku), ls(e, 0), ts(e, r), Ju(e, Pa()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = r), n)
    ) {
      case 0:
      case 1:
        throw Error(q(345));
      case 2:
        ms(e);
        break;
      case 3:
        if ((ts(e, r), (62914560 & r) === r && 10 < (n = Au + 500 - Pa()))) {
          if (0 !== Er(e, 0)) break;
          if (((o = e.suspendedLanes) & r) !== r) {
            Qu(), (e.pingedLanes |= e.suspendedLanes & o);
            break;
          }
          e.timeoutHandle = To(ms.bind(null, e), n);
          break;
        }
        ms(e);
        break;
      case 4:
        if ((ts(e, r), (4186112 & r) === r)) break;
        for (n = e.eventTimes, o = -1; 0 < r; ) {
          var i = 31 - Or(r);
          (a = 1 << i), (i = n[i]) > o && (o = i), (r &= ~a);
        }
        if (
          ((r = o),
          10 <
            (r =
              (120 > (r = Pa() - r)
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
                : 1960 * du(r / 1960)) - r))
        ) {
          e.timeoutHandle = To(ms.bind(null, e), r);
          break;
        }
        ms(e);
        break;
      case 5:
        ms(e);
        break;
      default:
        throw Error(q(329));
    }
  }
  return Ju(e, Pa()), e.callbackNode === t ? es.bind(null, e) : null;
}
function ts(e, t) {
  for (
    t &= ~Cu,
      t &= ~_u,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Or(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function rs(e) {
  if (0 != (48 & mu)) throw Error(q(327));
  if ((ys(), e === vu && 0 != (e.expiredLanes & yu))) {
    var t = yu,
      r = cs(e, t);
    0 != (Su & _u) && (r = cs(e, (t = Er(e, t))));
  } else r = cs(e, (t = Er(e, 0)));
  if (
    (0 !== e.tag &&
      2 === r &&
      ((mu |= 64),
      e.hydrate && ((e.hydrate = !1), Ro(e.containerInfo)),
      0 !== (t = _r(e)) && (r = cs(e, t))),
    1 === r)
  )
    throw ((r = ku), ls(e, 0), ts(e, t), Ju(e, Pa()), r);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ms(e),
    Ju(e, Pa()),
    null
  );
}
function ns(e, t) {
  var r = mu;
  mu |= 1;
  try {
    return e(t);
  } finally {
    0 === (mu = r) && (Ou(), za());
  }
}
function os(e, t) {
  var r = mu;
  (mu &= -2), (mu |= 8);
  try {
    return e(t);
  } finally {
    0 === (mu = r) && (Ou(), za());
  }
}
function as(e, t) {
  Qo(xu, bu), (bu |= t), (Su |= t);
}
function is() {
  (bu = xu.current), Xo(xu);
}
function ls(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((-1 !== r && ((e.timeoutHandle = -1), Oo(r)), null !== gu))
    for (r = gu.return; null !== r; ) {
      var n = r;
      switch (n.tag) {
        case 1:
          null != (n = n.type.childContextTypes) && ra();
          break;
        case 3:
          yi(), Xo(Zo), Xo(Ko), ji();
          break;
        case 5:
          xi(n);
          break;
        case 4:
          yi();
          break;
        case 13:
        case 19:
          Xo(wi);
          break;
        case 10:
          Va(n);
          break;
        case 23:
        case 24:
          is();
      }
      r = r.return;
    }
  (vu = e),
    (gu = Ts(e.current, null)),
    (yu = bu = Su = t),
    (wu = 0),
    (ku = null),
    (Cu = _u = Eu = 0);
}
function us(e, t) {
  for (;;) {
    var r = gu;
    try {
      if ((Na(), (Li.current = ml), Ni)) {
        for (var n = Bi.memoizedState; null !== n; ) {
          var o = n.queue;
          null !== o && (o.pending = null), (n = n.next);
        }
        Ni = !1;
      }
      if (
        ((Fi = 0),
        (Di = Ii = Bi = null),
        (Vi = !1),
        (hu.current = null),
        null === r || null === r.return)
      ) {
        (wu = 1), (ku = t), (gu = null);
        break;
      }
      e: {
        var a = e,
          i = r.return,
          l = r,
          u = t;
        if (
          ((t = yu),
          (l.flags |= 2048),
          (l.firstEffect = l.lastEffect = null),
          null !== u && 'object' == typeof u && 'function' == typeof u.then)
        ) {
          var s = u;
          if (0 == (2 & l.mode)) {
            var c = l.alternate;
            c
              ? ((l.updateQueue = c.updateQueue),
                (l.memoizedState = c.memoizedState),
                (l.lanes = c.lanes))
              : ((l.updateQueue = null), (l.memoizedState = null));
          }
          var f = 0 != (1 & wi.current),
            d = i;
          do {
            var p;
            if ((p = 13 === d.tag)) {
              var h = d.memoizedState;
              if (null !== h) p = null !== h.dehydrated;
              else {
                var m = d.memoizedProps;
                p =
                  void 0 !== m.fallback &&
                  (!0 !== m.unstable_avoidThisFallback || !f);
              }
            }
            if (p) {
              var v = d.updateQueue;
              if (null === v) {
                var g = new Set();
                g.add(s), (d.updateQueue = g);
              } else v.add(s);
              if (0 == (2 & d.mode)) {
                if (
                  ((d.flags |= 64),
                  (l.flags |= 16384),
                  (l.flags &= -2981),
                  1 === l.tag)
                )
                  if (null === l.alternate) l.tag = 17;
                  else {
                    var y = Xa(-1, 1);
                    (y.tag = 2), Qa(l, y);
                  }
                l.lanes |= 1;
                break e;
              }
              (u = void 0), (l = t);
              var b = a.pingCache;
              if (
                (null === b
                  ? ((b = a.pingCache = new Xl()), (u = new Set()), b.set(s, u))
                  : void 0 === (u = b.get(s)) && ((u = new Set()), b.set(s, u)),
                !u.has(l))
              ) {
                u.add(l);
                var x = Es.bind(null, a, s, l);
                s.then(x, x);
              }
              (d.flags |= 4096), (d.lanes = t);
              break e;
            }
            d = d.return;
          } while (null !== d);
          u = Error(
            (je(l.type) || 'A React component') +
              ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
          );
        }
        5 !== wu && (wu = 2), (u = ql(u, l)), (d = i);
        do {
          switch (d.tag) {
            case 3:
              (a = u),
                (d.flags |= 4096),
                (t &= -t),
                (d.lanes |= t),
                Ga(d, Ql(0, a, t));
              break e;
            case 1:
              a = u;
              var w = d.type,
                k = d.stateNode;
              if (
                0 == (64 & d.flags) &&
                ('function' == typeof w.getDerivedStateFromError ||
                  (null !== k &&
                    'function' == typeof k.componentDidCatch &&
                    (null === Mu || !Mu.has(k))))
              ) {
                (d.flags |= 4096),
                  (t &= -t),
                  (d.lanes |= t),
                  Ga(d, Gl(d, a, t));
                break e;
              }
          }
          d = d.return;
        } while (null !== d);
      }
      hs(r);
    } catch (S) {
      (t = S), gu === r && null !== r && (gu = r = r.return);
      continue;
    }
    break;
  }
}
function ss() {
  var e = pu.current;
  return (pu.current = ml), null === e ? ml : e;
}
function cs(e, t) {
  var r = mu;
  mu |= 16;
  var n = ss();
  for ((vu === e && yu === t) || ls(e, t); ; )
    try {
      fs();
      break;
    } catch (o) {
      us(e, o);
    }
  if ((Na(), (mu = r), (pu.current = n), null !== gu)) throw Error(q(261));
  return (vu = null), (yu = 0), wu;
}
function fs() {
  for (; null !== gu; ) ps(gu);
}
function ds() {
  for (; null !== gu && !da(); ) ps(gu);
}
function ps(e) {
  var t = Ru(e.alternate, e, bu);
  (e.memoizedProps = e.pendingProps),
    null === t ? hs(e) : (gu = t),
    (hu.current = null);
}
function hs(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), 0 == (2048 & t.flags))) {
      if (null !== (r = Ul(r, t, bu))) return void (gu = r);
      if (
        (24 !== (r = t).tag && 23 !== r.tag) ||
        null === r.memoizedState ||
        0 != (1073741824 & bu) ||
        0 == (4 & r.mode)
      ) {
        for (var n = 0, o = r.child; null !== o; )
          (n |= o.lanes | o.childLanes), (o = o.sibling);
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
      if (null !== (r = $l(t))) return (r.flags &= 2047), void (gu = r);
      null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (null !== (t = t.sibling)) return void (gu = t);
    gu = t = e;
  } while (null !== t);
  0 === wu && (wu = 5);
}
function ms(e) {
  var t = Aa();
  return Oa(99, vs.bind(null, e, t)), null;
}
function vs(e, t) {
  do {
    ys();
  } while (null !== Bu);
  if (0 != (48 & mu)) throw Error(q(327));
  var r = e.finishedWork;
  if (null === r) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(q(177));
  e.callbackNode = null;
  var n = r.lanes | r.childLanes,
    o = n,
    a = e.pendingLanes & ~o;
  (e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements);
  for (var i = e.eventTimes, l = e.expirationTimes; 0 < a; ) {
    var u = 31 - Or(a),
      s = 1 << u;
    (o[u] = 0), (i[u] = -1), (l[u] = -1), (a &= ~s);
  }
  if (
    (null !== Vu && 0 == (24 & n) && Vu.has(e) && Vu.delete(e),
    e === vu && ((gu = vu = null), (yu = 0)),
    1 < r.flags
      ? null !== r.lastEffect
        ? ((r.lastEffect.nextEffect = r), (n = r.firstEffect))
        : (n = r)
      : (n = r.firstEffect),
    null !== n)
  ) {
    if (
      ((o = mu), (mu |= 32), (hu.current = null), (_o = Mr), eo((i = Jn())))
    ) {
      if ('selectionStart' in i)
        l = { start: i.selectionStart, end: i.selectionEnd };
      else
        e: if (
          ((l = ((l = i.ownerDocument) && l.defaultView) || window),
          (s = l.getSelection && l.getSelection()) && 0 !== s.rangeCount)
        ) {
          (l = s.anchorNode),
            (a = s.anchorOffset),
            (u = s.focusNode),
            (s = s.focusOffset);
          try {
            l.nodeType, u.nodeType;
          } catch (_) {
            l = null;
            break e;
          }
          var c = 0,
            f = -1,
            d = -1,
            p = 0,
            h = 0,
            m = i,
            v = null;
          t: for (;;) {
            for (
              var g;
              m !== l || (0 !== a && 3 !== m.nodeType) || (f = c + a),
                m !== u || (0 !== s && 3 !== m.nodeType) || (d = c + s),
                3 === m.nodeType && (c += m.nodeValue.length),
                null !== (g = m.firstChild);

            )
              (v = m), (m = g);
            for (;;) {
              if (m === i) break t;
              if (
                (v === l && ++p === a && (f = c),
                v === u && ++h === s && (d = c),
                null !== (g = m.nextSibling))
              )
                break;
              v = (m = v).parentNode;
            }
            m = g;
          }
          l = -1 === f || -1 === d ? null : { start: f, end: d };
        } else l = null;
      l = l || { start: 0, end: 0 };
    } else l = null;
    (Co = { focusedElem: i, selectionRange: l }),
      (Mr = !1),
      (Yu = null),
      (Xu = !1),
      (zu = n);
    do {
      try {
        gs();
      } catch (_) {
        if (null === zu) throw Error(q(330));
        Ss(zu, _), (zu = zu.nextEffect);
      }
    } while (null !== zu);
    (Yu = null), (zu = n);
    do {
      try {
        for (i = e; null !== zu; ) {
          var y = zu.flags;
          if ((16 & y && ot(zu.stateNode, ''), 128 & y)) {
            var b = zu.alternate;
            if (null !== b) {
              var x = b.ref;
              null !== x &&
                ('function' == typeof x ? x(null) : (x.current = null));
            }
          }
          switch (1038 & y) {
            case 2:
              au(zu), (zu.flags &= -3);
              break;
            case 6:
              au(zu), (zu.flags &= -3), su(zu.alternate, zu);
              break;
            case 1024:
              zu.flags &= -1025;
              break;
            case 1028:
              (zu.flags &= -1025), su(zu.alternate, zu);
              break;
            case 4:
              su(zu.alternate, zu);
              break;
            case 8:
              uu(i, (l = zu));
              var w = l.alternate;
              nu(l), null !== w && nu(w);
          }
          zu = zu.nextEffect;
        }
      } catch (_) {
        if (null === zu) throw Error(q(330));
        Ss(zu, _), (zu = zu.nextEffect);
      }
    } while (null !== zu);
    if (
      ((x = Co),
      (b = Jn()),
      (y = x.focusedElem),
      (i = x.selectionRange),
      b !== y && y && y.ownerDocument && Zn(y.ownerDocument.documentElement, y))
    ) {
      null !== i &&
        eo(y) &&
        ((b = i.start),
        void 0 === (x = i.end) && (x = b),
        'selectionStart' in y
          ? ((y.selectionStart = b),
            (y.selectionEnd = Math.min(x, y.value.length)))
          : (x = ((b = y.ownerDocument || document) && b.defaultView) || window)
              .getSelection &&
            ((x = x.getSelection()),
            (l = y.textContent.length),
            (w = Math.min(i.start, l)),
            (i = void 0 === i.end ? w : Math.min(i.end, l)),
            !x.extend && w > i && ((l = i), (i = w), (w = l)),
            (l = Kn(y, w)),
            (a = Kn(y, i)),
            l &&
              a &&
              (1 !== x.rangeCount ||
                x.anchorNode !== l.node ||
                x.anchorOffset !== l.offset ||
                x.focusNode !== a.node ||
                x.focusOffset !== a.offset) &&
              ((b = b.createRange()).setStart(l.node, l.offset),
              x.removeAllRanges(),
              w > i
                ? (x.addRange(b), x.extend(a.node, a.offset))
                : (b.setEnd(a.node, a.offset), x.addRange(b))))),
        (b = []);
      for (x = y; (x = x.parentNode); )
        1 === x.nodeType &&
          b.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
      for ('function' == typeof y.focus && y.focus(), y = 0; y < b.length; y++)
        ((x = b[y]).element.scrollLeft = x.left), (x.element.scrollTop = x.top);
    }
    (Mr = !!_o), (Co = _o = null), (e.current = r), (zu = n);
    do {
      try {
        for (y = e; null !== zu; ) {
          var k = zu.flags;
          if ((36 & k && eu(y, zu.alternate, zu), 128 & k)) {
            b = void 0;
            var S = zu.ref;
            if (null !== S) {
              var E = zu.stateNode;
              switch (zu.tag) {
                case 5:
                  b = E;
                  break;
                default:
                  b = E;
              }
              'function' == typeof S ? S(b) : (S.current = b);
            }
          }
          zu = zu.nextEffect;
        }
      } catch (_) {
        if (null === zu) throw Error(q(330));
        Ss(zu, _), (zu = zu.nextEffect);
      }
    } while (null !== zu);
    (zu = null), ka(), (mu = o);
  } else e.current = r;
  if (Fu) (Fu = !1), (Bu = e), (Iu = t);
  else
    for (zu = n; null !== zu; )
      (t = zu.nextEffect),
        (zu.nextEffect = null),
        8 & zu.flags && (((k = zu).sibling = null), (k.stateNode = null)),
        (zu = t);
  if (
    (0 === (n = e.pendingLanes) && (Mu = null),
    1 === n ? (e === Hu ? Wu++ : ((Wu = 0), (Hu = e))) : (Wu = 0),
    (r = r.stateNode),
    ua && 'function' == typeof ua.onCommitFiberRoot)
  )
    try {
      ua.onCommitFiberRoot(la, r, void 0, 64 == (64 & r.current.flags));
    } catch (_) {}
  if ((Ju(e, Pa()), ju)) throw ((ju = !1), (e = Lu), (Lu = null), e);
  return 0 != (8 & mu) || za(), null;
}
function gs() {
  for (; null !== zu; ) {
    var e = zu.alternate;
    Xu ||
      null === Yu ||
      (0 != (8 & zu.flags)
        ? Nt(zu, Yu) && (Xu = !0)
        : 13 === zu.tag && fu(e, zu) && Nt(zu, Yu) && (Xu = !0));
    var t = zu.flags;
    0 != (256 & t) && Jl(e, zu),
      0 == (512 & t) ||
        Fu ||
        ((Fu = !0),
        Ra(97, function () {
          return ys(), null;
        })),
      (zu = zu.nextEffect);
  }
}
function ys() {
  if (90 !== Iu) {
    var e = 97 < Iu ? 97 : Iu;
    return (Iu = 90), Oa(e, ws);
  }
  return !1;
}
function bs(e, t) {
  Du.push(t, e),
    Fu ||
      ((Fu = !0),
      Ra(97, function () {
        return ys(), null;
      }));
}
function xs(e, t) {
  Nu.push(t, e),
    Fu ||
      ((Fu = !0),
      Ra(97, function () {
        return ys(), null;
      }));
}
function ws() {
  if (null === Bu) return !1;
  var e = Bu;
  if (((Bu = null), 0 != (48 & mu))) throw Error(q(331));
  var t = mu;
  mu |= 32;
  var r = Nu;
  Nu = [];
  for (var n = 0; n < r.length; n += 2) {
    var o = r[n],
      a = r[n + 1],
      i = o.destroy;
    if (((o.destroy = void 0), 'function' == typeof i))
      try {
        i();
      } catch (u) {
        if (null === a) throw Error(q(330));
        Ss(a, u);
      }
  }
  for (r = Du, Du = [], n = 0; n < r.length; n += 2) {
    (o = r[n]), (a = r[n + 1]);
    try {
      var l = o.create;
      o.destroy = l();
    } catch (u) {
      if (null === a) throw Error(q(330));
      Ss(a, u);
    }
  }
  for (l = e.current.firstEffect; null !== l; )
    (e = l.nextEffect),
      (l.nextEffect = null),
      8 & l.flags && ((l.sibling = null), (l.stateNode = null)),
      (l = e);
  return (mu = t), za(), !0;
}
function ks(e, t, r) {
  Qa(e, (t = Ql(0, (t = ql(r, t)), 1))),
    (t = Qu()),
    null !== (e = Zu(e, 1)) && (Tr(e, 1, t), Ju(e, t));
}
function Ss(e, t) {
  if (3 === e.tag) ks(e, e, t);
  else
    for (var r = e.return; null !== r; ) {
      if (3 === r.tag) {
        ks(r, e, t);
        break;
      }
      if (1 === r.tag) {
        var n = r.stateNode;
        if (
          'function' == typeof r.type.getDerivedStateFromError ||
          ('function' == typeof n.componentDidCatch &&
            (null === Mu || !Mu.has(n)))
        ) {
          var o = Gl(r, (e = ql(t, e)), 1);
          if ((Qa(r, o), (o = Qu()), null !== (r = Zu(r, 1))))
            Tr(r, 1, o), Ju(r, o);
          else if (
            'function' == typeof n.componentDidCatch &&
            (null === Mu || !Mu.has(n))
          )
            try {
              n.componentDidCatch(t, e);
            } catch (a) {}
          break;
        }
      }
      r = r.return;
    }
}
function Es(e, t, r) {
  var n = e.pingCache;
  null !== n && n.delete(t),
    (t = Qu()),
    (e.pingedLanes |= e.suspendedLanes & r),
    vu === e &&
      (yu & r) === r &&
      (4 === wu || (3 === wu && (62914560 & yu) === yu && 500 > Pa() - Au)
        ? ls(e, 0)
        : (Cu |= r)),
    Ju(e, t);
}
function _s(e, t) {
  var r = e.stateNode;
  null !== r && r.delete(t),
    0 === (t = 0) &&
      (0 == (2 & (t = e.mode))
        ? (t = 1)
        : 0 == (4 & t)
        ? (t = 99 === Aa() ? 1 : 2)
        : (0 === $u && ($u = Su),
          0 === (t = Pr(62914560 & ~$u)) && (t = 4194304))),
    (r = Qu()),
    null !== (e = Zu(e, t)) && (Tr(e, t, r), Ju(e, r));
}
function Cs(e, t, r, n) {
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
function Ps(e, t, r, n) {
  return new Cs(e, t, r, n);
}
function As(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function Ts(e, t) {
  var r = e.alternate;
  return (
    null === r
      ? (((r = Ps(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function Os(e, t, r, n, o, a) {
  var i = 2;
  if (((n = e), 'function' == typeof e)) As(e) && (i = 1);
  else if ('string' == typeof e) i = 5;
  else
    e: switch (e) {
      case ce:
        return Rs(r.children, o, a, t);
      case ke:
        (i = 8), (o |= 16);
        break;
      case fe:
        (i = 8), (o |= 1);
        break;
      case de:
        return (
          ((e = Ps(12, r, t, 8 | o)).elementType = de),
          (e.type = de),
          (e.lanes = a),
          e
        );
      case ve:
        return (
          ((e = Ps(13, r, t, o)).type = ve),
          (e.elementType = ve),
          (e.lanes = a),
          e
        );
      case ge:
        return ((e = Ps(19, r, t, o)).elementType = ge), (e.lanes = a), e;
      case Se:
        return zs(r, o, a, t);
      case Ee:
        return ((e = Ps(24, r, t, o)).elementType = Ee), (e.lanes = a), e;
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
            case ye:
              i = 14;
              break e;
            case be:
              (i = 16), (n = null);
              break e;
            case xe:
              i = 22;
              break e;
          }
        throw Error(q(130, null == e ? e : typeof e, ''));
    }
  return ((t = Ps(i, r, t, o)).elementType = e), (t.type = n), (t.lanes = a), t;
}
function Rs(e, t, r, n) {
  return ((e = Ps(7, e, n, t)).lanes = r), e;
}
function zs(e, t, r, n) {
  return ((e = Ps(23, e, n, t)).elementType = Se), (e.lanes = r), e;
}
function js(e, t, r) {
  return ((e = Ps(6, e, null, t)).lanes = r), e;
}
function Ls(e, t, r) {
  return (
    ((t = Ps(4, null !== e.children ? e.children : [], e.key, t)).lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ms(e, t, r) {
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
    (this.eventTimes = Ar(0)),
    (this.expirationTimes = Ar(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ar(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function Fs(e, t, r) {
  var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: se,
    key: null == n ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Bs(e, t, r, n) {
  var o = t.current,
    a = Qu(),
    i = Gu(o);
  e: if (r) {
    t: {
      if (Ft((r = r._reactInternals)) !== r || 1 !== r.tag) throw Error(q(170));
      var l = r;
      do {
        switch (l.tag) {
          case 3:
            l = l.stateNode.context;
            break t;
          case 1:
            if (ta(l.type)) {
              l = l.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        l = l.return;
      } while (null !== l);
      throw Error(q(171));
    }
    if (1 === r.tag) {
      var u = r.type;
      if (ta(u)) {
        r = oa(r, u, l);
        break e;
      }
    }
    r = l;
  } else r = Go;
  return (
    null === t.context ? (t.context = r) : (t.pendingContext = r),
    ((t = Xa(a, i)).payload = { element: e }),
    null !== (n = void 0 === n ? null : n) && (t.callback = n),
    Qa(o, t),
    Ku(o, i, a),
    i
  );
}
function Is(e) {
  if (!(e = e.current).child) return null;
  switch (e.child.tag) {
    case 5:
    default:
      return e.child.stateNode;
  }
}
function Ds(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var r = e.retryLane;
    e.retryLane = 0 !== r && r < t ? r : t;
  }
}
function Ns(e, t) {
  Ds(e, t), (e = e.alternate) && Ds(e, t);
}
function Vs(e, t, r) {
  var n =
    (null != r &&
      null != r.hydrationOptions &&
      r.hydrationOptions.mutableSources) ||
    null;
  if (
    ((r = new Ms(e, t, null != r && !0 === r.hydrate)),
    (t = Ps(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
    (r.current = t),
    (t.stateNode = r),
    qa(t),
    (e[Io] = r.current),
    vo(8 === e.nodeType ? e.parentNode : e),
    n)
  )
    for (e = 0; e < n.length; e++) {
      var o = (t = n[e])._getVersion;
      (o = o(t._source)),
        null == r.mutableSourceEagerHydrationData
          ? (r.mutableSourceEagerHydrationData = [t, o])
          : r.mutableSourceEagerHydrationData.push(t, o);
    }
  this._internalRoot = r;
}
function Ws(e) {
  return !(
    !e ||
    (1 !== e.nodeType &&
      9 !== e.nodeType &&
      11 !== e.nodeType &&
      (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
  );
}
function Hs(e, t, r, n, o) {
  var a = r._reactRootContainer;
  if (a) {
    var i = a._internalRoot;
    if ('function' == typeof o) {
      var l = o;
      o = function () {
        var e = Is(i);
        l.call(e);
      };
    }
    Bs(t, i, e, o);
  } else {
    if (
      ((a = r._reactRootContainer =
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
          return new Vs(e, 0, t ? { hydrate: !0 } : void 0);
        })(r, n)),
      (i = a._internalRoot),
      'function' == typeof o)
    ) {
      var u = o;
      o = function () {
        var e = Is(i);
        u.call(e);
      };
    }
    os(function () {
      Bs(t, i, e, o);
    });
  }
  return Is(i);
}
function Us(e, t) {
  var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!Ws(t)) throw Error(q(200));
  return Fs(e, t, null, r);
}
(Ru = function (e, t, r) {
  var n = t.lanes;
  if (null !== e)
    if (e.memoizedProps !== t.pendingProps || Zo.current) xl = !0;
    else {
      if (0 == (r & n)) {
        switch (((xl = !1), t.tag)) {
          case 3:
            Ol(t), Ri();
            break;
          case 5:
            bi(t);
            break;
          case 1:
            ta(t.type) && aa(t);
            break;
          case 4:
            gi(t, t.stateNode.containerInfo);
            break;
          case 10:
            n = t.memoizedProps.value;
            var o = t.type._context;
            Qo(Fa, o._currentValue), (o._currentValue = n);
            break;
          case 13:
            if (null !== t.memoizedState)
              return 0 != (r & t.child.childLanes)
                ? Ml(e, t, r)
                : (Qo(wi, 1 & wi.current),
                  null !== (t = Wl(e, t, r)) ? t.sibling : null);
            Qo(wi, 1 & wi.current);
            break;
          case 19:
            if (((n = 0 != (r & t.childLanes)), 0 != (64 & e.flags))) {
              if (n) return Vl(e, t, r);
              t.flags |= 64;
            }
            if (
              (null !== (o = t.memoizedState) &&
                ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
              Qo(wi, wi.current),
              n)
            )
              break;
            return null;
          case 23:
          case 24:
            return (t.lanes = 0), _l(e, t, r);
        }
        return Wl(e, t, r);
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
        (o = ea(t, Ko.current)),
        Ha(t, r),
        (o = Ui(null, t, n, e, o, r)),
        (t.flags |= 1),
        'object' == typeof o &&
          null !== o &&
          'function' == typeof o.render &&
          void 0 === o.$$typeof)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ta(n))
        ) {
          var a = !0;
          aa(t);
        } else a = !1;
        (t.memoizedState =
          null !== o.state && void 0 !== o.state ? o.state : null),
          qa(t);
        var i = n.getDerivedStateFromProps;
        'function' == typeof i && ei(t, n, i, e),
          (o.updater = ti),
          (t.stateNode = o),
          (o._reactInternals = t),
          ai(t, n, e, r),
          (t = Tl(null, t, n, !0, a, r));
      } else (t.tag = 0), wl(null, t, o, r), (t = t.child);
      return t;
    case 16:
      o = t.elementType;
      e: {
        switch (
          (null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = (a = o._init)(o._payload)),
          (t.type = o),
          (a = t.tag =
            (function (e) {
              if ('function' == typeof e) return As(e) ? 1 : 0;
              if (null != e) {
                if ((e = e.$$typeof) === me) return 11;
                if (e === ye) return 14;
              }
              return 2;
            })(o)),
          (e = Ma(o, e)),
          a)
        ) {
          case 0:
            t = Pl(null, t, o, e, r);
            break e;
          case 1:
            t = Al(null, t, o, e, r);
            break e;
          case 11:
            t = kl(null, t, o, e, r);
            break e;
          case 14:
            t = Sl(null, t, o, Ma(o.type, e), n, r);
            break e;
        }
        throw Error(q(306, o, ''));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        Pl(e, t, n, (o = t.elementType === n ? o : Ma(n, o)), r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        Al(e, t, n, (o = t.elementType === n ? o : Ma(n, o)), r)
      );
    case 3:
      if ((Ol(t), (n = t.updateQueue), null === e || null === n))
        throw Error(q(282));
      if (
        ((n = t.pendingProps),
        (o = null !== (o = t.memoizedState) ? o.element : null),
        Ya(e, t),
        Ka(t, n, null, r),
        (n = t.memoizedState.element) === o)
      )
        Ri(), (t = Wl(e, t, r));
      else {
        if (
          ((a = (o = t.stateNode).hydrate) &&
            ((Ei = zo(t.stateNode.containerInfo.firstChild)),
            (Si = t),
            (a = _i = !0)),
          a)
        ) {
          if (null != (e = o.mutableSourceEagerHydrationData))
            for (o = 0; o < e.length; o += 2)
              ((a = e[o])._workInProgressVersionPrimary = e[o + 1]), zi.push(a);
          for (r = fi(t, null, n, r), t.child = r; r; )
            (r.flags = (-3 & r.flags) | 1024), (r = r.sibling);
        } else wl(e, t, n, r), Ri();
        t = t.child;
      }
      return t;
    case 5:
      return (
        bi(t),
        null === e && Ai(t),
        (n = t.type),
        (o = t.pendingProps),
        (a = null !== e ? e.memoizedProps : null),
        (i = o.children),
        Ao(n, o) ? (i = null) : null !== a && Ao(n, a) && (t.flags |= 16),
        Cl(e, t),
        wl(e, t, i, r),
        t.child
      );
    case 6:
      return null === e && Ai(t), null;
    case 13:
      return Ml(e, t, r);
    case 4:
      return (
        gi(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        null === e ? (t.child = ci(t, null, n, r)) : wl(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        kl(e, t, n, (o = t.elementType === n ? o : Ma(n, o)), r)
      );
    case 7:
      return wl(e, t, t.pendingProps, r), t.child;
    case 8:
    case 12:
      return wl(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        (n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value);
        var l = t.type._context;
        if ((Qo(Fa, l._currentValue), (l._currentValue = a), null !== i))
          if (
            ((l = i.value),
            0 ===
              (a = Yn(l, a)
                ? 0
                : 0 |
                  ('function' == typeof n._calculateChangedBits
                    ? n._calculateChangedBits(l, a)
                    : 1073741823)))
          ) {
            if (i.children === o.children && !Zo.current) {
              t = Wl(e, t, r);
              break e;
            }
          } else
            for (null !== (l = t.child) && (l.return = t); null !== l; ) {
              var u = l.dependencies;
              if (null !== u) {
                i = l.child;
                for (var s = u.firstContext; null !== s; ) {
                  if (s.context === n && 0 != (s.observedBits & a)) {
                    1 === l.tag && (((s = Xa(-1, r & -r)).tag = 2), Qa(l, s)),
                      (l.lanes |= r),
                      null !== (s = l.alternate) && (s.lanes |= r),
                      Wa(l.return, r),
                      (u.lanes |= r);
                    break;
                  }
                  s = s.next;
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
        wl(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = (a = t.pendingProps).children),
        Ha(t, r),
        (n = n((o = Ua(o, a.unstable_observedBits)))),
        (t.flags |= 1),
        wl(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (a = Ma((o = t.type), t.pendingProps)),
        Sl(e, t, o, (a = Ma(o.type, a)), n, r)
      );
    case 15:
      return El(e, t, t.type, t.pendingProps, n, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ma(n, o)),
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        ta(n) ? ((e = !0), aa(t)) : (e = !1),
        Ha(t, r),
        ni(t, n, o),
        ai(t, n, o, r),
        Tl(null, t, n, !0, e, r)
      );
    case 19:
      return Vl(e, t, r);
    case 23:
    case 24:
      return _l(e, t, r);
  }
  throw Error(q(156, t.tag));
}),
  (Vs.prototype.render = function (e) {
    Bs(e, this._internalRoot, null, null);
  }),
  (Vs.prototype.unmount = function () {
    var e = this._internalRoot,
      t = e.containerInfo;
    Bs(null, e, null, function () {
      t[Io] = null;
    });
  }),
  (Vt = function (e) {
    13 === e.tag && (Ku(e, 4, Qu()), Ns(e, 4));
  }),
  (Wt = function (e) {
    13 === e.tag && (Ku(e, 67108864, Qu()), Ns(e, 67108864));
  }),
  (Ht = function (e) {
    if (13 === e.tag) {
      var t = Qu(),
        r = Gu(e);
      Ku(e, r, t), Ns(e, r);
    }
  }),
  (Ut = function (e, t) {
    return t();
  }),
  (pt = function (e, t, r) {
    switch (t) {
      case 'input':
        if ((We(e, r), (t = r.name), 'radio' === r.type && null != t)) {
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
              var o = Ho(n);
              if (!o) throw Error(q(90));
              Be(n), We(n, o);
            }
          }
        }
        break;
      case 'textarea':
        Qe(e, r);
        break;
      case 'select':
        null != (t = r.value) && qe(e, !!r.multiple, t, !1);
    }
  }),
  (bt = ns),
  (xt = function (e, t, r, n, o) {
    var a = mu;
    mu |= 4;
    try {
      return Oa(98, e.bind(null, t, r, n, o));
    } finally {
      0 === (mu = a) && (Ou(), za());
    }
  }),
  (wt = function () {
    0 == (49 & mu) &&
      ((function () {
        if (null !== Vu) {
          var e = Vu;
          (Vu = null),
            e.forEach(function (e) {
              (e.expiredLanes |= 24 & e.pendingLanes), Ju(e, Pa());
            });
        }
        za();
      })(),
      ys());
  }),
  (kt = function (e, t) {
    var r = mu;
    mu |= 2;
    try {
      return e(t);
    } finally {
      0 === (mu = r) && (Ou(), za());
    }
  });
var $s = { Events: [Vo, Wo, Ho, gt, yt, ys, { current: !1 }] },
  qs = {
    findFiberByHostInstance: No,
    bundleType: 0,
    version: '17.0.2',
    rendererPackageName: 'react-dom',
  },
  Ys = {
    bundleType: qs.bundleType,
    version: qs.version,
    rendererPackageName: qs.rendererPackageName,
    rendererConfig: qs.rendererConfig,
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
      return null === (e = Dt(e)) ? null : e.stateNode;
    },
    findFiberByHostInstance:
      qs.findFiberByHostInstance ||
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
  var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xs.isDisabled && Xs.supportsFiber)
    try {
      (la = Xs.inject(Ys)), (ua = Xs);
    } catch (rt) {}
}
(N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $s),
  (N.createPortal = Us),
  (N.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) {
      if ('function' == typeof e.render) throw Error(q(188));
      throw Error(q(268, Object.keys(e)));
    }
    return (e = null === (e = Dt(t)) ? null : e.stateNode);
  }),
  (N.flushSync = function (e, t) {
    var r = mu;
    if (0 != (48 & r)) return e(t);
    mu |= 1;
    try {
      if (e) return Oa(99, e.bind(null, t));
    } finally {
      (mu = r), za();
    }
  }),
  (N.hydrate = function (e, t, r) {
    if (!Ws(t)) throw Error(q(200));
    return Hs(null, e, t, !0, r);
  }),
  (N.render = function (e, t, r) {
    if (!Ws(t)) throw Error(q(200));
    return Hs(null, e, t, !1, r);
  }),
  (N.unmountComponentAtNode = function (e) {
    if (!Ws(e)) throw Error(q(40));
    return (
      !!e._reactRootContainer &&
      (os(function () {
        Hs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Io] = null);
        });
      }),
      !0)
    );
  }),
  (N.unstable_batchedUpdates = ns),
  (N.unstable_createPortal = function (e, t) {
    return Us(
      e,
      t,
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
    );
  }),
  (N.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
    if (!Ws(r)) throw Error(q(200));
    if (null == e || void 0 === e._reactInternals) throw Error(q(38));
    return Hs(e, t, r, !1, n);
  }),
  (N.version = '17.0.2'),
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
  (D.exports = N);
var Qs = D.exports;
var Gs = (function () {
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
  Ks = '-ms-',
  Zs = '-moz-',
  Js = '-webkit-',
  ec = Math.abs,
  tc = String.fromCharCode;
function rc(e) {
  return e.trim();
}
function nc(e, t, r) {
  return e.replace(t, r);
}
function oc(e, t) {
  return e.indexOf(t);
}
function ac(e, t) {
  return 0 | e.charCodeAt(t);
}
function ic(e, t, r) {
  return e.slice(t, r);
}
function lc(e) {
  return e.length;
}
function uc(e) {
  return e.length;
}
function sc(e, t) {
  return t.push(e), e;
}
var cc = 1,
  fc = 1,
  dc = 0,
  pc = 0,
  hc = 0,
  mc = '';
function vc(e, t, r, n, o, a, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: a,
    line: cc,
    column: fc,
    length: i,
    return: '',
  };
}
function gc(e, t, r) {
  return vc(e, t.root, t.parent, r, t.props, t.children, 0);
}
function yc() {
  return (
    (hc = pc < dc ? ac(mc, pc++) : 0), fc++, 10 === hc && ((fc = 1), cc++), hc
  );
}
function bc() {
  return ac(mc, pc);
}
function xc() {
  return pc;
}
function wc(e, t) {
  return ic(mc, e, t);
}
function kc(e) {
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
  return (cc = fc = 1), (dc = lc((mc = e))), (pc = 0), [];
}
function Ec(e) {
  return (mc = ''), e;
}
function _c(e) {
  return rc(wc(pc - 1, Ac(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function Cc(e) {
  for (; (hc = bc()) && hc < 33; ) yc();
  return kc(e) > 2 || kc(hc) > 3 ? '' : ' ';
}
function Pc(e, t) {
  for (
    ;
    --t &&
    yc() &&
    !(hc < 48 || hc > 102 || (hc > 57 && hc < 65) || (hc > 70 && hc < 97));

  );
  return wc(e, xc() + (t < 6 && 32 == bc() && 32 == yc()));
}
function Ac(e) {
  for (; yc(); )
    switch (hc) {
      case e:
        return pc;
      case 34:
      case 39:
        return Ac(34 === e || 39 === e ? e : hc);
      case 40:
        41 === e && Ac(e);
        break;
      case 92:
        yc();
    }
  return pc;
}
function Tc(e, t) {
  for (; yc() && e + hc !== 57 && (e + hc !== 84 || 47 !== bc()); );
  return '/*' + wc(t, pc - 1) + '*' + tc(47 === e ? e : yc());
}
function Oc(e) {
  for (; !kc(bc()); ) yc();
  return wc(e, pc);
}
function Rc(e) {
  return Ec(zc('', null, null, null, [''], (e = Sc(e)), 0, [0], e));
}
function zc(e, t, r, n, o, a, i, l, u) {
  for (
    var s = 0,
      c = 0,
      f = i,
      d = 0,
      p = 0,
      h = 0,
      m = 1,
      v = 1,
      g = 1,
      y = 0,
      b = '',
      x = o,
      w = a,
      k = n,
      S = b;
    v;

  )
    switch (((h = y), (y = yc()))) {
      case 34:
      case 39:
      case 91:
      case 40:
        S += _c(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Cc(h);
        break;
      case 92:
        S += Pc(xc() - 1, 7);
        continue;
      case 47:
        switch (bc()) {
          case 42:
          case 47:
            sc(Lc(Tc(yc(), xc()), t, r), u);
            break;
          default:
            S += '/';
        }
        break;
      case 123 * m:
        l[s++] = lc(S) * g;
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            v = 0;
          case 59 + c:
            p > 0 &&
              lc(S) - f &&
              sc(
                p > 32
                  ? Mc(S + ';', n, r, f - 1)
                  : Mc(nc(S, ' ', '') + ';', n, r, f - 2),
                u,
              );
            break;
          case 59:
            S += ';';
          default:
            if (
              (sc((k = jc(S, t, r, s, c, o, l, b, (x = []), (w = []), f)), a),
              123 === y)
            )
              if (0 === c) zc(S, t, k, k, x, a, f, l, w);
              else
                switch (d) {
                  case 100:
                  case 109:
                  case 115:
                    zc(
                      e,
                      k,
                      k,
                      n && sc(jc(e, k, k, 0, 0, o, l, b, o, (x = []), f), w),
                      o,
                      w,
                      f,
                      l,
                      n ? x : w,
                    );
                    break;
                  default:
                    zc(S, k, k, k, [''], w, f, l, w);
                }
        }
        (s = c = p = 0), (m = g = 1), (b = S = ''), (f = i);
        break;
      case 58:
        (f = 1 + lc(S)), (p = h);
      default:
        if (m < 1)
          if (123 == y) --m;
          else if (
            125 == y &&
            0 == m++ &&
            125 ==
              ((hc = pc > 0 ? ac(mc, --pc) : 0),
              fc--,
              10 === hc && ((fc = 1), cc--),
              hc)
          )
            continue;
        switch (((S += tc(y)), y * m)) {
          case 38:
            g = c > 0 ? 1 : ((S += '\f'), -1);
            break;
          case 44:
            (l[s++] = (lc(S) - 1) * g), (g = 1);
            break;
          case 64:
            45 === bc() && (S += _c(yc())),
              (d = bc()),
              (c = lc((b = S += Oc(xc())))),
              y++;
            break;
          case 45:
            45 === h && 2 == lc(S) && (m = 0);
        }
    }
  return a;
}
function jc(e, t, r, n, o, a, i, l, u, s, c) {
  for (
    var f = o - 1, d = 0 === o ? a : [''], p = uc(d), h = 0, m = 0, v = 0;
    h < n;
    ++h
  )
    for (var g = 0, y = ic(e, f + 1, (f = ec((m = i[h])))), b = e; g < p; ++g)
      (b = rc(m > 0 ? d[g] + ' ' + y : nc(y, /&\f/g, d[g]))) && (u[v++] = b);
  return vc(e, t, r, 0 === o ? 'rule' : l, u, s, c);
}
function Lc(e, t, r) {
  return vc(e, t, r, 'comm', tc(hc), ic(e, 2, -2), 0);
}
function Mc(e, t, r, n) {
  return vc(e, t, r, 'decl', ic(e, 0, n), ic(e, n + 1, -1), n);
}
function Fc(e, t) {
  switch (
    (function (e, t) {
      return (
        (((((((t << 2) ^ ac(e, 0)) << 2) ^ ac(e, 1)) << 2) ^ ac(e, 2)) << 2) ^
        ac(e, 3)
      );
    })(e, t)
  ) {
    case 5103:
      return Js + 'print-' + e + e;
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
      return Js + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Js + e + Zs + e + Ks + e + e;
    case 6828:
    case 4268:
      return Js + e + Ks + e + e;
    case 6165:
      return Js + e + Ks + 'flex-' + e + e;
    case 5187:
      return (
        Js + e + nc(e, /(\w+).+(:[^]+)/, '-webkit-box-$1$2-ms-flex-$1$2') + e
      );
    case 5443:
      return Js + e + Ks + 'flex-item-' + nc(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        Js +
        e +
        Ks +
        'flex-line-pack' +
        nc(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return Js + e + Ks + nc(e, 'shrink', 'negative') + e;
    case 5292:
      return Js + e + Ks + nc(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        Js +
        'box-' +
        nc(e, '-grow', '') +
        Js +
        e +
        Ks +
        nc(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return Js + nc(e, /([^-])(transform)/g, '$1-webkit-$2') + e;
    case 6187:
      return (
        nc(
          nc(nc(e, /(zoom-|grab)/, Js + '$1'), /(image-set)/, Js + '$1'),
          e,
          '',
        ) + e
      );
    case 5495:
    case 3959:
      return nc(e, /(image-set\([^]*)/, Js + '$1$`$1');
    case 4968:
      return (
        nc(
          nc(e, /(.+:)(flex-)?(.*)/, '-webkit-box-pack:$3-ms-flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        Js +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return nc(e, /(.+)-inline(.+)/, Js + '$1$2') + e;
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
        switch (ac(e, t + 1)) {
          case 109:
            if (45 !== ac(e, t + 4)) break;
          case 102:
            return (
              nc(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1-webkit-$2-$3$1' +
                  Zs +
                  (108 == ac(e, t + 3) ? '$3' : '$2-$3'),
              ) + e
            );
          case 115:
            return ~oc(e, 'stretch')
              ? Fc(nc(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (115 !== ac(e, t + 1)) break;
    case 6444:
      switch (ac(e, lc(e) - 3 - (~oc(e, '!important') && 10))) {
        case 107:
          return nc(e, ':', ':' + Js) + e;
        case 101:
          return (
            nc(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Js +
                (45 === ac(e, 14) ? 'inline-' : '') +
                'box$3$1' +
                Js +
                '$2$3$1' +
                Ks +
                '$2box$3',
            ) + e
          );
      }
      break;
    case 5936:
      switch (ac(e, t + 11)) {
        case 114:
          return Js + e + Ks + nc(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Js + e + Ks + nc(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Js + e + Ks + nc(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Js + e + Ks + e + e;
  }
  return e;
}
function Bc(e, t) {
  for (var r = '', n = uc(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || '';
  return r;
}
function Ic(e, t, r, n) {
  switch (e.type) {
    case '@import':
    case 'decl':
      return (e.return = e.return || e.value);
    case 'comm':
      return '';
    case 'rule':
      e.value = e.props.join(',');
  }
  return lc((r = Bc(e.children, n)))
    ? (e.return = e.value + '{' + r + '}')
    : '';
}
var Dc = function (e) {
  var t = new WeakMap();
  return function (r) {
    if (t.has(r)) return t.get(r);
    var n = e(r);
    return t.set(r, n), n;
  };
};
function Nc(e) {
  var t = Object.create(null);
  return function (r) {
    return void 0 === t[r] && (t[r] = e(r)), t[r];
  };
}
var Vc = function (e, t) {
    return Ec(
      (function (e, t) {
        var r = -1,
          n = 44;
        do {
          switch (kc(n)) {
            case 0:
              38 === n && 12 === bc() && (t[r] = 1), (e[r] += Oc(pc - 1));
              break;
            case 2:
              e[r] += _c(n);
              break;
            case 4:
              if (44 === n) {
                (e[++r] = 58 === bc() ? '&\f' : ''), (t[r] = e[r].length);
                break;
              }
            default:
              e[r] += tc(n);
          }
        } while ((n = yc()));
        return e;
      })(Sc(e), t),
    );
  },
  Wc = new WeakMap(),
  Hc = function (e) {
    if ('rule' === e.type && e.parent && e.length) {
      for (
        var t = e.value,
          r = e.parent,
          n = e.column === r.column && e.line === r.line;
        'rule' !== r.type;

      )
        if (!(r = r.parent)) return;
      if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Wc.get(r)) && !n) {
        Wc.set(e, !0);
        for (
          var o = [], a = Vc(t, o), i = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var s = 0; s < i.length; s++, u++)
            e.props[u] = o[l] ? a[l].replace(/&\f/g, i[s]) : i[s] + ' ' + a[l];
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
  $c = [
    function (e, t, r, n) {
      if (!e.return)
        switch (e.type) {
          case 'decl':
            e.return = Fc(e.value, e.length);
            break;
          case '@keyframes':
            return Bc([gc(nc(e.value, '@', '@' + Js), e, '')], n);
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
                    return Bc([gc(nc(t, /:(read-\w+)/, ':-moz-$1'), e, '')], n);
                  case '::placeholder':
                    return Bc(
                      [
                        gc(nc(t, /:(plac\w+)/, ':-webkit-input-$1'), e, ''),
                        gc(nc(t, /:(plac\w+)/, ':-moz-$1'), e, ''),
                        gc(nc(t, /:(plac\w+)/, Ks + 'input-$1'), e, ''),
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
      o,
      a = e.stylisPlugins || $c,
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
    var u,
      s,
      c,
      f,
      d = [
        Ic,
        ((f = function (e) {
          u.insert(e);
        }),
        function (e) {
          e.root || ((e = e.return) && f(e));
        }),
      ],
      p =
        ((s = [Hc, Uc].concat(a, d)),
        (c = uc(s)),
        function (e, t, r, n) {
          for (var o = '', a = 0; a < c; a++) o += s[a](e, t, r, n) || '';
          return o;
        });
    o = function (e, t, r, n) {
      (u = r),
        Bc(Rc(e ? e + '{' + t.styles + '}' : t.styles), p),
        n && (h.inserted[t.name] = !0);
    };
    var h = {
      key: t,
      sheet: new Gs({
        key: t,
        container: n,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
      }),
      nonce: e.nonce,
      inserted: i,
      registered: {},
      insert: o,
    };
    return h.sheet.hydrate(l), h;
  };
function Yc() {
  return (Yc =
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
var Xc = { exports: {} },
  Qc = {},
  Gc = 'function' == typeof Symbol && Symbol.for,
  Kc = Gc ? Symbol.for('react.element') : 60103,
  Zc = Gc ? Symbol.for('react.portal') : 60106,
  Jc = Gc ? Symbol.for('react.fragment') : 60107,
  ef = Gc ? Symbol.for('react.strict_mode') : 60108,
  tf = Gc ? Symbol.for('react.profiler') : 60114,
  rf = Gc ? Symbol.for('react.provider') : 60109,
  nf = Gc ? Symbol.for('react.context') : 60110,
  of = Gc ? Symbol.for('react.async_mode') : 60111,
  af = Gc ? Symbol.for('react.concurrent_mode') : 60111,
  lf = Gc ? Symbol.for('react.forward_ref') : 60112,
  uf = Gc ? Symbol.for('react.suspense') : 60113,
  sf = Gc ? Symbol.for('react.suspense_list') : 60120,
  cf = Gc ? Symbol.for('react.memo') : 60115,
  ff = Gc ? Symbol.for('react.lazy') : 60116,
  df = Gc ? Symbol.for('react.block') : 60121,
  pf = Gc ? Symbol.for('react.fundamental') : 60117,
  hf = Gc ? Symbol.for('react.responder') : 60118,
  mf = Gc ? Symbol.for('react.scope') : 60119;
function vf(e) {
  if ('object' == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case Kc:
        switch ((e = e.type)) {
          case of:
          case af:
          case Jc:
          case tf:
          case ef:
          case uf:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case nf:
              case lf:
              case ff:
              case cf:
              case rf:
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
function gf(e) {
  return vf(e) === af;
}
(Qc.AsyncMode = of),
  (Qc.ConcurrentMode = af),
  (Qc.ContextConsumer = nf),
  (Qc.ContextProvider = rf),
  (Qc.Element = Kc),
  (Qc.ForwardRef = lf),
  (Qc.Fragment = Jc),
  (Qc.Lazy = ff),
  (Qc.Memo = cf),
  (Qc.Portal = Zc),
  (Qc.Profiler = tf),
  (Qc.StrictMode = ef),
  (Qc.Suspense = uf),
  (Qc.isAsyncMode = function (e) {
    return gf(e) || vf(e) === of;
  }),
  (Qc.isConcurrentMode = gf),
  (Qc.isContextConsumer = function (e) {
    return vf(e) === nf;
  }),
  (Qc.isContextProvider = function (e) {
    return vf(e) === rf;
  }),
  (Qc.isElement = function (e) {
    return 'object' == typeof e && null !== e && e.$$typeof === Kc;
  }),
  (Qc.isForwardRef = function (e) {
    return vf(e) === lf;
  }),
  (Qc.isFragment = function (e) {
    return vf(e) === Jc;
  }),
  (Qc.isLazy = function (e) {
    return vf(e) === ff;
  }),
  (Qc.isMemo = function (e) {
    return vf(e) === cf;
  }),
  (Qc.isPortal = function (e) {
    return vf(e) === Zc;
  }),
  (Qc.isProfiler = function (e) {
    return vf(e) === tf;
  }),
  (Qc.isStrictMode = function (e) {
    return vf(e) === ef;
  }),
  (Qc.isSuspense = function (e) {
    return vf(e) === uf;
  }),
  (Qc.isValidElementType = function (e) {
    return (
      'string' == typeof e ||
      'function' == typeof e ||
      e === Jc ||
      e === af ||
      e === tf ||
      e === ef ||
      e === uf ||
      e === sf ||
      ('object' == typeof e &&
        null !== e &&
        (e.$$typeof === ff ||
          e.$$typeof === cf ||
          e.$$typeof === rf ||
          e.$$typeof === nf ||
          e.$$typeof === lf ||
          e.$$typeof === pf ||
          e.$$typeof === hf ||
          e.$$typeof === mf ||
          e.$$typeof === df))
    );
  }),
  (Qc.typeOf = vf),
  (Xc.exports = Qc);
var yf = Xc.exports,
  bf = {};
(bf[yf.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
}),
  (bf[yf.Memo] = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  });
function xf(e, t, r) {
  var n = '';
  return (
    r.split(' ').forEach(function (r) {
      void 0 !== e[r] ? t.push(e[r] + ';') : (n += r + ' ');
    }),
    n
  );
}
var wf = function (e, t, r) {
  var n = e.key + '-' + t.name;
  if (
    (!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles),
    void 0 === e.inserted[t.name])
  ) {
    var o = t;
    do {
      e.insert(t === o ? '.' + n : '', o, e.sheet, !0), (o = o.next);
    } while (void 0 !== o);
  }
};
var kf = {
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
  Sf = /[A-Z]|^ms/g,
  Ef = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  _f = function (e) {
    return 45 === e.charCodeAt(1);
  },
  Cf = function (e) {
    return null != e && 'boolean' != typeof e;
  },
  Pf = Nc(function (e) {
    return _f(e) ? e : e.replace(Sf, '-$&').toLowerCase();
  }),
  Af = function (e, t) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if ('string' == typeof t)
          return t.replace(Ef, function (e, t, r) {
            return (Of = { name: t, styles: r, next: Of }), t;
          });
    }
    return 1 === kf[e] || _f(e) || 'number' != typeof t || 0 === t
      ? t
      : t + 'px';
  };
function Tf(e, t, r) {
  if (null == r) return '';
  if (void 0 !== r.__emotion_styles) return r;
  switch (typeof r) {
    case 'boolean':
      return '';
    case 'object':
      if (1 === r.anim)
        return (Of = { name: r.name, styles: r.styles, next: Of }), r.name;
      if (void 0 !== r.styles) {
        var n = r.next;
        if (void 0 !== n)
          for (; void 0 !== n; )
            (Of = { name: n.name, styles: n.styles, next: Of }), (n = n.next);
        return r.styles + ';';
      }
      return (function (e, t, r) {
        var n = '';
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o++) n += Tf(e, t, r[o]) + ';';
        else
          for (var a in r) {
            var i = r[a];
            if ('object' != typeof i)
              null != t && void 0 !== t[i]
                ? (n += a + '{' + t[i] + '}')
                : Cf(i) && (n += Pf(a) + ':' + Af(a, i) + ';');
            else if (
              !Array.isArray(i) ||
              'string' != typeof i[0] ||
              (null != t && void 0 !== t[i[0]])
            ) {
              var l = Tf(e, t, i);
              switch (a) {
                case 'animation':
                case 'animationName':
                  n += Pf(a) + ':' + l + ';';
                  break;
                default:
                  n += a + '{' + l + '}';
              }
            } else
              for (var u = 0; u < i.length; u++)
                Cf(i[u]) && (n += Pf(a) + ':' + Af(a, i[u]) + ';');
          }
        return n;
      })(e, t, r);
    case 'function':
      if (void 0 !== e) {
        var o = Of,
          a = r(e);
        return (Of = o), Tf(e, t, a);
      }
  }
  if (null == t) return r;
  var i = t[r];
  return void 0 !== i ? i : r;
}
var Of,
  Rf = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  zf = function (e, t, r) {
    if (
      1 === e.length &&
      'object' == typeof e[0] &&
      null !== e[0] &&
      void 0 !== e[0].styles
    )
      return e[0];
    var n = !0,
      o = '';
    Of = void 0;
    var a = e[0];
    null == a || void 0 === a.raw
      ? ((n = !1), (o += Tf(r, t, a)))
      : (o += a[0]);
    for (var i = 1; i < e.length; i++) (o += Tf(r, t, e[i])), n && (o += a[i]);
    Rf.lastIndex = 0;
    for (var l, u = ''; null !== (l = Rf.exec(o)); ) u += '-' + l[1];
    return {
      name:
        (function (e) {
          for (var t, r = 0, n = 0, o = e.length; o >= 4; ++n, o -= 4)
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
          switch (o) {
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
        })(o) + u,
      styles: o,
      next: Of,
    };
  },
  jf = t.exports.createContext(
    'undefined' != typeof HTMLElement ? qc({ key: 'css' }) : null,
  );
jf.Provider;
var Lf = function (e) {
    return t.exports.forwardRef(function (r, n) {
      var o = t.exports.useContext(jf);
      return e(r, o, n);
    });
  },
  Mf = t.exports.createContext({}),
  Ff = Dc(function (e) {
    return Dc(function (t) {
      return (function (e, t) {
        return 'function' == typeof t ? t(e) : Yc({}, e, t);
      })(e, t);
    });
  }),
  Bf = function (e) {
    var r = t.exports.useContext(Mf);
    return (
      e.theme !== r && (r = Ff(r)(e.theme)),
      t.exports.createElement(Mf.Provider, { value: r }, e.children)
    );
  },
  If = Lf(function (e, r) {
    var n = e.styles,
      o = zf([n], void 0, t.exports.useContext(Mf)),
      a = t.exports.useRef();
    return (
      t.exports.useLayoutEffect(
        function () {
          var e = r.key + '-global',
            t = new Gs({
              key: e,
              nonce: r.sheet.nonce,
              container: r.sheet.container,
              speedy: r.sheet.isSpeedy,
            }),
            n = !1,
            i = document.querySelector(
              'style[data-emotion="' + e + ' ' + o.name + '"]',
            );
          return (
            r.sheet.tags.length && (t.before = r.sheet.tags[0]),
            null !== i &&
              ((n = !0), i.setAttribute('data-emotion', e), t.hydrate([i])),
            (a.current = [t, n]),
            function () {
              t.flush();
            }
          );
        },
        [r],
      ),
      t.exports.useLayoutEffect(
        function () {
          var e = a.current,
            t = e[0];
          if (e[1]) e[1] = !1;
          else {
            if ((void 0 !== o.next && wf(r, o.next, !0), t.tags.length)) {
              var n = t.tags[t.tags.length - 1].nextElementSibling;
              (t.before = n), t.flush();
            }
            r.insert('', o, t, !1);
          }
        },
        [r, o.name],
      ),
      null
    );
  });
function Df() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return zf(t);
}
var Nf = function () {
    var e = Df.apply(void 0, arguments),
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
  Vf = () =>
    t.exports.createElement(If, {
      styles:
        '\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;      \n        -moz-osx-font-smoothing: grayscale; \n        touch-action: manipulation; \n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: \'kern\';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type="button"]::-moz-focus-inner,\n      [type="reset"]::-moz-focus-inner,\n      [type="submit"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type="checkbox"],\n      [type="radio"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type="number"]::-webkit-inner-spin-button,\n      [type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      [type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role="button"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n        vertical-align: middle;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n    ',
    });
function Wf(e) {
  return 'number' == typeof e;
}
function Hf(e) {
  return Array.isArray(e);
}
function Uf(e) {
  return 'function' == typeof e;
}
function $f(e) {
  var t = typeof e;
  return null != e && ('object' === t || 'function' === t) && !Hf(e);
}
function qf(e) {
  return '[object String]' === Object.prototype.toString.call(e);
}
function Yf(e) {
  return /^var\(--.+\)$/.test(e);
}
var Xf = { exports: {} };
!(function (t, r) {
  var n = '__lodash_hash_undefined__',
    o = 9007199254740991,
    a = '[object Arguments]',
    i = '[object Function]',
    l = '[object Object]',
    u = /^\[object .+?Constructor\]$/,
    s = /^(?:0|[1-9]\d*)$/,
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
    (c[a] =
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
  var f = 'object' == typeof e && e && e.Object === Object && e,
    d = 'object' == typeof self && self && self.Object === Object && self,
    p = f || d || Function('return this')(),
    h = r && !r.nodeType && r,
    m = h && t && !t.nodeType && t,
    v = m && m.exports === h,
    g = v && f.process,
    y = (function () {
      try {
        var e = m && m.require && m.require('util').types;
        return e || (g && g.binding && g.binding('util'));
      } catch (t) {}
    })(),
    b = y && y.isTypedArray;
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
  var w,
    k,
    S,
    E = Array.prototype,
    _ = Function.prototype,
    C = Object.prototype,
    P = p['__core-js_shared__'],
    A = _.toString,
    T = C.hasOwnProperty,
    O = (w = /[^.]+$/.exec((P && P.keys && P.keys.IE_PROTO) || ''))
      ? 'Symbol(src)_1.' + w
      : '',
    R = C.toString,
    z = A.call(Object),
    j = RegExp(
      '^' +
        A.call(T)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    ),
    L = v ? p.Buffer : void 0,
    M = p.Symbol,
    F = p.Uint8Array,
    B = L ? L.allocUnsafe : void 0,
    I =
      ((k = Object.getPrototypeOf),
      (S = Object),
      function (e) {
        return k(S(e));
      }),
    D = Object.create,
    N = C.propertyIsEnumerable,
    V = E.splice,
    W = M ? M.toStringTag : void 0,
    H = (function () {
      try {
        var e = he(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch (t) {}
    })(),
    U = L ? L.isBuffer : void 0,
    $ = Math.max,
    q = Date.now,
    Y = he(p, 'Map'),
    X = he(Object, 'create'),
    Q = (function () {
      function e() {}
      return function (t) {
        if (!Ce(t)) return {};
        if (D) return D(t);
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
    var r = we(e),
      n = !r && xe(e),
      o = !r && !n && Se(e),
      a = !r && !n && !o && Ae(e),
      i = r || n || o || a,
      l = i
        ? (function (e, t) {
            for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
            return n;
          })(e.length, String)
        : [],
      u = l.length;
    for (var s in e)
      (!t && !T.call(e, s)) ||
        (i &&
          ('length' == s ||
            (o && ('offset' == s || 'parent' == s)) ||
            (a && ('buffer' == s || 'byteLength' == s || 'byteOffset' == s)) ||
            me(s, u))) ||
        l.push(s);
    return l;
  }
  function te(e, t, r) {
    ((void 0 !== r && !be(e[t], r)) || (void 0 === r && !(t in e))) &&
      oe(e, t, r);
  }
  function re(e, t, r) {
    var n = e[t];
    (T.call(e, t) && be(n, r) && (void 0 !== r || t in e)) || oe(e, t, r);
  }
  function ne(e, t) {
    for (var r = e.length; r--; ) if (be(e[r][0], t)) return r;
    return -1;
  }
  function oe(e, t, r) {
    '__proto__' == t && H
      ? H(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  (G.prototype.clear = function () {
    (this.__data__ = X ? X(null) : {}), (this.size = 0);
  }),
    (G.prototype.delete = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }),
    (G.prototype.get = function (e) {
      var t = this.__data__;
      if (X) {
        var r = t[e];
        return r === n ? void 0 : r;
      }
      return T.call(t, e) ? t[e] : void 0;
    }),
    (G.prototype.has = function (e) {
      var t = this.__data__;
      return X ? void 0 !== t[e] : T.call(t, e);
    }),
    (G.prototype.set = function (e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = X && void 0 === t ? n : t),
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
        (r == t.length - 1 ? t.pop() : V.call(t, r, 1), --this.size, !0)
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
          map: new (Y || K)(),
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
        if (!Y || n.length < 199)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Z(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    });
  var ae,
    ie = function (e, t, r) {
      for (var n = -1, o = Object(e), a = r(e), i = a.length; i--; ) {
        var l = a[ae ? i : ++n];
        if (!1 === t(o[l], l, o)) break;
      }
      return e;
    };
  function le(e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : W && W in Object(e)
      ? (function (e) {
          var t = T.call(e, W),
            r = e[W];
          try {
            e[W] = void 0;
            var n = !0;
          } catch (a) {}
          var o = R.call(e);
          n && (t ? (e[W] = r) : delete e[W]);
          return o;
        })(e)
      : (function (e) {
          return R.call(e);
        })(e);
  }
  function ue(e) {
    return Pe(e) && le(e) == a;
  }
  function se(e) {
    return (
      !(
        !Ce(e) ||
        (function (e) {
          return !!O && O in e;
        })(e)
      ) &&
      (Ee(e) ? j : u).test(
        (function (e) {
          if (null != e) {
            try {
              return A.call(e);
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
    var t = ve(e),
      r = [];
    for (var n in e) ('constructor' != n || (!t && T.call(e, n))) && r.push(n);
    return r;
  }
  function fe(e, t, r, n, o) {
    e !== t &&
      ie(
        t,
        function (a, i) {
          if ((o || (o = new J()), Ce(a)))
            !(function (e, t, r, n, o, a, i) {
              var u = ge(e, r),
                s = ge(t, r),
                c = i.get(s);
              if (c) return void te(e, r, c);
              var f = a ? a(u, s, r + '', e, t, i) : void 0,
                d = void 0 === f;
              if (d) {
                var p = we(s),
                  h = !p && Se(s),
                  m = !p && !h && Ae(s);
                (f = s),
                  p || h || m
                    ? we(u)
                      ? (f = u)
                      : Pe((x = u)) && ke(x)
                      ? (f = (function (e, t) {
                          var r = -1,
                            n = e.length;
                          t || (t = Array(n));
                          for (; ++r < n; ) t[r] = e[r];
                          return t;
                        })(u))
                      : h
                      ? ((d = !1),
                        (f = (function (e, t) {
                          if (t) return e.slice();
                          var r = e.length,
                            n = B ? B(r) : new e.constructor(r);
                          return e.copy(n), n;
                        })(s, !0)))
                      : m
                      ? ((d = !1),
                        (v = s),
                        (g = !0
                          ? ((y = v.buffer),
                            (b = new y.constructor(y.byteLength)),
                            new F(b).set(new F(y)),
                            b)
                          : v.buffer),
                        (f = new v.constructor(g, v.byteOffset, v.length)))
                      : (f = [])
                    : (function (e) {
                        if (!Pe(e) || le(e) != l) return !1;
                        var t = I(e);
                        if (null === t) return !0;
                        var r = T.call(t, 'constructor') && t.constructor;
                        return (
                          'function' == typeof r &&
                          r instanceof r &&
                          A.call(r) == z
                        );
                      })(s) || xe(s)
                    ? ((f = u),
                      xe(u)
                        ? (f = (function (e) {
                            return (function (e, t, r, n) {
                              var o = !r;
                              r || (r = {});
                              var a = -1,
                                i = t.length;
                              for (; ++a < i; ) {
                                var l = t[a],
                                  u = n ? n(r[l], e[l], l, r, e) : void 0;
                                void 0 === u && (u = e[l]),
                                  o ? oe(r, l, u) : re(r, l, u);
                              }
                              return r;
                            })(e, Te(e));
                          })(u))
                        : (Ce(u) && !Ee(u)) ||
                          (f = (function (e) {
                            return 'function' != typeof e.constructor || ve(e)
                              ? {}
                              : Q(I(e));
                          })(s)))
                    : (d = !1);
              }
              var v, g, y, b;
              var x;
              d && (i.set(s, f), o(f, s, n, a, i), i.delete(s));
              te(e, r, f);
            })(e, t, i, r, fe, n, o);
          else {
            var u = n ? n(ge(e, i), a, i + '', e, t, o) : void 0;
            void 0 === u && (u = a), te(e, i, u);
          }
        },
        Te,
      );
  }
  function de(e, t) {
    return ye(
      (function (e, t, r) {
        return (
          (t = $(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var n = arguments, o = -1, a = $(n.length - t, 0), i = Array(a);
              ++o < a;

            )
              i[o] = n[t + o];
            o = -1;
            for (var l = Array(t + 1); ++o < t; ) l[o] = n[o];
            return (l[t] = r(i)), x(e, this, l);
          }
        );
      })(e, t, ze),
      e + '',
    );
  }
  function pe(e, t) {
    var r,
      n,
      o = e.__data__;
    return (
      'string' == (n = typeof (r = t)) ||
      'number' == n ||
      'symbol' == n ||
      'boolean' == n
        ? '__proto__' !== r
        : null === r
    )
      ? o['string' == typeof t ? 'string' : 'hash']
      : o.map;
  }
  function he(e, t) {
    var r = (function (e, t) {
      return null == e ? void 0 : e[t];
    })(e, t);
    return se(r) ? r : void 0;
  }
  function me(e, t) {
    var r = typeof e;
    return (
      !!(t = null == t ? o : t) &&
      ('number' == r || ('symbol' != r && s.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
    );
  }
  function ve(e) {
    var t = e && e.constructor;
    return e === (('function' == typeof t && t.prototype) || C);
  }
  function ge(e, t) {
    if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t)
      return e[t];
  }
  var ye = (function (e) {
    var t = 0,
      r = 0;
    return function () {
      var n = q(),
        o = 16 - (n - r);
      if (((r = n), o > 0)) {
        if (++t >= 800) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  })(
    H
      ? function (e, t) {
          return H(e, 'toString', {
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
      : ze,
  );
  function be(e, t) {
    return e === t || (e != e && t != t);
  }
  var xe = ue(
      (function () {
        return arguments;
      })(),
    )
      ? ue
      : function (e) {
          return Pe(e) && T.call(e, 'callee') && !N.call(e, 'callee');
        },
    we = Array.isArray;
  function ke(e) {
    return null != e && _e(e.length) && !Ee(e);
  }
  var Se =
    U ||
    function () {
      return !1;
    };
  function Ee(e) {
    if (!Ce(e)) return !1;
    var t = le(e);
    return (
      t == i ||
      '[object GeneratorFunction]' == t ||
      '[object AsyncFunction]' == t ||
      '[object Proxy]' == t
    );
  }
  function _e(e) {
    return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= o;
  }
  function Ce(e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  }
  function Pe(e) {
    return null != e && 'object' == typeof e;
  }
  var Ae = b
    ? (function (e) {
        return function (t) {
          return e(t);
        };
      })(b)
    : function (e) {
        return Pe(e) && _e(e.length) && !!c[le(e)];
      };
  function Te(e) {
    return ke(e) ? ee(e, !0) : ce(e);
  }
  var Oe,
    Re =
      ((Oe = function (e, t, r, n) {
        fe(e, t, r, n);
      }),
      de(function (e, t) {
        var r = -1,
          n = t.length,
          o = n > 1 ? t[n - 1] : void 0,
          a = n > 2 ? t[2] : void 0;
        for (
          o = Oe.length > 3 && 'function' == typeof o ? (n--, o) : void 0,
            a &&
              (function (e, t, r) {
                if (!Ce(r)) return !1;
                var n = typeof t;
                return (
                  !!('number' == n
                    ? ke(r) && me(t, r.length)
                    : 'string' == n && (t in r)) && be(r[t], e)
                );
              })(t[0], t[1], a) &&
              ((o = n < 3 ? void 0 : o), (n = 1)),
            e = Object(e);
          ++r < n;

        ) {
          var i = t[r];
          i && Oe(e, i, r, o);
        }
        return e;
      }));
  function ze(e) {
    return e;
  }
  t.exports = Re;
})(Xf, Xf.exports);
var Qf = Xf.exports;
function Gf(e, t) {
  var r = {};
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n]);
    }),
    r
  );
}
var Kf,
  Zf,
  Jf =
    ((Kf = function (e, t, r, n) {
      var o = 'string' == typeof t ? t.split('.') : [t];
      for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
      return void 0 === e ? r : e;
    }),
    (Zf = new WeakMap()),
    (e, t, r, n) => {
      if (void 0 === e) return Kf(e, t, r);
      Zf.has(e) || Zf.set(e, new Map());
      var o = Zf.get(e);
      if (o.has(t)) return o.get(t);
      var a = Kf(e, t, r, n);
      return o.set(t, a), a;
    });
function ed(e, t) {
  var r = {};
  return (
    Object.keys(e).forEach((n) => {
      var o = e[n];
      t(o, n, e) && (r[n] = o);
    }),
    r
  );
}
var td = (e) => ed(e, (e) => null != e),
  rd = (e) => Object.keys(e);
function nd(e) {
  if (null == e) return e;
  var { unitless: t } = (function (e) {
    var t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), '');
    return { unitless: !r, value: t, unit: r };
  })(e);
  return t || Wf(e) ? e + 'px' : e;
}
var od = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  ad = (e) =>
    Object.entries(e)
      .sort(od)
      .reduce((e, t) => {
        var [r, n] = t;
        return (e[r] = n), e;
      }, {});
function id(e) {
  var t = ad(e);
  return Object.assign(Object.values(t), t);
}
function ld(e, t) {
  var r = [];
  return (
    e && r.push('@media screen and (min-width: ' + nd(e) + ')'),
    r.length > 0 && t && r.push('and'),
    t && r.push('@media screen and (max-width: ' + nd(t) + ')'),
    r.join(' ')
  );
}
function ud(e) {
  var t;
  if (!e) return null;
  e.base = null != (t = e.base) ? t : '0px';
  var r = id(e),
    n = Object.entries(e)
      .sort(od)
      .map((e, t, r) => {
        var n,
          [o, a] = e,
          [, i] = null != (n = r[t + 1]) ? n : [];
        return {
          breakpoint: o,
          minW: a,
          maxW: (i =
            parseFloat(i) > 0
              ? (function (e) {
                  var t;
                  if (!e) return e;
                  var r = (e = null != (t = nd(e)) ? t : e).endsWith('px')
                    ? -1
                    : -0.0635;
                  return Wf(e)
                    ? '' + (e + r)
                    : e.replace(
                        /([0-9]+\.?[0-9]*)/,
                        (e) => '' + (parseFloat(e) + r),
                      );
                })(i)
              : void 0),
          maxWQuery: ld(null, i),
          minWQuery: ld(a),
          minMaxQuery: ld(a, i),
        };
      }),
    o = (function (e) {
      var t = Object.keys(ad(e));
      return new Set(t);
    })(e),
    a = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(e) {
      var t = Object.keys(e);
      return t.length > 0 && t.every((e) => o.has(e));
    },
    asObject: ad(e),
    asArray: id(e),
    details: n,
    media: [null, ...r.map((e) => ld(e)).slice(1)],
    toArrayValue(e) {
      if (!$f(e)) throw new Error('toArrayValue: value must be an object');
      for (
        var t,
          r,
          n = a.map((t) => {
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
        var n = a[r];
        return null != n && null != t && (e[n] = t), e;
      }, {});
    },
  };
}
var sd = !(
    'undefined' == typeof window ||
    !window.document ||
    !window.document.createElement
  ),
  cd = (e) => (e ? '' : void 0),
  fd = (e) => !!e || void 0,
  dd = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return t.filter(Boolean).join(' ');
  };
function pd(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  return Uf(e) ? e(...r) : e;
}
function hd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (e) {
    t.some((t) => (null == t || t(e), null == e ? void 0 : e.defaultPrevented));
  };
}
var md = () => {},
  vd = (function (e) {
    var t;
    return function () {
      if (e) {
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        (t = e.apply(this, n)), (e = null);
      }
      return t;
    };
  })((e) => () => {
    var { condition: t, message: r } = e;
  }),
  gd = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return (e) => t.reduce((e, t) => t(e), e);
  },
  yd =
    'undefined' != typeof performance
      ? function () {
          return performance.now();
        }
      : function () {
          return Date.now();
        },
  bd =
    'undefined' != typeof window
      ? function (e) {
          return window.requestAnimationFrame(e);
        }
      : function (e) {
          return setTimeout(function () {
            return e(yd());
          }, 16.666666666666668);
        };
var xd = !0,
  wd = !1,
  kd = !1,
  Sd = { delta: 0, timestamp: 0 },
  Ed = ['read', 'update', 'preRender', 'render', 'postRender'],
  _d = Ed.reduce(function (e, t) {
    var r, n, o, a, i, l, u;
    return (
      (e[t] =
        ((r = function () {
          return (wd = !0);
        }),
        (n = []),
        (o = []),
        (a = 0),
        (i = !1),
        (l = new WeakSet()),
        (u = {
          schedule: function (e, t, r) {
            void 0 === t && (t = !1), void 0 === r && (r = !1);
            var u = r && i,
              s = u ? n : o;
            return (
              t && l.add(e),
              -1 === s.indexOf(e) && (s.push(e), u && i && (a = n.length)),
              e
            );
          },
          cancel: function (e) {
            var t = o.indexOf(e);
            -1 !== t && o.splice(t, 1), l.delete(e);
          },
          process: function (e) {
            var t;
            if (
              ((i = !0),
              (n = (t = [o, n])[0]),
              ((o = t[1]).length = 0),
              (a = n.length))
            )
              for (var s = 0; s < a; s++) {
                var c = n[s];
                c(e), l.has(c) && (u.schedule(c), r());
              }
            i = !1;
          },
        }))),
      e
    );
  }, {}),
  Cd = Ed.reduce(function (e, t) {
    var r = _d[t];
    return (
      (e[t] = function (e, t, n) {
        return (
          void 0 === t && (t = !1),
          void 0 === n && (n = !1),
          wd || Rd(),
          r.schedule(e, t, n)
        );
      }),
      e
    );
  }, {}),
  Pd = Ed.reduce(function (e, t) {
    return (e[t] = _d[t].cancel), e;
  }, {}),
  Ad = Ed.reduce(function (e, t) {
    return (
      (e[t] = function () {
        return _d[t].process(Sd);
      }),
      e
    );
  }, {}),
  Td = function (e) {
    return _d[e].process(Sd);
  },
  Od = function (e) {
    (wd = !1),
      (Sd.delta = xd
        ? 16.666666666666668
        : Math.max(Math.min(e - Sd.timestamp, 40), 1)),
      (Sd.timestamp = e),
      (kd = !0),
      Ed.forEach(Td),
      (kd = !1),
      wd && ((xd = !1), bd(Od));
  },
  Rd = function () {
    (wd = !0), (xd = !0), kd || bd(Od);
  },
  zd = function () {
    return Sd;
  };
function jd(e, t) {
  if (null != e)
    if (Uf(e)) e(t);
    else
      try {
        e.current = t;
      } catch (r) {
        throw new Error("Cannot assign value '" + t + "' to ref '" + e + "'");
      }
}
function Ld() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return (e) => {
    t.forEach((t) => jd(t, e));
  };
}
function Md(e) {
  void 0 === e && (e = {});
  var {
      strict: r = !0,
      errorMessage:
        n = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
      name: o,
    } = e,
    a = t.exports.createContext(void 0);
  return (
    (a.displayName = o),
    [
      a.Provider,
      function e() {
        var o = t.exports.useContext(a);
        if (!o && r) {
          var i = new Error(n);
          throw (
            ((i.name = 'ContextError'),
            null == Error.captureStackTrace || Error.captureStackTrace(i, e),
            i)
          );
        }
        return o;
      },
      a,
    ]
  );
}
Object.freeze(['base', 'sm', 'md', 'lg', 'xl', '2xl']);
var [Fd, Bd] = Md({ strict: !1, name: 'PortalManagerContext' });
function Id(e) {
  var { children: r, zIndex: n } = e;
  return t.exports.createElement(Fd, { value: { zIndex: n } }, r);
}
var Dd = { prefix: Math.round(1e10 * Math.random()), current: 0 },
  Nd = t.exports.createContext(Dd),
  Vd = t.exports.memo((e) => {
    var { children: r } = e,
      n = t.exports.useContext(Nd),
      o = n === Dd,
      a = t.exports.useMemo(
        () => ({ prefix: o ? 0 : ++n.prefix, current: 0 }),
        [o, n],
      );
    return t.exports.createElement(Nd.Provider, { value: a }, r);
  }),
  Wd = 'chakra-ui-light',
  Hd = 'chakra-ui-dark',
  Ud = { classList: { add: md, remove: md } };
function $d(e) {
  var t = sd ? document.body : Ud;
  t.classList.add(e ? Hd : Wd), t.classList.remove(e ? Wd : Hd);
}
var qd = '(prefers-color-scheme: dark)';
function Yd(e) {
  var t;
  return (
    null !=
    (t = (function (e) {
      var t = null == window.matchMedia ? void 0 : window.matchMedia(e);
      if (t) return !!t.media === t.matches;
    })(qd))
      ? t
      : 'dark' === e
  )
    ? 'dark'
    : 'light';
}
var Xd = () =>
    document.documentElement.style.getPropertyValue('--chakra-ui-color-mode'),
  Qd = (e) => {
    sd &&
      document.documentElement.style.setProperty('--chakra-ui-color-mode', e);
  },
  Gd = () => 'undefined' != typeof Storage,
  Kd = {
    get(e) {
      if (!Gd()) return e;
      try {
        var t = localStorage.getItem('chakra-ui-color-mode');
        return null != t ? t : e;
      } catch (r) {
        return e;
      }
    },
    set(e) {
      if (Gd())
        try {
          localStorage.setItem('chakra-ui-color-mode', e);
        } catch (t) {}
    },
    type: 'localStorage',
  },
  Zd = t.exports.createContext({}),
  Jd = () => {
    var e = t.exports.useContext(Zd);
    if (void 0 === e)
      throw new Error('useColorMode must be used within a ColorModeProvider');
    return e;
  };
function ep(e) {
  var {
      value: r,
      children: n,
      options: { useSystemColorMode: o, initialColorMode: a },
      colorModeManager: i = Kd,
    } = e,
    [l, u] = t.exports.useState('cookie' === i.type ? i.get(a) : a);
  t.exports.useEffect(() => {
    if (sd && 'localStorage' === i.type) {
      var e = o ? Yd(a) : Xd() || i.get();
      e && u(e);
    }
  }, [i, o, a]),
    t.exports.useEffect(() => {
      var e = 'dark' === l;
      $d(e), Qd(e ? 'dark' : 'light');
    }, [l]);
  var s = t.exports.useCallback(
      (e) => {
        i.set(e), u(e);
      },
      [i],
    ),
    c = t.exports.useCallback(() => {
      s('light' === l ? 'dark' : 'light');
    }, [l, s]);
  t.exports.useEffect(() => {
    var e;
    return (
      o &&
        (e = (function (e) {
          if (!('matchMedia' in window)) return md;
          var t = window.matchMedia(qd),
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
        })(s)),
      () => {
        e && o && e();
      }
    );
  }, [s, o]);
  var f = t.exports.useMemo(
    () => ({
      colorMode: null != r ? r : l,
      toggleColorMode: r ? md : c,
      setColorMode: r ? md : s,
    }),
    [l, s, c, r],
  );
  return t.exports.createElement(Zd.Provider, { value: f }, n);
}
var tp = (e, t) => (r) => {
  var n = String(t),
    o = e ? e + '.' + n : n;
  return $f(r.__cssMap) && o in r.__cssMap ? r.__cssMap[o].varRef : t;
};
function rp(e) {
  var { scale: t, transform: r, compose: n } = e;
  return (e, o) => {
    var a,
      i = tp(t, e)(o),
      l = null != (a = null == r ? void 0 : r(i, o)) ? a : i;
    return n && (l = n(l, o)), l;
  };
}
function np(e, t) {
  return (r) => {
    var n = { property: r, scale: e };
    return (n.transform = rp({ scale: e, transform: t })), n;
  };
}
var op = (e) => {
  var { rtl: t, ltr: r } = e;
  return (e) => ('rtl' === e.direction ? t : r);
};
var ap = [
  'rotate(var(--chakra-rotate, 0))',
  'scaleX(var(--chakra-scale-x, 1))',
  'scaleY(var(--chakra-scale-y, 1))',
  'skewX(var(--chakra-skew-x, 0))',
  'skewY(var(--chakra-skew-y, 0))',
];
var ip = {
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
  lp = {
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
var up = {
    'row-reverse': {
      space: '--chakra-space-x-reverse',
      divide: '--chakra-divide-x-reverse',
    },
    'column-reverse': {
      space: '--chakra-space-y-reverse',
      divide: '--chakra-divide-y-reverse',
    },
  },
  sp = {
    '& > :not(style) ~ :not(style)': {
      marginInlineStart:
        'calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))',
      marginInlineEnd:
        'calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))',
    },
  },
  cp = {
    '& > :not(style) ~ :not(style)': {
      marginTop:
        'calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))',
      marginBottom:
        'calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))',
    },
  };
function fp(e, t) {
  fp = function (e, t) {
    return new a(e, void 0, t);
  };
  var r = pp(RegExp),
    n = RegExp.prototype,
    o = new WeakMap();
  function a(e, t, n) {
    var a = r.call(this, e, t);
    return o.set(a, n || o.get(e)), a;
  }
  function i(e, t) {
    var r = o.get(t);
    return Object.keys(r).reduce(function (t, n) {
      return (t[n] = e[r[n]]), t;
    }, Object.create(null));
  }
  return (
    dp(a, r),
    (a.prototype.exec = function (e) {
      var t = n.exec.call(this, e);
      return t && (t.groups = i(t, this)), t;
    }),
    (a.prototype[Symbol.replace] = function (e, t) {
      if ('string' == typeof t) {
        var r = o.get(this);
        return n[Symbol.replace].call(
          this,
          e,
          t.replace(/\$<([^>]+)>/g, function (e, t) {
            return '$' + r[t];
          }),
        );
      }
      if ('function' == typeof t) {
        var a = this;
        return n[Symbol.replace].call(this, e, function () {
          var e = [];
          return (
            e.push.apply(e, arguments),
            'object' != typeof e[e.length - 1] && e.push(i(e, a)),
            t.apply(this, e)
          );
        });
      }
      return n[Symbol.replace].call(this, e, t);
    }),
    fp.apply(this, arguments)
  );
}
function dp(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && vp(e, t);
}
function pp(e) {
  var t = 'function' == typeof Map ? new Map() : void 0;
  return (pp = function (e) {
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
      return hp(e, arguments, gp(this).constructor);
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
      vp(r, e)
    );
  })(e);
}
function hp(e, t, r) {
  return (hp = mp()
    ? Reflect.construct
    : function (e, t, r) {
        var n = [null];
        n.push.apply(n, t);
        var o = new (Function.bind.apply(e, n))();
        return r && vp(o, r.prototype), o;
      }).apply(null, arguments);
}
function mp() {
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
function vp(e, t) {
  return (vp =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function gp(e) {
  return (gp = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
var yp = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  bp = new Set(Object.values(yp)),
  xp = new Set([
    'none',
    '-moz-initial',
    'inherit',
    'initial',
    'revert',
    'unset',
  ]),
  wp = (e) => e.trim();
var kp = (e) => qf(e) && e.includes('(') && e.includes(')'),
  Sp = (e) => (t) => e + '(' + t + ')',
  Ep = {
    filter: (e) => ('auto' !== e ? e : ip),
    backdropFilter: (e) => ('auto' !== e ? e : lp),
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
      })(Ep.px(e)),
    bgClip: (e) =>
      'text' === e
        ? { color: 'transparent', backgroundClip: 'text' }
        : { backgroundClip: e },
    transform: (e) =>
      'auto' === e
        ? [
            'translateX(var(--chakra-translate-x, 0))',
            'translateY(var(--chakra-translate-y, 0))',
            ...ap,
          ].join(' ')
        : 'auto-gpu' === e
        ? [
            'translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)',
            ...ap,
          ].join(' ')
        : e,
    px(e) {
      if (null == e) return e;
      var { unitless: t } = ((e) => {
        var t = parseFloat(e.toString()),
          r = e.toString().replace(String(t), '');
        return { unitless: !r, value: t, unit: r };
      })(e);
      return t || Wf(e) ? e + 'px' : e;
    },
    fraction: (e) => (!Wf(e) || e > 1 ? e : 100 * e + '%'),
    float: (e, t) =>
      'rtl' === t.direction ? { left: 'right', right: 'left' }[e] : e,
    degree(e) {
      if (Yf(e) || null == e) return e;
      var t = qf(e) && !e.endsWith('deg');
      return Wf(e) || t ? e + 'deg' : e;
    },
    gradient: (e, t) =>
      (function (e, t) {
        var r, n;
        if (null == e || xp.has(e)) return e;
        var o = fp(/(^[\x2DA-Za-z]+)\(((.*))\)/g, { type: 1, values: 2 }),
          { type: a, values: i } =
            null != (r = null == (n = o.exec(e)) ? void 0 : n.groups) ? r : {};
        if (!a || !i) return e;
        var l = a.includes('-gradient') ? a : a + '-gradient',
          [u, ...s] = i.split(',').map(wp).filter(Boolean);
        if (0 === (null == s ? void 0 : s.length)) return e;
        var c = u in yp ? yp[u] : u;
        return (
          s.unshift(c),
          l +
            '(' +
            s
              .map((e) => {
                if (bp.has(e)) return e;
                var r = e.indexOf(' '),
                  [n, o] = -1 !== r ? [e.substr(0, r), e.substr(r + 1)] : [e],
                  a = kp(o) ? o : o && o.split(' '),
                  i = 'colors.' + n,
                  l = i in t.__cssMap ? t.__cssMap[i].varRef : n;
                return a ? [l, a].join(' ') : l;
              })
              .join(', ') +
            ')'
        );
      })(e, null != t ? t : {}),
    blur: Sp('blur'),
    opacity: Sp('opacity'),
    brightness: Sp('brightness'),
    contrast: Sp('contrast'),
    dropShadow: Sp('drop-shadow'),
    grayscale: Sp('grayscale'),
    hueRotate: Sp('hue-rotate'),
    invert: Sp('invert'),
    saturate: Sp('saturate'),
    sepia: Sp('sepia'),
    bgImage: (e) => (null == e || kp(e) || xp.has(e) ? e : 'url(' + e + ')'),
    outline(e) {
      var t = '0' === String(e) || 'none' === String(e);
      return null !== e && t
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: e };
    },
    flexDirection(e) {
      var t,
        { space: r, divide: n } = null != (t = up[e]) ? t : {},
        o = { flexDirection: e };
      return r && (o[r] = 1), n && (o[n] = 1), o;
    },
  };
function _p() {
  return (_p =
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
var Cp = {
    borderWidths: np('borderWidths'),
    borderStyles: np('borderStyles'),
    colors: np('colors'),
    borders: np('borders'),
    radii: np('radii', Ep.px),
    space: np('space', Ep.px),
    spaceT: np('space', Ep.px),
    degreeT: (e) => ({ property: e, transform: Ep.degree }),
    prop: (e, t, r) =>
      _p(
        { property: e, scale: t },
        t && { transform: rp({ scale: t, transform: r }) },
      ),
    propT: (e, t) => ({ property: e, transform: t }),
    sizes: np('sizes', Ep.px),
    sizesT: np('sizes', Ep.fraction),
    shadows: np('shadows'),
    logical: function (e) {
      var { property: t, scale: r, transform: n } = e;
      return {
        scale: r,
        property: op(t),
        transform: r ? rp({ scale: r, compose: n }) : n,
      };
    },
    blur: np('blur', Ep.blur),
  },
  Pp = {
    background: Cp.colors('background'),
    backgroundColor: Cp.colors('backgroundColor'),
    backgroundImage: Cp.propT('backgroundImage', Ep.bgImage),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: Ep.bgClip },
    bgSize: Cp.prop('backgroundSize'),
    bgPosition: Cp.prop('backgroundPosition'),
    bg: Cp.colors('background'),
    bgColor: Cp.colors('backgroundColor'),
    bgPos: Cp.prop('backgroundPosition'),
    bgRepeat: Cp.prop('backgroundRepeat'),
    bgAttachment: Cp.prop('backgroundAttachment'),
    bgGradient: Cp.propT('backgroundImage', Ep.gradient),
    bgClip: { transform: Ep.bgClip },
  };
Object.assign(Pp, { bgImage: Pp.backgroundImage, bgImg: Pp.backgroundImage });
var Ap = {
  border: Cp.borders('border'),
  borderWidth: Cp.borderWidths('borderWidth'),
  borderStyle: Cp.borderStyles('borderStyle'),
  borderColor: Cp.colors('borderColor'),
  borderRadius: Cp.radii('borderRadius'),
  borderTop: Cp.borders('borderTop'),
  borderBlockStart: Cp.borders('borderBlockStart'),
  borderTopLeftRadius: Cp.radii('borderTopLeftRadius'),
  borderStartStartRadius: Cp.logical({
    scale: 'radii',
    property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
  }),
  borderEndStartRadius: Cp.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' },
  }),
  borderTopRightRadius: Cp.radii('borderTopRightRadius'),
  borderStartEndRadius: Cp.logical({
    scale: 'radii',
    property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
  }),
  borderEndEndRadius: Cp.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' },
  }),
  borderRight: Cp.borders('borderRight'),
  borderInlineEnd: Cp.borders('borderInlineEnd'),
  borderBottom: Cp.borders('borderBottom'),
  borderBlockEnd: Cp.borders('borderBlockEnd'),
  borderBottomLeftRadius: Cp.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: Cp.radii('borderBottomRightRadius'),
  borderLeft: Cp.borders('borderLeft'),
  borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
  borderInlineStartRadius: Cp.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
    },
  }),
  borderInlineEndRadius: Cp.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
      rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    },
  }),
  borderX: Cp.borders(['borderLeft', 'borderRight']),
  borderInline: Cp.borders('borderInline'),
  borderY: Cp.borders(['borderTop', 'borderBottom']),
  borderBlock: Cp.borders('borderBlock'),
  borderTopWidth: Cp.borderWidths('borderTopWidth'),
  borderBlockStartWidth: Cp.borderWidths('borderBlockStartWidth'),
  borderTopColor: Cp.colors('borderTopColor'),
  borderBlockStartColor: Cp.colors('borderBlockStartColor'),
  borderTopStyle: Cp.borderStyles('borderTopStyle'),
  borderBlockStartStyle: Cp.borderStyles('borderBlockStartStyle'),
  borderBottomWidth: Cp.borderWidths('borderBottomWidth'),
  borderBlockEndWidth: Cp.borderWidths('borderBlockEndWidth'),
  borderBottomColor: Cp.colors('borderBottomColor'),
  borderBlockEndColor: Cp.colors('borderBlockEndColor'),
  borderBottomStyle: Cp.borderStyles('borderBottomStyle'),
  borderBlockEndStyle: Cp.borderStyles('borderBlockEndStyle'),
  borderLeftWidth: Cp.borderWidths('borderLeftWidth'),
  borderInlineStartWidth: Cp.borderWidths('borderInlineStartWidth'),
  borderLeftColor: Cp.colors('borderLeftColor'),
  borderInlineStartColor: Cp.colors('borderInlineStartColor'),
  borderLeftStyle: Cp.borderStyles('borderLeftStyle'),
  borderInlineStartStyle: Cp.borderStyles('borderInlineStartStyle'),
  borderRightWidth: Cp.borderWidths('borderRightWidth'),
  borderInlineEndWidth: Cp.borderWidths('borderInlineEndWidth'),
  borderRightColor: Cp.colors('borderRightColor'),
  borderInlineEndColor: Cp.colors('borderInlineEndColor'),
  borderRightStyle: Cp.borderStyles('borderRightStyle'),
  borderInlineEndStyle: Cp.borderStyles('borderInlineEndStyle'),
  borderTopRadius: Cp.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: Cp.radii([
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ]),
  borderLeftRadius: Cp.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: Cp.radii([
    'borderTopRightRadius',
    'borderBottomRightRadius',
  ]),
};
Object.assign(Ap, {
  rounded: Ap.borderRadius,
  roundedTop: Ap.borderTopRadius,
  roundedTopLeft: Ap.borderTopLeftRadius,
  roundedTopRight: Ap.borderTopRightRadius,
  roundedTopStart: Ap.borderStartStartRadius,
  roundedTopEnd: Ap.borderStartEndRadius,
  roundedBottom: Ap.borderBottomRadius,
  roundedBottomLeft: Ap.borderBottomLeftRadius,
  roundedBottomRight: Ap.borderBottomRightRadius,
  roundedBottomStart: Ap.borderEndStartRadius,
  roundedBottomEnd: Ap.borderEndEndRadius,
  roundedLeft: Ap.borderLeftRadius,
  roundedRight: Ap.borderRightRadius,
  roundedStart: Ap.borderInlineStartRadius,
  roundedEnd: Ap.borderInlineEndRadius,
  borderStart: Ap.borderInlineStart,
  borderEnd: Ap.borderInlineEnd,
  borderTopStartRadius: Ap.borderStartStartRadius,
  borderTopEndRadius: Ap.borderStartEndRadius,
  borderBottomStartRadius: Ap.borderEndStartRadius,
  borderBottomEndRadius: Ap.borderEndEndRadius,
  borderStartRadius: Ap.borderInlineStartRadius,
  borderEndRadius: Ap.borderInlineEndRadius,
  borderStartWidth: Ap.borderInlineStartWidth,
  borderEndWidth: Ap.borderInlineEndWidth,
  borderStartColor: Ap.borderInlineStartColor,
  borderEndColor: Ap.borderInlineEndColor,
  borderStartStyle: Ap.borderInlineStartStyle,
  borderEndStyle: Ap.borderInlineEndStyle,
});
var Tp = {
    color: Cp.colors('color'),
    textColor: Cp.colors('color'),
    fill: Cp.colors('fill'),
    stroke: Cp.colors('stroke'),
  },
  Op = {
    boxShadow: Cp.shadows('boxShadow'),
    mixBlendMode: !0,
    blendMode: Cp.prop('mixBlendMode'),
    backgroundBlendMode: !0,
    bgBlendMode: Cp.prop('backgroundBlendMode'),
    opacity: !0,
  };
Object.assign(Op, { shadow: Op.boxShadow });
var Rp = {
    filter: { transform: Ep.filter },
    blur: Cp.blur('--chakra-blur'),
    brightness: Cp.propT('--chakra-brightness', Ep.brightness),
    contrast: Cp.propT('--chakra-contrast', Ep.contrast),
    hueRotate: Cp.degreeT('--chakra-hue-rotate'),
    invert: Cp.propT('--chakra-invert', Ep.invert),
    saturate: Cp.propT('--chakra-saturate', Ep.saturate),
    dropShadow: Cp.propT('--chakra-drop-shadow', Ep.dropShadow),
    backdropFilter: { transform: Ep.backdropFilter },
    backdropBlur: Cp.blur('--chakra-backdrop-blur'),
    backdropBrightness: Cp.propT('--chakra-backdrop-brightness', Ep.brightness),
    backdropContrast: Cp.propT('--chakra-backdrop-contrast', Ep.contrast),
    backdropHueRotate: Cp.degreeT('--chakra-backdrop-hue-rotate'),
    backdropInvert: Cp.propT('--chakra-backdrop-invert', Ep.invert),
    backdropSaturate: Cp.propT('--chakra-backdrop-saturate', Ep.saturate),
  },
  zp = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: Ep.flexDirection },
    experimental_spaceX: {
      static: sp,
      transform: rp({
        scale: 'space',
        transform: (e) => (null !== e ? { '--chakra-space-x': e } : null),
      }),
    },
    experimental_spaceY: {
      static: cp,
      transform: rp({
        scale: 'space',
        transform: (e) => (null != e ? { '--chakra-space-y': e } : null),
      }),
    },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: Cp.sizes('flexBasis'),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
  };
Object.assign(zp, { flexDir: zp.flexDirection });
var jp = {
    gridGap: Cp.space('gridGap'),
    gridColumnGap: Cp.space('gridColumnGap'),
    gridRowGap: Cp.space('gridRowGap'),
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
  Lp = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Ep.outline },
    outlineOffset: !0,
    outlineColor: Cp.colors('outlineColor'),
  },
  Mp = {
    width: Cp.sizesT('width'),
    inlineSize: Cp.sizesT('inlineSize'),
    height: Cp.sizes('height'),
    blockSize: Cp.sizes('blockSize'),
    boxSize: Cp.sizes(['width', 'height']),
    minWidth: Cp.sizes('minWidth'),
    minInlineSize: Cp.sizes('minInlineSize'),
    minHeight: Cp.sizes('minHeight'),
    minBlockSize: Cp.sizes('minBlockSize'),
    maxWidth: Cp.sizes('maxWidth'),
    maxInlineSize: Cp.sizes('maxInlineSize'),
    maxHeight: Cp.sizes('maxHeight'),
    maxBlockSize: Cp.sizes('maxBlockSize'),
    d: Cp.prop('display'),
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
    float: Cp.propT('float', Ep.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(Mp, {
  w: Mp.width,
  h: Mp.height,
  minW: Mp.minWidth,
  maxW: Mp.maxWidth,
  minH: Mp.minHeight,
  maxH: Mp.maxHeight,
  overscroll: Mp.overscrollBehavior,
  overscrollX: Mp.overscrollBehaviorX,
  overscrollY: Mp.overscrollBehaviorY,
});
var Fp = {
    listStyleType: !0,
    listStylePosition: !0,
    listStylePos: Cp.prop('listStylePosition'),
    listStyleImage: !0,
    listStyleImg: Cp.prop('listStyleImage'),
  },
  Bp = {
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
  Ip = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  Dp = (e, t, r) => {
    var n = {},
      o = Jf(e, t, {});
    for (var a in o) {
      (a in r && null != r[a]) || (n[a] = o[a]);
    }
    return n;
  },
  Np = {
    srOnly: { transform: (e) => (!0 === e ? Bp : 'focusable' === e ? Ip : {}) },
    layerStyle: {
      processResult: !0,
      transform: (e, t, r) => Dp(t, 'layerStyles.' + e, r),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, r) => Dp(t, 'textStyles.' + e, r),
    },
    apply: { processResult: !0, transform: (e, t, r) => Dp(t, e, r) },
  },
  Vp = {
    position: !0,
    pos: Cp.prop('position'),
    zIndex: Cp.prop('zIndex', 'zIndices'),
    inset: Cp.spaceT(['top', 'right', 'bottom', 'left']),
    insetX: Cp.spaceT(['left', 'right']),
    insetInline: Cp.spaceT('insetInline'),
    insetY: Cp.spaceT(['top', 'bottom']),
    insetBlock: Cp.spaceT('insetBlock'),
    top: Cp.spaceT('top'),
    insetBlockStart: Cp.spaceT('insetBlockStart'),
    bottom: Cp.spaceT('bottom'),
    insetBlockEnd: Cp.spaceT('insetBlockEnd'),
    left: Cp.spaceT('left'),
    insetInlineStart: Cp.logical({
      scale: 'space',
      property: { ltr: 'left', rtl: 'right' },
    }),
    right: Cp.spaceT('right'),
    insetInlineEnd: Cp.logical({
      scale: 'space',
      property: { ltr: 'right', rtl: 'left' },
    }),
  };
Object.assign(Vp, {
  insetStart: Vp.insetInlineStart,
  insetEnd: Vp.insetInlineEnd,
});
var Wp = {
    ring: { transform: Ep.ring },
    ringColor: Cp.colors('--chakra-ring-color'),
    ringOffset: Cp.prop('--chakra-ring-offset-width'),
    ringOffsetColor: Cp.colors('--chakra-ring-offset-color'),
    ringInset: Cp.prop('--chakra-ring-inset'),
  },
  Hp = {
    margin: Cp.spaceT('margin'),
    marginTop: Cp.spaceT('marginTop'),
    marginBlockStart: Cp.spaceT('marginBlockStart'),
    marginRight: Cp.spaceT('marginRight'),
    marginInlineEnd: Cp.spaceT('marginInlineEnd'),
    marginBottom: Cp.spaceT('marginBottom'),
    marginBlockEnd: Cp.spaceT('marginBlockEnd'),
    marginLeft: Cp.spaceT('marginLeft'),
    marginInlineStart: Cp.spaceT('marginInlineStart'),
    marginX: Cp.spaceT(['marginInlineStart', 'marginInlineEnd']),
    marginInline: Cp.spaceT('marginInline'),
    marginY: Cp.spaceT(['marginTop', 'marginBottom']),
    marginBlock: Cp.spaceT('marginBlock'),
    padding: Cp.space('padding'),
    paddingTop: Cp.space('paddingTop'),
    paddingBlockStart: Cp.space('paddingBlockStart'),
    paddingRight: Cp.space('paddingRight'),
    paddingBottom: Cp.space('paddingBottom'),
    paddingBlockEnd: Cp.space('paddingBlockEnd'),
    paddingLeft: Cp.space('paddingLeft'),
    paddingInlineStart: Cp.space('paddingInlineStart'),
    paddingInlineEnd: Cp.space('paddingInlineEnd'),
    paddingX: Cp.space(['paddingInlineStart', 'paddingInlineEnd']),
    paddingInline: Cp.space('paddingInline'),
    paddingY: Cp.space(['paddingTop', 'paddingBottom']),
    paddingBlock: Cp.space('paddingBlock'),
  };
Object.assign(Hp, {
  m: Hp.margin,
  mt: Hp.marginTop,
  mr: Hp.marginRight,
  me: Hp.marginInlineEnd,
  marginEnd: Hp.marginInlineEnd,
  mb: Hp.marginBottom,
  ml: Hp.marginLeft,
  ms: Hp.marginInlineStart,
  marginStart: Hp.marginInlineStart,
  mx: Hp.marginX,
  my: Hp.marginY,
  p: Hp.padding,
  pt: Hp.paddingTop,
  py: Hp.paddingY,
  px: Hp.paddingX,
  pb: Hp.paddingBottom,
  pl: Hp.paddingLeft,
  ps: Hp.paddingInlineStart,
  paddingStart: Hp.paddingInlineStart,
  pr: Hp.paddingRight,
  pe: Hp.paddingInlineEnd,
  paddingEnd: Hp.paddingInlineEnd,
});
var Up = {
    textDecorationColor: Cp.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: Cp.shadows('textShadow'),
  },
  $p = {
    clipPath: !0,
    transform: Cp.propT('transform', Ep.transform),
    transformOrigin: !0,
    translateX: Cp.spaceT('--chakra-translate-x'),
    translateY: Cp.spaceT('--chakra-translate-y'),
    skewX: Cp.degreeT('--chakra-skew-x'),
    skewY: Cp.degreeT('--chakra-skew-y'),
    scaleX: Cp.prop('--chakra-scale-x'),
    scaleY: Cp.prop('--chakra-scale-y'),
    scale: Cp.prop(['--chakra-scale-x', '--chakra-scale-y']),
    rotate: Cp.degreeT('--chakra-rotate'),
  },
  qp = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: Cp.prop('transitionDuration', 'transition.duration'),
    transitionProperty: Cp.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: Cp.prop(
      'transitionTimingFunction',
      'transition.easing',
    ),
  },
  Yp = {
    fontFamily: Cp.prop('fontFamily', 'fonts'),
    fontSize: Cp.prop('fontSize', 'fontSizes', Ep.px),
    fontWeight: Cp.prop('fontWeight', 'fontWeights'),
    lineHeight: Cp.prop('lineHeight', 'lineHeights'),
    letterSpacing: Cp.prop('letterSpacing', 'letterSpacings'),
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
  Xp = (e) => e + ':focus &, ' + e + '[data-focus] &',
  Qp = (e) => e + ':active &, ' + e + '[data-active] &',
  Gp = (e) => e + ':disabled &, ' + e + '[data-disabled] &',
  Kp = (e) => e + ':invalid &, ' + e + '[data-invalid] &',
  Zp = (e) => e + ':checked &, ' + e + '[data-checked] &',
  Jp = (e) => eh(e, '[role=group]', '[data-group]', '.group'),
  eh = function (e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    return r.map(e).join(', ');
  },
  th = {
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
    _groupHover: Jp((e) => e + ':hover &, ' + e + '[data-hover] &'),
    _groupFocus: Jp(Xp),
    _groupActive: Jp(Qp),
    _groupDisabled: Jp(Gp),
    _groupInvalid: Jp(Kp),
    _groupChecked: Jp(Zp),
    _placeholder: '&::placeholder',
    _fullScreen: '&:fullscreen',
    _selection: '&::selection',
    _rtl: '[dir=rtl] &',
    _mediaDark: '@media (prefers-color-scheme: dark)',
    _dark: '.chakra-ui-dark &, [data-theme=dark] &, &[data-theme=dark]',
    _light: '.chakra-ui-light &, [data-theme=light] &, &[data-theme=light]',
  },
  rh = rd(th);
function nh() {
  return (nh =
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
var oh = Qf(
  {},
  Pp,
  Ap,
  Tp,
  zp,
  Mp,
  Rp,
  Wp,
  Lp,
  jp,
  Np,
  Vp,
  Op,
  Hp,
  Yp,
  Up,
  $p,
  Fp,
  qp,
);
Object.assign({}, Hp, Mp, zp, jp, Vp);
var ah = [...rd(oh), ...rh],
  ih = nh({}, oh, th),
  lh = (e, t) => e.startsWith('--') && qf(t) && !Yf(t),
  uh = (e, t) => {
    var r, n;
    if (null == t) return t;
    var o = (t) => {
        var r, n;
        return null == (r = e.__cssMap) || null == (n = r[t])
          ? void 0
          : n.varRef;
      },
      a = (e) => {
        var t;
        return null != (t = o(e)) ? t : e;
      },
      i = t.split(',').map((e) => e.trim()),
      [l, u] = i;
    return (t = null != (r = null != (n = o(l)) ? n : a(u)) ? r : a(t));
  };
function sh(e) {
  var { configs: t = {}, pseudos: r = {}, theme: n } = e;
  return function e(o, a) {
    void 0 === a && (a = !1);
    var i = pd(o, n),
      l = ((e) => (t) => {
        if (!t.__breakpoints) return e;
        var { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints,
          a = {};
        for (var i in e) {
          var l = pd(e[i], t);
          if (null != l)
            if (((l = $f(l) && r(l) ? n(l) : l), Array.isArray(l)))
              for (var u = l.slice(0, o.length).length, s = 0; s < u; s += 1) {
                var c = null == o ? void 0 : o[s];
                c
                  ? ((a[c] = a[c] || {}), null != l[s] && (a[c][i] = l[s]))
                  : (a[i] = l[s]);
              }
            else a[i] = l;
        }
        return a;
      })(i)(n),
      u = {};
    for (var s in l) {
      var c,
        f,
        d,
        p,
        h,
        m = pd(l[s], n);
      s in r && (s = r[s]), lh(s, m) && (m = uh(n, m));
      var v = t[s];
      if ((!0 === v && (v = { property: s }), $f(m))) {
        var g;
        (u[s] = null != (g = u[s]) ? g : {}), (u[s] = Qf({}, u[s], e(m, !0)));
      } else {
        var y =
          null !=
          (c =
            null == (f = v) || null == f.transform
              ? void 0
              : f.transform(m, n, i))
            ? c
            : m;
        y = null != (d = v) && d.processResult ? e(y, !0) : y;
        var b = pd(null == (p = v) ? void 0 : p.property, n);
        if (!a && null != (h = v) && h.static) {
          var x = pd(v.static, n);
          u = Qf({}, u, x);
        }
        if (b && Array.isArray(b)) for (var w of b) u[w] = y;
        else
          b
            ? '&' === b && $f(y)
              ? (u = Qf({}, u, y))
              : (u[b] = y)
            : $f(y)
            ? (u = Qf({}, u, y))
            : (u[s] = y);
      }
    }
    return u;
  };
}
var ch = (e) => (t) => sh({ theme: t, pseudos: th, configs: oh })(e);
function fh(e) {
  return $f(e) && e.reference ? e.reference : String(e);
}
var dh = function (e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    return r
      .map(fh)
      .join(' ' + e + ' ')
      .replace(/calc/g, '');
  },
  ph = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + dh('+', ...t) + ')';
  },
  hh = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + dh('-', ...t) + ')';
  },
  mh = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + dh('*', ...t) + ')';
  },
  vh = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + dh('/', ...t) + ')';
  },
  gh = (e) => {
    var t = fh(e);
    return null == t || Number.isNaN(parseFloat(t))
      ? mh(t, -1)
      : String(t).startsWith('-')
      ? String(t).slice(1)
      : '-' + t;
  },
  yh = Object.assign(
    (e) => ({
      add: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return yh(ph(e, ...r));
      },
      subtract: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return yh(hh(e, ...r));
      },
      multiply: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return yh(mh(e, ...r));
      },
      divide: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return yh(vh(e, ...r));
      },
      negate: () => yh(gh(e)),
      toString: () => e.toString(),
    }),
    { add: ph, subtract: hh, multiply: mh, divide: vh, negate: gh },
  );
function bh(e) {
  var t = (function (e, t) {
    return void 0 === t && (t = '-'), e.replace(/\s+/g, t);
  })(e.toString());
  return t.includes('\\.')
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? t.replace('.', '\\.')
    : e;
}
function xh(e, t) {
  return 'var(' + bh(e) + (t ? ', ' + t : '') + ')';
}
function wh(e, t) {
  return (
    void 0 === t && (t = ''),
    '--' +
      (function (e, t) {
        return void 0 === t && (t = ''), [t, bh(e)].filter(Boolean).join('-');
      })(e, t)
  );
}
function kh(e, t, r) {
  var n = wh(e, r);
  return { variable: n, reference: xh(n, t) };
}
function Sh() {
  return (Sh =
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
function Eh(e, t) {
  var r = { cssMap: {}, cssVars: {} };
  return (
    (function (e, t) {
      (function e(r, n) {
        return (
          void 0 === n && (n = []),
          Hf(r)
            ? r.map((t, r) => e(t, [...n, String(r)]))
            : $f(r)
            ? Object.fromEntries(
                Object.entries(r).map((t) => {
                  var [r, o] = t;
                  return [r, e(o, [...n, r])];
                }),
              )
            : t(r, n)
        );
      })(e);
    })(e, (e, n) => {
      var o,
        [a] = n,
        i = null != (o = _h[a]) ? o : _h.defaultHandler,
        { cssVars: l, cssMap: u } = i(n, e, t);
      Object.assign(r.cssVars, l), Object.assign(r.cssMap, u);
    }),
    r
  );
}
var _h = {
  space: (e, t, r) => {
    var n = _h.defaultHandler(e, t, r),
      [o, ...a] = e,
      i = o + '.-' + a.join('.'),
      l = e.join('-'),
      { variable: u, reference: s } = kh(l, void 0, r.cssVarPrefix),
      c = yh.negate(t),
      f = yh.negate(s);
    return {
      cssVars: n.cssVars,
      cssMap: Sh({}, n.cssMap, {
        [i]: { value: '' + c, var: '' + u, varRef: f },
      }),
    };
  },
  defaultHandler: (e, t, r) => {
    var n = e.join('.'),
      o = e.join('-'),
      { variable: a, reference: i } = kh(o, void 0, r.cssVarPrefix);
    return {
      cssVars: { [a]: t },
      cssMap: { [n]: { value: t, var: a, varRef: i } },
    };
  },
};
var Ch = [
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
function Ph(e) {
  return (function (e, t) {
    if (null == e) return {};
    var r,
      n,
      o = {},
      a = Object.keys(e);
    for (n = 0; n < a.length; n++)
      (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
    return o;
  })(e, ['__cssMap', '__cssVars', '__breakpoints']);
}
function Ah() {
  return (Ah =
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
function Th(e) {
  var t,
    r = Ph(e),
    n = (function (e) {
      var t, r;
      return (
        (t = e),
        (r = {}),
        Ch.forEach((e) => {
          e in t && (r[e] = t[e]);
        }),
        r
      );
    })(r),
    o = null == (t = r.config) ? void 0 : t.cssVarPrefix,
    { cssMap: a, cssVars: i } = Eh(n, { cssVarPrefix: o });
  return (
    Object.assign(r, {
      __cssVars: Ah(
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
      __cssMap: a,
      __breakpoints: ud(r.breakpoints),
    }),
    r
  );
}
var Oh = 'undefined' != typeof Element,
  Rh = 'function' == typeof Map,
  zh = 'function' == typeof Set,
  jh = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
function Lh(e, t) {
  if (e === t) return !0;
  if (e && t && 'object' == typeof e && 'object' == typeof t) {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o, a;
    if (Array.isArray(e)) {
      if ((r = e.length) != t.length) return !1;
      for (n = r; 0 != n--; ) if (!Lh(e[n], t[n])) return !1;
      return !0;
    }
    if (Rh && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Lh(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (zh && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (jh && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
    for (n = r; 0 != n--; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (Oh && e instanceof Element) return !1;
    for (n = r; 0 != n--; )
      if (
        (('_owner' !== o[n] && '__v' !== o[n] && '__o' !== o[n]) ||
          !e.$$typeof) &&
        !Lh(e[o[n]], t[o[n]])
      )
        return !1;
    return !0;
  }
  return e != e && t != t;
}
var Mh = function (e, t) {
    try {
      return Lh(e, t);
    } catch (r) {
      if ((r.message || '').match(/stack|recursion/i))
        return (
          console.warn('react-fast-compare cannot handle circular refs'), !1
        );
      throw r;
    }
  },
  Fh = (e) => {
    var { cssVarsRoot: r = ':host, :root', theme: n, children: o } = e,
      a = t.exports.useMemo(() => Th(n), [n]);
    return t.exports.createElement(
      Bf,
      { theme: a },
      t.exports.createElement(If, { styles: (e) => ({ [r]: e.__cssVars }) }),
      o,
    );
  };
Md({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
});
var Bh = () => {
  var { colorMode: e } = Jd();
  return t.exports.createElement(If, {
    styles: (t) => {
      var r = pd(Jf(t, 'styles.global'), { theme: t, colorMode: e });
      if (r) return ch(r)(t);
    },
  });
};
function Ih(e) {
  return Gf(e, ['styleConfig', 'size', 'variant', 'colorScheme']);
}
function Dh() {
  return (Dh =
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
function Nh() {
  return Dh({}, Jd(), {
    theme: (function () {
      var e = t.exports.useContext(Mf);
      if (!e)
        throw Error(
          'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`',
        );
      return e;
    })(),
  });
}
var Vh =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Wh = Nc(function (e) {
    return (
      Vh.test(e) ||
      (111 === e.charCodeAt(0) &&
        110 === e.charCodeAt(1) &&
        e.charCodeAt(2) < 91)
    );
  }),
  Hh = function (e) {
    return 'theme' !== e;
  },
  Uh = function (e) {
    return 'string' == typeof e && e.charCodeAt(0) > 96 ? Wh : Hh;
  },
  $h = function (e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n =
        e.__emotion_forwardProp && o
          ? function (t) {
              return e.__emotion_forwardProp(t) && o(t);
            }
          : o;
    }
    return 'function' != typeof n && r && (n = e.__emotion_forwardProp), n;
  },
  qh = function e(r, n) {
    var o,
      a,
      i = r.__emotion_real === r,
      l = (i && r.__emotion_base) || r;
    void 0 !== n && ((o = n.label), (a = n.target));
    var u = $h(r, n, i),
      s = u || Uh(l),
      c = !s('as');
    return function () {
      var f = arguments,
        d =
          i && void 0 !== r.__emotion_styles ? r.__emotion_styles.slice(0) : [];
      if (
        (void 0 !== o && d.push('label:' + o + ';'),
        null == f[0] || void 0 === f[0].raw)
      )
        d.push.apply(d, f);
      else {
        d.push(f[0][0]);
        for (var p = f.length, h = 1; h < p; h++) d.push(f[h], f[0][h]);
      }
      var m = Lf(function (e, r, n) {
        var o = (c && e.as) || l,
          i = '',
          f = [],
          p = e;
        if (null == e.theme) {
          for (var h in ((p = {}), e)) p[h] = e[h];
          p.theme = t.exports.useContext(Mf);
        }
        'string' == typeof e.className
          ? (i = xf(r.registered, f, e.className))
          : null != e.className && (i = e.className + ' ');
        var m = zf(d.concat(f), r.registered, p);
        wf(r, m, 'string' == typeof o),
          (i += r.key + '-' + m.name),
          void 0 !== a && (i += ' ' + a);
        var v = c && void 0 === u ? Uh(o) : s,
          g = {};
        for (var y in e) (c && 'as' === y) || (v(y) && (g[y] = e[y]));
        return (g.className = i), (g.ref = n), t.exports.createElement(o, g);
      });
      return (
        (m.displayName =
          void 0 !== o
            ? o
            : 'Styled(' +
              ('string' == typeof l
                ? l
                : l.displayName || l.name || 'Component') +
              ')'),
        (m.defaultProps = r.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = l),
        (m.__emotion_styles = d),
        (m.__emotion_forwardProp = u),
        Object.defineProperty(m, 'toString', {
          value: function () {
            return '.' + a;
          },
        }),
        (m.withComponent = function (t, r) {
          return e(t, Yc({}, n, r, { shouldForwardProp: $h(m, r, !0) })).apply(
            void 0,
            d,
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
  qh[e] = qh(e);
});
var Yh = new Set([
    ...ah,
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
  Xh = new Set(['htmlWidth', 'htmlHeight', 'htmlSize']),
  Qh = (e) => Xh.has(e) || !Yh.has(e);
function Gh(e, t) {
  if (null == e) return {};
  var r,
    n,
    o = {},
    a = Object.keys(e);
  for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
  return o;
}
var Kh = (e) => {
  var { baseStyle: t } = e;
  return (e) => {
    var { css: r, __css: n, sx: o } = e,
      a = ed(Gh(e, ['theme', 'css', '__css', 'sx']), (e, t) =>
        ((e) => e in ih)(t),
      ),
      i = pd(t, e),
      l = Object.assign({}, n, i, td(a), o),
      u = ch(l)(e.theme);
    return r ? [u, r] : u;
  };
};
var Zh = function (e, t) {
  var r = null != t ? t : {},
    { baseStyle: n } = r,
    o = Gh(r, ['baseStyle']);
  o.shouldForwardProp || (o.shouldForwardProp = Qh);
  var a = Kh({ baseStyle: n });
  return qh(e, o)(a);
};
function Jh(e) {
  return t.exports.forwardRef(e);
}
function em(e, r, n) {
  var o;
  void 0 === r && (r = {}), void 0 === n && (n = {});
  var { styleConfig: a } = r,
    i = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++)
        (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
    })(r, ['styleConfig']),
    { theme: l, colorMode: u } = Nh(),
    s = Jf(l, 'components.' + e),
    c = a || s,
    f = Qf(
      { theme: l, colorMode: u },
      null != (o = null == c ? void 0 : c.defaultProps) ? o : {},
      td(Gf(i, ['children'])),
    ),
    d = t.exports.useRef({});
  if (c) {
    var p,
      h,
      m,
      v,
      g,
      y,
      b = pd(null != (p = c.baseStyle) ? p : {}, f),
      x = pd(
        null != (h = null == (m = c.variants) ? void 0 : m[f.variant]) ? h : {},
        f,
      ),
      w = pd(
        null != (v = null == (g = c.sizes) ? void 0 : g[f.size]) ? v : {},
        f,
      ),
      k = Qf({}, b, w, x);
    null != (y = n) &&
      y.isMultiPart &&
      c.parts &&
      c.parts.forEach((e) => {
        var t;
        k[e] = null != (t = k[e]) ? t : {};
      }),
      Mh(d.current, k) || (d.current = k);
  }
  return d.current;
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
  Zh[e] = Zh(e);
});
var tm = {
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
  rm = () => {},
  nm = sd
    ? { window: window, document: document }
    : {
        window: {
          document: tm,
          navigator: { userAgent: '' },
          CustomEvent: function () {
            return this;
          },
          addEventListener: rm,
          removeEventListener: rm,
          getComputedStyle: () => ({ getPropertyValue: () => '' }),
          matchMedia: () => ({
            matches: !1,
            addListener: rm,
            removeListener: rm,
          }),
          requestAnimationFrame: (e) =>
            'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
          cancelAnimationFrame(e) {
            'undefined' != typeof setTimeout && clearTimeout(e);
          },
          setTimeout: () => 0,
          clearTimeout: rm,
          setInterval: () => 0,
          clearInterval: rm,
        },
        document: tm,
      },
  om = t.exports.createContext(nm);
function am(e) {
  var { children: r, environment: n } = e,
    [o, a] = t.exports.useState(null),
    i = t.exports.useMemo(() => {
      var e,
        t = null == o ? void 0 : o.ownerDocument,
        r = null == o ? void 0 : o.ownerDocument.defaultView;
      return null !=
        (e = null != n ? n : t ? { document: t, window: r } : void 0)
        ? e
        : nm;
    }, [o, n]),
    l = !o && !n;
  return I.createElement(
    om.Provider,
    { value: i },
    r,
    l &&
      I.createElement('span', {
        ref: (e) => {
          e && a(e);
        },
      }),
  );
}
var im,
  lm = { exports: {} };
(im = lm),
  (function (e) {
    var t = /^\s+/,
      r = /\s+$/,
      n = 0,
      o = e.round,
      a = e.min,
      i = e.max,
      l = e.random;
    function u(l, s) {
      if (((s = s || {}), (l = l || '') instanceof u)) return l;
      if (!(this instanceof u)) return new u(l, s);
      var c = (function (n) {
        var o,
          l,
          u,
          s = { r: 0, g: 0, b: 0 },
          c = 1,
          f = null,
          d = null,
          p = null,
          h = !1,
          m = !1;
        return (
          'string' == typeof n &&
            (n = (function (e) {
              e = e.replace(t, '').replace(r, '').toLowerCase();
              var n,
                o = !1;
              if (C[e]) (e = C[e]), (o = !0);
              else if ('transparent' == e)
                return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
              return (n = D.rgb.exec(e))
                ? { r: n[1], g: n[2], b: n[3] }
                : (n = D.rgba.exec(e))
                ? { r: n[1], g: n[2], b: n[3], a: n[4] }
                : (n = D.hsl.exec(e))
                ? { h: n[1], s: n[2], l: n[3] }
                : (n = D.hsla.exec(e))
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : (n = D.hsv.exec(e))
                ? { h: n[1], s: n[2], v: n[3] }
                : (n = D.hsva.exec(e))
                ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                : (n = D.hex8.exec(e))
                ? {
                    r: R(n[1]),
                    g: R(n[2]),
                    b: R(n[3]),
                    a: M(n[4]),
                    format: o ? 'name' : 'hex8',
                  }
                : (n = D.hex6.exec(e))
                ? {
                    r: R(n[1]),
                    g: R(n[2]),
                    b: R(n[3]),
                    format: o ? 'name' : 'hex',
                  }
                : (n = D.hex4.exec(e))
                ? {
                    r: R(n[1] + '' + n[1]),
                    g: R(n[2] + '' + n[2]),
                    b: R(n[3] + '' + n[3]),
                    a: M(n[4] + '' + n[4]),
                    format: o ? 'name' : 'hex8',
                  }
                : !!(n = D.hex3.exec(e)) && {
                    r: R(n[1] + '' + n[1]),
                    g: R(n[2] + '' + n[2]),
                    b: R(n[3] + '' + n[3]),
                    format: o ? 'name' : 'hex',
                  };
            })(n)),
          'object' == typeof n &&
            (N(n.r) && N(n.g) && N(n.b)
              ? ((o = n.r),
                (l = n.g),
                (u = n.b),
                (s = {
                  r: 255 * T(o, 255),
                  g: 255 * T(l, 255),
                  b: 255 * T(u, 255),
                }),
                (h = !0),
                (m = '%' === String(n.r).substr(-1) ? 'prgb' : 'rgb'))
              : N(n.h) && N(n.s) && N(n.v)
              ? ((f = j(n.s)),
                (d = j(n.v)),
                (s = (function (t, r, n) {
                  (t = 6 * T(t, 360)), (r = T(r, 100)), (n = T(n, 100));
                  var o = e.floor(t),
                    a = t - o,
                    i = n * (1 - r),
                    l = n * (1 - a * r),
                    u = n * (1 - (1 - a) * r),
                    s = o % 6;
                  return {
                    r: 255 * [n, l, i, i, u, n][s],
                    g: 255 * [u, n, n, l, i, i][s],
                    b: 255 * [i, i, u, n, n, l][s],
                  };
                })(n.h, f, d)),
                (h = !0),
                (m = 'hsv'))
              : N(n.h) &&
                N(n.s) &&
                N(n.l) &&
                ((f = j(n.s)),
                (p = j(n.l)),
                (s = (function (e, t, r) {
                  var n, o, a;
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
                    ((e = T(e, 360)), (t = T(t, 100)), (r = T(r, 100)), 0 === t)
                  )
                    n = o = a = r;
                  else {
                    var l = r < 0.5 ? r * (1 + t) : r + t - r * t,
                      u = 2 * r - l;
                    (n = i(u, l, e + 1 / 3)),
                      (o = i(u, l, e)),
                      (a = i(u, l, e - 1 / 3));
                  }
                  return { r: 255 * n, g: 255 * o, b: 255 * a };
                })(n.h, f, p)),
                (h = !0),
                (m = 'hsl')),
            n.hasOwnProperty('a') && (c = n.a)),
          (c = A(c)),
          {
            ok: h,
            format: n.format || m,
            r: a(255, i(s.r, 0)),
            g: a(255, i(s.g, 0)),
            b: a(255, i(s.b, 0)),
            a: c,
          }
        );
      })(l);
      (this._originalInput = l),
        (this._r = c.r),
        (this._g = c.g),
        (this._b = c.b),
        (this._a = c.a),
        (this._roundA = o(100 * this._a) / 100),
        (this._format = s.format || c.format),
        (this._gradientType = s.gradientType),
        this._r < 1 && (this._r = o(this._r)),
        this._g < 1 && (this._g = o(this._g)),
        this._b < 1 && (this._b = o(this._b)),
        (this._ok = c.ok),
        (this._tc_id = n++);
    }
    function s(e, t, r) {
      (e = T(e, 255)), (t = T(t, 255)), (r = T(r, 255));
      var n,
        o,
        l = i(e, t, r),
        u = a(e, t, r),
        s = (l + u) / 2;
      if (l == u) n = o = 0;
      else {
        var c = l - u;
        switch (((o = s > 0.5 ? c / (2 - l - u) : c / (l + u)), l)) {
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
      return { h: n, s: o, l: s };
    }
    function c(e, t, r) {
      (e = T(e, 255)), (t = T(t, 255)), (r = T(r, 255));
      var n,
        o,
        l = i(e, t, r),
        u = a(e, t, r),
        s = l,
        c = l - u;
      if (((o = 0 === l ? 0 : c / l), l == u)) n = 0;
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
      return { h: n, s: o, v: s };
    }
    function f(e, t, r, n) {
      var a = [
        z(o(e).toString(16)),
        z(o(t).toString(16)),
        z(o(r).toString(16)),
      ];
      return n &&
        a[0].charAt(0) == a[0].charAt(1) &&
        a[1].charAt(0) == a[1].charAt(1) &&
        a[2].charAt(0) == a[2].charAt(1)
        ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
        : a.join('');
    }
    function d(e, t, r, n) {
      return [
        z(L(n)),
        z(o(e).toString(16)),
        z(o(t).toString(16)),
        z(o(r).toString(16)),
      ].join('');
    }
    function p(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = u(e).toHsl();
      return (r.s -= t / 100), (r.s = O(r.s)), u(r);
    }
    function h(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = u(e).toHsl();
      return (r.s += t / 100), (r.s = O(r.s)), u(r);
    }
    function m(e) {
      return u(e).desaturate(100);
    }
    function v(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = u(e).toHsl();
      return (r.l += t / 100), (r.l = O(r.l)), u(r);
    }
    function g(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = u(e).toRgb();
      return (
        (r.r = i(0, a(255, r.r - o((-t / 100) * 255)))),
        (r.g = i(0, a(255, r.g - o((-t / 100) * 255)))),
        (r.b = i(0, a(255, r.b - o((-t / 100) * 255)))),
        u(r)
      );
    }
    function y(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = u(e).toHsl();
      return (r.l -= t / 100), (r.l = O(r.l)), u(r);
    }
    function b(e, t) {
      var r = u(e).toHsl(),
        n = (r.h + t) % 360;
      return (r.h = n < 0 ? 360 + n : n), u(r);
    }
    function x(e) {
      var t = u(e).toHsl();
      return (t.h = (t.h + 180) % 360), u(t);
    }
    function w(e) {
      var t = u(e).toHsl(),
        r = t.h;
      return [
        u(e),
        u({ h: (r + 120) % 360, s: t.s, l: t.l }),
        u({ h: (r + 240) % 360, s: t.s, l: t.l }),
      ];
    }
    function k(e) {
      var t = u(e).toHsl(),
        r = t.h;
      return [
        u(e),
        u({ h: (r + 90) % 360, s: t.s, l: t.l }),
        u({ h: (r + 180) % 360, s: t.s, l: t.l }),
        u({ h: (r + 270) % 360, s: t.s, l: t.l }),
      ];
    }
    function S(e) {
      var t = u(e).toHsl(),
        r = t.h;
      return [
        u(e),
        u({ h: (r + 72) % 360, s: t.s, l: t.l }),
        u({ h: (r + 216) % 360, s: t.s, l: t.l }),
      ];
    }
    function E(e, t, r) {
      (t = t || 6), (r = r || 30);
      var n = u(e).toHsl(),
        o = 360 / r,
        a = [u(e)];
      for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; )
        (n.h = (n.h + o) % 360), a.push(u(n));
      return a;
    }
    function _(e, t) {
      t = t || 6;
      for (
        var r = u(e).toHsv(), n = r.h, o = r.s, a = r.v, i = [], l = 1 / t;
        t--;

      )
        i.push(u({ h: n, s: o, v: a })), (a = (a + l) % 1);
      return i;
    }
    (u.prototype = {
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
          o = this.toRgb();
        return (
          (t = o.r / 255),
          (r = o.g / 255),
          (n = o.b / 255),
          0.2126 *
            (t <= 0.03928 ? t / 12.92 : e.pow((t + 0.055) / 1.055, 2.4)) +
            0.7152 *
              (r <= 0.03928 ? r / 12.92 : e.pow((r + 0.055) / 1.055, 2.4)) +
            0.0722 *
              (n <= 0.03928 ? n / 12.92 : e.pow((n + 0.055) / 1.055, 2.4))
        );
      },
      setAlpha: function (e) {
        return (this._a = A(e)), (this._roundA = o(100 * this._a) / 100), this;
      },
      toHsv: function () {
        var e = c(this._r, this._g, this._b);
        return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
      },
      toHsvString: function () {
        var e = c(this._r, this._g, this._b),
          t = o(360 * e.h),
          r = o(100 * e.s),
          n = o(100 * e.v);
        return 1 == this._a
          ? 'hsv(' + t + ', ' + r + '%, ' + n + '%)'
          : 'hsva(' + t + ', ' + r + '%, ' + n + '%, ' + this._roundA + ')';
      },
      toHsl: function () {
        var e = s(this._r, this._g, this._b);
        return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
      },
      toHslString: function () {
        var e = s(this._r, this._g, this._b),
          t = o(360 * e.h),
          r = o(100 * e.s),
          n = o(100 * e.l);
        return 1 == this._a
          ? 'hsl(' + t + ', ' + r + '%, ' + n + '%)'
          : 'hsla(' + t + ', ' + r + '%, ' + n + '%, ' + this._roundA + ')';
      },
      toHex: function (e) {
        return f(this._r, this._g, this._b, e);
      },
      toHexString: function (e) {
        return '#' + this.toHex(e);
      },
      toHex8: function (e) {
        return (function (e, t, r, n, a) {
          var i = [
            z(o(e).toString(16)),
            z(o(t).toString(16)),
            z(o(r).toString(16)),
            z(L(n)),
          ];
          return a &&
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
        return { r: o(this._r), g: o(this._g), b: o(this._b), a: this._a };
      },
      toRgbString: function () {
        return 1 == this._a
          ? 'rgb(' + o(this._r) + ', ' + o(this._g) + ', ' + o(this._b) + ')'
          : 'rgba(' +
              o(this._r) +
              ', ' +
              o(this._g) +
              ', ' +
              o(this._b) +
              ', ' +
              this._roundA +
              ')';
      },
      toPercentageRgb: function () {
        return {
          r: o(100 * T(this._r, 255)) + '%',
          g: o(100 * T(this._g, 255)) + '%',
          b: o(100 * T(this._b, 255)) + '%',
          a: this._a,
        };
      },
      toPercentageRgbString: function () {
        return 1 == this._a
          ? 'rgb(' +
              o(100 * T(this._r, 255)) +
              '%, ' +
              o(100 * T(this._g, 255)) +
              '%, ' +
              o(100 * T(this._b, 255)) +
              '%)'
          : 'rgba(' +
              o(100 * T(this._r, 255)) +
              '%, ' +
              o(100 * T(this._g, 255)) +
              '%, ' +
              o(100 * T(this._b, 255)) +
              '%, ' +
              this._roundA +
              ')';
      },
      toName: function () {
        return 0 === this._a
          ? 'transparent'
          : !(this._a < 1) && (P[f(this._r, this._g, this._b, !0)] || !1);
      },
      toFilter: function (e) {
        var t = '#' + d(this._r, this._g, this._b, this._a),
          r = t,
          n = this._gradientType ? 'GradientType = 1, ' : '';
        if (e) {
          var o = u(e);
          r = '#' + d(o._r, o._g, o._b, o._a);
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
        return u(this.toString());
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
        return this._applyModification(v, arguments);
      },
      brighten: function () {
        return this._applyModification(g, arguments);
      },
      darken: function () {
        return this._applyModification(y, arguments);
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
        return this._applyModification(b, arguments);
      },
      _applyCombination: function (e, t) {
        return e.apply(null, [this].concat([].slice.call(t)));
      },
      analogous: function () {
        return this._applyCombination(E, arguments);
      },
      complement: function () {
        return this._applyCombination(x, arguments);
      },
      monochromatic: function () {
        return this._applyCombination(_, arguments);
      },
      splitcomplement: function () {
        return this._applyCombination(S, arguments);
      },
      triad: function () {
        return this._applyCombination(w, arguments);
      },
      tetrad: function () {
        return this._applyCombination(k, arguments);
      },
    }),
      (u.fromRatio = function (e, t) {
        if ('object' == typeof e) {
          var r = {};
          for (var n in e)
            e.hasOwnProperty(n) && (r[n] = 'a' === n ? e[n] : j(e[n]));
          e = r;
        }
        return u(e, t);
      }),
      (u.equals = function (e, t) {
        return !(!e || !t) && u(e).toRgbString() == u(t).toRgbString();
      }),
      (u.random = function () {
        return u.fromRatio({ r: l(), g: l(), b: l() });
      }),
      (u.mix = function (e, t, r) {
        r = 0 === r ? 0 : r || 50;
        var n = u(e).toRgb(),
          o = u(t).toRgb(),
          a = r / 100;
        return u({
          r: (o.r - n.r) * a + n.r,
          g: (o.g - n.g) * a + n.g,
          b: (o.b - n.b) * a + n.b,
          a: (o.a - n.a) * a + n.a,
        });
      }),
      (u.readability = function (t, r) {
        var n = u(t),
          o = u(r);
        return (
          (e.max(n.getLuminance(), o.getLuminance()) + 0.05) /
          (e.min(n.getLuminance(), o.getLuminance()) + 0.05)
        );
      }),
      (u.isReadable = function (e, t, r) {
        var n,
          o,
          a,
          i,
          l,
          s = u.readability(e, t);
        switch (
          ((o = !1),
          ((a = r),
          (i = (
            (a = a || { level: 'AA', size: 'small' }).level || 'AA'
          ).toUpperCase()),
          (l = (a.size || 'small').toLowerCase()),
          'AA' !== i && 'AAA' !== i && (i = 'AA'),
          'small' !== l && 'large' !== l && (l = 'small'),
          (n = { level: i, size: l })).level + n.size)
        ) {
          case 'AAsmall':
          case 'AAAlarge':
            o = s >= 4.5;
            break;
          case 'AAlarge':
            o = s >= 3;
            break;
          case 'AAAsmall':
            o = s >= 7;
        }
        return o;
      }),
      (u.mostReadable = function (e, t, r) {
        var n,
          o,
          a,
          i,
          l = null,
          s = 0;
        (o = (r = r || {}).includeFallbackColors), (a = r.level), (i = r.size);
        for (var c = 0; c < t.length; c++)
          (n = u.readability(e, t[c])) > s && ((s = n), (l = u(t[c])));
        return u.isReadable(e, l, { level: a, size: i }) || !o
          ? l
          : ((r.includeFallbackColors = !1),
            u.mostReadable(e, ['#fff', '#000'], r));
      });
    var C = (u.names = {
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
      P = (u.hexNames = (function (e) {
        var t = {};
        for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
        return t;
      })(C));
    function A(e) {
      return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
    }
    function T(t, r) {
      (function (e) {
        return (
          'string' == typeof e && -1 != e.indexOf('.') && 1 === parseFloat(e)
        );
      })(t) && (t = '100%');
      var n = (function (e) {
        return 'string' == typeof e && -1 != e.indexOf('%');
      })(t);
      return (
        (t = a(r, i(0, parseFloat(t)))),
        n && (t = parseInt(t * r, 10) / 100),
        e.abs(t - r) < 1e-6 ? 1 : (t % r) / parseFloat(r)
      );
    }
    function O(e) {
      return a(1, i(0, e));
    }
    function R(e) {
      return parseInt(e, 16);
    }
    function z(e) {
      return 1 == e.length ? '0' + e : '' + e;
    }
    function j(e) {
      return e <= 1 && (e = 100 * e + '%'), e;
    }
    function L(t) {
      return e.round(255 * parseFloat(t)).toString(16);
    }
    function M(e) {
      return R(e) / 255;
    }
    var F,
      B,
      I,
      D =
        ((B =
          '[\\s|\\(]+(' +
          (F = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)') +
          ')[,|\\s]+(' +
          F +
          ')[,|\\s]+(' +
          F +
          ')\\s*\\)?'),
        (I =
          '[\\s|\\(]+(' +
          F +
          ')[,|\\s]+(' +
          F +
          ')[,|\\s]+(' +
          F +
          ')[,|\\s]+(' +
          F +
          ')\\s*\\)?'),
        {
          CSS_UNIT: new RegExp(F),
          rgb: new RegExp('rgb' + B),
          rgba: new RegExp('rgba' + I),
          hsl: new RegExp('hsl' + B),
          hsla: new RegExp('hsla' + I),
          hsv: new RegExp('hsv' + B),
          hsva: new RegExp('hsva' + I),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        });
    function N(e) {
      return !!D.CSS_UNIT.exec(e);
    }
    im.exports ? (im.exports = u) : (window.tinycolor = u);
  })(Math);
var um = lm.exports,
  sm = (e, t, r) => {
    var n = Jf(e, 'colors.' + t, t);
    return um(n).isValid() ? n : r;
  },
  cm = (e) => (t) =>
    'dark' ===
    ((e) => (t) => {
      var r = sm(t, e);
      return um(r).isDark() ? 'dark' : 'light';
    })(e)(t),
  fm = (e, t) => (r) => {
    var n = sm(r, e);
    return um(n).setAlpha(t).toRgbString();
  };
function dm(e, t) {
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
function pm(e) {
  var t,
    r,
    n = um.random().toHexString();
  return !e || ($f((t = e)) && 0 === Object.keys(t).length)
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
        for (var n = '#', o = 0; o < 3; o += 1) {
          n += ('00' + ((t >> (8 * o)) & 255).toString(16)).substr(-2);
        }
        return n;
      })(e.string)
    : e.colors && !e.string
    ? (r = e.colors)[Math.floor(Math.random() * r.length)]
    : n;
}
function hm(e, t) {
  return (r) => ('dark' === r.colorMode ? t : e);
}
function mm(e) {
  var { orientation: t, vertical: r, horizontal: n } = e;
  return t ? ('vertical' === t ? r : n) : {};
}
function vm() {
  return (vm =
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
function gm(e, t, r) {
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
class ym {
  constructor(e) {
    var t = this;
    (this.name = e),
      gm(this, 'map', {}),
      gm(this, 'called', !1),
      gm(this, 'assert', () => {
        if (this.called)
          throw new Error(
            '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?',
          );
        this.called = !0;
      }),
      gm(this, 'parts', function () {
        t.assert();
        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
          r[n] = arguments[n];
        for (var o of r) t.map[o] = t.toPart(o);
        return t;
      }),
      gm(this, 'extend', function () {
        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
          r[n] = arguments[n];
        for (var o of r) o in t.map || (t.map[o] = t.toPart(o));
        return t;
      }),
      gm(this, 'toPart', (e) => {
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
      gm(this, '__type', {});
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
function bm(e) {
  return new ym(e);
}
function xm(e) {
  return $f(e) && e.reference ? e.reference : String(e);
}
var wm = function (e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    return r
      .map(xm)
      .join(' ' + e + ' ')
      .replace(/calc/g, '');
  },
  km = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + wm('+', ...t) + ')';
  },
  Sm = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + wm('-', ...t) + ')';
  },
  Em = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + wm('*', ...t) + ')';
  },
  _m = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return 'calc(' + wm('/', ...t) + ')';
  },
  Cm = (e) => {
    var t = xm(e);
    return null == t || Number.isNaN(parseFloat(t))
      ? Em(t, -1)
      : String(t).startsWith('-')
      ? String(t).slice(1)
      : '-' + t;
  },
  Pm = Object.assign(
    (e) => ({
      add: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return Pm(km(e, ...r));
      },
      subtract: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return Pm(Sm(e, ...r));
      },
      multiply: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return Pm(Em(e, ...r));
      },
      divide: function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return Pm(_m(e, ...r));
      },
      negate: () => Pm(Cm(e)),
      toString: () => e.toString(),
    }),
    { add: km, subtract: Sm, multiply: Em, divide: _m, negate: Cm },
  );
function Am(e) {
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
function Tm(e, t) {
  return 'var(' + Am(e) + (t ? ', ' + t : '') + ')';
}
function Om(e, t) {
  return (
    void 0 === t && (t = ''),
    '--' +
      (function (e, t) {
        return void 0 === t && (t = ''), [t, Am(e)].filter(Boolean).join('-');
      })(e, t)
  );
}
function Rm(e, t) {
  var r = Om(e, null == t ? void 0 : t.prefix);
  return { variable: r, reference: Tm(r, zm(null == t ? void 0 : t.fallback)) };
}
function zm(e) {
  return 'string' == typeof e ? e : null == e ? void 0 : e.reference;
}
var jm = bm('accordion')
    .parts('container', 'item', 'button', 'panel')
    .extend('icon'),
  Lm = bm('alert').parts('title', 'description', 'container').extend('icon'),
  Mm = bm('avatar')
    .parts('label', 'badge', 'container')
    .extend('excessLabel', 'group'),
  Fm = bm('breadcrumb').parts('link', 'item').extend('separator');
bm('button').parts();
var Bm = bm('checkbox').parts('control', 'icon').extend('label');
bm('progress').parts('track', 'filledTrack').extend('label');
var Im = bm('drawer')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  Dm = bm('editable').parts('preview', 'input'),
  Nm = bm('form').parts('container', 'requiredIndicator', 'helperText'),
  Vm = bm('formError').parts('text', 'icon'),
  Wm = bm('input').parts('addon', 'field', 'element'),
  Hm = bm('list').parts('container', 'item', 'icon'),
  Um = bm('menu')
    .parts('button', 'list', 'item')
    .extend('groupTitle', 'command', 'divider'),
  $m = bm('modal')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  qm = bm('numberinput').parts('root', 'field', 'stepperGroup', 'stepper');
bm('pininput').parts('field');
var Ym = bm('popover')
    .parts('content', 'header', 'body', 'footer')
    .extend('popper', 'arrow'),
  Xm = bm('progress').parts('label', 'filledTrack', 'track'),
  Qm = bm('radio').parts('container', 'control', 'label'),
  Gm = bm('select').parts('field', 'icon'),
  Km = bm('slider').parts('container', 'track', 'thumb', 'filledTrack'),
  Zm = bm('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  Jm = bm('switch').parts('container', 'track', 'thumb'),
  ev = bm('table').parts(
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'tfoot',
    'caption',
  ),
  tv = bm('tabs').parts(
    'root',
    'tab',
    'tablist',
    'tabpanel',
    'tabpanels',
    'indicator',
  ),
  rv = bm('tag').parts('container', 'label', 'closeButton'),
  nv = {
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
  ov = { parts: jm.keys, baseStyle: nv };
function av(e) {
  var { theme: t, colorScheme: r } = e;
  return hm(sm(t, r + '.100', r), fm(r + '.200', 0.16)(t))(e);
}
var iv = {
    subtle: (e) => {
      var { colorScheme: t } = e;
      return {
        container: { bg: av(e) },
        icon: { color: hm(t + '.500', t + '.200')(e) },
      };
    },
    'left-accent': (e) => {
      var { colorScheme: t } = e;
      return {
        container: {
          paddingStart: 3,
          borderStartWidth: '4px',
          borderStartColor: hm(t + '.500', t + '.200')(e),
          bg: av(e),
        },
        icon: { color: hm(t + '.500', t + '.200')(e) },
      };
    },
    'top-accent': (e) => {
      var { colorScheme: t } = e;
      return {
        container: {
          pt: 2,
          borderTopWidth: '4px',
          borderTopColor: hm(t + '.500', t + '.200')(e),
          bg: av(e),
        },
        icon: { color: hm(t + '.500', t + '.200')(e) },
      };
    },
    solid: (e) => {
      var { colorScheme: t } = e;
      return {
        container: {
          bg: hm(t + '.500', t + '.200')(e),
          color: hm('white', 'gray.900')(e),
        },
      };
    },
  },
  lv = {
    parts: Lm.keys,
    baseStyle: {
      container: { px: 4, py: 3 },
      title: { fontWeight: 'bold', lineHeight: 6, marginEnd: 2 },
      description: { lineHeight: 6 },
      icon: { flexShrink: 0, marginEnd: 3, w: 5, h: 6 },
    },
    variants: iv,
    defaultProps: { variant: 'subtle', colorScheme: 'blue' },
  },
  uv = {
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
function sv() {
  return (sv =
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
var cv = sv(
    {},
    uv,
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
  fv = (e) => ({
    transform: 'translate(25%, 25%)',
    borderRadius: 'full',
    border: '0.2em solid',
    borderColor: hm('white', 'gray.800')(e),
  }),
  dv = (e) => ({ bg: hm('gray.200', 'whiteAlpha.400')(e) }),
  pv = (e) => {
    var { name: t, theme: r } = e,
      n = t ? pm({ string: t }) : 'gray.400',
      o = 'white';
    return (
      cm(n)(r) || (o = 'gray.800'),
      {
        bg: n,
        color: o,
        borderColor: hm('white', 'gray.800')(e),
        verticalAlign: 'top',
      }
    );
  };
function hv(e) {
  var t = cv[e];
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
var mv = {
    '2xs': hv('4'),
    xs: hv('6'),
    sm: hv('8'),
    md: hv('12'),
    lg: hv('16'),
    xl: hv('24'),
    '2xl': hv('32'),
    full: hv('100%'),
  },
  vv = {
    parts: Mm.keys,
    baseStyle: (e) => ({ badge: fv(e), excessLabel: dv(e), container: pv(e) }),
    sizes: mv,
    defaultProps: { size: 'md' },
  },
  gv = {
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
          bg: hm(t + '.500', fm(t + '.500', 0.6)(r))(e),
          color: hm('white', 'whiteAlpha.800')(e),
        };
      },
      subtle: (e) => {
        var { colorScheme: t, theme: r } = e;
        return {
          bg: hm(t + '.100', fm(t + '.200', 0.16)(r))(e),
          color: hm(t + '.800', t + '.200')(e),
        };
      },
      outline: (e) => {
        var { colorScheme: t, theme: r } = e,
          n = fm(t + '.200', 0.8)(r),
          o = hm(sm(r, t + '.500'), n)(e);
        return { color: o, boxShadow: 'inset 0 0 0px 1px ' + o };
      },
    },
    defaultProps: { variant: 'subtle', colorScheme: 'gray' },
  },
  yv = {
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
  bv = { parts: Fm.keys, baseStyle: yv };
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
var wv = (e) => {
    var { colorScheme: t, theme: r } = e;
    if ('gray' === t)
      return {
        color: hm('inherit', 'whiteAlpha.900')(e),
        _hover: { bg: hm('gray.100', 'whiteAlpha.200')(e) },
        _active: { bg: hm('gray.200', 'whiteAlpha.300')(e) },
      };
    var n = fm(t + '.200', 0.12)(r),
      o = fm(t + '.200', 0.24)(r);
    return {
      color: hm(t + '.600', t + '.200')(e),
      bg: 'transparent',
      _hover: { bg: hm(t + '.50', n)(e) },
      _active: { bg: hm(t + '.100', o)(e) },
    };
  },
  kv = {
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
  Sv = {
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
      ghost: wv,
      outline: (e) => {
        var { colorScheme: t } = e,
          r = hm('gray.200', 'whiteAlpha.300')(e);
        return xv(
          {
            border: '1px solid',
            borderColor: 'gray' === t ? r : 'currentColor',
          },
          wv(e),
        );
      },
      solid: (e) => {
        var t,
          { colorScheme: r } = e;
        if ('gray' === r) {
          var n = hm('gray.100', 'whiteAlpha.200')(e);
          return {
            bg: n,
            _hover: {
              bg: hm('gray.200', 'whiteAlpha.300')(e),
              _disabled: { bg: n },
            },
            _active: { bg: hm('gray.300', 'whiteAlpha.400')(e) },
          };
        }
        var {
            bg: o = r + '.500',
            color: a = 'white',
            hoverBg: i = r + '.600',
            activeBg: l = r + '.700',
          } = null != (t = kv[r]) ? t : {},
          u = hm(o, r + '.200')(e);
        return {
          bg: u,
          color: hm(a, 'gray.800')(e),
          _hover: { bg: hm(i, r + '.300')(e), _disabled: { bg: u } },
          _active: { bg: hm(l, r + '.400')(e) },
        };
      },
      link: (e) => {
        var { colorScheme: t } = e;
        return {
          padding: 0,
          height: 'auto',
          lineHeight: 'normal',
          verticalAlign: 'baseline',
          color: hm(t + '.500', t + '.200')(e),
          _hover: {
            textDecoration: 'underline',
            _disabled: { textDecoration: 'none' },
          },
          _active: { color: hm(t + '.700', t + '.500')(e) },
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
  Ev = (e) => {
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
        bg: hm(t + '.500', t + '.200')(e),
        borderColor: hm(t + '.500', t + '.200')(e),
        color: hm('white', 'gray.900')(e),
        _hover: {
          bg: hm(t + '.600', t + '.300')(e),
          borderColor: hm(t + '.600', t + '.300')(e),
        },
        _disabled: {
          borderColor: hm('gray.200', 'transparent')(e),
          bg: hm('gray.200', 'whiteAlpha.300')(e),
          color: hm('gray.500', 'whiteAlpha.500')(e),
        },
      },
      _indeterminate: {
        bg: hm(t + '.500', t + '.200')(e),
        borderColor: hm(t + '.500', t + '.200')(e),
        color: hm('white', 'gray.900')(e),
      },
      _disabled: {
        bg: hm('gray.100', 'whiteAlpha.100')(e),
        borderColor: hm('gray.100', 'transparent')(e),
      },
      _focus: { boxShadow: 'outline' },
      _invalid: { borderColor: hm('red.500', 'red.300')(e) },
    };
  },
  _v = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  Cv = { transitionProperty: 'transform', transitionDuration: 'normal' },
  Pv = {
    parts: Bm.keys,
    baseStyle: (e) => ({ icon: Cv, control: Ev(e), label: _v }),
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
  Av = Rm('close-button-size'),
  Tv = {
    baseStyle: (e) => {
      var t = hm('blackAlpha.100', 'whiteAlpha.100')(e),
        r = hm('blackAlpha.200', 'whiteAlpha.200')(e);
      return {
        w: [Av.reference],
        h: [Av.reference],
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
      lg: { [Av.variable]: '40px', fontSize: '16px' },
      md: { [Av.variable]: '32px', fontSize: '12px' },
      sm: { [Av.variable]: '24px', fontSize: '10px' },
    },
    defaultProps: { size: 'md' },
  },
  { variants: Ov, defaultProps: Rv } = gv,
  zv = {
    baseStyle: {
      fontFamily: 'mono',
      fontSize: 'sm',
      px: '0.2em',
      borderRadius: 'sm',
    },
    variants: Ov,
    defaultProps: Rv,
  },
  jv = { baseStyle: { w: '100%', mx: 'auto', maxW: '60ch', px: '1rem' } },
  Lv = {
    baseStyle: { opacity: 0.6, borderColor: 'inherit' },
    variants: {
      solid: { borderStyle: 'solid' },
      dashed: { borderStyle: 'dashed' },
    },
    defaultProps: { variant: 'solid' },
  };
function Mv() {
  return (Mv =
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
function Fv(e) {
  return 'full' === e
    ? { dialog: { maxW: '100vw', h: '100vh' } }
    : { dialog: { maxW: e } };
}
var Bv = { bg: 'blackAlpha.600', zIndex: 'overlay' },
  Iv = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  Dv = (e) => {
    var { isFullHeight: t } = e;
    return Mv({}, t && { height: '100vh' }, {
      zIndex: 'modal',
      maxH: '100vh',
      bg: hm('white', 'gray.700')(e),
      color: 'inherit',
      boxShadow: hm('lg', 'dark-lg')(e),
    });
  },
  Nv = { px: 6, py: 4, fontSize: 'xl', fontWeight: 'semibold' },
  Vv = { position: 'absolute', top: 2, insetEnd: 3 },
  Wv = { px: 6, py: 2, flex: 1, overflow: 'auto' },
  Hv = { px: 6, py: 4 },
  Uv = {
    xs: Fv('xs'),
    sm: Fv('md'),
    md: Fv('lg'),
    lg: Fv('2xl'),
    xl: Fv('4xl'),
    full: Fv('full'),
  },
  $v = {
    parts: Im.keys,
    baseStyle: (e) => ({
      overlay: Bv,
      dialogContainer: Iv,
      dialog: Dv(e),
      header: Nv,
      closeButton: Vv,
      body: Wv,
      footer: Hv,
    }),
    sizes: Uv,
    defaultProps: { size: 'xs' },
  },
  qv = {
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
  Yv = { parts: Dm.keys, baseStyle: qv },
  Xv = (e) => ({ marginStart: 1, color: hm('red.500', 'red.300')(e) }),
  Qv = (e) => ({
    mt: 2,
    color: hm('gray.500', 'whiteAlpha.600')(e),
    lineHeight: 'normal',
    fontSize: 'sm',
  }),
  Gv = {
    parts: Nm.keys,
    baseStyle: (e) => ({
      container: { width: '100%', position: 'relative' },
      requiredIndicator: Xv(e),
      helperText: Qv(e),
    }),
  },
  Kv = {
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
  Zv = {
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
  Jv = {
    lg: { fontSize: 'lg', px: 4, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', px: 4, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', px: 3, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', px: 2, h: 6, borderRadius: 'sm' },
  },
  eg = {
    lg: { field: Jv.lg, addon: Jv.lg },
    md: { field: Jv.md, addon: Jv.md },
    sm: { field: Jv.sm, addon: Jv.sm },
    xs: { field: Jv.xs, addon: Jv.xs },
  };
function tg(e) {
  var { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || hm('blue.500', 'blue.300')(e),
    errorBorderColor: r || hm('red.500', 'red.300')(e),
  };
}
var rg = {
    outline: (e) => {
      var { theme: t } = e,
        { focusBorderColor: r, errorBorderColor: n } = tg(e);
      return {
        field: {
          border: '1px solid',
          borderColor: 'inherit',
          bg: 'inherit',
          _hover: { borderColor: hm('gray.300', 'whiteAlpha.400')(e) },
          _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
          _invalid: {
            borderColor: sm(t, n),
            boxShadow: '0 0 0 1px ' + sm(t, n),
          },
          _focus: {
            zIndex: 1,
            borderColor: sm(t, r),
            boxShadow: '0 0 0 1px ' + sm(t, r),
          },
        },
        addon: {
          border: '1px solid',
          borderColor: hm('inherit', 'whiteAlpha.50')(e),
          bg: hm('gray.100', 'whiteAlpha.300')(e),
        },
      };
    },
    filled: (e) => {
      var { theme: t } = e,
        { focusBorderColor: r, errorBorderColor: n } = tg(e);
      return {
        field: {
          border: '2px solid',
          borderColor: 'transparent',
          bg: hm('gray.100', 'whiteAlpha.50')(e),
          _hover: { bg: hm('gray.200', 'whiteAlpha.100')(e) },
          _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
          _invalid: { borderColor: sm(t, n) },
          _focus: { bg: 'transparent', borderColor: sm(t, r) },
        },
        addon: {
          border: '2px solid',
          borderColor: 'transparent',
          bg: hm('gray.100', 'whiteAlpha.50')(e),
        },
      };
    },
    flushed: (e) => {
      var { theme: t } = e,
        { focusBorderColor: r, errorBorderColor: n } = tg(e);
      return {
        field: {
          borderBottom: '1px solid',
          borderColor: 'inherit',
          borderRadius: 0,
          px: 0,
          bg: 'transparent',
          _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
          _invalid: {
            borderColor: sm(t, n),
            boxShadow: '0px 1px 0px 0px ' + sm(t, n),
          },
          _focus: {
            borderColor: sm(t, r),
            boxShadow: '0px 1px 0px 0px ' + sm(t, r),
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
  ng = {
    parts: Wm.keys,
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
    sizes: eg,
    variants: rg,
    defaultProps: { size: 'md', variant: 'outline' },
  },
  og = {
    baseStyle: (e) => ({
      bg: hm('gray.100', 'whiteAlpha')(e),
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
  ag = {
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
  ig = {
    container: {},
    item: {},
    icon: {
      marginEnd: '0.5rem',
      display: 'inline',
      verticalAlign: 'text-bottom',
    },
  },
  lg = { parts: Hm.keys, baseStyle: ig },
  ug = (e) => ({
    bg: hm('#fff', 'gray.700')(e),
    boxShadow: hm('sm', 'dark-lg')(e),
    color: 'inherit',
    minW: '3xs',
    py: '2',
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
  }),
  sg = (e) => ({
    py: '0.4rem',
    px: '0.8rem',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    _focus: { bg: hm('gray.100', 'whiteAlpha.100')(e) },
    _active: { bg: hm('gray.200', 'whiteAlpha.200')(e) },
    _expanded: { bg: hm('gray.100', 'whiteAlpha.100')(e) },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  }),
  cg = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  fg = { opacity: 0.6 },
  dg = {
    border: 0,
    borderBottom: '1px solid',
    borderColor: 'inherit',
    my: '0.5rem',
    opacity: 0.6,
  },
  pg = { transitionProperty: 'common', transitionDuration: 'normal' },
  hg = {
    parts: Um.keys,
    baseStyle: (e) => ({
      button: pg,
      list: ug(e),
      item: sg(e),
      groupTitle: cg,
      command: fg,
      divider: dg,
    }),
  },
  mg = { bg: 'blackAlpha.600', zIndex: 'modal' },
  vg = (e) => {
    var { isCentered: t, scrollBehavior: r } = e;
    return {
      display: 'flex',
      zIndex: 'modal',
      justifyContent: 'center',
      alignItems: t ? 'center' : 'flex-start',
      overflow: 'inside' === r ? 'hidden' : 'auto',
    };
  },
  gg = (e) => {
    var { scrollBehavior: t } = e;
    return {
      borderRadius: 'md',
      bg: hm('white', 'gray.700')(e),
      color: 'inherit',
      my: '3.75rem',
      zIndex: 'modal',
      maxH: 'inside' === t ? 'calc(100% - 7.5rem)' : void 0,
      boxShadow: hm('lg', 'dark-lg')(e),
    };
  },
  yg = { px: 6, py: 4, fontSize: 'xl', fontWeight: 'semibold' },
  bg = { position: 'absolute', top: 2, insetEnd: 3 },
  xg = (e) => {
    var { scrollBehavior: t } = e;
    return {
      px: 6,
      py: 2,
      flex: 1,
      overflow: 'inside' === t ? 'auto' : void 0,
    };
  },
  wg = { px: 6, py: 4 };
function kg(e) {
  return 'full' === e
    ? { dialog: { maxW: '100vw', minH: '100vh', my: 0 } }
    : { dialog: { maxW: e } };
}
var Sg,
  Eg,
  _g = {
    xs: kg('xs'),
    sm: kg('sm'),
    md: kg('md'),
    lg: kg('lg'),
    xl: kg('xl'),
    '2xl': kg('2xl'),
    '3xl': kg('3xl'),
    '4xl': kg('4xl'),
    '5xl': kg('5xl'),
    '6xl': kg('6xl'),
    full: kg('full'),
  },
  Cg = {
    parts: $m.keys,
    baseStyle: (e) => ({
      overlay: mg,
      dialogContainer: vg(e),
      dialog: gg(e),
      header: yg,
      closeButton: bg,
      body: xg(e),
      footer: wg,
    }),
    sizes: _g,
    defaultProps: { size: 'md' },
  },
  Pg = {
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
function Ag() {
  return (Ag =
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
var { variants: Tg, defaultProps: Og } = ng,
  Rg = Rm('number-input-stepper-width'),
  zg = Rm('number-input-input-padding'),
  jg = Pm(Rg).add('0.5rem').toString(),
  Lg = { [Rg.variable]: '24px', [zg.variable]: jg },
  Mg = null != (Sg = null == (Eg = ng.baseStyle) ? void 0 : Eg.field) ? Sg : {},
  Fg = { width: [Rg.reference] },
  Bg = (e) => ({
    borderStart: '1px solid',
    borderStartColor: hm('inherit', 'whiteAlpha.300')(e),
    color: hm('inherit', 'whiteAlpha.800')(e),
    _active: { bg: hm('gray.200', 'whiteAlpha.300')(e) },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
  });
function Ig(e) {
  var t,
    r,
    n = ng.sizes[e],
    o = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    a = null != (t = null == (r = n.field) ? void 0 : r.fontSize) ? t : 'md',
    i = Pg.fontSizes[a.toString()];
  return {
    field: Ag({}, n.field, {
      paddingInlineEnd: zg.reference,
      verticalAlign: 'top',
    }),
    stepper: {
      fontSize: Pm(i).multiply(0.75).toString(),
      _first: { borderTopEndRadius: o[e] },
      _last: { borderBottomEndRadius: o[e], mt: '-1px', borderTopWidth: 1 },
    },
  };
}
var Dg,
  Ng = { xs: Ig('xs'), sm: Ig('sm'), md: Ig('md'), lg: Ig('lg') },
  Vg = {
    parts: qm.keys,
    baseStyle: (e) => ({
      root: Lg,
      field: Mg,
      stepperGroup: Fg,
      stepper: Bg(e),
    }),
    sizes: Ng,
    variants: Tg,
    defaultProps: Og,
  };
function Wg() {
  return (Wg =
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
var Hg = {
    baseStyle: Wg({}, ng.baseStyle.field, { textAlign: 'center' }),
    sizes: {
      lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
      md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
      sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
      xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
    },
    variants: {
      outline: (e) => {
        var t;
        return null != (t = ng.variants.outline(e).field) ? t : {};
      },
      flushed: (e) => {
        var t;
        return null != (t = ng.variants.flushed(e).field) ? t : {};
      },
      filled: (e) => {
        var t;
        return null != (t = ng.variants.filled(e).field) ? t : {};
      },
      unstyled: null != (Dg = ng.variants.unstyled.field) ? Dg : {},
    },
    defaultProps: ng.defaultProps,
  },
  Ug = Rm('popper-bg'),
  $g = Rm('popper-arrow-bg'),
  qg = Rm('popper-arrow-shadow-color'),
  Yg = { zIndex: 10 },
  Xg = (e) => {
    var t = hm('white', 'gray.700')(e),
      r = hm('gray.200', 'whiteAlpha.300')(e);
    return {
      [Ug.variable]: 'colors.' + t,
      bg: Ug.reference,
      [$g.variable]: Ug.reference,
      [qg.variable]: 'colors.' + r,
      width: 'xs',
      border: '1px solid',
      borderColor: 'inherit',
      borderRadius: 'md',
      boxShadow: 'sm',
      zIndex: 'inherit',
      _focus: { outline: 0, boxShadow: 'outline' },
    };
  },
  Qg = { px: 3, py: 2, borderBottomWidth: '1px' },
  Gg = { px: 3, py: 2 },
  Kg = { px: 3, py: 2, borderTopWidth: '1px' },
  Zg = {
    parts: Ym.keys,
    baseStyle: (e) => ({
      popper: Yg,
      content: Xg(e),
      header: Qg,
      body: Gg,
      footer: Kg,
      arrow: {},
    }),
  };
function Jg() {
  return (Jg =
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
var ey = {
    lineHeight: '1',
    fontSize: '0.25em',
    fontWeight: 'bold',
    color: 'white',
  },
  ty = (e) => ({ bg: hm('gray.100', 'whiteAlpha.300')(e) }),
  ry = (e) =>
    Jg(
      { transitionProperty: 'common', transitionDuration: 'slow' },
      (function (e) {
        var { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e,
          a = hm(dm(), dm('1rem', 'rgba(0,0,0,0.1)'))(e),
          i = hm(t + '.500', t + '.200')(e),
          l =
            'linear-gradient(\n    to right,\n    transparent 0%,\n    ' +
            sm(r, i) +
            ' 50%,\n    transparent 100%\n  )';
        return Jg({}, !n && o && a, n ? { bgImage: l } : { bgColor: i });
      })(e),
    ),
  ny = {
    parts: Xm.keys,
    sizes: {
      xs: { track: { h: '0.25rem' } },
      sm: { track: { h: '0.5rem' } },
      md: { track: { h: '0.75rem' } },
      lg: { track: { h: '1rem' } },
    },
    baseStyle: (e) => ({ label: ey, filledTrack: ry(e), track: ty(e) }),
    defaultProps: { size: 'md', colorScheme: 'blue' },
  };
function oy() {
  return (oy =
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
var ay = (e) => {
    var { control: t = {} } = Pv.baseStyle(e);
    return oy({}, t, {
      borderRadius: 'full',
      _checked: oy({}, t._checked, {
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
  iy = {
    parts: Qm.keys,
    baseStyle: (e) => ({ label: Pv.baseStyle(e).label, control: ay(e) }),
    sizes: {
      md: { control: { w: 4, h: 4 }, label: { fontSize: 'md' } },
      lg: { control: { w: 5, h: 5 }, label: { fontSize: 'lg' } },
      sm: { control: { width: 3, height: 3 }, label: { fontSize: 'sm' } },
    },
    defaultProps: { size: 'md', colorScheme: 'blue' },
  };
function ly() {
  return (ly =
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
var uy = (e) =>
    ly({}, ng.baseStyle.field, {
      bg: hm('white', 'gray.700')(e),
      appearance: 'none',
      paddingBottom: '1px',
      lineHeight: 'normal',
      '> option, > optgroup': { bg: hm('white', 'gray.700')(e) },
    }),
  sy = {
    width: '1.5rem',
    height: '100%',
    insetEnd: '0.5rem',
    position: 'relative',
    color: 'currentColor',
    fontSize: '1.25rem',
    _disabled: { opacity: 0.5 },
  },
  cy = ly({}, ng.sizes, {
    xs: ly({}, ng.sizes.xs, { icon: { insetEnd: '0.25rem' } }),
  }),
  fy = {
    parts: Gm.keys,
    baseStyle: (e) => ({ field: uy(e), icon: sy }),
    sizes: cy,
    variants: ng.variants,
    defaultProps: ng.defaultProps,
  },
  dy = (e, t) =>
    Nf({
      from: { borderColor: e, background: e },
      to: { borderColor: t, background: t },
    }),
  py = {
    baseStyle: (e) => {
      var t = hm('gray.100', 'gray.800')(e),
        r = hm('gray.400', 'gray.600')(e),
        { startColor: n = t, endColor: o = r, speed: a, theme: i } = e,
        l = sm(i, n),
        u = sm(i, o);
      return {
        opacity: 0.7,
        borderRadius: '2px',
        borderColor: l,
        background: u,
        animation: a + 's linear infinite alternate ' + dy(l, u),
      };
    },
  },
  hy = {
    baseStyle: (e) => ({
      borderRadius: 'md',
      fontWeight: 'semibold',
      _focus: {
        boxShadow: 'outline',
        padding: '1rem',
        position: 'fixed',
        top: '1.5rem',
        insetStart: '1.5rem',
        bg: hm('white', 'gray.700')(e),
      },
    }),
  };
function my() {
  return (my =
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
var vy = (e) => {
    var { orientation: t } = e;
    return my(
      { _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' } },
      mm({
        orientation: t,
        vertical: { h: '100%' },
        horizontal: { w: '100%' },
      }),
    );
  },
  gy = (e) => ({
    borderRadius: 'sm',
    bg: hm('gray.200', 'whiteAlpha.200')(e),
    _disabled: { bg: hm('gray.300', 'whiteAlpha.300')(e) },
  }),
  yy = (e) =>
    my(
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
        return mm({
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
  by = (e) => {
    var { colorScheme: t } = e;
    return { bg: hm(t + '.500', t + '.200')(e) };
  },
  xy = {
    lg: (e) => ({
      thumb: { w: '16px', h: '16px' },
      track: mm({
        orientation: e.orientation,
        horizontal: { h: '4px' },
        vertical: { w: '4px' },
      }),
    }),
    md: (e) => ({
      thumb: { w: '14px', h: '14px' },
      track: mm({
        orientation: e.orientation,
        horizontal: { h: '4px' },
        vertical: { w: '4px' },
      }),
    }),
    sm: (e) => ({
      thumb: { w: '10px', h: '10px' },
      track: mm({
        orientation: e.orientation,
        horizontal: { h: '2px' },
        vertical: { w: '2px' },
      }),
    }),
  },
  wy = {
    parts: Km.keys,
    sizes: xy,
    baseStyle: (e) => ({
      container: vy(e),
      track: gy(e),
      thumb: yy(e),
      filledTrack: by(e),
    }),
    defaultProps: { size: 'md', colorScheme: 'blue' },
  },
  ky = Rm('spinner-size'),
  Sy = {
    baseStyle: { width: [ky.reference], height: [ky.reference] },
    sizes: {
      xs: { [ky.variable]: '0.75rem' },
      sm: { [ky.variable]: '1rem' },
      md: { [ky.variable]: '1.5rem' },
      lg: { [ky.variable]: '2rem' },
      xl: { [ky.variable]: '3rem' },
    },
    defaultProps: { size: 'md' },
  },
  Ey = {
    container: {},
    label: { fontWeight: 'medium' },
    helpText: { opacity: 0.8, marginBottom: 2 },
    number: { verticalAlign: 'baseline', fontWeight: 'semibold' },
    icon: { marginEnd: 1, w: '14px', h: '14px', verticalAlign: 'middle' },
  },
  _y = {
    parts: Zm.keys,
    baseStyle: Ey,
    sizes: {
      md: {
        label: { fontSize: 'sm' },
        helpText: { fontSize: 'sm' },
        number: { fontSize: '2xl' },
      },
    },
    defaultProps: { size: 'md' },
  },
  Cy = Rm('switch-track-width'),
  Py = Rm('switch-track-height'),
  Ay = Rm('switch-track-diff'),
  Ty = Pm.subtract(Cy, Py),
  Oy = Rm('switch-thumb-x'),
  Ry = (e) => {
    var { colorScheme: t } = e;
    return {
      borderRadius: 'full',
      p: '2px',
      width: [Cy.reference],
      height: [Py.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      bg: hm('gray.300', 'whiteAlpha.400')(e),
      _focus: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: { bg: hm(t + '.500', t + '.200')(e) },
    };
  },
  zy = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [Py.reference],
    height: [Py.reference],
    _checked: { transform: 'translateX(' + Oy.reference + ')' },
  },
  jy = {
    sm: { container: { [Cy.variable]: '1.375rem', [Py.variable]: '0.75rem' } },
    md: { container: { [Cy.variable]: '1.875rem', [Py.variable]: '1rem' } },
    lg: { container: { [Cy.variable]: '2.875rem', [Py.variable]: '1.5rem' } },
  },
  Ly = {
    parts: Jm.keys,
    baseStyle: (e) => ({
      container: {
        [Ay.variable]: Ty,
        [Oy.variable]: Ay.reference,
        _rtl: { [Oy.variable]: Pm(Ay).negate().toString() },
      },
      track: Ry(e),
      thumb: zy,
    }),
    sizes: jy,
    defaultProps: { size: 'md', colorScheme: 'blue' },
  };
function My() {
  return (My =
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
var Fy,
  By,
  Iy,
  Dy,
  Ny,
  Vy = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  Wy = {
    simple: (e) => {
      var { colorScheme: t } = e;
      return {
        th: My(
          {
            color: hm('gray.600', 'gray.400')(e),
            borderBottom: '1px',
            borderColor: hm(t + '.100', t + '.700')(e),
          },
          Vy,
        ),
        td: My(
          { borderBottom: '1px', borderColor: hm(t + '.100', t + '.700')(e) },
          Vy,
        ),
        caption: { color: hm('gray.600', 'gray.100')(e) },
        tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
      };
    },
    striped: (e) => {
      var { colorScheme: t } = e;
      return {
        th: My(
          {
            color: hm('gray.600', 'gray.400')(e),
            borderBottom: '1px',
            borderColor: hm(t + '.100', t + '.700')(e),
          },
          Vy,
        ),
        td: My(
          { borderBottom: '1px', borderColor: hm(t + '.100', t + '.700')(e) },
          Vy,
        ),
        caption: { color: hm('gray.600', 'gray.100')(e) },
        tbody: {
          tr: {
            '&:nth-of-type(odd)': {
              'th, td': {
                borderBottomWidth: '1px',
                borderColor: hm(t + '.100', t + '.700')(e),
              },
              td: { background: hm(t + '.100', t + '.700')(e) },
            },
          },
        },
        tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
      };
    },
    unstyled: {},
  },
  Hy = {
    parts: ev.keys,
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
    variants: Wy,
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
  Uy = (e) => {
    var { orientation: t } = e;
    return { display: 'vertical' === t ? 'flex' : 'block' };
  },
  $y = (e) => {
    var { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focus: { zIndex: 1, boxShadow: 'outline' },
    };
  },
  qy = (e) => {
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
  Yy = { p: 4 },
  Xy = {
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
            color: hm(t + '.600', t + '.300')(e),
            borderColor: 'currentColor',
          },
          _active: { bg: hm('gray.200', 'whiteAlpha.300')(e) },
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
            color: hm(t + '.600', t + '.300')(e),
            borderColor: 'inherit',
            borderBottomColor: hm('white', 'gray.800')(e),
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
          bg: hm('gray.50', 'whiteAlpha.50')(e),
          mb: '-1px',
          _notLast: { marginEnd: '-1px' },
          _selected: {
            bg: hm('#fff', 'gray.800')(e),
            color: hm(t + '.600', t + '.300')(e),
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
          _selected: { color: sm(r, t + '.700'), bg: sm(r, t + '.100') },
        },
      };
    },
    'solid-rounded': (e) => {
      var { colorScheme: t } = e;
      return {
        tab: {
          borderRadius: 'full',
          fontWeight: 'semibold',
          color: hm('gray.600', 'inherit')(e),
          _selected: {
            color: hm('#fff', 'gray.800')(e),
            bg: hm(t + '.600', t + '.300')(e),
          },
        },
      };
    },
    unstyled: {},
  },
  Qy = {
    parts: tv.keys,
    baseStyle: (e) => ({
      root: Uy(e),
      tab: $y(e),
      tablist: qy(e),
      tabpanel: Yy,
    }),
    sizes: {
      sm: { tab: { py: 1, px: 4, fontSize: 'sm' } },
      md: { tab: { fontSize: 'md', py: 2, px: 4 } },
      lg: { tab: { fontSize: 'lg', py: 3, px: 4 } },
    },
    variants: Xy,
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
  },
  Gy = {
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
  Ky = {
    subtle: (e) => ({ container: gv.variants.subtle(e) }),
    solid: (e) => ({ container: gv.variants.solid(e) }),
    outline: (e) => ({ container: gv.variants.outline(e) }),
  },
  Zy = {
    parts: rv.keys,
    variants: Ky,
    baseStyle: Gy,
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
function Jy() {
  return (Jy =
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
var eb,
  tb = Jy({}, ng.baseStyle.field, {
    paddingY: '8px',
    minHeight: '80px',
    lineHeight: 'short',
    verticalAlign: 'top',
  }),
  rb = {
    outline: (e) => {
      var t;
      return null != (t = ng.variants.outline(e).field) ? t : {};
    },
    flushed: (e) => {
      var t;
      return null != (t = ng.variants.flushed(e).field) ? t : {};
    },
    filled: (e) => {
      var t;
      return null != (t = ng.variants.filled(e).field) ? t : {};
    },
    unstyled: null != (Fy = ng.variants.unstyled.field) ? Fy : {},
  },
  nb = {
    baseStyle: tb,
    sizes: {
      xs: null != (By = ng.sizes.xs.field) ? By : {},
      sm: null != (Iy = ng.sizes.sm.field) ? Iy : {},
      md: null != (Dy = ng.sizes.md.field) ? Dy : {},
      lg: null != (Ny = ng.sizes.lg.field) ? Ny : {},
    },
    variants: rb,
    defaultProps: { size: 'md', variant: 'outline' },
  },
  ob = Rm('tooltip-bg'),
  ab = Rm('popper-arrow-bg'),
  ib = {
    baseStyle: (e) => {
      var t = hm('gray.700', 'gray.300')(e);
      return {
        [ob.variable]: 'colors.' + t,
        px: '8px',
        py: '2px',
        bg: [ob.reference],
        [ab.variable]: [ob.reference],
        color: hm('whiteAlpha.900', 'gray.900')(e),
        borderRadius: 'sm',
        fontWeight: 'medium',
        fontSize: 'sm',
        boxShadow: 'md',
        maxW: '320px',
        zIndex: 'tooltip',
      };
    },
  },
  lb = (e) => ({ color: hm('red.500', 'red.300')(e), mt: 2, fontSize: 'sm' }),
  ub = (e) => ({ marginEnd: '0.5em', color: hm('red.500', 'red.300')(e) }),
  sb = { parts: Vm.keys, baseStyle: (e) => ({ text: lb(e), icon: ub(e) }) },
  cb = {
    Accordion: ov,
    Alert: lv,
    Avatar: vv,
    Badge: gv,
    Breadcrumb: bv,
    Button: Sv,
    Checkbox: Pv,
    CloseButton: Tv,
    Code: zv,
    Container: jv,
    Divider: Lv,
    Drawer: $v,
    Editable: Yv,
    Form: Gv,
    FormLabel: Kv,
    Heading: Zv,
    Input: ng,
    Kbd: og,
    Link: ag,
    List: lg,
    Menu: hg,
    Modal: Cg,
    NumberInput: Vg,
    PinInput: Hg,
    Popover: Zg,
    Progress: ny,
    Radio: iy,
    Select: fy,
    Skeleton: py,
    SkipLink: hy,
    Slider: wy,
    Spinner: Sy,
    Stat: _y,
    Switch: Ly,
    Table: Hy,
    Tabs: Qy,
    Tag: Zy,
    Textarea: nb,
    Tooltip: ib,
    FormError: sb,
  },
  fb = {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
    '8px': '8px solid',
  };
function db() {
  return (db =
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
var pb = db(
    {
      breakpoints:
        ((eb = {
          sm: '30em',
          md: '48em',
          lg: '62em',
          xl: '80em',
          '2xl': '96em',
        }),
        vd({
          condition: !0,
          message: [
            '[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon',
            'simply pass the breakpoints as an object. Remove the createBreakpoint(..) call',
          ].join(''),
        }),
        vm({ base: '0em' }, eb)),
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
    Pg,
    {
      sizes: cv,
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
      space: uv,
      borders: fb,
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
  hb = [
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
function mb(e) {
  return !!$f(e) && hb.every((t) => Object.prototype.hasOwnProperty.call(e, t));
}
function vb() {
  return (vb =
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
var gb = vb({ direction: 'ltr' }, pb, {
    components: cb,
    styles: {
      global: (e) => ({
        body: {
          fontFamily: 'body',
          color: hm('gray.800', 'whiteAlpha.900')(e),
          bg: hm('white', 'gray.800')(e),
          transitionProperty: 'background-color',
          transitionDuration: 'normal',
          lineHeight: 'base',
        },
        '*::placeholder': { color: hm('gray.400', 'whiteAlpha.400')(e) },
        '*, *::before, &::after': {
          borderColor: hm('gray.200', 'whiteAlpha.300')(e),
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
  yb = (e) => {
    var {
        children: r,
        colorModeManager: n,
        portalZIndex: o,
        resetCSS: a = !0,
        theme: i = {},
        environment: l,
        cssVarsRoot: u,
      } = e,
      s = t.exports.createElement(am, { environment: l }, r);
    return t.exports.createElement(
      Vd,
      null,
      t.exports.createElement(
        Fh,
        { theme: i, cssVarsRoot: u },
        t.exports.createElement(
          ep,
          { colorModeManager: n, options: i.config },
          a && t.exports.createElement(Vf, null),
          t.exports.createElement(Bh, null),
          o ? t.exports.createElement(Id, { zIndex: o }, s) : s,
        ),
      ),
    );
  };
function bb() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = [...t],
    o = t[t.length - 1];
  return (
    mb(o) && n.length > 1 ? (n = n.slice(0, n.length - 1)) : (o = gb),
    gd(...n.map((e) => (t) => Uf(e) ? e(t) : xb(t, e)))(o)
  );
}
function xb() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Qf({}, ...t, wb);
}
function wb(e, t, r, n) {
  if ((Uf(e) || Uf(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return function () {
      var r = Uf(e) ? e(...arguments) : e,
        n = Uf(t) ? t(...arguments) : t;
      return Qf({}, r, n, wb);
    };
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ yb.defaultProps =
  { theme: gb };
var kb = function (e, t) {
  return (kb =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    })(e, t);
};
function Sb(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null',
    );
  function r() {
    this.constructor = e;
  }
  kb(e, t),
    (e.prototype =
      null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
}
var Eb = function () {
  return (Eb =
    Object.assign ||
    function (e) {
      for (var t, r = 1, n = arguments.length; r < n; r++)
        for (var o in (t = arguments[r]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return e;
    }).apply(this, arguments);
};
function _b(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
  }
  return r;
}
function Cb(e, t) {
  var r = 'function' == typeof Symbol && e[Symbol.iterator];
  if (!r) return e;
  var n,
    o,
    a = r.call(e),
    i = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) i.push(n.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      n && !n.done && (r = a.return) && r.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function Pb(e, t, r) {
  if (r || 2 === arguments.length)
    for (var n, o = 0, a = t.length; o < a; o++)
      (!n && o in t) ||
        (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
  return e.concat(n || Array.prototype.slice.call(t));
}
var Ab = function (e) {
    return {
      isEnabled: function (t) {
        return e.some(function (e) {
          return !!t[e];
        });
      },
    };
  },
  Tb = {
    measureLayout: Ab(['layout', 'layoutId', 'drag', '_layoutResetTransform']),
    animation: Ab([
      'animate',
      'exit',
      'variants',
      'whileHover',
      'whileTap',
      'whileFocus',
      'whileDrag',
    ]),
    exit: Ab(['exit']),
    drag: Ab(['drag', 'dragControls']),
    focus: Ab(['whileFocus']),
    hover: Ab(['whileHover', 'onHoverStart', 'onHoverEnd']),
    tap: Ab(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
    pan: Ab(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
    layoutAnimation: Ab(['layout', 'layoutId']),
  };
var Ob = t.exports.createContext({ strict: !1 }),
  Rb = Object.keys(Tb),
  zb = Rb.length;
var jb = t.exports.createContext({
    transformPagePoint: function (e) {
      return e;
    },
    isStatic: !1,
  }),
  Lb = t.exports.createContext({});
var Mb = t.exports.createContext(null);
function Fb(e) {
  var r = t.exports.useRef(null);
  return null === r.current && (r.current = e()), r.current;
}
function Bb() {
  var e = t.exports.useContext(Mb);
  if (null === e) return [!0, null];
  var r = e.isPresent,
    n = e.onExitComplete,
    o = e.register,
    a = Nb();
  t.exports.useEffect(function () {
    return o(a);
  }, []);
  return !r && n
    ? [
        !1,
        function () {
          return null == n ? void 0 : n(a);
        },
      ]
    : [!0];
}
var Ib = 0,
  Db = function () {
    return Ib++;
  },
  Nb = function () {
    return Fb(Db);
  },
  Vb = t.exports.createContext(null),
  Wb = 'undefined' != typeof window,
  Hb = Wb ? t.exports.useLayoutEffect : t.exports.useEffect;
function Ub(e, r, n, o) {
  var a = t.exports.useContext(jb),
    i = t.exports.useContext(Ob),
    l = t.exports.useContext(Lb).visualElement,
    u = t.exports.useContext(Mb),
    s = (function (e) {
      var r = e.layoutId,
        n = t.exports.useContext(Vb);
      return n && void 0 !== r ? n + '-' + r : r;
    })(n),
    c = t.exports.useRef(void 0);
  o || (o = i.renderer),
    !c.current &&
      o &&
      (c.current = o(e, {
        visualState: r,
        parent: l,
        props: Eb(Eb({}, n), { layoutId: s }),
        presenceId: null == u ? void 0 : u.id,
        blockInitialAnimation: !1 === (null == u ? void 0 : u.initial),
      }));
  var f = c.current;
  return (
    Hb(function () {
      var e;
      f &&
        (f.setProps(Eb(Eb(Eb({}, a), n), { layoutId: s })),
        (f.isPresent = null === (e = u) || e.isPresent),
        (f.isPresenceRoot = !l || l.presenceId !== (null == u ? void 0 : u.id)),
        f.syncRender());
    }),
    t.exports.useEffect(function () {
      var e;
      f &&
        (null === (e = f.animationState) || void 0 === e || e.animateChanges());
    }),
    Hb(function () {
      return function () {
        return null == f ? void 0 : f.notifyUnmount();
      };
    }, []),
    f
  );
}
function $b(e) {
  return (
    'object' == typeof e && Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
function qb(e) {
  return Array.isArray(e);
}
function Yb(e) {
  return 'string' == typeof e || qb(e);
}
function Xb(e, t, r, n, o) {
  var a;
  return (
    void 0 === n && (n = {}),
    void 0 === o && (o = {}),
    'string' == typeof t &&
      (t = null === (a = e.variants) || void 0 === a ? void 0 : a[t]),
    'function' == typeof t ? t(null != r ? r : e.custom, n, o) : t
  );
}
function Qb(e, t, r) {
  var n = e.getProps();
  return Xb(
    n,
    t,
    null != r ? r : n.custom,
    (function (e) {
      var t = {};
      return (
        e.forEachValue(function (e, r) {
          return (t[r] = e.get());
        }),
        t
      );
    })(e),
    (function (e) {
      var t = {};
      return (
        e.forEachValue(function (e, r) {
          return (t[r] = e.getVelocity());
        }),
        t
      );
    })(e),
  );
}
function Gb(e) {
  var t;
  return (
    'function' ==
      typeof (null === (t = e.animate) || void 0 === t ? void 0 : t.start) ||
    Yb(e.initial) ||
    Yb(e.animate) ||
    Yb(e.whileHover) ||
    Yb(e.whileDrag) ||
    Yb(e.whileTap) ||
    Yb(e.whileFocus) ||
    Yb(e.exit)
  );
}
function Kb(e) {
  return Boolean(Gb(e) || e.variants);
}
function Zb(e, r) {
  var n = (function (e, t) {
      if (Gb(e)) {
        var r = e.initial,
          n = e.animate;
        return {
          initial: !1 === r || Yb(r) ? r : void 0,
          animate: Yb(n) ? n : void 0,
        };
      }
      return !1 !== e.inherit ? t : {};
    })(e, t.exports.useContext(Lb)),
    o = n.initial,
    a = n.animate;
  return t.exports.useMemo(
    function () {
      return { initial: o, animate: a };
    },
    r ? [Jb(o), Jb(a)] : [],
  );
}
function Jb(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
function ex(e) {
  var r = e.preloadedFeatures,
    n = e.createVisualElement,
    o = e.useRender,
    a = e.useVisualState,
    i = e.Component;
  return (
    r &&
      (function (e) {
        for (var t in e) {
          var r = e[t];
          null !== r && (Tb[t].Component = r);
        }
      })(r),
    t.exports.forwardRef(function (e, r) {
      var l = t.exports.useContext(jb).isStatic,
        u = null,
        s = Zb(e, l),
        c = a(e, l);
      return (
        !l &&
          Wb &&
          ((s.visualElement = Ub(i, c, e, n)),
          (u = (function (e, r, n) {
            var o = [];
            if ((t.exports.useContext(Ob), !r)) return null;
            for (var a = 0; a < zb; a++) {
              var i = Rb[a],
                l = Tb[i],
                u = l.isEnabled,
                s = l.Component;
              u(e) &&
                s &&
                o.push(
                  t.exports.createElement(
                    s,
                    Eb({ key: i }, e, { visualElement: r }),
                  ),
                );
            }
            return o;
          })(e, s.visualElement))),
        t.exports.createElement(
          t.exports.Fragment,
          null,
          t.exports.createElement(
            Lb.Provider,
            { value: s },
            o(
              i,
              e,
              (function (e, r, n) {
                return t.exports.useCallback(
                  function (t) {
                    var o;
                    t &&
                      (null === (o = e.mount) || void 0 === o || o.call(e, t)),
                      r && (t ? r.mount(t) : r.unmount()),
                      n &&
                        ('function' == typeof n
                          ? n(t)
                          : $b(n) && (n.current = t));
                  },
                  [r],
                );
              })(c, s.visualElement, r),
              c,
              l,
            ),
          ),
          u,
        )
      );
    })
  );
}
function tx(e) {
  function t(t, r) {
    return void 0 === r && (r = {}), ex(e(t, r));
  }
  var r = new Map();
  return new Proxy(t, {
    get: function (e, n) {
      return r.has(n) || r.set(n, t(n)), r.get(n);
    },
  });
}
var rx = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'svg',
  'switch',
  'symbol',
  'text',
  'tspan',
  'use',
  'view',
];
function nx(e) {
  return (
    'string' == typeof e &&
    !e.includes('-') &&
    !!(rx.indexOf(e) > -1 || /[A-Z]/.test(e))
  );
}
var ox = {};
var ax = ['', 'X', 'Y', 'Z'],
  ix = ['transformPerspective', 'x', 'y', 'z'];
function lx(e, t) {
  return ix.indexOf(e) - ix.indexOf(t);
}
['translate', 'scale', 'rotate', 'skew'].forEach(function (e) {
  return ax.forEach(function (t) {
    return ix.push(e + t);
  });
});
var ux = new Set(ix);
function sx(e) {
  return ux.has(e);
}
var cx = new Set(['originX', 'originY', 'originZ']);
function fx(e) {
  return cx.has(e);
}
function dx(e, t) {
  var r = t.layout,
    n = t.layoutId;
  return (
    sx(e) || fx(e) || ((r || void 0 !== n) && (!!ox[e] || 'opacity' === e))
  );
}
var px = function (e) {
    return null !== e && 'object' == typeof e && e.getVelocity;
  },
  hx = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  };
function mx(e) {
  return e.startsWith('--');
}
var vx = function (e, t) {
    return t && 'number' == typeof e ? t.transform(e) : e;
  },
  gx = function () {
    return (gx =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var o in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  },
  yx = function (e, t) {
    return function (r) {
      return Math.max(Math.min(r, t), e);
    };
  },
  bx = function (e) {
    return e % 1 ? Number(e.toFixed(5)) : e;
  },
  xx = /(-)?([\d]*\.?[\d])+/g,
  wx =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
  kx =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function Sx(
  e,
) {
  return 'string' == typeof e;
}
var Ex = {
    test: function (e) {
      return 'number' == typeof e;
    },
    parse: parseFloat,
    transform: function (e) {
      return e;
    },
  },
  _x = gx(gx({}, Ex), { transform: yx(0, 1) }),
  Cx = gx(gx({}, Ex), { default: 1 }),
  Px = function (e) {
    return {
      test: function (t) {
        return Sx(t) && t.endsWith(e) && 1 === t.split(' ').length;
      },
      parse: parseFloat,
      transform: function (t) {
        return '' + t + e;
      },
    };
  },
  Ax = Px('deg'),
  Tx = Px('%'),
  Ox = Px('px'),
  Rx = Px('vh'),
  zx = Px('vw'),
  jx = gx(gx({}, Tx), {
    parse: function (e) {
      return Tx.parse(e) / 100;
    },
    transform: function (e) {
      return Tx.transform(100 * e);
    },
  }),
  Lx = function (e, t) {
    return function (r) {
      return Boolean(
        (Sx(r) && kx.test(r) && r.startsWith(e)) ||
          (t && Object.prototype.hasOwnProperty.call(r, t)),
      );
    };
  },
  Mx = function (e, t, r) {
    return function (n) {
      var o;
      if (!Sx(n)) return n;
      var a = n.match(xx),
        i = a[0],
        l = a[1],
        u = a[2],
        s = a[3];
      return (
        ((o = {})[e] = parseFloat(i)),
        (o[t] = parseFloat(l)),
        (o[r] = parseFloat(u)),
        (o.alpha = void 0 !== s ? parseFloat(s) : 1),
        o
      );
    };
  },
  Fx = {
    test: Lx('hsl', 'hue'),
    parse: Mx('hue', 'saturation', 'lightness'),
    transform: function (e) {
      var t = e.hue,
        r = e.saturation,
        n = e.lightness,
        o = e.alpha,
        a = void 0 === o ? 1 : o;
      return (
        'hsla(' +
        Math.round(t) +
        ', ' +
        Tx.transform(bx(r)) +
        ', ' +
        Tx.transform(bx(n)) +
        ', ' +
        bx(_x.transform(a)) +
        ')'
      );
    },
  },
  Bx = yx(0, 255),
  Ix = gx(gx({}, Ex), {
    transform: function (e) {
      return Math.round(Bx(e));
    },
  }),
  Dx = {
    test: Lx('rgb', 'red'),
    parse: Mx('red', 'green', 'blue'),
    transform: function (e) {
      var t = e.red,
        r = e.green,
        n = e.blue,
        o = e.alpha,
        a = void 0 === o ? 1 : o;
      return (
        'rgba(' +
        Ix.transform(t) +
        ', ' +
        Ix.transform(r) +
        ', ' +
        Ix.transform(n) +
        ', ' +
        bx(_x.transform(a)) +
        ')'
      );
    },
  };
var Nx = {
    test: Lx('#'),
    parse: function (e) {
      var t = '',
        r = '',
        n = '',
        o = '';
      return (
        e.length > 5
          ? ((t = e.substr(1, 2)),
            (r = e.substr(3, 2)),
            (n = e.substr(5, 2)),
            (o = e.substr(7, 2)))
          : ((t = e.substr(1, 1)),
            (r = e.substr(2, 1)),
            (n = e.substr(3, 1)),
            (o = e.substr(4, 1)),
            (t += t),
            (r += r),
            (n += n),
            (o += o)),
        {
          red: parseInt(t, 16),
          green: parseInt(r, 16),
          blue: parseInt(n, 16),
          alpha: o ? parseInt(o, 16) / 255 : 1,
        }
      );
    },
    transform: Dx.transform,
  },
  Vx = {
    test: function (e) {
      return Dx.test(e) || Nx.test(e) || Fx.test(e);
    },
    parse: function (e) {
      return Dx.test(e) ? Dx.parse(e) : Fx.test(e) ? Fx.parse(e) : Nx.parse(e);
    },
    transform: function (e) {
      return Sx(e)
        ? e
        : e.hasOwnProperty('red')
        ? Dx.transform(e)
        : Fx.transform(e);
    },
  };
function Wx(e) {
  var t = [],
    r = 0,
    n = e.match(wx);
  n &&
    ((r = n.length),
    (e = e.replace(wx, '${c}')),
    t.push.apply(t, n.map(Vx.parse)));
  var o = e.match(xx);
  return (
    o && ((e = e.replace(xx, '${n}')), t.push.apply(t, o.map(Ex.parse))),
    { values: t, numColors: r, tokenised: e }
  );
}
function Hx(e) {
  return Wx(e).values;
}
function Ux(e) {
  var t = Wx(e),
    r = t.values,
    n = t.numColors,
    o = t.tokenised,
    a = r.length;
  return function (e) {
    for (var t = o, r = 0; r < a; r++)
      t = t.replace(
        r < n ? '${c}' : '${n}',
        r < n ? Vx.transform(e[r]) : bx(e[r]),
      );
    return t;
  };
}
var $x = function (e) {
  return 'number' == typeof e ? 0 : e;
};
var qx = {
    test: function (e) {
      var t, r, n, o;
      return (
        isNaN(e) &&
        Sx(e) &&
        (null !==
          (r =
            null === (t = e.match(xx)) || void 0 === t ? void 0 : t.length) &&
        void 0 !== r
          ? r
          : 0) +
          (null !==
            (o =
              null === (n = e.match(wx)) || void 0 === n ? void 0 : n.length) &&
          void 0 !== o
            ? o
            : 0) >
          0
      );
    },
    parse: Hx,
    createTransformer: Ux,
    getAnimatableNone: function (e) {
      var t = Hx(e);
      return Ux(e)(t.map($x));
    },
  },
  Yx = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function Xx(e) {
  var t = e.slice(0, -1).split('('),
    r = t[0],
    n = t[1];
  if ('drop-shadow' === r) return e;
  var o = (n.match(xx) || [])[0];
  if (!o) return e;
  var a = n.replace(o, ''),
    i = Yx.has(r) ? 1 : 0;
  return o !== n && (i *= 100), r + '(' + i + a + ')';
}
var Qx = /([a-z-]*)\(.*?\)/g,
  Gx = gx(gx({}, qx), {
    getAnimatableNone: function (e) {
      var t = e.match(Qx);
      return t ? t.map(Xx).join(' ') : e;
    },
  }),
  Kx = Eb(Eb({}, Ex), { transform: Math.round }),
  Zx = {
    borderWidth: Ox,
    borderTopWidth: Ox,
    borderRightWidth: Ox,
    borderBottomWidth: Ox,
    borderLeftWidth: Ox,
    borderRadius: Ox,
    radius: Ox,
    borderTopLeftRadius: Ox,
    borderTopRightRadius: Ox,
    borderBottomRightRadius: Ox,
    borderBottomLeftRadius: Ox,
    width: Ox,
    maxWidth: Ox,
    height: Ox,
    maxHeight: Ox,
    size: Ox,
    top: Ox,
    right: Ox,
    bottom: Ox,
    left: Ox,
    padding: Ox,
    paddingTop: Ox,
    paddingRight: Ox,
    paddingBottom: Ox,
    paddingLeft: Ox,
    margin: Ox,
    marginTop: Ox,
    marginRight: Ox,
    marginBottom: Ox,
    marginLeft: Ox,
    rotate: Ax,
    rotateX: Ax,
    rotateY: Ax,
    rotateZ: Ax,
    scale: Cx,
    scaleX: Cx,
    scaleY: Cx,
    scaleZ: Cx,
    skew: Ax,
    skewX: Ax,
    skewY: Ax,
    distance: Ox,
    translateX: Ox,
    translateY: Ox,
    translateZ: Ox,
    x: Ox,
    y: Ox,
    z: Ox,
    perspective: Ox,
    transformPerspective: Ox,
    opacity: _x,
    originX: jx,
    originY: jx,
    originZ: Ox,
    zIndex: Kx,
    fillOpacity: _x,
    strokeOpacity: _x,
    numOctaves: Kx,
  };
function Jx(e, t, r, n, o, a, i, l) {
  var u,
    s = e.style,
    c = e.vars,
    f = e.transform,
    d = e.transformKeys,
    p = e.transformOrigin;
  d.length = 0;
  var h = !1,
    m = !1,
    v = !0;
  for (var g in t) {
    var y = t[g];
    if (mx(g)) c[g] = y;
    else {
      var b = Zx[g],
        x = vx(y, b);
      if (sx(g)) {
        if (((h = !0), (f[g] = x), d.push(g), !v)) continue;
        y !== (null !== (u = b.default) && void 0 !== u ? u : 0) && (v = !1);
      } else if (fx(g)) (p[g] = x), (m = !0);
      else if (
        (null == r ? void 0 : r.isHydrated) &&
        (null == n ? void 0 : n.isHydrated) &&
        ox[g]
      ) {
        var w = ox[g].process(y, n, r),
          k = ox[g].applyTo;
        if (k) for (var S = k.length, E = 0; E < S; E++) s[k[E]] = w;
        else s[g] = w;
      } else s[g] = x;
    }
  }
  n && r && i && l
    ? ((s.transform = i(n.deltaFinal, n.treeScale, h ? f : void 0)),
      a && (s.transform = a(f, s.transform)),
      (s.transformOrigin = l(n)))
    : (h &&
        (s.transform = (function (e, t, r, n) {
          var o = e.transform,
            a = e.transformKeys,
            i = t.enableHardwareAcceleration,
            l = void 0 === i || i,
            u = t.allowTransformNone,
            s = void 0 === u || u,
            c = '';
          a.sort(lx);
          for (var f = !1, d = a.length, p = 0; p < d; p++) {
            var h = a[p];
            (c += (hx[h] || h) + '(' + o[h] + ') '), 'z' === h && (f = !0);
          }
          return (
            !f && l ? (c += 'translateZ(0)') : (c = c.trim()),
            n ? (c = n(o, r ? '' : c)) : s && r && (c = 'none'),
            c
          );
        })(e, o, v, a)),
      m &&
        (s.transformOrigin = (function (e) {
          var t = e.originX,
            r = void 0 === t ? '50%' : t,
            n = e.originY,
            o = void 0 === n ? '50%' : n,
            a = e.originZ;
          return r + ' ' + o + ' ' + (void 0 === a ? 0 : a);
        })(p)));
}
var ew = function () {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
  };
};
function tw(e, t, r) {
  for (var n in t) px(t[n]) || dx(n, r) || (e[n] = t[n]);
}
function rw(e, r, n) {
  var o = {};
  return (
    tw(o, e.style || {}, e),
    Object.assign(
      o,
      (function (e, r, n) {
        var o = e.transformTemplate;
        return t.exports.useMemo(
          function () {
            var e = {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            };
            Jx(e, r, void 0, void 0, { enableHardwareAcceleration: !n }, o);
            var t = e.style;
            return Eb(Eb({}, e.vars), t);
          },
          [r],
        );
      })(e, r, n),
    ),
    e.transformValues && (o = e.transformValues(o)),
    o
  );
}
function nw(e, t, r) {
  var n = {},
    o = rw(e, t, r);
  return (
    Boolean(e.drag) &&
      ((n.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
      (o.touchAction =
        !0 === e.drag ? 'none' : 'pan-' + ('x' === e.drag ? 'y' : 'x'))),
    (n.style = o),
    n
  );
}
var ow = new Set([
  'initial',
  'animate',
  'exit',
  'style',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'layout',
  'layoutId',
  '_layoutResetTransform',
  'onLayoutAnimationComplete',
  'onViewportBoxUpdate',
  'onLayoutMeasure',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  'drag',
  'dragControls',
  'dragListener',
  'dragConstraints',
  'dragDirectionLock',
  '_dragX',
  '_dragY',
  'dragElastic',
  'dragMomentum',
  'dragPropagation',
  'dragTransition',
  'whileDrag',
  'onPan',
  'onPanStart',
  'onPanEnd',
  'onPanSessionStart',
  'onTap',
  'onTapStart',
  'onTapCancel',
  'onHoverStart',
  'onHoverEnd',
  'whileFocus',
  'whileTap',
  'whileHover',
]);
function aw(e) {
  return ow.has(e);
}
var iw = function (e) {
  return !aw(e);
};
try {
  var lw = require('@emotion/is-prop-valid').default;
  iw = function (e) {
    return e.startsWith('on') ? !aw(e) : lw(e);
  };
} catch (JC) {}
function uw(e, t, r) {
  return 'string' == typeof e ? e : Ox.transform(t + r * e);
}
var sw = function (e, t) {
    return Ox.transform(e * t);
  },
  cw = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  fw = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function dw(e, t, r, n, o, a, i, l) {
  var u = t.attrX,
    s = t.attrY,
    c = t.originX,
    f = t.originY,
    d = t.pathLength,
    p = t.pathSpacing,
    h = void 0 === p ? 1 : p,
    m = t.pathOffset,
    v = void 0 === m ? 0 : m;
  Jx(
    e,
    _b(t, [
      'attrX',
      'attrY',
      'originX',
      'originY',
      'pathLength',
      'pathSpacing',
      'pathOffset',
    ]),
    r,
    n,
    o,
    a,
    i,
    l,
  ),
    (e.attrs = e.style),
    (e.style = {});
  var g = e.attrs,
    y = e.style,
    b = e.dimensions,
    x = e.totalPathLength;
  g.transform && (b && (y.transform = g.transform), delete g.transform),
    b &&
      (void 0 !== c || void 0 !== f || y.transform) &&
      (y.transformOrigin = (function (e, t, r) {
        return uw(t, e.x, e.width) + ' ' + uw(r, e.y, e.height);
      })(b, void 0 !== c ? c : 0.5, void 0 !== f ? f : 0.5)),
    void 0 !== u && (g.x = u),
    void 0 !== s && (g.y = s),
    void 0 !== x &&
      void 0 !== d &&
      (function (e, t, r, n, o, a) {
        void 0 === n && (n = 1),
          void 0 === o && (o = 0),
          void 0 === a && (a = !0);
        var i = a ? cw : fw;
        e[i.offset] = sw(-o, t);
        var l = sw(r, t),
          u = sw(n, t);
        e[i.array] = l + ' ' + u;
      })(g, x, d, h, v, !1);
}
var pw = function () {
  return Eb(
    Eb(
      {},
      {
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
      },
    ),
    { attrs: {} },
  );
};
function hw(e, r) {
  var n = t.exports.useMemo(
    function () {
      var t = pw();
      return (
        dw(
          t,
          r,
          void 0,
          void 0,
          { enableHardwareAcceleration: !1 },
          e.transformTemplate,
        ),
        Eb(Eb({}, t.attrs), { style: Eb({}, t.style) })
      );
    },
    [r],
  );
  if (e.style) {
    var o = {};
    tw(o, e.style, e), (n.style = Eb(Eb({}, o), n.style));
  }
  return n;
}
function mw(e) {
  void 0 === e && (e = !1);
  return function (r, n, o, a, i) {
    var l = a.latestValues,
      u = (nx(r) ? hw : nw)(n, l, i),
      s = (function (e, t, r) {
        var n = {};
        for (var o in e)
          (iw(o) || (!0 === r && aw(o)) || (!t && !aw(o))) && (n[o] = e[o]);
        return n;
      })(n, 'string' == typeof r, e),
      c = Eb(Eb(Eb({}, s), u), { ref: o });
    return t.exports.createElement(r, c);
  };
}
var vw = /([a-z])([A-Z])/g,
  gw = function (e) {
    return e.replace(vw, '$1-$2').toLowerCase();
  };
function yw(e, t) {
  var r = t.style,
    n = t.vars;
  for (var o in (Object.assign(e.style, r), n)) e.style.setProperty(o, n[o]);
}
var bw = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
]);
function xw(e, t) {
  for (var r in (yw(e, t), t.attrs))
    e.setAttribute(bw.has(r) ? r : gw(r), t.attrs[r]);
}
function ww(e) {
  var t = e.style,
    r = {};
  for (var n in t) (px(t[n]) || dx(n, e)) && (r[n] = t[n]);
  return r;
}
function kw(e) {
  var t = ww(e);
  for (var r in e) {
    if (px(e[r]))
      t['x' === r || 'y' === r ? 'attr' + r.toUpperCase() : r] = e[r];
  }
  return t;
}
function Sw(e) {
  return 'object' == typeof e && 'function' == typeof e.start;
}
var Ew = function (e) {
  return Array.isArray(e);
};
function _w(e) {
  var t,
    r = px(e) ? e.get() : e;
  return (
    (t = r),
    Boolean(t && 'object' == typeof t && t.mix && t.toValue) ? r.toValue() : r
  );
}
function Cw(e, t, r, n) {
  var o = e.scrapeMotionValuesFromProps,
    a = e.createRenderState,
    i = e.onMount,
    l = { latestValues: Aw(t, r, n, o), renderState: a() };
  return (
    i &&
      (l.mount = function (e) {
        return i(t, e, l);
      }),
    l
  );
}
var Pw = function (e) {
  return function (r, n) {
    var o = t.exports.useContext(Lb),
      a = t.exports.useContext(Mb);
    return n
      ? Cw(e, r, o, a)
      : Fb(function () {
          return Cw(e, r, o, a);
        });
  };
};
function Aw(e, t, r, n) {
  var o = {},
    a = !1 === (null == r ? void 0 : r.initial),
    i = n(e);
  for (var l in i) o[l] = _w(i[l]);
  var u = e.initial,
    s = e.animate,
    c = Gb(e),
    f = Kb(e);
  t &&
    f &&
    !c &&
    !1 !== e.inherit &&
    (null != u || (u = t.initial), null != s || (s = t.animate));
  var d = a || !1 === u ? s : u;
  d &&
    'boolean' != typeof d &&
    !Sw(d) &&
    (Array.isArray(d) ? d : [d]).forEach(function (t) {
      var r = Xb(e, t);
      if (r) {
        var n = r.transitionEnd;
        r.transition;
        var a = _b(r, ['transitionEnd', 'transition']);
        for (var i in a) o[i] = a[i];
        for (var i in n) o[i] = n[i];
      }
    });
  return o;
}
var Tw = {
  useVisualState: Pw({
    scrapeMotionValuesFromProps: kw,
    createRenderState: pw,
    onMount: function (e, t, r) {
      var n = r.renderState,
        o = r.latestValues;
      try {
        n.dimensions =
          'function' == typeof t.getBBox
            ? t.getBBox()
            : t.getBoundingClientRect();
      } catch (a) {
        n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
      }
      'path' === t.tagName && (n.totalPathLength = t.getTotalLength()),
        dw(
          n,
          o,
          void 0,
          void 0,
          { enableHardwareAcceleration: !1 },
          e.transformTemplate,
        ),
        xw(t, n);
    },
  }),
};
var Ow,
  Rw,
  zw = {
    useVisualState: Pw({
      scrapeMotionValuesFromProps: ww,
      createRenderState: ew,
    }),
  };
function jw(e, t, r, n) {
  return (
    e.addEventListener(t, r, n),
    function () {
      return e.removeEventListener(t, r, n);
    }
  );
}
function Lw(e, r, n, o) {
  t.exports.useEffect(
    function () {
      var t = e.current;
      if (n && t) return jw(t, r, n, o);
    },
    [e, r, n, o],
  );
}
function Mw(e) {
  return 'undefined' != typeof PointerEvent && e instanceof PointerEvent
    ? !('mouse' !== e.pointerType)
    : e instanceof MouseEvent;
}
function Fw(e) {
  return !!e.touches;
}
((Rw = Ow || (Ow = {})).Animate = 'animate'),
  (Rw.Hover = 'whileHover'),
  (Rw.Tap = 'whileTap'),
  (Rw.Drag = 'whileDrag'),
  (Rw.Focus = 'whileFocus'),
  (Rw.Exit = 'exit');
var Bw = { pageX: 0, pageY: 0 };
function Iw(e, t) {
  void 0 === t && (t = 'page');
  var r = e.touches[0] || e.changedTouches[0] || Bw;
  return { x: r[t + 'X'], y: r[t + 'Y'] };
}
function Dw(e, t) {
  return void 0 === t && (t = 'page'), { x: e[t + 'X'], y: e[t + 'Y'] };
}
function Nw(e, t) {
  return void 0 === t && (t = 'page'), { point: Fw(e) ? Iw(e, t) : Dw(e, t) };
}
var Vw = function (e, t) {
    void 0 === t && (t = !1);
    var r,
      n = function (t) {
        return e(t, Nw(t));
      };
    return t
      ? ((r = n),
        function (e) {
          var t = e instanceof MouseEvent;
          (!t || (t && 0 === e.button)) && r(e);
        })
      : n;
  },
  Ww = {
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointercancel: 'mousecancel',
    pointerover: 'mouseover',
    pointerout: 'mouseout',
    pointerenter: 'mouseenter',
    pointerleave: 'mouseleave',
  },
  Hw = {
    pointerdown: 'touchstart',
    pointermove: 'touchmove',
    pointerup: 'touchend',
    pointercancel: 'touchcancel',
  };
function Uw(e) {
  return Wb && null === window.onpointerdown
    ? e
    : Wb && null === window.ontouchstart
    ? Hw[e]
    : Wb && null === window.onmousedown
    ? Ww[e]
    : e;
}
function $w(e, t, r, n) {
  return jw(e, Uw(t), Vw(r, 'pointerdown' === t), n);
}
function qw(e, t, r, n) {
  return Lw(e, Uw(t), r && Vw(r, 'pointerdown' === t), n);
}
function Yw(e) {
  var t = null;
  return function () {
    return (
      null === t &&
      ((t = e),
      function () {
        t = null;
      })
    );
  };
}
var Xw = Yw('dragHorizontal'),
  Qw = Yw('dragVertical');
function Gw(e) {
  var t = !1;
  if ('y' === e) t = Qw();
  else if ('x' === e) t = Xw();
  else {
    var r = Xw(),
      n = Qw();
    r && n
      ? (t = function () {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function Kw() {
  var e = Gw(!0);
  return !e || (e(), !1);
}
function Zw(e, t, r) {
  return function (n, o) {
    var a;
    Mw(n) &&
      !Kw() &&
      (null == r || r(n, o),
      null === (a = e.animationState) ||
        void 0 === a ||
        a.setActive(Ow.Hover, t));
  };
}
var Jw = function (e, t) {
  return !!t && (e === t || Jw(e, t.parentElement));
};
function ek(e) {
  return t.exports.useEffect(function () {
    return function () {
      return e();
    };
  }, []);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var tk =
  function () {
    return (tk =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var o in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  };
function rk(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
  }
  return r;
}
var nk = function (e, t, r) {
  return Math.min(Math.max(r, e), t);
};
function ok(e) {
  var t,
    r,
    n = e.duration,
    o = void 0 === n ? 800 : n,
    a = e.bounce,
    i = void 0 === a ? 0.25 : a,
    l = e.velocity,
    u = void 0 === l ? 0 : l,
    s = e.mass,
    c = void 0 === s ? 1 : s,
    f = 1 - i;
  (f = nk(0.05, 1, f)),
    (o = nk(0.01, 10, o / 1e3)),
    f < 1
      ? ((t = function (e) {
          var t = e * f,
            r = t * o;
          return 0.001 - ((t - u) / ak(e, f)) * Math.exp(-r);
        }),
        (r = function (e) {
          var r = e * f * o,
            n = r * u + u,
            a = Math.pow(f, 2) * Math.pow(e, 2) * o,
            i = Math.exp(-r),
            l = ak(Math.pow(e, 2), f);
          return ((0.001 - t(e) > 0 ? -1 : 1) * ((n - a) * i)) / l;
        }))
      : ((t = function (e) {
          return Math.exp(-e * o) * ((e - u) * o + 1) - 0.001;
        }),
        (r = function (e) {
          return Math.exp(-e * o) * (o * o * (u - e));
        }));
  var d = (function (e, t, r) {
    for (var n = r, o = 1; o < 12; o++) n -= e(n) / t(n);
    return n;
  })(t, r, 5 / o);
  if (((o *= 1e3), isNaN(d)))
    return { stiffness: 100, damping: 10, duration: o };
  var p = Math.pow(d, 2) * c;
  return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: o };
}
function ak(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var ik = ['duration', 'bounce'],
  lk = ['stiffness', 'damping', 'mass'];
function uk(e, t) {
  return t.some(function (t) {
    return void 0 !== e[t];
  });
}
function sk(e) {
  var t = e.from,
    r = void 0 === t ? 0 : t,
    n = e.to,
    o = void 0 === n ? 1 : n,
    a = e.restSpeed,
    i = void 0 === a ? 2 : a,
    l = e.restDelta,
    u = rk(e, ['from', 'to', 'restSpeed', 'restDelta']),
    s = { done: !1, value: r },
    c = (function (e) {
      var t = tk(
        {
          velocity: 0,
          stiffness: 100,
          damping: 10,
          mass: 1,
          isResolvedFromDuration: !1,
        },
        e,
      );
      if (!uk(e, lk) && uk(e, ik)) {
        var r = ok(e);
        (t = tk(tk(tk({}, t), r), {
          velocity: 0,
          mass: 1,
        })).isResolvedFromDuration = !0;
      }
      return t;
    })(u),
    f = c.stiffness,
    d = c.damping,
    p = c.mass,
    h = c.velocity,
    m = c.duration,
    v = c.isResolvedFromDuration,
    g = ck,
    y = ck;
  function b() {
    var e = h ? -h / 1e3 : 0,
      t = o - r,
      n = d / (2 * Math.sqrt(f * p)),
      a = Math.sqrt(f / p) / 1e3;
    if ((null != l || (l = Math.abs(o - r) <= 1 ? 0.01 : 0.4), n < 1)) {
      var i = ak(a, n);
      (g = function (r) {
        var l = Math.exp(-n * a * r);
        return (
          o -
          l * (((e + n * a * t) / i) * Math.sin(i * r) + t * Math.cos(i * r))
        );
      }),
        (y = function (r) {
          var o = Math.exp(-n * a * r);
          return (
            n *
              a *
              o *
              ((Math.sin(i * r) * (e + n * a * t)) / i + t * Math.cos(i * r)) -
            o * (Math.cos(i * r) * (e + n * a * t) - i * t * Math.sin(i * r))
          );
        });
    } else if (1 === n)
      g = function (r) {
        return o - Math.exp(-a * r) * (t + (e + a * t) * r);
      };
    else {
      var u = a * Math.sqrt(n * n - 1);
      g = function (r) {
        var i = Math.exp(-n * a * r),
          l = Math.min(u * r, 300);
        return (
          o - (i * ((e + n * a * t) * Math.sinh(l) + u * t * Math.cosh(l))) / u
        );
      };
    }
  }
  return (
    b(),
    {
      next: function (e) {
        var t = g(e);
        if (v) s.done = e >= m;
        else {
          var r = 1e3 * y(e),
            n = Math.abs(r) <= i,
            a = Math.abs(o - t) <= l;
          s.done = n && a;
        }
        return (s.value = s.done ? o : t), s;
      },
      flipTarget: function () {
        var e;
        (h = -h), (r = (e = [o, r])[0]), (o = e[1]), b();
      },
    }
  );
}
sk.needsInterpolation = function (e, t) {
  return 'string' == typeof e || 'string' == typeof t;
};
var ck = function (e) {
    return 0;
  },
  fk = function (e, t, r) {
    var n = t - e;
    return 0 === n ? 1 : (r - e) / n;
  },
  dk = function (e, t, r) {
    return -r * e + r * t + e;
  },
  pk = function (e, t, r) {
    var n = e * e,
      o = t * t;
    return Math.sqrt(Math.max(0, r * (o - n) + n));
  },
  hk = [Nx, Dx, Fx],
  mk = function (e) {
    return hk.find(function (t) {
      return t.test(e);
    });
  },
  vk = function (e, t) {
    var r = mk(e),
      n = mk(t);
    r.transform, n.transform;
    var o = r.parse(e),
      a = n.parse(t),
      i = tk({}, o),
      l = r === Fx ? dk : pk;
    return function (e) {
      for (var t in i) 'alpha' !== t && (i[t] = l(o[t], a[t], e));
      return (i.alpha = dk(o.alpha, a.alpha, e)), r.transform(i);
    };
  },
  gk = function (e) {
    return 'number' == typeof e;
  },
  yk = function (e, t) {
    return function (r) {
      return t(e(r));
    };
  },
  bk = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.reduce(yk);
  };
function xk(e, t) {
  return gk(e)
    ? function (r) {
        return dk(e, t, r);
      }
    : Vx.test(e)
    ? vk(e, t)
    : Ek(e, t);
}
var wk = function (e, t) {
    var r = (function (e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++)
            (!n && o in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
        return e.concat(n || Array.prototype.slice.call(t));
      })([], e),
      n = r.length,
      o = e.map(function (e, r) {
        return xk(e, t[r]);
      });
    return function (e) {
      for (var t = 0; t < n; t++) r[t] = o[t](e);
      return r;
    };
  },
  kk = function (e, t) {
    var r = tk(tk({}, e), t),
      n = {};
    for (var o in r)
      void 0 !== e[o] && void 0 !== t[o] && (n[o] = xk(e[o], t[o]));
    return function (e) {
      for (var t in n) r[t] = n[t](e);
      return r;
    };
  };
function Sk(e) {
  for (
    var t = qx.parse(e), r = t.length, n = 0, o = 0, a = 0, i = 0;
    i < r;
    i++
  )
    n || 'number' == typeof t[i] ? n++ : void 0 !== t[i].hue ? a++ : o++;
  return { parsed: t, numNumbers: n, numRGB: o, numHSL: a };
}
var Ek = function (e, t) {
    var r = qx.createTransformer(t),
      n = Sk(e),
      o = Sk(t);
    return bk(wk(n.parsed, o.parsed), r);
  },
  _k = function (e, t) {
    return function (r) {
      return dk(e, t, r);
    };
  };
function Ck(e, t, r) {
  for (
    var n,
      o = [],
      a =
        r ||
        ('number' == typeof (n = e[0])
          ? _k
          : 'string' == typeof n
          ? Vx.test(n)
            ? vk
            : Ek
          : Array.isArray(n)
          ? wk
          : 'object' == typeof n
          ? kk
          : void 0),
      i = e.length - 1,
      l = 0;
    l < i;
    l++
  ) {
    var u = a(e[l], e[l + 1]);
    if (t) {
      var s = Array.isArray(t) ? t[l] : t;
      u = bk(s, u);
    }
    o.push(u);
  }
  return o;
}
function Pk(e, t, r) {
  var n = void 0 === r ? {} : r,
    o = n.clamp,
    a = void 0 === o || o,
    i = n.ease,
    l = n.mixer,
    u = e.length;
  t.length,
    !i || !Array.isArray(i) || i.length,
    e[0] > e[u - 1] &&
      ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
  var s = Ck(t, i, l),
    c =
      2 === u
        ? (function (e, t) {
            var r = e[0],
              n = e[1],
              o = t[0];
            return function (e) {
              return o(fk(r, n, e));
            };
          })(e, s)
        : (function (e, t) {
            var r = e.length,
              n = r - 1;
            return function (o) {
              var a = 0,
                i = !1;
              if (
                (o <= e[0] ? (i = !0) : o >= e[n] && ((a = n - 1), (i = !0)),
                !i)
              ) {
                for (var l = 1; l < r && !(e[l] > o || l === n); l++);
                a = l - 1;
              }
              var u = fk(e[a], e[a + 1], o);
              return t[a](u);
            };
          })(e, s);
  return a
    ? function (t) {
        return c(nk(e[0], e[u - 1], t));
      }
    : c;
}
var Ak,
  Tk = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Ok = function (e) {
    return function (t) {
      return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
    };
  },
  Rk = function (e) {
    return function (t) {
      return t * t * ((e + 1) * t - e);
    };
  },
  zk = function (e) {
    return e;
  },
  jk =
    ((Ak = 2),
    function (e) {
      return Math.pow(e, Ak);
    }),
  Lk = Tk(jk),
  Mk = Ok(jk),
  Fk = function (e) {
    return 1 - Math.sin(Math.acos(e));
  },
  Bk = Tk(Fk),
  Ik = Ok(Bk),
  Dk = Rk(1.525),
  Nk = Tk(Dk),
  Vk = Ok(Dk),
  Wk = (function (e) {
    var t = Rk(e);
    return function (e) {
      return (e *= 2) < 1 ? 0.5 * t(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
    };
  })(1.525),
  Hk = function (e) {
    if (1 === e || 0 === e) return e;
    var t = e * e;
    return e < 0.36363636363636365
      ? 7.5625 * t
      : e < 0.7272727272727273
      ? 9.075 * t - 9.9 * e + 3.4
      : e < 0.9
      ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255
      : 10.8 * e * e - 20.52 * e + 10.72;
  },
  Uk = Tk(Hk);
function $k(e, t) {
  return e
    .map(function () {
      return t || Mk;
    })
    .splice(0, e.length - 1);
}
function qk(e) {
  var t = e.from,
    r = void 0 === t ? 0 : t,
    n = e.to,
    o = void 0 === n ? 1 : n,
    a = e.ease,
    i = e.offset,
    l = e.duration,
    u = void 0 === l ? 300 : l,
    s = { done: !1, value: r },
    c = Array.isArray(o) ? o : [r, o],
    f = (function (e, t) {
      return e.map(function (e) {
        return e * t;
      });
    })(
      i && i.length === c.length
        ? i
        : (function (e) {
            var t = e.length;
            return e.map(function (e, r) {
              return 0 !== r ? r / (t - 1) : 0;
            });
          })(c),
      u,
    );
  function d() {
    return Pk(f, c, { ease: Array.isArray(a) ? a : $k(c, a) });
  }
  var p = d();
  return {
    next: function (e) {
      return (s.value = p(e)), (s.done = e >= u), s;
    },
    flipTarget: function () {
      c.reverse(), (p = d());
    },
  };
}
var Yk = {
  keyframes: qk,
  spring: sk,
  decay: function (e) {
    var t = e.velocity,
      r = void 0 === t ? 0 : t,
      n = e.from,
      o = void 0 === n ? 0 : n,
      a = e.power,
      i = void 0 === a ? 0.8 : a,
      l = e.timeConstant,
      u = void 0 === l ? 350 : l,
      s = e.restDelta,
      c = void 0 === s ? 0.5 : s,
      f = e.modifyTarget,
      d = { done: !1, value: o },
      p = i * r,
      h = o + p,
      m = void 0 === f ? h : f(h);
    return (
      m !== h && (p = m - o),
      {
        next: function (e) {
          var t = -p * Math.exp(-e / u);
          return (
            (d.done = !(t > c || t < -c)), (d.value = d.done ? m : m + t), d
          );
        },
        flipTarget: function () {},
      }
    );
  },
};
function Xk(e, t, r) {
  return void 0 === r && (r = 0), e - t - r;
}
var Qk = function (e) {
  var t = function (t) {
    var r = t.delta;
    return e(r);
  };
  return {
    start: function () {
      return Cd.update(t, !0);
    },
    stop: function () {
      return Pd.update(t);
    },
  };
};
function Gk(e) {
  var t,
    r,
    n,
    o,
    a,
    i = e.from,
    l = e.autoplay,
    u = void 0 === l || l,
    s = e.driver,
    c = void 0 === s ? Qk : s,
    f = e.elapsed,
    d = void 0 === f ? 0 : f,
    p = e.repeat,
    h = void 0 === p ? 0 : p,
    m = e.repeatType,
    v = void 0 === m ? 'loop' : m,
    g = e.repeatDelay,
    y = void 0 === g ? 0 : g,
    b = e.onPlay,
    x = e.onStop,
    w = e.onComplete,
    k = e.onRepeat,
    S = e.onUpdate,
    E = rk(e, [
      'from',
      'autoplay',
      'driver',
      'elapsed',
      'repeat',
      'repeatType',
      'repeatDelay',
      'onPlay',
      'onStop',
      'onComplete',
      'onRepeat',
      'onUpdate',
    ]),
    _ = E.to,
    C = 0,
    P = E.duration,
    A = !1,
    T = !0,
    O = (function (e) {
      if (Array.isArray(e.to)) return qk;
      if (Yk[e.type]) return Yk[e.type];
      var t = new Set(Object.keys(e));
      return t.has('ease') || (t.has('duration') && !t.has('dampingRatio'))
        ? qk
        : t.has('dampingRatio') ||
          t.has('stiffness') ||
          t.has('mass') ||
          t.has('damping') ||
          t.has('restSpeed') ||
          t.has('restDelta')
        ? sk
        : qk;
    })(E);
  (null === (r = (t = O).needsInterpolation) || void 0 === r
    ? void 0
    : r.call(t, i, _)) &&
    ((a = Pk([0, 100], [i, _], { clamp: !1 })), (i = 0), (_ = 100));
  var R = O(tk(tk({}, E), { from: i, to: _ }));
  function z() {
    C++,
      'reverse' === v
        ? (d = (function (e, t, r, n) {
            return (
              void 0 === r && (r = 0),
              void 0 === n && (n = !0),
              n ? Xk(t + -e, t, r) : t - (e - t) + r
            );
          })(d, P, y, (T = C % 2 == 0)))
        : ((d = Xk(d, P, y)), 'mirror' === v && R.flipTarget()),
      (A = !1),
      k && k();
  }
  function j(e) {
    if ((T || (e = -e), (d += e), !A)) {
      var t = R.next(Math.max(0, d));
      (o = t.value), a && (o = a(o)), (A = T ? t.done : d <= 0);
    }
    null == S || S(o),
      A &&
        (0 === C && (null != P || (P = d)),
        C < h
          ? (function (e, t, r, n) {
              return n ? e >= t + r : e <= -r;
            })(d, P, y, T) && z()
          : (n.stop(), w && w()));
  }
  return (
    u && (null == b || b(), (n = c(j)).start()),
    {
      stop: function () {
        null == x || x(), n.stop();
      },
    }
  );
}
function Kk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var Zk = function (e) {
    return e.hasOwnProperty('x') && e.hasOwnProperty('y');
  },
  Jk = function (e) {
    return Zk(e) && e.hasOwnProperty('z');
  },
  eS = function (e, t) {
    return Math.abs(e - t);
  };
function tS(e, t) {
  if (gk(e) && gk(t)) return eS(e, t);
  if (Zk(e) && Zk(t)) {
    var r = eS(e.x, t.x),
      n = eS(e.y, t.y),
      o = Jk(e) && Jk(t) ? eS(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(o, 2));
  }
}
var rS = function (e, t) {
    return 1 - 3 * t + 3 * e;
  },
  nS = function (e, t) {
    return 3 * t - 6 * e;
  },
  oS = function (e) {
    return 3 * e;
  },
  aS = function (e, t, r) {
    return ((rS(t, r) * e + nS(t, r)) * e + oS(t)) * e;
  },
  iS = function (e, t, r) {
    return 3 * rS(t, r) * e * e + 2 * nS(t, r) * e + oS(t);
  };
function lS(e, t, r, n) {
  if (e === t && r === n) return zk;
  for (var o = new Float32Array(11), a = 0; a < 11; ++a)
    o[a] = aS(0.1 * a, e, r);
  function i(t) {
    for (var n = 0, a = 1; 10 !== a && o[a] <= t; ++a) n += 0.1;
    --a;
    var i = n + 0.1 * ((t - o[a]) / (o[a + 1] - o[a])),
      l = iS(i, e, r);
    return l >= 0.001
      ? (function (e, t, r, n) {
          for (var o = 0; o < 8; ++o) {
            var a = iS(t, r, n);
            if (0 === a) return t;
            t -= (aS(t, r, n) - e) / a;
          }
          return t;
        })(t, i, e, r)
      : 0 === l
      ? i
      : (function (e, t, r, n, o) {
          var a,
            i,
            l = 0;
          do {
            (a = aS((i = t + (r - t) / 2), n, o) - e) > 0 ? (r = i) : (t = i);
          } while (Math.abs(a) > 1e-7 && ++l < 10);
          return i;
        })(t, n, n + 0.1, e, r);
  }
  return function (e) {
    return 0 === e || 1 === e ? e : aS(i(e), t, n);
  };
}
var uS = function (e) {
    return function (t) {
      return e(t), null;
    };
  },
  sS = {
    tap: uS(function (e) {
      var r = e.onTap,
        n = e.onTapStart,
        o = e.onTapCancel,
        a = e.whileTap,
        i = e.visualElement,
        l = r || n || o || a,
        u = t.exports.useRef(!1),
        s = t.exports.useRef(null);
      function c() {
        var e;
        null === (e = s.current) || void 0 === e || e.call(s),
          (s.current = null);
      }
      function f() {
        var e;
        return (
          c(),
          (u.current = !1),
          null === (e = i.animationState) ||
            void 0 === e ||
            e.setActive(Ow.Tap, !1),
          !Kw()
        );
      }
      function d(e, t) {
        f() &&
          (Jw(i.getInstance(), e.target)
            ? null == r || r(e, t)
            : null == o || o(e, t));
      }
      function p(e, t) {
        f() && (null == o || o(e, t));
      }
      qw(
        i,
        'pointerdown',
        l
          ? function (e, t) {
              var r;
              c(),
                u.current ||
                  ((u.current = !0),
                  (s.current = bk(
                    $w(window, 'pointerup', d),
                    $w(window, 'pointercancel', p),
                  )),
                  null == n || n(e, t),
                  null === (r = i.animationState) ||
                    void 0 === r ||
                    r.setActive(Ow.Tap, !0));
            }
          : void 0,
      ),
        ek(c);
    }),
    focus: uS(function (e) {
      var t = e.whileFocus,
        r = e.visualElement;
      Lw(
        r,
        'focus',
        t
          ? function () {
              var e;
              null === (e = r.animationState) ||
                void 0 === e ||
                e.setActive(Ow.Focus, !0);
            }
          : void 0,
      ),
        Lw(
          r,
          'blur',
          t
            ? function () {
                var e;
                null === (e = r.animationState) ||
                  void 0 === e ||
                  e.setActive(Ow.Focus, !1);
              }
            : void 0,
        );
    }),
    hover: uS(function (e) {
      var t = e.onHoverStart,
        r = e.onHoverEnd,
        n = e.whileHover,
        o = e.visualElement;
      qw(o, 'pointerenter', t || n ? Zw(o, !0, t) : void 0),
        qw(o, 'pointerleave', r || n ? Zw(o, !1, r) : void 0);
    }),
  };
function cS(e, t) {
  if (!Array.isArray(t)) return !1;
  var r = t.length;
  if (r !== e.length) return !1;
  for (var n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
var fS = function (e) {
    return 1e3 * e;
  },
  dS = {
    linear: zk,
    easeIn: jk,
    easeInOut: Mk,
    easeOut: Lk,
    circIn: Fk,
    circInOut: Ik,
    circOut: Bk,
    backIn: Dk,
    backInOut: Vk,
    backOut: Nk,
    anticipate: Wk,
    bounceIn: Uk,
    bounceInOut: function (e) {
      return e < 0.5 ? 0.5 * (1 - Hk(1 - 2 * e)) : 0.5 * Hk(2 * e - 1) + 0.5;
    },
    bounceOut: Hk,
  },
  pS = function (e) {
    if (Array.isArray(e)) {
      e.length;
      var t = Cb(e, 4);
      return lS(t[0], t[1], t[2], t[3]);
    }
    return 'string' == typeof e ? dS[e] : e;
  },
  hS = function (e, t) {
    return (
      'zIndex' !== e &&
      (!('number' != typeof t && !Array.isArray(t)) ||
        !('string' != typeof t || !qx.test(t) || t.startsWith('url(')))
    );
  },
  mS = function () {
    return {
      type: 'spring',
      stiffness: 500,
      damping: 25,
      restDelta: 0.5,
      restSpeed: 10,
    };
  },
  vS = function (e) {
    return {
      type: 'spring',
      stiffness: 550,
      damping: 0 === e ? 2 * Math.sqrt(550) : 30,
      restDelta: 0.01,
      restSpeed: 10,
    };
  },
  gS = function () {
    return { type: 'keyframes', ease: 'linear', duration: 0.3 };
  },
  yS = function (e) {
    return { type: 'keyframes', duration: 0.8, values: e };
  },
  bS = {
    x: mS,
    y: mS,
    z: mS,
    rotate: mS,
    rotateX: mS,
    rotateY: mS,
    rotateZ: mS,
    scaleX: vS,
    scaleY: vS,
    scale: vS,
    opacity: gS,
    backgroundColor: gS,
    color: gS,
    default: vS,
  },
  xS = Eb(Eb({}, Zx), {
    color: Vx,
    backgroundColor: Vx,
    outlineColor: Vx,
    fill: Vx,
    stroke: Vx,
    borderColor: Vx,
    borderTopColor: Vx,
    borderRightColor: Vx,
    borderBottomColor: Vx,
    borderLeftColor: Vx,
    filter: Gx,
    WebkitFilter: Gx,
  }),
  wS = function (e) {
    return xS[e];
  };
function kS(e, t) {
  var r,
    n = wS(e);
  return (
    n !== Gx && (n = qx),
    null === (r = n.getAnimatableNone) || void 0 === r ? void 0 : r.call(n, t)
  );
}
function SS(e) {
  var t = e.ease,
    r = e.times,
    n = e.yoyo,
    o = e.flip,
    a = e.loop,
    i = _b(e, ['ease', 'times', 'yoyo', 'flip', 'loop']),
    l = Eb({}, i);
  return (
    r && (l.offset = r),
    i.duration && (l.duration = fS(i.duration)),
    i.repeatDelay && (l.repeatDelay = fS(i.repeatDelay)),
    t &&
      (l.ease = (function (e) {
        return Array.isArray(e) && 'number' != typeof e[0];
      })(t)
        ? t.map(pS)
        : pS(t)),
    'tween' === i.type && (l.type = 'keyframes'),
    (n || a || o) &&
      (n
        ? (l.repeatType = 'reverse')
        : a
        ? (l.repeatType = 'loop')
        : o && (l.repeatType = 'mirror'),
      (l.repeat = a || n || o || i.repeat)),
    'spring' !== i.type && (l.type = 'keyframes'),
    l
  );
}
function ES(e, t, r) {
  var n, o, a, i;
  return (
    Array.isArray(t.to) &&
      ((null !== (n = e.duration) && void 0 !== n) || (e.duration = 0.8)),
    (function (e) {
      Array.isArray(e.to) &&
        null === e.to[0] &&
        ((e.to = Pb([], Cb(e.to))), (e.to[0] = e.from));
    })(t),
    (function (e) {
      e.when,
        e.delay,
        e.delayChildren,
        e.staggerChildren,
        e.staggerDirection,
        e.repeat,
        e.repeatType,
        e.repeatDelay,
        e.from;
      var t = _b(e, [
        'when',
        'delay',
        'delayChildren',
        'staggerChildren',
        'staggerDirection',
        'repeat',
        'repeatType',
        'repeatDelay',
        'from',
      ]);
      return !!Object.keys(t).length;
    })(e) ||
      (e = Eb(
        Eb({}, e),
        ((o = r),
        (a = t.to),
        (i = Ew(a) ? yS : bS[o] || bS.default),
        Eb({ to: a }, i(a))),
      )),
    Eb(Eb({}, t), SS(e))
  );
}
function _S(e, t, r, n, o) {
  var a,
    i = AS(n, e),
    l = null !== (a = i.from) && void 0 !== a ? a : t.get(),
    u = hS(e, r);
  return (
    'none' === l && u && 'string' == typeof r
      ? (l = kS(e, r))
      : CS(l) && 'string' == typeof r
      ? (l = PS(r))
      : !Array.isArray(r) && CS(r) && 'string' == typeof l && (r = PS(l)),
    hS(e, l) && u && !1 !== i.type
      ? function () {
          var n = {
            from: l,
            to: r,
            velocity: t.getVelocity(),
            onComplete: o,
            onUpdate: function (e) {
              return t.set(e);
            },
          };
          return 'inertia' === i.type || 'decay' === i.type
            ? (function (e) {
                var t,
                  r = e.from,
                  n = void 0 === r ? 0 : r,
                  o = e.velocity,
                  a = void 0 === o ? 0 : o,
                  i = e.min,
                  l = e.max,
                  u = e.power,
                  s = void 0 === u ? 0.8 : u,
                  c = e.timeConstant,
                  f = void 0 === c ? 750 : c,
                  d = e.bounceStiffness,
                  p = void 0 === d ? 500 : d,
                  h = e.bounceDamping,
                  m = void 0 === h ? 10 : h,
                  v = e.restDelta,
                  g = void 0 === v ? 1 : v,
                  y = e.modifyTarget,
                  b = e.driver,
                  x = e.onUpdate,
                  w = e.onComplete;
                function k(e) {
                  return (void 0 !== i && e < i) || (void 0 !== l && e > l);
                }
                function S(e) {
                  return void 0 === i
                    ? l
                    : void 0 === l || Math.abs(i - e) < Math.abs(l - e)
                    ? i
                    : l;
                }
                function E(e) {
                  null == t || t.stop(),
                    (t = Gk(
                      tk(tk({}, e), {
                        driver: b,
                        onUpdate: function (t) {
                          var r;
                          null == x || x(t),
                            null === (r = e.onUpdate) ||
                              void 0 === r ||
                              r.call(e, t);
                        },
                        onComplete: w,
                      }),
                    ));
                }
                function _(e) {
                  E(
                    tk(
                      {
                        type: 'spring',
                        stiffness: p,
                        damping: m,
                        restDelta: g,
                      },
                      e,
                    ),
                  );
                }
                if (k(n)) _({ from: n, velocity: a, to: S(n) });
                else {
                  var C = s * a + n;
                  void 0 !== y && (C = y(C));
                  var P,
                    A,
                    T = S(C),
                    O = T === i ? -1 : 1;
                  E({
                    type: 'decay',
                    from: n,
                    velocity: a,
                    timeConstant: f,
                    power: s,
                    restDelta: g,
                    modifyTarget: y,
                    onUpdate: k(C)
                      ? function (e) {
                          (P = A),
                            (A = e),
                            (a = Kk(e - P, zd().delta)),
                            ((1 === O && e > T) || (-1 === O && e < T)) &&
                              _({ from: e, to: T, velocity: a });
                        }
                      : void 0,
                  });
                }
                return {
                  stop: function () {
                    return null == t ? void 0 : t.stop();
                  },
                };
              })(Eb(Eb({}, n), i))
            : Gk(
                Eb(Eb({}, ES(i, n, e)), {
                  onUpdate: function (e) {
                    var t;
                    n.onUpdate(e),
                      null === (t = i.onUpdate) || void 0 === t || t.call(i, e);
                  },
                  onComplete: function () {
                    var e;
                    n.onComplete(),
                      null === (e = i.onComplete) || void 0 === e || e.call(i);
                  },
                }),
              );
        }
      : function () {
          var e;
          return (
            t.set(r),
            o(),
            null === (e = null == i ? void 0 : i.onComplete) ||
              void 0 === e ||
              e.call(i),
            { stop: function () {} }
          );
        }
  );
}
function CS(e) {
  return (
    0 === e ||
    ('string' == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(' '))
  );
}
function PS(e) {
  return 'number' == typeof e ? 0 : kS('', e);
}
function AS(e, t) {
  return e[t] || e.default || e;
}
function TS(e, t, r, n) {
  return (
    void 0 === n && (n = {}),
    t.start(function (o) {
      var a,
        i,
        l = _S(e, t, r, n, o),
        u = (function (e, t) {
          var r;
          return null !== (r = (AS(e, t) || {}).delay) && void 0 !== r ? r : 0;
        })(n, e),
        s = function () {
          return (i = l());
        };
      return (
        u ? (a = setTimeout(s, fS(u))) : s(),
        function () {
          clearTimeout(a), null == i || i.stop();
        }
      );
    })
  );
}
function OS(e, t) {
  -1 === e.indexOf(t) && e.push(t);
}
function RS(e, t) {
  var r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
var zS = (function () {
    function e() {
      this.subscriptions = [];
    }
    return (
      (e.prototype.add = function (e) {
        var t = this;
        return (
          OS(this.subscriptions, e),
          function () {
            return RS(t.subscriptions, e);
          }
        );
      }),
      (e.prototype.notify = function (e, t, r) {
        var n = this.subscriptions.length;
        if (n)
          if (1 === n) this.subscriptions[0](e, t, r);
          else
            for (var o = 0; o < n; o++) {
              var a = this.subscriptions[o];
              a && a(e, t, r);
            }
      }),
      (e.prototype.getSize = function () {
        return this.subscriptions.length;
      }),
      (e.prototype.clear = function () {
        this.subscriptions.length = 0;
      }),
      e
    );
  })(),
  jS = (function () {
    function e(e) {
      var t,
        r = this;
      (this.timeDelta = 0),
        (this.lastUpdated = 0),
        (this.updateSubscribers = new zS()),
        (this.velocityUpdateSubscribers = new zS()),
        (this.renderSubscribers = new zS()),
        (this.canTrackVelocity = !1),
        (this.updateAndNotify = function (e, t) {
          void 0 === t && (t = !0), (r.prev = r.current), (r.current = e);
          var n = zd(),
            o = n.delta,
            a = n.timestamp;
          r.lastUpdated !== a &&
            ((r.timeDelta = o),
            (r.lastUpdated = a),
            Cd.postRender(r.scheduleVelocityCheck)),
            r.prev !== r.current && r.updateSubscribers.notify(r.current),
            r.velocityUpdateSubscribers.getSize() &&
              r.velocityUpdateSubscribers.notify(r.getVelocity()),
            t && r.renderSubscribers.notify(r.current);
        }),
        (this.scheduleVelocityCheck = function () {
          return Cd.postRender(r.velocityCheck);
        }),
        (this.velocityCheck = function (e) {
          e.timestamp !== r.lastUpdated &&
            ((r.prev = r.current),
            r.velocityUpdateSubscribers.notify(r.getVelocity()));
        }),
        (this.hasAnimated = !1),
        (this.prev = this.current = e),
        (this.canTrackVelocity = ((t = this.current), !isNaN(parseFloat(t))));
    }
    return (
      (e.prototype.onChange = function (e) {
        return this.updateSubscribers.add(e);
      }),
      (e.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
      }),
      (e.prototype.onRenderRequest = function (e) {
        return e(this.get()), this.renderSubscribers.add(e);
      }),
      (e.prototype.attach = function (e) {
        this.passiveEffect = e;
      }),
      (e.prototype.set = function (e, t) {
        void 0 === t && (t = !0),
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
      }),
      (e.prototype.get = function () {
        return this.current;
      }),
      (e.prototype.getPrevious = function () {
        return this.prev;
      }),
      (e.prototype.getVelocity = function () {
        return this.canTrackVelocity
          ? Kk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      }),
      (e.prototype.start = function (e) {
        var t = this;
        return (
          this.stop(),
          new Promise(function (r) {
            (t.hasAnimated = !0), (t.stopAnimation = e(r));
          }).then(function () {
            return t.clearAnimation();
          })
        );
      }),
      (e.prototype.stop = function () {
        this.stopAnimation && this.stopAnimation(), this.clearAnimation();
      }),
      (e.prototype.isAnimating = function () {
        return !!this.stopAnimation;
      }),
      (e.prototype.clearAnimation = function () {
        this.stopAnimation = null;
      }),
      (e.prototype.destroy = function () {
        this.updateSubscribers.clear(),
          this.renderSubscribers.clear(),
          this.stop();
      }),
      e
    );
  })();
function LS(e) {
  return new jS(e);
}
var MS = function (e) {
    return function (t) {
      return t.test(e);
    };
  },
  FS = [
    Ex,
    Ox,
    Tx,
    Ax,
    zx,
    Rx,
    {
      test: function (e) {
        return 'auto' === e;
      },
      parse: function (e) {
        return e;
      },
    },
  ],
  BS = function (e) {
    return FS.find(MS(e));
  },
  IS = Pb(Pb([], Cb(FS)), [Vx, qx]),
  DS = function (e) {
    return IS.find(MS(e));
  };
function NS(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, LS(r));
}
function VS(e, t) {
  if (t) return (t[e] || t.default || t).from;
}
function WS(e, t, r) {
  var n;
  void 0 === r && (r = {});
  var o = Qb(e, t, r.custom),
    a = (o || {}).transition,
    i = void 0 === a ? e.getDefaultTransition() || {} : a;
  r.transitionOverride && (i = r.transitionOverride);
  var l = o
      ? function () {
          return HS(e, o, r);
        }
      : function () {
          return Promise.resolve();
        },
    u = (null === (n = e.variantChildren) || void 0 === n ? void 0 : n.size)
      ? function (n) {
          void 0 === n && (n = 0);
          var o = i.delayChildren,
            a = void 0 === o ? 0 : o,
            l = i.staggerChildren,
            u = i.staggerDirection;
          return (function (e, t, r, n, o, a) {
            void 0 === r && (r = 0);
            void 0 === n && (n = 0);
            void 0 === o && (o = 1);
            var i = [],
              l = (e.variantChildren.size - 1) * n,
              u =
                1 === o
                  ? function (e) {
                      return void 0 === e && (e = 0), e * n;
                    }
                  : function (e) {
                      return void 0 === e && (e = 0), l - e * n;
                    };
            return (
              Array.from(e.variantChildren)
                .sort(US)
                .forEach(function (e, n) {
                  i.push(
                    WS(e, t, Eb(Eb({}, a), { delay: r + u(n) })).then(
                      function () {
                        return e.notifyAnimationComplete(t);
                      },
                    ),
                  );
                }),
              Promise.all(i)
            );
          })(e, t, a + n, l, u, r);
        }
      : function () {
          return Promise.resolve();
        },
    s = i.when;
  if (s) {
    var c = Cb('beforeChildren' === s ? [l, u] : [u, l], 2),
      f = c[0],
      d = c[1];
    return f().then(d);
  }
  return Promise.all([l(), u(r.delay)]);
}
function HS(e, t, r) {
  var n,
    o = void 0 === r ? {} : r,
    a = o.delay,
    i = void 0 === a ? 0 : a,
    l = o.transitionOverride,
    u = o.type,
    s = e.makeTargetAnimatable(t),
    c = s.transition,
    f = void 0 === c ? e.getDefaultTransition() : c,
    d = s.transitionEnd,
    p = _b(s, ['transition', 'transitionEnd']);
  l && (f = l);
  var h = [],
    m =
      u &&
      (null === (n = e.animationState) || void 0 === n
        ? void 0
        : n.getState()[u]);
  for (var v in p) {
    var g = e.getValue(v),
      y = p[v];
    if (!(!g || void 0 === y || (m && $S(m, v)))) {
      var b = TS(v, g, y, Eb({ delay: i }, f));
      h.push(b);
    }
  }
  return Promise.all(h).then(function () {
    d &&
      (function (e, t) {
        var r = Qb(e, t),
          n = r ? e.makeTargetAnimatable(r, !1) : {},
          o = n.transitionEnd,
          a = void 0 === o ? {} : o;
        n.transition;
        var i,
          l = _b(n, ['transitionEnd', 'transition']);
        for (var u in (l = Eb(Eb({}, l), a)))
          NS(e, u, ((i = l[u]), Ew(i) ? i[i.length - 1] || 0 : i));
      })(e, d);
  });
}
function US(e, t) {
  return e.sortNodePosition(t);
}
function $S(e, t) {
  var r = e.protectedKeys,
    n = e.needsAnimating,
    o = r.hasOwnProperty(t) && !0 !== n[t];
  return (n[t] = !1), o;
}
var qS = [Ow.Animate, Ow.Hover, Ow.Tap, Ow.Drag, Ow.Focus, Ow.Exit],
  YS = Pb([], Cb(qS)).reverse(),
  XS = qS.length;
function QS(e) {
  return function (t) {
    return Promise.all(
      t.map(function (t) {
        var r = t.animation,
          n = t.options;
        return (function (e, t, r) {
          var n;
          if (
            (void 0 === r && (r = {}),
            e.notifyAnimationStart(),
            Array.isArray(t))
          ) {
            var o = t.map(function (t) {
              return WS(e, t, r);
            });
            n = Promise.all(o);
          } else if ('string' == typeof t) n = WS(e, t, r);
          else {
            var a = 'function' == typeof t ? Qb(e, t, r.custom) : t;
            n = HS(e, a, r);
          }
          return n.then(function () {
            return e.notifyAnimationComplete(t);
          });
        })(e, r, n);
      }),
    );
  };
}
function GS(e) {
  var t,
    r = QS(e),
    n =
      (((t = {})[Ow.Animate] = KS(!0)),
      (t[Ow.Hover] = KS()),
      (t[Ow.Tap] = KS()),
      (t[Ow.Drag] = KS()),
      (t[Ow.Focus] = KS()),
      (t[Ow.Exit] = KS()),
      t),
    o = {},
    a = !0,
    i = function (t, r) {
      var n = Qb(e, r);
      if (n) {
        n.transition;
        var o = n.transitionEnd,
          a = _b(n, ['transition', 'transitionEnd']);
        t = Eb(Eb(Eb({}, t), a), o);
      }
      return t;
    };
  function l(t, l) {
    for (
      var u,
        s = e.getProps(),
        c = e.getVariantContext(!0) || {},
        f = [],
        d = new Set(),
        p = {},
        h = 1 / 0,
        m = function (r) {
          var o = YS[r],
            m = n[o],
            v = null !== (u = s[o]) && void 0 !== u ? u : c[o],
            g = Yb(v),
            y = o === l ? m.isActive : null;
          !1 === y && (h = r);
          var b = v === c[o] && v !== s[o] && g;
          if (
            (b && a && e.manuallyAnimateOnMount && (b = !1),
            (m.protectedKeys = Eb({}, p)),
            (!m.isActive && null === y) ||
              (!v && !m.prevProp) ||
              Sw(v) ||
              'boolean' == typeof v)
          )
            return 'continue';
          var x =
              (function (e, t) {
                if ('string' == typeof t) return t !== e;
                if (qb(t)) return !cS(t, e);
                return !1;
              })(m.prevProp, v) ||
              (o === l && m.isActive && !b && g) ||
              (r > h && g),
            w = Array.isArray(v) ? v : [v],
            k = w.reduce(i, {});
          !1 === y && (k = {});
          var S = m.prevResolvedValues,
            E = void 0 === S ? {} : S,
            _ = Eb(Eb({}, E), k),
            C = function (e) {
              (x = !0), d.delete(e), (m.needsAnimating[e] = !0);
            };
          for (var P in _) {
            var A = k[P],
              T = E[P];
            p.hasOwnProperty(P) ||
              (A !== T
                ? Ew(A) && Ew(T)
                  ? cS(A, T)
                    ? (m.protectedKeys[P] = !0)
                    : C(P)
                  : void 0 !== A
                  ? C(P)
                  : d.add(P)
                : void 0 !== A && d.has(P)
                ? C(P)
                : (m.protectedKeys[P] = !0));
          }
          (m.prevProp = v),
            (m.prevResolvedValues = k),
            m.isActive && (p = Eb(Eb({}, p), k)),
            a && e.blockInitialAnimation && (x = !1),
            x &&
              !b &&
              f.push.apply(
                f,
                Pb(
                  [],
                  Cb(
                    w.map(function (e) {
                      return { animation: e, options: Eb({ type: o }, t) };
                    }),
                  ),
                ),
              );
        },
        v = 0;
      v < XS;
      v++
    )
      m(v);
    if (((o = Eb({}, p)), d.size)) {
      var g = {};
      d.forEach(function (t) {
        var r = e.getBaseTarget(t);
        void 0 !== r && (g[t] = r);
      }),
        f.push({ animation: g });
    }
    var y = Boolean(f.length);
    return (
      a && !1 === s.initial && !e.manuallyAnimateOnMount && (y = !1),
      (a = !1),
      y ? r(f) : Promise.resolve()
    );
  }
  return {
    isAnimated: function (e) {
      return void 0 !== o[e];
    },
    animateChanges: l,
    setActive: function (t, r, o) {
      var a;
      return n[t].isActive === r
        ? Promise.resolve()
        : (null === (a = e.variantChildren) ||
            void 0 === a ||
            a.forEach(function (e) {
              var n;
              return null === (n = e.animationState) || void 0 === n
                ? void 0
                : n.setActive(t, r);
            }),
          (n[t].isActive = r),
          l(o, t));
    },
    setAnimateFunction: function (t) {
      r = t(e);
    },
    getState: function () {
      return n;
    },
  };
}
function KS(e) {
  return (
    void 0 === e && (e = !1),
    {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    }
  );
}
var ZS = {
    animation: uS(function (e) {
      var r = e.visualElement,
        n = e.animate;
      r.animationState || (r.animationState = GS(r)),
        Sw(n) &&
          t.exports.useEffect(
            function () {
              return n.subscribe(r);
            },
            [n],
          );
    }),
    exit: uS(function (e) {
      var r = e.custom,
        n = e.visualElement,
        o = Cb(Bb(), 2),
        a = o[0],
        i = o[1],
        l = t.exports.useContext(Mb);
      t.exports.useEffect(
        function () {
          var e,
            t,
            o =
              null === (e = n.animationState) || void 0 === e
                ? void 0
                : e.setActive(Ow.Exit, !a, {
                    custom:
                      null !== (t = null == l ? void 0 : l.custom) &&
                      void 0 !== t
                        ? t
                        : r,
                  });
          !a && (null == o || o.then(i));
        },
        [a],
      );
    }),
  },
  JS = (function () {
    function e(e, t, r) {
      var n = this,
        o = (void 0 === r ? {} : r).transformPagePoint;
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = function () {
          if (n.lastMoveEvent && n.lastMoveEventInfo) {
            var e = rE(n.lastMoveEventInfo, n.history),
              t = null !== n.startEvent,
              r = tS(e.offset, { x: 0, y: 0 }) >= 3;
            if (t || r) {
              var o = e.point,
                a = zd().timestamp;
              n.history.push(Eb(Eb({}, o), { timestamp: a }));
              var i = n.handlers,
                l = i.onStart,
                u = i.onMove;
              t ||
                (l && l(n.lastMoveEvent, e), (n.startEvent = n.lastMoveEvent)),
                u && u(n.lastMoveEvent, e);
            }
          }
        }),
        (this.handlePointerMove = function (e, t) {
          (n.lastMoveEvent = e),
            (n.lastMoveEventInfo = eE(t, n.transformPagePoint)),
            Mw(e) && 0 === e.buttons
              ? n.handlePointerUp(e, t)
              : Cd.update(n.updatePoint, !0);
        }),
        (this.handlePointerUp = function (e, t) {
          n.end();
          var r = n.handlers,
            o = r.onEnd,
            a = r.onSessionEnd,
            i = rE(eE(t, n.transformPagePoint), n.history);
          n.startEvent && o && o(e, i), a && a(e, i);
        }),
        !(Fw(e) && e.touches.length > 1))
      ) {
        (this.handlers = t), (this.transformPagePoint = o);
        var a = eE(Nw(e), this.transformPagePoint),
          i = a.point,
          l = zd().timestamp;
        this.history = [Eb(Eb({}, i), { timestamp: l })];
        var u = t.onSessionStart;
        u && u(e, rE(a, this.history)),
          (this.removeListeners = bk(
            $w(window, 'pointermove', this.handlePointerMove),
            $w(window, 'pointerup', this.handlePointerUp),
            $w(window, 'pointercancel', this.handlePointerUp),
          ));
      }
    }
    return (
      (e.prototype.updateHandlers = function (e) {
        this.handlers = e;
      }),
      (e.prototype.end = function () {
        this.removeListeners && this.removeListeners(),
          Pd.update(this.updatePoint);
      }),
      e
    );
  })();
function eE(e, t) {
  return t ? { point: t(e.point) } : e;
}
function tE(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function rE(e, t) {
  var r = e.point;
  return {
    point: r,
    delta: tE(r, oE(t)),
    offset: tE(r, nE(t)),
    velocity: aE(t, 0.1),
  };
}
function nE(e) {
  return e[0];
}
function oE(e) {
  return e[e.length - 1];
}
function aE(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  for (
    var r = e.length - 1, n = null, o = oE(e);
    r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > fS(t)));

  )
    r--;
  if (!n) return { x: 0, y: 0 };
  var a = (o.timestamp - n.timestamp) / 1e3;
  if (0 === a) return { x: 0, y: 0 };
  var i = { x: (o.x - n.x) / a, y: (o.y - n.y) / a };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function iE(e) {
  return e;
}
function lE(e) {
  var t = e.top;
  return { x: { min: e.left, max: e.right }, y: { min: t, max: e.bottom } };
}
var uE = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
function sE() {
  return { x: Eb({}, uE), y: Eb({}, uE) };
}
function cE(e) {
  return [e('x'), e('y')];
}
function fE(e, t, r) {
  var n = t.min,
    o = t.max;
  return (
    void 0 !== n && e < n
      ? (e = r ? dk(n, e, r.min) : Math.max(e, n))
      : void 0 !== o && e > o && (e = r ? dk(o, e, r.max) : Math.min(e, o)),
    e
  );
}
function dE(e, t, r) {
  return {
    min: void 0 !== t ? e.min + t : void 0,
    max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
  };
}
function pE(e, t) {
  var r,
    n = t.min - e.min,
    o = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ((n = (r = Cb([o, n], 2))[0]), (o = r[1])),
    { min: e.min + n, max: e.min + o }
  );
}
function hE(e, t, r) {
  return { min: mE(e, t), max: mE(e, r) };
}
function mE(e, t) {
  var r;
  return 'number' == typeof e ? e : null !== (r = e[t]) && void 0 !== r ? r : 0;
}
function vE(e, t) {
  return lE(
    (function (e, t) {
      var r = e.top,
        n = e.left,
        o = e.bottom,
        a = e.right;
      void 0 === t && (t = iE);
      var i = t({ x: n, y: r }),
        l = t({ x: a, y: o });
      return { top: i.y, left: i.x, bottom: l.y, right: l.x };
    })(e.getBoundingClientRect(), t),
  );
}
function gE(e, t, r) {
  return void 0 === t && (t = 0), void 0 === r && (r = 0.01), tS(e, t) < r;
}
function yE(e) {
  return e.max - e.min;
}
function bE(e, t) {
  var r = 0.5,
    n = yE(e),
    o = yE(t);
  return (
    o > n
      ? (r = fk(t.min, t.max - n, e.min))
      : n > o && (r = fk(e.min, e.max - o, t.min)),
    nk(0, 1, r)
  );
}
function xE(e, t, r, n) {
  void 0 === n && (n = 0.5),
    (e.origin = n),
    (e.originPoint = dk(t.min, t.max, e.origin)),
    (e.scale = yE(r) / yE(t)),
    gE(e.scale, 1, 1e-4) && (e.scale = 1),
    (e.translate = dk(r.min, r.max, e.origin) - e.originPoint),
    gE(e.translate) && (e.translate = 0);
}
function wE(e, t, r, n) {
  xE(e.x, t.x, r.x, kE(n.originX)), xE(e.y, t.y, r.y, kE(n.originY));
}
function kE(e) {
  return 'number' == typeof e ? e : 0.5;
}
function SE(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + yE(t));
}
var EE = function (e, t) {
  return e.depth - t.depth;
};
function _E(e) {
  return e.projection.isEnabled || e.shouldResetTransform();
}
function CE(e, t) {
  void 0 === t && (t = []);
  var r = e.parent;
  return r && CE(r, t), _E(e) && t.push(e), t;
}
function PE(e) {
  if (!e.shouldResetTransform()) {
    var t,
      r = e.getLayoutState();
    e.notifyBeforeLayoutMeasure(r.layout),
      (r.isHydrated = !0),
      (r.layout = e.measureViewportBox()),
      (r.layoutCorrected =
        ((t = r.layout), { x: Eb({}, t.x), y: Eb({}, t.y) })),
      e.notifyLayoutMeasure(r.layout, e.prevViewportBox || r.layout),
      Cd.update(function () {
        return e.rebaseProjectionTarget();
      });
  }
}
function AE(e, t) {
  return { min: t.min - e.min, max: t.max - e.min };
}
function TE(e, t) {
  return { x: AE(e.x, t.x), y: AE(e.y, t.y) };
}
function OE(e, t) {
  var r = e.getLayoutId(),
    n = t.getLayoutId();
  return r !== n || (void 0 === n && e !== t);
}
function RE(e) {
  var t = e.getProps(),
    r = t.drag,
    n = t._dragX;
  return r && !n;
}
function zE(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function jE(e, t, r) {
  return r + t * (e - r);
}
function LE(e, t, r, n, o) {
  return void 0 !== o && (e = jE(e, o, n)), jE(e, r, n) + t;
}
function ME(e, t, r, n, o) {
  void 0 === t && (t = 0),
    void 0 === r && (r = 1),
    (e.min = LE(e.min, t, r, n, o)),
    (e.max = LE(e.max, t, r, n, o));
}
function FE(e, t) {
  var r = t.x,
    n = t.y;
  ME(e.x, r.translate, r.scale, r.originPoint),
    ME(e.y, n.translate, n.scale, n.originPoint);
}
function BE(e, t, r, n) {
  var o = Cb(n, 3),
    a = o[0],
    i = o[1],
    l = o[2];
  (e.min = t.min), (e.max = t.max);
  var u = void 0 !== r[l] ? r[l] : 0.5,
    s = dk(t.min, t.max, u);
  ME(e, r[a], r[i], s, r.scale);
}
var IE = ['x', 'scaleX', 'originX'],
  DE = ['y', 'scaleY', 'originY'];
function NE(e, t, r) {
  BE(e.x, t.x, r, IE), BE(e.y, t.y, r, DE);
}
function VE(e, t, r, n, o) {
  return (e = jE((e -= t), 1 / r, n)), void 0 !== o && (e = jE(e, 1 / o, n)), e;
}
function WE(e, t, r) {
  var n = Cb(r, 3),
    o = n[0],
    a = n[1],
    i = n[2];
  !(function (e, t, r, n, o) {
    void 0 === t && (t = 0), void 0 === r && (r = 1), void 0 === n && (n = 0.5);
    var a = dk(e.min, e.max, n) - t;
    (e.min = VE(e.min, t, r, a, o)), (e.max = VE(e.max, t, r, a, o));
  })(e, t[o], t[a], t[i], t.scale);
}
function HE(e, t) {
  WE(e.x, t, IE), WE(e.y, t, DE);
}
var UE = new Set();
function $E(e, t, r) {
  e[r] || (e[r] = []), e[r].push(t);
}
function qE(e) {
  return (
    UE.add(e),
    function () {
      return UE.delete(e);
    }
  );
}
function YE() {
  if (UE.size) {
    var e = 0,
      t = [[]],
      r = [],
      n = function (r) {
        return $E(t, r, e);
      },
      o = function (t) {
        $E(r, t, e), e++;
      };
    UE.forEach(function (t) {
      t(n, o), (e = 0);
    }),
      UE.clear();
    for (var a = r.length, i = 0; i <= a; i++)
      t[i] && t[i].forEach(QE), r[i] && r[i].forEach(QE);
  }
}
var XE,
  QE = function (e) {
    return e();
  },
  GE = new WeakMap(),
  KE = (function () {
    function e(e) {
      var t = e.visualElement;
      (this.isDragging = !1),
        (this.currentDirection = null),
        (this.constraints = !1),
        (this.elastic = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }),
        (this.props = {}),
        (this.hasMutatedConstraints = !1),
        (this.cursorProgress = { x: 0.5, y: 0.5 }),
        (this.originPoint = {}),
        (this.openGlobalLock = null),
        (this.panSession = null),
        (this.visualElement = t),
        this.visualElement.enableLayoutProjection(),
        GE.set(t, this);
    }
    return (
      (e.prototype.start = function (e, t) {
        var r = this,
          n = void 0 === t ? {} : t,
          o = n.snapToCursor,
          a = void 0 !== o && o,
          i = n.cursorProgress,
          l = this.props.transformPagePoint;
        this.panSession = new JS(
          e,
          {
            onSessionStart: function (e) {
              var t;
              r.stopMotion();
              var n = (function (e) {
                return Nw(e, 'client');
              })(e).point;
              null === (t = r.cancelLayout) || void 0 === t || t.call(r),
                (r.cancelLayout = qE(function (e, t) {
                  var o = CE(r.visualElement),
                    l = (function (e) {
                      var t = [],
                        r = function (e) {
                          _E(e) && t.push(e), e.children.forEach(r);
                        };
                      return e.children.forEach(r), t.sort(EE);
                    })(r.visualElement),
                    u = Pb(Pb([], Cb(o)), Cb(l)),
                    s = !1;
                  r.isLayoutDrag() && r.visualElement.lockProjectionTarget(),
                    t(function () {
                      u.forEach(function (e) {
                        return e.resetTransform();
                      });
                    }),
                    e(function () {
                      PE(r.visualElement), l.forEach(PE);
                    }),
                    t(function () {
                      u.forEach(function (e) {
                        return e.restoreTransform();
                      }),
                        a && (s = r.snapToCursor(n));
                    }),
                    e(function () {
                      Boolean(
                        r.getAxisMotionValue('x') && !r.isExternalDrag(),
                      ) ||
                        r.visualElement.rebaseProjectionTarget(
                          !0,
                          r.visualElement.measureViewportBox(!1),
                        ),
                        r.visualElement.scheduleUpdateLayoutProjection();
                      var e = r.visualElement.projection;
                      cE(function (t) {
                        if (!s) {
                          var o = e.target[t],
                            a = o.min,
                            l = o.max;
                          r.cursorProgress[t] = i ? i[t] : fk(a, l, n[t]);
                        }
                        var u = r.getAxisMotionValue(t);
                        u && (r.originPoint[t] = u.get());
                      });
                    }),
                    t(function () {
                      Ad.update(), Ad.preRender(), Ad.render(), Ad.postRender();
                    }),
                    e(function () {
                      return r.resolveDragConstraints();
                    });
                }));
            },
            onStart: function (e, t) {
              var n,
                o,
                a,
                i = r.props,
                l = i.drag,
                u = i.dragPropagation;
              (!l ||
                u ||
                (r.openGlobalLock && r.openGlobalLock(),
                (r.openGlobalLock = Gw(l)),
                r.openGlobalLock)) &&
                (YE(),
                (r.isDragging = !0),
                (r.currentDirection = null),
                null === (o = (n = r.props).onDragStart) ||
                  void 0 === o ||
                  o.call(n, e, t),
                null === (a = r.visualElement.animationState) ||
                  void 0 === a ||
                  a.setActive(Ow.Drag, !0));
            },
            onMove: function (e, t) {
              var n,
                o,
                a,
                i,
                l = r.props,
                u = l.dragPropagation,
                s = l.dragDirectionLock;
              if (u || r.openGlobalLock) {
                var c = t.offset;
                if (s && null === r.currentDirection)
                  return (
                    (r.currentDirection = (function (e, t) {
                      void 0 === t && (t = 10);
                      var r = null;
                      Math.abs(e.y) > t
                        ? (r = 'y')
                        : Math.abs(e.x) > t && (r = 'x');
                      return r;
                    })(c)),
                    void (
                      null !== r.currentDirection &&
                      (null === (o = (n = r.props).onDirectionLock) ||
                        void 0 === o ||
                        o.call(n, r.currentDirection))
                    )
                  );
                r.updateAxis('x', t.point, c),
                  r.updateAxis('y', t.point, c),
                  null === (i = (a = r.props).onDrag) ||
                    void 0 === i ||
                    i.call(a, e, t),
                  (XE = e);
              }
            },
            onSessionEnd: function (e, t) {
              return r.stop(e, t);
            },
          },
          { transformPagePoint: l },
        );
      }),
      (e.prototype.resolveDragConstraints = function () {
        var e = this,
          t = this.props,
          r = t.dragConstraints,
          n = t.dragElastic,
          o = this.visualElement.getLayoutState().layoutCorrected;
        (this.constraints =
          !!r &&
          ($b(r)
            ? this.resolveRefConstraints(o, r)
            : (function (e, t) {
                var r = t.top,
                  n = t.left,
                  o = t.bottom,
                  a = t.right;
                return { x: dE(e.x, n, a), y: dE(e.y, r, o) };
              })(o, r))),
          (this.elastic = (function (e) {
            return (
              !1 === e ? (e = 0) : !0 === e && (e = 0.35),
              { x: hE(e, 'left', 'right'), y: hE(e, 'top', 'bottom') }
            );
          })(n)),
          this.constraints &&
            !this.hasMutatedConstraints &&
            cE(function (t) {
              e.getAxisMotionValue(t) &&
                (e.constraints[t] = (function (e, t) {
                  var r = {};
                  return (
                    void 0 !== t.min && (r.min = t.min - e.min),
                    void 0 !== t.max && (r.max = t.max - e.min),
                    r
                  );
                })(o[t], e.constraints[t]));
            });
      }),
      (e.prototype.resolveRefConstraints = function (e, t) {
        var r = this.props,
          n = r.onMeasureDragConstraints,
          o = r.transformPagePoint,
          a = t.current;
        this.constraintsBox = vE(a, o);
        var i = (function (e, t) {
          return { x: pE(e.x, t.x), y: pE(e.y, t.y) };
        })(e, this.constraintsBox);
        if (n) {
          var l = n(
            (function (e) {
              var t = e.x,
                r = e.y;
              return { top: r.min, bottom: r.max, left: t.min, right: t.max };
            })(i),
          );
          (this.hasMutatedConstraints = !!l), l && (i = lE(l));
        }
        return i;
      }),
      (e.prototype.cancelDrag = function () {
        var e, t;
        this.visualElement.unlockProjectionTarget(),
          null === (e = this.cancelLayout) || void 0 === e || e.call(this),
          (this.isDragging = !1),
          this.panSession && this.panSession.end(),
          (this.panSession = null),
          !this.props.dragPropagation &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
          null === (t = this.visualElement.animationState) ||
            void 0 === t ||
            t.setActive(Ow.Drag, !1);
      }),
      (e.prototype.stop = function (e, t) {
        var r, n, o;
        null === (r = this.panSession) || void 0 === r || r.end(),
          (this.panSession = null);
        var a = this.isDragging;
        if ((this.cancelDrag(), a)) {
          var i = t.velocity;
          this.animateDragEnd(i),
            null === (o = (n = this.props).onDragEnd) ||
              void 0 === o ||
              o.call(n, e, t);
        }
      }),
      (e.prototype.snapToCursor = function (e) {
        var t = this;
        return cE(function (r) {
          if (ZE(r, t.props.drag, t.currentDirection)) {
            var n = t.getAxisMotionValue(r);
            if (!n) return (t.cursorProgress[r] = 0.5), !0;
            var o = t.visualElement.getLayoutState().layout,
              a = o[r].max - o[r].min,
              i = o[r].min + a / 2,
              l = e[r] - i;
            (t.originPoint[r] = e[r]), n.set(l);
          }
        }).includes(!0);
      }),
      (e.prototype.updateAxis = function (e, t, r) {
        if (ZE(e, this.props.drag, this.currentDirection))
          return this.getAxisMotionValue(e)
            ? this.updateAxisMotionValue(e, r)
            : this.updateVisualElementAxis(e, t);
      }),
      (e.prototype.updateAxisMotionValue = function (e, t) {
        var r = this.getAxisMotionValue(e);
        if (t && r) {
          var n = this.originPoint[e] + t[e],
            o = this.constraints
              ? fE(n, this.constraints[e], this.elastic[e])
              : n;
          r.set(o);
        }
      }),
      (e.prototype.updateVisualElementAxis = function (e, t) {
        var r,
          n = this.visualElement.getLayoutState().layout[e],
          o = n.max - n.min,
          a = this.cursorProgress[e],
          i = (function (e, t, r, n, o) {
            var a = e - t * r;
            return n ? fE(a, n, o) : a;
          })(
            t[e],
            o,
            a,
            null === (r = this.constraints) || void 0 === r ? void 0 : r[e],
            this.elastic[e],
          );
        this.visualElement.setProjectionTargetAxis(e, i, i + o);
      }),
      (e.prototype.setProps = function (e) {
        var t = e.drag,
          r = void 0 !== t && t,
          n = e.dragDirectionLock,
          o = void 0 !== n && n,
          a = e.dragPropagation,
          i = void 0 !== a && a,
          l = e.dragConstraints,
          u = void 0 !== l && l,
          s = e.dragElastic,
          c = void 0 === s ? 0.35 : s,
          f = e.dragMomentum,
          d = void 0 === f || f,
          p = _b(e, [
            'drag',
            'dragDirectionLock',
            'dragPropagation',
            'dragConstraints',
            'dragElastic',
            'dragMomentum',
          ]);
        this.props = Eb(
          {
            drag: r,
            dragDirectionLock: o,
            dragPropagation: i,
            dragConstraints: u,
            dragElastic: c,
            dragMomentum: d,
          },
          p,
        );
      }),
      (e.prototype.getAxisMotionValue = function (e) {
        var t = this.props,
          r = t.layout,
          n = t.layoutId,
          o = '_drag' + e.toUpperCase();
        return this.props[o]
          ? this.props[o]
          : r || void 0 !== n
          ? void 0
          : this.visualElement.getValue(e, 0);
      }),
      (e.prototype.isLayoutDrag = function () {
        return !this.getAxisMotionValue('x');
      }),
      (e.prototype.isExternalDrag = function () {
        var e = this.props,
          t = e._dragX,
          r = e._dragY;
        return t || r;
      }),
      (e.prototype.animateDragEnd = function (e) {
        var t = this,
          r = this.props,
          n = r.drag,
          o = r.dragMomentum,
          a = r.dragElastic,
          i = r.dragTransition,
          l = (function (e, t) {
            void 0 === t && (t = !0);
            var r,
              n = e.getProjectionParent();
            return (
              !!n &&
              (t
                ? HE(
                    (r = TE(n.projection.target, e.projection.target)),
                    n.getLatestValues(),
                  )
                : (r = TE(
                    n.getLayoutState().layout,
                    e.getLayoutState().layout,
                  )),
              cE(function (t) {
                return e.setProjectionTargetAxis(t, r[t].min, r[t].max, !0);
              }),
              !0)
            );
          })(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag()),
          u = this.constraints || {};
        if (l && Object.keys(u).length && this.isLayoutDrag()) {
          var s = this.visualElement.getProjectionParent();
          if (s) {
            var c = TE(s.projection.targetFinal, u);
            cE(function (e) {
              var t = c[e],
                r = t.min,
                n = t.max;
              u[e] = { min: isNaN(r) ? void 0 : r, max: isNaN(n) ? void 0 : n };
            });
          }
        }
        var f = cE(function (r) {
          var s;
          if (ZE(r, n, t.currentDirection)) {
            var c =
                null !== (s = null == u ? void 0 : u[r]) && void 0 !== s
                  ? s
                  : {},
              f = a ? 200 : 1e6,
              d = a ? 40 : 1e7,
              p = Eb(
                Eb(
                  {
                    type: 'inertia',
                    velocity: o ? e[r] : 0,
                    bounceStiffness: f,
                    bounceDamping: d,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                  },
                  i,
                ),
                c,
              );
            return t.getAxisMotionValue(r)
              ? t.startAxisValueAnimation(r, p)
              : t.visualElement.startLayoutAnimation(r, p, l);
          }
        });
        return Promise.all(f).then(function () {
          var e, r;
          null === (r = (e = t.props).onDragTransitionEnd) ||
            void 0 === r ||
            r.call(e);
        });
      }),
      (e.prototype.stopMotion = function () {
        var e = this;
        cE(function (t) {
          var r = e.getAxisMotionValue(t);
          r ? r.stop() : e.visualElement.stopLayoutAnimation();
        });
      }),
      (e.prototype.startAxisValueAnimation = function (e, t) {
        var r = this.getAxisMotionValue(e);
        if (r) {
          var n = r.get();
          return r.set(n), r.set(n), TS(e, r, 0, t);
        }
      }),
      (e.prototype.scalePoint = function () {
        var e = this,
          t = this.props,
          r = t.drag;
        if ($b(t.dragConstraints) && this.constraintsBox) {
          this.stopMotion();
          var n = { x: 0, y: 0 };
          cE(function (t) {
            n[t] = bE(
              e.visualElement.projection.target[t],
              e.constraintsBox[t],
            );
          }),
            this.updateConstraints(function () {
              cE(function (t) {
                if (ZE(t, r, null)) {
                  var o = (function (e, t, r) {
                      var n = e.max - e.min,
                        o = dk(t.min, t.max - n, r);
                      return { min: o, max: o + n };
                    })(
                      e.visualElement.projection.target[t],
                      e.constraintsBox[t],
                      n[t],
                    ),
                    a = o.min,
                    i = o.max;
                  e.visualElement.setProjectionTargetAxis(t, a, i);
                }
              });
            }),
            setTimeout(YE, 1);
        }
      }),
      (e.prototype.updateConstraints = function (e) {
        var t = this;
        this.cancelLayout = qE(function (r, n) {
          var o = CE(t.visualElement);
          n(function () {
            return o.forEach(function (e) {
              return e.resetTransform();
            });
          }),
            r(function () {
              return PE(t.visualElement);
            }),
            n(function () {
              return o.forEach(function (e) {
                return e.restoreTransform();
              });
            }),
            r(function () {
              t.resolveDragConstraints();
            }),
            e && n(e);
        });
      }),
      (e.prototype.mount = function (e) {
        var t = this,
          r = $w(e.getInstance(), 'pointerdown', function (e) {
            var r = t.props,
              n = r.drag,
              o = r.dragListener;
            n && (void 0 === o || o) && t.start(e);
          }),
          n = jw(window, 'resize', function () {
            t.scalePoint();
          }),
          o = e.onLayoutUpdate(function () {
            t.isDragging && t.resolveDragConstraints();
          }),
          a = e.prevDragCursor;
        return (
          a && this.start(XE, { cursorProgress: a }),
          function () {
            null == r || r(),
              null == n || n(),
              null == o || o(),
              t.cancelDrag();
          }
        );
      }),
      e
    );
  })();
function ZE(e, t, r) {
  return !((!0 !== t && t !== e) || (null !== r && r !== e));
}
var JE,
  e_,
  t_,
  r_,
  n_ = {
    pan: uS(function (e) {
      var r = e.onPan,
        n = e.onPanStart,
        o = e.onPanEnd,
        a = e.onPanSessionStart,
        i = e.visualElement,
        l = r || n || o || a,
        u = t.exports.useRef(null),
        s = t.exports.useContext(jb).transformPagePoint,
        c = {
          onSessionStart: a,
          onStart: n,
          onMove: r,
          onEnd: function (e, t) {
            (u.current = null), o && o(e, t);
          },
        };
      t.exports.useEffect(function () {
        null !== u.current && u.current.updateHandlers(c);
      }),
        qw(
          i,
          'pointerdown',
          l &&
            function (e) {
              u.current = new JS(e, c, { transformPagePoint: s });
            },
        ),
        ek(function () {
          return u.current && u.current.end();
        });
    }),
    drag: uS(function (e) {
      var r = e.dragControls,
        n = e.visualElement,
        o = t.exports.useContext(jb).transformPagePoint,
        a = Fb(function () {
          return new KE({ visualElement: n });
        });
      a.setProps(Eb(Eb({}, e), { transformPagePoint: o })),
        t.exports.useEffect(
          function () {
            return r && r.subscribe(a);
          },
          [a],
        ),
        t.exports.useEffect(function () {
          return a.mount(n);
        }, []);
    }),
  };
function o_(e) {
  return 'string' == typeof e && e.startsWith('var(--');
}
((e_ = JE || (JE = {}))[(e_.Entering = 0)] = 'Entering'),
  (e_[(e_.Present = 1)] = 'Present'),
  (e_[(e_.Exiting = 2)] = 'Exiting'),
  ((r_ = t_ || (t_ = {}))[(r_.Hide = 0)] = 'Hide'),
  (r_[(r_.Show = 1)] = 'Show');
var a_ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function i_(e, t, r) {
  var n = Cb(
      (function (e) {
        var t = a_.exec(e);
        if (!t) return [,];
        var r = Cb(t, 3);
        return [r[1], r[2]];
      })(e),
      2,
    ),
    o = n[0],
    a = n[1];
  if (o) {
    var i = window.getComputedStyle(t).getPropertyValue(o);
    return i ? i.trim() : o_(a) ? i_(a, t) : a;
  }
}
function l_(e, t) {
  return (e / (t.max - t.min)) * 100;
}
var u_ = {
    process: function (e, t, r) {
      var n = r.target;
      if ('string' == typeof e) {
        if (!Ox.test(e)) return e;
        e = parseFloat(e);
      }
      return l_(e, n.x) + '% ' + l_(e, n.y) + '%';
    },
  },
  s_ = {
    borderRadius: Eb(Eb({}, u_), {
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    }),
    borderTopLeftRadius: u_,
    borderTopRightRadius: u_,
    borderBottomLeftRadius: u_,
    borderBottomRightRadius: u_,
    boxShadow: {
      process: function (e, t) {
        var r = t.delta,
          n = t.treeScale,
          o = e,
          a = e.includes('var('),
          i = [];
        a &&
          (e = e.replace(a_, function (e) {
            return i.push(e), '_$css';
          }));
        var l = qx.parse(e);
        if (l.length > 5) return o;
        var u = qx.createTransformer(e),
          s = 'number' != typeof l[0] ? 1 : 0,
          c = r.x.scale * n.x,
          f = r.y.scale * n.y;
        (l[0 + s] /= c), (l[1 + s] /= f);
        var d = dk(c, f, 0.5);
        'number' == typeof l[2 + s] && (l[2 + s] /= d),
          'number' == typeof l[3 + s] && (l[3 + s] /= d);
        var p = u(l);
        if (a) {
          var h = 0;
          p = p.replace('_$css', function () {
            var e = i[h];
            return h++, e;
          });
        }
        return p;
      },
    },
  },
  c_ = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.frameTarget = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }),
        (t.currentAnimationTarget = {
          x: { min: 0, max: 1 },
          y: { min: 0, max: 1 },
        }),
        (t.isAnimating = { x: !1, y: !1 }),
        (t.stopAxisAnimation = { x: void 0, y: void 0 }),
        (t.isAnimatingTree = !1),
        (t.animate = function (e, r, n) {
          void 0 === n && (n = {});
          var o = n.originBox,
            a = n.targetBox,
            i = n.visibilityAction,
            l = n.shouldStackAnimate,
            u = n.onComplete,
            s = n.prevParent,
            c = _b(n, [
              'originBox',
              'targetBox',
              'visibilityAction',
              'shouldStackAnimate',
              'onComplete',
              'prevParent',
            ]),
            f = t.props,
            d = f.visualElement,
            p = f.layout;
          if (!1 === l) return (t.isAnimatingTree = !1), t.safeToRemove();
          if (!t.isAnimatingTree || !0 === l) {
            l && (t.isAnimatingTree = !0), (r = o || r), (e = a || e);
            var h = !1,
              m = d.getProjectionParent();
            if (m) {
              var v = m.prevViewportBox,
                g = m.getLayoutState().layout;
              s &&
                (a && (g = s.getLayoutState().layout),
                o && !OE(s, m) && s.prevViewportBox && (v = s.prevViewportBox)),
                v && v_(s, o, a) && ((h = !0), (r = TE(v, r)), (e = TE(g, e)));
            }
            var y = f_(r, e),
              b = cE(function (n) {
                var o, a;
                if ('position' === p) {
                  var l = e[n].max - e[n].min;
                  r[n].max = r[n].min + l;
                }
                if (!d.projection.isTargetLocked)
                  return void 0 === i
                    ? y
                      ? t.animateAxis(
                          n,
                          e[n],
                          r[n],
                          Eb(Eb({}, c), { isRelative: h }),
                        )
                      : (null === (a = (o = t.stopAxisAnimation)[n]) ||
                          void 0 === a ||
                          a.call(o),
                        d.setProjectionTargetAxis(n, e[n].min, e[n].max, h))
                    : void d.setVisibility(i === t_.Show);
              });
            return (
              d.syncRender(),
              Promise.all(b).then(function () {
                (t.isAnimatingTree = !1),
                  u && u(),
                  d.notifyLayoutAnimationComplete();
              })
            );
          }
        }),
        t
      );
    }
    return (
      Sb(t, e),
      (t.prototype.componentDidMount = function () {
        var e = this,
          t = this.props.visualElement;
        (t.animateMotionValue = TS),
          t.enableLayoutProjection(),
          (this.unsubLayoutReady = t.onLayoutUpdate(this.animate)),
          (t.layoutSafeToRemove = function () {
            return e.safeToRemove();
          }),
          (function (e) {
            for (var t in e) ox[t] = e[t];
          })(s_);
      }),
      (t.prototype.componentWillUnmount = function () {
        var e = this;
        this.unsubLayoutReady(),
          cE(function (t) {
            var r, n;
            return null === (n = (r = e.stopAxisAnimation)[t]) || void 0 === n
              ? void 0
              : n.call(r);
          });
      }),
      (t.prototype.animateAxis = function (e, t, r, n) {
        var o,
          a,
          i = this,
          l = void 0 === n ? {} : n,
          u = l.transition,
          s = l.isRelative;
        if (!this.isAnimating[e] || !h_(t, this.currentAnimationTarget[e])) {
          null === (a = (o = this.stopAxisAnimation)[e]) ||
            void 0 === a ||
            a.call(o),
            (this.isAnimating[e] = !0);
          var c = this.props.visualElement,
            f = this.frameTarget[e],
            d = c.getProjectionAnimationProgress()[e];
          d.clearListeners(), d.set(0), d.set(0);
          var p = function () {
            var n = d.get() / 1e3;
            !(function (e, t, r, n) {
              (e.min = dk(t.min, r.min, n)), (e.max = dk(t.max, r.max, n));
            })(f, r, t, n),
              c.setProjectionTargetAxis(e, f.min, f.max, s);
          };
          p();
          var h = d.onChange(p);
          (this.stopAxisAnimation[e] = function () {
            (i.isAnimating[e] = !1), d.stop(), h();
          }),
            (this.currentAnimationTarget[e] = t);
          var m = u || c.getDefaultTransition() || m_;
          return TS(
            'x' === e ? 'layoutX' : 'layoutY',
            d,
            1e3,
            m && AS(m, 'layout'),
          ).then(this.stopAxisAnimation[e]);
        }
      }),
      (t.prototype.safeToRemove = function () {
        var e, t;
        null === (t = (e = this.props).safeToRemove) ||
          void 0 === t ||
          t.call(e);
      }),
      (t.prototype.render = function () {
        return null;
      }),
      t
    );
  })(t.exports.Component);
function f_(e, t) {
  return !(p_(e) || p_(t) || (h_(e.x, t.x) && h_(e.y, t.y)));
}
var d_ = { min: 0, max: 0 };
function p_(e) {
  return h_(e.x, d_) && h_(e.y, d_);
}
function h_(e, t) {
  return e.min === t.min && e.max === t.max;
}
var m_ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function v_(e, t, r) {
  return e || (!e && !(t || r));
}
var g_ = {
  layoutReady: function (e) {
    return e.notifyLayoutReady();
  },
};
function y_() {
  var e = new Set();
  return {
    add: function (t) {
      return e.add(t);
    },
    flush: function (t) {
      var r = void 0 === t ? g_ : t,
        n = r.layoutReady,
        o = r.parent;
      qE(function (t, r) {
        var a = Array.from(e).sort(EE),
          i = o ? CE(o) : [];
        r(function () {
          Pb(Pb([], Cb(i)), Cb(a)).forEach(function (e) {
            return e.resetTransform();
          });
        }),
          t(function () {
            a.forEach(PE);
          }),
          r(function () {
            i.forEach(function (e) {
              return e.restoreTransform();
            }),
              a.forEach(n);
          }),
          t(function () {
            a.forEach(function (e) {
              e.isPresent && (e.presence = JE.Present);
            });
          }),
          r(function () {
            Ad.preRender(), Ad.render();
          }),
          t(function () {
            Cd.postRender(function () {
              return a.forEach(b_);
            }),
              e.clear();
          });
      }),
        YE();
    },
  };
}
function b_(e) {
  e.prevViewportBox = e.projection.target;
}
var x_ = t.exports.createContext(y_()),
  w_ = t.exports.createContext(y_());
function k_(e) {
  return !!e.forceUpdate;
}
var S_ = (function (e) {
  function t() {
    return (null !== e && e.apply(this, arguments)) || this;
  }
  return (
    Sb(t, e),
    (t.prototype.componentDidMount = function () {
      var e = this.props,
        t = e.syncLayout,
        r = e.framerSyncLayout,
        n = e.visualElement;
      k_(t) && t.register(n),
        k_(r) && r.register(n),
        n.onUnmount(function () {
          k_(t) && t.remove(n), k_(r) && r.remove(n);
        });
    }),
    (t.prototype.getSnapshotBeforeUpdate = function () {
      var e = this.props,
        t = e.syncLayout,
        r = e.visualElement;
      return (
        k_(t)
          ? t.syncUpdate()
          : (!(function (e) {
              e.shouldResetTransform() ||
                ((e.prevViewportBox = e.measureViewportBox(!1)),
                e.rebaseProjectionTarget(!1, e.prevViewportBox));
            })(r),
            t.add(r)),
        null
      );
    }),
    (t.prototype.componentDidUpdate = function () {
      var e = this.props.syncLayout;
      k_(e) || e.flush();
    }),
    (t.prototype.render = function () {
      return null;
    }),
    t
  );
})(I.Component);
var E_ = {
  measureLayout: function (e) {
    var r = t.exports.useContext(x_),
      n = t.exports.useContext(w_);
    return I.createElement(
      S_,
      Eb({}, e, { syncLayout: r, framerSyncLayout: n }),
    );
  },
  layoutAnimation: function (e) {
    var r = Cb(Bb(), 2)[1];
    return t.exports.createElement(c_, Eb({}, e, { safeToRemove: r }));
  },
};
function __() {
  return {
    isHydrated: !1,
    layout: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
    layoutCorrected: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
    treeScale: { x: 1, y: 1 },
    delta: sE(),
    deltaFinal: sE(),
    deltaTransform: '',
  };
}
var C_ = __();
function P_(e, t, r) {
  var n = e.x,
    o = e.y,
    a =
      'translate3d(' +
      n.translate / t.x +
      'px, ' +
      o.translate / t.y +
      'px, 0) ';
  if (r) {
    var i = r.rotate,
      l = r.rotateX,
      u = r.rotateY;
    i && (a += 'rotate(' + i + ') '),
      l && (a += 'rotateX(' + l + ') '),
      u && (a += 'rotateY(' + u + ') ');
  }
  return (
    (a += 'scale(' + n.scale + ', ' + o.scale + ')'), r || a !== T_ ? a : ''
  );
}
function A_(e) {
  var t = e.deltaFinal;
  return 100 * t.x.origin + '% ' + 100 * t.y.origin + '% 0';
}
var T_ = P_(C_.delta, C_.treeScale, { x: 1, y: 1 }),
  O_ = [
    'LayoutMeasure',
    'BeforeLayoutMeasure',
    'LayoutUpdate',
    'ViewportBoxUpdate',
    'Update',
    'Render',
    'AnimationComplete',
    'LayoutAnimationComplete',
    'AnimationStart',
    'SetAxisTarget',
    'Unmount',
  ];
function R_(e, t, r, n) {
  var o,
    a,
    i = e.delta,
    l = e.layout,
    u = e.layoutCorrected,
    s = e.treeScale,
    c = t.target;
  (a = l),
    zE((o = u).x, a.x),
    zE(o.y, a.y),
    (function (e, t, r) {
      var n = r.length;
      if (n) {
        var o, a;
        t.x = t.y = 1;
        for (var i = 0; i < n; i++)
          (a = (o = r[i]).getLayoutState().delta),
            (t.x *= a.x.scale),
            (t.y *= a.y.scale),
            FE(e, a),
            RE(o) && NE(e, e, o.getLatestValues());
      }
    })(u, s, r),
    wE(i, u, c, n);
}
var z_ = (function () {
  function e() {
    (this.children = []), (this.isDirty = !1);
  }
  return (
    (e.prototype.add = function (e) {
      OS(this.children, e), (this.isDirty = !0);
    }),
    (e.prototype.remove = function (e) {
      RS(this.children, e), (this.isDirty = !0);
    }),
    (e.prototype.forEach = function (e) {
      this.isDirty && this.children.sort(EE),
        (this.isDirty = !1),
        this.children.forEach(e);
    }),
    e
  );
})();
var j_ = function (e) {
  var t = e.treeType,
    r = void 0 === t ? '' : t,
    n = e.build,
    o = e.getBaseTarget,
    a = e.makeTargetAnimatable,
    i = e.measureViewportBox,
    l = e.render,
    u = e.readValueFromInstance,
    s = e.resetTransform,
    c = e.restoreTransform,
    f = e.removeValueFromRenderState,
    d = e.sortNodePosition,
    p = e.scrapeMotionValuesFromProps;
  return function (e, t) {
    var h = e.parent,
      m = e.props,
      v = e.presenceId,
      g = e.blockInitialAnimation,
      y = e.visualState;
    void 0 === t && (t = {});
    var b,
      x,
      w,
      k,
      S,
      E,
      _ = y.latestValues,
      C = y.renderState,
      P = (function () {
        var e = O_.map(function () {
            return new zS();
          }),
          t = {},
          r = {
            clearAllListeners: function () {
              return e.forEach(function (e) {
                return e.clear();
              });
            },
            updatePropListeners: function (e) {
              return O_.forEach(function (n) {
                var o;
                null === (o = t[n]) || void 0 === o || o.call(t);
                var a = 'on' + n,
                  i = e[a];
                i && (t[n] = r[a](i));
              });
            },
          };
        return (
          e.forEach(function (e, t) {
            (r['on' + O_[t]] = function (t) {
              return e.add(t);
            }),
              (r['notify' + O_[t]] = function () {
                for (var t = [], r = 0; r < arguments.length; r++)
                  t[r] = arguments[r];
                return e.notify.apply(e, Pb([], Cb(t)));
              });
          }),
          r
        );
      })(),
      A = {
        isEnabled: !1,
        isHydrated: !1,
        isTargetLocked: !1,
        target: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
        targetFinal: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
      },
      T = A,
      O = _,
      R = __(),
      z = !1,
      j = new Map(),
      L = new Map(),
      M = {},
      F = Eb({}, _);
    function B() {
      b &&
        (q.isProjectionReady() &&
          (NE(T.targetFinal, T.target, O),
          wE(R.deltaFinal, R.layoutCorrected, T.targetFinal, _)),
        I(),
        l(b, C));
    }
    function I() {
      var e = _;
      if (k && k.isActive()) {
        var r = k.getCrossfadeState(q);
        r && (e = r);
      }
      n(q, C, e, T, R, t, m);
    }
    function D() {
      P.notifyUpdate(_);
    }
    function N() {
      q.layoutTree.forEach(M_);
    }
    var V = p(m);
    for (var W in V) {
      var H = V[W];
      void 0 !== _[W] && px(H) && H.set(_[W], !1);
    }
    var U = Gb(m),
      $ = Kb(m),
      q = Eb(
        Eb(
          {
            treeType: r,
            current: null,
            depth: h ? h.depth + 1 : 0,
            parent: h,
            children: new Set(),
            path: h ? Pb(Pb([], Cb(h.path)), [h]) : [],
            layoutTree: h ? h.layoutTree : new z_(),
            presenceId: v,
            projection: A,
            variantChildren: $ ? new Set() : void 0,
            isVisible: void 0,
            manuallyAnimateOnMount: Boolean(null == h ? void 0 : h.isMounted()),
            blockInitialAnimation: g,
            isMounted: function () {
              return Boolean(b);
            },
            mount: function (e) {
              (b = q.current = e),
                q.pointTo(q),
                $ && h && !U && (E = null == h ? void 0 : h.addVariantChild(q)),
                null == h || h.children.add(q);
            },
            unmount: function () {
              Pd.update(D),
                Pd.render(B),
                Pd.preRender(q.updateLayoutProjection),
                L.forEach(function (e) {
                  return e();
                }),
                q.stopLayoutAnimation(),
                q.layoutTree.remove(q),
                null == E || E(),
                null == h || h.children.delete(q),
                null == w || w(),
                P.clearAllListeners();
            },
            addVariantChild: function (e) {
              var t,
                r = q.getClosestVariantNode();
              if (r)
                return (
                  null === (t = r.variantChildren) || void 0 === t || t.add(e),
                  function () {
                    return r.variantChildren.delete(e);
                  }
                );
            },
            sortNodePosition: function (e) {
              return d && r === e.treeType
                ? d(q.getInstance(), e.getInstance())
                : 0;
            },
            getClosestVariantNode: function () {
              return $ ? q : null == h ? void 0 : h.getClosestVariantNode();
            },
            scheduleUpdateLayoutProjection: h
              ? h.scheduleUpdateLayoutProjection
              : function () {
                  return Cd.preRender(q.updateTreeLayoutProjection, !1, !0);
                },
            getLayoutId: function () {
              return m.layoutId;
            },
            getInstance: function () {
              return b;
            },
            getStaticValue: function (e) {
              return _[e];
            },
            setStaticValue: function (e, t) {
              return (_[e] = t);
            },
            getLatestValues: function () {
              return _;
            },
            setVisibility: function (e) {
              q.isVisible !== e && ((q.isVisible = e), q.scheduleRender());
            },
            makeTargetAnimatable: function (e, t) {
              return void 0 === t && (t = !0), a(q, e, m, t);
            },
            addValue: function (e, t) {
              q.hasValue(e) && q.removeValue(e),
                j.set(e, t),
                (_[e] = t.get()),
                (function (e, t) {
                  var r = t.onChange(function (t) {
                      (_[e] = t), m.onUpdate && Cd.update(D, !1, !0);
                    }),
                    n = t.onRenderRequest(q.scheduleRender);
                  L.set(e, function () {
                    r(), n();
                  });
                })(e, t);
            },
            removeValue: function (e) {
              var t;
              j.delete(e),
                null === (t = L.get(e)) || void 0 === t || t(),
                L.delete(e),
                delete _[e],
                f(e, C);
            },
            hasValue: function (e) {
              return j.has(e);
            },
            getValue: function (e, t) {
              var r = j.get(e);
              return (
                void 0 === r && void 0 !== t && ((r = LS(t)), q.addValue(e, r)),
                r
              );
            },
            forEachValue: function (e) {
              return j.forEach(e);
            },
            readValue: function (e) {
              var r;
              return null !== (r = _[e]) && void 0 !== r ? r : u(b, e, t);
            },
            setBaseTarget: function (e, t) {
              F[e] = t;
            },
            getBaseTarget: function (e) {
              if (o) {
                var t = o(m, e);
                if (void 0 !== t && !px(t)) return t;
              }
              return F[e];
            },
          },
          P,
        ),
        {
          build: function () {
            return I(), C;
          },
          scheduleRender: function () {
            Cd.render(B, !1, !0);
          },
          syncRender: B,
          setProps: function (e) {
            (m = e),
              P.updatePropListeners(e),
              (M = (function (e, t, r) {
                var n;
                for (var o in t) {
                  var a = t[o],
                    i = r[o];
                  if (px(a)) e.addValue(o, a);
                  else if (px(i)) e.addValue(o, LS(a));
                  else if (i !== a)
                    if (e.hasValue(o)) {
                      var l = e.getValue(o);
                      !l.hasAnimated && l.set(a);
                    } else
                      e.addValue(
                        o,
                        LS(
                          null !== (n = e.getStaticValue(o)) && void 0 !== n
                            ? n
                            : a,
                        ),
                      );
                }
                for (var o in r) void 0 === t[o] && e.removeValue(o);
                return t;
              })(q, p(m), M));
          },
          getProps: function () {
            return m;
          },
          getVariant: function (e) {
            var t;
            return null === (t = m.variants) || void 0 === t ? void 0 : t[e];
          },
          getDefaultTransition: function () {
            return m.transition;
          },
          getVariantContext: function (e) {
            if ((void 0 === e && (e = !1), e))
              return null == h ? void 0 : h.getVariantContext();
            if (!U) {
              var t = (null == h ? void 0 : h.getVariantContext()) || {};
              return void 0 !== m.initial && (t.initial = m.initial), t;
            }
            for (var r = {}, n = 0; n < D_; n++) {
              var o = I_[n],
                a = m[o];
              (Yb(a) || !1 === a) && (r[o] = a);
            }
            return r;
          },
          enableLayoutProjection: function () {
            (A.isEnabled = !0), q.layoutTree.add(q);
          },
          lockProjectionTarget: function () {
            A.isTargetLocked = !0;
          },
          unlockProjectionTarget: function () {
            q.stopLayoutAnimation(), (A.isTargetLocked = !1);
          },
          getLayoutState: function () {
            return R;
          },
          setCrossfader: function (e) {
            k = e;
          },
          isProjectionReady: function () {
            return A.isEnabled && A.isHydrated && R.isHydrated;
          },
          startLayoutAnimation: function (e, t, r) {
            void 0 === r && (r = !1);
            var n = q.getProjectionAnimationProgress()[e],
              o = r ? A.relativeTarget[e] : A.target[e],
              a = o.min,
              i = o.max - a;
            return (
              n.clearListeners(),
              n.set(a),
              n.set(a),
              n.onChange(function (t) {
                q.setProjectionTargetAxis(e, t, t + i, r);
              }),
              q.animateMotionValue(e, n, 0, t)
            );
          },
          stopLayoutAnimation: function () {
            cE(function (e) {
              return q.getProjectionAnimationProgress()[e].stop();
            });
          },
          measureViewportBox: function (e) {
            void 0 === e && (e = !0);
            var r = i(b, t);
            return e || HE(r, _), r;
          },
          getProjectionAnimationProgress: function () {
            return S || (S = { x: LS(0), y: LS(0) }), S;
          },
          setProjectionTargetAxis: function (e, t, r, n) {
            var o;
            void 0 === n && (n = !1),
              n
                ? (A.relativeTarget ||
                    (A.relativeTarget = {
                      x: { min: 0, max: 1 },
                      y: { min: 0, max: 1 },
                    }),
                  (o = A.relativeTarget[e]))
                : ((A.relativeTarget = void 0), (o = A.target[e])),
              (A.isHydrated = !0),
              (o.min = t),
              (o.max = r),
              (z = !0),
              P.notifySetAxisTarget();
          },
          rebaseProjectionTarget: function (e, t) {
            void 0 === t && (t = R.layout);
            var r = q.getProjectionAnimationProgress(),
              n = r.x,
              o = r.y,
              a = !(
                A.relativeTarget ||
                A.isTargetLocked ||
                n.isAnimating() ||
                o.isAnimating()
              );
            (e || a) &&
              cE(function (e) {
                var r = t[e],
                  n = r.min,
                  o = r.max;
                q.setProjectionTargetAxis(e, n, o);
              });
          },
          notifyLayoutReady: function (e) {
            !(function (e) {
              var t = e.getProjectionParent();
              if (t) {
                var r = TE(
                  t.getLayoutState().layout,
                  e.getLayoutState().layout,
                );
                cE(function (t) {
                  e.setProjectionTargetAxis(t, r[t].min, r[t].max, !0);
                });
              } else e.rebaseProjectionTarget();
            })(q),
              q.notifyLayoutUpdate(R.layout, q.prevViewportBox || R.layout, e);
          },
          resetTransform: function () {
            return s(q, b, m);
          },
          restoreTransform: function () {
            return c(b, C);
          },
          updateLayoutProjection: function () {
            if (q.isProjectionReady()) {
              var e = R.delta,
                t = R.treeScale,
                r = t.x,
                n = t.y,
                o = R.deltaTransform;
              R_(R, T, q.path, _),
                z && q.notifyViewportBoxUpdate(T.target, e),
                (z = !1);
              var a = P_(e, t);
              (a === o && r === t.x && n === t.y) || q.scheduleRender(),
                (R.deltaTransform = a);
            }
          },
          updateTreeLayoutProjection: function () {
            q.layoutTree.forEach(L_), Cd.preRender(N, !1, !0);
          },
          getProjectionParent: function () {
            if (void 0 === x) {
              for (var e = !1, t = q.path.length - 1; t >= 0; t--) {
                var r = q.path[t];
                if (r.projection.isEnabled) {
                  e = r;
                  break;
                }
              }
              x = e;
            }
            return x;
          },
          resolveRelativeTargetBox: function () {
            var e = q.getProjectionParent();
            if (
              A.relativeTarget &&
              e &&
              ((function (e, t) {
                SE(e.target.x, e.relativeTarget.x, t.target.x),
                  SE(e.target.y, e.relativeTarget.y, t.target.y);
              })(A, e.projection),
              RE(e))
            ) {
              var t = A.target;
              NE(t, t, e.getLatestValues());
            }
          },
          shouldResetTransform: function () {
            return Boolean(m._layoutResetTransform);
          },
          pointTo: function (e) {
            (T = e.projection),
              (O = e.getLatestValues()),
              null == w || w(),
              (w = bk(
                e.onSetAxisTarget(q.scheduleUpdateLayoutProjection),
                e.onLayoutAnimationComplete(function () {
                  var e;
                  q.isPresent
                    ? (q.presence = JE.Present)
                    : null === (e = q.layoutSafeToRemove) ||
                      void 0 === e ||
                      e.call(q);
                }),
              ));
          },
          isPresent: !0,
          presence: JE.Entering,
        },
      );
    return q;
  };
};
function L_(e) {
  e.resolveRelativeTargetBox();
}
function M_(e) {
  e.updateLayoutProjection();
}
var F_,
  B_,
  I_ = Pb(['initial'], Cb(qS)),
  D_ = I_.length,
  N_ = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
  V_ = function (e) {
    return N_.has(e);
  },
  W_ = function (e, t) {
    e.set(t, !1), e.set(t);
  },
  H_ = function (e) {
    return e === Ex || e === Ox;
  };
((B_ = F_ || (F_ = {})).width = 'width'),
  (B_.height = 'height'),
  (B_.left = 'left'),
  (B_.right = 'right'),
  (B_.top = 'top'),
  (B_.bottom = 'bottom');
var U_ = function (e, t) {
    return parseFloat(e.split(', ')[t]);
  },
  $_ = function (e, t) {
    return function (r, n) {
      var o = n.transform;
      if ('none' === o || !o) return 0;
      var a = o.match(/^matrix3d\((.+)\)$/);
      if (a) return U_(a[1], t);
      var i = o.match(/^matrix\((.+)\)$/);
      return i ? U_(i[1], e) : 0;
    };
  },
  q_ = new Set(['x', 'y', 'z']),
  Y_ = ix.filter(function (e) {
    return !q_.has(e);
  });
var X_ = {
    width: function (e) {
      var t = e.x;
      return t.max - t.min;
    },
    height: function (e) {
      var t = e.y;
      return t.max - t.min;
    },
    top: function (e, t) {
      var r = t.top;
      return parseFloat(r);
    },
    left: function (e, t) {
      var r = t.left;
      return parseFloat(r);
    },
    bottom: function (e, t) {
      var r = e.y,
        n = t.top;
      return parseFloat(n) + (r.max - r.min);
    },
    right: function (e, t) {
      var r = e.x,
        n = t.left;
      return parseFloat(n) + (r.max - r.min);
    },
    x: $_(4, 13),
    y: $_(5, 14),
  },
  Q_ = function (e, t, r, n) {
    void 0 === r && (r = {}),
      void 0 === n && (n = {}),
      (t = Eb({}, t)),
      (n = Eb({}, n));
    var o = Object.keys(t).filter(V_),
      a = [],
      i = !1,
      l = [];
    if (
      (o.forEach(function (o) {
        var u = e.getValue(o);
        if (e.hasValue(o)) {
          var s,
            c = r[o],
            f = t[o],
            d = BS(c);
          if (Ew(f))
            for (var p = f.length, h = null === f[0] ? 1 : 0; h < p; h++)
              s ? BS(f[h]) : (s = BS(f[h]));
          else s = BS(f);
          if (d !== s)
            if (H_(d) && H_(s)) {
              var m = u.get();
              'string' == typeof m && u.set(parseFloat(m)),
                'string' == typeof f
                  ? (t[o] = parseFloat(f))
                  : Array.isArray(f) && s === Ox && (t[o] = f.map(parseFloat));
            } else
              (null == d ? void 0 : d.transform) &&
              (null == s ? void 0 : s.transform) &&
              (0 === c || 0 === f)
                ? 0 === c
                  ? u.set(s.transform(c))
                  : (t[o] = d.transform(f))
                : (i ||
                    ((a = (function (e) {
                      var t = [];
                      return (
                        Y_.forEach(function (r) {
                          var n = e.getValue(r);
                          void 0 !== n &&
                            (t.push([r, n.get()]),
                            n.set(r.startsWith('scale') ? 1 : 0));
                        }),
                        t.length && e.syncRender(),
                        t
                      );
                    })(e)),
                    (i = !0)),
                  l.push(o),
                  (n[o] = void 0 !== n[o] ? n[o] : t[o]),
                  W_(u, f));
        }
      }),
      l.length)
    ) {
      var u = (function (e, t, r) {
        var n = t.measureViewportBox(),
          o = t.getInstance(),
          a = getComputedStyle(o),
          i = a.display,
          l = {
            top: a.top,
            left: a.left,
            bottom: a.bottom,
            right: a.right,
            transform: a.transform,
          };
        'none' === i && t.setStaticValue('display', e.display || 'block'),
          t.syncRender();
        var u = t.measureViewportBox();
        return (
          r.forEach(function (r) {
            var o = t.getValue(r);
            W_(o, X_[r](n, l)), (e[r] = X_[r](u, a));
          }),
          e
        );
      })(t, e, l);
      return (
        a.length &&
          a.forEach(function (t) {
            var r = Cb(t, 2),
              n = r[0],
              o = r[1];
            e.getValue(n).set(o);
          }),
        e.syncRender(),
        { target: u, transitionEnd: n }
      );
    }
    return { target: t, transitionEnd: n };
  };
function G_(e, t, r, n) {
  return (function (e) {
    return Object.keys(e).some(V_);
  })(t)
    ? Q_(e, t, r, n)
    : { target: t, transitionEnd: n };
}
var K_ = function (e, t, r, n) {
  var o = (function (e, t, r) {
    var n,
      o = _b(t, []),
      a = e.getInstance();
    if (!(a instanceof HTMLElement)) return { target: o, transitionEnd: r };
    for (var i in (r && (r = Eb({}, r)),
    e.forEachValue(function (e) {
      var t = e.get();
      if (o_(t)) {
        var r = i_(t, a);
        r && e.set(r);
      }
    }),
    o)) {
      var l = o[i];
      if (o_(l)) {
        var u = i_(l, a);
        u &&
          ((o[i] = u),
          r && ((null !== (n = r[i]) && void 0 !== n) || (r[i] = l)));
      }
    }
    return { target: o, transitionEnd: r };
  })(e, t, n);
  return G_(e, (t = o.target), r, (n = o.transitionEnd));
};
var Z_ = {
    treeType: 'dom',
    readValueFromInstance: function (e, t) {
      if (sx(t)) {
        var r = wS(t);
        return (r && r.default) || 0;
      }
      var n,
        o = ((n = e), window.getComputedStyle(n));
      return (mx(t) ? o.getPropertyValue(t) : o[t]) || 0;
    },
    sortNodePosition: function (e, t) {
      return 2 & e.compareDocumentPosition(t) ? 1 : -1;
    },
    getBaseTarget: function (e, t) {
      var r;
      return null === (r = e.style) || void 0 === r ? void 0 : r[t];
    },
    measureViewportBox: function (e, t) {
      return vE(e, t.transformPagePoint);
    },
    resetTransform: function (e, t, r) {
      var n = r.transformTemplate;
      (t.style.transform = n ? n({}, '') : 'none'), e.scheduleRender();
    },
    restoreTransform: function (e, t) {
      e.style.transform = t.style.transform;
    },
    removeValueFromRenderState: function (e, t) {
      var r = t.vars,
        n = t.style;
      delete r[e], delete n[e];
    },
    makeTargetAnimatable: function (e, t, r, n) {
      var o = r.transformValues;
      void 0 === n && (n = !0);
      var a = t.transition,
        i = t.transitionEnd,
        l = _b(t, ['transition', 'transitionEnd']),
        u = (function (e, t, r) {
          var n,
            o,
            a = {};
          for (var i in e)
            a[i] =
              null !== (n = VS(i, t)) && void 0 !== n
                ? n
                : null === (o = r.getValue(i)) || void 0 === o
                ? void 0
                : o.get();
          return a;
        })(l, a || {}, e);
      if ((o && (i && (i = o(i)), l && (l = o(l)), u && (u = o(u))), n)) {
        !(function (e, t, r) {
          var n,
            o,
            a,
            i,
            l = Object.keys(t).filter(function (t) {
              return !e.hasValue(t);
            }),
            u = l.length;
          if (u)
            for (var s = 0; s < u; s++) {
              var c = l[s],
                f = t[c],
                d = null;
              Array.isArray(f) && (d = f[0]),
                null === d &&
                  (d =
                    null !==
                      (o =
                        null !== (n = r[c]) && void 0 !== n
                          ? n
                          : e.readValue(c)) && void 0 !== o
                      ? o
                      : t[c]),
                null != d &&
                  ('string' == typeof d && /^\-?\d*\.?\d+$/.test(d)
                    ? (d = parseFloat(d))
                    : !DS(d) && qx.test(f) && (d = kS(c, f)),
                  e.addValue(c, LS(d)),
                  (null !== (a = (i = r)[c]) && void 0 !== a) || (i[c] = d),
                  e.setBaseTarget(c, d));
            }
        })(e, l, u);
        var s = K_(e, l, u, i);
        (i = s.transitionEnd), (l = s.target);
      }
      return Eb({ transition: a, transitionEnd: i }, l);
    },
    scrapeMotionValuesFromProps: ww,
    build: function (e, t, r, n, o, a, i) {
      void 0 !== e.isVisible &&
        (t.style.visibility = e.isVisible ? 'visible' : 'hidden');
      var l = n.isEnabled && o.isHydrated;
      Jx(t, r, n, o, a, i.transformTemplate, l ? P_ : void 0, l ? A_ : void 0);
    },
    render: yw,
  },
  J_ = j_(Z_),
  eC = j_(
    Eb(Eb({}, Z_), {
      getBaseTarget: function (e, t) {
        return e[t];
      },
      readValueFromInstance: function (e, t) {
        var r;
        return sx(t)
          ? (null === (r = wS(t)) || void 0 === r ? void 0 : r.default) || 0
          : ((t = bw.has(t) ? t : gw(t)), e.getAttribute(t));
      },
      scrapeMotionValuesFromProps: kw,
      build: function (e, t, r, n, o, a, i) {
        var l = n.isEnabled && o.isHydrated;
        dw(
          t,
          r,
          n,
          o,
          a,
          i.transformTemplate,
          l ? P_ : void 0,
          l ? A_ : void 0,
        );
      },
      render: xw,
    }),
  ),
  tC = function (e, t) {
    return nx(e)
      ? eC(t, { enableHardwareAcceleration: !1 })
      : J_(t, { enableHardwareAcceleration: !0 });
  },
  rC = Eb(Eb(Eb(Eb({}, ZS), sS), n_), E_),
  nC = tx(function (e, t) {
    return (function (e, t, r, n) {
      var o = t.forwardMotionProps,
        a = void 0 !== o && o,
        i = nx(e) ? Tw : zw;
      return Eb(Eb({}, i), {
        preloadedFeatures: r,
        useRender: mw(a),
        createVisualElement: n,
        Component: e,
      });
    })(e, t, rC, tC);
  });
var oC = 0;
function aC() {
  var e = oC;
  return oC++, e;
}
var iC = function (e) {
  var r = e.children,
    n = e.initial,
    o = e.isPresent,
    a = e.onExitComplete,
    i = e.custom,
    l = e.presenceAffectsLayout,
    u = Fb(lC),
    s = Fb(aC),
    c = t.exports.useMemo(
      function () {
        return {
          id: s,
          initial: n,
          isPresent: o,
          custom: i,
          onExitComplete: function (e) {
            u.set(e, !0);
            var t = !0;
            u.forEach(function (e) {
              e || (t = !1);
            }),
              t && (null == a || a());
          },
          register: function (e) {
            return (
              u.set(e, !1),
              function () {
                return u.delete(e);
              }
            );
          },
        };
      },
      l ? void 0 : [o],
    );
  return (
    t.exports.useMemo(
      function () {
        u.forEach(function (e, t) {
          return u.set(t, !1);
        });
      },
      [o],
    ),
    t.exports.useEffect(
      function () {
        !o && !u.size && (null == a || a());
      },
      [o],
    ),
    t.exports.createElement(Mb.Provider, { value: c }, r)
  );
};
function lC() {
  return new Map();
}
function uC(e) {
  return e.key || '';
}
var sC = function (e) {
  var r = e.children,
    n = e.custom,
    o = e.initial,
    a = void 0 === o || o,
    i = e.onExitComplete,
    l = e.exitBeforeEnter,
    u = e.presenceAffectsLayout,
    s = void 0 === u || u,
    c = (function () {
      var e = t.exports.useRef(!1),
        r = Cb(t.exports.useState(0), 2),
        n = r[0],
        o = r[1];
      return (
        ek(function () {
          return (e.current = !0);
        }),
        t.exports.useCallback(
          function () {
            !e.current && o(n + 1);
          },
          [n],
        )
      );
    })(),
    f = t.exports.useContext(x_);
  k_(f) && (c = f.forceUpdate);
  var d = t.exports.useRef(!0),
    p = (function (e) {
      var r = [];
      return (
        t.exports.Children.forEach(e, function (e) {
          t.exports.isValidElement(e) && r.push(e);
        }),
        r
      );
    })(r),
    h = t.exports.useRef(p),
    m = t.exports.useRef(new Map()).current,
    v = t.exports.useRef(new Set()).current;
  if (
    ((function (e, t) {
      e.forEach(function (e) {
        var r = uC(e);
        t.set(r, e);
      });
    })(p, m),
    d.current)
  )
    return (
      (d.current = !1),
      t.exports.createElement(
        t.exports.Fragment,
        null,
        p.map(function (e) {
          return t.exports.createElement(
            iC,
            {
              key: uC(e),
              isPresent: !0,
              initial: !!a && void 0,
              presenceAffectsLayout: s,
            },
            e,
          );
        }),
      )
    );
  for (
    var g = Pb([], Cb(p)),
      y = h.current.map(uC),
      b = p.map(uC),
      x = y.length,
      w = 0;
    w < x;
    w++
  ) {
    var k = y[w];
    -1 === b.indexOf(k) ? v.add(k) : v.delete(k);
  }
  return (
    l && v.size && (g = []),
    v.forEach(function (e) {
      if (-1 === b.indexOf(e)) {
        var r = m.get(e);
        if (r) {
          var o = y.indexOf(e);
          g.splice(
            o,
            0,
            t.exports.createElement(
              iC,
              {
                key: uC(r),
                isPresent: !1,
                onExitComplete: function () {
                  m.delete(e), v.delete(e);
                  var t = h.current.findIndex(function (t) {
                    return t.key === e;
                  });
                  h.current.splice(t, 1),
                    v.size || ((h.current = p), c(), i && i());
                },
                custom: n,
                presenceAffectsLayout: s,
              },
              r,
            ),
          );
        }
      }
    }),
    (g = g.map(function (e) {
      var r = e.key;
      return v.has(r)
        ? e
        : t.exports.createElement(
            iC,
            { key: uC(e), isPresent: !0, presenceAffectsLayout: s },
            e,
          );
    })),
    (h.current = g),
    t.exports.createElement(
      t.exports.Fragment,
      null,
      v.size
        ? g
        : g.map(function (e) {
            return t.exports.cloneElement(e);
          }),
    )
  );
};
function cC() {
  return (cC =
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
var fC = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
  dC = {
    enter: { duration: 0.2, ease: fC.easeOut },
    exit: { duration: 0.1, ease: fC.easeIn },
  },
  pC = (e, t) => cC({}, e, { delay: Wf(t) ? t : null == t ? void 0 : t.enter }),
  hC = (e, t) => cC({}, e, { delay: Wf(t) ? t : null == t ? void 0 : t.exit });
function mC() {
  return (mC =
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
var vC = {
    initial: 'exit',
    animate: 'enter',
    exit: 'exit',
    variants: {
      enter: function (e) {
        var t,
          { transition: r, transitionEnd: n, delay: o } = void 0 === e ? {} : e;
        return {
          opacity: 1,
          transition:
            null != (t = null == r ? void 0 : r.enter) ? t : pC(dC.enter, o),
          transitionEnd: null == n ? void 0 : n.enter,
        };
      },
      exit: function (e) {
        var t,
          { transition: r, transitionEnd: n, delay: o } = void 0 === e ? {} : e;
        return {
          opacity: 0,
          transition:
            null != (t = null == r ? void 0 : r.exit) ? t : hC(dC.exit, o),
          transitionEnd: null == n ? void 0 : n.exit,
        };
      },
    },
  },
  gC = t.exports.forwardRef((e, r) => {
    var {
        unmountOnExit: n,
        in: o,
        className: a,
        transition: i,
        transitionEnd: l,
        delay: u,
      } = e,
      s = (function (e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      })(e, [
        'unmountOnExit',
        'in',
        'className',
        'transition',
        'transitionEnd',
        'delay',
      ]),
      c = o || n ? 'enter' : 'exit',
      f = !n || (o && n),
      d = { transition: i, transitionEnd: l, delay: u };
    return t.exports.createElement(
      sC,
      { custom: d },
      f &&
        t.exports.createElement(
          nC.div,
          mC(
            { ref: r, className: dd('chakra-fade', a), custom: d },
            vC,
            { animate: c },
            s,
          ),
        ),
    );
  }),
  [yC, bC] = Md({ strict: !1, name: 'ButtonGroupContext' }),
  xC = {
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
  wC = Zh('span', { baseStyle: xC });
function kC() {
  return (kC =
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
Zh('input', { baseStyle: xC });
var SC = Nf({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  }),
  EC = Jh((e, r) => {
    var n = em('Spinner', e),
      o = Ih(e),
      {
        label: a = 'Loading...',
        thickness: i = '2px',
        speed: l = '0.45s',
        emptyColor: u = 'transparent',
        className: s,
      } = o,
      c = (function (e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      })(o, ['label', 'thickness', 'speed', 'emptyColor', 'className']),
      f = dd('chakra-spinner', s),
      d = kC(
        {
          display: 'inline-block',
          borderColor: 'currentColor',
          borderStyle: 'solid',
          borderRadius: '99999px',
          borderWidth: i,
          borderBottomColor: u,
          borderLeftColor: u,
          animation: SC + ' ' + l + ' linear infinite',
        },
        n,
      );
    return t.exports.createElement(
      Zh.div,
      kC({ ref: r, __css: d, className: f }, c),
      a && t.exports.createElement(wC, null, a),
    );
  });
function _C() {
  return (_C =
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
var CC = (e) => {
  var {
      label: r,
      placement: n,
      children: o = t.exports.createElement(EC, {
        color: 'currentColor',
        width: '1em',
        height: '1em',
      }),
      className: a,
      __css: i,
    } = e,
    l = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++)
        (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
    })(e, ['label', 'placement', 'spacing', 'children', 'className', '__css']),
    u = dd('chakra-button__spinner', a),
    s = 'start' === n ? 'marginEnd' : 'marginStart',
    c = t.exports.useMemo(
      () =>
        _C(
          {
            display: 'flex',
            alignItems: 'center',
            position: r ? 'relative' : 'absolute',
            [s]: r ? '0.5rem' : 0,
            fontSize: '1em',
            lineHeight: 'normal',
          },
          i,
        ),
      [i, r, s],
    );
  return t.exports.createElement(
    Zh.div,
    _C({ className: u }, l, { __css: c }),
    o,
  );
};
function PC() {
  return (PC =
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
var AC = (e) => {
  var { children: r, className: n } = e,
    o = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++)
        (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
    })(e, ['children', 'className']),
    a = t.exports.isValidElement(r)
      ? t.exports.cloneElement(r, { 'aria-hidden': !0, focusable: !1 })
      : r,
    i = dd('chakra-button__icon', n);
  return t.exports.createElement(
    Zh.span,
    PC({ display: 'inline-flex', alignSelf: 'center', flexShrink: 0 }, o, {
      className: i,
    }),
    a,
  );
};
function TC() {
  return (TC =
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
var OC = Jh((e, r) => {
  var n = bC(),
    o = em('Button', TC({}, n, e)),
    a = Ih(e),
    {
      isDisabled: i = null == n ? void 0 : n.isDisabled,
      isLoading: l,
      isActive: u,
      isFullWidth: s,
      children: c,
      leftIcon: f,
      rightIcon: d,
      loadingText: p,
      iconSpacing: h = '0.5rem',
      type: m,
      spinner: v,
      spinnerPlacement: g = 'start',
      className: y,
      as: b,
    } = a,
    x = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++)
        (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
    })(a, [
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
    w = t.exports.useMemo(() => {
      var e,
        t = Qf({}, null != (e = null == o ? void 0 : o._focus) ? e : {}, {
          zIndex: 1,
        });
      return TC(
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
          width: s ? '100%' : 'auto',
        },
        o,
        !!n && { _focus: t },
      );
    }, [o, n, s]),
    { ref: k, type: S } = (function (e) {
      var [r, n] = t.exports.useState(!e);
      return {
        ref: t.exports.useCallback((e) => {
          e && n('BUTTON' === e.tagName);
        }, []),
        type: r ? 'button' : void 0,
      };
    })(b),
    E = { rightIcon: d, leftIcon: f, iconSpacing: h, children: c };
  return t.exports.createElement(
    Zh.button,
    TC(
      {
        disabled: i || l,
        ref: Ld(r, k),
        as: b,
        type: null != m ? m : S,
        'data-active': cd(u),
        'data-loading': cd(l),
        __css: w,
        className: dd('chakra-button', y),
      },
      x,
    ),
    l &&
      'start' === g &&
      t.exports.createElement(
        CC,
        {
          className: 'chakra-button__spinner--start',
          label: p,
          placement: 'start',
        },
        v,
      ),
    l
      ? p ||
          t.exports.createElement(
            Zh.span,
            { opacity: 0 },
            t.exports.createElement(RC, E),
          )
      : t.exports.createElement(RC, E),
    l &&
      'end' === g &&
      t.exports.createElement(
        CC,
        {
          className: 'chakra-button__spinner--end',
          label: p,
          placement: 'end',
        },
        v,
      ),
  );
});
function RC(e) {
  var { leftIcon: r, rightIcon: n, children: o, iconSpacing: a } = e;
  return t.exports.createElement(
    t.exports.Fragment,
    null,
    r && t.exports.createElement(AC, { marginEnd: a }, r),
    o,
    n && t.exports.createElement(AC, { marginStart: a }, n),
  );
}
var [zC, jC] = Md({ strict: !1, name: 'FormControlContext' });
function LC() {
  return (LC =
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
function MC(e, t) {
  if (null == e) return {};
  var r,
    n,
    o = {},
    a = Object.keys(e);
  for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
  return o;
}
function FC(e) {
  var t = (function (e) {
      var t,
        r,
        n,
        o = jC(),
        {
          id: a,
          disabled: i,
          readOnly: l,
          required: u,
          isRequired: s,
          isInvalid: c,
          isReadOnly: f,
          isDisabled: d,
          onFocus: p,
          onBlur: h,
        } = e,
        m = MC(e, [
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
        v = e['aria-describedby'] ? [e['aria-describedby']] : [];
      null != o &&
        o.hasFeedbackText &&
        null != o &&
        o.isInvalid &&
        v.push(o.feedbackId);
      null != o && o.hasHelpText && v.push(o.helpTextId);
      return LC({}, m, {
        'aria-describedby': v.join(' ') || void 0,
        id: null != a ? a : null == o ? void 0 : o.id,
        isDisabled:
          null != (t = null != i ? i : d)
            ? t
            : null == o
            ? void 0
            : o.isDisabled,
        isReadOnly:
          null != (r = null != l ? l : f)
            ? r
            : null == o
            ? void 0
            : o.isReadOnly,
        isRequired:
          null != (n = null != u ? u : s)
            ? n
            : null == o
            ? void 0
            : o.isRequired,
        isInvalid: null != c ? c : null == o ? void 0 : o.isInvalid,
        onFocus: hd(null == o ? void 0 : o.onFocus, p),
        onBlur: hd(null == o ? void 0 : o.onBlur, h),
      });
    })(e),
    { isDisabled: r, isInvalid: n, isReadOnly: o, isRequired: a } = t;
  return LC(
    {},
    MC(t, ['isDisabled', 'isInvalid', 'isReadOnly', 'isRequired']),
    {
      disabled: r,
      readOnly: o,
      required: a,
      'aria-invalid': fd(n),
      'aria-required': fd(a),
      'aria-readonly': fd(o),
    },
  );
}
function BC() {
  return (BC =
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
var IC = Jh((e, r) => {
  var n = (function (e, t) {
      return em(e, t, { isMultiPart: !0 });
    })('Input', e),
    o = FC(Ih(e)),
    a = dd('chakra-input', e.className);
  return t.exports.createElement(
    Zh.input,
    BC({}, o, { __css: n.field, ref: r, className: a }),
  );
});
IC.id = 'Input';
var DC = Zh('div');
function NC() {
  return (NC =
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
var VC = Jh((e, r) => {
  var n = Ih(e),
    { className: o, centerContent: a } = n,
    i = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++)
        (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
    })(n, ['className', 'centerContent']),
    l = em('Container', e);
  return t.exports.createElement(
    Zh.div,
    NC({ ref: r, className: dd('chakra-container', o) }, i, {
      __css: NC(
        {},
        l,
        a && { display: 'flex', flexDirection: 'column', alignItems: 'center' },
      ),
    }),
  );
});
function WC() {
  return (WC =
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
var HC = Jh((e, r) => {
  var {
      direction: n,
      align: o,
      justify: a,
      wrap: i,
      basis: l,
      grow: u,
      shrink: s,
    } = e,
    c = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++)
        (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
    })(e, ['direction', 'align', 'justify', 'wrap', 'basis', 'grow', 'shrink']),
    f = {
      display: 'flex',
      flexDirection: n,
      alignItems: o,
      justifyContent: a,
      flexWrap: i,
      flexBasis: l,
      flexGrow: u,
      flexShrink: s,
    };
  return t.exports.createElement(Zh.div, WC({ ref: r, __css: f }, c));
});
function UC() {
  return (UC =
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
var $C = Jh((e, r) => {
  var n = em('Heading', e),
    o = (function (e, t) {
      if (null == e) return {};
      var r,
        n,
        o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++)
        (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
    })(Ih(e), ['className']);
  return t.exports.createElement(
    Zh.h2,
    UC({ ref: r, className: dd('chakra-heading', e.className) }, o, {
      __css: n,
    }),
  );
});
function qC() {
  return (qC =
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
var YC = Jh((e, r) => {
    var n = em('Link', e),
      o = Ih(e),
      { className: a, isExternal: i } = o,
      l = (function (e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      })(o, ['className', 'isExternal']);
    return t.exports.createElement(
      Zh.a,
      qC(
        {
          target: i ? '_blank' : void 0,
          rel: i ? 'noopener noreferrer' : void 0,
          ref: r,
          className: dd('chakra-link', a),
        },
        l,
        { __css: n },
      ),
    );
  }),
  XC = Zh('div', {
    baseStyle: { flex: 1, justifySelf: 'stretch', alignSelf: 'stretch' },
  });
function QC() {
  return (QC =
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
function GC(e, t) {
  if (null == e) return {};
  var r,
    n,
    o = {},
    a = Object.keys(e);
  for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
  return o;
}
var KC = Jh((e, r) => {
    var {
        spacing: n = '0.5rem',
        children: o,
        justify: a,
        direction: i,
        align: l,
        className: u,
        shouldWrapChildren: s,
      } = e,
      c = GC(e, [
        'spacing',
        'children',
        'justify',
        'direction',
        'align',
        'className',
        'shouldWrapChildren',
      ]),
      f = t.exports.useMemo(
        () => ({
          '--chakra-wrap-spacing': (e) => {
            return (
              (r = (t) => tp('space', t)(e)),
              Hf((t = n))
                ? t.map((e) => (null === e ? null : r(e)))
                : $f(t)
                ? rd(t).reduce((e, n) => ((e[n] = r(t[n])), e), {})
                : null != t
                ? r(t)
                : null
            );
            var t, r;
          },
          '--wrap-spacing': 'calc(var(--chakra-wrap-spacing) / 2)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: a,
          alignItems: l,
          flexDirection: i,
          listStyleType: 'none',
          padding: '0',
          margin: 'calc(var(--wrap-spacing) * -1)',
          '& > *:not(style)': { margin: 'var(--wrap-spacing)' },
        }),
        [n, a, l, i],
      ),
      d = s
        ? t.exports.Children.map(o, (e, r) =>
            t.exports.createElement(ZC, { key: r }, e),
          )
        : o;
    return t.exports.createElement(
      Zh.div,
      QC({ ref: r, className: dd('chakra-wrap', u) }, c),
      t.exports.createElement(
        Zh.ul,
        { className: 'chakra-wrap__list', __css: f },
        d,
      ),
    );
  }),
  ZC = Jh((e, r) => {
    var { className: n } = e,
      o = GC(e, ['className']);
    return t.exports.createElement(
      Zh.li,
      QC(
        {
          ref: r,
          __css: { display: 'flex', alignItems: 'flex-start' },
          className: dd('chakra-wrap__listitem', n),
        },
        o,
      ),
    );
  });
export {
  DC as B,
  yb as C,
  HC as F,
  $C as H,
  IC as I,
  YC as L,
  I as R,
  XC as S,
  KC as W,
  VC as a,
  OC as b,
  gC as c,
  ZC as d,
  bb as e,
  Qs as f,
  t as r,
  gb as t,
};

(function () {
  const g = document.createElement("link").relList;
  if (g && g.supports && g.supports("modulepreload")) return;
  for (const M of document.querySelectorAll('link[rel="modulepreload"]')) r(M);
  new MutationObserver((M) => {
    for (const E of M)
      if (E.type === "childList")
        for (const L of E.addedNodes)
          L.tagName === "LINK" && L.rel === "modulepreload" && r(L);
  }).observe(document, { childList: !0, subtree: !0 });
  function v(M) {
    const E = {};
    return (
      M.integrity && (E.integrity = M.integrity),
      M.referrerPolicy && (E.referrerPolicy = M.referrerPolicy),
      M.crossOrigin === "use-credentials"
        ? (E.credentials = "include")
        : M.crossOrigin === "anonymous"
        ? (E.credentials = "omit")
        : (E.credentials = "same-origin"),
      E
    );
  }
  function r(M) {
    if (M.ep) return;
    M.ep = !0;
    const E = v(M);
    fetch(M.href, E);
  }
})();
function x4(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var v1 = { exports: {} },
  Mn = {};
var Os;
function p4() {
  if (Os) return Mn;
  Os = 1;
  var s = Symbol.for("react.transitional.element"),
    g = Symbol.for("react.fragment");
  function v(r, M, E) {
    var L = null;
    if (
      (E !== void 0 && (L = "" + E),
      M.key !== void 0 && (L = "" + M.key),
      "key" in M)
    ) {
      E = {};
      for (var q in M) q !== "key" && (E[q] = M[q]);
    } else E = M;
    return (
      (M = E.ref),
      { $$typeof: s, type: r, key: L, ref: M !== void 0 ? M : null, props: E }
    );
  }
  return (Mn.Fragment = g), (Mn.jsx = v), (Mn.jsxs = v), Mn;
}
var Ds;
function S4() {
  return Ds || ((Ds = 1), (v1.exports = p4())), v1.exports;
}
var i = S4(),
  y1 = { exports: {} },
  X = {};
var Us;
function N4() {
  if (Us) return X;
  Us = 1;
  var s = Symbol.for("react.transitional.element"),
    g = Symbol.for("react.portal"),
    v = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    E = Symbol.for("react.consumer"),
    L = Symbol.for("react.context"),
    q = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    j = Symbol.for("react.memo"),
    Z = Symbol.for("react.lazy"),
    C = Symbol.for("react.activity"),
    dl = Symbol.iterator;
  function Pl(m) {
    return m === null || typeof m != "object"
      ? null
      : ((m = (dl && m[dl]) || m["@@iterator"]),
        typeof m == "function" ? m : null);
  }
  var Ll = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ql = Object.assign,
    Ct = {};
  function lt(m, T, D) {
    (this.props = m),
      (this.context = T),
      (this.refs = Ct),
      (this.updater = D || Ll);
  }
  (lt.prototype.isReactComponent = {}),
    (lt.prototype.setState = function (m, T) {
      if (typeof m != "object" && typeof m != "function" && m != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, m, T, "setState");
    }),
    (lt.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, "forceUpdate");
    });
  function Pt() {}
  Pt.prototype = lt.prototype;
  function Rl(m, T, D) {
    (this.props = m),
      (this.context = T),
      (this.refs = Ct),
      (this.updater = D || Ll);
  }
  var ot = (Rl.prototype = new Pt());
  (ot.constructor = Rl), ql(ot, lt.prototype), (ot.isPureReactComponent = !0);
  var Tt = Array.isArray;
  function Xl() {}
  var I = { H: null, A: null, T: null, S: null },
    Ql = Object.prototype.hasOwnProperty;
  function Et(m, T, D) {
    var H = D.ref;
    return {
      $$typeof: s,
      type: m,
      key: T,
      ref: H !== void 0 ? H : null,
      props: D,
    };
  }
  function Je(m, T) {
    return Et(m.type, T, m.props);
  }
  function Mt(m) {
    return typeof m == "object" && m !== null && m.$$typeof === s;
  }
  function Vl(m) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      m.replace(/[=:]/g, function (D) {
        return T[D];
      })
    );
  }
  var Ee = /\/+/g;
  function Ht(m, T) {
    return typeof m == "object" && m !== null && m.key != null
      ? Vl("" + m.key)
      : T.toString(36);
  }
  function Nt(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (
          (typeof m.status == "string"
            ? m.then(Xl, Xl)
            : ((m.status = "pending"),
              m.then(
                function (T) {
                  m.status === "pending" &&
                    ((m.status = "fulfilled"), (m.value = T));
                },
                function (T) {
                  m.status === "pending" &&
                    ((m.status = "rejected"), (m.reason = T));
                }
              )),
          m.status)
        ) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function N(m, T, D, H, Q) {
    var K = typeof m;
    (K === "undefined" || K === "boolean") && (m = null);
    var al = !1;
    if (m === null) al = !0;
    else
      switch (K) {
        case "bigint":
        case "string":
        case "number":
          al = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case s:
            case g:
              al = !0;
              break;
            case Z:
              return (al = m._init), N(al(m._payload), T, D, H, Q);
          }
      }
    if (al)
      return (
        (Q = Q(m)),
        (al = H === "" ? "." + Ht(m, 0) : H),
        Tt(Q)
          ? ((D = ""),
            al != null && (D = al.replace(Ee, "$&/") + "/"),
            N(Q, T, D, "", function (Ha) {
              return Ha;
            }))
          : Q != null &&
            (Mt(Q) &&
              (Q = Je(
                Q,
                D +
                  (Q.key == null || (m && m.key === Q.key)
                    ? ""
                    : ("" + Q.key).replace(Ee, "$&/") + "/") +
                  al
              )),
            T.push(Q)),
        1
      );
    al = 0;
    var Yl = H === "" ? "." : H + ":";
    if (Tt(m))
      for (var pl = 0; pl < m.length; pl++)
        (H = m[pl]), (K = Yl + Ht(H, pl)), (al += N(H, T, D, K, Q));
    else if (((pl = Pl(m)), typeof pl == "function"))
      for (m = pl.call(m), pl = 0; !(H = m.next()).done; )
        (H = H.value), (K = Yl + Ht(H, pl++)), (al += N(H, T, D, K, Q));
    else if (K === "object") {
      if (typeof m.then == "function") return N(Nt(m), T, D, H, Q);
      throw (
        ((T = String(m)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(m).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return al;
  }
  function O(m, T, D) {
    if (m == null) return m;
    var H = [],
      Q = 0;
    return (
      N(m, H, "", "", function (K) {
        return T.call(D, K, Q++);
      }),
      H
    );
  }
  function G(m) {
    if (m._status === -1) {
      var T = m._result;
      (T = T()),
        T.then(
          function (D) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 1), (m._result = D));
          },
          function (D) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 2), (m._result = D));
          }
        ),
        m._status === -1 && ((m._status = 0), (m._result = T));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var cl =
      typeof reportError == "function"
        ? reportError
        : function (m) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var T = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof m == "object" &&
                  m !== null &&
                  typeof m.message == "string"
                    ? String(m.message)
                    : String(m),
                error: m,
              });
              if (!window.dispatchEvent(T)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", m);
              return;
            }
            console.error(m);
          },
    rl = {
      map: O,
      forEach: function (m, T, D) {
        O(
          m,
          function () {
            T.apply(this, arguments);
          },
          D
        );
      },
      count: function (m) {
        var T = 0;
        return (
          O(m, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (m) {
        return (
          O(m, function (T) {
            return T;
          }) || []
        );
      },
      only: function (m) {
        if (!Mt(m))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return m;
      },
    };
  return (
    (X.Activity = C),
    (X.Children = rl),
    (X.Component = lt),
    (X.Fragment = v),
    (X.Profiler = M),
    (X.PureComponent = Rl),
    (X.StrictMode = r),
    (X.Suspense = _),
    (X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (X.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (m) {
        return I.H.useMemoCache(m);
      },
    }),
    (X.cache = function (m) {
      return function () {
        return m.apply(null, arguments);
      };
    }),
    (X.cacheSignal = function () {
      return null;
    }),
    (X.cloneElement = function (m, T, D) {
      if (m == null)
        throw Error(
          "The argument must be a React element, but you passed " + m + "."
        );
      var H = ql({}, m.props),
        Q = m.key;
      if (T != null)
        for (K in (T.key !== void 0 && (Q = "" + T.key), T))
          !Ql.call(T, K) ||
            K === "key" ||
            K === "__self" ||
            K === "__source" ||
            (K === "ref" && T.ref === void 0) ||
            (H[K] = T[K]);
      var K = arguments.length - 2;
      if (K === 1) H.children = D;
      else if (1 < K) {
        for (var al = Array(K), Yl = 0; Yl < K; Yl++)
          al[Yl] = arguments[Yl + 2];
        H.children = al;
      }
      return Et(m.type, Q, H);
    }),
    (X.createContext = function (m) {
      return (
        (m = {
          $$typeof: L,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (m.Provider = m),
        (m.Consumer = { $$typeof: E, _context: m }),
        m
      );
    }),
    (X.createElement = function (m, T, D) {
      var H,
        Q = {},
        K = null;
      if (T != null)
        for (H in (T.key !== void 0 && (K = "" + T.key), T))
          Ql.call(T, H) &&
            H !== "key" &&
            H !== "__self" &&
            H !== "__source" &&
            (Q[H] = T[H]);
      var al = arguments.length - 2;
      if (al === 1) Q.children = D;
      else if (1 < al) {
        for (var Yl = Array(al), pl = 0; pl < al; pl++)
          Yl[pl] = arguments[pl + 2];
        Q.children = Yl;
      }
      if (m && m.defaultProps)
        for (H in ((al = m.defaultProps), al))
          Q[H] === void 0 && (Q[H] = al[H]);
      return Et(m, K, Q);
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (m) {
      return { $$typeof: q, render: m };
    }),
    (X.isValidElement = Mt),
    (X.lazy = function (m) {
      return { $$typeof: Z, _payload: { _status: -1, _result: m }, _init: G };
    }),
    (X.memo = function (m, T) {
      return { $$typeof: j, type: m, compare: T === void 0 ? null : T };
    }),
    (X.startTransition = function (m) {
      var T = I.T,
        D = {};
      I.T = D;
      try {
        var H = m(),
          Q = I.S;
        Q !== null && Q(D, H),
          typeof H == "object" &&
            H !== null &&
            typeof H.then == "function" &&
            H.then(Xl, cl);
      } catch (K) {
        cl(K);
      } finally {
        T !== null && D.types !== null && (T.types = D.types), (I.T = T);
      }
    }),
    (X.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (X.use = function (m) {
      return I.H.use(m);
    }),
    (X.useActionState = function (m, T, D) {
      return I.H.useActionState(m, T, D);
    }),
    (X.useCallback = function (m, T) {
      return I.H.useCallback(m, T);
    }),
    (X.useContext = function (m) {
      return I.H.useContext(m);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (m, T) {
      return I.H.useDeferredValue(m, T);
    }),
    (X.useEffect = function (m, T) {
      return I.H.useEffect(m, T);
    }),
    (X.useEffectEvent = function (m) {
      return I.H.useEffectEvent(m);
    }),
    (X.useId = function () {
      return I.H.useId();
    }),
    (X.useImperativeHandle = function (m, T, D) {
      return I.H.useImperativeHandle(m, T, D);
    }),
    (X.useInsertionEffect = function (m, T) {
      return I.H.useInsertionEffect(m, T);
    }),
    (X.useLayoutEffect = function (m, T) {
      return I.H.useLayoutEffect(m, T);
    }),
    (X.useMemo = function (m, T) {
      return I.H.useMemo(m, T);
    }),
    (X.useOptimistic = function (m, T) {
      return I.H.useOptimistic(m, T);
    }),
    (X.useReducer = function (m, T, D) {
      return I.H.useReducer(m, T, D);
    }),
    (X.useRef = function (m) {
      return I.H.useRef(m);
    }),
    (X.useState = function (m) {
      return I.H.useState(m);
    }),
    (X.useSyncExternalStore = function (m, T, D) {
      return I.H.useSyncExternalStore(m, T, D);
    }),
    (X.useTransition = function () {
      return I.H.useTransition();
    }),
    (X.version = "19.2.4"),
    X
  );
}
var Cs;
function N1() {
  return Cs || ((Cs = 1), (y1.exports = N4())), y1.exports;
}
var Ke = N1();
const k = x4(Ke);
var b1 = { exports: {} },
  _n = {},
  x1 = { exports: {} },
  p1 = {};
var Hs;
function z4() {
  return (
    Hs ||
      ((Hs = 1),
      (function (s) {
        function g(N, O) {
          var G = N.length;
          N.push(O);
          l: for (; 0 < G; ) {
            var cl = (G - 1) >>> 1,
              rl = N[cl];
            if (0 < M(rl, O)) (N[cl] = O), (N[G] = rl), (G = cl);
            else break l;
          }
        }
        function v(N) {
          return N.length === 0 ? null : N[0];
        }
        function r(N) {
          if (N.length === 0) return null;
          var O = N[0],
            G = N.pop();
          if (G !== O) {
            N[0] = G;
            l: for (var cl = 0, rl = N.length, m = rl >>> 1; cl < m; ) {
              var T = 2 * (cl + 1) - 1,
                D = N[T],
                H = T + 1,
                Q = N[H];
              if (0 > M(D, G))
                H < rl && 0 > M(Q, D)
                  ? ((N[cl] = Q), (N[H] = G), (cl = H))
                  : ((N[cl] = D), (N[T] = G), (cl = T));
              else if (H < rl && 0 > M(Q, G)) (N[cl] = Q), (N[H] = G), (cl = H);
              else break l;
            }
          }
          return O;
        }
        function M(N, O) {
          var G = N.sortIndex - O.sortIndex;
          return G !== 0 ? G : N.id - O.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var E = performance;
          s.unstable_now = function () {
            return E.now();
          };
        } else {
          var L = Date,
            q = L.now();
          s.unstable_now = function () {
            return L.now() - q;
          };
        }
        var _ = [],
          j = [],
          Z = 1,
          C = null,
          dl = 3,
          Pl = !1,
          Ll = !1,
          ql = !1,
          Ct = !1,
          lt = typeof setTimeout == "function" ? setTimeout : null,
          Pt = typeof clearTimeout == "function" ? clearTimeout : null,
          Rl = typeof setImmediate < "u" ? setImmediate : null;
        function ot(N) {
          for (var O = v(j); O !== null; ) {
            if (O.callback === null) r(j);
            else if (O.startTime <= N)
              r(j), (O.sortIndex = O.expirationTime), g(_, O);
            else break;
            O = v(j);
          }
        }
        function Tt(N) {
          if (((ql = !1), ot(N), !Ll))
            if (v(_) !== null) (Ll = !0), Xl || ((Xl = !0), Vl());
            else {
              var O = v(j);
              O !== null && Nt(Tt, O.startTime - N);
            }
        }
        var Xl = !1,
          I = -1,
          Ql = 5,
          Et = -1;
        function Je() {
          return Ct ? !0 : !(s.unstable_now() - Et < Ql);
        }
        function Mt() {
          if (((Ct = !1), Xl)) {
            var N = s.unstable_now();
            Et = N;
            var O = !0;
            try {
              l: {
                (Ll = !1), ql && ((ql = !1), Pt(I), (I = -1)), (Pl = !0);
                var G = dl;
                try {
                  t: {
                    for (
                      ot(N), C = v(_);
                      C !== null && !(C.expirationTime > N && Je());

                    ) {
                      var cl = C.callback;
                      if (typeof cl == "function") {
                        (C.callback = null), (dl = C.priorityLevel);
                        var rl = cl(C.expirationTime <= N);
                        if (((N = s.unstable_now()), typeof rl == "function")) {
                          (C.callback = rl), ot(N), (O = !0);
                          break t;
                        }
                        C === v(_) && r(_), ot(N);
                      } else r(_);
                      C = v(_);
                    }
                    if (C !== null) O = !0;
                    else {
                      var m = v(j);
                      m !== null && Nt(Tt, m.startTime - N), (O = !1);
                    }
                  }
                  break l;
                } finally {
                  (C = null), (dl = G), (Pl = !1);
                }
                O = void 0;
              }
            } finally {
              O ? Vl() : (Xl = !1);
            }
          }
        }
        var Vl;
        if (typeof Rl == "function")
          Vl = function () {
            Rl(Mt);
          };
        else if (typeof MessageChannel < "u") {
          var Ee = new MessageChannel(),
            Ht = Ee.port2;
          (Ee.port1.onmessage = Mt),
            (Vl = function () {
              Ht.postMessage(null);
            });
        } else
          Vl = function () {
            lt(Mt, 0);
          };
        function Nt(N, O) {
          I = lt(function () {
            N(s.unstable_now());
          }, O);
        }
        (s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (s.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ql = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return dl;
          }),
          (s.unstable_next = function (N) {
            switch (dl) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = dl;
            }
            var G = dl;
            dl = O;
            try {
              return N();
            } finally {
              dl = G;
            }
          }),
          (s.unstable_requestPaint = function () {
            Ct = !0;
          }),
          (s.unstable_runWithPriority = function (N, O) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var G = dl;
            dl = N;
            try {
              return O();
            } finally {
              dl = G;
            }
          }),
          (s.unstable_scheduleCallback = function (N, O, G) {
            var cl = s.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? cl + G : cl))
                : (G = cl),
              N)
            ) {
              case 1:
                var rl = -1;
                break;
              case 2:
                rl = 250;
                break;
              case 5:
                rl = 1073741823;
                break;
              case 4:
                rl = 1e4;
                break;
              default:
                rl = 5e3;
            }
            return (
              (rl = G + rl),
              (N = {
                id: Z++,
                callback: O,
                priorityLevel: N,
                startTime: G,
                expirationTime: rl,
                sortIndex: -1,
              }),
              G > cl
                ? ((N.sortIndex = G),
                  g(j, N),
                  v(_) === null &&
                    N === v(j) &&
                    (ql ? (Pt(I), (I = -1)) : (ql = !0), Nt(Tt, G - cl)))
                : ((N.sortIndex = rl),
                  g(_, N),
                  Ll || Pl || ((Ll = !0), Xl || ((Xl = !0), Vl()))),
              N
            );
          }),
          (s.unstable_shouldYield = Je),
          (s.unstable_wrapCallback = function (N) {
            var O = dl;
            return function () {
              var G = dl;
              dl = O;
              try {
                return N.apply(this, arguments);
              } finally {
                dl = G;
              }
            };
          });
      })(p1)),
    p1
  );
}
var Rs;
function j4() {
  return Rs || ((Rs = 1), (x1.exports = z4())), x1.exports;
}
var S1 = { exports: {} },
  Bl = {};
var Bs;
function A4() {
  if (Bs) return Bl;
  Bs = 1;
  var s = N1();
  function g(_) {
    var j = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      j += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Z = 2; Z < arguments.length; Z++)
        j += "&args[]=" + encodeURIComponent(arguments[Z]);
    }
    return (
      "Minified React error #" +
      _ +
      "; visit " +
      j +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function v() {}
  var r = {
      d: {
        f: v,
        r: function () {
          throw Error(g(522));
        },
        D: v,
        C: v,
        L: v,
        m: v,
        X: v,
        S: v,
        M: v,
      },
      p: 0,
      findDOMNode: null,
    },
    M = Symbol.for("react.portal");
  function E(_, j, Z) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: M,
      key: C == null ? null : "" + C,
      children: _,
      containerInfo: j,
      implementation: Z,
    };
  }
  var L = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function q(_, j) {
    if (_ === "font") return "";
    if (typeof j == "string") return j === "use-credentials" ? j : "";
  }
  return (
    (Bl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Bl.createPortal = function (_, j) {
      var Z =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!j || (j.nodeType !== 1 && j.nodeType !== 9 && j.nodeType !== 11))
        throw Error(g(299));
      return E(_, j, null, Z);
    }),
    (Bl.flushSync = function (_) {
      var j = L.T,
        Z = r.p;
      try {
        if (((L.T = null), (r.p = 2), _)) return _();
      } finally {
        (L.T = j), (r.p = Z), r.d.f();
      }
    }),
    (Bl.preconnect = function (_, j) {
      typeof _ == "string" &&
        (j
          ? ((j = j.crossOrigin),
            (j =
              typeof j == "string"
                ? j === "use-credentials"
                  ? j
                  : ""
                : void 0))
          : (j = null),
        r.d.C(_, j));
    }),
    (Bl.prefetchDNS = function (_) {
      typeof _ == "string" && r.d.D(_);
    }),
    (Bl.preinit = function (_, j) {
      if (typeof _ == "string" && j && typeof j.as == "string") {
        var Z = j.as,
          C = q(Z, j.crossOrigin),
          dl = typeof j.integrity == "string" ? j.integrity : void 0,
          Pl = typeof j.fetchPriority == "string" ? j.fetchPriority : void 0;
        Z === "style"
          ? r.d.S(_, typeof j.precedence == "string" ? j.precedence : void 0, {
              crossOrigin: C,
              integrity: dl,
              fetchPriority: Pl,
            })
          : Z === "script" &&
            r.d.X(_, {
              crossOrigin: C,
              integrity: dl,
              fetchPriority: Pl,
              nonce: typeof j.nonce == "string" ? j.nonce : void 0,
            });
      }
    }),
    (Bl.preinitModule = function (_, j) {
      if (typeof _ == "string")
        if (typeof j == "object" && j !== null) {
          if (j.as == null || j.as === "script") {
            var Z = q(j.as, j.crossOrigin);
            r.d.M(_, {
              crossOrigin: Z,
              integrity: typeof j.integrity == "string" ? j.integrity : void 0,
              nonce: typeof j.nonce == "string" ? j.nonce : void 0,
            });
          }
        } else j == null && r.d.M(_);
    }),
    (Bl.preload = function (_, j) {
      if (
        typeof _ == "string" &&
        typeof j == "object" &&
        j !== null &&
        typeof j.as == "string"
      ) {
        var Z = j.as,
          C = q(Z, j.crossOrigin);
        r.d.L(_, Z, {
          crossOrigin: C,
          integrity: typeof j.integrity == "string" ? j.integrity : void 0,
          nonce: typeof j.nonce == "string" ? j.nonce : void 0,
          type: typeof j.type == "string" ? j.type : void 0,
          fetchPriority:
            typeof j.fetchPriority == "string" ? j.fetchPriority : void 0,
          referrerPolicy:
            typeof j.referrerPolicy == "string" ? j.referrerPolicy : void 0,
          imageSrcSet:
            typeof j.imageSrcSet == "string" ? j.imageSrcSet : void 0,
          imageSizes: typeof j.imageSizes == "string" ? j.imageSizes : void 0,
          media: typeof j.media == "string" ? j.media : void 0,
        });
      }
    }),
    (Bl.preloadModule = function (_, j) {
      if (typeof _ == "string")
        if (j) {
          var Z = q(j.as, j.crossOrigin);
          r.d.m(_, {
            as: typeof j.as == "string" && j.as !== "script" ? j.as : void 0,
            crossOrigin: Z,
            integrity: typeof j.integrity == "string" ? j.integrity : void 0,
          });
        } else r.d.m(_);
    }),
    (Bl.requestFormReset = function (_) {
      r.d.r(_);
    }),
    (Bl.unstable_batchedUpdates = function (_, j) {
      return _(j);
    }),
    (Bl.useFormState = function (_, j, Z) {
      return L.H.useFormState(_, j, Z);
    }),
    (Bl.useFormStatus = function () {
      return L.H.useHostTransitionStatus();
    }),
    (Bl.version = "19.2.4"),
    Bl
  );
}
var qs;
function T4() {
  if (qs) return S1.exports;
  qs = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (g) {
        console.error(g);
      }
  }
  return s(), (S1.exports = A4()), S1.exports;
}
var Ys;
function E4() {
  if (Ys) return _n;
  Ys = 1;
  var s = j4(),
    g = N1(),
    v = T4();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function M(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function E(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function L(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function q(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function _(l) {
    if (E(l) !== l) throw Error(r(188));
  }
  function j(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = E(l)), t === null)) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return _(n), l;
          if (u === a) return _(n), t;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (e.return !== a.return) (e = n), (a = u);
      else {
        for (var c = !1, f = n.child; f; ) {
          if (f === e) {
            (c = !0), (e = n), (a = u);
            break;
          }
          if (f === a) {
            (c = !0), (a = n), (e = u);
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = u.child; f; ) {
            if (f === e) {
              (c = !0), (e = u), (a = n);
              break;
            }
            if (f === a) {
              (c = !0), (a = u), (e = n);
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (e.alternate !== a) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
    return e.stateNode.current === e ? l : t;
  }
  function Z(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = Z(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var C = Object.assign,
    dl = Symbol.for("react.element"),
    Pl = Symbol.for("react.transitional.element"),
    Ll = Symbol.for("react.portal"),
    ql = Symbol.for("react.fragment"),
    Ct = Symbol.for("react.strict_mode"),
    lt = Symbol.for("react.profiler"),
    Pt = Symbol.for("react.consumer"),
    Rl = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    Tt = Symbol.for("react.suspense"),
    Xl = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    Ql = Symbol.for("react.lazy"),
    Et = Symbol.for("react.activity"),
    Je = Symbol.for("react.memo_cache_sentinel"),
    Mt = Symbol.iterator;
  function Vl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Mt && l[Mt]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Ee = Symbol.for("react.client.reference");
  function Ht(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ee ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case lt:
        return "Profiler";
      case Ct:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Xl:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ll:
          return "Portal";
        case Rl:
          return l.displayName || "Context";
        case Pt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ot:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case I:
          return (
            (t = l.displayName || null), t !== null ? t : Ht(l.type) || "Memo"
          );
        case Ql:
          (t = l._payload), (l = l._init);
          try {
            return Ht(l(t));
          } catch {}
      }
    return null;
  }
  var Nt = Array.isArray,
    N = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    O = v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = { pending: !1, data: null, method: null, action: null },
    cl = [],
    rl = -1;
  function m(l) {
    return { current: l };
  }
  function T(l) {
    0 > rl || ((l.current = cl[rl]), (cl[rl] = null), rl--);
  }
  function D(l, t) {
    rl++, (cl[rl] = l.current), (l.current = t);
  }
  var H = m(null),
    Q = m(null),
    K = m(null),
    al = m(null);
  function Yl(l, t) {
    switch ((D(K, t), D(Q, l), D(H, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? P2(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = P2(t)), (l = ls(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    T(H), D(H, l);
  }
  function pl() {
    T(H), T(Q), T(K);
  }
  function Ha(l) {
    l.memoizedState !== null && D(al, l);
    var t = H.current,
      e = ls(t, l.type);
    t !== e && (D(Q, l), D(H, e));
  }
  function On(l) {
    Q.current === l && (T(H), T(Q)),
      al.current === l && (T(al), (jn._currentValue = G));
  }
  var Iu, M1;
  function Me(l) {
    if (Iu === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        (Iu = (t && t[1]) || ""),
          (M1 =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Iu +
      l +
      M1
    );
  }
  var Pu = !1;
  function lc(l, t) {
    if (!l || Pu) return "";
    Pu = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var A = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(A.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(A, []);
                } catch (p) {
                  var x = p;
                }
                Reflect.construct(l, [], A);
              } else {
                try {
                  A.call();
                } catch (p) {
                  x = p;
                }
                l.call(A.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                x = p;
              }
              (A = l()) &&
                typeof A.catch == "function" &&
                A.catch(function () {});
            }
          } catch (p) {
            if (p && x && typeof p.stack == "string") return [p.stack, x.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        f = u[1];
      if (c && f) {
        var o = c.split(`
`),
          b = f.split(`
`);
        for (
          n = a = 0;
          a < o.length && !o[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < b.length && !b[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === o.length || n === b.length)
          for (
            a = o.length - 1, n = b.length - 1;
            1 <= a && 0 <= n && o[a] !== b[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (o[a] !== b[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || o[a] !== b[n])) {
                  var S =
                    `
` + o[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (Pu = !1), (Error.prepareStackTrace = e);
    }
    return (e = l ? l.displayName || l.name : "") ? Me(e) : "";
  }
  function Ws(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Me(l.type);
      case 16:
        return Me("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Me("Suspense Fallback")
          : Me("Suspense");
      case 19:
        return Me("SuspenseList");
      case 0:
      case 15:
        return lc(l.type, !1);
      case 11:
        return lc(l.type.render, !1);
      case 1:
        return lc(l.type, !0);
      case 31:
        return Me("Activity");
      default:
        return "";
    }
  }
  function _1(l) {
    try {
      var t = "",
        e = null;
      do (t += Ws(l, e)), (e = l), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var tc = Object.prototype.hasOwnProperty,
    ec = s.unstable_scheduleCallback,
    ac = s.unstable_cancelCallback,
    Fs = s.unstable_shouldYield,
    Is = s.unstable_requestPaint,
    tt = s.unstable_now,
    Ps = s.unstable_getCurrentPriorityLevel,
    O1 = s.unstable_ImmediatePriority,
    D1 = s.unstable_UserBlockingPriority,
    Dn = s.unstable_NormalPriority,
    lr = s.unstable_LowPriority,
    U1 = s.unstable_IdlePriority,
    tr = s.log,
    er = s.unstable_setDisableYieldValue,
    Ra = null,
    et = null;
  function le(l) {
    if (
      (typeof tr == "function" && er(l),
      et && typeof et.setStrictMode == "function")
    )
      try {
        et.setStrictMode(Ra, l);
      } catch {}
  }
  var at = Math.clz32 ? Math.clz32 : ur,
    ar = Math.log,
    nr = Math.LN2;
  function ur(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((ar(l) / nr) | 0)) | 0;
  }
  var Un = 256,
    Cn = 262144,
    Hn = 4194304;
  function _e(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Rn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~u),
          a !== 0
            ? (n = _e(a))
            : ((c &= f),
              c !== 0
                ? (n = _e(c))
                : e || ((e = f & ~l), e !== 0 && (n = _e(e)))))
        : ((f = a & ~u),
          f !== 0
            ? (n = _e(f))
            : c !== 0
            ? (n = _e(c))
            : e || ((e = a & ~l), e !== 0 && (n = _e(e)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & u) === 0 &&
          ((u = n & -n),
          (e = t & -t),
          u >= e || (u === 32 && (e & 4194048) !== 0))
        ? t
        : n
    );
  }
  function Ba(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function cr(l, t) {
    switch (l) {
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
  function C1() {
    var l = Hn;
    return (Hn <<= 1), (Hn & 62914560) === 0 && (Hn = 4194304), l;
  }
  function nc(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function qa(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function ir(l, t, e, a, n, u) {
    var c = l.pendingLanes;
    (l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0);
    var f = l.entanglements,
      o = l.expirationTimes,
      b = l.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var S = 31 - at(e),
        A = 1 << S;
      (f[S] = 0), (o[S] = -1);
      var x = b[S];
      if (x !== null)
        for (b[S] = null, S = 0; S < x.length; S++) {
          var p = x[S];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~A;
    }
    a !== 0 && H1(l, a, 0),
      u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(c & ~t));
  }
  function H1(l, t, e) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - at(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930));
  }
  function R1(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - at(e),
        n = 1 << a;
      (n & t) | (l[a] & t) && (l[a] |= t), (e &= ~n);
    }
  }
  function B1(l, t) {
    var e = t & -t;
    return (
      (e = (e & 42) !== 0 ? 1 : uc(e)),
      (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    );
  }
  function uc(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function cc(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function q1() {
    var l = O.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : zs(l.type));
  }
  function Y1(l, t) {
    var e = O.p;
    try {
      return (O.p = l), t();
    } finally {
      O.p = e;
    }
  }
  var te = Math.random().toString(36).slice(2),
    Ol = "__reactFiber$" + te,
    Zl = "__reactProps$" + te,
    $e = "__reactContainer$" + te,
    ic = "__reactEvents$" + te,
    fr = "__reactListeners$" + te,
    sr = "__reactHandles$" + te,
    G1 = "__reactResources$" + te,
    Ya = "__reactMarker$" + te;
  function fc(l) {
    delete l[Ol], delete l[Zl], delete l[ic], delete l[fr], delete l[sr];
  }
  function We(l) {
    var t = l[Ol];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[$e] || e[Ol])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = is(l); l !== null; ) {
            if ((e = l[Ol])) return e;
            l = is(l);
          }
        return t;
      }
      (l = e), (e = l.parentNode);
    }
    return null;
  }
  function Fe(l) {
    if ((l = l[Ol] || l[$e])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Ga(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function Ie(l) {
    var t = l[G1];
    return (
      t ||
        (t = l[G1] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ml(l) {
    l[Ya] = !0;
  }
  var L1 = new Set(),
    X1 = {};
  function Oe(l, t) {
    Pe(l, t), Pe(l + "Capture", t);
  }
  function Pe(l, t) {
    for (X1[l] = t, l = 0; l < t.length; l++) L1.add(t[l]);
  }
  var rr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Q1 = {},
    V1 = {};
  function or(l) {
    return tc.call(V1, l)
      ? !0
      : tc.call(Q1, l)
      ? !1
      : rr.test(l)
      ? (V1[l] = !0)
      : ((Q1[l] = !0), !1);
  }
  function Bn(l, t, e) {
    if (or(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function qn(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Rt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function dt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Z1(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function dr(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            (e = "" + c), u.call(this, c);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (c) {
            e = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function sc(l) {
    if (!l._valueTracker) {
      var t = Z1(l) ? "checked" : "value";
      l._valueTracker = dr(l, t, "" + l[t]);
    }
  }
  function w1(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = Z1(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  function Yn(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var mr = /[\n"\\]/g;
  function mt(l) {
    return l.replace(mr, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function rc(l, t, e, a, n, u, c, f) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + dt(t))
          : l.value !== "" + dt(t) && (l.value = "" + dt(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? oc(l, c, dt(t))
        : e != null
        ? oc(l, c, dt(e))
        : a != null && l.removeAttribute("value"),
      n == null && u != null && (l.defaultChecked = !!u),
      n != null &&
        (l.checked = n && typeof n != "function" && typeof n != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + dt(f))
        : l.removeAttribute("name");
  }
  function k1(l, t, e, a, n, u, c, f) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (l.type = u),
      t != null || e != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        sc(l);
        return;
      }
      (e = e != null ? "" + dt(e) : ""),
        (t = t != null ? "" + dt(t) : e),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = f ? l.checked : !!a),
      (l.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c),
      sc(l);
  }
  function oc(l, t, e) {
    (t === "number" && Yn(l.ownerDocument) === l) ||
      l.defaultValue === "" + e ||
      (l.defaultValue = "" + e);
  }
  function la(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var n = 0; n < e.length; n++) t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        (n = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== n && (l[e].selected = n),
          n && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + dt(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          (l[n].selected = !0), a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function K1(l, t, e) {
    if (
      t != null &&
      ((t = "" + dt(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + dt(e) : "";
  }
  function J1(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(r(92));
        if (Nt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (t = e);
    }
    (e = dt(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a),
      sc(l);
  }
  function ta(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var hr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function $1(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : a
      ? l.setProperty(t, e)
      : typeof e != "number" || e === 0 || hr.has(t)
      ? t === "float"
        ? (l.cssFloat = e)
        : (l[t] = ("" + e).trim())
      : (l[t] = e + "px");
  }
  function W1(l, t, e) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
            ? (l.cssFloat = "")
            : (l[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && e[n] !== a && $1(l, n, a);
    } else for (var u in t) t.hasOwnProperty(u) && $1(l, u, t[u]);
  }
  function dc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
        return !0;
    }
  }
  var gr = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    vr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gn(l) {
    return vr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Bt() {}
  var mc = null;
  function hc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var ea = null,
    aa = null;
  function F1(l) {
    var t = Fe(l);
    if (t && (l = t.stateNode)) {
      var e = l[Zl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (rc(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + mt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[Zl] || null;
                if (!n) throw Error(r(90));
                rc(
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
            for (t = 0; t < e.length; t++)
              (a = e[t]), a.form === l.form && w1(a);
          }
          break l;
        case "textarea":
          K1(l, e.value, e.defaultValue);
          break l;
        case "select":
          (t = e.value), t != null && la(l, !!e.multiple, t, !1);
      }
    }
  }
  var gc = !1;
  function I1(l, t, e) {
    if (gc) return l(t, e);
    gc = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((gc = !1),
        (ea !== null || aa !== null) &&
          (Tu(), ea && ((t = ea), (l = aa), (aa = ea = null), F1(t), l)))
      )
        for (t = 0; t < l.length; t++) F1(l[t]);
    }
  }
  function La(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Zl] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
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
        (a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(r(231, t, typeof e));
    return e;
  }
  var qt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    vc = !1;
  if (qt)
    try {
      var Xa = {};
      Object.defineProperty(Xa, "passive", {
        get: function () {
          vc = !0;
        },
      }),
        window.addEventListener("test", Xa, Xa),
        window.removeEventListener("test", Xa, Xa);
    } catch {
      vc = !1;
    }
  var ee = null,
    yc = null,
    Ln = null;
  function P1() {
    if (Ln) return Ln;
    var l,
      t = yc,
      e = t.length,
      a,
      n = "value" in ee ? ee.value : ee.textContent,
      u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++);
    var c = e - l;
    for (a = 1; a <= c && t[e - a] === n[u - a]; a++);
    return (Ln = n.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Xn(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Qn() {
    return !0;
  }
  function l0() {
    return !1;
  }
  function wl(l) {
    function t(e, a, n, u, c) {
      (this._reactName = e),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null);
      for (var f in l)
        l.hasOwnProperty(f) && ((e = l[f]), (this[f] = e ? e(u) : u[f]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Qn
          : l0),
        (this.isPropagationStopped = l0),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Qn));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Qn));
        },
        persist: function () {},
        isPersistent: Qn,
      }),
      t
    );
  }
  var De = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vn = wl(De),
    Qa = C({}, De, { view: 0, detail: 0 }),
    yr = wl(Qa),
    bc,
    xc,
    Va,
    Zn = C({}, Qa, {
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
      getModifierState: Sc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Va &&
              (Va && l.type === "mousemove"
                ? ((bc = l.screenX - Va.screenX), (xc = l.screenY - Va.screenY))
                : (xc = bc = 0),
              (Va = l)),
            bc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : xc;
      },
    }),
    t0 = wl(Zn),
    br = C({}, Zn, { dataTransfer: 0 }),
    xr = wl(br),
    pr = C({}, Qa, { relatedTarget: 0 }),
    pc = wl(pr),
    Sr = C({}, De, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nr = wl(Sr),
    zr = C({}, De, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    jr = wl(zr),
    Ar = C({}, De, { data: 0 }),
    e0 = wl(Ar),
    Tr = {
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
      MozPrintableKey: "Unidentified",
    },
    Er = {
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
      224: "Meta",
    },
    Mr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function _r(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Mr[l])
      ? !!t[l]
      : !1;
  }
  function Sc() {
    return _r;
  }
  var Or = C({}, Qa, {
      key: function (l) {
        if (l.key) {
          var t = Tr[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Xn(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Er[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sc,
      charCode: function (l) {
        return l.type === "keypress" ? Xn(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Xn(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    Dr = wl(Or),
    Ur = C({}, Zn, {
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
    a0 = wl(Ur),
    Cr = C({}, Qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sc,
    }),
    Hr = wl(Cr),
    Rr = C({}, De, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Br = wl(Rr),
    qr = C({}, Zn, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Yr = wl(qr),
    Gr = C({}, De, { newState: 0, oldState: 0 }),
    Lr = wl(Gr),
    Xr = [9, 13, 27, 32],
    Nc = qt && "CompositionEvent" in window,
    Za = null;
  qt && "documentMode" in document && (Za = document.documentMode);
  var Qr = qt && "TextEvent" in window && !Za,
    n0 = qt && (!Nc || (Za && 8 < Za && 11 >= Za)),
    u0 = " ",
    c0 = !1;
  function i0(l, t) {
    switch (l) {
      case "keyup":
        return Xr.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function f0(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var na = !1;
  function Vr(l, t) {
    switch (l) {
      case "compositionend":
        return f0(t);
      case "keypress":
        return t.which !== 32 ? null : ((c0 = !0), u0);
      case "textInput":
        return (l = t.data), l === u0 && c0 ? null : l;
      default:
        return null;
    }
  }
  function Zr(l, t) {
    if (na)
      return l === "compositionend" || (!Nc && i0(l, t))
        ? ((l = P1()), (Ln = yc = ee = null), (na = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return n0 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var wr = {
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
    week: !0,
  };
  function s0(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!wr[l.type] : t === "textarea";
  }
  function r0(l, t, e, a) {
    ea ? (aa ? aa.push(a) : (aa = [a])) : (ea = a),
      (t = Cu(t, "onChange")),
      0 < t.length &&
        ((e = new Vn("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t }));
  }
  var wa = null,
    ka = null;
  function kr(l) {
    K2(l, 0);
  }
  function wn(l) {
    var t = Ga(l);
    if (w1(t)) return l;
  }
  function o0(l, t) {
    if (l === "change") return t;
  }
  var d0 = !1;
  if (qt) {
    var zc;
    if (qt) {
      var jc = "oninput" in document;
      if (!jc) {
        var m0 = document.createElement("div");
        m0.setAttribute("oninput", "return;"),
          (jc = typeof m0.oninput == "function");
      }
      zc = jc;
    } else zc = !1;
    d0 = zc && (!document.documentMode || 9 < document.documentMode);
  }
  function h0() {
    wa && (wa.detachEvent("onpropertychange", g0), (ka = wa = null));
  }
  function g0(l) {
    if (l.propertyName === "value" && wn(ka)) {
      var t = [];
      r0(t, ka, l, hc(l)), I1(kr, t);
    }
  }
  function Kr(l, t, e) {
    l === "focusin"
      ? (h0(), (wa = t), (ka = e), wa.attachEvent("onpropertychange", g0))
      : l === "focusout" && h0();
  }
  function Jr(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return wn(ka);
  }
  function $r(l, t) {
    if (l === "click") return wn(t);
  }
  function Wr(l, t) {
    if (l === "input" || l === "change") return wn(t);
  }
  function Fr(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Fr;
  function Ka(l, t) {
    if (nt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!tc.call(t, n) || !nt(l[n], t[n])) return !1;
    }
    return !0;
  }
  function v0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function y0(l, t) {
    var e = v0(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = v0(e);
    }
  }
  function b0(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? b0(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function x0(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Yn(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Yn(l.document);
    }
    return t;
  }
  function Ac(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Ir = qt && "documentMode" in document && 11 >= document.documentMode,
    ua = null,
    Tc = null,
    Ja = null,
    Ec = !1;
  function p0(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ec ||
      ua == null ||
      ua !== Yn(a) ||
      ((a = ua),
      "selectionStart" in a && Ac(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ja && Ka(Ja, a)) ||
        ((Ja = a),
        (a = Cu(Tc, "onSelect")),
        0 < a.length &&
          ((t = new Vn("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = ua))));
  }
  function Ue(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var ca = {
      animationend: Ue("Animation", "AnimationEnd"),
      animationiteration: Ue("Animation", "AnimationIteration"),
      animationstart: Ue("Animation", "AnimationStart"),
      transitionrun: Ue("Transition", "TransitionRun"),
      transitionstart: Ue("Transition", "TransitionStart"),
      transitioncancel: Ue("Transition", "TransitionCancel"),
      transitionend: Ue("Transition", "TransitionEnd"),
    },
    Mc = {},
    S0 = {};
  qt &&
    ((S0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ca.animationend.animation,
      delete ca.animationiteration.animation,
      delete ca.animationstart.animation),
    "TransitionEvent" in window || delete ca.transitionend.transition);
  function Ce(l) {
    if (Mc[l]) return Mc[l];
    if (!ca[l]) return l;
    var t = ca[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in S0) return (Mc[l] = t[e]);
    return l;
  }
  var N0 = Ce("animationend"),
    z0 = Ce("animationiteration"),
    j0 = Ce("animationstart"),
    Pr = Ce("transitionrun"),
    l3 = Ce("transitionstart"),
    t3 = Ce("transitioncancel"),
    A0 = Ce("transitionend"),
    T0 = new Map(),
    _c =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  _c.push("scrollEnd");
  function zt(l, t) {
    T0.set(l, t), Oe(t, [l]);
  }
  var kn =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    ht = [],
    ia = 0,
    Oc = 0;
  function Kn() {
    for (var l = ia, t = (Oc = ia = 0); t < l; ) {
      var e = ht[t];
      ht[t++] = null;
      var a = ht[t];
      ht[t++] = null;
      var n = ht[t];
      ht[t++] = null;
      var u = ht[t];
      if (((ht[t++] = null), a !== null && n !== null)) {
        var c = a.pending;
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n);
      }
      u !== 0 && E0(e, n, u);
    }
  }
  function Jn(l, t, e, a) {
    (ht[ia++] = l),
      (ht[ia++] = t),
      (ht[ia++] = e),
      (ht[ia++] = a),
      (Oc |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function Dc(l, t, e, a) {
    return Jn(l, t, e, a), $n(l);
  }
  function He(l, t) {
    return Jn(l, null, null, t), $n(l);
  }
  function E0(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = l.return; u !== null; )
      (u.childLanes |= e),
        (a = u.alternate),
        a !== null && (a.childLanes |= e),
        u.tag === 22 &&
          ((l = u.stateNode), l === null || l._visibility & 1 || (n = !0)),
        (l = u),
        (u = u.return);
    return l.tag === 3
      ? ((u = l.stateNode),
        n &&
          t !== null &&
          ((n = 31 - at(e)),
          (l = u.hiddenUpdates),
          (a = l[n]),
          a === null ? (l[n] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        u)
      : null;
  }
  function $n(l) {
    if (50 < yn) throw ((yn = 0), (Li = null), Error(r(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var fa = {};
  function e3(l, t, e, a) {
    (this.tag = l),
      (this.key = e),
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
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ut(l, t, e, a) {
    return new e3(l, t, e, a);
  }
  function Uc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Yt(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = ut(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function M0(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Wn(l, t, e, a, n, u) {
    var c = 0;
    if (((a = l), typeof l == "function")) Uc(l) && (c = 1);
    else if (typeof l == "string")
      c = i4(l, e, H.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case Et:
          return (l = ut(31, e, t, n)), (l.elementType = Et), (l.lanes = u), l;
        case ql:
          return Re(e.children, n, u, t);
        case Ct:
          (c = 8), (n |= 24);
          break;
        case lt:
          return (
            (l = ut(12, e, t, n | 2)), (l.elementType = lt), (l.lanes = u), l
          );
        case Tt:
          return (l = ut(13, e, t, n)), (l.elementType = Tt), (l.lanes = u), l;
        case Xl:
          return (l = ut(19, e, t, n)), (l.elementType = Xl), (l.lanes = u), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Rl:
                c = 10;
                break l;
              case Pt:
                c = 9;
                break l;
              case ot:
                c = 11;
                break l;
              case I:
                c = 14;
                break l;
              case Ql:
                (c = 16), (a = null);
                break l;
            }
          (c = 29),
            (e = Error(r(130, l === null ? "null" : typeof l, ""))),
            (a = null);
      }
    return (
      (t = ut(c, e, t, n)), (t.elementType = l), (t.type = a), (t.lanes = u), t
    );
  }
  function Re(l, t, e, a) {
    return (l = ut(7, l, a, t)), (l.lanes = e), l;
  }
  function Cc(l, t, e) {
    return (l = ut(6, l, null, t)), (l.lanes = e), l;
  }
  function _0(l) {
    var t = ut(18, null, null, 0);
    return (t.stateNode = l), t;
  }
  function Hc(l, t, e) {
    return (
      (t = ut(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var O0 = new WeakMap();
  function gt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = O0.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: _1(t) }), O0.set(l, t), t);
    }
    return { value: l, source: t, stack: _1(t) };
  }
  var sa = [],
    ra = 0,
    Fn = null,
    $a = 0,
    vt = [],
    yt = 0,
    ae = null,
    _t = 1,
    Ot = "";
  function Gt(l, t) {
    (sa[ra++] = $a), (sa[ra++] = Fn), (Fn = l), ($a = t);
  }
  function D0(l, t, e) {
    (vt[yt++] = _t), (vt[yt++] = Ot), (vt[yt++] = ae), (ae = l);
    var a = _t;
    l = Ot;
    var n = 32 - at(a) - 1;
    (a &= ~(1 << n)), (e += 1);
    var u = 32 - at(t) + n;
    if (30 < u) {
      var c = n - (n % 5);
      (u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (_t = (1 << (32 - at(t) + n)) | (e << n) | a),
        (Ot = u + l);
    } else (_t = (1 << u) | (e << n) | a), (Ot = l);
  }
  function Rc(l) {
    l.return !== null && (Gt(l, 1), D0(l, 1, 0));
  }
  function Bc(l) {
    for (; l === Fn; )
      (Fn = sa[--ra]), (sa[ra] = null), ($a = sa[--ra]), (sa[ra] = null);
    for (; l === ae; )
      (ae = vt[--yt]),
        (vt[yt] = null),
        (Ot = vt[--yt]),
        (vt[yt] = null),
        (_t = vt[--yt]),
        (vt[yt] = null);
  }
  function U0(l, t) {
    (vt[yt++] = _t),
      (vt[yt++] = Ot),
      (vt[yt++] = ae),
      (_t = t.id),
      (Ot = t.overflow),
      (ae = l);
  }
  var Dl = null,
    hl = null,
    P = !1,
    ne = null,
    bt = !1,
    qc = Error(r(519));
  function ue(l) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Wa(gt(t, l)), qc);
  }
  function C0(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[Ol] = l), (t[Zl] = a), e)) {
      case "dialog":
        $("cancel", t), $("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        $("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < xn.length; e++) $(xn[e], t);
        break;
      case "source":
        $("error", t);
        break;
      case "img":
      case "image":
      case "link":
        $("error", t), $("load", t);
        break;
      case "details":
        $("toggle", t);
        break;
      case "input":
        $("invalid", t),
          k1(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        $("invalid", t);
        break;
      case "textarea":
        $("invalid", t), J1(t, a.value, a.defaultValue, a.children);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      F2(t.textContent, e)
        ? (a.popover != null && ($("beforetoggle", t), $("toggle", t)),
          a.onScroll != null && $("scroll", t),
          a.onScrollEnd != null && $("scrollend", t),
          a.onClick != null && (t.onclick = Bt),
          (t = !0))
        : (t = !1),
      t || ue(l, !0);
  }
  function H0(l) {
    for (Dl = l.return; Dl; )
      switch (Dl.tag) {
        case 5:
        case 31:
        case 13:
          bt = !1;
          return;
        case 27:
        case 3:
          bt = !0;
          return;
        default:
          Dl = Dl.return;
      }
  }
  function oa(l) {
    if (l !== Dl) return !1;
    if (!P) return H0(l), (P = !0), !1;
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || t1(l.type, l.memoizedProps))),
        (e = !e)),
      e && hl && ue(l),
      H0(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(r(317));
      hl = cs(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(r(317));
      hl = cs(l);
    } else
      t === 27
        ? ((t = hl), xe(l.type) ? ((l = c1), (c1 = null), (hl = l)) : (hl = t))
        : (hl = Dl ? pt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Be() {
    (hl = Dl = null), (P = !1);
  }
  function Yc() {
    var l = ne;
    return (
      l !== null &&
        ($l === null ? ($l = l) : $l.push.apply($l, l), (ne = null)),
      l
    );
  }
  function Wa(l) {
    ne === null ? (ne = [l]) : ne.push(l);
  }
  var Gc = m(null),
    qe = null,
    Lt = null;
  function ce(l, t, e) {
    D(Gc, t._currentValue), (t._currentValue = e);
  }
  function Xt(l) {
    (l._currentValue = Gc.current), T(Gc);
  }
  function Lc(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function Xc(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var f = u;
          u = n;
          for (var o = 0; o < t.length; o++)
            if (f.context === t[o]) {
              (u.lanes |= e),
                (f = u.alternate),
                f !== null && (f.lanes |= e),
                Lc(u.return, e, l),
                a || (c = null);
              break l;
            }
          u = f.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(r(341));
        (c.lanes |= e),
          (u = c.alternate),
          u !== null && (u.lanes |= e),
          Lc(c, e, l),
          (c = null);
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            (n.return = c.return), (c = n);
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function da(l, t, e, a) {
    l = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(r(387));
        if (((c = c.memoizedProps), c !== null)) {
          var f = n.type;
          nt(n.pendingProps.value, c.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (n === al.current) {
        if (((c = n.alternate), c === null)) throw Error(r(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (l !== null ? l.push(jn) : (l = [jn]));
      }
      n = n.return;
    }
    l !== null && Xc(t, l, e, a), (t.flags |= 262144);
  }
  function In(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!nt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ye(l) {
    (qe = l),
      (Lt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Ul(l) {
    return R0(qe, l);
  }
  function Pn(l, t) {
    return qe === null && Ye(l), R0(l, t);
  }
  function R0(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Lt === null)) {
      if (l === null) throw Error(r(308));
      (Lt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Lt = Lt.next = t;
    return e;
  }
  var a3 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                });
            };
          },
    n3 = s.unstable_scheduleCallback,
    u3 = s.unstable_NormalPriority,
    zl = {
      $$typeof: Rl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Qc() {
    return { controller: new a3(), data: new Map(), refCount: 0 };
  }
  function Fa(l) {
    l.refCount--,
      l.refCount === 0 &&
        n3(u3, function () {
          l.controller.abort();
        });
  }
  var Ia = null,
    Vc = 0,
    ma = 0,
    ha = null;
  function c3(l, t) {
    if (Ia === null) {
      var e = (Ia = []);
      (Vc = 0),
        (ma = ki()),
        (ha = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return Vc++, t.then(B0, B0), t;
  }
  function B0() {
    if (--Vc === 0 && Ia !== null) {
      ha !== null && (ha.status = "fulfilled");
      var l = Ia;
      (Ia = null), (ma = 0), (ha = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function i3(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          e.push(n);
        },
      };
    return (
      l.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < e.length; n++) (0, e[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
            (0, e[n])(void 0);
        }
      ),
      a
    );
  }
  var q0 = N.S;
  N.S = function (l, t) {
    (S2 = tt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        c3(l, t),
      q0 !== null && q0(l, t);
  };
  var Ge = m(null);
  function Zc() {
    var l = Ge.current;
    return l !== null ? l : ol.pooledCache;
  }
  function lu(l, t) {
    t === null ? D(Ge, Ge.current) : D(Ge, t.pool);
  }
  function Y0() {
    var l = Zc();
    return l === null ? null : { parent: zl._currentValue, pool: l };
  }
  var ga = Error(r(460)),
    wc = Error(r(474)),
    tu = Error(r(542)),
    eu = { then: function () {} };
  function G0(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function L0(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(Bt, Bt), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Q0(l), l);
      default:
        if (typeof t.status == "string") t.then(Bt, Bt);
        else {
          if (((l = ol), l !== null && 100 < l.shellSuspendCounter))
            throw Error(r(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Q0(l), l);
        }
        throw ((Xe = t), ga);
    }
  }
  function Le(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((Xe = e), ga)
        : e;
    }
  }
  var Xe = null;
  function X0() {
    if (Xe === null) throw Error(r(459));
    var l = Xe;
    return (Xe = null), l;
  }
  function Q0(l) {
    if (l === ga || l === tu) throw Error(r(483));
  }
  var va = null,
    Pa = 0;
  function au(l) {
    var t = Pa;
    return (Pa += 1), va === null && (va = []), L0(va, l, t);
  }
  function ln(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function nu(l, t) {
    throw t.$$typeof === dl
      ? Error(r(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function V0(l) {
    function t(h, d) {
      if (l) {
        var y = h.deletions;
        y === null ? ((h.deletions = [d]), (h.flags |= 16)) : y.push(d);
      }
    }
    function e(h, d) {
      if (!l) return null;
      for (; d !== null; ) t(h, d), (d = d.sibling);
      return null;
    }
    function a(h) {
      for (var d = new Map(); h !== null; )
        h.key !== null ? d.set(h.key, h) : d.set(h.index, h), (h = h.sibling);
      return d;
    }
    function n(h, d) {
      return (h = Yt(h, d)), (h.index = 0), (h.sibling = null), h;
    }
    function u(h, d, y) {
      return (
        (h.index = y),
        l
          ? ((y = h.alternate),
            y !== null
              ? ((y = y.index), y < d ? ((h.flags |= 67108866), d) : y)
              : ((h.flags |= 67108866), d))
          : ((h.flags |= 1048576), d)
      );
    }
    function c(h) {
      return l && h.alternate === null && (h.flags |= 67108866), h;
    }
    function f(h, d, y, z) {
      return d === null || d.tag !== 6
        ? ((d = Cc(y, h.mode, z)), (d.return = h), d)
        : ((d = n(d, y)), (d.return = h), d);
    }
    function o(h, d, y, z) {
      var B = y.type;
      return B === ql
        ? S(h, d, y.props.children, z, y.key)
        : d !== null &&
          (d.elementType === B ||
            (typeof B == "object" &&
              B !== null &&
              B.$$typeof === Ql &&
              Le(B) === d.type))
        ? ((d = n(d, y.props)), ln(d, y), (d.return = h), d)
        : ((d = Wn(y.type, y.key, y.props, null, h.mode, z)),
          ln(d, y),
          (d.return = h),
          d);
    }
    function b(h, d, y, z) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== y.containerInfo ||
        d.stateNode.implementation !== y.implementation
        ? ((d = Hc(y, h.mode, z)), (d.return = h), d)
        : ((d = n(d, y.children || [])), (d.return = h), d);
    }
    function S(h, d, y, z, B) {
      return d === null || d.tag !== 7
        ? ((d = Re(y, h.mode, z, B)), (d.return = h), d)
        : ((d = n(d, y)), (d.return = h), d);
    }
    function A(h, d, y) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return (d = Cc("" + d, h.mode, y)), (d.return = h), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Pl:
            return (
              (y = Wn(d.type, d.key, d.props, null, h.mode, y)),
              ln(y, d),
              (y.return = h),
              y
            );
          case Ll:
            return (d = Hc(d, h.mode, y)), (d.return = h), d;
          case Ql:
            return (d = Le(d)), A(h, d, y);
        }
        if (Nt(d) || Vl(d))
          return (d = Re(d, h.mode, y, null)), (d.return = h), d;
        if (typeof d.then == "function") return A(h, au(d), y);
        if (d.$$typeof === Rl) return A(h, Pn(h, d), y);
        nu(h, d);
      }
      return null;
    }
    function x(h, d, y, z) {
      var B = d !== null ? d.key : null;
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return B !== null ? null : f(h, d, "" + y, z);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Pl:
            return y.key === B ? o(h, d, y, z) : null;
          case Ll:
            return y.key === B ? b(h, d, y, z) : null;
          case Ql:
            return (y = Le(y)), x(h, d, y, z);
        }
        if (Nt(y) || Vl(y)) return B !== null ? null : S(h, d, y, z, null);
        if (typeof y.then == "function") return x(h, d, au(y), z);
        if (y.$$typeof === Rl) return x(h, d, Pn(h, y), z);
        nu(h, y);
      }
      return null;
    }
    function p(h, d, y, z, B) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (h = h.get(y) || null), f(d, h, "" + z, B);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Pl:
            return (
              (h = h.get(z.key === null ? y : z.key) || null), o(d, h, z, B)
            );
          case Ll:
            return (
              (h = h.get(z.key === null ? y : z.key) || null), b(d, h, z, B)
            );
          case Ql:
            return (z = Le(z)), p(h, d, y, z, B);
        }
        if (Nt(z) || Vl(z)) return (h = h.get(y) || null), S(d, h, z, B, null);
        if (typeof z.then == "function") return p(h, d, y, au(z), B);
        if (z.$$typeof === Rl) return p(h, d, y, Pn(d, z), B);
        nu(d, z);
      }
      return null;
    }
    function U(h, d, y, z) {
      for (
        var B = null, ll = null, R = d, w = (d = 0), F = null;
        R !== null && w < y.length;
        w++
      ) {
        R.index > w ? ((F = R), (R = null)) : (F = R.sibling);
        var tl = x(h, R, y[w], z);
        if (tl === null) {
          R === null && (R = F);
          break;
        }
        l && R && tl.alternate === null && t(h, R),
          (d = u(tl, d, w)),
          ll === null ? (B = tl) : (ll.sibling = tl),
          (ll = tl),
          (R = F);
      }
      if (w === y.length) return e(h, R), P && Gt(h, w), B;
      if (R === null) {
        for (; w < y.length; w++)
          (R = A(h, y[w], z)),
            R !== null &&
              ((d = u(R, d, w)),
              ll === null ? (B = R) : (ll.sibling = R),
              (ll = R));
        return P && Gt(h, w), B;
      }
      for (R = a(R); w < y.length; w++)
        (F = p(R, h, w, y[w], z)),
          F !== null &&
            (l && F.alternate !== null && R.delete(F.key === null ? w : F.key),
            (d = u(F, d, w)),
            ll === null ? (B = F) : (ll.sibling = F),
            (ll = F));
      return (
        l &&
          R.forEach(function (je) {
            return t(h, je);
          }),
        P && Gt(h, w),
        B
      );
    }
    function Y(h, d, y, z) {
      if (y == null) throw Error(r(151));
      for (
        var B = null, ll = null, R = d, w = (d = 0), F = null, tl = y.next();
        R !== null && !tl.done;
        w++, tl = y.next()
      ) {
        R.index > w ? ((F = R), (R = null)) : (F = R.sibling);
        var je = x(h, R, tl.value, z);
        if (je === null) {
          R === null && (R = F);
          break;
        }
        l && R && je.alternate === null && t(h, R),
          (d = u(je, d, w)),
          ll === null ? (B = je) : (ll.sibling = je),
          (ll = je),
          (R = F);
      }
      if (tl.done) return e(h, R), P && Gt(h, w), B;
      if (R === null) {
        for (; !tl.done; w++, tl = y.next())
          (tl = A(h, tl.value, z)),
            tl !== null &&
              ((d = u(tl, d, w)),
              ll === null ? (B = tl) : (ll.sibling = tl),
              (ll = tl));
        return P && Gt(h, w), B;
      }
      for (R = a(R); !tl.done; w++, tl = y.next())
        (tl = p(R, h, w, tl.value, z)),
          tl !== null &&
            (l &&
              tl.alternate !== null &&
              R.delete(tl.key === null ? w : tl.key),
            (d = u(tl, d, w)),
            ll === null ? (B = tl) : (ll.sibling = tl),
            (ll = tl));
      return (
        l &&
          R.forEach(function (b4) {
            return t(h, b4);
          }),
        P && Gt(h, w),
        B
      );
    }
    function sl(h, d, y, z) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === ql &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case Pl:
            l: {
              for (var B = y.key; d !== null; ) {
                if (d.key === B) {
                  if (((B = y.type), B === ql)) {
                    if (d.tag === 7) {
                      e(h, d.sibling),
                        (z = n(d, y.props.children)),
                        (z.return = h),
                        (h = z);
                      break l;
                    }
                  } else if (
                    d.elementType === B ||
                    (typeof B == "object" &&
                      B !== null &&
                      B.$$typeof === Ql &&
                      Le(B) === d.type)
                  ) {
                    e(h, d.sibling),
                      (z = n(d, y.props)),
                      ln(z, y),
                      (z.return = h),
                      (h = z);
                    break l;
                  }
                  e(h, d);
                  break;
                } else t(h, d);
                d = d.sibling;
              }
              y.type === ql
                ? ((z = Re(y.props.children, h.mode, z, y.key)),
                  (z.return = h),
                  (h = z))
                : ((z = Wn(y.type, y.key, y.props, null, h.mode, z)),
                  ln(z, y),
                  (z.return = h),
                  (h = z));
            }
            return c(h);
          case Ll:
            l: {
              for (B = y.key; d !== null; ) {
                if (d.key === B)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === y.containerInfo &&
                    d.stateNode.implementation === y.implementation
                  ) {
                    e(h, d.sibling),
                      (z = n(d, y.children || [])),
                      (z.return = h),
                      (h = z);
                    break l;
                  } else {
                    e(h, d);
                    break;
                  }
                else t(h, d);
                d = d.sibling;
              }
              (z = Hc(y, h.mode, z)), (z.return = h), (h = z);
            }
            return c(h);
          case Ql:
            return (y = Le(y)), sl(h, d, y, z);
        }
        if (Nt(y)) return U(h, d, y, z);
        if (Vl(y)) {
          if (((B = Vl(y)), typeof B != "function")) throw Error(r(150));
          return (y = B.call(y)), Y(h, d, y, z);
        }
        if (typeof y.then == "function") return sl(h, d, au(y), z);
        if (y.$$typeof === Rl) return sl(h, d, Pn(h, y), z);
        nu(h, y);
      }
      return (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
        ? ((y = "" + y),
          d !== null && d.tag === 6
            ? (e(h, d.sibling), (z = n(d, y)), (z.return = h), (h = z))
            : (e(h, d), (z = Cc(y, h.mode, z)), (z.return = h), (h = z)),
          c(h))
        : e(h, d);
    }
    return function (h, d, y, z) {
      try {
        Pa = 0;
        var B = sl(h, d, y, z);
        return (va = null), B;
      } catch (R) {
        if (R === ga || R === tu) throw R;
        var ll = ut(29, R, null, h.mode);
        return (ll.lanes = z), (ll.return = h), ll;
      }
    };
  }
  var Qe = V0(!0),
    Z0 = V0(!1),
    ie = !1;
  function kc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Kc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function fe(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function se(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (el & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = $n(l)),
        E0(l, null, e),
        t
      );
    }
    return Jn(l, a, t, e), $n(l);
  }
  function tn(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), R1(l, e);
    }
  }
  function Jc(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var n = null,
        u = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var c = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = c) : (u = u.next = c), (e = e.next);
        } while (e !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e);
      return;
    }
    (l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t);
  }
  var $c = !1;
  function en() {
    if ($c) {
      var l = ha;
      if (l !== null) throw l;
    }
  }
  function an(l, t, e, a) {
    $c = !1;
    var n = l.updateQueue;
    ie = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var o = f,
        b = o.next;
      (o.next = null), c === null ? (u = b) : (c.next = b), (c = o);
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (f = S.lastBaseUpdate),
        f !== c &&
          (f === null ? (S.firstBaseUpdate = b) : (f.next = b),
          (S.lastBaseUpdate = o)));
    }
    if (u !== null) {
      var A = n.baseState;
      (c = 0), (S = b = o = null), (f = u);
      do {
        var x = f.lane & -536870913,
          p = x !== f.lane;
        if (p ? (W & x) === x : (a & x) === x) {
          x !== 0 && x === ma && ($c = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var U = l,
              Y = f;
            x = t;
            var sl = e;
            switch (Y.tag) {
              case 1:
                if (((U = Y.payload), typeof U == "function")) {
                  A = U.call(sl, A, x);
                  break l;
                }
                A = U;
                break l;
              case 3:
                U.flags = (U.flags & -65537) | 128;
              case 0:
                if (
                  ((U = Y.payload),
                  (x = typeof U == "function" ? U.call(sl, A, x) : U),
                  x == null)
                )
                  break l;
                A = C({}, A, x);
                break l;
              case 2:
                ie = !0;
            }
          }
          (x = f.callback),
            x !== null &&
              ((l.flags |= 64),
              p && (l.flags |= 8192),
              (p = n.callbacks),
              p === null ? (n.callbacks = [x]) : p.push(x));
        } else
          (p = {
            lane: x,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            S === null ? ((b = S = p), (o = A)) : (S = S.next = p),
            (c |= x);
        if (((f = f.next), f === null)) {
          if (((f = n.shared.pending), f === null)) break;
          (p = f),
            (f = p.next),
            (p.next = null),
            (n.lastBaseUpdate = p),
            (n.shared.pending = null);
        }
      } while (!0);
      S === null && (o = A),
        (n.baseState = o),
        (n.firstBaseUpdate = b),
        (n.lastBaseUpdate = S),
        u === null && (n.shared.lanes = 0),
        (he |= c),
        (l.lanes = c),
        (l.memoizedState = A);
    }
  }
  function w0(l, t) {
    if (typeof l != "function") throw Error(r(191, l));
    l.call(t);
  }
  function k0(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) w0(e[l], t);
  }
  var ya = m(null),
    uu = m(0);
  function K0(l, t) {
    (l = Wt), D(uu, l), D(ya, t), (Wt = l | t.baseLanes);
  }
  function Wc() {
    D(uu, Wt), D(ya, ya.current);
  }
  function Fc() {
    (Wt = uu.current), T(ya), T(uu);
  }
  var ct = m(null),
    xt = null;
  function re(l) {
    var t = l.alternate;
    D(Sl, Sl.current & 1),
      D(ct, l),
      xt === null &&
        (t === null || ya.current !== null || t.memoizedState !== null) &&
        (xt = l);
  }
  function Ic(l) {
    D(Sl, Sl.current), D(ct, l), xt === null && (xt = l);
  }
  function J0(l) {
    l.tag === 22
      ? (D(Sl, Sl.current), D(ct, l), xt === null && (xt = l))
      : oe();
  }
  function oe() {
    D(Sl, Sl.current), D(ct, ct.current);
  }
  function it(l) {
    T(ct), xt === l && (xt = null), T(Sl);
  }
  var Sl = m(0);
  function cu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || n1(e) || u1(e)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Qt = 0,
    V = null,
    il = null,
    jl = null,
    iu = !1,
    ba = !1,
    Ve = !1,
    fu = 0,
    nn = 0,
    xa = null,
    f3 = 0;
  function bl() {
    throw Error(r(321));
  }
  function Pc(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!nt(l[e], t[e])) return !1;
    return !0;
  }
  function li(l, t, e, a, n, u) {
    return (
      (Qt = u),
      (V = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (N.H = l === null || l.memoizedState === null ? Uf : gi),
      (Ve = !1),
      (u = e(a, n)),
      (Ve = !1),
      ba && (u = W0(t, e, a, n)),
      $0(l),
      u
    );
  }
  function $0(l) {
    N.H = fn;
    var t = il !== null && il.next !== null;
    if (((Qt = 0), (jl = il = V = null), (iu = !1), (nn = 0), (xa = null), t))
      throw Error(r(300));
    l === null ||
      Al ||
      ((l = l.dependencies), l !== null && In(l) && (Al = !0));
  }
  function W0(l, t, e, a) {
    V = l;
    var n = 0;
    do {
      if ((ba && (xa = null), (nn = 0), (ba = !1), 25 <= n))
        throw Error(r(301));
      if (((n += 1), (jl = il = null), l.updateQueue != null)) {
        var u = l.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (N.H = Cf), (u = t(e, a));
    } while (ba);
    return u;
  }
  function s3() {
    var l = N.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? un(t) : t),
      (l = l.useState()[0]),
      (il !== null ? il.memoizedState : null) !== l && (V.flags |= 1024),
      t
    );
  }
  function ti() {
    var l = fu !== 0;
    return (fu = 0), l;
  }
  function ei(l, t, e) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
  }
  function ai(l) {
    if (iu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      iu = !1;
    }
    (Qt = 0), (jl = il = V = null), (ba = !1), (nn = fu = 0), (xa = null);
  }
  function Gl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return jl === null ? (V.memoizedState = jl = l) : (jl = jl.next = l), jl;
  }
  function Nl() {
    if (il === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = il.next;
    var t = jl === null ? V.memoizedState : jl.next;
    if (t !== null) (jl = t), (il = l);
    else {
      if (l === null)
        throw V.alternate === null ? Error(r(467)) : Error(r(310));
      (il = l),
        (l = {
          memoizedState: il.memoizedState,
          baseState: il.baseState,
          baseQueue: il.baseQueue,
          queue: il.queue,
          next: null,
        }),
        jl === null ? (V.memoizedState = jl = l) : (jl = jl.next = l);
    }
    return jl;
  }
  function su() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function un(l) {
    var t = nn;
    return (
      (nn += 1),
      xa === null && (xa = []),
      (l = L0(xa, l, t)),
      (t = V),
      (jl === null ? t.memoizedState : jl.next) === null &&
        ((t = t.alternate),
        (N.H = t === null || t.memoizedState === null ? Uf : gi)),
      l
    );
  }
  function ru(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return un(l);
      if (l.$$typeof === Rl) return Ul(l);
    }
    throw Error(r(438, String(l)));
  }
  function ni(l) {
    var t = null,
      e = V.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = V.alternate;
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
      e === null && ((e = su()), (V.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Je;
    return t.index++, e;
  }
  function Vt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ou(l) {
    var t = Nl();
    return ui(t, il, l);
  }
  function ui(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        (n.next = u.next), (u.next = c);
      }
      (t.baseQueue = n = u), (a.pending = null);
    }
    if (((u = l.baseState), n === null)) l.memoizedState = u;
    else {
      t = n.next;
      var f = (c = null),
        o = null,
        b = t,
        S = !1;
      do {
        var A = b.lane & -536870913;
        if (A !== b.lane ? (W & A) === A : (Qt & A) === A) {
          var x = b.revertLane;
          if (x === 0)
            o !== null &&
              (o = o.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: b.action,
                  hasEagerState: b.hasEagerState,
                  eagerState: b.eagerState,
                  next: null,
                }),
              A === ma && (S = !0);
          else if ((Qt & x) === x) {
            (b = b.next), x === ma && (S = !0);
            continue;
          } else
            (A = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null,
            }),
              o === null ? ((f = o = A), (c = u)) : (o = o.next = A),
              (V.lanes |= x),
              (he |= x);
          (A = b.action),
            Ve && e(u, A),
            (u = b.hasEagerState ? b.eagerState : e(u, A));
        } else
          (x = {
            lane: A,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null,
          }),
            o === null ? ((f = o = x), (c = u)) : (o = o.next = x),
            (V.lanes |= A),
            (he |= A);
        b = b.next;
      } while (b !== null && b !== t);
      if (
        (o === null ? (c = u) : (o.next = f),
        !nt(u, l.memoizedState) && ((Al = !0), S && ((e = ha), e !== null)))
      )
        throw e;
      (l.memoizedState = u),
        (l.baseState = c),
        (l.baseQueue = o),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function ci(l) {
    var t = Nl(),
      e = t.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      n = e.pending,
      u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var c = (n = n.next);
      do (u = l(u, c.action)), (c = c.next);
      while (c !== n);
      nt(u, t.memoizedState) || (Al = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (e.lastRenderedState = u);
    }
    return [u, a];
  }
  function F0(l, t, e) {
    var a = V,
      n = Nl(),
      u = P;
    if (u) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = t();
    var c = !nt((il || n).memoizedState, e);
    if (
      (c && ((n.memoizedState = e), (Al = !0)),
      (n = n.queue),
      si(lf.bind(null, a, n, l), [l]),
      n.getSnapshot !== t || c || (jl !== null && jl.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        pa(9, { destroy: void 0 }, P0.bind(null, a, n, e, t), null),
        ol === null)
      )
        throw Error(r(349));
      u || (Qt & 127) !== 0 || I0(a, t, e);
    }
    return e;
  }
  function I0(l, t, e) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = V.updateQueue),
      t === null
        ? ((t = su()), (V.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
  }
  function P0(l, t, e, a) {
    (t.value = e), (t.getSnapshot = a), tf(t) && ef(l);
  }
  function lf(l, t, e) {
    return e(function () {
      tf(t) && ef(l);
    });
  }
  function tf(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !nt(l, e);
    } catch {
      return !0;
    }
  }
  function ef(l) {
    var t = He(l, 2);
    t !== null && Wl(t, l, 2);
  }
  function ii(l) {
    var t = Gl();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), Ve)) {
        le(!0);
        try {
          e();
        } finally {
          le(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function af(l, t, e, a) {
    return (l.baseState = e), ui(l, il, typeof a == "function" ? a : Vt);
  }
  function r3(l, t, e, a, n) {
    if (hu(l)) throw Error(r(485));
    if (((l = t.action), l !== null)) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c);
        },
      };
      N.T !== null ? e(!0) : (u.isTransition = !1),
        a(u),
        (e = t.pending),
        e === null
          ? ((u.next = t.pending = u), nf(t, u))
          : ((u.next = e.next), (t.pending = e.next = u));
    }
  }
  function nf(l, t) {
    var e = t.action,
      a = t.payload,
      n = l.state;
    if (t.isTransition) {
      var u = N.T,
        c = {};
      N.T = c;
      try {
        var f = e(n, a),
          o = N.S;
        o !== null && o(c, f), uf(l, t, f);
      } catch (b) {
        fi(l, t, b);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), (N.T = u);
      }
    } else
      try {
        (u = e(n, a)), uf(l, t, u);
      } catch (b) {
        fi(l, t, b);
      }
  }
  function uf(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            cf(l, t, a);
          },
          function (a) {
            return fi(l, t, a);
          }
        )
      : cf(l, t, e);
  }
  function cf(l, t, e) {
    (t.status = "fulfilled"),
      (t.value = e),
      ff(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), nf(l, e)));
  }
  function fi(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = e), ff(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function ff(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function sf(l, t) {
    return t;
  }
  function rf(l, t) {
    if (P) {
      var e = ol.formState;
      if (e !== null) {
        l: {
          var a = V;
          if (P) {
            if (hl) {
              t: {
                for (var n = hl, u = bt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = pt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (hl = pt(n.nextSibling)), (a = n.data === "F!");
                break l;
              }
            }
            ue(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = Gl()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sf,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = _f.bind(null, V, a)),
      (a.dispatch = e),
      (a = ii(!1)),
      (u = hi.bind(null, V, !1, a.queue)),
      (a = Gl()),
      (n = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = n),
      (e = r3.bind(null, V, n, u, e)),
      (n.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function of(l) {
    var t = Nl();
    return df(t, il, l);
  }
  function df(l, t, e) {
    if (
      ((t = ui(l, t, sf)[0]),
      (l = ou(Vt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = un(t);
      } catch (c) {
        throw c === ga ? tu : c;
      }
    else a = t;
    t = Nl();
    var n = t.queue,
      u = n.dispatch;
    return (
      e !== t.memoizedState &&
        ((V.flags |= 2048),
        pa(9, { destroy: void 0 }, o3.bind(null, n, e), null)),
      [a, u, l]
    );
  }
  function o3(l, t) {
    l.action = t;
  }
  function mf(l) {
    var t = Nl(),
      e = il;
    if (e !== null) return df(t, e, l);
    Nl(), (t = t.memoizedState), (e = Nl());
    var a = e.queue.dispatch;
    return (e.memoizedState = l), [t, a, !1];
  }
  function pa(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = V.updateQueue),
      t === null && ((t = su()), (V.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function hf() {
    return Nl().memoizedState;
  }
  function du(l, t, e, a) {
    var n = Gl();
    (V.flags |= l),
      (n.memoizedState = pa(
        1 | t,
        { destroy: void 0 },
        e,
        a === void 0 ? null : a
      ));
  }
  function mu(l, t, e, a) {
    var n = Nl();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    il !== null && a !== null && Pc(a, il.memoizedState.deps)
      ? (n.memoizedState = pa(t, u, e, a))
      : ((V.flags |= l), (n.memoizedState = pa(1 | t, u, e, a)));
  }
  function gf(l, t) {
    du(8390656, 8, l, t);
  }
  function si(l, t) {
    mu(2048, 8, l, t);
  }
  function d3(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null) (t = su()), (V.updateQueue = t), (t.events = [l]);
    else {
      var e = t.events;
      e === null ? (t.events = [l]) : e.push(l);
    }
  }
  function vf(l) {
    var t = Nl().memoizedState;
    return (
      d3({ ref: t, nextImpl: l }),
      function () {
        if ((el & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function yf(l, t) {
    return mu(4, 2, l, t);
  }
  function bf(l, t) {
    return mu(4, 4, l, t);
  }
  function xf(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function pf(l, t, e) {
    (e = e != null ? e.concat([l]) : null), mu(4, 4, xf.bind(null, t, l), e);
  }
  function ri() {}
  function Sf(l, t) {
    var e = Nl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Pc(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function Nf(l, t) {
    var e = Nl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Pc(t, a[1])) return a[0];
    if (((a = l()), Ve)) {
      le(!0);
      try {
        l();
      } finally {
        le(!1);
      }
    }
    return (e.memoizedState = [a, t]), a;
  }
  function oi(l, t, e) {
    return e === void 0 || ((Qt & 1073741824) !== 0 && (W & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = z2()), (V.lanes |= l), (he |= l), e);
  }
  function zf(l, t, e, a) {
    return nt(e, t)
      ? e
      : ya.current !== null
      ? ((l = oi(l, e, a)), nt(l, t) || (Al = !0), l)
      : (Qt & 42) === 0 || ((Qt & 1073741824) !== 0 && (W & 261930) === 0)
      ? ((Al = !0), (l.memoizedState = e))
      : ((l = z2()), (V.lanes |= l), (he |= l), t);
  }
  function jf(l, t, e, a, n) {
    var u = O.p;
    O.p = u !== 0 && 8 > u ? u : 8;
    var c = N.T,
      f = {};
    (N.T = f), hi(l, !1, t, e);
    try {
      var o = n(),
        b = N.S;
      if (
        (b !== null && b(f, o),
        o !== null && typeof o == "object" && typeof o.then == "function")
      ) {
        var S = i3(o, a);
        cn(l, t, S, rt(l));
      } else cn(l, t, a, rt(l));
    } catch (A) {
      cn(l, t, { then: function () {}, status: "rejected", reason: A }, rt());
    } finally {
      (O.p = u),
        c !== null && f.types !== null && (c.types = f.types),
        (N.T = c);
    }
  }
  function m3() {}
  function di(l, t, e, a) {
    if (l.tag !== 5) throw Error(r(476));
    var n = Af(l).queue;
    jf(
      l,
      n,
      t,
      G,
      e === null
        ? m3
        : function () {
            return Tf(l), e(a);
          }
    );
  }
  function Af(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: G,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vt,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Tf(l) {
    var t = Af(l);
    t.next === null && (t = l.alternate.memoizedState),
      cn(l, t.next.queue, {}, rt());
  }
  function mi() {
    return Ul(jn);
  }
  function Ef() {
    return Nl().memoizedState;
  }
  function Mf() {
    return Nl().memoizedState;
  }
  function h3(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = rt();
          l = fe(e);
          var a = se(t, l, e);
          a !== null && (Wl(a, t, e), tn(a, t, e)),
            (t = { cache: Qc() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function g3(l, t, e) {
    var a = rt();
    (e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      hu(l)
        ? Of(t, e)
        : ((e = Dc(l, t, e, a)), e !== null && (Wl(e, l, a), Df(e, t, a)));
  }
  function _f(l, t, e) {
    var a = rt();
    cn(l, t, e, a);
  }
  function cn(l, t, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (hu(l)) Of(t, n);
    else {
      var u = l.alternate;
      if (
        l.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var c = t.lastRenderedState,
            f = u(c, e);
          if (((n.hasEagerState = !0), (n.eagerState = f), nt(f, c)))
            return Jn(l, t, n, 0), ol === null && Kn(), !1;
        } catch {}
      if (((e = Dc(l, t, n, a)), e !== null))
        return Wl(e, l, a), Df(e, t, a), !0;
    }
    return !1;
  }
  function hi(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: ki(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      hu(l))
    ) {
      if (t) throw Error(r(479));
    } else (t = Dc(l, e, a, 2)), t !== null && Wl(t, l, 2);
  }
  function hu(l) {
    var t = l.alternate;
    return l === V || (t !== null && t === V);
  }
  function Of(l, t) {
    ba = iu = !0;
    var e = l.pending;
    e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t);
  }
  function Df(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), R1(l, e);
    }
  }
  var fn = {
    readContext: Ul,
    use: ru,
    useCallback: bl,
    useContext: bl,
    useEffect: bl,
    useImperativeHandle: bl,
    useLayoutEffect: bl,
    useInsertionEffect: bl,
    useMemo: bl,
    useReducer: bl,
    useRef: bl,
    useState: bl,
    useDebugValue: bl,
    useDeferredValue: bl,
    useTransition: bl,
    useSyncExternalStore: bl,
    useId: bl,
    useHostTransitionStatus: bl,
    useFormState: bl,
    useActionState: bl,
    useOptimistic: bl,
    useMemoCache: bl,
    useCacheRefresh: bl,
  };
  fn.useEffectEvent = bl;
  var Uf = {
      readContext: Ul,
      use: ru,
      useCallback: function (l, t) {
        return (Gl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Ul,
      useEffect: gf,
      useImperativeHandle: function (l, t, e) {
        (e = e != null ? e.concat([l]) : null),
          du(4194308, 4, xf.bind(null, t, l), e);
      },
      useLayoutEffect: function (l, t) {
        return du(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        du(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = Gl();
        t = t === void 0 ? null : t;
        var a = l();
        if (Ve) {
          le(!0);
          try {
            l();
          } finally {
            le(!1);
          }
        }
        return (e.memoizedState = [a, t]), a;
      },
      useReducer: function (l, t, e) {
        var a = Gl();
        if (e !== void 0) {
          var n = e(t);
          if (Ve) {
            le(!0);
            try {
              e(t);
            } finally {
              le(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: n,
          }),
          (a.queue = l),
          (l = l.dispatch = g3.bind(null, V, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Gl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = ii(l);
        var t = l.queue,
          e = _f.bind(null, V, t);
        return (t.dispatch = e), [l.memoizedState, e];
      },
      useDebugValue: ri,
      useDeferredValue: function (l, t) {
        var e = Gl();
        return oi(e, l, t);
      },
      useTransition: function () {
        var l = ii(!1);
        return (
          (l = jf.bind(null, V, l.queue, !0, !1)),
          (Gl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = V,
          n = Gl();
        if (P) {
          if (e === void 0) throw Error(r(407));
          e = e();
        } else {
          if (((e = t()), ol === null)) throw Error(r(349));
          (W & 127) !== 0 || I0(a, t, e);
        }
        n.memoizedState = e;
        var u = { value: e, getSnapshot: t };
        return (
          (n.queue = u),
          gf(lf.bind(null, a, u, l), [l]),
          (a.flags |= 2048),
          pa(9, { destroy: void 0 }, P0.bind(null, a, u, e, t), null),
          e
        );
      },
      useId: function () {
        var l = Gl(),
          t = ol.identifierPrefix;
        if (P) {
          var e = Ot,
            a = _t;
          (e = (a & ~(1 << (32 - at(a) - 1))).toString(32) + e),
            (t = "_" + t + "R_" + e),
            (e = fu++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "_");
        } else (e = f3++), (t = "_" + t + "r_" + e.toString(32) + "_");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: mi,
      useFormState: rf,
      useActionState: rf,
      useOptimistic: function (l) {
        var t = Gl();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e), (t = hi.bind(null, V, !0, e)), (e.dispatch = t), [l, t]
        );
      },
      useMemoCache: ni,
      useCacheRefresh: function () {
        return (Gl().memoizedState = h3.bind(null, V));
      },
      useEffectEvent: function (l) {
        var t = Gl(),
          e = { impl: l };
        return (
          (t.memoizedState = e),
          function () {
            if ((el & 2) !== 0) throw Error(r(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    gi = {
      readContext: Ul,
      use: ru,
      useCallback: Sf,
      useContext: Ul,
      useEffect: si,
      useImperativeHandle: pf,
      useInsertionEffect: yf,
      useLayoutEffect: bf,
      useMemo: Nf,
      useReducer: ou,
      useRef: hf,
      useState: function () {
        return ou(Vt);
      },
      useDebugValue: ri,
      useDeferredValue: function (l, t) {
        var e = Nl();
        return zf(e, il.memoizedState, l, t);
      },
      useTransition: function () {
        var l = ou(Vt)[0],
          t = Nl().memoizedState;
        return [typeof l == "boolean" ? l : un(l), t];
      },
      useSyncExternalStore: F0,
      useId: Ef,
      useHostTransitionStatus: mi,
      useFormState: of,
      useActionState: of,
      useOptimistic: function (l, t) {
        var e = Nl();
        return af(e, il, l, t);
      },
      useMemoCache: ni,
      useCacheRefresh: Mf,
    };
  gi.useEffectEvent = vf;
  var Cf = {
    readContext: Ul,
    use: ru,
    useCallback: Sf,
    useContext: Ul,
    useEffect: si,
    useImperativeHandle: pf,
    useInsertionEffect: yf,
    useLayoutEffect: bf,
    useMemo: Nf,
    useReducer: ci,
    useRef: hf,
    useState: function () {
      return ci(Vt);
    },
    useDebugValue: ri,
    useDeferredValue: function (l, t) {
      var e = Nl();
      return il === null ? oi(e, l, t) : zf(e, il.memoizedState, l, t);
    },
    useTransition: function () {
      var l = ci(Vt)[0],
        t = Nl().memoizedState;
      return [typeof l == "boolean" ? l : un(l), t];
    },
    useSyncExternalStore: F0,
    useId: Ef,
    useHostTransitionStatus: mi,
    useFormState: mf,
    useActionState: mf,
    useOptimistic: function (l, t) {
      var e = Nl();
      return il !== null
        ? af(e, il, l, t)
        : ((e.baseState = l), [l, e.queue.dispatch]);
    },
    useMemoCache: ni,
    useCacheRefresh: Mf,
  };
  Cf.useEffectEvent = vf;
  function vi(l, t, e, a) {
    (t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : C({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var yi = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = rt(),
        n = fe(a);
      (n.payload = t),
        e != null && (n.callback = e),
        (t = se(l, n, a)),
        t !== null && (Wl(t, l, a), tn(t, l, a));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = rt(),
        n = fe(a);
      (n.tag = 1),
        (n.payload = t),
        e != null && (n.callback = e),
        (t = se(l, n, a)),
        t !== null && (Wl(t, l, a), tn(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = rt(),
        a = fe(e);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = se(l, a, e)),
        t !== null && (Wl(t, l, e), tn(t, l, e));
    },
  };
  function Hf(l, t, e, a, n, u, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, u, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ka(e, a) || !Ka(n, u)
        : !0
    );
  }
  function Rf(l, t, e, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && yi.enqueueReplaceState(t, t.state, null);
  }
  function Ze(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = C({}, e));
      for (var n in l) e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  function Bf(l) {
    kn(l);
  }
  function qf(l) {
    console.error(l);
  }
  function Yf(l) {
    kn(l);
  }
  function gu(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Gf(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function bi(l, t, e) {
    return (
      (e = fe(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        gu(l, t);
      }),
      e
    );
  }
  function Lf(l) {
    return (l = fe(l)), (l.tag = 3), l;
  }
  function Xf(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (l.payload = function () {
        return n(u);
      }),
        (l.callback = function () {
          Gf(t, e, a);
        });
    }
    var c = e.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        Gf(t, e, a),
          typeof n != "function" &&
            (ge === null ? (ge = new Set([this])) : ge.add(this));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function v3(l, t, e, a, n) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && da(t, e, n, !0),
        (e = ct.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              xt === null ? Eu() : e.alternate === null && xl === 0 && (xl = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = n),
              a === eu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  Vi(l, a, n)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === eu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  Vi(l, a, n)),
              !1
            );
        }
        throw Error(r(435, e.tag));
      }
      return Vi(l, a, n), Eu(), !1;
    }
    if (P)
      return (
        (t = ct.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== qc && ((l = Error(r(422), { cause: a })), Wa(gt(l, e))))
          : (a !== qc && ((t = Error(r(423), { cause: a })), Wa(gt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (n &= -n),
            (l.lanes |= n),
            (a = gt(a, e)),
            (n = bi(l.stateNode, a, n)),
            Jc(l, n),
            xl !== 4 && (xl = 2)),
        !1
      );
    var u = Error(r(520), { cause: a });
    if (
      ((u = gt(u, e)),
      vn === null ? (vn = [u]) : vn.push(u),
      xl !== 4 && (xl = 2),
      t === null)
    )
      return !0;
    (a = gt(a, e)), (e = t);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = n & -n),
            (e.lanes |= l),
            (l = bi(e.stateNode, a, l)),
            Jc(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (u = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (ge === null || !ge.has(u)))))
          )
            return (
              (e.flags |= 65536),
              (n &= -n),
              (e.lanes |= n),
              (n = Lf(n)),
              Xf(n, l, e, a),
              Jc(e, n),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var xi = Error(r(461)),
    Al = !1;
  function Cl(l, t, e, a) {
    t.child = l === null ? Z0(t, null, e, a) : Qe(t, l.child, e, a);
  }
  function Qf(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a) f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return (
      Ye(t),
      (a = li(l, t, e, c, u, n)),
      (f = ti()),
      l !== null && !Al
        ? (ei(l, t, n), Zt(l, t, n))
        : (P && f && Rc(t), (t.flags |= 1), Cl(l, t, a, n), t.child)
    );
  }
  function Vf(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" &&
        !Uc(u) &&
        u.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = u), Zf(l, t, u, a, n))
        : ((l = Wn(e.type, null, a, t, t.mode, n)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((u = l.child), !Ei(l, n))) {
      var c = u.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Ka), e(c, a) && l.ref === t.ref)
      )
        return Zt(l, t, n);
    }
    return (
      (t.flags |= 1),
      (l = Yt(u, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Zf(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (Ka(u, a) && l.ref === t.ref)
        if (((Al = !1), (t.pendingProps = a = u), Ei(l, n)))
          (l.flags & 131072) !== 0 && (Al = !0);
        else return (t.lanes = l.lanes), Zt(l, t, n);
    }
    return pi(l, t, e, a, n);
  }
  function wf(l, t, e, a) {
    var n = a.children,
      u = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | e : e), l !== null)) {
          for (a = t.child = l.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          a = n & ~u;
        } else (a = 0), (t.child = null);
        return kf(l, t, u, e, a);
      }
      if ((e & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && lu(t, u !== null ? u.cachePool : null),
          u !== null ? K0(t, u) : Wc(),
          J0(t);
      else
        return (
          (a = t.lanes = 536870912),
          kf(l, t, u !== null ? u.baseLanes | e : e, e, a)
        );
    } else
      u !== null
        ? (lu(t, u.cachePool), K0(t, u), oe(), (t.memoizedState = null))
        : (l !== null && lu(t, null), Wc(), oe());
    return Cl(l, t, n, e), t.child;
  }
  function sn(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function kf(l, t, e, a, n) {
    var u = Zc();
    return (
      (u = u === null ? null : { parent: zl._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: e, cachePool: u }),
      l !== null && lu(t, null),
      Wc(),
      J0(t),
      l !== null && da(l, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function vu(l, t) {
    return (
      (t = bu({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Kf(l, t, e) {
    return (
      Qe(t, l.child, null, e),
      (l = vu(t, t.pendingProps)),
      (l.flags |= 2),
      it(t),
      (t.memoizedState = null),
      l
    );
  }
  function y3(l, t, e) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (P) {
        if (a.mode === "hidden")
          return (l = vu(t, a)), (t.lanes = 536870912), sn(null, l);
        if (
          (Ic(t),
          (l = hl)
            ? ((l = us(l, bt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ae !== null ? { id: _t, overflow: Ot } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = _0(l)),
                (e.return = t),
                (t.child = e),
                (Dl = t),
                (hl = null)))
            : (l = null),
          l === null)
        )
          throw ue(t);
        return (t.lanes = 536870912), null;
      }
      return vu(t, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if ((Ic(t), n))
        if (t.flags & 256) (t.flags &= -257), (t = Kf(l, t, e));
        else if (t.memoizedState !== null)
          (t.child = l.child), (t.flags |= 128), (t = null);
        else throw Error(r(558));
      else if (
        (Al || da(l, t, e, !1), (n = (e & l.childLanes) !== 0), Al || n)
      ) {
        if (
          ((a = ol),
          a !== null && ((c = B1(a, e)), c !== 0 && c !== u.retryLane))
        )
          throw ((u.retryLane = c), He(l, c), Wl(a, l, c), xi);
        Eu(), (t = Kf(l, t, e));
      } else
        (l = u.treeContext),
          (hl = pt(c.nextSibling)),
          (Dl = t),
          (P = !0),
          (ne = null),
          (bt = !1),
          l !== null && U0(t, l),
          (t = vu(t, a)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (l = Yt(l.child, { mode: a.mode, children: a.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function yu(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(r(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function pi(l, t, e, a, n) {
    return (
      Ye(t),
      (e = li(l, t, e, a, void 0, n)),
      (a = ti()),
      l !== null && !Al
        ? (ei(l, t, n), Zt(l, t, n))
        : (P && a && Rc(t), (t.flags |= 1), Cl(l, t, e, n), t.child)
    );
  }
  function Jf(l, t, e, a, n, u) {
    return (
      Ye(t),
      (t.updateQueue = null),
      (e = W0(t, a, e, n)),
      $0(l),
      (a = ti()),
      l !== null && !Al
        ? (ei(l, t, u), Zt(l, t, u))
        : (P && a && Rc(t), (t.flags |= 1), Cl(l, t, e, u), t.child)
    );
  }
  function $f(l, t, e, a, n) {
    if ((Ye(t), t.stateNode === null)) {
      var u = fa,
        c = e.contextType;
      typeof c == "object" && c !== null && (u = Ul(c)),
        (u = new e(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = yi),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        kc(t),
        (c = e.contextType),
        (u.context = typeof c == "object" && c !== null ? Ul(c) : fa),
        (u.state = t.memoizedState),
        (c = e.getDerivedStateFromProps),
        typeof c == "function" && (vi(t, e, c, a), (u.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((c = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && yi.enqueueReplaceState(u, u.state, null),
          an(t, a, u, n),
          en(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      u = t.stateNode;
      var f = t.memoizedProps,
        o = Ze(e, f);
      u.props = o;
      var b = u.context,
        S = e.contextType;
      (c = fa), typeof S == "object" && S !== null && (c = Ul(S));
      var A = e.getDerivedStateFromProps;
      (S =
        typeof A == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        S ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((f || b !== c) && Rf(t, u, a, c)),
        (ie = !1);
      var x = t.memoizedState;
      (u.state = x),
        an(t, a, u, n),
        en(),
        (b = t.memoizedState),
        f || x !== b || ie
          ? (typeof A == "function" && (vi(t, e, A, a), (b = t.memoizedState)),
            (o = ie || Hf(t, e, o, a, x, b, c))
              ? (S ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = b)),
            (u.props = a),
            (u.state = b),
            (u.context = c),
            (a = o))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (u = t.stateNode),
        Kc(l, t),
        (c = t.memoizedProps),
        (S = Ze(e, c)),
        (u.props = S),
        (A = t.pendingProps),
        (x = u.context),
        (b = e.contextType),
        (o = fa),
        typeof b == "object" && b !== null && (o = Ul(b)),
        (f = e.getDerivedStateFromProps),
        (b =
          typeof f == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c !== A || x !== o) && Rf(t, u, a, o)),
        (ie = !1),
        (x = t.memoizedState),
        (u.state = x),
        an(t, a, u, n),
        en();
      var p = t.memoizedState;
      c !== A ||
      x !== p ||
      ie ||
      (l !== null && l.dependencies !== null && In(l.dependencies))
        ? (typeof f == "function" && (vi(t, e, f, a), (p = t.memoizedState)),
          (S =
            ie ||
            Hf(t, e, S, a, x, p, o) ||
            (l !== null && l.dependencies !== null && In(l.dependencies)))
            ? (b ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, p, o),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, p, o)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === l.memoizedProps && x === l.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && x === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = p)),
          (u.props = a),
          (u.state = p),
          (u.context = o),
          (a = S))
        : (typeof u.componentDidUpdate != "function" ||
            (c === l.memoizedProps && x === l.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && x === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      yu(l, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = Qe(t, l.child, null, n)),
              (t.child = Qe(t, null, e, n)))
            : Cl(l, t, e, n),
          (t.memoizedState = u.state),
          (l = t.child))
        : (l = Zt(l, t, n)),
      l
    );
  }
  function Wf(l, t, e, a) {
    return Be(), (t.flags |= 256), Cl(l, t, e, a), t.child;
  }
  var Si = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ni(l) {
    return { baseLanes: l, cachePool: Y0() };
  }
  function zi(l, t, e) {
    return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= st), l;
  }
  function Ff(l, t, e) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Sl.current & 2) !== 0),
      c && ((n = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (P) {
        if (
          (n ? re(t) : oe(),
          (l = hl)
            ? ((l = us(l, bt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ae !== null ? { id: _t, overflow: Ot } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = _0(l)),
                (e.return = t),
                (t.child = e),
                (Dl = t),
                (hl = null)))
            : (l = null),
          l === null)
        )
          throw ue(t);
        return u1(l) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var f = a.children;
      return (
        (a = a.fallback),
        n
          ? (oe(),
            (n = t.mode),
            (f = bu({ mode: "hidden", children: f }, n)),
            (a = Re(a, n, e, null)),
            (f.return = t),
            (a.return = t),
            (f.sibling = a),
            (t.child = f),
            (a = t.child),
            (a.memoizedState = Ni(e)),
            (a.childLanes = zi(l, c, e)),
            (t.memoizedState = Si),
            sn(null, a))
          : (re(t), ji(t, f))
      );
    }
    var o = l.memoizedState;
    if (o !== null && ((f = o.dehydrated), f !== null)) {
      if (u)
        t.flags & 256
          ? (re(t), (t.flags &= -257), (t = Ai(l, t, e)))
          : t.memoizedState !== null
          ? (oe(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (oe(),
            (f = a.fallback),
            (n = t.mode),
            (a = bu({ mode: "visible", children: a.children }, n)),
            (f = Re(f, n, e, null)),
            (f.flags |= 2),
            (a.return = t),
            (f.return = t),
            (a.sibling = f),
            (t.child = a),
            Qe(t, l.child, null, e),
            (a = t.child),
            (a.memoizedState = Ni(e)),
            (a.childLanes = zi(l, c, e)),
            (t.memoizedState = Si),
            (t = sn(null, a)));
      else if ((re(t), u1(f))) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var b = c.dgst;
        (c = b),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = c),
          Wa({ value: a, source: null, stack: null }),
          (t = Ai(l, t, e));
      } else if (
        (Al || da(l, t, e, !1), (c = (e & l.childLanes) !== 0), Al || c)
      ) {
        if (
          ((c = ol),
          c !== null && ((a = B1(c, e)), a !== 0 && a !== o.retryLane))
        )
          throw ((o.retryLane = a), He(l, a), Wl(c, l, a), xi);
        n1(f) || Eu(), (t = Ai(l, t, e));
      } else
        n1(f)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = o.treeContext),
            (hl = pt(f.nextSibling)),
            (Dl = t),
            (P = !0),
            (ne = null),
            (bt = !1),
            l !== null && U0(t, l),
            (t = ji(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (oe(),
        (f = a.fallback),
        (n = t.mode),
        (o = l.child),
        (b = o.sibling),
        (a = Yt(o, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = o.subtreeFlags & 65011712),
        b !== null ? (f = Yt(b, f)) : ((f = Re(f, n, e, null)), (f.flags |= 2)),
        (f.return = t),
        (a.return = t),
        (a.sibling = f),
        (t.child = a),
        sn(null, a),
        (a = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = Ni(e))
          : ((n = f.cachePool),
            n !== null
              ? ((o = zl._currentValue),
                (n = n.parent !== o ? { parent: o, pool: o } : n))
              : (n = Y0()),
            (f = { baseLanes: f.baseLanes | e, cachePool: n })),
        (a.memoizedState = f),
        (a.childLanes = zi(l, c, e)),
        (t.memoizedState = Si),
        sn(l.child, a))
      : (re(t),
        (e = l.child),
        (l = e.sibling),
        (e = Yt(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function ji(l, t) {
    return (
      (t = bu({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function bu(l, t) {
    return (l = ut(22, l, null, t)), (l.lanes = 0), l;
  }
  function Ai(l, t, e) {
    return (
      Qe(t, l.child, null, e),
      (l = ji(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function If(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Lc(l.return, t, e);
  }
  function Ti(l, t, e, a, n, u) {
    var c = l.memoizedState;
    c === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: n,
          treeForkCount: u,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = a),
        (c.tail = e),
        (c.tailMode = n),
        (c.treeForkCount = u));
  }
  function Pf(l, t, e) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var c = Sl.current,
      f = (c & 2) !== 0;
    if (
      (f ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      D(Sl, c),
      Cl(l, t, a, e),
      (a = P ? $a : 0),
      !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && If(l, e, t);
        else if (l.tag === 19) If(l, e, t);
        else if (l.child !== null) {
          (l.child.return = l), (l = l.child);
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    switch (n) {
      case "forwards":
        for (e = t.child, n = null; e !== null; )
          (l = e.alternate),
            l !== null && cu(l) === null && (n = e),
            (e = e.sibling);
        (e = n),
          e === null
            ? ((n = t.child), (t.child = null))
            : ((n = e.sibling), (e.sibling = null)),
          Ti(t, !1, n, e, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (((l = n.alternate), l !== null && cu(l) === null)) {
            t.child = n;
            break;
          }
          (l = n.sibling), (n.sibling = e), (e = n), (n = l);
        }
        Ti(t, !0, e, null, u, a);
        break;
      case "together":
        Ti(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Zt(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (he |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((da(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        l = t.child, e = Yt(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (e = e.sibling = Yt(l, l.pendingProps)),
          (e.return = t);
      e.sibling = null;
    }
    return t.child;
  }
  function Ei(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && In(l)));
  }
  function b3(l, t, e) {
    switch (t.tag) {
      case 3:
        Yl(t, t.stateNode.containerInfo),
          ce(t, zl, l.memoizedState.cache),
          Be();
        break;
      case 27:
      case 5:
        Ha(t);
        break;
      case 4:
        Yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ce(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), Ic(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (re(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
            ? Ff(l, t, e)
            : (re(t), (l = Zt(l, t, e)), l !== null ? l.sibling : null);
        re(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (
          ((a = (e & t.childLanes) !== 0),
          a || (da(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Pf(l, t, e);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          D(Sl, Sl.current),
          a)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), wf(l, t, e, t.pendingProps);
      case 24:
        ce(t, zl, l.memoizedState.cache);
    }
    return Zt(l, t, e);
  }
  function l2(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Al = !0;
      else {
        if (!Ei(l, e) && (t.flags & 128) === 0) return (Al = !1), b3(l, t, e);
        Al = (l.flags & 131072) !== 0;
      }
    else (Al = !1), P && (t.flags & 1048576) !== 0 && D0(t, $a, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = Le(t.elementType)), (t.type = l), typeof l == "function"))
            Uc(l)
              ? ((a = Ze(l, a)), (t.tag = 1), (t = $f(null, t, l, a, e)))
              : ((t.tag = 0), (t = pi(null, t, l, a, e)));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === ot) {
                (t.tag = 11), (t = Qf(null, t, l, a, e));
                break l;
              } else if (n === I) {
                (t.tag = 14), (t = Vf(null, t, l, a, e));
                break l;
              }
            }
            throw ((t = Ht(l) || l), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return pi(l, t, t.type, t.pendingProps, e);
      case 1:
        return (a = t.type), (n = Ze(a, t.pendingProps)), $f(l, t, a, n, e);
      case 3:
        l: {
          if ((Yl(t, t.stateNode.containerInfo), l === null))
            throw Error(r(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          (n = u.element), Kc(l, t), an(t, a, null, e);
          var c = t.memoizedState;
          if (
            ((a = c.cache),
            ce(t, zl, a),
            a !== u.cache && Xc(t, [zl], e, !0),
            en(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Wf(l, t, a, e);
              break l;
            } else if (a !== n) {
              (n = gt(Error(r(424)), t)), Wa(n), (t = Wf(l, t, a, e));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  hl = pt(l.firstChild),
                  Dl = t,
                  P = !0,
                  ne = null,
                  bt = !0,
                  e = Z0(t, null, a, e),
                  t.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
          else {
            if ((Be(), a === n)) {
              t = Zt(l, t, e);
              break l;
            }
            Cl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          yu(l, t),
          l === null
            ? (e = os(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : P ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = Hu(K.current).createElement(e)),
                (a[Ol] = t),
                (a[Zl] = l),
                Hl(a, e, l),
                Ml(a),
                (t.stateNode = a))
            : (t.memoizedState = os(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ha(t),
          l === null &&
            P &&
            ((a = t.stateNode = fs(t.type, t.pendingProps, K.current)),
            (Dl = t),
            (bt = !0),
            (n = hl),
            xe(t.type) ? ((c1 = n), (hl = pt(a.firstChild))) : (hl = n)),
          Cl(l, t, t.pendingProps.children, e),
          yu(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            P &&
            ((n = a = hl) &&
              ((a = J3(a, t.type, t.pendingProps, bt)),
              a !== null
                ? ((t.stateNode = a),
                  (Dl = t),
                  (hl = pt(a.firstChild)),
                  (bt = !1),
                  (n = !0))
                : (n = !1)),
            n || ue(t)),
          Ha(t),
          (n = t.type),
          (u = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (a = u.children),
          t1(n, u) ? (a = null) : c !== null && t1(n, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = li(l, t, s3, null, null, e)), (jn._currentValue = n)),
          yu(l, t),
          Cl(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            P &&
            ((l = e = hl) &&
              ((e = $3(e, t.pendingProps, bt)),
              e !== null
                ? ((t.stateNode = e), (Dl = t), (hl = null), (l = !0))
                : (l = !1)),
            l || ue(t)),
          null
        );
      case 13:
        return Ff(l, t, e);
      case 4:
        return (
          Yl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = Qe(t, null, a, e)) : Cl(l, t, a, e),
          t.child
        );
      case 11:
        return Qf(l, t, t.type, t.pendingProps, e);
      case 7:
        return Cl(l, t, t.pendingProps, e), t.child;
      case 8:
        return Cl(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Cl(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          ce(t, t.type, a.value),
          Cl(l, t, a.children, e),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Ye(t),
          (n = Ul(n)),
          (a = a(n)),
          (t.flags |= 1),
          Cl(l, t, a, e),
          t.child
        );
      case 14:
        return Vf(l, t, t.type, t.pendingProps, e);
      case 15:
        return Zf(l, t, t.type, t.pendingProps, e);
      case 19:
        return Pf(l, t, e);
      case 31:
        return y3(l, t, e);
      case 22:
        return wf(l, t, e, t.pendingProps);
      case 24:
        return (
          Ye(t),
          (a = Ul(zl)),
          l === null
            ? ((n = Zc()),
              n === null &&
                ((n = ol),
                (u = Qc()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= e),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              kc(t),
              ce(t, zl, n))
            : ((l.lanes & e) !== 0 && (Kc(l, t), an(t, null, null, e), en()),
              (n = l.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  ce(t, zl, a))
                : ((a = u.cache),
                  ce(t, zl, a),
                  a !== n.cache && Xc(t, [zl], e, !0))),
          Cl(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function wt(l) {
    l.flags |= 4;
  }
  function Mi(l, t, e, a, n) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (n & 335544128) === n))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (E2()) l.flags |= 8192;
        else throw ((Xe = eu), wc);
    } else l.flags &= -16777217;
  }
  function t2(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !vs(t)))
      if (E2()) l.flags |= 8192;
      else throw ((Xe = eu), wc);
  }
  function xu(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? C1() : 536870912), (l.lanes |= t), (ja |= t));
  }
  function rn(l, t) {
    if (!P)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), (t = t.sibling);
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function gl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        (e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = l),
          (n = n.sibling);
    else
      for (n = l.child; n !== null; )
        (e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = l),
          (n = n.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = e), t;
  }
  function x3(l, t, e) {
    var a = t.pendingProps;
    switch ((Bc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return gl(t), null;
      case 1:
        return gl(t), null;
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Xt(zl),
          pl(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (oa(t)
              ? wt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Yc())),
          gl(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          l === null
            ? (wt(t),
              u !== null ? (gl(t), t2(t, u)) : (gl(t), Mi(t, n, null, a, e)))
            : u
            ? u !== l.memoizedState
              ? (wt(t), gl(t), t2(t, u))
              : (gl(t), (t.flags &= -16777217))
            : ((l = l.memoizedProps),
              l !== a && wt(t),
              gl(t),
              Mi(t, n, l, a, e)),
          null
        );
      case 27:
        if (
          (On(t),
          (e = K.current),
          (n = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== a && wt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return gl(t), null;
          }
          (l = H.current),
            oa(t) ? C0(t) : ((l = fs(n, a, e)), (t.stateNode = l), wt(t));
        }
        return gl(t), null;
      case 5:
        if ((On(t), (n = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && wt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return gl(t), null;
          }
          if (((u = H.current), oa(t))) C0(t);
          else {
            var c = Hu(K.current);
            switch (u) {
              case 1:
                u = c.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = c.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (u = c.createElement("div")),
                      (u.innerHTML = "<script></script>"),
                      (u = u.removeChild(u.firstChild));
                    break;
                  case "select":
                    (u =
                      typeof a.is == "string"
                        ? c.createElement("select", { is: a.is })
                        : c.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size);
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? c.createElement(n, { is: a.is })
                        : c.createElement(n);
                }
            }
            (u[Ol] = t), (u[Zl] = a);
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            t.stateNode = u;
            l: switch ((Hl(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && wt(t);
          }
        }
        return (
          gl(t),
          Mi(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && wt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
          if (((l = K.current), oa(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (n = Dl),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (l[Ol] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                F2(l.nodeValue, e)
              )),
              l || ue(t, !0);
          } else (l = Hu(l).createTextNode(a)), (l[Ol] = t), (t.stateNode = l);
        }
        return gl(t), null;
      case 31:
        if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = oa(t)), e !== null)) {
            if (l === null) {
              if (!a) throw Error(r(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(r(557));
              l[Ol] = t;
            } else
              Be(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            gl(t), (l = !1);
          } else
            (e = Yc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (l = !0);
          if (!l) return t.flags & 256 ? (it(t), t) : (it(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return gl(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((n = oa(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!n) throw Error(r(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(r(317));
              n[Ol] = t;
            } else
              Be(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            gl(t), (n = !1);
          } else
            (n = Yc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (it(t), t) : (it(t), null);
        }
        return (
          it(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = e), t)
            : ((e = a !== null),
              (l = l !== null && l.memoizedState !== null),
              e &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              e !== l && e && (t.child.flags |= 8192),
              xu(t, t.updateQueue),
              gl(t),
              null)
        );
      case 4:
        return pl(), l === null && Wi(t.stateNode.containerInfo), gl(t), null;
      case 10:
        return Xt(t.type), gl(t), null;
      case 19:
        if ((T(Sl), (a = t.memoizedState), a === null)) return gl(t), null;
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) rn(a, !1);
          else {
            if (xl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((u = cu(l)), u !== null)) {
                  for (
                    t.flags |= 128,
                      rn(a, !1),
                      l = u.updateQueue,
                      t.updateQueue = l,
                      xu(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;

                  )
                    M0(e, l), (e = e.sibling);
                  return (
                    D(Sl, (Sl.current & 1) | 2),
                    P && Gt(t, a.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              tt() > ju &&
              ((t.flags |= 128), (n = !0), rn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((l = cu(u)), l !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                xu(t, l),
                rn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !P)
              )
                return gl(t), null;
            } else
              2 * tt() - a.renderingStartTime > ju &&
                e !== 536870912 &&
                ((t.flags |= 128), (n = !0), rn(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((l = a.last),
              l !== null ? (l.sibling = u) : (t.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = tt()),
            (l.sibling = null),
            (e = Sl.current),
            D(Sl, n ? (e & 1) | 2 : e & 1),
            P && Gt(t, a.treeForkCount),
            l)
          : (gl(t), null);
      case 22:
      case 23:
        return (
          it(t),
          Fc(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : gl(t),
          (e = t.updateQueue),
          e !== null && xu(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && T(Ge),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Xt(zl),
          gl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function p3(l, t) {
    switch ((Bc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Xt(zl),
          pl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return On(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((it(t), t.alternate === null)) throw Error(r(340));
          Be();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (it(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Be();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return T(Sl), null;
      case 4:
        return pl(), null;
      case 10:
        return Xt(t.type), null;
      case 22:
      case 23:
        return (
          it(t),
          Fc(),
          l !== null && T(Ge),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Xt(zl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function e2(l, t) {
    switch ((Bc(t), t.tag)) {
      case 3:
        Xt(zl), pl();
        break;
      case 26:
      case 27:
      case 5:
        On(t);
        break;
      case 4:
        pl();
        break;
      case 31:
        t.memoizedState !== null && it(t);
        break;
      case 13:
        it(t);
        break;
      case 19:
        T(Sl);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        it(t), Fc(), l !== null && T(Ge);
        break;
      case 24:
        Xt(zl);
    }
  }
  function on(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create,
              c = e.inst;
            (a = u()), (c.destroy = a);
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (f) {
      ul(t, t.return, f);
    }
  }
  function de(l, t, e) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var c = a.inst,
              f = c.destroy;
            if (f !== void 0) {
              (c.destroy = void 0), (n = t);
              var o = e,
                b = f;
              try {
                b();
              } catch (S) {
                ul(n, o, S);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (S) {
      ul(t, t.return, S);
    }
  }
  function a2(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        k0(t, e);
      } catch (a) {
        ul(l, l.return, a);
      }
    }
  }
  function n2(l, t, e) {
    (e.props = Ze(l.type, l.memoizedProps)), (e.state = l.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      ul(l, t, a);
    }
  }
  function dn(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (n) {
      ul(l, t, n);
    }
  }
  function Dt(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          ul(l, t, n);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          ul(l, t, n);
        }
      else e.current = null;
  }
  function u2(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      ul(l, l.return, n);
    }
  }
  function _i(l, t, e) {
    try {
      var a = l.stateNode;
      Q3(a, l.type, e, t), (a[Zl] = t);
    } catch (n) {
      ul(l, l.return, n);
    }
  }
  function c2(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && xe(l.type)) ||
      l.tag === 4
    );
  }
  function Oi(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || c2(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && xe(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Di(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
            ).insertBefore(l, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = Bt));
    else if (
      a !== 4 &&
      (a === 27 && xe(l.type) && ((e = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Di(l, t, e), l = l.sibling; l !== null; )
        Di(l, t, e), (l = l.sibling);
  }
  function pu(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (
      a !== 4 &&
      (a === 27 && xe(l.type) && (e = l.stateNode), (l = l.child), l !== null)
    )
      for (pu(l, t, e), l = l.sibling; l !== null; )
        pu(l, t, e), (l = l.sibling);
  }
  function i2(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Hl(t, a, e), (t[Ol] = l), (t[Zl] = e);
    } catch (u) {
      ul(l, l.return, u);
    }
  }
  var kt = !1,
    Tl = !1,
    Ui = !1,
    f2 = typeof WeakSet == "function" ? WeakSet : Set,
    _l = null;
  function S3(l, t) {
    if (((l = l.containerInfo), (Pi = Xu), (l = x0(l)), Ac(l))) {
      if ("selectionStart" in l)
        var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break l;
            }
            var c = 0,
              f = -1,
              o = -1,
              b = 0,
              S = 0,
              A = l,
              x = null;
            t: for (;;) {
              for (
                var p;
                A !== e || (n !== 0 && A.nodeType !== 3) || (f = c + n),
                  A !== u || (a !== 0 && A.nodeType !== 3) || (o = c + a),
                  A.nodeType === 3 && (c += A.nodeValue.length),
                  (p = A.firstChild) !== null;

              )
                (x = A), (A = p);
              for (;;) {
                if (A === l) break t;
                if (
                  (x === e && ++b === n && (f = c),
                  x === u && ++S === a && (o = c),
                  (p = A.nextSibling) !== null)
                )
                  break;
                (A = x), (x = A.parentNode);
              }
              A = p;
            }
            e = f === -1 || o === -1 ? null : { start: f, end: o };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      l1 = { focusedElem: l, selectionRange: e }, Xu = !1, _l = t;
      _l !== null;

    )
      if (
        ((t = _l), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = t), (_l = l);
      else
        for (; _l !== null; ) {
          switch (((t = _l), (u = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (e = 0; e < l.length; e++)
                  (n = l[e]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                (l = void 0),
                  (e = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = e.stateNode);
                try {
                  var U = Ze(e.type, n);
                  (l = a.getSnapshotBeforeUpdate(U, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (Y) {
                  ul(e, e.return, Y);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)
                )
                  a1(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      a1(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (_l = l);
            break;
          }
          _l = t.return;
        }
  }
  function s2(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Jt(l, e), a & 4 && on(5, e);
        break;
      case 1:
        if ((Jt(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              ul(e, e.return, c);
            }
          else {
            var n = Ze(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              ul(e, e.return, c);
            }
          }
        a & 64 && a2(e), a & 512 && dn(e, e.return);
        break;
      case 3:
        if ((Jt(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            k0(l, t);
          } catch (c) {
            ul(e, e.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && i2(e);
      case 26:
      case 5:
        Jt(l, e), t === null && a & 4 && u2(e), a & 512 && dn(e, e.return);
        break;
      case 12:
        Jt(l, e);
        break;
      case 31:
        Jt(l, e), a & 4 && d2(l, e);
        break;
      case 13:
        Jt(l, e),
          a & 4 && m2(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = O3.bind(null, e)), W3(l, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || kt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || Tl), (n = kt);
          var u = Tl;
          (kt = a),
            (Tl = t) && !u ? $t(l, e, (e.subtreeFlags & 8772) !== 0) : Jt(l, e),
            (kt = n),
            (Tl = u);
        }
        break;
      case 30:
        break;
      default:
        Jt(l, e);
    }
  }
  function r2(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), r2(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && fc(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var vl = null,
    kl = !1;
  function Kt(l, t, e) {
    for (e = e.child; e !== null; ) o2(l, t, e), (e = e.sibling);
  }
  function o2(l, t, e) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(Ra, e);
      } catch {}
    switch (e.tag) {
      case 26:
        Tl || Dt(e, t),
          Kt(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        Tl || Dt(e, t);
        var a = vl,
          n = kl;
        xe(e.type) && ((vl = e.stateNode), (kl = !1)),
          Kt(l, t, e),
          Sn(e.stateNode),
          (vl = a),
          (kl = n);
        break;
      case 5:
        Tl || Dt(e, t);
      case 6:
        if (
          ((a = vl),
          (n = kl),
          (vl = null),
          Kt(l, t, e),
          (vl = a),
          (kl = n),
          vl !== null)
        )
          if (kl)
            try {
              (vl.nodeType === 9
                ? vl.body
                : vl.nodeName === "HTML"
                ? vl.ownerDocument.body
                : vl
              ).removeChild(e.stateNode);
            } catch (u) {
              ul(e, t, u);
            }
          else
            try {
              vl.removeChild(e.stateNode);
            } catch (u) {
              ul(e, t, u);
            }
        break;
      case 18:
        vl !== null &&
          (kl
            ? ((l = vl),
              as(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                e.stateNode
              ),
              Ua(l))
            : as(vl, e.stateNode));
        break;
      case 4:
        (a = vl),
          (n = kl),
          (vl = e.stateNode.containerInfo),
          (kl = !0),
          Kt(l, t, e),
          (vl = a),
          (kl = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        de(2, e, t), Tl || de(4, e, t), Kt(l, t, e);
        break;
      case 1:
        Tl ||
          (Dt(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && n2(e, t, a)),
          Kt(l, t, e);
        break;
      case 21:
        Kt(l, t, e);
        break;
      case 22:
        (Tl = (a = Tl) || e.memoizedState !== null), Kt(l, t, e), (Tl = a);
        break;
      default:
        Kt(l, t, e);
    }
  }
  function d2(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Ua(l);
      } catch (e) {
        ul(t, t.return, e);
      }
    }
  }
  function m2(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Ua(l);
      } catch (e) {
        ul(t, t.return, e);
      }
  }
  function N3(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new f2()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new f2()),
          t
        );
      default:
        throw Error(r(435, l.tag));
    }
  }
  function Su(l, t) {
    var e = N3(l);
    t.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var n = D3.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function Kl(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a],
          u = l,
          c = t,
          f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (xe(f.type)) {
                (vl = f.stateNode), (kl = !1);
                break l;
              }
              break;
            case 5:
              (vl = f.stateNode), (kl = !1);
              break l;
            case 3:
            case 4:
              (vl = f.stateNode.containerInfo), (kl = !0);
              break l;
          }
          f = f.return;
        }
        if (vl === null) throw Error(r(160));
        o2(u, c, n),
          (vl = null),
          (kl = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) h2(t, l), (t = t.sibling);
  }
  var jt = null;
  function h2(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Kl(t, l),
          Jl(l),
          a & 4 && (de(3, l, l.return), on(3, l), de(5, l, l.return));
        break;
      case 1:
        Kl(t, l),
          Jl(l),
          a & 512 && (Tl || e === null || Dt(e, e.return)),
          a & 64 &&
            kt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var n = jt;
        if (
          (Kl(t, l),
          Jl(l),
          a & 512 && (Tl || e === null || Dt(e, e.return)),
          a & 4)
        ) {
          var u = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (e = l.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ya] ||
                          u[Ol] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title")
                          )),
                        Hl(u, a, e),
                        (u[Ol] = l),
                        Ml(u),
                        (a = u);
                      break l;
                    case "link":
                      var c = hs("link", "href", n).get(a + (e.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((u = c[f]),
                            u.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              u.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              u.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              u.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Hl(u, a, e),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (c = hs("meta", "content", n).get(
                          a + (e.content || "")
                        ))
                      ) {
                        for (f = 0; f < c.length; f++)
                          if (
                            ((u = c[f]),
                            u.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              u.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              u.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              u.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Hl(u, a, e),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  (u[Ol] = l), Ml(u), (a = u);
                }
                l.stateNode = a;
              } else gs(n, l.type, l.stateNode);
            else l.stateNode = ms(n, a, l.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : u.count--,
                a === null
                  ? gs(n, l.type, l.stateNode)
                  : ms(n, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                _i(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        Kl(t, l),
          Jl(l),
          a & 512 && (Tl || e === null || Dt(e, e.return)),
          e !== null && a & 4 && _i(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (Kl(t, l),
          Jl(l),
          a & 512 && (Tl || e === null || Dt(e, e.return)),
          l.flags & 32)
        ) {
          n = l.stateNode;
          try {
            ta(n, "");
          } catch (U) {
            ul(l, l.return, U);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((n = l.memoizedProps), _i(l, n, e !== null ? e.memoizedProps : n)),
          a & 1024 && (Ui = !0);
        break;
      case 6:
        if ((Kl(t, l), Jl(l), a & 4)) {
          if (l.stateNode === null) throw Error(r(162));
          (a = l.memoizedProps), (e = l.stateNode);
          try {
            e.nodeValue = a;
          } catch (U) {
            ul(l, l.return, U);
          }
        }
        break;
      case 3:
        if (
          ((qu = null),
          (n = jt),
          (jt = Ru(t.containerInfo)),
          Kl(t, l),
          (jt = n),
          Jl(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Ua(t.containerInfo);
          } catch (U) {
            ul(l, l.return, U);
          }
        Ui && ((Ui = !1), g2(l));
        break;
      case 4:
        (a = jt),
          (jt = Ru(l.stateNode.containerInfo)),
          Kl(t, l),
          Jl(l),
          (jt = a);
        break;
      case 12:
        Kl(t, l), Jl(l);
        break;
      case 31:
        Kl(t, l),
          Jl(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Su(l, a)));
        break;
      case 13:
        Kl(t, l),
          Jl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (zu = tt()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Su(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var o = e !== null && e.memoizedState !== null,
          b = kt,
          S = Tl;
        if (
          ((kt = b || n),
          (Tl = S || o),
          Kl(t, l),
          (Tl = S),
          (kt = b),
          Jl(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (e === null || o || kt || Tl || we(l)),
              e = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                o = e = t;
                try {
                  if (((u = o.stateNode), n))
                    (c = u.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    f = o.stateNode;
                    var A = o.memoizedProps.style,
                      x =
                        A != null && A.hasOwnProperty("display")
                          ? A.display
                          : null;
                    f.style.display =
                      x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (U) {
                  ul(o, o.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                o = t;
                try {
                  o.stateNode.nodeValue = n ? "" : o.memoizedProps;
                } catch (U) {
                  ul(o, o.return, U);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                o = t;
                try {
                  var p = o.stateNode;
                  n ? ns(p, !0) : ns(o.stateNode, !1);
                } catch (U) {
                  ul(o, o.return, U);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), (t = t.return);
            }
            e === t && (e = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), Su(l, e))));
        break;
      case 19:
        Kl(t, l),
          Jl(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Su(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Kl(t, l), Jl(l);
    }
  }
  function Jl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (c2(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode,
              u = Oi(l);
            pu(l, u, n);
            break;
          case 5:
            var c = e.stateNode;
            e.flags & 32 && (ta(c, ""), (e.flags &= -33));
            var f = Oi(l);
            pu(l, f, c);
            break;
          case 3:
          case 4:
            var o = e.stateNode.containerInfo,
              b = Oi(l);
            Di(l, b, o);
            break;
          default:
            throw Error(r(161));
        }
      } catch (S) {
        ul(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function g2(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        g2(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function Jt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) s2(l, t.alternate, t), (t = t.sibling);
  }
  function we(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          de(4, t, t.return), we(t);
          break;
        case 1:
          Dt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && n2(t, t.return, e),
            we(t);
          break;
        case 27:
          Sn(t.stateNode);
        case 26:
        case 5:
          Dt(t, t.return), we(t);
          break;
        case 22:
          t.memoizedState === null && we(t);
          break;
        case 30:
          we(t);
          break;
        default:
          we(t);
      }
      l = l.sibling;
    }
  }
  function $t(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = l,
        u = t,
        c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          $t(n, u, e), on(4, u);
          break;
        case 1:
          if (
            ($t(n, u, e),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (b) {
              ul(a, a.return, b);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var f = a.stateNode;
            try {
              var o = n.shared.hiddenCallbacks;
              if (o !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++)
                  w0(o[n], f);
            } catch (b) {
              ul(a, a.return, b);
            }
          }
          e && c & 64 && a2(u), dn(u, u.return);
          break;
        case 27:
          i2(u);
        case 26:
        case 5:
          $t(n, u, e), e && a === null && c & 4 && u2(u), dn(u, u.return);
          break;
        case 12:
          $t(n, u, e);
          break;
        case 31:
          $t(n, u, e), e && c & 4 && d2(n, u);
          break;
        case 13:
          $t(n, u, e), e && c & 4 && m2(n, u);
          break;
        case 22:
          u.memoizedState === null && $t(n, u, e), dn(u, u.return);
          break;
        case 30:
          break;
        default:
          $t(n, u, e);
      }
      t = t.sibling;
    }
  }
  function Ci(l, t) {
    var e = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && Fa(e));
  }
  function Hi(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Fa(l));
  }
  function At(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) v2(l, t, e, a), (t = t.sibling);
  }
  function v2(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(l, t, e, a), n & 2048 && on(9, t);
        break;
      case 1:
        At(l, t, e, a);
        break;
      case 3:
        At(l, t, e, a),
          n & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Fa(l)));
        break;
      case 12:
        if (n & 2048) {
          At(l, t, e, a), (l = t.stateNode);
          try {
            var u = t.memoizedProps,
              c = u.id,
              f = u.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (o) {
            ul(t, t.return, o);
          }
        } else At(l, t, e, a);
        break;
      case 31:
        At(l, t, e, a);
        break;
      case 13:
        At(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? At(l, t, e, a)
              : mn(l, t)
            : u._visibility & 2
            ? At(l, t, e, a)
            : ((u._visibility |= 2),
              Sa(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Ci(c, t);
        break;
      case 24:
        At(l, t, e, a), n & 2048 && Hi(t.alternate, t);
        break;
      default:
        At(l, t, e, a);
    }
  }
  function Sa(l, t, e, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var u = l,
        c = t,
        f = e,
        o = a,
        b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Sa(u, c, f, o, n), on(8, c);
          break;
        case 23:
          break;
        case 22:
          var S = c.stateNode;
          c.memoizedState !== null
            ? S._visibility & 2
              ? Sa(u, c, f, o, n)
              : mn(u, c)
            : ((S._visibility |= 2), Sa(u, c, f, o, n)),
            n && b & 2048 && Ci(c.alternate, c);
          break;
        case 24:
          Sa(u, c, f, o, n), n && b & 2048 && Hi(c.alternate, c);
          break;
        default:
          Sa(u, c, f, o, n);
      }
      t = t.sibling;
    }
  }
  function mn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            mn(e, a), n & 2048 && Ci(a.alternate, a);
            break;
          case 24:
            mn(e, a), n & 2048 && Hi(a.alternate, a);
            break;
          default:
            mn(e, a);
        }
        t = t.sibling;
      }
  }
  var hn = 8192;
  function Na(l, t, e) {
    if (l.subtreeFlags & hn)
      for (l = l.child; l !== null; ) y2(l, t, e), (l = l.sibling);
  }
  function y2(l, t, e) {
    switch (l.tag) {
      case 26:
        Na(l, t, e),
          l.flags & hn &&
            l.memoizedState !== null &&
            f4(e, jt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        Na(l, t, e);
        break;
      case 3:
      case 4:
        var a = jt;
        (jt = Ru(l.stateNode.containerInfo)), Na(l, t, e), (jt = a);
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = hn), (hn = 16777216), Na(l, t, e), (hn = a))
            : Na(l, t, e));
        break;
      default:
        Na(l, t, e);
    }
  }
  function b2(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function gn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (_l = a), p2(a, l);
        }
      b2(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) x2(l), (l = l.sibling);
  }
  function x2(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        gn(l), l.flags & 2048 && de(9, l, l.return);
        break;
      case 3:
        gn(l);
        break;
      case 12:
        gn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Nu(l))
          : gn(l);
        break;
      default:
        gn(l);
    }
  }
  function Nu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (_l = a), p2(a, l);
        }
      b2(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          de(8, t, t.return), Nu(t);
          break;
        case 22:
          (e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), Nu(t));
          break;
        default:
          Nu(t);
      }
      l = l.sibling;
    }
  }
  function p2(l, t) {
    for (; _l !== null; ) {
      var e = _l;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          de(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Fa(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (_l = a);
      else
        l: for (e = l; _l !== null; ) {
          a = _l;
          var n = a.sibling,
            u = a.return;
          if ((r2(a), a === e)) {
            _l = null;
            break l;
          }
          if (n !== null) {
            (n.return = u), (_l = n);
            break l;
          }
          _l = u;
        }
    }
  }
  var z3 = {
      getCacheForType: function (l) {
        var t = Ul(zl),
          e = t.data.get(l);
        return e === void 0 && ((e = l()), t.data.set(l, e)), e;
      },
      cacheSignal: function () {
        return Ul(zl).controller.signal;
      },
    },
    j3 = typeof WeakMap == "function" ? WeakMap : Map,
    el = 0,
    ol = null,
    J = null,
    W = 0,
    nl = 0,
    ft = null,
    me = !1,
    za = !1,
    Ri = !1,
    Wt = 0,
    xl = 0,
    he = 0,
    ke = 0,
    Bi = 0,
    st = 0,
    ja = 0,
    vn = null,
    $l = null,
    qi = !1,
    zu = 0,
    S2 = 0,
    ju = 1 / 0,
    Au = null,
    ge = null,
    El = 0,
    ve = null,
    Aa = null,
    Ft = 0,
    Yi = 0,
    Gi = null,
    N2 = null,
    yn = 0,
    Li = null;
  function rt() {
    return (el & 2) !== 0 && W !== 0 ? W & -W : N.T !== null ? ki() : q1();
  }
  function z2() {
    if (st === 0)
      if ((W & 536870912) === 0 || P) {
        var l = Cn;
        (Cn <<= 1), (Cn & 3932160) === 0 && (Cn = 262144), (st = l);
      } else st = 536870912;
    return (l = ct.current), l !== null && (l.flags |= 32), st;
  }
  function Wl(l, t, e) {
    ((l === ol && (nl === 2 || nl === 9)) || l.cancelPendingCommit !== null) &&
      (Ta(l, 0), ye(l, W, st, !1)),
      qa(l, e),
      ((el & 2) === 0 || l !== ol) &&
        (l === ol &&
          ((el & 2) === 0 && (ke |= e), xl === 4 && ye(l, W, st, !1)),
        Ut(l));
  }
  function j2(l, t, e) {
    if ((el & 6) !== 0) throw Error(r(327));
    var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Ba(l, t),
      n = a ? E3(l, t) : Qi(l, t, !0),
      u = a;
    do {
      if (n === 0) {
        za && !a && ye(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), u && !A3(e))) {
          (n = Qi(l, t, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = t), l.errorRecoveryDisabledLanes & u)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              n = vn;
              var o = f.current.memoizedState.isDehydrated;
              if ((o && (Ta(f, c).flags |= 256), (c = Qi(f, c, !1)), c !== 2)) {
                if (Ri && !o) {
                  (f.errorRecoveryDisabledLanes |= u), (ke |= u), (n = 4);
                  break l;
                }
                (u = $l),
                  ($l = n),
                  u !== null && ($l === null ? ($l = u) : $l.push.apply($l, u));
              }
              n = c;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Ta(l, 0), ye(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), (u = n), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ye(a, t, st, !me);
              break l;
            case 2:
              $l = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((n = zu + 300 - tt()), 10 < n)) {
            if ((ye(a, t, st, !me), Rn(a, 0, !0) !== 0)) break l;
            (Ft = t),
              (a.timeoutHandle = ts(
                A2.bind(
                  null,
                  a,
                  e,
                  $l,
                  Au,
                  qi,
                  t,
                  st,
                  ke,
                  ja,
                  me,
                  u,
                  "Throttled",
                  -0,
                  0
                ),
                n
              ));
            break l;
          }
          A2(a, e, $l, Au, qi, t, st, ke, ja, me, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ut(l);
  }
  function A2(l, t, e, a, n, u, c, f, o, b, S, A, x, p) {
    if (
      ((l.timeoutHandle = -1),
      (A = t.subtreeFlags),
      A & 8192 || (A & 16785408) === 16785408)
    ) {
      (A = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Bt,
      }),
        y2(t, u, A);
      var U =
        (u & 62914560) === u ? zu - tt() : (u & 4194048) === u ? S2 - tt() : 0;
      if (((U = s4(A, U)), U !== null)) {
        (Ft = u),
          (l.cancelPendingCommit = U(
            C2.bind(null, l, t, u, e, a, n, c, f, o, S, A, null, x, p)
          )),
          ye(l, u, c, !b);
        return;
      }
    }
    C2(l, t, u, e, a, n, c, f, o);
  }
  function A3(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var n = e[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!nt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        (e.return = t), (t = e);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ye(l, t, e, a) {
    (t &= ~Bi),
      (t &= ~ke),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var n = t; 0 < n; ) {
      var u = 31 - at(n),
        c = 1 << u;
      (a[u] = -1), (n &= ~c);
    }
    e !== 0 && H1(l, e, t);
  }
  function Tu() {
    return (el & 6) === 0 ? (bn(0), !1) : !0;
  }
  function Xi() {
    if (J !== null) {
      if (nl === 0) var l = J.return;
      else (l = J), (Lt = qe = null), ai(l), (va = null), (Pa = 0), (l = J);
      for (; l !== null; ) e2(l.alternate, l), (l = l.return);
      J = null;
    }
  }
  function Ta(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && ((l.timeoutHandle = -1), w3(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      (Ft = 0),
      Xi(),
      (ol = l),
      (J = e = Yt(l.current, null)),
      (W = t),
      (nl = 0),
      (ft = null),
      (me = !1),
      (za = Ba(l, t)),
      (Ri = !1),
      (ja = st = Bi = ke = he = xl = 0),
      ($l = vn = null),
      (qi = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - at(a),
          u = 1 << n;
        (t |= l[n]), (a &= ~u);
      }
    return (Wt = t), Kn(), e;
  }
  function T2(l, t) {
    (V = null),
      (N.H = fn),
      t === ga || t === tu
        ? ((t = X0()), (nl = 3))
        : t === wc
        ? ((t = X0()), (nl = 4))
        : (nl =
            t === xi
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (ft = t),
      J === null && ((xl = 1), gu(l, gt(t, l.current)));
  }
  function E2() {
    var l = ct.current;
    return l === null
      ? !0
      : (W & 4194048) === W
      ? xt === null
      : (W & 62914560) === W || (W & 536870912) !== 0
      ? l === xt
      : !1;
  }
  function M2() {
    var l = N.H;
    return (N.H = fn), l === null ? fn : l;
  }
  function _2() {
    var l = N.A;
    return (N.A = z3), l;
  }
  function Eu() {
    (xl = 4),
      me || ((W & 4194048) !== W && ct.current !== null) || (za = !0),
      ((he & 134217727) === 0 && (ke & 134217727) === 0) ||
        ol === null ||
        ye(ol, W, st, !1);
  }
  function Qi(l, t, e) {
    var a = el;
    el |= 2;
    var n = M2(),
      u = _2();
    (ol !== l || W !== t) && ((Au = null), Ta(l, t)), (t = !1);
    var c = xl;
    l: do
      try {
        if (nl !== 0 && J !== null) {
          var f = J,
            o = ft;
          switch (nl) {
            case 8:
              Xi(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ct.current === null && (t = !0);
              var b = nl;
              if (((nl = 0), (ft = null), Ea(l, f, o, b), e && za)) {
                c = 0;
                break l;
              }
              break;
            default:
              (b = nl), (nl = 0), (ft = null), Ea(l, f, o, b);
          }
        }
        T3(), (c = xl);
        break;
      } catch (S) {
        T2(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Lt = qe = null),
      (el = a),
      (N.H = n),
      (N.A = u),
      J === null && ((ol = null), (W = 0), Kn()),
      c
    );
  }
  function T3() {
    for (; J !== null; ) O2(J);
  }
  function E3(l, t) {
    var e = el;
    el |= 2;
    var a = M2(),
      n = _2();
    ol !== l || W !== t
      ? ((Au = null), (ju = tt() + 500), Ta(l, t))
      : (za = Ba(l, t));
    l: do
      try {
        if (nl !== 0 && J !== null) {
          t = J;
          var u = ft;
          t: switch (nl) {
            case 1:
              (nl = 0), (ft = null), Ea(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (G0(u)) {
                (nl = 0), (ft = null), D2(t);
                break;
              }
              (t = function () {
                (nl !== 2 && nl !== 9) || ol !== l || (nl = 7), Ut(l);
              }),
                u.then(t, t);
              break l;
            case 3:
              nl = 7;
              break l;
            case 4:
              nl = 5;
              break l;
            case 7:
              G0(u)
                ? ((nl = 0), (ft = null), D2(t))
                : ((nl = 0), (ft = null), Ea(l, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (J.tag) {
                case 26:
                  c = J.memoizedState;
                case 5:
                case 27:
                  var f = J;
                  if (c ? vs(c) : f.stateNode.complete) {
                    (nl = 0), (ft = null);
                    var o = f.sibling;
                    if (o !== null) J = o;
                    else {
                      var b = f.return;
                      b !== null ? ((J = b), Mu(b)) : (J = null);
                    }
                    break t;
                  }
              }
              (nl = 0), (ft = null), Ea(l, t, u, 5);
              break;
            case 6:
              (nl = 0), (ft = null), Ea(l, t, u, 6);
              break;
            case 8:
              Xi(), (xl = 6);
              break l;
            default:
              throw Error(r(462));
          }
        }
        M3();
        break;
      } catch (S) {
        T2(l, S);
      }
    while (!0);
    return (
      (Lt = qe = null),
      (N.H = a),
      (N.A = n),
      (el = e),
      J !== null ? 0 : ((ol = null), (W = 0), Kn(), xl)
    );
  }
  function M3() {
    for (; J !== null && !Fs(); ) O2(J);
  }
  function O2(l) {
    var t = l2(l.alternate, l, Wt);
    (l.memoizedProps = l.pendingProps), t === null ? Mu(l) : (J = t);
  }
  function D2(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Jf(e, t, t.pendingProps, t.type, void 0, W);
        break;
      case 11:
        t = Jf(e, t, t.pendingProps, t.type.render, t.ref, W);
        break;
      case 5:
        ai(t);
      default:
        e2(e, t), (t = J = M0(t, Wt)), (t = l2(e, t, Wt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? Mu(l) : (J = t);
  }
  function Ea(l, t, e, a) {
    (Lt = qe = null), ai(t), (va = null), (Pa = 0);
    var n = t.return;
    try {
      if (v3(l, n, t, e, W)) {
        (xl = 1), gu(l, gt(e, l.current)), (J = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((J = n), u);
      (xl = 1), gu(l, gt(e, l.current)), (J = null);
      return;
    }
    t.flags & 32768
      ? (P || a === 1
          ? (l = !0)
          : za || (W & 536870912) !== 0
          ? (l = !1)
          : ((me = l = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = ct.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        U2(t, l))
      : Mu(t);
  }
  function Mu(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        U2(t, me);
        return;
      }
      l = t.return;
      var e = x3(t.alternate, t, Wt);
      if (e !== null) {
        J = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    xl === 0 && (xl = 5);
  }
  function U2(l, t) {
    do {
      var e = p3(l.alternate, l);
      if (e !== null) {
        (e.flags &= 32767), (J = e);
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        J = l;
        return;
      }
      J = l = e;
    } while (l !== null);
    (xl = 6), (J = null);
  }
  function C2(l, t, e, a, n, u, c, f, o) {
    l.cancelPendingCommit = null;
    do _u();
    while (El !== 0);
    if ((el & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Oc),
        ir(l, e, u, c, f, o),
        l === ol && ((J = ol = null), (W = 0)),
        (Aa = t),
        (ve = l),
        (Ft = e),
        (Yi = u),
        (Gi = n),
        (N2 = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            U3(Dn, function () {
              return Y2(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = N.T), (N.T = null), (n = O.p), (O.p = 2), (c = el), (el |= 4);
        try {
          S3(l, t, e);
        } finally {
          (el = c), (O.p = n), (N.T = a);
        }
      }
      (El = 1), H2(), R2(), B2();
    }
  }
  function H2() {
    if (El === 1) {
      El = 0;
      var l = ve,
        t = Aa,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        (e = N.T), (N.T = null);
        var a = O.p;
        O.p = 2;
        var n = el;
        el |= 4;
        try {
          h2(t, l);
          var u = l1,
            c = x0(l.containerInfo),
            f = u.focusedElem,
            o = u.selectionRange;
          if (
            c !== f &&
            f &&
            f.ownerDocument &&
            b0(f.ownerDocument.documentElement, f)
          ) {
            if (o !== null && Ac(f)) {
              var b = o.start,
                S = o.end;
              if ((S === void 0 && (S = b), "selectionStart" in f))
                (f.selectionStart = b),
                  (f.selectionEnd = Math.min(S, f.value.length));
              else {
                var A = f.ownerDocument || document,
                  x = (A && A.defaultView) || window;
                if (x.getSelection) {
                  var p = x.getSelection(),
                    U = f.textContent.length,
                    Y = Math.min(o.start, U),
                    sl = o.end === void 0 ? Y : Math.min(o.end, U);
                  !p.extend && Y > sl && ((c = sl), (sl = Y), (Y = c));
                  var h = y0(f, Y),
                    d = y0(f, sl);
                  if (
                    h &&
                    d &&
                    (p.rangeCount !== 1 ||
                      p.anchorNode !== h.node ||
                      p.anchorOffset !== h.offset ||
                      p.focusNode !== d.node ||
                      p.focusOffset !== d.offset)
                  ) {
                    var y = A.createRange();
                    y.setStart(h.node, h.offset),
                      p.removeAllRanges(),
                      Y > sl
                        ? (p.addRange(y), p.extend(d.node, d.offset))
                        : (y.setEnd(d.node, d.offset), p.addRange(y));
                  }
                }
              }
            }
            for (A = [], p = f; (p = p.parentNode); )
              p.nodeType === 1 &&
                A.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < A.length;
              f++
            ) {
              var z = A[f];
              (z.element.scrollLeft = z.left), (z.element.scrollTop = z.top);
            }
          }
          (Xu = !!Pi), (l1 = Pi = null);
        } finally {
          (el = n), (O.p = a), (N.T = e);
        }
      }
      (l.current = t), (El = 2);
    }
  }
  function R2() {
    if (El === 2) {
      El = 0;
      var l = ve,
        t = Aa,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        (e = N.T), (N.T = null);
        var a = O.p;
        O.p = 2;
        var n = el;
        el |= 4;
        try {
          s2(l, t.alternate, t);
        } finally {
          (el = n), (O.p = a), (N.T = e);
        }
      }
      El = 3;
    }
  }
  function B2() {
    if (El === 4 || El === 3) {
      (El = 0), Is();
      var l = ve,
        t = Aa,
        e = Ft,
        a = N2;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (El = 5)
        : ((El = 0), (Aa = ve = null), q2(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (
        (n === 0 && (ge = null),
        cc(e),
        (t = t.stateNode),
        et && typeof et.onCommitFiberRoot == "function")
      )
        try {
          et.onCommitFiberRoot(Ra, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = N.T), (n = O.p), (O.p = 2), (N.T = null);
        try {
          for (var u = l.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            u(f.value, { componentStack: f.stack });
          }
        } finally {
          (N.T = t), (O.p = n);
        }
      }
      (Ft & 3) !== 0 && _u(),
        Ut(l),
        (n = l.pendingLanes),
        (e & 261930) !== 0 && (n & 42) !== 0
          ? l === Li
            ? yn++
            : ((yn = 0), (Li = l))
          : (yn = 0),
        bn(0);
    }
  }
  function q2(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Fa(t)));
  }
  function _u() {
    return H2(), R2(), B2(), Y2();
  }
  function Y2() {
    if (El !== 5) return !1;
    var l = ve,
      t = Yi;
    Yi = 0;
    var e = cc(Ft),
      a = N.T,
      n = O.p;
    try {
      (O.p = 32 > e ? 32 : e), (N.T = null), (e = Gi), (Gi = null);
      var u = ve,
        c = Ft;
      if (((El = 0), (Aa = ve = null), (Ft = 0), (el & 6) !== 0))
        throw Error(r(331));
      var f = el;
      if (
        ((el |= 4),
        x2(u.current),
        v2(u, u.current, c, e),
        (el = f),
        bn(0, !1),
        et && typeof et.onPostCommitFiberRoot == "function")
      )
        try {
          et.onPostCommitFiberRoot(Ra, u);
        } catch {}
      return !0;
    } finally {
      (O.p = n), (N.T = a), q2(l, t);
    }
  }
  function G2(l, t, e) {
    (t = gt(e, t)),
      (t = bi(l.stateNode, t, 2)),
      (l = se(l, t, 2)),
      l !== null && (qa(l, 2), Ut(l));
  }
  function ul(l, t, e) {
    if (l.tag === 3) G2(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          G2(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ge === null || !ge.has(a)))
          ) {
            (l = gt(e, l)),
              (e = Lf(2)),
              (a = se(t, e, 2)),
              a !== null && (Xf(e, a, t, l), qa(a, 2), Ut(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Vi(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new j3();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(e) ||
      ((Ri = !0), n.add(e), (l = _3.bind(null, l, t, e)), t.then(l, l));
  }
  function _3(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      ol === l &&
        (W & e) === e &&
        (xl === 4 || (xl === 3 && (W & 62914560) === W && 300 > tt() - zu)
          ? (el & 2) === 0 && Ta(l, 0)
          : (Bi |= e),
        ja === W && (ja = 0)),
      Ut(l);
  }
  function L2(l, t) {
    t === 0 && (t = C1()), (l = He(l, t)), l !== null && (qa(l, t), Ut(l));
  }
  function O3(l) {
    var t = l.memoizedState,
      e = 0;
    t !== null && (e = t.retryLane), L2(l, e);
  }
  function D3(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), L2(l, e);
  }
  function U3(l, t) {
    return ec(l, t);
  }
  var Ou = null,
    Ma = null,
    Zi = !1,
    Du = !1,
    wi = !1,
    be = 0;
  function Ut(l) {
    l !== Ma &&
      l.next === null &&
      (Ma === null ? (Ou = Ma = l) : (Ma = Ma.next = l)),
      (Du = !0),
      Zi || ((Zi = !0), H3());
  }
  function bn(l, t) {
    if (!wi && Du) {
      wi = !0;
      do
        for (var e = !1, a = Ou; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                f = a.pingedLanes;
              (u = (1 << (31 - at(42 | l) + 1)) - 1),
                (u &= n & ~(c & ~f)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((e = !0), Z2(a, u));
          } else
            (u = W),
              (u = Rn(
                a,
                a === ol ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ba(a, u) || ((e = !0), Z2(a, u));
          a = a.next;
        }
      while (e);
      wi = !1;
    }
  }
  function C3() {
    X2();
  }
  function X2() {
    Du = Zi = !1;
    var l = 0;
    be !== 0 && Z3() && (l = be);
    for (var t = tt(), e = null, a = Ou; a !== null; ) {
      var n = a.next,
        u = Q2(a, t);
      u === 0
        ? ((a.next = null),
          e === null ? (Ou = n) : (e.next = n),
          n === null && (Ma = e))
        : ((e = a), (l !== 0 || (u & 3) !== 0) && (Du = !0)),
        (a = n);
    }
    (El !== 0 && El !== 5) || bn(l), be !== 0 && (be = 0);
  }
  function Q2(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        n = l.expirationTimes,
        u = l.pendingLanes & -62914561;
      0 < u;

    ) {
      var c = 31 - at(u),
        f = 1 << c,
        o = n[c];
      o === -1
        ? ((f & e) === 0 || (f & a) !== 0) && (n[c] = cr(f, t))
        : o <= t && (l.expiredLanes |= f),
        (u &= ~f);
    }
    if (
      ((t = ol),
      (e = W),
      (e = Rn(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (nl === 2 || nl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ac(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || Ba(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && ac(a), cc(e))) {
        case 2:
        case 8:
          e = D1;
          break;
        case 32:
          e = Dn;
          break;
        case 268435456:
          e = U1;
          break;
        default:
          e = Dn;
      }
      return (
        (a = V2.bind(null, l)),
        (e = ec(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && ac(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function V2(l, t) {
    if (El !== 0 && El !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var e = l.callbackNode;
    if (_u() && l.callbackNode !== e) return null;
    var a = W;
    return (
      (a = Rn(
        l,
        l === ol ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (j2(l, a, t),
          Q2(l, tt()),
          l.callbackNode != null && l.callbackNode === e
            ? V2.bind(null, l)
            : null)
    );
  }
  function Z2(l, t) {
    if (_u()) return null;
    j2(l, t, !0);
  }
  function H3() {
    k3(function () {
      (el & 6) !== 0 ? ec(O1, C3) : X2();
    });
  }
  function ki() {
    if (be === 0) {
      var l = ma;
      l === 0 && ((l = Un), (Un <<= 1), (Un & 261888) === 0 && (Un = 256)),
        (be = l);
    }
    return be;
  }
  function w2(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Gn("" + l);
  }
  function k2(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function R3(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = w2((n[Zl] || null).action),
        c = a.submitter;
      c &&
        ((t = (t = c[Zl] || null)
          ? w2(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((u = t), (c = null)));
      var f = new Vn("action", "action", null, a, n);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (be !== 0) {
                  var o = c ? k2(n, c) : new FormData(n);
                  di(
                    e,
                    { pending: !0, data: o, method: n.method, action: u },
                    null,
                    o
                  );
                }
              } else
                typeof u == "function" &&
                  (f.preventDefault(),
                  (o = c ? k2(n, c) : new FormData(n)),
                  di(
                    e,
                    { pending: !0, data: o, method: n.method, action: u },
                    u,
                    o
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Ki = 0; Ki < _c.length; Ki++) {
    var Ji = _c[Ki],
      B3 = Ji.toLowerCase(),
      q3 = Ji[0].toUpperCase() + Ji.slice(1);
    zt(B3, "on" + q3);
  }
  zt(N0, "onAnimationEnd"),
    zt(z0, "onAnimationIteration"),
    zt(j0, "onAnimationStart"),
    zt("dblclick", "onDoubleClick"),
    zt("focusin", "onFocus"),
    zt("focusout", "onBlur"),
    zt(Pr, "onTransitionRun"),
    zt(l3, "onTransitionStart"),
    zt(t3, "onTransitionCancel"),
    zt(A0, "onTransitionEnd"),
    Pe("onMouseEnter", ["mouseout", "mouseover"]),
    Pe("onMouseLeave", ["mouseout", "mouseover"]),
    Pe("onPointerEnter", ["pointerout", "pointerover"]),
    Pe("onPointerLeave", ["pointerout", "pointerover"]),
    Oe(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Oe(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Oe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Oe(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Oe(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Oe(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var xn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Y3 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(xn)
    );
  function K2(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c],
              o = f.instance,
              b = f.currentTarget;
            if (((f = f.listener), o !== u && n.isPropagationStopped()))
              break l;
            (u = f), (n.currentTarget = b);
            try {
              u(n);
            } catch (S) {
              kn(S);
            }
            (n.currentTarget = null), (u = o);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((f = a[c]),
              (o = f.instance),
              (b = f.currentTarget),
              (f = f.listener),
              o !== u && n.isPropagationStopped())
            )
              break l;
            (u = f), (n.currentTarget = b);
            try {
              u(n);
            } catch (S) {
              kn(S);
            }
            (n.currentTarget = null), (u = o);
          }
      }
    }
  }
  function $(l, t) {
    var e = t[ic];
    e === void 0 && (e = t[ic] = new Set());
    var a = l + "__bubble";
    e.has(a) || (J2(t, l, 2, !1), e.add(a));
  }
  function $i(l, t, e) {
    var a = 0;
    t && (a |= 4), J2(e, l, a, t);
  }
  var Uu = "_reactListening" + Math.random().toString(36).slice(2);
  function Wi(l) {
    if (!l[Uu]) {
      (l[Uu] = !0),
        L1.forEach(function (e) {
          e !== "selectionchange" && (Y3.has(e) || $i(e, !1, l), $i(e, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Uu] || ((t[Uu] = !0), $i("selectionchange", !1, t));
    }
  }
  function J2(l, t, e, a) {
    switch (zs(t)) {
      case 2:
        var n = d4;
        break;
      case 8:
        n = m4;
        break;
      default:
        n = o1;
    }
    (e = n.bind(null, t, e, l)),
      (n = void 0),
      !vc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: n })
          : l.addEventListener(t, e, !0)
        : n !== void 0
        ? l.addEventListener(t, e, { passive: n })
        : l.addEventListener(t, e, !1);
  }
  function Fi(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var o = c.tag;
              if ((o === 3 || o === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (((c = We(f)), c === null)) return;
            if (((o = c.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
              a = u = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    I1(function () {
      var b = u,
        S = hc(e),
        A = [];
      l: {
        var x = T0.get(l);
        if (x !== void 0) {
          var p = Vn,
            U = l;
          switch (l) {
            case "keypress":
              if (Xn(e) === 0) break l;
            case "keydown":
            case "keyup":
              p = Dr;
              break;
            case "focusin":
              (U = "focus"), (p = pc);
              break;
            case "focusout":
              (U = "blur"), (p = pc);
              break;
            case "beforeblur":
            case "afterblur":
              p = pc;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = t0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = xr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Hr;
              break;
            case N0:
            case z0:
            case j0:
              p = Nr;
              break;
            case A0:
              p = Br;
              break;
            case "scroll":
            case "scrollend":
              p = yr;
              break;
            case "wheel":
              p = Yr;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = jr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = a0;
              break;
            case "toggle":
            case "beforetoggle":
              p = Lr;
          }
          var Y = (t & 4) !== 0,
            sl = !Y && (l === "scroll" || l === "scrollend"),
            h = Y ? (x !== null ? x + "Capture" : null) : x;
          Y = [];
          for (var d = b, y; d !== null; ) {
            var z = d;
            if (
              ((y = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                y === null ||
                h === null ||
                ((z = La(d, h)), z != null && Y.push(pn(d, z, y))),
              sl)
            )
              break;
            d = d.return;
          }
          0 < Y.length &&
            ((x = new p(x, U, null, e, S)), A.push({ event: x, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((x = l === "mouseover" || l === "pointerover"),
            (p = l === "mouseout" || l === "pointerout"),
            x &&
              e !== mc &&
              (U = e.relatedTarget || e.fromElement) &&
              (We(U) || U[$e]))
          )
            break l;
          if (
            (p || x) &&
            ((x =
              S.window === S
                ? S
                : (x = S.ownerDocument)
                ? x.defaultView || x.parentWindow
                : window),
            p
              ? ((U = e.relatedTarget || e.toElement),
                (p = b),
                (U = U ? We(U) : null),
                U !== null &&
                  ((sl = E(U)),
                  (Y = U.tag),
                  U !== sl || (Y !== 5 && Y !== 27 && Y !== 6)) &&
                  (U = null))
              : ((p = null), (U = b)),
            p !== U)
          ) {
            if (
              ((Y = t0),
              (z = "onMouseLeave"),
              (h = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((Y = a0),
                (z = "onPointerLeave"),
                (h = "onPointerEnter"),
                (d = "pointer")),
              (sl = p == null ? x : Ga(p)),
              (y = U == null ? x : Ga(U)),
              (x = new Y(z, d + "leave", p, e, S)),
              (x.target = sl),
              (x.relatedTarget = y),
              (z = null),
              We(S) === b &&
                ((Y = new Y(h, d + "enter", U, e, S)),
                (Y.target = y),
                (Y.relatedTarget = sl),
                (z = Y)),
              (sl = z),
              p && U)
            )
              t: {
                for (Y = G3, h = p, d = U, y = 0, z = h; z; z = Y(z)) y++;
                z = 0;
                for (var B = d; B; B = Y(B)) z++;
                for (; 0 < y - z; ) (h = Y(h)), y--;
                for (; 0 < z - y; ) (d = Y(d)), z--;
                for (; y--; ) {
                  if (h === d || (d !== null && h === d.alternate)) {
                    Y = h;
                    break t;
                  }
                  (h = Y(h)), (d = Y(d));
                }
                Y = null;
              }
            else Y = null;
            p !== null && $2(A, x, p, Y, !1),
              U !== null && sl !== null && $2(A, sl, U, Y, !0);
          }
        }
        l: {
          if (
            ((x = b ? Ga(b) : window),
            (p = x.nodeName && x.nodeName.toLowerCase()),
            p === "select" || (p === "input" && x.type === "file"))
          )
            var ll = o0;
          else if (s0(x))
            if (d0) ll = Wr;
            else {
              ll = Jr;
              var R = Kr;
            }
          else
            (p = x.nodeName),
              !p ||
              p.toLowerCase() !== "input" ||
              (x.type !== "checkbox" && x.type !== "radio")
                ? b && dc(b.elementType) && (ll = o0)
                : (ll = $r);
          if (ll && (ll = ll(l, b))) {
            r0(A, ll, e, S);
            break l;
          }
          R && R(l, x, b),
            l === "focusout" &&
              b &&
              x.type === "number" &&
              b.memoizedProps.value != null &&
              oc(x, "number", x.value);
        }
        switch (((R = b ? Ga(b) : window), l)) {
          case "focusin":
            (s0(R) || R.contentEditable === "true") &&
              ((ua = R), (Tc = b), (Ja = null));
            break;
          case "focusout":
            Ja = Tc = ua = null;
            break;
          case "mousedown":
            Ec = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ec = !1), p0(A, e, S);
            break;
          case "selectionchange":
            if (Ir) break;
          case "keydown":
          case "keyup":
            p0(A, e, S);
        }
        var w;
        if (Nc)
          l: {
            switch (l) {
              case "compositionstart":
                var F = "onCompositionStart";
                break l;
              case "compositionend":
                F = "onCompositionEnd";
                break l;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break l;
            }
            F = void 0;
          }
        else
          na
            ? i0(l, e) && (F = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              (F = "onCompositionStart");
        F &&
          (n0 &&
            e.locale !== "ko" &&
            (na || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && na && (w = P1())
              : ((ee = S),
                (yc = "value" in ee ? ee.value : ee.textContent),
                (na = !0))),
          (R = Cu(b, F)),
          0 < R.length &&
            ((F = new e0(F, l, null, e, S)),
            A.push({ event: F, listeners: R }),
            w ? (F.data = w) : ((w = f0(e)), w !== null && (F.data = w)))),
          (w = Qr ? Vr(l, e) : Zr(l, e)) &&
            ((F = Cu(b, "onBeforeInput")),
            0 < F.length &&
              ((R = new e0("onBeforeInput", "beforeinput", null, e, S)),
              A.push({ event: R, listeners: F }),
              (R.data = w))),
          R3(A, l, b, e, S);
      }
      K2(A, t);
    });
  }
  function pn(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Cu(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = La(l, e)),
          n != null && a.unshift(pn(l, n, u)),
          (n = La(l, t)),
          n != null && a.push(pn(l, n, u))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function G3(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function $2(l, t, e, a, n) {
    for (var u = t._reactName, c = []; e !== null && e !== a; ) {
      var f = e,
        o = f.alternate,
        b = f.stateNode;
      if (((f = f.tag), o !== null && o === a)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        b === null ||
        ((o = b),
        n
          ? ((b = La(e, u)), b != null && c.unshift(pn(e, b, o)))
          : n || ((b = La(e, u)), b != null && c.push(pn(e, b, o)))),
        (e = e.return);
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var L3 = /\r\n?/g,
    X3 = /\u0000|\uFFFD/g;
  function W2(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        L3,
        `
`
      )
      .replace(X3, "");
  }
  function F2(l, t) {
    return (t = W2(t)), W2(l) === t;
  }
  function fl(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || ta(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            ta(l, "" + a);
        break;
      case "className":
        qn(l, "class", a);
        break;
      case "tabIndex":
        qn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qn(l, e, a);
        break;
      case "style":
        W1(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          qn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        (a = Gn("" + a)), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (e === "formAction"
              ? (t !== "input" && fl(l, t, "name", n.name, n, null),
                fl(l, t, "formEncType", n.formEncType, n, null),
                fl(l, t, "formMethod", n.formMethod, n, null),
                fl(l, t, "formTarget", n.formTarget, n, null))
              : (fl(l, t, "encType", n.encType, n, null),
                fl(l, t, "method", n.method, n, null),
                fl(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        (a = Gn("" + a)), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Bt);
        break;
      case "onScroll":
        a != null && $("scroll", l);
        break;
      case "onScrollEnd":
        a != null && $("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(r(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (e = Gn("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "" + a)
          : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        $("beforetoggle", l), $("toggle", l), Bn(l, "popover", a);
        break;
      case "xlinkActuate":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Bn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = gr.get(e) || e), Bn(l, e, a));
    }
  }
  function Ii(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        W1(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(r(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ta(l, a)
          : (typeof a == "number" || typeof a == "bigint") && ta(l, "" + a);
        break;
      case "onScroll":
        a != null && $("scroll", l);
        break;
      case "onScrollEnd":
        a != null && $("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Bt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!X1.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((n = e.endsWith("Capture")),
              (t = e.slice(2, n ? e.length - 7 : void 0)),
              (u = l[Zl] || null),
              (u = u != null ? u[e] : null),
              typeof u == "function" && l.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, n);
              break l;
            }
            e in l
              ? (l[e] = a)
              : a === !0
              ? l.setAttribute(e, "")
              : Bn(l, e, a);
          }
    }
  }
  function Hl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        $("error", l), $("load", l);
        var a = !1,
          n = !1,
          u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var c = e[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  fl(l, t, u, c, e, null);
              }
          }
        n && fl(l, t, "srcSet", e.srcSet, e, null),
          a && fl(l, t, "src", e.src, e, null);
        return;
      case "input":
        $("invalid", l);
        var f = (u = c = n = null),
          o = null,
          b = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var S = e[a];
            if (S != null)
              switch (a) {
                case "name":
                  n = S;
                  break;
                case "type":
                  c = S;
                  break;
                case "checked":
                  o = S;
                  break;
                case "defaultChecked":
                  b = S;
                  break;
                case "value":
                  u = S;
                  break;
                case "defaultValue":
                  f = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(r(137, t));
                  break;
                default:
                  fl(l, t, a, S, e, null);
              }
          }
        k1(l, u, f, o, b, c, n, !1);
        return;
      case "select":
        $("invalid", l), (a = c = u = null);
        for (n in e)
          if (e.hasOwnProperty(n) && ((f = e[n]), f != null))
            switch (n) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                a = f;
              default:
                fl(l, t, n, f, e, null);
            }
        (t = u),
          (e = c),
          (l.multiple = !!a),
          t != null ? la(l, !!a, t, !1) : e != null && la(l, !!a, e, !0);
        return;
      case "textarea":
        $("invalid", l), (u = n = a = null);
        for (c in e)
          if (e.hasOwnProperty(c) && ((f = e[c]), f != null))
            switch (c) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                n = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(r(91));
                break;
              default:
                fl(l, t, c, f, e, null);
            }
        J1(l, a, n, u);
        return;
      case "option":
        for (o in e)
          e.hasOwnProperty(o) &&
            ((a = e[o]), a != null) &&
            (o === "selected"
              ? (l.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : fl(l, t, o, a, e, null));
        return;
      case "dialog":
        $("beforetoggle", l), $("toggle", l), $("cancel", l), $("close", l);
        break;
      case "iframe":
      case "object":
        $("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < xn.length; a++) $(xn[a], l);
        break;
      case "image":
        $("error", l), $("load", l);
        break;
      case "details":
        $("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        $("error", l), $("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (b in e)
          if (e.hasOwnProperty(b) && ((a = e[b]), a != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                fl(l, t, b, a, e, null);
            }
        return;
      default:
        if (dc(t)) {
          for (S in e)
            e.hasOwnProperty(S) &&
              ((a = e[S]), a !== void 0 && Ii(l, t, S, a, e, void 0));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && ((a = e[f]), a != null && fl(l, t, f, a, e, null));
  }
  function Q3(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          c = null,
          f = null,
          o = null,
          b = null,
          S = null;
        for (p in e) {
          var A = e[p];
          if (e.hasOwnProperty(p) && A != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = A;
              default:
                a.hasOwnProperty(p) || fl(l, t, p, null, a, A);
            }
        }
        for (var x in a) {
          var p = a[x];
          if (((A = e[x]), a.hasOwnProperty(x) && (p != null || A != null)))
            switch (x) {
              case "type":
                u = p;
                break;
              case "name":
                n = p;
                break;
              case "checked":
                b = p;
                break;
              case "defaultChecked":
                S = p;
                break;
              case "value":
                c = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(137, t));
                break;
              default:
                p !== A && fl(l, t, x, p, a, A);
            }
        }
        rc(l, c, f, o, b, S, u, n);
        return;
      case "select":
        p = c = f = x = null;
        for (u in e)
          if (((o = e[u]), e.hasOwnProperty(u) && o != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                p = o;
              default:
                a.hasOwnProperty(u) || fl(l, t, u, null, a, o);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (o = e[n]),
            a.hasOwnProperty(n) && (u != null || o != null))
          )
            switch (n) {
              case "value":
                x = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== o && fl(l, t, n, u, a, o);
            }
        (t = f),
          (e = c),
          (a = p),
          x != null
            ? la(l, !!e, x, !1)
            : !!a != !!e &&
              (t != null ? la(l, !!e, t, !0) : la(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = x = null;
        for (f in e)
          if (
            ((n = e[f]),
            e.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                fl(l, t, f, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = e[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case "value":
                x = n;
                break;
              case "defaultValue":
                p = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && fl(l, t, c, n, a, u);
            }
        K1(l, x, p);
        return;
      case "option":
        for (var U in e)
          (x = e[U]),
            e.hasOwnProperty(U) &&
              x != null &&
              !a.hasOwnProperty(U) &&
              (U === "selected" ? (l.selected = !1) : fl(l, t, U, null, a, x));
        for (o in a)
          (x = a[o]),
            (p = e[o]),
            a.hasOwnProperty(o) &&
              x !== p &&
              (x != null || p != null) &&
              (o === "selected"
                ? (l.selected =
                    x && typeof x != "function" && typeof x != "symbol")
                : fl(l, t, o, x, a, p));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in e)
          (x = e[Y]),
            e.hasOwnProperty(Y) &&
              x != null &&
              !a.hasOwnProperty(Y) &&
              fl(l, t, Y, null, a, x);
        for (b in a)
          if (
            ((x = a[b]),
            (p = e[b]),
            a.hasOwnProperty(b) && x !== p && (x != null || p != null))
          )
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(r(137, t));
                break;
              default:
                fl(l, t, b, x, a, p);
            }
        return;
      default:
        if (dc(t)) {
          for (var sl in e)
            (x = e[sl]),
              e.hasOwnProperty(sl) &&
                x !== void 0 &&
                !a.hasOwnProperty(sl) &&
                Ii(l, t, sl, void 0, a, x);
          for (S in a)
            (x = a[S]),
              (p = e[S]),
              !a.hasOwnProperty(S) ||
                x === p ||
                (x === void 0 && p === void 0) ||
                Ii(l, t, S, x, a, p);
          return;
        }
    }
    for (var h in e)
      (x = e[h]),
        e.hasOwnProperty(h) &&
          x != null &&
          !a.hasOwnProperty(h) &&
          fl(l, t, h, null, a, x);
    for (A in a)
      (x = a[A]),
        (p = e[A]),
        !a.hasOwnProperty(A) ||
          x === p ||
          (x == null && p == null) ||
          fl(l, t, A, x, a, p);
  }
  function I2(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function V3() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0;
        a < e.length;
        a++
      ) {
        var n = e[a],
          u = n.transferSize,
          c = n.initiatorType,
          f = n.duration;
        if (u && f && I2(c)) {
          for (c = 0, f = n.responseEnd, a += 1; a < e.length; a++) {
            var o = e[a],
              b = o.startTime;
            if (b > f) break;
            var S = o.transferSize,
              A = o.initiatorType;
            S &&
              I2(A) &&
              ((o = o.responseEnd), (c += S * (o < f ? 1 : (f - b) / (o - b))));
          }
          if ((--a, (t += (8 * (u + c)) / (n.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Pi = null,
    l1 = null;
  function Hu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function P2(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ls(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function t1(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var e1 = null;
  function Z3() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === e1
        ? !1
        : ((e1 = l), !0)
      : ((e1 = null), !1);
  }
  var ts = typeof setTimeout == "function" ? setTimeout : void 0,
    w3 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    es = typeof Promise == "function" ? Promise : void 0,
    k3 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof es < "u"
        ? function (l) {
            return es.resolve(null).then(l).catch(K3);
          }
        : ts;
  function K3(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function xe(l) {
    return l === "head";
  }
  function as(l, t) {
    var e = t,
      a = 0;
    do {
      var n = e.nextSibling;
      if ((l.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            l.removeChild(n), Ua(t);
            return;
          }
          a--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          a++;
        else if (e === "html") Sn(l.ownerDocument.documentElement);
        else if (e === "head") {
          (e = l.ownerDocument.head), Sn(e);
          for (var u = e.firstChild; u; ) {
            var c = u.nextSibling,
              f = u.nodeName;
            u[Ya] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(u),
              (u = c);
          }
        } else e === "body" && Sn(l.ownerDocument.body);
      e = n;
    } while (e);
    Ua(t);
  }
  function ns(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? t
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (t
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (l === 0) break;
          l--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
      e = a;
    } while (e);
  }
  function a1(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          a1(e), fc(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function J3(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ya])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((u = l.getAttribute("rel")),
                u === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                l.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                l.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                l.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((u = l.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  l.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  l.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u) return l;
      } else return l;
      if (((l = pt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function $3(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = pt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function us(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = pt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function n1(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function u1(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function W3(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function () {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
    }
  }
  function pt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var c1 = null;
  function cs(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return pt(l.nextSibling);
          t--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function is(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else (e !== "/$" && e !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function fs(l, t, e) {
    switch (((t = Hu(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(r(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(r(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function Sn(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    fc(l);
  }
  var St = new Map(),
    ss = new Set();
  function Ru(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var It = O.d;
  O.d = { f: F3, r: I3, D: P3, C: l4, L: t4, m: e4, X: n4, S: a4, M: u4 };
  function F3() {
    var l = It.f(),
      t = Tu();
    return l || t;
  }
  function I3(l) {
    var t = Fe(l);
    t !== null && t.tag === 5 && t.type === "form" ? Tf(t) : It.r(l);
  }
  var _a = typeof document > "u" ? null : document;
  function rs(l, t, e) {
    var a = _a;
    if (a && typeof t == "string" && t) {
      var n = mt(t);
      (n = 'link[rel="' + l + '"][href="' + n + '"]'),
        typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
        ss.has(n) ||
          (ss.add(n),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Hl(t, "link", l),
            Ml(t),
            a.head.appendChild(t)));
    }
  }
  function P3(l) {
    It.D(l), rs("dns-prefetch", l, null);
  }
  function l4(l, t) {
    It.C(l, t), rs("preconnect", l, t);
  }
  function t4(l, t, e) {
    It.L(l, t, e);
    var a = _a;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + mt(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((n += '[imagesrcset="' + mt(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (n += '[imagesizes="' + mt(e.imageSizes) + '"]'))
        : (n += '[href="' + mt(l) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = Oa(l);
          break;
        case "script":
          u = Da(l);
      }
      St.has(u) ||
        ((l = C(
          {
            rel: "preload",
            href: t === "image" && e && e.imageSrcSet ? void 0 : l,
            as: t,
          },
          e
        )),
        St.set(u, l),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Nn(u))) ||
          (t === "script" && a.querySelector(zn(u))) ||
          ((t = a.createElement("link")),
          Hl(t, "link", l),
          Ml(t),
          a.head.appendChild(t)));
    }
  }
  function e4(l, t) {
    It.m(l, t);
    var e = _a;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + mt(a) + '"][href="' + mt(l) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Da(l);
      }
      if (
        !St.has(u) &&
        ((l = C({ rel: "modulepreload", href: l }, t)),
        St.set(u, l),
        e.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(zn(u))) return;
        }
        (a = e.createElement("link")),
          Hl(a, "link", l),
          Ml(a),
          e.head.appendChild(a);
      }
    }
  }
  function a4(l, t, e) {
    It.S(l, t, e);
    var a = _a;
    if (a && l) {
      var n = Ie(a).hoistableStyles,
        u = Oa(l);
      t = t || "default";
      var c = n.get(u);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = a.querySelector(Nn(u)))) f.loading = 5;
        else {
          (l = C({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = St.get(u)) && i1(l, e);
          var o = (c = a.createElement("link"));
          Ml(o),
            Hl(o, "link", l),
            (o._p = new Promise(function (b, S) {
              (o.onload = b), (o.onerror = S);
            })),
            o.addEventListener("load", function () {
              f.loading |= 1;
            }),
            o.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Bu(c, t, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: f }),
          n.set(u, c);
      }
    }
  }
  function n4(l, t) {
    It.X(l, t);
    var e = _a;
    if (e && l) {
      var a = Ie(e).hoistableScripts,
        n = Da(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(zn(n))),
        u ||
          ((l = C({ src: l, async: !0 }, t)),
          (t = St.get(n)) && f1(l, t),
          (u = e.createElement("script")),
          Ml(u),
          Hl(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function u4(l, t) {
    It.M(l, t);
    var e = _a;
    if (e && l) {
      var a = Ie(e).hoistableScripts,
        n = Da(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(zn(n))),
        u ||
          ((l = C({ src: l, async: !0, type: "module" }, t)),
          (t = St.get(n)) && f1(l, t),
          (u = e.createElement("script")),
          Ml(u),
          Hl(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function os(l, t, e, a) {
    var n = (n = K.current) ? Ru(n) : null;
    if (!n) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = Oa(e.href)),
            (e = Ie(n).hoistableStyles),
            (a = e.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = Oa(e.href);
          var u = Ie(n).hoistableStyles,
            c = u.get(l);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(l, c),
              (u = n.querySelector(Nn(l))) &&
                !u._p &&
                ((c.instance = u), (c.state.loading = 5)),
              St.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                St.set(l, e),
                u || c4(n, l, e, c.state))),
            t && a === null)
          )
            throw Error(r(528, ""));
          return c;
        }
        if (t && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Da(e)),
              (e = Ie(n).hoistableScripts),
              (a = e.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, l));
    }
  }
  function Oa(l) {
    return 'href="' + mt(l) + '"';
  }
  function Nn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ds(l) {
    return C({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function c4(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Hl(t, "link", e),
        Ml(t),
        l.head.appendChild(t));
  }
  function Da(l) {
    return '[src="' + mt(l) + '"]';
  }
  function zn(l) {
    return "script[async]" + l;
  }
  function ms(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + mt(e.href) + '"]');
          if (a) return (t.instance = a), Ml(a), a;
          var n = C({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Ml(a),
            Hl(a, "style", n),
            Bu(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          n = Oa(e.href);
          var u = l.querySelector(Nn(n));
          if (u) return (t.state.loading |= 4), (t.instance = u), Ml(u), u;
          (a = ds(e)),
            (n = St.get(n)) && i1(a, n),
            (u = (l.ownerDocument || l).createElement("link")),
            Ml(u);
          var c = u;
          return (
            (c._p = new Promise(function (f, o) {
              (c.onload = f), (c.onerror = o);
            })),
            Hl(u, "link", a),
            (t.state.loading |= 4),
            Bu(u, e.precedence, l),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Da(e.src)),
            (n = l.querySelector(zn(u)))
              ? ((t.instance = n), Ml(n), n)
              : ((a = e),
                (n = St.get(u)) && ((a = C({}, e)), f1(a, n)),
                (l = l.ownerDocument || l),
                (n = l.createElement("script")),
                Ml(n),
                Hl(n, "link", a),
                l.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Bu(a, e.precedence, l));
    return t.instance;
  }
  function Bu(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var f = a[c];
      if (f.dataset.precedence === t) u = f;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(l, u.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function i1(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function f1(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var qu = null;
  function hs(l, t, e) {
    if (qu === null) {
      var a = new Map(),
        n = (qu = new Map());
      n.set(e, a);
    } else (n = qu), (a = n.get(e)), a || ((a = new Map()), n.set(e, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), n = 0;
      n < e.length;
      n++
    ) {
      var u = e[n];
      if (
        !(
          u[Ya] ||
          u[Ol] ||
          (l === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = u.getAttribute(t) || "";
        c = l + c;
        var f = a.get(c);
        f ? f.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function gs(l, t, e) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function i4(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function vs(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function f4(l, t, e, a) {
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = Oa(a.href),
          u = t.querySelector(Nn(n));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Yu.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = u),
            Ml(u);
          return;
        }
        (u = t.ownerDocument || t),
          (a = ds(a)),
          (n = St.get(n)) && i1(a, n),
          (u = u.createElement("link")),
          Ml(u);
        var c = u;
        (c._p = new Promise(function (f, o) {
          (c.onload = f), (c.onerror = o);
        })),
          Hl(u, "link", a),
          (e.instance = u);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = Yu.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  var s1 = 0;
  function s4(l, t) {
    return (
      l.stylesheets && l.count === 0 && Lu(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Lu(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                (l.unsuspend = null), u();
              }
            }, 6e4 + t);
            0 < l.imgBytes && s1 === 0 && (s1 = 62500 * V3());
            var n = setTimeout(function () {
              if (
                ((l.waitingForImages = !1),
                l.count === 0 &&
                  (l.stylesheets && Lu(l, l.stylesheets), l.unsuspend))
              ) {
                var u = l.unsuspend;
                (l.unsuspend = null), u();
              }
            }, (l.imgBytes > s1 ? 50 : 800) + t);
            return (
              (l.unsuspend = e),
              function () {
                (l.unsuspend = null), clearTimeout(a), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Yu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Lu(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Gu = null;
  function Lu(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Gu = new Map()),
        t.forEach(r4, l),
        (Gu = null),
        Yu.call(l));
  }
  function r4(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Gu.get(l);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), Gu.set(l, e);
        for (
          var n = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (e.set(c.dataset.precedence, c), (a = c));
        }
        a && e.set(null, a);
      }
      (n = t.instance),
        (c = n.getAttribute("data-precedence")),
        (u = e.get(c) || a),
        u === a && e.set(null, n),
        e.set(c, n),
        this.count++,
        (a = Yu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(n, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var jn = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
  };
  function o4(l, t, e, a, n, u, c, f, o) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = nc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = nc(0)),
      (this.hiddenUpdates = nc(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = o),
      (this.incompleteTransitions = new Map());
  }
  function ys(l, t, e, a, n, u, c, f, o, b, S, A) {
    return (
      (l = new o4(l, t, e, c, o, b, S, A, f)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = ut(3, null, null, t)),
      (l.current = u),
      (u.stateNode = l),
      (t = Qc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: e, cache: t }),
      kc(u),
      l
    );
  }
  function bs(l) {
    return l ? ((l = fa), l) : fa;
  }
  function xs(l, t, e, a, n, u) {
    (n = bs(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = fe(t)),
      (a.payload = { element: e }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (e = se(l, a, t)),
      e !== null && (Wl(e, l, t), tn(e, l, t));
  }
  function ps(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function r1(l, t) {
    ps(l, t), (l = l.alternate) && ps(l, t);
  }
  function Ss(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = He(l, 67108864);
      t !== null && Wl(t, l, 67108864), r1(l, 67108864);
    }
  }
  function Ns(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = rt();
      t = uc(t);
      var e = He(l, t);
      e !== null && Wl(e, l, t), r1(l, t);
    }
  }
  var Xu = !0;
  function d4(l, t, e, a) {
    var n = N.T;
    N.T = null;
    var u = O.p;
    try {
      (O.p = 2), o1(l, t, e, a);
    } finally {
      (O.p = u), (N.T = n);
    }
  }
  function m4(l, t, e, a) {
    var n = N.T;
    N.T = null;
    var u = O.p;
    try {
      (O.p = 8), o1(l, t, e, a);
    } finally {
      (O.p = u), (N.T = n);
    }
  }
  function o1(l, t, e, a) {
    if (Xu) {
      var n = d1(a);
      if (n === null) Fi(l, t, a, Qu, e), js(l, a);
      else if (g4(n, l, t, e, a)) a.stopPropagation();
      else if ((js(l, a), t & 4 && -1 < h4.indexOf(l))) {
        for (; n !== null; ) {
          var u = Fe(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = _e(u.pendingLanes);
                  if (c !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var o = 1 << (31 - at(c));
                      (f.entanglements[1] |= o), (c &= ~o);
                    }
                    Ut(u), (el & 6) === 0 && ((ju = tt() + 500), bn(0));
                  }
                }
                break;
              case 31:
              case 13:
                (f = He(u, 2)), f !== null && Wl(f, u, 2), Tu(), r1(u, 2);
            }
          if (((u = d1(a)), u === null && Fi(l, t, a, Qu, e), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Fi(l, t, a, null, e);
    }
  }
  function d1(l) {
    return (l = hc(l)), m1(l);
  }
  var Qu = null;
  function m1(l) {
    if (((Qu = null), (l = We(l)), l !== null)) {
      var t = E(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = L(t)), l !== null)) return l;
          l = null;
        } else if (e === 31) {
          if (((l = q(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Qu = l), null;
  }
  function zs(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ps()) {
          case O1:
            return 2;
          case D1:
            return 8;
          case Dn:
          case lr:
            return 32;
          case U1:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var h1 = !1,
    pe = null,
    Se = null,
    Ne = null,
    An = new Map(),
    Tn = new Map(),
    ze = [],
    h4 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function js(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        pe = null;
        break;
      case "dragenter":
      case "dragleave":
        Se = null;
        break;
      case "mouseover":
      case "mouseout":
        Ne = null;
        break;
      case "pointerover":
      case "pointerout":
        An.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tn.delete(t.pointerId);
    }
  }
  function En(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = Fe(t)), t !== null && Ss(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        l);
  }
  function g4(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return (pe = En(pe, l, t, e, a, n)), !0;
      case "dragenter":
        return (Se = En(Se, l, t, e, a, n)), !0;
      case "mouseover":
        return (Ne = En(Ne, l, t, e, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return An.set(u, En(An.get(u) || null, l, t, e, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), Tn.set(u, En(Tn.get(u) || null, l, t, e, a, n)), !0
        );
    }
    return !1;
  }
  function As(l) {
    var t = We(l.target);
    if (t !== null) {
      var e = E(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = L(e)), t !== null)) {
            (l.blockedOn = t),
              Y1(l.priority, function () {
                Ns(e);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = q(e)), t !== null)) {
            (l.blockedOn = t),
              Y1(l.priority, function () {
                Ns(e);
              });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Vu(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = d1(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        (mc = a), e.target.dispatchEvent(a), (mc = null);
      } else return (t = Fe(e)), t !== null && Ss(t), (l.blockedOn = e), !1;
      t.shift();
    }
    return !0;
  }
  function Ts(l, t, e) {
    Vu(l) && e.delete(t);
  }
  function v4() {
    (h1 = !1),
      pe !== null && Vu(pe) && (pe = null),
      Se !== null && Vu(Se) && (Se = null),
      Ne !== null && Vu(Ne) && (Ne = null),
      An.forEach(Ts),
      Tn.forEach(Ts);
  }
  function Zu(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      h1 ||
        ((h1 = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, v4)));
  }
  var wu = null;
  function Es(l) {
    wu !== l &&
      ((wu = l),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        wu === l && (wu = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            n = l[t + 2];
          if (typeof a != "function") {
            if (m1(a || e) === null) continue;
            break;
          }
          var u = Fe(e);
          u !== null &&
            (l.splice(t, 3),
            (t -= 3),
            di(u, { pending: !0, data: n, method: e.method, action: a }, a, n));
        }
      }));
  }
  function Ua(l) {
    function t(o) {
      return Zu(o, l);
    }
    pe !== null && Zu(pe, l),
      Se !== null && Zu(Se, l),
      Ne !== null && Zu(Ne, l),
      An.forEach(t),
      Tn.forEach(t);
    for (var e = 0; e < ze.length; e++) {
      var a = ze[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < ze.length && ((e = ze[0]), e.blockedOn === null); )
      As(e), e.blockedOn === null && ze.shift();
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var n = e[a],
          u = e[a + 1],
          c = n[Zl] || null;
        if (typeof u == "function") c || Es(e);
        else if (c) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (c = u[Zl] || null))) f = c.formAction;
            else if (m1(n) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? (e[a + 1] = f) : (e.splice(a, 3), (a -= 3)),
            Es(e);
        }
      }
  }
  function Ms() {
    function l(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (n = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      n !== null && (n(), (n = null)), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(e, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function g1(l) {
    this._internalRoot = l;
  }
  (ku.prototype.render = g1.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var e = t.current,
        a = rt();
      xs(e, a, l, t, null, null);
    }),
    (ku.prototype.unmount = g1.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          xs(l.current, 2, null, l, null, null), Tu(), (t[$e] = null);
        }
      });
  function ku(l) {
    this._internalRoot = l;
  }
  ku.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = q1();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < ze.length && t !== 0 && t < ze[e].priority; e++);
      ze.splice(e, 0, l), e === 0 && As(l);
    }
  };
  var _s = g.version;
  if (_s !== "19.2.4") throw Error(r(527, _s, "19.2.4"));
  O.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(r(188))
        : ((l = Object.keys(l).join(",")), Error(r(268, l)));
    return (
      (l = j(t)),
      (l = l !== null ? Z(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var y4 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ku.isDisabled && Ku.supportsFiber)
      try {
        (Ra = Ku.inject(y4)), (et = Ku);
      } catch {}
  }
  return (
    (_n.createRoot = function (l, t) {
      if (!M(l)) throw Error(r(299));
      var e = !1,
        a = "",
        n = Bf,
        u = qf,
        c = Yf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ys(l, 1, !1, null, null, e, a, null, n, u, c, Ms)),
        (l[$e] = t.current),
        Wi(l),
        new g1(t)
      );
    }),
    (_n.hydrateRoot = function (l, t, e) {
      if (!M(l)) throw Error(r(299));
      var a = !1,
        n = "",
        u = Bf,
        c = qf,
        f = Yf,
        o = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.formState !== void 0 && (o = e.formState)),
        (t = ys(l, 1, !0, t, e ?? null, a, n, o, u, c, f, Ms)),
        (t.context = bs(null)),
        (e = t.current),
        (a = rt()),
        (a = uc(a)),
        (n = fe(a)),
        (n.callback = null),
        se(e, n, a),
        (e = a),
        (t.current.lanes = e),
        qa(t, e),
        Ut(t),
        (l[$e] = t.current),
        Wi(l),
        new ku(t)
      );
    }),
    (_n.version = "19.2.4"),
    _n
  );
}
var Gs;
function M4() {
  if (Gs) return b1.exports;
  Gs = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (g) {
        console.error(g);
      }
  }
  return s(), (b1.exports = E4()), b1.exports;
}
var _4 = M4();
const ws = (...s) =>
  s
    .filter((g, v, r) => !!g && g.trim() !== "" && r.indexOf(g) === v)
    .join(" ")
    .trim();
const O4 = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const D4 = (s) =>
  s.replace(/^([A-Z])|[\s-_]+(\w)/g, (g, v, r) =>
    r ? r.toUpperCase() : v.toLowerCase()
  );
const Ls = (s) => {
  const g = D4(s);
  return g.charAt(0).toUpperCase() + g.slice(1);
};
var U4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const C4 = (s) => {
  for (const g in s)
    if (g.startsWith("aria-") || g === "role" || g === "title") return !0;
  return !1;
};
const H4 = Ke.forwardRef(
  (
    {
      color: s = "currentColor",
      size: g = 24,
      strokeWidth: v = 2,
      absoluteStrokeWidth: r,
      className: M = "",
      children: E,
      iconNode: L,
      ...q
    },
    _
  ) =>
    Ke.createElement(
      "svg",
      {
        ref: _,
        ...U4,
        width: g,
        height: g,
        stroke: s,
        strokeWidth: r ? (Number(v) * 24) / Number(g) : v,
        className: ws("lucide", M),
        ...(!E && !C4(q) && { "aria-hidden": "true" }),
        ...q,
      },
      [
        ...L.map(([j, Z]) => Ke.createElement(j, Z)),
        ...(Array.isArray(E) ? E : [E]),
      ]
    )
);
const yl = (s, g) => {
  const v = Ke.forwardRef(({ className: r, ...M }, E) =>
    Ke.createElement(H4, {
      ref: E,
      iconNode: g,
      className: ws(`lucide-${O4(Ls(s))}`, `lucide-${s}`, r),
      ...M,
    })
  );
  return (v.displayName = Ls(s)), v;
};
const R4 = [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ],
  B4 = yl("arrow-down", R4);
const q4 = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  Xs = yl("award", q4);
const Y4 = [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
    ],
  ],
  z1 = yl("briefcase", Y4);
const G4 = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  L4 = yl("calendar", G4);
const X4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Q4 = yl("check", X4);
const V4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Z4 = yl("chevron-down", V4);
const w4 = [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ],
  k4 = yl("code-xml", w4);
const K4 = [
    ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
    ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
  ],
  j1 = yl("code", K4);
const J4 = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  $4 = yl("external-link", J4);
const W4 = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ],
  Fu = yl("github", W4);
const F4 = [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0",
      },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
  ],
  Qs = yl("graduation-cap", F4);
const I4 = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1",
      },
    ],
  ],
  P4 = yl("house", I4);
const lo = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  A1 = yl("instagram", lo);
const to = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  T1 = yl("linkedin", to);
const eo = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  Ca = yl("mail", eo);
const ao = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  no = yl("map-pin", ao);
const uo = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  co = yl("menu", uo);
const io = [
    [
      "path",
      {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
        key: "e79jfc",
      },
    ],
    [
      "circle",
      { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
    ],
    [
      "circle",
      { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
    ],
    [
      "circle",
      { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
    ],
    [
      "circle",
      { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
    ],
  ],
  fo = yl("palette", io);
const so = [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ],
  ro = yl("smartphone", so);
const oo = [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }],
  ],
  mo = yl("terminal", oo);
const ho = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  ks = yl("user", ho);
const go = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  E1 = yl("x", go);
const vo = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  yo = yl("zap", vo),
  Ae = k.forwardRef(
    (
      {
        variant: s = "default",
        size: g = "md",
        className: v = "",
        children: r,
        ...M
      },
      E
    ) => {
      const L =
          "inline-flex items-center justify-center font-bold uppercase tracking-tight transition-colors border-2 disabled:opacity-50 disabled:cursor-not-allowed",
        q = {
          default:
            "bg-foreground text-background border-foreground hover:bg-background hover:text-foreground",
          outline:
            "bg-background text-foreground border-foreground hover:bg-foreground hover:text-background",
          ghost:
            "bg-transparent text-foreground border-transparent hover:bg-muted hover:border-border",
          destructive:
            "bg-destructive text-destructive-foreground border-destructive hover:bg-destructive-foreground hover:text-destructive hover:border-destructive",
        },
        _ = {
          sm: "px-3 py-1.5 text-xs",
          md: "px-4 py-2 text-sm",
          lg: "px-6 py-3 text-base",
        };
      return i.jsx("button", {
        ref: E,
        className: `${L} ${q[s]} ${_[g]} ${v}`,
        ...M,
        children: r,
      });
    }
  );
Ae.displayName = "Button";
const bo = k.forwardRef(({ className: s = "", label: g, id: v, ...r }, M) => {
  const E = v || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  return i.jsxs("div", {
    className: "flex items-center gap-3",
    children: [
      i.jsxs("div", {
        className: "relative",
        children: [
          i.jsx("input", {
            ref: M,
            type: "checkbox",
            id: E,
            className: "peer sr-only",
            ...r,
          }),
          i.jsx("label", {
            htmlFor: E,
            className:
              "block w-5 h-5 border-2 border-border bg-background cursor-pointer peer-checked:bg-foreground peer-checked:border-foreground peer-disabled:opacity-50 peer-disabled:cursor-not-allowed transition-colors",
            children: i.jsx(Q4, {
              className:
                "w-full h-full text-background opacity-0 peer-checked:opacity-100",
            }),
          }),
        ],
      }),
      g &&
        i.jsx("label", {
          htmlFor: E,
          className: "text-sm text-foreground cursor-pointer select-none",
          children: g,
        }),
    ],
  });
});
bo.displayName = "Checkbox";
const xo = k.forwardRef(({ className: s = "", error: g, ...v }, r) =>
  i.jsxs("div", {
    className: "w-full",
    children: [
      i.jsx("input", {
        ref: r,
        className: `w-full px-4 py-2 bg-background text-foreground border-2 border-border focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed ${
          g ? "border-destructive" : ""
        } ${s}`,
        ...v,
      }),
      g &&
        i.jsx("p", {
          className: "mt-1 text-xs text-destructive font-bold",
          children: g,
        }),
    ],
  })
);
xo.displayName = "Input";
const po = k.forwardRef(
  ({ className: s = "", required: g, children: v, ...r }, M) =>
    i.jsxs("label", {
      ref: M,
      className: `block text-sm font-bold text-foreground mb-2 uppercase tracking-tight ${s}`,
      ...r,
      children: [
        v,
        g &&
          i.jsx("span", { className: "text-destructive ml-1", children: "*" }),
      ],
    })
);
po.displayName = "Label";
const So = k.forwardRef(
  (
    {
      options: s,
      value: g,
      onChange: v,
      placeholder: r = "Select an option",
      error: M,
      className: E = "",
    },
    L
  ) => {
    const [q, _] = k.useState(!1),
      j = k.useRef(null),
      Z = s.find((C) => C.value === g);
    return (
      k.useEffect(() => {
        const C = (dl) => {
          j.current && !j.current.contains(dl.target) && _(!1);
        };
        return (
          document.addEventListener("mousedown", C),
          () => document.removeEventListener("mousedown", C)
        );
      }, []),
      i.jsxs("div", {
        ref: L,
        className: `relative ${E}`,
        children: [
          i.jsxs("div", {
            ref: j,
            onClick: () => _(!q),
            className: `w-full px-4 py-2 bg-background text-foreground border-2 cursor-pointer flex items-center justify-between ${
              M
                ? "border-destructive"
                : q
                ? "border-foreground"
                : "border-border"
            }`,
            children: [
              i.jsx("span", {
                className: Z ? "font-medium" : "text-muted-foreground",
                children: Z?.label || r,
              }),
              i.jsx(Z4, {
                className: `w-4 h-4 transition-transform ${
                  q ? "rotate-180" : ""
                }`,
              }),
            ],
          }),
          q &&
            i.jsx("div", {
              className:
                "absolute top-full left-0 right-0 mt-1 bg-card border-2 border-border z-50 max-h-60 overflow-auto",
              children: s.map((C) =>
                i.jsx(
                  "button",
                  {
                    onClick: () => {
                      v(C.value), _(!1);
                    },
                    className: `w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors border-b-2 border-border last:border-b-0 font-medium ${
                      C.value === g
                        ? "bg-foreground text-background"
                        : "text-foreground"
                    }`,
                    children: C.label,
                  },
                  C.value
                )
              ),
            }),
          M &&
            i.jsx("p", {
              className: "mt-1 text-xs text-destructive font-bold",
              children: M,
            }),
        ],
      })
    );
  }
);
So.displayName = "Select";
const No = k.forwardRef(({ className: s = "", label: g, id: v, ...r }, M) => {
  const E = v || `switch-${Math.random().toString(36).substr(2, 9)}`;
  return i.jsxs("div", {
    className: "flex items-center gap-3",
    children: [
      i.jsxs("div", {
        className: "relative",
        children: [
          i.jsx("input", {
            ref: M,
            type: "checkbox",
            id: E,
            className: "peer sr-only",
            ...r,
          }),
          i.jsx("label", {
            htmlFor: E,
            className:
              "block w-12 h-6 border-2 border-border bg-background cursor-pointer peer-checked:bg-foreground peer-disabled:opacity-50 peer-disabled:cursor-not-allowed transition-colors relative",
            children: i.jsx("span", {
              className:
                "absolute left-0 top-0 w-4 h-4 bg-foreground border-2 border-border peer-checked:bg-background peer-checked:left-6 transition-all",
            }),
          }),
        ],
      }),
      g &&
        i.jsx("label", {
          htmlFor: E,
          className: "text-sm text-foreground cursor-pointer select-none",
          children: g,
        }),
    ],
  });
});
No.displayName = "Switch";
const zo = k.forwardRef(({ className: s = "", error: g, ...v }, r) =>
  i.jsxs("div", {
    className: "w-full",
    children: [
      i.jsx("textarea", {
        ref: r,
        className: `w-full px-4 py-2 bg-background text-foreground border-2 border-border focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed resize-none ${
          g ? "border-destructive" : ""
        } ${s}`,
        ...v,
      }),
      g &&
        i.jsx("p", {
          className: "mt-1 text-xs text-destructive font-bold",
          children: g,
        }),
    ],
  })
);
zo.displayName = "Textarea";
const Fl = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("div", {
    ref: r,
    className: `bg-card border-2 border-border ${s}`,
    ...v,
    children: g,
  })
);
Fl.displayName = "Card";
const jo = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("div", {
    ref: r,
    className: `p-4 sm:p-6 border-b-2 border-border ${s}`,
    ...v,
    children: g,
  })
);
jo.displayName = "CardHeader";
const Ao = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("h3", {
    ref: r,
    className: `text-lg sm:text-xl font-bold text-foreground uppercase tracking-tight ${s}`,
    ...v,
    children: g,
  })
);
Ao.displayName = "CardTitle";
const Il = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("div", { ref: r, className: `p-4 sm:p-6 ${s}`, ...v, children: g })
);
Il.displayName = "CardContent";
const To = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("div", {
    ref: r,
    className: `p-4 sm:p-6 border-t-2 border-border ${s}`,
    ...v,
    children: g,
  })
);
To.displayName = "CardFooter";
const Eo = k.forwardRef(
  ({ orientation: s = "horizontal", className: g = "", ...v }, r) =>
    i.jsx("hr", {
      ref: r,
      className: `border-border ${
        s === "horizontal" ? "w-full border-t-2" : "h-full border-l-2"
      } ${g}`,
      ...v,
    })
);
Eo.displayName = "Separator";
const Mo = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("div", {
    ref: r,
    className: `bg-card border-2 border-border ${s}`,
    ...v,
    children: g,
  })
);
Mo.displayName = "DialogContent";
const _o = k.forwardRef(
  ({ className: s = "", children: g, onClose: v, ...r }, M) =>
    i.jsxs("div", {
      ref: M,
      className: `p-4 sm:p-6 border-b-2 border-border flex items-start justify-between ${s}`,
      ...r,
      children: [
        i.jsx("div", { className: "flex-1", children: g }),
        v &&
          i.jsx("button", {
            onClick: v,
            className:
              "flex-shrink-0 ml-4 p-1 hover:bg-muted transition-colors",
            children: i.jsx(E1, { className: "w-5 h-5" }),
          }),
      ],
    })
);
_o.displayName = "DialogHeader";
const Oo = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("h2", {
    ref: r,
    className: `text-lg sm:text-xl font-bold text-foreground uppercase tracking-tight ${s}`,
    ...v,
    children: g,
  })
);
Oo.displayName = "DialogTitle";
const Do = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("p", {
    ref: r,
    className: `text-xs sm:text-sm text-muted-foreground mt-2 ${s}`,
    ...v,
    children: g,
  })
);
Do.displayName = "DialogDescription";
const Uo = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("div", { ref: r, className: `p-4 sm:p-6 ${s}`, ...v, children: g })
);
Uo.displayName = "DialogBody";
const Co = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("div", {
    ref: r,
    className: `p-4 sm:p-6 border-t-2 border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 ${s}`,
    ...v,
    children: g,
  })
);
Co.displayName = "DialogFooter";
const Te = k.forwardRef(
  ({ variant: s = "default", className: g = "", children: v, ...r }, M) => {
    const E = {
      default: "bg-foreground text-background border-foreground",
      outline: "bg-background text-foreground border-foreground",
      destructive:
        "bg-destructive text-destructive-foreground border-destructive",
      success: "bg-foreground text-background border-foreground",
    };
    return i.jsx("span", {
      ref: M,
      className: `inline-flex items-center px-2 py-1 text-xs font-bold uppercase tracking-tight border-2 ${E[s]} ${g}`,
      ...r,
      children: v,
    });
  }
);
Te.displayName = "Badge";
const Ks = k.forwardRef(
  (
    {
      src: s,
      alt: g = "Avatar",
      fallback: v,
      size: r = "md",
      className: M = "",
      ...E
    },
    L
  ) => {
    const [q, _] = k.useState(!1),
      j = {
        sm: "w-8 h-8 text-sm",
        md: "w-12 h-12 text-base",
        lg: "w-16 h-16 text-xl",
        xl: "w-24 h-24 text-3xl",
      },
      Z =
        q || !s
          ? v ||
            g
              .split(" ")
              .map((C) => C[0])
              .join("")
              .toUpperCase()
              .slice(0, 2)
          : null;
    return i.jsx("div", {
      ref: L,
      className: `${j[r]} border-2 border-border bg-muted flex items-center justify-center overflow-hidden flex-shrink-0 ${M}`,
      ...E,
      children: Z
        ? i.jsx("span", { className: "font-bold text-foreground", children: Z })
        : i.jsx("img", {
            src: s,
            alt: g,
            onError: () => _(!0),
            className: "w-full h-full object-cover",
          }),
    });
  }
);
Ks.displayName = "Avatar";
const Ho = k.forwardRef(({ className: s = "", children: g, ...v }, r) =>
  i.jsx("form", { ref: r, className: `space-y-6 ${s}`, ...v, children: g })
);
Ho.displayName = "Form";
const Ro = () => {
    const [s, g] = k.useState(!1),
      [v, r] = k.useState("default"),
      M = [
        {
          name: "default",
          label: "Default",
          preview: { bg: "#ffffff", fg: "#0a0a0a", border: "#e5e5e5" },
        },
        {
          name: "vintage",
          label: "Vintage",
          preview: { bg: "#f5f5dc", fg: "#3c2f2f", border: "#8b7355" },
        },
        {
          name: "neobrutalism",
          label: "neobrutalism",
          preview: { bg: "#ffffff", fg: "#000000", border: "#ffffff" },
        },
        {
          name: "notebook",
          label: "notebook",
          preview: { bg: "#606060", fg: "#dedede", border: "#747272" },
        },
        {
          name: "vercel",
          label: "vercel",
          preview: { bg: "##ebebeb", fg: "#000000", border: "#e4e4e4" },
        },
      ],
      E = k.useCallback((q) => {
        const _ = document.getElementById("theme-stylesheet");
        _ && _.remove();
        const j = document.createElement("link");
        (j.id = "theme-stylesheet"),
          (j.rel = "stylesheet"),
          (j.href = `/themes/${q}.css`),
          document.head.appendChild(j),
          r(q);
      }, []);
    k.useEffect(() => {
      const q = localStorage.getItem("theme");
      q &&
      ["default", "vintage", "neobrutalism", "notebook", "vercel"].includes(q)
        ? E(q)
        : E("default");
    }, [E]);
    const L = (q) => {
      E(q), localStorage.setItem("theme", q), g(!1);
    };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx("button", {
          onClick: () => g(!s),
          className:
            "fixed bottom-24 md:bottom-8 right-4 sm:right-6 lg:right-8 z-40 w-12 h-12 bg-foreground text-background border-2 border-border hover:bg-background hover:text-foreground transition-colors flex items-center justify-center",
          "aria-label": "Theme Switcher",
          children: s
            ? i.jsx(E1, { className: "w-5 h-5" })
            : i.jsx(fo, { className: "w-5 h-5" }),
        }),
        s &&
          i.jsx("div", {
            className:
              "fixed bottom-40 md:bottom-24 right-4 sm:right-6 lg:right-8 z-40 w-64 sm:w-72",
            children: i.jsx(Fl, {
              children: i.jsxs(Il, {
                className: "p-4",
                children: [
                  i.jsxs("div", {
                    className: "mb-4",
                    children: [
                      i.jsx("h3", {
                        className:
                          "font-bold text-sm uppercase tracking-tight text-foreground mb-1",
                        children: "Choose Theme",
                      }),
                      i.jsxs("p", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "Theme by",
                          " ",
                          i.jsx("a", {
                            href: "https://tweakcn.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "underline hover:text-foreground",
                            children: "tweakcn",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "space-y-2",
                    children: M.map((q) =>
                      i.jsx(
                        "button",
                        {
                          onClick: () => L(q.name),
                          className: `w-full p-3 border-2 transition-all text-left ${
                            v === q.name
                              ? "border-foreground bg-foreground text-background"
                              : "border-border hover:bg-muted"
                          }`,
                          children: i.jsxs("div", {
                            className:
                              "flex items-center justify-between gap-3",
                            children: [
                              i.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  i.jsx("div", {
                                    className:
                                      "font-bold text-sm uppercase tracking-tight mb-1",
                                    children: q.label,
                                  }),
                                  v === q.name &&
                                    i.jsx("div", {
                                      className: "text-xs opacity-80",
                                      children: "Active",
                                    }),
                                ],
                              }),
                              i.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                  i.jsx("div", {
                                    className: "w-4 h-4 border border-current",
                                    style: { backgroundColor: q.preview.bg },
                                  }),
                                  i.jsx("div", {
                                    className: "w-4 h-4 border border-current",
                                    style: { backgroundColor: q.preview.fg },
                                  }),
                                  i.jsx("div", {
                                    className: "w-4 h-4 border border-current",
                                    style: {
                                      backgroundColor: q.preview.border,
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        q.name
                      )
                    ),
                  }),
                ],
              }),
            }),
          }),
        s &&
          i.jsx("div", {
            className: "fixed inset-0 z-30 bg-foreground/20",
            onClick: () => g(!1),
          }),
      ],
    });
  },
  Bo = () => {
    const s = [
      {
        icon: i.jsx(j1, { className: "w-6 h-6" }),
        title: "Front-End",
        description: "Web Development",
      },
      {
        icon: i.jsx(ro, { className: "w-6 h-6" }),
        title: "Android",
        description: "Mobile Apps",
      },
      {
        icon: i.jsx(yo, { className: "w-6 h-6" }),
        title: "5+ Proyek",
        description: "Aplikasi & Website",
      },
    ];
    return i.jsx("section", {
      id: "about",
      className: "py-16 md:py-24 bg-background",
      children: i.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          i.jsxs("div", {
            className: "mb-12",
            children: [
              i.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                  i.jsx(ks, { className: "w-6 h-6 sm:w-8 sm:h-8" }),
                  i.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight",
                    children: "About Me",
                  }),
                ],
              }),
              i.jsx("div", { className: "h-1 w-20 bg-foreground" }),
            ],
          }),
          i.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
              i.jsx("div", {
                className: "lg:col-span-2",
                children: i.jsx(Fl, {
                  children: i.jsx(Il, {
                    className: "p-6 sm:p-8",
                    children: i.jsxs("div", {
                      className: "space-y-4 text-foreground",
                      children: [
                        i.jsxs("p", {
                          className: "text-base sm:text-lg leading-relaxed",
                          children: [
                            "Halo! Saya ",
                            i.jsx("strong", { children: "Muhamad Afriza" }),
                            ", seorang",
                            i.jsx("strong", {
                              children: " Front-End Web & Android Developer",
                            }),
                            " dari Bogor, Indonesia. Saya fokus membangun aplikasi yang modern, responsif, dan nyaman digunakan.",
                          ],
                        }),
                        i.jsx("p", {
                          className: "text-base sm:text-lg leading-relaxed",
                          children:
                            "Saya tertarik pada dunia pengembangan aplikasi sejak mulai belajar pemrograman, dan terus mengembangkan kemampuan saya melalui berbagai proyek website dan aplikasi Android.",
                        }),
                        i.jsxs("div", {
                          className:
                            "bg-muted border-2 border-border p-4 sm:p-6",
                          children: [
                            i.jsx("h3", {
                              className:
                                "font-bold text-lg mb-3 uppercase tracking-tight",
                              children: "Yang Saya Kerjakan:",
                            }),
                            i.jsxs("ul", {
                              className: "space-y-2 text-sm sm:text-base",
                              children: [
                                i.jsxs("li", {
                                  className: "flex items-start gap-2",
                                  children: [
                                    i.jsx("span", {
                                      className: "text-foreground mt-1",
                                      children: "▪",
                                    }),
                                    i.jsx("span", {
                                      children:
                                        "Membuat tampilan web yang responsif dengan React & Tailwind",
                                    }),
                                  ],
                                }),
                                i.jsxs("li", {
                                  className: "flex items-start gap-2",
                                  children: [
                                    i.jsx("span", {
                                      className: "text-foreground mt-1",
                                      children: "▪",
                                    }),
                                    i.jsx("span", {
                                      children:
                                        "Mengembangkan aplikasi Android menggunakan Flutter",
                                    }),
                                  ],
                                }),
                                i.jsxs("li", {
                                  className: "flex items-start gap-2",
                                  children: [
                                    i.jsx("span", {
                                      className: "text-foreground mt-1",
                                      children: "▪",
                                    }),
                                    i.jsx("span", {
                                      children:
                                        "Integrasi API untuk kebutuhan aplikasi modern",
                                    }),
                                  ],
                                }),
                                i.jsxs("li", {
                                  className: "flex items-start gap-2",
                                  children: [
                                    i.jsx("span", {
                                      className: "text-foreground mt-1",
                                      children: "▪",
                                    }),
                                    i.jsx("span", {
                                      children:
                                        "Implementasi UI/UX dengan fokus pada detail dan pengalaman pengguna",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        i.jsx("p", {
                          className: "text-base sm:text-lg leading-relaxed",
                          children:
                            "Di luar pengembangan aplikasi, saya senang mempelajari teknologi baru untuk meningkatkan kemampuan saya.",
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              i.jsxs("div", {
                className: "space-y-6 hidden lg:block",
                children: [
                  i.jsx(Fl, {
                    children: i.jsxs(Il, {
                      className: "p-6 flex flex-col items-center text-center",
                      children: [
                        i.jsx(Ks, {
                          fallback: "MA",
                          size: "xl",
                          className: "mb-4",
                          src: "https://yt3.googleusercontent.com/ytc/AIdro_lLSl4JaVX1V--hMrKZLV4hiArlwhYAK32XJg5KXJpN2LE=s160-c-k-c0x00ffffff-no-rj",
                        }),
                        i.jsx("h3", {
                          className:
                            "font-bold text-lg uppercase tracking-tight mb-2",
                          children: "Muhamad Afriza",
                        }),
                        i.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Front-End Web & Android Developer",
                        }),
                      ],
                    }),
                  }),
                  s.map((g, v) =>
                    i.jsx(
                      Fl,
                      {
                        className: "hover:bg-muted transition-colors",
                        children: i.jsx(Il, {
                          className: "p-6",
                          children: i.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              i.jsx("div", {
                                className:
                                  "p-3 bg-foreground text-background border-2 border-border",
                                children: g.icon,
                              }),
                              i.jsxs("div", {
                                children: [
                                  i.jsx("h4", {
                                    className:
                                      "font-bold text-lg uppercase tracking-tight",
                                    children: g.title,
                                  }),
                                  i.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: g.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      },
                      v
                    )
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  qo = () => {
    const s = [
        {
          icon: i.jsx(Ca, { className: "w-5 h-5" }),
          label: "Email 1",
          value: "afriza939@gmail.com",
          href: "mailto:afriza939@gmail.com",
        },
        {
          icon: i.jsx(Ca, { className: "w-5 h-5" }),
          label: "Email 2",
          value: "rzxdeveloper@gmail.com",
          href: "mailto:rzxdeveloper@gmail.com",
        },
        {
          icon: i.jsx(no, { className: "w-5 h-5" }),
          label: "Location",
          value: "Bogor, Indonesia",
        },
      ],
      g = [
        {
          icon: i.jsx(Fu, { className: "w-5 h-5" }),
          label: "GitHub",
          url: "https://github.com/afrzxd",
        },
        {
          icon: i.jsx(T1, { className: "w-5 h-5" }),
          label: "LinkedIn",
          url: "https://linkedin.com/in/muhamad-afriza",
        },
        {
          icon: i.jsx(A1, { className: "w-5 h-5" }),
          label: "Instagram",
          url: "https://instagram.com/afrzxd",
        },
      ];
    return i.jsx("section", {
      id: "contact",
      className: "py-16 md:py-24 bg-muted",
      children: i.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          i.jsxs("div", {
            className: "mb-14 text-center",
            children: [
              i.jsx("h2", {
                className: "text-4xl font-bold uppercase tracking-tight",
                children: "Contact",
              }),
              i.jsx("p", {
                className: "text-muted-foreground mt-3 max-w-xl mx-auto",
                children:
                  "Feel free to reach out for collaborations or opportunities.",
              }),
            ],
          }),
          i.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
            children: [
              i.jsx(Fl, {
                children: i.jsxs(Il, {
                  className: "p-8 space-y-6",
                  children: [
                    i.jsx("h3", {
                      className: "text-lg font-bold uppercase tracking-tight",
                      children: "Contact Info",
                    }),
                    s.map((v, r) =>
                      i.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-4",
                          children: [
                            i.jsx("div", {
                              className:
                                "p-3 border-2 border-border rounded-xl",
                              children: v.icon,
                            }),
                            i.jsxs("div", {
                              children: [
                                i.jsx("p", {
                                  className:
                                    "text-xs uppercase text-muted-foreground font-bold",
                                  children: v.label,
                                }),
                                v.href
                                  ? i.jsx("a", {
                                      href: v.href,
                                      className:
                                        "font-semibold hover:underline",
                                      children: v.value,
                                    })
                                  : i.jsx("p", {
                                      className: "font-semibold",
                                      children: v.value,
                                    }),
                              ],
                            }),
                          ],
                        },
                        r
                      )
                    ),
                  ],
                }),
              }),
              i.jsxs("div", {
                className: "space-y-6",
                children: [
                  i.jsx(Fl, {
                    children: i.jsxs(Il, {
                      className: "p-8 text-center space-y-4",
                      children: [
                        i.jsx("h3", {
                          className:
                            "text-lg font-bold uppercase tracking-tight",
                          children: "Send a Message",
                        }),
                        i.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Click below to email me directly.",
                        }),
                        i.jsxs("a", {
                          href: "mailto:afriza939@gmail.com",
                          className:
                            "inline-flex w-full items-center justify-center gap-2 px-6 py-3 border-2 border-foreground font-bold uppercase tracking-tight hover:bg-foreground hover:text-background transition",
                          children: [
                            i.jsx(Ca, { className: "w-4 h-4" }),
                            "Send Email",
                          ],
                        }),
                      ],
                    }),
                  }),
                  i.jsx(Fl, {
                    children: i.jsxs(Il, {
                      className: "p-8 space-y-3",
                      children: [
                        i.jsx("h3", {
                          className:
                            "text-lg font-bold uppercase tracking-tight",
                          children: "Social Links",
                        }),
                        g.map((v, r) =>
                          i.jsxs(
                            "a",
                            {
                              href: v.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "flex items-center gap-3 p-3 border-2 border-border rounded-xl hover:bg-foreground hover:text-background transition",
                              children: [
                                v.icon,
                                i.jsx("span", {
                                  className: "font-bold uppercase text-sm",
                                  children: v.label,
                                }),
                              ],
                            },
                            r
                          )
                        ),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Yo = [
    {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Indraprasta PGRI",
      period: "2021 - 2025",
      gpa: "3.66 / 4.00",
      description:
        "Focused on Software Engineering and Web Development. Graduated with honors.",
    },
  ],
  Go = [
    {
      name: "Bootcamp React JS - Web Frontend Development ",
      issuer: "SanberCode",
      year: "2026",
      credential: "60ec19ae-20a6-4d2f-9c5f-44c7775e4405",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptates!",
      technologies: ["React", "TypeScript", "Next.js", "TailwindCSS"],
      link: "https://sanbercode.com/certificate/in/60ec19ae-20a6-4d2f-9c5f-44c7775e4405",
    },
    {
      name: "Belajar Membuat Aplikasi Flutter untuk Pemula",
      issuer: "Dicoding Indonesia",
      year: "2023",
      credential: "81P2VG30QPOY",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptates!",
      technologies: ["Flutter", "Dart"],
      link: "https://www.dicoding.com/certificates/81P2VG30QPOY",
    },
    {
      name: "Belajar Membuat Aplikasi Android untuk Pemula",
      issuer: "Dicoding Indonesia",
      year: "2023",
      credential: "L4PQG487QZO1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptates!",
      technologies: ["Kotlin"],
      link: "https://www.dicoding.com/certificates/L4PQG487QZO1",
    },
  ],
  Lo = () =>
    i.jsx("section", {
      id: "education",
      className: "py-16 md:py-24 bg-background",
      children: i.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          i.jsxs("div", {
            className: "mb-12",
            children: [
              i.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                  i.jsx(Qs, { className: "w-6 h-6 sm:w-8 sm:h-8" }),
                  i.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight",
                    children: "Education & Certifications",
                  }),
                ],
              }),
              i.jsx("div", { className: "h-1 w-20 bg-foreground" }),
            ],
          }),
          i.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
            children: [
              i.jsxs("div", {
                children: [
                  i.jsxs("h3", {
                    className:
                      "text-2xl font-bold text-foreground mb-6 uppercase tracking-tight flex items-center gap-2",
                    children: [
                      i.jsx(Qs, { className: "w-6 h-6" }),
                      "Education",
                    ],
                  }),
                  i.jsx("div", {
                    className: "space-y-4",
                    children: Yo.map((s, g) =>
                      i.jsx(
                        Fl,
                        {
                          className: "hover:bg-muted transition-colors",
                          children: i.jsxs(Il, {
                            className: "p-6",
                            children: [
                              i.jsxs("div", {
                                className:
                                  "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2",
                                children: [
                                  i.jsx("h4", {
                                    className:
                                      "text-lg font-bold text-foreground uppercase tracking-tight",
                                    children: s.degree,
                                  }),
                                  s.gpa &&
                                    i.jsxs(Te, {
                                      variant: "default",
                                      children: ["GPA: ", s.gpa],
                                    }),
                                ],
                              }),
                              i.jsx("p", {
                                className:
                                  "font-bold text-muted-foreground mb-2",
                                children: s.institution,
                              }),
                              i.jsx("p", {
                                className: "text-sm text-muted-foreground mb-2",
                                children: s.period,
                              }),
                              s.description &&
                                i.jsx("p", {
                                  className:
                                    "text-sm text-muted-foreground border-l-4 border-foreground pl-3",
                                  children: s.description,
                                }),
                            ],
                          }),
                        },
                        g
                      )
                    ),
                  }),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsxs("h3", {
                    className:
                      "text-2xl font-bold text-foreground mb-6 uppercase tracking-tight flex items-center gap-2",
                    children: [
                      i.jsx(Xs, { className: "w-6 h-6" }),
                      "Certifications",
                    ],
                  }),
                  i.jsx("div", {
                    className: "space-y-4",
                    children: Go.map((s, g) =>
                      i.jsx(
                        Fl,
                        {
                          className: "hover:bg-muted transition-colors",
                          children: i.jsx(Il, {
                            className: "p-4 sm:p-6",
                            children: i.jsxs("div", {
                              className: "flex items-start gap-3",
                              children: [
                                i.jsx("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-foreground border-2 border-border flex items-center justify-center",
                                  children: i.jsx(Xs, {
                                    className:
                                      "w-4 h-4 sm:w-5 sm:h-5 text-background",
                                  }),
                                }),
                                i.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    i.jsx("h4", {
                                      className:
                                        "font-bold text-foreground text-sm sm:text-base uppercase tracking-tight mb-1",
                                      children: s.name,
                                    }),
                                    i.jsxs("p", {
                                      className:
                                        "text-xs sm:text-sm text-muted-foreground mb-1",
                                      children: [s.issuer, " • ", s.year],
                                    }),
                                    s.credential &&
                                      i.jsx("a", {
                                        href: s.link,
                                        target: "_blank",
                                        children: i.jsxs(Te, {
                                          variant: "outline",
                                          className: "text-xs gap-x-1",
                                          children: [
                                            i.jsx($4, { className: "size-4" }),
                                            s.credential,
                                          ],
                                        }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        },
                        g
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Xo = [
    {
      title: "Software Developer",
      company: "SMPIT PERMATA HATI",
      period: "Okt 2024 - Jan 2025",
      type: "academic",
      description: [
        "Mengembangkan aplikasi absensi ibadah guru berbasis mobile menggunakan Flutter",
        "Mengimplementasikan desain UI responsif untuk meningkatkan pengalaman pengguna",
        "Mengintegrasikan Firebase untuk autentikasi serta penyimpanan data secara real-time",
        "Berkolaborasi dalam tim proyek untuk menyelesaikan aplikasi sesuai kebutuhan sekolah",
      ],
      technologies: ["Flutter", "Android", "Firebase"],
    },
    {
      title: "AFGADEV",
      company: "Proyek Mandiri",
      period: "Feb 2023 - Sekarang",
      type: "freelance",
      description: [
        "Mengembangkan dan mempublikasikan aplikasi mobile berbasis Flutter melalui Google Play Console (Afgadev)",
        "Membangun aplikasi Maulid Syarobut Thohur dan Maulid Addhiya Ulami dengan total ribuan unduhan",
        "Mengimplementasikan UI aplikasi yang responsif",
        "Mengelola proses rilis aplikasi, update versi, dan maintenance melalui Play Console",
      ],
      technologies: ["Flutter", "Android"],
    },
    {
      title: "resspedia.com",
      company: "Proyek Mandiri",
      period: "Feb 2022 - Apr 2022",
      type: "freelance",
      description: [
        "Mengelola website PPOB sebagai proyek mandiri untuk layanan pembayaran digital dan top up",
        "Melakukan penyesuaian produk serta markup harga melalui integrasi API dari penyedia pihak ketiga",
        "Menangani proses transaksi dan pengisian saldo pelanggan secara manual melalui WhatsApp",
        "Mengatur operasional dasar website",
      ],
    },
  ],
  Qo = {
    work: "default",
    internship: "outline",
    freelance: "outline",
    volunteer: "success",
    academic: "outline",
  },
  Vo = {
    work: "Full-time",
    internship: "Internship",
    freelance: "Freelance",
    volunteer: "Volunteer",
    academic: "Academic Project",
  },
  Zo = () =>
    i.jsx("section", {
      id: "experience",
      className: "py-16 md:py-24 bg-muted",
      children: i.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          i.jsxs("div", {
            className: "mb-12",
            children: [
              i.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                  i.jsx(z1, { className: "w-6 h-6 sm:w-8 sm:h-8" }),
                  i.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight",
                    children: "Work Experience",
                  }),
                ],
              }),
              i.jsx("div", { className: "h-1 w-20 bg-foreground" }),
            ],
          }),
          i.jsx("div", {
            className: "space-y-6",
            children: Xo.map((s, g) =>
              i.jsx(
                Fl,
                {
                  className: "hover:bg-background transition-colors",
                  children: i.jsx(Il, {
                    className: "p-6",
                    children: i.jsxs("div", {
                      className:
                        "flex flex-col md:flex-row md:items-start gap-4",
                      children: [
                        i.jsx("div", {
                          className:
                            "hidden md:block flex-shrink-0 w-12 h-12 bg-foreground border-4 border-border",
                        }),
                        i.jsxs("div", {
                          className: "flex-1",
                          children: [
                            i.jsxs("div", {
                              className:
                                "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3",
                              children: [
                                i.jsxs("div", {
                                  children: [
                                    i.jsx("h3", {
                                      className:
                                        "text-xl font-bold text-foreground uppercase tracking-tight",
                                      children: s.title,
                                    }),
                                    i.jsx("p", {
                                      className:
                                        "text-base font-bold text-muted-foreground",
                                      children: s.company,
                                    }),
                                  ],
                                }),
                                i.jsx(Te, {
                                  variant: Qo[s.type],
                                  children: Vo[s.type],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-sm text-muted-foreground mb-4",
                              children: [
                                i.jsx(L4, { className: "w-4 h-4" }),
                                i.jsx("span", {
                                  className: "font-bold",
                                  children: s.period,
                                }),
                              ],
                            }),
                            i.jsx("ul", {
                              className: "space-y-2 mb-4 text-sm",
                              children: s.description.map((v, r) =>
                                i.jsxs(
                                  "li",
                                  {
                                    className: "flex items-start gap-2",
                                    children: [
                                      i.jsx("span", {
                                        className: "text-foreground mt-1",
                                        children: "▪",
                                      }),
                                      i.jsx("span", {
                                        className: "text-muted-foreground",
                                        children: v,
                                      }),
                                    ],
                                  },
                                  r
                                )
                              ),
                            }),
                            s.technologies &&
                              i.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: s.technologies.map((v) =>
                                  i.jsx(
                                    Te,
                                    { variant: "outline", children: v },
                                    v
                                  )
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                g
              )
            ),
          }),
        ],
      }),
    }),
  wo = () => {
    const s = new Date().getFullYear(),
      g = [
        {
          icon: i.jsx(Fu, { className: "w-5 h-5" }),
          url: "https://github.com/afrzxd",
          label: "GitHub",
        },
        {
          icon: i.jsx(T1, { className: "w-5 h-5" }),
          url: "https://linkedin.com/in/muhamad-afriza",
          label: "LinkedIn",
        },
        {
          icon: i.jsx(A1, { className: "w-5 h-5" }),
          url: "https://instagram.com/afrzxd",
          label: "Instagram",
        },
        {
          icon: i.jsx(Ca, { className: "w-5 h-5" }),
          url: "mailto:afriza939@gmail.com",
          label: "Email",
        },
      ],
      v = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      r = (E) => {
        const L = document.querySelector(E);
        L && L.scrollIntoView({ behavior: "smooth" });
      },
      M = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return i.jsx("footer", {
      className: "bg-card border-t-2 border-border",
      children: i.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          i.jsxs("div", {
            className: "py-12 grid grid-cols-1 md:grid-cols-3 gap-8",
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("h3", {
                    className:
                      "text-2xl font-bold text-foreground mb-4 uppercase tracking-tight",
                    children: "<AFRZXD/>",
                  }),
                  i.jsx("p", {
                    className: "text-sm text-muted-foreground mb-4",
                    children:
                      "Saya membangun aplikasi web modern dan aplikasi Android dengan fokus pada desain yang rapi, performa cepat, dan pengalaman pengguna yang baik.",
                  }),
                  i.jsx("div", {
                    className: "flex items-center gap-2",
                    children: g.map((E, L) =>
                      i.jsx(
                        "a",
                        {
                          href: E.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "p-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors",
                          "aria-label": E.label,
                          children: E.icon,
                        },
                        L
                      )
                    ),
                  }),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("h4", {
                    className:
                      "text-lg font-bold text-foreground mb-4 uppercase tracking-tight",
                    children: "Quick Links",
                  }),
                  i.jsx("ul", {
                    className: "space-y-2",
                    children: v.map((E, L) =>
                      i.jsx(
                        "li",
                        {
                          children: i.jsx("button", {
                            onClick: () => r(E.href),
                            className:
                              "text-sm text-muted-foreground hover:text-foreground transition-colors font-medium",
                            children: E.label,
                          }),
                        },
                        L
                      )
                    ),
                  }),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("h4", {
                    className:
                      "text-lg font-bold text-foreground mb-4 uppercase tracking-tight",
                    children: "Get In Touch",
                  }),
                  i.jsxs("ul", {
                    className: "space-y-2 text-sm text-muted-foreground",
                    children: [
                      i.jsx("li", {
                        children: i.jsx("a", {
                          href: "mailto:afriza939@gmail.com",
                          className: "hover:text-foreground transition-colors",
                          children: "afriza939@gmail.com",
                        }),
                      }),
                      i.jsx("li", {
                        children: i.jsx("a", {
                          href: "mailto:rzxdeveloper@gmail.com",
                          className: "hover:text-foreground transition-colors",
                          children: "rzxdeveloper@gmail.com",
                        }),
                      }),
                      i.jsx("li", { children: "Bogor, Indonesia" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsx("div", { className: "h-px bg-border" }),
          i.jsxs("div", {
            className:
              "py-6 flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [
              i.jsxs("p", {
                className:
                  "text-sm text-muted-foreground text-center sm:text-left",
                children: [
                  "© ",
                  s,
                  " ",
                  i.jsx("strong", { children: "Muhamad Afriza" }),
                  ". All rights reserved.",
                ],
              }),
              i.jsx("button", {
                onClick: M,
                className:
                  "px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors text-sm font-bold uppercase tracking-tight",
                children: "Back to Top ↑",
              }),
            ],
          }),
        ],
      }),
    });
  },
  ko = () => {
    const s = (g) => {
      const v = document.querySelector(g);
      v && v.scrollIntoView({ behavior: "smooth" });
    };
    return i.jsx("section", {
      id: "home",
      className:
        "min-h-screen flex items-center justify-center bg-background pt-16 md:pt-0 pb-20 md:pb-0",
      children: i.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
        children: [
          i.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            children: [
              i.jsxs("div", {
                className: "max-w-2xl",
                children: [
                  i.jsx(Te, {
                    variant: "outline",
                    className: "mb-6",
                    children: "Siap Untuk Kerja / Magang",
                  }),
                  i.jsx("h1", {
                    className:
                      "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 uppercase tracking-tight",
                    children: "Muhamad Afriza",
                  }),
                  i.jsx("div", {
                    className: "border-l-4 border-foreground pl-4 sm:pl-6 mb-6",
                    children: i.jsx("h2", {
                      className:
                        "text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground uppercase tracking-tight",
                      children: "Front-End Web & Android Developer",
                    }),
                  }),
                  i.jsx("p", {
                    className:
                      "text-base sm:text-lg md:text-xl text-muted-foreground mb-8",
                    children:
                      "Saya membangun aplikasi web modern dan aplikasi Android dengan fokus pada desain yang rapi, performa cepat, dan pengalaman pengguna yang baik.",
                  }),
                  i.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-3 mb-12",
                    children: [
                      i.jsx(Ae, {
                        size: "lg",
                        onClick: () => s("#projects"),
                        children: "Project Saya",
                      }),
                      i.jsx(Ae, {
                        size: "lg",
                        variant: "outline",
                        onClick: () => s("#contact"),
                        children: "Hubungi Saya",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      i.jsx("span", {
                        className:
                          "text-sm font-bold text-muted-foreground uppercase tracking-tight",
                        children: "Connect:",
                      }),
                      i.jsx("a", {
                        href: "https://github.com/afrzxd",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "p-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors",
                        "aria-label": "GitHub",
                        children: i.jsx(Fu, { className: "w-5 h-5" }),
                      }),
                      i.jsx("a", {
                        href: "https://www.linkedin.com/in/muhamad-afriza/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "p-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors",
                        "aria-label": "LinkedIn",
                        children: i.jsx(T1, { className: "w-5 h-5" }),
                      }),
                      i.jsx("a", {
                        href: "https://instagram.com/afrzxd",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "p-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors",
                        "aria-label": "GitHub",
                        children: i.jsx(A1, { className: "w-5 h-5" }),
                      }),
                      i.jsx("a", {
                        href: "mailto:afriza939@gmail.com",
                        className:
                          "p-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors",
                        "aria-label": "Email",
                        children: i.jsx(Ca, { className: "w-5 h-5" }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx("div", {
                className: "hidden lg:flex items-center justify-center",
                children: i.jsxs("div", {
                  className: "relative w-full max-w-md",
                  children: [
                    i.jsxs("div", {
                      className: "border-4 border-foreground bg-background p-8",
                      children: [
                        i.jsxs("div", {
                          className:
                            "flex items-center gap-2 mb-6 pb-4 border-b-2 border-border",
                          children: [
                            i.jsx(mo, { className: "w-5 h-5" }),
                            i.jsx("span", {
                              className:
                                "font-bold uppercase tracking-tight text-sm",
                              children: "~/developer",
                            }),
                          ],
                        }),
                        i.jsxs("div", {
                          className: "space-y-3 font-mono text-sm",
                          children: [
                            i.jsxs("div", {
                              className: "flex items-start gap-2",
                              children: [
                                i.jsx("span", {
                                  className: "text-muted-foreground",
                                  children: "01",
                                }),
                                i.jsxs("span", {
                                  className: "text-foreground",
                                  children: [
                                    "const ",
                                    i.jsx("span", {
                                      className: "font-bold",
                                      children: "developer",
                                    }),
                                    " = ",
                                    "{",
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "flex items-start gap-2 pl-6",
                              children: [
                                i.jsx("span", {
                                  className: "text-muted-foreground",
                                  children: "02",
                                }),
                                i.jsxs("span", {
                                  className: "text-foreground",
                                  children: [
                                    "name: ",
                                    i.jsx("span", {
                                      className: "font-bold",
                                      children: '"Afriza"',
                                    }),
                                    ",",
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "flex items-start gap-2 pl-6",
                              children: [
                                i.jsx("span", {
                                  className: "text-muted-foreground",
                                  children: "03",
                                }),
                                i.jsxs("span", {
                                  className: "text-foreground",
                                  children: [
                                    "role:",
                                    " ",
                                    i.jsx("span", {
                                      className: "font-bold",
                                      children: '"Frontend Web & Android"',
                                    }),
                                    ",",
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "flex items-start gap-2 pl-6",
                              children: [
                                i.jsx("span", {
                                  className: "text-muted-foreground",
                                  children: "04",
                                }),
                                i.jsxs("span", {
                                  className: "text-foreground",
                                  children: [
                                    "applyJob: ",
                                    i.jsx("span", {
                                      className: "font-bold",
                                      children: "true",
                                    }),
                                    ",",
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "flex items-start gap-2",
                              children: [
                                i.jsx("span", {
                                  className: "text-muted-foreground",
                                  children: "05",
                                }),
                                i.jsx("span", {
                                  className: "text-foreground",
                                  children: "}",
                                }),
                              ],
                            }),
                          ],
                        }),
                        i.jsx("div", {
                          className: "mt-8 pt-6 border-t-2 border-border",
                          children: i.jsxs("div", {
                            className:
                              "flex items-center justify-between text-xs uppercase tracking-tight",
                            children: [
                              i.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  i.jsx(k4, { className: "w-4 h-4" }),
                                  i.jsx("span", {
                                    className: "font-bold",
                                    children: "Building...",
                                  }),
                                ],
                              }),
                              i.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                  i.jsx("div", {
                                    className:
                                      "w-2 h-2 bg-foreground animate-pulse",
                                  }),
                                  i.jsx("div", {
                                    className:
                                      "w-2 h-2 bg-foreground animate-pulse delay-75",
                                  }),
                                  i.jsx("div", {
                                    className:
                                      "w-2 h-2 bg-foreground animate-pulse delay-150",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    i.jsx("div", {
                      className:
                        "absolute -top-4 -right-4 w-24 h-24 border-4 border-foreground bg-muted",
                    }),
                    i.jsx("div", {
                      className:
                        "absolute -bottom-4 -left-4 w-16 h-16 bg-foreground",
                    }),
                    i.jsxs("div", {
                      className:
                        "absolute -right-8 top-1/4 bg-foreground text-background p-4 border-2 border-foreground hidden xl:block",
                      children: [
                        i.jsx("div", {
                          className: "text-3xl font-bold",
                          children: "1+",
                        }),
                        i.jsx("div", {
                          className: "text-xs uppercase tracking-tight",
                          children: "Years",
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className:
                        "absolute -left-8 bottom-1/4 bg-background border-4 border-foreground p-4 hidden xl:block",
                      children: [
                        i.jsx("div", {
                          className: "text-3xl font-bold",
                          children: "5+",
                        }),
                        i.jsx("div", {
                          className: "text-xs uppercase tracking-tight",
                          children: "Projects",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          i.jsx("button", {
            onClick: () => s("#about"),
            className:
              "md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",
            "aria-label": "Scroll down",
            children: i.jsx(B4, { className: "w-6 h-6 text-muted-foreground" }),
          }),
        ],
      }),
    });
  },
  Ju = [
    { label: "Home", href: "#home", icon: i.jsx(P4, { className: "w-5 h-5" }) },
    {
      label: "About",
      href: "#about",
      icon: i.jsx(ks, { className: "w-5 h-5" }),
    },
    {
      label: "Skills",
      href: "#skills",
      icon: i.jsx(j1, { className: "w-5 h-5" }),
    },
    {
      label: "Projects",
      href: "#projects",
      icon: i.jsx(z1, { className: "w-5 h-5" }),
    },
    {
      label: "Contact",
      href: "#contact",
      icon: i.jsx(Ca, { className: "w-5 h-5" }),
    },
  ],
  Ko = () => {
    const [s, g] = k.useState(!1),
      [v, r] = k.useState("home");
    k.useEffect(() => {
      const E = () => {
        const L = Ju.map((_) => _.href.replace("#", "")),
          q = window.scrollY + 100;
        for (const _ of L) {
          const j = document.getElementById(_);
          if (j) {
            const Z = j.offsetTop,
              C = Z + j.offsetHeight;
            if (q >= Z && q < C) {
              r(_);
              break;
            }
          }
        }
      };
      return (
        window.addEventListener("scroll", E),
        () => window.removeEventListener("scroll", E)
      );
    }, []);
    const M = (E) => {
      const L = document.querySelector(E);
      L && (L.scrollIntoView({ behavior: "smooth" }), g(!1));
    };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx("nav", {
          className:
            "hidden md:block fixed top-0 left-0 right-0 z-50 bg-card border-b-2 border-border",
          children: i.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: i.jsxs("div", {
              className: "flex items-center justify-between h-16",
              children: [
                i.jsx("div", {
                  className: "flex-shrink-0",
                  children: i.jsx("h1", {
                    className:
                      "text-xl font-bold text-foreground uppercase tracking-tight",
                    children: "<AFRZXD/>",
                  }),
                }),
                i.jsx("div", {
                  className: "flex items-center gap-1",
                  children: Ju.map((E) =>
                    i.jsx(
                      "button",
                      {
                        onClick: () => M(E.href),
                        className: `px-4 py-2 text-sm font-bold uppercase tracking-tight transition-colors ${
                          v === E.href.replace("#", "")
                            ? "bg-foreground text-background"
                            : "text-foreground hover:bg-muted"
                        }`,
                        children: E.label,
                      },
                      E.label
                    )
                  ),
                }),
                i.jsx("div", {
                  children: i.jsx(Ae, {
                    size: "sm",
                    onClick: () => M("#contact"),
                    children: "Hire Me",
                  }),
                }),
              ],
            }),
          }),
        }),
        i.jsxs("div", {
          className:
            "md:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b-2 border-border",
          children: [
            i.jsxs("div", {
              className: "flex items-center justify-between h-14 px-4",
              children: [
                i.jsx("h1", {
                  className:
                    "text-lg font-bold text-foreground uppercase tracking-tight",
                  children: "<AFRZXD/>",
                }),
                i.jsx("button", {
                  onClick: () => g(!s),
                  className: "p-2 hover:bg-muted transition-colors",
                  children: s
                    ? i.jsx(E1, { className: "w-6 h-6" })
                    : i.jsx(co, { className: "w-6 h-6" }),
                }),
              ],
            }),
            s &&
              i.jsx("div", {
                className: "border-t-2 border-border bg-card",
                children: i.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    Ju.map((E) =>
                      i.jsx(
                        "button",
                        {
                          onClick: () => M(E.href),
                          className: `px-4 py-3 text-sm font-bold uppercase tracking-tight transition-colors border-b-2 border-border text-left ${
                            v === E.href.replace("#", "")
                              ? "bg-foreground text-background"
                              : "text-foreground hover:bg-muted"
                          }`,
                          children: E.label,
                        },
                        E.label
                      )
                    ),
                    i.jsx("div", {
                      className: "p-4",
                      children: i.jsx(Ae, {
                        className: "w-full",
                        onClick: () => M("#contact"),
                        children: "Hire Me",
                      }),
                    }),
                  ],
                }),
              }),
          ],
        }),
        i.jsx("nav", {
          className:
            "md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t-2 border-border",
          children: i.jsx("div", {
            className: "flex items-center justify-around",
            children: Ju.map((E) =>
              i.jsxs(
                "button",
                {
                  onClick: () => M(E.href),
                  className: `flex flex-col items-center justify-center py-2 px-3 flex-1 transition-colors border-r-2 border-border last:border-r-0 ${
                    v === E.href.replace("#", "")
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-muted"
                  }`,
                  children: [
                    E.icon,
                    i.jsx("span", {
                      className: "text-[10px] font-bold uppercase mt-1",
                      children: E.label,
                    }),
                  ],
                },
                E.label
              )
            ),
          }),
        }),
      ],
    });
  },
  Jo = [
    {
      title: "Mari Kerja - SanberCode",
      description:
        "landing page yang menampilkan lowongan kerja dari REST API, dilengkapi fitur search, filter, dan sistem autentikasi berbasis token (register, login, logout).",
      tags: ["React"],
      demoUrl: "https://marikerja-sanbercode-afriza.netlify.app/",
      featured: "Website",
    },
    {
      title: "Maulid Syarobut Thohur",
      description: "Tersedia di Play Store",
      tags: ["Flutter", "Json"],
      demoUrl:
        "https://play.google.com/store/apps/details?id=com.afgadev.syarobutthohur&hl=id",
      featured: "Android",
    },
    {
      title: "Maulid Addhiya Ulami",
      description: "Tersedia di Play Store",
      tags: ["Flutter", "Firebase"],
      demoUrl:
        "https://play.google.com/store/apps/details?id=com.afgadev.addhiyaulami&hl=id",
      featured: "Android",
    },
    {
      title: "Meal App - Submission Dicoding",
      description:
        "Aplikasi memiliki beberapa halaman dengan navigasi, menggunakan kombinasi Stateless dan Stateful Widget, serta mengambil data dari API eksternal menggunakan package",
      tags: ["Flutter"],
      githubUrl: "https://github.com/afrzxd/meal-app",
      featured: "Android",
    },
    {
      title: "WhoLang - Submission Dicoding",
      description:
        "Aplikasi menampilkan data dalam format list dan detail, memiliki halaman about, serta mendukung fitur share konten dan email intent.",
      tags: ["Kotlin"],
      githubUrl: "https://github.com/afrzxd/Who-Lang",
      featured: "Android",
    },
  ],
  $o = () =>
    i.jsx("section", {
      id: "projects",
      className: "py-16 md:py-24 bg-background",
      children: i.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          i.jsxs("div", {
            className: "mb-12",
            children: [
              i.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                  i.jsx(z1, { className: "w-6 h-6 sm:w-8 sm:h-8" }),
                  i.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight",
                    children: "Featured Projects",
                  }),
                ],
              }),
              i.jsx("div", { className: "h-1 w-20 bg-foreground" }),
              i.jsx("p", {
                className: "text-muted-foreground mt-4 text-sm sm:text-base",
                children:
                  "Ini beberapa proyek terbaru saya yang mencerminkan kemampuan dan pengalaman saya.",
              }),
            ],
          }),
          i.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: Jo.map((s, g) => {
              const v = !!s.demoUrl,
                r = !!s.githubUrl,
                M = Number(v) + Number(r);
              return i.jsx(
                Fl,
                {
                  className: `hover:bg-muted transition-colors ${
                    s.featured ? "border-4" : ""
                  }`,
                  children: i.jsxs(Il, {
                    className: "p-6 h-full flex flex-col",
                    children: [
                      s.featured &&
                        i.jsx(Te, {
                          variant: "default",
                          className: "mb-4 w-fit",
                          children: s.featured,
                        }),
                      i.jsx("h3", {
                        className:
                          "text-xl font-bold text-foreground mb-3 uppercase tracking-tight",
                        children: s.title,
                      }),
                      i.jsx("p", {
                        className:
                          "text-sm text-muted-foreground mb-4 flex-grow",
                        children: s.description,
                      }),
                      i.jsx("div", {
                        className: "flex flex-wrap gap-2 mb-4",
                        children: s.tags.map((E) =>
                          i.jsx(Te, { variant: "outline", children: E }, E)
                        ),
                      }),
                      i.jsx("div", { className: "h-px bg-border mb-4" }),
                      i.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          v &&
                            i.jsx(Ae, {
                              variant: "default",
                              size: "sm",
                              className: M === 1 ? "w-full" : "flex-1",
                              onClick: () => window.open(s.demoUrl, "_blank"),
                              children: "Demo",
                            }),
                          r &&
                            i.jsx(Ae, {
                              variant: "outline",
                              size: "sm",
                              className: M === 1 ? "w-full" : "flex-1",
                              onClick: () => window.open(s.githubUrl, "_blank"),
                              children: "Code",
                            }),
                        ],
                      }),
                    ],
                  }),
                },
                g
              );
            }),
          }),
          i.jsx("div", {
            className: "mt-12 text-center",
            children: i.jsxs(Ae, {
              variant: "outline",
              size: "lg",
              onClick: () => window.open("https://github.com", "_blank"),
              children: [
                i.jsx(Fu, { className: "w-5 h-5 mr-2" }),
                "View All Projects on GitHub",
              ],
            }),
          }),
        ],
      }),
    });
var Js = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Vs = k.createContext && k.createContext(Js),
  Wo = ["attr", "size", "title"];
function Fo(s, g) {
  if (s == null) return {};
  var v = Io(s, g),
    r,
    M;
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(s);
    for (M = 0; M < E.length; M++)
      (r = E[M]),
        !(g.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(s, r) &&
          (v[r] = s[r]);
  }
  return v;
}
function Io(s, g) {
  if (s == null) return {};
  var v = {};
  for (var r in s)
    if (Object.prototype.hasOwnProperty.call(s, r)) {
      if (g.indexOf(r) >= 0) continue;
      v[r] = s[r];
    }
  return v;
}
function $u() {
  return (
    ($u = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var g = 1; g < arguments.length; g++) {
            var v = arguments[g];
            for (var r in v)
              Object.prototype.hasOwnProperty.call(v, r) && (s[r] = v[r]);
          }
          return s;
        }),
    $u.apply(this, arguments)
  );
}
function Zs(s, g) {
  var v = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(s);
    g &&
      (r = r.filter(function (M) {
        return Object.getOwnPropertyDescriptor(s, M).enumerable;
      })),
      v.push.apply(v, r);
  }
  return v;
}
function Wu(s) {
  for (var g = 1; g < arguments.length; g++) {
    var v = arguments[g] != null ? arguments[g] : {};
    g % 2
      ? Zs(Object(v), !0).forEach(function (r) {
          Po(s, r, v[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(v))
      : Zs(Object(v)).forEach(function (r) {
          Object.defineProperty(s, r, Object.getOwnPropertyDescriptor(v, r));
        });
  }
  return s;
}
function Po(s, g, v) {
  return (
    (g = ld(g)),
    g in s
      ? Object.defineProperty(s, g, {
          value: v,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[g] = v),
    s
  );
}
function ld(s) {
  var g = td(s, "string");
  return typeof g == "symbol" ? g : g + "";
}
function td(s, g) {
  if (typeof s != "object" || !s) return s;
  var v = s[Symbol.toPrimitive];
  if (v !== void 0) {
    var r = v.call(s, g);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (g === "string" ? String : Number)(s);
}
function $s(s) {
  return (
    s &&
    s.map((g, v) => k.createElement(g.tag, Wu({ key: v }, g.attr), $s(g.child)))
  );
}
function ml(s) {
  return (g) =>
    k.createElement(ed, $u({ attr: Wu({}, s.attr) }, g), $s(s.child));
}
function ed(s) {
  var g = (v) => {
    var { attr: r, size: M, title: E } = s,
      L = Fo(s, Wo),
      q = M || v.size || "1em",
      _;
    return (
      v.className && (_ = v.className),
      s.className && (_ = (_ ? _ + " " : "") + s.className),
      k.createElement(
        "svg",
        $u(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          v.attr,
          r,
          L,
          {
            className: _,
            style: Wu(Wu({ color: s.color || v.color }, v.style), s.style),
            height: q,
            width: q,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        E && k.createElement("title", null, E),
        s.children
      )
    );
  };
  return Vs !== void 0
    ? k.createElement(Vs.Consumer, null, (v) => g(v))
    : g(Js);
}
function ad(s) {
  return ml({
    attr: { version: "1.1", viewBox: "0 0 32 32" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6.802 20.283c0 1.23-0.857 2.237-1.904 2.237s-1.905-1.006-1.905-2.237v-7.321c0-1.23 0.857-2.237 1.905-2.237s1.904 1.007 1.904 2.237v7.321zM29.007 20.283c0 1.23-0.857 2.237-1.905 2.237s-1.905-1.006-1.905-2.237v-7.321c0-1.23 0.857-2.237 1.905-2.237s1.905 1.007 1.905 2.237v7.321zM20.164 3.649l1.222-2.193c0.1-0.179 0.070-0.388-0.065-0.463s-0.329 0.009-0.428 0.188l-1.25 2.244c-1.115-0.439-2.364-0.684-3.684-0.684-1.33 0-2.588 0.25-3.71 0.695l-1.256-2.254c-0.1-0.179-0.293-0.264-0.428-0.188s-0.165 0.284-0.065 0.463l1.228 2.204c-2.555 1.2-4.276 3.453-4.276 6.035 0 0.262 0.019 0.521 0.053 0.776h16.909c0.035-0.255 0.053-0.513 0.053-0.776 0-2.59-1.732-4.849-4.301-6.046zM12.097 7.477c-0.411 0-0.744-0.333-0.744-0.744s0.333-0.744 0.744-0.744 0.744 0.333 0.744 0.744c0 0.411-0.333 0.744-0.744 0.744zM19.861 7.477c-0.411 0-0.744-0.333-0.744-0.744s0.333-0.744 0.744-0.744 0.744 0.333 0.744 0.744c0 0.411-0.333 0.744-0.744 0.744zM7.45 11.211v12.471h0.007c0.087 1.053 1.056 1.89 2.23 1.89h12.541c1.173 0 2.142-0.837 2.23-1.89h0.007v-12.471h-17.014zM14.74 25.51v3.858c0 1.23-0.857 2.237-1.905 2.237s-1.904-1.007-1.904-2.237v-3.855zM21.088 25.508v3.86c0 1.23-0.857 2.237-1.905 2.237s-1.905-1.007-1.905-2.237v-3.86z",
        },
        child: [],
      },
    ],
  })(s);
}
function nd(s) {
  return ml({
    attr: { version: "1.1", viewBox: "0 0 32 32" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M26.501 8.255c-0.056-0.023-0.113-0.045-0.17-0.067-2.942-1.16-5.896-2.29-8.819-3.498-0.922-0.381-1.709-0.423-2.658-0.035-3.253 1.328-6.546 2.559-9.827 3.817-0.233 0.089-0.31 0.203-0.301 0.451 0.036 1.010 0.014 2.020 0.063 3.031 0.064 1.325 0.024 2.654 0.070 3.981 0.061 1.752 0.019 3.507 0.1 5.26 0 0.427 0.014 0.854-0.005 1.279-0.011 0.254 0.073 0.384 0.308 0.499 3.477 1.702 6.948 3.415 10.417 5.132 0.207 0.102 0.373 0.116 0.577-0.001 0.294-0.17 0.604-0.314 0.91-0.464 3.112-1.532 6.225-3.064 9.339-4.592 0.189-0.092 0.308-0.181 0.314-0.425 0.061-2.166 0.14-4.331 0.206-6.496 0.040-1.302 0.030-2.607 0.108-3.907 0.057-0.948 0.048-1.897 0.095-2.845 0.050-1.009 0.223-0.742-0.728-1.119zM15.263 25.898c0 0.295-0.038 0.359-0.33 0.213-2.745-1.367-5.494-2.724-8.247-4.075-0.207-0.102-0.269-0.224-0.271-0.447-0.020-1.874-0.047-3.749-0.083-5.623-0.034-1.764-0.082-3.527-0.123-5.291-0.003-0.133-0-0.266-0-0.463 1.144 0.495 2.226 0.96 3.305 1.43 1.828 0.797 3.654 1.6 5.485 2.391 0.209 0.090 0.285 0.198 0.284 0.43-0.014 3.811-0.020 7.623-0.019 11.434zM15.819 12.808c-2.706-1.186-5.415-2.364-8.123-3.546-0.073-0.032-0.17-0.040-0.213-0.171 2.84-1.092 5.665-2.178 8.487-3.268 0.137-0.053 0.253-0.043 0.385 0.009 2.67 1.050 5.34 2.096 8.011 3.143 0.055 0.022 0.119 0.035 0.148 0.134-0.679 0.304-1.361 0.611-2.045 0.915-2.067 0.918-4.134 1.834-6.201 2.752-0.148 0.066-0.279 0.107-0.448 0.032zM25.722 10.592c-0.051 1.885-0.103 3.771-0.161 5.656-0.039 1.277-0.088 2.553-0.134 3.829-0.020 0.559-0.058 1.118-0.058 1.677 0 0.241-0.145 0.306-0.311 0.388-2.37 1.165-4.739 2.331-7.109 3.496-0.39 0.192-0.782 0.383-1.228 0.601 0-0.369-0-0.661 0-0.952 0.006-3.569 0.016-7.137 0.010-10.706-0-0.317 0.101-0.458 0.394-0.587 2.74-1.202 5.472-2.424 8.205-3.642 0.398-0.177 0.404-0.181 0.392 0.239z",
        },
        child: [],
      },
    ],
  })(s);
}
function ud(s) {
  return ml({
    attr: { version: "1.1", viewBox: "0 0 32 32" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M17.319 9.414c-2.444 2.444-4.5 4.435-4.597 4.435-0.081 0-1.424-0.987-2.962-2.185l-2.784-2.185-2.266 1.133v11.331l2.266 1.133 2.574-2.007c1.425-1.117 2.736-2.12 2.914-2.234 0.324-0.194 0.647 0.097 4.84 4.274l4.484 4.484 2.752-1.117 2.752-1.101v-18.195l-2.104-0.842c-1.149-0.47-2.396-0.955-2.768-1.101l-0.664-0.259-4.435 4.435zM21.706 16.278c0 2.493-0.032 4.532-0.097 4.532-0.227 0-5.73-4.435-5.682-4.581 0.049-0.178 5.471-4.468 5.666-4.468 0.065-0.016 0.114 2.023 0.114 4.516zM8.837 14.659l1.619 1.619-1.619 1.619c-0.89 0.89-1.667 1.619-1.732 1.619-0.081 0-0.13-1.457-0.13-3.237s0.048-3.238 0.13-3.238c0.065 0 0.842 0.729 1.732 1.619z",
        },
        child: [],
      },
    ],
  })(s);
}
function cd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
        },
        child: [],
      },
    ],
  })(s);
}
function id(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z",
        },
        child: [],
      },
    ],
  })(s);
}
function fd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z",
        },
        child: [],
      },
    ],
  })(s);
}
function sd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z",
        },
        child: [],
      },
    ],
  })(s);
}
function rd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
        },
        child: [],
      },
    ],
  })(s);
}
function od(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z",
        },
        child: [],
      },
    ],
  })(s);
}
function dd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z",
        },
        child: [],
      },
    ],
  })(s);
}
function md(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187",
        },
        child: [],
      },
    ],
  })(s);
}
function hd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
        },
        child: [],
      },
    ],
  })(s);
}
function gd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
        },
        child: [],
      },
    ],
  })(s);
}
function vd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [{ tag: "path", attr: { d: "M24 24H0V0h24L12 12Z" }, child: [] }],
  })(s);
}
function yd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z",
        },
        child: [],
      },
    ],
  })(s);
}
function bd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z",
        },
        child: [],
      },
    ],
  })(s);
}
function xd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z",
        },
        child: [],
      },
    ],
  })(s);
}
function pd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z",
        },
        child: [],
      },
    ],
  })(s);
}
function Sd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
        },
        child: [],
      },
    ],
  })(s);
}
function Nd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z",
        },
        child: [],
      },
    ],
  })(s);
}
function zd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z",
        },
        child: [],
      },
    ],
  })(s);
}
function jd(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
        },
        child: [],
      },
    ],
  })(s);
}
function Ad(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
        },
        child: [],
      },
    ],
  })(s);
}
function Td(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
        },
        child: [],
      },
    ],
  })(s);
}
function Ed(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z",
        },
        child: [],
      },
    ],
  })(s);
}
function Md(s) {
  return ml({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z",
        },
        child: [],
      },
    ],
  })(s);
}
const _d = [
    { name: "React", icon: jd, category: "Frontend" },
    { name: "Flutter", icon: dd, category: "Frontend" },
    { name: "Kotlin", icon: vd, category: "Frontend" },
    { name: "Dart", icon: id, category: "Frontend" },
    { name: "TypeScript", icon: Td, category: "Frontend" },
    { name: "Next.js", icon: xd, category: "Frontend" },
    { name: "Tailwind", icon: Ad, category: "Frontend" },
    { name: "HTML5", icon: hd, category: "Frontend" },
    { name: "CSS3", icon: cd, category: "Frontend" },
    { name: "JavaScript", icon: gd, category: "Frontend" },
    { name: "Laravel", icon: yd, category: "Backend" },
    { name: "Node.js", icon: pd, category: "Backend" },
    { name: "Express", icon: sd, category: "Backend" },
    { name: "PHP", icon: Sd, category: "Backend" },
    { name: "Python", icon: zd, category: "Backend" },
    { name: "MySQL", icon: bd, category: "Database" },
    { name: "PostgreSQL", icon: Nd, category: "Database" },
    { name: "Firebase", icon: od, category: "Database" },
    { name: "Git", icon: md, category: "Tools" },
    { name: "Docker", icon: fd, category: "Tools" },
    { name: "VS Code", icon: ud, category: "Tools" },
    { name: "Android Studio", icon: ad, category: "Tools" },
    { name: "Netbeans", icon: nd, category: "Tools" },
  ],
  Od = [
    { name: "Vue.js", icon: Md },
    { name: "Vite", icon: Ed },
    { name: "Figma", icon: rd },
  ],
  Dd = () => {
    const s = ["Frontend", "Backend", "Database", "Tools"];
    return i.jsx("section", {
      id: "skills",
      className: "py-16 md:py-24 bg-muted",
      children: i.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          i.jsxs("div", {
            className: "mb-12",
            children: [
              i.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                  i.jsx(j1, { className: "w-6 h-6 sm:w-8 sm:h-8" }),
                  i.jsx("h2", {
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight",
                    children: "Skills & Tech Stack",
                  }),
                ],
              }),
              i.jsx("div", { className: "h-1 w-20 bg-foreground" }),
            ],
          }),
          i.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: s.map((g) =>
              i.jsx(
                Fl,
                {
                  children: i.jsxs(Il, {
                    className: "p-6",
                    children: [
                      i.jsx("h3", {
                        className:
                          "text-xl font-bold text-foreground mb-6 uppercase tracking-tight border-b-2 border-border pb-3",
                        children: g,
                      }),
                      i.jsx("div", {
                        className: "grid grid-cols-3 sm:grid-cols-4 gap-3",
                        children: _d
                          .filter((v) => v.category === g)
                          .map((v) => {
                            const r = v.icon;
                            return i.jsxs(
                              "div",
                              {
                                className:
                                  "flex flex-col items-center justify-center p-3 border-2 border-border hover:bg-foreground hover:text-background transition-colors group",
                                title: v.name,
                                children: [
                                  i.jsx(r, {
                                    className:
                                      "w-8 h-8 mb-2 group-hover:scale-110 transition-transform",
                                  }),
                                  i.jsx("span", {
                                    className:
                                      "font-bold text-[10px] sm:text-xs text-center uppercase tracking-tight",
                                    children: v.name,
                                  }),
                                ],
                              },
                              v.name
                            );
                          }),
                      }),
                    ],
                  }),
                },
                g
              )
            ),
          }),
          i.jsx(Fl, {
            className: "mt-6",
            children: i.jsxs(Il, {
              className: "p-6",
              children: [
                i.jsx("h3", {
                  className:
                    "text-lg font-bold text-foreground mb-4 uppercase tracking-tight",
                  children: "Also Familiar With:",
                }),
                i.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: Od.map((g) => {
                    const v = g.icon;
                    return i.jsxs(
                      "div",
                      {
                        className:
                          "inline-flex items-center gap-2 px-3 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors",
                        children: [
                          i.jsx(v, { className: "w-4 h-4" }),
                          i.jsx("span", {
                            className:
                              "text-xs font-bold uppercase tracking-tight",
                            children: g.name,
                          }),
                        ],
                      },
                      g.name
                    );
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  };
function Ud() {
  return i.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      i.jsx(Ko, {}),
      i.jsxs("main", {
        children: [
          i.jsx(ko, {}),
          i.jsx(Bo, {}),
          i.jsx(Dd, {}),
          i.jsx($o, {}),
          i.jsx(Zo, {}),
          i.jsx(Lo, {}),
          i.jsx(qo, {}),
        ],
      }),
      i.jsx(wo, {}),
      i.jsx(Ro, {}),
    ],
  });
}
function Cd() {
  return i.jsx(i.Fragment, { children: i.jsx(Ud, {}) });
}
const Hd = document.getElementById("root");
_4.createRoot(Hd).render(i.jsx(Ke.StrictMode, { children: i.jsx(Cd, {}) }));

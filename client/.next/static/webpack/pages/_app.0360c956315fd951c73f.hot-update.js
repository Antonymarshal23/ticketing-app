self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_node_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_node_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_node_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_node_Ticketing_dev_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_node_Ticketing_dev_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\_app.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_node_Ticketing_dev_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var AppComponent = function AppComponent(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      currentUser = _ref.currentUser;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    var isCustomerRoute = router.asPath.startsWith('/customer') || router.asPath.startsWith('/auth/customer');

    if (isCustomerRoute) {
      if (currentUser.type !== 'customer') {
        router.push('/');
      }
    }
  }, [currentUser]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_6__.default, {
      currentUser: currentUser
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      currentUser: currentUser
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(AppComponent, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter];
});

_c = AppComponent;

AppComponent.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_node_Ticketing_dev_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_node_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(appContext) {
    var client, _yield$client$get, data, pageProps;

    return C_node_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_5__.default)(appContext.ctx);
            _context.next = 3;
            return client.get('/api/users/currentuser');

          case 3:
            _yield$client$get = _context.sent;
            data = _yield$client$get.data;
            pageProps = {};

            if (!appContext.Component.getInitialProps) {
              _context.next = 10;
              break;
            }

            _context.next = 9;
            return appContext.Component.getInitialProps(appContext.ctx);

          case 9:
            pageProps = _context.sent;

          case 10:
            return _context.abrupt("return", _objectSpread({
              pageProps: pageProps
            }, data));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (AppComponent);

var _c;

$RefreshReg$(_c, "AppComponent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJyZW50VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImlzQ3VzdG9tZXJSb3V0ZSIsImFzUGF0aCIsInN0YXJ0c1dpdGgiLCJ0eXBlIiwicHVzaCIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJjbGllbnQiLCJidWlsZENsaWVudCIsImN0eCIsImdldCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUEyQztBQUFBOztBQUFBLE1BQXhDQyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUM5RCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGVBQWUsR0FBR0gsTUFBTSxDQUFDSSxNQUFQLENBQWNDLFVBQWQsQ0FBeUIsV0FBekIsS0FBeUNMLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjQyxVQUFkLENBQXlCLGdCQUF6QixDQUFqRTs7QUFFQSxRQUFJRixlQUFKLEVBQXFCO0FBQ25CLFVBQUlKLFdBQVcsQ0FBQ08sSUFBWixLQUFxQixVQUF6QixFQUFxQztBQUNuQ04sY0FBTSxDQUFDTyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0Y7QUFDRixHQVJRLEVBUU4sQ0FBQ1IsV0FBRCxDQVJNLENBQVQ7QUFVQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHVEQUFEO0FBQVEsaUJBQVcsRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsU0FBRCxrQ0FBZUQsU0FBZjtBQUEwQixpQkFBVyxFQUFFQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQW5CRDs7R0FBTUgsWTtVQUNXSyxrRDs7O0tBRFhMLFk7O0FBcUJOQSxZQUFZLENBQUNZLGVBQWI7QUFBQSx3UUFBK0IsaUJBQU1DLFVBQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkMsa0JBRHVCLEdBQ2RDLDBEQUFXLENBQUNGLFVBQVUsQ0FBQ0csR0FBWixDQURHO0FBQUE7QUFBQSxtQkFFTkYsTUFBTSxDQUFDRyxHQUFQLENBQVcsd0JBQVgsQ0FGTTs7QUFBQTtBQUFBO0FBRXJCQyxnQkFGcUIscUJBRXJCQSxJQUZxQjtBQUl6QmhCLHFCQUp5QixHQUliLEVBSmE7O0FBQUEsaUJBS3pCVyxVQUFVLENBQUNaLFNBQVgsQ0FBcUJXLGVBTEk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFNVEMsVUFBVSxDQUFDWixTQUFYLENBQXFCVyxlQUFyQixDQUFxQ0MsVUFBVSxDQUFDRyxHQUFoRCxDQU5TOztBQUFBO0FBTTNCZCxxQkFOMkI7O0FBQUE7QUFBQTtBQVUzQkEsdUJBQVMsRUFBVEE7QUFWMkIsZUFXeEJnQixJQVh3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlQSwrREFBZWxCLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMzYwYzk1NjMxNWZkOTUxYzczZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XHJcbmltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi9hcGkvYnVpbGQtY2xpZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5jb25zdCBBcHBDb21wb25lbnQgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNDdXN0b21lclJvdXRlID0gcm91dGVyLmFzUGF0aC5zdGFydHNXaXRoKCcvY3VzdG9tZXInKSB8fCByb3V0ZXIuYXNQYXRoLnN0YXJ0c1dpdGgoJy9hdXRoL2N1c3RvbWVyJyk7XHJcblxyXG4gICAgaWYgKGlzQ3VzdG9tZXJSb3V0ZSkge1xyXG4gICAgICBpZiAoY3VycmVudFVzZXIudHlwZSAhPT0gJ2N1c3RvbWVyJykge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbY3VycmVudFVzZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgYXBwQ29udGV4dCA9PiB7XHJcbiAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoYXBwQ29udGV4dC5jdHgpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpO1xyXG5cclxuICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgaWYgKGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgcGFnZVByb3BzID0gYXdhaXQgYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQuY3R4KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYWdlUHJvcHMsXHJcbiAgICAuLi5kYXRhXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
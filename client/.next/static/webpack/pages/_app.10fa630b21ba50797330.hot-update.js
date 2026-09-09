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
  useEffect(function () {
    var isCustomerRoute = Router.pathname.startsWith('/customer');

    if (isCustomerRoute) {
      if (currentUser.type !== 'customer') {
        Router.push('/');
      }
    }
  }, [currentUser]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_6__.default, {
      currentUser: currentUser
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      currentUser: currentUser
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_s(AppComponent, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJyZW50VXNlciIsInVzZUVmZmVjdCIsImlzQ3VzdG9tZXJSb3V0ZSIsIlJvdXRlciIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInR5cGUiLCJwdXNoIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImNsaWVudCIsImJ1aWxkQ2xpZW50IiwiY3R4IiwiZ2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUEyQztBQUFBOztBQUFBLE1BQXhDQyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUM5REMsV0FBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxlQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsVUFBaEIsQ0FBMkIsV0FBM0IsQ0FBeEI7O0FBRUEsUUFBSUgsZUFBSixFQUFxQjtBQUNuQixVQUFJRixXQUFXLENBQUNNLElBQVosS0FBcUIsVUFBekIsRUFBcUM7QUFDbkNILGNBQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGO0FBQ0YsR0FSUSxFQVFOLENBQUNQLFdBQUQsQ0FSTSxDQUFUO0FBVUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUFRLGlCQUFXLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLFNBQUQsa0NBQWVELFNBQWY7QUFBMEIsaUJBQVcsRUFBRUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FqQkQ7O0dBQU1ILFk7O0tBQUFBLFk7O0FBbUJOQSxZQUFZLENBQUNXLGVBQWI7QUFBQSx3UUFBK0IsaUJBQU1DLFVBQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkMsa0JBRHVCLEdBQ2RDLDBEQUFXLENBQUNGLFVBQVUsQ0FBQ0csR0FBWixDQURHO0FBQUE7QUFBQSxtQkFFTkYsTUFBTSxDQUFDRyxHQUFQLENBQVcsd0JBQVgsQ0FGTTs7QUFBQTtBQUFBO0FBRXJCQyxnQkFGcUIscUJBRXJCQSxJQUZxQjtBQUl6QmYscUJBSnlCLEdBSWIsRUFKYTs7QUFBQSxpQkFLekJVLFVBQVUsQ0FBQ1gsU0FBWCxDQUFxQlUsZUFMSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQU1UQyxVQUFVLENBQUNYLFNBQVgsQ0FBcUJVLGVBQXJCLENBQXFDQyxVQUFVLENBQUNHLEdBQWhELENBTlM7O0FBQUE7QUFNM0JiLHFCQU4yQjs7QUFBQTtBQUFBO0FBVTNCQSx1QkFBUyxFQUFUQTtBQVYyQixlQVd4QmUsSUFYd0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsK0RBQWVqQixZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTBmYTYzMGIyMWJhNTA3OTczMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xyXG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSAnLi4vYXBpL2J1aWxkLWNsaWVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5cclxuY29uc3QgQXBwQ29tcG9uZW50ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNDdXN0b21lclJvdXRlID0gUm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jdXN0b21lcicpO1xyXG5cclxuICAgIGlmIChpc0N1c3RvbWVyUm91dGUpIHtcclxuICAgICAgaWYgKGN1cnJlbnRVc2VyLnR5cGUgIT09ICdjdXN0b21lcicpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2N1cnJlbnRVc2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGFwcENvbnRleHQgPT4ge1xyXG4gIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGFwcENvbnRleHQuY3R4KTtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcclxuXHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGlmIChhcHBDb250ZXh0LkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0LmN0eCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGFnZVByb3BzLFxyXG4gICAgLi4uZGF0YVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
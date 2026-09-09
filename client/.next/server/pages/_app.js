(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((context = {}) => {
  const {
    req
  } = context;

  if (true) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: 'http://localhost:3000',
      headers: req ? req.headers : {}
    });
  }

  return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: '/'
  });
});

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\components\\header.js";


/* harmony default export */ __webpack_exports__["default"] = (({
  currentUser
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // Customer pages

  const isCustomer = router.asPath.startsWith('/customer') || router.asPath.startsWith('/auth/customer');
  const links = [!currentUser && {
    label: 'Sign Up',
    href: isCustomer ? '/auth/customer/signup' : '/auth/company/signup'
  }, !currentUser && {
    label: 'Sign In',
    href: isCustomer ? '/auth/customer/signin' : '/auth/company/signin'
  }, currentUser && {
    label: 'Sign Out',
    href: isCustomer ? '/auth/customer/signout' : '/auth/company/signout'
  }].filter(linkConfig => linkConfig).map(({
    label,
    href
  }) => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      className: "nav-item",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "nav-link",
          children: label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined)
    }, href, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, undefined);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-light bg-light",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: isCustomer ? '/customer' : '/',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "navbar-brand",
        children: "Ticketing System"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: isCustomer ? '/customer/tickets' : '/tickets',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "navbar-brand",
        children: "Tickets"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), currentUser && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: isCustomer ? '/customer/orders' : '/orders',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "navbar-brand",
        children: "Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex justify-content-end ml-auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "nav d-flex align-items-center",
        children: links
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const AppComponent = ({
  Component,
  pageProps,
  currentUser
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const isCustomerRoute = router.asPath.startsWith('/customer') || router.asPath.startsWith('/auth/customer');

    if (isCustomerRoute) {
      if (currentUser && currentUser.type !== 'customer') {
        router.push('/');
      }
    }
  }, [currentUser]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.default, {
      currentUser: currentUser
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      currentUser: currentUser
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

AppComponent.getInitialProps = async appContext => {
  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__.default)(appContext.ctx);
  const {
    data
  } = await client.get('/api/users/currentuser');
  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return _objectSpread({
    pageProps
  }, data);
};

/* harmony default export */ __webpack_exports__["default"] = (AppComponent);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_bootstrap_dist_css_bootstrap_css-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImNvbnRleHQiLCJyZXEiLCJheGlvcyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiY3VycmVudFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0N1c3RvbWVyIiwiYXNQYXRoIiwic3RhcnRzV2l0aCIsImxpbmtzIiwibGFiZWwiLCJocmVmIiwiZmlsdGVyIiwibGlua0NvbmZpZyIsIm1hcCIsIkFwcENvbXBvbmVudCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImlzQ3VzdG9tZXJSb3V0ZSIsInR5cGUiLCJwdXNoIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImNsaWVudCIsImJ1aWxkQ2xpZW50IiwiY3R4IiwiZGF0YSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsK0RBQWUsQ0FBQ0EsT0FBTyxHQUFHLEVBQVgsS0FBa0I7QUFDL0IsUUFBTTtBQUFFQztBQUFGLE1BQVVELE9BQWhCOztBQUVBLFlBQW1DO0FBQ2pDLFdBQU9FLG1EQUFBLENBQWE7QUFDbEJDLGFBQU8sRUFBRSx1QkFEUztBQUVsQkMsYUFBTyxFQUFFSCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0csT0FBUCxHQUFpQjtBQUZYLEtBQWIsQ0FBUDtBQUlEOztBQUVELFNBQU9GLG1EQUFBLENBQWE7QUFDbEJDLFdBQU8sRUFBRTtBQURTLEdBQWIsQ0FBUDtBQUdELENBYkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBRUEsK0RBQWUsQ0FBQztBQUFFRTtBQUFGLENBQUQsS0FBcUI7QUFDbEMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QixDQURrQyxDQUdsQzs7QUFDQSxRQUFNQyxVQUFVLEdBQ2RGLE1BQU0sQ0FBQ0csTUFBUCxDQUFjQyxVQUFkLENBQXlCLFdBQXpCLEtBQXlDSixNQUFNLENBQUNHLE1BQVAsQ0FBY0MsVUFBZCxDQUF5QixnQkFBekIsQ0FEM0M7QUFFQSxRQUFNQyxLQUFLLEdBQUcsQ0FDWixDQUFDTixXQUFELElBQWdCO0FBQ2RPLFNBQUssRUFBRSxTQURPO0FBRWRDLFFBQUksRUFBRUwsVUFBVSxHQUNaLHVCQURZLEdBRVo7QUFKVSxHQURKLEVBUVosQ0FBQ0gsV0FBRCxJQUFnQjtBQUNkTyxTQUFLLEVBQUUsU0FETztBQUVkQyxRQUFJLEVBQUVMLFVBQVUsR0FDWix1QkFEWSxHQUVaO0FBSlUsR0FSSixFQWVaSCxXQUFXLElBQUk7QUFDYk8sU0FBSyxFQUFFLFVBRE07QUFFYkMsUUFBSSxFQUFFTCxVQUFVLEdBQ1osd0JBRFksR0FFWjtBQUpTLEdBZkgsRUFzQlhNLE1BdEJXLENBc0JKQyxVQUFVLElBQUlBLFVBdEJWLEVBdUJYQyxHQXZCVyxDQXVCUCxDQUFDO0FBQUVKLFNBQUY7QUFBU0M7QUFBVCxHQUFELEtBQXFCO0FBQ3hCLHdCQUNFO0FBQWUsZUFBUyxFQUFDLFVBQXpCO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUVBLElBQVo7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMsVUFBYjtBQUFBLG9CQUF5QkQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFTQyxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFPRCxHQS9CVyxDQUFkO0FBaUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUEsNEJBR0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUVMLFVBQVUsR0FBRyxXQUFILEdBQWlCLEdBQXZDO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBVUUsOERBQUMsa0RBQUQ7QUFDRSxVQUFJLEVBQ0ZBLFVBQVUsR0FDTixtQkFETSxHQUVOLFVBSlI7QUFBQSw2QkFPRTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsRUF1QkdILFdBQVcsaUJBQ1YsOERBQUMsa0RBQUQ7QUFDRSxVQUFJLEVBQ0ZHLFVBQVUsR0FDTixrQkFETSxHQUVOLFNBSlI7QUFBQSw2QkFPRTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJKLGVBc0NFO0FBQUssZUFBUyxFQUFDLG9DQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLCtCQUFkO0FBQUEsa0JBQ0dHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBK0NELENBdEZELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1NLFlBQVksR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUMsV0FBYjtBQUF3QmQ7QUFBeEIsQ0FBRCxLQUEyQztBQUM5RCxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUFhLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLGVBQWUsR0FBR2YsTUFBTSxDQUFDRyxNQUFQLENBQWNDLFVBQWQsQ0FBeUIsV0FBekIsS0FBeUNKLE1BQU0sQ0FBQ0csTUFBUCxDQUFjQyxVQUFkLENBQXlCLGdCQUF6QixDQUFqRTs7QUFFQSxRQUFJVyxlQUFKLEVBQXFCO0FBQ25CLFVBQUloQixXQUFXLElBQUlBLFdBQVcsQ0FBQ2lCLElBQVosS0FBcUIsVUFBeEMsRUFBb0Q7QUFDbERoQixjQUFNLENBQUNpQixJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0Y7QUFDRixHQVJRLEVBUU4sQ0FBQ2xCLFdBQUQsQ0FSTSxDQUFUO0FBVUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUFRLGlCQUFXLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxTQUFELGtDQUFlYyxTQUFmO0FBQTBCLGlCQUFXLEVBQUVkO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQW5CRDs7QUFxQkFZLFlBQVksQ0FBQ08sZUFBYixHQUErQixNQUFNQyxVQUFOLElBQW9CO0FBQ2pELFFBQU1DLE1BQU0sR0FBR0MsMERBQVcsQ0FBQ0YsVUFBVSxDQUFDRyxHQUFaLENBQTFCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVcsTUFBTUgsTUFBTSxDQUFDSSxHQUFQLENBQVcsd0JBQVgsQ0FBdkI7QUFFQSxNQUFJWCxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsTUFBSU0sVUFBVSxDQUFDUCxTQUFYLENBQXFCTSxlQUF6QixFQUEwQztBQUN4Q0wsYUFBUyxHQUFHLE1BQU1NLFVBQVUsQ0FBQ1AsU0FBWCxDQUFxQk0sZUFBckIsQ0FBcUNDLFVBQVUsQ0FBQ0csR0FBaEQsQ0FBbEI7QUFDRDs7QUFFRDtBQUNFVDtBQURGLEtBRUtVLElBRkw7QUFJRCxDQWJEOztBQWVBLCtEQUFlWixZQUFmLEU7Ozs7Ozs7Ozs7O0FDekNBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQgPSB7fSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgICAgaGVhZGVyczogcmVxID8gcmVxLmhlYWRlcnMgOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnLycsXHJcbiAgfSk7XHJcbn07IiwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gQ3VzdG9tZXIgcGFnZXNcclxuICBjb25zdCBpc0N1c3RvbWVyID1cclxuICAgIHJvdXRlci5hc1BhdGguc3RhcnRzV2l0aCgnL2N1c3RvbWVyJykgfHwgcm91dGVyLmFzUGF0aC5zdGFydHNXaXRoKCcvYXV0aC9jdXN0b21lcicpO1xyXG4gIGNvbnN0IGxpbmtzID0gW1xyXG4gICAgIWN1cnJlbnRVc2VyICYmIHtcclxuICAgICAgbGFiZWw6ICdTaWduIFVwJyxcclxuICAgICAgaHJlZjogaXNDdXN0b21lclxyXG4gICAgICAgID8gJy9hdXRoL2N1c3RvbWVyL3NpZ251cCdcclxuICAgICAgICA6ICcvYXV0aC9jb21wYW55L3NpZ251cCdcclxuICAgIH0sXHJcblxyXG4gICAgIWN1cnJlbnRVc2VyICYmIHtcclxuICAgICAgbGFiZWw6ICdTaWduIEluJyxcclxuICAgICAgaHJlZjogaXNDdXN0b21lclxyXG4gICAgICAgID8gJy9hdXRoL2N1c3RvbWVyL3NpZ25pbidcclxuICAgICAgICA6ICcvYXV0aC9jb21wYW55L3NpZ25pbidcclxuICAgIH0sXHJcblxyXG4gICAgY3VycmVudFVzZXIgJiYge1xyXG4gICAgICBsYWJlbDogJ1NpZ24gT3V0JyxcclxuICAgICAgaHJlZjogaXNDdXN0b21lclxyXG4gICAgICAgID8gJy9hdXRoL2N1c3RvbWVyL3NpZ25vdXQnXHJcbiAgICAgICAgOiAnL2F1dGgvY29tcGFueS9zaWdub3V0J1xyXG4gICAgfVxyXG4gIF1cclxuICAgIC5maWx0ZXIobGlua0NvbmZpZyA9PiBsaW5rQ29uZmlnKVxyXG4gICAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGtleT17aHJlZn0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntsYWJlbH08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcblxyXG4gICAgICB7LyogQnJhbmQgKi99XHJcbiAgICAgIDxMaW5rIGhyZWY9e2lzQ3VzdG9tZXIgPyAnL2N1c3RvbWVyJyA6ICcvJ30+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICBUaWNrZXRpbmcgU3lzdGVtXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICB7LyogVGlja2V0cyAqL31cclxuICAgICAgPExpbmtcclxuICAgICAgICBocmVmPXtcclxuICAgICAgICAgIGlzQ3VzdG9tZXJcclxuICAgICAgICAgICAgPyAnL2N1c3RvbWVyL3RpY2tldHMnXHJcbiAgICAgICAgICAgIDogJy90aWNrZXRzJ1xyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgVGlja2V0c1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgey8qIE9yZGVycyAqL31cclxuICAgICAge2N1cnJlbnRVc2VyICYmIChcclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgIGlzQ3VzdG9tZXJcclxuICAgICAgICAgICAgICA/ICcvY3VzdG9tZXIvb3JkZXJzJ1xyXG4gICAgICAgICAgICAgIDogJy9vcmRlcnMnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgIE9yZGVyc1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBBdXRoIGxpbmtzICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1sLWF1dG9cIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIHtsaW5rc31cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L25hdj5cclxuICApO1xyXG59OyIsImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xyXG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSAnLi4vYXBpL2J1aWxkLWNsaWVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuY29uc3QgQXBwQ29tcG9uZW50ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzQ3VzdG9tZXJSb3V0ZSA9IHJvdXRlci5hc1BhdGguc3RhcnRzV2l0aCgnL2N1c3RvbWVyJykgfHwgcm91dGVyLmFzUGF0aC5zdGFydHNXaXRoKCcvYXV0aC9jdXN0b21lcicpO1xyXG5cclxuICAgIGlmIChpc0N1c3RvbWVyUm91dGUpIHtcclxuICAgICAgaWYgKGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLnR5cGUgIT09ICdjdXN0b21lcicpIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2N1cnJlbnRVc2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGFwcENvbnRleHQgPT4ge1xyXG4gIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGFwcENvbnRleHQuY3R4KTtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcclxuXHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGlmIChhcHBDb250ZXh0LkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0LmN0eCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGFnZVByb3BzLFxyXG4gICAgLi4uZGF0YVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
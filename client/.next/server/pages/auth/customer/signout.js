(function() {
var exports = {};
exports.id = "pages/auth/customer/signout";
exports.ids = ["pages/auth/customer/signout"];
exports.modules = {

/***/ "./pages/auth/customer/signout.js":
/*!****************************************!*\
  !*** ./pages/auth/customer/signout.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/use-request */ "./hooks/use-request.js");

var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\auth\\customer\\signout.js";



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    doRequest
  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__.default)({
    url: '/api/customers/signout',
    method: 'post',
    body: {},
    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/customer/tickets')
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    doRequest();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Signing you out..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 10
  }, undefined);
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["hooks_use-request_js"], function() { return __webpack_exec__("./pages/auth/customer/signout.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hdXRoL2N1c3RvbWVyL3NpZ25vdXQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZG9SZXF1ZXN0IiwidXNlUmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJSb3V0ZXIiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsK0RBQWUsTUFBTTtBQUNuQixRQUFNO0FBQUVBO0FBQUYsTUFBZ0JDLDJEQUFVLENBQUM7QUFDL0JDLE9BQUcsRUFBRSx3QkFEMEI7QUFFL0JDLFVBQU0sRUFBRSxNQUZ1QjtBQUcvQkMsUUFBSSxFQUFFLEVBSHlCO0FBSS9CQyxhQUFTLEVBQUUsTUFBTUMsdURBQUEsQ0FBWSxtQkFBWjtBQUpjLEdBQUQsQ0FBaEM7QUFPQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RQLGFBQVM7QUFDVixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBYkQsRTs7Ozs7Ozs7Ozs7QUNKQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9hdXRoL2N1c3RvbWVyL3NpZ25vdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgeyBkb1JlcXVlc3QgfSA9IHVzZVJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9jdXN0b21lcnMvc2lnbm91dCcsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIGJvZHk6IHt9LFxyXG4gICAgb25TdWNjZXNzOiAoKSA9PiBSb3V0ZXIucHVzaCgnL2N1c3RvbWVyL3RpY2tldHMnKVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9SZXF1ZXN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPGRpdj5TaWduaW5nIHlvdSBvdXQuLi48L2Rpdj47XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
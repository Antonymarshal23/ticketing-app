(function() {
var exports = {};
exports.id = "pages/auth/company/signout";
exports.ids = ["pages/auth/company/signout"];
exports.modules = {

/***/ "./pages/auth/company/signout.js":
/*!***************************************!*\
  !*** ./pages/auth/company/signout.js ***!
  \***************************************/
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

var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\auth\\company\\signout.js";



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    doRequest
  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__.default)({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/')
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
var __webpack_exports__ = __webpack_require__.X(0, ["hooks_use-request_js"], function() { return __webpack_exec__("./pages/auth/company/signout.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hdXRoL2NvbXBhbnkvc2lnbm91dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJkb1JlcXVlc3QiLCJ1c2VSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsIm9uU3VjY2VzcyIsIlJvdXRlciIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSwrREFBZSxNQUFNO0FBQ25CLFFBQU07QUFBRUE7QUFBRixNQUFnQkMsMkRBQVUsQ0FBQztBQUMvQkMsT0FBRyxFQUFFLG9CQUQwQjtBQUUvQkMsVUFBTSxFQUFFLE1BRnVCO0FBRy9CQyxRQUFJLEVBQUUsRUFIeUI7QUFJL0JDLGFBQVMsRUFBRSxNQUFNQyx1REFBQSxDQUFZLEdBQVo7QUFKYyxHQUFELENBQWhDO0FBT0FDLGtEQUFTLENBQUMsTUFBTTtBQUNkUCxhQUFTO0FBQ1YsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQWJELEU7Ozs7Ozs7Ozs7O0FDSkEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvYXV0aC9jb21wYW55L3NpZ25vdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgeyBkb1JlcXVlc3QgfSA9IHVzZVJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS91c2Vycy9zaWdub3V0JyxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgYm9keToge30sXHJcbiAgICBvblN1Y2Nlc3M6ICgpID0+IFJvdXRlci5wdXNoKCcvJylcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvUmVxdWVzdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIDxkaXY+U2lnbmluZyB5b3Ugb3V0Li4uPC9kaXY+O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
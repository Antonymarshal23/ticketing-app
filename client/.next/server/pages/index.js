(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");
/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets */ "./pages/tickets/index.js");

var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\index.js";



const LandingPage = ({
  currentUser
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tickets__WEBPACK_IMPORTED_MODULE_2__.default, {
    currentUser: currentUser
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};

LandingPage.getInitialProps = async context => {
  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__.default)(context);

  try {
    const {
      data
    } = await client.get('/api/users/currentuser');
    return data;
  } catch (err) {
    return {
      currentUser: null
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["pages_tickets_index_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImNvbnRleHQiLCJyZXEiLCJheGlvcyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImdldEluaXRpYWxQcm9wcyIsImNsaWVudCIsImJ1aWxkQ2xpZW50IiwiZGF0YSIsImdldCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsK0RBQWUsQ0FBQ0EsT0FBTyxHQUFHLEVBQVgsS0FBa0I7QUFDL0IsUUFBTTtBQUFFQztBQUFGLE1BQVVELE9BQWhCOztBQUVBLFlBQW1DO0FBQ2pDLFdBQU9FLG1EQUFBLENBQWE7QUFDbEJDLGFBQU8sRUFBRSx1QkFEUztBQUVsQkMsYUFBTyxFQUFFSCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0csT0FBUCxHQUFpQjtBQUZYLEtBQWIsQ0FBUDtBQUlEOztBQUVELFNBQU9GLG1EQUFBLENBQWE7QUFDbEJDLFdBQU8sRUFBRTtBQURTLEdBQWIsQ0FBUDtBQUdELENBYkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7QUFFQSxNQUFNRSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUI7QUFDdkMsc0JBQU8sOERBQUMsNkNBQUQ7QUFBYSxlQUFXLEVBQUVBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSUFELFdBQVcsQ0FBQ0UsZUFBWixHQUE4QixNQUFNUCxPQUFOLElBQWlCO0FBQzdDLFFBQU1RLE1BQU0sR0FBR0MsMERBQVcsQ0FBQ1QsT0FBRCxDQUExQjs7QUFFQSxNQUFJO0FBQ0YsVUFBTTtBQUFFVTtBQUFGLFFBQVcsTUFBTUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsd0JBQVgsQ0FBdkI7QUFFQSxXQUFPRCxJQUFQO0FBQ0QsR0FKRCxDQUlFLE9BQU9FLEdBQVAsRUFBWTtBQUNaLFdBQU87QUFDTE4saUJBQVcsRUFBRTtBQURSLEtBQVA7QUFHRDtBQUNGLENBWkQ7O0FBY0EsK0RBQWVELFdBQWYsRTs7Ozs7Ozs7Ozs7QUN0QkEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQgPSB7fSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgICAgaGVhZGVyczogcmVxID8gcmVxLmhlYWRlcnMgOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnLycsXHJcbiAgfSk7XHJcbn07IiwiXHJcbmltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi9hcGkvYnVpbGQtY2xpZW50JztcclxuaW1wb3J0IFRpY2tldHNQYWdlIGZyb20gJy4vdGlja2V0cyc7XHJcblxyXG5jb25zdCBMYW5kaW5nUGFnZSA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICByZXR1cm4gPFRpY2tldHNQYWdlIGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gLz47XHJcbn07XHJcblxyXG5MYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjb250ZXh0KTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY3VycmVudFVzZXI6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
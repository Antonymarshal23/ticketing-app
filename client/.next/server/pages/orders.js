(function() {
var exports = {};
exports.id = "pages/orders";
exports.ids = ["pages/orders"];
exports.modules = {

/***/ "./pages/orders/index.js":
/*!*******************************!*\
  !*** ./pages/orders/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\orders\\index.js";



const OrdersPage = () => {
  const {
    0: orders,
    1: setOrders
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const fetchOrders = async () => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/customers/orders');
      setOrders(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mt-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Loading orders..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container mt-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "mb-4",
      children: "My Orders"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), orders.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "No orders found."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: orders.map(order => {
        var _order$ticket;

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-6 mb-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["User ID: ", order.userId]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["Order ID: ", order.id]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["Status: ", order.status]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["Ticket ID: ", order.ticketId]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["Price: $", ((_order$ticket = order.ticket) === null || _order$ticket === void 0 ? void 0 : _order$ticket.price) || order.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)
        }, order.id, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (OrdersPage);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/orders/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9vcmRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk9yZGVyc1BhZ2UiLCJvcmRlcnMiLCJzZXRPcmRlcnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hPcmRlcnMiLCJyZXNwb25zZSIsImF4aW9zIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm1hcCIsIm9yZGVyIiwidXNlcklkIiwiaWQiLCJzdGF0dXMiLCJ0aWNrZXRJZCIsInRpY2tldCIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxJQUFELENBQXRDOztBQUVBLFFBQU1HLFdBQVcsR0FBRyxZQUFZO0FBQzlCLFFBQUk7QUFDRixZQUFNQyxRQUFRLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVSx1QkFBVixDQUF2QjtBQUVBTixlQUFTLENBQUNLLFFBQVEsQ0FBQ0UsSUFBVixDQUFUO0FBQ0QsS0FKRCxDQUlFLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNELEtBTkQsU0FNVTtBQUNSTCxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FWRDs7QUFZQVEsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RQLGVBQVc7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQUlGLE9BQUosRUFBYTtBQUNYLHdCQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBS0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBR0dILE1BQU0sQ0FBQ2EsTUFBUCxLQUFrQixDQUFsQixpQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQU9FO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFDR2IsTUFBTSxDQUFDYyxHQUFQLENBQVlDLEtBQUQ7QUFBQTs7QUFBQSw0QkFDVjtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUFBLHdDQUNZQSxLQUFLLENBQUNDLE1BRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUlFO0FBQUEseUNBQ2FELEtBQUssQ0FBQ0UsRUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGLGVBUUU7QUFBQSx1Q0FDV0YsS0FBSyxDQUFDRyxNQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUkYsZUFZRTtBQUFBLDBDQUNjSCxLQUFLLENBQUNJLFFBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFaRixlQWdCRTtBQUFBLHVDQUNXLGtCQUFBSixLQUFLLENBQUNLLE1BQU4sZ0VBQWNDLEtBQWQsS0FBdUJOLEtBQUssQ0FBQ00sS0FEeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBb0NOLEtBQUssQ0FBQ0UsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVTtBQUFBLE9BQVg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBc0NELENBbEVEOztBQW9FQSwrREFBZWxCLFVBQWYsRTs7Ozs7Ozs7Ozs7QUN2RUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvb3JkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IE9yZGVyc1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hPcmRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jdXN0b21lcnMvb3JkZXJzJyk7XHJcblxyXG4gICAgICBzZXRPcmRlcnMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoT3JkZXJzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICAgIDxoMj5Mb2FkaW5nIG9yZGVycy4uLjwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00XCI+TXkgT3JkZXJzPC9oMT5cclxuXHJcbiAgICAgIHtvcmRlcnMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8cD5ObyBvcmRlcnMgZm91bmQuPC9wPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7b3JkZXJzLm1hcCgob3JkZXIpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItNFwiIGtleT17b3JkZXIuaWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFVzZXIgSUQ6IHtvcmRlci51c2VySWR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgT3JkZXIgSUQ6IHtvcmRlci5pZH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgU3RhdHVzOiB7b3JkZXIuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBUaWNrZXQgSUQ6IHtvcmRlci50aWNrZXRJZH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgUHJpY2U6ICR7b3JkZXIudGlja2V0Py5wcmljZSB8fCBvcmRlci5wcmljZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzUGFnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
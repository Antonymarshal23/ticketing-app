self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/tickets/index.js":
/*!********************************!*\
  !*** ./pages/tickets/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_node_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_node_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_node_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_node_Ticketing_dev_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\tickets\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var TicketsPage = function TicketsPage(_ref) {
  _s();

  var _Router$router2, _Router$router3, _Router$router3$query;

  var currentUser = _ref.currentUser;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      tickets = _useState[0],
      setTickets = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      ticketsCount = _useState2[0],
      setTicketsCount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      error = _useState4[0],
      setError = _useState4[1];

  var limit = 10; // Get offset from URL

  var getOffsetFromUrl = function getOffsetFromUrl() {
    var _Router$router, _Router$router$query;

    var offset = parseInt((_Router$router = (next_router__WEBPACK_IMPORTED_MODULE_5___default().router)) === null || _Router$router === void 0 ? void 0 : (_Router$router$query = _Router$router.query) === null || _Router$router$query === void 0 ? void 0 : _Router$router$query.offset, 10);
    return Number.isNaN(offset) ? 0 : offset;
  };

  var fetchTickets = /*#__PURE__*/function () {
    var _ref2 = (0,C_node_Ticketing_dev_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_node_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var currentOffset,
          _response$data,
          _countResponse$data,
          response,
          countResponse,
          _args = arguments;

      return C_node_Ticketing_dev_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              currentOffset = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
              _context.prev = 1;
              setLoading(true);
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/tickets?offset=".concat(currentOffset, "&limit=").concat(limit));

            case 5:
              response = _context.sent;
              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/tickets');

            case 8:
              countResponse = _context.sent;
              setTickets(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) || []);
              setTicketsCount(((_countResponse$data = countResponse.data) === null || _countResponse$data === void 0 ? void 0 : _countResponse$data.data) || []);
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);
              setError('Unable to load tickets');

            case 17:
              _context.prev = 17;
              setLoading(false);
              return _context.finish(17);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13, 17, 20]]);
    }));

    return function fetchTickets() {
      return _ref2.apply(this, arguments);
    };
  }(); // Load page based on URL


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!(next_router__WEBPACK_IMPORTED_MODULE_5___default().router.isReady)) return;
    var currentOffset = getOffsetFromUrl();
    fetchTickets(currentOffset);
  }, [(_Router$router2 = (next_router__WEBPACK_IMPORTED_MODULE_5___default().router)) === null || _Router$router2 === void 0 ? void 0 : _Router$router2.isReady, (_Router$router3 = (next_router__WEBPACK_IMPORTED_MODULE_5___default().router)) === null || _Router$router3 === void 0 ? void 0 : (_Router$router3$query = _Router$router3.query) === null || _Router$router3$query === void 0 ? void 0 : _Router$router3$query.offset]); // Change pagination and URL

  var changePage = function changePage(newOffset) {
    next_router__WEBPACK_IMPORTED_MODULE_5___default().push({
      pathname: '/tickets',
      query: {
        offset: newOffset
      }
    }, undefined, {
      shallow: true
    });
  };

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mt-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Loading tickets..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this);
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mt-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this);
  }

  var currentOffset = getOffsetFromUrl();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container mt-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex align-items-center justify-content-between mb-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "mb-0",
        children: ["Available Tickets (", ticketsCount.length, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), currentUser && currentUser.type === 'company' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn btn-success",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/tickets/new');
        },
        children: "Create Ticket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: tickets.map(function (ticket) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-4 mb-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                children: ticket.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["Price: $", ticket.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["Available: ", ticket.quantity]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this), currentUser && currentUser.type === 'company' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "btn btn-warning",
                style: {
                  marginRight: '250px'
                },
                onClick: function onClick() {
                  return next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/tickets/".concat(ticket.id, "/edit"));
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 19
              }, _this) : currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "btn btn-primary",
                onClick: function onClick() {
                  return next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/customer/checkout/".concat(ticket.id));
                },
                children: "Purchase"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)
        }, ticket.id, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex justify-content-between align-items-center mt-4 mb-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn btn-secondary",
        disabled: currentOffset === 0,
        onClick: function onClick() {
          return changePage(Math.max(0, currentOffset - limit));
        },
        children: "Previous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Showing items ", currentOffset + 1, " -", ' ', currentOffset + tickets.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn btn-secondary",
        disabled: tickets.length < limit,
        onClick: function onClick() {
          return changePage(currentOffset + limit);
        },
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, _this);
};

_s(TicketsPage, "F6BTKSIW5GeHYEHhW/kFuc68yWc=");

_c = TicketsPage;
/* harmony default export */ __webpack_exports__["default"] = (TicketsPage);

var _c;

$RefreshReg$(_c, "TicketsPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGlja2V0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUaWNrZXRzUGFnZSIsImN1cnJlbnRVc2VyIiwidXNlU3RhdGUiLCJ0aWNrZXRzIiwic2V0VGlja2V0cyIsInRpY2tldHNDb3VudCIsInNldFRpY2tldHNDb3VudCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImxpbWl0IiwiZ2V0T2Zmc2V0RnJvbVVybCIsIm9mZnNldCIsInBhcnNlSW50IiwiUm91dGVyIiwicXVlcnkiLCJOdW1iZXIiLCJpc05hTiIsImZldGNoVGlja2V0cyIsImN1cnJlbnRPZmZzZXQiLCJheGlvcyIsInJlc3BvbnNlIiwiY291bnRSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwidXNlRWZmZWN0IiwiaXNSZWFkeSIsImNoYW5nZVBhZ2UiLCJuZXdPZmZzZXQiLCJwYXRobmFtZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJsZW5ndGgiLCJ0eXBlIiwibWFwIiwidGlja2V0IiwidGl0bGUiLCJwcmljZSIsInF1YW50aXR5IiwibWFyZ2luUmlnaHQiLCJpZCIsIk1hdGgiLCJtYXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQjtBQUFBOztBQUFBOztBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQUEsa0JBQ1RDLCtDQUFRLENBQUMsRUFBRCxDQURDO0FBQUEsTUFDaENDLE9BRGdDO0FBQUEsTUFDdkJDLFVBRHVCOztBQUFBLG1CQUVDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGVDtBQUFBLE1BRWhDRyxZQUZnQztBQUFBLE1BRWxCQyxlQUZrQjs7QUFBQSxtQkFHVEosK0NBQVEsQ0FBQyxJQUFELENBSEM7QUFBQSxNQUdoQ0ssT0FIZ0M7QUFBQSxNQUd2QkMsVUFIdUI7O0FB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bGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYmRkNTZhN2EzYTE3YTgwMThkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgVGlja2V0c1BhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgY29uc3QgW3RpY2tldHMsIHNldFRpY2tldHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0aWNrZXRzQ291bnQsIHNldFRpY2tldHNDb3VudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGxpbWl0ID0gMTA7XHJcblxyXG4gIC8vIEdldCBvZmZzZXQgZnJvbSBVUkxcclxuICBjb25zdCBnZXRPZmZzZXRGcm9tVXJsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFyc2VJbnQoUm91dGVyLnJvdXRlcj8ucXVlcnk/Lm9mZnNldCwgMTApO1xyXG5cclxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4ob2Zmc2V0KSA/IDAgOiBvZmZzZXQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUaWNrZXRzID0gYXN5bmMgKGN1cnJlbnRPZmZzZXQgPSAwKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYC9hcGkvdGlja2V0cz9vZmZzZXQ9JHtjdXJyZW50T2Zmc2V0fSZsaW1pdD0ke2xpbWl0fWBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvdW50UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdGlja2V0cycpO1xyXG5cclxuICAgICAgc2V0VGlja2V0cyhyZXNwb25zZS5kYXRhPy5kYXRhIHx8IFtdKTtcclxuICAgICAgc2V0VGlja2V0c0NvdW50KGNvdW50UmVzcG9uc2UuZGF0YT8uZGF0YSB8fCBbXSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBzZXRFcnJvcignVW5hYmxlIHRvIGxvYWQgdGlja2V0cycpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gTG9hZCBwYWdlIGJhc2VkIG9uIFVSTFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIVJvdXRlci5yb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSBnZXRPZmZzZXRGcm9tVXJsKCk7XHJcblxyXG4gICAgZmV0Y2hUaWNrZXRzKGN1cnJlbnRPZmZzZXQpO1xyXG4gIH0sIFtSb3V0ZXIucm91dGVyPy5pc1JlYWR5LCBSb3V0ZXIucm91dGVyPy5xdWVyeT8ub2Zmc2V0XSk7XHJcblxyXG4gIC8vIENoYW5nZSBwYWdpbmF0aW9uIGFuZCBVUkxcclxuICBjb25zdCBjaGFuZ2VQYWdlID0gKG5ld09mZnNldCkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRobmFtZTogJy90aWNrZXRzJyxcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgb2Zmc2V0OiBuZXdPZmZzZXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB7XHJcbiAgICAgICAgc2hhbGxvdzogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICAgIDxoMj5Mb2FkaW5nIHRpY2tldHMuLi48L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgICA8aDI+e2Vycm9yfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSBnZXRPZmZzZXRGcm9tVXJsKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICBBdmFpbGFibGUgVGlja2V0cyAoe3RpY2tldHNDb3VudC5sZW5ndGh9KVxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIHtjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci50eXBlID09PSAnY29tcGFueScgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3RpY2tldHMvbmV3Jyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENyZWF0ZSBUaWNrZXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7dGlja2V0cy5tYXAoKHRpY2tldCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi00XCIga2V5PXt0aWNrZXQuaWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoND57dGlja2V0LnRpdGxlfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFByaWNlOiAke3RpY2tldC5wcmljZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgQXZhaWxhYmxlOiB7dGlja2V0LnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci50eXBlID09PSAnY29tcGFueScgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMjUwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvdGlja2V0cy8ke3RpY2tldC5pZH0vZWRpdGApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiBjdXJyZW50VXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvY3VzdG9tZXIvY2hlY2tvdXQvJHt0aWNrZXQuaWR9YClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQdXJjaGFzZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUGFnaW5hdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG10LTQgbWItNVwiPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudE9mZnNldCA9PT0gMH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIGNoYW5nZVBhZ2UoTWF0aC5tYXgoMCwgY3VycmVudE9mZnNldCAtIGxpbWl0KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFNob3dpbmcgaXRlbXMge2N1cnJlbnRPZmZzZXQgKyAxfSAteycgJ31cclxuICAgICAgICAgIHtjdXJyZW50T2Zmc2V0ICsgdGlja2V0cy5sZW5ndGh9XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17dGlja2V0cy5sZW5ndGggPCBsaW1pdH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2UoY3VycmVudE9mZnNldCArIGxpbWl0KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBOZXh0XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
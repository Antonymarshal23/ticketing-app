(function() {
var exports = {};
exports.id = "pages/tickets/[id]/edit";
exports.ids = ["pages/tickets/[id]/edit"];
exports.modules = {

/***/ "./pages/tickets/[id]/edit.js":
/*!************************************!*\
  !*** ./pages/tickets/[id]/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\tickets\\[id]\\edit.js";




const EditTicketPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    id
  } = router.query;
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: price,
    1: setPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: saving,
    1: setSaving
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: errors,
    1: setErrors
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Get existing ticket

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!id) {
      return;
    }

    const fetchTicket = async () => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`/api/tickets/${id}`);
        const ticket = response.data;
        setTitle(ticket.title);
        setPrice(ticket.price);
      } catch (err) {
        console.error(err);
        setErrors([{
          message: 'Unable to load ticket'
        }]);
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [id]);

  const onSubmit = async event => {
    event.preventDefault();
    setErrors([]);
    setSaving(true);

    try {
      await axios__WEBPACK_IMPORTED_MODULE_3___default().put(`/api/tickets/${id}`, {
        title,
        price: parseFloat(price)
      }); // Go back to ticket list

      router.push('/');
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data) {
        setErrors(err.response.data.errors || [{
          message: 'Unable to update ticket'
        }]);
      } else {
        setErrors([{
          message: 'Unable to update ticket'
        }]);
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mt-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Loading ticket..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container mt-5",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "mb-4",
          children: "Edit Ticket"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined), errors.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "alert alert-danger",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "mb-0",
            children: errors.map((error, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: error.message
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group mb-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              className: "form-control",
              value: title,
              onChange: e => setTitle(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group mb-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Price"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "number",
              className: "form-control",
              value: price,
              onChange: e => setPrice(e.target.value),
              min: "0",
              step: "0.01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "btn btn-primary mr-2",
            disabled: saving,
            children: saving ? 'Updating...' : 'Update'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "btn btn-secondary",
            onClick: () => router.push('/'),
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EditTicketPage);

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
var __webpack_exports__ = (__webpack_exec__("./pages/tickets/[id]/edit.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy90aWNrZXRzL1tpZF0vZWRpdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJFZGl0VGlja2V0UGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ0aXRsZSIsInNldFRpdGxlIiwidXNlU3RhdGUiLCJwcmljZSIsInNldFByaWNlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzYXZpbmciLCJzZXRTYXZpbmciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ1c2VFZmZlY3QiLCJmZXRjaFRpY2tldCIsInJlc3BvbnNlIiwiYXhpb3MiLCJ0aWNrZXQiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnNlRmxvYXQiLCJwdXNoIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsTUFBTTtBQUMzQixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNGLE1BQU0sQ0FBQ0csS0FBdEI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsK0NBQVEs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LHNCQUtHQSxNQUFNLEdBQUcsYUFBSCxHQUFtQjtBQUw1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXBDRixlQTRDRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsbUJBRlo7QUFHRSxtQkFBTyxFQUFFLE1BQU1YLE1BQU0sQ0FBQzZCLElBQVAsQ0FBWSxHQUFaLENBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtRkQsQ0F4S0Q7O0FBMEtBLCtEQUFlOUIsY0FBZixFOzs7Ozs7Ozs7OztBQy9LQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy90aWNrZXRzL1tpZF0vZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBFZGl0VGlja2V0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy8gR2V0IGV4aXN0aW5nIHRpY2tldFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaFRpY2tldCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS90aWNrZXRzLyR7aWR9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpY2tldCA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgIHNldFRpdGxlKHRpY2tldC50aXRsZSk7XHJcbiAgICAgICAgc2V0UHJpY2UodGlja2V0LnByaWNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG5cclxuICAgICAgICBzZXRFcnJvcnMoW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnVW5hYmxlIHRvIGxvYWQgdGlja2V0J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVGlja2V0KCk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldEVycm9ycyhbXSk7XHJcbiAgICBzZXRTYXZpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucHV0KGAvYXBpL3RpY2tldHMvJHtpZH1gLCB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgcHJpY2U6IHBhcnNlRmxvYXQocHJpY2UpXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gR28gYmFjayB0byB0aWNrZXQgbGlzdFxyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgIGlmIChlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICBzZXRFcnJvcnMoXHJcbiAgICAgICAgICBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMgfHwgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ1VuYWJsZSB0byB1cGRhdGUgdGlja2V0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvcnMoW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnVW5hYmxlIHRvIHVwZGF0ZSB0aWNrZXQnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldFNhdmluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgICA8aDI+TG9hZGluZyB0aWNrZXQuLi48L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcblxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgRWRpdCBUaWNrZXRcclxuICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAge2Vycm9ycy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5tYXAoKGVycm9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBUaXRsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1iLTNcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgVGl0bGVcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUHJpY2UgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0zXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXItMlwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NhdmluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzYXZpbmcgPyAnVXBkYXRpbmcuLi4nIDogJ1VwZGF0ZSd9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFRpY2tldFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
(function() {
var exports = {};
exports.id = "pages/tickets/new";
exports.ids = ["pages/tickets/new"];
exports.modules = {

/***/ "./pages/tickets/new.js":
/*!******************************!*\
  !*** ./pages/tickets/new.js ***!
  \******************************/
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

var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\tickets\\new.js";




const NewTicketPage = () => {
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: errors,
    1: setErrors
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const onSubmit = async event => {
    event.preventDefault();
    setErrors([]);
    setLoading(true);

    try {
      await axios__WEBPACK_IMPORTED_MODULE_3___default().post('/api/tickets', {
        title,
        price: parseFloat(price)
      }); // Ticket created successfully

      next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data) {
        setErrors(err.response.data.errors || [{
          message: 'Unable to create ticket'
        }]);
      } else {
        setErrors([{
          message: 'Unable to create ticket'
        }]);
      }
    } finally {
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container mt-5",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "mb-4",
          children: "Create Ticket"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined), errors.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "alert alert-danger",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "mb-0",
            children: errors.map((error, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: error.message
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group mb-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              className: "form-control",
              value: title,
              onChange: e => setTitle(e.target.value),
              placeholder: "Enter ticket title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group mb-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Price"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "number",
              className: "form-control",
              value: price,
              onChange: e => setPrice(e.target.value),
              placeholder: "Enter ticket price",
              min: "0",
              step: "0.01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "d-flex gap-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              className: "btn btn-primary",
              disabled: loading,
              children: loading ? 'Creating...' : 'Create Ticket'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "btn btn-secondary",
              onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/'),
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NewTicketPage);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/tickets/new.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy90aWNrZXRzL25ldy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJOZXdUaWNrZXRQYWdlIiwidGl0bGUiLCJzZXRUaXRsZSIsInVzZVN0YXRlIiwicHJpY2UiLCJzZXRQcmljZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwYXJzZUZsb2F0IiwiUm91dGVyIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZSIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHLE1BQU07QUFDMUIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkosK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7O0FBRUEsUUFBTU8sUUFB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dUJBQVMsRUFBQyxpQkFGWjtBQUdFLHNCQUFRLEVBQUVyQixPQUhaO0FBQUEsd0JBS0dBLE9BQU8sR0FBRyxhQUFILEdBQW1CO0FBTDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFVRTtBQUNFLGtCQUFJLEVBQUMsUUFEUDtBQUVFLHVCQUFTLEVBQUMsbUJBRlo7QUFHRSxxQkFBTyxFQUFFLE1BQU1TLHVEQUFBLENBQVksR0FBWixDQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlGRCxDQWpJRDs7QUFtSUEsK0RBQWVmLGFBQWYsRTs7Ozs7Ozs7Ozs7QUN4SUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvdGlja2V0cy9uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgTmV3VGlja2V0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0RXJyb3JzKFtdKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS90aWNrZXRzJywge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIHByaWNlOiBwYXJzZUZsb2F0KHByaWNlKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFRpY2tldCBjcmVhdGVkIHN1Y2Nlc3NmdWxseVxyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICBpZiAoZXJyLnJlc3BvbnNlICYmIGVyci5yZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgc2V0RXJyb3JzKFxyXG4gICAgICAgICAgZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzIHx8IFtcclxuICAgICAgICAgICAgeyBtZXNzYWdlOiAnVW5hYmxlIHRvIGNyZWF0ZSB0aWNrZXQnIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9ycyhbXHJcbiAgICAgICAgICB7IG1lc3NhZ2U6ICdVbmFibGUgdG8gY3JlYXRlIHRpY2tldCcgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcblxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgQ3JlYXRlIFRpY2tldFxyXG4gICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICB7ZXJyb3JzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm1hcCgoZXJyb3IsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG5cclxuICAgICAgICAgICAgey8qIFRpdGxlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItM1wiPlxyXG5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICBUaXRsZVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aWNrZXQgdGl0bGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQcmljZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1iLTNcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgUHJpY2VcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aWNrZXQgcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZ2FwLTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAnQ3JlYXRpbmcuLi4nIDogJ0NyZWF0ZSBUaWNrZXQnfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1RpY2tldFBhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
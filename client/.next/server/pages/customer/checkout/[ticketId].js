(function() {
var exports = {};
exports.id = "pages/customer/checkout/[ticketId]";
exports.ids = ["pages/customer/checkout/[ticketId]"];
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

/***/ "./pages/customer/checkout/[ticketId].js":
/*!***********************************************!*\
  !*** ./pages/customer/checkout/[ticketId].js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/build-client */ "./api/build-client.js");

var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\customer\\checkout\\[ticketId].js";




const CheckoutPage = ({
  ticket
}) => {
  const {
    0: paymentMethod,
    1: setPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("stripe");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_3__.default)();
      const response = await client.post("/api/customers/orders", {
        ticketId: ticket.id,
        paymentMethod
      }); // Stripe

      if (paymentMethod === "stripe") {
        const responseCheckout = await client.post("/api/customers/payments", {
          orderId: response.data.data.id,
          amount: ticket.price // Convert to cents

        });
        window.location.href = responseCheckout.data.url;
        return;
      } // COD


      next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/customer/orders");
    } catch (err) {
      var _err$response, _err$response$data, _err$response$data$er, _err$response$data$er2;

      console.log(err);
      setError(((_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : (_err$response$data$er = _err$response$data.errors) === null || _err$response$data$er === void 0 ? void 0 : (_err$response$data$er2 = _err$response$data$er[0]) === null || _err$response$data$er2 === void 0 ? void 0 : _err$response$data$er2.message) || "Something went wrong");
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container mt-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "mb-4",
      children: "Checkout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-7",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-header",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              className: "mb-0",
              children: "Order Summary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: ticket.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-muted",
              children: ["Ticket ID: ", ticket.id]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "d-flex justify-content-between",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Ticket Price"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: ["\u20B9", ticket.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "d-flex justify-content-between mt-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: ["\u20B9", ticket.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-header",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              className: "mb-0",
              children: "Payment Method"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "form-check mb-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "form-check-input",
                type: "radio",
                name: "paymentMethod",
                id: "stripe",
                value: "stripe",
                checked: paymentMethod === "stripe",
                onChange: () => setPaymentMethod("stripe")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "form-check-label",
                htmlFor: "stripe",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Pay with Stripe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-muted",
                  children: "Secure online payment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "form-check mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "form-check-input",
                type: "radio",
                name: "paymentMethod",
                id: "cod",
                value: "cod",
                checked: paymentMethod === "cod",
                onChange: () => setPaymentMethod("cod")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "form-check-label",
                htmlFor: "cod",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Cash on Delivery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-muted",
                  children: "Pay when your order is delivered"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, undefined), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "alert alert-danger",
              children: error
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "btn btn-primary btn-block",
              onClick: handleSubmit,
              disabled: loading,
              children: loading ? "Processing..." : paymentMethod === "stripe" ? "Pay with Stripe" : "Place Order"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "btn btn-secondary btn-block mt-2",
              onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default().back('/customer/tickets'),
              children: "Back"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

CheckoutPage.getInitialProps = async (context) => {
  const {
    ticketId
  } = context.query;

  try {
    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_3__.default)(context);
    const response = await client.get(`/api/customers/tickets/${ticketId}`);
    return {
      ticket: response.data
    };
  } catch (err) {
    return {
      ticket: null
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutPage);

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
var __webpack_exports__ = (__webpack_exec__("./pages/customer/checkout/[ticketId].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2N1c3RvbWVyL2NoZWNrb3V0L1t0aWNrZXRJZF0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiY29udGV4dCIsInJlcSIsImF4aW9zIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJDaGVja291dFBhZ2UiLCJ0aWNrZXQiLCJwYXltZW50TWV0aG9kIiwic2V0UGF5bWVudE1ldGhvZCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwiY2xpZW50IiwiYnVpbGRDbGllbnQiLCJyZXNwb25zZSIsInBvc3QiLCJ0aWNrZXRJZCIsImlkIiwicmVzcG9uc2VDaGVja291dCIsIm9yZGVySWQiLCJkYXRhIiwiYW1vdW50IiwicHJpY2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1cmwiLCJSb3V0ZXIiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwibWVzc2FnZSIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFlLENBQUNBLE9BQU8sR0FBRyxFQUFYLEtBQWtCO0FBQy9CLFFBQU07QUFBRUM7QUFBRixNQUFVRCxPQUFoQjs7QUFFQSxZQUFtQztBQUNqQyxXQUFPRSxtREFBQSxDQUFhO0FBQ2xCQyxhQUFPLEVBQUUsdUJBRFM7QUFFbEJDLGFBQU8sRUFBRUgsR0FBRyxH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STtBQUNJLHVCQUFTLEVBQUMsa0NBRGQ7QUFFSSxxQkFBTyxFQUFFLE1BQ0x1Qix1REFBQSxDQUFZLG1CQUFaLENBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBOUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE2SUgsQ0F2TEQ7O0FBeUxBekIsWUFBWSxDQUFDZ0MsZUFBYixHQUErQixPQUMzQnJDLE9BRDJCLEtBRTFCO0FBQ0QsUUFBTTtBQUFFbUI7QUFBRixNQUFlbkIsT0FBTyxDQUFDc0MsS0FBN0I7O0FBRUEsTUFBSTtBQUNBLFVBQU12QixNQUFNLEdBQUdDLDBEQUFXLENBQUNoQixPQUFELENBQTFCO0FBRUEsVUFBTWlCLFFBQVEsR0FBRyxNQUFNRixNQUFNLENBQUN3QixHQUFQLENBQ2xCLDBCQUF5QnBCLFFBQVMsRUFEaEIsQ0FBdkI7QUFHQSxXQUFPO0FBQ0hiLFlBQU0sRUFBRVcsUUFBUSxDQUFDTTtBQURkLEtBQVA7QUFHSCxHQVRELENBU0UsT0FBT1EsR0FBUCxFQUFZO0FBQ1YsV0FBTztBQUNIekIsWUFBTSxFQUFFO0FBREwsS0FBUDtBQUdIO0FBQ0osQ0FuQkQ7O0FBcUJBLCtEQUFlRCxZQUFmLEU7Ozs7Ozs7Ozs7O0FDbE5BLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2N1c3RvbWVyL2NoZWNrb3V0L1t0aWNrZXRJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQgPSB7fSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgICAgaGVhZGVyczogcmVxID8gcmVxLmhlYWRlcnMgOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnLycsXHJcbiAgfSk7XHJcbn07IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gXCIuLi8uLi8uLi9hcGkvYnVpbGQtY2xpZW50XCI7XHJcblxyXG5jb25zdCBDaGVja291dFBhZ2UgPSAoeyB0aWNrZXQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3BheW1lbnRNZXRob2QsIHNldFBheW1lbnRNZXRob2RdID0gdXNlU3RhdGUoXCJzdHJpcGVcIik7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudCgpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5wb3N0KFwiL2FwaS9jdXN0b21lcnMvb3JkZXJzXCIsIHtcclxuICAgICAgICAgICAgICAgIHRpY2tldElkOiB0aWNrZXQuaWQsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFN0cmlwZVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kID09PSBcInN0cmlwZVwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VDaGVja291dCA9IGF3YWl0IGNsaWVudC5wb3N0KFwiL2FwaS9jdXN0b21lcnMvcGF5bWVudHNcIiwge1xyXG4gICAgICAgICAgICAgICAgb3JkZXJJZDogcmVzcG9uc2UuZGF0YS5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aWNrZXQucHJpY2UsIC8vIENvbnZlcnQgdG8gY2VudHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlQ2hlY2tvdXQuZGF0YS51cmw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENPRFxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9jdXN0b21lci9vcmRlcnNcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICBzZXRFcnJvcihcclxuICAgICAgICAgICAgICAgIGVyci5yZXNwb25zZT8uZGF0YT8uZXJyb3JzPy5bMF0/Lm1lc3NhZ2UgfHxcclxuICAgICAgICAgICAgICAgIFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTRcIj5DaGVja291dDwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIExFRlQgU0lERSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTBcIj5PcmRlciBTdW1tYXJ5PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt0aWNrZXQudGl0bGV9PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGlja2V0IElEOiB7dGlja2V0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGlja2V0IFByaWNlPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigrl7dGlja2V0LnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VG90YWw8L3N0cm9uZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oK5e3RpY2tldC5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBSSUdIVCBTSURFICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgTWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNUUklQRSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudE1ldGhvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RyaXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzdHJpcGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2QgPT09IFwic3RyaXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBheW1lbnRNZXRob2QoXCJzdHJpcGVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInN0cmlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlBheSB3aXRoIFN0cmlwZTwvc3Ryb25nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWN1cmUgb25saW5lIHBheW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDT0QgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBheW1lbnRNZXRob2RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY29kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kID09PSBcImNvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXltZW50TWV0aG9kKFwiY29kXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjb2RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhc2ggb24gRGVsaXZlcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheSB3aGVuIHlvdXIgb3JkZXIgaXMgZGVsaXZlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiUHJvY2Vzc2luZy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGF5bWVudE1ldGhvZCA9PT0gXCJzdHJpcGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlBheSB3aXRoIFN0cmlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiUGxhY2UgT3JkZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tYmxvY2sgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLmJhY2soJy9jdXN0b21lci90aWNrZXRzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbkNoZWNrb3V0UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoXHJcbiAgICBjb250ZXh0XHJcbikgPT4ge1xyXG4gICAgY29uc3QgeyB0aWNrZXRJZCB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGNvbnRleHQpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5nZXQoXHJcbiAgICAgICAgICAgIGAvYXBpL2N1c3RvbWVycy90aWNrZXRzLyR7dGlja2V0SWR9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGlja2V0OiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0aWNrZXQ6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0UGFnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
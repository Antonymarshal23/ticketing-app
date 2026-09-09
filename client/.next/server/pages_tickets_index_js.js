exports.id = "pages_tickets_index_js";
exports.ids = ["pages_tickets_index_js"];
exports.modules = {

/***/ "./pages/tickets/index.js":
/*!********************************!*\
  !*** ./pages/tickets/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\node\\Ticketing-dev\\client\\pages\\tickets\\index.js";




const TicketsPage = ({
  currentUser
}) => {
  var _Router$router2, _Router$router3, _Router$router3$query;

  const {
    0: tickets,
    1: setTickets
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: ticketsCount,
    1: setTicketsCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const limit = 10; // Get offset from URL

  const getOffsetFromUrl = () => {
    var _Router$router, _Router$router$query;

    const offset = parseInt((_Router$router = (next_router__WEBPACK_IMPORTED_MODULE_3___default().router)) === null || _Router$router === void 0 ? void 0 : (_Router$router$query = _Router$router.query) === null || _Router$router$query === void 0 ? void 0 : _Router$router$query.offset, 10);
    return Number.isNaN(offset) ? 0 : offset;
  };

  const fetchTickets = async (currentOffset = 0) => {
    try {
      var _response$data, _countResponse$data;

      setLoading(true);
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/api/tickets?offset=${currentOffset}&limit=${limit}`);
      const countResponse = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/tickets');
      setTickets(((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) || []);
      setTicketsCount(((_countResponse$data = countResponse.data) === null || _countResponse$data === void 0 ? void 0 : _countResponse$data.data) || []);
    } catch (err) {
      console.error(err);
      setError('Unable to load tickets');
    } finally {
      setLoading(false);
    }
  }; // Load page based on URL


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(next_router__WEBPACK_IMPORTED_MODULE_3___default().router.isReady)) return;
    const currentOffset = getOffsetFromUrl();
    fetchTickets(currentOffset);
  }, [(_Router$router2 = (next_router__WEBPACK_IMPORTED_MODULE_3___default().router)) === null || _Router$router2 === void 0 ? void 0 : _Router$router2.isReady, (_Router$router3 = (next_router__WEBPACK_IMPORTED_MODULE_3___default().router)) === null || _Router$router3 === void 0 ? void 0 : (_Router$router3$query = _Router$router3.query) === null || _Router$router3$query === void 0 ? void 0 : _Router$router3$query.offset]); // Change pagination and URL

  const changePage = newOffset => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
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
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined);
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
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined);
  }

  const currentOffset = getOffsetFromUrl();
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
      }, undefined), currentUser && currentUser.type === 'company' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn btn-success",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/tickets/new'),
        children: "Create Ticket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: tickets.map(ticket => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["Price: $", ticket.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["Available: ", ticket.quantity]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, undefined), currentUser && currentUser.type === 'company' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "btn btn-warning",
              style: {
                marginRight: '250px'
              },
              onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/tickets/${ticket.id}/edit`),
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 19
            }, undefined) : currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "btn btn-primary",
              onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/customer/checkout/${ticket.id}`),
              children: "Purchase"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 19
            }, undefined) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, undefined)
      }, ticket.id, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex justify-content-between align-items-center mt-4 mb-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn btn-secondary",
        disabled: currentOffset === 0,
        onClick: () => changePage(Math.max(0, currentOffset - limit)),
        children: "Previous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Showing items ", currentOffset + 1, " -", ' ', currentOffset + tickets.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn btn-secondary",
        disabled: tickets.length < limit,
        onClick: () => changePage(currentOffset + limit),
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TicketsPage);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy90aWNrZXRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRpY2tldHNQYWdlIiwiY3VycmVudFVzZXIiLCJ0aWNrZXRzIiwic2V0VGlja2V0cyIsInVzZVN0YXRlIiwidGlja2V0c0NvdW50Iiwic2V0VGlja2V0c0NvdW50IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwibGltaXQiLCJnZXRPZmZzZXRGcm9tVXJsIiwib2Zmc2V0IiwicGFyc2VJbnQiLCJSb3V0ZXIiLCJxdWVyeSIsIk51bWJlciIsImlzTmFOIiwiZmV0Y2hUaWNrZXRzIiwiY3VycmVudE9mZnNldCIsInJlc3BvbnNlIiwiYXhpb3MiLCJjb3VudFJlc3BvbnNlIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJ1c2VFZmZlY3QiLCJpc1JlYWR5IiwiY2hhbmdlUGFnZSIsIm5ld09mZnNldCIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwic2hhbGxvdyIsImxlbmd0aCIsInR5cGUiLCJtYXAiLCJ0aWNrZXQiLCJ0aXRsZSIsInByaWNlIiwicXVhbnRpdHkiLCJtYXJnaW5SaWdodCIsImlkIiwiTWF0aCIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUI7QUFBQTs7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NGLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkosK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEtBQUQ7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QTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRixlQTZERTtBQUFLLGVBQVMsRUFBQyw2REFBZjtBQUFBLDhCQUVFO0FBQ0UsaUJBQVMsRUFBQyxtQkFEWjtBQUVFLGdCQUFRLEVBQUV0QixhQUFhLEtBQUssQ0FGOUI7QUFHRSxlQUFPLEVBQUUsTUFDUFMsVUFBVSxDQUFDYyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVl4QixhQUFhLEdBQUdULEtBQTVCLENBQUQsQ0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVlFO0FBQUEscUNBQ2lCUyxhQUFhLEdBQUcsQ0FEakMsUUFDc0MsR0FEdEMsRUFFR0EsYUFBYSxHQUFHbEIsT0FBTyxDQUFDZ0MsTUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGLGVBaUJFO0FBQ0UsaUJBQVMsRUFBQyxtQkFEWjtBQUVFLGdCQUFRLEVBQUVoQyxPQUFPLENBQUNnQyxNQUFSLEdBQWlCdkIsS0FGN0I7QUFHRSxlQUFPLEVBQUUsTUFBTWtCLFVBQVUsQ0FBQ1QsYUFBYSxHQUFHVCxLQUFqQixDQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTBGRCxDQXhLRDs7QUEwS0EsK0RBQWVYLFdBQWYsRSIsImZpbGUiOiJwYWdlc190aWNrZXRzX2luZGV4X2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgVGlja2V0c1BhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgY29uc3QgW3RpY2tldHMsIHNldFRpY2tldHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0aWNrZXRzQ291bnQsIHNldFRpY2tldHNDb3VudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGxpbWl0ID0gMTA7XHJcblxyXG4gIC8vIEdldCBvZmZzZXQgZnJvbSBVUkxcclxuICBjb25zdCBnZXRPZmZzZXRGcm9tVXJsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFyc2VJbnQoUm91dGVyLnJvdXRlcj8ucXVlcnk/Lm9mZnNldCwgMTApO1xyXG5cclxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4ob2Zmc2V0KSA/IDAgOiBvZmZzZXQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUaWNrZXRzID0gYXN5bmMgKGN1cnJlbnRPZmZzZXQgPSAwKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYC9hcGkvdGlja2V0cz9vZmZzZXQ9JHtjdXJyZW50T2Zmc2V0fSZsaW1pdD0ke2xpbWl0fWBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvdW50UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdGlja2V0cycpO1xyXG5cclxuICAgICAgc2V0VGlja2V0cyhyZXNwb25zZS5kYXRhPy5kYXRhIHx8IFtdKTtcclxuICAgICAgc2V0VGlja2V0c0NvdW50KGNvdW50UmVzcG9uc2UuZGF0YT8uZGF0YSB8fCBbXSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBzZXRFcnJvcignVW5hYmxlIHRvIGxvYWQgdGlja2V0cycpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gTG9hZCBwYWdlIGJhc2VkIG9uIFVSTFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIVJvdXRlci5yb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSBnZXRPZmZzZXRGcm9tVXJsKCk7XHJcblxyXG4gICAgZmV0Y2hUaWNrZXRzKGN1cnJlbnRPZmZzZXQpO1xyXG4gIH0sIFtSb3V0ZXIucm91dGVyPy5pc1JlYWR5LCBSb3V0ZXIucm91dGVyPy5xdWVyeT8ub2Zmc2V0XSk7XHJcblxyXG4gIC8vIENoYW5nZSBwYWdpbmF0aW9uIGFuZCBVUkxcclxuICBjb25zdCBjaGFuZ2VQYWdlID0gKG5ld09mZnNldCkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRobmFtZTogJy90aWNrZXRzJyxcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgb2Zmc2V0OiBuZXdPZmZzZXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB7XHJcbiAgICAgICAgc2hhbGxvdzogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICAgIDxoMj5Mb2FkaW5nIHRpY2tldHMuLi48L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgICA8aDI+e2Vycm9yfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSBnZXRPZmZzZXRGcm9tVXJsKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICBBdmFpbGFibGUgVGlja2V0cyAoe3RpY2tldHNDb3VudC5sZW5ndGh9KVxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIHtjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci50eXBlID09PSAnY29tcGFueScgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3RpY2tldHMvbmV3Jyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENyZWF0ZSBUaWNrZXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7dGlja2V0cy5tYXAoKHRpY2tldCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi00XCIga2V5PXt0aWNrZXQuaWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoND57dGlja2V0LnRpdGxlfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFByaWNlOiAke3RpY2tldC5wcmljZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgQXZhaWxhYmxlOiB7dGlja2V0LnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci50eXBlID09PSAnY29tcGFueScgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMjUwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvdGlja2V0cy8ke3RpY2tldC5pZH0vZWRpdGApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiBjdXJyZW50VXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvY3VzdG9tZXIvY2hlY2tvdXQvJHt0aWNrZXQuaWR9YClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQdXJjaGFzZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUGFnaW5hdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG10LTQgbWItNVwiPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudE9mZnNldCA9PT0gMH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIGNoYW5nZVBhZ2UoTWF0aC5tYXgoMCwgY3VycmVudE9mZnNldCAtIGxpbWl0KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFNob3dpbmcgaXRlbXMge2N1cnJlbnRPZmZzZXQgKyAxfSAteycgJ31cclxuICAgICAgICAgIHtjdXJyZW50T2Zmc2V0ICsgdGlja2V0cy5sZW5ndGh9XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17dGlja2V0cy5sZW5ndGggPCBsaW1pdH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2UoY3VycmVudE9mZnNldCArIGxpbWl0KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBOZXh0XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
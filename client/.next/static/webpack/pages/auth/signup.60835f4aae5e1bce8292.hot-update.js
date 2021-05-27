self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_rahul_Desktop_ticketproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_rahul_Desktop_ticketproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_rahul_Desktop_ticketproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_rahul_Desktop_ticketproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\rahul\\Desktop\\ticketproject\\client\\hooks\\use-request.js",
    _this = undefined,
    _s = $RefreshSig$();



/* harmony default export */ __webpack_exports__["default"] = (_s(function (_ref) {
  _s();

  var url = _ref.url,
      method = _ref.method,
      body = _ref.body;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      errors = _useState[0],
      setErrors = _useState[1];

  var doRequest = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_rahul_Desktop_ticketproject_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_rahul_Desktop_ticketproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var response;
      return C_Users_rahul_Desktop_ticketproject_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setErrors(null);
              _context.next = 4;
              return (axios__WEBPACK_IMPORTED_MODULE_3___default())[method](url, body);

            case 4:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              setErrors( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "alert alert-danger",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                  children: "Ooops..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 11
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                  className: "my-0",
                  children: _context.t0.response.data.errors.map(function (err) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                      children: err.message
                    }, err.message, false, {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 15
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 9
              }, _this));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function doRequest() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    doRequest: doRequest,
    errors: errors
  };
}, "CBiIfGMAaAtFFE/cKx87b00YZJU="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXJlcXVlc3QuanMiXSwibmFtZXMiOlsidXJsIiwibWV0aG9kIiwiYm9keSIsInVzZVN0YXRlIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiZG9SZXF1ZXN0IiwiYXhpb3MiLCJyZXNwb25zZSIsImRhdGEiLCJtYXAiLCJlcnIiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLCtEQUFlLG1CQUEyQjtBQUFBOztBQUFBLE1BQXhCQSxHQUF3QixRQUF4QkEsR0FBd0I7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNaQywrQ0FBUSxDQUFDLElBQUQsQ0FESTtBQUFBLE1BQ2pDQyxNQURpQztBQUFBLE1BQ3pCQyxTQUR5Qjs7QUFHeEMsTUFBTUMsU0FBUztBQUFBLHdTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVpELHVCQUFTLENBQUMsSUFBRCxDQUFUO0FBRlk7QUFBQSxxQkFHU0UsOENBQUssQ0FBQ04sTUFBRCxDQUFMLENBQWNELEdBQWQsRUFBbUJFLElBQW5CLENBSFQ7O0FBQUE7QUFHUk0sc0JBSFE7QUFBQSwrQ0FJUEEsUUFBUSxDQUFDQyxJQUpGOztBQUFBO0FBQUE7QUFBQTtBQU1kSix1QkFBUyxlQUNQO0FBQUsseUJBQVMsRUFBQyxvQkFBZjtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBSSwyQkFBUyxFQUFDLE1BQWQ7QUFBQSw0QkFDRyxZQUFJRyxRQUFKLENBQWFDLElBQWIsQ0FBa0JMLE1BQWxCLENBQXlCTSxHQUF6QixDQUE2QixVQUFDQyxHQUFEO0FBQUEsd0NBQzVCO0FBQUEsZ0NBQXVCQSxHQUFHLENBQUNDO0FBQTNCLHVCQUFTRCxHQUFHLENBQUNDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFENEI7QUFBQSxtQkFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFETyxDQUFUOztBQU5jO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVROLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFtQkEsU0FBTztBQUFFQSxhQUFTLEVBQVRBLFNBQUY7QUFBYUYsVUFBTSxFQUFOQTtBQUFiLEdBQVA7QUFDRCxDQXZCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3NpZ251cC42MDgzNWY0YWFlNWUxYmNlODI5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHVybCwgbWV0aG9kLCBib2R5IH0pID0+IHtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGRvUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0RXJyb3JzKG51bGwpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIGJvZHkpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcnMoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgIDxoND5Pb29wcy4uLjwvaDQ+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXktMFwiPlxyXG4gICAgICAgICAgICB7ZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLm1hcCgoZXJyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17ZXJyLm1lc3NhZ2V9PntlcnIubWVzc2FnZX08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZG9SZXF1ZXN0LCBlcnJvcnMgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
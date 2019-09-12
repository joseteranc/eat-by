webpackHotUpdate("main",{

/***/ "./src/components/Filter.js":
/*!**********************************!*\
  !*** ./src/components/Filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/joseteran/neuefische/eat-by/src/components/Filter.js";


function Filter(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.filter.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.filter.options.map(option => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Filter, {
      key: option.name,
      option: option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ })

})
//# sourceMappingURL=main.c4adc4277c321683a15c.hot-update.js.map
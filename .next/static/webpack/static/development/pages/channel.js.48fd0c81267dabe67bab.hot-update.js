webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./pages/channel/index.js":
/*!********************************!*\
  !*** ./pages/channel/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles */ "./pages/channel/styles.js");









var _jsxFileName = "/Users/davidhiguita/Documents/dev/study/platzi/nextjs/podcasts/pages/channel/index.js";





var Channel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Channel, _React$Component);

  function Channel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Channel);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Channel).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Channel, [{
    key: "render",
    value: function render() {
      var channel = this.props.channel;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1969584933 " + "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_12__["default"].__hash) + " " + "channel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1969584933 " + "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_12__["default"].__hash) + " " + "channel__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, channel.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1969584933 " + "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_12__["default"].__hash) + " " + "channel__childs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "CHILDS"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1969584933 " + "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_12__["default"].__hash) + " " + "channel__clips",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "CLIPS"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: _styles__WEBPACK_IMPORTED_MODULE_12__["default"].__hash,
        __self: this
      }, _styles__WEBPACK_IMPORTED_MODULE_12__["default"]), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1969584933",
        __self: this
      }, "body{height:100vh;margin:0;padding:0;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGhpZ3VpdGEvRG9jdW1lbnRzL2Rldi9zdHVkeS9wbGF0emkvbmV4dGpzL3BvZGNhc3RzL3BhZ2VzL2NoYW5uZWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NtQyxBQUdzQyxhQUNKLFNBQ0MsVUFDRSxZQUNoQiIsImZpbGUiOiIvVXNlcnMvZGF2aWRoaWd1aXRhL0RvY3VtZW50cy9kZXYvc3R1ZHkvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9jaGFubmVsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNsYXNzIENoYW5uZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgICAgIGNvbnN0IHsgaWQ6IGNoYW5uZWxJZCB9ID0gcXVlcnk7XG4gICAgICAgIGNvbnN0IFtyZXNDaGFubmVsLCByZXNTZXJpZXMsIHJlc0NsaXBzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfWApLFxuICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2NoaWxkX2NoYW5uZWxzYCksXG4gICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vYXVkaW9fY2xpcHNgKVxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlc0NoYW5uZWwuanNvbigpO1xuICAgICAgICBjb25zdCB7IGNoYW5uZWwgfSA9IGRhdGFDaGFubmVsLmJvZHk7XG4gICAgICAgIGNvbnN0IGRhdGFTZXJpZXMgPSBhd2FpdCByZXNTZXJpZXMuanNvbigpO1xuICAgICAgICBjb25zdCB7IGNoYW5uZWxzOiBzZXJpZXMgfSA9IGRhdGFTZXJpZXMuYm9keTtcbiAgICAgICAgY29uc3QgZGF0YUNsaXBzID0gYXdhaXQgcmVzQ2xpcHMuanNvbigpO1xuICAgICAgICBjb25zdCB7IGF1ZGlvX2NsaXBzOiBjbGlwcyB9ID0gZGF0YUNsaXBzLmJvZHk7XG5cbiAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCwgY2xpcHMsIHNlcmllcyB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2hhbm5lbFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYW5uZWxfX3RpdGxlXCI+e2NoYW5uZWwudGl0bGV9PC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYW5uZWxfX2NoaWxkc1wiPkNISUxEUzwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGFubmVsX19jbGlwc1wiPkNMSVBTPC9zZWN0aW9uPlxuICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5uZWw7Il19 */\n/*@ sourceURL=/Users/davidhiguita/Documents/dev/study/platzi/nextjs/podcasts/pages/channel/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, channelId, _ref2, _ref3, resChannel, resSeries, resClips, dataChannel, channel, dataSeries, series, dataClips, clips;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                channelId = query.id;
                _context.next = 4;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([fetch("https://api.audioboom.com/channels/".concat(channelId)), fetch("https://api.audioboom.com/channels/".concat(channelId, "/child_channels")), fetch("https://api.audioboom.com/channels/".concat(channelId, "/audio_clips"))]);

              case 4:
                _ref2 = _context.sent;
                _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 3);
                resChannel = _ref3[0];
                resSeries = _ref3[1];
                resClips = _ref3[2];
                _context.next = 11;
                return resChannel.json();

              case 11:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel;
                _context.next = 15;
                return resSeries.json();

              case 15:
                dataSeries = _context.sent;
                series = dataSeries.body.channels;
                _context.next = 19;
                return resClips.json();

              case 19:
                dataClips = _context.sent;
                clips = dataClips.body.audio_clips;
                return _context.abrupt("return", {
                  channel: channel,
                  clips: clips,
                  series: series
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Channel;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Channel);

/***/ })

})
//# sourceMappingURL=channel.js.48fd0c81267dabe67bab.hot-update.js.map
webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/clip/index.js":
/*!**********************************!*\
  !*** ./components/clip/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/clip/styles.js");
var _jsxFileName = "/Users/davidhiguita/Documents/dev/study/platzi/nextjs/podcasts/components/clip/index.js";





var Channel = function Channel(_ref) {
  var channel = _ref.channel;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/channel?id=".concat(channel.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "channel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "channel__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: channel.urls.logo_image.original,
    alt: "channel",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "channel__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, channel.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_3__["default"])));
};

/* harmony default export */ __webpack_exports__["default"] = (Channel);

/***/ }),

/***/ "./components/clip/styles.js":
/*!***********************************!*\
  !*** ./components/clip/styles.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".channel.jsx-1744521184{border:solid green 2px;border-radius:10px;cursor:pointer;display:grid;grid-template-areas:\"image\" \"title\";grid-template-columns:1fr;grid-template-rows:1fr 40px;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-1744521184:hover{box-shadow:0 0 5px 5px rgba(0,0,0,0.3);}.channel__image.jsx-1744521184{grid-area:image;position:relative;}.channel__image.jsx-1744521184 img.jsx-1744521184{border-radius:7px 7px 0 0;height:100%;max-width:100%;position:absolute;width:100%;}.channel__title.jsx-1744521184{background-color:rgba(0,0,0,0.6);border-radius:0 0 7px 7px;color:white;grid-area:title;text-align:center;}");

_defaultExport.__hash = "1744521184";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

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
/* harmony import */ var _components_channel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/channel */ "./components/channel/index.js");
/* harmony import */ var _components_clip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/clip */ "./components/clip/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./pages/channel/styles.js");









var _jsxFileName = "/Users/davidhiguita/Documents/dev/study/platzi/nextjs/podcasts/pages/channel/index.js";







var ChannelPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ChannelPage, _React$Component);

  function ChannelPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ChannelPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ChannelPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ChannelPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          channel = _this$props.channel,
          clips = _this$props.clips,
          series = _this$props.series;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1969584933 " + "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "channel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1969584933 " + "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "channel__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, channel.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1969584933 " + "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "channel__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1969584933 " + "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "channel__childs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, series.map(function (serie) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_channel__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: serie.id,
          channel: serie,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        });
      }), !series.length && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1969584933 " + "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "not-found-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Not childs found")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1969584933 " + "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "channel__clips",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, clips.map(function (clip) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_clip__WEBPACK_IMPORTED_MODULE_13__["default"], {
          key: clip.id,
          clip: clips,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].__hash,
        __self: this
      }, _styles__WEBPACK_IMPORTED_MODULE_14__["default"]), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1969584933",
        __self: this
      }, "body{height:100vh;margin:0;padding:0;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGhpZ3VpdGEvRG9jdW1lbnRzL2Rldi9zdHVkeS9wbGF0emkvbmV4dGpzL3BvZGNhc3RzL3BhZ2VzL2NoYW5uZWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURtQyxBQUdzQyxhQUNKLFNBQ0MsVUFDRSxZQUNoQiIsImZpbGUiOiIvVXNlcnMvZGF2aWRoaWd1aXRhL0RvY3VtZW50cy9kZXYvc3R1ZHkvcGxhdHppL25leHRqcy9wb2RjYXN0cy9wYWdlcy9jaGFubmVsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcblxuaW1wb3J0IENoYW5uZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGFubmVsJztcbmltcG9ydCBDbGlwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2xpcCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuXG5jbGFzcyBDaGFubmVsUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICAgICAgY29uc3QgeyBpZDogY2hhbm5lbElkIH0gPSBxdWVyeTtcbiAgICAgICAgY29uc3QgW3Jlc0NoYW5uZWwsIHJlc1NlcmllcywgcmVzQ2xpcHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9YCksXG4gICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vY2hpbGRfY2hhbm5lbHNgKSxcbiAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9hdWRpb19jbGlwc2ApXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVzQ2hhbm5lbC5qc29uKCk7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbCB9ID0gZGF0YUNoYW5uZWwuYm9keTtcbiAgICAgICAgY29uc3QgZGF0YVNlcmllcyA9IGF3YWl0IHJlc1Nlcmllcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbHM6IHNlcmllcyB9ID0gZGF0YVNlcmllcy5ib2R5O1xuICAgICAgICBjb25zdCBkYXRhQ2xpcHMgPSBhd2FpdCByZXNDbGlwcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHsgYXVkaW9fY2xpcHM6IGNsaXBzIH0gPSBkYXRhQ2xpcHMuYm9keTtcblxuICAgICAgICByZXR1cm4geyBjaGFubmVsLCBjbGlwcywgc2VyaWVzIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgY2xpcHMsXG4gICAgICAgICAgICBzZXJpZXNcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYW5uZWxfX3RpdGxlXCI+e2NoYW5uZWwudGl0bGV9PC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYW5uZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hhbm5lbF9fY2hpbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VyaWVzLm1hcChzZXJpZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWwga2V5PXtzZXJpZS5pZH0gY2hhbm5lbD17c2VyaWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHshc2VyaWVzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3QtZm91bmQtaW5mb1wiPk5vdCBjaGlsZHMgZm91bmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hhbm5lbF9fY2xpcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbGlwcy5tYXAoY2xpcCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsaXAga2V5PXtjbGlwLmlkfSBjbGlwPXtjbGlwc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5uZWxQYWdlOyJdfQ== */\n/*@ sourceURL=/Users/davidhiguita/Documents/dev/study/platzi/nextjs/podcasts/pages/channel/index.js */"));
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

  return ChannelPage;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ChannelPage);

/***/ })

})
//# sourceMappingURL=channel.js.5f6f465742d97b3d3c34.hot-update.js.map
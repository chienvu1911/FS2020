/*! For license information please see bundle.js.LICENSE */
!function(e){var _={};function r(t){if(_[t])return _[t].exports;var n=_[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=_,r.d=function(e,_,t){r.o(e,_)||Object.defineProperty(e,_,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,_){if(1&_&&(e=r(e)),8&_)return e;if(4&_&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&_&&"string"!=typeof e)for(var n in e)r.d(t,n,function(_){return e[_]}.bind(null,n));return t},r.n=function(e){var _=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(_,"a",_),_},r.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},r.p="dist/",r(r.s="./src/index.js")}({"./src/add-image.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _avatar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.jpg */ "./src/avatar.jpg");\n\n\nfunction addImage() {\n  var img = document.createElement("img");\n  img.alt = \'avatar\';\n  img.src = _avatar_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];\n  var body = document.querySelector("body");\n  body.appendChild(img);\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (addImage);\n\n//# sourceURL=webpack:///./src/add-image.js?')},"./src/avatar.jpg":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "55ac2e60c6dbc9783f2da114070e83ca.jpg");\n\n//# sourceURL=webpack:///./src/avatar.jpg?')},"./src/button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/button.scss");\n/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Button =\n/*#__PURE__*/\nfunction () {\n  function Button() {\n    _classCallCheck(this, Button);\n  }\n\n  _createClass(Button, [{\n    key: "render",\n    value: function render() {\n      var button = document.createElement("button");\n      button.innerHTML = "Button";\n      button.classList.add(\'my-button\');\n      var body = document.querySelector("body");\n      body.appendChild(button);\n    }\n  }]);\n\n  return Button;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (Button);\n\n//# sourceURL=webpack:///./src/button.js?')},"./src/button.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/button.scss?")},"./src/hello.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nfunction hello() {\n  console.log('Hello');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hello);\n\n//# sourceURL=webpack:///./src/hello.js?")},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello */ "./src/hello.js");\n/* harmony import */ var _add_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-image */ "./src/add-image.js");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/button.js");\n\n\n\nObject(_hello__WEBPACK_IMPORTED_MODULE_0__["default"])(); // addImage();\n\nvar button = new _button__WEBPACK_IMPORTED_MODULE_2__["default"]();\nbutton.render();\n\n//# sourceURL=webpack:///./src/index.js?')}});
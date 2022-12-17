"use strict";
(self["webpackChunkpractice"] = self["webpackChunkpractice"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 20px;\r\n}\r\n\r\n.form-control {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 300px;\r\n  \r\n}\r\n\r\ninput[type=\"text\"] {\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  width: 70%;\r\n}\r\n\r\n/* CHECKBOX START */\r\n\r\n/* Hide the checkbox */\r\n.units-toggle-input {\r\n  display: none;\r\n}\r\n\r\n/* Style the toggle label */\r\n.units-toggle-label {\r\n  position: relative; /* position the label relative to its parent element */\r\n  display: inline-block; /* display as an inline block */\r\n  cursor: pointer; /* change cursor to pointer on hover */\r\n  transition: all 0.2s; /* add a transition for the label */\r\n  font-size: 14px; /* set font size */\r\n  color: #333; /* set text color */\r\n}\r\n\r\n/* Style the toggle label when checked */\r\n.units-toggle-input:checked + .units-toggle-label {\r\n  color: white; /* change label text color when checked */\r\n}\r\n\r\n/* Style the toggle label text */\r\n.units-toggle-label-text {\r\n  display: inline-block; /* display as an inline block */\r\n  width: 40px; /* set width */\r\n  height: 20px; /* set height */\r\n  line-height: 20px; /* vertically center the label text */\r\n  text-align: center; /* center the label text */\r\n  border-radius: 20px; /* add rounded corners */\r\n  background-color: #ccc; /* set background color */\r\n  transition: all 0.2s; /* add a transition for the label text */\r\n}\r\n\r\n/* Style the toggle label text when checked */\r\n.units-toggle-input:checked + .units-toggle-label .units-toggle-label-text {\r\n  background-color: #333; /* change label text background color when checked */\r\n}\r\n\r\n/* Style the toggle label text when not checked */\r\n.units-toggle-input:not(:checked) + .units-toggle-label .units-toggle-label-text::before {\r\n  content: \"C\"; /* change label text when not checked */\r\n}\r\n\r\n/* Style the toggle label text when checked */\r\n.units-toggle-input:checked + .units-toggle-label .units-toggle-label-text::before {\r\n  content: \"F\"; /* change label text when checked */\r\n}\r\n\r\n/* Style the input box */\r\n.form-control {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 300px;\r\n  position: relative; /* position the input box relative to its parent element */\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  width: 70%;\r\n}\r\n\r\n/* Style the toggle label text to appear inside the input box */\r\n.form-control .units-toggle-label-text {\r\n  position: absolute; /* position the label text absolute to the input box */\r\n  right: 10px; /* set right position */\r\n  top: -5px; /* set top position */\r\n  transform: translateY(-50%); /* vertically center the label text */\r\n}\r\n\r\n/* CHECKBOX END  */\r\n\r\n/* LOADING START */\r\n.loading {\r\n  display: none; /* initially hidden */\r\n  width: 100%; /* take up full width of parent element */\r\n  height: 100%; /* take up full height of parent element */\r\n  position: absolute; /* position on top of other elements */\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(\r\n    255,\r\n    255,\r\n    255,\r\n    0.8\r\n  ); /* semi-transparent white background */\r\n  z-index: 9999; /* high z-index to ensure it appears on top of other elements */\r\n}\r\n\r\n/* Add a spinner or loading indicator */\r\n.loading::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: -20px; /* negative half of the spinner's height */\r\n  margin-left: -20px; /* negative half of the spinner's width */\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 8px solid #333;\r\n  border-radius: 50%;\r\n  border-top-color: #f3f3f3;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n/* LOADING END  */\r\n\r\n.search-btn {\r\n  font-size: 16px;\r\n  padding: 10px 20px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.results-container {\r\n  width: 300px;\r\n  margin-top: 20px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  padding: 20px;\r\n}\r\n\r\n.results-container p {\r\n  font-size: 14px;\r\n  margin: 5px 0;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;;AAEd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;AACZ;;AAEA,mBAAmB;;AAEnB,sBAAsB;AACtB;EACE,aAAa;AACf;;AAEA,2BAA2B;AAC3B;EACE,kBAAkB,EAAE,sDAAsD;EAC1E,qBAAqB,EAAE,+BAA+B;EACtD,eAAe,EAAE,sCAAsC;EACvD,oBAAoB,EAAE,mCAAmC;EACzD,eAAe,EAAE,kBAAkB;EACnC,WAAW,EAAE,mBAAmB;AAClC;;AAEA,wCAAwC;AACxC;EACE,YAAY,EAAE,yCAAyC;AACzD;;AAEA,gCAAgC;AAChC;EACE,qBAAqB,EAAE,+BAA+B;EACtD,WAAW,EAAE,cAAc;EAC3B,YAAY,EAAE,eAAe;EAC7B,iBAAiB,EAAE,qCAAqC;EACxD,kBAAkB,EAAE,0BAA0B;EAC9C,mBAAmB,EAAE,wBAAwB;EAC7C,sBAAsB,EAAE,yBAAyB;EACjD,oBAAoB,EAAE,wCAAwC;AAChE;;AAEA,6CAA6C;AAC7C;EACE,sBAAsB,EAAE,oDAAoD;AAC9E;;AAEA,iDAAiD;AACjD;EACE,YAAY,EAAE,uCAAuC;AACvD;;AAEA,6CAA6C;AAC7C;EACE,YAAY,EAAE,mCAAmC;AACnD;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,kBAAkB,EAAE,0DAA0D;AAChF;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;AACZ;;AAEA,+DAA+D;AAC/D;EACE,kBAAkB,EAAE,sDAAsD;EAC1E,WAAW,EAAE,uBAAuB;EACpC,SAAS,EAAE,qBAAqB;EAChC,2BAA2B,EAAE,qCAAqC;AACpE;;AAEA,kBAAkB;;AAElB,kBAAkB;AAClB;EACE,aAAa,EAAE,qBAAqB;EACpC,WAAW,EAAE,yCAAyC;EACtD,YAAY,EAAE,0CAA0C;EACxD,kBAAkB,EAAE,sCAAsC;EAC1D,MAAM;EACN,OAAO;EACP;;;;;GAKC,EAAE,sCAAsC;EACzC,aAAa,EAAE,+DAA+D;AAChF;;AAEA,uCAAuC;AACvC;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,iBAAiB,EAAE,0CAA0C;EAC7D,kBAAkB,EAAE,yCAAyC;EAC7D,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,yBAAyB;EACzB,kCAAkC;AACpC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;AACA,iBAAiB;;AAEjB;EACE,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,aAAa;AACf","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 20px;\r\n}\r\n\r\n.form-control {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 300px;\r\n  \r\n}\r\n\r\ninput[type=\"text\"] {\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  width: 70%;\r\n}\r\n\r\n/* CHECKBOX START */\r\n\r\n/* Hide the checkbox */\r\n.units-toggle-input {\r\n  display: none;\r\n}\r\n\r\n/* Style the toggle label */\r\n.units-toggle-label {\r\n  position: relative; /* position the label relative to its parent element */\r\n  display: inline-block; /* display as an inline block */\r\n  cursor: pointer; /* change cursor to pointer on hover */\r\n  transition: all 0.2s; /* add a transition for the label */\r\n  font-size: 14px; /* set font size */\r\n  color: #333; /* set text color */\r\n}\r\n\r\n/* Style the toggle label when checked */\r\n.units-toggle-input:checked + .units-toggle-label {\r\n  color: white; /* change label text color when checked */\r\n}\r\n\r\n/* Style the toggle label text */\r\n.units-toggle-label-text {\r\n  display: inline-block; /* display as an inline block */\r\n  width: 40px; /* set width */\r\n  height: 20px; /* set height */\r\n  line-height: 20px; /* vertically center the label text */\r\n  text-align: center; /* center the label text */\r\n  border-radius: 20px; /* add rounded corners */\r\n  background-color: #ccc; /* set background color */\r\n  transition: all 0.2s; /* add a transition for the label text */\r\n}\r\n\r\n/* Style the toggle label text when checked */\r\n.units-toggle-input:checked + .units-toggle-label .units-toggle-label-text {\r\n  background-color: #333; /* change label text background color when checked */\r\n}\r\n\r\n/* Style the toggle label text when not checked */\r\n.units-toggle-input:not(:checked) + .units-toggle-label .units-toggle-label-text::before {\r\n  content: \"C\"; /* change label text when not checked */\r\n}\r\n\r\n/* Style the toggle label text when checked */\r\n.units-toggle-input:checked + .units-toggle-label .units-toggle-label-text::before {\r\n  content: \"F\"; /* change label text when checked */\r\n}\r\n\r\n/* Style the input box */\r\n.form-control {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 300px;\r\n  position: relative; /* position the input box relative to its parent element */\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  width: 70%;\r\n}\r\n\r\n/* Style the toggle label text to appear inside the input box */\r\n.form-control .units-toggle-label-text {\r\n  position: absolute; /* position the label text absolute to the input box */\r\n  right: 10px; /* set right position */\r\n  top: -5px; /* set top position */\r\n  transform: translateY(-50%); /* vertically center the label text */\r\n}\r\n\r\n/* CHECKBOX END  */\r\n\r\n/* LOADING START */\r\n.loading {\r\n  display: none; /* initially hidden */\r\n  width: 100%; /* take up full width of parent element */\r\n  height: 100%; /* take up full height of parent element */\r\n  position: absolute; /* position on top of other elements */\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(\r\n    255,\r\n    255,\r\n    255,\r\n    0.8\r\n  ); /* semi-transparent white background */\r\n  z-index: 9999; /* high z-index to ensure it appears on top of other elements */\r\n}\r\n\r\n/* Add a spinner or loading indicator */\r\n.loading::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: -20px; /* negative half of the spinner's height */\r\n  margin-left: -20px; /* negative half of the spinner's width */\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 8px solid #333;\r\n  border-radius: 50%;\r\n  border-top-color: #f3f3f3;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n/* LOADING END  */\r\n\r\n.search-btn {\r\n  font-size: 16px;\r\n  padding: 10px 20px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.results-container {\r\n  width: 300px;\r\n  margin-top: 20px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  padding: 20px;\r\n}\r\n\r\n.results-container p {\r\n  font-size: 14px;\r\n  margin: 5px 0;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");


function init() {
  addInitialEventListeners();
}

function addInitialEventListeners() {
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector("#search");

  searchBtn.addEventListener("click", handleBtnClick);
  searchInput.addEventListener("keydown", handleKeyDown);
}

function renderData(isFahrenheit) {
  const resultsContainer = document.querySelector(".results-container");
  resultsContainer.innerHTML = "";
  if (!_app__WEBPACK_IMPORTED_MODULE_0__.weatherData.location) {
    const p = document.createElement("p");
    p.textContent = "Error: Could not retrieve weather data for that location.";
    resultsContainer.append(p);
    return;
  }

  const location = document.createElement("p");
  location.textContent = `Location: ${_app__WEBPACK_IMPORTED_MODULE_0__.weatherData.location}`;
  resultsContainer.append(location);

  const temperature = document.createElement("p");
  temperature.textContent = `Temperature: ${_app__WEBPACK_IMPORTED_MODULE_0__.weatherData.temp}°${
    isFahrenheit ? "F" : "C"
  }`;
  resultsContainer.append(temperature);

  const conditions = document.createElement("p");
  conditions.textContent = `Conditions: ${_app__WEBPACK_IMPORTED_MODULE_0__.weatherData.conditions}`;
  resultsContainer.append(conditions);

  const windSpeed = document.createElement("p");
  windSpeed.textContent = `Wind Speed: ${_app__WEBPACK_IMPORTED_MODULE_0__.weatherData.windSpeed} m/s`;
  resultsContainer.append(windSpeed);

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${_app__WEBPACK_IMPORTED_MODULE_0__.weatherData.humidity}%`;
  resultsContainer.append(humidity);
}

function showLoading() {
  const loadingElement = document.querySelector(".loading");
  loadingElement.style.display = "block";
}

function hideLoading() {
  const loadingElement = document.querySelector(".loading");
  loadingElement.style.display = "none";
}

let isFahrenheit = false;

const toggleButton = document.querySelector("#units-toggle");
toggleButton.addEventListener("click", handleUnitsToggle);

function handleUnitsToggle() {
  isFahrenheit = !isFahrenheit;
  (0,_app__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)();
}

async function handleBtnClick() {
  showLoading();
  const searchValue = document.querySelector("#search").value;
  await (0,_app__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(searchValue, isFahrenheit ? "imperial" : "metric");
  hideLoading();
  renderData(isFahrenheit);
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleBtnClick();
  }
}


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData),
/* harmony export */   "weatherData": () => (/* binding */ weatherData)
/* harmony export */ });
let weatherData = {};

async function getWeatherData(location = "London", units = "metric") {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=6f72982fa697b29337f32b3e360ac876`
    );

    if (!response.ok) {
      throw new Error(`Unable to fetch weather data for ${location}`);
    }

    const data = await response.json();
    weatherData = {
      location: data.name,
      temp: data.main.temp,
      conditions: data.weather[0].description,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
    };
  } catch (error) {
    console.error(error);
  }
}

/*

`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=6f72982fa697b29337f32b3e360ac876`

1. Set up a blank HTML document with the appropriate links 
to your JavaScript and CSS files.

2. Write the functions that hit the API. You’re going to want 
functions that can take a location and return the weather data 
for that location. For now, just console.log() the information.

3. Write the functions that process the JSON data you’re getting 
from the API and return an object with only the data you require for your app.

4. Set up a simple form that will let users input their location 
and will fetch the weather info (still just console.log() it).

5. Display the information on your webpage!

6. Add any styling you like!

7. You should be able to search for a specific location and toggle 
displaying the data in Fahrenheit or Celsius.

8. You should change the look of the page based on the data.

Optional: add a ‘loading’ component that displays from the time 
the form is submitted until the information comes back from the API.
Push that baby to github and share your solution below!
*/


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");



(0,_UI__WEBPACK_IMPORTED_MODULE_1__["default"])();

// API KEY: 6f72982fa697b29337f32b3e360ac876


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRk87QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBLDJEQUEyRCxTQUFTLFNBQVMsTUFBTTtBQUNuRjtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdERxQjtBQUNHO0FBQ3hCO0FBQ0EsK0NBQUk7QUFDSjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3ByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3ByYWN0aWNlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3ByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3ByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY2UvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3ByYWN0aWNlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRyb2wge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ0hFQ0tCT1ggU1RBUlQgKi9cXHJcXG5cXHJcXG4vKiBIaWRlIHRoZSBjaGVja2JveCAqL1xcclxcbi51bml0cy10b2dnbGUtaW5wdXQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRvZ2dsZSBsYWJlbCAqL1xcclxcbi51bml0cy10b2dnbGUtbGFiZWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBwb3NpdGlvbiB0aGUgbGFiZWwgcmVsYXRpdmUgdG8gaXRzIHBhcmVudCBlbGVtZW50ICovXFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIGRpc3BsYXkgYXMgYW4gaW5saW5lIGJsb2NrICovXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIGNoYW5nZSBjdXJzb3IgdG8gcG9pbnRlciBvbiBob3ZlciAqL1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IC8qIGFkZCBhIHRyYW5zaXRpb24gZm9yIHRoZSBsYWJlbCAqL1xcclxcbiAgZm9udC1zaXplOiAxNHB4OyAvKiBzZXQgZm9udCBzaXplICovXFxyXFxuICBjb2xvcjogIzMzMzsgLyogc2V0IHRleHQgY29sb3IgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRvZ2dsZSBsYWJlbCB3aGVuIGNoZWNrZWQgKi9cXHJcXG4udW5pdHMtdG9nZ2xlLWlucHV0OmNoZWNrZWQgKyAudW5pdHMtdG9nZ2xlLWxhYmVsIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTsgLyogY2hhbmdlIGxhYmVsIHRleHQgY29sb3Igd2hlbiBjaGVja2VkICovXFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0b2dnbGUgbGFiZWwgdGV4dCAqL1xcclxcbi51bml0cy10b2dnbGUtbGFiZWwtdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIGRpc3BsYXkgYXMgYW4gaW5saW5lIGJsb2NrICovXFxyXFxuICB3aWR0aDogNDBweDsgLyogc2V0IHdpZHRoICovXFxyXFxuICBoZWlnaHQ6IDIwcHg7IC8qIHNldCBoZWlnaHQgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyAvKiB2ZXJ0aWNhbGx5IGNlbnRlciB0aGUgbGFiZWwgdGV4dCAqL1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBjZW50ZXIgdGhlIGxhYmVsIHRleHQgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IC8qIGFkZCByb3VuZGVkIGNvcm5lcnMgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IC8qIHNldCBiYWNrZ3JvdW5kIGNvbG9yICovXFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yczsgLyogYWRkIGEgdHJhbnNpdGlvbiBmb3IgdGhlIGxhYmVsIHRleHQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRvZ2dsZSBsYWJlbCB0ZXh0IHdoZW4gY2hlY2tlZCAqL1xcclxcbi51bml0cy10b2dnbGUtaW5wdXQ6Y2hlY2tlZCArIC51bml0cy10b2dnbGUtbGFiZWwgLnVuaXRzLXRvZ2dsZS1sYWJlbC10ZXh0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIGNoYW5nZSBsYWJlbCB0ZXh0IGJhY2tncm91bmQgY29sb3Igd2hlbiBjaGVja2VkICovXFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0b2dnbGUgbGFiZWwgdGV4dCB3aGVuIG5vdCBjaGVja2VkICovXFxyXFxuLnVuaXRzLXRvZ2dsZS1pbnB1dDpub3QoOmNoZWNrZWQpICsgLnVuaXRzLXRvZ2dsZS1sYWJlbCAudW5pdHMtdG9nZ2xlLWxhYmVsLXRleHQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiQ1xcXCI7IC8qIGNoYW5nZSBsYWJlbCB0ZXh0IHdoZW4gbm90IGNoZWNrZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRvZ2dsZSBsYWJlbCB0ZXh0IHdoZW4gY2hlY2tlZCAqL1xcclxcbi51bml0cy10b2dnbGUtaW5wdXQ6Y2hlY2tlZCArIC51bml0cy10b2dnbGUtbGFiZWwgLnVuaXRzLXRvZ2dsZS1sYWJlbC10ZXh0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIkZcXFwiOyAvKiBjaGFuZ2UgbGFiZWwgdGV4dCB3aGVuIGNoZWNrZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIGlucHV0IGJveCAqL1xcclxcbi5mb3JtLWNvbnRyb2wge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHBvc2l0aW9uIHRoZSBpbnB1dCBib3ggcmVsYXRpdmUgdG8gaXRzIHBhcmVudCBlbGVtZW50ICovXFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0b2dnbGUgbGFiZWwgdGV4dCB0byBhcHBlYXIgaW5zaWRlIHRoZSBpbnB1dCBib3ggKi9cXHJcXG4uZm9ybS1jb250cm9sIC51bml0cy10b2dnbGUtbGFiZWwtdGV4dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIHBvc2l0aW9uIHRoZSBsYWJlbCB0ZXh0IGFic29sdXRlIHRvIHRoZSBpbnB1dCBib3ggKi9cXHJcXG4gIHJpZ2h0OiAxMHB4OyAvKiBzZXQgcmlnaHQgcG9zaXRpb24gKi9cXHJcXG4gIHRvcDogLTVweDsgLyogc2V0IHRvcCBwb3NpdGlvbiAqL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAvKiB2ZXJ0aWNhbGx5IGNlbnRlciB0aGUgbGFiZWwgdGV4dCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDSEVDS0JPWCBFTkQgICovXFxyXFxuXFxyXFxuLyogTE9BRElORyBTVEFSVCAqL1xcclxcbi5sb2FkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIGluaXRpYWxseSBoaWRkZW4gKi9cXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiB0YWtlIHVwIGZ1bGwgd2lkdGggb2YgcGFyZW50IGVsZW1lbnQgKi9cXHJcXG4gIGhlaWdodDogMTAwJTsgLyogdGFrZSB1cCBmdWxsIGhlaWdodCBvZiBwYXJlbnQgZWxlbWVudCAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiBwb3NpdGlvbiBvbiB0b3Agb2Ygb3RoZXIgZWxlbWVudHMgKi9cXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcclxcbiAgICAyNTUsXFxyXFxuICAgIDI1NSxcXHJcXG4gICAgMjU1LFxcclxcbiAgICAwLjhcXHJcXG4gICk7IC8qIHNlbWktdHJhbnNwYXJlbnQgd2hpdGUgYmFja2dyb3VuZCAqL1xcclxcbiAgei1pbmRleDogOTk5OTsgLyogaGlnaCB6LWluZGV4IHRvIGVuc3VyZSBpdCBhcHBlYXJzIG9uIHRvcCBvZiBvdGhlciBlbGVtZW50cyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgYSBzcGlubmVyIG9yIGxvYWRpbmcgaW5kaWNhdG9yICovXFxyXFxuLmxvYWRpbmc6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMHB4OyAvKiBuZWdhdGl2ZSBoYWxmIG9mIHRoZSBzcGlubmVyJ3MgaGVpZ2h0ICovXFxyXFxuICBtYXJnaW4tbGVmdDogLTIwcHg7IC8qIG5lZ2F0aXZlIGhhbGYgb2YgdGhlIHNwaW5uZXIncyB3aWR0aCAqL1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IDhweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2YzZjNmMztcXHJcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIExPQURJTkcgRU5EICAqL1xcclxcblxcclxcbi5zZWFyY2gtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMtY29udGFpbmVyIHAge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBLG1CQUFtQjs7QUFFbkIsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGtCQUFrQixFQUFFLHNEQUFzRDtFQUMxRSxxQkFBcUIsRUFBRSwrQkFBK0I7RUFDdEQsZUFBZSxFQUFFLHNDQUFzQztFQUN2RCxvQkFBb0IsRUFBRSxtQ0FBbUM7RUFDekQsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxXQUFXLEVBQUUsbUJBQW1CO0FBQ2xDOztBQUVBLHdDQUF3QztBQUN4QztFQUNFLFlBQVksRUFBRSx5Q0FBeUM7QUFDekQ7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UscUJBQXFCLEVBQUUsK0JBQStCO0VBQ3RELFdBQVcsRUFBRSxjQUFjO0VBQzNCLFlBQVksRUFBRSxlQUFlO0VBQzdCLGlCQUFpQixFQUFFLHFDQUFxQztFQUN4RCxrQkFBa0IsRUFBRSwwQkFBMEI7RUFDOUMsbUJBQW1CLEVBQUUsd0JBQXdCO0VBQzdDLHNCQUFzQixFQUFFLHlCQUF5QjtFQUNqRCxvQkFBb0IsRUFBRSx3Q0FBd0M7QUFDaEU7O0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0Usc0JBQXNCLEVBQUUsb0RBQW9EO0FBQzlFOztBQUVBLGlEQUFpRDtBQUNqRDtFQUNFLFlBQVksRUFBRSx1Q0FBdUM7QUFDdkQ7O0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0UsWUFBWSxFQUFFLG1DQUFtQztBQUNuRDs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0IsRUFBRSwwREFBMEQ7QUFDaEY7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBLCtEQUErRDtBQUMvRDtFQUNFLGtCQUFrQixFQUFFLHNEQUFzRDtFQUMxRSxXQUFXLEVBQUUsdUJBQXVCO0VBQ3BDLFNBQVMsRUFBRSxxQkFBcUI7RUFDaEMsMkJBQTJCLEVBQUUscUNBQXFDO0FBQ3BFOztBQUVBLGtCQUFrQjs7QUFFbEIsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYSxFQUFFLHFCQUFxQjtFQUNwQyxXQUFXLEVBQUUseUNBQXlDO0VBQ3RELFlBQVksRUFBRSwwQ0FBMEM7RUFDeEQsa0JBQWtCLEVBQUUsc0NBQXNDO0VBQzFELE1BQU07RUFDTixPQUFPO0VBQ1A7Ozs7O0dBS0MsRUFBRSxzQ0FBc0M7RUFDekMsYUFBYSxFQUFFLCtEQUErRDtBQUNoRjs7QUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGlCQUFpQixFQUFFLDBDQUEwQztFQUM3RCxrQkFBa0IsRUFBRSx5Q0FBeUM7RUFDN0QsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQSxpQkFBaUI7O0FBRWpCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRyb2wge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ0hFQ0tCT1ggU1RBUlQgKi9cXHJcXG5cXHJcXG4vKiBIaWRlIHRoZSBjaGVja2JveCAqL1xcclxcbi51bml0cy10b2dnbGUtaW5wdXQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRvZ2dsZSBsYWJlbCAqL1xcclxcbi51bml0cy10b2dnbGUtbGFiZWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBwb3NpdGlvbiB0aGUgbGFiZWwgcmVsYXRpdmUgdG8gaXRzIHBhcmVudCBlbGVtZW50ICovXFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIGRpc3BsYXkgYXMgYW4gaW5saW5lIGJsb2NrICovXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIGNoYW5nZSBjdXJzb3IgdG8gcG9pbnRlciBvbiBob3ZlciAqL1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IC8qIGFkZCBhIHRyYW5zaXRpb24gZm9yIHRoZSBsYWJlbCAqL1xcclxcbiAgZm9udC1zaXplOiAxNHB4OyAvKiBzZXQgZm9udCBzaXplICovXFxyXFxuICBjb2xvcjogIzMzMzsgLyogc2V0IHRleHQgY29sb3IgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRvZ2dsZSBsYWJlbCB3aGVuIGNoZWNrZWQgKi9cXHJcXG4udW5pdHMtdG9nZ2xlLWlucHV0OmNoZWNrZWQgKyAudW5pdHMtdG9nZ2xlLWxhYmVsIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTsgLyogY2hhbmdlIGxhYmVsIHRleHQgY29sb3Igd2hlbiBjaGVja2VkICovXFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0b2dnbGUgbGFiZWwgdGV4dCAqL1xcclxcbi51bml0cy10b2dnbGUtbGFiZWwtdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIGRpc3BsYXkgYXMgYW4gaW5saW5lIGJsb2NrICovXFxyXFxuICB3aWR0aDogNDBweDsgLyogc2V0IHdpZHRoICovXFxyXFxuICBoZWlnaHQ6IDIwcHg7IC8qIHNldCBoZWlnaHQgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyAvKiB2ZXJ0aWNhbGx5IGNlbnRlciB0aGUgbGFiZWwgdGV4dCAqL1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBjZW50ZXIgdGhlIGxhYmVsIHRleHQgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IC8qIGFkZCByb3VuZGVkIGNvcm5lcnMgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IC8qIHNldCBiYWNrZ3JvdW5kIGNvbG9yICovXFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yczsgLyogYWRkIGEgdHJhbnNpdGlvbiBmb3IgdGhlIGxhYmVsIHRleHQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRvZ2dsZSBsYWJlbCB0ZXh0IHdoZW4gY2hlY2tlZCAqL1xcclxcbi51bml0cy10b2dnbGUtaW5wdXQ6Y2hlY2tlZCArIC51bml0cy10b2dnbGUtbGFiZWwgLnVuaXRzLXRvZ2dsZS1sYWJlbC10ZXh0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIGNoYW5nZSBsYWJlbCB0ZXh0IGJhY2tncm91bmQgY29sb3Igd2hlbiBjaGVja2VkICovXFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0b2dnbGUgbGFiZWwgdGV4dCB3aGVuIG5vdCBjaGVja2VkICovXFxyXFxuLnVuaXRzLXRvZ2dsZS1pbnB1dDpub3QoOmNoZWNrZWQpICsgLnVuaXRzLXRvZ2dsZS1sYWJlbCAudW5pdHMtdG9nZ2xlLWxhYmVsLXRleHQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiQ1xcXCI7IC8qIGNoYW5nZSBsYWJlbCB0ZXh0IHdoZW4gbm90IGNoZWNrZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRvZ2dsZSBsYWJlbCB0ZXh0IHdoZW4gY2hlY2tlZCAqL1xcclxcbi51bml0cy10b2dnbGUtaW5wdXQ6Y2hlY2tlZCArIC51bml0cy10b2dnbGUtbGFiZWwgLnVuaXRzLXRvZ2dsZS1sYWJlbC10ZXh0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIkZcXFwiOyAvKiBjaGFuZ2UgbGFiZWwgdGV4dCB3aGVuIGNoZWNrZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIGlucHV0IGJveCAqL1xcclxcbi5mb3JtLWNvbnRyb2wge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHBvc2l0aW9uIHRoZSBpbnB1dCBib3ggcmVsYXRpdmUgdG8gaXRzIHBhcmVudCBlbGVtZW50ICovXFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0b2dnbGUgbGFiZWwgdGV4dCB0byBhcHBlYXIgaW5zaWRlIHRoZSBpbnB1dCBib3ggKi9cXHJcXG4uZm9ybS1jb250cm9sIC51bml0cy10b2dnbGUtbGFiZWwtdGV4dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIHBvc2l0aW9uIHRoZSBsYWJlbCB0ZXh0IGFic29sdXRlIHRvIHRoZSBpbnB1dCBib3ggKi9cXHJcXG4gIHJpZ2h0OiAxMHB4OyAvKiBzZXQgcmlnaHQgcG9zaXRpb24gKi9cXHJcXG4gIHRvcDogLTVweDsgLyogc2V0IHRvcCBwb3NpdGlvbiAqL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAvKiB2ZXJ0aWNhbGx5IGNlbnRlciB0aGUgbGFiZWwgdGV4dCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDSEVDS0JPWCBFTkQgICovXFxyXFxuXFxyXFxuLyogTE9BRElORyBTVEFSVCAqL1xcclxcbi5sb2FkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIGluaXRpYWxseSBoaWRkZW4gKi9cXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiB0YWtlIHVwIGZ1bGwgd2lkdGggb2YgcGFyZW50IGVsZW1lbnQgKi9cXHJcXG4gIGhlaWdodDogMTAwJTsgLyogdGFrZSB1cCBmdWxsIGhlaWdodCBvZiBwYXJlbnQgZWxlbWVudCAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiBwb3NpdGlvbiBvbiB0b3Agb2Ygb3RoZXIgZWxlbWVudHMgKi9cXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcclxcbiAgICAyNTUsXFxyXFxuICAgIDI1NSxcXHJcXG4gICAgMjU1LFxcclxcbiAgICAwLjhcXHJcXG4gICk7IC8qIHNlbWktdHJhbnNwYXJlbnQgd2hpdGUgYmFja2dyb3VuZCAqL1xcclxcbiAgei1pbmRleDogOTk5OTsgLyogaGlnaCB6LWluZGV4IHRvIGVuc3VyZSBpdCBhcHBlYXJzIG9uIHRvcCBvZiBvdGhlciBlbGVtZW50cyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgYSBzcGlubmVyIG9yIGxvYWRpbmcgaW5kaWNhdG9yICovXFxyXFxuLmxvYWRpbmc6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMHB4OyAvKiBuZWdhdGl2ZSBoYWxmIG9mIHRoZSBzcGlubmVyJ3MgaGVpZ2h0ICovXFxyXFxuICBtYXJnaW4tbGVmdDogLTIwcHg7IC8qIG5lZ2F0aXZlIGhhbGYgb2YgdGhlIHNwaW5uZXIncyB3aWR0aCAqL1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IDhweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2YzZjNmMztcXHJcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIExPQURJTkcgRU5EICAqL1xcclxcblxcclxcbi5zZWFyY2gtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMtY29udGFpbmVyIHAge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgd2VhdGhlckRhdGEsIGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vYXBwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xyXG4gIGFkZEluaXRpYWxFdmVudExpc3RlbmVycygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJbml0aWFsRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnRuXCIpO1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIik7XHJcblxyXG4gIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQnRuQ2xpY2spO1xyXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJEYXRhKGlzRmFocmVuaGVpdCkge1xyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdHMtY29udGFpbmVyXCIpO1xyXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICBpZiAoIXdlYXRoZXJEYXRhLmxvY2F0aW9uKSB7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJFcnJvcjogQ291bGQgbm90IHJldHJpZXZlIHdlYXRoZXIgZGF0YSBmb3IgdGhhdCBsb2NhdGlvbi5cIjtcclxuICAgIHJlc3VsdHNDb250YWluZXIuYXBwZW5kKHApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGBMb2NhdGlvbjogJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbn1gO1xyXG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kKGxvY2F0aW9uKTtcclxuXHJcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHt3ZWF0aGVyRGF0YS50ZW1wfcKwJHtcclxuICAgIGlzRmFocmVuaGVpdCA/IFwiRlwiIDogXCJDXCJcclxuICB9YDtcclxuICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZCh0ZW1wZXJhdHVyZSk7XHJcblxyXG4gIGNvbnN0IGNvbmRpdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25kaXRpb25zLnRleHRDb250ZW50ID0gYENvbmRpdGlvbnM6ICR7d2VhdGhlckRhdGEuY29uZGl0aW9uc31gO1xyXG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kKGNvbmRpdGlvbnMpO1xyXG5cclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyRGF0YS53aW5kU3BlZWR9IG0vc2A7XHJcbiAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmQod2luZFNwZWVkKTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0lYDtcclxuICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZChodW1pZGl0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2FkaW5nKCkge1xyXG4gIGNvbnN0IGxvYWRpbmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nXCIpO1xyXG4gIGxvYWRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVMb2FkaW5nKCkge1xyXG4gIGNvbnN0IGxvYWRpbmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nXCIpO1xyXG4gIGxvYWRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxubGV0IGlzRmFocmVuaGVpdCA9IGZhbHNlO1xyXG5cclxuY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bml0cy10b2dnbGVcIik7XHJcbnRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVW5pdHNUb2dnbGUpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlVW5pdHNUb2dnbGUoKSB7XHJcbiAgaXNGYWhyZW5oZWl0ID0gIWlzRmFocmVuaGVpdDtcclxuICBnZXRXZWF0aGVyRGF0YSgpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVCdG5DbGljaygpIHtcclxuICBzaG93TG9hZGluZygpO1xyXG4gIGNvbnN0IHNlYXJjaFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIikudmFsdWU7XHJcbiAgYXdhaXQgZ2V0V2VhdGhlckRhdGEoc2VhcmNoVmFsdWUsIGlzRmFocmVuaGVpdCA/IFwiaW1wZXJpYWxcIiA6IFwibWV0cmljXCIpO1xyXG4gIGhpZGVMb2FkaW5nKCk7XHJcbiAgcmVuZGVyRGF0YShpc0ZhaHJlbmhlaXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XHJcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaGFuZGxlQnRuQ2xpY2soKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGxldCB3ZWF0aGVyRGF0YSA9IHt9O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uID0gXCJMb25kb25cIiwgdW5pdHMgPSBcIm1ldHJpY1wiKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JnVuaXRzPSR7dW5pdHN9JkFQUElEPTZmNzI5ODJmYTY5N2IyOTMzN2YzMmIzZTM2MGFjODc2YFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZldGNoIHdlYXRoZXIgZGF0YSBmb3IgJHtsb2NhdGlvbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgd2VhdGhlckRhdGEgPSB7XHJcbiAgICAgIGxvY2F0aW9uOiBkYXRhLm5hbWUsXHJcbiAgICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxyXG4gICAgICBjb25kaXRpb25zOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgICAgIHdpbmRTcGVlZDogZGF0YS53aW5kLnNwZWVkLFxyXG4gICAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG5cclxuYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9NmY3Mjk4MmZhNjk3YjI5MzM3ZjMyYjNlMzYwYWM4NzZgXHJcblxyXG4xLiBTZXQgdXAgYSBibGFuayBIVE1MIGRvY3VtZW50IHdpdGggdGhlIGFwcHJvcHJpYXRlIGxpbmtzIFxyXG50byB5b3VyIEphdmFTY3JpcHQgYW5kIENTUyBmaWxlcy5cclxuXHJcbjIuIFdyaXRlIHRoZSBmdW5jdGlvbnMgdGhhdCBoaXQgdGhlIEFQSS4gWW914oCZcmUgZ29pbmcgdG8gd2FudCBcclxuZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgYSBsb2NhdGlvbiBhbmQgcmV0dXJuIHRoZSB3ZWF0aGVyIGRhdGEgXHJcbmZvciB0aGF0IGxvY2F0aW9uLiBGb3Igbm93LCBqdXN0IGNvbnNvbGUubG9nKCkgdGhlIGluZm9ybWF0aW9uLlxyXG5cclxuMy4gV3JpdGUgdGhlIGZ1bmN0aW9ucyB0aGF0IHByb2Nlc3MgdGhlIEpTT04gZGF0YSB5b3XigJlyZSBnZXR0aW5nIFxyXG5mcm9tIHRoZSBBUEkgYW5kIHJldHVybiBhbiBvYmplY3Qgd2l0aCBvbmx5IHRoZSBkYXRhIHlvdSByZXF1aXJlIGZvciB5b3VyIGFwcC5cclxuXHJcbjQuIFNldCB1cCBhIHNpbXBsZSBmb3JtIHRoYXQgd2lsbCBsZXQgdXNlcnMgaW5wdXQgdGhlaXIgbG9jYXRpb24gXHJcbmFuZCB3aWxsIGZldGNoIHRoZSB3ZWF0aGVyIGluZm8gKHN0aWxsIGp1c3QgY29uc29sZS5sb2coKSBpdCkuXHJcblxyXG41LiBEaXNwbGF5IHRoZSBpbmZvcm1hdGlvbiBvbiB5b3VyIHdlYnBhZ2UhXHJcblxyXG42LiBBZGQgYW55IHN0eWxpbmcgeW91IGxpa2UhXHJcblxyXG43LiBZb3Ugc2hvdWxkIGJlIGFibGUgdG8gc2VhcmNoIGZvciBhIHNwZWNpZmljIGxvY2F0aW9uIGFuZCB0b2dnbGUgXHJcbmRpc3BsYXlpbmcgdGhlIGRhdGEgaW4gRmFocmVuaGVpdCBvciBDZWxzaXVzLlxyXG5cclxuOC4gWW91IHNob3VsZCBjaGFuZ2UgdGhlIGxvb2sgb2YgdGhlIHBhZ2UgYmFzZWQgb24gdGhlIGRhdGEuXHJcblxyXG5PcHRpb25hbDogYWRkIGEg4oCYbG9hZGluZ+KAmSBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBmcm9tIHRoZSB0aW1lIFxyXG50aGUgZm9ybSBpcyBzdWJtaXR0ZWQgdW50aWwgdGhlIGluZm9ybWF0aW9uIGNvbWVzIGJhY2sgZnJvbSB0aGUgQVBJLlxyXG5QdXNoIHRoYXQgYmFieSB0byBnaXRodWIgYW5kIHNoYXJlIHlvdXIgc29sdXRpb24gYmVsb3chXHJcbiovXHJcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBpbml0IGZyb20gXCIuL1VJXCI7XHJcblxyXG5pbml0KCk7XHJcblxyXG4vLyBBUEkgS0VZOiA2ZjcyOTgyZmE2OTdiMjkzMzdmMzJiM2UzNjBhYzg3NlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/query.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/query.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/css/query.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=PT+Sans:wght@400;700&family=VT323&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\nhtml {\r\n  font-size: 62.5%;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  font-family: \"VT323\", monospace;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  background-color: #e8e8e8a0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 3rem;\r\n}\r\nheader {\r\n  padding: 2rem 2rem;\r\n  text-align: center;\r\n  background-color: rgba(125, 121, 121, 0.288);\r\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.478);\r\n}\r\nh1 {\r\n  font-size: 4rem;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n}\r\nh2 {\r\n  text-align: center;\r\n  font-size: 4rem;\r\n  word-spacing: 1rem;\r\n}\r\nmain {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 2rem 2rem;\r\n}\r\n.GameBoard {\r\n  width: 500px;\r\n  height: 500px;\r\n  background-color: white;\r\n  display: grid;\r\n  grid-template-rows: repeat(10, 1fr);\r\n  grid-template-columns: repeat(10, 1fr);\r\n}\r\n.user-box,\r\n.computer-box {\r\n  border: 1px solid black;\r\n}\r\n\r\n.display-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0rem 2rem;\r\n  width: 60%;\r\n  align-self: center;\r\n}\r\n.display-container p {\r\n  font-size: 3rem;\r\n  font-weight: 600;\r\n}\r\n.button-container {\r\n  padding: 1.8rem 2rem;\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-self: center;\r\n}\r\n.button-container p {\r\n  font-size: 2.8rem;\r\n  font-weight: 600;\r\n  width: 30%;\r\n  margin-right: 4rem;\r\n}\r\n.button-container button {\r\n  align-self: center;\r\n  padding: 2.6rem 2.4rem;\r\n  border-radius: 1rem;\r\n  width: 10%;\r\n  margin-right: 4rem;\r\n  box-shadow: 0px 10px 0px rgba(0, 0, 0, 0.333);\r\n  position: relative;\r\n  background-color: rgba(0, 0, 0, 0.566);\r\n  transition: all 0.1s;\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  border: none;\r\n}\r\nbutton:active {\r\n  transform: translateY(0.4rem);\r\n  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.811);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/query.css":
/*!***************************!*\
  !*** ./src/css/query.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_query_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./query.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/query.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_query_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_query_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_query_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_query_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/css/query.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/controller/Dom.js":
/*!*******************************!*\
  !*** ./src/controller/Dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getActivePlayer: () => (/* binding */ getActivePlayer),\n/* harmony export */   getComputerGrid: () => (/* binding */ getComputerGrid),\n/* harmony export */   getOrientationButton: () => (/* binding */ getOrientationButton),\n/* harmony export */   getPlayerGrid: () => (/* binding */ getPlayerGrid),\n/* harmony export */   getResetButton: () => (/* binding */ getResetButton)\n/* harmony export */ });\n\r\n\r\nfunction getPlayerGrid() {\r\n  const userBox = document.querySelectorAll(\".user-box\");\r\n  return userBox;\r\n}\r\n\r\nfunction getComputerGrid() {\r\n  const computerBox = document.querySelectorAll(\".computer-box\");\r\n  return computerBox;\r\n}\r\n\r\nfunction getWinnerName() {\r\n  const winnerName = document.querySelector(\"h2\");\r\n  return winnerName;\r\n}\r\n\r\nfunction getActivePlayer() {\r\n  const activePlayer = document.querySelector(\".active-player\");\r\n  return activePlayer;\r\n}\r\n\r\nfunction getOrientationButton() {\r\n  const orientationButton = document.querySelector(\".btn-orientation\");\r\n  return orientationButton;\r\n}\r\n\r\nfunction getResetButton() {\r\n  const resetButton = document.querySelector(\".btn-reset\");\r\n  return resetButton;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/controller/Dom.js?");

/***/ }),

/***/ "./src/controller/gameLogic.js":
/*!*************************************!*\
  !*** ./src/controller/gameLogic.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComputerGameBoard: () => (/* binding */ getComputerGameBoard),\n/* harmony export */   getHumanGameBoard: () => (/* binding */ getHumanGameBoard),\n/* harmony export */   renderLogic: () => (/* binding */ renderLogic),\n/* harmony export */   renderShipOnGrid: () => (/* binding */ renderShipOnGrid)\n/* harmony export */ });\n/* harmony import */ var _model_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ship */ \"./src/model/ship.js\");\n/* harmony import */ var _model_gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/gameBoard */ \"./src/model/gameBoard.js\");\n/* harmony import */ var _model_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/player */ \"./src/model/player.js\");\n/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dom */ \"./src/controller/Dom.js\");\n\r\n\r\n\r\n\r\n\r\nlet human = new _model_player__WEBPACK_IMPORTED_MODULE_2__.Player(\"human\");\r\nlet computer = new _model_player__WEBPACK_IMPORTED_MODULE_2__.Player(\"computer\");\r\nlet carrier = new _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"carrier\", 5, 0, false);\r\nlet destroyer = new _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"destroyer\", 2, 0, false);\r\nlet submarine = new _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"submarine\", 3, 0, false);\r\nlet cruiser = new _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"cruiser\", 3, 0, false);\r\nlet battleship = new _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"battleship\", 4, 0, false);\r\n\r\nlet destroyerAi = new _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"destroyer\", 2, 0, false);\r\nlet submarineAi = new _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"submarine\", 3, 0, false);\r\nlet cruiserAi = new _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"cruiser\", 3, 0, false);\r\nlet battleshipAi = new _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"battleship\", 4, 0, false);\r\nlet carrierAi = new _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(\"carrier\", 5, 0, false);\r\n\r\n/***************GETTING DOM ******************** */\r\nfunction getHumanGameBoard() {\r\n  return human.getPlayerBoard();\r\n}\r\n\r\nfunction getComputerGameBoard() {\r\n  return computer.getPlayerBoard();\r\n}\r\n/************************************************* */\r\n\r\n/********HELPER FUNCTIONS************************ */\r\nfunction placementOfShipInUi(array, box) {\r\n  array.forEach((coords) => {\r\n    const [x, y] = coords;\r\n    const cell = document.querySelector(\r\n      `.${box}[data-x=\"${x}\"][data-y=\"${y}\"]`\r\n    );\r\n    if (cell) {\r\n      cell.style.backgroundColor = \"green\";\r\n    }\r\n  });\r\n}\r\n\r\nfunction renderShipOnGrid(ship) {\r\n  const userGrids = (0,_Dom__WEBPACK_IMPORTED_MODULE_3__.getPlayerGrid)();\r\n  userGrids.forEach((el) => {\r\n    const positionBtn = (0,_Dom__WEBPACK_IMPORTED_MODULE_3__.getOrientationButton)();\r\n    el.addEventListener(\"click\", function () {\r\n      const position = positionBtn.textContent;\r\n      const x = el.getAttribute(\"data-x\");\r\n      const y = el.getAttribute(\"data-y\");\r\n      //console.log(ship);\r\n      if (!ship.isPlaced) {\r\n        const result = human.placementOfShipByPlayer(\r\n          ship,\r\n          [Number(x), Number(y)],\r\n          position.toLowerCase()\r\n        );\r\n        console.log(ship);\r\n        if (result !== undefined) {\r\n          console.log(ship.isPlaced);\r\n          console.log(result);\r\n          _model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship.shipCount++;\r\n          console.log(_model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship.shipCount);\r\n          placementOfShipInUi(result, \"user-box\");\r\n          if (_model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship.shipCount === 5) {\r\n            console.log(_model_ship__WEBPACK_IMPORTED_MODULE_0__.Ship.shipCount);\r\n            console.log(human.playerBoard.board);\r\n            attackLogic();\r\n          }\r\n        }\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction renderShipOnGridByComputer(ship) {\r\n  const computerGrids = (0,_Dom__WEBPACK_IMPORTED_MODULE_3__.getComputerGrid)();\r\n  computerGrids.forEach(() => {\r\n    if (!ship.isPlaced) {\r\n      const result = computer.placementOfShipByPlayer(ship);\r\n      if (result !== undefined) {\r\n        placementOfShipInUi(result, \"computer-box\");\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\nfunction humanAttack(board, grids) {\r\n  grids.forEach((el) => {\r\n    el.addEventListener(\"click\", function () {\r\n      console.log(\"hello\");\r\n      const x = el.getAttribute(\"data-x\");\r\n      const y = el.getAttribute(\"data-y\");\r\n      const result = human.shipAttack(board, [Number(x), Number(y)]);\r\n      console.log(result);\r\n      console.log(_model_player__WEBPACK_IMPORTED_MODULE_2__.Player.activePlayer);\r\n      if (result && result[Number(x)][Number(y)] !== null) {\r\n        el.style.backgroundColor = \"red\";\r\n      } else {\r\n        el.style.backgroundColor = \"blue\";\r\n      }\r\n      _model_player__WEBPACK_IMPORTED_MODULE_2__.Player.switchPlayerTurn();\r\n    });\r\n  });\r\n}\r\n\r\nfunction computerAttack(board, grids) {\r\n  grids.forEach((el) => {\r\n    console.log(\"hello\");\r\n    // const x = el.getAttribute(\"data-x\");\r\n    // const y = el.getAttribute(\"data-y\");\r\n    const result = computer.shipAttack(board, [0, 3]);\r\n    console.log(result);\r\n    result.forEach((element) => {\r\n      element.forEach((cell) => {\r\n        if (element[cell] !== null) {\r\n          el.style.backgroundColor = \"red\";\r\n        } else {\r\n          el.style.backgroundColor = \"blue\";\r\n        }\r\n      });\r\n      _model_player__WEBPACK_IMPORTED_MODULE_2__.Player.switchPlayerTurn();\r\n    });\r\n  });\r\n}\r\n\r\nfunction attackLogic() {\r\n  const userGrids = (0,_Dom__WEBPACK_IMPORTED_MODULE_3__.getPlayerGrid)();\r\n  const computerGrids = (0,_Dom__WEBPACK_IMPORTED_MODULE_3__.getComputerGrid)();\r\n  if (_model_player__WEBPACK_IMPORTED_MODULE_2__.Player.activePlayer === \"human\") {\r\n    humanAttack(computer.playerBoard.board, computerGrids);\r\n    console.log(_model_player__WEBPACK_IMPORTED_MODULE_2__.Player.activePlayer);\r\n    _model_player__WEBPACK_IMPORTED_MODULE_2__.Player.switchPlayerTurn();\r\n  } else {\r\n    computerAttack(human.playerBoard.board, userGrids);\r\n    _model_player__WEBPACK_IMPORTED_MODULE_2__.Player.switchPlayerTurn();\r\n    console.log(_model_player__WEBPACK_IMPORTED_MODULE_2__.Player.activePlayer);\r\n  }\r\n}\r\nfunction changeOrientation() {\r\n  const orientationBtn = (0,_Dom__WEBPACK_IMPORTED_MODULE_3__.getOrientationButton)();\r\n  orientationBtn.addEventListener(\"click\", function () {\r\n    if (orientationBtn.textContent === \"Horizontal\") {\r\n      orientationBtn.textContent = \"Vertical\";\r\n    } else {\r\n      orientationBtn.textContent = \"Horizontal\";\r\n    }\r\n  });\r\n}\r\n/**************************************************************** */\r\n\r\n/***************ACTUAL GAME LOGIC************************* */\r\n\r\nfunction placeShipByUser(ship) {\r\n  if (!ship.isPlaced) {\r\n    return renderShipOnGrid(ship);\r\n  }\r\n}\r\n\r\nfunction placeShipByComputer(ship) {\r\n  if (!ship.isPlaced) {\r\n    return renderShipOnGridByComputer(ship);\r\n  }\r\n}\r\n\r\nfunction resetGame() {\r\n  const gameResetButton = (0,_Dom__WEBPACK_IMPORTED_MODULE_3__.getResetButton)();\r\n  gameResetButton.addEventListener(\"click\", function () {\r\n    location.reload();\r\n  });\r\n}\r\nfunction renderLogic() {\r\n  changeOrientation();\r\n  placeShipByUser(carrier);\r\n  placeShipByUser(battleship);\r\n  placeShipByUser(cruiser);\r\n  placeShipByUser(destroyer);\r\n  placeShipByUser(submarine);\r\n  placeShipByComputer(carrierAi);\r\n  placeShipByComputer(battleshipAi);\r\n  placeShipByComputer(cruiserAi);\r\n  placeShipByComputer(destroyerAi);\r\n  placeShipByComputer(submarineAi);\r\n  resetGame();\r\n}\r\n/*********************************************************** */\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/controller/gameLogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_query_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/query.css */ \"./src/css/query.css\");\n/* harmony import */ var _view_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/UI */ \"./src/view/UI.js\");\n/* harmony import */ var _model_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/ship */ \"./src/model/ship.js\");\n/* harmony import */ var _controller_gameLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller/gameLogic */ \"./src/controller/gameLogic.js\");\n\r\n\r\n\r\n\r\n\r\n_view_UI__WEBPACK_IMPORTED_MODULE_2__.creatingGameUi.pageLoad();\r\n(0,_controller_gameLogic__WEBPACK_IMPORTED_MODULE_4__.renderLogic)();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/model/gameBoard.js":
/*!********************************!*\
  !*** ./src/model/gameBoard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/model/ship.js\");\n\r\n\r\nclass GameBoard {\r\n  board = [];\r\n  shipSinkCount = 0;\r\n  constructor(rows, columns) {\r\n    this.rows = rows;\r\n    this.columns = columns;\r\n  }\r\n  createBoard() {\r\n    for (let i = 0; i < this.rows; i++) {\r\n      this.board[i] = [];\r\n      for (let j = 0; j < this.columns; j++) {\r\n        this.board[i][j] = null;\r\n      }\r\n    }\r\n    return this.board;\r\n  }\r\n\r\n  #doShipCollide(coordinates) {\r\n    const [x, y] = coordinates;\r\n    return this.board.some(() => this.board[x][y] === null);\r\n  }\r\n  #isPlacementPossible(coordinates, direction, ship) {\r\n    const [x, y] = coordinates;\r\n\r\n    const isHorizontalOutOfBounds =\r\n      direction === \"horizontal\" && y + ship.length - 1 > 9;\r\n    const isVerticalOutOfBounds =\r\n      direction === \"vertical\" && x + ship.length - 1 > 9;\r\n    const isNegativeCoordinate = x < 0 || y < 0;\r\n\r\n    return !(\r\n      isHorizontalOutOfBounds ||\r\n      isVerticalOutOfBounds ||\r\n      isNegativeCoordinate\r\n    );\r\n  }\r\n\r\n  #getShipPlacement(selectedShip, selectedPlacement, position) {\r\n    const [x, y] = position;\r\n    let i = 0;\r\n\r\n    const isHorizontal = selectedPlacement === \"horizontal\";\r\n\r\n    while (i < selectedShip.length) {\r\n      const newPosition = isHorizontal ? [x, y + i] : [x + i, y];\r\n\r\n      if (\r\n        this.#isPlacementPossible(position, selectedPlacement, selectedShip) &&\r\n        this.#doShipCollide(newPosition)\r\n      ) {\r\n        selectedShip.placedArray.push(newPosition);\r\n        selectedShip.isPlaced = true;\r\n      } else {\r\n        return;\r\n      }\r\n\r\n      i++;\r\n    }\r\n\r\n    if (selectedShip.placedArray.length !== selectedShip.length) {\r\n      return;\r\n    }\r\n\r\n    selectedShip.placedArray.forEach(\r\n      ([a, b]) => (this.board[a][b] = selectedShip.name)\r\n    );\r\n\r\n    console.log(selectedShip.isPlaced);\r\n    console.log(selectedShip.placedArray);\r\n    return selectedShip.placedArray;\r\n  }\r\n  placeShips(ship, coordinates, orientation) {\r\n    return this.#getShipPlacement(ship, orientation, coordinates);\r\n  }\r\n  receiveAttack(selectedShip, coordinates) {\r\n    const isShipHit = selectedShip.placedArray.some((element) =>\r\n      element.every((e, i) => e === coordinates[i])\r\n    );\r\n    return isShipHit ? selectedShip.getHit() : \"Attack Missed\";\r\n  }\r\n\r\n  hasAllShipSunk(selectedShip) {\r\n    if (selectedShip.isShipSunk()) {\r\n      this.shipSinkCount++;\r\n    }\r\n\r\n    return this.shipSinkCount === 5;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/model/gameBoard.js?");

/***/ }),

/***/ "./src/model/player.js":
/*!*****************************!*\
  !*** ./src/model/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/model/gameBoard.js\");\n\r\n\r\nclass Player {\r\n  playerBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard(10, 10);\r\n  static activePlayer = \"human\";\r\n  constructor(type) {\r\n    this.type = type;\r\n  }\r\n  getOrientation(position) {\r\n    if (this.type === \"computer\") {\r\n      const random = Math.floor(Math.random() * 2);\r\n      return random === 0 ? \"vertical\" : \"horizontal\";\r\n    }\r\n    return position;\r\n  }\r\n  getPlayerBoard() {\r\n    return this.playerBoard.createBoard();\r\n  }\r\n  placementOfShipByPlayer(ship, coords, position) {\r\n    if (this.type === \"human\") {\r\n      return this.playerBoard.placeShips(ship, coords, position);\r\n    }\r\n    if (this.type === \"computer\") {\r\n      coords = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];\r\n      if (ship.placedArray.length === ship.length) {\r\n        return ship.placedArray;\r\n      } else {\r\n        ship.placedArray = [];\r\n        ship.isPlaced = false;\r\n        this.playerBoard.placeShips(ship, coords, this.getOrientation());\r\n      }\r\n      return this.placementOfShipByPlayer(ship);\r\n    }\r\n    return ship.placedArray;\r\n  }\r\n\r\n  static switchPlayerTurn() {\r\n    if (Player.activePlayer === \"human\") {\r\n      Player.activePlayer = \"computer\";\r\n    } else {\r\n      Player.activePlayer = \"human\";\r\n    }\r\n    return Player.activePlayer;\r\n  }\r\n\r\n  shipAttack(board, coord) {\r\n    //debugger;\r\n    //this.activePlayer = this.type;\r\n    if (Player.activePlayer === this.type) {\r\n      //this.switchPlayerTurn();\r\n      this.type === \"computer\"\r\n        ? (coord = [\r\n            Math.floor(Math.random() * 8),\r\n            Math.floor(Math.random() * 8),\r\n          ])\r\n        : coord;\r\n      const [x, y] = coord;\r\n      if (board[x][y] !== null && board[x][y] !== \"x\") {\r\n        board[x][y] = \"x\";\r\n      }\r\n\r\n      return board;\r\n    }\r\n    return false;\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/model/player.js?");

/***/ }),

/***/ "./src/model/ship.js":
/*!***************************!*\
  !*** ./src/model/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  placedArray = [];\r\n  isPlaced = false;\r\n  static shipCount = 0;\r\n  constructor(name, length, hit, isSunk) {\r\n    this.name = name;\r\n    this.length = length;\r\n    this.hit = hit;\r\n    this.isSunk = isSunk;\r\n  }\r\n\r\n  getHit() {\r\n    this.hit++;\r\n    return this.hit;\r\n  }\r\n\r\n  isShipSunk() {\r\n    if (this.hit === this.length) {\r\n      this.isSunk = true;\r\n      return this.isSunk;\r\n    } else {\r\n      return this.isSunk;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/model/ship.js?");

/***/ }),

/***/ "./src/view/UI.js":
/*!************************!*\
  !*** ./src/view/UI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   creatingGameUi: () => (/* binding */ creatingGameUi)\n/* harmony export */ });\n/* harmony import */ var _controller_gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/gameLogic */ \"./src/controller/gameLogic.js\");\n\r\n\r\n\r\nconst creatingGameUi = (() => {\r\n  const body = document.querySelector(\"body\");\r\n  const winnerName = document.createElement(\"h2\");\r\n  winnerName.textContent = \"Who Will Win?\";\r\n  const main = document.createElement(\"main\");\r\n  const header = document.createElement(\"header\");\r\n  const humanGameBoard = document.createElement(\"div\");\r\n  const computerGameBoard = document.createElement(\"div\");\r\n  const displayContainer = document.createElement(\"section\");\r\n  const buttonContainer = document.createElement(\"section\");\r\n  displayContainer.classList.add(\"display-container\");\r\n  buttonContainer.classList.add(\"button-container\");\r\n  function creatingBaseElements() {\r\n    body.append(header, winnerName, main, displayContainer, buttonContainer);\r\n  }\r\n\r\n  const creatingHeaderElement = () => {\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"BattleShip\";\r\n    header.append(heading);\r\n  };\r\n  const creatingGameBoardUi = () => {\r\n    humanGameBoard.classList.add(\"GameBoard\");\r\n    computerGameBoard.classList.add(\"GameBoard\");\r\n    main.append(humanGameBoard, computerGameBoard);\r\n    //const computerBoard = computer.getPlayerBoard();\r\n  };\r\n  const creatingUserGameBoard = () => {\r\n    const userBoard = (0,_controller_gameLogic__WEBPACK_IMPORTED_MODULE_0__.getHumanGameBoard)();\r\n    for (let i = 0; i < userBoard.length; i++) {\r\n      for (let j = 0; j < userBoard.length; j++) {\r\n        const div = document.createElement(\"div\");\r\n        div.classList.add(\"user-box\");\r\n        div.setAttribute(\"data-x\", i);\r\n        div.setAttribute(\"data-y\", j);\r\n        humanGameBoard.appendChild(div);\r\n      }\r\n    }\r\n  };\r\n  const creatingComputerGameBoard = () => {\r\n    const computerBoard = (0,_controller_gameLogic__WEBPACK_IMPORTED_MODULE_0__.getComputerGameBoard)();\r\n    for (let i = 0; i < computerBoard.length; i++) {\r\n      for (let j = 0; j < computerBoard.length; j++) {\r\n        const computerBox = document.createElement(\"div\");\r\n        computerBox.classList.add(\"computer-box\");\r\n        computerBox.setAttribute(\"data-x\", i);\r\n        computerBox.setAttribute(\"data-y\", j);\r\n        computerGameBoard.appendChild(computerBox);\r\n      }\r\n    }\r\n  };\r\n  const creatingDisplaySection = () => {\r\n    const playerText = document.createElement(\"p\");\r\n    playerText.textContent = \"PLAYER\";\r\n    const computerText = document.createElement(\"p\");\r\n    computerText.textContent = \"COMPUTER\";\r\n    const displayTurn = document.createElement(\"p\");\r\n    displayTurn.classList.add(\"active-player\");\r\n    displayTurn.textContent = `PLAYER'S TURN`;\r\n    displayContainer.append(playerText, displayTurn, computerText);\r\n  };\r\n  const creatingButtonSection = () => {\r\n    const gameGuidelines = document.createElement(\"p\");\r\n    gameGuidelines.textContent =\r\n      \"Place your five available ships on the game board, You can place them horizontally or vertically\";\r\n    const orientationButton = document.createElement(\"button\");\r\n    orientationButton.textContent = \"Horizontal\";\r\n    orientationButton.classList.add(\"btn-orientation\");\r\n    const resetGame = document.createElement(\"button\");\r\n    resetGame.textContent = \"Play Again\";\r\n    resetGame.classList.add(\"btn-reset\");\r\n    buttonContainer.append(gameGuidelines, orientationButton, resetGame);\r\n  };\r\n  function pageLoad() {\r\n    creatingBaseElements();\r\n    creatingHeaderElement();\r\n    creatingGameBoardUi();\r\n    creatingUserGameBoard();\r\n    creatingComputerGameBoard();\r\n    creatingDisplaySection();\r\n    creatingButtonSection();\r\n  }\r\n  return {\r\n    body,\r\n    header,\r\n    main,\r\n    humanGameBoard,\r\n    computerGameBoard,\r\n    displayContainer,\r\n    pageLoad,\r\n    creatingHeaderElement,\r\n    creatingBaseElements,\r\n    creatingGameBoardUi,\r\n    creatingUserGameBoard,\r\n    creatingComputerGameBoard,\r\n    creatingDisplaySection,\r\n    creatingButtonSection,\r\n  };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/view/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
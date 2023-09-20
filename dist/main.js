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

/***/ "./src/alterDOM.js":
/*!*************************!*\
  !*** ./src/alterDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEle: () => (/* binding */ getEle)\n/* harmony export */ });\n// Get DOM from Variable\nfunction getEle(variable){\n  return document.getElementById(variable.id);\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/alterDOM.js?");

/***/ }),

/***/ "./src/alterToDo.js":
/*!**************************!*\
  !*** ./src/alterToDo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDate: () => (/* binding */ addDate),\n/* harmony export */   addDesc: () => (/* binding */ addDesc),\n/* harmony export */   addId: () => (/* binding */ addId),\n/* harmony export */   addPrio: () => (/* binding */ addPrio),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   setAttribute: () => (/* binding */ setAttribute)\n/* harmony export */ });\n/* harmony import */ var _constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor.js */ \"./src/constructor.js\");\n/* harmony import */ var _alterDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alterDOM.js */ \"./src/alterDOM.js\");\n/* Import */\n\n\n\n/* VARIABLE Define */\nlet cntId = (0,_constructor_js__WEBPACK_IMPORTED_MODULE_0__.createCount)();\nconst rgxDateIso = /^(?!.*-(00|0[1-9])-00)\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;\n\n/* FUNCTION Define */\n// Add Attribute (VAR)\nfunction setAttribute(todo,attribute,value){\n  todo[attribute] = value;\n}\n\n// Add Date\nfunction addDate(variable,date){\n  if (rgxDateIso.test(date) === true){\n    setAttribute(variable,\"date\",date);\n  } else{\n    return \"Invalid Date\";\n  }\n}\n\n// Add Description\nfunction addDesc(variable,text){\n  setAttribute(variable,\"desc\",text);\n}\n\n// Add id\nfunction addId(variable,element,type){\n  let domId = `${type}-${(0,_constructor_js__WEBPACK_IMPORTED_MODULE_0__.createCount)()}`\n  element.setAttribute(\"id\",domId);\n  variable.id = domId;\n}\n\n// Add Priority\nfunction addPrio(variable,level){\n  let ele = (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_1__.getEle)(variable);\n  ele.classList.add(`prio-${level}`);\n  setAttribute(variable,\"prio\",level);\n}\n\n// Add Project\nfunction addProject(variable,name){\n  setAttribute(variable,\"project\",name);\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/alterToDo.js?");

/***/ }),

/***/ "./src/constructor.js":
/*!****************************!*\
  !*** ./src/constructor.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCount: () => (/* binding */ createCount)\n/* harmony export */ });\n// Count\nlet count = -1;\n\nconst createCount = () => {\n  return count++;\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/constructor.js?");

/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoDom: () => (/* binding */ todoDom),\n/* harmony export */   todoVar: () => (/* binding */ todoVar)\n/* harmony export */ });\n/* harmony import */ var _alterToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alterToDo.js */ \"./src/alterToDo.js\");\n/* Import */\n\n\n/* VARIABLE Define */\nconst idContainer = \"test\"\n\n// ToDo DOM\nfunction todoDom(parent,variable){\n  let eleParent = document.getElementById(parent);\n  let ele = document.createElement(\"div\");\n  ele.textContent = variable.titel;\n  ele.classList.add(\"todo\");\n\n  eleParent.appendChild(ele);\n  (0,_alterToDo_js__WEBPACK_IMPORTED_MODULE_0__.addId)(variable,ele,\"todo\");\n  return ele;\n}\n\n// ToDo VAR\nfunction todoVar(titel) {\n  return {\n    titel: titel\n  };\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/createToDo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo.js */ \"./src/createToDo.js\");\n/* harmony import */ var _alterToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alterToDo.js */ \"./src/alterToDo.js\");\n/* IMPORT */\n\n\n\n/* VARIABLE Define */\n\n/* FUNCTION Define */\n\n/* FUNCTION Call */\n\n/* Listener */\ndocument.addEventListener(\"click\", (e) => {\n  if (e.target.id == \"addTodo\"){\n    console.log(\"success\");\n    // Create To Do Pop up\n  }\n});\n\n\n//# sourceURL=webpack://odinToDo/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
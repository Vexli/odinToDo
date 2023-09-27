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

/***/ "./src/addElement.js":
/*!***************************!*\
  !*** ./src/addElement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEleClass: () => (/* binding */ addEleClass),\n/* harmony export */   addEleText: () => (/* binding */ addEleText),\n/* harmony export */   addHeader: () => (/* binding */ addHeader),\n/* harmony export */   addOption: () => (/* binding */ addOption),\n/* harmony export */   createBr: () => (/* binding */ createBr),\n/* harmony export */   createEle: () => (/* binding */ createEle),\n/* harmony export */   delEleChildren: () => (/* binding */ delEleChildren)\n/* harmony export */ });\n/* harmony import */ var _alterDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alterDOM.js */ \"./src/alterDOM.js\");\n/* IMPORT */\n\n\n/* FUNCTION Define */\n// Add element setAttribute\nfunction addAttribute(element,attribute,value){\n  element.setAttribute(attribute,value);\n  return element;\n}\n\n\n// Add classes to an existing element\nfunction addEleClass(element,arr){\n  for (let i = 0; i < arr.length; i++){\n    element.classList.add(arr[i]);\n  }\n  return element\n}\n\n// Add text to an existing element\nfunction addEleText(element,text){\n  element.textContent = text;\n  return element\n}\n\n// Add a value attribute to an element\nfunction addEleValue(element,value){\n  addAttribute(element,\"value\",value);\n  return element;\n}\n\n\n// Create a <br> element\nfunction createBr(){\n    let ele = createEle(\"br\");\n    return ele;\n}\n\n// Create a new element\nfunction createEle(type){\n  return document.createElement(type);\n}\n\n// Create a header element with text\nfunction addHeader(num,text){\n  let ele = createEle(`h${num}`);\n  addEleText(ele,text);\n  return ele;\n}\n\n// Create an option element\nfunction addOption(value,text){\n  let ele = createEle(\"option\");\n  addEleValue(ele,value);\n  addEleText(ele,text);\n  return ele;\n}\n\n// Remove all the children of an element\nfunction delEleChildren(parent){\n  let ele = (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_0__.getEle)(parent);\n  while (ele.lastElementChild) {\n    ele.removeChild(ele.lastElementChild);\n  }\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/addElement.js?");

/***/ }),

/***/ "./src/alterDOM.js":
/*!*************************!*\
  !*** ./src/alterDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDateDom: () => (/* binding */ addDateDom),\n/* harmony export */   addEleAfter: () => (/* binding */ addEleAfter),\n/* harmony export */   addEleBefore: () => (/* binding */ addEleBefore),\n/* harmony export */   addEleBr: () => (/* binding */ addEleBr),\n/* harmony export */   addPrjctName: () => (/* binding */ addPrjctName),\n/* harmony export */   addTitel: () => (/* binding */ addTitel),\n/* harmony export */   delToDo: () => (/* binding */ delToDo),\n/* harmony export */   displayElement: () => (/* binding */ displayElement),\n/* harmony export */   getEle: () => (/* binding */ getEle),\n/* harmony export */   getObj: () => (/* binding */ getObj),\n/* harmony export */   prjctMenu: () => (/* binding */ prjctMenu),\n/* harmony export */   prjctSelect: () => (/* binding */ prjctSelect),\n/* harmony export */   todoExpand: () => (/* binding */ todoExpand)\n/* harmony export */ });\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n/* harmony import */ var _addElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addElement.js */ \"./src/addElement.js\");\n/* IMPORT */\n\n\n\n\n// Get DOM from Variable\nfunction getEle(variable){\n  if (typeof variable === 'object'){\n    return document.getElementById(variable.id);\n  }else{\n    return document.getElementById(variable);\n  }\n}\n\n// Get Object from Element\nfunction getObj(array,element){\n  for (let i = 0; i < array.length; i++){\n    if (array[i].id == element.id){\n      return array[i];\n    }\n  }\n}\n\n\n// Add a <br> element to an existing element\nfunction addEleBr(parent){\n  let ele = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__.createBr)();\n  addEleAfter(parent,ele);\n  return parent;\n}\n\n// Add Date to the DOM\nfunction addDateDom(element,date){\n  let ele = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__.createEle)(\"div\");\n  let elementCore = (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.findChildEle)(element,\".todoCore\");\n  (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__.addEleText)(ele,date);\n  addEleAfter(elementCore,ele);\n}\n\n// Add element at bottom of parent\nfunction addEleAfter(parent,child){\n  let ele = getEle(parent);\n  ele.append(child);\n}\n\n// Add element at top of parent\nfunction addEleBefore(parent,child){\n  let ele = getEle(parent);\n  ele.prepend(child);\n}\n\nfunction addTitel(parent,titel){\n  let ele = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__.createEle)(\"div\");\n  let elementCore = (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.findChildEle)(parent,\".todoCore\");\n  console.log(\"eleCore\",elementCore);\n  (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__.addEleText)(ele,titel);\n  addEleBefore(elementCore,ele);\n}\n\n// Delete an element from the DOM and Array\nfunction delToDo(arr,variable){\n  let id = variable.id;\n  let ele = getEle(variable);\n  ele.parentNode.removeChild(ele);\n\n  let index = arr.findIndex(obj => obj.id === id);\n  let complete = arr.splice(index,1);\n}\n\n// Display Add ToDo Form\nfunction displayElement(element){\n  if (element.style.display === 'none'){\n    element.style.display = 'block';\n  } else{\n    element.style.display = 'none';\n  }\n}\n\n// Expand ToDo Element\nfunction todoExpand(arr,element){\n  let obj = getObj(arr,element);\n  addEleBr(element);\n  addEleAfter(element,obj.desc);\n}\n\n// Add Projects to List\nfunction addPrjctName(arr){\n  let newProject = prompt(\"Please add a new Project\");\n  arr.push(newProject);\n}\n\n// Display Projects in Menu\nfunction prjctMenu(arr,parent){\n  (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__.delEleChildren)(parent);\n  for (let i = 0; i < arr.length; i++) {\n    let ele = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__.addHeader)(3,arr[i]);\n    (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__.addEleClass)(ele,[\"project\"])\n    addEleAfter(parent,ele);\n  }\n}\n\nfunction prjctSelect(arr,parent){\n  (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__.delEleChildren)(parent);\n  for (let i = 0; i < arr.length; i++) {\n    let ele = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__.addOption)(arr[i],arr[i]);\n    addEleAfter(parent,ele);\n  }\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/alterDOM.js?");

/***/ }),

/***/ "./src/alterToDo.js":
/*!**************************!*\
  !*** ./src/alterToDo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCoreId: () => (/* binding */ addCoreId),\n/* harmony export */   addDate: () => (/* binding */ addDate),\n/* harmony export */   addDesc: () => (/* binding */ addDesc),\n/* harmony export */   addId: () => (/* binding */ addId),\n/* harmony export */   addPrio: () => (/* binding */ addPrio),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addStatus: () => (/* binding */ addStatus),\n/* harmony export */   setAttribute: () => (/* binding */ setAttribute)\n/* harmony export */ });\n/* harmony import */ var _constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor.js */ \"./src/constructor.js\");\n/* harmony import */ var _alterDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alterDOM.js */ \"./src/alterDOM.js\");\n/* Import */\n\n\n\n/* VARIABLE Define */\nlet cntId = (0,_constructor_js__WEBPACK_IMPORTED_MODULE_0__.createCount)();\nconst rgxDateIso = /^(?!.*-(00|0[1-9])-00)\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;\n\n/* FUNCTION Define */\n// Add Attribute (VAR)\nfunction setAttribute(todo,attribute,value){\n  console.log(todo,attribute,value);\n  todo[attribute] = value;\n}\n\n// Add Date\nfunction addDate(variable,date){\n  if (rgxDateIso.test(date) === true){\n    setAttribute(variable,\"date\",date);\n    (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_1__.addDateDom)(variable,date);\n  } else{\n    return \"Invalid Date\";\n  }\n}\n\n// Add Description\nfunction addDesc(variable,text){\n  setAttribute(variable,\"desc\",text);\n}\n\n// Add id to ToDo divs\nfunction addId(variable,element){\n  let domId = (0,_constructor_js__WEBPACK_IMPORTED_MODULE_0__.createCount)();\n  element.setAttribute(\"id\",domId);\n  variable.id = domId;\n}\n\n// Add id to ToDo Core Divs\nfunction addCoreId(element,num){\n  element.setAttribute(\"id\",`core-${num}`);\n}\n\n// Add Priority\nfunction addPrio(variable,level){\n  let ele = (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_1__.getEle)(variable);\n  ele.classList.add(`prio-${level}`);\n  setAttribute(variable,\"prio\",level);\n}\n\n// Add Project\nfunction addProject(variable,name){\n  setAttribute(variable,\"project\",name);\n}\n\nfunction addStatus(variable,status){\n  setAttribute(variable,\"status\",status);\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/alterToDo.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToDo: () => (/* binding */ createToDo),\n/* harmony export */   todoDom: () => (/* binding */ todoDom),\n/* harmony export */   todoVar: () => (/* binding */ todoVar)\n/* harmony export */ });\n/* harmony import */ var _varGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./varGlobal.js */ \"./src/varGlobal.js\");\n/* harmony import */ var _alterDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alterDOM.js */ \"./src/alterDOM.js\");\n/* harmony import */ var _addElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addElement.js */ \"./src/addElement.js\");\n/* harmony import */ var _alterToDo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alterToDo.js */ \"./src/alterToDo.js\");\n/* Import */\n\n\n\n\n\n/* VARIABLE Define */\nconst idContainer = \"container\";\n\n// Create Element\nfunction createElement(parent,type){\n  let eleParent = document.getElementById(parent);\n  let ele = document.createElement(type);\n  eleParent.prepend(ele);\n\n  return ele;\n}\n\n// ToDo DOM\nfunction todoDom(parent,variable){\n  let ele = createElement(parent,\"div\");\n  (0,_alterToDo_js__WEBPACK_IMPORTED_MODULE_3__.addId)(variable,ele);\n  (0,_addElement_js__WEBPACK_IMPORTED_MODULE_2__.addEleClass)(ele,[\"todo\"]);\n\n  let eleCore = createElement(ele.id,\"div\");\n  (0,_alterToDo_js__WEBPACK_IMPORTED_MODULE_3__.addCoreId)(eleCore,ele.id);\n  (0,_addElement_js__WEBPACK_IMPORTED_MODULE_2__.addEleClass)(eleCore,[\"todoCore\"]);\n  (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_1__.addEleAfter)(ele,eleCore);\n  return ele;\n}\n\n// ToDo VAR\nfunction todoVar(titel) {\n  return {\n    titel: titel\n  };\n}\n\n// ToDo Popup\nfunction createToDo(parent,titel,date,desc,prio,project){\n    let responseTodo = todoVar(titel);\n\n    todoDom(parent,responseTodo);\n\n    let eleDom = (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_1__.getEle)(responseTodo);\n\n    (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_1__.addTitel)(eleDom,titel);\n    (0,_alterToDo_js__WEBPACK_IMPORTED_MODULE_3__.addDate)(eleDom,date);\n    (0,_alterToDo_js__WEBPACK_IMPORTED_MODULE_3__.addDesc)(responseTodo,desc);\n    (0,_alterToDo_js__WEBPACK_IMPORTED_MODULE_3__.addPrio)(responseTodo,prio);\n    (0,_alterToDo_js__WEBPACK_IMPORTED_MODULE_3__.addProject)(responseTodo,project);\n    (0,_alterToDo_js__WEBPACK_IMPORTED_MODULE_3__.addStatus)(responseTodo,0);\n\n    _varGlobal_js__WEBPACK_IMPORTED_MODULE_0__.arrToDo.push(responseTodo);\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/createToDo.js?");

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFormDate: () => (/* binding */ addFormDate),\n/* harmony export */   cnvrtDateISO: () => (/* binding */ cnvrtDateISO)\n/* harmony export */ });\n/* FUNCTION Define */\n// Convert Date to ISO Date\nfunction cnvrtDateISO(date){\n  return date.toISOString().split(\"T\")[0];\n}\n\n// Create Max Date\nfunction dateMax(date, days) {\n  const dateNew = new Date(date);\n  dateNew.setDate(dateNew.getDate() + days);\n  return dateNew;\n}\n\n// Create Min Date\nfunction dateMin(date, days) {\n  const dateNew = new Date(date);\n  dateNew.setDate(dateNew.getDate() - days);\n  return dateNew;\n}\n\n// Add Dates to Form\nfunction addFormDate(element, date, min, max) {\n  let dateNew = cnvrtDateISO(date);\n  let dateStart = cnvrtDateISO(dateMin(date, min));\n  let dateEnd = cnvrtDateISO(dateMax(date, max));\n\n  element.setAttribute(\"value\", dateNew);\n  element.setAttribute(\"min\", dateStart);\n  element.setAttribute(\"max\", dateEnd);\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/date.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _varGlobal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./varGlobal.js */ \"./src/varGlobal.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n/* harmony import */ var _modeDark_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modeDark.js */ \"./src/modeDark.js\");\n/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createToDo.js */ \"./src/createToDo.js\");\n/* harmony import */ var _alterDOM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alterDOM.js */ \"./src/alterDOM.js\");\n/* harmony import */ var _alterToDo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alterToDo.js */ \"./src/alterToDo.js\");\n/* harmony import */ var _addElement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addElement.js */ \"./src/addElement.js\");\n/* IMPORT */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* VARIABLE Call */\n_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.formAdd.style.display = \"none\";\n\n/* FUNCTION Call */\n(0,_modeDark_js__WEBPACK_IMPORTED_MODULE_3__.modeDark)();\n\n/* Listener */\n// General function listenenr\ndocument.addEventListener(\"click\", (e) =>{\n  if (e.target === _varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.todoAdd){ // Add new ToDo\n    (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_5__.displayElement)(_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.formAdd);\n  }else if (e.target.classList.contains(\"todo\") == true){ // Change a ToDo from Open to Done\n    // let obj = getObj(arrToDo,e.target);\n    // addStatus(obj,1);\n    //  addEleClass(e.target,[\"complete\"]);\n    (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_5__.todoExpand)(_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.arrToDo,e.target);\n  }else if (e.target.id == \"nav\"){\n    (0,_modeDark_js__WEBPACK_IMPORTED_MODULE_3__.modeDark)();\n  }\n});\n\n// Listen for Side Menu Clicks\ndocument.addEventListener(\"click\", (e) =>{\n  let element = e.target\n  if (element.id === \"addProject\"){                       // Add a new Project\n    (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_5__.addPrjctName)(_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.arrProject);\n    (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_5__.prjctMenu)(_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.arrProject,\"listProject\");\n    (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_5__.prjctSelect)(_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.arrProject,\"todoProject\")\n  }else {\n    let resultSearch = \"\";\n    if (element.classList.contains(\"listToDo\")){          // Find all open ToDo\n      resultSearch = (0,_search_js__WEBPACK_IMPORTED_MODULE_2__.arrSearch)(_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.arrToDo,\"status\",0);\n    }else if (element.classList.contains(\"project\")){     // Find all ToDo off a Project\n      resultSearch = (0,_search_js__WEBPACK_IMPORTED_MODULE_2__.arrSearch)(_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.arrToDo,\"project\",element.textContent);\n    }else if (element.classList.contains(\"listDone\")){    // Find all completed ToDo\n      resultSearch = (0,_search_js__WEBPACK_IMPORTED_MODULE_2__.arrSearch)(_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.arrToDo,\"status\",1);\n    }else if (element.classList.contains(\"listAll\")){     // Find All ToDo, Open and Done\n      resultSearch = (0,_search_js__WEBPACK_IMPORTED_MODULE_2__.arrSearch)(_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.arrToDo,\"all\",\"\");\n    }\n    (0,_search_js__WEBPACK_IMPORTED_MODULE_2__.searchDisplay)(_varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.arrToDo,resultSearch);\n  }\n});\n\n// Listen for Buttons\ndocument.addEventListener(\"click\", (e) =>{\n  if (e.target.classList.contains(\"btn\")){\n    e.preventDefault();\n    if (e.target.id === \"btnNewToDo\"){                    // Add new ToDo\n      let element = _varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.formAdd.elements;\n      (0,_createToDo_js__WEBPACK_IMPORTED_MODULE_4__.createToDo)(\"container\", element.todoTitel.value, element.todoDate.value, element.todoDesc.value, element.todoPriority.value, element.todoProject.value);\n      _varGlobal_js__WEBPACK_IMPORTED_MODULE_1__.formAdd.style.display = \"none\";\n    }\n  }\n});\n\n\n//# sourceURL=webpack://odinToDo/./src/index.js?");

/***/ }),

/***/ "./src/modeDark.js":
/*!*************************!*\
  !*** ./src/modeDark.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modeDark: () => (/* binding */ modeDark)\n/* harmony export */ });\nfunction modeDark() {                                 // Switches color Theme from light to dark and back\n  const cssRoot = document.querySelector(':root');\n  const cssRootStyle = getComputedStyle(cssRoot);\n  const cssColorMode = cssRootStyle.getPropertyValue(\"--colorMode\");\n  const cssColorBlackTrue = cssRootStyle.getPropertyValue(\"--colorBlackTrue\");\n  const cssColorWhiteTrue = cssRootStyle.getPropertyValue(\"--colorWhiteTrue\");\n  const cssColorDark = cssRootStyle.getPropertyValue(\"--colorBackgroundDark\");\n  const cssColorLight = cssRootStyle.getPropertyValue(\"--colorBackgroundLight\");\n  const cssColorPrimaryDark = cssRootStyle.getPropertyValue(\"--colorPrimaryDark\");\n  const cssColorPrimaryLight = cssRootStyle.getPropertyValue(\"--colorPrimaryLight\");\n  const cssColorSecondaryDark = cssRootStyle.getPropertyValue(\"--colorSecondaryDark\");\n  const cssColorSecondaryLight = cssRootStyle.getPropertyValue(\"--colorSecondaryLight\");\n\n  if(cssColorMode == cssColorWhiteTrue){\n    console.log(\"Activate Dark Mode\");\n    cssRoot.style.setProperty(\"--colorMode\",cssColorBlackTrue);\n    cssRoot.style.setProperty(\"--colorLight\",cssColorDark);\n    cssRoot.style.setProperty(\"--colorDark\",cssColorLight);\n    cssRoot.style.setProperty(\"--colorPrimary\",cssColorPrimaryDark);\n    cssRoot.style.setProperty(\"--colorSecondary\",cssColorSecondaryDark);\n  } else if(cssColorMode == cssColorBlackTrue){\n    console.log(\"Activate Light Mode\");\n    cssRoot.style.setProperty(\"--colorMode\",cssColorWhiteTrue);\n    cssRoot.style.setProperty(\"--colorLight\",cssColorLight);\n    cssRoot.style.setProperty(\"--colorDark\",cssColorDark);\n    cssRoot.style.setProperty(\"--colorPrimary\",cssColorPrimaryLight);\n    cssRoot.style.setProperty(\"--colorSecondary\",cssColorSecondaryLight);\n  }\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/modeDark.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrSearch: () => (/* binding */ arrSearch),\n/* harmony export */   findChildEle: () => (/* binding */ findChildEle),\n/* harmony export */   searchDisplay: () => (/* binding */ searchDisplay)\n/* harmony export */ });\n/* harmony import */ var _alterDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alterDOM.js */ \"./src/alterDOM.js\");\n/* IMPORT */\n\n\n// Search through array\nfunction arrSearch(arr,attribute,value){\n  if (attribute == \"all\"){\n    return arr;\n  }else{\n    let arrResult = [];\n    for (let i = 0; i < arr.length; i++){\n      if (arr[i][attribute] == value){\n        arrResult.push(arr[i]);\n      }\n    }\n    return arrResult;\n  }\n}\n\n// Show / Hide Blocks\nfunction searchDisplay(arr,arrTarget){\n    for (let i = 0; i < arr.length; i++) {\n      let ele = (0,_alterDOM_js__WEBPACK_IMPORTED_MODULE_0__.getEle)(arr[i]);\n      console.log(arr,arrTarget,arrTarget.includes(arr[i]));\n      if (arrTarget.includes(arr[i])){\n        ele.style.display = \"flex\";\n      } else {\n        ele.style.display = \"none\";\n      }\n    }\n}\n\n// Find Child Nodes\nfunction findChildEle(parent,search){\n  return parent.querySelector(search);\n}\n\n\n//# sourceURL=webpack://odinToDo/./src/search.js?");

/***/ }),

/***/ "./src/varGlobal.js":
/*!**************************!*\
  !*** ./src/varGlobal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrProject: () => (/* binding */ arrProject),\n/* harmony export */   arrToDo: () => (/* binding */ arrToDo),\n/* harmony export */   btnAddTodo: () => (/* binding */ btnAddTodo),\n/* harmony export */   dateToday: () => (/* binding */ dateToday),\n/* harmony export */   dateTodo: () => (/* binding */ dateTodo),\n/* harmony export */   formAdd: () => (/* binding */ formAdd),\n/* harmony export */   formSearch: () => (/* binding */ formSearch),\n/* harmony export */   todoAdd: () => (/* binding */ todoAdd)\n/* harmony export */ });\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ \"./src/date.js\");\n/* IMPORT */\n\n\n/* ARRAY */\n// Array of ToDos\nlet arrToDo = [];\n\n//Array of Projects\nlet arrProject = [];\n\n/* DATE */\nconst dateToday = new Date();\nconst dateTodo = document.getElementById(\"todoDate\");\n\n/* DOM */\nconst btnAddTodo = document.getElementById(\"btnNewToDo\");\nconst todoAdd = document.getElementById(\"todoAdd\");\nconst formAdd = document.getElementById(\"todoNew\");\nconst formSearch = document.getElementById(\"search\");\n\n/* FUNCTION Call */\n(0,_date_js__WEBPACK_IMPORTED_MODULE_0__.addFormDate)(dateTodo, dateToday, 365, 365);\n\n/* EXPORT */\n\n\n\n//# sourceURL=webpack://odinToDo/./src/varGlobal.js?");

/***/ }),

/***/ "../../../../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!***********************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Root Variables */\n:root{\n  --colorBlackTrue: #000;\n  --colorWhiteTrue: #FFF;\n\n  --colorBackgroundLight: #EDF0DA;\n  --colorPrimaryLight: #FF8360;\n  --colorSecondaryLight: #EFE5CE;\n\n  --colorBackgroundDark: #13262F;\n  --colorPrimaryDark: #840032;\n  --colorSecondaryDark: #1E222F;\n\n  --colorDark: var(--colorBackgroundDark);\n  --colorLight: var(--colorBackgroundLight);\n  --colorMode: var(--colorWhiteTrue);\n  --colorPrimary: var(--colorPrimaryLight);\n  --colorSecondary: var(--colorSecondaryLight);\n}\n\n/* Global Elements */\nbody\n, input\n, select\n, option\n, textarea{\n  background-color: var(--colorLight);\n  color: var(--colorDark);\n  font-family: Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\ninput\n, select\n, option\n, textarea{\n  background-color: var(--colorLight);\n  border: 1px solid var(--colorPrimary);\n  color: var(--colorDark);\n  font-size: 16px;\n  height: 32px;\n  padding: 6px;\n  width: auto;\n}\n\ntextarea{\n  height: 6vh;\n}\n\n/* Classes */\n.body{\n  display: flex;\n}\n\n.btn:hover{\n  background-color: var(--colorPrimary);\n  border: 1px solid var(--colorLight);\n  color: var(--colorLight);\n}\n\n.complete{\n  text-decoration: line-through;\n}\n\n.container{\n  margin: 1vh;\n  text-align: center;\n  width: 80vw;\n}\n\n.formAddTodo{\n  text-align: center;\n}\n\n.formBox{\n  width: 20vh;\n}\n\n.formEle{\n  margin-bottom: 1vh;\n}\n\n.logo:hover{\n  color: var(--colorDark);\n}\n\n.menuSide{\n  background-color: var(--colorSecondary);\n  height: 92vh;\n  margin: 0;\n  padding: 1vh;\n  text-align: right;\n  width: 18vw;\n}\n\n.nav{\n  align-items: center;\n  background-color: var(--colorPrimary);\n  color: var(--colorLight);\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 28px;\n  height: auto;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 1vh;\n  width: auto;\n}\n\n.todo{\n  background-color: var(--colorLight);\n  border: 1px solid var(--colorPrimary);\n}\n\n.todo:hover{\n  background-color: var(--colorSecondary);\n}\n\n.todoAdd{\n  align-items: center;\n  background-color: var(--colorSecondary);\n  border-radius: 50%;\n  bottom: 21px;\n  color: var(--colorPrimary);\n  display: flex;\n  font-size: 42px;\n  height: 50px;\n  justify-content: center;\n  position: fixed;\n  right: 21px;\n  width: 50px;\n  z-index: 999;\n}\n\n.todoAdd:hover{\n  background-color: var(--colorPrimary);\n  color: var(--colorSecondary);\n}\n\n.todoCore{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 1vh;\n  overflow: hidden;\n  padding: 1vh;\n  width: 100%\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odinToDo/./src/style.css?../../../../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../../../node_modules/css-loader/dist/runtime/api.js":
/*!***************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odinToDo/../../../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odinToDo/../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../../../../node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odinToDo/./src/style.css?");

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**************************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odinToDo/../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!******************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odinToDo/../../../../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!********************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odinToDo/../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!********************************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odinToDo/../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odinToDo/../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*******************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odinToDo/../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
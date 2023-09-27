/* IMPORT */
import{ getEle } from './alterDOM.js';

/* FUNCTION Define */
// Add element setAttribute
function addAttribute(element,attribute,value){
  element.setAttribute(attribute,value);
  return element;
}


// Add classes to an existing element
export function addEleClass(element,arr){
  for (let i = 0; i < arr.length; i++){
    element.classList.add(arr[i]);
  }
  return element
}

// Add text to an existing element
export function addEleText(element,text){
  element.textContent = text;
  return element
}

// Add a value attribute to an element
function addEleValue(element,value){
  addAttribute(element,"value",value);
  return element;
}


// Create a <br> element
export function createBr(){
    let ele = createEle("br");
    return ele;
}

// Create a new element
export function createEle(type){
  return document.createElement(type);
}

// Create a header element with text
export function addHeader(num,text){
  let ele = createEle(`h${num}`);
  addEleText(ele,text);
  return ele;
}

// Create an option element
export function addOption(value,text){
  let ele = createEle("option");
  addEleValue(ele,value);
  addEleText(ele,text);
  return ele;
}

// Remove all the children of an element
export function delEleChildren(parent){
  let ele = getEle(parent);
  while (ele.lastElementChild) {
    ele.removeChild(ele.lastElementChild);
  }
}

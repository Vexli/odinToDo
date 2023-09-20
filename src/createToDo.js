/* Import */
import { addId } from './alterToDo.js';

/* VARIABLE Define */
const idContainer = "test"

// ToDo DOM
export function todoDom(parent,variable){
  let eleParent = document.getElementById(parent);
  let ele = document.createElement("div");
  ele.textContent = variable.titel;
  ele.classList.add("todo");

  eleParent.appendChild(ele);
  addId(variable,ele,"todo");
  return ele;
}

// ToDo VAR
export function todoVar(titel) {
  return {
    titel: titel
  };
}

/* Import */
import { arrToDo } from './varGlobal.js';
import { addDate, addDesc, addId, addPrio, addProject, addStatus } from './alterToDo.js';

/* VARIABLE Define */
const idContainer = "container";

// Create Element
function createElement(parent,type){
  let eleParent = document.getElementById(parent);
  let ele = document.createElement(type);
  eleParent.prepend(ele);

  return ele;
}

// ToDo DOM
export function todoDom(parent,variable){
  let ele = createElement(parent,"div");
  ele.textContent = variable.titel;
  ele.classList.add("todo");

  addId(variable,ele,"todo");
  return ele;
}

// ToDo VAR
export function todoVar(titel) {
  return {
    titel: titel
  };
}

// ToDo Popup
export function createToDo(parent,titel,date,desc,prio,project){
    let responseTodo = todoVar(titel);

    todoDom(parent,responseTodo);
    addDate(responseTodo,date);
    addDesc(responseTodo,desc);
    addPrio(responseTodo,prio);
    addProject(responseTodo,project);
    addStatus(responseTodo,project);

    arrToDo.push(responseTodo);
}

/* Import */
import { arrToDo } from './varGlobal.js';
import { addEleAfter, addTitel, getEle } from './alterDOM.js';
import { addEleClass, addEleText } from './addElement.js';
import { addDate, addDesc, addCoreId, addId, addPrio, addProject, addStatus } from './alterToDo.js';

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
  addId(variable,ele);
  addEleClass(ele,["todo"]);

  let eleCore = createElement(ele.id,"div");
  addCoreId(eleCore,ele.id);
  addEleClass(eleCore,["todoCore"]);
  addEleAfter(ele,eleCore);
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

    let eleDom = getEle(responseTodo);

    addTitel(eleDom,titel);
    addDate(eleDom,date);
    addDesc(responseTodo,desc);
    addPrio(responseTodo,prio);
    addProject(responseTodo,project);
    addStatus(responseTodo,0);

    arrToDo.push(responseTodo);
}

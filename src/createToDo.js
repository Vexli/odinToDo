/* Import */
import arrToDo from './varGlobal.js';
import { addDate, addDesc, addId, addPrio, addProject } from './alterToDo.js';

/* VARIABLE Define */
const idContainer = "container";

// ToDo DOM
export function todoDom(parent,variable){
  let eleParent = document.getElementById(parent);
  let ele = document.createElement("div");
  ele.textContent = variable.titel;
  ele.classList.add("todo");

  eleParent.prepend(ele);
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
export function todoPopup(parent){
    let popTitel = prompt("What do you have to do?");
    let popDesc = prompt("You can elaborate the");
    let popProject = prompt("With which project does it go");
    let popPrio = prompt("What priority does it have?");
    let popDate = prompt("When must it be done by?");

    let responseTodo = todoVar(popTitel);
    todoDom(parent,responseTodo);
    addDesc(responseTodo,popDesc);
    addDate(responseTodo,popDate);
    addPrio(responseTodo,popPrio);
    addProject(responseTodo,popProject);

    arrToDo.push(responseTodo);

    console.log(arrToDo);

}

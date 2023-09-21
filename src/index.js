/* IMPORT */
import './style.css';
import arrToDo from './varGlobal.js';
import { modeDark } from './modeDark.js';
import { addEleAfter, addEleBefore, delToDo } from './alterDOM.js';
import { todoDom, todoPopup, todoVar } from './createToDo.js';
import { addDate, addDesc, addPrio, addProject, setAttribute } from './alterToDo.js';

/* VARIABLE Define */

/* FUNCTION Define */

/* FUNCTION Call */

/* Listener */
document.addEventListener("click", (e) => {
  if (e.target.id == "addTodo"){
    todoPopup("container");
  } else if (e.target.classList.contains("todo") == true){
    delToDo(arrToDo,e.target);
  } else if (e.target.id == "test"){
    modeDark();
  }
});

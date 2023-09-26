/* IMPORT */
import './style.css';

import { arrToDo
  , arrProject
  , dateToday
  , dateTodo
  , divAdd
  , formAdd
  , formSearch
} from './varGlobal.js';

import{
  arrSearch
  , searchDisplay
} from './search.js';

import{
  modeDark
} from './modeDark.js';

import{
  todoDom
  , createToDo
  , todoVar
} from './createToDo.js';

import{
  addEleAfter
  , addEleBefore
  , addPrjctName
  , delToDo
  , displayElement
  , getEle
  , getObj
  , todoExpand
} from './alterDOM.js';

import{
  addDate
  , addDesc
  , addPrio
  , addProject
  , setAttribute
} from './alterToDo.js';

/* VARIABLE Call */
formAdd.style.display = "none";
divAdd.style.display = "block";

/* FUNCTION Call */

/* Listener */
// General function listenenr
document.addEventListener("click", (e) =>{
  if (e.target.id == "addTodo"){
    displayElement(divAdd);
    displayElement(formAdd);
  }else if (e.target.classList.contains("todo") == true){
    todoExpand(arrToDo,e.target);
  }else if (e.target.id == "nav"){
    modeDark();
  }
});

//Listen for Side Menu Clicks
document.addEventListener("click", (e) =>{
  if (e.target.classList.contains("listToDo")){ // ToDo
    let resultSearch = arrSearch(arrToDo,"status",0);
    searchDisplay(arrToDo,resultSearch);
  }else if (e.target.classList.contains("listToDo")){ // Project
  }else if (e.target.classList.contains("listDone")){ // Done
    let resultSearch = arrSearch(arrToDo,"status",1);
    searchDisplay(arrToDo,resultSearch);
  }else if (e.target.classList.contains("listAll")){ // All
    let resultSearch = arrSearch(arrToDo,"all","");
    searchDisplay(arrToDo,resultSearch);
  }
});

// Listen for submission of new ToDo
formAdd.addEventListener("submit", function(event){
  event.preventDefault();
  createToDo("container", formAdd.elements.todoTitel.value, formAdd.elements.todoDate.value, formAdd.elements.todoDesc.value, formAdd.elements.todoPriority.value, formAdd.elements.todoProject.value);
  formAdd.style.display = "none";
  divAdd.style.display = "block";
});

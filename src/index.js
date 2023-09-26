/* IMPORT */
import './style.css';

import { arrToDo
  , arrProject
  , dateToday
  , dateTodo
  , btnAddTodo
  , todoAdd
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
  , prjctMenu
  , prjctSelect
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

/* FUNCTION Call */
modeDark();

/* Listener */
// General function listenenr
document.addEventListener("click", (e) =>{
  if (e.target === todoAdd){
    displayElement(formAdd);
  }else if (e.target.classList.contains("todo") == true){
    todoExpand(arrToDo,e.target);
  }else if (e.target.id == "nav"){
    modeDark();
  }
});

// Listen for Side Menu Clicks
document.addEventListener("click", (e) =>{
  if (e.target.classList.contains("listToDo")){ // Find all open ToDo
    let resultSearch = arrSearch(arrToDo,"status",0);
    searchDisplay(arrToDo,resultSearch);
  }else if (e.target.id === "addProject"){ // Add a new Project
    addPrjctName(arrProject);
    prjctMenu(arrProject,"listProject");
    prjctSelect(arrProject,"todoProject")
  }else if (e.target.classList.contains("project")){ // Find all ToDo off a Project
    let resultSearch = arrSearch(arrToDo,"project",e.target.textContent);
    searchDisplay(arrToDo,resultSearch);
  }else if (e.target.classList.contains("listDone")){ // Find all completed ToDo
    let resultSearch = arrSearch(arrToDo,"status",1);
    searchDisplay(arrToDo,resultSearch);
  }else if (e.target.classList.contains("listAll")){ // Find All ToDo, Open and Done
    let resultSearch = arrSearch(arrToDo,"all","");
    searchDisplay(arrToDo,resultSearch);
  }
});

// Listen for Buttons
document.addEventListener("click", (e) =>{
  if (e.target.classList.contains("btn")){
    e.preventDefault();
    if (e.target.id === "btnNewToDo"){ // Add new ToDo
      createToDo("container", formAdd.elements.todoTitel.value, formAdd.elements.todoDate.value, formAdd.elements.todoDesc.value, formAdd.elements.todoPriority.value, formAdd.elements.todoProject.value);
      formAdd.style.display = "none";
      console.log(arrToDo);
    }
  }
});

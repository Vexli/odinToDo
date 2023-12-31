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
  , addEleBr
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
  , addStatus
  , addPrio
  , addProject
  , setAttribute
} from './alterToDo.js';

import{ addEleClass } from './addElement.js'

/* VARIABLE Call */
formAdd.style.display = "none";

/* FUNCTION Call */
modeDark();

/* Listener */
// General function listenenr
document.addEventListener("click", (e) =>{
  if (e.target === todoAdd){ // Add new ToDo
    displayElement(formAdd);
  }else if (e.target.classList.contains("todo") == true){ // Change a ToDo from Open to Done
    // let obj = getObj(arrToDo,e.target);
    // addStatus(obj,1);
    //  addEleClass(e.target,["complete"]);
    todoExpand(arrToDo,e.target);
  }else if (e.target.id == "nav"){
    modeDark();
  }
});

// Listen for Side Menu Clicks
document.addEventListener("click", (e) =>{
  let element = e.target
  if (element.id === "addProject"){                       // Add a new Project
    addPrjctName(arrProject);
    prjctMenu(arrProject,"listProject");
    prjctSelect(arrProject,"todoProject")
  }else {
    let resultSearch = "";
    if (element.classList.contains("listToDo")){          // Find all open ToDo
      resultSearch = arrSearch(arrToDo,"status",0);
    }else if (element.classList.contains("project")){     // Find all ToDo off a Project
      resultSearch = arrSearch(arrToDo,"project",element.textContent);
    }else if (element.classList.contains("listDone")){    // Find all completed ToDo
      resultSearch = arrSearch(arrToDo,"status",1);
    }else if (element.classList.contains("listAll")){     // Find All ToDo, Open and Done
      resultSearch = arrSearch(arrToDo,"all","");
    }
    searchDisplay(arrToDo,resultSearch);
  }
});

// Listen for Buttons
document.addEventListener("click", (e) =>{
  if (e.target.classList.contains("btn")){
    e.preventDefault();
    if (e.target.id === "btnNewToDo"){                    // Add new ToDo
      let element = formAdd.elements;
      createToDo("container", element.todoTitel.value, element.todoDate.value, element.todoDesc.value, element.todoPriority.value, element.todoProject.value);
      formAdd.style.display = "none";
    }
  }
});

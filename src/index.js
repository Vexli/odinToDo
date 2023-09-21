/* IMPORT */
import './style.css';
import arrToDo from './varGlobal.js';
import { arrSearch } from './search.js';
import { addFormDate, cnvrtDateISO } from './date.js';
import { modeDark } from './modeDark.js';
import { todoDom, createToDo, todoVar } from './createToDo.js';
import { addEleAfter, addEleBefore, delToDo, displayElement, getEle } from './alterDOM.js';
import { addDate, addDesc, addPrio, addProject, setAttribute } from './alterToDo.js';

/* VARIABLE Define */
const dateToday = new Date();
const dateTodo = document.getElementById("todoDate");
const divAdd = document.getElementById("addTodo");
const formAdd = document.getElementById("todoNew");
const formSearch = document.getElementById("search");

/* VARIABLE Call */
formAdd.style.display = "none";
divAdd.style.display = "block";

/* FUNCTION Define */

/* FUNCTION Call */
addFormDate(dateTodo,dateToday,365,365);

/* Listener */
// General function listenenr
document.addEventListener("click", (e) => {
  if (e.target.id == "addTodo"){
    displayElement(divAdd);
    displayElement(formAdd);
  } else if (e.target.classList.contains("todo") == true){
  } else if (e.target.id == "nav"){
    modeDark();
  }
});

// Listen for submission of search
formSearch.addEventListener("submit", function(event){
  event.preventDefault();
  let searchAttribute = formSearch.elements.attribute.value;
  let searchValue = formSearch.elements.value.value;
  arrSearch(arrToDo,searchAttribute,searchValue);
});

// Listen for submission of new ToDo
formAdd.addEventListener("submit", function(event){
  event.preventDefault();
  createToDo("container",formAdd.elements.todoTitel.value,formAdd.elements.todoDate.value,formAdd.elements.todoDesc.value,formAdd.elements.todoPriority.value,formAdd.elements.todoProject.value)
  formAdd.style.display = "none";
  divAdd.style.display = "block";
});

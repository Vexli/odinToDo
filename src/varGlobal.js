/* IMPORT */
import{
  addFormDate
  , cnvrtDateISO
} from './date.js';

/* ARRAY */
// Array of ToDos
let arrToDo = [];

//Array of Projects
let arrProject = [];

/* DATE */
const dateToday = new Date();
const dateTodo = document.getElementById("todoDate");

/* DOM */
const btnAddTodo = document.getElementById("btnNewToDo");
const todoAdd = document.getElementById("todoAdd");
const formAdd = document.getElementById("todoNew");
const formSearch = document.getElementById("search");

/* FUNCTION Call */
addFormDate(dateTodo, dateToday, 365, 365);

/* EXPORT */
export { arrToDo
  , arrProject
  , dateToday
  , dateTodo
  , todoAdd
  , btnAddTodo
  , formAdd
  , formSearch
};

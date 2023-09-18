/* IMPORT */
import { todoDom, todoVar } from './createToDo.js';
import { setAttribute } from './alterToDo.js';

/* VARIABLE Define */

/* FUNCTION Define */

/* FUNCTION Call */
let testVar = todoVar("job");
console.log(testVar);
let testVar2 = todoVar("test");
setAttribute(testVar,"priority",2)
console.log(testVar);
console.log(testVar2);
todoDom("test",testVar);
todoDom("test",testVar2);

/* Listener */
document.addEventListener("click", (e) => {
  if (e.target.id == "addTodo"){
    console.log("success");
    // Create To Do Pop up
  }
});

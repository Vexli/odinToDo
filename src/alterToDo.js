/* Import */
import { createCount } from './constructor.js';
import { addDateDom, getEle } from './alterDOM.js';

/* VARIABLE Define */
let cntId = createCount();
const rgxDateIso = /^(?!.*-(00|0[1-9])-00)\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

/* FUNCTION Define */
// Add Attribute (VAR)
export function setAttribute(todo,attribute,value){
  console.log(todo,attribute,value);
  todo[attribute] = value;
}

// Add Date
export function addDate(variable,date){
  if (rgxDateIso.test(date) === true){
    setAttribute(variable,"date",date);
    addDateDom(variable,date);
  } else{
    return "Invalid Date";
  }
}

// Add Description
export function addDesc(variable,text){
  setAttribute(variable,"desc",text);
}

// Add id
export function addId(variable,element,type){
  let domId = createCount();
  element.setAttribute("id",domId);
  variable.id = domId;
}

// Add Priority
export function addPrio(variable,level){
  let ele = getEle(variable);
  ele.classList.add(`prio-${level}`);
  setAttribute(variable,"prio",level);
}

// Add Project
export function addProject(variable,name){
  setAttribute(variable,"project",name);
}

export function addStatus(variable,status){
  setAttribute(variable,"status",status);
}

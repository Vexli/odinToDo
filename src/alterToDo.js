/* Import */
import { createCount } from './constructor.js';

/* VARIABLE Define */
let cntId = createCount();

// Add DOM id
export function addId(name,type){
  let domId = `${type}-${createCount()}`
  name.setAttribute("id",domId);
}

// Add VAR Attribute
export function setAttribute(todo,attribute,value){
  todo[attribute] = value;
}

/* IMPORT */
import {
  addEleClass
  , addHeader
  , addOption
  , delEleChildren
} from './addElement.js'

// Get DOM from Variable
export function getEle(variable){
  if (typeof variable === 'object'){
    return document.getElementById(variable.id);
  }else{
    return document.getElementById(variable);
  }
}

// Get Object from Element
export function getObj(array,element){
  for (let i = 0; i < array.length; i++){
    if (array[i].id == element.id){
      return array[i];
    }
  }
}

// Add Date to the DOM
export function addDateDom(element,date){
  let ele = document.createElement("div");
  ele.innerText = date;
  addEleAfter(element,ele);
}

// Add element at bottom of parent
export function addEleAfter(parent,child){
  let ele = getEle(parent);
  ele.append(child);
}

// Add element at top of parent
export function addEleBefore(parent,child){
  let ele = getEle(parent);
  ele.prepend(child);
}

// Delete an element from the DOM and Array
export function delToDo(arr,variable){
  let id = variable.id;
  let ele = getEle(variable);
  ele.parentNode.removeChild(ele);

  let index = arr.findIndex(obj => obj.id === id);
  let complete = arr.splice(index,1);
}

// Display Add ToDo Form
export function displayElement(element){
  if (element.style.display === 'none'){
    element.style.display = 'block';
  } else{
    element.style.display = 'none';
  }
}

// Expand ToDo Element
export function todoExpand(arr,element){
  let obj = getObj(arr,element);
  addEleAfter(element,obj.desc);
}

// Add Projects to List
export function addPrjctName(arr){
  let newProject = prompt("Please add a new Project");
  arr.push(newProject);
}

// Display Projects in Menu
export function prjctMenu(arr,parent){
  delEleChildren(parent);
  for (let i = 0; i < arr.length; i++) {
    let ele = addHeader(3,arr[i]);
    addEleClass(ele,["project"])
    addEleAfter(parent,ele);
  }
}

export function prjctSelect(arr,parent){
  delEleChildren(parent);
  for (let i = 0; i < arr.length; i++) {
    let ele = addOption(arr[i],arr[i]);
    addEleAfter(parent,ele);
  }
}

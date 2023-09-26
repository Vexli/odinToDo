// Get DOM from Variable
export function getEle(variable){
  return document.getElementById(variable.id);
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
  console.log(arr);

  let index = arr.findIndex(obj => obj.id === id);
  let complete = arr.splice(index,1);

  console.log(arr);
}

// Display Add ToDo Form
export function displayElement(element){
  console.log(element.style.display);
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

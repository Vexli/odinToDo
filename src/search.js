/* IMPORT */
import { getEle } from './alterDOM.js';

// Search through array
export function arrSearch(arr,attribute,value){
  let arrResult = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i][attribute] == value){
      console.log(arr[i][attribute],value);
      arrResult.push(arr[i]);
      console.log(arrResult);
    }
  }
  return arrResult;
}

// Show / Hide Blocks
export function searchDisplay(arr,arrTarget){
    for (let i = 0; i < arr.length; i++) {
      let ele = getEle(arr[i]);
      console.log(arr,arrTarget,arrTarget.includes(arr[i]));
      if (arrTarget.includes(arr[i])){
        ele.style.display = "flex";
      } else {
        ele.style.display = "none";
      }
    }
}

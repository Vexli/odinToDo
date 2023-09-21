// Search through array
export function arrSearch(arr,attribute,value){
  let arrResult = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i][attribute] == value){
      console.log(arr[i][attribute],value)
      arrResult.push([i,arr[i].id]);
      console.log(arrResult);
    }
  }
  return arrResult
}

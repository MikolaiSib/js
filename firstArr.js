function first(arr=[], n=1) {
  if(arr.length<n){n=arr.length}
  let newArr = []
  if(arr.length===0){return arr}
  for(let i=0; i<n; i++){
    newArr.push(arr[i])
  }
  return newArr
  // return arr;
}

var moveZeros = function (arr) {
  let newArr1=[]
  let newArr2=[]
  for(let i=0; i<arr.length; i++){
    if(arr[i]===0){newArr2.push(arr[i])}
    else{newArr1.push(arr[i])}
  }
  return [...newArr1, ...newArr2]
  // TODO: Program me
}

function sortNumber(a,b){
   return a - b;
}

function highAndLow(numbers){
  let arr = numbers.split(' ')
  let arr1 =[]
  for(let i = 0; i<arr.length; i++) {
    let n = Number(arr[i])
    arr1.push(n)
    }
  let newArr= arr1.sort(sortNumber)
  let str = ([newArr[(arr.length)-1],newArr[0],]).join(' ')
  return str
  // ...
}

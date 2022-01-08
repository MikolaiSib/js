function sortNumber(a,b){
   return a - b;
}

function descendingOrder(n){
  let str = n.toString()
  let arr =str.split('')
    let arr1 =[]
  for(let i = 0; i<arr.length; i++) {
    let num = Number(arr[i])
    arr1.push(num)
    }
  let newArr= (arr1.sort(sortNumber))
  let a = newArr.reverse()
  let numbers = Number(newArr.join(''))
  return numbers
  //...
}

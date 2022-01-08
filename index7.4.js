function squareDigits(num){
  let arr2 = []
  
  let arr = num.toString().split('');
  let len = (arr.length)
  for (let i=0; i<len; i++) {
    
    arr2.push(+arr[i]*arr[i])
  }
  let res = arr2.join('')
  return +res;
}

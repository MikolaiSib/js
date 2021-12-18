function pipeFix(numbers){
  let arr=[]
  let one = numbers[0]
  let last = numbers.length-1
  for (let i=one; i<numbers[last]+1; i++){
    arr.push(i)
  }
  return arr

}
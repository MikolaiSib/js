function findShort(s){
  let arr=s.split(' ')
  let len = 999
  for(let i = 0; i<arr.length; i++){
    if(arr[i].length<len){
      len=arr[i].length
    }
  }
  return len
}

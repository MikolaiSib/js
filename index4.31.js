function doubleChar(str) {
  let s =''
  let l = str.length
  
  for (let i=0; i<l; i++){
    s +=str[i]+str[i]
  }
  return s
}
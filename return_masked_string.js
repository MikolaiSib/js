// return masked string
function maskify(cc) {
  let res = ''
  if (cc.length<5){
    res = cc
  } else {
    for(let i = 0; cc.length-4>i; i++){
      res+='#'
    }
    res += cc[cc.length-4]+cc[cc.length-3]+cc[cc.length-2]+cc[cc.length-1]
  }
  return res
}

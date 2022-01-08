function getMiddle(s){
  let len = s.length
  if (len ===1){return s}
  else {
    if ((len)%2) {
      return s[(Math.floor(len/2))]
    }
    else {return s[(Math.floor(len/2))-1]+s[(Math.floor(len/2))]
      
    }
  }
  //Code goes here!

}

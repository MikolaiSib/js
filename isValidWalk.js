function isValidWalk(walk) {
  if(walk.length<10||walk.length>11){return false}
  let countNS = 0
  let countWE = 0
  for(let i = 0; i<walk.length; i++){
    if(walk[i]==='n'){countNS++ }
    if(walk[i]==='s'){countNS--}
    if(walk[i]==='w'){countWE++}
    if(walk[i]==='e'){countWE--}
  }
  if(countNS === 0 && countWE === 0){return true}
  else{return false}
  //insert brilliant code here
}

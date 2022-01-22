function findOutlier(integers){
  let chet = []
  let nechet = []
  for(let i = 0; i<integers.length; i++){
    if(integers[i]%2){nechet.push(integers[i])}
    else{chet.push(integers[i])}
  }
  if (chet.length>nechet.length){return nechet[0]}
  if (chet.length<nechet.length){return chet[0]}
  //your code here
}

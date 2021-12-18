function correct(string){
  let str=''
  for (let i = 0; i<string.length; i++) {
    let j = string[i]
    if (j=='5')  {j='S'}
    if (j=='0')  {j='O'}
    if (j=='1')  {j='I'}
    str += j
  }
  return str
	// your code here
}
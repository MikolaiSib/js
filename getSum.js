function getSum( a,b ) {
  if (a===b){return a}
  if (b<a) {[a,b]=[b,a]}
  let sum=0
  for (let i=a; i<=b; i++){
    sum+=i
  }
  return sum
   //Good luck!
}

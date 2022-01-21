function is_Natural(n){
     if (typeof n !== 'number') 
          return 'Not a number'; 
   return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
      }

function solution(number){
  let sum = 0
  for (let i = 1; i<number; i++){
    if (is_Natural(i)){
      if(!(i%3)||!(i%5)){
        sum+=i}
    }
  }  
  return sum   
}

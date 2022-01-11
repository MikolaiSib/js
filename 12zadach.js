for (let i = 1; i<=100; i++){console.log(i)}

for (let i = 100; i>=1; i--){console.log(i)}

for (let i = 1; i<=100; i++){if(!(i%2)){console.log(i)}}

for (let i = 2; i<=100; i+=2){console.log(i)}

let arr = []
for (let i = 1; i<=10; i++){arr.push('x')} 
console.log(arr)

let arr = []
for (let i = 1; i<=10; i++){arr.push(i)} 
console.log(arr)

let arr = []
for (let i = 1; i<=10; i++){arr.push(Math.floor((1/i)*100)/100)} 
console.log(arr)

let arr = [];
for (let i = 0; i < 10; i++) {arr.push(Math.random().toFixed(2));}
console.log(arr);

arr = [];
for (let i = 0; i < 10; i++) {arr.push(Math.floor(Math.random() * 10) + 1);}
console.log(arr);

for (let i = 0; i<arr.length; i++){if(arr[i]>0&arr[i]<10){console.log(arr[i])}}

for (let i = 0; i<arr.length; i++) {
	if(arr[i]===5){
    		console.log('Yes')
    		break}}


let res = 0
for (let i=0; i<arr.length; i++) {
  let a = arr[i])
  res = res+a
}
  return res
}
function getEvenNumbers(numbersArray){
  let arr = numbersArray.filter(function(number) {
  return !(number % 2);
});
  return arr
  // filter out the odd numbers
}
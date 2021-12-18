function expressionMatter(a, b, c) {
  let s1 = a*b*c
  let s2 = a+b+c
  let s3 = a*(b+c)
  let s4 = (a+b)*c
  let s5 = a*b+c
  let s6 = a+b*c
  let myMax =Math.max(s1,s2,s3,s4,s5,s6);
  return(myMax)
}
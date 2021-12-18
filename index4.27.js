function findDifference(a, b) {
  let prod = (a[0]*a[1]*a[2]-b[0]*b[1]*b[2])
  if (prod<0){return -prod}
  return prod
}
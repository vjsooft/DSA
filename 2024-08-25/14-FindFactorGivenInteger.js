// Q:- How to find factor of a given integer in javascript
function indFactor(num) {
  let factorNumber = [];
  let notFactor = 'not factor number'
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      factorNumber.push(i);
    } else {
        return notFactor
    }
  }
  return factorNumber;
}
console.log("--", indFactor(12));

// Exp:- 5!= 5*4*3*2*1
function fictorialNo(num) {
  let fictNo = 1;
  if (num < 0) {
    console.log(`${num} This no is not fictorial`);
  } else {
      for(let i = 1; i <= num; i++) {
        console.log(`${num} This is valid fictorial`);
        fictNo = fictNo * i
    }
  }
  return fictNo
}
console.log("=====13==>", fictorialNo(7));

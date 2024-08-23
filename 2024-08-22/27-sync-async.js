
let a = 10;
console.log('==A===>', a);
function sum(){
    let b = 2;
    setTimeout(()=>{
        console.log('==B===>', b);
    }, 0)
}
sum();

const c = 5;
console.log('==C====>', c);
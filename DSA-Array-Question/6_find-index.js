let arr = [5,6,9,4]
let i = 0;
// Output Res = 10

function findIndex(arg,  num){
    let countVal = arg[i];
    let remaningVal = num - countVal  
    if(arg.indexOf(remaningVal)){
        console.log('==>', i, arg.indexOf(remaningVal));
        return false
    }else{
        i++
        findIndex(arg, num)
    }
}
findIndex(arr, 10)
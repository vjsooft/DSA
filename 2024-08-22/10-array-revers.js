/*
For loop has three part
first is initilization / start
secont is condation / stop
third is step / updation(Inc/Dec)
*/
const num = [2,5,9,4,8,6];
let revNum = []
for(let i = num.length -1; i>=0; i--){
    revNum.push(num[i])
}

num.reverse()
console.log("========>", revNum)
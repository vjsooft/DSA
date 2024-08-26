/*
Steep 1:- Convert to Array
Steep 2:- then revers string
Steep 3:- and then convert to string
*/

let str = 'vikas jain'

// const reversStr=(str)=>{
//     console.log(str.split("").reverse().join(''));
// }

const reversStr=(str)=>{
    // Option 1
    // console.log(str.split("").reverse().join(''));

    // Option 2
    let Output = []
    for (let i = str.length -1; i >= 0; i--) {
        Output.push(str[i])
    }
    return Output.join('')
}
console.log('=>', reversStr(str));


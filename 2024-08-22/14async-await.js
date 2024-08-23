/*
async makes a function return a Promise
await makes a function wait for a Promise
Exp:-
*/
// Exp. 1 without error hendal
// async function getData() {
//     let data = await fetch('https://jsonplaceholder.typicode.com/users');
//     let finalData = await data.json()
//     console.log("=======>", finalData);
// }
// getData()


// Exp. 2 with error handle

// async function getData2() {
//     try {
//       const url = 'https://jsonplaceholder.typicode.com/users';
//        let data= await fetch(url)
//        if(data.status === 200){
//         console.log("======> check status");
//            let finalData = await data.json()
//            console.log("======>", finalData);
//        }
//     } catch (error) {
//         console.log("get error", error);
//     }
// }
// getData2()

console.log(a,b,c);
function one(){
    a=1
    function two(){
        b=2
        function three(){
            c=3
            console.log(a,b,c);
        }
        three()
    }
    two()
}
one()


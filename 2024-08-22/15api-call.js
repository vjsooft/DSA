const headers ={
'Content-Type' : 'Text/xml',
}
fetch('https://jsonplaceholder.typicode.com/users', {headers})
.then((resolve, reject)=>{
    return resolve.json();
}).then((data)=>{
        console.log("=========>", data);
})
.catch((error)=>{
       console.log(error);
})
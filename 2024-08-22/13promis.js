let myPromis = new Promise((resolve, reject)=>{
    let error = false
    if(!error){
        resolve();
    }else{
        reject()
    }
})
myPromis.then(()=>{
    console.log("Promise is fullfill ");
}).catch((error)=>{
    console.log("So error", error);
}).finally(()=>{
    console.log("Promis is resolve and reject based on time");
})
// fetch('https://something.com').then().catch().finally()
const promiseOne=new Promise(function(resolve, reject)
 {
    //  Do an async task
    //DB Calls, cryptography

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
    

})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();

    }, 1000)
}).then(function(){
    console.log("Async 2 is resolved")
})

const promiseThree=new Promise(function(resolve, reject){
    //20:52
})

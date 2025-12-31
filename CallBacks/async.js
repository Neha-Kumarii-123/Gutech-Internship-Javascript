function getData(dataId){
   return new Promise((resolve, reject)=>{
    setTimeout(() =>{
    console.log("data", dataId);
    resolve("success");
}, 2000);
});
}

//Async-await
async function getAllData() {
    console.log("getting data1....")
    await getData(1);
     console.log("getting data2....")
    await getData(2);
     console.log("getting data3....")
    await getData(3);
}


(async function () {
    console.log("getting data1....")
    await getData(1);
     console.log("getting data2....")
    await getData(2);
     console.log("getting data3....")
    await getData(3);
})();
//Callback hell
// getData(1, () =>{
//     console.log("Gettind data2 ....");
//     getData(2, () =>{
//             console.log("Gettind data3 ....");
//         getData(3, () =>{
//                 console.log("Gettind data4 ....");

//             getData(4);
//         });
//     });

// });

 // Promise CHAIN
// console.log("Gettind data1 ....");
// getData(1)
// .then((res) =>{
//     console.log("Gettind data2 ....");
//     return getData(2);
//     })
//     .then((res) =>{
//     console.log("Gettind data3 ....");

//         return getData(3);
//     })
//     .then((res) =>{
//     console.log(res);
//     })


//Async-await Part1
// function api(){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() =>{
//              console.log("weather data");
//          resolve(200);      //200 represents successfull API Call
//         }, 2000)
//     });
// }

// async function getWeatherData() {
//     await api();    //1st
//     await api();    //2nd

// }

// async function hello(){
//     console.log('Hello!');
// }
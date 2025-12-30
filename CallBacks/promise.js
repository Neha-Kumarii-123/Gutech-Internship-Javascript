
// // part 4
// function asyncFunction1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//                 console.log(" data1");
//                 resolve("Success");
//         }, 4000);
//     });
// }


// function asyncFunction2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//                 console.log(" data2");
//                 resolve("Success");
//         }, 4000);
//     });
// }

// console.log("Fetching data1...");
// asyncFunction1().then((res) =>{
//     // console.log(res);
//     console.log("Fetching data2...");
//     asyncFunction2().then((res) =>{});

// });

//Part 3

// const getPromise =() =>{
// return new Promise((resolve, reject) =>{
// console.log("I am a promise");
// // reject("network error");
//  resolve("Success");


// });
// };

// let promise=getPromise();
// promise.then((res) =>{
//     console.log("Promise fulfilled", res);
// });


// promise.catch((err)=>{
//     console.log("rejected", err);
// })


//Part 1
// let promise = new Promise((resolve, reject) =>{
// console.log("I am a promise");
// // resolve("Success");
// reject("some error occurred");

// })


// //Part 2
function getData(dataId){

   return new Promise((resolve, reject)=>{
    setTimeout(() =>{
    console.log("data", dataId);
    resolve("success");
}, 2000);

});
}

// // Promise CHAIN
console.log("Gettind data1 ....");
getData(1)
.then((res) =>{
    console.log("Gettind data2 ....");
    return getData(2);
    })
    .then((res) =>{
    console.log("Gettind data3 ....");

        return getData(3);
    })
    .then((res) =>{
    console.log(res);
    })

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

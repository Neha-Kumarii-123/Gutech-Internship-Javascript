console.log("one");
console.log("two");


setTimeout(() => {
        console.log("Hello");
}, 
    4000) //timeout;
    console.log("three");
        console.log("Four");

//Part 2 
function sum(a,b){
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a,b);

}

calculator(1,2, (a,b) =>{
        console.log(a+b);

});

//Part 3 
const hello = () =>{
    console.log("Hello");
}

setTimeout(hello, 3000);


//nesting
let age=19;
if(age>=18){
    if(age>=60){
        console.log("senior");
    }else{
        console.log("middle");
    }

}else{

}

//Nested loops
for(let i=0; i<5; i++){
    let str="";
    for(let j=0; j<5; j++){
        str=str+j;
    }
            console.log(i, str);

}


//CallBack Hells
function getData(dataId){
    console.log("data", dataId);

}

function getData(dataId, getNextData){
setTimeout(() =>{
    console.log("data", dataId);
    if(getNextData){
            getNextData();


    }
}, 2000);
}

//Call
getData(1, () =>{
    console.log("Gettind data2 ....");
    getData(2, () =>{
            console.log("Gettind data3 ....");
        getData(3, () =>{
                console.log("Gettind data4 ....");

            getData(4);
        });
    });

});
// getData(2);
// getData(3);


// data1
// data2
// data3




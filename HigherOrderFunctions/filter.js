const arr=[5, 1, 3, 2, 6];

//Filter Odd Values

function isOdd(x){
    return x % 2;

}

const output=arr.filter(isOdd);

console.log(output);


//Filter Even Values

function isEven(x){
    return x % 2===0;

}

const output1=arr.filter(isEven);

console.log(output1);


//Filter Values Greater Than 4

function GreaterThan4(x){
    return x > 4;

}

const output2=arr.filter(GreaterThan4);

console.log(output2);

//Filter Values Greater Than 2


// const output3=arr.filter(function GreaterThan2(x){
//     return x > 2;

// }
// );

const output3=arr.filter((x) => x > 2);

console.log(output3);



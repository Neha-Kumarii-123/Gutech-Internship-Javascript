const arr = [5, 1, 3, 2, 6];


//Reduce is used to find out sum or max

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}


console.log(findSum(arr));

const output = arr.reduce(function (acc, curr) {     //acc: accumulator      curr: current
    acc = acc + curr;
    return acc;
    //  here second argument 0 is the initial value of acc just like the initial value of sum is 0 in above function and here acc is doing the same work as some in above one 
}, 0)

console.log(output);



function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const output2=arr.reduce(function (max , curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0 );

console.log(output2)
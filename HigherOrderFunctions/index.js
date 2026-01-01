
const radius=[3,1,2,4];     //Array having radius of 4 circles

//Function Of Area
const area=function(radius){
    return Math.PI*radius*radius;
}


//Function Of Circumference Logic
const Circumference=function(radius){
    return 2*Math.PI*radius;
}

//Function including Diamater Logic
const diameter=function(radius){
    return 2*radius;
}

//Function to calculate Area, Circumference and Diamater of An Array named "radius"
Array.prototype.calculate =function ( logic){
    const output=[];
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.map(area));


console.log(radius.calculate( area));
// console.log(calculate(radius, Circumference));
// console.log(calculate(radius, diameter));






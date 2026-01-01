//High Order Functions In JavaScript
function add (a,b, cb){     //cb stands for callbacks
let result= a+b;
cb(result);

return () =>console.log(result);
}

// function showResult(result){
//     console.log(result);
// }

// add(2,4, showResult);
// add(2,4, val =>console.log(val));
let resultFunction=add(2,4, () =>{});

// add(400, 10,(res) =>console.log(res));
add(400, 10, () => {});
resultFunction();
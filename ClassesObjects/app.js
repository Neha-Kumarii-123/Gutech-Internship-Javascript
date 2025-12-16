// //Creating An Object
// const student={
//     fullName:"Neha Soni",
//     marks: 98,
//     printMarks: function(){
//         console.log("marks= ", this.marks); //student.marks
//     }



// }

const employee={

    calcTax(){
        console.log("tax rate is 13%");
    },
    
};

const NehaMadhu={
    salary: 40000,
    calcTax(){
        console.log("tax rate is 20%");
    },
};

// const Shushi={
//     salary: 40000,
// };

// const Aruna={
//     salary: 40000,
// };

// const Bebu ={
//     salary: 40000,
// };
NehaMadhu.__proto__=employee;
// Shushi.__proto__=employee;
// Aruna.__proto__=employee;
// Bebu.__proto__=employee;



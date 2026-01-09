//var -> Scope - Function
//let -> Scope - BLock
//Const -> Scope - Block


//Part 1
// function sayHello(){
//     for (let i=0;i<5;i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// sayHello();

//Part - 2
// const x=1;
// x=2;     //Can't Reassign a constant

const person ={
    name: 'Neha',
    Walk(){},
    talk(){}
};

person.talk();
person.name ='';
const targetMember='name';
person[targetMember.valueOf]='John';


//Industry Rule - Avoid Var 
var userName = "Neha";
var userName = "Ayesha"; //  ❌ allowed (problematic)
userName = "Sara";       // ❌ allowed

console.log(userName); // Sara

//Define an Object 'Student'
const student = {
  name: "Neha",
  age: 21,
  course: "Software Engineering",
  comapny: "Gutech International"
};

// 2️ Access properties using dot notation
console.log("Using dot notation:");
console.log("Name:", student.name);          // Neha
console.log("Age:", student.age);            // 21
console.log("University:", student.comapny); // Gutech International

// 3️ Access properties using bracket notation
console.log("\nUsing bracket notation:");
console.log("Course:", student["course"]);   // Software Engineering

// 4️ Dynamic property access with a variable
let key = "course";
console.log("\nUsing dynamic key:");
console.log("Dynamic access:", student[key]); // Software Engineering

// 5️⃣ Real-world style: change values
student.age = 23; // updating value
student["company"] = "Arbisoft "; // updating using bracket


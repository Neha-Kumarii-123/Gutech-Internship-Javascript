// const person ={
//     firstName: "Neha",
//     lastName: "Soni",
//     id: 30,
//     fullName(){
//         return this.firstName +" "+this.lastName;

//     }


// };
// person.fullName();

const user={
    name:"Neha",
    sayHi(){
        console.log(this.name);
    }
};
user.sayHi();
console.log(this);
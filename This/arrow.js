const user ={
    username:"Neha",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }

}

user.welcomeMessage();
user.username="Ashiii";
user.welcomeMessage();

console.log(this);

function Coffee(){
    let username="Neha Soni"
    console.log(this.username);
}
Coffee();



const coffee=function(){
     let username="Neha Soni"
  console.log(this.username);
}


// const coffee=() =>{
//      let username="Neha Soni"
//   console.log(this);
// }
// coffee();

// //Arrow Function


// const addTwo=(num1, num2)=>{

//     return num1+num2;

// }

//Implicit return
const addTwo=(num1, num2)=>  num1+num2;

// const addTwo=(num1, num2)=>  (num1+num2);

// const addTwo=(num1, num2)=> ( {username: "NehaSoni"})





console.log(addTwo(34,45))

const myArray=[2,3,4,5,6]

// myArray.forEach(()=>)
const users =[
    {firstName:"neha", lastName: "soni", age:26},
    {firstName:"madhu", lastName: "khatri", age:75},
    {firstName:"shushi", lastName: "Rai", age:50},
    {firstName:"Aruna", lastName: "Sanjhira", age:26},
]

//Reduce Function
//List of full names
//["neha soni", "madhu Khatri", "shushi Rai", "Aruna Sanjhira"]

const output = users.map( x => x.firstName + " " + x.lastName);
console.log(output);

// { 26: 2, 75:1, 50:1,  }

const output2 = users.reduce(function(acc, curr){

    if(acc[curr.age]){
        acc[curr.age]= ++acc[curr.age];

    }else{
        acc[curr.age] =1;
    }

    return acc;
}, {})

console.log(output2);

//Tricky Filter Function & Chaining map filter and reduce

// ["neha, aruna"]
const output3=users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output3);
let name={
    firstName: "Neha",
    lastName: "Soni",
}

let printFullName = function(hometown, state){
        console.log(this.firstName+" "+this.lastName +" from "+hometown+ " , "+state); 
    }
printFullName.call(name, "Pithoro", "Sindh");

let name2 ={
    firstName: "Ashii",
    lastName: "Soni",
}

//Function Borrowing
printFullName.call(name2, "Khipro", "Sindh");

//Apply Method
printFullName.call(name2, ["Khipro", "Sindh"]);

//Bind Method 
let printMyName=printFullName.bind(name2, "Khipro", "Sindh");
console.log(printMyName);
printMyName();





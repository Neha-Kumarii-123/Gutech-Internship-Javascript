class Person {
    constructor (name){
        // console.log("Enter parent constructor");
        this.species="Homo Sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");

    }

    //   sleep(){
    //     console.log("sleep");
        
    // }

    // work(){
    //     console.log("do nothing");
    // }
}

class Engineer extends Person{
 
    constructor (name){
        //   console.log("Enter child constructor");
        super(name); //To invoke parent class constructor
        // this.branch=branch;
        //   console.log("exit child constructor");

    }
    work (){
        eat();
        console.log("solve problems, build something 2 ");
    }
}

// class Doctor extends Person{
//     work (){
//         console.log("solve problems, build something ");
//     }
// }

// let neha =new Engineer();
let neha= new Engineer("Neha Soni");

//45:11
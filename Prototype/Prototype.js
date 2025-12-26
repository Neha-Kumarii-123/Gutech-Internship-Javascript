// let myName="Neha     ";
// let myChannel="chai     ";

// console.log(myName.trueLength());


let myHeros=["thor", "spiderman"];


let heroPower={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`)
    }

}

Object.prototype.neha=function(){
    console.log("neha is present in all objects ");
}

Array.prototype.heyNeha= function(){
    console.log(`Hitesh says hello`);
}
// heroPower.neha();

// myHeros.neha();
// myHeros.heyNeha();
// heroPower.heyNeha();

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"

}
const Teacher={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername= "coffeeAurMaggi    "
String.prototype.trueLength = function(){
     console.log(`${this}`)
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
"neha".trueLength()
"iceTea".trueLength()

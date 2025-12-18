// const user={
//     firstName:'Neha',
//     lastName: 'Soni',
//     age:21,
// }

//  function getAgeYear(age){
//     return new Date().getFullYear() - user.age;

// }


// const user1={
//     firstName:'Neha',
//     lastName: 'Soni',
//     age:21,


// getAgeYear: function (){
//     return new Date().getFullYear() - user1.age;

// }
// }
// const user2={
//     firstName:'Ashu',
//     lastName: 'Soni',
//     age:22,


// getAgeYear(){
//     return new Date().getFullYear() - user2.age;

// }
// }

function createUser(firstName, lastName, age){
    const user ={
        firstName,
    lastName,
    age,
    getAgeYear(){
    return new Date().getFullYear() - user.age;

},

    }

    return user;
}

const user1= createUser('Kartik', 'Mishra', 32)
const user2= createUser('Kartik', 'Mishra', 32)

const arr1=[1,2]
const arr2=[3,4]

